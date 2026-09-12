import test from 'node:test';
import assert from 'node:assert/strict';
import { summarizeComments } from '../app/public-comment-model.ts';

test('stance is exclusive while themes count each comment once and use the full sample denominator', () => {
  const result = summarizeComments([
    { id: '1', stance: 'oppose', themes: ['cost', 'talent'] },
    { id: '2', stance: 'support', themes: ['workers', 'workers'] },
    { id: '3', stance: 'unclear', themes: [] },
    { id: '4', stance: 'oppose', themes: ['cost'] },
  ]);
  assert.equal(result.total, 4);
  assert.equal(result.stances.find((x) => x.id === 'oppose').count, 2);
  assert.equal(
    result.stances.reduce((sum, x) => sum + x.percent, 0),
    100,
  );
  assert.equal(result.themes.find((x) => x.id === 'workers').count, 1);
  assert.equal(result.themes.find((x) => x.id === 'cost').percent, 50);
});

test('empty samples do not produce NaN and duplicate comment IDs are rejected', () => {
  assert.equal(summarizeComments([]).total, 0);
  assert.ok(summarizeComments([]).stances.every((x) => x.percent === 0));
  assert.throws(
    () =>
      summarizeComments([
        { id: '1', stance: 'oppose', themes: [] },
        { id: '1', stance: 'support', themes: [] },
      ]),
    /duplicate/i,
  );
});

test('published snapshot contains exactly the reproducible 100-record sample from a complete unique frame', async () => {
  const { createHash } = await import('node:crypto');
  const { readFile } = await import('node:fs/promises');
  const { publicCommentSamples } =
    await import('../app/public-comment-data.ts');
  for (const sample of Object.values(publicCommentSamples)) {
    const manifest = JSON.parse(
      await readFile(
        new URL(`../public${sample.manifestUrl}`, import.meta.url),
        'utf8',
      ),
    );
    assert.equal(sample.status, 'reviewed');
    assert.equal(sample.sampleSize, 100);
    assert.equal(sample.comments.length, 100);
    assert.equal(manifest.populationIds.length, manifest.frameSize);
    assert.equal(new Set(manifest.populationIds).size, manifest.frameSize);
    assert.equal(sample.publishedCount, manifest.frameSize);
    assert.equal(sample.seed, manifest.seed);
    assert.equal(sample.sampledAt, manifest.sampledAt);
    const hash = (text) => createHash('sha256').update(text).digest('hex');
    assert.equal(
      hash(manifest.populationIds.join('\n') + '\n'),
      manifest.frameSha256,
    );
    const rank = (id) => hash(`${manifest.seed}\n${id}`);
    const selected = [...manifest.populationIds]
      .sort((a, b) => rank(a).localeCompare(rank(b)) || a.localeCompare(b))
      .slice(0, 100);
    assert.deepEqual(selected, manifest.sampleIds);
    assert.deepEqual(
      sample.comments.map((c) => c.id),
      selected,
    );
    assert.deepEqual(sample.comments, manifest.classification);
    assert.equal(
      summarizeComments(sample.comments).stances.reduce(
        (n, row) => n + row.count,
        0,
      ),
      100,
    );
  }
});

test('every policy classification is auditable, bilingual and uses its own codebook', async () => {
  const { publicCommentSamples } =
    await import('../app/public-comment-data.ts');
  for (const sample of Object.values(publicCommentSamples)) {
    const prefix = sample.documentId.slice(0, -4);
    const known = new Set(sample.themes.map((theme) => theme.id));
    for (const comment of sample.comments) {
      assert.ok(comment.id.startsWith(prefix));
      assert.match(comment.textSha256, /^[a-f0-9]{64}$/);
      assert.ok(comment.summary.zh.length > 0 && comment.summary.en.length > 0);
      assert.doesNotMatch(comment.summary.en, /[\u3400-\u9fff]/u);
      assert.ok(comment.themes.every((theme) => known.has(theme)));
      assert.equal(comment.themes.length, new Set(comment.themes).size);
      if (comment.sourceNote) {
        assert.ok(comment.sourceNote.zh && comment.sourceNote.en);
        assert.doesNotMatch(comment.sourceNote.en, /[\u3400-\u9fff]/u);
      }
    }
    for (const theme of sample.themes)
      assert.doesNotMatch(theme.en + theme.description.en, /[\u3400-\u9fff]/u);
    if (sample.scopeNote)
      assert.doesNotMatch(sample.scopeNote.en, /[\u3400-\u9fff]/u);
  }
  assert.equal(publicCommentSamples['opt-fee'], undefined);
  assert.equal(publicCommentSamples['duration-status'], undefined);
});

test('all open and closed-awaiting-final-rule policies have independent samples', async () => {
  const { publicCommentSamples } =
    await import('../app/public-comment-data.ts');
  assert.deepEqual(
    Object.keys(publicCommentSamples).sort((a, b) => a.localeCompare(b)),
    ['ead-discretion', 'grace-period', 'h1b-fee', 'prevailing-wage'],
  );
  const expected = {
    'h1b-fee': ['USCIS-2026-0298-0001', 'open', '2026-09-24'],
    'grace-period': ['USCIS-2026-0364-0001', 'open', '2026-11-10'],
    'prevailing-wage': ['ETA-2026-0001-0001', 'closed', '2026-05-26'],
    'ead-discretion': ['USCIS-2026-0067-0001', 'closed', '2026-08-04'],
  };
  for (const [id, [documentId, phase, deadline]] of Object.entries(expected)) {
    const sample = publicCommentSamples[id];
    assert.equal(sample.documentId, documentId);
    assert.equal(sample.commentPhase, phase);
    assert.equal(sample.commentDeadline, deadline);
    assert.equal(sample.comments.length, 100);
    assert.equal(sample.status, 'reviewed');
    assert.equal(sample.sampleSize, 100);
  }
});

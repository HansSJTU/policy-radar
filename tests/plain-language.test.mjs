import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { briefingEntries } from '../app/briefing-feed.ts';
import { communitySchools, verifiedSchools } from '../app/cpt-schools.ts';
import { glossaryEntries } from '../app/glossary.ts';
import { publicCommentSamples } from '../app/public-comment-data.ts';
import { getUpdateLog } from '../app/update-log.ts';
import { policyContents } from '../content/policies/index.ts';

// Main copy stays plain. The authorized audit contract requires source gaps in
// policy reviewNote and school detail; those dedicated fields allow review terms.
// They still follow the plain-word and link-placement checks below.
const reviewNotes = new RegExp(
  [
    '不能推断', '不能外推', '不外推', '不能据此', '不据此', '仅能确认', '未核实', '待核实',
    '未取得', '无法确认', '不能确认', '核查范围', '本次另读', '访问缺口', '空响应',
    '口径', '颗粒度', '存量', '原样承接', '受覆盖', '随身份', '当事方',
    'HTTP ?40\\d', 'does not establish', 'unverified', 'not obtained',
    'not (?:independently |been )?verified', 'cannot be inferred', 'access gap',
    'title-only', 'party filing', 'not a court order',
  ].join('|'),
  'i',
);

function collect(value, path) {
  if (typeof value === 'string') return [[path, value]];
  if (Array.isArray(value)) return value.flatMap((item, index) => collect(item, `${path}.${index}`));
  if (value && typeof value === 'object')
    return Object.entries(value)
      .filter(([key]) => !['id', 'href', 'src', 'policyId', 'textSha256', 'reviewNote'].includes(key))
      .flatMap(([key, item]) => collect(item, `${path}.${key}`));
  return [];
}

function offending(strings) {
  return strings
    .filter(([, text]) => reviewNotes.test(text))
    .map(([path, text]) => `${path}: ${text.match(reviewNotes)[0]}`);
}

test('main policy copy is plain; review scope has its own field', () => {
  const strings = policyContents.flatMap((policy) =>
    collect(
      { zh: policy.zh, en: policy.en, sources: policy.sources, litigation: policy.process.litigation },
      policy.id,
    ),
  );
  assert.deepEqual(offending(strings), []);
});

test('required policy review notes are bilingual and separate from the main summary', () => {
  for (const policy of policyContents) for (const language of ['zh', 'en']) {
    const note = policy[language].reviewNote;
    assert.ok(note, `${policy.id}/${language}: missing review scope`);
    assert.doesNotMatch(note, /^(?:核查范围|Review scope)[:：]/i);
    assert.doesNotMatch(note, /https?:\/\//);
    assert.doesNotMatch(note, /口径|颗粒度|存量|原样承接|受覆盖|随身份|当事方/);
    assert.ok(!policy[language].summary.includes(note));
  }
});

test('CPT states are plain; details may disclose source gaps without raw URLs', () => {
  const strings = [...verifiedSchools, ...communitySchools].flatMap((school) =>
    collect({ zh: school.zh, en: school.en }, school.id),
  );
  assert.deepEqual(offending(strings.filter(([path]) => path.endsWith('.state'))), []);
  const officialese = /口径|颗粒度|存量|原样承接|受覆盖|随身份|当事方/i;
  assert.deepEqual(strings.filter(([, text]) => officialese.test(text)), []);
  assert.deepEqual(
    strings.filter(([, text]) => /https?:\/\//.test(text)).map(([path]) => path),
    [],
  );
});

test('briefing entries carry no review-process notes', () => {
  const strings = briefingEntries.flatMap((entry) =>
    collect({ zh: entry.zh, en: entry.en }, entry.id),
  );
  assert.deepEqual(offending(strings), []);
});

test('the update log carries no review-process notes', () => {
  const strings = ['zh', 'en'].flatMap((language) =>
    getUpdateLog(language).flatMap(({ date, changes }) => collect(changes, `${language}@${date}`)),
  );
  assert.deepEqual(offending(strings), []);
});

test('glossary definitions and public-comment notes are plain', () => {
  const strings = [
    ...glossaryEntries.flatMap((entry) => collect(entry, entry.term)),
    ...Object.values(publicCommentSamples).flatMap((sample) =>
      collect(
        {
          scopeNote: sample.scopeNote,
          themes: sample.themes,
          comments: sample.comments.map(({ summary, sourceNote }) => ({ summary, sourceNote })),
        },
        sample.policyId,
      ),
    ),
  ];
  assert.deepEqual(offending(strings), []);
});

test('interface copy is plain', async () => {
  const files = [
    'app/home-copy.ts',
    'app/process-model.ts',
    'app/share-model.ts',
    'app/item-share-model.ts',
    'app/radar/personal-radar-copy.ts',
    'app/radar/personal-radar-data.ts',
    'app/policies/[policyId]/page.tsx',
    'app/policies/[policyId]/policy-interactions.tsx',
    'app/public-comment-distribution.tsx',
    'app/stats/page.tsx',
  ];
  const found = [];
  for (const file of files) {
    const source = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
    // Only quoted literals are copy; identifiers such as `unverified` are not.
    for (const [literal] of source.matchAll(/'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`/g)) {
      if (["'核查范围'", "'核查范围：'"].includes(literal)) continue;
      if (reviewNotes.test(literal)) found.push(`${file}: ${literal.match(reviewNotes)[0]}`);
    }
  }
  assert.deepEqual(found, []);
});

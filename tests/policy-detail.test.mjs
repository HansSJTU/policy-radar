import assert from 'node:assert/strict';
import test from 'node:test';
import { policyHref, legacyPolicyHref } from '../app/policy-links.ts';
import { buildShareContent } from '../app/share-model.ts';
import { getProcessTrack } from '../app/process-model.ts';
import { getPolicyDetail } from '../app/policy-detail-model.ts';

test('policy links retain language and target the requested detail section', () => {
  assert.equal(policyHref('opt-fee', 'zh'), '/policies/opt-fee?lang=zh');
  assert.equal(
    policyHref('duration-status', 'en', 'timeline'),
    '/policies/duration-status?lang=en#timeline',
  );
});

test('only known legacy policy fragments become detail URLs', () => {
  assert.equal(legacyPolicyHref('#opt-fee', 'en'), '/policies/opt-fee?lang=en');
  assert.equal(legacyPolicyHref('#cpt-schools', 'zh'), null);
  assert.equal(legacyPolicyHref('#ranking', 'zh'), null);
  assert.equal(legacyPolicyHref('#not-a-policy', 'en'), null);
  assert.equal(legacyPolicyHref('#%zz', 'en'), null);
});

test('policy sharing uses its own summary and drops acquisition and navigation parameters', () => {
  const content = buildShareContent(
    'https://example.com/policies/opt-fee?utm_source=xhs&from=H-1B&path=H-1B#outlook',
    'en',
    'OPT fee',
    'Potential impact on the first job.',
  );
  assert.equal(
    content.url,
    'https://example.com/policies/opt-fee?lang=en#outlook',
  );
  assert.equal(
    content.text,
    'OPT fee\nPotential impact on the first job.\nhttps://example.com/policies/opt-fee?lang=en#outlook',
  );
});

test('detail selection does not fall back to a different policy or language', () => {
  assert.equal(getPolicyDetail('unknown-policy', 'zh'), undefined);
  const english = getPolicyDetail('h4-ead', 'en');
  assert.equal(english.record.id, 'h4-ead');
  assert.equal(english.editorial.id, 'h4-ead');
  assert.doesNotMatch(JSON.stringify(english), /[\u3400-\u9fff]/u);
  assert.equal(
    getPolicyDetail('opt-fee', 'zh').editorial.title,
    'OPT 可能增收 10 万美元',
  );
});

test('all existing policy IDs resolve with complete analysis and valid related links', async () => {
  const { POLICY_IDS } = await import('../app/community-impact-model.ts');
  for (const language of ['zh', 'en'])
    for (const id of POLICY_IDS) {
      const detail = getPolicyDetail(id, language);
      assert.equal(detail.record.id, id);
      assert.equal(detail.editorial.scenarios.length, 3);
      const process = getProcessTrack(id, language);
      assert.ok(
        process.stages[process.activeStage ?? process.lastCompletedStage],
      );
      assert.ok(
        detail.record.sources.every(
          (source) => source.label && source.href.startsWith('https://'),
        ),
      );
      for (const related of detail.editorial.related)
        assert.ok(getPolicyDetail(related, language), `${id} → ${related}`);
    }
});

test('federal details share one process while litigation remains separate', () => {
  for (const language of ['zh', 'en']) {
    const federal = getProcessTrack('opt-fee', language).stages;
    for (const id of [
      'h1b-fee',
      'duration-status',
      'h1b-weighted-selection',
      'prevailing-wage',
      'h1b-reform',
      'grace-period',
      'ead-discretion',
      'h4-ead',
    ]) {
      assert.deepEqual(getProcessTrack(id, language).stages, federal);
    }
    const litigation = getProcessTrack('duration-status', language);
    assert.equal(litigation.lastCompletedStage, 4);
    assert.equal(litigation.litigation.length, 3);
    assert.notDeepEqual(
      getProcessTrack('cpt-guidance', language).stages,
      federal,
    );
  }
});

test('every detail has an explicit effect, audience, caveat and distinct background in both languages', async () => {
  const { POLICY_IDS } = await import('../app/community-impact-model.ts');
  for (const id of POLICY_IDS) {
    for (const language of ['zh', 'en']) {
      const { editorial } = getPolicyDetail(id, language);
      for (const field of [
        'status',
        'effectLabel',
        'audience',
        'caveat',
        'summary',
        'background',
      ])
        assert.ok(editorial[field]);
      assert.notEqual(editorial.summary, editorial.background);
      if (language === 'en')
        assert.doesNotMatch(JSON.stringify(editorial), /[\u3400-\u9fff]/u);
      const expected =
        id === 'h1b-weighted-selection'
          ? 'in-effect'
          : id === 'cpt-guidance'
            ? 'guidance-in-use'
            : 'not-in-effect';
      assert.equal(editorial.effectState, expected);
    }
  }
  assert.match(
    getPolicyDetail('opt-fee', 'zh').editorial.effectLabel,
    /金额未确认/,
  );
  assert.match(
    getPolicyDetail('grace-period', 'en').editorial.effectLabel,
    /Current rule unchanged/,
  );
});

test('grace-period public inspection is distinct from final effectiveness', () => {
  for (const language of ['zh', 'en']) {
    const detail = getPolicyDetail('grace-period', language);
    assert.equal(detail.checkedOn, '2026-09-10');
    assert.equal(detail.editorial.effectState, 'not-in-effect');
    assert.ok(detail.record.sources.some(({ href }) => href.endsWith('/2026-18631.pdf')));
    assert.ok(detail.record.milestones.some(({ date }) => date === '2026-09-10'));
    assert.ok(detail.record.next.some(({ date }) => date === '2026-09-11'));
    assert.match(detail.record.current, /USCIS|DHS/);
    assert.doesNotMatch(detail.record.current, /提案尚未公开|proposal is not yet public/);
  }
});

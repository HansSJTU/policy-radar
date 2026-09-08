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
      assert.ok(process.stages[process.currentStage]);
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
    for (const id of ['h1b-fee', 'duration-status', 'h1b-weighted-selection', 'prevailing-wage', 'h1b-reform', 'grace-period', 'ead-discretion', 'h4-ead']) {
      assert.deepEqual(getProcessTrack(id, language).stages, federal);
    }
    const litigation = getProcessTrack('duration-status', language);
    assert.equal(litigation.currentStage, 4);
    assert.equal(litigation.litigation.length, 3);
    assert.notDeepEqual(getProcessTrack('cpt-guidance', language).stages, federal);
  }
});

import assert from 'node:assert/strict';
import test from 'node:test';
import { getPolicy } from '../app/policy-data.ts';
import { briefingEntries } from '../app/briefing-feed.ts';
import { buildPersonalPolicies } from '../app/radar/personal-radar-data.ts';

test('EAD final preview preserves the operative 2025 cutoff and stays separate from H-4 eligibility rescission', () => {
  const ead = getPolicy('ead-auto-extension', 'en');
  const h4 = getPolicy('h4-ead', 'en');
  assert.equal(ead.effectState, 'in-effect');
  assert.equal(h4.effectState, 'not-in-effect');
  assert.match(ead.summary, /Since October 30, 2025/);
  assert.match(ead.summary, /unchanged/);
  assert.match(ead.caveat, /not retroactively canceled/);
  assert.match(ead.caveat, /STEM OPT/);
  assert.ok(h4.related.includes('ead-auto-extension'));
  assert.match(h4.background, /distinct from AD14/);
  assert.equal(ead.sources[0].href, 'https://www.govinfo.gov/content/pkg/FR-2025-10-30/pdf/2025-19702.pdf');
});

test('deference preview is a proposal with a scheduled publication, not a confirmed comment deadline or automatic denial', () => {
  const policy = getPolicy('nonimmigrant-deference', 'en');
  assert.equal(policy.effectState, 'not-in-effect');
  assert.match(policy.status, /preview.*scheduled October 14/);
  assert.match(policy.caveat, /does not automatically deny/);
  assert.match(policy.reviewNote, /not a confirmed calendar deadline/);
  assert.ok(policy.next.some(({date}) => date === 'Date unknown'));
  assert.ok(briefingEntries.some(e => e.policyId === policy.id && e.date === '2026-10-13' && e.timing === 'recent'));
  assert.ok(briefingEntries.some(e => e.policyId === policy.id && e.date === '2026-10-14' && e.timing === 'upcoming'));
});

test('new proposal estimates have their own fixed baseline without moving existing forecast windows', () => {
  for (const language of ['zh', 'en']) {
    const now = buildPersonalPolicies(language, {}, '2026-10-13');
    const later = buildPersonalPolicies(language, {}, '2027-02-13');
    const proposal = now.find(p => p.id === 'nonimmigrant-deference');
    assert.equal(proposal.estimateBaseline, '2026-10-13');
    assert.deepEqual(proposal.estimateDates, ['2027-04-13', '2028-04-13']);
    assert.deepEqual(proposal.estimateDates, later.find(p => p.id === proposal.id).estimateDates);
    const existing = now.find(p => p.id === 'opt-fee');
    assert.equal(existing.estimateBaseline, '2026-09-30');
    assert.deepEqual(existing.estimateDates, ['2027-03-30', '2028-03-30']);
    const ead = now.find(p => p.id === 'ead-auto-extension');
    assert.equal(ead.inForce, true);
    assert.equal(ead.estimateDates, null);
    assert.equal(ead.genuineCount, 0);
    assert.equal(proposal.genuineCount, 0);
  }
});

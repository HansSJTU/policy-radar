import assert from 'node:assert/strict';
import test from 'node:test';

import { briefingEntries, getThirtyDayBriefing } from '../app/briefing-feed.ts';
import { communitySchools, verifiedSchools } from '../app/cpt-schools.ts';
import { annotateGlossary, glossaryEntries } from '../app/glossary.ts';
import { getPolicy, getProcessTrack } from '../app/policy-data.ts';
import { POLICY_IDS } from '../app/policy-ids.ts';
import { policyContents } from '../content/policies/index.ts';

const han = /[㐀-鿿]/u;

function collectStrings(value) {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
}

test('content files cover every ranked policy in rank order', () => {
  assert.deepEqual(policyContents.map(({ id }) => id), [...POLICY_IDS]);
});

test('the English policy and school copy contains no Chinese', () => {
  assert.equal(verifiedSchools.length, 52);
  assert.equal(communitySchools.length, 4);
  const strings = collectStrings([
    policyContents.map((policy) => policy.en),
    policyContents.map((policy) => policy.sources.map(({ en }) => en)),
    policyContents.map((policy) => (policy.process.litigation ?? []).map(({ en }) => en)),
    verifiedSchools.map((school) => school.en),
    communitySchools.map((school) => school.en),
    briefingEntries.map(({ en }) => en),
  ]);
  assert.deepEqual(strings.filter((value) => han.test(value)), []);
});

test('each policy has matching Chinese and English structure', () => {
  for (const { id, zh, en, sources } of policyContents) {
    for (const key of ['milestones', 'next', 'impacts', 'scenarios', 'scope']) {
      assert.equal(zh[key].length, en[key].length, `${id} ${key}`);
    }
    zh.impacts.forEach((impact, index) => {
      assert.equal(impact.examples?.length ?? 0, en.impacts[index].examples?.length ?? 0, `${id} impact ${index} examples`);
      assert.equal(impact.source?.href, en.impacts[index].source?.href, `${id} impact ${index} source`);
    });
    assert.equal(Boolean(zh.reviewNote), Boolean(en.reviewNote), `${id} reviewNote`);
    for (const source of sources) assert.ok(source.zh && source.en, `${id} ${source.href}`);
  }
});

test('the English D/S entry preserves the hearing and records nationwide relief', () => {
  const policy = getPolicy('duration-status', 'en');
  assert.match(policy.background, /nationwide relief/);
  assert.match(policy.background, /did not permanently vacate/);
  assert.ok(policy.milestones.some(({ date, text }) => date === '2026-09-03' && /arguments/.test(text)));
  assert.equal(policy.next.some(({ date }) => ['2026-09-03', '2026-09-14', '2026-09-15'].includes(date)), false);
  assert.ok(policy.next.some(({ date, text }) => date === '2026-10-02' && /not a new effective date/.test(text)));
  assert.ok(policy.sources.some(({ label }) => /hearing transcript/.test(label)));
  assert.ok(policy.sources.some(({ label }) => /preliminary injunction/.test(label)));
});

test('English briefings and process tracks contain no Chinese copy', () => {
  const briefing = getThirtyDayBriefing('2026-08-29', 'en');
  const processStrings = POLICY_IDS.flatMap((id) => collectStrings(getProcessTrack(id, 'en')));
  assert.deepEqual([...processStrings, ...collectStrings(briefing)].filter((value) => han.test(value)), []);
});

test('every glossary entry has an English-only popover definition', () => {
  for (const entry of glossaryEntries) {
    const [segment] = annotateGlossary(entry.term, 'en');
    assert.equal(segment.type, 'term');
    assert.equal(han.test(segment.fullName), false, entry.term);
    assert.equal(han.test(segment.explanation), false, entry.term);
  }
});

test('the English UC Berkeley entry preserves the narrow CPT eligibility conditions', () => {
  const berkeley = verifiedSchools.find(({ school }) => school === 'UC Berkeley').en;

  assert.match(berkeley.state, /Course Credit CPT remains paused/);
  assert.match(berkeley.detail, /Degree Requirement CPT/);
  assert.match(berkeley.detail, /Thesis\/Dissertation Requirement CPT/);
  assert.match(berkeley.detail, /Advanced to Candidacy/);
  assert.match(berkeley.detail, /cannot reasonably be replaced/);
  assert.match(berkeley.detail, /faculty adviser/);
});

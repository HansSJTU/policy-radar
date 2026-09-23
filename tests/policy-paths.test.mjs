import test from 'node:test';
import assert from 'node:assert/strict';

import { briefingEntries } from '../app/briefing-feed.ts';
import { buildHomeView } from '../app/home-view.ts';
import { getPolicies } from '../app/policy-data.ts';
import { POLICY_IDS } from '../app/policy-ids.ts';
import {
  filterByPath,
  parsePathFilter,
  POLICY_PATHS,
} from '../app/policy-paths.ts';

test('every policy belongs to exactly one stay-path stage', () => {
  const { paths } = buildHomeView('zh');
  const staged = paths.flatMap((stage) => stage.policies.map((policy) => policy.id));

  assert.deepEqual(paths.map((stage) => stage.key), ['F-1', 'CPT', 'OPT', 'H-1B']);
  assert.deepEqual(
    [...staged].sort((a, b) => a.localeCompare(b)),
    [...POLICY_IDS].sort((a, b) => a.localeCompare(b)),
  );
  assert.equal(new Set(staged).size, staged.length);
});

test('stage columns keep rank order and show each policy’s one status', () => {
  for (const language of ['zh', 'en']) {
    const policies = getPolicies(language);
    for (const stage of buildHomeView(language).paths) {
      const ranks = stage.policies.map(({ rank }) => rank);
      assert.deepEqual(ranks, [...ranks].sort((a, b) => a - b));
      for (const entry of stage.policies) {
        const policy = policies.find(({ id }) => id === entry.id);
        assert.equal(entry.status, policy.status);
        assert.equal(entry.short, policy.short);
      }
    }
  }
});

test('briefing rows resolve to the category tag of their stage', () => {
  const byId = new Map(getPolicies('zh').map((policy) => [policy.id, policy]));
  assert.equal(byId.get('duration-status').path, 'F-1');
  assert.equal(byId.get('cpt-guidance').path, 'CPT');
  assert.equal(byId.get('opt-fee').path, 'OPT');
  assert.equal(byId.get('grace-period').path, 'H-1B');
  assert.equal(byId.get('perm-modernization').path, 'H-1B');
  for (const entry of briefingEntries) {
    assert.ok(byId.get(entry.policyId)?.path, `${entry.id} has no category tag`);
  }
});

test('a path filter returns only that stage, and unknown filters show everything', () => {
  const policies = getPolicies('en');
  assert.deepEqual(
    filterByPath(policies, 'OPT').map(({ id }) => id),
    ['opt-fee', 'ead-discretion'],
  );
  assert.equal(filterByPath(policies, 'all'), policies);
  assert.equal(parsePathFilter('H-1'), 'all');
  assert.equal(parsePathFilter(undefined), 'all');
  assert.equal(parsePathFilter('CPT'), 'CPT');
  assert.equal(POLICY_PATHS.length, 4);
});

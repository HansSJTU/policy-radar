import test from 'node:test';
import assert from 'node:assert/strict';

import { briefingItems } from '../app/briefing-feed.ts';
import { POLICY_IDS } from '../app/community-impact-model.ts';
import { getPolicyPath, routeStages } from '../app/policy-paths.ts';

test('every policy belongs to exactly one stay-path stage', () => {
  const staged = routeStages.flatMap((stage) => stage.policies.map((policy) => policy.id));

  assert.deepEqual(routeStages.map((stage) => stage.key), ['F-1', 'CPT', 'OPT', 'H-1B']);
  assert.deepEqual([...staged].sort(), [...POLICY_IDS].sort());
  assert.equal(new Set(staged).size, staged.length);
});

test('briefing rows resolve to the category tag of their stage', () => {
  assert.equal(getPolicyPath('duration-status'), 'F-1');
  assert.equal(getPolicyPath('cpt-guidance'), 'CPT');
  assert.equal(getPolicyPath('opt-fee'), 'OPT');
  assert.equal(getPolicyPath('grace-period'), 'H-1B');
  assert.equal(getPolicyPath('perm-modernization'), 'H-1B');
  assert.equal(getPolicyPath('not-a-policy'), undefined);

  for (const item of briefingItems) {
    assert.ok(getPolicyPath(item.policyId), `${item.id} has no category tag`);
  }
});

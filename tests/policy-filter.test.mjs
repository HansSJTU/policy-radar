import assert from 'node:assert/strict';
import test from 'node:test';

import { filterPoliciesByRouteStage } from '../app/policy-filter.ts';

const policies = [
  { id: 'f1-only', route: ['F-1'] },
  { id: 'opt-shown', route: ['OPT', 'H-1B transition'] },
  { id: 'h1b-shown', route: ['H-1B'] },
  { id: 'h1b-tagged-but-not-shown', route: ['H-1B'] },
];

const routeStages = [
  { key: 'F-1', policies: [{ id: 'f1-only' }] },
  { key: 'OPT', policies: [{ id: 'opt-shown' }] },
  { key: 'H-1B', policies: [{ id: 'h1b-shown' }] },
];

test('a route filter returns only policies explicitly shown in that route-stage column', () => {
  assert.deepEqual(
    filterPoliciesByRouteStage(policies, routeStages, 'H-1B').map((policy) => policy.id),
    ['h1b-shown'],
  );
});

test('route tags and partial route-name matches do not expand a stage filter', () => {
  assert.deepEqual(
    filterPoliciesByRouteStage(policies, routeStages, 'OPT').map((policy) => policy.id),
    ['opt-shown'],
  );
  assert.deepEqual(filterPoliciesByRouteStage(policies, routeStages, 'H-1'), []);
});

test('the all filter preserves the full ranked policy list', () => {
  assert.equal(filterPoliciesByRouteStage(policies, routeStages, 'all'), policies);
});

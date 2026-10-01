import test from 'node:test';
import assert from 'node:assert/strict';

import { POLICY_IDS } from '../app/policy-ids.ts';
import {
  buildForecast,
  isAhead,
  levelFor,
  RADAR_PLACEMENT,
  SECTOR_KEYS,
} from '../app/radar/radar-model.ts';

test('warning levels follow the DESIGN.md thresholds and the ten-rating floor', () => {
  assert.equal(levelFor(9, 10), 'red');
  assert.equal(levelFor(8.9, 10), 'orange');
  assert.equal(levelFor(7.5, 10), 'orange');
  assert.equal(levelFor(7.4, 10), 'yellow');
  assert.equal(levelFor(5, 10), 'yellow');
  assert.equal(levelFor(4.9, 10), 'blue');
  assert.equal(levelFor(10, 9), 'none');
});

test('every policy has a radar sector and ring', () => {
  assert.deepEqual(Object.keys(RADAR_PLACEMENT).sort(), [...POLICY_IDS].sort());
  for (const { sector } of Object.values(RADAR_PLACEMENT)) {
    assert.ok(SECTOR_KEYS.includes(sector));
  }
});

test('a chosen stage covers itself and the stages ahead of it', () => {
  assert.equal(isAhead('opt', 'opt'), true);
  assert.equal(isAhead('h1b-work', 'opt'), true);
  assert.equal(isAhead('cpt', 'opt'), false);
  assert.equal(isAhead('f1', null), true);
});

test('the forecast names the nearest of the most severe warnings for the chosen stage', () => {
  const entry = (id, sector, ring, level) => ({ id, short: id, sector, ring, level });
  const entries = [
    entry('cpt-rule', 'cpt', 'active', 'red'),
    entry('far-fee', 'opt', 'eighteen-months', 'red'),
    entry('near-fee', 'h1b-petition', 'half-year', 'red'),
    entry('lottery', 'h1b-lottery', 'active', 'orange'),
    entry('quiet', 'family', 'unknown', 'none'),
  ];

  assert.deepEqual(buildForecast(entries, null, 'zh'), {
    scope: '整条路径，5 条政策',
    headline: ['3 条红色预警', '1 条橙色'],
    detail: '最近的红色预警是「cpt-rule」，已在执行。另有 1 条真实评分不足 10 份，暂不定级。',
  });
  assert.deepEqual(buildForecast(entries, 'opt', 'en'), {
    scope: 'From OPT onward, 4 policies',
    headline: ['2 red', '1 orange'],
    detail:
      'The nearest red warning is “near-fee”, possibly within six months. 1 more has fewer than 10 genuine ratings and is not graded yet.',
  });
});

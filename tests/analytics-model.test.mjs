import assert from 'node:assert/strict';
import test from 'node:test';

import { buildTrafficSeries, summarizeTraffic } from '../app/analytics-model.ts';

test('fills missing analytics days with zeroes and keeps chronological order', () => {
  const series = buildTrafficSeries(
    [{ day: '2026-08-29', pageViews: 5, visitors: 3 }],
    3,
    '2026-08-30',
  );

  assert.deepEqual(series, [
    { day: '2026-08-28', pageViews: 0, visitors: 0 },
    { day: '2026-08-29', pageViews: 5, visitors: 3 },
    { day: '2026-08-30', pageViews: 0, visitors: 0 },
  ]);
});

test('summarizes page views, unique visitor-days, and active days', () => {
  const summary = summarizeTraffic([
    { day: '2026-08-28', pageViews: 0, visitors: 0 },
    { day: '2026-08-29', pageViews: 5, visitors: 3 },
    { day: '2026-08-30', pageViews: 2, visitors: 2 },
  ]);

  assert.deepEqual(summary, {
    pageViews: 7,
    visitorDays: 5,
    activeDays: 2,
  });
});

import assert from 'node:assert/strict';
import test from 'node:test';

import { Miniflare } from 'miniflare';
import * as analyticsSchema from '../db/schema.ts';

test('traffic query adds imported baseline visitors to new daily visitors', async (t) => {
  assert.equal(
    typeof analyticsSchema.createDailyVisitorBaselineTable,
    'string',
    'the baseline table schema must be exported',
  );
  assert.equal(
    typeof analyticsSchema.selectTrafficSeries,
    'string',
    'the production traffic query must be exported',
  );

  const miniflare = new Miniflare({
    modules: true,
    script: 'export default { fetch() { return new Response("ok") } }',
    d1Databases: { DB: 'analytics-test' },
  });
  t.after(() => miniflare.dispose());

  const db = await miniflare.getD1Database('DB');
  await db.batch([
    db.prepare(analyticsSchema.createDailyTrafficTable),
    db.prepare(analyticsSchema.createDailyVisitorsTable),
    db.prepare(analyticsSchema.createDailyVisitorBaselineTable),
  ]);
  await db.batch([
    db
      .prepare('INSERT INTO daily_traffic (day, page_views) VALUES (?, ?)')
      .bind('2026-08-30', 12),
    db
      .prepare('INSERT INTO daily_visitor_baseline (day, visitors) VALUES (?, ?)')
      .bind('2026-08-30', 9),
    db
      .prepare('INSERT INTO daily_visitors (day, visitor_hash) VALUES (?, ?)')
      .bind('2026-08-30', 'new-visitor-a'),
    db
      .prepare('INSERT INTO daily_visitors (day, visitor_hash) VALUES (?, ?)')
      .bind('2026-08-30', 'new-visitor-b'),
  ]);

  const result = await db
    .prepare(analyticsSchema.selectTrafficSeries)
    .bind('2026-08-30')
    .all();

  assert.deepEqual(result.results, [
    { day: '2026-08-30', page_views: 12, visitors: 11 },
  ]);
});

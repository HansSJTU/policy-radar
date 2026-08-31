import assert from 'node:assert/strict';
import test from 'node:test';

import { Miniflare } from 'miniflare';
import * as analyticsModel from '../app/analytics-model.ts';
import * as analyticsSchema from '../db/schema.ts';

void test('normalizes Cloudflare country codes without retaining an IP address', () => {
  assert.equal(typeof analyticsModel.normalizeCountryCode, 'function');
  assert.equal(analyticsModel.normalizeCountryCode('us'), 'US');
  assert.equal(analyticsModel.normalizeCountryCode('CN'), 'CN');
  assert.equal(analyticsModel.normalizeCountryCode(null), 'ZZ');
  assert.equal(analyticsModel.normalizeCountryCode('United States'), 'ZZ');
});

void test('formats country labels in the selected site language', () => {
  assert.equal(typeof analyticsModel.getCountryLabel, 'function');
  assert.equal(analyticsModel.getCountryLabel('US', 'en'), 'United States');
  assert.equal(analyticsModel.getCountryLabel('US', 'zh'), '美国');
  assert.equal(analyticsModel.getCountryLabel('ZZ', 'en'), 'Unknown');
  assert.equal(analyticsModel.getCountryLabel('ZZ', 'zh'), '未知');
});

void test('country query aggregates page views and daily visitors across the date range', async (t) => {
  assert.equal(typeof analyticsSchema.createDailyCountryTrafficTable, 'string');
  assert.equal(
    typeof analyticsSchema.createDailyCountryVisitorsTable,
    'string',
  );
  assert.equal(typeof analyticsSchema.selectCountryTraffic, 'string');

  const miniflare = new Miniflare({
    modules: true,
    script: 'export default { fetch() { return new Response("ok") } }',
    d1Databases: { DB: 'country-analytics-test' },
  });
  t.after(() => miniflare.dispose());

  const db = await miniflare.getD1Database('DB');
  await db.batch([
    db.prepare(analyticsSchema.createDailyCountryTrafficTable),
    db.prepare(analyticsSchema.createDailyCountryVisitorsTable),
  ]);
  await db.batch([
    db
      .prepare(
        'INSERT INTO daily_country_traffic (day, country, page_views) VALUES (?, ?, ?)',
      )
      .bind('2026-08-30', 'US', 3),
    db
      .prepare(
        'INSERT INTO daily_country_traffic (day, country, page_views) VALUES (?, ?, ?)',
      )
      .bind('2026-08-31', 'US', 2),
    db
      .prepare(
        'INSERT INTO daily_country_traffic (day, country, page_views) VALUES (?, ?, ?)',
      )
      .bind('2026-08-31', 'CA', 4),
    db
      .prepare(
        'INSERT INTO daily_country_visitors (day, country, visitor_hash) VALUES (?, ?, ?)',
      )
      .bind('2026-08-30', 'US', 'visitor-a'),
    db
      .prepare(
        'INSERT INTO daily_country_visitors (day, country, visitor_hash) VALUES (?, ?, ?)',
      )
      .bind('2026-08-30', 'US', 'visitor-b'),
    db
      .prepare(
        'INSERT INTO daily_country_visitors (day, country, visitor_hash) VALUES (?, ?, ?)',
      )
      .bind('2026-08-31', 'US', 'visitor-a'),
    db
      .prepare(
        'INSERT INTO daily_country_visitors (day, country, visitor_hash) VALUES (?, ?, ?)',
      )
      .bind('2026-08-31', 'CA', 'visitor-c'),
  ]);

  const result = await db
    .prepare(analyticsSchema.selectCountryTraffic)
    .bind('2026-08-30', '2026-08-30')
    .all();

  assert.deepEqual(result.results, [
    { country: 'US', page_views: 5, visitors: 3 },
    { country: 'CA', page_views: 4, visitors: 1 },
  ]);
});

void test('country recording counts every page view but deduplicates a daily visitor', async (t) => {
  assert.equal(typeof analyticsSchema.upsertDailyCountryTraffic, 'string');
  assert.equal(typeof analyticsSchema.insertDailyCountryVisitor, 'string');

  const miniflare = new Miniflare({
    modules: true,
    script: 'export default { fetch() { return new Response("ok") } }',
    d1Databases: { DB: 'country-recording-test' },
  });
  t.after(() => miniflare.dispose());

  const db = await miniflare.getD1Database('DB');
  await db.batch([
    db.prepare(analyticsSchema.createDailyCountryTrafficTable),
    db.prepare(analyticsSchema.createDailyCountryVisitorsTable),
  ]);

  for (let index = 0; index < 2; index += 1) {
    await db.batch([
      db
        .prepare(analyticsSchema.upsertDailyCountryTraffic)
        .bind('2026-08-31', 'US'),
      db
        .prepare(analyticsSchema.insertDailyCountryVisitor)
        .bind('2026-08-31', 'US', 'same-visitor'),
    ]);
  }

  const result = await db
    .prepare(analyticsSchema.selectCountryTraffic)
    .bind('2026-08-31', '2026-08-31')
    .all();

  assert.deepEqual(result.results, [
    { country: 'US', page_views: 2, visitors: 1 },
  ]);
});

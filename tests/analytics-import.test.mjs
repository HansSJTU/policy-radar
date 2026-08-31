import assert from 'node:assert/strict';
import test from 'node:test';

let analyticsImport;
try {
  analyticsImport = await import('../scripts/build-analytics-import.mjs');
} catch {
  analyticsImport = undefined;
}

test('builds sorted idempotent SQL for public daily aggregates', () => {
  assert.equal(
    typeof analyticsImport?.buildAnalyticsImport,
    'function',
    'the aggregate import builder must exist',
  );

  const sql = analyticsImport.buildAnalyticsImport([
    { day: '2026-08-31', pageViews: 7, visitors: 5 },
    { day: '2026-08-30', pageViews: 12, visitors: 9 },
  ]);

  assert.equal(
    sql,
    [
      'BEGIN TRANSACTION;',
      "INSERT INTO daily_traffic (day, page_views, updated_at) VALUES ('2026-08-30', 12, CURRENT_TIMESTAMP) ON CONFLICT(day) DO UPDATE SET page_views = excluded.page_views, updated_at = CURRENT_TIMESTAMP;",
      "INSERT INTO daily_visitor_baseline (day, visitors, imported_at) VALUES ('2026-08-30', 9, CURRENT_TIMESTAMP) ON CONFLICT(day) DO UPDATE SET visitors = excluded.visitors, imported_at = CURRENT_TIMESTAMP;",
      "INSERT INTO daily_traffic (day, page_views, updated_at) VALUES ('2026-08-31', 7, CURRENT_TIMESTAMP) ON CONFLICT(day) DO UPDATE SET page_views = excluded.page_views, updated_at = CURRENT_TIMESTAMP;",
      "INSERT INTO daily_visitor_baseline (day, visitors, imported_at) VALUES ('2026-08-31', 5, CURRENT_TIMESTAMP) ON CONFLICT(day) DO UPDATE SET visitors = excluded.visitors, imported_at = CURRENT_TIMESTAMP;",
      'COMMIT;',
      '',
    ].join('\n'),
  );
});

test('rejects malformed or impossible dates', () => {
  assert.throws(
    () => analyticsImport.buildAnalyticsImport([
      { day: '08/30/2026', pageViews: 1, visitors: 1 },
    ]),
    /valid YYYY-MM-DD/,
  );
  assert.throws(
    () => analyticsImport.buildAnalyticsImport([
      { day: '2026-02-30', pageViews: 1, visitors: 1 },
    ]),
    /valid YYYY-MM-DD/,
  );
});

test('rejects negative, non-integer, unsafe, and duplicate aggregate counts', () => {
  assert.throws(
    () => analyticsImport.buildAnalyticsImport([
      { day: '2026-08-30', pageViews: -1, visitors: 1 },
    ]),
    /pageViews/,
  );
  assert.throws(
    () => analyticsImport.buildAnalyticsImport([
      { day: '2026-08-30', pageViews: 1, visitors: 1.5 },
    ]),
    /visitors/,
  );
  assert.throws(
    () => analyticsImport.buildAnalyticsImport([
      { day: '2026-08-30', pageViews: Number.MAX_SAFE_INTEGER + 1, visitors: 1 },
    ]),
    /pageViews/,
  );
  assert.throws(
    () => analyticsImport.buildAnalyticsImport([
      { day: '2026-08-30', pageViews: 1, visitors: 1 },
      { day: '2026-08-30', pageViews: 2, visitors: 2 },
    ]),
    /Duplicate day/,
  );
});

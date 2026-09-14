import assert from 'node:assert/strict';
import test from 'node:test';
import { Miniflare } from 'miniflare';
import * as sql from '../db/retention.ts';
import { hashAnonymousVisitor, hashDailyVisitor, buildAnalyticsEngineVisitDataPoint } from '../app/analytics-model.ts';

test('stable identity is canonical and independent of the daily hash', async () => {
  const id = '8879af56-f71b-4baf-af91-d5955760eada';
  const stable = await hashAnonymousVisitor(id);
  assert.match(stable, /^[a-f0-9]{64}$/);
  assert.equal(stable, await hashAnonymousVisitor(id.toUpperCase()));
  assert.notEqual(stable, await hashDailyVisitor('2026-09-01', id));
  assert.notEqual(stable, await hashAnonymousVisitor('another-browser'));
  for (const eventType of ['page_view', 'share', 'outbound_click', 'content_click']) {
    const point = buildAnalyticsEngineVisitDataPoint({ eventType, visitorHash: 'daily', anonymousVisitorId: stable });
    assert.equal(point.blobs.length, 20);
    assert.equal(point.blobs[19], stable);
    assert.deepEqual(point.indexes, ['daily']);
  }
});

test('retention deduplicates visits and sessions, preserves acquisition and excludes immature days', async t => {
  const mf = new Miniflare({ modules: true, script: 'export default { fetch() { return new Response("ok") } }', d1Databases: { DB: 'retention-test' } });
  t.after(() => mf.dispose());
  const db = await mf.getD1Database('DB');
  await db.batch(sql.retentionSchema.map(s => db.prepare(s)));
  async function visit(id, day, session, source = 'community') {
    const stamp = `${day}T12:00:00.000Z`;
    await db.batch([
      db.prepare(sql.upsertRetentionVisitor).bind(id, stamp, stamp, day, source, 'social', 'launch', '(direct)'),
      db.prepare(sql.insertRetentionDay).bind(id, day),
      db.prepare(sql.insertRetentionSession).bind(id, session),
    ]);
  }
  await visit('a', '2026-09-01', 's1');
  await visit('a', '2026-09-01', 's1');
  await visit('b', '2026-09-01', '(unknown)');
  await visit('a', '2026-09-02', 's2', 'google');
  await visit('a', '2026-09-04', 's3');
  await visit('a', '2026-09-08', 's4');
  const visitors = (await db.prepare(sql.selectRetentionVisitors).all()).results;
  assert.equal(visitors[0].visit_days, 4);
  assert.equal(visitors[0].session_count, 4);
  assert.equal(visitors[0].utm_source, 'community');
  assert.equal(visitors[1].session_count, 0);
  const cohorts = (await db.prepare(sql.selectRetentionCohorts).bind('2026-09-08').all()).results;
  assert.deepEqual(cohorts.map(r => [r.retention_day, r.cohort_size, r.retention_percent]), [[1, 2, 50], [3, 2, 50], [7, 2, null], [30, 2, null]]);
  const mature = (await db.prepare(sql.selectRetentionCohorts).bind('2026-09-09').all()).results;
  assert.equal(mature[2].retention_percent, 50);
  const returning = (await db.prepare(sql.selectReturningVisitors).bind('2026-09-09').all()).results;
  assert.equal(returning[0].returning_percent, 0);
  assert.equal(returning[1].returning_percent, 100);
  await visit('a', '2026-10-01', 's30');
  const d30Pending = (await db.prepare(sql.selectRetentionCohorts).bind('2026-10-01').all()).results;
  assert.equal(d30Pending[3].retention_percent, null);
  const d30Mature = (await db.prepare(sql.selectRetentionCohorts).bind('2026-10-02').all()).results;
  assert.equal(d30Mature[3].retained_visitors, 1);
  assert.equal(d30Mature[3].retention_percent, 50);
  // Delayed requests must move first touch back without moving last_seen back.
  await visit('a', '2026-08-31', 's0', 'earlier');
  const updated = (await db.prepare(sql.selectRetentionVisitors).all()).results[0];
  assert.equal(updated.first_day, '2026-08-31');
  assert.equal(updated.utm_source, 'earlier');
  assert.equal(updated.last_seen, '2026-10-01T12:00:00.000Z');
});

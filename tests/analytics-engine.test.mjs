import assert from 'node:assert/strict';
import test from 'node:test';

import * as analyticsModel from '../app/analytics-model.ts';

const visit = {
  day: '2026-09-01',
  country: 'US',
  pathname: '/updates',
  language: 'en',
  visitorHash: 'daily-anonymous-hash',
};

test('builds a stable, anonymous Analytics Engine page-view event', () => {
  assert.equal(
    typeof analyticsModel.buildAnalyticsEngineVisitDataPoint,
    'function',
  );

  assert.deepEqual(analyticsModel.buildAnalyticsEngineVisitDataPoint(visit), {
    indexes: ['daily-anonymous-hash'],
    blobs: ['page_view', '2026-09-01', 'US', '/updates', 'en'],
    doubles: [1],
  });
});

test('daily visitor hashing cannot link the same browser across dates', async () => {
  assert.equal(typeof analyticsModel.hashDailyVisitor, 'function');

  const visitorId = '8879af56-f71b-4baf-af91-d5955760eada';
  const firstDay = await analyticsModel.hashDailyVisitor(
    '2026-09-01',
    visitorId,
  );
  const sameDay = await analyticsModel.hashDailyVisitor(
    '2026-09-01',
    visitorId,
  );
  const nextDay = await analyticsModel.hashDailyVisitor(
    '2026-09-02',
    visitorId,
  );

  assert.equal(firstDay, sameDay);
  assert.notEqual(firstDay, nextDay);
  assert.doesNotMatch(firstDay, new RegExp(visitorId));
  assert.match(firstDay, /^[0-9a-f]{64}$/);
});

test('Analytics Engine write failures do not escape into D1 visit handling', () => {
  assert.equal(typeof analyticsModel.writeAnalyticsEngineVisit, 'function');

  assert.doesNotThrow(() =>
    analyticsModel.writeAnalyticsEngineVisit(
      {
        writeDataPoint() {
          throw new Error('analytics engine unavailable');
        },
      },
      visit,
    ),
  );
});

test('D1 is written before the optional Analytics Engine event stream', async () => {
  assert.equal(typeof analyticsModel.writeVisitAnalytics, 'function');
  const operations = [];

  await analyticsModel.writeVisitAnalytics(
    async () => {
      operations.push('d1');
    },
    {
      writeDataPoint() {
        operations.push('analytics-engine');
      },
    },
    visit,
  );

  assert.deepEqual(operations, ['d1', 'analytics-engine']);
});

test('normalizes page metadata before sending it to Analytics Engine', () => {
  assert.equal(typeof analyticsModel.normalizeVisitPathname, 'function');
  assert.equal(typeof analyticsModel.normalizeVisitLanguage, 'function');

  assert.equal(analyticsModel.normalizeVisitPathname('/updates'), '/updates');
  assert.equal(
    analyticsModel.normalizeVisitPathname('https://example.com'),
    '/',
  );
  assert.equal(analyticsModel.normalizeVisitPathname('/'.repeat(300)), '/');
  assert.equal(analyticsModel.normalizeVisitLanguage('en-US'), 'en');
  assert.equal(analyticsModel.normalizeVisitLanguage('zh-CN'), 'zh');
  assert.equal(analyticsModel.normalizeVisitLanguage('fr'), 'zh');
});

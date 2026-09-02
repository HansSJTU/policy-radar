import assert from 'node:assert/strict';
import test from 'node:test';

import * as analyticsModel from '../app/analytics-model.ts';

const visit = {
  eventType: 'page_view',
  day: '2026-09-01',
  country: 'US',
  pathname: '/updates',
  language: 'en',
  visitorHash: 'daily-anonymous-hash',
  referrerHost: 'www.google.com',
  utmSource: 'google',
  utmMedium: 'cpc',
  utmCampaign: 'fall-visa',
  sessionId: '93af1378-2461-4bbb-a790-50809f90e5c3',
  landingPage: '/',
  policyId: '',
  outboundClick: '',
};

test('builds a stable, anonymous Analytics Engine page-view event', () => {
  assert.equal(
    typeof analyticsModel.buildAnalyticsEngineVisitDataPoint,
    'function',
  );

  assert.deepEqual(analyticsModel.buildAnalyticsEngineVisitDataPoint(visit), {
    indexes: ['daily-anonymous-hash'],
    blobs: [
      'page_view',
      '2026-09-01',
      'US',
      '/updates',
      'en',
      'www.google.com',
      'google',
      'cpc',
      'fall-visa',
      '93af1378-2461-4bbb-a790-50809f90e5c3',
      '/',
      '',
      '',
    ],
    doubles: [1],
  });
});

test('outbound-click analytics bypasses the page-view handler that writes D1', async () => {
  assert.equal(typeof analyticsModel.dispatchAnalyticsEvent, 'function');
  const operations = [];

  await analyticsModel.dispatchAnalyticsEvent('outbound_click', {
    pageView: async () => operations.push('page-view-and-d1'),
    outboundClick: async () => operations.push('analytics-engine-only'),
  });

  assert.deepEqual(operations, ['analytics-engine-only']);
});

test('missing event type preserves the existing page-view and D1 path', async () => {
  const operations = [];

  await analyticsModel.dispatchAnalyticsEvent(undefined, {
    pageView: async () => operations.push('page-view-and-d1'),
    outboundClick: async () => operations.push('analytics-engine-only'),
  });

  assert.deepEqual(operations, ['page-view-and-d1']);
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

test('normalizes acquisition and interaction dimensions before engine writes', () => {
  assert.equal(
    analyticsModel.normalizeReferrerHost('WWW.Google.COM'),
    'www.google.com',
  );
  assert.equal(analyticsModel.normalizeReferrerHost(undefined), '(direct)');
  assert.equal(
    analyticsModel.normalizeCampaignDimension('  Fall visa launch  '),
    'Fall visa launch',
  );
  assert.equal(
    analyticsModel.normalizeSessionId('93af1378-2461-4bbb-a790-50809f90e5c3'),
    '93af1378-2461-4bbb-a790-50809f90e5c3',
  );
  assert.equal(analyticsModel.normalizeSessionId('not-a-session'), '(unknown)');
  assert.equal(analyticsModel.normalizePolicyId('opt-fee'), 'opt-fee');
  assert.equal(analyticsModel.normalizePolicyId('../admin'), '');
  assert.equal(
    analyticsModel.normalizeOutboundClick(
      'https://www.reginfo.gov/public/do/eoDetails?rrid=1505717#top',
    ),
    'www.reginfo.gov/public/do/eoDetails',
  );
  assert.equal(
    analyticsModel.normalizeOutboundClick('javascript:alert(1)'),
    '',
  );
});

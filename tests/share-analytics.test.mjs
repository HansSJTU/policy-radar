import assert from 'node:assert/strict';
import test from 'node:test';
import * as model from '../app/analytics-model.ts';
import { buildAnalyticsEventPayload } from '../components/analytics-session.ts';

test('share events never enter the D1 page-view or outbound handlers', async () => {
  const operations = [];
  await model.dispatchAnalyticsEvent('share', {
    pageView: async () => operations.push('page-view'),
    outboundClick: async () => operations.push('outbound'),
    share: async () => operations.push('share'),
  });
  assert.deepEqual(operations, ['share']);
});

test('unknown event types cannot inflate page views', async () => {
  let pageViews = 0;
  await assert.rejects(() => model.dispatchAnalyticsEvent('invalid', {
    pageView: async () => pageViews++,
    outboundClick: async () => {},
    share: async () => {},
  }));
  assert.equal(pageViews, 0);
});

test('share metadata accepts only supported methods and meaningful action combinations', () => {
  assert.equal(typeof model.normalizeShareEvent, 'function');
  for (const shareMethod of ['messages', 'email', 'wechat', 'whatsapp', 'copy_link']) {
    assert.deepEqual(model.normalizeShareEvent(shareMethod, 'select'), { shareMethod, shareAction: 'select' });
  }
  assert.deepEqual(model.normalizeShareEvent('wechat', 'copy_success'), { shareMethod: 'wechat', shareAction: 'copy_success' });
  assert.deepEqual(model.normalizeShareEvent('copy_link', 'copy_failure'), { shareMethod: 'copy_link', shareAction: 'copy_failure' });
  for (const [method, action] of [['email', 'copy_success'], ['facebook', 'select'], ['wechat', 'sent'], [null, 'select']]) {
    assert.equal(model.normalizeShareEvent(method, action), null);
  }
});

test('share payload preserves session attribution and channel without an outbound URL', () => {
  const payload = buildAnalyticsEventPayload({
    eventType: 'share', visitorId: 'visitor', pathname: '/updates', language: 'en',
    session: { referrerHost: '(direct)', utmSource: 'xhs', utmMedium: 'social', utmCampaign: 'fall',
      sessionId: 'session', landingPage: '/' },
    shareMethod: 'wechat', shareAction: 'copy_success',
  });
  assert.equal(payload.shareMethod, 'wechat');
  assert.equal(payload.shareAction, 'copy_success');
  assert.equal(payload.utmSource, 'xhs');
  assert.equal(payload.sessionId, 'session');
  assert.equal(payload.outboundClick, '');
});

test('Analytics Engine appends share dimensions without moving any existing field', () => {
  const point = model.buildAnalyticsEngineVisitDataPoint({
    eventType: 'share', day: '2026-09-05', country: 'US', pathname: '/', language: 'zh',
    visitorHash: 'anonymous-hash', referrerHost: '(direct)', utmSource: 'xhs',
    utmMedium: 'social', utmCampaign: 'fall', sessionId: 'session', landingPage: '/',
    policyId: 'opt-fee', outboundClick: '', shareMethod: 'whatsapp', shareAction: 'select',
  });
  assert.deepEqual(point.blobs, [
    'share', '2026-09-05', 'US', '/', 'zh', '(direct)', 'xhs', 'social', 'fall',
    'session', '/', 'opt-fee', '', 'whatsapp', 'select',
  ]);
  assert.deepEqual(point.doubles, [1]);
});

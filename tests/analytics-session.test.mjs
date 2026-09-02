import assert from 'node:assert/strict';
import test from 'node:test';

import {
  buildAnalyticsEventPayload,
  getOrCreateSessionAttribution,
  getPolicyIdFromHash,
} from '../components/analytics-session.ts';

function memoryStorage() {
  const values = new Map();
  return {
    getItem(key) {
      return values.get(key) ?? null;
    },
    setItem(key, value) {
      values.set(key, value);
    },
  };
}

test('session attribution keeps first-touch referrer, UTM values, and landing page', () => {
  const storage = memoryStorage();
  const first = getOrCreateSessionAttribution(storage, {
    href: 'https://policy-radar.uspolicy.workers.dev/?utm_source=google&utm_medium=cpc&utm_campaign=fall-visa#opt-fee',
    referrer: 'https://www.google.com/search?q=policy+radar',
    createSessionId: () => '93af1378-2461-4bbb-a790-50809f90e5c3',
  });
  const later = getOrCreateSessionAttribution(storage, {
    href: 'https://policy-radar.uspolicy.workers.dev/updates?utm_source=overwrite',
    referrer: 'https://policy-radar.uspolicy.workers.dev/',
    createSessionId: () => 'd57bb114-6575-4a9d-b620-c9b0fedaa176',
  });

  assert.deepEqual(first, {
    referrerHost: 'www.google.com',
    utmSource: 'google',
    utmMedium: 'cpc',
    utmCampaign: 'fall-visa',
    sessionId: '93af1378-2461-4bbb-a790-50809f90e5c3',
    landingPage: '/',
  });
  assert.deepEqual(later, first);
});

test('direct sessions and policy hashes have explicit normalized values', () => {
  const storage = memoryStorage();
  const session = getOrCreateSessionAttribution(storage, {
    href: 'https://policy-radar.uspolicy.workers.dev/updates',
    referrer: '',
    createSessionId: () => '93af1378-2461-4bbb-a790-50809f90e5c3',
  });

  assert.equal(session.referrerHost, '(direct)');
  assert.equal(session.utmSource, '');
  assert.equal(getPolicyIdFromHash('#h1b-fee'), 'h1b-fee');
  assert.equal(getPolicyIdFromHash('#../admin'), '');
});

test('builds an outbound event with session attribution and policy context', () => {
  const payload = buildAnalyticsEventPayload({
    eventType: 'outbound_click',
    visitorId: '8879af56-f71b-4baf-af91-d5955760eada',
    pathname: '/',
    language: 'en',
    session: {
      referrerHost: 'www.google.com',
      utmSource: 'google',
      utmMedium: 'cpc',
      utmCampaign: 'fall-visa',
      sessionId: '93af1378-2461-4bbb-a790-50809f90e5c3',
      landingPage: '/',
    },
    policyId: 'opt-fee',
    outboundClick:
      'https://www.reginfo.gov/public/do/eoDetails?rrid=1505717#top',
  });

  assert.deepEqual(payload, {
    eventType: 'outbound_click',
    visitorId: '8879af56-f71b-4baf-af91-d5955760eada',
    pathname: '/',
    language: 'en',
    referrerHost: 'www.google.com',
    utmSource: 'google',
    utmMedium: 'cpc',
    utmCampaign: 'fall-visa',
    sessionId: '93af1378-2461-4bbb-a790-50809f90e5c3',
    landingPage: '/',
    policyId: 'opt-fee',
    outboundClick:
      'https://www.reginfo.gov/public/do/eoDetails?rrid=1505717#top',
  });
});

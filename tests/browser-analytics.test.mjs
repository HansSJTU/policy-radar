import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';

const bundle = await build({
  entryPoints: ['components/browser-analytics.ts'],
  bundle: true,
  platform: 'node',
  format: 'esm',
  write: false,
});
const { createBrowserAnalyticsSession, sendBrowserAnalyticsEvent } = await import(
  'data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64')
);

function browserFixture(t) {
  const originals = new Map();
  const setGlobal = (name, descriptor) => {
    if (!originals.has(name)) originals.set(name, Object.getOwnPropertyDescriptor(globalThis, name));
    Object.defineProperty(globalThis, name, { configurable: true, ...descriptor });
  };
  t.after(() => {
    for (const [name, descriptor] of originals) {
      if (descriptor) Object.defineProperty(globalThis, name, descriptor);
      else delete globalThis[name];
    }
  });

  const location = new URL('https://example.com/?utm_source=xhs&utm_campaign=%20fall%00%7F%20');
  const values = new Map();
  setGlobal('window', { value: { location } });
  setGlobal('document', { value: { referrer: 'https://search.example/query', documentElement: { lang: 'en' } } });
  setGlobal('sessionStorage', { value: {
    getItem: key => values.get(key) ?? null,
    setItem: (key, value) => values.set(key, value),
  } });
  return { location, setGlobal };
}

test('browser attribution keeps the first landing page and cleans campaign values', t => {
  const { location } = browserFixture(t);
  const first = createBrowserAnalyticsSession();
  location.href = 'https://example.com/updates?utm_source=changed';
  assert.deepEqual(createBrowserAnalyticsSession(), first);
  assert.equal(first.landingPage, '/');
  assert.equal(first.referrerHost, 'search.example');
  assert.equal(first.utmSource, 'xhs');
  assert.equal(first.utmCampaign, 'fall');
});

test('browser attribution survives an exception accessing the storage property', t => {
  const { setGlobal } = browserFixture(t);
  setGlobal('sessionStorage', { get() { throw new Error('Storage blocked'); } });
  const session = createBrowserAnalyticsSession();
  assert.equal(session.landingPage, '/');
  assert.equal(session.utmSource, 'xhs');
  assert.match(session.sessionId, /^[0-9a-f-]{36}$/i);
});

test('all browser event types keep their transport options and event-specific fields', t => {
  const { location, setGlobal } = browserFixture(t);
  const session = createBrowserAnalyticsSession();
  location.href = 'https://example.com/policies/opt-fee?lang=en';
  const calls = [];
  setGlobal('fetch', { value: (url, options) => {
    calls.push({ url, ...options, body: JSON.parse(options.body) });
    return Promise.resolve();
  } });
  for (const eventType of ['page_view', 'outbound_click', 'share']) {
    sendBrowserAnalyticsEvent({
      eventType, visitorId: '8879af56-f71b-4baf-af91-d5955760eada', session,
      policyId: 'opt-fee',
      ...(eventType === 'outbound_click' ? { outboundClick: 'https://source.example/path' } : {}),
      ...(eventType === 'share' ? { shareMethod: 'wechat', shareAction: 'copy_success' } : {}),
    });
  }
  assert.equal(calls.length, 3);
  for (const call of calls) {
    assert.equal(call.url, '/api/visit');
    assert.equal(call.method, 'POST');
    assert.equal(call.keepalive, true);
    assert.equal(call.credentials, 'same-origin');
    assert.deepEqual(call.headers, { 'Content-Type': 'application/json' });
    assert.equal(call.body.pathname, '/policies/opt-fee');
    assert.equal(call.body.language, 'en');
    assert.equal(call.body.landingPage, '/');
    assert.equal(call.body.policyId, 'opt-fee');
    assert.equal(call.body.sessionId, session.sessionId);
  }
  assert.deepEqual(calls.map(call => call.body.eventType), ['page_view', 'outbound_click', 'share']);
  assert.equal(calls[0].body.outboundClick, '');
  assert.equal(calls[1].body.outboundClick, 'https://source.example/path');
  assert.equal(calls[2].body.shareMethod, 'wechat');
  assert.equal(calls[2].body.shareAction, 'copy_success');
  assert.ok(!('shareMethod' in calls[0].body));
  assert.ok(!('shareMethod' in calls[1].body));
});

test('a failed analytics request does not produce an unhandled rejection', async t => {
  const { setGlobal } = browserFixture(t);
  setGlobal('fetch', { value: () => Promise.reject(new Error('Offline')) });
  sendBrowserAnalyticsEvent({
    eventType: 'page_view', visitorId: '8879af56-f71b-4baf-af91-d5955760eada',
    session: createBrowserAnalyticsSession(),
  });
  await new Promise(resolve => setImmediate(resolve));
});

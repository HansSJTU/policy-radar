import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';

// Replace only the Cloudflare service bindings; execute the real route and writer.
const result = await build({
  stdin: {
    contents: "export { POST } from './app/api/visit/route.ts'; export { env } from 'cloudflare:workers';",
    resolveDir: process.cwd(),
  },
  bundle: true, platform: 'node', format: 'esm', write: false,
  plugins: [{
    name: 'local-analytics-bindings',
    setup(builder) {
      builder.onResolve({ filter: /^cloudflare:workers$/ }, () => ({
        path: 'bindings', namespace: 'local-analytics',
      }));
      builder.onLoad({ filter: /.*/, namespace: 'local-analytics' }, () => ({
        contents: 'export const env = {};', loader: 'js',
      }));
    },
  }],
});
const { POST, env } = await import('data:text/javascript;base64,' + Buffer.from(result.outputFiles[0].text).toString('base64'));
const visitorId = '8879af56-f71b-4baf-af91-d5955760eada';

function request(body, origin = 'https://example.com') {
  return new Request('https://example.com/api/visit', {
    method: 'POST',
    headers: { origin, 'content-type': 'application/json', 'CF-IPCountry': 'US' },
    body: JSON.stringify(body),
  });
}

test('share API writes each channel to the real Analytics Engine serializer without touching D1', async () => {
  const points = [];
  env.ANALYTICS = { writeDataPoint: point => points.push(point) };
  env.DB = { batch() { assert.fail('Share must not write D1'); }, prepare() { assert.fail('Share must not initialize D1'); } };
  for (const shareMethod of ['messages', 'email', 'wechat', 'whatsapp', 'copy_link']) {
    const response = await POST(request({
      visitorId, eventType: 'share', shareMethod, shareAction: 'select',
      pathname: '/updates', language: 'en', utmSource: 'xhs',
    }));
    assert.equal(response.status, 204);
  }
  assert.equal(points.length, 5);
  assert.deepEqual(points.map(point => point.blobs[13]), ['messages', 'email', 'wechat', 'whatsapp', 'copy_link']);
  for (const point of points) {
    assert.equal(point.blobs[0], 'share');
    assert.equal(point.blobs[2], 'US');
    assert.equal(point.blobs[3], '/updates');
    assert.equal(point.blobs[6], 'xhs');
    assert.equal(point.blobs[14], 'select');
    assert.notEqual(point.indexes[0], visitorId);
  }
});

test('share API rejects invalid channels, fabricated send outcomes and cross-site requests before writing', async () => {
  const points = [];
  env.ANALYTICS = { writeDataPoint: point => points.push(point) };
  for (const body of [
    null,
    { visitorId, eventType: 'invalid' },
    { visitorId, eventType: 'share', shareMethod: 'facebook', shareAction: 'select' },
    { visitorId, eventType: 'share', shareMethod: 'email', shareAction: 'sent' },
    { visitorId, eventType: 'share', shareMethod: 'whatsapp', shareAction: 'copy_success' },
  ]) {
    assert.equal((await POST(request(body))).status, 400);
  }
  assert.equal((await POST(request({
    visitorId, eventType: 'share', shareMethod: 'wechat', shareAction: 'select',
  }, 'https://other.example'))).status, 403);
  assert.equal(points.length, 0);
});

import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { isOverWriteLimit, tooManyRequests, writeLimitFor } from '../app/rate-limit.ts';

const worker = await readFile(new URL('../worker/index.ts', import.meta.url), 'utf8');

function request(path, { method = 'POST', address = '203.0.113.7' } = {}) {
  return {
    method,
    url: `https://stayradar.org${path}`,
    headers: new Headers(address ? { 'cf-connecting-ip': address } : {}),
  };
}

// Allows `limit` calls per key, like the Cloudflare binding within one period.
function limiter(limit) {
  const counts = new Map();
  return {
    keys: counts,
    async limit({ key }) {
      const used = counts.get(key) ?? 0;
      if (used >= limit) return { success: false };
      counts.set(key, used + 1);
      return { success: true };
    },
  };
}

test('only writes to the rating and visit endpoints are counted, per client address', () => {
  assert.deepEqual(writeLimitFor(request('/api/policy-ratings')), {
    limiter: 'RATINGS_LIMITER',
    key: '203.0.113.7',
  });
  assert.deepEqual(writeLimitFor(request('/api/visit')), {
    limiter: 'VISITS_LIMITER',
    key: '203.0.113.7',
  });
  assert.equal(writeLimitFor(request('/api/policy-ratings', { method: 'GET' })), null);
  assert.equal(writeLimitFor(request('/api/policy-ratings?votes=genuine', { method: 'GET' })), null);
  assert.equal(writeLimitFor(request('/policies/opt-fee')), null);
  assert.equal(writeLimitFor(request('/')), null);
});

test('a request without a client address is not limited', () => {
  assert.equal(writeLimitFor(request('/api/visit', { address: null })), null);
});

test('requests over the limit are refused, and each address is counted on its own', async () => {
  const limiters = { RATINGS_LIMITER: limiter(2), VISITS_LIMITER: limiter(1) };
  assert.equal(await isOverWriteLimit(request('/api/policy-ratings'), limiters), false);
  assert.equal(await isOverWriteLimit(request('/api/policy-ratings'), limiters), false);
  assert.equal(await isOverWriteLimit(request('/api/policy-ratings'), limiters), true);
  // A different address still has its own allowance.
  assert.equal(
    await isOverWriteLimit(request('/api/policy-ratings', { address: '198.51.100.9' }), limiters),
    false,
  );
  // Visits are counted apart from ratings.
  assert.equal(await isOverWriteLimit(request('/api/visit'), limiters), false);
  assert.equal(await isOverWriteLimit(request('/api/visit'), limiters), true);
  // Reads never touch a limiter.
  assert.equal(await isOverWriteLimit(request('/api/policy-ratings', { method: 'GET' }), limiters), false);
  assert.deepEqual([...limiters.RATINGS_LIMITER.keys.keys()], ['203.0.113.7', '198.51.100.9']);
});

test('a missing or failing limiter never blocks the endpoint', async () => {
  assert.equal(await isOverWriteLimit(request('/api/visit'), {}), false);
  const failing = { limit: async () => { throw new Error('limiter unavailable'); } };
  assert.equal(
    await isOverWriteLimit(request('/api/policy-ratings'), { RATINGS_LIMITER: failing }),
    false,
  );
});

test('the refusal is a 429 that is never cached', async () => {
  const response = await tooManyRequests();
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('Cache-Control'), 'no-store');
  assert.equal(response.headers.get('Retry-After'), '60');
  assert.deepEqual(await response.json(), { error: 'Too many requests' });
});

test('a small request body is read before refusing, a large one is left alone', async () => {
  const post = (body, length) =>
    new Request('https://stayradar.org/api/visit', {
      method: 'POST',
      headers: { 'content-length': String(length) },
      body,
    });
  const small = post('{}', 2);
  assert.equal((await tooManyRequests(small)).status, 429);
  assert.equal(small.bodyUsed, true);
  const large = post('x'.repeat(10_000), 10_000);
  assert.equal((await tooManyRequests(large)).status, 429);
  assert.equal(large.bodyUsed, false);
});

test('the Worker checks the limit before any request reaches the app or D1', () => {
  const check = worker.indexOf('isOverWriteLimit(request, env)');
  assert.ok(check > 0);
  assert.ok(check < worker.indexOf('ratingsCacheKey(request)'));
  assert.ok(check < worker.indexOf('handler.fetch('));
});

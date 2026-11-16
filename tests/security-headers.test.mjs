import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { SECURITY_HEADERS, withSecurityHeaders } from '../app/security-headers.ts';

const worker = await readFile(new URL('../worker/index.ts', import.meta.url), 'utf8');
const assetHeaders = await readFile(new URL('../public/_headers', import.meta.url), 'utf8');

test('a response keeps its status, body and own headers and gains the security headers', async () => {
  const served = withSecurityHeaders(
    new Response('<p>ok</p>', {
      status: 404,
      headers: { 'Content-Type': 'text/html', 'Cache-Control': 'no-store' },
    }),
  );
  assert.equal(served.status, 404);
  assert.equal(await served.text(), '<p>ok</p>');
  assert.equal(served.headers.get('Content-Type'), 'text/html');
  assert.equal(served.headers.get('Cache-Control'), 'no-store');
  assert.equal(served.headers.get('Strict-Transport-Security'), 'max-age=31536000');
  assert.equal(served.headers.get('X-Content-Type-Options'), 'nosniff');
  assert.equal(served.headers.get('Referrer-Policy'), 'strict-origin-when-cross-origin');
  assert.equal(served.headers.get('X-Frame-Options'), 'DENY');
  assert.match(served.headers.get('Content-Security-Policy'), /frame-ancestors 'none'/);
  for (const name of Object.keys(SECURITY_HEADERS)) assert.ok(served.headers.has(name), name);
});

test('redirects, whose headers are read-only, get the headers too', () => {
  const served = withSecurityHeaders(Response.redirect('https://stayradar.org/', 301));
  assert.equal(served.status, 301);
  assert.equal(served.headers.get('Location'), 'https://stayradar.org/');
  assert.equal(served.headers.get('X-Content-Type-Options'), 'nosniff');
});

test('every response the Worker returns passes through the headers', () => {
  assert.match(worker, /return withSecurityHeaders\(await respond\(request, env, ctx\)\);/);
  // The only `fetch` handler is the wrapper; everything else is in respond().
  assert.equal(worker.match(/async fetch\(/g).length, 1);
});

test('files served without the Worker are never type-guessed', () => {
  assert.match(assetHeaders, /^\/\*\n {2}X-Content-Type-Options: nosniff\n/);
});

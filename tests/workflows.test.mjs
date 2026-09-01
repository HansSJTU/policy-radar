import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

async function optionalFile(path) {
  try {
    return await readFile(new URL(path, import.meta.url), 'utf8');
  } catch {
    return '';
  }
}

const ci = await optionalFile('../.github/workflows/ci.yml');
const deploy = await optionalFile('../.github/workflows/deploy.yml');

test('CI validates tests and production build without deployment secrets', () => {
  assert.match(ci, /pull_request:/);
  assert.match(ci, /npm ci/);
  assert.match(ci, /npm test/);
  assert.match(ci, /npm run build/);
  assert.doesNotMatch(ci, /CLOUDFLARE_API_TOKEN/);
});

test('production workflow validates and deploys from main', () => {
  assert.match(deploy, /branches:\s*\[main\]/);
  assert.match(deploy, /environment:\s*production/);
  assert.match(deploy, /CLOUDFLARE_API_TOKEN/);
  assert.match(deploy, /CLOUDFLARE_ACCOUNT_ID/);
  assert.match(deploy, /npm test/);
  assert.match(deploy, /npm run build/);
  assert.match(deploy, /npm run deploy/);
});

import assert from 'node:assert/strict';
import test from 'node:test';

import { canonicalRedirect } from '../app/canonical-host.ts';
import { POLICY_SITE_URL } from '../app/policy-links.ts';

test('uses stayradar.org as the site address', () => {
  assert.equal(POLICY_SITE_URL, 'https://stayradar.org');
});

test('moves page loads on the old and www addresses to stayradar.org', () => {
  assert.equal(
    canonicalRedirect('https://policy-radar.uspolicy.workers.dev/policies/opt-fee?lang=zh&from=CPT', 'GET'),
    'https://stayradar.org/policies/opt-fee?lang=zh&from=CPT',
  );
  assert.equal(
    canonicalRedirect('https://www.stayradar.org/', 'HEAD'),
    'https://stayradar.org/',
  );
});

test('drops a policy page `from` that names no stage', () => {
  assert.equal(
    canonicalRedirect('https://stayradar.org/policies/h1b-fee?lang=en&from=all', 'GET'),
    'https://stayradar.org/policies/h1b-fee?lang=en',
  );
  assert.equal(
    canonicalRedirect('https://stayradar.org/policies/opt-fee?from=all&lang=zh', 'GET'),
    'https://stayradar.org/policies/opt-fee?lang=zh',
  );
  assert.equal(
    canonicalRedirect('https://www.stayradar.org/policies/opt-fee?lang=zh&from=bogus', 'GET'),
    'https://stayradar.org/policies/opt-fee?lang=zh',
  );
  assert.equal(
    canonicalRedirect('https://stayradar.org/policies/opt-fee?from=all', 'GET'),
    'https://stayradar.org/policies/opt-fee',
  );
});

test('keeps a stage `from` and leaves other pages alone', () => {
  assert.equal(canonicalRedirect('https://stayradar.org/policies/opt-fee?lang=en&from=OPT', 'GET'), null);
  assert.equal(canonicalRedirect('https://stayradar.org/?from=all', 'GET'), null);
  assert.equal(canonicalRedirect('https://stayradar.org/policies/opt-fee/share-image?from=all', 'GET'), null);
});

test('leaves the canonical domain, local previews and analytics posts alone', () => {
  assert.equal(canonicalRedirect('https://stayradar.org/updates', 'GET'), null);
  assert.equal(canonicalRedirect('http://localhost:8787/', 'GET'), null);
  assert.equal(
    canonicalRedirect('https://policy-radar.uspolicy.workers.dev/api/visit', 'POST'),
    null,
  );
});

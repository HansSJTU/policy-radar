import assert from 'node:assert/strict';
import test from 'node:test';

import { resolveLanguage, cookieValue } from '../app/language.ts';
import { POLICY_IDS } from '../app/policy-ids.ts';
import { SCHOOL_IDS } from '../app/school-pages.ts';
import { UPDATE_MONTHS } from '../app/update-pages.ts';
import {
  isProbePath,
  ratingsCacheKey,
  shortCacheKey,
  staticAssetFor,
  staticFiles,
} from '../app/static-pages.ts';

function assetFor(url, headers = {}, method = 'GET') {
  return staticAssetFor({
    method,
    url: `https://stayradar.org${url}`,
    headers: new Headers(headers),
  });
}

test('resolves the page language in the same order as the renderer', () => {
  assert.equal(resolveLanguage({ explicit: 'en', saved: 'zh' }), 'en');
  assert.equal(resolveLanguage({ explicit: 'fr', saved: 'zh' }), 'zh');
  assert.equal(
    resolveLanguage({
      referrer: 'https://www.xiaohongshu.com/explore',
      acceptLanguage: 'en-US',
    }),
    'zh',
  );
  assert.equal(resolveLanguage({ acceptLanguage: 'zh-CN,zh;q=0.9' }), 'zh');
  assert.equal(resolveLanguage({}), 'en');
});

test('reads one cookie from a Cookie header', () => {
  assert.equal(cookieValue('a=1; policy-radar-language=zh', 'policy-radar-language'), 'zh');
  assert.equal(cookieValue('xpolicy-radar-language=zh', 'policy-radar-language'), undefined);
  assert.equal(cookieValue(null, 'policy-radar-language'), undefined);
});

test('every prebuilt file is rendered from a request that maps back to it', () => {
  const files = staticFiles();
  // Home, updates with one page per month and radar, each policy page for
  // every return path, the school index and every school page, and the
  // link-preview images, in both languages.
  assert.equal(
    files.length,
    2 * (5 + 1 + UPDATE_MONTHS.length + 1 + 1 + POLICY_IDS.length * 6 + 1 + SCHOOL_IDS.length),
  );
  assert.equal(new Set(files.map((entry) => entry.file)).size, files.length);
  for (const { language, source, file } of files) {
    const asset = assetFor(source, {
      cookie: `policy-radar-language=${language}`,
    });
    assert.equal(asset, `/${file.replace(/\.html$/, '')}`, source);
  }
});

test('serves pages in the reader language without a lang parameter', () => {
  assert.equal(assetFor('/', { 'accept-language': 'zh-CN' }), '/__static/zh/home-all');
  assert.equal(
    assetFor('/?path=CPT', { cookie: 'policy-radar-language=en' }),
    '/__static/en/home-CPT',
  );
  assert.equal(
    assetFor('/policies/opt-fee?from=bogus&utm_source=x', {
      'accept-language': 'en-US',
    }),
    '/__static/en/policies/opt-fee-all',
  );
  assert.equal(
    assetFor('/radar?stage=opt&goal=none', { 'accept-language': 'zh-CN' }),
    '/__static/zh/radar',
  );
  assert.equal(
    assetFor(`/updates/${UPDATE_MONTHS[0]}`, { 'accept-language': 'zh-CN' }),
    `/__static/zh/updates-${UPDATE_MONTHS[0]}`,
  );
  // Link-preview images ignore the reader and default to Chinese.
  assert.equal(
    assetFor('/share-image', { 'accept-language': 'en-US' }),
    '/__static/zh/share.png',
  );
});

test('leaves dynamic requests to the renderer', () => {
  assert.equal(assetFor('/stats'), null);
  assert.equal(assetFor('/policies/not-a-policy'), null);
  assert.equal(assetFor('/updates/1999-01'), null);
  assert.equal(assetFor('/updates/change/some-change'), null);
  assert.equal(assetFor('/policies/not-a-policy/share-image'), null);
  assert.equal(assetFor('/?lang=en', { rsc: '1' }), null);
  assert.equal(assetFor('/?lang=en&_rsc=abc'), null);
  assert.equal(assetFor('/', {}, 'POST'), null);
  assert.equal(assetFor('/__static/zh/home-all'), null);
});

test('keeps a short-lived copy of the stats page per language', () => {
  const key = (url, headers = {}, method = 'GET') =>
    shortCacheKey({
      method,
      url: `https://stayradar.org${url}`,
      headers: new Headers(headers),
    });
  assert.equal(
    key('/stats', { 'accept-language': 'zh-CN' }),
    'https://stayradar.org/__short-cache/stats?lang=zh',
  );
  assert.equal(
    key('/stats?lang=en&utm_source=x', { cookie: 'policy-radar-language=zh' }),
    'https://stayradar.org/__short-cache/stats?lang=en',
  );
  assert.equal(key('/stats', { rsc: '1' }), null);
  assert.equal(key('/stats', {}, 'POST'), null);
  assert.equal(key('/api/visit'), null);
});

test('answers scanner probes without rendering, but not real routes', () => {
  for (const path of ['/.env', '/wp-admin/install.php', '/config/config.json', '/.git/HEAD', '/favicon.ico', '/apple-touch-icon-precomposed.png', '/secrets.yaml'])
    assert.equal(isProbePath(path), true, path);
  for (const path of ['/', '/stats', '/feed.xml', '/sitemap.xml', '/robots.txt', '/policies/opt-fee', '/schools/ucla', '/api/policy-ratings'])
    assert.equal(isProbePath(path), false, path);
});

test('caches vote aggregates per query, not per reader', () => {
  const key = (url, method = 'GET') =>
    ratingsCacheKey({ method, url: `https://stayradar.org${url}`, headers: new Headers() });
  assert.equal(key('/api/policy-ratings'), 'https://stayradar.org/__short-cache/policy-ratings');
  assert.equal(key('/api/policy-ratings?votes=genuine'), 'https://stayradar.org/__short-cache/policy-ratings?votes=genuine');
  assert.equal(key('/api/policy-ratings', 'POST'), null);
  assert.equal(key('/api/visit'), null);
});

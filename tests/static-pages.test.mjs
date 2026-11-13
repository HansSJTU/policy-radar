import assert from 'node:assert/strict';
import test from 'node:test';

import { resolveLanguage, cookieValue } from '../app/language.ts';
import { POLICY_IDS } from '../app/policy-ids.ts';
import { SCHOOL_IDS } from '../app/school-pages.ts';
import { staticAssetFor, staticFiles } from '../app/static-pages.ts';

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
  // Home, updates and radar, each policy page for every return path, the
  // school index and every school page, and the link-preview images, in both
  // languages.
  assert.equal(
    files.length,
    2 * (5 + 1 + 1 + 1 + POLICY_IDS.length * 6 + 1 + SCHOOL_IDS.length),
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
  // Link-preview images ignore the reader and default to Chinese.
  assert.equal(
    assetFor('/share-image', { 'accept-language': 'en-US' }),
    '/__static/zh/share.png',
  );
});

test('leaves dynamic requests to the renderer', () => {
  assert.equal(assetFor('/stats'), null);
  assert.equal(assetFor('/policies/not-a-policy'), null);
  assert.equal(assetFor('/policies/not-a-policy/share-image'), null);
  assert.equal(assetFor('/?lang=en', { rsc: '1' }), null);
  assert.equal(assetFor('/?lang=en&_rsc=abc'), null);
  assert.equal(assetFor('/', {}, 'POST'), null);
  assert.equal(assetFor('/__static/zh/home-all'), null);
});

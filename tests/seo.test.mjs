import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { getPolicies } from '../app/policy-data.ts';
import { POLICY_IDS } from '../app/policy-ids.ts';
import { languageAlternates, POLICY_SITE_URL } from '../app/policy-links.ts';
import robots from '../app/robots.ts';
import sitemap from '../app/sitemap.ts';
import { homeJsonLd, jsonLdScript, policyJsonLd } from '../app/structured-data.ts';
import { buildUpdateFeed, changeAnchor, feedUrl } from '../app/update-feed.ts';
import { getUpdateLog } from '../app/update-log.ts';

test('gives each language its own canonical URL and names both versions', () => {
  assert.deepEqual(languageAlternates('/updates', 'zh'), {
    canonical: `${POLICY_SITE_URL}/updates?lang=zh`,
    languages: {
      'zh-CN': `${POLICY_SITE_URL}/updates?lang=zh`,
      en: `${POLICY_SITE_URL}/updates?lang=en`,
      'x-default': `${POLICY_SITE_URL}/updates`,
    },
  });
});

test('lists the home page, every policy and the update log in both languages', () => {
  const urls = sitemap().map((entry) => entry.url);
  const paths = ['/', ...POLICY_IDS.map((id) => `/policies/${id}`), '/updates'];

  assert.deepEqual(
    [...urls].sort(),
    paths.flatMap((path) => [
      `${POLICY_SITE_URL}${path}?lang=zh`,
      `${POLICY_SITE_URL}${path}?lang=en`,
    ]).sort(),
  );
  for (const entry of sitemap()) {
    assert.match(entry.lastModified, /^\d{4}-\d{2}-\d{2}$/);
    assert.deepEqual(Object.keys(entry.alternates.languages), ['zh-CN', 'en', 'x-default']);
  }
});

test('points crawlers at the sitemap and away from the API', () => {
  assert.deepEqual(robots(), {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${POLICY_SITE_URL}/sitemap.xml`,
  });
});

test('keeps the page language on every internal navigation link', async () => {
  const files = [
    'app/policy-radar-client.tsx',
    'app/mobile-site-menu.tsx',
    'app/updates/page.tsx',
    'app/stats/page.tsx',
  ];
  for (const file of files) {
    const source = await readFile(new URL(`../${file}`, import.meta.url), 'utf8');
    // e.g. `language === 'en' ? '/updates?lang=en' : '/updates'`
    assert.doesNotMatch(source, /\?lang=en[^']*' : '\//, file);
    assert.doesNotMatch(source, /href="\/[a-z#-]*"/, file);
  }
});

test('publishes the update log as an Atom feed in each language', () => {
  for (const language of ['zh', 'en']) {
    const xml = buildUpdateFeed(language);
    const changes = getUpdateLog(language).flatMap((update) => update.changes);
    const entries = xml.match(/<entry>/g) ?? [];
    const [latest] = changes;

    assert.match(xml, /^<\?xml version="1.0" encoding="utf-8"\?>\n<feed xmlns="http:\/\/www.w3.org\/2005\/Atom"/);
    assert.equal(entries.length, Math.min(changes.length, 60));
    assert.ok(xml.includes(`<link rel="self" type="application/atom+xml" href="${feedUrl(language)}"/>`));
    assert.ok(xml.includes(`${POLICY_SITE_URL}/updates?lang=${language}#${changeAnchor(latest)}`));
    assert.doesNotMatch(xml, /<(?!\/?(feed|id|title|subtitle|link|updated|author|name|entry|category|summary|content)\b|\?xml)/);
  }
});

test('describes each policy for search engines with its review date and official sources', () => {
  for (const language of ['zh', 'en']) {
    for (const policy of getPolicies(language)) {
      const data = policyJsonLd(policy, language);
      assert.equal(data['@type'], 'Article');
      assert.equal(data.headline, policy.title);
      assert.equal(data.dateModified, policy.checkedOn);
      assert.equal(data.url, `${POLICY_SITE_URL}/policies/${policy.id}?lang=${language}`);
      assert.ok(data.citation.length > 0, policy.id);
      assert.ok(data.citation.every((source) => !source.url.includes('uscardforum.com')));
    }
  }
  assert.equal(homeJsonLd('zh')['@type'], 'WebSite');
});

test('keeps structured data from closing its script element', () => {
  assert.equal(jsonLdScript({ text: '</script><b>' }), '{"text":"\\u003c/script>\\u003cb>"}');
});

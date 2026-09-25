import assert from 'node:assert/strict';
import test from 'node:test';
import { getSchoolShareItem } from '../app/item-share-model.ts';
import { getPolicyShareItem } from '../app/policy-share.ts';
import { buildItemShareContent } from '../app/share-model.ts';
import { POLICY_IDS } from '../app/policy-ids.ts';
import { getPolicy } from '../app/policy-data.ts';
import { SITE_UPDATED_ON } from '../app/policy-freshness.ts';
import { verifiedSchools, communitySchools, getVerifiedSchools, getCommunitySchools } from '../app/cpt-schools.ts';
import { wrapShareText } from '../app/share-image.ts';

test('all policies share the exact status, effect, scope and review date in both languages', () => {
  for (const language of ['zh', 'en']) for (const id of POLICY_IDS) {
    const item = getPolicyShareItem(id, language);
    const policy = getPolicy(id, language);
    const content = buildItemShareContent(item, language);
    for (const value of [policy.title, policy.summary, policy.status, policy.effectLabel, policy.audience, policy.caveat, policy.checkedOn]) {
      assert.ok(content.text.includes(value), `${language}/${id}: missing ${value}`);
    }
    assert.equal(new URL(content.url).pathname, `/policies/${id}`);
    assert.ok(content.text.endsWith(content.url));
    if (language === 'en') assert.doesNotMatch(content.text, /[\u3400-\u9fff]/u);
  }
  assert.equal(getPolicyShareItem('missing', 'zh'), undefined);
});

test('school anchors are unique, language independent and preserve each record review date', () => {
  const ids = new Set();
  for (const school of [...verifiedSchools, ...communitySchools]) {
    assert.match(school.id, /^[a-z0-9][a-z0-9-]{0,63}$/);
    assert.ok(!ids.has(school.id));
    ids.add(school.id);
    assert.match(school.checkedOn, /^\d{4}-\d{2}-\d{2}$/);
    for (const language of ['zh', 'en']) {
      const localized = [...getVerifiedSchools(language), ...getCommunitySchools(language)]
        .find(({ id }) => id === school.id);
      const item = getSchoolShareItem(localized, language);
      const content = buildItemShareContent(item, language);
      assert.equal(new URL(content.url).hash, `#school-${school.id}`);
      assert.equal(new URL(content.url).searchParams.get('lang'), language);
      assert.equal(item.checkedOn, school.checkedOn);
      assert.ok(content.text.includes(school.school));
      assert.ok(content.text.includes(localized.state));
      if (language === 'en') assert.doesNotMatch(content.text, /[\u3400-\u9fff]/u);
    }
  }
});

test('community reports never inherit a verified status, and department boundaries survive sharing', () => {
  for (const school of getCommunitySchools('zh')) {
    const item = getSchoolShareItem(school, 'zh');
    assert.equal(item.unverified, true);
    assert.match(item.status, /待核实/);
    assert.match(item.caveat, /截图.*尚无公开确认/);
  }
  const nyu = getVerifiedSchools('zh').find(s => s.school.includes('Tandon'));
  const content = buildItemShareContent(getSchoolShareItem(nyu, 'zh'), 'zh');
  assert.match(content.text, /Tandon Mathematics/);
  assert.match(content.text, /不外推 NYU 全校/);
  const old = getSchoolShareItem({ ...nyu, checkedOn: '2026-08-25' }, 'zh');
  assert.match(buildItemShareContent(old, 'zh').text, /最后核对：2026-08-25/);
});

test('earned shares replace incoming campaigns and preserve the exact entry', () => {
  const item = getPolicyShareItem('opt-fee', 'zh');
  const content = buildItemShareContent({ ...item, href: `${item.href}&utm_source=xhs&token=secret&from=H-1B` }, 'en');
  const url = new URL(content.url);
  assert.equal(url.searchParams.get('utm_source'), 'share');
  assert.equal(url.searchParams.get('utm_medium'), 'earned');
  assert.equal(url.searchParams.get('utm_campaign'), 'policy-opt-fee');
  assert.doesNotMatch(content.url, /xhs|secret|from=/);
});

test('image wrapping preserves qualifiers, long URLs, dates and Unicode without clipping', () => {
  for (const value of [
    '尚未生效 · 金额未确认；不外推全校。最后核对 2026-09-07',
    'Not in effect. Limited to the named department. Last checked 2026-09-07.',
    'https://policy-radar.uspolicy.workers.dev/#school-new-york-university-tandon-mathematics',
    'CPT 👩🏽‍🎓 中文\n第二段核对日期',
  ]) {
    const measure = text => Array.from(text).length;
    const lines = wrapShareText(value, 14, measure);
    assert.ok(lines.every(line => measure(line) <= 14));
    assert.equal(lines.join('').replace(/\s/g, ''), value.replace(/\s/g, ''));
  }
});

test('shared policies carry their own review date, not the site update date', async () => {
  const { policyContents } = await import('../content/policies/index.ts');
  for (const content of policyContents) {
    for (const language of ['zh', 'en']) {
      const item = getPolicyShareItem(content.id, language);
      assert.equal(item.checkedOn, content.checkedOn);
      assert.ok(buildItemShareContent(item, language).text.includes(content.checkedOn));
    }
  }
});


test('H-4 share keeps its actual review date when the site date is later', () => {
  const checkedOn = '2026-09-07';
  assert.notEqual(checkedOn, SITE_UPDATED_ON);
  for (const language of ['zh', 'en']) {
    const policy = getPolicy('h4-ead', language);
    const originalDate = policy.checkedOn;
    try {
      policy.checkedOn = checkedOn;
      const item = getPolicyShareItem('h4-ead', language);
      assert.equal(item.checkedOn, checkedOn);
      const { text } = buildItemShareContent(item, language);
      assert.ok(text.includes(checkedOn));
      assert.ok(!text.includes(SITE_UPDATED_ON));
    } finally {
      policy.checkedOn = originalDate;
    }
  }
});

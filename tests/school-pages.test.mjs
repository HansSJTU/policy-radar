import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { communitySchools, verifiedSchools } from '../app/cpt-schools.ts';
import { getPolicies } from '../app/policy-data.ts';
import { POLICY_SITE_URL } from '../app/policy-links.ts';
import {
  clip,
  getSchoolPage,
  getSchoolPages,
  isSchoolId,
  SCHOOL_IDS,
  schoolHref,
  schoolMetadata,
} from '../app/school-pages.ts';
import { schoolJsonLd } from '../app/structured-data.ts';

test('every CPT school record has its own page in both languages', () => {
  assert.equal(SCHOOL_IDS.length, verifiedSchools.length + communitySchools.length);
  for (const id of SCHOOL_IDS) {
    for (const language of ['zh', 'en']) {
      const school = getSchoolPage(id, language);
      assert.ok(school, `${id}/${language}`);
      assert.ok(school.state && school.detail, id);
    }
  }
  assert.equal(getSchoolPage('not-a-school', 'en'), null);
  assert.equal(isSchoolId('../policies'), false);
  assert.equal(schoolHref('ucsb', 'zh'), '/schools/ucsb?lang=zh');
});

test('school page titles lead with the school and CPT, as readers search', () => {
  const ucsb = schoolMetadata(getSchoolPage('ucsb', 'en'), 'en');
  assert.equal(ucsb.title, 'UCSB CPT Policy: Tighter review | Stay Path Radar');
  assert.equal(ucsb.url, `${POLICY_SITE_URL}/schools/ucsb?lang=en`);
  const cmu = schoolMetadata(getSchoolPage('carnegie-mellon-university', 'zh'), 'zh');
  assert.match(cmu.title, /^Carnegie Mellon University \(CMU\) CPT 政策：收紧｜留美路径雷达$/);
  // An email-screenshot record states no status in its title.
  const caltech = schoolMetadata(getSchoolPage('caltech', 'en'), 'en');
  assert.equal(caltech.title, 'Caltech CPT Policy | Stay Path Radar');

  for (const id of SCHOOL_IDS) {
    for (const language of ['zh', 'en']) {
      const { description } = schoolMetadata(getSchoolPage(id, language), language);
      assert.ok(description.length <= (language === 'en' ? 156 : 81), `${id}/${language}`);
      assert.ok(description.length > 20, `${id}/${language}`);
    }
  }
});

test('descriptions are cut at a sentence end or a word, never mid-word', () => {
  assert.equal(clip('Short.', 50), 'Short.');
  assert.equal(clip('One sentence here. Another sentence that runs long.', 30), 'One sentence here.');
  assert.equal(clip('alpha beta gamma delta epsilon', 20), 'alpha beta gamma…');
  assert.equal(clip('第一句很长很长很长。第二句也很长很长很长很长。', 15), '第一句很长很长很长。');
});

test('the school index lists every school from A to Z', () => {
  const pages = getSchoolPages('en');
  assert.equal(pages.length, SCHOOL_IDS.length);
  const names = pages.map((school) => school.school);
  assert.deepEqual(names, [...names].sort((a, b) => a.localeCompare(b, 'en')));
});

test('school structured data names the school and its last check', () => {
  const school = getSchoolPage('mit', 'en');
  const data = schoolJsonLd(school, 'en');
  assert.equal(data.about.name, 'MIT');
  assert.equal(data.dateModified, school.checkedOn);
  assert.equal(data.citation[0].url, school.href);
  assert.equal('citation' in schoolJsonLd(getSchoolPage('caltech', 'en'), 'en'), false);
});

test('the home CPT tracker links to the school pages without bundling school data', async () => {
  const tracker = await readFile(new URL('../app/cpt-school-tracker.tsx', import.meta.url), 'utf8');
  assert.match(tracker, /href=\{`\/schools\?lang=\$\{language\}`\}/);
  assert.match(tracker, /schoolHref\(selectedEvidence\.id, language\)/);
  assert.doesNotMatch(tracker, /from '\.\/school-pages'/);
});

test('every policy has a search title and description in both languages', () => {
  for (const language of ['zh', 'en']) {
    for (const policy of getPolicies(language)) {
      assert.ok(policy.searchTitle, `${policy.id}/${language}`);
      assert.ok(policy.searchDescription, `${policy.id}/${language}`);
      assert.ok(policy.searchTitle.length <= (language === 'en' ? 70 : 36), `${policy.id}/${language}: ${policy.searchTitle}`);
      assert.ok(policy.searchDescription.length <= (language === 'en' ? 210 : 90), `${policy.id}/${language}`);
    }
  }
  const english = Object.fromEntries(getPolicies('en').map((policy) => [policy.id, policy.searchTitle]));
  // Words readers search for lead the titles.
  assert.match(english['opt-fee'], /^OPT Fee/);
  assert.match(english['h4-ead'], /^H-4 EAD/);
  assert.match(english['cpt-guidance'], /^CPT/);
  assert.match(english['perm-modernization'], /^PERM/);
});

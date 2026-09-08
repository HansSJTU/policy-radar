import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import test from 'node:test';

import { communitySchools, verifiedSchools } from '../app/cpt-schools.ts';

const source = await readFile(new URL('../app/home-copy.ts', import.meta.url), 'utf8');

const screenshotEvidence = {
  'UNC–Chapel Hill': ['/cpt-evidence/cpt_unc.jpeg'],
  Caltech: ['/cpt-evidence/cpt_caltech.jpeg'],
  UCLA: ['/cpt-evidence/cpt_ucla.jpeg'],
  'Purdue ECE': ['/cpt-evidence/cpt_purdue.jpeg'],
  'Goldey-Beacom College': ['/cpt-evidence/cpt_goldey_beacom.jpeg'],
  'Purdue University (ISS)': ['/cpt-evidence/cpt_purdue_iss.jpeg'],
};

const verifiedForumEvidence = {
  'UC Irvine': ['/cpt-evidence/cpt_uci.jpeg'],
  UCSB: [
    '/cpt-evidence/cpt_ucsb_1.jpeg',
    '/cpt-evidence/cpt_ucsb_2.jpeg',
  ],
  UIUC: ['/cpt-evidence/cpt_uiuc_notice.jpeg'],
  'University of Michigan': ['/cpt-evidence/cpt_michigan_notice.jpeg'],
  'Northwestern University': ['/cpt-evidence/cpt_northwestern_notice.png'],
  'Columbia University': ['/cpt-evidence/cpt_columbia_notice.webp'],
  MIT: ['/cpt-evidence/cpt_mit.jpeg'],
};

const verifiedWithoutForumEvidence = [
  'UC Berkeley',
  'UC Davis',
  'Boston University',
  'Texas A&M',
  'UT Dallas',
  'Harvard University',
  'University of Washington',
  'University of Maryland, College Park',
  'Trine University',
  'New York University (Tandon Mathematics)',
  'University of Southern California',
  'University of Alabama',
];

test('community CPT schools retain their corresponding screenshot evidence', () => {
  const schools = new Map(communitySchools.map((school) => [school.school, school]));
  for (const [school, screenshots] of Object.entries(screenshotEvidence)) {
    assert.ok(schools.has(school), `${school} should remain in the screenshot-evidence group`);
    assert.deepEqual(schools.get(school).screenshots.map(({ src }) => src), screenshots);
  }
  assert.doesNotMatch(JSON.stringify(communitySchools), /asset-cdn\.uscardforum\.com/);
});

test('university-verified CPT schools expose corresponding forum screenshots when located', () => {
  const schools = new Map(verifiedSchools.map((school) => [school.school, school]));
  for (const [school, screenshots] of Object.entries(verifiedForumEvidence)) {
    assert.ok(schools.has(school), `${school} should remain in the university-verified group`);
    assert.deepEqual(schools.get(school).screenshots.map(({ src }) => src), screenshots);
    assert.match(schools.get(school).href, /^https:\/\//);
  }

  for (const school of verifiedWithoutForumEvidence) {
    assert.deepEqual(verifiedSchools.find((entry) => entry.school === school).screenshots, []);
  }
});

test('verified-school screenshots are notice attachments rather than forum page captures', () => {
  const screenshots = verifiedSchools.flatMap((school) => school.screenshots);
  assert.doesNotMatch(JSON.stringify(screenshots), /cpt_forum_/);
});

test('current CPT status evidence is grouped without overstating public verification', () => {
  assert.equal(verifiedSchools.length, 29);
  assert.equal(communitySchools.length, 6);
  assert.equal(verifiedSchools.length + communitySchools.length, 35);

  assert.ok(verifiedSchools.some(({ school }) => school === 'University of Washington'));
  assert.ok(verifiedSchools.some(({ school }) => school === 'University of Maryland, College Park'));
  assert.ok(verifiedSchools.some(({ school }) => school === 'Trine University'));
  assert.ok(verifiedSchools.some(({ school }) => school === 'MIT'));
  assert.equal(communitySchools.some(({ school }) => school === 'MIT'), false);
  assert.ok(communitySchools.some(({ school }) => school === 'Purdue ECE'));
  assert.ok(communitySchools.some(({ school }) => school === 'Purdue University (ISS)'));
});

test('UC Berkeley describes the narrow thesis and dissertation CPT exception', () => {
  const berkeley = verifiedSchools.find(({ school }) => school === 'UC Berkeley');

  assert.ok(berkeley);
  assert.equal(berkeley.state, 'Course Credit CPT 仍暂停；论文型 CPT 仅限严格个案');
  assert.match(berkeley.detail, /Degree Requirement CPT/);
  assert.match(berkeley.detail, /Thesis\/Dissertation Requirement CPT/);
  assert.match(berkeley.detail, /Advanced to Candidacy/);
  assert.match(berkeley.detail, /无法由其他研究或数据收集方式合理替代/);
  assert.match(berkeley.detail, /导师书面证明/);
});

test('screenshot evidence is bundled as nonempty project assets', async () => {
  const paths = [
    ...Object.values(screenshotEvidence).flat(),
    ...Object.values(verifiedForumEvidence).flat(),
  ];
  for (const path of paths) {
    const file = await stat(new URL(`../public${path}`, import.meta.url));
    assert.ok(file.size > 10_000, `${path} should contain a real screenshot`);
  }
});

test('NYU public evidence is limited to Tandon Mathematics and retains no fabricated screenshot', () => {
  const nyu = verifiedSchools.find(({ school }) => school === 'New York University (Tandon Mathematics)');
  assert.ok(nyu);
  assert.deepEqual(nyu.screenshots, []);
  assert.equal(nyu.href, 'https://math.nyu.edu/dynamic/sites/tandon/internships/');
  assert.match(nyu.detail, /不外推 NYU 全校/);
  assert.equal(communitySchools.some(({ school }) => school.startsWith('New York University')), false);
});

test('school evidence labels describe the stored images as email screenshots', () => {
  assert.match(source, /community: '邮件截图'/);
  assert.match(source, /evidencePrefix: '以下条目依据已下载到本站的校方邮件截图/);
  assert.match(source, /viewEvidence: '查看邮件截图'/);
  assert.match(source, /viewReport: '邮件截图待补'/);
  assert.match(source, /evidenceTitle: '邮件截图'/);
  assert.match(source, /closeEvidence: '关闭邮件截图'/);
  assert.match(source, /community: 'Email screenshots'/);
  assert.match(source, /evidencePrefix: 'The following entries rely on university email screenshots/);
  assert.match(source, /viewEvidence: 'View email screenshot'/);
  assert.match(source, /viewReport: 'Email screenshot pending'/);
  assert.match(source, /evidenceTitle: 'Email screenshots'/);
  assert.match(source, /closeEvidence: 'Close email screenshots'/);
  assert.doesNotMatch(source, /论坛截图|forum screenshots?/i);
});

import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import test from 'node:test';

import { communitySchools, verifiedSchools } from '../app/cpt-schools.ts';

const source = await readFile(new URL('../app/policy-radar-client.tsx', import.meta.url), 'utf8');
const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');

const screenshotEvidence = {
  UCSB: [
    '/cpt-evidence/cpt_ucsb_1.jpeg',
    '/cpt-evidence/cpt_ucsb_2.jpeg',
  ],
  'UC Irvine': ['/cpt-evidence/cpt_uci.jpeg'],
  'UNC–Chapel Hill': ['/cpt-evidence/cpt_unc.jpeg'],
  Caltech: ['/cpt-evidence/cpt_caltech.jpeg'],
  UCLA: ['/cpt-evidence/cpt_ucla.jpeg'],
  'Purdue ECE': ['/cpt-evidence/cpt_purdue.jpeg'],
  'Goldey-Beacom College': ['/cpt-evidence/cpt_goldey_beacom.jpeg'],
  'Purdue University (ISS)': ['/cpt-evidence/cpt_purdue_iss.jpeg'],
  MIT: ['/cpt-evidence/cpt_mit.jpeg'],
};

const verifiedForumEvidence = {
  'UC Berkeley': ['/cpt-evidence/cpt_forum_uc_berkeley.png'],
  UIUC: ['/cpt-evidence/cpt_forum_uiuc.png'],
  'Texas A&M': ['/cpt-evidence/cpt_forum_texas_am.png'],
  'UT Dallas': ['/cpt-evidence/cpt_forum_ut_dallas.png'],
  'University of Michigan': ['/cpt-evidence/cpt_forum_michigan.png'],
  'Northwestern University': ['/cpt-evidence/cpt_forum_northwestern.png'],
  'Columbia University': ['/cpt-evidence/cpt_forum_columbia.png'],
  'Harvard University': ['/cpt-evidence/cpt_forum_harvard.png'],
  'University of Washington': ['/cpt-evidence/cpt_forum_washington.png'],
};

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

  assert.deepEqual(
    verifiedSchools.find(({ school }) => school === 'UC Davis').screenshots,
    [],
  );
  assert.deepEqual(
    verifiedSchools.find(({ school }) => school === 'Boston University').screenshots,
    [],
  );
});

test('current CPT status evidence is grouped without overstating public verification', () => {
  assert.equal(verifiedSchools.length, 11);
  assert.equal(communitySchools.length, 10);
  assert.equal(verifiedSchools.length + communitySchools.length, 21);

  assert.ok(verifiedSchools.some(({ school }) => school === 'University of Washington'));
  assert.ok(communitySchools.some(({ school }) => school === 'MIT'));
  assert.equal(verifiedSchools.some(({ school }) => school === 'MIT'), false);
  assert.ok(communitySchools.some(({ school }) => school === 'Purdue ECE'));
  assert.ok(communitySchools.some(({ school }) => school === 'Purdue University (ISS)'));
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

test('NYU text-only report is explicitly represented without a fabricated screenshot', () => {
  const nyu = communitySchools.find(({ school }) => school === 'New York University');
  assert.ok(nyu);
  assert.deepEqual(nyu.screenshots, []);
  assert.match(source, /尚未找到对应的论坛截图/);
  assert.match(source, /No corresponding forum screenshot has been located/);
});

test('all school evidence opens an accessible dialog and can be dismissed', () => {
  assert.match(
    source,
    /useState<\s*VerifiedSchool\s*\|\s*CommunitySchool\s*\|\s*null\s*>/,
  );
  assert.match(source, /visibleVerified[\s\S]*?aria-haspopup="dialog"/);
  assert.match(source, /aria-haspopup="dialog"/);
  assert.match(source, /<dialog[\s\S]*?aria-modal="true"/);
  assert.match(source, /aria-modal="true"/);
  assert.match(source, /event\.key === 'Escape'/);
  assert.match(source, /selectedEvidence\.href/);
});

test('evidence dialog is responsive and keeps screenshots scrollable', () => {
  assert.match(css, /\.evidence-modal-backdrop\s*\{[^}]*position:\s*fixed;/s);
  assert.match(css, /\.evidence-modal-body\s*\{[^}]*overflow:\s*auto;/s);
  assert.match(
    css,
    /@media \(max-width:\s*720px\)[\s\S]*?\.evidence-modal\s*\{[^}]*width:\s*100%;[^}]*max-height:\s*calc\(100dvh/s,
  );
});

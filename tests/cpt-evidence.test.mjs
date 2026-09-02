import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import test from 'node:test';

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
};

test('community CPT schools retain their corresponding screenshot evidence', () => {
  for (const [school, screenshots] of Object.entries(screenshotEvidence)) {
    assert.match(source, new RegExp(`school: '${school.replace(/[–]/g, '–')}'`));
    for (const screenshot of screenshots) assert.match(source, new RegExp(screenshot.replaceAll('.', '\\.')));
  }
  assert.doesNotMatch(source, /asset-cdn\.uscardforum\.com/);
});

test('screenshot evidence is bundled as nonempty project assets', async () => {
  const paths = Object.values(screenshotEvidence).flat();
  for (const path of paths) {
    const file = await stat(new URL(`../public${path}`, import.meta.url));
    assert.ok(file.size > 10_000, `${path} should contain a real screenshot`);
  }
});

test('NYU text-only report is explicitly represented without a fabricated screenshot', () => {
  assert.match(
    source,
    /school: 'New York University',[\s\S]*?screenshots: \[\]/,
  );
  assert.match(source, /尚未找到对应截图/);
  assert.match(source, /no corresponding screenshot has been located/);
});

test('community evidence opens an accessible dialog and can be dismissed', () => {
  assert.match(source, /aria-haspopup="dialog"/);
  assert.match(source, /<dialog[\s\S]*?aria-modal="true"/);
  assert.match(source, /aria-modal="true"/);
  assert.match(source, /event\.key === 'Escape'/);
});

test('evidence dialog is responsive and keeps screenshots scrollable', () => {
  assert.match(css, /\.evidence-modal-backdrop\s*\{[^}]*position:\s*fixed;/s);
  assert.match(css, /\.evidence-modal-body\s*\{[^}]*overflow:\s*auto;/s);
  assert.match(
    css,
    /@media \(max-width:\s*720px\)[\s\S]*?\.evidence-modal\s*\{[^}]*width:\s*100%;[^}]*max-height:\s*calc\(100dvh/s,
  );
});

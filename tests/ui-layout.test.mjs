import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const css = await readFile(
  new URL('../app/globals.css', import.meta.url),
  'utf8',
);
const policyPage = (
  await Promise.all(
    [
      '../app/policy-radar-client.tsx',
      '../app/policy-card.tsx',
      '../app/home-copy.ts',
    ].map((path) => readFile(new URL(path, import.meta.url), 'utf8')),
  )
).join('\n');

test('homepage briefing sends readers to the detail timeline', () => {
  assert.match(
    policyPage,
    /policyHref\(\s*item.policyId,\s*language,\s*'timeline',\s*selectedPath,?\s*\)/,
  );
  assert.match(policyPage, /className="timeline-shell" ref=\{showLatestTimeline\}/);
});

test('the homepage footer discloses synthetic launch samples in both languages', () => {
  assert.match(policyPage, /模拟样本/);
  assert.match(policyPage, /synthetic launch samples/);
  assert.match(policyPage, /className="seed-disclosure"/);
});

test('Niulai preserves the approved two-second outer and uncompressed internal motion', () => {
  assert.match(
    css,
    /\.niulai-puppet\.active\s*\{[^}]*puppet-motion 2s cubic-bezier\(\.17,\.8,\.19,1\) both,[^}]*puppet-opacity 2s linear both;/s,
  );
  assert.match(
    css,
    /\.niulai-puppet\.active \.head-rig\s*\{[^}]*head-wail 2\.25s \.08s ease-in-out both;/s,
  );
  assert.match(
    css,
    /\.niulai-puppet\.active \.tear-stream\.left\s*\{[^}]*stream-left 1\.85s \.36s ease-out both;/s,
  );
  assert.match(
    css,
    /@media \(max-width:\s*760px\)[\s\S]*?\.niulai-puppet\s*\{[^}]*top:\s*82px;[^}]*right:\s*-24px;[^}]*width:\s*260px;/s,
  );
});

test('detail status precedes summary and background, with no small mobile status override', async () => {
  const detail = await readFile(
    new URL('../app/policies/[policyId]/page.tsx', import.meta.url),
    'utf8',
  );
  const style = await readFile(
    new URL('../app/policies/[policyId]/policy-detail.css', import.meta.url),
    'utf8',
  );
  assert.ok(
    detail.indexOf('className="pd-title-row"') <
      detail.indexOf('className="pd-status"'),
  );
  assert.ok(
    detail.indexOf('className="pd-status"') <
      detail.indexOf('className="pd-deck"'),
  );
  assert.ok(
    detail.indexOf('className="pd-essentials"') <
      detail.indexOf('id="overview"'),
  );
  assert.match(style, /\.pd-status\s*\{[^}]*font-size: 1rem/s);
  assert.doesNotMatch(style, /\.pd-status\s*\{[^}]*font-size: 1[12]px/s);
});

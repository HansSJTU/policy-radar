import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
const policyPage = (await Promise.all([
  '../app/policy-radar-client.tsx',
  '../app/policy-card.tsx',
  '../app/home-copy.ts',
].map((path) => readFile(new URL(path, import.meta.url), 'utf8')))).join('\n');

test('homepage briefing sends readers to the detail timeline', () => {
  assert.match(policyPage, /policyHref\(item.policyId, language, 'timeline', selectedPath\)/);
  assert.match(policyPage, /className="timeline-shell" ref=\{showLatestTimeline\}/);
});

test('the footer discloses synthetic launch samples in both languages', () => {
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

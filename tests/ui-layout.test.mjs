import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');

test('policy accent uses the card native left border', () => {
  assert.doesNotMatch(css, /\.policy-card::before/);
  assert.match(css, /\.policy-card\s*\{[^}]*border-left:\s*4px solid var\(--gray\);/s);
  assert.match(css, /\.policy-card\.policy-red\s*\{[^}]*border-left-color:\s*var\(--red\);/s);
  assert.match(css, /\.policy-card\.policy-amber\s*\{[^}]*border-left-color:\s*var\(--amber\);/s);
  assert.match(css, /\.policy-card\.policy-blue\s*\{[^}]*border-left-color:\s*var\(--blue\);/s);
});

test('policy hover preserves the native accent border color', () => {
  const hoverRule = css.match(/\.policy-card:hover\s*\{([^}]*)\}/s)?.[1] ?? '';

  assert.doesNotMatch(hoverRule, /(?:^|;)\s*border-color\s*:/);
  assert.match(hoverRule, /border-top-color:\s*#c2b9aa;/);
  assert.match(hoverRule, /border-right-color:\s*#c2b9aa;/);
  assert.match(hoverRule, /border-bottom-color:\s*#c2b9aa;/);
});

test('rulemaking segments join continuously and center their nodes on each join', () => {
  assert.match(css, /\.process-steps\s*\{[^}]*gap:\s*0;/s);
  assert.match(css, /\.process-steps\s*>\s*i\s*b\s*\{[^}]*right:\s*-5px;/s);
});

test('mobile timeline line and nodes share one horizontal center coordinate', () => {
  assert.match(css, /\.time-axis\s*\{[^}]*--timeline-axis-x:/s);
  assert.match(
    css,
    /\.timeline-node\s*>\s*b\s*\{[^}]*left:\s*calc\(var\(--timeline-axis-x\)[^;]*;[^}]*transform:\s*translateX\(-50%\);/s,
  );
});

test('timeline date starts its own line beside the marker', () => {
  assert.match(css, /\.timeline-node time\s*\{[^}]*display:\s*block;/s);
});

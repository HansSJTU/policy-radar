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
  assert.match(css, /\.process-steps\s*>\s*i\s*>\s*b\s*\{[^}]*right:\s*-5px;/s);
});

test('litigation markers use the same size and vertical center as process nodes', () => {
  assert.match(
    css,
    /\.litigation-marker\s*\{[^}]*top:\s*-3px;[^}]*width:\s*10px;[^}]*height:\s*10px;/s,
  );
  assert.match(
    css,
    /\.litigation-marker\s*>\s*b\s*\{[^}]*border:\s*2px solid var\(--card\);/s,
  );
  assert.match(
    css,
    /\.litigation-marker\.upcoming\s*>\s*b\s*\{[^}]*border-color:\s*var\(--red\);[^}]*box-shadow:\s*0 0 0 5px/s,
  );
});

test('mobile litigation labels fan out from their nearby markers', () => {
  assert.match(
    css,
    /\.litigation-marker\.align-left\s*>\s*em\s*\{[^}]*left:\s*auto;[^}]*right:\s*0;[^}]*text-align:\s*right;[^}]*transform:\s*none;/s,
  );
  assert.match(
    css,
    /\.litigation-marker\.align-right\s*>\s*em\s*\{[^}]*left:\s*0;[^}]*right:\s*auto;[^}]*text-align:\s*left;[^}]*transform:\s*none;/s,
  );
});

test('mobile process help is anchored to the full metadata row', () => {
  assert.match(
    css,
    /@media \(max-width:\s*480px\)[\s\S]*?\.flow-help\s*\{[^}]*position:\s*static;/s,
  );
  assert.match(
    css,
    /@media \(max-width:\s*480px\)[\s\S]*?\.flow-popover\s*\{[^}]*left:\s*0;[^}]*right:\s*0;[^}]*width:\s*100%;/s,
  );
  assert.match(
    css,
    /@media \(max-width:\s*480px\)[\s\S]*?\.flow-popover-head\s*\{[^}]*grid-template-columns:\s*1fr;/s,
  );
});

test('mobile school cards keep their link in normal flow and use a clear uniform gap', () => {
  assert.match(css, /\.school-card\s*\{[^}]*display:\s*flex;[^}]*flex-direction:\s*column;/s);
  assert.match(css, /\.school-card\s*>\s*small\s*\{[^}]*position:\s*static;[^}]*margin-top:\s*auto;/s);
  assert.match(
    css,
    /@media \(max-width:\s*720px\)[\s\S]*?\.school-cards\s*\{[^}]*gap:\s*16px;/s,
  );
});

test('school evidence tabs establish the vertical gap before the cards', () => {
  assert.match(css, /\.school-tabs\s*\{[^}]*display:\s*grid;[^}]*gap:\s*18px;/s);
});

test('route policy markers share the exact center of their vertical rail', () => {
  const policiesRule = css.match(/\.stage-policies\s*\{([^}]*)\}/s)?.[1] ?? '';
  const markerRule = css.match(/\.route-policy::before\s*\{([^}]*)\}/s)?.[1] ?? '';
  const pixelValue = (rule, property) =>
    Number.parseFloat(rule.match(new RegExp(`${property}:\\s*(-?[\\d.]+)px`))?.[1] ?? 'NaN');

  const railBorder = pixelValue(policiesRule, 'border-left');
  const cardOffset = railBorder + pixelValue(policiesRule, 'padding-left');
  const markerBorder = pixelValue(markerRule, 'border');
  const markerOuterWidth =
    pixelValue(markerRule, 'width') + markerBorder * 2;
  const markerCenter = cardOffset + pixelValue(markerRule, 'left') + markerOuterWidth / 2;
  const railCenter = railBorder / 2;

  assert.equal(markerCenter, railCenter);
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

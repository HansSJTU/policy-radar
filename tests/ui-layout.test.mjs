import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const css = await readFile(new URL('../app/globals.css', import.meta.url), 'utf8');
const policyPage = await readFile(
  new URL('../app/policy-radar-client.tsx', import.meta.url),
  'utf8',
);
const ratingComponent = await readFile(
  new URL('../app/community-impact-rating.tsx', import.meta.url),
  'utf8',
);

test('policy accent uses the card path category through its native left border', () => {
  assert.doesNotMatch(css, /\.policy-card::before/);
  assert.match(css, /\.policy-card\s*\{[^}]*border-left:\s*4px solid var\(--path-color\);/s);
  assert.match(policyPage, /data-path=\{policyPath\}/);
});

test('policy hover preserves the native accent border color', () => {
  const hoverRule = css.match(/\.policy-card:hover\s*\{([^}]*)\}/s)?.[1] ?? '';

  assert.doesNotMatch(hoverRule, /(?:^|;)\s*border-color\s*:/);
  assert.match(hoverRule, /border-top-color:\s*#bdcbdc;/);
  assert.match(hoverRule, /border-right-color:\s*#bdcbdc;/);
  assert.match(hoverRule, /border-bottom-color:\s*#bdcbdc;/);
});

test('desktop policy cards cannot overflow their grid track in Chromium', () => {
  assert.match(css, /\.policy-list\s*\{[^}]*min-width:\s*0;[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\);/s);
  assert.match(css, /\.policy-card\s*\{[^}]*min-width:\s*0;[^}]*width:\s*100%;/s);
});

test('rulemaking segments join continuously and center their nodes on each join', () => {
  assert.match(css, /\.process-steps\s*\{[^}]*gap:\s*0;/s);
  assert.match(css, /\.process-steps\s*>\s*i\s*>\s*b\s*\{[^}]*right:\s*-5px;/s);
});

test('desktop process rail stays raised with breathing room above the divider', () => {
  const processRowRule = css.match(/\.process-row\s*\{([^}]*)\}/s)?.[1] ?? '';

  assert.match(processRowRule, /margin:\s*0 0 0 96px;/);
  assert.match(processRowRule, /padding:\s*24px 0 50px;/);
  assert.doesNotMatch(processRowRule, /border-top:/);
  assert.match(processRowRule, /border-bottom:\s*1px solid #e5eaf2;/);
});

test('mobile process rail stays compact', () => {
  assert.match(
    css,
    /@media \(max-width:\s*720px\)[\s\S]*?\.process-row\s*\{[^}]*padding-top:\s*32px;[^}]*padding-bottom:\s*50px;/s,
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
  const markerOuterWidth = /box-sizing:\s*border-box;/.test(markerRule)
    ? pixelValue(markerRule, 'width')
    : pixelValue(markerRule, 'width') + markerBorder * 2;
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

test('desktop timeline scroll viewport shares the process rail right inset', () => {
  assert.doesNotMatch(css, /\.time-axis::before\s*\{/);
  assert.match(
    css,
    /\.timeline-shell\s*\{[^}]*margin:\s*17px 45px 0 96px;[^}]*overflow-x:\s*auto;/s,
  );
  assert.doesNotMatch(css, /\.time-axis::after\s*\{/);
  assert.match(
    css,
    /\.process-steps\s*\{[^}]*padding-right:\s*45px;/s,
  );
  assert.match(
    css,
    /\.timeline-node::after\s*\{[^}]*left:\s*8px;[^}]*width:\s*100%;[^}]*height:\s*2px;/s,
  );
  assert.match(
    css,
    /\.timeline-node:last-child::after\s*\{[^}]*width:\s*calc\(100%\s*-\s*8px\);/s,
  );
  assert.match(
    css,
    /\.timeline-node\.to-present::after\s*\{[^}]*linear-gradient\(90deg,\s*var\(--green\),\s*var\(--red\)\)/s,
  );
  assert.match(policyPage, /index === policy\.milestones\.length - 1[^\n]*to-present/);
  assert.match(
    css,
    /@media \(max-width:\s*720px\)[\s\S]*?\.timeline-node:last-child::after\s*\{[^}]*display:\s*none;/s,
  );
  assert.match(
    css,
    /@media \(max-width:\s*720px\)[\s\S]*?\.timeline-shell\s*\{[^}]*margin-left:\s*0;[^}]*margin-right:\s*0;/s,
  );
});

test('timeline caption stays outside the horizontal scroll viewport', () => {
  assert.match(
    policyPage,
    /<div className="timeline-block">\s*<div className="timeline-caption"[\s\S]*?<div className="timeline-shell" ref=\{showLatestTimeline\}>/s,
  );
  assert.doesNotMatch(
    policyPage,
    /<div className="timeline-shell"[^>]*>\s*<div className="timeline-caption"/s,
  );
  assert.match(css, /\.timeline-caption\s*\{[^}]*margin:\s*0 45px 0 96px;/s);
});

test('timeline date starts its own line beside the marker', () => {
  assert.match(css, /\.timeline-node time\s*\{[^}]*display:\s*block;/s);
});

test('community impact owns the card upper right while path impact sits below rank', () => {
  assert.match(
    css,
    /\.policy-snapshot\s*\{[^}]*grid-template-columns:\s*74px minmax\(0,\s*1fr\) minmax\(250px,\s*300px\);/s,
  );
  assert.match(css, /\.rank-score\s*\{[^}]*border-top:\s*1px solid var\(--line\);/s);
  assert.match(css, /\.community-impact\s*\{[^}]*grid-column:\s*3;/s);
  assert.match(
    css,
    /@media \(max-width:\s*720px\)[\s\S]*?\.community-impact\s*\{[^}]*grid-column:\s*1;/s,
  );
  assert.match(
    css,
    /@media \(max-width:\s*720px\)[\s\S]*?\.rank-column\s*\{[^}]*width:\s*100%;[^}]*display:\s*flex;[^}]*justify-content:\s*space-between;/s,
  );
  assert.match(
    css,
    /@media \(max-width:\s*720px\)[\s\S]*?\.rank-score\s*\{[^}]*border-top:\s*0;[^}]*border-left:\s*1px solid var\(--line\);/s,
  );
});

test('mobile community rating keeps its compact composition with larger controls', () => {
  assert.match(
    css,
    /@media \(max-width:\s*720px\)[\s\S]*?\.community-impact\s*\{[^}]*padding:\s*14px;/s,
  );
  assert.match(
    css,
    /@media \(max-width:\s*720px\)[\s\S]*?\.community-impact-summary\s*\{[^}]*min-height:\s*0;[^}]*display:\s*flex;/s,
  );
  assert.match(
    css,
    /@media \(max-width:\s*720px\)[\s\S]*?\.impact-scale button\s*\{[^}]*height:\s*36px;/s,
  );
});

test('high community averages use the supplied standalone horn art above the average', () => {
  assert.doesNotMatch(
    policyPage,
    /<article[\s\S]*?<CommunityHornMarker[\s\S]*?<header className="policy-snapshot">/,
  );
  assert.match(
    css,
    /\.community-average-value\s*\{[^}]*position:\s*relative;/s,
  );
  assert.match(
    css,
    /\.community-horn-marker\s*\{[^}]*position:\s*absolute;[^}]*bottom:\s*calc\(100% - 3px\);/s,
  );
  assert.match(
    css,
    /\.community-horn-marker img\s*\{[^}]*position:\s*absolute;[^}]*object-fit:\s*contain;/s,
  );
  assert.match(ratingComponent, /src="\/animations\/niulai-horn-badge\.png"/);
  assert.doesNotMatch(css, /\.community-horn-crown\s*\{/s);
  assert.doesNotMatch(css, /\.community-horn-(?:left|right)\s*\{/s);
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

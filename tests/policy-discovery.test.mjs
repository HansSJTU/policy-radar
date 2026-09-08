import assert from 'node:assert/strict';
import { Module } from 'node:module';
import test from 'node:test';
import { build } from 'esbuild';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { getPolicyDetail } from '../app/policy-detail-model.ts';
import { getProcessTrack } from '../app/process-model.ts';

const bundle = await build({
  stdin: {
    contents: `export { PolicyCard } from './app/policy-card.tsx';
      export { PolicyProgress } from './app/policies/[policyId]/policy-interactions.tsx';
      export { LanguageProvider } from './app/language-context.tsx';
      export { CommunityImpactRating } from './app/community-impact-rating.tsx';`,
    resolveDir: process.cwd(),
  },
  bundle: true,
  format: 'cjs',
  packages: 'external',
  // Match vinext's runtime alias now that cards include the shared image menu.
  alias: { 'next/image': `${process.cwd()}/node_modules/vinext/dist/shims/image.js` },
  platform: 'node',
  jsx: 'automatic',
  write: false,
});
const filename = `${process.cwd()}/.tmp/policy-discovery.cjs`;
const compiled = new Module(filename);
compiled.paths = Module._nodeModulePaths(process.cwd());
compiled._compile(bundle.outputFiles[0].text, filename);
const {
  PolicyCard,
  PolicyProgress,
  LanguageProvider,
  CommunityImpactRating,
} = compiled.exports;
const render = (component, props, language) =>
  renderToStaticMarkup(
    React.createElement(
      LanguageProvider,
      { language },
      React.createElement(component, props),
    ),
  );

test('restored homepage cards retain ratings, full progress and timeline with contextual detail links', () => {
  for (const language of ['zh', 'en']) {
    const { record } = getPolicyDetail('opt-fee', language);
    const html = render(
      PolicyCard,
      {
        policy: record,
        language,
        selectedPath: 'OPT',
        policyPath: 'OPT',
        communityRating: React.createElement('aside', {
          'data-policy-rating': 'opt-fee',
        }),
      },
      language,
    );
    assert.match(html, /class="rank-score community-score"/);
    assert.match(html, /class="process-steps federal-rulemaking"/);
    assert.match(html, /class="timeline-shell"/);
    assert.match(html, /data-policy-rating="opt-fee"/);
    assert.match(
      html,
      new RegExp(`/policies/opt-fee\\?lang=${language}&amp;from=OPT`),
    );
  }
});

test('the grace-period diagram renders NPRM as future and OIRA as completed in either language', () => {
  for (const language of ['zh', 'en']) {
    const track = getProcessTrack('grace-period', language);
    const html = render(PolicyProgress, { track, language }, language);
    const buttons = html.match(/<button\b[^>]*>[\s\S]*?<\/button>/g);
    assert.match(buttons[1], /class="complete"/);
    assert.match(buttons[2], /class="upcoming"/);
    assert.match(buttons[2], /尚未发生|Not yet reached/);
    assert.doesNotMatch(html, /aria-current="step"/);
    assert.match(html, /Currently waiting for|当前等待/);
  }
});

test('homepage shows the live community average once in the former editorial-score position', () => {
  for (const language of ['zh', 'en']) {
    const { record } = getPolicyDetail('opt-fee', language);
    const aggregate = { average: 9.6, count: 18 };
    const html = render(
      PolicyCard,
      {
        policy: record,
        language,
        selectedPath: 'OPT',
        policyPath: 'OPT',
        communityAggregate: aggregate,
        communityRating: React.createElement(CommunityImpactRating, {
          language,
          policyId: record.id,
          aggregate,
          selected: 7,
          pending: false,
          error: null,
          onSelect() {},
        }),
      },
      language,
    );
    const rank = html.slice(
      html.indexOf('class="rank-column"'),
      html.indexOf('class="policy-title-group"'),
    );
    assert.match(rank, /<strong>9\.6<\/strong>/);
    assert.match(rank, /社区评分|Community score/);
    assert.doesNotMatch(rank, /community-horn-marker|<img/);
    assert.doesNotMatch(rank, /10\.0|路径冲击|Path impact/);
    assert.equal((html.match(/<strong>9\.6<\/strong>/g) ?? []).length, 1);
    const controls = html.match(
      /<aside class="community-impact"[\s\S]*?<\/aside>/,
    )?.[0];
    assert.equal((controls.match(/<button/g) ?? []).length, 10);
    assert.match(controls, /18 人评分|18 ratings/);
    assert.doesNotMatch(controls, /community-average|community-horn-marker/);
  }
});

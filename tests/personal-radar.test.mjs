import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { Module } from 'node:module';
import { Miniflare } from 'miniflare';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { POLICY_IDS } from '../app/policy-ids.ts';
import { buildPersonalPolicies } from '../app/radar/personal-radar-data.ts';
import {
  addMonths,
  chooseImpact,
  dragBoundary,
  forecastPlacement,
  labelClearance,
  moveBoundary,
  parseProfile,
  placePolicies,
  profileFromRange,
  radarGeometry,
  routeRange,
  SECTOR_KEYS,
  SECTOR_STEP,
  sectorsInRange,
  severityColor,
  timeLabels,
} from '../app/radar/personal-radar-model.ts';
import { selectGenuinePolicyImpactAggregates } from '../db/genuine-policy-ratings-query.ts';
import {
  createPolicyImpactRatingsTable,
  createPolicyImpactSeedRatingsTable,
} from '../db/schema.ts';

test('all current/next combinations describe one inclusive clockwise range and round-trip', () => {
  for (const stage of SECTOR_KEYS)
    for (const goal of SECTOR_KEYS) {
      const profile = { stage, goal },
        range = routeRange(profile),
        sectors = sectorsInRange(range);
      assert.equal(sectors[0], stage);
      assert.equal(sectors.at(-1), goal);
      assert.equal(new Set(sectors).size, sectors.length);
      assert.ok(sectors.length >= 1 && sectors.length <= 7);
      assert.deepEqual(profileFromRange(range), profile);
    }
  assert.deepEqual(
    sectorsInRange(routeRange({ stage: 'h1b-work', goal: 'cpt' })),
    ['h1b-work', 'family', 'f1', 'cpt'],
  );
  assert.deepEqual(sectorsInRange(routeRange({ stage: 'opt', goal: 'none' })), [
    'opt',
  ]);
});

test('dragging across north unwraps smoothly and cannot invert or exceed one circle', () => {
  const moved = dragBoundary({ start: 200, end: 359 }, 'end', 4, 359);
  assert.equal(moved.end, 364);
  assert.equal(
    dragBoundary({ start: 0, end: 90 }, 'end', 5, 90).end,
    SECTOR_STEP,
  );
  assert.equal(dragBoundary({ start: 0, end: 350 }, 'end', 20, 350).end, 360);
  assert.equal(
    dragBoundary({ start: 350, end: 440 }, 'start', 1, 350).start,
    361,
  );
  assert.deepEqual(moveBoundary({ start: 2, end: 3 }, 'start', 1), {
    start: 2,
    end: 3,
  });
  assert.deepEqual(moveBoundary({ start: 2, end: 9 }, 'end', 1), {
    start: 2,
    end: 9,
  });
});

test('invalid stored profiles cannot become selections; undecided is supported', () => {
  for (const value of [
    null,
    [],
    { stage: 'bogus', goal: 'family' },
    { stage: 'f1', goal: 7 },
    'opt',
  ])
    assert.equal(parseProfile(value), null);
  assert.deepEqual(parseProfile({ stage: 'opt', goal: 'none', extra: true }), {
    stage: 'opt',
    goal: 'none',
  });
});

test('ten genuine votes replace AI, while failures remain distinct from zero votes', () => {
  assert.deepEqual(chooseImpact({ average: 3.2, count: 9 }, 8), {
    score: 8,
    scoreOrigin: 'ai',
    genuineCount: 9,
  });
  assert.deepEqual(chooseImpact({ average: 3.2, count: 10 }, 8), {
    score: 3.2,
    scoreOrigin: 'community',
    genuineCount: 10,
  });
  assert.equal(chooseImpact(undefined, 8).genuineCount, 0);
  assert.equal(chooseImpact(null, 8).genuineCount, null);
});

test('personal radar counts only genuine rows even when launch seeds exist', async (t) => {
  const mf = new Miniflare({
    modules: true,
    script: 'export default { fetch() { return new Response("ok") } }',
    d1Databases: { DB: 'personal-radar-genuine-test' },
  });
  t.after(() => mf.dispose());
  const db = await mf.getD1Database('DB');
  await db.prepare(createPolicyImpactRatingsTable).run();
  await db.prepare(createPolicyImpactSeedRatingsTable).run();
  await db
    .prepare(
      "INSERT INTO policy_impact_seed_ratings(policy_id,seed_count,rating_total,note) VALUES ('opt-fee',20,200,'test'),('h4-ead',20,200,'test')",
    )
    .run();
  await db
    .prepare(
      "INSERT INTO policy_impact_ratings(policy_id,visitor_id,rating) VALUES ('opt-fee','first',2),('opt-fee','second',4)",
    )
    .run();
  const result = await db.prepare(selectGenuinePolicyImpactAggregates).all();
  assert.deepEqual(result.results, [
    { policy_id: 'opt-fee', average: 3, rating_count: 2 },
  ]);
});

test('forecasts keep a fixed date range and never turn an elapsed estimate into in-force', () => {
  const first = buildPersonalPolicies('en', {}, '2026-09-30');
  const later = buildPersonalPolicies('en', {}, '2027-02-01');
  assert.deepEqual(
    first.map((p) => p.estimateDates),
    later.map((p) => p.estimateDates),
  );
  assert.equal(addMonths('2026-08-31', 6), '2027-02-28');
  assert.deepEqual(
    forecastPlacement(['2025-01-01', '2026-01-01'], '2026-09-30'),
    { ring: 3, expired: true },
  );
  const expired = buildPersonalPolicies('en', {}, '2040-01-01').find(
    (p) => p.id === 'opt-fee',
  );
  assert.equal(expired.inForce, false);
  assert.equal(expired.estimateExpired, true);
  assert.match(expired.timing, /review needed/);
});

test('both languages use current policy content, disclosed estimates and stable site numbers', () => {
  for (const language of ['zh', 'en']) {
    const policies = buildPersonalPolicies(language, {}, '2026-09-30');
    assert.deepEqual(
      policies.map((p) => p.id),
      [...POLICY_IDS],
    );
    policies.forEach((p, i) => {
      assert.equal(p.number, i + 1);
      assert.equal(p.genuineCount, 0);
      assert.equal(p.scoreOrigin, 'ai');
      assert.ok(p.scoreReason && p.audience && p.status && p.sources.length);
      assert.match(p.href, new RegExp(`lang=${language}`));
      assert.equal(p.inForce, p.ring === 0);
      if (language === 'en')
        assert.doesNotMatch(JSON.stringify(p), /[\u3400-\u9fff]/u);
    });
    const unavailable = buildPersonalPolicies(language, null, '2026-09-30');
    assert.ok(unavailable.every((p) => p.genuineCount === null));
  }
});

test('severity is a continuous red/orange/white scale with contrasting number ink', () => {
  assert.equal(severityColor(0).fill, 'rgb(255,255,255)');
  assert.equal(severityColor(10).fill, 'rgb(167,30,44)');
  assert.equal(severityColor(0).lightText, false);
  assert.equal(severityColor(10).lightText, true);
  assert.notEqual(severityColor(8.1).fill, severityColor(8.9).fill);
});

test('time labels stay single-line and points avoid their reserved space at mobile and desktop widths', () => {
  for (const language of ['zh', 'en'])
    for (const width of [286, 290, 320, 360, 396, 440, 540]) {
      const entries = buildPersonalPolicies(language, {}, '2026-09-30');
      const compact = width < 360;
      const g = radarGeometry(width);
      const labels = timeLabels[language].map((text, i) => {
        const w = language === 'zh' ? text.length * 11 : [30, 46, 90][i];
        return {
          x: g.cx - w / 2,
          y: g.cy - g.rings[i] + (language === 'en' ? 9 : -6) - 6,
          width: w,
          height: 12,
        };
      });
      for (const { entry, x, y } of placePolicies(
        entries,
        width,
        language,
        compact,
      )) {
        const radius = entry.inForce ? (compact ? 12 : 13) : compact ? 14 : 18;
        assert.ok(
          labelClearance([x, y], radius, labels, []) < 0.05,
          `${language}/${width}/${entry.id} overlaps a time label`,
        );
        assert.ok(x >= 0 && x <= width && y >= 0 && y <= g.height);
      }
    }
});

test('server-rendered facts have the same aligned schema in both languages', async () => {
  const path = new URL('../app/radar/personal-radar.tsx', import.meta.url)
    .pathname;
  const bundle = await build({
    entryPoints: [path],
    bundle: true,
    format: 'cjs',
    packages: 'external',
    jsx: 'automatic',
    platform: 'node',
    write: false,
  });
  const compiled = new Module(path);
  compiled.paths = Module._nodeModulePaths(process.cwd());
  compiled._compile(bundle.outputFiles[0].text, path);
  for (const language of ['zh', 'en']) {
    const entry = buildPersonalPolicies(language, {}, '2026-09-30')[0];
    const html = renderToStaticMarkup(
      React.createElement(compiled.exports.PolicyFacts, {
        entry,
        language,
        profile: { stage: 'f1', goal: 'h1b-work' },
        sectors: SECTOR_KEYS,
      }),
    );
    assert.equal((html.match(/<dt>/g) ?? []).length, 5);
    assert.equal((html.match(/<dd>/g) ?? []).length, 5);
    assert.match(html, /pr-fact-sub/);
    assert.match(html, /AI/);
    assert.doesNotMatch(html, /½|1½/);
  }
});

import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import { build } from 'esbuild';
import { Miniflare } from 'miniflare';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as ratingSchema from '../db/schema.ts';

const ratingModel = await import('../app/community-impact-model.ts').catch(
  () => ({}),
);
const anonymousVisitor =
  await import('../components/anonymous-visitor.ts').catch(() => ({}));
const seedSql = await readFile(
  new URL('../db/seed-policy-impact-ratings.sql', import.meta.url),
  'utf8',
).catch(() => '');

async function loadBundledModule(path) {
  const result = await build({
    entryPoints: [path],
    bundle: true,
    format: 'esm',
    jsx: 'automatic',
    platform: 'node',
    write: false,
  });
  const source = result.outputFiles[0].text;
  return import(
    `data:text/javascript;base64,${Buffer.from(source).toString('base64')}`
  );
}

const ratingApi = await loadBundledModule(
  new URL('../app/policy-ratings-api.ts', import.meta.url).pathname,
).catch(() => ({}));
const ratingUi = await loadBundledModule(
  new URL('../app/community-impact-rating.tsx', import.meta.url).pathname,
).catch(() => ({}));
const niulaiUi = await loadBundledModule(
  new URL('../app/niulai-effect.tsx', import.meta.url).pathname,
).catch(() => ({}));

const visitorId = 'f3cd2241-f2cf-45a6-a3c2-4ab6279bd12d';

async function executeSqlFile(db, sql) {
  const statements = sql
    .split(/;\s*(?:\n|$)/)
    .map((statement) => statement.trim())
    .filter(Boolean);
  for (const statement of statements) {
    await db.prepare(statement).run();
  }
}

test('accepts only a known policy, a UUID, and an integer rating from 1 through 10', () => {
  assert.equal(typeof ratingModel.parseCommunityRating, 'function');

  assert.deepEqual(
    ratingModel.parseCommunityRating({
      policyId: 'opt-fee',
      rating: 10,
      visitorId,
    }),
    { policyId: 'opt-fee', rating: 10, visitorId },
  );
  assert.equal(
    ratingModel.parseCommunityRating({
      policyId: 'unknown-policy',
      rating: 10,
      visitorId,
    }),
    null,
  );
  assert.equal(
    ratingModel.parseCommunityRating({
      policyId: 'opt-fee',
      rating: 10.5,
      visitorId,
    }),
    null,
  );
  assert.equal(
    ratingModel.parseCommunityRating({
      policyId: 'opt-fee',
      rating: 0,
      visitorId,
    }),
    null,
  );
  assert.equal(
    ratingModel.parseCommunityRating({
      policyId: 'opt-fee',
      rating: 11,
      visitorId,
    }),
    null,
  );
  assert.equal(
    ratingModel.parseCommunityRating({
      policyId: 'opt-fee',
      rating: 10,
      visitorId: 'not-a-uuid',
    }),
    null,
  );
});

test('triggers Niulai only for a rating of 10 on the stable first policy ID', () => {
  assert.equal(typeof ratingModel.shouldTriggerNiulai, 'function');
  assert.equal(ratingModel.shouldTriggerNiulai('opt-fee', 10), true);
  assert.equal(ratingModel.shouldTriggerNiulai('opt-fee', 9), false);
  assert.equal(ratingModel.shouldTriggerNiulai('h1b-fee', 10), false);
  assert.equal(ratingModel.shouldTriggerNiulai('', 10), false);
});

test('shows the community horn marker only when the average exceeds 9.0', () => {
  assert.equal(typeof ratingModel.shouldShowCommunityHornMarker, 'function');
  assert.equal(ratingModel.shouldShowCommunityHornMarker(9.1), true);
  assert.equal(ratingModel.shouldShowCommunityHornMarker(10), true);
  assert.equal(ratingModel.shouldShowCommunityHornMarker(9), false);
  assert.equal(ratingModel.shouldShowCommunityHornMarker(8.9), false);
  assert.equal(ratingModel.shouldShowCommunityHornMarker(undefined), false);
});

test('re-rating one policy replaces the vote and preserves the aggregate count', async (t) => {
  assert.equal(typeof ratingSchema.createPolicyImpactRatingsTable, 'string');
  assert.equal(
    typeof ratingSchema.createPolicyImpactSeedRatingsTable,
    'string',
  );
  assert.equal(typeof ratingSchema.upsertPolicyImpactRating, 'string');
  assert.equal(typeof ratingSchema.selectPolicyImpactAggregates, 'string');

  const miniflare = new Miniflare({
    modules: true,
    script: 'export default { fetch() { return new Response("ok") } }',
    d1Databases: { DB: 'community-impact-test' },
  });
  t.after(() => miniflare.dispose());

  const db = await miniflare.getD1Database('DB');
  await db.prepare(ratingSchema.createPolicyImpactRatingsTable).run();
  await db.prepare(ratingSchema.createPolicyImpactSeedRatingsTable).run();
  await db
    .prepare(ratingSchema.upsertPolicyImpactRating)
    .bind('opt-fee', visitorId, 4)
    .run();
  await db
    .prepare(ratingSchema.upsertPolicyImpactRating)
    .bind('opt-fee', '0d4f4476-a43a-4491-b18d-8ade2fc85fc1', 10)
    .run();
  await db
    .prepare(ratingSchema.upsertPolicyImpactRating)
    .bind('opt-fee', visitorId, 8)
    .run();

  const result = await db
    .prepare(ratingSchema.selectPolicyImpactAggregates)
    .all();

  assert.deepEqual(result.results, [
    { policy_id: 'opt-fee', average: 9, rating_count: 2 },
  ]);
});

test('launch seed data is explicitly fake, bounded, and removable without real votes', () => {
  const rows = [...seedSql.matchAll(
    /\('([^']+)',\s*(\d+),\s*(\d+),\s*1,\s*'FAKE launch seed; safe to delete'\)/g,
  )];

  assert.equal(rows.length, 10);
  assert.match(seedSql, /Cleanup: DELETE FROM policy_impact_seed_ratings WHERE is_fake = 1;/);
  assert.match(seedSql, /community-impact-launch-v1/);
  assert.match(seedSql, /WHERE NOT EXISTS/);
  for (const [, policyId, countText, totalText] of rows) {
    assert.ok(ratingModel.POLICY_IDS.includes(policyId));
    const count = Number(countText);
    const total = Number(totalText);
    assert.ok(count >= 10 && count <= 20);
    assert.ok(total >= count && total <= count * 10);
  }
});

test('launch seed SQL is idempotent and stays retired after cleanup', async (t) => {
  const miniflare = new Miniflare({
    modules: true,
    script: 'export default { fetch() { return new Response("ok") } }',
    d1Databases: { DB: 'community-impact-seed-test' },
  });
  t.after(() => miniflare.dispose());
  const db = await miniflare.getD1Database('DB');

  await executeSqlFile(db, seedSql);
  await executeSqlFile(db, seedSql);
  const seeded = await db
    .prepare(
      'SELECT COUNT(*) AS policies, SUM(seed_count) AS samples FROM policy_impact_seed_ratings',
    )
    .first();
  assert.deepEqual(seeded, { policies: 10, samples: 155 });

  await db
    .prepare('DELETE FROM policy_impact_seed_ratings WHERE is_fake = 1')
    .run();
  await executeSqlFile(db, seedSql);
  const retired = await db
    .prepare('SELECT COUNT(*) AS policies FROM policy_impact_seed_ratings')
    .first();
  assert.deepEqual(retired, { policies: 0 });
});

test('rating API returns empty aggregates, then updates one browser without double counting', async (t) => {
  assert.equal(typeof ratingApi.getPolicyRatingsResponse, 'function');
  assert.equal(typeof ratingApi.postPolicyRatingResponse, 'function');

  const miniflare = new Miniflare({
    modules: true,
    script: 'export default { fetch() { return new Response("ok") } }',
    d1Databases: { DB: 'community-impact-api-test' },
  });
  t.after(() => miniflare.dispose());
  const db = await miniflare.getD1Database('DB');

  const emptyResponse = await ratingApi.getPolicyRatingsResponse(db);
  assert.equal(emptyResponse.status, 200);
  assert.equal(emptyResponse.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await emptyResponse.json(), { ratings: {} });

  const firstResponse = await ratingApi.postPolicyRatingResponse(
    new Request('https://policy-radar.example/api/policy-ratings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        origin: 'https://policy-radar.example',
        'sec-fetch-site': 'same-origin',
      },
      body: JSON.stringify({ policyId: 'opt-fee', rating: 10, visitorId }),
    }),
    db,
  );
  assert.equal(firstResponse.status, 200);
  assert.deepEqual(await firstResponse.json(), {
    policyId: 'opt-fee',
    average: 10,
    count: 1,
  });

  const changedResponse = await ratingApi.postPolicyRatingResponse(
    new Request('https://policy-radar.example/api/policy-ratings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        origin: 'https://policy-radar.example',
        'sec-fetch-site': 'same-origin',
      },
      body: JSON.stringify({ policyId: 'opt-fee', rating: 6, visitorId }),
    }),
    db,
  );
  assert.deepEqual(await changedResponse.json(), {
    policyId: 'opt-fee',
    average: 6,
    count: 1,
  });

  const secondVisitorResponse = await ratingApi.postPolicyRatingResponse(
    new Request('https://policy-radar.example/api/policy-ratings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        origin: 'https://policy-radar.example',
        'sec-fetch-site': 'same-origin',
      },
      body: JSON.stringify({
        policyId: 'opt-fee',
        rating: 10,
        visitorId: '0d4f4476-a43a-4491-b18d-8ade2fc85fc1',
      }),
    }),
    db,
  );
  assert.deepEqual(await secondVisitorResponse.json(), {
    policyId: 'opt-fee',
    average: 8,
    count: 2,
  });
});

test('rating API rejects cross-site and malformed submissions before writing', async (t) => {
  assert.equal(typeof ratingApi.postPolicyRatingResponse, 'function');

  const miniflare = new Miniflare({
    modules: true,
    script: 'export default { fetch() { return new Response("ok") } }',
    d1Databases: { DB: 'community-impact-api-rejection-test' },
  });
  t.after(() => miniflare.dispose());
  const db = await miniflare.getD1Database('DB');

  const crossSiteResponse = await ratingApi.postPolicyRatingResponse(
    new Request('https://policy-radar.example/api/policy-ratings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        origin: 'https://attacker.example',
        'sec-fetch-site': 'cross-site',
      },
      body: JSON.stringify({ policyId: 'opt-fee', rating: 10, visitorId }),
    }),
    db,
  );
  assert.equal(crossSiteResponse.status, 403);

  const malformedResponse = await ratingApi.postPolicyRatingResponse(
    new Request('https://policy-radar.example/api/policy-ratings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        origin: 'https://policy-radar.example',
        'sec-fetch-site': 'same-origin',
      },
      body: JSON.stringify({ policyId: 'opt-fee', rating: 11, visitorId }),
    }),
    db,
  );
  assert.equal(malformedResponse.status, 400);

  const aggregateResponse = await ratingApi.getPolicyRatingsResponse(db);
  assert.deepEqual(await aggregateResponse.json(), { ratings: {} });
});

test('anonymous visitor identity is reused, persisted, and resilient to blocked storage', () => {
  assert.equal(
    typeof anonymousVisitor.getOrCreateAnonymousVisitorId,
    'function',
  );

  const stored = new Map();
  const storage = {
    getItem: (key) => stored.get(key) ?? null,
    setItem: (key, value) => stored.set(key, value),
  };
  const generated = '3d86f534-6f4d-4a11-b8c8-b34451b8eaa7';
  const replacement = 'd928ea6f-e90a-45bf-a4a9-6527eff713d6';

  assert.equal(
    anonymousVisitor.getOrCreateAnonymousVisitorId(storage, () => generated),
    generated,
  );
  assert.equal(stored.get('f1-policy-radar-anonymous-visitor'), generated);
  assert.equal(
    anonymousVisitor.getOrCreateAnonymousVisitorId(storage, () => replacement),
    generated,
  );

  const blockedStorage = {
    getItem() {
      throw new Error('storage blocked');
    },
    setItem() {
      throw new Error('storage blocked');
    },
  };
  assert.equal(
    anonymousVisitor.getOrCreateAnonymousVisitorId(
      blockedStorage,
      () => replacement,
    ),
    replacement,
  );
});

test('rating choices always expose 1 through 10 and only press the selected value', () => {
  assert.equal(typeof ratingModel.buildCommunityRatingChoices, 'function');
  assert.deepEqual(ratingModel.buildCommunityRatingChoices(7), [
    { value: 1, pressed: false },
    { value: 2, pressed: false },
    { value: 3, pressed: false },
    { value: 4, pressed: false },
    { value: 5, pressed: false },
    { value: 6, pressed: false },
    { value: 7, pressed: true },
    { value: 8, pressed: false },
    { value: 9, pressed: false },
    { value: 10, pressed: false },
  ]);
  assert.equal(
    ratingModel
      .buildCommunityRatingChoices(null)
      .some((choice) => choice.pressed),
    false,
  );
});

test('community impact panel renders a ten-button non-star scale with aggregate context', () => {
  assert.equal(typeof ratingUi.CommunityImpactRating, 'function');

  const html = renderToStaticMarkup(
    React.createElement(ratingUi.CommunityImpactRating, {
      language: 'zh',
      policyId: 'opt-fee',
      aggregate: { average: 8.4, count: 125 },
      selected: 7,
      pending: false,
      error: null,
      onSelect() {},
    }),
  );

  assert.equal((html.match(/<button/g) ?? []).length, 10);
  assert.equal((html.match(/aria-pressed="true"/g) ?? []).length, 1);
  assert.match(html, />8\.4</);
  assert.match(html, />125 人评分</);
  assert.match(html, /aria-label="给这项政策打 7 分"/);
  assert.doesNotMatch(html, /★|☆|star/i);
});

test('community horn marker is accessible and disappears at the threshold', () => {
  assert.equal(typeof ratingUi.CommunityHornMarker, 'function');

  const visible = renderToStaticMarkup(
    React.createElement(ratingUi.CommunityHornMarker, {
      language: 'zh',
      average: 9.1,
    }),
  );
  const hidden = renderToStaticMarkup(
    React.createElement(ratingUi.CommunityHornMarker, {
      language: 'zh',
      average: 9,
    }),
  );

  assert.match(visible, /class="community-horn-marker"/);
  assert.match(visible, /alt="社区影响均分已突破 9\.0"/);
  assert.match(visible, /class="community-horn-art"/);
  assert.match(visible, /src="\/animations\/niulai-horn-badge\.png"/);
  assert.equal((visible.match(/<img/g) ?? []).length, 1);
  assert.equal(hidden, '');
});

test('community horn marker sits directly above a qualifying average', () => {
  const html = renderToStaticMarkup(
    React.createElement(ratingUi.CommunityImpactRating, {
      language: 'zh',
      policyId: 'opt-fee',
      aggregate: { average: 9.6, count: 18 },
      selected: null,
      pending: false,
      error: null,
      onSelect() {},
    }),
  );

  assert.match(
    html,
    /class="community-average-value">[\s\S]*?class="community-horn-marker"[\s\S]*?<strong>9\.6<\/strong><\/span><small>\/10<\/small>/,
  );
});

test('Niulai effect renders the approved text-free layered cow as decoration', () => {
  assert.equal(typeof niulaiUi.NiulaiPuppet, 'function');

  const html = renderToStaticMarkup(
    React.createElement(niulaiUi.NiulaiPuppet, { active: false }),
  );

  assert.match(html, /class="niulai-puppet"/);
  assert.match(html, /aria-hidden="true"/);
  assert.equal((html.match(/<img/g) ?? []).length, 7);
  assert.equal(html.replace(/<[^>]+>/g, '').trim(), '');
});

test('production Niulai image is the byte-identical approved transparent cutout', async () => {
  const asset = await readFile(
    new URL('../public/animations/niulai-cutout-v5.png', import.meta.url),
  ).catch(() => Buffer.alloc(0));
  const digest = createHash('sha256').update(asset).digest('hex');

  assert.equal(
    digest,
    'dd690db3a6b30afc7bef913c181fef0c146dacc806505584ec88fb5da14738c4',
  );
});

# Policy Radar Open-Source Cloudflare Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish `HansSJTU/policy-radar` as a clean MIT-licensed repository that automatically deploys one bilingual Cloudflare Workers site containing both `/` and `/stats`, while preserving the existing daily traffic history.

**Architecture:** Keep the existing Vinext application and move its deployment configuration from OpenAI Sites to native Cloudflare Workers. Continue using a `DB` D1 binding, add a daily unique-visitor baseline table for aggregate history, and deploy from GitHub Actions after tests, build, and D1 migrations pass. The current Sites deployment remains public until the new Cloudflare URL and migrated statistics are verified.

**Tech Stack:** TypeScript, React 19, Vinext, Vite 8, Cloudflare Workers, Cloudflare D1, Wrangler 4, Node test runner, GitHub Actions.

**Spec:** `docs/superpowers/specs/2026-08-31-policy-radar-open-source-cloudflare-design.md`

## Global Constraints

- Public repository: `https://github.com/HansSJTU/policy-radar`.
- License: MIT, copyright `2026 HansSJTU`.
- Worker name: `policy-radar`; D1 database name: `policy-radar-db`; binding: `DB`.
- `/` and `/stats` must be served by the same Cloudflare Worker origin.
- Do not publish `.openai/hosting.json`, Sites project metadata, `.env*`, tokens, visitor hashes, build output, or private Git history.
- Migrate only public daily aggregates: day, page views, and unique visitors.
- Preserve same-origin validation, 512-byte request limit, UUID validation, and `503` analytics failure behavior.
- Preserve bilingual desktop and mobile behavior; add an accessible GitHub link without causing horizontal overflow.
- Keep the existing Sites URL public until the user confirms the new Cloudflare deployment is correct.

---

## File Structure

- `db/schema.ts`: SQL table definitions used by runtime initialization.
- `db/analytics.ts`: visit recording and 30-day aggregate query.
- `drizzle/0001_analytics_baseline.sql`: idempotent D1 schema migration for imported daily visitor totals.
- `app/github-link.tsx`: reusable accessible GitHub project link.
- `app/page.tsx`: homepage navigation and footer integration.
- `app/stats/page.tsx`: `/stats` navigation integration.
- `app/globals.css`: GitHub-link desktop/mobile styling.
- `vite.config.ts`: native Vinext + Cloudflare Vite configuration without the Sites plugin.
- `wrangler.jsonc`: Worker name, runtime compatibility, assets, and D1 binding.
- `cloudflare-env.d.ts`: generated/maintained `DB` binding type.
- `scripts/build-analytics-import.mjs`: validates aggregate JSON and emits idempotent SQL.
- `data/analytics-baseline.json`: public aggregate history exported from the old site.
- `tests/analytics-database.test.mjs`: source-level regression checks for the baseline-aware query and schema.
- `tests/analytics-import.test.mjs`: migration data validation and SQL-generation tests.
- `tests/open-source-metadata.test.mjs`: GitHub link, license, documentation, and deployment-config checks.
- `.github/workflows/ci.yml`: Pull Request and branch test/build workflow.
- `.github/workflows/deploy.yml`: protected `main` migration-and-deploy workflow.
- `README.md`, `CONTRIBUTING.md`, `LICENSE`, `.env.example`: public project documentation.

---

### Task 1: Add Baseline-Aware Analytics Schema and Query

**Files:**
- Modify: `db/schema.ts`
- Modify: `db/analytics.ts`
- Create: `drizzle/0001_analytics_baseline.sql`
- Create: `tests/analytics-database.test.mjs`

**Interfaces:**
- Produces: `createDailyVisitorBaselineTable: string`.
- Preserves: `recordVisit(visitorId: string, now?: Date): Promise<void>`.
- Preserves: `getTrafficSeries(days?: number, now?: Date): Promise<TrafficPoint[]>`.
- Query contract: each day's visitors equal `daily_visitor_baseline.visitors + COUNT(daily_visitors.visitor_hash)`.

- [ ] **Step 1: Write the failing schema/query regression test**

```js
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const schema = await readFile(new URL('../db/schema.ts', import.meta.url), 'utf8');
const analytics = await readFile(new URL('../db/analytics.ts', import.meta.url), 'utf8');

test('analytics schema includes a daily visitor baseline table', () => {
  assert.match(schema, /CREATE TABLE IF NOT EXISTS daily_visitor_baseline/);
  assert.match(schema, /day TEXT PRIMARY KEY NOT NULL/);
  assert.match(schema, /visitors INTEGER NOT NULL DEFAULT 0/);
});

test('traffic query adds imported baseline visitors to new daily hashes', () => {
  assert.match(analytics, /COALESCE\(baseline\.visitors, 0\)/);
  assert.match(analytics, /COUNT\(visitors\.visitor_hash\)/);
  assert.match(analytics, /LEFT JOIN daily_visitor_baseline AS baseline/);
});
```

- [ ] **Step 2: Run the new test and verify it fails**

Run: `node --experimental-strip-types --test tests/analytics-database.test.mjs`

Expected: FAIL because `daily_visitor_baseline` and the baseline join are absent.

- [ ] **Step 3: Add the runtime schema definition**

Add to `db/schema.ts`:

```ts
export const createDailyVisitorBaselineTable = `
  CREATE TABLE IF NOT EXISTS daily_visitor_baseline (
    day TEXT PRIMARY KEY NOT NULL,
    visitors INTEGER NOT NULL DEFAULT 0,
    imported_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
  )
`;
```

Import it in `db/analytics.ts` and include `db.prepare(createDailyVisitorBaselineTable)` in `ensureAnalyticsSchema()`.

- [ ] **Step 4: Make the aggregate query baseline-aware**

Update the query in `getTrafficSeries()` to join `daily_visitor_baseline` and return:

```sql
COUNT(visitors.visitor_hash) + COALESCE(baseline.visitors, 0) AS visitors
```

Group by `traffic.day`, `traffic.page_views`, and `baseline.visitors`.

- [ ] **Step 5: Add the D1 migration**

Create `drizzle/0001_analytics_baseline.sql`:

```sql
CREATE TABLE IF NOT EXISTS daily_visitor_baseline (
  day TEXT PRIMARY KEY NOT NULL,
  visitors INTEGER NOT NULL DEFAULT 0,
  imported_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
PRAGMA optimize;
```

- [ ] **Step 6: Run analytics and full tests**

Run: `node --experimental-strip-types --test tests/analytics-database.test.mjs tests/analytics-model.test.mjs`

Expected: PASS.

Run: `npm test`

Expected: all tests pass.

- [ ] **Step 7: Commit the analytics compatibility layer**

```bash
git add db/schema.ts db/analytics.ts drizzle/0001_analytics_baseline.sql tests/analytics-database.test.mjs
git commit -m "feat: preserve imported traffic history"
```

---

### Task 2: Add a Validated Aggregate Import Tool

**Files:**
- Create: `scripts/build-analytics-import.mjs`
- Create: `data/analytics-baseline.json`
- Create: `tests/analytics-import.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Produces: `buildAnalyticsImport(rows: AnalyticsBaselineRow[]): string`.
- `AnalyticsBaselineRow`: `{ day: string, pageViews: number, visitors: number }`.
- CLI input: `data/analytics-baseline.json`; CLI output: SQL on stdout.

- [ ] **Step 1: Write the failing import-tool tests**

```js
import assert from 'node:assert/strict';
import test from 'node:test';
import { buildAnalyticsImport } from '../scripts/build-analytics-import.mjs';

test('builds idempotent aggregate import SQL', () => {
  const sql = buildAnalyticsImport([
    { day: '2026-08-30', pageViews: 12, visitors: 9 },
  ]);
  assert.match(sql, /INSERT INTO daily_traffic/);
  assert.match(sql, /ON CONFLICT\(day\) DO UPDATE SET page_views = excluded\.page_views/);
  assert.match(sql, /INSERT INTO daily_visitor_baseline/);
  assert.match(sql, /ON CONFLICT\(day\) DO UPDATE SET visitors = excluded\.visitors/);
});

test('rejects invalid dates, negative counts, and duplicate days', () => {
  assert.throws(() => buildAnalyticsImport([{ day: '08/30/2026', pageViews: 1, visitors: 1 }]));
  assert.throws(() => buildAnalyticsImport([{ day: '2026-08-30', pageViews: -1, visitors: 1 }]));
  assert.throws(() => buildAnalyticsImport([
    { day: '2026-08-30', pageViews: 1, visitors: 1 },
    { day: '2026-08-30', pageViews: 2, visitors: 2 },
  ]));
});
```

- [ ] **Step 2: Run the tests and verify they fail**

Run: `node --test tests/analytics-import.test.mjs`

Expected: FAIL because the module does not exist.

- [ ] **Step 3: Implement validation and deterministic SQL generation**

Implement `buildAnalyticsImport` so it:

- accepts only an array;
- enforces `YYYY-MM-DD` dates;
- enforces non-negative safe integers for `pageViews` and `visitors`;
- rejects duplicate days;
- sorts rows chronologically;
- emits quoted literal values only after validation;
- uses upserts that replace imported aggregate values rather than incrementing them.

When executed directly, read `data/analytics-baseline.json` and write SQL to stdout. Do not write files from the script.

- [ ] **Step 4: Add an empty, valid initial aggregate dataset and script**

Create `data/analytics-baseline.json` with `[]`. Add:

```json
"analytics:sql": "node scripts/build-analytics-import.mjs"
```

to `package.json` scripts. The file is populated from the old live database only in Task 7.

- [ ] **Step 5: Run the focused and full tests**

Run: `node --test tests/analytics-import.test.mjs`

Expected: PASS.

Run: `npm test`

Expected: all tests pass.

- [ ] **Step 6: Commit the import tool**

```bash
git add scripts/build-analytics-import.mjs data/analytics-baseline.json tests/analytics-import.test.mjs package.json
git commit -m "feat: add aggregate analytics importer"
```

---

### Task 3: Add GitHub Project Links to Both Routes

**Files:**
- Create: `app/github-link.tsx`
- Modify: `app/page.tsx`
- Modify: `app/stats/page.tsx`
- Modify: `app/globals.css`
- Modify: `tests/ui-layout.test.mjs`
- Create: `tests/open-source-metadata.test.mjs`

**Interfaces:**
- Produces: `GitHubProjectLink({ language, compact? }: { language: Language; compact?: boolean })`.
- Fixed URL: `https://github.com/HansSJTU/policy-radar`.

- [ ] **Step 1: Write failing component and layout tests**

The metadata test must assert that the reusable component contains the fixed repository URL, `target="_blank"`, `rel="noreferrer"`, a localized accessible label, and a Lucide `Github` icon. Extend the layout test to require mobile `.github-project-link` sizing and no forced text width in compact mode.

- [ ] **Step 2: Run the tests and verify they fail**

Run: `node --test tests/open-source-metadata.test.mjs tests/ui-layout.test.mjs`

Expected: FAIL because the GitHub component and styles do not exist.

- [ ] **Step 3: Implement the reusable link**

Create `app/github-link.tsx` using `Github` from `lucide-react`. Use localized labels:

```ts
const labels = {
  zh: '在 GitHub 查看开源项目',
  en: 'View the open-source project on GitHub',
};
```

Render the icon plus visible `GitHub` text unless `compact` is true.

- [ ] **Step 4: Integrate desktop/mobile homepage and stats navigation**

Add the link to the homepage top action group and to `stats-page-actions`. Keep the existing language switch and date visible. Add a footer link containing `GitHub 开源项目 / Open source on GitHub · MIT`.

- [ ] **Step 5: Add responsive styles**

Use the existing nav typography, color tokens, and spacing. At the mobile breakpoint, keep a 36px minimum touch target, show only the GitHub icon in the top bars, and ensure the combined brand/actions row remains within the viewport.

- [ ] **Step 6: Run tests and build**

Run: `npm test`

Expected: all tests pass.

Run: `npm run build`

Expected: production build succeeds.

- [ ] **Step 7: Commit the site links**

```bash
git add app/github-link.tsx app/page.tsx app/stats/page.tsx app/globals.css tests/ui-layout.test.mjs tests/open-source-metadata.test.mjs
git commit -m "feat: link the site to its GitHub project"
```

---

### Task 4: Create D1 and Replace Sites-Specific Deployment Configuration

**Files:**
- Modify: `package.json`
- Modify: `package-lock.json`
- Modify: `vite.config.ts`
- Create: `wrangler.jsonc`
- Modify: `cloudflare-env.d.ts`
- Modify: `.gitignore`
- Delete from public snapshot only: `.openai/hosting.json`
- Modify: `tests/open-source-metadata.test.mjs`

**Interfaces:**
- Build: `npm run build`.
- Deploy: `npm run deploy`.
- Database migration: `npm run db:migrate`.
- Worker: `policy-radar`; D1 binding: `DB`; database: `policy-radar-db`.

- [ ] **Step 1: Extend the failing deployment-config tests**

Assert that:

- `package.json` is named `policy-radar` and is not private;
- `@openai/sites-vite-plugin` is absent;
- `@vinext/cloudflare` is present at the same release line as `vinext`;
- `vite.config.ts` uses `vinext()` and `cloudflare()` without `sites()`;
- `wrangler.jsonc` names `policy-radar`, enables `nodejs_compat`, and binds `DB` to `policy-radar-db`;
- `.gitignore` excludes `.dev.vars`, `.wrangler`, `dist`, and `.openai/hosting.json`.

- [ ] **Step 2: Run the config test and verify it fails**

Run: `node --test tests/open-source-metadata.test.mjs`

Expected: FAIL on Sites-specific configuration.

- [ ] **Step 3: Create D1 and capture its exact ID**

Authenticate to the user's Cloudflare account, create exactly one D1 database named `policy-radar-db`, and retain the exact returned database UUID for `wrangler.jsonc`. Creating this database is authorized by the approved design; do not create a Worker or any additional Cloudflare resource in this step.

- [ ] **Step 4: Update dependencies and scripts**

Set the package name to `policy-radar`, remove `private: true`, remove `@openai/sites-vite-plugin`, and add the compatible `@vinext/cloudflare` package. Add scripts:

```json
"deploy": "vinext-cloudflare deploy",
"db:migrate": "wrangler d1 migrations apply policy-radar-db --remote"
```

Use `npm install` to refresh `package-lock.json`.

- [ ] **Step 5: Simplify the Vite configuration**

Keep Tailwind, Vinext, the Cloudflare RSC environment, and the existing sandbox-only polling behavior. Remove all imports and runtime reads of `.openai/hosting.json` and remove `sites()`.

- [ ] **Step 6: Create native Wrangler configuration**

Create `wrangler.jsonc` with:

- name `policy-radar`;
- main `vinext/server/fetch-handler`;
- compatibility date `2026-08-31`;
- compatibility flag `nodejs_compat`;
- assets directory and binding expected by Vinext;
- D1 binding `DB`, database name `policy-radar-db`, and the exact D1 database ID returned in Step 3.

Do not commit a token or account ID. Use `CLOUDFLARE_ACCOUNT_ID` in local/CI environments.

- [ ] **Step 7: Refresh Worker binding types**

Run: `npx wrangler types`

Expected: `cloudflare-env.d.ts` includes `DB: D1Database`.

- [ ] **Step 8: Run the config test, full tests, and build**

Run: `npm test`

Expected: all tests pass.

Run: `npm run build`

Expected: production build succeeds and emits a deployable Worker.

- [ ] **Step 9: Commit native Cloudflare deployment support**

```bash
git add package.json package-lock.json vite.config.ts wrangler.jsonc cloudflare-env.d.ts .gitignore tests/open-source-metadata.test.mjs
git commit -m "build: configure native Cloudflare deployment"
```

---

### Task 5: Add Public Documentation, License, and CI

**Files:**
- Create: `README.md`
- Create: `CONTRIBUTING.md`
- Create: `LICENSE`
- Create: `.env.example`
- Create: `.github/workflows/ci.yml`
- Create: `.github/workflows/deploy.yml`
- Modify: `tests/open-source-metadata.test.mjs`

**Interfaces:**
- CI triggers: Pull Requests and pushes to branches.
- Deployment trigger: pushes to `main` and manual dispatch.
- Deployment secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.

- [ ] **Step 1: Extend the failing repository metadata test**

Assert that the four public documents and both workflows exist; MIT contains `Copyright (c) 2026 HansSJTU`; README contains the live site, `/stats`, local commands, source methodology, privacy note, disclaimer, and Cloudflare deployment instructions; workflows use `npm ci`, `npm test`, and `npm run build`; only deploy workflow references production secrets and runs `npm run db:migrate` before `npm run deploy`.

- [ ] **Step 2: Run the test and verify it fails**

Run: `node --test tests/open-source-metadata.test.mjs`

Expected: FAIL because public documents and workflows do not exist.

- [ ] **Step 3: Add MIT and bilingual project documentation**

README must document:

- F-1 → CPT → OPT → H-1B scope and bilingual interface;
- public-source and forum-reference distinction;
- local setup: Node 22.13+, `npm ci`, `npm run dev`, `npm test`, `npm run build`;
- D1 setup, migrations, Workers deployment, and required GitHub secrets;
- anonymous daily analytics behavior;
- legal disclaimer and contribution link.

CONTRIBUTING must require source links, objective subject-verb-object summaries, bilingual updates, tests, and no secrets or personal data.

- [ ] **Step 4: Add CI workflow**

Use Node 22, npm cache, `npm ci`, `npm test`, and `npm run build`. Grant read-only repository permissions.

- [ ] **Step 5: Add deploy workflow**

Use a `production` environment, `concurrency: policy-radar-production`, and `permissions: contents: read`. After tests/build, run migrations and deploy with Cloudflare secrets in environment variables. No production step may run for Pull Requests.

- [ ] **Step 6: Run tests and build**

Run: `npm test`

Expected: all tests pass.

Run: `npm run build`

Expected: production build succeeds.

- [ ] **Step 7: Commit public project documentation and automation**

```bash
git add README.md CONTRIBUTING.md LICENSE .env.example .github/workflows/ci.yml .github/workflows/deploy.yml tests/open-source-metadata.test.mjs
git commit -m "docs: prepare policy radar for open source"
```

---

### Task 6: Create the Clean Public Repository

**Files:**
- Create outside the staging repository: `/Users/hans/Documents/Codex/policy-radar` as the clean public checkout.

**Interfaces:**
- GitHub repository: `HansSJTU/policy-radar`, public, default branch `main`.

- [ ] **Step 1: Re-run deployment config tests and build with the real D1 ID**

Run: `npm test`

Expected: all tests pass.

Run: `npm run build`

Expected: production build succeeds.

- [ ] **Step 2: Perform a tracked-source secret audit**

Run searches for private keys, API tokens, passwords, `.env` values, the Sites project ID, and the old Sites repository credential. The result must be empty outside tests that name secret variable keys.

- [ ] **Step 3: Create a clean local repository snapshot**

Create `/Users/hans/Documents/Codex/policy-radar`, copy only tracked and approved source files, omit `.git` and `.openai/hosting.json`, initialize Git with branch `main`, and create one initial commit:

```text
Initial open-source release
```

- [ ] **Step 4: Create the public GitHub repository**

Create `HansSJTU/policy-radar` as Public with no generated README, license, or `.gitignore` because the clean snapshot already supplies them. Set description, topics, Issues enabled, and leave GitHub Pages disabled.

- [ ] **Step 5: Publish the clean initial commit**

Push the exact audited snapshot to `main`, then verify the public file tree excludes `.openai/hosting.json`, credentials, old Git history, `dist`, and `.wrangler`.

---

### Task 7: Export and Migrate Existing Public Traffic History

**Files:**
- Modify: `data/analytics-baseline.json` in the clean public repository.

**Interfaces:**
- Input: old Sites D1 `daily_traffic` and aggregate counts from `daily_visitors`.
- Output: validated daily rows `{ day, pageViews, visitors }`.

- [ ] **Step 1: Read the old database schema and aggregates read-only**

Use Sites database read access when available. If it remains unavailable, add a temporary same-origin, read-only aggregate export route to the old deployment, retrieve the public daily totals once, then remove that route immediately. Never export `visitor_hash` values.

- [ ] **Step 2: Populate and validate the aggregate JSON**

Write the sorted daily rows to `data/analytics-baseline.json`. Run:

```bash
npm run analytics:sql
```

Expected: deterministic SQL containing one `daily_traffic` and one `daily_visitor_baseline` upsert per active day.

- [ ] **Step 3: Apply schema migrations to the new D1**

Run: `npm run db:migrate`

Expected: migrations complete without errors and are safe to rerun.

- [ ] **Step 4: Import the aggregate SQL once**

Generate SQL into an OS temporary file, apply it to `policy-radar-db`, and delete the temporary file after successful execution. Re-run the importer once to prove the upserts are idempotent.

- [ ] **Step 5: Verify migrated values before deployment**

Compare each active day, total page views, total unique visitor-days, and active-day count against the old public `/stats` output. All values must match exactly.

- [ ] **Step 6: Commit and publish only aggregate history**

Commit the JSON aggregate dataset to the clean public repository. Confirm no visitor hashes or personal identifiers were included.

---

### Task 8: Configure Automated Deployment and Validate Production

**Files:**
- No source changes unless verification exposes a defect.

**Interfaces:**
- GitHub production secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.
- Production routes: `/`, `/stats`, `/api/visit`.

- [ ] **Step 1: Create the least-privilege Cloudflare API token**

Create a token scoped to the user's account with only the Workers Scripts and D1 permissions required by Wrangler. Do not reveal, log, copy into source, or store the token anywhere except the GitHub Actions secret form.

- [ ] **Step 2: Configure GitHub production secrets and environment**

Create the `production` environment. Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as repository secrets. Never place either value in repository variables, workflow text, issue comments, or remote URLs.

- [ ] **Step 3: Trigger the first `main` deployment**

Run the deployment workflow and wait for tests, build, migrations, and deploy to complete. Record the exact `workers.dev` URL and set it as the GitHub repository Homepage.

- [ ] **Step 4: Verify production behavior**

Check:

- `/` and `/stats` return success on the same origin;
- the homepage GitHub links point to `HansSJTU/policy-radar`;
- Chinese/English switching, filters, anchors, glossary popovers, stats navigation, and back navigation work;
- desktop and mobile layouts do not overflow;
- `/api/visit` rejects invalid UUIDs and cross-site requests;
- one valid page load increments page views once, and a repeat from the same browser/day does not increment unique visitors;
- migrated 30-day totals remain intact after the new visit.

- [ ] **Step 5: Verify public repository and automation**

Confirm CI runs without production credentials on Pull Requests, deploy runs only on `main`, GitHub Pages is disabled, the repository is Public, and the README points to the exact production URL.

- [ ] **Step 6: Request final cutover confirmation**

Present the GitHub URL, Cloudflare URL, migration totals, and verification result. Ask the user before changing the old Sites access from Public to owner-only. Do not delete the old Sites project.

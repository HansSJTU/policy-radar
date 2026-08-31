import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = new URL('../', import.meta.url);
const packageJson = JSON.parse(await readFile(new URL('package.json', root), 'utf8'));
const viteConfig = await readFile(new URL('vite.config.ts', root), 'utf8');
const homePage = await readFile(new URL('app/page.tsx', root), 'utf8');

let sitesHostingConfigExists = true;
try {
  await readFile(new URL('.openai/hosting.json', root), 'utf8');
} catch {
  sitesHostingConfigExists = false;
}

let wranglerConfig;
try {
  wranglerConfig = JSON.parse(
    await readFile(new URL('wrangler.jsonc', root), 'utf8'),
  );
} catch {
  wranglerConfig = undefined;
}

test('package exposes native Cloudflare build, migration, and deploy commands', () => {
  assert.equal(packageJson.name, 'policy-radar');
  assert.notEqual(packageJson.private, true);
  assert.equal(packageJson.devDependencies['@openai/sites-vite-plugin'], undefined);
  assert.equal(
    packageJson.devDependencies['@vinext/cloudflare'],
    packageJson.dependencies.vinext,
  );
  assert.equal(packageJson.scripts.deploy, 'vinext-cloudflare deploy');
  assert.equal(
    packageJson.scripts['db:migrate'],
    'wrangler d1 migrations apply policy-radar-db --remote',
  );
});

test('Vite uses the native Cloudflare plugin without Sites wiring', () => {
  assert.match(viteConfig, /from ['"]@cloudflare\/vite-plugin['"]/);
  assert.doesNotMatch(viteConfig, /@openai\/sites-vite-plugin/);
  assert.doesNotMatch(viteConfig, /\.openai\/hosting\.json/);
  assert.equal(sitesHostingConfigExists, false);
});

test('Wrangler config serves both app routes and binds the production D1', () => {
  assert.ok(wranglerConfig, 'wrangler.jsonc must exist');
  assert.equal(wranglerConfig.name, 'policy-radar');
  assert.equal(wranglerConfig.main, 'vinext/server/fetch-handler');
  assert.deepEqual(wranglerConfig.compatibility_flags, ['nodejs_compat']);
  assert.deepEqual(wranglerConfig.assets, {
    directory: 'dist/client',
    not_found_handling: 'none',
    binding: 'ASSETS',
  });
  assert.equal(wranglerConfig.d1_databases.length, 1);
  assert.equal(wranglerConfig.d1_databases[0].binding, 'DB');
  assert.equal(wranglerConfig.d1_databases[0].database_name, 'policy-radar-db');
  assert.equal(wranglerConfig.d1_databases[0].migrations_dir, 'drizzle');
  assert.match(
    wranglerConfig.d1_databases[0].database_id,
    /^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/,
  );
});

test('the home route is request-dynamic', () => {
  assert.match(homePage, /dynamic\s*=\s*['"]force-dynamic['"]/);
});

test('Cloudflare deployment classifies the app as non-ISR', () => {
  const result = spawnSync(
    fileURLToPath(new URL('node_modules/.bin/vinext-cloudflare', root)),
    ['deploy', '--dry-run'],
    {
      cwd: fileURLToPath(root),
      encoding: 'utf8',
      env: { ...process.env, NO_COLOR: '1' },
    },
  );

  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ISR:\s+none/);
});

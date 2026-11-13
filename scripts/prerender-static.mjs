// Renders the pages and link-preview images listed in app/static-pages.ts
// into dist/client/__static, so the Worker can serve them without rendering.
// Runs after `vinext build` against the built Worker in a local workerd.
import { spawn } from 'node:child_process';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { createServer } from 'node:net';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { LANGUAGE_COOKIE } from '../app/language.ts';
import { STATIC_DIR, staticFiles } from '../app/static-pages.ts';

const root = fileURLToPath(new URL('../', import.meta.url));
const clientDir = path.join(root, 'dist', 'client');
const wranglerConfig = path.join(root, 'dist', 'server', 'wrangler.json');

function freePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.once('error', reject);
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
  });
}

async function waitForServer(origin, worker) {
  for (let attempt = 0; attempt < 120; attempt += 1) {
    if (worker.exitCode !== null) {
      throw new Error(`wrangler dev exited with code ${worker.exitCode}`);
    }
    try {
      await fetch(`${origin}/robots.txt`);
      return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }
  }
  throw new Error('wrangler dev did not start within 60 seconds');
}

async function render(origin, { language, source, file }) {
  // The root layout reads the language from the cookie, as for a reader who
  // already chose it, so `<html lang>` matches the page.
  const response = await fetch(origin + source, {
    redirect: 'manual',
    headers: { cookie: `${LANGUAGE_COOKIE}=${language}` },
  });
  if (response.status !== 200) {
    throw new Error(`${source} returned ${response.status}`);
  }
  const target = path.join(clientDir, file);
  await mkdir(path.dirname(target), { recursive: true });
  await writeFile(target, Buffer.from(await response.arrayBuffer()));
}

// Start from an empty directory so the Worker renders every page itself.
await rm(path.join(clientDir, STATIC_DIR), { recursive: true, force: true });

// The local workerd can be older than the configured compatibility date.
const wranglerRequire = createRequire(
  createRequire(import.meta.url).resolve('wrangler/package.json'),
);
const { supportedCompatibilityDate } = await import(
  wranglerRequire.resolve('miniflare')
);
const { compatibility_date: configuredDate } = JSON.parse(
  await readFile(wranglerConfig, 'utf8'),
);
const compatibilityDate =
  configuredDate < supportedCompatibilityDate
    ? configuredDate
    : supportedCompatibilityDate;

const port = await freePort();
const origin = `http://127.0.0.1:${port}`;
const worker = spawn(
  process.execPath,
  [
    path.join(root, 'node_modules', 'wrangler', 'bin', 'wrangler.js'),
    'dev',
    '--config',
    wranglerConfig,
    '--ip',
    '127.0.0.1',
    '--port',
    String(port),
    '--compatibility-date',
    compatibilityDate,
    '--show-interactive-dev-session=false',
  ],
  {
    cwd: root,
    env: { ...process.env, WRANGLER_SEND_METRICS: 'false' },
    stdio: ['ignore', 'ignore', 'pipe'],
  },
);
let stderr = '';
worker.stderr.on('data', (chunk) => {
  stderr += chunk;
});

try {
  await waitForServer(origin, worker);
  const queue = staticFiles();
  const total = queue.length;
  await Promise.all(
    Array.from({ length: 4 }, async () => {
      for (let item = queue.shift(); item; item = queue.shift()) {
        await render(origin, item);
      }
    }),
  );
  console.log(`Prerendered ${total} static pages and images.`);
} catch (error) {
  if (stderr) console.error(stderr);
  throw error;
} finally {
  worker.kill();
}

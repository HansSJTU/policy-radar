// Renders the pages and link-preview images listed in app/static-pages.ts
// into dist/client/__static, so the Worker can serve them without rendering.
// Runs after `vinext build` against the built Worker in a local workerd.
import { spawn } from 'node:child_process';
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { createServer } from 'node:net';
import { tmpdir } from 'node:os';
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

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47]);

// A response can be 200 and still be cut short. Check the body before
// keeping it.
function isComplete(file, body) {
  if (file.endsWith('.png')) {
    return body.length > 1000 && body.subarray(0, 4).equals(PNG_SIGNATURE);
  }
  return body.includes('</html>');
}

async function render(origin, outDir, { language, source, file }) {
  let problem = '';
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      // The root layout reads the language from the cookie, as for a reader
      // who already chose it, so `<html lang>` matches the page.
      const response = await fetch(origin + source, {
        redirect: 'manual',
        // A request without a User-Agent gets metadata streamed into
        // `<body>`; next.config.ts puts it in `<head>` for any named agent.
        headers: {
          cookie: `${LANGUAGE_COOKIE}=${language}`,
          'user-agent': 'policy-radar-prerender',
        },
      });
      const body = Buffer.from(await response.arrayBuffer());
      if (response.status === 200 && isComplete(file, body)) {
        const target = path.join(outDir, file);
        await mkdir(path.dirname(target), { recursive: true });
        await writeFile(target, body);
        return;
      }
      problem = `status ${response.status}, ${body.length} bytes`;
    } catch (error) {
      problem = String(error?.cause ?? error);
    }
  }
  throw new Error(`${source} did not render completely (${problem})`);
}

// Start from an empty directory so the Worker renders every page itself.
// Output goes to a temporary directory first: wrangler dev watches
// dist/client and reloads on every change, dropping requests in flight.
await rm(path.join(clientDir, STATIC_DIR), { recursive: true, force: true });
const outDir = await mkdtemp(path.join(tmpdir(), 'policy-radar-static-'));

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

let files;
try {
  await waitForServer(origin, worker);
  files = staticFiles();
  const queue = [...files];
  await Promise.all(
    Array.from({ length: 4 }, async () => {
      for (let item = queue.shift(); item; item = queue.shift()) {
        await render(origin, outDir, item);
      }
    }),
  );
} catch (error) {
  if (stderr) console.error(stderr);
  throw error;
} finally {
  worker.kill();
}

await cp(outDir, clientDir, { recursive: true });
await rm(outDir, { recursive: true, force: true });
console.log(`Prerendered ${files.length} static pages and images.`);

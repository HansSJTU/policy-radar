// Fetches every source the site cites and reports which ones changed since
// the last recorded check, so a daily update reads only what is new.
//
//   npm run sources                          fetch and report
//   npm run sources -- --only opt-fee        one policy or school
//   npm run sources -- --record opt-fee mit  mark these as read
//   npm run sources -- --record all
//
// content/source-hashes.json records the version of each source the site was
// last reconciled with. A check never changes it. After reading what the
// report lists for a policy or school, `--record` stores the versions just
// fetched, so the next check reports only what changes after today. Items
// that were not read stay unrecorded and are reported again.
//
// Texts, PDFs, diffs and the report go to a folder outside the repository
// (--dir, SOURCE_CHECK_DIR, or ~/.cache/policy-radar-sources).

import { execFile } from 'node:child_process';
import { createHash } from 'node:crypto';
import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import { homedir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

import { communitySchools, verifiedSchools } from '../app/cpt-schools.ts';
import { policyContents } from '../content/policies/index.ts';
import {
  buildReport,
  changedLines,
  classify,
  collectSources,
  easternDate,
  ecfrToText,
  federalRegisterToText,
  feedToText,
  fetchPlan,
  fileSlug,
  htmlToText,
  isArchivedDocument,
  regulationsToText,
  unusableReason,
} from './source-check-model.mjs';

const run = promisify(execFile);
const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const recordFile = path.join(root, 'content', 'source-hashes.json');

const args = process.argv.slice(2);
const option = (name) => {
  const index = args.indexOf(name);
  return index === -1 ? undefined : args[index + 1];
};
const only = option('--only');
const recordIndex = args.indexOf('--record');
const recordOwners = recordIndex === -1 ? null : args.slice(recordIndex + 1).filter((arg) => !arg.startsWith('--'));
const dir = path.resolve(
  option('--dir') ?? process.env.SOURCE_CHECK_DIR ?? path.join(homedir(), '.cache', 'policy-radar-sources'),
);
const today = easternDate();

const HEADERS = {
  'User-Agent': 'source-change-check/1.0 (automated daily check of cited public documents)',
  Accept: 'text/html,application/xhtml+xml,application/pdf,application/json;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
};
const MAX_BYTES = 40 * 1024 * 1024;

async function download(url, headers = {}) {
  const response = await fetch(url, {
    headers: { ...HEADERS, ...headers },
    redirect: 'follow',
    signal: AbortSignal.timeout(45_000),
  });
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length > MAX_BYTES) throw new Error('response larger than 40 MB');
  return { status: response.status, type: response.headers.get('content-type') ?? '', bytes };
}

async function downloadWithRetry(url, headers) {
  try {
    return await download(url, headers);
  } catch {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return download(url, headers);
  }
}

const sha = (data) => createHash('sha256').update(data).digest('hex').slice(0, 16);

async function pdfText(file) {
  try {
    const { stdout } = await run('pdftotext', ['-layout', file, '-'], { maxBuffer: 64 * 1024 * 1024 });
    return stdout;
  } catch {
    return null;
  }
}

// Returns { hash, text, extra? } for a readable source, or { problem, gone? }.
async function read(plan) {
  let response;
  try {
    response = await downloadWithRetry(plan.url, plan.headers);
  } catch (error) {
    return { problem: `request failed: ${error.cause?.code ?? error.message}` };
  }
  const { status, type, bytes } = response;
  const gone = status === 404 || status === 410;

  if (bytes.subarray(0, 5).toString() === '%PDF-') {
    const file = path.join(dir, 'pdf', `${fileSlug(plan.key)}.pdf`);
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, bytes);
    const text = await pdfText(file);
    return { hash: sha(bytes), text: text ?? `PDF saved at ${file}. Text was not extracted: pdftotext is not installed.` };
  }

  const body = bytes.toString('utf8');
  const fromJson = { 'federal-register': federalRegisterToText, regulations: regulationsToText, ecfr: ecfrToText }[plan.kind];
  if (fromJson) {
    if (status >= 400) return { problem: `HTTP ${status}`, gone };
    try {
      const json = JSON.parse(body);
      const text = fromJson(json);
      if (!text) return { problem: 'record has no readable fields' };
      return { hash: sha(text), text, fullTextUrl: json.raw_text_url };
    } catch {
      return { problem: 'response is not JSON' };
    }
  }
  if (plan.kind === 'docket-feed') {
    if (status >= 400) return { problem: `HTTP ${status}`, gone };
    const text = feedToText(body);
    return text ? { hash: sha(text), text } : { problem: 'feed has no entries' };
  }

  const text = /html|xml/i.test(type) || /<html/i.test(body.slice(0, 2000)) ? htmlToText(body) : body.trim();
  const problem = unusableReason(status, text);
  return problem ? { problem, gone } : { hash: sha(text), text };
}

async function readOr(file) {
  try {
    return await readFile(file, 'utf8');
  } catch {
    return null;
  }
}

const record = JSON.parse((await readOr(recordFile)) ?? '{}');
const items = collectSources({ policyContents, verifiedSchools, communitySchools })
  .filter((item) => !only || item.owner.includes(only))
  .map((item) => {
    if (!item.url) return item;
    const plan = fetchPlan(item.url, { regulationsApiKey: process.env.REGULATIONS_GOV_API_KEY });
    return { ...item, key: plan.key, plan };
  })
  // Several links to one record (a docket's entries) count once per owner.
  .sort((a, b) => Number(b.primary) - Number(a.primary))
  .filter(
    (item, index, all) =>
      !item.key || all.findIndex((other) => other.owner === item.owner && other.key === item.key) === index,
  );

const plans = new Map(items.filter((item) => item.key).map((item) => [item.key, item.plan]));
const pendingFile = path.join(dir, 'pending.json');

async function saveRecord() {
  const sorted = Object.fromEntries(Object.keys(record).sort().map((key) => [key, record[key]]));
  await writeFile(recordFile, `${JSON.stringify(sorted, null, 2)}\n`);
}

if (recordOwners) {
  const pending = JSON.parse((await readOr(pendingFile)) ?? 'null');
  if (!pending) throw new Error(`No check to record. Run \`npm run sources\` first (looked in ${dir}).`);
  if (!recordOwners.length) throw new Error('Name the policies or schools you read, or `all`.');
  const named = (owner) => recordOwners.includes('all') || recordOwners.includes(owner) || recordOwners.includes(owner.split(':')[1]);
  const unknown = recordOwners.filter((name) => name !== 'all' && !items.some((item) => item.owner === name || item.owner.split(':')[1] === name));
  if (unknown.length) throw new Error(`Not a policy or school id: ${unknown.join(', ')}`);
  let stored = 0;
  for (const item of items) {
    const hash = item.key && named(item.owner) ? pending.hashes[item.key] : undefined;
    if (!hash) continue;
    // Keep the recorded text, so the next change can be shown as a diff.
    const name = `${fileSlug(item.key)}.txt`;
    await mkdir(path.join(dir, 'recorded'), { recursive: true });
    await copyFile(path.join(dir, 'text', name), path.join(dir, 'recorded', name)).catch(() => {});
    if (record[item.key]?.hash !== hash) {
      record[item.key] = { hash, changedOn: pending.date };
      stored += 1;
    }
  }
  // Sources the site no longer cites leave the record.
  for (const key of Object.keys(record)) if (!plans.has(key)) delete record[key];
  await saveRecord();
  console.log(`Recorded ${stored} source version${stored === 1 ? '' : 's'} from the ${pending.date} check.`);
  process.exit(0);
}

const results = new Map();
const hashes = {};
await mkdir(path.join(dir, 'text'), { recursive: true });
await mkdir(path.join(dir, 'diff'), { recursive: true });

async function check(key, plan) {
  const previous = record[key]?.hash;
  const fetched = previous && isArchivedDocument(plan.url) ? null : await read(plan);
  const state = classify(previous, fetched);
  const result = { state };
  if (fetched?.problem) result.note = fetched.problem;
  if (fetched?.hash) {
    const textFile = path.join(dir, 'text', `${fileSlug(key)}.txt`);
    const before = await readOr(path.join(dir, 'recorded', `${fileSlug(key)}.txt`));
    let text = fetched.text;
    if (state !== 'unchanged' && fetched.fullTextUrl) {
      try {
        const full = await downloadWithRetry(fetched.fullTextUrl);
        if (full.status < 400) text += `\n\n--- full text ---\n${htmlToText(full.bytes.toString('utf8'))}`;
      } catch {
        // The record's own facts are enough to see what changed.
      }
    }
    await writeFile(textFile, `${text}\n`);
    result.textFile = textFile;
    if (state === 'changed' && before) {
      const { added, removed } = changedLines(before.trimEnd(), text);
      result.added = added;
      result.removed = removed;
      result.diffFile = path.join(dir, 'diff', `${fileSlug(key)}.diff`);
      await writeFile(
        result.diffFile,
        [...removed.map((line) => `- ${line}`), ...added.map((line) => `+ ${line}`)].join('\n') + '\n',
      );
    }
    hashes[key] = fetched.hash;
  }
  results.set(key, result);
}

// One request at a time per site, with a pause; several sites in parallel.
const byHost = new Map();
for (const [key, plan] of plans) {
  const host = new URL(plan.url).host;
  byHost.set(host, [...(byHost.get(host) ?? []), [key, plan]]);
}
const queues = [...byHost.values()];
await Promise.all(
  Array.from({ length: 8 }, async () => {
    for (let queue = queues.pop(); queue; queue = queues.pop()) {
      for (const [key, plan] of queue) {
        await check(key, plan);
        await new Promise((resolve) => setTimeout(resolve, 400));
      }
    }
  }),
);

await writeFile(pendingFile, `${JSON.stringify({ date: today, hashes }, null, 2)}\n`);

const report = buildReport({ date: today, items, results });
const reportFile = path.join(dir, `report-${today}.md`);
await writeFile(reportFile, report);
console.log(report.split('\n')[2]);
console.log(`Report: ${reportFile}`);

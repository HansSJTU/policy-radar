/** Download a reproducible sample for editorial review; never invent classifications.
 * REGULATIONS_GOV_API_KEY=... node scripts/sample-public-comments.mjs DOCUMENT_ID OUTPUT_DIR [SAMPLE_SIZE]
 * Output includes the complete sampling frame, selected IDs, and review records.
 */
import { createHash, randomBytes } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [documentId, output, requestedSize = '100'] = process.argv.slice(2);
const sampleSize = Number(requestedSize);
if (!Number.isSafeInteger(sampleSize) || sampleSize < 1)
  throw new Error('SAMPLE_SIZE must be a positive integer');
if (!/^[-A-Z0-9]+-\d{4}$/.test(documentId ?? '') || !output)
  throw new Error('Pass DOCUMENT_ID and OUTPUT_DIR');
const key = process.env.REGULATIONS_GOV_API_KEY;
if (!key)
  throw new Error('Set REGULATIONS_GOV_API_KEY; do not commit the key.');
await mkdir(output, { recursive: true });
const get = async (resource, params = {}) => {
  const url = new URL(`https://api.regulations.gov/v4/${resource}`);
  for (const [name, value] of Object.entries(params))
    url.searchParams.set(name, String(value));
  const cacheName = createHash('sha256').update(url.href).digest('hex');
  const cached = path.join(output, `${cacheName}.json`);
  try {
    return JSON.parse(await readFile(cached, 'utf8'));
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
  const response = await fetch(url, {
    headers: { 'X-Api-Key': key },
    signal: AbortSignal.timeout(40000),
  });
  if (!response.ok)
    throw new Error(
      `Official API returned ${response.status}; retry after ${response.headers.get('retry-after') ?? 'unknown'} seconds. Cached responses are preserved.`,
    );
  const data = await response.json();
  await writeFile(cached, JSON.stringify(data, null, 2));
  return data;
};
const easternTimestamp = (value) => {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/New_York',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hourCycle: 'h23',
    })
      .formatToParts(new Date(value))
      .map((part) => [part.type, part.value]),
  );
  return `${parts.year}-${parts.month}-${parts.day} ${parts.hour}:${parts.minute}:${parts.second}`;
};
const document = await get(`documents/${documentId}`);
const objectId = document.data.attributes.objectId;
const rows = new Map();
let lower;
let initialTotal;
let hasMore = true;
while (hasMore) {
  let last;
  for (let page = 1; page <= 20; page++) {
    const data = await get('comments', {
      'filter[commentOnId]': objectId,
      'page[size]': 250,
      'page[number]': page,
      sort: 'lastModifiedDate,documentId',
      ...(lower ? { 'filter[lastModifiedDate][ge]': lower } : {}),
    });
    initialTotal ??= data.meta.totalElements;
    for (const row of data.data) rows.set(row.id, row);
    last = data.data.at(-1);
    hasMore = data.meta.hasNextPage;
    console.log(`Collected ${rows.size} IDs`);
    if (!hasMore) break;
  }
  if (hasMore) {
    if (!last) throw new Error('Missing pagination cursor');
    const next = easternTimestamp(last.attributes.lastModifiedDate);
    if (next === lower)
      throw new Error(
        'Pagination did not advance; split this time interval before sampling.',
      );
    lower = next;
  }
}
// Fail closed if the listing changed during collection, rather than silently sampling an incomplete frame.
if (rows.size !== initialTotal)
  throw new Error(
    'Listing changed during collection; use a fresh output directory to capture a consistent frame.',
  );
const populationIds = [...rows.keys()].sort((a, b) => a.localeCompare(b));
if (populationIds.length < sampleSize)
  throw new Error(
    `Fewer than ${sampleSize} published records; cannot complete the requested sample.`,
  );
const manifestPath = path.join(output, 'manifest.json');
let manifest;
try {
  manifest = JSON.parse(await readFile(manifestPath, 'utf8'));
} catch (error) {
  if (error.code !== 'ENOENT') throw error;
}
const frameSha256 = createHash('sha256')
  .update(populationIds.join('\n') + '\n')
  .digest('hex');
if (
  manifest &&
  (manifest.frameSha256 !== frameSha256 || manifest.documentId !== documentId)
)
  throw new Error('Saved sample belongs to a different frame or document.');
if (!manifest || manifest.sampleIds.length !== sampleSize) {
  const seed = manifest?.seed ?? randomBytes(32).toString('hex');
  const rank = (id) =>
    createHash('sha256').update(`${seed}\n${id}`).digest('hex');
  const sampleIds = [...populationIds]
    .sort((a, b) => rank(a).localeCompare(rank(b)) || a.localeCompare(b))
    .slice(0, sampleSize);
  manifest = {
    documentId,
    sampledAt: manifest?.sampledAt ?? new Date().toISOString(),
    expandedAt: manifest ? new Date().toISOString() : undefined,
    sampleSize,
    seed,
    method: `SHA-256 seeded ranking, first ${sampleSize} without replacement`,
    frameSize: populationIds.length,
    frameSha256,
    populationIds,
    sampleIds,
  };
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
}
const comments = [];
for (const id of manifest.sampleIds) {
  const result = await get(`comments/${id}`, { include: 'attachments' });
  if (result.data.attributes.commentOnDocumentId !== documentId)
    throw new Error(`Wrong parent document for ${id}`);
  const attr = result.data.attributes;
  comments.push({
    id,
    url: `https://www.regulations.gov/comment/${id}`,
    postedDate: attr.postedDate,
    text: attr.comment,
    attachments: result.included ?? [],
    stance: null,
    themes: [],
    summary: { zh: '', en: '' },
  });
  console.log(`Retrieved ${comments.length}/${sampleSize}`);
}
await writeFile(
  path.join(output, 'review.json'),
  JSON.stringify(comments, null, 2),
);
console.log(
  `Review all ${sampleSize} texts and attachments, label stances and themes, then publish the reviewed snapshot. Do not drop inaccessible or ambiguous selected records.`,
);

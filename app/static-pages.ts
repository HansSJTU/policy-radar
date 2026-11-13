import { LANGUAGE_COOKIE, cookieValue, resolveLanguage } from './language.ts';
import type { Language } from './language';
import { POLICY_IDS, isPolicyId } from './policy-ids.ts';
import { POLICY_PATHS, parsePathFilter, type PathFilter } from './policy-paths.ts';
import { isSchoolId, SCHOOL_IDS } from './school-pages.ts';

// Pages and link-preview images that change only when the site is deployed.
// `npm run build` renders every variant into dist/client/__static, and the
// Worker answers matching requests from those files instead of rendering
// them again, which keeps each request well inside the CPU limit.

export const STATIC_DIR = '__static';

const LANGUAGES: Language[] = ['zh', 'en'];
const PATH_FILTERS: PathFilter[] = ['all', ...POLICY_PATHS];

export type StaticFile = {
  language: Language;
  // Request rendered at build time.
  source: string;
  // File under dist/client.
  file: string;
};

function homeFile(language: Language, path: PathFilter) {
  return `${STATIC_DIR}/${language}/home-${path}.html`;
}
function updatesFile(language: Language) {
  return `${STATIC_DIR}/${language}/updates.html`;
}
function radarFile(language: Language) {
  return `${STATIC_DIR}/${language}/radar.html`;
}
function policyFile(language: Language, id: string, from: PathFilter) {
  return `${STATIC_DIR}/${language}/policies/${id}-${from}.html`;
}
function schoolsFile(language: Language) {
  // Not schools.html: a file beside the schools/ directory of the same name
  // could be answered with a directory redirect.
  return `${STATIC_DIR}/${language}/schools-index.html`;
}
function schoolFile(language: Language, id: string) {
  return `${STATIC_DIR}/${language}/schools/${id}.html`;
}
function homeImageFile(language: Language) {
  return `${STATIC_DIR}/${language}/share.png`;
}
function policyImageFile(language: Language, id: string) {
  return `${STATIC_DIR}/${language}/policies/${id}.png`;
}

function withPath(base: string, key: string, path: PathFilter) {
  return path === 'all' ? base : `${base}&${key}=${encodeURIComponent(path)}`;
}

export function staticFiles(): StaticFile[] {
  return LANGUAGES.flatMap((language) =>
    [
      ...PATH_FILTERS.map((path) => ({
        source: withPath(`/?lang=${language}`, 'path', path),
        file: homeFile(language, path),
      })),
      { source: `/updates?lang=${language}`, file: updatesFile(language) },
      { source: `/radar?lang=${language}`, file: radarFile(language) },
      { source: `/schools?lang=${language}`, file: schoolsFile(language) },
      ...SCHOOL_IDS.map((id) => ({
        source: `/schools/${id}?lang=${language}`,
        file: schoolFile(language, id),
      })),
      { source: `/share-image?lang=${language}`, file: homeImageFile(language) },
      ...POLICY_IDS.flatMap((id) => [
        ...PATH_FILTERS.map((from) => ({
          source: withPath(`/policies/${id}?lang=${language}`, 'from', from),
          file: policyFile(language, id, from),
        })),
        {
          source: `/policies/${id}/share-image?lang=${language}`,
          file: policyImageFile(language, id),
        },
      ]),
    ].map((entry) => ({ language, ...entry })),
  );
}

// Asset URLs drop `.html`: the assets service serves `x.html` at `/x` and
// redirects requests that include the extension.
function assetPath(file: string) {
  return `/${file.replace(/\.html$/, '')}`;
}

type RequestLike = { method: string; url: string; headers: Headers };

// The prebuilt file that answers this request, or null to render it.
export function staticAssetFor(request: RequestLike): string | null {
  if (request.method !== 'GET' && request.method !== 'HEAD') return null;
  const url = new URL(request.url);
  const query = url.searchParams;
  // Client-side navigations ask for a React Server Components payload.
  if (request.headers.has('rsc') || query.has('_rsc')) return null;
  const pathname = url.pathname;

  // Link-preview images read only `?lang=` and default to Chinese.
  const imageLanguage: Language = query.get('lang') === 'en' ? 'en' : 'zh';
  if (pathname === '/share-image') {
    return assetPath(homeImageFile(imageLanguage));
  }
  const imageMatch = /^\/policies\/([^/]+)\/share-image$/.exec(pathname);
  if (imageMatch) {
    return isPolicyId(imageMatch[1])
      ? assetPath(policyImageFile(imageLanguage, imageMatch[1]))
      : null;
  }

  const language = () =>
    resolveLanguage({
      explicit: query.get('lang'),
      saved: cookieValue(request.headers.get('cookie'), LANGUAGE_COOKIE),
      referrer: request.headers.get('referer'),
      acceptLanguage: request.headers.get('accept-language'),
    });

  if (pathname === '/') {
    return assetPath(homeFile(language(), parsePathFilter(query.get('path'))));
  }
  if (pathname === '/updates') {
    return assetPath(updatesFile(language()));
  }
  // The radar reads its profile (?stage=, ?goal=) in the browser.
  if (pathname === '/radar') {
    return assetPath(radarFile(language()));
  }
  if (pathname === '/schools') {
    return assetPath(schoolsFile(language()));
  }
  const schoolMatch = /^\/schools\/([^/]+)$/.exec(pathname);
  if (schoolMatch && isSchoolId(schoolMatch[1])) {
    return assetPath(schoolFile(language(), schoolMatch[1]));
  }
  const pageMatch = /^\/policies\/([^/]+)$/.exec(pathname);
  if (pageMatch && isPolicyId(pageMatch[1])) {
    return assetPath(
      policyFile(language(), pageMatch[1], parsePathFilter(query.get('from'))),
    );
  }
  return null;
}

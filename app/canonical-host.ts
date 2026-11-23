import { POLICY_SITE_URL } from './policy-links.ts';
import { isPolicyPath } from './policy-paths.ts';

const canonical = new URL(POLICY_SITE_URL);

// Hosts that also serve this Worker: the original workers.dev address, which
// mainland China cannot reach, and www. Page loads there move to the
// canonical domain so links, search results and shares converge on it.
const ALIAS_HOSTS = new Set([
  'policy-radar.uspolicy.workers.dev',
  `www.${canonical.host}`,
]);

// A policy page reads `from` only when it names a stage. `from=all` and
// anything else render the same page, and Google kept indexing those copies,
// so they move to the address without it.
function hasStrayFrom(url: URL): boolean {
  return (
    /^\/policies\/[^/]+$/.test(url.pathname) &&
    url.searchParams.has('from') &&
    !isPolicyPath(url.searchParams.get('from'))
  );
}

export function canonicalRedirect(url: string, method: string): string | null {
  const current = new URL(url);
  const aliasHost = ALIAS_HOSTS.has(current.host);
  const strayFrom = hasStrayFrom(current);
  if (!aliasHost && !strayFrom) return null;
  // A tab opened on the old address still posts analytics there; a redirect
  // would turn that POST into a GET.
  if (method !== 'GET' && method !== 'HEAD') return null;
  if (strayFrom) current.searchParams.delete('from');
  const origin = aliasHost ? canonical.origin : current.origin;
  return origin + current.pathname + current.search;
}

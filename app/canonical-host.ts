import { POLICY_SITE_URL } from './policy-links.ts';

const canonical = new URL(POLICY_SITE_URL);

// Hosts that also serve this Worker: the original workers.dev address, which
// mainland China cannot reach, and www. Page loads there move to the
// canonical domain so links, search results and shares converge on it.
const ALIAS_HOSTS = new Set([
  'policy-radar.uspolicy.workers.dev',
  `www.${canonical.host}`,
]);

export function canonicalRedirect(url: string, method: string): string | null {
  const current = new URL(url);
  if (!ALIAS_HOSTS.has(current.host)) return null;
  // A tab opened on the old address still posts analytics there; a redirect
  // would turn that POST into a GET.
  if (method !== 'GET' && method !== 'HEAD') return null;
  return canonical.origin + current.pathname + current.search;
}

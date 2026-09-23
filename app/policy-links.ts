import type { Language } from './language';
import { isPolicyId } from './policy-ids.ts';
import { isPolicyPath } from './policy-paths.ts';

export const POLICY_SITE_URL = 'https://policy-radar.uspolicy.workers.dev';

export function policyHref(
  id: string,
  language: Language,
  section?: string,
  from?: string,
): string {
  const origin =
    from === 'all' || isPolicyPath(from)
      ? `&from=${encodeURIComponent(from)}`
      : '';
  return `/policies/${encodeURIComponent(id)}?lang=${language}${origin}${section ? `#${encodeURIComponent(section)}` : ''}`;
}

export function legacyPolicyHref(
  hash: string,
  language: Language,
): string | null {
  let id: string;
  try {
    id = decodeURIComponent(hash.replace(/^#/, ''));
  } catch {
    return null;
  }
  return isPolicyId(id) ? policyHref(id, language) : null;
}

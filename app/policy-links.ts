import type { Language } from './language';
import { POLICY_IDS, type PolicyId } from './community-impact-model.ts';

export function policyHref(
  id: string,
  language: Language,
  section?: string,
  from?: string,
): string {
  const origin =
    from && ['all', 'F-1', 'CPT', 'OPT', 'H-1B'].includes(from)
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
  return POLICY_IDS.includes(id as PolicyId) ? policyHref(id, language) : null;
}

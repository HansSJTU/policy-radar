import type { Language } from './language';
import { getPolicies } from './policy-data.ts';
import { chinesePolicyEditorial } from './policy-editorial-zh.ts';
import { englishPolicyEditorial } from './policy-editorial-en.ts';

export const POLICY_AS_OF = '2026-09-07';
export const POLICY_SITE_URL = 'https://policy-radar.uspolicy.workers.dev';

export function getPolicyEditorial(id: string, language: Language) {
  return (
    language === 'en' ? englishPolicyEditorial : chinesePolicyEditorial
  ).find((policy) => policy.id === id);
}

export function getPolicyDetail(id: string, language: Language) {
  const record = getPolicies(language).find((policy) => policy.id === id);
  const editorial = getPolicyEditorial(id, language);
  return record && editorial ? { record, editorial } : undefined;
}

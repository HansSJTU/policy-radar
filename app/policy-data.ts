import { policyContents } from '../content/policies/index.ts';
import type {
  PolicyContent,
  PolicyCopy,
  PolicyPath,
} from '../content/policy-types.ts';
import type { Language } from './language';
import type { PolicyId } from './policy-ids.ts';
import { buildProcessTrack, type ProcessTrack } from './process-model.ts';

export type { PolicyPath } from '../content/policy-types.ts';

// A policy with its shared fields and the copy for one language merged
// into a single object. Rank follows the order in app/policy-ids.ts.
export type Policy = Omit<PolicyContent, 'zh' | 'en' | 'sources' | 'process'> &
  Omit<PolicyCopy, 'process'> & {
    rank: number;
    sources: Array<{ label: string; href: string }>;
  };

function localize(content: PolicyContent, index: number, language: Language): Policy {
  const { zh, en, sources, process: _process, ...shared } = content;
  const { process: _copyProcess, ...copy } = language === 'en' ? en : zh;
  return {
    ...shared,
    ...copy,
    rank: index + 1,
    sources: sources.map((source) => ({
      label: source[language],
      href: source.href,
    })),
  };
}

const localizedPolicies: Record<Language, Policy[]> = {
  zh: policyContents.map((content, index) => localize(content, index, 'zh')),
  en: policyContents.map((content, index) => localize(content, index, 'en')),
};

export function getPolicies(language: Language): Policy[] {
  return localizedPolicies[language];
}

export function getPolicy(id: string, language: Language): Policy | undefined {
  return localizedPolicies[language].find((policy) => policy.id === id);
}

export function getPolicyContent(id: PolicyId): PolicyContent {
  const content = policyContents.find((policy) => policy.id === id);
  if (!content) throw new Error(`Unknown policy: ${id}`);
  return content;
}

export function getProcessTrack(
  id: string,
  language: Language = 'zh',
): ProcessTrack {
  return buildProcessTrack(getPolicyContent(id as PolicyId), language);
}

export function getPoliciesByPath(language: Language, path: PolicyPath): Policy[] {
  return localizedPolicies[language].filter((policy) => policy.path === path);
}

export function formatRank(rank: number): string {
  return String(rank).padStart(2, '0');
}

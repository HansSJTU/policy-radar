import type { Language } from './language';
import { getPolicy } from './policy-data.ts';
import { policyHref, POLICY_SITE_URL } from './policy-links.ts';
import type { ShareItem } from './share-model.ts';

export function getPolicyShareItem(id: string, language: Language): ShareItem | undefined {
  const policy = getPolicy(id, language);
  if (!policy) return undefined;
  return {
    kind: 'policy',
    id,
    title: policy.title,
    summary: policy.summary,
    status: `${policy.status} · ${policy.effectLabel}`,
    scope: policy.audience,
    caveat: [
      policy.caveat,
      policy.reviewNote &&
        `${language === 'en' ? 'Review scope: ' : '核查范围：'}${policy.reviewNote}`,
    ]
      .filter(Boolean)
      .join(' '),
    checkedOn: policy.checkedOn,
    href: POLICY_SITE_URL + policyHref(id, language),
  };
}

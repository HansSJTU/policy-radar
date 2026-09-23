// Every tracked policy, ranked by potential impact on the stay path.
// The order here is the rank shown on the site: the first entry is #01.
export const POLICY_IDS = [
  'opt-fee',
  'h1b-fee',
  'duration-status',
  'h1b-weighted-selection',
  'cpt-guidance',
  'prevailing-wage',
  'h1b-reform',
  'grace-period',
  'ead-discretion',
  'h4-ead',
  'perm-modernization',
  'h1b-program-integrity',
] as const;

export type PolicyId = (typeof POLICY_IDS)[number];

const policyIdSet = new Set<string>(POLICY_IDS);

export function isPolicyId(value: unknown): value is PolicyId {
  return typeof value === 'string' && policyIdSet.has(value);
}

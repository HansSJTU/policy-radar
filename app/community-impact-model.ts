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
] as const;

export type PolicyId = (typeof POLICY_IDS)[number];

export type CommunityRatingSubmission = {
  policyId: PolicyId;
  rating: number;
  visitorId: string;
};

const policyIdSet = new Set<string>(POLICY_IDS);
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export function parseCommunityRating(
  input: unknown,
): CommunityRatingSubmission | null {
  if (!input || typeof input !== 'object') return null;

  const { policyId, rating, visitorId } = input as Record<string, unknown>;
  if (
    typeof policyId !== 'string' ||
    !policyIdSet.has(policyId) ||
    typeof rating !== 'number' ||
    !Number.isInteger(rating) ||
    rating < 1 ||
    rating > 10 ||
    typeof visitorId !== 'string' ||
    !UUID_PATTERN.test(visitorId)
  ) {
    return null;
  }

  return {
    policyId: policyId as PolicyId,
    rating,
    visitorId,
  };
}

export function shouldTriggerNiulai(policyId: string, rating: number) {
  return policyId === 'opt-fee' && rating === 10;
}

export function buildCommunityRatingChoices(selected: number | null) {
  return Array.from({ length: 10 }, (_, index) => {
    const value = index + 1;
    return { value, pressed: value === selected };
  });
}

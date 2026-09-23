import { isUuid } from '../lib/identifiers.ts';
import { isPolicyId, type PolicyId } from './policy-ids.ts';

export { POLICY_IDS, type PolicyId } from './policy-ids.ts';

export type CommunityRatingSubmission = {
  policyId: PolicyId;
  rating: number;
  visitorId: string;
};

export function parseCommunityRating(
  input: unknown,
): CommunityRatingSubmission | null {
  if (!input || typeof input !== 'object') return null;

  const { policyId, rating, visitorId } = input as Record<string, unknown>;
  if (
    !isPolicyId(policyId) ||
    typeof rating !== 'number' ||
    !Number.isInteger(rating) ||
    rating < 1 ||
    rating > 10 ||
    !isUuid(visitorId)
  ) {
    return null;
  }

  return {
    policyId,
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

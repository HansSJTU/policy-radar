import { isInvalidJsonRequest } from './api-request';
import { parseCommunityRating } from './community-impact-model';
import {
  getGenuinePolicyImpactAggregates,
  getPolicyImpactAggregates,
  savePolicyImpactRating,
} from '../db/policy-ratings';

const noStoreHeaders = { 'Cache-Control': 'no-store' };

// `?votes=genuine` leaves out the launch seeds; the personal radar uses it.
export async function getPolicyRatingsResponse(
  db: D1Database,
  request?: Request,
) {
  const genuine =
    request && new URL(request.url).searchParams.get('votes') === 'genuine';
  try {
    return Response.json(
      {
        ratings: genuine
          ? await getGenuinePolicyImpactAggregates(db)
          : await getPolicyImpactAggregates(db),
      },
      { headers: noStoreHeaders },
    );
  } catch {
    return Response.json(
      { error: 'Rating service unavailable' },
      { status: 503, headers: noStoreHeaders },
    );
  }
}

export async function postPolicyRatingResponse(
  request: Request,
  db: D1Database,
) {
  if (isInvalidJsonRequest(request)) {
    return Response.json(
      { error: 'Invalid request' },
      { status: 403, headers: noStoreHeaders },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: 'Invalid request body' },
      { status: 400, headers: noStoreHeaders },
    );
  }

  const submission = parseCommunityRating(body);
  if (!submission) {
    return Response.json(
      { error: 'Invalid rating' },
      { status: 400, headers: noStoreHeaders },
    );
  }

  try {
    const aggregate = await savePolicyImpactRating(
      db,
      submission.policyId,
      submission.visitorId,
      submission.rating,
    );
    return Response.json(
      {
        policyId: submission.policyId,
        average: aggregate.average,
        count: aggregate.count,
      },
      { headers: noStoreHeaders },
    );
  } catch {
    return Response.json(
      { error: 'Rating service unavailable' },
      { status: 503, headers: noStoreHeaders },
    );
  }
}

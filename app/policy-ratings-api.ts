import { parseCommunityRating } from './community-impact-model';
import {
  getPolicyImpactAggregates,
  savePolicyImpactRating,
} from '../db/policy-ratings';

const noStoreHeaders = { 'Cache-Control': 'no-store' };

export async function getPolicyRatingsResponse(db: D1Database) {
  try {
    return Response.json(
      { ratings: await getPolicyImpactAggregates(db) },
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
  const requestUrl = new URL(request.url);
  const origin = request.headers.get('origin');
  const fetchSite = request.headers.get('sec-fetch-site');
  const contentLength = Number(request.headers.get('content-length') ?? 0);

  if (
    (origin && origin !== requestUrl.origin) ||
    fetchSite === 'cross-site' ||
    contentLength > 2048
  ) {
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

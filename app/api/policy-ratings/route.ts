import { env } from 'cloudflare:workers';

import {
  getPolicyRatingsResponse,
  postPolicyRatingResponse,
} from '@/app/policy-ratings-api';

export function GET(request: Request) {
  return getPolicyRatingsResponse(env.DB, request);
}

export function POST(request: Request) {
  return postPolicyRatingResponse(request, env.DB);
}

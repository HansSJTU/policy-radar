import { env } from 'cloudflare:workers';

import {
  getPolicyRatingsResponse,
  postPolicyRatingResponse,
} from '@/app/policy-ratings-api';

export function GET() {
  return getPolicyRatingsResponse(env.DB);
}

export function POST(request: Request) {
  return postPolicyRatingResponse(request, env.DB);
}

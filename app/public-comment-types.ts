import type { ClassifiedComment } from './public-comment-model';

export type CommentSample = {
  policyId: string;
  documentId: string;
  checkedOn: string;
  commentPhase?: 'open' | 'closed';
  commentDeadline?: string;
  scopeNote?: { zh: string; en: string };
  publishedCount: number;
  sampleSize: number;
  status: 'pending' | 'reviewed';
  classificationBasis?: 'policy-direction-v1';
  classificationReviewedAt?: string;
  sampledAt?: string;
  seed?: string;
  frameSize?: number;
  manifestUrl?: string;
  themes: {
    id: string;
    zh: string;
    en: string;
    description?: { zh: string; en: string };
  }[];
  comments: (ClassifiedComment & {
    summary: { zh: string; en: string };
    postedDate?: string;
    textSha256?: string;
    sourceNote?: { zh: string; en: string };
  })[];
};

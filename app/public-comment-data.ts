import type { CommentSample } from './public-comment-types';
export type { CommentSample } from './public-comment-types';
import h1bFee from './comment-samples/h1b-fee.ts';
import gracePeriod from './comment-samples/grace-period.ts';
import prevailingWage from './comment-samples/prevailing-wage.ts';
import eadDiscretion from './comment-samples/ead-discretion.ts';

export const publicCommentSamples: Partial<Record<string, CommentSample>> = {
  'h1b-fee': h1bFee,
  'grace-period': gracePeriod,
  'prevailing-wage': prevailingWage,
  'ead-discretion': eadDiscretion,
};

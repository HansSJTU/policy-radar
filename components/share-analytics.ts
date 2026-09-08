'use client';

import type { ShareAction, ShareMethod } from '@/app/analytics-model';
import {
  getPolicyIdFromHash,
  type SessionAttribution,
} from './analytics-session';
import { getOrCreateAnonymousVisitorId } from './anonymous-visitor';
import {
  createBrowserAnalyticsSession,
  sendBrowserAnalyticsEvent,
} from './browser-analytics';

let session: SessionAttribution | undefined;

export function recordShareEvent(
  shareMethod: ShareMethod,
  shareAction: ShareAction,
  entry?: { policyId: string; schoolId: string },
) {
  try {
    session ??= createBrowserAnalyticsSession();

    sendBrowserAnalyticsEvent({
      eventType: 'share',
      visitorId: getOrCreateAnonymousVisitorId(),
      session,
      policyId:
        entry?.policyId ?? document.querySelector<HTMLElement>(
          '.policy-detail-page[data-policy-id]',
        )?.dataset.policyId ?? getPolicyIdFromHash(window.location.hash),
      shareMethod,
      shareAction,
      schoolId: entry?.schoolId,
    });
  } catch {
    // Sharing must still work when storage or analytics is unavailable.
  }
}

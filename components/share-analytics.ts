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
) {
  try {
    session ??= createBrowserAnalyticsSession();

    sendBrowserAnalyticsEvent({
      eventType: 'share',
      visitorId: getOrCreateAnonymousVisitorId(),
      session,
      policyId:
        document.querySelector<HTMLElement>(
          '.policy-detail-page[data-policy-id]',
        )?.dataset.policyId ?? getPolicyIdFromHash(window.location.hash),
      shareMethod,
      shareAction,
    });
  } catch {
    // Sharing must still work when storage or analytics is unavailable.
  }
}

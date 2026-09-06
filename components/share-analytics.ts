'use client';

import type { ShareAction, ShareMethod } from '@/app/analytics-model';
import {
  buildAnalyticsEventPayload,
  getOrCreateSessionAttribution,
  getPolicyIdFromHash,
  type SessionAttribution,
} from './analytics-session';
import { createAnonymousVisitorId, getOrCreateAnonymousVisitorId } from './anonymous-visitor';

let session: SessionAttribution | undefined;

export function recordShareEvent(shareMethod: ShareMethod, shareAction: ShareAction) {
  try {
    session ??= getOrCreateSessionAttribution({
      getItem: (key) => {
        try { return sessionStorage.getItem(key); } catch { return null; }
      },
      setItem: (key, value) => {
        try { sessionStorage.setItem(key, value); } catch { /* In-memory attribution remains available. */ }
      },
    }, {
      href: window.location.href,
      referrer: document.referrer,
      createSessionId: createAnonymousVisitorId,
    });

    const payload = buildAnalyticsEventPayload({
      eventType: 'share',
      visitorId: getOrCreateAnonymousVisitorId(),
      pathname: window.location.pathname,
      language: document.documentElement.lang,
      session,
      policyId: getPolicyIdFromHash(window.location.hash),
      shareMethod,
      shareAction,
    });
    void fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
      credentials: 'same-origin',
    }).catch(() => undefined);
  } catch {
    // Sharing must still work when storage or analytics is unavailable.
  }
}

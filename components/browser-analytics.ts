'use client';

import {
  buildAnalyticsEventPayload,
  getOrCreateSessionAttribution,
} from './analytics-session';
import { createAnonymousVisitorId } from './anonymous-visitor';

export function createBrowserAnalyticsSession() {
  return getOrCreateSessionAttribution(
    {
      // Resolve storage inside the callbacks so the session helper also handles
      // browsers that throw when accessing sessionStorage itself.
      getItem: (key) => sessionStorage.getItem(key),
      setItem: (key, value) => sessionStorage.setItem(key, value),
    },
    {
      href: window.location.href,
      referrer: document.referrer,
      createSessionId: createAnonymousVisitorId,
    },
  );
}

type BrowserAnalyticsEvent = Omit<
  Parameters<typeof buildAnalyticsEventPayload>[0],
  'pathname' | 'language'
>;

export function sendBrowserAnalyticsEvent(options: BrowserAnalyticsEvent) {
  const payload = buildAnalyticsEventPayload({
    ...options,
    pathname: window.location.pathname,
    language: document.documentElement.lang,
  });

  void fetch('/api/visit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
    keepalive: true,
    credentials: 'same-origin',
  }).catch(() => undefined);
}

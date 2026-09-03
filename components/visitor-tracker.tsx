'use client';

import { useEffect } from 'react';

import {
  buildAnalyticsEventPayload,
  getOrCreateSessionAttribution,
  getPolicyIdFromHash,
  type SessionAttribution,
} from './analytics-session';
import {
  createAnonymousVisitorId,
  getOrCreateAnonymousVisitorId,
} from './anonymous-visitor';

let visitRecorded = false;
let analyticsSession: SessionAttribution | undefined;

export function VisitorTracker() {
  useEffect(() => {
    const visitorId = getOrCreateAnonymousVisitorId();

    analyticsSession ??= getOrCreateSessionAttribution(
      {
        getItem(key) {
          try {
            return sessionStorage.getItem(key);
          } catch {
            return null;
          }
        },
        setItem(key, value) {
          try {
            sessionStorage.setItem(key, value);
          } catch {
            // The in-memory fallback remains stable for this page lifecycle.
          }
        },
      },
      {
        href: window.location.href,
        referrer: document.referrer,
        createSessionId: createAnonymousVisitorId,
      },
    );

    const sendEvent = (
      eventType: 'page_view' | 'outbound_click',
      policyId = '',
      outboundClick = '',
    ) => {
      const payload = buildAnalyticsEventPayload({
        eventType,
        visitorId,
        pathname: window.location.pathname,
        language: document.documentElement.lang,
        session: analyticsSession!,
        policyId,
        outboundClick,
      });

      void fetch('/api/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true,
        credentials: 'same-origin',
      }).catch(() => undefined);
    };

    if (!visitRecorded) {
      visitRecorded = true;
      sendEvent('page_view', getPolicyIdFromHash(window.location.hash));
    }

    const recordOutboundClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!anchor) return;

      let destination: URL;
      try {
        destination = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (
        (destination.protocol !== 'https:' && destination.protocol !== 'http:') ||
        destination.origin === window.location.origin
      ) {
        return;
      }

      const policyId =
        anchor.closest<HTMLElement>('[data-policy-id]')?.dataset.policyId ?? '';
      sendEvent('outbound_click', policyId, destination.href);
    };

    document.addEventListener('click', recordOutboundClick);
    return () => document.removeEventListener('click', recordOutboundClick);
  }, []);

  return null;
}

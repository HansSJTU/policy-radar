'use client';

import { useEffect } from 'react';

import {
  buildAnalyticsEventPayload,
  getOrCreateSessionAttribution,
  getPolicyIdFromHash,
  type SessionAttribution,
} from './analytics-session';

const VISITOR_KEY = 'f1-policy-radar-anonymous-visitor';
let visitRecorded = false;
let analyticsSession: SessionAttribution | undefined;

function createVisitorId() {
  if (typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID();
  }

  const bytes = crypto.getRandomValues(new Uint8Array(16));
  bytes[6] = (bytes[6] & 0x0f) | 0x40;
  bytes[8] = (bytes[8] & 0x3f) | 0x80;
  const hex = Array.from(bytes, (byte) =>
    byte.toString(16).padStart(2, '0'),
  ).join('');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
}

export function VisitorTracker() {
  useEffect(() => {
    let visitorId = createVisitorId();
    try {
      visitorId = localStorage.getItem(VISITOR_KEY) ?? visitorId;
      localStorage.setItem(VISITOR_KEY, visitorId);
    } catch {
      // Some private-browsing modes disable storage. The visit can still be counted.
    }

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
        createSessionId: createVisitorId,
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

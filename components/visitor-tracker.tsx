'use client';

import { useEffect } from 'react';

import {
  getPolicyIdFromHash,
  type SessionAttribution,
} from './analytics-session';
import { getOrCreateAnonymousVisitorId } from './anonymous-visitor';
import {
  createBrowserAnalyticsSession,
  sendBrowserAnalyticsEvent,
} from './browser-analytics';

let visitRecorded = false;
let analyticsSession: SessionAttribution | undefined;

export function VisitorTracker({ policyId }: { policyId?: string } = {}) {
  useEffect(() => {
    const visitorId = getOrCreateAnonymousVisitorId();

    analyticsSession ??= createBrowserAnalyticsSession();

    const sendEvent = (
      eventType: 'page_view' | 'outbound_click',
      policyId = '',
      outboundClick = '',
    ) => {
      sendBrowserAnalyticsEvent({
        eventType,
        visitorId,
        session: analyticsSession!,
        policyId,
        outboundClick,
      });
    };

    if (!visitRecorded) {
      visitRecorded = true;
      sendEvent(
        'page_view',
        policyId ?? getPolicyIdFromHash(window.location.hash),
      );
    }

    const recordOutboundClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>('a[href]');
      if (!anchor) return;
      if (anchor.hasAttribute('data-share-method')) return;

      let destination: URL;
      try {
        destination = new URL(anchor.href, window.location.href);
      } catch {
        return;
      }

      if (
        (destination.protocol !== 'https:' &&
          destination.protocol !== 'http:') ||
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
  }, [policyId]);

  return null;
}

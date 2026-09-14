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
      eventType: 'page_view' | 'outbound_click' | 'content_click',
      policyId = '',
      outboundClick = '',
      component = 'page',
    ) => {
      sendBrowserAnalyticsEvent({
        eventType,
        visitorId,
        session: analyticsSession!,
        policyId,
        outboundClick,
        component,
      });
    };

    if (!visitRecorded) {
      visitRecorded = true;
      sendEvent(
        'page_view',
        policyId ?? getPolicyIdFromHash(window.location.hash),
      );
    }

    const recordLinkClick = (event: MouseEvent) => {
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
          destination.protocol !== 'http:')
      ) {
        return;
      }

      const policyId = anchor.closest<HTMLElement>('[data-policy-id]')?.dataset.policyId ?? '';
      const component = anchor.closest('#ranking [data-policy-id]') ? 'ranking_card'
        : anchor.closest('.policy-detail-page') ? 'policy_detail' : 'navigation';
      if (destination.origin === window.location.origin) {
        if (component === 'ranking_card') sendEvent('content_click', policyId, '', component);
        return;
      }
      sendEvent('outbound_click', policyId, destination.href, component);
    };

    document.addEventListener('click', recordLinkClick);
    return () => document.removeEventListener('click', recordLinkClick);
  }, [policyId]);

  return null;
}

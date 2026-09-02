'use client';

import { useEffect } from 'react';

const VISITOR_KEY = 'f1-policy-radar-anonymous-visitor';
let visitRecorded = false;

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
    if (visitRecorded) return;
    visitRecorded = true;

    let visitorId = createVisitorId();
    try {
      visitorId = localStorage.getItem(VISITOR_KEY) ?? visitorId;
      localStorage.setItem(VISITOR_KEY, visitorId);
    } catch {
      // Some private-browsing modes disable storage. The visit can still be counted.
    }

    void fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        visitorId,
        pathname: window.location.pathname,
        language: document.documentElement.lang,
      }),
      keepalive: true,
      credentials: 'same-origin',
    }).catch(() => undefined);
  }, []);

  return null;
}

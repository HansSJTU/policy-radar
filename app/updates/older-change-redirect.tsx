'use client';

import { useEffect } from 'react';

// Links to a change used to point at /updates#change-<id>. A change older
// than 30 days is no longer on this page, so the reader is sent on to the
// page of its month. The server never sees the #anchor; this has to run here.
export function OlderChangeRedirect() {
  useEffect(() => {
    const anchor = window.location.hash.slice(1);
    if (!anchor.startsWith('change-') || document.getElementById(anchor)) return;
    const id = anchor.slice('change-'.length);
    window.location.replace(
      `/updates/change/${encodeURIComponent(id)}${window.location.search}`,
    );
  }, []);
  return null;
}

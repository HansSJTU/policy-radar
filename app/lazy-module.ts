// Every deploy replaces the hashed chunk files, so a tab opened before a
// deploy cannot fetch a lazy chunk afterwards. Loading such chunks once the
// page is idle keeps features that need them working in long-open tabs.

export function preloadable<T>(load: () => Promise<T>): () => Promise<T> {
  let pending: Promise<T> | undefined;
  return () => {
    pending ??= load().catch((error: unknown) => {
      pending = undefined;
      throw error;
    });
    return pending;
  };
}

export function whenIdle(task: () => void): () => void {
  // Safari has no requestIdleCallback.
  if (typeof window.requestIdleCallback === 'function') {
    const handle = window.requestIdleCallback(task, { timeout: 4000 });
    return () => window.cancelIdleCallback(handle);
  }
  const handle = window.setTimeout(task, 1500);
  return () => window.clearTimeout(handle);
}

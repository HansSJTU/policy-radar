export const ANONYMOUS_VISITOR_KEY = 'f1-policy-radar-anonymous-visitor';

type StorageLike = {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
};

export function createAnonymousVisitorId() {
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

export function getOrCreateAnonymousVisitorId(
  storage: StorageLike = window.localStorage,
  createId: () => string = createAnonymousVisitorId,
) {
  const generatedId = createId();
  try {
    const visitorId = storage.getItem(ANONYMOUS_VISITOR_KEY) ?? generatedId;
    storage.setItem(ANONYMOUS_VISITOR_KEY, visitorId);
    return visitorId;
  } catch {
    return generatedId;
  }
}

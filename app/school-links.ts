import type { Language } from './language';

// School page URLs. Kept apart from school-pages.ts so client components can
// link to a school without bundling every school record.

export function schoolPath(id: string): string {
  return `/schools/${id}`;
}

export function schoolHref(id: string, language: Language): string {
  return `${schoolPath(id)}?lang=${language}`;
}

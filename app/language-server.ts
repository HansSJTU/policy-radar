import { cookies, headers } from 'next/headers';

import { LANGUAGE_COOKIE, resolveLanguage, type Language } from './language';

export async function resolveRequestLanguage(
  explicitLanguage?: string,
): Promise<Language> {
  const [cookieStore, requestHeaders] = await Promise.all([
    cookies(),
    headers(),
  ]);
  return resolveLanguage({
    explicit: explicitLanguage,
    saved: cookieStore.get(LANGUAGE_COOKIE)?.value,
    referrer: requestHeaders.get('referer'),
    acceptLanguage: requestHeaders.get('accept-language'),
  });
}

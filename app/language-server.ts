import { cookies, headers } from 'next/headers';

import {
  LANGUAGE_COOKIE,
  languageFromAcceptLanguage,
  parseLanguage,
  type Language,
} from './language';

export async function resolveRequestLanguage(
  explicitLanguage?: string,
): Promise<Language> {
  const explicit = parseLanguage(explicitLanguage);
  if (explicit) {
    return explicit;
  }

  const cookieStore = await cookies();
  const saved = parseLanguage(cookieStore.get(LANGUAGE_COOKIE)?.value);
  if (saved) {
    return saved;
  }

  const requestHeaders = await headers();
  return languageFromAcceptLanguage(requestHeaders.get('accept-language'));
}

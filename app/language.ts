export type Language = 'zh' | 'en';

export const LANGUAGE_COOKIE = 'policy-radar-language';

export function parseLanguage(
  value: string | null | undefined,
): Language | undefined {
  const normalized = value?.trim().toLowerCase();

  if (normalized === 'zh' || normalized === 'en') {
    return normalized;
  }

  return undefined;
}

export function languageFromAcceptLanguage(
  acceptLanguage: string | null | undefined,
): Language {
  const preferences = (acceptLanguage ?? '')
    .split(',')
    .map((entry, index) => {
      const [rawTag, ...parameters] = entry.trim().split(';');
      const tag = rawTag.toLowerCase();
      const qualityParameter = parameters.find((parameter) =>
        parameter.trim().startsWith('q='),
      );
      const quality = qualityParameter
        ? Number.parseFloat(qualityParameter.trim().slice(2))
        : 1;
      const language: Language | undefined =
        tag === 'zh' || tag.startsWith('zh-')
          ? 'zh'
          : tag === 'en' || tag.startsWith('en-')
            ? 'en'
            : undefined;

      return { index, language, quality };
    })
    .filter(
      (
        preference,
      ): preference is { index: number; language: Language; quality: number } =>
        preference.language !== undefined &&
        Number.isFinite(preference.quality) &&
        preference.quality > 0,
    )
    .sort(
      (left, right) => right.quality - left.quality || left.index - right.index,
    );

  return preferences[0]?.language ?? 'en';
}

export function isEnglish(language: Language): boolean {
  return language === 'en';
}

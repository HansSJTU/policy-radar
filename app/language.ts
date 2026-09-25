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

// Chinese-language communities whose readers often browse with English
// browser settings. A visit arriving from one of them opens in Chinese.
const CHINESE_COMMUNITY_DOMAINS = [
  '1p3a.com',
  '1point3acres.com',
  'uscardforum.com',
  'xiaohongshu.com',
  'xhslink.com',
  'weixin.qq.com',
  'zhihu.com',
  'douban.com',
  'v2ex.com',
  'weibo.com',
  'weibo.cn',
  'huaren.us',
];

export function languageFromReferrer(
  referrer: string | null | undefined,
): Language | undefined {
  let host: string;
  try {
    host = new URL(referrer ?? '').hostname.toLowerCase();
  } catch {
    return undefined;
  }

  return CHINESE_COMMUNITY_DOMAINS.some(
    (domain) => host === domain || host.endsWith(`.${domain}`),
  )
    ? 'zh'
    : undefined;
}

export function isEnglish(language: Language): boolean {
  return language === 'en';
}

export function brandHomeLabel(language: Language): string {
  return language === 'en' ? 'Policy Radar home' : '政策雷达首页';
}

export type Language = 'zh' | 'en';

export function isEnglish(language: Language): boolean {
  return language === 'en';
}

import type { Language } from './language';

const GITHUB_PROJECT_URL = 'https://github.com/HansSJTU/policy-radar';

export function getGitHubProjectLink(language: Language) {
  const english = language === 'en';

  return {
    href: GITHUB_PROJECT_URL,
    target: '_blank' as const,
    rel: 'noreferrer',
    label: english
      ? 'View the open-source project on GitHub'
      : '在 GitHub 查看开源项目',
    text: 'GitHub',
    footerText: english
      ? 'Open source on GitHub · MIT'
      : 'GitHub 开源项目 · MIT',
  };
}

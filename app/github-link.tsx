import { GitFork } from 'lucide-react';

import { getGitHubProjectLink } from './github-project';
import type { Language } from './language';

type GitHubProjectLinkProps = {
  language: Language;
  placement?: 'header' | 'footer';
};

export function GitHubProjectLink({
  language,
  placement = 'header',
}: GitHubProjectLinkProps) {
  const link = getGitHubProjectLink(language);

  return (
    <a
      className={`github-project-link github-project-link-${placement}`}
      href={link.href}
      target={link.target}
      rel={link.rel}
      aria-label={link.label}
    >
      <GitFork aria-hidden="true" />
      <span>{placement === 'footer' ? link.footerText : link.text}</span>
    </a>
  );
}

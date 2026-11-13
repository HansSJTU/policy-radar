import type { ReactNode } from 'react';
import { Radar } from 'lucide-react';

import { GitHubProjectLink } from './github-link';
import { brandHomeLabel, type Language } from './language';
import { MobileSiteMenu } from './mobile-site-menu';
import { PageLanguageSwitch } from './page-language-switch';
import { siteCopy } from './site-copy';

export type SitePage = 'home' | 'radar' | 'updates' | 'stats' | 'policy' | 'schools';

type SiteHeaderProps = {
  language: Language;
  current: SitePage;
  /** Path the language form submits to when JavaScript is unavailable. */
  languageAction: string;
  /** Query values to keep when the language changes. */
  languageHidden?: Record<string, string>;
  /** The page's share control, if it has one. */
  share?: ReactNode;
  /** Date the content was last checked. Shown once per page. */
  checkedOn?: string;
};

export function SiteHeader({
  language,
  current,
  languageAction,
  languageHidden,
  share,
  checkedOn,
}: SiteHeaderProps) {
  const ui = siteCopy[language];
  const home = `/?lang=${language}`;
  // On the home page these are same-document anchors, so they scroll instead of reloading.
  const homeAnchor = (id: string) => (current === 'home' ? `#${id}` : `${home}#${id}`);
  const links: { id: string; href: string; label: string }[] = [
    { id: 'radar', href: `/radar?lang=${language}`, label: ui.radar },
    { id: 'policies', href: homeAnchor('ranking'), label: ui.policies },
    { id: 'schools', href: homeAnchor('cpt-schools'), label: ui.cptSchools },
    { id: 'updates', href: `/updates?lang=${language}`, label: ui.updates },
    { id: 'stats', href: `/stats?lang=${language}`, label: ui.stats },
  ];

  return (
    <header className="topbar">
      <a
        className="brand"
        href={current === 'home' ? '#top' : home}
        aria-label={brandHomeLabel(language)}
      >
        <span className="brand-mark"><Radar aria-hidden="true" /></span>
        <span>{ui.brand}</span>
      </a>
      <nav className="nav-links" aria-label={ui.nav}>
        {links.map((link) => (
          <a
            key={link.id}
            href={link.href}
            aria-current={link.id === current ? 'page' : undefined}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <div className="top-actions">
        <GitHubProjectLink language={language} />
        {share}
        <PageLanguageSwitch
          action={languageAction}
          language={language}
          label={ui.switchLanguage}
          hidden={languageHidden}
        />
        <MobileSiteMenu
          current={current === 'policy' ? 'home' : current}
          language={language}
        />
        {checkedOn && (
          <time className="asof" dateTime={checkedOn}>{checkedOn} · ET</time>
        )}
      </div>
    </header>
  );
}

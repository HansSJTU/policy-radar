import type { ReactNode } from 'react';
import { Radar } from 'lucide-react';

import { GitHubProjectLink } from './github-link';
import type { Language } from './language';
import { siteCopy } from './site-copy';

/** Page footer. `children` are the page's own notes and disclosures. */
export function SiteFooter({
  language,
  children,
}: {
  language: Language;
  children?: ReactNode;
}) {
  const ui = siteCopy[language];
  return (
    <footer className="site-footer">
      <div className="site-footer-brand">
        <span className="brand-mark"><Radar aria-hidden="true" /></span>
        <strong>{ui.brand}</strong>
      </div>
      {children ? <div className="footer-notes">{children}</div> : null}
      <div className="footer-actions">
        <GitHubProjectLink language={language} placement="footer" />
        <a href="#top">{ui.top}</a>
      </div>
    </footer>
  );
}

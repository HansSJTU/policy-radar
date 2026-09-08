import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Images,
  Search,
  ShieldAlert,
  X,
} from 'lucide-react';
import {
  communitySchools,
  verifiedSchools,
  type CommunitySchool,
  type VerifiedSchool,
} from './cpt-schools';
import { englishCommunitySchools, englishVerifiedSchools } from './english-content';
import { GlossaryText } from './glossary-text';
import { homeCopy } from './home-copy';
import type { Language } from './language';
import { getSchoolShareItem } from './item-share-model';
import { ShareButton } from './share-button';

type CptSchoolTrackerProps = {
  language: Language;
  selectedEvidence: VerifiedSchool | CommunitySchool | null;
  setSelectedEvidence: (school: VerifiedSchool | CommunitySchool | null) => void;
};

export function CptSchoolTracker({
  language,
  selectedEvidence,
  setSelectedEvidence,
}: CptSchoolTrackerProps) {
  const [schoolQuery, setSchoolQuery] = useState('');
  const [schoolTab, setSchoolTab] = useState<'verified' | 'community'>('verified');
  const [targetSchool, setTargetSchool] = useState('');
  const ui = homeCopy[language];

  useEffect(() => {
    const revealSharedSchool = () => {
      const id = window.location.hash.replace(/^#school-/, '');
      const verified = verifiedSchools.some((school) => school.id === id);
      if (!verified && !communitySchools.some((school) => school.id === id)) return;
      setSchoolQuery('');
      setSchoolTab(verified ? 'verified' : 'community');
      setTargetSchool(id);
    };
    revealSharedSchool();
    window.addEventListener('hashchange', revealSharedSchool);
    return () => window.removeEventListener('hashchange', revealSharedSchool);
  }, []);

  useEffect(() => {
    if (!targetSchool) return;
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(`school-${targetSchool}`);
      target?.scrollIntoView({ block: 'center' });
      target?.focus({ preventScroll: true });
      setTargetSchool('');
    });
    return () => cancelAnimationFrame(frame);
  }, [targetSchool]);

  useEffect(() => {
    if (!selectedEvidence) return;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedEvidence(null);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [selectedEvidence, setSelectedEvidence]);

  const localizedVerifiedSchools = language === 'en'
    ? verifiedSchools.map((school) => ({ ...school, ...englishVerifiedSchools[school.school] }))
    : verifiedSchools;
  const localizedCommunitySchools = language === 'en'
    ? communitySchools.map((school) => ({ ...school, state: englishCommunitySchools[school.school] }))
    : communitySchools;
  const normalizedQuery = schoolQuery.trim().toLowerCase();
  const visibleVerified = localizedVerifiedSchools.filter((school) =>
    `${school.school} ${school.state} ${school.detail}`.toLowerCase().includes(normalizedQuery),
  );
  const visibleCommunity = localizedCommunitySchools.filter((school) =>
    `${school.school} ${school.state}`.toLowerCase().includes(normalizedQuery),
  );

  return (
    <>
      <section className="school-section" id="cpt-schools" aria-labelledby="schools-title">
        <div className="school-head">
          <div><span className="section-kicker">CPT SCHOOL TRACKER</span><h2 id="schools-title">{ui.schoolTitle}</h2><p>{ui.schoolIntro}</p></div>
          <label className="school-search"><Search aria-hidden="true" /><input value={schoolQuery} onChange={(event) => setSchoolQuery(event.target.value)} placeholder={ui.search} aria-label={ui.search} /></label>
        </div>

        <div className="school-tabs">
          <div className="school-tab-list" role="tablist" aria-label={ui.evidenceAria}>
            <button type="button" role="tab" aria-selected={schoolTab === 'verified'} className={schoolTab === 'verified' ? 'active' : ''} onClick={() => setSchoolTab('verified')}><CheckCircle2 aria-hidden="true" /><span>{ui.verified}</span><b>{visibleVerified.length}</b></button>
            <button type="button" role="tab" aria-selected={schoolTab === 'community'} className={schoolTab === 'community' ? 'active' : ''} onClick={() => setSchoolTab('community')}><FileSearch aria-hidden="true" /><span>{ui.community}</span><b>{visibleCommunity.length}</b></button>
          </div>
          {schoolTab === 'verified' ? <div className="school-tab-content" role="tabpanel">
            <div className="school-cards">
              {visibleVerified.map((school) => (
                <article className="school-share-card" id={`school-${school.id}`} key={school.id} tabIndex={-1}>
                <button
                  type="button"
                  className="school-card evidence-card"
                  aria-haspopup="dialog"
                  onClick={() => setSelectedEvidence(school)}
                >
                  <div><i className={`school-state ${school.tone}`} /><span>{school.tone === 'pause' ? ui.paused : school.tone === 'tighten' ? ui.tightened : ui.unchanged}</span></div>
                  <h3>{school.school}</h3>
                  <strong><GlossaryText text={school.state} /></strong>
                  <p><GlossaryText text={school.detail} /></p>
                  <small>{school.screenshots.length > 0 ? <Images aria-hidden="true" /> : <ExternalLink aria-hidden="true" />}<span>{school.screenshots.length > 0 ? ui.viewEvidence : ui.officialPage}</span><ArrowUpRight className="school-evidence-arrow" aria-hidden="true" /></small>
                </button>
                <ShareButton language={language} item={getSchoolShareItem(school, language)} compact />
                </article>
              ))}
              {visibleVerified.length === 0 && <p className="empty-result">{ui.noSchool}</p>}
            </div>
          </div> : <div className="school-tab-content" role="tabpanel">
            <div className="evidence-banner"><ShieldAlert aria-hidden="true" /><p>{ui.evidencePrefix}</p></div>
            <div className="school-cards community-cards">
              {visibleCommunity.map((school) => (
                <article className="school-share-card" id={`school-${school.id}`} key={school.id} tabIndex={-1}>
                <button
                  type="button"
                  className="school-card evidence-card"
                  aria-haspopup="dialog"
                  onClick={() => setSelectedEvidence(school)}
                >
                  <div><i className="school-state lead" /><span>{ui.verifyPending}</span></div>
                  <h3>{school.school}</h3>
                  <p><GlossaryText text={school.state} /></p>
                  <small><Images aria-hidden="true" /><span>{school.screenshots.length > 0 ? ui.viewEvidence : ui.viewReport}</span><ArrowUpRight className="school-evidence-arrow" aria-hidden="true" /></small>
                </button>
                <ShareButton language={language} item={getSchoolShareItem(school, language)} compact />
                </article>
              ))}
              {visibleCommunity.length === 0 && <p className="empty-result">{ui.noSchool}</p>}
            </div>
          </div>}
        </div>
      </section>

      {selectedEvidence && (
        <div
          className="evidence-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedEvidence(null);
          }}
        >
          <dialog
            open
            className="evidence-modal"
            aria-modal="true"
            aria-labelledby="evidence-modal-title"
          >
            <header>
              <div>
                <span>{ui.evidenceTitle}</span>
                <h2 id="evidence-modal-title">{selectedEvidence.school}</h2>
                <p><GlossaryText text={selectedEvidence.state} /></p>
              </div>
              <button type="button" autoFocus onClick={() => setSelectedEvidence(null)} aria-label={ui.closeEvidence}>
                <X aria-hidden="true" />
              </button>
            </header>
            <div className="evidence-modal-body">
              {'href' in selectedEvidence && (
                <a className="evidence-official-link" href={selectedEvidence.href} target="_blank" rel="noreferrer">
                  {ui.officialPage}<ExternalLink aria-hidden="true" />
                </a>
              )}
              {selectedEvidence.screenshots.length > 0
                ? selectedEvidence.screenshots.map((screenshot, index) => (
                    <figure key={screenshot.src}>
                      <Image
                        src={screenshot.src}
                        width={screenshot.width}
                        height={screenshot.height}
                        alt={`${selectedEvidence.school} ${ui.evidenceTitle} ${index + 1}`}
                        unoptimized
                      />
                      {selectedEvidence.screenshots.length > 1 && <figcaption>{index + 1} / {selectedEvidence.screenshots.length}</figcaption>}
                    </figure>
                  ))
                : <p className="evidence-empty"><FileSearch aria-hidden="true" />{ui.noScreenshot}</p>}
            </div>
          </dialog>
        </div>
      )}
    </>
  );
}

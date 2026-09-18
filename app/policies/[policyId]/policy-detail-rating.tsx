'use client';

import { useCallback, useEffect, useRef, useSyncExternalStore } from 'react';
import { createPortal } from 'react-dom';
import {
  CommunityImpactRating,
  ratingCopy,
  usePolicyRatingContext,
} from '../../community-impact-rating';
import type { Language } from '../../language';
import type { PolicyId } from '../../community-impact-model';

type RatingProps = {
  policyId: PolicyId;
  language: Language;
  forumLinks?: { label: string; href: string }[];
};

const emptySubscribe = () => () => {};

/**
 * Determine whether the sidebar is currently hidden (mobile layout).
 * This reads the actual computed style, so it stays in sync with the
 * CSS `@media (max-width: 800px) { .pd-aside { display: none } }` rule
 * without duplicating the breakpoint value in JS.
 */
function isSidebarHidden(): boolean {
  const aside = document.querySelector('.pd-aside');
  if (!aside) return true;
  return getComputedStyle(aside).display === 'none';
}

export function PolicyDetailStatusScore({
  policyId,
  language,
  forumLinks = [],
}: RatingProps) {
  const ratings = usePolicyRatingContext();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const highlightTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const text = ratingCopy[language];

  const aggregate = ratings?.aggregates[policyId];
  const selected = ratings?.selections[policyId] ?? null;
  const pending = ratings?.pending[policyId] ?? false;
  const error = ratings ? ratings.errors[policyId] || ratings.loadFailed : false;

  // Cleanup highlight timer and release the scroll lock on unmount
  useEffect(() => {
    return () => {
      if (highlightTimer.current) clearTimeout(highlightTimer.current);
      document.body.style.overflow = '';
    };
  }, []);

  // Release the scroll lock and hand focus back to whatever opened the sheet.
  // Idempotent, so it is safe to call from more than one close path.
  const releaseModal = useCallback(() => {
    document.body.style.overflow = '';
    if (triggerRef.current) {
      triggerRef.current.focus({ preventScroll: true });
      triggerRef.current = null;
    }
  }, []);

  // Covers the closes we do not initiate ourselves, notably Escape. Programmatic
  // closes also call releaseModal directly, and releaseModal is idempotent, so
  // the scroll lock is released even if one of these events is not delivered.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.addEventListener('close', releaseModal);
    // `cancel` is the dialog's own Escape signal, fired before `close`.
    dialog.addEventListener('cancel', releaseModal);
    return () => {
      dialog.removeEventListener('close', releaseModal);
      dialog.removeEventListener('cancel', releaseModal);
    };
  }, [releaseModal]);

  const openModal = useCallback(() => {
    triggerRef.current = document.activeElement as HTMLElement;
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      const scrollY = window.scrollY;
      dialog.showModal();
      window.scrollTo({ top: scrollY, behavior: 'instant' });
      // Lock body scroll while modal is open
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const closeModal = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
    releaseModal();
  }, [releaseModal]);

  // Backdrop dismiss. The dialog fills the viewport (see .pd-rating-modal-dialog),
  // so a click landing on the dialog itself rather than the inner sheet is a
  // backdrop click. Bound natively so no click handler sits on the <dialog>.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleBackdropClick = (event: MouseEvent) => {
      if (event.target === dialog) closeModal();
    };
    dialog.addEventListener('click', handleBackdropClick);
    return () => dialog.removeEventListener('click', handleBackdropClick);
  }, [closeModal]);

  const scrollToSidebarOrOpenModal = useCallback(() => {
    if (isSidebarHidden()) {
      openModal();
      return;
    }
    const target = document.getElementById('pd-sidebar-rating');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      target.classList.add('highlight');
      if (highlightTimer.current) clearTimeout(highlightTimer.current);
      highlightTimer.current = setTimeout(
        () => target.classList.remove('highlight'),
        1200,
      );
    } else {
      openModal();
    }
  }, [openModal]);

  const handleActionClick = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      scrollToSidebarOrOpenModal();
    },
    [scrollToSidebarOrOpenModal],
  );

  const handleSelect = useCallback(
    (rating: number) => {
      void ratings?.submitRating(policyId, rating);
    },
    [policyId, ratings],
  );

  const averageDisplay = aggregate ? aggregate.average.toFixed(1) : '—';
  const countDisplay = aggregate ? text.ratingCount(aggregate.count) : '';
  const actionLabel = selected !== null ? text.ratedAction(selected) : text.rateAction;

  const modal = (
    <dialog
      ref={dialogRef}
      className="pd-rating-modal-dialog"
      aria-label={text.title}
    >
      <div className="pd-rating-modal-sheet">
        <div className="pd-rating-modal-head">
          <div className="pd-rating-modal-title">
            <strong>{text.title}</strong>
            <span>{aggregate ? text.ratingCount(aggregate.count) : text.noRatings}</span>
          </div>
          <button
            type="button"
            className="pd-rating-modal-close"
            onClick={closeModal}
            aria-label={text.modalClose}
          >
            ✕
          </button>
        </div>
        <CommunityImpactRating
          language={language}
          policyId={policyId}
          aggregate={aggregate}
          selected={selected}
          pending={pending}
          error={error}
          onSelect={handleSelect}
          forumLinks={forumLinks}
        />
      </div>
    </dialog>
  );

  return (
    <div className="pd-status-community-score">
      <dt>
        <span>{text.scoreTitle}</span>
        <button
          type="button"
          className="pd-rate-action-btn"
          data-rated={selected !== null}
          onClick={handleActionClick}
          aria-label={actionLabel}
        >
          {actionLabel}
        </button>
      </dt>
      <dd className="pd-status-score-value">
        <button
          type="button"
          className="pd-status-score-trigger"
          onClick={handleActionClick}
          aria-label={`${text.scoreTitle}: ${averageDisplay} / 10`}
        >
          <strong>{averageDisplay}</strong>
          <small>
            / 10 {countDisplay ? `(${countDisplay})` : ''}
          </small>
        </button>
      </dd>

      {mounted && typeof document !== 'undefined'
        ? createPortal(modal, document.body)
        : null}
    </div>
  );
}

export function PolicyDetailSidebarRating({
  policyId,
  language,
  forumLinks = [],
}: RatingProps) {
  const ratings = usePolicyRatingContext();

  const aggregate = ratings?.aggregates[policyId];
  const selected = ratings?.selections[policyId] ?? null;
  const pending = ratings?.pending[policyId] ?? false;
  const error = ratings ? ratings.errors[policyId] || ratings.loadFailed : false;

  const handleSelect = useCallback(
    (rating: number) => {
      void ratings?.submitRating(policyId, rating);
    },
    [policyId, ratings],
  );

  return (
    <div className="pd-sidebar-rating" id="pd-sidebar-rating">
      <CommunityImpactRating
        language={language}
        policyId={policyId}
        aggregate={aggregate}
        selected={selected}
        pending={pending}
        error={error}
        onSelect={handleSelect}
        forumLinks={forumLinks}
      />
    </div>
  );
}

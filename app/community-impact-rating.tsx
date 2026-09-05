'use client';

/* oxlint-disable next/no-img-element -- This small badge uses the supplied transparent Niulai artwork. */

import { useCallback, useEffect, useState } from 'react';

import {
  buildCommunityRatingChoices,
  shouldShowCommunityHornMarker,
  type PolicyId,
} from './community-impact-model';
import { getOrCreateAnonymousVisitorId } from '../components/anonymous-visitor';
import type { Language } from './language';

export type CommunityImpactAggregate = {
  average: number;
  count: number;
};

type AggregateMap = Record<string, CommunityImpactAggregate>;
type NumberMap = Record<string, number>;
type BooleanMap = Record<string, boolean>;

const RATING_SELECTIONS_KEY = 'f1-policy-radar-impact-ratings-v1';

const copy = {
  zh: {
    title: '社区影响',
    hornMarker: '社区影响均分已突破 9.0',
    noRatings: '暂无评分',
    ratingCount: (count: number) => `${count} 人评分`,
    prompt: '这项政策对你的路径破坏有多大？',
    scaleHint: '1 = 几乎无影响 · 10 = 路径被切断',
    myRating: (rating: number) => `我的评分 ${rating}`,
    buttonLabel: (rating: number) => `给这项政策打 ${rating} 分`,
    unavailable: '均分暂时无法更新，你的选择已保留。',
    descriptions: [
      '对我的路径几乎没有负面影响',
      '只有很轻微的不便',
      '有影响，但容易调整',
      '需要做一些计划变更',
      '会明显增加成本或不确定性',
      '会迫使我改变部分路径',
      '对我的升学／就业选择有重大影响',
      '让我的主要路径变得很困难',
      '对我的升学／就业路径造成严重破坏',
      '几乎切断我当前规划的路径',
    ],
  },
  en: {
    title: 'COMMUNITY IMPACT',
    hornMarker: 'Community impact average is above 9.0',
    noRatings: 'No ratings yet',
    ratingCount: (count: number) => `${count} ratings`,
    prompt: 'How damaging is this policy to your path?',
    scaleHint: '1 = Minimal impact · 10 = Path cut off',
    myRating: (rating: number) => `My rating ${rating}`,
    buttonLabel: (rating: number) => `Rate this policy ${rating} out of 10`,
    unavailable: 'The average cannot update right now. Your choice is saved.',
    descriptions: [
      'Almost no negative impact on my path',
      'Only a very minor inconvenience',
      'Noticeable, but easy to adjust around',
      'Requires some changes to my plans',
      'Clearly adds cost or uncertainty',
      'Forces me to change part of my path',
      'Major impact on my study or work choices',
      'Makes my main path very difficult',
      'Severely damages my study or work path',
      'Nearly cuts off my current planned path',
    ],
  },
} as const;

function readSelections() {
  try {
    const value = JSON.parse(
      localStorage.getItem(RATING_SELECTIONS_KEY) ?? '{}',
    );
    if (!value || typeof value !== 'object') return {};
    return Object.fromEntries(
      Object.entries(value).filter(
        ([, rating]) =>
          typeof rating === 'number' &&
          Number.isInteger(rating) &&
          rating >= 1 &&
          rating <= 10,
      ),
    ) as NumberMap;
  } catch {
    return {};
  }
}

function writeSelections(selections: NumberMap) {
  try {
    localStorage.setItem(RATING_SELECTIONS_KEY, JSON.stringify(selections));
  } catch {
    // The in-memory selection still works when storage is unavailable.
  }
}

export function useCommunityImpactRatings() {
  const [aggregates, setAggregates] = useState<AggregateMap>({});
  const [selections, setSelections] = useState<NumberMap>({});
  const [pending, setPending] = useState<BooleanMap>({});
  const [errors, setErrors] = useState<BooleanMap>({});
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const selectionFrame = window.requestAnimationFrame(() => {
      if (!cancelled) setSelections(readSelections());
    });

    void fetch('/api/policy-ratings', {
      credentials: 'same-origin',
      headers: { Accept: 'application/json' },
    })
      .then(async (response) => {
        if (!response.ok) throw new Error('Rating service unavailable');
        const payload = (await response.json()) as { ratings?: unknown };
        if (!payload.ratings || typeof payload.ratings !== 'object') {
          throw new Error('Invalid rating response');
        }
        if (!cancelled) setAggregates(payload.ratings as AggregateMap);
      })
      .catch(() => {
        if (!cancelled) setLoadFailed(true);
      });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(selectionFrame);
    };
  }, []);

  const submitRating = useCallback(
    async (policyId: PolicyId, rating: number) => {
      setSelections((current) => {
        const next = { ...current, [policyId]: rating };
        writeSelections(next);
        return next;
      });
      setPending((current) => ({ ...current, [policyId]: true }));
      setErrors((current) => ({ ...current, [policyId]: false }));

      try {
        const response = await fetch('/api/policy-ratings', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            policyId,
            rating,
            visitorId: getOrCreateAnonymousVisitorId(),
          }),
          credentials: 'same-origin',
        });
        if (!response.ok) throw new Error('Rating service unavailable');

        const payload = (await response.json()) as {
          policyId?: unknown;
          average?: unknown;
          count?: unknown;
        };
        if (
          payload.policyId !== policyId ||
          typeof payload.average !== 'number' ||
          typeof payload.count !== 'number'
        ) {
          throw new Error('Invalid rating response');
        }

        setAggregates((current) => ({
          ...current,
          [policyId]: {
            average: payload.average as number,
            count: payload.count as number,
          },
        }));
        setLoadFailed(false);
      } catch {
        setErrors((current) => ({ ...current, [policyId]: true }));
      } finally {
        setPending((current) => ({ ...current, [policyId]: false }));
      }
    },
    [],
  );

  return {
    aggregates,
    selections,
    pending,
    errors,
    loadFailed,
    submitRating,
  };
}

export function CommunityImpactRating({
  language,
  policyId,
  aggregate,
  selected,
  pending,
  error,
  onSelect,
}: {
  language: Language;
  policyId: PolicyId;
  aggregate?: CommunityImpactAggregate;
  selected: number | null;
  pending: boolean;
  error: boolean | null;
  onSelect: (rating: number) => void;
}) {
  const text = copy[language];
  const choices = buildCommunityRatingChoices(selected);
  const summary = selected ? text.myRating(selected) : text.prompt;
  const description = selected ? text.descriptions[selected - 1] : text.scaleHint;

  return (
    <aside
      className="community-impact"
      aria-busy={pending}
      data-policy-rating={policyId}
    >
      <div className="community-impact-head">
        <span>{text.title}</span>
        <div className="community-average">
          <span className="community-average-value">
            <CommunityHornMarker
              language={language}
              average={aggregate?.average}
            />
            <strong>{aggregate ? aggregate.average.toFixed(1) : '—'}</strong>
          </span>
          <small>/10</small>
        </div>
      </div>
      <div className="community-impact-summary">
        <span>
          {aggregate ? text.ratingCount(aggregate.count) : text.noRatings}
        </span>
        <strong>{summary}</strong>
      </div>
      <fieldset className="impact-scale">
        <legend className="visually-hidden">{text.prompt}</legend>
        {choices.map(({ value, pressed }) => (
          <button
            type="button"
            key={value}
            aria-label={text.buttonLabel(value)}
            aria-pressed={pressed}
            disabled={pending}
            title={`${value} · ${text.descriptions[value - 1]}`}
            onClick={() => onSelect(value)}
          >
            {value}
          </button>
        ))}
      </fieldset>
      <p
        className={error ? 'rating-feedback error' : 'rating-feedback'}
        aria-live="polite"
      >
        {error ? text.unavailable : description}
      </p>
    </aside>
  );
}

export function CommunityHornMarker({
  language,
  average,
}: {
  language: Language;
  average?: number;
}) {
  if (!shouldShowCommunityHornMarker(average)) return null;

  const label = copy[language].hornMarker;
  return (
    <span className="community-horn-marker" title={label}>
      <img
        className="community-horn-art"
        src="/animations/niulai-horn-badge.png"
        alt={label}
        draggable="false"
      />
    </span>
  );
}

'use client';

import { Fragment, type MouseEvent, type ReactNode } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { annotateGlossary, type GlossarySegment } from './glossary';
import { useLanguage } from './language-context';
import type { Language } from './language';

type GlossaryTermEntry = Extract<GlossarySegment, { type: 'term' }>;

function GlossaryTerm({ entry }: { entry: GlossaryTermEntry }) {
  const keepTapOnTerm = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <Popover>
      <PopoverTrigger
        closeDelay={40}
        delay={0}
        nativeButton={false}
        onClick={keepTapOnTerm}
        openOnHover
        render={(
          <abbr
            aria-label={`${entry.value}：${entry.definition}`}
            className="glossary-term"
          >
            {entry.value}
          </abbr>
        )}
      />
      <PopoverContent
        align="center"
        className="glossary-popover block w-[min(380px,calc(100vw-32px))] max-w-none rounded-[14px] border border-[#d8d0c4] bg-[#fffdf8] px-[15px] py-[13px] text-left text-[#142038] shadow-[0_18px_48px_rgba(20,32,56,.18)]"
        side="bottom"
        sideOffset={9}
      >
        <strong>{entry.fullName}</strong>
        <span>{entry.explanation}</span>
      </PopoverContent>
    </Popover>
  );
}

function renderGlossary(text: string, keyPrefix: string, language: Language) {
  return annotateGlossary(text, language).map((segment, index) =>
    segment.type === 'term' ? (
      <GlossaryTerm entry={segment} key={`${keyPrefix}-${segment.value}-${index}`} />
    ) : (
      <Fragment key={`${keyPrefix}-${index}`}>{segment.value}</Fragment>
    ),
  );
}

// "**…**" marks a phrase the site wants readers to notice. Glossary terms inside
// the marked phrase still get their popover, so emphasis and annotation compose.
function renderEmphasis(
  text: string,
  keyPrefix: string,
  language: Language,
): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let index = 0;

  while (cursor < text.length) {
    const open = text.indexOf('**', cursor);
    const close = open === -1 ? -1 : text.indexOf('**', open + 2);
    if (open === -1 || close === -1) {
      nodes.push(
        renderGlossary(text.slice(cursor), `${keyPrefix}-t${index++}`, language),
      );
      break;
    }
    if (open > cursor)
      nodes.push(
        renderGlossary(text.slice(cursor, open), `${keyPrefix}-t${index++}`, language),
      );
    nodes.push(
      <strong className="text-emphasis" key={`${keyPrefix}-s${index++}`}>
        {renderGlossary(text.slice(open + 2, close), `${keyPrefix}-e${index}`, language)}
      </strong>,
    );
    cursor = close + 2;
  }

  return nodes;
}

export function GlossaryText({ text }: { text: string }) {
  const language = useLanguage();
  return (
    <>
      {text.includes('**')
        ? renderEmphasis(text, 'x', language)
        : renderGlossary(text, 'g', language)}
    </>
  );
}

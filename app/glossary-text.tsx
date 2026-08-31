'use client';

import { Fragment, type MouseEvent } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { annotateGlossary, type GlossarySegment } from './glossary';
import { useLanguage } from './language-context';

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

export function GlossaryText({ text }: { text: string }) {
  const language = useLanguage();
  return (
    <>
      {annotateGlossary(text, language).map((segment, index) => (
        segment.type === 'term' ? (
          <GlossaryTerm entry={segment} key={`${segment.value}-${index}`} />
        ) : (
          <Fragment key={`text-${index}`}>{segment.value}</Fragment>
        )
      ))}
    </>
  );
}

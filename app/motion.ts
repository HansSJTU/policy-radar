import { useEffect, useRef, type RefObject } from 'react';

/** Fade content in place after it is swapped, on the compositor (opacity + transform only). */
function playEnter(element: HTMLElement | null, distance: number) {
  if (!element || typeof element.animate !== 'function') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const easing = getComputedStyle(element).getPropertyValue('--motion-ease').trim() || 'ease-out';
  element.animate(
    [
      { opacity: 0, transform: `translateY(${distance}px)` },
      { opacity: 1, transform: 'none' },
    ],
    // Matches --motion-base.
    { duration: 240, easing },
  );
}

/**
 * Replays the enter motion whenever `key` changes, but not on the first render.
 * The element stays mounted, so `aria-live` regions keep announcing updates.
 */
export function useEnterOnChange(ref: RefObject<HTMLElement | null>, key: unknown, distance = 6) {
  const previous = useRef(key);
  useEffect(() => {
    if (Object.is(previous.current, key)) return;
    previous.current = key;
    playEnter(ref.current, distance);
  }, [ref, key, distance]);
}

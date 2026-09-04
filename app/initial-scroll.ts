type CenteredScrollMetrics = {
  clientWidth: number;
  scrollWidth: number;
  scrollLeft: number;
  containerLeft: number;
  targetLeft: number;
  targetWidth: number;
};

export function getCenteredScrollLeft({
  clientWidth,
  scrollWidth,
  scrollLeft,
  containerLeft,
  targetLeft,
  targetWidth,
}: CenteredScrollMetrics) {
  const targetCenter = scrollLeft + targetLeft - containerLeft + targetWidth / 2;
  const centered = targetCenter - clientWidth / 2;
  return Math.min(Math.max(centered, 0), getRightmostScrollLeft(scrollWidth, clientWidth));
}

export function getRightmostScrollLeft(scrollWidth: number, clientWidth: number) {
  return Math.max(scrollWidth - clientWidth, 0);
}

export function centerCurrentProcessStage(scroller: HTMLElement | null) {
  if (!scroller) return;

  const target = scroller.querySelector<HTMLElement>('.process-steps > .current > b');
  if (!target) return;

  const containerRect = scroller.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();
  scroller.scrollLeft = getCenteredScrollLeft({
    clientWidth: scroller.clientWidth,
    scrollWidth: scroller.scrollWidth,
    scrollLeft: scroller.scrollLeft,
    containerLeft: containerRect.left,
    targetLeft: targetRect.left,
    targetWidth: targetRect.width,
  });
}

export function showLatestTimeline(scroller: HTMLElement | null) {
  if (!scroller) return;
  scroller.scrollLeft = getRightmostScrollLeft(scroller.scrollWidth, scroller.clientWidth);
}

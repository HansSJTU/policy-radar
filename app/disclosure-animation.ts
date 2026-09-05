/** Enhance native details without depending on intrinsic-size CSS transitions. */
export function animateDisclosure(details: HTMLDetailsElement | null) {
  if (!details) return;
  const summary = details.querySelector('summary');
  const content = details.querySelector<HTMLElement>(':scope > .disclosure-content');
  const view = details.ownerDocument.defaultView;
  if (!summary || !content || !view || typeof content.animate !== 'function') return;

  const reducedMotion = view.matchMedia('(prefers-reduced-motion: reduce)');
  let expanded = details.open;
  let animation: Animation | null = null;

  function syncState() {
    details!.dataset.expanded = String(expanded);
    summary!.setAttribute('aria-expanded', String(expanded));
    content!.inert = !expanded;
  }

  function cancelAnimation() {
    if (!animation) return;
    animation.onfinish = null;
    animation.cancel();
    animation = null;
  }

  function settle() {
    cancelAnimation();
    details!.open = expanded;
    content!.style.removeProperty('height');
    content!.style.removeProperty('overflow');
    syncState();
  }

  function toggle(event: MouseEvent) {
    event.preventDefault();
    // Sample the current frame before cancelling, so a second click reverses
    // from the visible height instead of restarting at either endpoint.
    const from = details!.open ? content!.getBoundingClientRect().height : 0;
    expanded = !expanded;
    cancelAnimation();
    syncState();

    if (reducedMotion.matches) {
      settle();
      return;
    }

    // Keep native content rendered until the closing animation is complete.
    details!.open = true;
    content!.style.height = 'auto';
    const to = expanded ? content!.getBoundingClientRect().height : 0;
    const styles = view!.getComputedStyle(details!);
    // Production CSS minification can turn 320ms into .32s.
    const cssDuration = styles.getPropertyValue('--disclosure-duration').trim();
    const duration = Number.parseFloat(cssDuration) * (cssDuration.endsWith('ms') ? 1 : 1000) || 320;
    const easing = styles.getPropertyValue('--motion-ease').trim() || 'ease-out';
    content!.style.height = `${to}px`;
    content!.style.overflow = 'hidden';
    animation = content!.animate(
      [{ height: `${from}px` }, { height: `${to}px` }],
      { duration, easing },
    );
    animation.onfinish = settle;
  }

  function onNativeToggle() {
    if (animation) return;
    expanded = details!.open;
    syncState();
  }

  function onMotionChange() {
    if (reducedMotion.matches) settle();
  }

  syncState();
  summary.addEventListener('click', toggle);
  details.addEventListener('toggle', onNativeToggle);
  reducedMotion.addEventListener('change', onMotionChange);
  // After a resize, return to natural height so wrapped content cannot clip.
  view.addEventListener('resize', settle);

  return () => {
    settle();
    summary.removeEventListener('click', toggle);
    details.removeEventListener('toggle', onNativeToggle);
    reducedMotion.removeEventListener('change', onMotionChange);
    view.removeEventListener('resize', settle);
    delete details.dataset.expanded;
    summary.removeAttribute('aria-expanded');
    content.inert = false;
  };
}

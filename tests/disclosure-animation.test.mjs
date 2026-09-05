import assert from 'node:assert/strict';
import test from 'node:test';
import { animateDisclosure } from '../app/disclosure-animation.ts';

function fixture({ open = false, reduced = false } = {}) {
  const summary = new EventTarget();
  const attributes = new Map();
  summary.setAttribute = (name, value) => attributes.set(name, value);
  summary.removeAttribute = (name) => attributes.delete(name);
  const motion = new EventTarget();
  motion.matches = reduced;
  const view = new EventTarget();
  view.matchMedia = () => motion;
  view.getComputedStyle = () => ({
    getPropertyValue: (name) => name === '--disclosure-duration' ? '320ms' : 'ease-out',
  });
  const details = new EventTarget();
  details.open = open;
  details.dataset = {};
  details.ownerDocument = { defaultView: view };
  const animations = [];
  let visibleHeight;
  const content = {
    inert: false,
    style: { removeProperty(name) { delete this[name]; } },
    getBoundingClientRect() {
      return { height: visibleHeight ?? (details.open ? 300 : 0) };
    },
    animate(frames, options) {
      const animation = { frames, options, cancelled: false, onfinish: null,
        cancel() { this.cancelled = true; visibleHeight = undefined; } };
      animations.push(animation);
      return animation;
    },
  };
  details.querySelector = (selector) => selector === 'summary' ? summary : content;
  const click = () => {
    const event = new Event('click', { cancelable: true });
    summary.dispatchEvent(event);
    return event;
  };
  return { details, summary, attributes, content, animations, motion, view, click,
    setVisibleHeight(height) { visibleHeight = height; } };
}

test('opening measures content and restores natural height after animation', () => {
  const f = fixture();
  animateDisclosure(f.details);
  assert.equal(f.click().defaultPrevented, true);
  assert.equal(f.details.open, true);
  assert.deepEqual(f.animations[0].frames, [{ height: '0px' }, { height: '300px' }]);
  assert.equal(f.attributes.get('aria-expanded'), 'true');
  assert.equal(f.content.inert, false);
  f.animations[0].onfinish();
  assert.equal(f.details.open, true);
  assert.equal(f.content.style.height, undefined);
  assert.equal(f.content.style.overflow, undefined);
});

test('closing keeps content rendered until it has animated to zero', () => {
  const f = fixture({ open: true });
  animateDisclosure(f.details);
  f.click();
  assert.equal(f.details.open, true);
  assert.equal(f.content.inert, true);
  assert.equal(f.attributes.get('aria-expanded'), 'false');
  assert.deepEqual(f.animations[0].frames, [{ height: '300px' }, { height: '0px' }]);
  f.animations[0].onfinish();
  assert.equal(f.details.open, false);
  assert.equal(f.content.style.height, undefined);
});

test('rapid toggles reverse from the visible frame and discard stale completion', () => {
  const f = fixture({ open: true });
  animateDisclosure(f.details);
  f.click();
  f.setVisibleHeight(125);
  f.click();
  assert.equal(f.animations[0].cancelled, true);
  assert.equal(f.animations[0].onfinish, null);
  assert.equal(f.animations[1].frames[0].height, '125px');
  assert.equal(f.animations[1].frames[1].height, '300px');
  assert.equal(f.details.dataset.expanded, 'true');
  f.animations[1].onfinish();
  assert.equal(f.details.open, true);
  assert.equal(f.content.inert, false);
});

test('reduced motion toggles immediately without creating animations', () => {
  const f = fixture({ open: true, reduced: true });
  animateDisclosure(f.details);
  f.click();
  assert.equal(f.details.open, false);
  f.click();
  assert.equal(f.details.open, true);
  assert.equal(f.animations.length, 0);
});

test('enabling reduced motion during a transition settles to the requested state', () => {
  const f = fixture({ open: true });
  animateDisclosure(f.details);
  f.click();
  f.motion.matches = true;
  f.motion.dispatchEvent(new Event('change'));
  assert.equal(f.details.open, false);
  assert.equal(f.animations[0].cancelled, true);
});

test('resizing during expansion releases the measured height for responsive wrapping', () => {
  const f = fixture();
  animateDisclosure(f.details);
  f.click();
  f.view.dispatchEvent(new Event('resize'));
  assert.equal(f.details.open, true);
  assert.equal(f.content.style.height, undefined);
  assert.equal(f.animations[0].cancelled, true);
});

test('native state changes remain synchronized with the next click', () => {
  const f = fixture();
  animateDisclosure(f.details);
  f.details.open = true;
  f.details.dispatchEvent(new Event('toggle'));
  assert.equal(f.attributes.get('aria-expanded'), 'true');
  f.click();
  assert.equal(f.details.dataset.expanded, 'false');
});

test('cleanup cancels animation and restores native summary behavior', () => {
  const f = fixture();
  const cleanup = animateDisclosure(f.details);
  f.click();
  cleanup();
  assert.equal(f.animations[0].cancelled, true);
  assert.equal(f.click().defaultPrevented, false);
  assert.equal(f.details.dataset.expanded, undefined);
  assert.equal(f.attributes.has('aria-expanded'), false);
  assert.equal(f.content.style.height, undefined);
});

test('unsupported animation API leaves native details untouched', () => {
  const f = fixture();
  delete f.content.animate;
  assert.equal(animateDisclosure(f.details), undefined);
  assert.equal(f.click().defaultPrevented, false);
});

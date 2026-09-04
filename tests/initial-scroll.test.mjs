import assert from 'node:assert/strict';
import test from 'node:test';

const initialScroll = await import('../app/initial-scroll.ts').catch(() => ({}));

test('centers the current process marker within the scrollable range', () => {
  assert.equal(typeof initialScroll.getCenteredScrollLeft, 'function');

  assert.equal(initialScroll.getCenteredScrollLeft({
    clientWidth: 320,
    scrollWidth: 760,
    scrollLeft: 200,
    containerLeft: 10,
    targetLeft: 300,
    targetWidth: 10,
  }), 335);
  assert.equal(initialScroll.getCenteredScrollLeft({
    clientWidth: 320,
    scrollWidth: 760,
    scrollLeft: 0,
    containerLeft: 10,
    targetLeft: 20,
    targetWidth: 10,
  }), 0);
  assert.equal(initialScroll.getCenteredScrollLeft({
    clientWidth: 320,
    scrollWidth: 760,
    scrollLeft: 0,
    containerLeft: 10,
    targetLeft: 730,
    targetWidth: 10,
  }), 440);
});

test('uses the rightmost scroll position for a desktop event timeline', () => {
  assert.equal(typeof initialScroll.getRightmostScrollLeft, 'function');
  assert.equal(initialScroll.getRightmostScrollLeft(1160, 578), 582);
  assert.equal(initialScroll.getRightmostScrollLeft(720, 900), 0);
});

test('initializes a process scroller around its current-stage marker', () => {
  assert.equal(typeof initialScroll.centerCurrentProcessStage, 'function');

  const scroller = {
    clientWidth: 320,
    scrollWidth: 760,
    scrollLeft: 200,
    getBoundingClientRect: () => ({ left: 10 }),
    querySelector: () => ({
      getBoundingClientRect: () => ({ left: 300, width: 10 }),
    }),
  };

  initialScroll.centerCurrentProcessStage(scroller);

  assert.equal(scroller.scrollLeft, 335);
});

test('initializes an event timeline at its latest end', () => {
  assert.equal(typeof initialScroll.showLatestTimeline, 'function');

  const scroller = {
    clientWidth: 578,
    scrollWidth: 1160,
    scrollLeft: 0,
  };

  initialScroll.showLatestTimeline(scroller);

  assert.equal(scroller.scrollLeft, 582);
});

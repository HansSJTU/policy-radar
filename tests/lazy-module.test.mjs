import assert from 'node:assert/strict';
import test from 'node:test';

import { preloadable } from '../app/lazy-module.ts';

test('loads a lazy module once and shares the result', async () => {
  let calls = 0;
  const load = preloadable(async () => ({ value: ++calls }));

  const [first, second] = await Promise.all([load(), load()]);
  assert.equal(first, second);
  assert.equal(calls, 1);
});

test('tries again after a failed load instead of keeping the failure', async () => {
  let calls = 0;
  const load = preloadable(async () => {
    calls += 1;
    if (calls === 1) throw new Error('network');
    return 'ready';
  });

  await assert.rejects(load(), /network/);
  assert.equal(await load(), 'ready');
  assert.equal(calls, 2);
});

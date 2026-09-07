import assert from 'node:assert/strict';
import test from 'node:test';

import { getGitHubProjectLink } from '../app/github-project.ts';

test('GitHub project link metadata is safe and localized', () => {
  assert.deepEqual(getGitHubProjectLink('zh'), {
    href: 'https://github.com/HansSJTU/policy-radar',
    target: '_blank',
    rel: 'noreferrer',
    label: '在 GitHub 查看开源项目',
    text: 'GitHub',
    footerText: 'GitHub 开源项目 · MIT',
  });
  assert.deepEqual(getGitHubProjectLink('en'), {
    href: 'https://github.com/HansSJTU/policy-radar',
    target: '_blank',
    rel: 'noreferrer',
    label: 'View the open-source project on GitHub',
    text: 'GitHub',
    footerText: 'Open source on GitHub · MIT',
  });
});

import assert from 'node:assert/strict';
import test from 'node:test';

let githubProject;
try {
  githubProject = await import('../app/github-project.ts');
} catch {
  githubProject = undefined;
}

test('GitHub project link metadata is safe and localized', () => {
  assert.equal(
    typeof githubProject?.getGitHubProjectLink,
    'function',
    'the GitHub link metadata helper must exist',
  );

  assert.deepEqual(githubProject.getGitHubProjectLink('zh'), {
    href: 'https://github.com/HansSJTU/policy-radar',
    target: '_blank',
    rel: 'noreferrer',
    label: '在 GitHub 查看开源项目',
    text: 'GitHub',
    footerText: 'GitHub 开源项目 · MIT',
  });
  assert.deepEqual(githubProject.getGitHubProjectLink('en'), {
    href: 'https://github.com/HansSJTU/policy-radar',
    target: '_blank',
    rel: 'noreferrer',
    label: 'View the open-source project on GitHub',
    text: 'GitHub',
    footerText: 'Open source on GitHub · MIT',
  });
});

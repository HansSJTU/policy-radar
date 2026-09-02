import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const homeSource = await readFile(new URL('../app/policy-radar-client.tsx', import.meta.url), 'utf8');

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

test('home footer omits the GitHub project badge and updates link', () => {
  const footer = homeSource.match(/<footer>[\s\S]*?<\/footer>/)?.[0];
  assert.ok(footer, 'the home footer should remain present');
  assert.doesNotMatch(footer, /GitHubProjectLink/);
  assert.doesNotMatch(footer, /href=\{updatesHref\}/);
  assert.match(footer, /ui\.brand/);
  assert.match(footer, /ui\.footer/);
  assert.match(footer, /ui\.top/);
  assert.match(homeSource, /<GitHubProjectLink language=\{language\} \/>/);
  assert.match(homeSource, /<a href=\{updatesHref\}>\{ui\.updates\}<\/a>/);
});

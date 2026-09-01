import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const [menu, home, stats, updates, css] = await Promise.all([
  readFile(new URL('../app/mobile-site-menu.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../app/policy-radar-client.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../app/stats/page.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../app/updates/page.tsx', import.meta.url), 'utf8'),
  readFile(new URL('../app/globals.css', import.meta.url), 'utf8'),
]);

test('the mobile menu includes every site destination and GitHub', () => {
  assert.match(menu, /#ranking/);
  assert.match(menu, /#cpt-schools/);
  assert.match(menu, /\/updates/);
  assert.match(menu, /\/stats/);
  assert.match(menu, /getGitHubProjectLink/);
});

test('the mobile menu follows the language switch on every page header', () => {
  for (const source of [home, stats, updates]) {
    assert.match(
      source,
      /(?:<\/nav>|<PageLanguageSwitch[\s\S]*?\/>)\s*<MobileSiteMenu/s,
    );
  }
});

test('mobile hides the standalone GitHub action and shows the menu trigger', () => {
  assert.match(
    css,
    /@media \(max-width:\s*960px\)[\s\S]*?\.mobile-menu-trigger\s*\{[^}]*display:\s*inline-flex;/s,
  );
  assert.match(
    css,
    /@media \(max-width:\s*960px\)[\s\S]*?\.top-actions \.github-project-link-header[^}]*display:\s*none;/s,
  );
});

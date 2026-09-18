/**
 * Test whether a source URL points to USCardForum.
 * Shared between the homepage and detail page to keep the filtering
 * criterion in one place.
 */
export function isForumLink(href: string): boolean {
  try {
    return new URL(href).hostname.endsWith('uscardforum.com');
  } catch {
    return false;
  }
}

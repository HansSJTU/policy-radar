import { changeLocation } from '../../../update-pages';

// Sends an old /updates#change-<id> link to the change on its month page.
// An id that matches nothing goes back to /updates.
export async function GET(
  request: Request,
  { params }: { params: Promise<{ changeId: string }> },
) {
  const { changeId } = await params;
  const url = new URL(request.url);
  const language = url.searchParams.get('lang');
  const query = language === 'zh' || language === 'en' ? `?lang=${language}` : '';
  const location = changeLocation(changeId);
  const target = location
    ? `${location.path}${query}#${location.anchor}`
    : `/updates${query}`;
  return new Response(null, {
    status: 302,
    headers: { Location: new URL(target, url.origin).href, 'Cache-Control': 'no-store' },
  });
}

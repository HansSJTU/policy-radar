import { buildUpdateFeed } from '../update-feed';

export async function GET(request: Request) {
  const language =
    new URL(request.url).searchParams.get('lang') === 'en' ? 'en' : 'zh';
  return new Response(buildUpdateFeed(language), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
      // Feed readers still fetch it; search results should show the pages.
      'X-Robots-Tag': 'noindex',
    },
  });
}

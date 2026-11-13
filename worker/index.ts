import handler from 'vinext/server/fetch-handler';

import { canonicalRedirect } from '../app/canonical-host';
import { staticAssetFor } from '../app/static-pages';

// Pages that only change on deploy are rendered at build time (see
// app/static-pages.ts). Serving them from static assets costs almost no CPU;
// everything else, and any request without a prebuilt file, goes to vinext.
export default {
  async fetch(request, env, ctx) {
    const asset = canonicalRedirect(request.url, request.method)
      ? null
      : staticAssetFor(request);
    if (asset) {
      const response = await env.ASSETS.fetch(
        new Request(new URL(asset, request.url), { method: request.method }),
      );
      if (response.ok) {
        const served = new Response(response.body, response);
        if (asset.endsWith('.png')) {
          served.headers.set('Cache-Control', 'public, max-age=3600');
        } else {
          // Same as the rendered page: the language can come from a cookie.
          served.headers.set('Cache-Control', 'no-store, must-revalidate');
          served.headers.delete('ETag');
        }
        return served;
      }
    }
    return handler.fetch(request, env, ctx);
  },
} satisfies ExportedHandler<Env>;

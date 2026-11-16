// Headers every response from the Worker carries. Files that Cloudflare
// serves without running the Worker (scripts, styles, images) get theirs from
// public/_headers.
//
// There is no script-src policy: the pages carry inline scripts for
// hydration, and a policy that allowed them would protect nothing.
export const SECURITY_HEADERS: Record<string, string> = {
  // Browsers that have visited once keep using HTTPS for a year.
  'Strict-Transport-Security': 'max-age=31536000',
  // Files are used as the type they are served with, never guessed.
  'X-Content-Type-Options': 'nosniff',
  // Other sites learn that a reader came from here, not which page.
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  // No other site may show these pages inside a frame.
  'X-Frame-Options': 'DENY',
  'Content-Security-Policy': "frame-ancestors 'none'; base-uri 'self'; object-src 'none'",
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

// Responses from the cache, the asset store and redirects have read-only
// headers, so the response is copied before the headers are set.
export function withSecurityHeaders(response: Response): Response {
  const served = new Response(response.body, response);
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    served.headers.set(name, value);
  }
  return served;
}

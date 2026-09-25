import { POLICY_SITE_URL } from './policy-links.ts';

export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: `${POLICY_SITE_URL}/sitemap.xml`,
  };
}

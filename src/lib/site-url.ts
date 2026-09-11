/**
 * Canonical origin used for absolute URLs in metadata, the sitemap and robots.txt.
 *
 * Vercel sets VERCEL_PROJECT_PRODUCTION_URL at build time and repoints it at the
 * custom domain as soon as one is added, so the deployed site always advertises
 * the right origin without a code change. Set NEXT_PUBLIC_SITE_URL to override,
 * which is what a build destined for non-Vercel hosting needs.
 */
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercelDomain) return `https://${vercelDomain}`;

  return "http://localhost:3000";
}

export const siteUrl = resolveSiteUrl();

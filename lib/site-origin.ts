import { site } from '@/data/site';

/** Resolve public metadata from explicit configuration or Vercel's production domain. */
export function getSiteOrigin(): URL {
  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelProductionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const origin = configuredOrigin ||
    (vercelProductionDomain ? `https://${vercelProductionDomain}` : site.origin);

  return new URL(origin);
}

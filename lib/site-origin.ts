import { site } from '@/data/site';
import { normalizeHostname } from '@/lib/maintenance';

/** Resolve public metadata from explicit configuration or Vercel's production domain. */
export function getSiteOrigin(host?: string | null): URL {
  const hostname = normalizeHostname(host);
  if (
    hostname === 'www.waldonys.com.br' ||
    hostname === 'preview.waldonys.com.br'
  ) {
    return new URL(`https://${hostname}`);
  }

  const configuredOrigin = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelProductionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const origin = configuredOrigin ||
    (vercelProductionDomain ? `https://${vercelProductionDomain}` : site.origin);

  return new URL(origin);
}

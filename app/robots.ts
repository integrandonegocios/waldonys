import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { getSiteOrigin } from '@/lib/site-origin';
import { isUnderConstruction } from '@/lib/maintenance';
export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get('host');
  const origin = getSiteOrigin(host);
  if (isUnderConstruction(host)) {
    return { rules: { userAgent: '*', allow: '/' } };
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('/sitemap.xml', origin).href,
  };
}

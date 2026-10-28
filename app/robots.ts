import type { MetadataRoute } from 'next';
import { getSiteOrigin } from '@/lib/site-origin';
import { isUnderConstruction } from '@/lib/maintenance';
export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin();
  if (isUnderConstruction()) {
    return { rules: { userAgent: '*', allow: '/' } };
  }
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('/sitemap.xml', origin).href,
  };
}

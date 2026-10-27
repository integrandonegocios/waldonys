import type { MetadataRoute } from 'next';
import { getSiteOrigin } from '@/lib/site-origin';
export default function robots(): MetadataRoute.Robots {
  const origin = getSiteOrigin();
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: new URL('/sitemap.xml', origin).href,
  };
}

import { site } from '@/data/site';
import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = process.env.NEXT_PUBLIC_SITE_URL || site.origin;
  return origin
    ? [
        {
          url: new URL('/', origin).href,
          changeFrequency: 'weekly',
          priority: 1,
        },
      ]
    : [];
}

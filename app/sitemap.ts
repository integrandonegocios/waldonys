import type { MetadataRoute } from 'next';
import { getSiteOrigin } from '@/lib/site-origin';
export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getSiteOrigin();
  return [
    {
      url: new URL('/', origin).href,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: new URL('/videos', origin).href,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];
}

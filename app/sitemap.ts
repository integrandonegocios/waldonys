import type { MetadataRoute } from 'next';
import { getSiteOrigin } from '@/lib/site-origin';
import { isUnderConstruction } from '@/lib/maintenance';
export default function sitemap(): MetadataRoute.Sitemap {
  if (isUnderConstruction()) return [];
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

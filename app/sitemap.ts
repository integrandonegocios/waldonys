import type { MetadataRoute } from 'next';
import { headers } from 'next/headers';
import { getSiteOrigin } from '@/lib/site-origin';
import { isUnderConstruction } from '@/lib/maintenance';
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get('host');
  if (isUnderConstruction(host)) return [];
  const origin = getSiteOrigin(host);
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

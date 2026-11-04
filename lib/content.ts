import {
  demoMusic,
  demoGallery,
  demoArtist,
} from '@/data/demo';
import { getChannelVideos } from '@/lib/youtube';
import { getShows } from '@/lib/shows';
import type { ContentRepository } from '@/types/content';
// Adaptador de demonstração. Substituir por um repositório HTTP/banco no servidor.
export const contentRepository: ContentRepository = {
  getShows,
  getMusic: async () => demoMusic,
  getVideos: getChannelVideos,
  getGallery: async () => demoGallery,
  getArtist: async () => demoArtist,
  getNews: async () => [],
};

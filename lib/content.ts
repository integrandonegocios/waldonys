import {
  demoShows,
  demoMusic,
  demoVideos,
  demoGallery,
  demoArtist,
} from '@/data/demo';
import type { ContentRepository } from '@/types/content';
// Adaptador de demonstração. Substituir por um repositório HTTP/banco no servidor.
export const contentRepository: ContentRepository = {
  getShows: async () => demoShows,
  getMusic: async () => demoMusic,
  getVideos: async () => demoVideos,
  getGallery: async () => demoGallery,
  getArtist: async () => demoArtist,
  getNews: async () => [],
};

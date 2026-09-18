export type Platform = 'spotify' | 'youtube' | 'instagram';
export type GalleryCategory =
  | 'Shows'
  | 'Bastidores'
  | 'Aviação'
  | 'Paraquedismo'
  | 'Momentos';
export interface GalleryImage {
  id: string;
  category: GalleryCategory;
  src: string;
  alt: string;
  caption: string;
  illustrative: boolean;
}
export interface ShowEvent {
  id: string;
  date: string | null;
  city: string;
  state: string;
  venue: string;
  time: string | null;
  details: string;
  ticketUrl: string | null;
  demonstration: boolean;
}
export interface MusicRelease {
  id: string;
  title: string;
  kind: 'single' | 'album' | 'playlist';
  cover: string | null;
  spotifyUrl: string | null;
  demonstration: boolean;
}
export interface Video {
  id: string;
  title: string;
  youtubeId: string | null;
  thumbnail: string | null;
  demonstration: boolean;
}
export interface TimelineEvent {
  id: string;
  year: number | null;
  title: string;
  description: string;
  sourceUrl: string | null;
}
export interface ArtistContent {
  biography: string | null;
  timeline: TimelineEvent[];
  legacy: string | null;
}
export interface NewsItem {
  id: string;
  title: string;
  body: string;
  publishedAt: string;
}
export interface BookingRequest {
  name: string;
  organization: string;
  email: string;
  phone: string;
  city: string;
  date: string;
  eventType: string;
  message: string;
}
export interface ContentRepository {
  getShows(): Promise<ShowEvent[]>;
  getMusic(): Promise<MusicRelease[]>;
  getVideos(): Promise<Video[]>;
  getGallery(): Promise<GalleryImage[]>;
  getArtist(): Promise<ArtistContent>;
  getNews(): Promise<NewsItem[]>;
}

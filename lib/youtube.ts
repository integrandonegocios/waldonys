import type { Video } from '@/types/content';
import snapshot from '@/data/youtube-videos.json';

export const VIDEO_LIMIT = 20;
const uploadsPlaylist = 'UU-dgkeTJZsghEO0jUNLtmSw';
const fallbackVideos: Video[] = snapshot.videos;

type PlaylistResponse = {
  nextPageToken?: string;
  items?: Array<{
    status?: { privacyStatus?: string };
    snippet?: {
      title?: string;
      resourceId?: { videoId?: string };
    };
  }>;
};

export function youtubeThumbnail(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

/** Uploads arrive newest first. Keep a verified selection if the API is unavailable. */
export async function getChannelVideos(): Promise<Video[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) return fallbackVideos;

  try {
    const videos: Video[] = [];
    const seen = new Set<string>();
    const pages = new Set<string>();
    let pageToken = '';
    do {
      pages.add(pageToken);
      const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
      url.searchParams.set('part', 'snippet,status');
      url.searchParams.set('playlistId', uploadsPlaylist);
      url.searchParams.set('maxResults', '20');
      url.searchParams.set('key', apiKey);
      if (pageToken) url.searchParams.set('pageToken', pageToken);
      const response = await fetch(url, {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(5000),
      });
      if (!response.ok) throw new Error('YouTube request failed');
      const data = (await response.json()) as PlaylistResponse;
      for (const item of data.items ?? []) {
        const youtubeId = item.snippet?.resourceId?.videoId;
        const title = item.snippet?.title?.trim();
        if (!youtubeId || !/^[\w-]{11}$/.test(youtubeId) || seen.has(youtubeId) ||
            !title || /^(Private|Deleted) video$/i.test(title) ||
            item.status?.privacyStatus !== 'public') continue;
        seen.add(youtubeId);
        videos.push({ id: `youtube-${youtubeId}`, title, youtubeId, thumbnail: null, demonstration: false });
        if (videos.length === VIDEO_LIMIT) return videos;
      }
      pageToken = data.nextPageToken ?? '';
    } while (pageToken && !pages.has(pageToken) && pages.size < 3);
    return videos.length ? videos : fallbackVideos;
  } catch {
    // Do not log request URLs: they contain the server API key.
    console.warn('YouTube indisponível; exibindo a seleção verificada.');
    return fallbackVideos;
  }
}

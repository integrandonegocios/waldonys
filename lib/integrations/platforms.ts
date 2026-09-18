import type { Platform } from '@/types/content';
export type IntegrationState<T> =
  | { status: 'not-configured'; data: null }
  | { status: 'ready'; data: T }
  | { status: 'error'; data: null; message: string };
// Sem chamadas externas ou dados fictícios apresentados como retorno de API.
export async function getPlatformContent(
  platform: Platform,
): Promise<IntegrationState<unknown>> {
  void platform;
  return { status: 'not-configured', data: null };
}
export function spotifyEmbedUrl(url: string): string | null {
  try {
    const parsed = new URL(url);
    const match = parsed.pathname.match(
      /^\/(album|track|playlist|artist)\/([a-zA-Z0-9]+)$/,
    );
    return parsed.protocol === 'https:' &&
      parsed.hostname === 'open.spotify.com' &&
      match
      ? `https://open.spotify.com/embed/${match[1]}/${match[2]}`
      : null;
  } catch {
    return null;
  }
}
export function youtubeEmbedUrl(id: string): string | null {
  return /^[\w-]{11}$/.test(id)
    ? `https://www.youtube-nocookie.com/embed/${id}`
    : null;
}

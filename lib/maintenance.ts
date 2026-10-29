const PUBLIC_MAINTENANCE_HOST = 'www.waldonys.com.br';
const PUBLIC_PREVIEW_HOST = 'preview.waldonys.com.br';

export function normalizeHostname(host: string | null | undefined): string | null {
  if (!host) return null;
  try {
    return new URL(`http://${host.split(',')[0].trim()}`).hostname.toLowerCase();
  } catch {
    return null;
  }
}

export function isUnderConstruction(host?: string | null): boolean {
  const hostname = normalizeHostname(host);

  // The production domain remains in maintenance while the preview domain
  // serves the full site from the same Vercel deployment.
  if (hostname === PUBLIC_PREVIEW_HOST) return false;
  if (hostname === PUBLIC_MAINTENANCE_HOST) return true;

  // Preview deployments are the private work-in-progress site, so they must
  // always show the full website even if the production maintenance flag is set.
  if (process.env.VERCEL_ENV === 'preview') return false;

  return (
    process.env.SITE_EM_CONSTRUCAO === 'true' ||
    (process.env.VERCEL_ENV === 'production' &&
      process.env.SITE_EM_CONSTRUCAO !== 'false')
  );
}

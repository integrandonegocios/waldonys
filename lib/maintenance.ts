export function isUnderConstruction(): boolean {
  // Preview deployments are the private work-in-progress site, so they must
  // always show the full website even if the production maintenance flag is set.
  if (process.env.VERCEL_ENV === 'preview') return false;

  return (
    process.env.SITE_EM_CONSTRUCAO === 'true' ||
    (process.env.VERCEL_ENV === 'production' &&
      process.env.SITE_EM_CONSTRUCAO !== 'false')
  );
}

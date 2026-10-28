export function isUnderConstruction(): boolean {
  return (
    process.env.SITE_EM_CONSTRUCAO === 'true' ||
    (process.env.VERCEL_ENV === 'production' &&
      process.env.SITE_EM_CONSTRUCAO !== 'false')
  );
}

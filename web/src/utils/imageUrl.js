// In production (Vercel), stored relative upload URLs need to hit the Render backend.
// In dev, Vite proxies /uploads to localhost:5050.
const BACKEND_BASE = import.meta.env.PROD
  ? 'https://asa-3mdd.onrender.com'
  : '';

/**
 * Resolves any image URL (relative upload path, localhost URL, or external CDN)
 * to an accessible URL in the current environment.
 */
export function resolveImageUrl(url) {
  if (!url || typeof url !== 'string') return '';

  // Data URLs and Blobs (e.g. file upload previews)
  if (url.startsWith('data:') || url.startsWith('blob:')) {
    return url;
  }

  // Relative upload paths like "/uploads/artwork-1234.jpg"
  if (url.startsWith('/uploads/')) {
    return `${BACKEND_BASE}${url}`;
  }

  // Legacy/seeded records that stored absolute localhost URLs in MongoDB
  const localhostMatch = url.match(/^https?:\/\/(localhost|127\.0\.0\.1|\d+\.\d+\.\d+\.\d+)(:\d+)?(\/uploads\/.*)$/);
  if (localhostMatch) {
    return `${BACKEND_BASE}${localhostMatch[3]}`;
  }

  return url;
}

export default resolveImageUrl;

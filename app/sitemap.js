import { APP_CONFIG } from '@/lib/config';

export default function sitemap() {
  const baseUrl = APP_CONFIG.landingUrl;
  const lastModified = '2026-10-22';

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/support-policy`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}

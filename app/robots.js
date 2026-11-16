import { APP_CONFIG } from '@/lib/config';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${APP_CONFIG.landingUrl}/sitemap.xml`,
  };
}

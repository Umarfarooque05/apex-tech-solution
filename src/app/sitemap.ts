import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://apextechsolution.in';
  
  const routes = [
    '',
    '/services',
    '/services/seo',
    '/services/digital-marketing',
    '/services/web-development',
    '/services/software-development',
    '/services/custom-web-applications',
    '/about',
    '/work',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route.startsWith('/services') ? 0.8 : 0.6,
  }));
}

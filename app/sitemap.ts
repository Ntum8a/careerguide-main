import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.careerguide.network'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/students`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/schools`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/employers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/partners`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]
}

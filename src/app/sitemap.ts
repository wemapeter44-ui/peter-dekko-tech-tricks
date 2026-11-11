
import type { MetadataRoute } from 'next'

const baseUrl = 'https://www.pdtsoftwares.co.ke'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    '',
    '/products',
    '/projects',
    '/services',
    '/about',
    '/contact',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: page === '' ? 1 : 0.8,
  }))
}

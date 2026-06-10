import type { MetadataRoute } from 'next'

const baseUrl = 'https://citizenapproved.org'

const routes = [
  '',
  '/about',
  '/bottlenecks',
  '/civics',
  '/costs',
  '/documents',
  '/eligibility',
  '/flowchart',
  '/legal',
  '/pathways',
  '/processing',
  '/resources',
  '/right-to-repair',
  '/sources',
  '/why-so-long',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))
}

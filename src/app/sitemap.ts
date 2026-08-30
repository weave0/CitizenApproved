import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

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
  '/pathways/birthright',
  '/pathways/derivative',
  '/pathways/marriage',
  '/pathways/military',
  '/pathways/naturalization',
  '/processing',
  '/resources',
  '/right-to-repair',
  '/sources',
  '/updates',
  '/why-so-long',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : path === '/updates' ? 0.9 : 0.7,
  }))
}

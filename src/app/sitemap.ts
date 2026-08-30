import type { MetadataRoute } from 'next'
import { LAST_POLICY_REVIEW } from '@/lib/policy/current-policy'

export const dynamic = 'force-static'

const baseUrl = 'https://citizenapproved.org'
const reviewedAt = new Date(`${LAST_POLICY_REVIEW}T00:00:00Z`)

const routes = [
  '',
  '/about',
  '/accessibility',
  '/bottlenecks',
  '/civics',
  '/costs',
  '/documents',
  '/eligibility',
  '/flowchart',
  '/glossary',
  '/help',
  '/languages',
  '/languages/es',
  '/legal',
  '/pathways',
  '/pathways/birthright',
  '/pathways/derivative',
  '/pathways/marriage',
  '/pathways/military',
  '/pathways/naturalization',
  '/processing',
  '/resources',
  '/resources/checklist',
  '/resources/forms',
  '/resources/timeline',
  '/sources',
  '/topics',
  '/topics/dual-nationality',
  '/topics/exceptions',
  '/topics/historical-law',
  '/topics/proof',
  '/topics/review',
  '/updates',
  '/why-so-long',
  '/privacy',
  '/terms',
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: reviewedAt,
    changeFrequency: path === '/updates' ? 'daily' : 'weekly',
    priority:
      path === ''
        ? 1
        : path === '/updates' || path === '/help'
          ? 0.95
          : path === '/accessibility' || path === '/languages' || path === '/resources' || path === '/glossary'
            ? 0.9
            : path.startsWith('/pathways') || path.startsWith('/topics') || path.startsWith('/languages/')
              ? 0.85
              : 0.7,
  }))
}

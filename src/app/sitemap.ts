import type { MetadataRoute } from 'next'
import { serviceCategories } from '@/data/services'
import { prestations } from '@/data/prestations'
import { casStudies } from '@/data/cas'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yofield.fr'

const now = new Date().toISOString()

export default function sitemap(): MetadataRoute.Sitemap {
  /* ─── Static pages ──────────────────────────────────── */
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${siteUrl}/le-studio`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/services`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${siteUrl}/cas`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${siteUrl}/mentions-legales`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/politique-de-confidentialite`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${siteUrl}/conditions-generales-vente`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  /* ─── Service category pages ────────────────────────── */
  const categoryPages: MetadataRoute.Sitemap = serviceCategories.map((cat) => ({
    url: `${siteUrl}/services/${cat.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  /* ─── Prestation atomic pages ───────────────────────── */
  const prestationPages: MetadataRoute.Sitemap = prestations.map((p) => ({
    url: `${siteUrl}/prestations/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  /* ─── Cas clients pages ──────────────────────────────── */
  const casPages: MetadataRoute.Sitemap = casStudies.map((c) => ({
    url: `${siteUrl}/cas/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [...staticPages, ...categoryPages, ...prestationPages, ...casPages]
}

import type { Metadata } from 'next'
import type { SEOMeta } from '@/types'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.yofield.com'
const siteName = 'Yofield'

/* Per-pillar OG images — category pages and their prestations share the
   pillar visual instead of the generic wordmark. */
const SERVICE_OG: Record<string, string> = {
  'branding-identite-de-marque': '/og/branding.jpg',
  'creation-sites-applications': '/og/sites-web.jpg',
  'communication-digitale-acquisition': '/og/communication.jpg',
  'production-contenus': '/og/contenus.jpg',
  'intelligence-artificielle-automatisation': '/og/ia.jpg',
}

/* ─── Core metadata builder ─────────────────────────────
   Usage: export const metadata = buildMetadata({ ... })
──────────────────────────────────────────────────────── */

export function buildMetadata({
  title,
  description,
  ogImage,
  canonical,
  noIndex = false,
}: SEOMeta): Metadata {
  const ogImg = ogImage ?? '/og/default.jpg'
  const url = canonical ? `${siteUrl}${canonical}` : siteUrl

  return {
    /* Absolute: the seoTitles already carry the brand once — letting the
       layout template append "| Yofield" produced a duplicated brand
       ("· Studio Yofield | Yofield", even "| Yofield | Yofield"). */
    title: { absolute: title },
    description,
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: ogImg,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImg],
    },
  }
}

/* ─── Page-specific helpers ─────────────────────────────  */

export function buildServiceCategoryMeta(
  seoTitle: string,
  seoDescription: string,
  slug: string
): Metadata {
  return buildMetadata({
    title: seoTitle,
    description: seoDescription,
    canonical: `/services/${slug}`,
    ogImage: SERVICE_OG[slug],
  })
}

export function buildPrestationMeta(
  seoTitle: string,
  seoDescription: string,
  slug: string,
  categorySlug?: string
): Metadata {
  return buildMetadata({
    title: seoTitle,
    description: seoDescription,
    canonical: `/prestations/${slug}`,
    ogImage: categorySlug ? SERVICE_OG[categorySlug] : undefined,
  })
}

export function buildCasMeta(
  title: string,
  description: string,
  slug: string,
  ogImage?: string
): Metadata {
  return buildMetadata({
    title: `${title} · Cas client Yofield`,
    description,
    canonical: `/cas/${slug}`,
    ogImage,
  })
}

export function buildBlogMeta(title: string, description: string, slug: string): Metadata {
  return buildMetadata({
    title: `${title} · Yofield`,
    description,
    canonical: `/blog/${slug}`,
  })
}

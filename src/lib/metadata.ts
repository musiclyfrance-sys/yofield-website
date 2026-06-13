import type { Metadata } from 'next'
import type { SEOMeta } from '@/types'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yofield.com'
const siteName = 'Yofield'

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
    title,
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
  })
}

export function buildPrestationMeta(
  seoTitle: string,
  seoDescription: string,
  slug: string
): Metadata {
  return buildMetadata({
    title: seoTitle,
    description: seoDescription,
    canonical: `/prestations/${slug}`,
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

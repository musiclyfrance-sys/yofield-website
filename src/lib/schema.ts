/* ─── Schema.org generators — Yofield ──────────────────────────────
   Generates JSON-LD structured data objects (schema-dts compatible).
   Usage: <script type="application/ld+json">{JSON.stringify(schema)}</script>
──────────────────────────────────────────────────────────────────── */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yofield.fr'

/* ─── Organization ──────────────────────────────────────── */

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Yofield',
    alternateName: 'Studio Yofield',
    url: siteUrl,
    logo: `${siteUrl}/logos/logo-fond-blanc.svg`,
    description:
      "Studio créatif et digital qui assemble pour ses clients une marque complète : identité, site, communication, contenus et IA. Du brief au lancement public, en cycle court.",
    sameAs: [
      'https://www.linkedin.com/company/yofield',
      'https://www.instagram.com/yofield.studio',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'French',
      email: 'hello@yofield.fr',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressRegion: 'Île-de-France',
    },
    foundingDate: '2024',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 1,
      maxValue: 10,
    },
  }
}

/* ─── WebSite ───────────────────────────────────────────── */

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Yofield',
    url: siteUrl,
    description:
      "Studio créatif et digital : branding, sites web, acquisition, contenus et IA.",
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: 'fr-FR',
  }
}

/* ─── Service ───────────────────────────────────────────── */

export function serviceSchema({
  name,
  description,
  url,
  category,
}: {
  name: string
  description: string
  url: string
  category: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${siteUrl}${url}`,
    provider: {
      '@type': 'Organization',
      name: 'Yofield',
      url: siteUrl,
    },
    serviceType: category,
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    availableLanguage: 'French',
    inLanguage: 'fr-FR',
  }
}

/* ─── BreadcrumbList ────────────────────────────────────── */

export function breadcrumbSchema(
  items: Array<{ name: string; href: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href}`,
    })),
  }
}

/* ─── FAQPage ───────────────────────────────────────────── */

export function faqSchema(faq: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

/* ─── Article ───────────────────────────────────────────── */

export function articleSchema({
  title,
  description,
  slug,
  date,
  author,
  image,
}: {
  title: string
  description: string
  slug: string
  date: string
  author: string
  image?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${siteUrl}/blog/${slug}`,
    datePublished: date,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Yofield',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logos/logo-fond-blanc.svg`,
      },
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: `${siteUrl}${image}`,
      },
    }),
    inLanguage: 'fr-FR',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${slug}`,
    },
  }
}

/* ─── LocalBusiness ─────────────────────────────────────── */

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Yofield',
    description:
      "Studio créatif et digital : branding, création de sites web, acquisition digitale, production de contenus et intelligence artificielle.",
    url: siteUrl,
    logo: `${siteUrl}/logos/logo-fond-blanc.svg`,
    priceRange: '€€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    openingHours: 'Mo-Fr 09:00-18:00',
    email: 'hello@yofield.fr',
  }
}

/* ─── Utility: inject schema as script tag content ──────── */

export function schemaToString(schema: object): string {
  return JSON.stringify(schema)
}

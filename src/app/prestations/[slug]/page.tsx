import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPrestationBySlug, prestations } from '@/data/prestations'
import { getCategoryBySlug } from '@/data/services'
import ServicesAtomicTemplate from '@/components/services/atomic/ServicesAtomicTemplate'
import SiteLayout from '@/components/layout/Navigation'
import { buildPrestationMeta } from '@/lib/metadata'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return prestations.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const prestation = getPrestationBySlug(slug)
  if (!prestation) return {}
  return buildPrestationMeta(prestation.seoTitle, prestation.seoDescription, prestation.slug)
}

export default async function PrestationPage({ params }: PageProps) {
  const { slug } = await params
  const prestation = getPrestationBySlug(slug)
  if (!prestation) notFound()

  const parentCategory = getCategoryBySlug(prestation.categorySlug)
  if (!parentCategory) notFound()

  const breadcrumb = breadcrumbSchema([
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: parentCategory.name, href: `/services/${parentCategory.slug}` },
    { name: prestation.name, href: `/prestations/${prestation.slug}` },
  ])

  const service = serviceSchema({
    name: prestation.nameFull,
    description: prestation.description,
    url: `/prestations/${prestation.slug}`,
    category: parentCategory.name,
  })

  /* FAQPage JSON-LD is emitted once by <FAQAccordion> inside the template,
     so it is intentionally omitted from this page-level graph. */
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [breadcrumb, service] }) }}
      />
      <ServicesAtomicTemplate prestation={prestation} parentCategory={parentCategory} />
    </SiteLayout>
  )
}

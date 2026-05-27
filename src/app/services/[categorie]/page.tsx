import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCategoryBySlug, serviceCategories } from '@/data/services'
import { getPrestationsByCategory } from '@/data/prestations'
import ServicesCategoryTemplate from '@/components/services/category/ServicesCategoryTemplate'
import SiteLayout from '@/components/layout/Navigation'
import { buildServiceCategoryMeta } from '@/lib/metadata'
import { breadcrumbSchema, serviceSchema } from '@/lib/schema'

interface PageProps {
  params: Promise<{ categorie: string }>
}

export async function generateStaticParams() {
  return serviceCategories.map((cat) => ({ categorie: cat.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { categorie } = await params
  const category = getCategoryBySlug(categorie)
  if (!category) return {}
  return buildServiceCategoryMeta(category.seoTitle, category.seoDescription, category.slug)
}

export default async function ServiceCategoryPage({ params }: PageProps) {
  const { categorie } = await params
  const category = getCategoryBySlug(categorie)
  if (!category) notFound()

  const categoryPrestations = getPrestationsByCategory(categorie)

  const breadcrumb = breadcrumbSchema([
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: category.name, href: `/services/${categorie}` },
  ])

  const service = serviceSchema({
    name: category.name,
    description: category.description,
    url: `/services/${categorie}`,
    category: category.name,
  })

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': [breadcrumb, service] }) }}
      />
      <ServicesCategoryTemplate category={category} categoryPrestations={categoryPrestations} />
    </SiteLayout>
  )
}

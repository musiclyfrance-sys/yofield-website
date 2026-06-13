import { notFound } from 'next/navigation'
import SiteLayout from '@/components/layout/Navigation'
import SecteurTemplate from '@/components/secteurs/SecteurTemplate'
import { secteurs, getSecteurBySlug } from '@/data/secteurs'
import { getCasBySlugs } from '@/data/cas'
import { buildMetadata } from '@/lib/metadata'
import { organizationSchema } from '@/lib/schema'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return secteurs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const secteur = getSecteurBySlug(slug)
  if (!secteur) return {}
  return buildMetadata({
    title: secteur.seoTitle,
    description: secteur.seoDescription,
    canonical: `/secteurs/${slug}`,
  })
}

export default async function SecteurPage({ params }: Props) {
  const { slug } = await params
  const secteur = getSecteurBySlug(slug)
  if (!secteur) notFound()

  const casClients = getCasBySlugs(secteur.casClientSlugs)

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(),
      {
        '@type': 'Service',
        name: `Studio créatif ${secteur.name}`,
        provider: { '@type': 'Organization', name: 'Yofield' },
        description: secteur.seoDescription,
        areaServed: { '@type': 'Country', name: 'France' },
        serviceType: secteur.name,
      },
      /* FAQPage JSON-LD is emitted once by <FAQAccordion> in the template,
         so it is intentionally omitted here to avoid a duplicate. */
    ],
  }

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SecteurTemplate secteur={secteur} casClients={casClients} />
    </SiteLayout>
  )
}

import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getCasBySlug, casStudies } from '@/data/cas'
import { buildCasMeta } from '@/lib/metadata'
import SiteLayout from '@/components/layout/Navigation'
import Link from 'next/link'
import { breadcrumbSchema } from '@/lib/schema'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return casStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const cas = getCasBySlug(slug)
  if (!cas) return {}
  return buildCasMeta(cas.title, cas.description, cas.slug)
}

export default async function CasPage({ params }: PageProps) {
  const { slug } = await params
  const cas = getCasBySlug(slug)
  if (!cas) notFound()

  const breadcrumb = breadcrumbSchema([
    { name: 'Accueil', href: '/' },
    { name: 'Cas clients', href: '/cas' },
    { name: cas.title, href: `/cas/${cas.slug}` },
  ])

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [breadcrumb],
          }),
        }}
      />

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="section-padding bg-soil">
        <div className="container">
          <p className="eyebrow text-snow mb-6" style={{ opacity: 0.45 }}>
            {cas.sector}&nbsp;·&nbsp;{cas.year}
          </p>
          <h1 className="np-800 text-4xl md:text-5xl text-snow mb-6 max-w-3xl">
            {cas.title}
          </h1>
          <p className="font-body text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(250,250,247,0.65)' }}>
            {cas.description}
          </p>
        </div>
      </section>

      {/* ── CONTENT ──────────────────────────────────── */}
      <section className="section-padding bg-snow">
        <div className="container">
          <div className="max-w-3xl mx-auto">

            {/* Le contexte */}
            <div className="mb-12">
              <h2 className="np-700 text-2xl text-soil mb-4">Le contexte</h2>
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(15,15,14,0.75)' }}>
                {cas.challenge}
              </p>
            </div>

            {/* Notre approche */}
            <div className="mb-12">
              <h2 className="np-700 text-2xl text-soil mb-4">Notre approche</h2>
              <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(15,15,14,0.75)' }}>
                {cas.approach}
              </p>
            </div>

            {/* Le résultat */}
            <div className="mb-12">
              <h2 className="np-700 text-2xl text-soil mb-4">Le résultat</h2>
              <div
                className="pl-6 font-body text-base leading-relaxed"
                style={{
                  borderLeft: '4px solid #D4F551',
                  color: 'rgba(15,15,14,0.75)',
                }}
              >
                {cas.result}
              </div>
            </div>

            {/* Prestations mobilisées */}
            {cas.services && cas.services.length > 0 && (
              <div className="mb-4">
                <p className="eyebrow text-soil mb-4">Prestations mobilisées</p>
                <div className="flex flex-wrap gap-2">
                  {cas.services.map((serviceSlug) => (
                    <Link
                      key={serviceSlug}
                      href={`/prestations/${serviceSlug}`}
                      className="font-body text-xs px-3 py-1 rounded-full transition-colors"
                      style={{
                        backgroundColor: '#EAF3E0',
                        color: 'rgba(15,15,14,0.70)',
                      }}
                    >
                      {serviceSlug.replace(/-/g, ' ')}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="section-padding bg-pine">
        <div className="container text-center">
          <h2 className="np-700 text-3xl text-snow mb-8">
            Vous avez un projet similaire&nbsp;?
          </h2>
          <Link href="/contact" className="btn btn-citron">
            Parlons-en
          </Link>
        </div>
      </section>

      {/* ── BACK LINK ────────────────────────────────── */}
      <div className="bg-snow section-padding" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container">
          <Link
            href="/cas"
            className="font-body text-sm hover:text-soil transition-colors"
            style={{ color: 'rgba(15,15,14,0.50)' }}
          >
            ← Tous les cas
          </Link>
        </div>
      </div>

    </SiteLayout>
  )
}

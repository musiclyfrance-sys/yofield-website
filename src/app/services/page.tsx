import Link from 'next/link'
import Image from 'next/image'
import SiteLayout from '@/components/layout/Navigation'
import ScrollReveal from '@/components/animations/ScrollReveal'
import CTABanner from '@/components/services/shared/CTABanner'
import { buildMetadata } from '@/lib/metadata'
import { serviceCategories } from '@/data/services'
import { prestations } from '@/data/prestations'

const SERVICE_IMAGES: Record<string, string> = {
  'branding-identite-de-marque': '/images/services/branding.jpg',
  'creation-sites-applications': '/images/services/sites-web.jpg',
  'communication-digitale-acquisition': '/images/services/communication.jpg',
  'production-contenus': '/images/services/contenus.jpg',
  'intelligence-artificielle-automatisation': '/images/services/ia.jpg',
}

export const metadata = buildMetadata({
  title: 'Services · Studio Yofield',
  description:
    "Les 5 domaines de Yofield : branding, création de sites, acquisition digitale, production de contenus et intelligence artificielle. Une marque complète, en cycle court.",
  canonical: '/services',
})

/* ─── Schema.org ─────────────────────────────────────────────── */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yofield.com'

const serviceSchema = {
  '@context': 'https://schema.org',
  '@graph': serviceCategories.map((cat) => ({
    '@type': 'Service',
    name: cat.name,
    description: cat.description,
    url: `${siteUrl}/services/${cat.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Yofield',
      url: siteUrl,
    },
  })),
}

/* ─── Helper to resolve prestation name from slug ────────────── */

function getPrestationName(slug: string): string {
  const found = prestations.find((p) => p.slug === slug)
  return found?.name ?? slug
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function ServicesPage() {
  return (
    <SiteLayout>
      {/* ─── Schema.org ─────────────────────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="section-padding bg-soil text-snow">
        <div className="container w-full">
          <ScrollReveal>
            <p className="eyebrow text-snow mb-8" style={{ opacity: 0.45 }}>
              Services
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="np-900 text-5xl md:text-7xl text-snow mb-8 leading-none">
              Tout ce dont une marque a besoin.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-lg text-snow/65 max-w-2xl leading-relaxed">
              Cinq domaines complémentaires qui fonctionnent ensemble. On peut intervenir sur l'un d'eux ou sur l'ensemble, selon là où vous en êtes.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SERVICES LIST ───────────────────────────────────── */}
      <section className="section-padding bg-snow">
        <div className="container">
          <div className="flex flex-col gap-6">
            {serviceCategories.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={0.06 * i}>
                <article className="group flex items-start gap-8 rounded-2xl bg-mist p-6 ring-1 ring-soil/[0.04] transition-all duration-300 hover:-translate-y-0.5 hover:bg-sage/20 hover:ring-soil/10 md:p-8">
                  {/* Left: category universe image */}
                  <div className="relative hidden h-36 w-36 flex-shrink-0 overflow-hidden rounded-2xl sm:block lg:h-44 lg:w-44">
                    <Image
                      src={SERVICE_IMAGES[cat.slug]}
                      alt={cat.name}
                      fill
                      sizes="176px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Middle: content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="np-700 text-2xl text-soil mb-2">
                      {cat.name}
                    </h2>
                    <p className="font-body text-base text-soil/60 italic mb-3 leading-snug">
                      {cat.poetic}
                    </p>
                    <p className="font-body text-sm text-soil/70 leading-relaxed mb-5 max-w-xl">
                      {cat.description}
                    </p>

                    {/* Prestations list */}
                    <ul className="flex flex-wrap gap-2">
                      {cat.prestations.map((slug) => (
                        <li key={slug}>
                          <Link
                            href={`/prestations/${slug}`}
                            className="inline-block font-body text-xs text-soil/60 border border-soil/15 rounded-full px-3 py-1 hover:border-soil/40 hover:text-soil transition-colors duration-200"
                          >
                            {getPrestationName(slug)}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: CTA */}
                  <div className="flex-shrink-0 hidden md:flex items-start pt-1">
                    <Link
                      href={`/services/${cat.slug}`}
                      className="btn btn-outline-soil whitespace-nowrap"
                    >
                      Voir les prestations &rarr;
                    </Link>
                  </div>
                </article>

                {/* Mobile CTA */}
                <div className="md:hidden px-8 pb-8 -mt-2">
                  <Link
                    href={`/services/${cat.slug}`}
                    className="btn btn-outline-soil"
                  >
                    Voir les prestations &rarr;
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <CTABanner
        title="Pas sûr par où commencer ?"
        subtitle="L'entretien de brief est là pour ça. On définit ensemble ce dont vous avez vraiment besoin, sans engagement."
        outerBg="snow"
      />
    </SiteLayout>
  )
}

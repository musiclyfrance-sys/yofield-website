import HeroService from '@/components/services/shared/HeroService'
import ValueBullets from '@/components/services/shared/ValueBullets'
import ProcessTimeline from '@/components/services/shared/ProcessTimeline'
import ClientTable from '@/components/services/shared/ClientTable'
import CTABanner from '@/components/services/shared/CTABanner'
import FAQAccordion from '@/components/services/shared/FAQAccordion'
import RelatedLinks from '@/components/services/shared/RelatedLinks'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { splitProse } from '@/lib/text'
import type { Prestation, ServiceCategory } from '@/types'

/* Category universe images (same set as the homepage showcase) */
const SERVICE_IMAGES: Record<string, string> = {
  'branding-identite-de-marque': '/images/services/branding.jpg',
  'creation-sites-applications': '/images/services/sites-web.jpg',
  'communication-digitale-acquisition': '/images/services/communication.jpg',
  'production-contenus': '/images/services/contenus.jpg',
  'intelligence-artificielle-automatisation': '/images/services/ia.jpg',
}

interface ServicesAtomicTemplateProps {
  prestation: Prestation
  parentCategory: ServiceCategory
}

export default function ServicesAtomicTemplate({
  prestation,
  parentCategory,
}: ServicesAtomicTemplateProps) {
  const heroImage = SERVICE_IMAGES[parentCategory.slug]

  return (
    <>
      {/* 1. Hero — text + parent universe visual */}
      <HeroService
        eyebrow={parentCategory.nameShort}
        title={prestation.nameFull}
        subtitle={prestation.description}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: parentCategory.name, href: `/services/${parentCategory.slug}` },
          { label: prestation.name, href: `/prestations/${prestation.slug}` },
        ]}
        ctaPrimary={{ label: 'Démarrer ce projet', href: '/contact' }}
        ctaSecondary={{ label: 'Le studio', href: '/le-studio' }}
        colorAccent={parentCategory.color}
        image={
          heroImage
            ? { src: heroImage, alt: parentCategory.name, caption: parentCategory.poetic }
            : undefined
        }
      />

      {/* 2. Long description — editorial two-column */}
      <section className="section-padding bg-snow" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-cols-1 gap-8 border-t border-soil/[0.08] pt-14 lg:grid-cols-[300px_1fr] lg:gap-16 lg:pt-20">
            <ScrollReveal>
              <div className="lg:sticky lg:top-28">
                <p className="eyebrow mb-3 text-soil/50">Le détail</p>
                <h2 className="np-700 text-2xl leading-snug text-soil md:text-3xl">
                  {prestation.name}, concrètement.
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="max-w-2xl space-y-5">
                {splitProse(prestation.longDescription).map((p, i) => (
                  <p key={i} className="font-body text-base leading-relaxed text-soil/75 md:text-lg">
                    {p}
                  </p>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Value bullets */}
      <ValueBullets promises={prestation.promises} />

      {/* 4. Process timeline */}
      <ProcessTimeline steps={prestation.steps} title="Comment on travaille" />

      {/* 5. Client table */}
      <ClientTable prestationSlug={prestation.slug} title="Cas concrets" />

      {/* 6. FAQ */}
      <FAQAccordion faq={prestation.faq} />

      {/* 7. Related links */}
      <RelatedLinks
        currentSlug={prestation.slug}
        currentType="prestation"
        parentCategorySlug={parentCategory.slug}
      />

      {/* 8. Closing CTA */}
      <CTABanner
        title="Vous avez un projet en tête ?"
        subtitle="On prend le temps de comprendre avant de proposer quoi que ce soit. Premier échange gratuit, réponse sous 48 heures."
        ctaLabel="Parler de votre projet"
        outerBg="mist"
      />
    </>
  )
}

import HeroService from '@/components/services/shared/HeroService'
import ValueBullets from '@/components/services/shared/ValueBullets'
import ProcessTimeline from '@/components/services/shared/ProcessTimeline'
import ClientTable from '@/components/services/shared/ClientTable'
import CTABanner from '@/components/services/shared/CTABanner'
import FAQAccordion from '@/components/services/shared/FAQAccordion'
import RelatedLinks from '@/components/services/shared/RelatedLinks'
import type { Prestation, ServiceCategory } from '@/types'

interface ServicesAtomicTemplateProps {
  prestation: Prestation
  parentCategory: ServiceCategory
}

export default function ServicesAtomicTemplate({
  prestation,
  parentCategory,
}: ServicesAtomicTemplateProps) {
  return (
    <>
      {/* 1. Hero */}
      <HeroService
        eyebrow={`${parentCategory.num} — ${parentCategory.nameShort}`}
        title={prestation.nameFull}
        subtitle={prestation.description}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: parentCategory.name, href: `/services/${parentCategory.slug}` },
          { label: prestation.name, href: `/prestations/${prestation.slug}` },
        ]}
        ctaPrimary={{ label: 'Démarrer ce projet', href: '/contact' }}
        ctaSecondary={{ label: "Voir l'approche", href: '/approche' }}
        colorAccent={parentCategory.color}
      />

      {/* 2. Long description */}
      <section className="section-padding bg-snow">
        <div className="container">
          <p className="eyebrow mb-4 text-soil/50">Le détail</p>
          <h2 className="np-700 mb-6 text-3xl text-soil md:text-4xl">
            {prestation.nameFull}
          </h2>
          <p className="font-body max-w-3xl text-base leading-relaxed text-soil/75 md:text-lg">
            {prestation.longDescription}
          </p>
        </div>
      </section>

      {/* 3. Value bullets */}
      <ValueBullets promises={prestation.promises} />

      {/* 4. Process timeline */}
      <ProcessTimeline steps={prestation.steps} title="Comment on travaille" />

      {/* 5. Client table */}
      <ClientTable prestationSlug={prestation.slug} title="Cas concrets" />

      {/* 6. CTA banner */}
      <CTABanner
        variant="citron"
        title="Vous avez un projet en tête ?"
        subtitle="On prend le temps de comprendre avant de proposer quoi que ce soit."
        ctaLabel="Parler de votre projet"
        ctaHref="/contact"
      />

      {/* 7. SEO long text */}
      <section className="section-padding bg-mist">
        <div className="container">
          <div className="prose prose-soil max-w-3xl mx-auto">
            <article>
              <h2>Tout savoir sur {prestation.nameFull}</h2>
              <p>{prestation.longDescription}</p>
            </article>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQAccordion faq={prestation.faq} />

      {/* 9. Related links */}
      <RelatedLinks
        currentSlug={prestation.slug}
        currentType="prestation"
        parentCategorySlug={parentCategory.slug}
      />
    </>
  )
}

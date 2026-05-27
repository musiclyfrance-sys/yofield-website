import HeroService from '@/components/services/shared/HeroService'
import ValueBullets from '@/components/services/shared/ValueBullets'
import ClientTable from '@/components/services/shared/ClientTable'
import CTABanner from '@/components/services/shared/CTABanner'
import FAQAccordion from '@/components/services/shared/FAQAccordion'
import RelatedLinks from '@/components/services/shared/RelatedLinks'
import SubServiceCard from '@/components/services/shared/SubServiceCard'
import type { Prestation, ServiceCategory } from '@/types'

interface ServicesCategoryTemplateProps {
  category: ServiceCategory
  categoryPrestations: Prestation[]
}

export default function ServicesCategoryTemplate({
  category,
  categoryPrestations,
}: ServicesCategoryTemplateProps) {
  const genericFaq = [
    {
      question: `Combien coûte une prestation de ${category.nameShort} ?`,
      answer:
        'Les tarifs varient selon le périmètre et la complexité du projet. On commence toujours par un échange gratuit pour comprendre vos besoins avant de vous proposer un devis précis.',
    },
    {
      question: `Quel est le délai pour une mission de ${category.nameShort} ?`,
      answer:
        'On travaille en cycle court : la majorité de nos missions durent entre 3 et 8 semaines. Le délai précis dépend du périmètre défini lors du brief initial.',
    },
    {
      question: 'Travaillez-vous avec des entreprises de toutes tailles ?',
      answer:
        'On travaille principalement avec des PME, des startups en croissance et des fondateurs qui construisent leur marque. La taille importe moins que la clarté de vos objectifs.',
    },
  ]

  return (
    <>
      {/* 1. Hero */}
      <HeroService
        eyebrow={`${category.num} — Services`}
        title={category.name}
        subtitle={category.description}
        breadcrumbs={[
          { label: 'Accueil', href: '/' },
          { label: 'Services', href: '/services' },
          { label: category.name, href: `/services/${category.slug}` },
        ]}
        ctaPrimary={{ label: 'Démarrer un projet', href: '/contact' }}
        ctaSecondary={{ label: 'Toutes nos prestations', href: '#prestations' }}
        colorAccent={category.color}
      />

      {/* 2. Long description */}
      <section className="section-padding bg-snow">
        <div className="container">
          <p className="eyebrow mb-4 text-soil/50">Le détail</p>
          <h2 className="np-700 mb-6 text-3xl text-soil md:text-4xl">
            {category.name}
          </h2>
          <p className="font-body max-w-3xl text-base leading-relaxed text-soil/75 md:text-lg">
            {category.longDescription}
          </p>
        </div>
      </section>

      {/* 3. Value bullets */}
      <ValueBullets promises={category.promises} title="Ce que vous obtenez" />

      {/* 4. Sub-service card grid */}
      <section id="prestations" className="section-padding bg-soil">
        <div className="container">
          <p className="eyebrow mb-4 text-snow/50">Nos prestations</p>
          <h2 className="np-700 mb-12 text-3xl text-snow">
            Ce qu'on fait concrètement
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categoryPrestations.map((p) => (
              <SubServiceCard key={p.slug} prestation={p} />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client table */}
      <ClientTable categorySlug={category.slug} />

      {/* 6. CTA banner */}
      <CTABanner
        variant="pine"
        title="Prêt à construire votre marque ?"
        subtitle="Du brief au lancement public, en cycle court."
        ctaLabel="Parler de votre projet"
        ctaHref="/contact"
      />

      {/* 7. SEO long text */}
      <section className="section-padding bg-mist">
        <div className="container">
          <div className="prose prose-soil max-w-3xl mx-auto">
            <article>
              <h2>Tout savoir sur {category.name} avec Yofield</h2>
              <p>{category.longDescription}</p>
            </article>
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <FAQAccordion faq={genericFaq} />

      {/* 9. Related links */}
      <RelatedLinks currentSlug={category.slug} currentType="category" />
    </>
  )
}

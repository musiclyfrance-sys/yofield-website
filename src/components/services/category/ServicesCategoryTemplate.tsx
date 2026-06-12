import HeroService from '@/components/services/shared/HeroService'
import ValueBullets from '@/components/services/shared/ValueBullets'
import ClientTable from '@/components/services/shared/ClientTable'
import CTABanner from '@/components/services/shared/CTABanner'
import FAQAccordion from '@/components/services/shared/FAQAccordion'
import RelatedLinks from '@/components/services/shared/RelatedLinks'
import SubServiceCard from '@/components/services/shared/SubServiceCard'
import ScrollReveal from '@/components/animations/ScrollReveal'
import type { Prestation, ServiceCategory } from '@/types'

/* Category universe images (same set as the homepage showcase) */
const SERVICE_IMAGES: Record<string, string> = {
  'branding-identite-de-marque': '/images/services/branding.jpg',
  'creation-sites-applications': '/images/services/sites-web.jpg',
  'communication-digitale-acquisition': '/images/services/communication.jpg',
  'production-contenus': '/images/services/contenus.jpg',
  'intelligence-artificielle-automatisation': '/images/services/ia.jpg',
}

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

  const heroImage = SERVICE_IMAGES[category.slug]

  return (
    <>
      {/* 1. Hero — text + category universe visual */}
      <HeroService
        eyebrow="Services"
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
        image={
          heroImage
            ? { src: heroImage, alt: category.name, caption: category.poetic }
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
                  Pourquoi ça compte.
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="font-body max-w-2xl text-base leading-relaxed text-soil/75 md:text-lg">
                {category.longDescription}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Value bullets */}
      <ValueBullets promises={category.promises} title="Ce que vous obtenez" />

      {/* 4. Sub-service card grid */}
      <section id="prestations" className="section-padding bg-soil">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow mb-3 text-snow/50">Nos prestations</p>
            <h2 className="np-800 mb-12 text-3xl text-snow md:text-4xl">
              Ce qu&apos;on fait concrètement.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            {categoryPrestations.map((p, i) => (
              <ScrollReveal key={p.slug} delay={0.05 * i} className="h-full">
                <SubServiceCard prestation={p} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client table */}
      <ClientTable categorySlug={category.slug} />

      {/* 6. FAQ */}
      <FAQAccordion faq={genericFaq} />

      {/* 7. Related links */}
      <RelatedLinks currentSlug={category.slug} currentType="category" />

      {/* 8. Closing CTA */}
      <CTABanner
        title="Prêt à construire votre marque ?"
        subtitle="Du brief au lancement public, en cycle court. Racontez-nous où vous en êtes, on vous dit comment on peut aider."
        ctaLabel="Parler de votre projet"
        outerBg="mist"
      />
    </>
  )
}

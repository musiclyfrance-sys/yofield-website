import Link from 'next/link'
import Image from 'next/image'
import SiteLayout from '@/components/layout/Navigation'
import HeroSection from '@/components/homepage/HeroSection'
import ApproachTimeline from '@/components/homepage/ApproachTimeline'
import { serviceCategories } from '@/data/services'
import { getFeaturedCas } from '@/data/cas'
import { buildMetadata } from '@/lib/metadata'
import { organizationSchema, websiteSchema } from '@/lib/schema'

export const metadata = buildMetadata({
  title: 'Yofield — Studio créatif et digital',
  description:
    "Yofield assemble pour les fondateurs une marque complète : identité, site, communication, contenus et IA. Du brief au lancement public, en cycle court.",
  canonical: '/',
})

/* ─── Image mapping for service cards ─── */
const serviceImages: Record<string, string> = {
  'branding-identite-de-marque': '/images/services/branding.jpg',
  'creation-sites-applications': '/images/services/sites-web.jpg',
  'communication-digitale-acquisition': '/images/services/communication.jpg',
  'production-contenus': '/images/services/contenus.jpg',
  'intelligence-artificielle-automatisation': '/images/services/ia.jpg',
}

/* ─── Static blog teasers ─── */
const blogTeasers = [
  {
    label: 'Branding',
    title: 'Pourquoi votre logo n\'est pas votre marque',
    date: 'Mai 2025',
    href: '/blog/logo-vs-marque',
  },
  {
    label: 'Web',
    title: 'Les 5 erreurs qui plombent le SEO d\'un site vitrine au lancement',
    date: 'Avril 2025',
    href: '/blog/erreurs-seo-lancement',
  },
  {
    label: 'IA',
    title: 'Ce qu\'un agent IA peut réellement faire pour une TPE en 2025',
    date: 'Avril 2025',
    href: '/blog/agents-ia-tpe-2025',
  },
]

export default function HomePage() {
  const featuredCas = getFeaturedCas().slice(0, 3)

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema(), websiteSchema()],
  }

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
      />

      {/* ─── 1. HERO ──────────────────────────────────────────────── */}
      <HeroSection />

      {/* ─── 2. MANIFESTO ─────────────────────────────────────────── */}
      <section className="bg-snow py-24 md:py-36">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow text-soil mb-8">Le studio</p>
            <p className="np-700 text-3xl md:text-4xl text-soil leading-[1.2] mb-8">
              On ne prend qu'un client par catégorie de marché à la fois.
            </p>
            <p className="font-body text-base text-soil/65 leading-relaxed max-w-2xl mb-10">
              Parce qu'on ne peut pas construire la meilleure version d'une marque
              si on travaille simultanément pour son concurrent direct. Le cycle court n'est pas
              un argument de vente. C'est la seule façon de livrer quelque chose de bon.
            </p>
            <Link
              href="/le-studio"
              className="font-body text-sm font-medium text-soil hover:text-pine underline underline-offset-4 transition-colors duration-200"
            >
              En savoir plus sur le studio →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 3. SERVICES GRID ─────────────────────────────────────── */}
      <section className="bg-soil py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-snow mb-4" style={{ opacity: 0.4 }}>
                05 piliers
              </p>
              <h2 className="np-800 text-4xl md:text-5xl text-snow leading-[1.1]">
                Tout ce dont une marque<br className="hidden md:block" /> a besoin.
              </h2>
            </div>
            <Link
              href="/services"
              className="font-body text-sm text-snow/50 hover:text-snow underline underline-offset-4 transition-colors duration-200 self-start md:self-end"
            >
              Voir tous les services →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {serviceCategories.map((cat, i) => {
              const isLastOdd =
                i === serviceCategories.length - 1 &&
                serviceCategories.length % 3 !== 0
              const imgSrc = serviceImages[cat.slug]

              return (
                <Link
                  key={cat.slug}
                  href={`/services/${cat.slug}`}
                  className={[
                    'group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300',
                    'ring-1 ring-snow/[0.08] hover:ring-snow/20 hover:-translate-y-1',
                    isLastOdd ? 'md:col-span-2 xl:col-span-1' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ minHeight: '280px' }}
                >
                  {/* Image */}
                  {imgSrc && (
                    <div className="relative flex-shrink-0 overflow-hidden" style={{ height: '160px' }}>
                      <Image
                        src={imgSrc}
                        alt={cat.name}
                        fill
                        sizes="(max-width:768px) 100vw,(max-width:1280px) 50vw,33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-soil/40" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex flex-col flex-1 justify-between p-5 bg-snow/[0.05]">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="gm text-xs text-snow/30">{cat.num}</span>
                        <span
                          className="np text-3xl text-snow/15 leading-none"
                          aria-hidden="true"
                        >
                          {cat.icon}
                        </span>
                      </div>
                      <p className="np-700 text-base text-snow mb-2">{cat.name}</p>
                      <p className="font-body text-xs text-snow/55 leading-relaxed line-clamp-2">
                        {cat.description}
                      </p>
                    </div>
                    <p className="font-body text-xs text-snow/30 mt-5 transition-colors duration-200 group-hover:text-snow/60">
                      Découvrir →
                    </p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── 4. APPROCHE TIMELINE ─────────────────────────────────── */}
      <ApproachTimeline />

      {/* ─── 5. CAS CLIENTS ───────────────────────────────────────── */}
      <section className="bg-snow py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-soil mb-4">Cas concrets</p>
              <h2 className="np-800 text-4xl md:text-5xl text-soil leading-[1.1]">
                Des marques construites,<br className="hidden md:block" /> des résultats mesurables.
              </h2>
            </div>
            <Link
              href="/cas"
              className="font-body text-sm text-soil/50 hover:text-soil underline underline-offset-4 transition-colors duration-200 self-start md:self-end"
            >
              Tous les cas →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {featuredCas.map((cas) => (
              <Link
                key={cas.slug}
                href={`/cas/${cas.slug}`}
                className="group flex flex-col rounded-2xl overflow-hidden ring-1 ring-soil/[0.08] hover:ring-soil/20 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Cover image */}
                <div className="relative overflow-hidden flex-shrink-0" style={{ height: '200px' }}>
                  <Image
                    src={cas.coverImage}
                    alt={cas.coverAlt}
                    fill
                    sizes="(max-width:768px) 100vw,33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <p className="eyebrow text-soil mb-3">
                    {cas.client}&nbsp;&nbsp;·&nbsp;&nbsp;{cas.year}
                  </p>
                  <h3 className="np-700 text-base text-soil mb-3 leading-snug flex-1">
                    {cas.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {cas.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-xs text-soil/60 bg-mist px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="font-body text-xs text-soil/40 mt-4 transition-colors duration-200 group-hover:text-pine">
                    Lire le cas →
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6. CITATION FORTE ────────────────────────────────────── */}
      <section className="bg-pine py-24 md:py-36">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="eyebrow text-snow mb-10" style={{ opacity: 0.4 }}>
              Ce en quoi on croit
            </p>
            <blockquote>
              <p className="np-700 text-3xl md:text-5xl text-snow leading-[1.2] mb-10">
                Une marque qui sait ce qu'elle est n'a pas besoin de crier pour être entendue.
              </p>
              <footer className="font-body text-sm text-snow/50">
                Yofield Studio, 2025
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* ─── 7. BLOG TEASER ───────────────────────────────────────── */}
      <section className="bg-snow py-24 md:py-32">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow text-soil mb-4">Ressources</p>
              <h2 className="np-800 text-4xl md:text-5xl text-soil leading-[1.1]">
                Ce qu'on apprend<br className="hidden md:block" /> en faisant.
              </h2>
            </div>
            <Link
              href="/blog"
              className="font-body text-sm text-soil/50 hover:text-soil underline underline-offset-4 transition-colors duration-200 self-start md:self-end"
            >
              Tous les articles →
            </Link>
          </div>

          <div className="flex flex-col">
            {blogTeasers.map((post, i) => (
              <div key={post.href}>
                {i > 0 && (
                  <div className="divider-soil" />
                )}
                <Link
                  href={post.href}
                  className="group flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-8 transition-opacity duration-200 hover:opacity-70"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 flex-1 min-w-0">
                    <span className="eyebrow text-soil flex-shrink-0">{post.label}</span>
                    <h3 className="np-700 text-lg text-soil leading-snug">{post.title}</h3>
                  </div>
                  <div className="flex items-center gap-6 flex-shrink-0">
                    <span className="font-body text-sm text-soil/40">{post.date}</span>
                    <span className="font-body text-sm text-soil/40 group-hover:text-pine transition-colors duration-200">
                      Lire →
                    </span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. CTA FINAL ─────────────────────────────────────────── */}
      <section className="bg-citron py-32 md:py-40">
        <div className="container">
          <div className="max-w-4xl">
            <p className="eyebrow text-soil mb-8">Prochaine étape</p>
            <h2 className="np-900 text-5xl md:text-7xl text-soil leading-none mb-8">
              Votre marque,<br className="hidden md:block" /> construite.
            </h2>
            <p className="font-body text-lg text-soil/65 max-w-lg leading-relaxed mb-12">
              Dites-nous ce que vous construisez. On vous dit comment on peut aider.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <Link href="/contact" className="btn btn-outline-soil">
                Démarrer la conversation
              </Link>
              <Link href="/services" className="btn btn-outline-soil" style={{ opacity: 0.6 }}>
                Voir les services
              </Link>
            </div>
            <p className="font-body text-sm text-soil/50 mt-10">
              Ou directement par email :{' '}
              <a
                href="mailto:hello@yofield.com"
                className="underline underline-offset-4 hover:text-soil transition-colors duration-200"
              >
                hello@yofield.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

import Link from 'next/link'
import SiteLayout from '@/components/layout/Navigation'
import ScrollReveal from '@/components/animations/ScrollReveal'
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

      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="min-h-screen bg-soil flex items-center relative overflow-hidden">
        <div className="container w-full py-32 md:py-0">
          <div className="max-w-5xl">
            {/* Eyebrow */}
            <p className="eyebrow text-snow mb-8" style={{ opacity: 0.45 }}>
              Studio créatif et digital
            </p>

            {/* Locked headline */}
            <h1 className="np-900 text-5xl md:text-7xl lg:text-8xl text-snow mb-8 leading-none">
              <span className="block">Là où votre marque</span>
              <span className="block">trouve sa forme,</span>
              <span className="block">sa voix</span>
              <span className="block">et son terrain.</span>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-lg text-snow/65 max-w-lg mb-10 leading-relaxed">
              Branding, sites web, acquisition, contenus et IA.
              <br />
              Du brief au lancement public, sans intermédiaires.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="btn btn-citron">
                Démarrer un projet
              </Link>
              <Link href="/services" className="btn btn-outline-snow">
                Voir nos services
              </Link>
            </div>
          </div>

          {/* Service labels — bottom of hero */}
          <div className="mt-24 md:mt-32 flex flex-wrap items-center gap-0">
            {serviceCategories.map((cat, i) => (
              <Link
                key={cat.slug}
                href={`/services/${cat.slug}`}
                className="flex items-center group"
              >
                {i > 0 && (
                  <span
                    className="mx-4 md:mx-6 h-3 w-px bg-snow"
                    style={{ opacity: 0.2 }}
                    aria-hidden="true"
                  />
                )}
                <span className="eyebrow text-snow transition-opacity duration-200 group-hover:opacity-60"
                  style={{ opacity: 0.3 }}>
                  {cat.num}&nbsp;&nbsp;{cat.nameShort}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MANIFESTO ────────────────────────────────────────────── */}
      <section className="section-padding bg-snow">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow text-soil mb-6">Notre approche</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <blockquote className="np-700 text-3xl md:text-4xl text-soil max-w-3xl mb-8 leading-tight">
              "On ne prend qu'un client par catégorie de marché à la fois."
            </blockquote>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-base text-soil/65 max-w-2xl leading-relaxed mb-8">
              Parce qu'on ne peut pas construire la meilleure version d'une marque si on
              travaille simultanément pour son concurrent. Le cycle court n'est pas un
              argument de vente, c'est la seule façon de livrer quelque chose de bon.
            </p>

            <Link
              href="/approche"
              className="font-body text-sm font-medium text-pine hover:underline underline-offset-4 transition-all"
            >
              Lire notre méthode →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────────────────────────── */}
      <section className="section-padding bg-soil">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow text-snow mb-6" style={{ opacity: 0.45 }}>
              05 piliers
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="np-800 text-4xl md:text-5xl text-snow mb-12">
              Tout ce dont une marque a besoin.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {serviceCategories.map((cat, i) => {
              const isLastOdd =
                i === serviceCategories.length - 1 &&
                serviceCategories.length % 3 !== 0

              return (
                <ScrollReveal key={cat.slug} delay={0.05 * i}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className={[
                      'group flex flex-col justify-between rounded-2xl p-6 border transition-colors duration-200 h-full min-h-[220px]',
                      'bg-snow/[0.05] border-snow/10 hover:bg-snow/[0.08]',
                      isLastOdd ? 'md:col-span-2 xl:col-span-1' : '',
                    ]
                      .filter(Boolean)
                      .join(' ')}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <span className="gm text-xs text-snow/30">{cat.num}</span>
                        <span className="np text-4xl text-snow/20 leading-none" aria-hidden="true">
                          {cat.icon}
                        </span>
                      </div>
                      <p className="np-700 text-xl text-snow mt-2 mb-3">{cat.name}</p>
                      <p className="font-body text-sm text-snow/60 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                    <p className="font-body text-xs text-snow/30 mt-6 transition-colors duration-200 group-hover:text-snow/50">
                      Découvrir →
                    </p>
                  </Link>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── FEATURED CAS ─────────────────────────────────────────── */}
      <section className="section-padding bg-snow">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow text-soil mb-6">Cas concrets</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="np-700 text-3xl md:text-4xl text-soil mb-12">
              Des projets réels, des résultats mesurables.
            </h2>
          </ScrollReveal>

          <div className="flex flex-col">
            {featuredCas.map((cas, i) => (
              <div key={cas.slug}>
                {i > 0 && <div className="divider-soil my-0" />}
                <ScrollReveal delay={0.05 * i}>
                  <div className="flex flex-col md:flex-row md:items-start gap-6 py-10">
                    {/* Left */}
                    <div className="flex-1 min-w-0">
                      <p className="eyebrow text-soil mb-4">
                        {cas.client}&nbsp;&nbsp;·&nbsp;&nbsp;{cas.sector}&nbsp;&nbsp;·&nbsp;&nbsp;{cas.year}
                      </p>
                      <h3 className="np-700 text-xl text-soil mb-3">{cas.title}</h3>
                      <p className="font-body text-sm text-soil/65 leading-relaxed line-clamp-2 max-w-xl mb-4">
                        {cas.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cas.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="font-body text-xs text-soil/70 bg-mist px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right */}
                    <div className="md:flex-shrink-0 md:w-40 flex md:justify-end md:items-start pt-1">
                      <Link
                        href={`/cas/${cas.slug}`}
                        className="font-body text-sm font-medium text-pine hover:underline underline-offset-4 transition-all whitespace-nowrap"
                      >
                        Lire le cas →
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>

          <div className="divider-soil mt-0 mb-10" />

          <ScrollReveal>
            <Link
              href="/cas"
              className="font-body text-sm font-medium text-soil hover:underline underline-offset-4 transition-all"
            >
              Voir tous les cas →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── APPROACH TEASER ──────────────────────────────────────── */}
      <section className="section-padding bg-mist">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow text-soil mb-6">La méthode</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="np-700 text-3xl text-soil mb-10">
              Un cycle court, une livraison directe.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap gap-8 mb-10">
              {[
                { num: '01', label: 'Brief' },
                { num: '02', label: 'Conception' },
                { num: '03', label: 'Production' },
                { num: '04', label: 'Lancement' },
              ].map((step) => (
                <div key={step.num} className="flex items-baseline gap-2">
                  <span className="gm text-xs text-soil/40">{step.num}</span>
                  <span className="font-body text-sm text-soil font-medium">{step.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-base text-soil/65 max-w-2xl leading-relaxed mb-10">
              Pas de réunion de validation toutes les semaines. Pas de chef de projet entre
              vous et les personnes qui font le travail. Un brief, un calendrier, une
              livraison.
            </p>

            <Link href="/approche" className="btn btn-outline-soil">
              Comprendre notre approche
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── FINAL CTA ────────────────────────────────────────────── */}
      <section className="py-32 bg-citron text-soil">
        <div className="container">
          <ScrollReveal>
            <h2 className="np-900 text-5xl md:text-7xl text-soil mb-6 leading-none">
              Votre marque,<br className="hidden md:block" /> construite.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="font-body text-base text-soil/70 max-w-lg mb-10 leading-relaxed">
              Dites-nous ce que vous construisez. On vous dit comment on peut aider.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Link href="/contact" className="btn btn-outline-soil">
                Démarrer la conversation
              </Link>
            </div>

            <p className="font-body text-sm text-soil/60 mt-8">
              Ou écrire directement à{' '}
              <a
                href="mailto:hello@yofield.com"
                className="underline underline-offset-4 hover:text-soil transition-colors"
              >
                hello@yofield.com
              </a>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  )
}

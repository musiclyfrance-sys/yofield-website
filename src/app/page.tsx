import Link from 'next/link'
import Image from 'next/image'
import SiteLayout from '@/components/layout/Navigation'
import HeroFull from '@/components/homepage/HeroFull'
import ApproachTimeline from '@/components/homepage/ApproachTimeline'
import ScrollMarquee from '@/components/animations/ScrollMarquee'
import MagneticButton from '@/components/animations/MagneticButton'
import RevealText from '@/components/animations/RevealText'
import ServicesShowcase from '@/components/homepage/ServicesShowcase'
import { ClientLogo } from '@/components/cas/ClientLogos'
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

      {/* LCP: preload hero frame 0 at highest priority so it paints instantly */}
      <link
        rel="preload"
        as="image"
        href="/videos/frames/frame_0001.webp"
        type="image/webp"
        fetchPriority="high"
      />

      {/* ─── 1+2. HERO — compact composition: text over video canvas ── */}
      <HeroFull />

      {/* ─── 3. MANIFESTO ─────────────────────────────────────────── */}
      <section className="bg-snow py-24 md:py-36">
        <div className="container">
          <div className="max-w-3xl">
            <p className="eyebrow text-soil mb-8">Le studio</p>
            <RevealText
              text="On ne prend qu'un client par catégorie de marché à la fois."
              as="p"
              className="np-700 text-3xl md:text-4xl text-soil leading-[1.2] mb-8 block"
              stagger={0.025}
              duration={0.5}
            />
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

      {/* ─── SERVICES — interactive constellation ─────────────────── */}
      <ServicesShowcase />

      {/* ─── MARQUEE ──────────────────────────────────────────────── */}
      <ScrollMarquee />

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
                  <ClientLogo
                    slug={cas.slug}
                    name={cas.client}
                    markClassName="h-7 w-7 text-soil transition-colors duration-300 group-hover:text-pine"
                    nameClassName="text-base text-soil"
                    className="mb-3 gap-2.5"
                  />
                  <h3 className="np-700 text-sm text-soil/70 mb-3 leading-snug flex-1">
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

      {/* ─── CTA FINAL ────────────────────────────────────────────── */}
      <section className="bg-citron py-32 md:py-40">
        <div className="container">
          <div className="max-w-4xl">
            <p className="eyebrow text-soil mb-8">Prochaine étape</p>
            <h2 className="np-900 text-4xl md:text-7xl text-soil leading-none mb-8">
              Votre marque,<br className="hidden md:block" /> construite.
            </h2>
            <p className="font-body text-lg text-soil/65 max-w-lg leading-relaxed mb-12">
              Dites-nous ce que vous construisez. On vous dit comment on peut aider.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <MagneticButton>
                <Link href="/contact" className="btn btn-outline-soil">
                  Démarrer la conversation
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/services" className="btn btn-outline-soil" style={{ opacity: 0.6 }}>
                  Voir les services
                </Link>
              </MagneticButton>
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

import Link from 'next/link'
import { casStudies } from '@/data/cas'
import SiteLayout from '@/components/layout/Navigation'
import { buildMetadata } from '@/lib/metadata'
import { ClientLogo } from '@/components/cas/ClientLogos'
import ArrowCircle from '@/components/ui/ArrowCircle'

export const metadata = buildMetadata({
  title: 'Cas clients · Studio Yofield',
  description:
    "Les projets réalisés par Yofield : branding, sites web, automatisation IA, production de contenus. Des résultats mesurables sur des cas concrets.",
  canonical: '/cas',
})

export default function CasPage() {
  return (
    <SiteLayout>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="section-padding bg-soil">
        <div className="container">
          <p className="eyebrow text-snow mb-6" style={{ opacity: 0.45 }}>Cas concrets</p>
          <h1 className="np-900 text-5xl md:text-7xl text-snow mb-6">
            Des projets réels.
          </h1>
          <p className="font-body text-lg leading-relaxed max-w-2xl" style={{ color: 'rgba(250,250,247,0.65)' }}>
            Pas de maquettes fictives, pas de clients imaginaires. Ce qu&apos;on a construit, avec qui, et ce que ça a produit comme résultats.
          </p>
        </div>
      </section>

      {/* ── CAS LIST ─────────────────────────────────── */}
      <section className="section-padding bg-snow">
        <div className="container">
          <p className="np-700 text-2xl text-soil mb-12">
            {casStudies.length} cas réalisés
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {casStudies.map((cas) => (
              <Link
                key={cas.slug}
                href={`/cas/${cas.slug}`}
                className="group flex flex-col rounded-2xl border border-soil/[0.08] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-pine/30"
              >
                {/* Logo signature */}
                <ClientLogo
                  slug={cas.slug}
                  name={cas.client}
                  markClassName="h-10 w-10 text-soil transition-colors duration-300 group-hover:text-pine"
                  nameClassName="text-xl text-soil"
                  className="mb-6 gap-3"
                />

                {/* Sector · year */}
                <div className="mb-3 flex items-center justify-between">
                  <p className="eyebrow text-soil/50">{cas.sector}</p>
                  <span className="gm text-sm text-soil/40">{cas.year}</span>
                </div>

                {/* Title */}
                <h2 className="np-700 mb-2 text-xl text-soil">{cas.title}</h2>

                {/* Description */}
                <p className="line-clamp-2 flex-1 font-body text-sm leading-relaxed text-soil/65">
                  {cas.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {cas.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="rounded-full bg-mist px-3 py-1 font-body text-xs text-soil/70">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="font-body text-sm text-soil/45 transition-colors duration-200 group-hover:text-soil/70">
                    Lire le cas complet
                  </span>
                  <ArrowCircle size="sm" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="section-padding bg-citron">
        <div className="container text-center">
          <h2 className="np-800 text-4xl text-soil mb-8">
            Votre projet sera peut-être le prochain.
          </h2>
          <Link href="/contact" className="btn btn-soil">
            Parlons-en
          </Link>
        </div>
      </section>

    </SiteLayout>
  )
}

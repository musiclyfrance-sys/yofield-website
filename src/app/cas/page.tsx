import Link from 'next/link'
import { casStudies } from '@/data/cas'
import SiteLayout from '@/components/layout/Navigation'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Cas clients — Studio Yofield',
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
              <article
                key={cas.slug}
                className="bg-snow rounded-2xl p-8 border border-soil/[0.08] hover:border-soil/20 transition-colors duration-200"
              >
                {/* Top row */}
                <div className="flex items-start justify-between mb-1">
                  <span className="np-700 text-soil">{cas.client}</span>
                  <span className="gm text-sm" style={{ color: 'rgba(15,15,14,0.40)' }}>{cas.year}</span>
                </div>

                {/* Sector */}
                <p className="eyebrow" style={{ color: 'rgba(15,15,14,0.50)' }}>{cas.sector}</p>

                {/* Title */}
                <h2 className="np-700 text-xl text-soil mt-3 mb-2">{cas.title}</h2>

                {/* Description */}
                <p
                  className="font-body text-sm leading-relaxed line-clamp-3"
                  style={{ color: 'rgba(15,15,14,0.65)' }}
                >
                  {cas.description}
                </p>

                {/* Tags */}
                <div className="flex gap-2 flex-wrap mt-4">
                  {cas.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-body text-xs px-3 py-1 rounded-full"
                      style={{ backgroundColor: '#EAF3E0', color: 'rgba(15,15,14,0.70)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-6">
                  <Link
                    href={`/cas/${cas.slug}`}
                    className="font-body text-sm text-pine hover:underline"
                  >
                    Lire le cas complet →
                  </Link>
                </div>
              </article>
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
          <Link href="/contact" className="btn btn-outline-soil">
            Parlons-en
          </Link>
        </div>
      </section>

    </SiteLayout>
  )
}

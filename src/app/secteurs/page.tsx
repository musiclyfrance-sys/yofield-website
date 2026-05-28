import Link from 'next/link'
import SiteLayout from '@/components/layout/Navigation'
import { secteurs } from '@/data/secteurs'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Secteurs — Studio créatif et digital | Yofield',
  description:
    "Yofield accompagne les marques dans 6 secteurs clés : banque, sport, tech, santé, restauration et éducation. Identité, sites web, contenus et IA sur mesure.",
  canonical: '/secteurs',
})

export default function SecteursPage() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-soil pt-32 pb-20">
        <div className="container">
          <p className="eyebrow text-snow mb-8" style={{ opacity: 0.4 }}>
            Expertise sectorielle
          </p>
          <h1 className="np-900 text-[clamp(40px,6vw,72px)] text-snow leading-[1.05] max-w-3xl mb-8">
            Une marque forte dans n'importe quel secteur.
          </h1>
          <p className="font-body text-lg text-snow/65 max-w-2xl leading-relaxed">
            Chaque secteur a ses codes, ses contraintes et ses attentes clients. Yofield les connaît
            et les intègre dès le brief pour livrer une identité qui parle vraiment à votre marché.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-snow py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {secteurs.map((secteur) => (
              <Link
                key={secteur.slug}
                href={`/secteurs/${secteur.slug}`}
                className="group flex flex-col justify-between rounded-2xl p-6 ring-1 ring-soil/[0.08] hover:ring-soil/20 hover:-translate-y-1 transition-all duration-300 min-h-[200px]"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <span className="gm text-xs text-soil/30">{secteur.num}</span>
                  </div>
                  <h2 className="np-700 text-xl text-soil mb-3">{secteur.name}</h2>
                  <p className="font-body text-sm text-soil/60 leading-relaxed">
                    {secteur.tagline}
                  </p>
                </div>
                <p className="font-body text-xs text-soil/30 mt-6 group-hover:text-pine transition-colors duration-200">
                  Explorer ce secteur →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-citron py-24">
        <div className="container">
          <h2 className="np-900 text-4xl md:text-6xl text-soil leading-none mb-6">
            Votre secteur,<br className="hidden md:block" /> votre terrain.
          </h2>
          <p className="font-body text-lg text-soil/65 max-w-lg leading-relaxed mb-10">
            On n'est pas généralistes par défaut. On choisit les projets où notre méthode fait
            vraiment la différence.
          </p>
          <Link href="/contact" className="btn btn-outline-soil">
            Démarrer la conversation
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}

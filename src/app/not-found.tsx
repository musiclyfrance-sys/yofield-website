import Link from 'next/link'
import SiteLayout from '@/components/layout/Navigation'

export default function NotFound() {
  return (
    <SiteLayout>
      <section className="bg-soil min-h-screen flex flex-col items-center justify-center section-padding">
        <div className="container flex flex-col items-center text-center">
          <p className="eyebrow text-snow mb-6" style={{ opacity: 0.45 }}>
            Page introuvable
          </p>

          <div
            className="np-900 text-snow select-none pointer-events-none leading-none mb-8"
            style={{
              fontSize: 'clamp(96px, 18vw, 200px)',
              opacity: 0.08,
              letterSpacing: '-0.04em',
            }}
            aria-hidden="true"
          >
            404
          </div>

          <h1 className="np-700 text-2xl text-snow mb-4">
            Cette page n'existe pas.
          </h1>

          <p className="font-body text-base text-snow/60 max-w-sm leading-relaxed mb-10">
            Elle a peut-être été déplacée. Ou vous avez suivi un lien qui ne mène
            nulle part.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link href="/" className="btn btn-citron">
              Retour à l'accueil
            </Link>
            <Link href="/services" className="btn btn-outline-snow">
              Voir nos services
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

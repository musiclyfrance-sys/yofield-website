import Link from 'next/link'
import SiteLayout from '@/components/layout/Navigation'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Blog — Yofield',
  description:
    "Le blog de Yofield : branding, création de sites, SEO, GEO, intelligence artificielle et production de contenus. Des articles concrets pour les fondateurs.",
  canonical: '/blog',
})

export default function BlogPage() {
  return (
    <SiteLayout>
      {/* ─── HERO ──────────────────────────────────────────────── */}
      <section className="section-padding bg-soil min-h-[52vh] flex items-center">
        <div className="container w-full">
          <p className="eyebrow text-snow mb-8" style={{ opacity: 0.45 }}>
            Blog
          </p>
          <h1 className="np-900 text-5xl md:text-7xl text-snow mb-8 leading-none">
            Ce qu'on publie.
          </h1>
          <p className="font-body text-lg text-snow/65 max-w-xl leading-relaxed">
            Des articles sur le branding, le web, le SEO et l'IA. Pas de contenu généré
            à la chaîne, pas de tendances recyclées.
          </p>
        </div>
      </section>

      {/* ─── EMPTY STATE ───────────────────────────────────────── */}
      <section className="section-padding bg-snow">
        <div className="container">
          <div className="max-w-md mx-auto text-center">
            {/* Pen icon */}
            <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-mist mx-auto mb-8">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-pine"
              >
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>

            <h2 className="np-700 text-2xl text-soil mb-4">
              Les premiers articles arrivent.
            </h2>

            <p className="font-body text-base text-soil/65 leading-relaxed mb-10">
              On prépare les premiers articles. En attendant, vous pouvez découvrir
              nos cas clients ou nous contacter directement.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/cas" className="btn btn-outline-soil">
                Voir les cas clients
              </Link>
              <Link
                href="/contact"
                className="font-body text-sm font-medium text-soil/70 hover:text-soil transition-colors underline underline-offset-4"
              >
                Contacter Yofield
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ────────────────────────────────────────────────── */}
      <section className="section-padding bg-citron">
        <div className="container text-center">
          <p className="np-700 text-2xl text-soil mb-4">
            Ne pas manquer les prochains articles ?
          </p>
          <a
            href="mailto:hello@yofield.com"
            className="font-body text-base font-medium text-soil/70 hover:text-soil transition-colors underline underline-offset-4"
          >
            Écrire à hello@yofield.com
          </a>
        </div>
      </section>
    </SiteLayout>
  )
}

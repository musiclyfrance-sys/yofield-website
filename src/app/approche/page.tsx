import Link from 'next/link'
import SiteLayout from '@/components/layout/Navigation'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { buildMetadata } from '@/lib/metadata'
import { serviceCategories } from '@/data/services'

export const metadata = buildMetadata({
  title: 'Notre approche — Cycle court et livraison directe',
  description:
    "La méthode Yofield : brief, conception, production, lancement. Cycle court de 3 à 8 semaines, livraison directe sans chef de projet intermédiaire.",
  canonical: '/approche',
})

const steps = [
  {
    num: '01',
    title: 'Le brief',
    description:
      "On commence par comprendre avant de proposer. Un entretien de deux heures pour saisir votre offre, vos clients, vos objectifs et vos contraintes. On ne code pas, on n'ouvre pas Figma, on écoute.",
  },
  {
    num: '02',
    title: 'La conception',
    description:
      "Stratégie, positionnement, architecture, maquettes. Cette étape produit les documents qui guident tout le reste. Chaque décision est justifiée, chaque choix est validé avec vous avant de passer à la production.",
  },
  {
    num: '03',
    title: 'La production',
    description:
      "Design, code, contenu, animation. On produit selon le périmètre défini au brief. Vous voyez l'avancement en temps réel, pas à la fin quand il est trop tard pour changer quoi que ce soit.",
  },
  {
    num: '04',
    title: 'Le lancement',
    description:
      "Mise en ligne supervisée, tests, audit de performance, transmission des fichiers sources et des accès. Vous repartez avec tout ce dont vous avez besoin pour la suite, que vous fassiez appel à nous ou non.",
  },
]

const notItems = [
  "On ne prend pas plus de projets qu'on ne peut en gérer correctement en parallèle.",
  "On ne fait pas de réunions de validation hebdomadaires pour montrer qu'on travaille.",
  "On ne garde pas vos fichiers sources comme moyen de vous garder comme client.",
]

const doItems = [
  "On livre en 3 à 8 semaines selon le périmètre défini au brief.",
  "Vous avez accès aux personnes qui font le travail, directement.",
  "Tous les fichiers sources vous sont transmis à la livraison, sans exception.",
]

export default function ApprochePage() {
  return (
    <SiteLayout>
      {/* ─── HERO ────────────────────────────────────────────── */}
      <section className="section-padding bg-soil text-snow min-h-[50vh] flex items-center">
        <div className="container w-full">
          <ScrollReveal>
            <p className="eyebrow text-snow mb-8" style={{ opacity: 0.45 }}>
              La méthode
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="np-900 text-5xl md:text-7xl text-snow mb-8 leading-none">
              Du brief au lancement public.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-lg text-snow/65 max-w-2xl leading-relaxed">
              On travaille en cycle court, entre 3 et 8 semaines selon le périmètre. Pas de réunion hebdomadaire de validation. Pas de chef de projet entre vous et les personnes qui font le travail.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── PROCESS STEPS ───────────────────────────────────── */}
      <section className="section-padding bg-snow">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow text-soil mb-6">04 étapes</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="np-700 text-3xl text-soil mb-16">
              Comment on passe du brief au lancement.
            </h2>
          </ScrollReveal>

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => (
              <div key={step.num}>
                <ScrollReveal delay={0.05 * i}>
                  <div className="flex items-start gap-8 md:gap-16 py-12">
                    {/* Large number */}
                    <div className="flex-shrink-0 w-24 md:w-40">
                      <span className="np-900 text-7xl md:text-8xl text-soil/10 leading-none">
                        {step.num}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="np-700 text-2xl text-soil mb-4">
                        {step.title}
                      </h3>
                      <p className="font-body text-base text-soil/65 leading-relaxed max-w-2xl">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                {i < steps.length - 1 && <div className="divider-soil" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHAT'S DIFFERENT ─────────────────────────────────── */}
      <section className="section-padding bg-mist">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow text-soil mb-6">Ce qui change</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="np-700 text-3xl text-soil mb-12">
              Ce qu'on ne fait pas.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Not items */}
            <ScrollReveal delay={0.1}>
              <div className="flex flex-col gap-6">
                {notItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 text-xs font-bold"
                      style={{
                        background: 'rgba(220,38,38,0.1)',
                        color: 'rgb(185,28,28)',
                      }}
                    >
                      ✗
                    </span>
                    <p className="font-body text-sm text-soil/70 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Do items */}
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col gap-6">
                {doItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 text-xs font-bold"
                      style={{
                        background: 'rgba(212,245,81,0.25)',
                        color: 'var(--color-pine)',
                      }}
                    >
                      ✓
                    </span>
                    <p className="font-body text-sm text-soil/70 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── SERVICES SCOPE ───────────────────────────────────── */}
      <section className="section-padding bg-soil text-snow">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow text-snow mb-6" style={{ opacity: 0.45 }}>
              Ce qu'on couvre
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="np-700 text-3xl text-snow mb-12">
              Sur quel terrain on peut vous aider.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceCategories.map((cat, i) => (
              <ScrollReveal key={cat.slug} delay={0.05 * i}>
                <Link
                  href={`/services/${cat.slug}`}
                  className="block border border-snow/10 rounded-xl p-5 hover:border-snow/25 hover:bg-snow/5 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="gm text-xs text-snow/30 mt-1 flex-shrink-0">
                      {cat.num}
                    </span>
                    <div>
                      <h3 className="np-700 text-base text-snow mb-1 group-hover:text-citron transition-colors">
                        {cat.name}
                      </h3>
                      <p className="font-body text-xs text-snow/50 leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="section-padding bg-citron">
        <div className="container">
          <ScrollReveal>
            <h2 className="np-800 text-4xl text-soil mb-6 leading-tight">
              Vous savez ce que vous voulez construire ?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="font-body text-base text-soil/70 mb-10 max-w-lg leading-relaxed">
              Dites-le nous. L'entretien de brief est gratuit et sans engagement.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Link href="/contact" className="btn btn-outline-soil">
              Démarrer la conversation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  )
}

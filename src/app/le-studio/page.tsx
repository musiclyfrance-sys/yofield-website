import Link from 'next/link'
import SiteLayout from '@/components/layout/Navigation'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Le studio — Yofield',
  description:
    "Yofield est un studio créatif et digital qui construit des marques complètes. Notre façon de travailler, nos convictions, ce qui nous distingue.",
  canonical: '/le-studio',
})

const convictions = [
  {
    title: "La clarté avant l'esthétique",
    body: "Un logo beau mais flou ne sert à rien. On commence toujours par le sens avant la forme.",
  },
  {
    title: "La livraison directe",
    body: "Vous travaillez avec les personnes qui font le travail, pas avec des intermédiaires.",
  },
  {
    title: "Le code source vous appartient",
    body: "On ne crée pas de dépendance. Tous les fichiers sources, toutes les clés, tout vous est transmis.",
  },
  {
    title: "L'IA comme levier, pas comme raccourci",
    body: "On utilise l'IA pour augmenter ce que les humains font bien, pas pour remplacer ce qui nécessite du jugement.",
  },
]

export default function LeStudioPage() {
  return (
    <SiteLayout>
      {/* ─── HERO ─────────────────────────────────────────────────── */}
      <section className="section-padding bg-soil text-snow min-h-[60vh] flex items-center">
        <div className="container w-full">
          <ScrollReveal>
            <p className="eyebrow text-snow mb-8" style={{ opacity: 0.45 }}>
              Le studio
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="np-900 text-5xl md:text-7xl text-snow mb-8 leading-none">
              On construit des marques<br className="hidden md:block" /> qui tiennent.
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-lg text-snow/65 max-w-xl leading-relaxed">
              Pas des identités visuelles. Pas des sites vitrines. Des marques complètes,
              cohérentes du logo au dernier email, du premier jour au millième.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── MANIFESTO LONG ───────────────────────────────────────── */}
      <section className="section-padding bg-snow">
        <div className="container">
          <div className="max-w-2xl">
            <ScrollReveal>
              <p className="font-body text-base text-soil/75 leading-relaxed mb-8">
                Yofield est né d'un constat simple : la plupart des fondateurs qui créent
                leur marque travaillent avec dix prestataires différents qui ne se parlent
                pas. Le graphiste ignore ce que le développeur fait. Le copywriter ne
                connaît pas la charte. Le référenceur arrive six mois après le lancement.
                Le résultat, c'est une marque fragmentée qui coûte cher et convainc mal.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="np-300i text-2xl text-pine leading-snug mb-8">
                "On assemble tout ça dans un seul endroit, avec une seule équipe,
                une seule vision."
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <p className="font-body text-base text-soil/75 leading-relaxed mb-8">
                Le cycle court n'est pas un argument commercial. C'est une conviction de
                fond : ce qui prend six mois finit par ne plus ressembler à ce qu'on avait
                imaginé. On préfère livrer quelque chose de réel en quatre semaines et
                itérer, plutôt que de livrer quelque chose de parfait en six mois qui n'a
                plus de sens.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="font-body text-base text-soil/75 leading-relaxed mb-8">
                On ne prend qu'un client par catégorie de marché à la fois. Ce n'est pas
                une règle de bon goût, c'est une règle d'efficacité : on ne peut pas
                construire la meilleure identité pour une marque de cosmétiques naturels
                si on travaille simultanément pour son concurrent direct.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <p className="font-body text-base text-soil/75 leading-relaxed">
                L'intelligence artificielle n'est pas un outil qu'on utilise à la place
                de nos clients. C'est un levier qu'on intègre dans leurs processus pour
                qu'ils gagnent en autonomie. Un brand voice IA bien construit permet à
                une équipe de cinq personnes de publier comme si elle en avait vingt.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── CONVICTIONS GRID ─────────────────────────────────────── */}
      <section className="section-padding bg-mist">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow text-soil mb-6">Nos convictions</p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="np-700 text-3xl text-soil mb-12">
              Ce qui guide chaque projet.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {convictions.map((item, i) => (
              <ScrollReveal key={item.title} delay={0.05 * i}>
                <div className="bg-snow rounded-2xl p-8 h-full">
                  <h3 className="np-700 text-lg text-soil mb-3">{item.title}</h3>
                  <p className="font-body text-sm text-soil/65 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="section-padding bg-pine text-snow">
        <div className="container">
          <ScrollReveal>
            <h2 className="np-800 text-4xl text-snow mb-8 leading-tight">
              Vous avez un projet en tête ?
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <Link href="/contact" className="btn btn-citron">
              Démarrer un projet
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </SiteLayout>
  )
}

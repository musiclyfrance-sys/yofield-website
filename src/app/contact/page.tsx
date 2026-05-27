import SiteLayout from '@/components/layout/Navigation'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { buildMetadata } from '@/lib/metadata'
import ContactForm from './ContactForm'

export const metadata = buildMetadata({
  title: 'Contact — Démarrer un projet',
  description:
    "Démarrez votre projet avec Yofield. Réponse sous 48 heures. Brief gratuit et sans engagement.",
  canonical: '/contact',
})

const faqs = [
  {
    q: "Est-ce que le brief est vraiment gratuit ?",
    a: "Oui. On prend 30 à 45 minutes pour comprendre votre projet, sans engagement de votre côté ni du nôtre.",
  },
  {
    q: "En combien de temps recevons-nous un devis ?",
    a: "Après le brief, on vous envoie un devis détaillé sous 48 à 72 heures. Il décrit précisément le périmètre, le calendrier et le tarif.",
  },
  {
    q: "Travaillez-vous avec des clients en dehors de France ?",
    a: "Oui. On travaille avec des clients francophones partout. Les entretiens se font en visioconférence, les livrables sont tous numériques.",
  },
]

export default function ContactPage() {
  return (
    <SiteLayout>
      {/* ─── MAIN SECTION ─────────────────────────────────────── */}
      <section className="section-padding bg-snow">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Left column — info */}
            <div>
              <ScrollReveal>
                <p className="eyebrow text-soil mb-8">Contact</p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h1 className="np-800 text-4xl md:text-5xl text-soil mb-6 leading-tight">
                  Parlons de votre projet.
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.15}>
                <p className="font-body text-base text-soil/65 leading-relaxed mb-10 max-w-sm">
                  L'entretien de brief est gratuit. On prend 30 à 45 minutes pour comprendre ce que vous voulez construire, et on vous dit honnêtement ce qu'on peut faire.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <ul className="flex flex-col gap-4 mb-10">
                  {[
                    "Réponse sous 48 heures ouvrées",
                    "Entretien de brief gratuit et sans engagement",
                    "Devis détaillé après le brief, pas avant",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span
                        className="flex-shrink-0 w-2 h-2 rounded-full"
                        style={{ background: 'var(--color-citron)' }}
                      />
                      <span className="font-body text-sm text-soil/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.25}>
                <a
                  href="mailto:hello@yofield.com"
                  className="font-body text-sm font-medium"
                  style={{ color: 'var(--color-pine)' }}
                >
                  hello@yofield.com
                </a>
              </ScrollReveal>
            </div>

            {/* Right column — client form */}
            <ScrollReveal delay={0.1}>
              <div>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="section-padding bg-mist">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow text-soil mb-6">Questions fréquentes</p>
          </ScrollReveal>

          <div className="flex flex-col gap-0 max-w-2xl">
            {faqs.map((item, i) => (
              <div key={item.q}>
                <ScrollReveal delay={0.05 * i}>
                  <div className="py-8">
                    <h3 className="np-700 text-lg text-soil mb-3">{item.q}</h3>
                    <p className="font-body text-sm text-soil/65 leading-relaxed">{item.a}</p>
                  </div>
                </ScrollReveal>
                {i < faqs.length - 1 && <div className="divider-soil" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

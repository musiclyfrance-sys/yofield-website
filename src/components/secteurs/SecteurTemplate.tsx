import Link from 'next/link'
import Image from 'next/image'
import type { Secteur } from '@/data/secteurs'
import type { CasStudy } from '@/types'
import { serviceCategories } from '@/data/services'
import FAQAccordion from '@/components/services/shared/FAQAccordion'

/* ─── Client logo placeholder ─── */
function ClientLogo({ name, initials, color }: { name: string; initials: string; color: string }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl ${color} aspect-video`}
      title={name}
    >
      <span className="gm text-xs text-snow/70 tracking-widest">{initials}</span>
    </div>
  )
}

/* ─── Section content renderer ─── */
function ContentSection({
  heading,
  body,
  subsections,
}: {
  heading: string
  body: string
  subsections?: Array<{ heading: string; body: string }>
}) {
  const paragraphs = body.split('\n\n').filter(Boolean)
  return (
    <div className="mb-16">
      <h2 className="np-800 text-2xl md:text-3xl text-soil mb-6 max-w-2xl">{heading}</h2>
      <div className="max-w-3xl space-y-4">
        {paragraphs.map((p, i) => (
          <p key={i} className="font-body text-base text-soil/70 leading-relaxed">
            {p}
          </p>
        ))}
      </div>
      {subsections && subsections.length > 0 && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          {subsections.map((sub, i) => (
            <div key={i} className="bg-mist rounded-xl p-6">
              <h3 className="np-700 text-base text-soil mb-3">{sub.heading}</h3>
              <p className="font-body text-sm text-soil/65 leading-relaxed">{sub.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

interface SecteurTemplateProps {
  secteur: Secteur
  casClients: CasStudy[]
}

export default function SecteurTemplate({ secteur, casClients }: SecteurTemplateProps) {
  const relatedCategories = serviceCategories.filter((cat) =>
    secteur.services.some((s) => s.categorySlug === cat.slug)
  )

  return (
    <>
      {/* ─── HERO ──────────────────────────────────────────────────────── */}
      <section className="bg-soil pt-32 pb-24">
        <div className="container">
          <p className="eyebrow text-snow mb-8" style={{ opacity: 0.4 }}>
            {secteur.num}&nbsp;&nbsp;Secteur
          </p>
          <h1 className="np-900 text-[clamp(36px,5vw,64px)] text-snow leading-[1.1] max-w-4xl mb-8">
            {secteur.headline}
          </h1>
          <p className="font-body text-lg text-snow/65 max-w-2xl leading-relaxed mb-12">
            {secteur.intro}
          </p>
          <Link href="/contact" className="btn btn-citron">
            Discuter de votre secteur
          </Link>
        </div>
      </section>

      {/* ─── CLIENTS LOGOS ─────────────────────────────────────────────── */}
      <section className="bg-snow py-20">
        <div className="container">
          <p className="eyebrow text-soil mb-10">Ils nous font confiance</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl">
            {secteur.clients.map((client) => (
              <ClientLogo
                key={client.name}
                name={client.name}
                initials={client.initials}
                color={client.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PRIORITAIRES ─────────────────────────────────────── */}
      <section className="bg-mist py-20">
        <div className="container">
          <p className="eyebrow text-soil mb-6">Ce qu'on fait pour ce secteur</p>
          <h2 className="np-800 text-3xl md:text-4xl text-soil mb-12 max-w-xl">
            Les piliers qui font la différence dans votre secteur.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {secteur.services.map((svc, i) => {
              const cat = serviceCategories.find((c) => c.slug === svc.categorySlug)
              return (
                <Link
                  key={i}
                  href={cat ? `/services/${cat.slug}` : '/services'}
                  className="group flex flex-col gap-3 rounded-xl bg-snow p-5 ring-1 ring-soil/[0.08] hover:ring-soil/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <p className="np-700 text-base text-soil">{svc.label}</p>
                    {cat && (
                      <span className="gm text-[10px] text-soil/30">{cat.num}</span>
                    )}
                  </div>
                  <p className="font-body text-sm text-soil/60 leading-relaxed flex-1">
                    {svc.why}
                  </p>
                  <p className="font-body text-xs text-soil/35 group-hover:text-pine transition-colors duration-200">
                    Voir ce pilier →
                  </p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── CAS CLIENTS ───────────────────────────────────────────────── */}
      {casClients.length > 0 && (
        <section className="bg-snow py-20">
          <div className="container">
            <p className="eyebrow text-soil mb-6">Cas concrets</p>
            <h2 className="np-800 text-3xl md:text-4xl text-soil mb-12 max-w-xl">
              Des marques construites dans ce secteur.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {casClients.map((cas) => (
                <Link
                  key={cas.slug}
                  href={`/cas/${cas.slug}`}
                  className="group flex flex-col rounded-2xl overflow-hidden ring-1 ring-soil/[0.08] hover:ring-soil/20 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative overflow-hidden flex-shrink-0" style={{ height: '180px' }}>
                    <Image
                      src={cas.coverImage}
                      alt={cas.coverAlt}
                      fill
                      sizes="(max-width:768px) 100vw,33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 p-5">
                    <p className="eyebrow text-soil mb-2">{cas.client} · {cas.year}</p>
                    <h3 className="np-700 text-sm text-soil mb-3 leading-snug flex-1">
                      {cas.title}
                    </h3>
                    <p className="font-body text-xs text-soil/40 group-hover:text-pine transition-colors duration-200">
                      Lire le cas →
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CONTENU LONG FORM ─────────────────────────────────────────── */}
      <section className="bg-snow py-20">
        <div className="container max-w-5xl">
          {secteur.sections.map((section, i) => (
            <ContentSection
              key={i}
              heading={section.heading}
              body={section.body}
              subsections={section.subsections}
            />
          ))}
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────── */}
      <FAQAccordion faq={secteur.faq} title="Questions fréquentes sur ce secteur" />

      {/* ─── CTA FINAL ─────────────────────────────────────────────────── */}
      <section className="bg-citron py-24 md:py-32">
        <div className="container">
          <p className="eyebrow text-soil mb-8">Prochaine étape</p>
          <h2 className="np-900 text-4xl md:text-6xl text-soil leading-none mb-6">
            Votre marque {secteur.nameShort.toLowerCase()},<br className="hidden md:block" /> construite.
          </h2>
          <p className="font-body text-lg text-soil/65 max-w-lg leading-relaxed mb-10">
            Dites-nous où vous en êtes. On vous dit comment on peut aider, sans engagement.
          </p>
          <Link href="/contact" className="btn btn-outline-soil">
            Démarrer la conversation
          </Link>
        </div>
      </section>
    </>
  )
}

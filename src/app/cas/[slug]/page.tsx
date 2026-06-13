import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { getCasBySlug, getCasExtra, casStudies } from '@/data/cas'
import { prestations } from '@/data/prestations'
import { buildCasMeta } from '@/lib/metadata'
import { breadcrumbSchema, caseStudySchema } from '@/lib/schema'
import SiteLayout from '@/components/layout/Navigation'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { ClientMark, ClientLogo } from '@/components/cas/ClientLogos'
import ArrowCircle from '@/components/ui/ArrowCircle'
import { splitProse } from '@/lib/text'

interface PageProps {
  params: Promise<{ slug: string }>
}

const prestaName = (slug: string) =>
  prestations.find((p) => p.slug === slug)?.name ?? slug.replace(/-/g, ' ')

export async function generateStaticParams() {
  return casStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const cas = getCasBySlug(slug)
  if (!cas) return {}
  return buildCasMeta(cas.title, cas.description, cas.slug, cas.coverImage)
}

export default async function CasPage({ params }: PageProps) {
  const { slug } = await params
  const cas = getCasBySlug(slug)
  if (!cas) notFound()
  const extra = getCasExtra(slug)

  const related = casStudies
    .filter((c) => c.slug !== cas.slug && c.categories.some((cat) => cas.categories.includes(cat)))
    .slice(0, 3)

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      breadcrumbSchema([
        { name: 'Accueil', href: '/' },
        { name: 'Cas clients', href: '/cas' },
        { name: cas.client, href: `/cas/${cas.slug}` },
      ]),
      caseStudySchema({
        title: cas.title,
        description: cas.description,
        slug: cas.slug,
        image: cas.coverImage,
        year: cas.year,
        clientName: cas.client,
        sector: cas.sector,
      }),
    ],
  }

  return (
    <SiteLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* ── HERO ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-soil pt-32 pb-20 md:pt-40 md:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-24 h-[420px] w-[420px] rounded-full opacity-[0.12] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #D4F551, transparent 70%)' }}
        />
        <div className="container relative">
          <Link
            href="/cas"
            className="gm mb-10 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-snow/45 transition-colors hover:text-citron"
          >
            ← Tous les cas
          </Link>

          <ScrollReveal>
            <ClientLogo
              slug={cas.slug}
              name={cas.client}
              markClassName="h-12 w-12 text-citron"
              nameClassName="text-2xl text-snow"
              className="mb-8 gap-4"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <h1 className="np-800 max-w-4xl text-3xl leading-[1.1] text-snow md:text-5xl">{cas.title}</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-snow/65">
              {cas.description}
            </p>
          </ScrollReveal>

          {/* Info bar */}
          <ScrollReveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-snow/10 pt-6">
              <InfoItem label="Année" value={String(cas.year)} />
              {extra?.duration && <InfoItem label="Durée" value={extra.duration} />}
              <InfoItem
                label="Secteur"
                value={cas.sector}
                href={extra?.sectorSlug ? `/secteurs/${extra.sectorSlug}` : undefined}
              />
            </div>
          </ScrollReveal>

          {/* Tags */}
          {cas.tags.length > 0 && (
            <ScrollReveal delay={0.2}>
              <div className="mt-6 flex flex-wrap gap-2">
                {cas.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-snow/15 px-3 py-1 font-body text-xs text-snow/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* ── COVER ──────────────────────────────────────── */}
      <div className="bg-soil pb-16 md:pb-24">
        <div className="container">
          <ScrollReveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl ring-1 ring-snow/10 md:aspect-[2.4/1]">
              <Image src={cas.coverImage} alt={cas.coverAlt} fill sizes="(max-width:768px) 100vw, 1100px" className="object-cover" priority />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* ── NARRATIVE ──────────────────────────────────── */}
      <section className="section-padding bg-snow">
        <div className="container">
          <div className="mx-auto grid max-w-5xl gap-16 md:grid-cols-[1fr_1.4fr]">
            {/* Sticky labels column on desktop */}
            <div className="flex flex-col gap-16">
              <ScrollReveal>
                <Block label="Le défi" body={cas.challenge} />
              </ScrollReveal>

              {/* Services livrés */}
              {cas.services.length > 0 && (
                <ScrollReveal>
                  <div>
                    <p className="eyebrow mb-4 text-pine">Ce qu&apos;on a livré</p>
                    <div className="flex flex-wrap gap-2">
                      {cas.services.map((s) => (
                        <Link
                          key={s}
                          href={`/prestations/${s}`}
                          className="rounded-full bg-mist px-3.5 py-1.5 font-body text-sm text-soil/75 transition-colors hover:bg-pine hover:text-snow"
                        >
                          {prestaName(s)}
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>

            <div className="flex flex-col gap-16">
              <ScrollReveal delay={0.05}>
                <Block label="L'approche" body={cas.approach} />
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── RÉSULTATS ──────────────────────────────────── */}
      <section className="section-padding bg-pine">
        <div className="container">
          <ScrollReveal>
            <p className="eyebrow mb-10 text-citron">Résultats</p>
          </ScrollReveal>

          {extra?.metrics && extra.metrics.length > 0 && (
            <div className="mb-14 grid grid-cols-1 gap-8 sm:grid-cols-3 md:gap-6">
              {extra.metrics.map((m, i) => (
                <ScrollReveal key={m.label} delay={i * 0.08}>
                  <div className="border-t border-snow/15 pt-5">
                    <p className="np-900 text-4xl text-citron md:text-5xl">{m.value}</p>
                    <p className="mt-3 font-body text-sm leading-snug text-snow/70">{m.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}

          <ScrollReveal delay={0.1}>
            <p className="max-w-3xl font-body text-lg leading-relaxed text-snow/80">{cas.result}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CITATION (optional) ────────────────────────── */}
      {extra?.quote && (
        <section className="section-padding bg-snow">
          <div className="container">
            <ScrollReveal>
              <blockquote className="mx-auto max-w-4xl text-center">
                <ClientMark slug={cas.slug} className="mx-auto mb-8 h-10 w-10 text-pine" />
                <p className="np-700 text-2xl leading-[1.3] text-soil md:text-4xl">
                  «&nbsp;{extra.quote.text}&nbsp;»
                </p>
                <footer className="mt-8 font-body text-sm text-soil/55">
                  {extra.quote.author} · {extra.quote.role}
                </footer>
              </blockquote>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ── AUTRES CAS ─────────────────────────────────── */}
      {related.length > 0 && (
        <section className="section-padding bg-snow" style={{ paddingTop: extra?.quote ? 0 : undefined }}>
          <div className="container">
            <ScrollReveal>
              <p className="eyebrow mb-10 text-soil">D&apos;autres cas dans le même esprit</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {related.map((r, i) => (
                <ScrollReveal key={r.slug} delay={i * 0.06}>
                  <Link
                    href={`/cas/${r.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-soil/[0.08] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-pine/30"
                  >
                    <ClientLogo
                      slug={r.slug}
                      name={r.client}
                      markClassName="h-8 w-8 text-soil transition-colors duration-300 group-hover:text-pine"
                      nameClassName="text-base text-soil"
                      className="mb-5 gap-2.5"
                    />
                    <p className="np-700 flex-1 text-base leading-snug text-soil/80">{r.title}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="font-body text-sm text-soil/45 transition-colors duration-200 group-hover:text-soil/70">
                        Lire le cas
                      </span>
                      <ArrowCircle size="sm" />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ────────────────────────────────────────── */}
      <section className="section-padding bg-citron">
        <div className="container text-center">
          <h2 className="np-800 mx-auto mb-8 max-w-2xl text-3xl leading-[1.1] text-soil md:text-5xl">
            Votre projet sera peut-être le prochain.
          </h2>
          <Link href="/contact" className="btn btn-soil">
            Démarrer la conversation
          </Link>
        </div>
      </section>
    </SiteLayout>
  )
}

/* ─── Local building blocks ─────────────────────────────── */

function InfoItem({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <span className={`np-700 text-sm text-snow ${href ? 'underline-offset-4 transition-colors group-hover/info:text-citron group-hover/info:underline' : ''}`}>
      {value}
    </span>
  )
  return (
    <div>
      <p className="gm mb-1 text-[10px] uppercase tracking-widest text-snow/40">{label}</p>
      {href ? (
        <Link href={href} className="group/info">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </div>
  )
}

function Block({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <h2 className="np-700 mb-4 text-2xl text-soil md:text-3xl">{label}</h2>
      <div className="space-y-4">
        {splitProse(body).map((p, i) => (
          <p key={i} className="font-body text-base leading-relaxed text-soil/75">
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}

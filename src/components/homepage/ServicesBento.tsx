'use client'

/**
 * ServicesBento — asymmetric bento grid of the 5 service pillars.
 * ───────────────────────────────────────────────────────────────
 * Desktop (md+): 12-col bento → row 1 = 7+5, row 2 = 4+4+4.
 *   • Each card: Nano Banana illustration full-bleed, Snow→transparent
 *     gradient on the bottom for legibility, Geist Mono citron number
 *     top-left, Inter-700 title bottom, 1px sage/30 border at rest.
 *   • Scroll-in: fade-up, 100ms stagger; title in split-text (RevealText).
 *   • Hover: lift -8px, image zoom 1.08, border → citron, spark burst from
 *     the top-right, and the pillar's atomic prestations reveal (stagger).
 * Mobile: 1 column, no hover — prestations always visible, tap → category.
 */

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import RevealText from '@/components/animations/RevealText'
import { serviceCategories } from '@/data/services'
import { prestations } from '@/data/prestations'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const IMG: Record<string, string> = {
  'branding-identite-de-marque': '/images/services/branding.jpg',
  'creation-sites-applications': '/images/services/sites-web.jpg',
  'communication-digitale-acquisition': '/images/services/communication.jpg',
  'production-contenus': '/images/services/contenus.jpg',
  'intelligence-artificielle-automatisation': '/images/services/ia.jpg',
}

/* Asymmetric bento on a 12-col grid: row1 = 7+5, row2 = 4+4+4 */
const LAYOUT = [
  { span: 'md:col-span-7', h: 'h-[320px] md:h-[460px]', big: true },
  { span: 'md:col-span-5', h: 'h-[320px] md:h-[460px]', big: false },
  { span: 'md:col-span-4', h: 'h-[300px] md:h-[340px]', big: false },
  { span: 'md:col-span-4', h: 'h-[300px] md:h-[340px]', big: false },
  { span: 'md:col-span-4', h: 'h-[300px] md:h-[340px]', big: false },
]

/* 5 spark dots bursting from the top-right corner on hover (static classes
   so Tailwind JIT picks them up) */
const SPARKS = [
  'group-hover:translate-x-[14px] group-hover:-translate-y-[8px]',
  'group-hover:translate-x-[6px] group-hover:-translate-y-[18px]',
  'group-hover:translate-x-[22px] group-hover:translate-y-[2px]',
  'group-hover:translate-x-[2px] group-hover:-translate-y-[24px]',
  'group-hover:translate-x-[26px] group-hover:-translate-y-[14px]',
]
const SPARK_DELAY = ['0ms', '50ms', '90ms', '70ms', '120ms']

export default function ServicesBento() {
  return (
    <section className="bg-soil py-24 md:py-32">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
          <div>
            <p className="eyebrow text-snow mb-4" style={{ opacity: 0.4 }}>
              05 piliers
            </p>
            <h2 className="np-800 text-4xl md:text-5xl text-snow leading-[1.1]">
              Tout ce dont une marque<br className="hidden md:block" /> a besoin.
            </h2>
          </div>
          <Link
            href="/services"
            className="font-body text-sm text-snow/50 hover:text-snow underline underline-offset-4 transition-colors duration-200 self-start md:self-end"
          >
            Voir tous les services →
          </Link>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4">
          {serviceCategories.map((cat, i) => {
            const cfg = LAYOUT[i] ?? LAYOUT[LAYOUT.length - 1]
            const img = IMG[cat.slug]
            const list = prestations.filter((p) => p.categorySlug === cat.slug)

            return (
              <motion.div
                key={cat.slug}
                className={`${cfg.span} ${cfg.h}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-8% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease }}
              >
                <Link
                  href={`/services/${cat.slug}`}
                  aria-label={cat.name}
                  className="group relative block h-full w-full overflow-hidden rounded-2xl border border-sage/30 transition-all duration-[400ms] ease-out hover:-translate-y-2 hover:border-citron"
                >
                  {/* Illustration */}
                  {img && (
                    <Image
                      src={img}
                      alt={cat.name}
                      fill
                      sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 40vw"
                      className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.08]"
                    />
                  )}

                  {/* Rest-state gradient for title legibility */}
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-snow via-snow/70 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Pillar number */}
                  <span
                    className="gm absolute left-5 top-5 z-10 text-sm text-citron"
                    style={{ textShadow: '0 1px 12px rgba(15,15,14,0.45)' }}
                  >
                    {cat.num}
                  </span>

                  {/* Spark burst — desktop hover */}
                  {SPARKS.map((s, si) => (
                    <span
                      key={si}
                      aria-hidden="true"
                      className={`pointer-events-none absolute right-6 top-6 z-10 h-1.5 w-1.5 scale-50 rounded-full bg-citron opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 ${s}`}
                      style={{ transitionDelay: SPARK_DELAY[si] }}
                    />
                  ))}

                  {/* Bottom content */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 bg-snow/90 md:bg-transparent transition-colors duration-300 md:group-hover:bg-snow/95">
                    <h3
                      className={`np-800 leading-tight text-soil ${
                        cfg.big ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'
                      }`}
                    >
                      <RevealText text={cat.name} as="span" stagger={0.02} duration={0.5} />
                    </h3>

                    <ul className="mt-3 flex flex-col gap-1 overflow-hidden max-h-[260px] opacity-100 transition-all duration-[400ms] ease-out md:max-h-0 md:opacity-0 md:group-hover:max-h-[260px] md:group-hover:opacity-100">
                      {list.map((p, pi) => (
                        <li
                          key={p.slug}
                          className="font-body text-xs leading-snug text-soil/70 transition-all duration-300 ease-out md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                          style={{ transitionDelay: `${pi * 50}ms` }}
                        >
                          <span className="mr-1.5 text-citron/90" aria-hidden="true">
                            +
                          </span>
                          {p.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

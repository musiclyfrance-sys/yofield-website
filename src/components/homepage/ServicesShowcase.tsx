'use client'

/**
 * ServicesShowcase — dark "constellation" of the 5 service pillars.
 * ────────────────────────────────────────────────────────────────
 * Desktop (md+): interactive index (left) drives a crossfading panel
 *   (right) — illustration + poetic line + atomic prestations (links) +
 *   "Découvrir". Hover or tap a pillar to switch. A citron bar slides to
 *   the active row (layoutId). Ambient WebGL starfield behind (desktop
 *   only, per the responsive/perf rule).
 * Mobile (<md): stacked immersive cards, everything visible, no WebGL.
 */

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { serviceCategories } from '@/data/services'
import { prestations } from '@/data/prestations'

const SparkFieldCanvas = dynamic(
  () => import('@/components/animations/SparkFieldCanvas'),
  { ssr: false }
)

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const IMG: Record<string, string> = {
  'branding-identite-de-marque': '/images/services/branding.jpg',
  'creation-sites-applications': '/images/services/sites-web.jpg',
  'communication-digitale-acquisition': '/images/services/communication.jpg',
  'production-contenus': '/images/services/contenus.jpg',
  'intelligence-artificielle-automatisation': '/images/services/ia.jpg',
}

export default function ServicesShowcase() {
  const [active, setActive] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsDesktop(mq.matches)
    const h = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener('change', h)
    return () => mq.removeEventListener('change', h)
  }, [])

  const cats = serviceCategories
  const cat = cats[active]
  const activePrest = prestations.filter((p) => p.categorySlug === cat.slug)

  return (
    <section className="relative overflow-hidden bg-soil py-24 md:py-32">
      {/* Ambient WebGL starfield — desktop only */}
      {isDesktop && (
        <SparkFieldCanvas className="pointer-events-none absolute inset-0 z-0 opacity-[0.55]" />
      )}
      {/* Soft citron glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 z-0 h-[480px] w-[480px] rounded-full opacity-[0.10] blur-[120px]"
        style={{ background: 'radial-gradient(circle, #D4F551, transparent 70%)' }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4 text-citron">05 piliers</p>
            <h2 className="np-800 text-4xl leading-[1.05] text-snow md:text-5xl lg:text-6xl">
              Tout ce dont une marque<br className="hidden md:block" /> a besoin.
            </h2>
          </div>
          <Link
            href="/services"
            className="group inline-flex items-center gap-2 self-start font-body text-sm text-snow/55 transition-colors hover:text-citron md:self-end"
          >
            Voir tous les services
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>

        {/* ───────── DESKTOP: interactive index + panel ───────── */}
        <div className="hidden grid-cols-12 items-start gap-12 md:grid">
          {/* Index */}
          <div className="col-span-6 lg:col-span-5">
            {cats.map((c, i) => {
              const on = i === active
              return (
                <Link
                  key={c.slug}
                  href={`/services/${c.slug}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group relative block w-full border-t border-snow/10 py-6 text-left last:border-b"
                >
                  {on && (
                    <motion.span
                      layoutId="svc-bar"
                      className="absolute left-0 top-0 h-full w-[2px] bg-citron"
                      transition={{ duration: 0.4, ease }}
                    />
                  )}
                  <div className="flex items-center pl-5">
                    <span
                      className={`np-700 text-2xl transition-colors duration-300 lg:text-[28px] ${
                        on ? 'text-snow' : 'text-snow/35'
                      }`}
                    >
                      {c.nameShort}
                    </span>
                    <span
                      aria-hidden
                      className={`ml-auto transition-all duration-300 ${
                        on ? 'translate-x-0 text-citron opacity-100' : '-translate-x-2 opacity-0'
                      }`}
                    >
                      →
                    </span>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Panel */}
          <div className="col-span-6 lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, ease }}
              >
                <Link
                  href={`/services/${cat.slug}`}
                  className="group relative block aspect-[2/1] overflow-hidden rounded-3xl ring-1 ring-snow/10"
                >
                  <Image
                    src={IMG[cat.slug]}
                    alt={cat.name}
                    fill
                    sizes="(max-width:768px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-soil/75 via-soil/10 to-transparent" />
                  <p className="np-300i absolute bottom-0 left-0 p-6 text-lg text-snow/90">
                    {cat.poetic}
                  </p>
                </Link>

                <div className="mt-6 min-h-[230px]">
                  <h3 className="np-700 text-2xl text-snow">{cat.name}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {activePrest.map((p, pi) => (
                      <motion.span
                        key={p.slug}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.08 + pi * 0.04, ease }}
                      >
                        <Link
                          href={`/prestations/${p.slug}`}
                          className="inline-block rounded-full border border-snow/15 px-4 py-2 font-body text-sm text-snow/70 transition-colors hover:border-citron hover:text-citron"
                        >
                          {p.name}
                        </Link>
                      </motion.span>
                    ))}
                  </div>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="group mt-6 inline-flex items-center gap-2 font-body text-base font-medium text-citron"
                  >
                    Découvrir {cat.nameShort}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ───────── MOBILE: stacked immersive cards ───────── */}
        <div className="mt-10 flex flex-col gap-5 md:hidden">
          {cats.map((c, i) => {
            const list = prestations.filter((p) => p.categorySlug === c.slug)
            return (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.5, delay: i * 0.05, ease }}
              >
                <Link
                  href={`/services/${c.slug}`}
                  className="block overflow-hidden rounded-2xl border border-snow/10 bg-snow/[0.03]"
                >
                  <div className="relative aspect-[16/10]">
                    <Image src={IMG[c.slug]} alt={c.name} fill sizes="100vw" className="object-cover" />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-soil/80 via-soil/10 to-transparent" />
                    <h3 className="np-700 absolute inset-x-4 bottom-4 text-xl text-snow">{c.name}</h3>
                  </div>
                  <div className="p-5">
                    <p className="np-300i text-sm text-snow/60">{c.poetic}</p>
                    <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5">
                      {list.map((p) => (
                        <li key={p.slug} className="font-body text-xs text-snow/55">
                          <span className="mr-1 text-citron/80">+</span>
                          {p.name}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-4 inline-flex items-center gap-2 font-body text-sm font-medium text-citron">
                      Découvrir →
                    </span>
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

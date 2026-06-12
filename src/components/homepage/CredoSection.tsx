'use client'

/**
 * CredoSection — the studio's convictions as a scannable bento grid.
 * ─────────────────────────────────────────────────────────────────────────
 * Five tiles on Pine, all visible at once (no scroll-pinning). Asymmetric
 * layout, citron numbering, CSS "sparks" (brand star motif), and a fast
 * staggered fade-up on enter (whileInView, once). Hover lifts the tile and
 * lights the edge in citron. prefers-reduced-motion → static, no transforms.
 * On mobile (< md) we render plain <div>s (no framer) so the tiles paint
 * instantly — the entrance animation reads as jittery on small screens.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, useReducedMotion } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

type Credo = { n: string; text: string; span: string; big?: boolean }

const CREDO: Credo[] = [
  {
    n: '01',
    text: "On ne prend qu'un client par catégorie de marché à la fois.",
    span: 'lg:col-span-1',
  },
  {
    n: '02',
    text: "Le cycle court n'est pas un argument de vente. C'est la seule façon de livrer quelque chose de bon.",
    span: 'lg:col-span-2',
  },
  {
    n: '03',
    text: "On code ce qu'on dessine. On dessine ce qu'on raconte.",
    span: 'lg:col-span-2',
  },
  {
    n: '04',
    text: "Pas d'intermédiaire entre vous et la livraison.",
    span: 'lg:col-span-1',
  },
  {
    n: '05',
    text: "Une marque qui parle vraiment à ses clients ne ressemble à aucune autre.",
    span: 'md:col-span-2 lg:col-span-3',
    big: true,
  },
]

const SPARKS = [
  { top: '12%', left: '6%', s: 4, d: '0s', dur: '3.4s' },
  { top: '20%', left: '88%', s: 5, d: '0.7s', dur: '4s' },
  { top: '40%', left: '3%', s: 3, d: '1.3s', dur: '3.7s' },
  { top: '8%', left: '52%', s: 3, d: '1.9s', dur: '4.4s' },
  { top: '74%', left: '14%', s: 4, d: '0.4s', dur: '3.9s' },
  { top: '82%', left: '72%', s: 4, d: '1.5s', dur: '3.5s' },
  { top: '54%', left: '94%', s: 3, d: '2.2s', dur: '4.2s' },
  { top: '90%', left: '44%', s: 3, d: '1.0s', dur: '3.8s' },
]

function Sparks() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      {SPARKS.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-citron animate-pulse"
          style={{
            top: p.top,
            left: p.left,
            width: p.s,
            height: p.s,
            opacity: 0.45,
            animationDelay: p.d,
            animationDuration: p.dur,
            boxShadow: '0 0 8px rgba(212,245,81,0.6)',
          }}
        />
      ))}
    </div>
  )
}

export default function CredoSection() {
  const reduce = useReducedMotion()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    setIsMobile(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  /* On mobile (or with prefers-reduced-motion) skip the framer wrapper
     entirely and render plain divs — guarantees tiles are visible. */
  const disable = reduce || isMobile

  return (
    <section className="relative overflow-hidden bg-pine py-24 md:py-32">
      <Sparks />
      {/* citron glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 z-0 h-[520px] w-[520px] translate-x-1/3 rounded-full opacity-[0.07] blur-[150px]"
        style={{ background: 'radial-gradient(circle, #D4F551, transparent 70%)' }}
      />

      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-4 text-citron">Ce en quoi on croit</p>
            <h2 className="np-800 text-4xl leading-[1.1] text-snow md:text-5xl">Cinq partis pris.</h2>
          </div>
          <Link
            href="/le-studio"
            className="btn btn-outline-snow self-start px-5 py-2.5 text-sm md:self-end"
          >
            Le studio, en détail
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {CREDO.map((c, i) => {
            const className = [
              'group flex flex-col justify-between rounded-2xl bg-snow/[0.03] p-7 ring-1 ring-snow/10 transition-all duration-300 hover:-translate-y-1 hover:bg-snow/[0.05] hover:ring-citron/30 md:p-8',
              c.big ? 'md:min-h-[200px]' : 'min-h-[150px] md:min-h-[176px]',
              c.span,
            ].join(' ')
            const inner = (
              <>
                <span className="gm text-sm text-citron">{c.n}</span>
                <p
                  className={[
                    'np-700 leading-[1.2] text-snow',
                    c.big ? 'max-w-3xl text-2xl md:text-3xl lg:text-4xl' : 'text-xl md:text-2xl',
                  ].join(' ')}
                >
                  {c.text}
                </p>
              </>
            )

            if (disable) {
              return (
                <div key={c.n} className={className}>
                  {inner}
                </div>
              )
            }

            return (
              <motion.div
                key={c.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.06, ease }}
                className={className}
              >
                {inner}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

'use client'

/**
 * CredoSection — the studio manifesto as one cinematic, scroll-pinned beat.
 * ─────────────────────────────────────────────────────────────────────────
 * Sticky stage on Pine. Each credo line takes the full stage in big type and
 * crossfades to the next as you scroll (RAF reads getBoundingClientRect, so
 * it stays in sync with Lenis). Citron numbering + progress rail + pulsing
 * CSS "sparks" (the brand star motif — kept CSS-light, no second WebGL canvas
 * so the homepage stays fast). prefers-reduced-motion → static stacked list.
 */

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const CREDO: string[] = [
  "On ne prend qu'un client par catégorie de marché à la fois.",
  "Le cycle court n'est pas un argument de vente. C'est la seule façon de livrer quelque chose de bon.",
  "On code ce qu'on dessine. On dessine ce qu'on raconte.",
  "Pas d'intermédiaire entre vous et la livraison.",
  "Une marque qui parle vraiment à ses clients ne ressemble à aucune autre.",
]

const SPARKS = [
  { top: '14%', left: '8%', s: 4, d: '0s', dur: '3.2s' },
  { top: '22%', left: '82%', s: 6, d: '0.6s', dur: '4s' },
  { top: '34%', left: '24%', s: 3, d: '1.1s', dur: '3.6s' },
  { top: '12%', left: '54%', s: 3, d: '1.8s', dur: '4.4s' },
  { top: '68%', left: '12%', s: 5, d: '0.3s', dur: '3.8s' },
  { top: '78%', left: '70%', s: 4, d: '1.4s', dur: '3.4s' },
  { top: '52%', left: '90%', s: 3, d: '2.1s', dur: '4.2s' },
  { top: '86%', left: '40%', s: 4, d: '0.9s', dur: '3.9s' },
  { top: '44%', left: '4%', s: 3, d: '2.6s', dur: '4.6s' },
  { top: '64%', left: '50%', s: 2, d: '1.6s', dur: '3.1s' },
  { top: '28%', left: '66%', s: 2, d: '2.3s', dur: '4.1s' },
  { top: '90%', left: '86%', s: 3, d: '0.5s', dur: '3.7s' },
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
            opacity: 0.5,
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
  const sectionRef = useRef<HTMLElement>(null)
  const activeRef = useRef(0)
  const [active, setActive] = useState(0)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const h = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', h)
    return () => mq.removeEventListener('change', h)
  }, [])

  useEffect(() => {
    if (reducedMotion) return
    let raf = 0
    const tick = () => {
      const s = sectionRef.current ?? document.querySelector<HTMLElement>('[data-credo]')
      if (s) {
        const rect = s.getBoundingClientRect()
        const scrollable = s.offsetHeight - window.innerHeight
        const p = scrollable > 0 ? Math.max(0, Math.min(0.9999, -rect.top / scrollable)) : 0
        const idx = Math.min(CREDO.length - 1, Math.floor(p * CREDO.length))
        if (idx !== activeRef.current) {
          activeRef.current = idx
          setActive(idx)
        }
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [reducedMotion])

  /* Reduced motion: static stacked manifesto */
  if (reducedMotion) {
    return (
      <section data-credo className="relative overflow-hidden bg-pine py-24 md:py-32">
        <Sparks />
        <div className="container relative z-10">
          <p className="eyebrow mb-12 text-citron">Ce en quoi on croit</p>
          <ul className="flex flex-col gap-10">
            {CREDO.map((line, i) => (
              <li key={i} className="flex gap-5">
                <span className="gm shrink-0 pt-2 text-sm text-citron">0{i + 1}</span>
                <p className="np-700 max-w-4xl text-2xl leading-[1.2] text-snow md:text-3xl">{line}</p>
              </li>
            ))}
          </ul>
          <Link href="/le-studio" className="mt-14 inline-flex items-center gap-2 font-body text-sm text-citron">
            Le studio, en détail →
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section ref={sectionRef} data-credo className="relative bg-pine" style={{ height: `${CREDO.length * 75}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <Sparks />
        {/* citron glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.08] blur-[140px]"
          style={{ background: 'radial-gradient(circle, #D4F551, transparent 70%)' }}
        />

        <div className="container relative z-10">
          <p className="eyebrow mb-10 text-citron md:mb-14">Ce en quoi on croit</p>

          <div className="flex min-h-[42vh] items-start md:min-h-[44vh]">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.6, ease }}
              >
                <span className="gm text-sm text-citron">
                  0{active + 1} / 0{CREDO.length}
                </span>
                <p className="np-800 mt-6 max-w-5xl text-3xl leading-[1.12] text-snow md:text-5xl lg:text-[64px] lg:leading-[1.08]">
                  {CREDO[active]}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress rail */}
          <div className="mt-10 flex items-center gap-2 md:mt-14">
            {CREDO.map((_, i) => (
              <span
                key={i}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === active ? 'w-12 bg-citron' : 'w-5 bg-snow/20'
                }`}
              />
            ))}
            <Link
              href="/le-studio"
              className="group ml-auto inline-flex items-center gap-2 font-body text-sm text-snow/60 transition-colors hover:text-citron"
            >
              Le studio, en détail
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

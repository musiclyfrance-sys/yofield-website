'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

const steps = [
  {
    num: '01',
    label: 'Brief',
    description:
      "Un appel de découverte, un document de cadrage. On aligne les objectifs, le calendrier et les livrables avant de commencer quoi que ce soit.",
  },
  {
    num: '02',
    label: 'Conception',
    description:
      "Moodboards, architecture, wireframes. On construit le plan de vol complet et on le soumet à votre validation avant d'engager la production.",
  },
  {
    num: '03',
    label: 'Production',
    description:
      "On livre par itérations courtes. Chaque livrable est accompagné d'un commentaire contextuel pour que vous sachiez exactement ce que vous recevez et pourquoi.",
  },
  {
    num: '04',
    label: 'Révision',
    description:
      "Un cycle de retours structuré, pas de corrections à l'infini. On intègre vos ajustements et on affine jusqu'à ce que chaque détail soit à sa place.",
  },
  {
    num: '05',
    label: 'Lancement public',
    description:
      "Mise en ligne, premières annonces, optimisations initiales. On reste disponibles les deux semaines suivant le lancement pour garantir que tout tient en conditions réelles.",
  },
]

export default function ApproachTimeline() {
  const sectionRef = useRef<HTMLElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([])
  const labelRefs = useRef<(HTMLHeadingElement | null)[]>([])
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([])

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      /* ── Desktop (md+): scroll-driven opacity reveal + progress track ── */
      mm.add('(min-width: 768px)', () => {
        stepRefs.current.forEach((el, i) => {
          if (!el) return

          const dot   = dotRefs.current[i]
          const label = labelRefs.current[i]
          const desc  = descRefs.current[i]

          // Dim initially, reveal on scroll
          gsap.set([label, desc], { opacity: 0.22 })
          gsap.set(dot, { scale: 0.7, backgroundColor: 'rgba(15,15,14,0.15)' })

          ScrollTrigger.create({
            trigger: el,
            start: 'top 62%',
            end: 'bottom 38%',
            onEnter: () => {
              gsap.to(dot, { scale: 1.4, backgroundColor: '#D4F551', duration: 0.4, ease: 'back.out(1.5)' })
              gsap.to(label, { opacity: 1, duration: 0.35, ease: 'power2.out' })
              gsap.to(desc, { opacity: 0.75, duration: 0.4, ease: 'power2.out' })
              if (progressRef.current) {
                gsap.to(progressRef.current, { scaleY: (i + 1) / steps.length, duration: 0.6, ease: 'power2.inOut' })
              }
            },
            onLeave: () => {
              gsap.to(dot, { scale: 1, backgroundColor: '#D4F551', duration: 0.3, ease: 'power2.inOut' })
              gsap.to(label, { opacity: 0.45, duration: 0.3 })
              gsap.to(desc, { opacity: 0.35, duration: 0.3 })
            },
            onEnterBack: () => {
              gsap.to(dot, { scale: 1.4, backgroundColor: '#D4F551', duration: 0.3, ease: 'back.out(1.5)' })
              gsap.to(label, { opacity: 1, duration: 0.25 })
              gsap.to(desc, { opacity: 0.75, duration: 0.3 })
              if (progressRef.current) {
                gsap.to(progressRef.current, { scaleY: (i + 1) / steps.length, duration: 0.5, ease: 'power2.inOut' })
              }
            },
            onLeaveBack: () => {
              gsap.to(dot, { scale: 0.7, backgroundColor: 'rgba(15,15,14,0.15)', duration: 0.3 })
              gsap.to(label, { opacity: 0.22, duration: 0.25 })
              gsap.to(desc, { opacity: 0.22, duration: 0.3 })
              if (progressRef.current && i === 0) {
                gsap.to(progressRef.current, { scaleY: 0, duration: 0.4 })
              }
            },
          })
        })
      })

      /* ── Mobile (<768px): content at full opacity, simple fade-in once ── */
      mm.add('(max-width: 767px)', () => {
        stepRefs.current.forEach((el, i) => {
          if (!el) return

          const label = labelRefs.current[i]
          const desc  = descRefs.current[i]

          // Start invisible, reveal once as step enters view
          gsap.set([label, desc], { opacity: 0, y: 10 })

          ScrollTrigger.create({
            trigger: el,
            start: 'top 82%',
            onEnter: () => {
              gsap.to(label, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
              gsap.to(desc,  { opacity: 1, y: 0, duration: 0.5, delay: 0.08, ease: 'power2.out' })
            },
            once: true,
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="bg-mist py-24 md:py-32">
      <div className="container">
        {/* Section header */}
        <div className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="eyebrow text-soil mb-4">La méthode</p>
            <h2 className="np-800 text-4xl md:text-5xl text-soil max-w-sm leading-[1.1]">
              Du brief au lancement public.
            </h2>
          </div>
          <Link
            href="/approche"
            className="font-body text-sm font-medium text-soil/60 hover:text-soil underline underline-offset-4 transition-colors duration-200 self-start md:self-end"
          >
            Lire l'approche complète →
          </Link>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical track */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
            style={{ backgroundColor: 'rgba(15,15,14,0.1)' }}
          >
            {/* Fill progress */}
            <div
              ref={progressRef}
              className="absolute inset-x-0 top-0 origin-top"
              style={{
                backgroundColor: '#D4F551',
                height: '100%',
                transform: 'scaleY(0)',
              }}
            />
          </div>

          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => { stepRefs.current[i] = el }}
                className="relative md:pl-12 py-10"
                style={
                  i < steps.length - 1
                    ? { borderBottom: '0.5px solid rgba(15,15,14,0.1)' }
                    : {}
                }
              >
                {/* Dot on the track */}
                <span
                  ref={(el) => { dotRefs.current[i] = el }}
                  className="absolute left-[-4px] top-[44px] w-2 h-2 rounded-full hidden md:block"
                  style={{ backgroundColor: 'rgba(15,15,14,0.15)' }}
                  aria-hidden="true"
                />

                <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-20">
                  {/* Step label */}
                  <div className="flex items-baseline gap-3 md:block md:w-52 flex-shrink-0">
                    <span className="gm text-xs text-soil/40">{step.num}</span>
                    <h3
                      ref={(el) => { labelRefs.current[i] = el }}
                      className="np-700 text-2xl text-soil"
                    >
                      {step.label}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    ref={(el) => { descRefs.current[i] = el }}
                    className="font-body text-base text-soil leading-relaxed max-w-xl"
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

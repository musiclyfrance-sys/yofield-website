'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import type { ProcessStep } from '@/types'

gsap.registerPlugin(ScrollTrigger)

interface ProcessTimelineProps {
  steps: ProcessStep[]
  title?: string
}

export default function ProcessTimeline({
  steps,
  title = 'Comment on travaille',
}: ProcessTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!containerRef.current || !lineRef.current) return

      const stepEls = containerRef.current.querySelectorAll<HTMLElement>('[data-step]')

      // Animate the vertical line drawing down
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: true,
          },
        }
      )

      // Animate each step
      stepEls.forEach((stepEl, i) => {
        const numEl = stepEl.querySelector<HTMLElement>('[data-num]')
        const contentEl = stepEl.querySelector<HTMLElement>('[data-content]')

        if (numEl) {
          gsap.fromTo(
            numEl,
            { color: 'rgba(212,245,81,0.3)' },
            {
              color: 'rgba(212,245,81,1)',
              ease: 'none',
              scrollTrigger: {
                trigger: stepEl,
                start: 'top 65%',
                end: 'top 40%',
                scrub: true,
              },
            }
          )
        }

        if (contentEl) {
          gsap.fromTo(
            contentEl,
            { opacity: 0, y: 16 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
              delay: i * 0.05,
              scrollTrigger: {
                trigger: stepEl,
                start: 'top 70%',
                toggleActions: 'play none none none',
              },
            }
          )
        }
      })
    },
    { scope: containerRef }
  )

  return (
    <section className="section-padding bg-soil">
      <div className="container" ref={containerRef}>
        <h2 className="np-800 mb-16 text-4xl text-snow">{title}</h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[1.75rem] top-0 hidden h-full w-px origin-top bg-citron/20 md:block">
            <div
              ref={lineRef}
              className="absolute inset-0 origin-top bg-citron"
              style={{ transform: 'scaleY(0)' }}
              aria-hidden="true"
            />
          </div>

          {/* Steps */}
          <ol className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <li
                key={step.num}
                data-step
                className="relative flex flex-col gap-3 md:flex-row md:gap-10"
              >
                {/* Number */}
                <div className="flex items-start md:w-14 md:flex-shrink-0 md:justify-center md:pt-1">
                  <span
                    data-num
                    className="gm text-sm"
                    style={{ color: 'rgba(212,245,81,0.3)' }}
                    aria-label={`Etape ${step.num}`}
                  >
                    {step.num}
                  </span>
                </div>

                {/* Content */}
                <div data-content className="flex-1" style={{ opacity: 0 }}>
                  <h3 className="np-700 mb-2 text-xl text-snow">{step.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-snow/70">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

'use client'

/**
 * SecteurSections — the secteur long-form content as a calm accordion.
 * The four SEO sections used to render as ~15 stacked prose blocks; now
 * each section is a row that expands on demand. Content stays in the DOM
 * at all times (CSS grid-rows animation, no unmount) so SEO is intact,
 * but the page reads light. First section open by default.
 */

import { useState } from 'react'

interface Subsection {
  heading: string
  body: string
}

interface Section {
  heading: string
  body: string
  subsections?: Subsection[]
}

export default function SecteurSections({ sections }: { sections: Section[] }) {
  const [open, setOpen] = useState(0)

  return (
    <div>
      {sections.map((section, i) => {
        const isOpen = open === i
        const paragraphs = section.body.split('\n\n').filter(Boolean)
        return (
          <div key={i} className="border-t border-soil/10 last:border-b">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
            >
              <h3
                className={`np-700 text-lg leading-snug transition-colors duration-300 md:text-2xl ${
                  isOpen ? 'text-soil' : 'text-soil/55 hover:text-soil'
                }`}
              >
                {section.heading}
              </h3>
              <span
                aria-hidden="true"
                className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-full ring-1 transition-all duration-300 ${
                  isOpen ? 'bg-citron ring-citron' : 'ring-soil/15'
                }`}
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={`text-soil transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                >
                  <path d="M7 2.5V11.5M2.5 7H11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </span>
            </button>

            {/* Content — always in the DOM, height animated via grid rows */}
            <div
              className="grid transition-[grid-template-rows] duration-500"
              style={{
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div className="overflow-hidden">
                <div className="max-w-3xl space-y-4 pb-8 md:pb-10">
                  {paragraphs.map((p, pi) => (
                    <p key={pi} className="font-body text-base leading-relaxed text-soil/70">
                      {p}
                    </p>
                  ))}
                </div>
                {section.subsections && section.subsections.length > 0 && (
                  <div className="grid max-w-4xl grid-cols-1 gap-4 pb-8 md:grid-cols-2 md:pb-10">
                    {section.subsections.map((sub, si) => (
                      <div key={si} className="rounded-2xl bg-mist p-6">
                        <h4 className="np-700 mb-3 text-base text-soil">{sub.heading}</h4>
                        <p className="font-body text-sm leading-relaxed text-soil/65">{sub.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

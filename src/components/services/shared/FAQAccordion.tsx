'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { faqSchema } from '@/lib/schema'
import type { FAQItem } from '@/types'

interface FAQAccordionProps {
  faq: FAQItem[]
  title?: string
}

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
  index: number
}) {
  return (
    <div className={index > 0 ? 'divider-soil' : ''}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
      >
        <span className="font-body font-medium leading-snug text-soil">
          {item.question}
        </span>
        <span
          className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center text-soil transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3V13M3 8H13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="pb-5 font-body text-base leading-relaxed text-soil/70">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQAccordion({
  faq,
  title = 'Questions fréquentes',
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const schema = faqSchema(faq)

  return (
    <section className="section-padding bg-snow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="container">
        <h2 className="np-700 mb-8 text-3xl text-soil">{title}</h2>

        <div className="max-w-3xl">
          {faq.map((item, i) => (
            <AccordionItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

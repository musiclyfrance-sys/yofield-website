'use client'

/**
 * FooterServices — the 5 service pillars with a mega-menu-style hover reveal.
 * Hover (or focus) a pillar on desktop → its atomic prestations appear on the
 * right. On mobile the pillars are simple links (prestations panel hidden).
 */

import { useState } from 'react'
import Link from 'next/link'
import { serviceCategories } from '@/data/services'
import { prestations } from '@/data/prestations'

export default function FooterServices() {
  const [active, setActive] = useState(0)
  const cat = serviceCategories[active]
  const list = prestations.filter((p) => p.categorySlug === cat.slug)

  return (
    <div>
      <p className="eyebrow mb-5 text-snow/40">Services</p>
      <div className="grid grid-cols-1 gap-x-10 md:grid-cols-2">
        {/* Pillars */}
        <ul className="flex flex-col">
          {serviceCategories.map((c, i) => (
            <li key={c.slug}>
              <Link
                href={`/services/${c.slug}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`flex items-center gap-3 py-2 transition-colors duration-200 ${
                  i === active ? 'text-citron' : 'text-snow/70 hover:text-snow'
                }`}
              >
                <span className="gm text-[10px] text-snow/30">{c.num}</span>
                <span className="font-body text-sm">{c.nameShort}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Prestations of the hovered pillar — desktop reveal */}
        <div className="hidden min-h-[170px] md:block">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-snow/35">
            {cat.nameShort}
          </p>
          <ul className="flex flex-col gap-1.5">
            {list.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/prestations/${p.slug}`}
                  className="font-body text-sm text-snow/55 transition-colors duration-200 hover:text-citron"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

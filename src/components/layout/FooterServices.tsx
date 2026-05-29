/**
 * FooterServices — the 5 service pillars as a simple link column.
 * The interactive hover-reveal mega-menu lives in the header (see Header.tsx);
 * the footer keeps a clean, static list. Server component (no client JS).
 */

import Link from 'next/link'
import { serviceCategories } from '@/data/services'

export default function FooterServices() {
  return (
    <div>
      <p className="eyebrow mb-5 text-snow/40">Services</p>
      <ul className="flex flex-col gap-3">
        {serviceCategories.map((c) => (
          <li key={c.slug}>
            <Link
              href={`/services/${c.slug}`}
              className="flex items-center gap-2.5 font-body text-sm text-snow/70 transition-colors duration-200 hover:text-citron"
            >
              <span className="gm text-[10px] text-snow/30">{c.num}</span>
              {c.nameShort}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

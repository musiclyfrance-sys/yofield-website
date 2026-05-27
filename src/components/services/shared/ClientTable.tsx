import Link from 'next/link'
import {
  casStudies,
  getCasByService,
  getCasByCategory,
} from '@/data/cas'
import type { CasStudy } from '@/types'

interface ClientTableProps {
  prestationSlug?: string
  categorySlug?: string
  maxItems?: number
  title?: string
}

export default function ClientTable({
  prestationSlug,
  categorySlug,
  maxItems = 3,
  title = 'Cas concrets',
}: ClientTableProps) {
  let items: CasStudy[] = []

  if (prestationSlug) {
    items = getCasByService(prestationSlug)
  } else if (categorySlug) {
    items = getCasByCategory(categorySlug)
  }

  items = items.slice(0, maxItems)

  if (items.length === 0) return null

  return (
    <section className="section-padding bg-snow">
      <div className="container">
        {/* Header */}
        <div className="mb-10">
          <p className="eyebrow mb-2 text-soil/50">Références</p>
          <h2 className="np-700 text-3xl text-soil">{title}</h2>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-soil/10">
                <th className="eyebrow pb-3 text-left text-soil/40">Client</th>
                <th className="eyebrow pb-3 text-left text-soil/40">Secteur</th>
                <th className="eyebrow pb-3 text-left text-soil/40">Année</th>
                <th className="eyebrow pb-3 text-left text-soil/40">Mission</th>
                <th className="pb-3" />
              </tr>
            </thead>
            <tbody>
              {items.map((cas) => (
                <tr
                  key={cas.slug}
                  className="group border-b border-soil/10 transition-colors duration-150 hover:bg-mist"
                >
                  <td className="py-5 pr-6">
                    <span className="np-700 text-soil">{cas.client}</span>
                  </td>
                  <td className="py-5 pr-6">
                    <span className="eyebrow text-soil/50">{cas.sector}</span>
                  </td>
                  <td className="py-5 pr-6">
                    <span className="font-body text-sm text-soil/60">{cas.year}</span>
                  </td>
                  <td className="py-5 pr-6">
                    <p className="font-body text-sm leading-relaxed text-soil/70 line-clamp-2 max-w-sm">
                      {cas.description}
                    </p>
                  </td>
                  <td className="py-5 text-right">
                    <Link
                      href={`/cas/${cas.slug}`}
                      className="font-body text-sm text-soil transition-colors duration-200 hover:text-pine"
                      aria-label={`Lire le cas ${cas.client}`}
                    >
                      Lire le cas &rarr;
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="flex flex-col gap-6 md:hidden">
          {items.map((cas) => (
            <div
              key={cas.slug}
              className="rounded-2xl border border-soil/10 bg-snow p-6 transition-colors duration-150 hover:bg-mist"
            >
              <div className="mb-3 flex items-start justify-between gap-4">
                <span className="np-700 text-soil">{cas.client}</span>
                <span className="font-body text-sm text-soil/50">{cas.year}</span>
              </div>
              <p className="eyebrow mb-3 text-soil/50">{cas.sector}</p>
              <p className="mb-4 font-body text-sm leading-relaxed text-soil/70">
                {cas.description}
              </p>
              <Link
                href={`/cas/${cas.slug}`}
                className="font-body text-sm text-soil transition-colors duration-200 hover:text-pine"
                aria-label={`Lire le cas ${cas.client}`}
              >
                Lire le cas &rarr;
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

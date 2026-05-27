import Link from 'next/link'
import type { Prestation } from '@/types'

interface SubServiceCardProps {
  prestation: Prestation
}

export default function SubServiceCard({ prestation }: SubServiceCardProps) {
  return (
    <Link
      href={`/prestations/${prestation.slug}`}
      className="group flex flex-col rounded-2xl border border-soil/[0.08] bg-snow p-6 transition-all duration-300 hover:border-soil/20 hover:shadow-sm hover:-translate-y-0.5"
    >
      <span className="gm text-xs text-soil/40 mb-4">{prestation.num}</span>

      <h3 className="np-700 text-xl text-soil mb-3 group-hover:text-pine transition-colors duration-200">
        {prestation.name}
      </h3>

      <p className="font-body text-sm text-soil/65 leading-relaxed flex-1">
        {prestation.description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-soil/40 group-hover:text-pine transition-colors duration-200">
        <span className="font-body text-sm">Découvrir</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          <path
            d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </Link>
  )
}

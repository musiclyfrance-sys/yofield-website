import Link from 'next/link'
import type { Prestation } from '@/types'

interface SubServiceCardProps {
  prestation: Prestation
}

export default function SubServiceCard({ prestation }: SubServiceCardProps) {
  return (
    <Link
      href={`/prestations/${prestation.slug}`}
      className="group flex flex-col rounded-2xl bg-snow p-6 ring-1 ring-snow/0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-citron/50 md:p-7"
    >
      <span className="gm mb-5 text-xs text-soil/40">{prestation.num}</span>

      <h3 className="np-700 mb-3 text-xl text-soil transition-colors duration-200 group-hover:text-pine">
        {prestation.name}
      </h3>

      <p className="font-body flex-1 text-sm leading-relaxed text-soil/65">
        {prestation.description}
      </p>

      <div className="mt-7 flex items-center justify-between">
        <span className="font-body text-sm text-soil/45 transition-colors duration-200 group-hover:text-soil/70">
          Découvrir
        </span>
        <span className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-soil/15 transition-all duration-300 group-hover:bg-citron group-hover:ring-citron">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            aria-hidden="true"
            className="-rotate-45 text-soil transition-transform duration-300 group-hover:rotate-0"
          >
            <path
              d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  )
}

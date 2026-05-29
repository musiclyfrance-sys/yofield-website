/**
 * ClientLogos — placeholder SVG marks for the (demo) case-study clients.
 * ──────────────────────────────────────────────────────────────────────
 * Each client gets a distinct, monochrome mark (currentColor) so it reads
 * on any background and can tint to citron on hover. Styles vary on purpose
 * — architectural frames, abstract symbols, monograms — to feel like a real
 * roster of brands. Pair `ClientMark` with the wordmark via `ClientLogo`.
 */

import type { ReactNode } from 'react'

interface MarkMeta {
  mark: ReactNode
  /** Wordmark styling — varied per brand to read like distinct logos. */
  word: string
}

const S = {
  fill: { fill: 'currentColor' },
  stroke: (w = 6) => ({
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: w,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }),
}

export const CLIENT_LOGOS: Record<string, MarkMeta> = {
  // Studio Forma — architecture: frame + arch
  'branding-complet-studio-architecture': {
    word: 'uppercase tracking-[0.22em] font-medium',
    mark: (
      <>
        <rect x="20" y="20" width="60" height="60" rx="3" {...S.stroke(6)} />
        <path d="M38 80 V46 H62 V80" {...S.stroke(6)} />
      </>
    ),
  },
  // Optimum RH — circle + optimisation node
  'automatisation-ia-cabinet-conseil': {
    word: 'font-semibold tracking-tight',
    mark: (
      <>
        <circle cx="44" cy="52" r="27" {...S.stroke(6)} />
        <circle cx="74" cy="32" r="9" {...S.fill} />
      </>
    ),
  },
  // Flore & Minéral — hexagon (mineral) + leaf
  'ecommerce-marque-cosmetique': {
    word: 'tracking-[0.04em] font-medium',
    mark: (
      <>
        <path d="M50 16 L80 33 V67 L50 84 L20 67 V33 Z" {...S.stroke(6)} />
        <path d="M50 38 C59 47 59 59 50 66 C41 59 41 47 50 38 Z" {...S.fill} />
      </>
    ),
  },
  // Leblanc & Associés — solid L monogram + node
  'refonte-site-cabinet-expert-comptable': {
    word: 'font-bold tracking-tight',
    mark: (
      <>
        <path d="M32 20 V72 H68" stroke="currentColor" strokeWidth="10" fill="none" strokeLinecap="square" />
        <circle cx="76" cy="28" r="7" {...S.fill} />
      </>
    ),
  },
  // Groupe Pavillon — pavilion roof + base
  'ai-brand-voice-groupe-immobilier': {
    word: 'uppercase tracking-[0.16em] font-medium',
    mark: (
      <>
        <path d="M20 48 L50 22 L80 48" {...S.stroke(6)} />
        <rect x="31" y="48" width="38" height="31" {...S.stroke(6)} />
      </>
    ),
  },
  // Crédit Capital — two C arcs (stability)
  'branding-fintech-credit-capital': {
    word: 'font-mono tracking-tight font-medium',
    mark: (
      <>
        <path d="M64 26 A28 28 0 1 0 64 78" {...S.stroke(7)} />
        <path d="M78 40 A17 17 0 1 0 78 64" {...S.stroke(7)} />
      </>
    ),
  },
  // Athletic Performance Club — speed chevrons
  'lancement-marque-athletic-club': {
    word: 'uppercase italic tracking-[0.08em] font-bold',
    mark: (
      <>
        <path d="M26 26 L50 50 L26 74" {...S.stroke(9)} />
        <path d="M52 26 L76 50 L52 74" {...S.stroke(9)} />
      </>
    ),
  },
  // DataFlow — flow wave + nodes
  'identite-dataflow-saas-b2b': {
    word: 'font-mono tracking-tight font-medium',
    mark: (
      <>
        <path d="M18 62 C34 34 46 34 50 50 C54 66 66 66 82 38" {...S.stroke(6)} />
        <circle cx="18" cy="62" r="6" {...S.fill} />
        <circle cx="82" cy="38" r="6" {...S.fill} />
      </>
    ),
  },
  // MedCare Esthétique — rounded care cross
  'site-seo-medcare-clinique': {
    word: 'font-semibold tracking-tight',
    mark: (
      <>
        <path d="M50 24 V76" {...S.stroke(13)} />
        <path d="M24 50 H76" {...S.stroke(13)} />
      </>
    ),
  },
  // Maison Tradition — house with door
  'branding-maison-tradition-gastronomie': {
    word: 'uppercase tracking-[0.2em] font-medium',
    mark: (
      <>
        <path d="M22 46 L50 22 L78 46 V80 H22 Z" {...S.stroke(6)} />
        <path d="M43 80 V58 H57 V80" {...S.stroke(6)} />
      </>
    ),
  },
  // LearnSphere — sphere + orbit
  'plateforme-learnsphere-formation': {
    word: 'font-mono tracking-tight font-medium',
    mark: (
      <>
        <circle cx="50" cy="50" r="21" {...S.stroke(6)} />
        <ellipse cx="50" cy="50" rx="38" ry="14" {...S.stroke(5)} transform="rotate(-24 50 50)" />
      </>
    ),
  },
}

/** Symbol only. Sizes via className (set width/height + text color). */
export function ClientMark({ slug, className }: { slug: string; className?: string }) {
  const meta = CLIENT_LOGOS[slug]
  if (!meta) return null
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" role="presentation">
      {meta.mark}
    </svg>
  )
}

/** Mark + wordmark lockup (the card / hero signature). */
export function ClientLogo({
  slug,
  name,
  markClassName = 'h-9 w-9',
  nameClassName = 'text-lg',
  className,
}: {
  slug: string
  name: string
  markClassName?: string
  nameClassName?: string
  className?: string
}) {
  const meta = CLIENT_LOGOS[slug]
  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ''}`}>
      <ClientMark slug={slug} className={`${markClassName} shrink-0`} />
      <span className={`${meta?.word ?? 'font-semibold'} ${nameClassName} leading-none`}>{name}</span>
    </span>
  )
}

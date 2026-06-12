/**
 * ArrowCircle — the site's shared "go" affordance for cards and rows.
 * An ↗ arrow in a hairline circle; when the parent (with class `group`)
 * is hovered, the circle fills citron and the arrow rotates to →.
 * Pure CSS, server-safe.
 */

interface ArrowCircleProps {
  /** sm = 36px (dense rows/cards), md = 40px (feature cards) */
  size?: 'sm' | 'md'
  /** soil = on light backgrounds, snow = on dark backgrounds */
  tone?: 'soil' | 'snow'
  className?: string
}

export default function ArrowCircle({
  size = 'sm',
  tone = 'soil',
  className = '',
}: ArrowCircleProps) {
  const dim = size === 'md' ? 'h-10 w-10' : 'h-9 w-9'
  const ring =
    tone === 'snow'
      ? 'ring-snow/20 text-snow group-hover:text-soil'
      : 'ring-soil/15 text-soil'

  return (
    <span
      aria-hidden="true"
      className={`grid ${dim} flex-shrink-0 place-items-center rounded-full ring-1 ${ring} transition-all duration-300 group-hover:bg-citron group-hover:ring-citron ${className}`}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        className="-rotate-45 transition-transform duration-300 group-hover:rotate-0"
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
  )
}

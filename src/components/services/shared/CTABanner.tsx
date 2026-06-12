/**
 * CTABanner — the closing argument of every service page.
 * A large rounded Pine stage with the brand spark motif, a citron glow,
 * an oversized headline and a CTA impossible to miss. CSS-only decoration
 * (no client JS beyond the ScrollReveal entrance) so it stays fast.
 */

import Link from 'next/link'
import ScrollReveal from '@/components/animations/ScrollReveal'

interface CTABannerProps {
  title?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
  /** Background of the surrounding section, to blend with the page flow. */
  outerBg?: 'snow' | 'mist' | 'soil'
}

const OUTER: Record<NonNullable<CTABannerProps['outerBg']>, string> = {
  snow: 'bg-snow',
  mist: 'bg-mist',
  soil: 'bg-soil',
}

const SPARKS = [
  { top: '16%', left: '5%', s: 4, d: '0s', dur: '3.4s' },
  { top: '64%', left: '9%', s: 3, d: '1.2s', dur: '4.1s' },
  { top: '24%', left: '88%', s: 5, d: '0.6s', dur: '3.8s' },
  { top: '74%', left: '80%', s: 3, d: '1.8s', dur: '3.5s' },
  { top: '12%', left: '55%', s: 3, d: '2.3s', dur: '4.4s' },
  { top: '85%', left: '38%', s: 4, d: '0.9s', dur: '3.9s' },
]

export default function CTABanner({
  title = 'Vous avez un projet en tête ?',
  subtitle = 'Dites-nous ce que vous construisez. On vous répond sous 48 heures, sans engagement.',
  ctaLabel = 'Démarrer la conversation',
  ctaHref = '/contact',
  outerBg = 'snow',
}: CTABannerProps) {
  return (
    <section className={`${OUTER[outerBg]} py-16 md:py-24`}>
      <div className="container">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-pine px-7 py-16 md:rounded-[2.5rem] md:px-16 md:py-24">
            {/* Sparks */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              {SPARKS.map((p, i) => (
                <span
                  key={i}
                  className="absolute rounded-full bg-citron animate-pulse"
                  style={{
                    top: p.top,
                    left: p.left,
                    width: p.s,
                    height: p.s,
                    opacity: 0.5,
                    animationDelay: p.d,
                    animationDuration: p.dur,
                    boxShadow: '0 0 8px rgba(212,245,81,0.6)',
                  }}
                />
              ))}
            </div>
            {/* Citron glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-40 -right-32 h-[480px] w-[480px] rounded-full opacity-[0.12] blur-[120px]"
              style={{ background: 'radial-gradient(circle, #D4F551, transparent 70%)' }}
            />
            {/* Giant faded pictogram echo */}
            <span
              aria-hidden
              className="np-900 pointer-events-none absolute -right-6 -top-14 select-none text-[220px] leading-none text-snow/[0.04] md:text-[320px]"
            >
              ❋
            </span>

            <div className="relative max-w-3xl">
              <p className="eyebrow mb-6 text-citron">Prochaine étape</p>
              <h2 className="np-800 text-4xl leading-[1.04] text-snow sm:text-5xl md:text-6xl">
                {title}
              </h2>
              <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-snow/65 md:text-lg">
                {subtitle}
              </p>

              <div className="mt-10 flex flex-col items-stretch gap-5 sm:flex-row sm:items-center md:mt-12">
                <Link
                  href={ctaHref}
                  className="btn btn-citron group justify-center px-9 py-[17px] text-[15px] sm:justify-start md:px-11 md:py-[19px] md:text-base"
                >
                  {ctaLabel}
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
                <p className="font-body text-sm text-snow/55 text-center sm:text-left">
                  ou par email :{' '}
                  <a
                    href="mailto:hello@yofield.com"
                    className="text-snow/80 underline underline-offset-4 transition-colors duration-200 hover:text-citron"
                  >
                    hello@yofield.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

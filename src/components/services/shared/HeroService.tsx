'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroServiceProps {
  eyebrow: string
  title: string
  subtitle: string
  breadcrumbs: Array<{ label: string; href: string }>
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  colorAccent?: 'citron' | 'pine' | 'sage' | 'mist' | 'soil'
}

export default function HeroService({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  ctaPrimary,
  ctaSecondary,
  colorAccent = 'citron',
}: HeroServiceProps) {
  return (
    <section className="section-padding bg-snow">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8 flex flex-wrap items-center gap-1.5">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.href} className="flex items-center gap-1.5">
                {i > 0 && (
                  <span className="eyebrow text-soil/30" aria-hidden="true">
                    /
                  </span>
                )}
                {i === breadcrumbs.length - 1 ? (
                  <span className="eyebrow text-soil/50">{crumb.label}</span>
                ) : (
                  <Link
                    href={crumb.href}
                    className="eyebrow text-soil/50 transition-colors duration-200 hover:text-soil"
                  >
                    {crumb.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>

          {/* Eyebrow */}
          <p className="eyebrow mb-4 flex items-center gap-2 text-soil/60">
            <span
              className={
                colorAccent === 'citron'
                  ? 'text-citron'
                  : colorAccent === 'pine'
                    ? 'text-pine'
                    : colorAccent === 'sage'
                      ? 'text-sage'
                      : colorAccent === 'mist'
                        ? 'text-mist'
                        : 'text-soil'
              }
              aria-hidden="true"
            >
              ·
            </span>
            {eyebrow}
          </p>

          {/* H1 */}
          <h1 className="np-900 mb-6 max-w-4xl text-5xl text-soil md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="mb-10 max-w-xl font-body text-lg leading-relaxed text-soil/70">
            {subtitle}
          </p>

          {/* CTAs */}
          {(ctaPrimary || ctaSecondary) && (
            <div className="flex flex-wrap items-center gap-4">
              {ctaPrimary && (
                <Link href={ctaPrimary.href} className="btn btn-citron">
                  {ctaPrimary.label}
                </Link>
              )}
              {ctaSecondary && (
                <Link href={ctaSecondary.href} className="btn btn-outline-soil">
                  {ctaSecondary.label}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

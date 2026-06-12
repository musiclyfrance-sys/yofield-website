'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

interface HeroServiceProps {
  eyebrow: string
  title: string
  subtitle: string
  breadcrumbs: Array<{ label: string; href: string }>
  ctaPrimary?: { label: string; href: string }
  ctaSecondary?: { label: string; href: string }
  colorAccent?: 'citron' | 'pine' | 'sage' | 'mist' | 'soil'
  /** Optional visual panel on the right (category universe image). */
  image?: { src: string; alt: string; caption?: string }
}

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

export default function HeroService({
  eyebrow,
  title,
  subtitle,
  breadcrumbs,
  ctaPrimary,
  ctaSecondary,
  colorAccent = 'citron',
  image,
}: HeroServiceProps) {
  const reduce = useReducedMotion()

  return (
    <section className="section-padding bg-snow overflow-hidden">
      <div className="container">
        <div
          className={
            image
              ? 'grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16'
              : ''
          }
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
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
            <h1
              className={`np-900 mb-6 text-5xl text-soil md:text-6xl ${
                image ? 'max-w-2xl lg:text-6xl' : 'max-w-4xl lg:text-7xl'
              }`}
            >
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
                  <Link href={ctaPrimary.href} className="btn btn-citron group">
                    {ctaPrimary.label}
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
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

          {/* Visual panel */}
          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 1.04, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.15 }}
              className="relative"
            >
              {/* Citron glow behind the panel */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 -z-10 rounded-full opacity-[0.16] blur-3xl"
                style={{ background: 'radial-gradient(circle, #D4F551, transparent 70%)' }}
              />
              <motion.div
                animate={reduce ? undefined : { y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="relative aspect-[16/10] overflow-hidden rounded-[2rem] ring-1 ring-soil/[0.06] lg:aspect-[4/3.4]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                {image.caption && (
                  <p className="np-300i absolute bottom-4 left-4 rounded-full bg-soil/55 px-4 py-1.5 text-sm text-snow backdrop-blur-sm">
                    {image.caption}
                  </p>
                )}
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

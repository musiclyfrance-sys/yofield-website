'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { serviceCategories } from '@/data/services'

interface NavLink {
  label: string
  href: string
}

const mainLinks: NavLink[] = [
  { label: 'Le studio', href: '/le-studio' },
  { label: 'Approche', href: '/approche' },
  { label: 'Cas clients', href: '/cas' },
  { label: 'Blog', href: '/blog' },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  const isServicesActive = pathname.startsWith('/services')

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: isScrolled ? 'rgba(250,250,247,0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(8px)' : 'none',
        borderBottom: isScrolled ? '0.5px solid rgba(15,15,14,0.1)' : '0.5px solid transparent',
      }}
    >
      <div className="container">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <Link href="/" aria-label="Yofield, retour à l'accueil">
            <Image
              src="/logos/logo sur fond blanc.svg"
              alt="Yofield"
              width={120}
              height={32}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Navigation principale">
            <ul className="flex items-center gap-8">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={[
                      'font-body text-sm transition-colors duration-200',
                      isActive(link.href)
                        ? 'text-soil font-medium'
                        : 'text-soil/70 hover:text-soil',
                    ].join(' ')}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Services with dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={[
                    'flex items-center gap-1 font-body text-sm transition-colors duration-200',
                    isServicesActive
                      ? 'text-soil font-medium'
                      : 'text-soil/70 hover:text-soil',
                  ].join(' ')}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  >
                    <path
                      d="M2 4.5L6 8L10 4.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-xl bg-snow shadow-lg ring-1 ring-soil/[0.06]"
                    >
                      <ul className="p-2">
                        {serviceCategories.map((cat) => (
                          <li key={cat.slug}>
                            <Link
                              href={`/services/${cat.slug}`}
                              className="flex items-start gap-3 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-mist"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <span
                                className="mt-px font-mono text-xs text-soil/40"
                                aria-hidden="true"
                              >
                                {cat.num}
                              </span>
                              <span className="font-body text-sm text-soil">{cat.name}</span>
                            </Link>
                          </li>
                        ))}
                        <li className="mt-1 border-t border-soil/[0.06] pt-1">
                          <Link
                            href="/services"
                            className="flex items-center gap-2 rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-mist"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            <span className="font-body text-sm font-medium text-soil">
                              Tous les services
                            </span>
                            <svg
                              width="12"
                              height="12"
                              viewBox="0 0 12 12"
                              fill="none"
                              aria-hidden="true"
                              className="text-soil/40"
                            >
                              <path
                                d="M2.5 6H9.5M6.5 3L9.5 6L6.5 9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className="btn btn-citron py-2.5 px-5 text-sm"
            >
              Démarrer un projet
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label={isMobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileOpen}
          >
            <motion.span
              animate={isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="block h-[1.5px] w-5 bg-soil origin-center"
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.18 }}
              className="block h-[1.5px] w-5 bg-soil"
            />
            <motion.span
              animate={isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.22 }}
              className="block h-[1.5px] w-5 bg-soil origin-center"
            />
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 top-[72px] z-40 flex flex-col bg-snow"
          >
            <nav
              className="flex flex-1 flex-col overflow-y-auto px-6 py-8"
              aria-label="Navigation mobile"
            >
              <ul className="flex flex-col gap-1">
                <li>
                  <Link
                    href="/"
                    onClick={() => setIsMobileOpen(false)}
                    className={[
                      'block rounded-lg px-4 py-3 font-display text-2xl transition-colors duration-150',
                      isActive('/')
                        ? 'np-700 text-soil'
                        : 'np-300i text-soil/60 hover:text-soil',
                    ].join(' ')}
                  >
                    Accueil
                  </Link>
                </li>
                {mainLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileOpen(false)}
                      className={[
                        'block rounded-lg px-4 py-3 font-display text-2xl transition-colors duration-150',
                        isActive(link.href)
                          ? 'np-700 text-soil'
                          : 'np-300i text-soil/60 hover:text-soil',
                      ].join(' ')}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Mobile services section */}
              <div className="mt-6 border-t border-soil/[0.08] pt-6">
                <p className="eyebrow mb-4 px-4">Services</p>
                <ul className="flex flex-col gap-1">
                  {serviceCategories.map((cat) => (
                    <li key={cat.slug}>
                      <Link
                        href={`/services/${cat.slug}`}
                        onClick={() => setIsMobileOpen(false)}
                        className="flex items-center gap-3 rounded-lg px-4 py-2.5 transition-colors duration-150 hover:bg-mist"
                      >
                        <span className="gm text-xs text-soil/40">{cat.num}</span>
                        <span className="font-body text-base text-soil">{cat.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mobile CTA */}
              <div className="mt-auto pt-8">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileOpen(false)}
                  className="btn btn-citron block w-full py-4 text-center text-base"
                >
                  Démarrer un projet
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

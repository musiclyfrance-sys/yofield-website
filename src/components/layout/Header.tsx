'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { serviceCategories } from '@/data/services'
import { prestations } from '@/data/prestations'
import { secteurs } from '@/data/secteurs'

/* Dropdown enter/exit — x stays at -50% so left-1/2 positioning centers it */
const dropdownVariants = {
  hidden: { opacity: 0, y: 8, x: '-50%' },
  visible: { opacity: 1, y: 0, x: '-50%' },
  exit: { opacity: 0, y: 8, x: '-50%' },
}
const dropdownTransition = {
  duration: 0.18,
  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
}

/* Brand-color chip classes for menu icons */
const CHIP: Record<string, string> = {
  pine: 'bg-pine text-snow',
  soil: 'bg-soil text-snow',
  sage: 'bg-sage text-soil',
  mist: 'bg-mist text-pine',
  citron: 'bg-citron text-soil',
}
/* Secteurs have no color/glyph in data → assigned here */
const SECTEUR_COLOR = ['pine', 'citron', 'soil', 'sage', 'mist', 'pine']
const SECTEUR_GLYPH = ['◇', '◈', '◉', '◌', '◎', '❖']

function ArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path d="M3 7h8M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronDown({ className = '' }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className={className}>
      <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isSecteursOpen, setIsSecteursOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)
  const [openMobileService, setOpenMobileService] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const activeCat = serviceCategories[activeService]
  const activePrestations = prestations.filter((p) => p.categorySlug === activeCat.slug)

  const featured = secteurs.slice(0, 2)
  const otherSecteurs = secteurs.slice(2)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (isMobileOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))
  const isServicesActive = pathname.startsWith('/services')
  const isSecteursActive = pathname.startsWith('/secteurs')

  const linkClass = (active: boolean) =>
    [
      'font-body text-sm transition-colors duration-200',
      active ? 'text-soil font-medium' : 'text-soil/70 hover:text-soil',
    ].join(' ')

  return (
    <>
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
              {/* 1 — Le studio */}
              <li>
                <Link href="/le-studio" className={linkClass(isActive('/le-studio'))}>
                  Le studio
                </Link>
              </li>

              {/* 2 — Secteurs (mega-menu) */}
              <li
                className="relative"
                onMouseEnter={() => setIsSecteursOpen(true)}
                onMouseLeave={() => setIsSecteursOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 ${linkClass(isSecteursActive)}`}
                  aria-expanded={isSecteursOpen}
                  aria-haspopup="true"
                >
                  Secteurs
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"
                    className={`transition-transform duration-200 ${isSecteursOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M2 4.5L6 8L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isSecteursOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={dropdownTransition}
                      className="absolute left-1/2 top-full pt-3"
                    >
                      <div className="w-[680px] overflow-hidden rounded-3xl bg-snow p-6 shadow-xl ring-1 ring-soil/[0.06]">
                        <p className="eyebrow mb-5 text-soil/40">Secteurs</p>
                        <div className="grid grid-cols-2 gap-5">
                          {/* Featured cards */}
                          <div className="flex flex-col gap-4">
                            {featured.map((s, i) => (
                              <Link
                                key={s.slug}
                                href={`/secteurs/${s.slug}`}
                                onClick={() => setIsSecteursOpen(false)}
                                className="group relative flex min-h-[118px] flex-col justify-end overflow-hidden rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-0.5"
                                style={{
                                  background:
                                    i === 0
                                      ? 'linear-gradient(135deg,#1F3D2C,#0F0F0E)'
                                      : 'linear-gradient(135deg,#A8B5AD,#1F3D2C)',
                                }}
                              >
                                <span aria-hidden className="pointer-events-none absolute -right-2 -top-5 text-[84px] leading-none text-snow/10">
                                  {SECTEUR_GLYPH[i]}
                                </span>
                                <h3 className="np-700 relative text-lg text-snow">{s.name}</h3>
                                <p className="relative mt-1 line-clamp-2 font-body text-xs leading-snug text-snow/70">
                                  {s.tagline}
                                </p>
                              </Link>
                            ))}
                          </div>

                          {/* Other secteurs */}
                          <ul className="flex flex-col justify-center gap-1">
                            {otherSecteurs.map((s, idx) => {
                              const i = idx + 2
                              return (
                                <li key={s.slug}>
                                  <Link
                                    href={`/secteurs/${s.slug}`}
                                    onClick={() => setIsSecteursOpen(false)}
                                    className="flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors duration-150 hover:bg-mist"
                                  >
                                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-lg ${CHIP[SECTEUR_COLOR[i % SECTEUR_COLOR.length]]}`}>
                                      {SECTEUR_GLYPH[i % SECTEUR_GLYPH.length]}
                                    </span>
                                    <span className="font-body text-[15px] text-soil">{s.name}</span>
                                  </Link>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                        <div className="mt-5 border-t border-soil/[0.06] pt-3">
                          <Link
                            href="/secteurs"
                            onClick={() => setIsSecteursOpen(false)}
                            className="inline-flex items-center gap-2 font-body text-sm font-medium text-soil transition-colors hover:text-pine"
                          >
                            Tous les secteurs <ArrowRight />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* 3 — Services (mega-menu) */}
              <li
                className="relative"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button
                  className={`flex items-center gap-1 ${linkClass(isServicesActive)}`}
                  aria-expanded={isServicesOpen}
                  aria-haspopup="true"
                >
                  Services
                  <svg
                    width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"
                    className={`transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  >
                    <path d="M2 4.5L6 8L10 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      transition={dropdownTransition}
                      className="absolute left-1/2 top-full pt-3"
                    >
                      <div className="w-[680px] overflow-hidden rounded-3xl bg-snow shadow-xl ring-1 ring-soil/[0.06]">
                        <div className="grid grid-cols-[280px_1fr]">
                          {/* Pillars — hover to reveal */}
                          <div className="border-r border-soil/[0.06] p-4">
                            <p className="eyebrow mb-3 px-3 text-soil/40">Services</p>
                            <ul>
                              {serviceCategories.map((cat, i) => (
                                <li key={cat.slug}>
                                  <Link
                                    href={`/services/${cat.slug}`}
                                    onMouseEnter={() => setActiveService(i)}
                                    onFocus={() => setActiveService(i)}
                                    onClick={() => setIsServicesOpen(false)}
                                    className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors duration-150 ${
                                      i === activeService ? 'bg-mist' : 'hover:bg-mist/50'
                                    }`}
                                  >
                                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-lg ${CHIP[cat.color] || 'bg-mist text-pine'}`}>
                                      {cat.icon}
                                    </span>
                                    <span className="font-body text-[15px] text-soil">{cat.nameShort}</span>
                                    <ArrowRight
                                      className={`ml-auto text-soil transition-all duration-200 ${
                                        i === activeService ? 'translate-x-0 opacity-100' : '-translate-x-1 opacity-0'
                                      }`}
                                    />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Prestations of the active pillar */}
                          <div className="p-4">
                            <p className="mb-3 px-3 font-mono text-[11px] uppercase tracking-widest text-soil/40">
                              Nos services <span className="italic text-soil/55">{activeCat.nameShort}</span>
                            </p>
                            <ul className="flex flex-col gap-0.5">
                              {activePrestations.map((p) => (
                                <li key={p.slug}>
                                  <Link
                                    href={`/prestations/${p.slug}`}
                                    onClick={() => setIsServicesOpen(false)}
                                    className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-all duration-150 hover:bg-mist/60"
                                  >
                                    <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-full bg-citron" />
                                    <span className="flex-1 font-body text-[15px] text-soil/75 transition-colors group-hover:text-soil">
                                      {p.name}
                                    </span>
                                    <ArrowRight className="-translate-x-1 text-pine opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100" />
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="border-t border-soil/[0.06] px-6 py-3">
                          <Link
                            href="/services"
                            onClick={() => setIsServicesOpen(false)}
                            className="inline-flex items-center gap-2 font-body text-sm font-medium text-soil transition-colors hover:text-pine"
                          >
                            Tous les services <ArrowRight />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              {/* 4 — Cas clients */}
              <li>
                <Link href="/cas" className={linkClass(isActive('/cas'))}>
                  Cas clients
                </Link>
              </li>

              {/* 5 — Blog */}
              <li>
                <Link href="/blog" className={linkClass(isActive('/blog'))}>
                  Blog
                </Link>
              </li>
            </ul>

            {/* CTA */}
            <Link href="/contact" className="btn btn-citron py-2.5 px-5 text-sm">
              Démarrer un projet
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsMobileOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label={isMobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={isMobileOpen}
          >
            <motion.span animate={isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.22 }} className="block h-[1.5px] w-5 bg-soil origin-center" />
            <motion.span animate={isMobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }} transition={{ duration: 0.18 }} className="block h-[1.5px] w-5 bg-soil" />
            <motion.span animate={isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} transition={{ duration: 0.22 }} className="block h-[1.5px] w-5 bg-soil origin-center" />
          </button>
        </div>
      </div>
    </header>

    {/* Mobile overlay — portaled to body to escape the sticky header's
        containing block (backdrop-filter creates one on iOS Safari and
        traps `position: fixed` children inside the header). */}
    {mounted && createPortal(
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.32, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 top-[72px] z-40 flex flex-col bg-snow"
          >
            {/* Scrollable area */}
            <nav className="flex-1 overflow-y-auto px-6 py-8 pb-6" aria-label="Navigation mobile">
              {/* Top links */}
              <ul className="flex flex-col gap-1">
                <li>
                  <Link href="/" onClick={() => setIsMobileOpen(false)} className={['block rounded-lg px-4 py-3 font-display text-2xl transition-colors duration-150', isActive('/') ? 'np-700 text-soil' : 'np-300i text-soil/60 hover:text-soil'].join(' ')}>
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link href="/le-studio" onClick={() => setIsMobileOpen(false)} className={['block rounded-lg px-4 py-3 font-display text-2xl transition-colors duration-150', isActive('/le-studio') ? 'np-700 text-soil' : 'np-300i text-soil/60 hover:text-soil'].join(' ')}>
                    Le studio
                  </Link>
                </li>
              </ul>

              {/* Mobile services — expandable, BOLD, above secteurs */}
              <div className="mt-6 border-t border-soil/[0.08] pt-6">
                <p className="eyebrow mb-4 px-4">Services</p>
                <ul className="flex flex-col gap-1">
                  {serviceCategories.map((cat, i) => {
                    const isOpen = openMobileService === i
                    const list = prestations.filter((p) => p.categorySlug === cat.slug)
                    return (
                      <li key={cat.slug}>
                        <button
                          type="button"
                          onClick={() => setOpenMobileService(isOpen ? null : i)}
                          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-colors duration-150 hover:bg-mist"
                          aria-expanded={isOpen}
                        >
                          <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-base ${CHIP[cat.color] || 'bg-mist text-pine'}`}>
                            {cat.icon}
                          </span>
                          <span className="flex-1 font-body text-base font-semibold text-soil">{cat.nameShort}</span>
                          <ChevronDown className={`shrink-0 text-soil/50 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                              className="overflow-hidden"
                            >
                              <ul className="flex flex-col gap-0.5 pb-2 pl-16 pr-2 pt-1">
                                {list.map((p) => (
                                  <li key={p.slug}>
                                    <Link
                                      href={`/prestations/${p.slug}`}
                                      onClick={() => setIsMobileOpen(false)}
                                      className="flex items-center gap-3 rounded-md px-3 py-2 font-body text-sm text-soil/70 hover:bg-mist"
                                    >
                                      <span aria-hidden className="h-1 w-1 shrink-0 rounded-full bg-citron" />
                                      <span>{p.name}</span>
                                    </Link>
                                  </li>
                                ))}
                                <li>
                                  <Link
                                    href={`/services/${cat.slug}`}
                                    onClick={() => setIsMobileOpen(false)}
                                    className="inline-flex items-center gap-2 rounded-md px-3 py-2 font-body text-sm font-medium text-pine hover:bg-mist"
                                  >
                                    Voir {cat.nameShort} <ArrowRight />
                                  </Link>
                                </li>
                              </ul>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </li>
                    )
                  })}
                </ul>
              </div>

              {/* Mobile secteurs — simple list, below services */}
              <div className="mt-6 border-t border-soil/[0.08] pt-6">
                <p className="eyebrow mb-4 px-4">Secteurs</p>
                <ul className="flex flex-col gap-1">
                  {secteurs.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/secteurs/${s.slug}`} onClick={() => setIsMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-4 py-2.5 transition-colors duration-150 hover:bg-mist">
                        <span className="gm text-xs text-soil/40">{s.num}</span>
                        <span className="font-body text-base text-soil">{s.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tail links */}
              <ul className="mt-6 flex flex-col gap-1 border-t border-soil/[0.08] pt-6">
                <li>
                  <Link href="/cas" onClick={() => setIsMobileOpen(false)} className={['block rounded-lg px-4 py-3 font-display text-2xl transition-colors duration-150', isActive('/cas') ? 'np-700 text-soil' : 'np-300i text-soil/60 hover:text-soil'].join(' ')}>
                    Cas clients
                  </Link>
                </li>
                <li>
                  <Link href="/blog" onClick={() => setIsMobileOpen(false)} className={['block rounded-lg px-4 py-3 font-display text-2xl transition-colors duration-150', isActive('/blog') ? 'np-700 text-soil' : 'np-300i text-soil/60 hover:text-soil'].join(' ')}>
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Pinned CTA — always visible */}
            <div
              className="border-t border-soil/[0.08] bg-snow px-6 py-4"
              style={{ paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 1rem)' }}
            >
              <Link
                href="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="btn btn-citron block w-full py-4 text-center text-base"
              >
                Démarrer un projet
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )}
    </>
  )
}

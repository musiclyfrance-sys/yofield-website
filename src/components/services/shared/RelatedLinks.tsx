/**
 * RelatedLinks — "Aller plus loin" as a grid of real cards.
 * Every destination (prestation, domaine, cas client) becomes a tactile
 * card: tag chip, big title, and an arrow-in-a-circle that fills citron
 * on hover. Staggered reveal on scroll. The closing CTA lives in
 * CTABanner, appended by the templates right after this section.
 */

import Link from 'next/link'
import ScrollReveal from '@/components/animations/ScrollReveal'
import { serviceCategories, getCategoryBySlug } from '@/data/services'
import {
  getPrestationsByCategory,
  getPrestationBySlug,
} from '@/data/prestations'
import { getCasByService, getCasByCategory } from '@/data/cas'
import type { CasStudy, Prestation, ServiceCategory } from '@/types'

interface RelatedLinksProps {
  currentSlug: string
  currentType: 'prestation' | 'category'
  parentCategorySlug?: string
}

interface CardItem {
  href: string
  tag: string
  dot: string // tailwind bg class for the tag dot
  title: string
}

function RelatedCard({ item, index }: { item: CardItem; index: number }) {
  return (
    <ScrollReveal delay={0.06 * index} className="h-full">
      <Link
        href={item.href}
        className="group flex h-full flex-col justify-between gap-6 rounded-2xl bg-snow p-5 ring-1 ring-soil/[0.08] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-soil/20 md:min-h-[180px] md:gap-8 md:p-7"
      >
        <div>
          <p className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-soil/45">
            <span aria-hidden className={`h-1.5 w-1.5 rounded-full ${item.dot}`} />
            {item.tag}
          </p>
          <h3 className="np-700 text-lg leading-snug text-soil transition-colors duration-200 group-hover:text-pine md:text-xl">
            {item.title}
          </h3>
        </div>

        <div className="flex items-center justify-between">
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
    </ScrollReveal>
  )
}

export default function RelatedLinks({
  currentSlug,
  currentType,
  parentCategorySlug,
}: RelatedLinksProps) {
  let parentCategory: ServiceCategory | undefined
  let sisterPrestations: Prestation[] = []
  let sisterCategories: ServiceCategory[] = []
  let relatedCas: CasStudy[] = []
  let currentCategoryPrestations: Prestation[] = []

  if (currentType === 'prestation') {
    if (parentCategorySlug) {
      parentCategory = getCategoryBySlug(parentCategorySlug)
    } else {
      const currentPrestation = getPrestationBySlug(currentSlug)
      if (currentPrestation) {
        parentCategory = getCategoryBySlug(currentPrestation.categorySlug)
      }
    }

    const catSlug = parentCategory?.slug ?? parentCategorySlug ?? ''
    sisterPrestations = getPrestationsByCategory(catSlug)
      .filter((p) => p.slug !== currentSlug)
      .slice(0, 2)

    sisterCategories = serviceCategories
      .filter((c) => c.slug !== catSlug)
      .slice(0, 1)

    relatedCas = getCasByService(currentSlug).slice(0, 2)
  } else {
    sisterCategories = serviceCategories
      .filter((c) => c.slug !== currentSlug)
      .slice(0, 2)

    currentCategoryPrestations = getPrestationsByCategory(currentSlug).slice(0, 2)

    relatedCas = getCasByCategory(currentSlug).slice(0, 2)
  }

  /* Flatten everything into a single, consistent card list */
  const cards: CardItem[] = [
    ...(currentType === 'prestation' && parentCategory
      ? [{
          href: `/services/${parentCategory.slug}`,
          tag: 'Domaine parent',
          dot: 'bg-pine',
          title: parentCategory.name,
        }]
      : []),
    ...currentCategoryPrestations.map((p) => ({
      href: `/prestations/${p.slug}`,
      tag: 'Prestation incluse',
      dot: 'bg-citron',
      title: p.nameFull,
    })),
    ...sisterPrestations.map((p) => ({
      href: `/prestations/${p.slug}`,
      tag: 'Prestation liée',
      dot: 'bg-citron',
      title: p.nameFull,
    })),
    ...sisterCategories.map((c) => ({
      href: `/services/${c.slug}`,
      tag: 'Autre domaine',
      dot: 'bg-pine',
      title: c.name,
    })),
    ...relatedCas.map((cas) => ({
      href: `/cas/${cas.slug}`,
      tag: 'Cas client',
      dot: 'bg-sage',
      title: cas.title,
    })),
  ]

  /* Hard cap: 6 cards max — keeps the section scannable, no endless mobile scroll */
  const visibleCards = cards.slice(0, 6)

  if (visibleCards.length === 0) return null

  return (
    <section className="section-padding bg-mist">
      <div className="container">
        <div className="mb-12 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow mb-3 text-soil/50">Explorer</p>
            <h2 className="np-800 text-3xl text-soil md:text-4xl">Aller plus loin.</h2>
          </div>
          <Link
            href="/services"
            className="btn btn-outline-soil self-start px-5 py-2.5 text-sm md:self-end"
          >
            Tous les services
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {visibleCards.map((item, i) => (
            <RelatedCard key={item.href} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

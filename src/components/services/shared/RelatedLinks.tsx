/**
 * RelatedLinks — "Aller plus loin" as a compact index.
 * Internal-linking section (SEO + discovery) kept deliberately light:
 * slim rows in two columns, color-coded dot by destination type, a small
 * ↗ that straightens on hover. The heavy lifting (CTA) happens right
 * after in CTABanner — this block should never steal the show.
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

interface RowItem {
  href: string
  tag: string
  dot: string
  title: string
}

function RelatedRow({ item }: { item: RowItem }) {
  return (
    <Link
      href={item.href}
      className="group flex items-center gap-3 border-b border-soil/[0.08] py-3.5"
    >
      <span aria-hidden className={`h-1.5 w-1.5 flex-shrink-0 rounded-full ${item.dot}`} />
      <span className="sr-only">{item.tag} :</span>
      <span className="min-w-0 flex-1 truncate font-body text-[15px] text-soil/75 transition-colors duration-200 group-hover:text-pine">
        {item.title}
      </span>
      <svg
        width="13"
        height="13"
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden="true"
        className="-rotate-45 flex-shrink-0 text-soil/30 transition-all duration-300 group-hover:rotate-0 group-hover:text-pine"
      >
        <path
          d="M2.5 7H11.5M7.5 3L11.5 7L7.5 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
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

  const rows: RowItem[] = [
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
  ].slice(0, 6)

  if (rows.length === 0) return null

  return (
    <section className="bg-mist py-14 md:py-20">
      <div className="container">
        <ScrollReveal>
          <div className="mb-8 flex items-end justify-between gap-4 md:mb-10">
            <div>
              <p className="eyebrow mb-2 text-soil/50">Explorer</p>
              <h2 className="np-700 text-2xl text-soil md:text-3xl">Aller plus loin.</h2>
            </div>
            <div className="hidden sm:block">
              <Link href="/services" className="btn btn-outline-soil px-5 py-2.5 text-sm">
                Tous les services
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-x-12 border-t border-soil/[0.08] md:grid-cols-2">
            {rows.map((item) => (
              <RelatedRow key={item.href} item={item} />
            ))}
          </div>

          <div className="mt-8 sm:hidden">
            <Link href="/services" className="btn btn-outline-soil px-5 py-2.5 text-sm">
              Tous les services
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

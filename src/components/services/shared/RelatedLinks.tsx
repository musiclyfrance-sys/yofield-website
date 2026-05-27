import Link from 'next/link'
import { serviceCategories, getCategoryBySlug } from '@/data/services'
import {
  prestations,
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

function LinkItem({
  href,
  label,
}: {
  href: string
  label: string
}) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-1.5 font-body text-sm text-soil transition-colors duration-200 hover:text-pine"
    >
      <span>{label}</span>
      <span className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
        &rarr;
      </span>
    </Link>
  )
}

function GroupSection({
  heading,
  children,
}: {
  heading: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-3">
      <p className="eyebrow text-soil/50">{heading}</p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
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
    // Parent category
    if (parentCategorySlug) {
      parentCategory = getCategoryBySlug(parentCategorySlug)
    } else {
      const currentPrestation = getPrestationBySlug(currentSlug)
      if (currentPrestation) {
        parentCategory = getCategoryBySlug(currentPrestation.categorySlug)
      }
    }

    // Sister prestations: same category, exclude current
    const catSlug = parentCategory?.slug ?? parentCategorySlug ?? ''
    sisterPrestations = getPrestationsByCategory(catSlug)
      .filter((p) => p.slug !== currentSlug)
      .slice(0, 3)

    // Sister categories: exclude parent
    sisterCategories = serviceCategories
      .filter((c) => c.slug !== catSlug)
      .slice(0, 2)

    // Related cas
    relatedCas = getCasByService(currentSlug).slice(0, 2)
  } else {
    // Category page
    sisterCategories = serviceCategories
      .filter((c) => c.slug !== currentSlug)
      .slice(0, 3)

    currentCategoryPrestations = getPrestationsByCategory(currentSlug).slice(0, 3)

    relatedCas = getCasByCategory(currentSlug).slice(0, 2)
  }

  const hasContent =
    (parentCategory !== undefined) ||
    sisterPrestations.length > 0 ||
    sisterCategories.length > 0 ||
    relatedCas.length > 0 ||
    currentCategoryPrestations.length > 0

  if (!hasContent) return null

  return (
    <section className="section-padding bg-mist">
      <div className="container">
        {/* Header */}
        <div className="mb-10">
          <p className="eyebrow mb-2 text-soil/50">Explorer</p>
          <h2 className="np-700 text-2xl text-soil">Aller plus loin</h2>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Prestation page: parent category */}
          {currentType === 'prestation' && parentCategory && (
            <GroupSection heading="Categorie parente">
              <LinkItem
                href={`/services/${parentCategory.slug}`}
                label={parentCategory.name}
              />
            </GroupSection>
          )}

          {/* Prestation page: sister prestations */}
          {currentType === 'prestation' && sisterPrestations.length > 0 && (
            <GroupSection heading="Prestations liées">
              {sisterPrestations.map((p) => (
                <LinkItem
                  key={p.slug}
                  href={`/prestations/${p.slug}`}
                  label={p.nameFull}
                />
              ))}
            </GroupSection>
          )}

          {/* Category page: prestations in this category */}
          {currentType === 'category' && currentCategoryPrestations.length > 0 && (
            <GroupSection heading="Prestations incluses">
              {currentCategoryPrestations.map((p) => (
                <LinkItem
                  key={p.slug}
                  href={`/prestations/${p.slug}`}
                  label={p.nameFull}
                />
              ))}
            </GroupSection>
          )}

          {/* Other service categories */}
          {sisterCategories.length > 0 && (
            <GroupSection heading="Autres domaines">
              {sisterCategories.map((c) => (
                <LinkItem
                  key={c.slug}
                  href={`/services/${c.slug}`}
                  label={c.name}
                />
              ))}
            </GroupSection>
          )}

          {/* Related cas */}
          {relatedCas.length > 0 && (
            <GroupSection heading="Cas concrets">
              {relatedCas.map((cas) => (
                <LinkItem
                  key={cas.slug}
                  href={`/cas/${cas.slug}`}
                  label={cas.title}
                />
              ))}
            </GroupSection>
          )}
        </div>

        {/* Final CTA row */}
        <div className="rounded-2xl bg-pine p-6 md:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-col gap-1">
              <p className="np-700 text-xl text-snow">Démarrer un projet</p>
              <p className="font-body text-sm text-snow/60">
                Ou écrire directement à{' '}
                <a
                  href="mailto:hello@yofield.fr"
                  className="text-snow/80 underline underline-offset-2 transition-colors duration-200 hover:text-citron"
                >
                  hello@yofield.fr
                </a>
              </p>
            </div>
            <Link href="/contact" className="btn btn-citron self-start md:self-auto">
              Démarrer la conversation
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

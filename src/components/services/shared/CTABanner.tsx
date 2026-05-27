import Link from 'next/link'

interface CTABannerProps {
  variant?: 'citron' | 'pine' | 'soil'
  title?: string
  subtitle?: string
  ctaLabel?: string
  ctaHref?: string
}

const variantStyles = {
  citron: {
    section: 'bg-citron',
    title: 'text-soil',
    subtitle: 'text-soil/70',
    btn: 'btn btn-outline-soil',
  },
  pine: {
    section: 'bg-pine',
    title: 'text-snow',
    subtitle: 'text-snow/70',
    btn: 'btn btn-outline-snow',
  },
  soil: {
    section: 'bg-soil',
    title: 'text-snow',
    subtitle: 'text-snow/70',
    btn: 'btn btn-outline-snow',
  },
}

export default function CTABanner({
  variant = 'citron',
  title = 'Vous avez un projet en tete ?',
  subtitle = 'On vous repond sous 48 heures.',
  ctaLabel = 'Demarrer la conversation',
  ctaHref = '/contact',
}: CTABannerProps) {
  const styles = variantStyles[variant]

  return (
    <section className={`${styles.section} py-20`}>
      <div className="container text-center">
        <h2 className={`np-800 mb-4 text-4xl md:text-5xl ${styles.title}`}>
          {title}
        </h2>

        <p className={`mx-auto mb-10 max-w-md font-body text-base ${styles.subtitle}`}>
          {subtitle}
        </p>

        <Link href={ctaHref} className={styles.btn}>
          {ctaLabel}
        </Link>
      </div>
    </section>
  )
}

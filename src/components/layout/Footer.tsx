import Link from 'next/link'
import Image from 'next/image'
import { serviceCategories } from '@/data/services'

const studioLinks = [
  { label: 'Le studio', href: '/le-studio' },
  { label: 'Approche', href: '/approche' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
  { label: 'CGV', href: '/conditions-generales-vente' },
]

export default function Footer() {
  return (
    <footer className="bg-soil text-snow">
      <div className="container pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1fr_auto_auto_auto] lg:gap-16">
          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="Yofield, retour à l'accueil">
              <Image
                src="/logos/logo-fond-noir.svg"
                alt="Yofield"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            <p className="max-w-xs font-body text-sm leading-relaxed text-snow/60">
              Là où votre marque trouve sa forme, sa voix et son terrain.
            </p>

            <a
              href="mailto:hello@yofield.fr"
              className="font-body text-sm text-snow/70 transition-colors duration-200 hover:text-citron"
            >
              hello@yofield.fr
            </a>
          </div>

          {/* Studio column */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-snow/40">Studio</p>
            <ul className="flex flex-col gap-3">
              {studioLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-snow/70 transition-colors duration-200 hover:text-citron"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-snow/40">Services</p>
            <ul className="flex flex-col gap-3">
              {serviceCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/services/${cat.slug}`}
                    className="font-body text-sm text-snow/70 transition-colors duration-200 hover:text-citron"
                  >
                    {cat.nameShort}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal column */}
          <div className="flex flex-col gap-4">
            <p className="eyebrow text-snow/40">Légal</p>
            <ul className="flex flex-col gap-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-snow/70 transition-colors duration-200 hover:text-citron"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-12 flex flex-col items-start gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: '0.5px solid rgba(250,250,247,0.15)' }}
        >
          <p className="font-body text-xs text-snow/40">
            © 2025 Yofield. Fait avec soin en France.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/sitemap.xml"
              className="font-body text-xs text-snow/40 transition-colors duration-200 hover:text-citron"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

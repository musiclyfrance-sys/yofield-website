import Link from 'next/link'
import Image from 'next/image'
import FooterServices from './FooterServices'

const mainNav = [
  { label: 'Le studio', href: '/le-studio' },
  { label: 'Secteurs', href: '/secteurs' },
  { label: 'Services', href: '/services' },
  { label: 'Cas clients', href: '/cas' },
  { label: 'Blog', href: '/blog' },
]

const legalLinks = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'Confidentialité', href: '/politique-de-confidentialite' },
  { label: 'CGV', href: '/conditions-generales-vente' },
  { label: 'Sitemap', href: '/sitemap.xml' },
]

export default function Footer() {
  return (
    <footer className="bg-soil text-snow">
      <div className="container pt-16 pb-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr] lg:gap-16">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link href="/" aria-label="Yofield, retour à l'accueil">
              <Image
                src="/logos/logo sur fond noir.svg"
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
              href="mailto:hello@yofield.com"
              className="font-body text-sm text-snow/70 transition-colors duration-200 hover:text-citron"
            >
              hello@yofield.com
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation pied de page">
            <p className="eyebrow mb-5 text-snow/40">Navigation</p>
            <ul className="flex flex-col gap-3">
              {mainNav.map((link) => (
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
          </nav>

          {/* Services */}
          <FooterServices />
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 flex flex-col items-start gap-4 pt-8 sm:flex-row sm:items-center sm:justify-between"
          style={{ borderTop: '0.5px solid rgba(250,250,247,0.15)' }}
        >
          <p className="font-body text-xs text-snow/40">© {new Date().getFullYear()} Yofield. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-xs text-snow/40 transition-colors duration-200 hover:text-citron"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

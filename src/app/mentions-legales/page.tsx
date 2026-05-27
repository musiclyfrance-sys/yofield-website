import Link from 'next/link'
import SiteLayout from '@/components/layout/Navigation'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Mentions légales — Yofield',
  description:
    "Mentions légales du site Yofield. Éditeur, hébergeur, propriété intellectuelle.",
  canonical: '/mentions-legales',
  noIndex: true,
})

export default function MentionsLegalesPage() {
  return (
    <SiteLayout>
      <section className="section-padding bg-snow">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Link
              href="/"
              className="inline-block font-body text-sm text-soil/55 hover:text-soil transition-colors mb-12"
            >
              ← Retour à l'accueil
            </Link>

            <h1 className="np-700 text-3xl text-soil mb-12">
              Mentions légales
            </h1>

            <div className="space-y-10">
              <div>
                <h2 className="np-700 text-xl text-soil mb-3">
                  Éditeur du site
                </h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Yofield, studio créatif et digital.
                  <br />
                  Contact :{' '}
                  <a
                    href="mailto:hello@yofield.com"
                    className="underline underline-offset-4 hover:text-soil transition-colors"
                  >
                    hello@yofield.com
                  </a>
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">Hébergement</h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Ce site est hébergé par Vercel Inc., 340 Pine Street Suite 701,
                  San Francisco, California 94104, États-Unis.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">
                  Propriété intellectuelle
                </h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  L'ensemble du contenu de ce site (textes, images, logos, code) est
                  la propriété exclusive de Yofield. Toute reproduction, même partielle,
                  est interdite sans autorisation écrite préalable.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">Cookies</h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Ce site utilise des cookies techniques strictement nécessaires à son
                  fonctionnement. Aucun cookie publicitaire ou de traçage tiers n'est
                  déposé.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">
                  Données personnelles
                </h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Les données collectées via le formulaire de contact sont utilisées
                  uniquement pour répondre à vos demandes. Elles ne sont pas partagées
                  avec des tiers. Conformément au RGPD, vous disposez d'un droit
                  d'accès, de rectification et de suppression de vos données en
                  contactant{' '}
                  <a
                    href="mailto:hello@yofield.com"
                    className="underline underline-offset-4 hover:text-soil transition-colors"
                  >
                    hello@yofield.com
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

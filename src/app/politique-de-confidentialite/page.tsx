import Link from 'next/link'
import SiteLayout from '@/components/layout/Navigation'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Politique de confidentialité — Yofield',
  description:
    "Politique de confidentialité de Yofield : traitement des données personnelles, droits RGPD.",
  canonical: '/politique-de-confidentialite',
  noIndex: true,
})

export default function PolitiqueConfidentialitePage() {
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
              Politique de confidentialité
            </h1>

            <div className="space-y-10">
              <div>
                <h2 className="np-700 text-xl text-soil mb-3">
                  Responsable du traitement
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
                <h2 className="np-700 text-xl text-soil mb-3">
                  Données collectées
                </h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Les données collectées via le formulaire de contact sont les suivantes :
                  nom, adresse e-mail et description du projet. Aucune autre donnée n'est
                  collectée automatiquement au-delà des cookies techniques nécessaires au
                  fonctionnement du site.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">
                  Finalité du traitement
                </h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Les données collectées sont utilisées exclusivement pour répondre aux
                  demandes de contact et de devis soumises via le formulaire. Elles ne
                  font l'objet d'aucune utilisation commerciale ou de prospection.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">
                  Durée de conservation
                </h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Les données sont conservées pendant 12 mois à compter du dernier
                  contact. Passé ce délai, elles sont supprimées de nos systèmes.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">
                  Droits des personnes
                </h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Conformément au Règlement général sur la protection des données (RGPD),
                  vous disposez des droits suivants : accès, rectification, suppression,
                  limitation du traitement et portabilité de vos données. Pour exercer
                  ces droits, adressez votre demande à{' '}
                  <a
                    href="mailto:hello@yofield.com"
                    className="underline underline-offset-4 hover:text-soil transition-colors"
                  >
                    hello@yofield.com
                  </a>
                  .
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">
                  Hébergement des données
                </h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Les données sont hébergées par Vercel Inc., 340 Pine Street Suite 701,
                  San Francisco, California 94104, États-Unis. Ce transfert est encadré
                  par les clauses contractuelles types adoptées par la Commission
                  européenne.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">Cookies</h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Ce site utilise uniquement des cookies techniques indispensables à son
                  bon fonctionnement. Aucun cookie publicitaire, de profilage ou de
                  traçage tiers n'est déposé sur votre appareil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

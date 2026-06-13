import Link from 'next/link'
import SiteLayout from '@/components/layout/Navigation'
import { buildMetadata } from '@/lib/metadata'

export const metadata = buildMetadata({
  title: 'Conditions générales de vente · Yofield',
  description:
    "Conditions générales de vente de Yofield studio créatif et digital.",
  canonical: '/conditions-generales-vente',
  noIndex: true,
})

export default function ConditionsGeneralesVentePage() {
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
              Conditions générales de vente
            </h1>

            <div className="space-y-10">
              <div>
                <h2 className="np-700 text-xl text-soil mb-3">Objet</h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Les présentes conditions générales de vente régissent l'ensemble des
                  prestations de services proposées par Yofield à ses clients. Toute
                  commande implique l'acceptation sans réserve des présentes conditions.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">Prestations</h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Yofield est un studio créatif et digital intervenant dans les domaines
                  du branding, de la création de sites web, du référencement naturel (SEO
                  et GEO), de la stratégie de contenu et de l'intégration de l'intelligence
                  artificielle. Un devis détaillé est systématiquement établi avant toute
                  prise en charge de mission.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">
                  Tarifs et paiement
                </h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Les tarifs sont définis sur devis et communiqués au client avant toute
                  collaboration. Un acompte de 50 % du montant total est exigible à la
                  commande. Le solde est dû à la livraison des livrables finaux. Les
                  factures sont payables par virement bancaire dans un délai de 30 jours
                  à compter de leur émission.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">Délais</h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Les délais de réalisation sont définis dans le devis et peuvent varier
                  en fonction des retours et validations du client. Yofield ne saurait
                  être tenu responsable de tout retard imputable à un manque de retours
                  du client dans les délais convenus.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">
                  Propriété intellectuelle
                </h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Les droits de propriété intellectuelle afférents aux livrables sont
                  transférés au client après paiement intégral du montant dû. Jusqu'à ce
                  règlement, Yofield demeure seul titulaire des droits sur les créations
                  réalisées.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">Résiliation</h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Toute résiliation de la mission doit être notifiée par écrit (e-mail
                  faisant foi). L'acompte versé reste acquis à Yofield en compensation
                  du travail engagé et des ressources mobilisées. Si la résiliation
                  intervient en cours d'exécution, un état d'avancement sera transmis
                  au client.
                </p>
              </div>

              <div className="divider-soil" />

              <div>
                <h2 className="np-700 text-xl text-soil mb-3">
                  Droit applicable
                </h2>
                <p className="font-body text-sm text-soil/75 leading-relaxed">
                  Les présentes conditions générales de vente sont soumises au droit
                  français. En cas de litige, et à défaut de résolution amiable, les
                  tribunaux compétents seront ceux de Paris.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}

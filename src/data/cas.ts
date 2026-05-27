import type { CasStudy } from '@/types'

/* ─── Cas clients — Yofield ────────────────────────────────────────
   Données de démonstration — à remplacer par les vrais cas au lancement
   Règle : description, challenge, approach, result → jamais de "—"
──────────────────────────────────────────────────────────────────── */

export const casStudies: CasStudy[] = [
  {
    slug: 'branding-complet-studio-architecture',
    title: 'Identité complète pour un studio d\'architecture parisien',
    client: 'Studio Forma',
    sector: 'Architecture et design intérieur',
    year: 2025,
    description:
      "Refonte totale de l'identité d'un studio d'architecture de 12 personnes : positionnement, logo, charte graphique, site vitrine et brand voice. Du brief au lancement public en sept semaines.",
    challenge:
      "Studio Forma avait une identité visuelle vieillissante qui ne reflétait plus la qualité de leur travail. Leur site était générique, leur positionnement flou entre architecture résidentielle haut de gamme et projets commerciaux. Résultat : des clients arrivaient sans comprendre clairement ce que le studio faisait vraiment.",
    approach:
      "On a commencé par deux jours d'immersion avec les associés pour comprendre leurs projets préférés, leurs clients idéaux et les mandats qu'ils voulaient arrêter d'accepter. De là, on a construit un positionnement clair autour du résidentiel haut de gamme parisien. Puis l'identité visuelle a suivi, avec un système graphique sobre qui laisse la place aux images de projets. Le site a été conçu comme un portfolio filtrable, avec un SEO orienté requêtes locales.",
    result:
      "Trois mois après le lancement, Studio Forma ranke en première page sur ses cinq requêtes cibles à Paris. Le premier contact venu via le site était qualifié : un projet de rénovation d'un appartement haussmannien de 180m².",
    services: [
      'strategie-de-positionnement-de-marque',
      'logo-et-charte-graphique',
      'brand-voice-ton-de-marque',
      'creation-site-vitrine',
      'strategie-seo-referencement-naturel',
    ],
    categories: [
      'branding-identite-de-marque',
      'creation-sites-applications',
      'communication-digitale-acquisition',
    ],
    coverImage: '/images/cas/studio-forma-cover.jpg',
    coverAlt: 'Interface du site Studio Forma avec galerie de projets d\'architecture',
    featured: true,
    tags: ['branding', 'site vitrine', 'SEO', 'architecture', 'Paris'],
  },

  {
    slug: 'automatisation-ia-cabinet-conseil',
    title: 'Système d\'agents IA pour un cabinet de conseil RH',
    client: 'Optimum RH',
    sector: 'Conseil en ressources humaines',
    year: 2025,
    description:
      "Conception et déploiement de trois agents IA pour automatiser la qualification des leads entrants, la génération des propositions commerciales et la synthèse des entretiens de recrutement.",
    challenge:
      "Optimum RH recevait 40 à 60 demandes de contact par mois. Chaque qualification prenait 20 à 45 minutes à une consultante senior : lecture du formulaire, recherche sur l'entreprise, évaluation du potentiel, rédaction de la première réponse. Cela représentait 25 heures par mois perdues sur une tâche qui ne nécessitait pas réellement une expertise humaine.",
    approach:
      "On a commencé par cartographier précisément le processus de qualification existant. Puis on a construit trois agents : le premier qualifie les leads en 90 secondes (recherche LinkedIn + Google, analyse du formulaire, scoring automatique), le second génère un premier jet de proposition commerciale adapté au profil, le troisième synthétise les notes d'entretien en fiche candidate structurée. Chaque agent a ses limites définies et soumet à validation humaine les décisions importantes.",
    result:
      "Les 25 heures mensuelles de qualification manuelle sont passées à 3 heures de supervision et validation. Les consultantes passent leur temps sur les missions à valeur ajoutée. Le délai de première réponse aux leads est passé de 48h à 4h en moyenne.",
    services: [
      'creation-agents-ia',
      'automatisations-ia',
      'optimisation-processus-internes',
    ],
    categories: [
      'intelligence-artificielle-automatisation',
    ],
    coverImage: '/images/cas/optimum-rh-cover.jpg',
    coverAlt: 'Dashboard de supervision des agents IA Optimum RH',
    featured: true,
    tags: ['agents IA', 'automatisation', 'RH', 'qualification leads', 'cabinet conseil'],
  },

  {
    slug: 'ecommerce-marque-cosmetique',
    title: 'Lancement e-commerce pour une marque de cosmétiques naturels',
    client: 'Flore & Minéral',
    sector: 'Cosmétique et beauté naturelle',
    year: 2025,
    description:
      "Création complète de l'identité de marque, du site e-commerce Shopify et de la stratégie d'acquisition pour le lancement d'une nouvelle marque de cosmétiques naturels françaises.",
    challenge:
      "Flore et Minéral arrivait sur un marché encombré avec une proposition solide mais sans identité visuelle ni présence digitale. Le fondateur avait un produit de qualité et une histoire authentique, mais aucun outil pour la raconter. Délai imposé : lancement en trois mois avant la saison estivale.",
    approach:
      "On a travaillé en parallèle sur l'identité de marque et le site, ce qui a permis de tenir le délai. Le positionnement a été construit autour de la transparence des ingrédients et de la fabrication française. L'identité visuelle joue la sobriété minérale avec des touches végétales. Le site Shopify a été développé sur-mesure avec un tunnel de commande optimisé pour réduire l'abandon. La stratégie d'acquisition a combiné SEO de niche, Instagram organique et une campagne Meta Ads au lancement.",
    result:
      "Le site a réalisé 67 commandes dans les 30 premiers jours avec un panier moyen de 58 euros. Le taux de conversion était de 3,2% dès le premier mois, au-dessus de la moyenne du secteur cosmétique en ligne.",
    services: [
      'strategie-de-positionnement-de-marque',
      'logo-et-charte-graphique',
      'creation-site-ecommerce',
      'strategie-seo-referencement-naturel',
      'strategie-paid-social',
      'creation-contenus-social-media',
    ],
    categories: [
      'branding-identite-de-marque',
      'creation-sites-applications',
      'communication-digitale-acquisition',
      'production-contenus',
    ],
    coverImage: '/images/cas/flore-mineral-cover.jpg',
    coverAlt: 'Site e-commerce Flore et Minéral avec pages produits cosmétiques',
    featured: true,
    tags: ['e-commerce', 'Shopify', 'branding', 'cosmétique', 'lancement', 'Meta Ads'],
  },

  {
    slug: 'refonte-site-cabinet-expert-comptable',
    title: 'Refonte SEO et site vitrine pour un cabinet d\'expertise comptable',
    client: 'Leblanc & Associés',
    sector: 'Expertise comptable et conseil fiscal',
    year: 2024,
    description:
      "Refonte complète du site d'un cabinet d'expertise comptable de 8 personnes avec une stratégie SEO locale axée sur les TPE et PME franciliennes.",
    challenge:
      "Le site de Leblanc et Associés était vieux de six ans, non optimisé pour le mobile et invisible sur Google. Le cabinet recevait la quasi-totalité de ses nouveaux clients par recommandation, ce qui créait une dépendance fragile. L'objectif était de créer un canal d'acquisition digital complémentaire.",
    approach:
      "L'audit SEO a révélé que le cabinet avait une autorité de domaine correcte mais aucune page optimisée pour les requêtes locales. On a d'abord documenté et planifié les redirections 301 avant de toucher quoi que ce soit. Puis on a construit la nouvelle architecture avec des pages de services spécifiques (comptabilité TPE, fiscal PME, création entreprise), des pages locales (Paris 8e, Neuilly, Levallois) et un blog de conseil fiscal. Le design sobre reflète la rigueur du métier.",
    result:
      "Six mois après la refonte, le site génère 12 à 18 leads qualifiés par mois via Google, ce qui représente un nouveau canal d'acquisition autonome. Le cabinet a recruté un collaborateur supplémentaire pour gérer la charge.",
    services: [
      'refonte-site-web',
      'strategie-seo-referencement-naturel',
      'redaction-copywriting',
    ],
    categories: [
      'creation-sites-applications',
      'communication-digitale-acquisition',
      'production-contenus',
    ],
    coverImage: '/images/cas/leblanc-associes-cover.jpg',
    coverAlt: 'Site vitrine Leblanc et Associés cabinet d\'expertise comptable',
    featured: false,
    tags: ['refonte', 'SEO local', 'expertise comptable', 'TPE PME', 'Île-de-France'],
  },

  {
    slug: 'ai-brand-voice-groupe-immobilier',
    title: 'Système AI Brand Voice pour un groupe immobilier de 45 personnes',
    client: 'Groupe Pavillon',
    sector: 'Immobilier résidentiel et commercial',
    year: 2025,
    description:
      "Création d'un système AI Brand Voice complet pour homogénéiser la communication d'une équipe de 45 commerciaux et chargés de communication répartis sur quatre agences.",
    challenge:
      "Groupe Pavillon avait un problème de cohérence de marque à grande échelle. 45 personnes produisaient des contenus (annonces, emails clients, posts LinkedIn, propositions commerciales) avec des tons et des vocabulaires radicalement différents. Les clients avaient du mal à identifier une marque claire.",
    approach:
      "On a commencé par collecter et analyser 200 contenus produits par l'équipe sur six mois. De là, on a identifié les patterns de voix les plus appréciés par les clients et ceux qui créaient de la confusion. On a construit le brand voice guide, puis le système de prompts IA intégré à Claude et à ChatGPT. On a formé l'ensemble de l'équipe en deux sessions de deux heures. Le système inclut des templates de prompts pour les 12 cas d'usage les plus fréquents.",
    result:
      "Trois mois après le déploiement, 38 des 45 collaborateurs utilisent activement le système. Le directeur de communication estime que le temps de rédaction des propositions commerciales a été réduit de 40%. La cohérence de ton est mesurée via un audit mensuel des contenus publiés.",
    services: [
      'brand-voice-ton-de-marque',
      'ai-brand-voice',
    ],
    categories: [
      'branding-identite-de-marque',
      'intelligence-artificielle-automatisation',
    ],
    coverImage: '/images/cas/groupe-pavillon-cover.jpg',
    coverAlt: 'Interface du système AI Brand Voice Groupe Pavillon',
    featured: false,
    tags: ['AI brand voice', 'immobilier', 'cohérence marque', 'équipe commerciale', 'Claude'],
  },
]

/* ─── Helpers ─────────────────────────────────────────── */

export function getCasBySlug(slug: string): CasStudy | undefined {
  return casStudies.find((c) => c.slug === slug)
}

export function getFeaturedCas(): CasStudy[] {
  return casStudies.filter((c) => c.featured)
}

export function getCasByCategory(categorySlug: string): CasStudy[] {
  return casStudies.filter((c) => c.categories.includes(categorySlug))
}

export function getCasByService(serviceSlug: string): CasStudy[] {
  return casStudies.filter((c) => c.services.includes(serviceSlug))
}

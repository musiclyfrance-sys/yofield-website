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
    coverImage: '/images/cas/studio-architecture.jpg',
    coverAlt: 'Intérieur éditorial d\'un studio d\'architecture avec mobilier design',
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
    coverImage: '/images/cas/ia-conseil-rh.jpg',
    coverAlt: 'Flux de données abstraits représentant un système d\'agents IA',
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
    coverImage: '/images/cas/ecommerce-cosmetique.jpg',
    coverAlt: 'Flacons de cosmétiques naturels sur fond marbre blanc',
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
    coverImage: '/images/cas/expert-comptable.jpg',
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
    coverImage: '/images/cas/immobilier-brand-voice.jpg',
    coverAlt: 'Interface du système AI Brand Voice Groupe Pavillon',
    featured: false,
    tags: ['AI brand voice', 'immobilier', 'cohérence marque', 'équipe commerciale', 'Claude'],
  },

  /* ─── NOUVEAUX CAS — secteurs spécifiques ─────────────────────── */

  {
    slug: 'branding-fintech-credit-capital',
    title: 'Identité de marque pour une fintech de crédit à la consommation',
    client: 'Crédit Capital',
    sector: 'Banque et finance',
    year: 2025,
    description:
      "Refonte complète de l'identité de Crédit Capital, fintech de crédit à la consommation : positionnement, logo, charte graphique, site vitrine et brand voice adaptés à un public grand public exigeant.",
    challenge:
      "Crédit Capital opérait depuis trois ans avec une identité visuelle héritée d'un prestataire historique. Le logo était daté, le site peu rassurant, et la tonalité de marque oscillait entre jargon financier et familiarité excessive. Dans un secteur où la confiance est le premier critère de choix, cette incohérence coûtait des conversions.",
    approach:
      "On a commencé par une phase de positionnement centrée sur la réassurance et la clarté. Pas de promesse irréaliste, pas de visuel anxiogène. Le nouveau logo s'appuie sur une typographie solide et un symbole minimaliste qui évoque la stabilité sans lourdeur institutionnelle. Le site a été conçu avec une architecture claire : simulateur en tête, puis explications pédagogiques, puis processus simplifié. La brand voice articule rigueur et accessibilité.",
    result:
      "Trois mois après le lancement, le taux de conversion du simulateur a progressé de 34%. Le test de perception mené auprès de 200 utilisateurs montre que 78% associent spontanément la nouvelle identité aux mots 'sérieux', 'clair' et 'accessible'.",
    services: [
      'strategie-de-positionnement-de-marque',
      'logo-et-charte-graphique',
      'brand-voice-ton-de-marque',
      'creation-site-vitrine',
    ],
    categories: [
      'branding-identite-de-marque',
      'creation-sites-applications',
    ],
    coverImage: '/images/cas/studio-architecture.jpg',
    coverAlt: 'Identité de marque Crédit Capital sur fond épuré',
    featured: false,
    tags: ['fintech', 'banque', 'branding', 'site vitrine', 'brand voice', 'finance'],
  },

  {
    slug: 'lancement-marque-athletic-club',
    title: 'Lancement de marque pour un club d\'athlétisme amateur de haut niveau',
    client: 'Athletic Performance Club',
    sector: 'Sport et performance',
    year: 2025,
    description:
      "Création ex nihilo de l'identité et de la présence digitale d'un club d'athlétisme fondé par d'anciens sportifs de haut niveau. Du nom à la tenue, du site au contenu de recrutement.",
    challenge:
      "Athletic Performance Club n'existait que sous la forme d'une association en cours d'immatriculation quand ils nous ont contactés. Pas de nom définitif, pas de logo, pas de site, pas de contenu. Ils avaient six semaines avant les premières inscriptions de la saison et visaient 150 membres dès la première année.",
    approach:
      "On a travaillé en cycle court intensif : deux jours de brief avec les fondateurs, une semaine de conception identitaire, une semaine de production, une semaine d'intégration et tests. Le logo combine une typographie compressée et un pictogramme abstrait évoquant la vitesse sans tomber dans le cliché. Le site est construit pour convertir : programme, entraîneurs, témoignages de membres pilotes, formulaire d'inscription simplifié. Le contenu de lancement inclut une série de portraits des fondateurs pour établir la crédibilité.",
    result:
      "213 membres inscrits dès la première saison, soit 42% au-dessus de l'objectif. Le club a reçu une couverture dans deux médias sportifs régionaux lors du lancement. La marque est suffisamment solide pour que le club ait déjà commencé à décliner ses produits dérivés de manière cohérente.",
    services: [
      'strategie-de-positionnement-de-marque',
      'logo-et-charte-graphique',
      'creation-site-vitrine',
      'redaction-copywriting',
    ],
    categories: [
      'branding-identite-de-marque',
      'creation-sites-applications',
      'production-contenus',
    ],
    coverImage: '/images/cas/studio-architecture.jpg',
    coverAlt: 'Identité visuelle Athletic Performance Club sur fond dynamique',
    featured: false,
    tags: ['sport', 'athlétisme', 'branding', 'lancement', 'club sportif', 'performance'],
  },

  {
    slug: 'identite-dataflow-saas-b2b',
    title: 'Identité et site pour une plateforme SaaS d\'analyse de données B2B',
    client: 'DataFlow',
    sector: 'Tech et SaaS',
    year: 2025,
    description:
      "Positionnement, identité de marque et site de conversion pour DataFlow, une plateforme SaaS d'analyse de flux de données destinée aux équipes data des entreprises de taille intermédiaire.",
    challenge:
      "DataFlow avait un produit solide mais une identité générique qui les rendait invisibles face aux acteurs établis du marché. Leur site actuel était un template standard sans personnalité, leur taux de conversion des essais gratuits stagnait à 4%, et leur positionnement n'était pas clair : ni assez technique pour les DSI, ni assez accessible pour les directeurs métier.",
    approach:
      "La première décision stratégique a été de choisir le positionnement : on a opté pour 'la plateforme data qui parle aux équipes métier autant qu'aux équipes tech'. Le nom et le logo ont été pensés pour évoquer la fluidité et la clarté plutôt que la complexité technique. Le site a été conçu en deux parcours parallèles : un pour les profils techniques (documentation, API, intégrations), un pour les décideurs métier (impact concret, cas d'usage, démo simplifiée). La brand voice est directe, précise, sans jargon inutile.",
    result:
      "Le taux de conversion des essais gratuits est passé de 4% à 11% en deux mois. Le temps de décision moyen (de la visite à la démo réservée) a diminué de 8 jours à 3 jours. DataFlow a levé un tour de financement deux mois après le lancement du nouveau site.",
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
    coverImage: '/images/cas/ia-conseil-rh.jpg',
    coverAlt: 'Interface DataFlow plateforme SaaS d\'analyse de données',
    featured: false,
    tags: ['SaaS', 'tech', 'B2B', 'data', 'branding', 'site vitrine', 'conversion'],
  },

  {
    slug: 'site-seo-medcare-clinique',
    title: 'Site web et stratégie SEO pour une clinique esthétique parisienne',
    client: 'MedCare Esthétique',
    sector: 'Santé et bien-être',
    year: 2025,
    description:
      "Création d'un site vitrine optimisé SEO et d'une stratégie de contenu pour MedCare, clinique esthétique médicale implantée sur trois sites en Île-de-France.",
    challenge:
      "MedCare opérait avec un site réalisé en 2019, non optimisé pour le mobile, introuvable sur Google pour ses requêtes cibles. Dans un secteur où les patients cherchent d'abord en ligne avant de consulter, l'invisibilité numérique coûtait un flux de patients entrants significatif. Ils dépendaient de 90% de leur activité aux recommandations et aux réseaux de médecins partenaires.",
    approach:
      "L'audit SEO a révélé une opportunité majeure sur les requêtes locales (clinique esthétique Paris 16e, médecin esthétique Versailles, etc.) et sur les requêtes informatives à fort intent (combien coûte une injection de botox, qu'est-ce que l'acide hyaluronique). On a construit une architecture en trois niveaux : pages établissements (référencement local), pages soins (référencement transactionnel), et articles de blog médical (référencement informationnel). Le design reflète le niveau de confiance attendu dans le secteur médical : propre, rassurant, professionnel sans être austère.",
    result:
      "Huit mois après la mise en ligne, le site génère 35 à 45 nouveaux contacts qualifiés par mois via Google. La clinique a ouvert un quatrième site et attribue partiellement cette croissance à l'amélioration de la visibilité digitale.",
    services: [
      'creation-site-vitrine',
      'strategie-seo-referencement-naturel',
      'redaction-copywriting',
      'strategie-geo-moteurs-ia',
    ],
    categories: [
      'creation-sites-applications',
      'communication-digitale-acquisition',
      'production-contenus',
    ],
    coverImage: '/images/cas/ecommerce-cosmetique.jpg',
    coverAlt: 'Site MedCare Esthétique avec design médical épuré',
    featured: false,
    tags: ['santé', 'médecine esthétique', 'SEO local', 'site vitrine', 'clinique', 'Paris'],
  },

  {
    slug: 'branding-maison-tradition-gastronomie',
    title: 'Branding et digital pour un restaurant gastronomique de province',
    client: 'Maison Tradition',
    sector: 'Restauration et hôtellerie',
    year: 2025,
    description:
      "Construction de l'identité complète de Maison Tradition, restaurant gastronomique 1 étoile en région lyonnaise : logo, charte, site vitrine, contenu et présence réseaux sociaux.",
    challenge:
      "Maison Tradition venait d'obtenir sa première étoile et le chef voulait professionnaliser l'image du restaurant à la hauteur de cette distinction. L'identité visuelle existante était artisanale, le site vieillissant et difficile à trouver. L'objectif : attirer une clientèle nationale et internationale, faciliter les réservations en ligne et construire une communauté autour de la philosophie culinaire du chef.",
    approach:
      "L'identité part du geste du chef : précision, matière, territoire. Le logo est une typographie exclusive travaillée à la main, déclinée sur un système graphique sobre qui laisse toujours la place à la photographie culinaire. Le site intègre une réservation en ligne directe (sans commission de plateforme tierce), une vitrine des plats avec des textes qui racontent les producteurs et les saisons, et une section presse pour valoriser les distinctions. La stratégie réseaux sociaux repose sur des coulisses authentiques plutôt que des visuels surproduits.",
    result:
      "Le restaurant est complet trois semaines à l'avance depuis le lancement. Les réservations directes représentent désormais 70% des couverts (contre 30% auparavant). La page Instagram a atteint 12 000 abonnés en six mois grâce à la ligne éditoriale définie ensemble.",
    services: [
      'logo-et-charte-graphique',
      'brand-voice-ton-de-marque',
      'creation-site-vitrine',
      'redaction-copywriting',
    ],
    categories: [
      'branding-identite-de-marque',
      'creation-sites-applications',
      'production-contenus',
    ],
    coverImage: '/images/cas/studio-architecture.jpg',
    coverAlt: 'Identité Maison Tradition restaurant gastronomique',
    featured: false,
    tags: ['restauration', 'gastronomie', 'étoile Michelin', 'branding', 'réservation', 'Lyon'],
  },

  {
    slug: 'plateforme-learnsphere-formation',
    title: 'Plateforme de formation et identité pour un organisme EdTech',
    client: 'LearnSphere',
    sector: 'Éducation et formation professionnelle',
    year: 2025,
    description:
      "Création de l'identité de marque, du site et du système d'agents IA pour LearnSphere, organisme de formation professionnelle qui certifie des parcours en data, IA et marketing digital.",
    challenge:
      "LearnSphere était certifié Qualiopi depuis deux ans mais manquait d'une identité forte pour se différencier dans un marché de la formation saturé. Leur site était un template générique. Leur taux de transformation des leads entrants (formulaire vers inscription) stagnait à 12%, bien en dessous du marché. Ils voulaient aussi automatiser la qualification des candidats pour libérer du temps à leurs conseillers.",
    approach:
      "La première décision a été positionnelle : LearnSphere ne se positionne pas comme 'un organisme de formation' mais comme 'le terrain d'entraînement des métiers tech de demain'. Cette promesse a guidé l'identité visuelle (dynamisme, clarté, aspiration) et le contenu (témoignages de profils reconvertis, données de placement, partenaires employeurs). Le site a été conçu pour convertir : simulateur de financement en tête (CPF, OPCO), puis parcours de formations détaillés, puis formulaire de candidature simplifié. Les agents IA qualifient les leads entrants, génèrent des fiches candidat et rédigent les premières réponses personnalisées.",
    result:
      "Le taux de transformation des leads est passé de 12% à 29% en trois mois. Les conseillers consacrent leur temps aux entretiens de sélection plutôt qu'à la pré-qualification administrative. LearnSphere a lancé deux nouvelles certifications dans les six mois suivant le lancement.",
    services: [
      'strategie-de-positionnement-de-marque',
      'logo-et-charte-graphique',
      'creation-site-vitrine',
      'creation-agents-ia',
      'redaction-copywriting',
    ],
    categories: [
      'branding-identite-de-marque',
      'creation-sites-applications',
      'intelligence-artificielle-automatisation',
      'production-contenus',
    ],
    coverImage: '/images/cas/ia-conseil-rh.jpg',
    coverAlt: 'Plateforme LearnSphere avec interface de formation et agents IA',
    featured: false,
    tags: ['éducation', 'formation', 'EdTech', 'IA', 'Qualiopi', 'CPF', 'branding'],
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

export function getCasBySlugs(slugs: string[]): CasStudy[] {
  return slugs.map((s) => casStudies.find((c) => c.slug === s)).filter(Boolean) as CasStudy[]
}

/* ─── Données enrichies cas (durée, chiffres clés, citation, secteur lié) ───
   Placeholder crédible — dérivé des résultats narratifs ci-dessus.
──────────────────────────────────────────────────────────────────────────── */

export interface CasMetric { value: string; label: string }
export interface CasQuote { text: string; author: string; role: string }
export interface CasExtra {
  duration: string
  metrics: CasMetric[]
  sectorSlug?: string // /secteurs/[slug] quand une page secteur existe
  quote?: CasQuote
}

export const casExtras: Record<string, CasExtra> = {
  'branding-complet-studio-architecture': {
    duration: '7 semaines',
    metrics: [
      { value: '1ʳᵉ page', label: 'sur 5 requêtes cibles à Paris' },
      { value: '180 m²', label: 'premier projet signé via le site' },
      { value: '7 sem.', label: 'du brief au lancement public' },
    ],
    quote: {
      text: "On a enfin une identité et un site à la hauteur des projets qu'on livre.",
      author: 'Associé fondateur',
      role: 'Studio Forma',
    },
  },
  'automatisation-ia-cabinet-conseil': {
    duration: '5 semaines',
    metrics: [
      { value: '25 h → 3 h', label: 'de qualification manuelle par mois' },
      { value: '48 h → 4 h', label: 'délai de première réponse aux leads' },
      { value: '3 agents', label: 'IA déployés et supervisés' },
    ],
  },
  'ecommerce-marque-cosmetique': {
    duration: '3 mois',
    metrics: [
      { value: '67', label: 'commandes dans les 30 premiers jours' },
      { value: '3,2 %', label: 'taux de conversion dès le 1er mois' },
      { value: '58 €', label: 'panier moyen au lancement' },
    ],
    quote: {
      text: "En trois mois, on est passés d'une idée à une vraie marque qui vend.",
      author: 'Fondatrice',
      role: 'Flore & Minéral',
    },
  },
  'refonte-site-cabinet-expert-comptable': {
    duration: '6 semaines',
    metrics: [
      { value: '12–18', label: 'leads qualifiés par mois via Google' },
      { value: '+1', label: 'collaborateur recruté pour la charge' },
      { value: '6 ans', label: 'de retard comblés en une refonte' },
    ],
  },
  'ai-brand-voice-groupe-immobilier': {
    duration: '8 semaines',
    metrics: [
      { value: '38 / 45', label: 'collaborateurs actifs sur le système' },
      { value: '−40 %', label: 'de temps de rédaction des propositions' },
      { value: '4', label: 'agences enfin alignées sur une voix' },
    ],
  },
  'branding-fintech-credit-capital': {
    duration: '9 semaines',
    sectorSlug: 'banque-assurance',
    metrics: [
      { value: '+34 %', label: 'de conversion sur le simulateur' },
      { value: '78 %', label: "associent 'clair' à la nouvelle identité" },
      { value: '200', label: 'utilisateurs testés en perception' },
    ],
    quote: {
      text: 'Notre marque inspire enfin la confiance que notre produit mérite.',
      author: 'Directeur général',
      role: 'Crédit Capital',
    },
  },
  'lancement-marque-athletic-club': {
    duration: '6 semaines',
    sectorSlug: 'sport',
    metrics: [
      { value: '213', label: 'membres dès la première saison' },
      { value: '+42 %', label: "au-dessus de l'objectif initial" },
      { value: '2', label: 'médias sportifs régionaux au lancement' },
    ],
  },
  'identite-dataflow-saas-b2b': {
    duration: '7 semaines',
    sectorSlug: 'tech',
    metrics: [
      { value: '4 % → 11 %', label: 'de conversion des essais gratuits' },
      { value: '8 j → 3 j', label: 'de temps de décision moyen' },
      { value: 'Levée', label: 'de fonds deux mois après le lancement' },
    ],
    quote: {
      text: 'On a enfin une marque aussi claire que notre produit est puissant.',
      author: 'CEO & cofondateur',
      role: 'DataFlow',
    },
  },
  'site-seo-medcare-clinique': {
    duration: '10 semaines',
    sectorSlug: 'sante',
    metrics: [
      { value: '35–45', label: 'nouveaux contacts qualifiés par mois' },
      { value: '+1', label: 'site ouvert depuis la mise en ligne' },
      { value: '3', label: "niveaux d'architecture SEO" },
    ],
  },
  'branding-maison-tradition-gastronomie': {
    duration: '8 semaines',
    sectorSlug: 'restauration',
    metrics: [
      { value: '3 sem.', label: "complet à l'avance, en continu" },
      { value: '30 % → 70 %', label: 'de réservations directes sans commission' },
      { value: '12 000', label: 'abonnés Instagram en six mois' },
    ],
    quote: {
      text: "L'image du restaurant est enfin à la hauteur de l'assiette.",
      author: 'Chef & propriétaire',
      role: 'Maison Tradition',
    },
  },
  'plateforme-learnsphere-formation': {
    duration: '9 semaines',
    sectorSlug: 'education',
    metrics: [
      { value: '12 % → 29 %', label: 'de transformation des leads' },
      { value: '+2', label: 'certifications lancées dans la foulée' },
      { value: '3 mois', label: 'pour des résultats mesurables' },
    ],
  },
}

export function getCasExtra(slug: string): CasExtra | undefined {
  return casExtras[slug]
}

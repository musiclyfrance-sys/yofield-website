import type { ServiceCategory } from '@/types'

/* ─── 5 Service Pillars — Yofield ────────────────────────────────
   Slug convention: kebab-case français
   Data feeds: hub page, category pages, homepage grid, sitemap
──────────────────────────────────────────────────────────────── */

export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'branding-identite-de-marque',
    num: '01',
    name: 'Branding et identité de marque',
    nameShort: 'Branding',
    poetic: 'La forme et la voix de votre marque.',
    description:
      "On construit les fondations visuelles et verbales qui permettent à votre marque de se reconnaître elle-même avant que votre public la reconnaisse.",
    longDescription:
      "Chaque marque qui dure a un système d'identité cohérent : un nom qui sonne juste, un logo qui tient à toutes les tailles, une palette qui s'impose sans effort, et une voix qui parle la même langue sur tous les canaux. Yofield prend en charge l'intégralité de ce système, de la stratégie de positionnement au livret de marque final, prêt à être utilisé par n'importe quel prestataire ou collaborateur futur.",
    seoTitle: 'Branding et identité de marque · Studio Yofield',
    seoDescription:
      "Yofield conçoit votre identité de marque complète : stratégie de positionnement, logo, charte graphique, brand voice. Studio créatif, cycle court, livraison directe.",
    icon: '◇',
    color: 'pine',
    promises: [
      "Une identité qui fonctionne dès le premier jour sur tous les supports.",
      "Un livret de marque utilisable par n'importe qui sans vous appeler.",
      "Une voix de marque cohérente du site aux réseaux sociaux.",
      "Un positionnement clair qui distingue votre marque de ses concurrents.",
    ],
    prestations: [
      'strategie-de-positionnement-de-marque',
      'logo-et-charte-graphique',
      'brand-voice-ton-de-marque',
      'print-et-supports-impression',
    ],
  },
  {
    slug: 'creation-sites-applications',
    num: '02',
    name: 'Création de sites et applications',
    nameShort: 'Sites web',
    poetic: 'Vos plateformes digitales.',
    description:
      "On conçoit et code vos présences digitales avec la rigueur technique nécessaire pour ranker, convertir et tenir dans le temps.",
    longDescription:
      "Un site web en 2026 n'est ni une brochure en ligne ni un simple vitrine. C'est votre premier commercial, disponible vingt-quatre heures sur vingt-quatre, capable d'expliquer votre offre, de qualifier vos visiteurs et de les amener à prendre contact. Yofield code des sites qui répondent à ces trois objectifs simultanément, avec une architecture technique propre, des performances Lighthouse au-dessus de 95 et un design qui reflète réellement l'identité de votre marque.",
    seoTitle: 'Création de site web et applications · Studio Yofield',
    seoDescription:
      "Création de site vitrine, e-commerce et applications web. Studio Yofield : design premium, code propre, performances Lighthouse 95+, SEO natif.",
    icon: '◈',
    color: 'soil',
    promises: [
      "Des performances techniques qui ne freinent pas votre SEO.",
      "Un design cohérent avec votre identité de marque, sans compromis.",
      "Un code maintenable que vous pouvez faire évoluer sans dépendance.",
      "Une livraison testée sur tous les appareils avant mise en ligne.",
    ],
    prestations: [
      'creation-site-vitrine',
      'creation-site-ecommerce',
      'creation-application-web',
      'refonte-site-web',
    ],
  },
  {
    slug: 'communication-digitale-acquisition',
    num: '03',
    name: 'Communication digitale et acquisition',
    nameShort: 'Acquisition',
    poetic: 'Le terrain de votre marque.',
    description:
      "On occupe les espaces où votre public vous cherche, avant que vos concurrents ne le fassent.",
    longDescription:
      "La plus belle marque reste invisible si personne ne la trouve. Yofield construit votre présence sur les moteurs de recherche, sur les plateformes publicitaires et sur les réseaux sociaux avec une logique d'acquisition cohérente : chaque canal travaille dans le même sens, chaque contenu est pensé pour attirer les bonnes personnes au bon moment. On distingue la stratégie SEO organique long terme de la stratégie payante court terme, et on construit les deux en même temps pour un résultat durable.",
    seoTitle: 'Communication digitale et acquisition · Studio Yofield',
    seoDescription:
      "Stratégie SEO, GEO, Google Ads, Paid Social et réseaux sociaux. Yofield occupe les terrains où votre marque doit être visible.",
    icon: '◉',
    color: 'sage',
    promises: [
      "Une stratégie SEO qui produit du trafic organique durable.",
      "Des campagnes payantes pilotées par les données, pas les intuitions.",
      "Une présence sur les moteurs IA pour les requêtes de demain.",
      "Des réseaux sociaux alignés avec votre voix de marque.",
    ],
    prestations: [
      'strategie-seo-referencement-naturel',
      'strategie-geo-moteurs-ia',
      'strategie-sea-google-ads',
      'strategie-paid-social',
      'strategie-reseaux-sociaux',
      'marketing-influence',
    ],
  },
  {
    slug: 'production-contenus',
    num: '04',
    name: 'Production de contenus',
    nameShort: 'Contenus',
    poetic: 'Ce que votre marque publie chaque semaine.',
    description:
      "On produit les contenus qui donnent à votre marque une présence réelle, pas seulement une identité sur le papier.",
    longDescription:
      "Une marque qui n'a rien à montrer n'existe pas vraiment. Yofield produit les contenus qui donnent corps à votre identité : textes qui parlent à vos clients, photos qui montrent votre univers, vidéos qui expliquent votre offre, motion design qui anime votre marque. Chaque production est pilotée par un brief précis et s'intègre dans une stratégie de contenu cohérente, pas dans une logique de remplissage de calendrier.",
    seoTitle: 'Production de contenus · Studio Yofield',
    seoDescription:
      "Rédaction, copywriting, contenus social media, shooting photo, production vidéo, motion design. Yofield produit ce que votre marque publie.",
    icon: '◌',
    color: 'mist',
    promises: [
      "Des contenus écrits qui s'adressent à vos clients, pas à vous.",
      "Des visuels qui prolongent votre identité de marque.",
      "Un calendrier de contenu réaliste et tenable sur la durée.",
      "Une direction artistique cohérente sur tous les formats.",
    ],
    prestations: [
      'redaction-copywriting',
      'creation-contenus-social-media',
      'shooting-photo',
      'production-video',
      'motion-design',
      'direction-artistique',
    ],
  },
  {
    slug: 'intelligence-artificielle-automatisation',
    num: '05',
    name: 'Intelligence artificielle et automatisation',
    nameShort: 'IA & Automatisation',
    poetic: 'Le système qui fait tourner votre marque.',
    description:
      "On intègre l'IA dans votre marque et vos processus pour que vous fassiez plus sans embaucher davantage.",
    longDescription:
      "L'IA n'est pas un sujet de conférence, c'est un levier opérationnel accessible dès aujourd'hui. Yofield conçoit et déploie des agents IA qui automatisent les tâches répétitives, des outils métier sur-mesure qui accélèrent votre travail, et des systèmes de brand voice IA qui permettent à votre équipe de produire des contenus cohérents avec votre identité sans vous solliciter à chaque phrase. On construit ce qui vous rend autonome, pas ce qui crée une nouvelle dépendance.",
    seoTitle: 'Intelligence artificielle et automatisation · Studio Yofield',
    seoDescription:
      "Création d'agents IA, automatisations, brand voice IA, outils métier. Yofield intègre l'IA dans votre marque pour vous rendre autonome.",
    icon: '◎',
    color: 'citron',
    promises: [
      "Des agents IA qui automatisent vos tâches répétitives sans coder.",
      "Un brand voice IA que votre équipe peut utiliser sans vous.",
      "Des outils métier sur-mesure adaptés à votre activité réelle.",
      "Une intégration progressive, sans rupture avec vos outils existants.",
    ],
    prestations: [
      'creation-agents-ia',
      'ai-brand-voice',
      'automatisations-ia',
      'optimisation-processus-internes',
      'creation-outils-metier',
      'skills-claude-personnalisees',
    ],
  },
]

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.slug === slug)
}

export function getCategoryPrestations(
  categorySlug: string,
  prestations: { slug: string; categorySlug: string; name: string; description: string }[]
) {
  return prestations.filter((p) => p.categorySlug === categorySlug)
}

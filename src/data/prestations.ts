import type { Prestation } from '@/types'

/* ─── 26 Prestations atomiques — Yofield ─────────────────────────────
   Chaque prestation a : steps[5], faq[4-6], promises[4], relatedSlugs[3-4]
   Données utilisées par ServicesAtomicTemplate et ServicesCategoryTemplate
──────────────────────────────────────────────────────────────────────── */

export const prestations: Prestation[] = [

  /* ═══════════════════════════════════════════════════════════════════
     01 — BRANDING ET IDENTITÉ DE MARQUE
  ═══════════════════════════════════════════════════════════════════ */

  {
    slug: 'strategie-de-positionnement-de-marque',
    categorySlug: 'branding-identite-de-marque',
    num: '01.1',
    name: 'Stratégie de positionnement',
    nameFull: 'Stratégie de positionnement de marque',
    description:
      "On définit la place que votre marque occupe dans l'esprit de vos clients, avant que vos concurrents ne la prennent.",
    longDescription:
      "Le positionnement n'est pas un slogan ni une liste de valeurs. C'est la réponse précise à une question que vos clients posent sans la formuler : pourquoi vous et pas un autre ? Yofield conduit un audit de votre marché, cartographie vos concurrents, écoute vos meilleurs clients actuels et construit un territoire de marque défendable, cohérent et distinctif. Le livrable final est un document stratégique opérationnel, pas un PowerPoint de conseil : vous savez exactement comment parler à qui, sur quoi vous différencier et quel espace vous pouvez occuper durablement.",
    seoTitle: 'Stratégie de positionnement de marque — Studio Yofield',
    seoDescription:
      "Yofield construit votre stratégie de positionnement : audit concurrentiel, territoire de marque, plateforme de brand. Livrable opérationnel en cycle court.",
    promises: [
      "Un territoire de marque clair, défendable et distinctif dans votre secteur.",
      "Un audit concurrentiel qui montre où l'espace est libre pour vous.",
      "Une plateforme de marque que vous pouvez donner à n'importe quel prestataire.",
      "Un document stratégique utilisable immédiatement, pas une présentation de conseil.",
    ],
    steps: [
      {
        num: '01',
        title: 'Immersion',
        description:
          "Entretien de deux heures pour comprendre votre offre, vos clients actuels, vos frustrations et vos ambitions. On écoute avant de parler.",
      },
      {
        num: '02',
        title: 'Audit concurrentiel',
        description:
          "Cartographie des cinq à dix concurrents directs et indirects : positionnement, territoire visuel, tone of voice, points de distinction. On cherche les espaces libres.",
      },
      {
        num: '03',
        title: 'Terrain de marque',
        description:
          "Construction de votre territoire : raison d'être, vision, valeurs actionnables, public cible précis. Pas de bullshit, que des faits utilisables.",
      },
      {
        num: '04',
        title: 'Plateforme de positionnement',
        description:
          "Rédaction du document final : statement de positionnement, promesse de marque, territoire d'expression, pitch en une phrase et pitch long.",
      },
      {
        num: '05',
        title: 'Validation et transmission',
        description:
          "Session de travail pour valider chaque arbitrage, répondre à vos questions et vous transmettre les clés de lecture pour l'utiliser en autonomie.",
      },
    ],
    faq: [
      {
        question: "Combien de temps dure une mission de positionnement ?",
        answer:
          "Deux à trois semaines selon la complexité de votre marché. On travaille en cycle court : immersion, analyse, livrables, validation. Pas de tunnel de six mois.",
      },
      {
        question: "On a déjà un positionnement, vous pouvez le challenger ?",
        answer:
          "Oui, c'est souvent le cas. On commence par auditer l'existant, on identifie ce qui tient et ce qui doit évoluer. On ne repart pas de zéro si ce n'est pas nécessaire.",
      },
      {
        question: "Quelle est la différence avec une étude de marché classique ?",
        answer:
          "Une étude de marché décrit. Un positionnement prescrit. On ne vous donne pas un rapport de 80 pages sur votre secteur : on vous donne un document qui dit exactement quoi faire et pourquoi.",
      },
      {
        question: "Le livrable est-il utilisable par d'autres prestataires ?",
        answer:
          "C'est précisément son objectif. La plateforme de marque est structurée pour être transmise à un graphiste, un copywriter, un développeur ou une future recrue sans que vous ayez à expliquer quoi que ce soit.",
      },
    ],
    relatedSlugs: [
      'logo-et-charte-graphique',
      'brand-voice-ton-de-marque',
      'strategie-seo-referencement-naturel',
    ],
  },

  {
    slug: 'logo-et-charte-graphique',
    categorySlug: 'branding-identite-de-marque',
    num: '01.2',
    name: 'Logo et charte graphique',
    nameFull: 'Logo et charte graphique',
    description:
      "On crée votre système visuel complet, du logotype au livret de marque, pour que votre identité soit cohérente partout et pour longtemps.",
    longDescription:
      "Un logo n'est pas une marque. Un logo est la partie visible d'un système : il y a la couleur qui doit fonctionner sur tous les fonds, la typographie qui doit être lisible à tous les formats, les icônes qui doivent parler sans texte, les règles d'usage qui permettent à n'importe qui d'appliquer correctement votre identité sans vous consulter à chaque fois. Yofield conçoit ce système complet, de la recherche créative initiale à la charte graphique finale, en passant par toutes les déclinaisons dont vous avez réellement besoin.",
    seoTitle: 'Logo et charte graphique — Studio Yofield',
    seoDescription:
      "Création de logo et charte graphique complète. Studio Yofield : système d'identité visuelle, palette couleurs, typographies, règles d'usage, livret de marque.",
    promises: [
      "Un logotype qui tient à toutes les tailles, de la favicon au panneau.",
      "Un système de couleurs et de typographies cohérent sur tous vos supports.",
      "Un livret de marque que n'importe qui peut utiliser sans vous appeler.",
      "Des formats livrés pour print, web, réseaux sociaux et usage professionnel.",
    ],
    steps: [
      {
        num: '01',
        title: 'Brief et moodboard',
        description:
          "On part de votre positionnement et de vos références visuelles pour définir la direction créative. Trois univers vous sont proposés, vous choisissez la direction.",
      },
      {
        num: '02',
        title: 'Création logomark',
        description:
          "Dessin du logotype principal et de ses variantes : version horizontale, icône seule, version monochrome, version inversée. Chaque variante a sa raison d'être.",
      },
      {
        num: '03',
        title: 'Système visuel',
        description:
          "Définition de la palette couleurs (primaires, secondaires, neutres), choix typographiques (affichage, corps, technique), construction des patterns et éléments graphiques.",
      },
      {
        num: '04',
        title: 'Déclinaisons',
        description:
          "Application du système sur vos supports prioritaires : carte de visite, signature email, gabarit présentation, bannières réseaux, templates documents.",
      },
      {
        num: '05',
        title: 'Livraison charte',
        description:
          "Livret de marque complet au format PDF interactif + tous les fichiers sources (AI, SVG, PNG, PDF) organisés par usage. Transmis avec session de passation.",
      },
    ],
    faq: [
      {
        question: "Combien de propositions de logo reçoit-on ?",
        answer:
          "Trois directions créatives distinctes après validation du brief. Ensuite, on affine la direction choisie jusqu'à la version finale. On ne vous noie pas dans des variations : on travaille en entonnoir.",
      },
      {
        question: "Livrez-vous les fichiers sources ?",
        answer:
          "Oui. Tous les fichiers sources sont livrés : Illustrator (.ai), SVG, PNG haute résolution et PDF. Vous possédez intégralement votre identité.",
      },
      {
        question: "La charte graphique est-elle utilisable par un imprimeur ?",
        answer:
          "Directement. Les fichiers print sont livrés en CMJN avec fonds perdus et traits de coupe. Votre imprimeur n'a besoin de rien vous demander.",
      },
      {
        question: "Peut-on retravailler un logo existant plutôt que d'en créer un nouveau ?",
        answer:
          "Oui, c'est une option. On évalue d'abord ce qui mérite d'être conservé et ce qui doit changer. Parfois un raffinement suffit, parfois une refonte complète est nécessaire.",
      },
      {
        question: "Le délai est de combien ?",
        answer:
          "Trois à cinq semaines en général, selon le scope. La charte complète avec toutes les déclinaisons prend un peu plus de temps qu'un logo seul.",
      },
    ],
    relatedSlugs: [
      'strategie-de-positionnement-de-marque',
      'brand-voice-ton-de-marque',
      'print-et-supports-impression',
    ],
  },

  {
    slug: 'brand-voice-ton-de-marque',
    categorySlug: 'branding-identite-de-marque',
    num: '01.3',
    name: 'Brand voice et ton de marque',
    nameFull: 'Brand voice et ton de marque',
    description:
      "On définit la voix de votre marque pour que tout ce qu'elle publie sonne juste, qu'importe qui l'écrit.",
    longDescription:
      "Une marque a une voix comme une personne a une voix. Vous reconnaissez quelqu'un au téléphone avant qu'il se présente, parce que son rythme, son vocabulaire et sa façon de formuler sont distinctifs. Votre marque doit produire le même effet. Yofield construit votre brand voice guide : le vocabulaire que vous utilisez, celui que vous évitez, le ton selon le contexte (accueil, réassurance, urgence, réseau social), les tournures de phrase qui vous ressemblent et celles qui sonnent générique. Le résultat est un guide utilisable par votre équipe, vos copywriters et même les outils IA pour produire des contenus cohérents.",
    seoTitle: 'Brand voice et ton de marque — Studio Yofield',
    seoDescription:
      "Création de votre brand voice guide : vocabulaire, ton, tournures, do & don't. Yofield définit la voix de marque que votre équipe et vos outils IA peuvent appliquer.",
    promises: [
      "Une voix de marque distinctive qui vous ressemble et ne ressemble à personne d'autre.",
      "Un guide utilisable par votre équipe sans formation préalable.",
      "Des exemples concrets de réécriture pour les cas d'usage réels.",
      "Un prompt IA intégré pour produire des contenus cohérents en autonomie.",
    ],
    steps: [
      {
        num: '01',
        title: 'Écoute et collecte',
        description:
          "On collecte vos contenus existants, vos emails, vos présentations, vos posts. On écoute comment vous parlez réellement quand vous n'êtes pas en mode marketing.",
      },
      {
        num: '02',
        title: 'Définition des attributs',
        description:
          "On définit trois à cinq attributs de voix avec leurs contraires (direct, pas brusque ; expert, pas condescendant). Chaque attribut est ancré dans un exemple.",
      },
      {
        num: '03',
        title: "Lexique et do & don't",
        description:
          "Construction du vocabulaire de marque : mots que vous utilisez, formules que vous évitez, tournures recommandées, anglicismes acceptés ou bannis.",
      },
      {
        num: '04',
        title: 'Déclinaisons par canal',
        description:
          "Adaptation du ton selon le contexte : site web, réseaux sociaux, email, proposition commerciale, message d'erreur. La voix est la même, le registre change.",
      },
      {
        num: '05',
        title: 'Guide et prompt IA',
        description:
          "Livraison du brand voice guide PDF + un prompt système pour vos outils IA (Claude, ChatGPT) qui permet à n'importe qui de votre équipe de produire des contenus cohérents.",
      },
    ],
    faq: [
      {
        question: "Peut-on inclure le brand voice dans un agent IA ?",
        answer:
          "Oui, c'est prévu dans la livraison. On vous fournit un prompt système structuré que vous pouvez coller dans n'importe quel outil IA pour que ses sorties respectent votre voix.",
      },
      {
        question: "Faut-il d'abord avoir un positionnement et un logo ?",
        answer:
          "Idéalement oui, car la voix de marque découle du positionnement. Mais on peut travailler en parallèle si vous avez déjà une idée claire de votre territoire.",
      },
      {
        question: "Le guide est-il adapté à une petite équipe ?",
        answer:
          "Particulièrement. Plus l'équipe est petite, plus la voix risque de varier selon qui écrit. Le guide résout ce problème dès le début.",
      },
      {
        question: "Peut-on l'intégrer dans Notion ou Confluence ?",
        answer:
          "On livre le guide au format PDF et au format Notion page si vous le souhaitez. L'important est que votre équipe puisse y accéder facilement.",
      },
    ],
    relatedSlugs: [
      'strategie-de-positionnement-de-marque',
      'ai-brand-voice',
      'redaction-copywriting',
    ],
  },

  {
    slug: 'print-et-supports-impression',
    categorySlug: 'branding-identite-de-marque',
    num: '01.4',
    name: 'Print et supports impression',
    nameFull: 'Print et supports d\'impression',
    description:
      "On crée vos supports print avec la rigueur technique d'un studio qui a déjà géré des sorties presses.",
    longDescription:
      "Un fichier print mal préparé coûte cher : mauvaise résolution, couleurs décalées, polices non vectorisées, fonds perdus manquants. Yofield gère la création graphique et la préparation technique de vos supports imprimés : cartes de visite, plaquettes commerciales, kakémonos, flyers, packaging, signalétique. Chaque fichier est livré prêt pour l'imprimeur, en CMJN, avec fonds perdus et traits de coupe, dans les formats demandés.",
    seoTitle: 'Création supports print et impression — Studio Yofield',
    seoDescription:
      "Création graphique et préparation fichiers print. Studio Yofield : cartes de visite, plaquettes, kakémonos, packaging. Fichiers prêts imprimeur, CMJN, fonds perdus.",
    promises: [
      "Des fichiers prêts pour l'imprimeur sans aller-retour technique.",
      "Un design cohérent avec votre identité de marque sur tous les formats.",
      "Une gestion des contraintes d'impression dès la création.",
      "Des livrables en CMJN et RVB selon l'usage prévu.",
    ],
    steps: [
      {
        num: '01',
        title: 'Cadrage besoins',
        description:
          "Liste des supports, formats, quantités et délais d'impression. On vérifie les contraintes de votre imprimeur avant de commencer.",
      },
      {
        num: '02',
        title: 'Conception graphique',
        description:
          "Création des maquettes en respectant votre charte graphique. Présentation des gabarits avec zone de sécurité et fonds perdus visibles.",
      },
      {
        num: '03',
        title: 'Validation contenu',
        description:
          "Intégration de vos textes et photos après validation des gabarits. Vérification orthographique et relecture incluse.",
      },
      {
        num: '04',
        title: 'Préparation technique',
        description:
          "Conversion CMJN, vérification résolution (300 dpi minimum), vectorisation des polices, ajout fonds perdus 3mm et traits de coupe.",
      },
      {
        num: '05',
        title: 'Livraison fichiers',
        description:
          "Livraison des fichiers PDF prêts imprimeur + fichiers sources Illustrator/InDesign. Vous pouvez transmettre directement à l'imprimeur de votre choix.",
      },
    ],
    faq: [
      {
        question: "Gérez-vous la relation avec l'imprimeur ?",
        answer:
          "Sur demande, oui. On peut coordonner directement avec votre imprimeur ou vous recommander un prestataire selon le support et les quantités.",
      },
      {
        question: "Peut-on créer des supports sans charte graphique définie ?",
        answer:
          "On peut, mais c'est rarement conseillé. Si vous n'avez pas encore de charte, on peut commencer par un mini système de base (logo, couleurs, typo) avant de passer aux supports.",
      },
      {
        question: "Les sources sont-elles livrées ?",
        answer:
          "Oui. Tous les fichiers sources Illustrator ou InDesign sont livrés avec les fonts intégrées, pour que vous puissiez les faire évoluer en autonomie.",
      },
    ],
    relatedSlugs: [
      'logo-et-charte-graphique',
      'direction-artistique',
      'creation-site-vitrine',
    ],
  },

  /* ═══════════════════════════════════════════════════════════════════
     02 — CRÉATION DE SITES ET APPLICATIONS
  ═══════════════════════════════════════════════════════════════════ */

  {
    slug: 'creation-site-vitrine',
    categorySlug: 'creation-sites-applications',
    num: '02.1',
    name: 'Site vitrine',
    nameFull: 'Création de site vitrine',
    description:
      "On conçoit et code votre site vitrine pour qu'il ranke, convainque et donne envie de vous contacter.",
    longDescription:
      "Un site vitrine n'est pas une brochure mise en ligne. C'est votre premier commercial, disponible vingt-quatre heures sur vingt-quatre. Il explique votre offre au bon niveau de détail, répond aux objections avant que vous ayez à les gérer, montre des preuves concrètes de ce que vous faites et amène le visiteur à prendre contact au moment précis où il est prêt. Yofield conçoit et code des sites vitrine qui remplissent ces quatre fonctions simultanément, avec une performance technique qui ne freine pas votre référencement naturel.",
    seoTitle: 'Création site vitrine — Studio Yofield',
    seoDescription:
      "Création de site vitrine sur-mesure. Studio Yofield : design premium, code propre Next.js, performances Lighthouse 95+, SEO natif, livraison en cycle court.",
    promises: [
      "Un site qui ranke sur vos requêtes cibles dès les premières semaines.",
      "Des performances Lighthouse au-dessus de 95 sur toutes les pages.",
      "Un design qui reflète votre identité de marque sans compromis.",
      "Un code maintenable que vous pouvez faire évoluer sans dépendance.",
    ],
    steps: [
      {
        num: '01',
        title: 'Brief et architecture',
        description:
          "Définition de l'arborescence, des pages prioritaires, des objectifs de conversion et de la stratégie SEO initiale. On ne code pas avant d'avoir un plan.",
      },
      {
        num: '02',
        title: 'Design UI',
        description:
          "Conception des maquettes desktop et mobile sur Figma. Chaque écran est reviewé avec vous avant le passage en code.",
      },
      {
        num: '03',
        title: 'Développement',
        description:
          "Intégration en Next.js App Router avec Tailwind CSS. SEO technique natif, images optimisées WebP/AVIF, Core Web Vitals surveillés.",
      },
      {
        num: '04',
        title: 'Contenu et SEO',
        description:
          "Intégration de vos textes avec balises sémantiques, titres hiérarchisés, données structurées Schema.org et maillage interne optimisé.",
      },
      {
        num: '05',
        title: 'Tests et mise en ligne',
        description:
          "Tests cross-browser et cross-device, audit Lighthouse, vérification des Core Web Vitals. Mise en ligne sur Vercel ou votre hébergeur avec configuration DNS.",
      },
    ],
    faq: [
      {
        question: "Combien de pages comprend un site vitrine Yofield ?",
        answer:
          "En général cinq à dix pages selon votre offre : accueil, présentation, services, cas clients, blog et contact. On adapte selon vos besoins réels, pas une formule fixe.",
      },
      {
        question: "Peut-on modifier le contenu nous-mêmes après livraison ?",
        answer:
          "Oui. On livre soit avec un CMS headless (Sanity, Contentful) intégré, soit avec une documentation claire pour modifier les fichiers de contenu Markdown directement.",
      },
      {
        question: "Le site est-il optimisé pour Google ?",
        answer:
          "L'optimisation SEO technique est incluse : sitemap, robots.txt, balises méta, données structurées, performances Core Web Vitals. Le SEO de contenu peut être ajouté en option.",
      },
      {
        question: "Quel hébergement recommandez-vous ?",
        answer:
          "Vercel pour les sites Next.js : déploiement automatique depuis GitHub, CDN mondial, HTTPS, rollback en un clic. C'est gratuit pour un usage solo et très abordable pour un usage pro.",
      },
      {
        question: "Pouvez-vous reprendre un site existant ?",
        answer:
          "On préfère partir d'une base propre plutôt que de reprendre du code inconnu. Si votre site a moins d'un an, on évalue au cas par cas.",
      },
    ],
    relatedSlugs: [
      'refonte-site-web',
      'strategie-seo-referencement-naturel',
      'creation-site-ecommerce',
    ],
  },

  {
    slug: 'creation-site-ecommerce',
    categorySlug: 'creation-sites-applications',
    num: '02.2',
    name: 'Site e-commerce',
    nameFull: 'Création de site e-commerce',
    description:
      "On construit votre boutique en ligne pour qu'elle vende, pas seulement pour qu'elle existe.",
    longDescription:
      "Un site e-commerce sous-performant n'est pas un problème de trafic, c'est un problème de conversion. Yofield conçoit des boutiques en ligne avec une architecture de pages pensée pour réduire la friction à chaque étape du parcours d'achat : page produit qui convainque, tunnel de commande qui ne décourage pas, emails transactionnels qui rassurent. On travaille sur Shopify pour les projets catalogues ou sur Next.js + Stripe pour les projets plus techniques.",
    seoTitle: 'Création site e-commerce — Studio Yofield',
    seoDescription:
      "Création de boutique en ligne sur Shopify ou Next.js. Studio Yofield : design conversion, tunnel d'achat optimisé, SEO e-commerce, intégration paiement.",
    promises: [
      "Un tunnel d'achat optimisé pour réduire l'abandon de panier.",
      "Des pages produit qui vendent sans que vous ayez à convaincre.",
      "Une intégration paiement sécurisée et testée avant mise en ligne.",
      "Un back-office que vous gérez vous-même sans formation technique.",
    ],
    steps: [
      {
        num: '01',
        title: 'Stratégie e-commerce',
        description:
          "Définition de la structure catalogue, des catégories, du parcours d'achat et des intégrations nécessaires (ERP, paiement, shipping, email marketing).",
      },
      {
        num: '02',
        title: 'Design conversion',
        description:
          "Maquettes centrées sur la conversion : hiérarchie visuelle, appels à l'action, zones de réassurance, galeries produit. Chaque choix est justifié.",
      },
      {
        num: '03',
        title: 'Développement',
        description:
          "Développement sur Shopify (thème sur-mesure) ou Next.js + Stripe selon le projet. Intégration catalogue, gestion des stocks, configurations paiement.",
      },
      {
        num: '04',
        title: 'SEO e-commerce',
        description:
          "Structure d'URL propre, données structurées Product/Review, balises canoniques pour les facettes, sitemap dédié. Votre catalogue doit ranker.",
      },
      {
        num: '05',
        title: 'Tests et lancement',
        description:
          "Tests de l'ensemble du tunnel d'achat avec plusieurs scénarios, vérification des webhooks, test des emails transactionnels. Lancement supervisé.",
      },
    ],
    faq: [
      {
        question: "Shopify ou développement sur-mesure ?",
        answer:
          "Pour un catalogue de 10 à 500 produits avec des besoins standards, Shopify est la bonne réponse : rapide à mettre en place et à gérer. Au-delà ou pour des besoins très spécifiques, on part sur Next.js + Stripe.",
      },
      {
        question: "Gérez-vous la migration d'un catalogue existant ?",
        answer:
          "Oui. On prend en charge l'import de votre catalogue existant (produits, clients, commandes) via CSV ou API selon la plateforme source.",
      },
      {
        question: "Les paiements sont-ils sécurisés ?",
        answer:
          "Oui. On n'héberge jamais les données de carte : tout passe par des processeurs certifiés PCI-DSS (Stripe, Shopify Payments). Votre responsabilité légale est nulle sur ce point.",
      },
      {
        question: "Peut-on gérer les stocks nous-mêmes ?",
        answer:
          "Oui, c'est le cas par défaut. Le back-office est conçu pour être géré sans compétence technique : ajout de produits, gestion des commandes, suivi des expéditions.",
      },
    ],
    relatedSlugs: [
      'creation-site-vitrine',
      'strategie-sea-google-ads',
      'strategie-seo-referencement-naturel',
    ],
  },

  {
    slug: 'creation-application-web',
    categorySlug: 'creation-sites-applications',
    num: '02.3',
    name: 'Application web',
    nameFull: 'Création d\'application web',
    description:
      "On conçoit et code vos outils métier en ligne, de la maquette au déploiement en production.",
    longDescription:
      "Une application web est un outil métier, pas un site. Elle a des utilisateurs réguliers, un flux de données, des règles métier complexes et des contraintes de performance différentes d'un site vitrine. Yofield prend en charge la conception UX, le développement frontend et l'intégration API de vos applications : tableau de bord, outil de gestion, plateforme client, configurateur en ligne. On code en Next.js avec une architecture propre qui tient dans le temps.",
    seoTitle: 'Création application web sur-mesure — Studio Yofield',
    seoDescription:
      "Développement d'applications web sur-mesure en Next.js. Studio Yofield : conception UX, frontend, API, déploiement. Outils métier, dashboards, plateformes client.",
    promises: [
      "Une UX pensée pour vos utilisateurs réels, pas pour un jury design.",
      "Un code structuré que votre équipe technique peut reprendre et faire évoluer.",
      "Une architecture API propre découplée du frontend.",
      "Un déploiement continu avec tests automatisés dès le départ.",
    ],
    steps: [
      {
        num: '01',
        title: 'Cadrage fonctionnel',
        description:
          "Définition des flux utilisateurs, des règles métier, des rôles et permissions, des intégrations tierces. On modélise avant de coder.",
      },
      {
        num: '02',
        title: 'Conception UX',
        description:
          "Wireframes des écrans clés, tests de flux avec de vrais utilisateurs si possible. On valide la logique avant le design.",
      },
      {
        num: '03',
        title: 'Design UI',
        description:
          "Maquettes haute-fidélité avec système de composants cohérent. Accessibilité WCAG AA prise en compte dès la conception.",
      },
      {
        num: '04',
        title: 'Développement',
        description:
          "Développement Next.js App Router, intégration API, gestion état, authentification, tests unitaires et d'intégration sur les flux critiques.",
      },
      {
        num: '05',
        title: 'Déploiement et suivi',
        description:
          "Mise en production sur Vercel ou votre infrastructure, monitoring des erreurs, documentation technique transmise à votre équipe.",
      },
    ],
    faq: [
      {
        question: "Gérez-vous également le backend et la base de données ?",
        answer:
          "On prend en charge le frontend et les API routes Next.js. Pour les projets nécessitant un backend plus complexe (microservices, base de données lourde), on travaille avec votre équipe backend ou on vous recommande un partenaire.",
      },
      {
        question: "Comment gérez-vous l'authentification ?",
        answer:
          "On intègre NextAuth.js ou Clerk selon vos besoins : login email/password, OAuth (Google, GitHub, etc.), gestion des rôles et permissions.",
      },
      {
        question: "L'application peut-elle gérer plusieurs milliers d'utilisateurs ?",
        answer:
          "L'architecture Next.js sur Vercel passe à l'échelle nativement. On prévoit dès le départ les stratégies de cache et d'optimisation pour que les performances restent stables.",
      },
    ],
    relatedSlugs: [
      'creation-agents-ia',
      'creation-outils-metier',
      'creation-site-vitrine',
    ],
  },

  {
    slug: 'refonte-site-web',
    categorySlug: 'creation-sites-applications',
    num: '02.4',
    name: 'Refonte de site web',
    nameFull: 'Refonte de site web',
    description:
      "On repart de votre site existant pour construire une version qui performe là où l'ancienne échouait.",
    longDescription:
      "Une refonte n'est pas une mise à jour esthétique. C'est une remise à plat stratégique : on identifie ce qui freine les conversions, ce qui coûte du trafic organique, ce qui crée de la friction. Ensuite on reconstruit, avec les mêmes objectifs qu'un nouveau site mais en tenant compte de ce que l'ancien a déjà construit (autorité SEO, URLs indexées, trafic existant). Yofield gère la refonte sans perdre ce que vous avez mis du temps à construire.",
    seoTitle: 'Refonte de site web — Studio Yofield',
    seoDescription:
      "Refonte de site web en préservant votre SEO existant. Studio Yofield : audit, nouvelle architecture, redirection 301, design premium, développement Next.js.",
    promises: [
      "Un audit avant de toucher quoi que ce soit, pour ne pas perdre votre trafic.",
      "Un plan de redirections 301 exhaustif pour préserver votre SEO.",
      "Un nouveau design cohérent avec votre identité de marque actuelle ou révisée.",
      "Des performances Lighthouse 95+ sur toutes les pages refontes.",
    ],
    steps: [
      {
        num: '01',
        title: 'Audit de l\'existant',
        description:
          "Analyse du trafic Google Analytics, crawl SEO, audit de performance, inventaire des URLs à préserver. On sait exactement ce qu'on ne peut pas se permettre de perdre.",
      },
      {
        num: '02',
        title: 'Nouvelle architecture',
        description:
          "Proposition de la nouvelle structure de pages avec plan de redirections 301. Chaque ancienne URL a une destination définie avant le début du développement.",
      },
      {
        num: '03',
        title: 'Design',
        description:
          "Conception du nouveau design en tenant compte de votre identité de marque : évolution ou refonte totale selon le cas.",
      },
      {
        num: '04',
        title: 'Développement',
        description:
          "Développement de la nouvelle version en parallèle du site live. Bascule uniquement quand la nouvelle version est validée et les redirections testées.",
      },
      {
        num: '05',
        title: 'Migration et suivi',
        description:
          "Mise en ligne avec surveillance des positions SEO les deux premières semaines. On corrige immédiatement si une URL importante chute.",
      },
    ],
    faq: [
      {
        question: "Va-t-on perdre notre positionnement SEO pendant la refonte ?",
        answer:
          "C'est le risque principal d'une refonte mal gérée. On le limite en auditant l'existant, en planifiant les redirections avant de toucher quoi que ce soit, et en surveillant les positions après la bascule.",
      },
      {
        question: "Peut-on garder le CMS qu'on utilise déjà ?",
        answer:
          "Selon le CMS, oui. Si vous êtes sur WordPress avec un contenu bien structuré, on peut migrer le contenu vers une nouvelle architecture Next.js en important les données via API.",
      },
      {
        question: "Faut-il refaire tout le contenu ?",
        answer:
          "Pas forcément. On garde ce qui fonctionne, on réécrit ce qui est obsolète ou sous-performant, on crée ce qui manque. C'est un audit contenu qui détermine ce qu'on fait.",
      },
    ],
    relatedSlugs: [
      'creation-site-vitrine',
      'strategie-seo-referencement-naturel',
      'direction-artistique',
    ],
  },

  /* ═══════════════════════════════════════════════════════════════════
     03 — COMMUNICATION DIGITALE ET ACQUISITION
  ═══════════════════════════════════════════════════════════════════ */

  {
    slug: 'strategie-seo-referencement-naturel',
    categorySlug: 'communication-digitale-acquisition',
    num: '03.1',
    name: 'Stratégie SEO',
    nameFull: 'Stratégie SEO et référencement naturel',
    description:
      "On construit votre visibilité organique sur Google pour que le trafic vienne à vous, pas l'inverse.",
    longDescription:
      "Le référencement naturel n'est pas un hack ni une liste de cases à cocher. C'est un travail de fond qui produit des résultats durables parce qu'il s'aligne avec ce que Google cherche réellement : des pages qui répondent précisément à une intention de recherche, avec une autorité de domaine construite dans le temps. Yofield construit votre stratégie SEO de A à Z : recherche de mots-clés pertinents pour votre activité, audit technique de votre site, stratégie de contenu orientée intention, netlinking ciblé. On distingue ce qui produit des résultats rapides de ce qui construit votre autorité sur le long terme.",
    seoTitle: 'Stratégie SEO et référencement naturel — Studio Yofield',
    seoDescription:
      "Stratégie SEO complète : audit technique, recherche de mots-clés, stratégie de contenu, netlinking. Studio Yofield améliore votre référencement naturel durablement.",
    promises: [
      "Un audit technique qui identifie les freins invisibles à votre référencement.",
      "Une stratégie de mots-clés alignée avec vos vraies intentions de vente.",
      "Un calendrier de contenu SEO réaliste et tenu dans la durée.",
      "Un reporting mensuel lisible qui montre l'évolution réelle de votre trafic.",
    ],
    steps: [
      {
        num: '01',
        title: 'Audit SEO complet',
        description:
          "Crawl technique, analyse Core Web Vitals, audit de contenu, état du profil de liens. On identifie ce qui freine votre référencement avant de proposer quoi que ce soit.",
      },
      {
        num: '02',
        title: 'Recherche de mots-clés',
        description:
          "Cartographie des intentions de recherche de vos cibles : requêtes informatives, commerciales, transactionnelles. On priorise selon le volume, la concurrence et l'adéquation avec votre offre.",
      },
      {
        num: '03',
        title: 'Stratégie de contenu',
        description:
          "Construction du plan de contenu : pages piliers, articles satellites, optimisation des pages existantes. Chaque contenu a une cible précise et une intention définie.",
      },
      {
        num: '04',
        title: 'Optimisations techniques',
        description:
          "Corrections des problèmes techniques identifiés : vitesse, maillage interne, données structurées, canoniques, indexation. Les fondations avant les contenus.",
      },
      {
        num: '05',
        title: 'Suivi et itération',
        description:
          "Rapport mensuel sur les positions, le trafic et les conversions organiques. Ajustements continus selon les évolutions de l'algorithme et les résultats observés.",
      },
    ],
    faq: [
      {
        question: "En combien de temps voit-on les premiers résultats ?",
        answer:
          "Les corrections techniques produisent des effets en quelques semaines. Le contenu SEO prend trois à six mois pour ranker selon la concurrence. On ne promet pas de résultats immédiats : on construit quelque chose qui dure.",
      },
      {
        question: "Faites-vous de l'achat de liens ?",
        answer:
          "On pratique le netlinking éditorial ciblé, pas l'achat de liens en masse. On vise des liens depuis des sites thématiquement pertinents pour votre activité.",
      },
      {
        question: "Le SEO est-il compatible avec une stratégie Google Ads ?",
        answer:
          "Oui, et c'est souvent complémentaire. Google Ads vous donne de la visibilité immédiate sur des requêtes pendant que le SEO construit votre autorité sur le long terme.",
      },
      {
        question: "Que se passe-t-il si Google change son algorithme ?",
        answer:
          "Une stratégie SEO solide repose sur des fondamentaux que Google n'a jamais remis en cause : contenu utile, technique propre, autorité acquise légitimement. On ne dépend pas de failles algorithmiques.",
      },
    ],
    relatedSlugs: [
      'strategie-geo-moteurs-ia',
      'strategie-sea-google-ads',
      'redaction-copywriting',
    ],
  },

  {
    slug: 'strategie-geo-moteurs-ia',
    categorySlug: 'communication-digitale-acquisition',
    num: '03.2',
    name: 'Stratégie GEO',
    nameFull: 'Stratégie GEO et visibilité sur les moteurs IA',
    description:
      "On prépare votre marque à être citée par les moteurs IA avant que vos concurrents ne découvrent que c'est possible.",
    longDescription:
      "Le GEO, Generative Engine Optimization, est la discipline qui optimise votre présence sur les réponses générées par les IA : ChatGPT, Perplexity, Claude, Gemini. Quand quelqu'un demande à une IA quels studios créatifs recommander dans votre secteur, votre marque doit apparaître. Yofield construit cette visibilité : structuration des contenus factuels, FAQ optimisées pour la citation, fichier llms.txt, données structurées Schema.org adaptées aux parsers IA, signaux d'autorité sur les sources que les modèles préfèrent.",
    seoTitle: 'Stratégie GEO et moteurs IA — Studio Yofield',
    seoDescription:
      "Optimisation GEO pour être cité par ChatGPT, Perplexity, Claude et Gemini. Studio Yofield : contenu structuré, llms.txt, données Schema.org, signaux d'autorité IA.",
    promises: [
      "Une présence dans les réponses des moteurs IA sur vos requêtes cibles.",
      "Un fichier llms.txt optimisé pour guider les LLMs vers vos contenus clés.",
      "Des données structurées adaptées aux parsers des principaux modèles.",
      "Un avantage concurrentiel sur un terrain que vos concurrents ignorent encore.",
    ],
    steps: [
      {
        num: '01',
        title: 'Audit de visibilité IA',
        description:
          "Test de présence actuelle sur ChatGPT, Perplexity, Claude et Gemini sur vos requêtes cibles. On mesure l'écart à combler.",
      },
      {
        num: '02',
        title: 'Stratégie de contenu GEO',
        description:
          "Identification des sujets sur lesquels vous pouvez faire autorité. Construction d'un plan de contenus factuels denses, sourcés, structurés pour la citation.",
      },
      {
        num: '03',
        title: 'Infrastructure technique',
        description:
          "Création du llms.txt, optimisation des données Schema.org, structuration des FAQ, amélioration de la densité factuelle des pages clés.",
      },
      {
        num: '04',
        title: 'Signaux d\'autorité',
        description:
          "Construction de la présence sur les sources citées par les LLMs : Wikipedia adjacent, mentions presse, Wikidata, annuaires de référence.",
      },
      {
        num: '05',
        title: 'Mesure et itération',
        description:
          "Suivi mensuel de la présence dans les réponses IA sur les requêtes cibles. Ajustements du contenu selon les patterns de citation observés.",
      },
    ],
    faq: [
      {
        question: "Le GEO remplace-t-il le SEO traditionnel ?",
        answer:
          "Non, il le complète. Les deux coexistent parce que les comportements de recherche coexistent. Les bonnes pratiques GEO (contenu factuel dense, structuré) renforcent d'ailleurs souvent le SEO classique.",
      },
      {
        question: "Peut-on mesurer les résultats du GEO ?",
        answer:
          "Oui, mais différemment du SEO. On teste manuellement sur les principaux moteurs IA, on suit les mentions de marque, et on mesure l'évolution du trafic issu des requêtes de type conversationnel.",
      },
      {
        question: "Qu'est-ce qu'un fichier llms.txt ?",
        answer:
          "C'est un fichier Markdown placé à la racine de votre site (comme robots.txt pour Google) qui guide les LLMs vers vos contenus les plus importants et décrit ce que votre marque fait. Les principaux modèles le lisent lors de leurs crawls.",
      },
    ],
    relatedSlugs: [
      'strategie-seo-referencement-naturel',
      'redaction-copywriting',
      'ai-brand-voice',
    ],
  },

  {
    slug: 'strategie-sea-google-ads',
    categorySlug: 'communication-digitale-acquisition',
    num: '03.3',
    name: 'Google Ads (SEA)',
    nameFull: 'Stratégie SEA et Google Ads',
    description:
      "On pilote vos campagnes Google Ads pour que chaque euro dépensé soit justifié par un retour mesurable.",
    longDescription:
      "Google Ads mal géré, c'est un budget qui part en fumée sur des clics non qualifiés. Google Ads bien géré, c'est un flux prévisible de prospects qualifiés dès le premier mois. La différence tient à la structure des campagnes, au choix des correspondances de mots-clés, à la qualité des annonces et à la cohérence entre l'annonce et la page d'atterrissage. Yofield prend en charge la stratégie, la création et l'optimisation continue de vos campagnes Search, Shopping et Performance Max.",
    seoTitle: 'Stratégie SEA et Google Ads — Studio Yofield',
    seoDescription:
      "Gestion de campagnes Google Ads Search, Shopping et Performance Max. Studio Yofield : structure de campagnes, annonces, optimisation CPC, reporting mensuel.",
    promises: [
      "Des campagnes structurées pour ne payer que des clics qualifiés.",
      "Des annonces testées et optimisées en continu, pas figées.",
      "Un reporting mensuel lisible avec coût par acquisition réel.",
      "Une cohérence totale entre vos annonces et vos pages d'atterrissage.",
    ],
    steps: [
      {
        num: '01',
        title: 'Audit et stratégie',
        description:
          "Audit des campagnes existantes si applicable. Définition de la stratégie : types de campagnes, budget, objectifs de coût par acquisition.",
      },
      {
        num: '02',
        title: 'Structure de compte',
        description:
          "Organisation du compte en campagnes et groupes d'annonces avec une correspondance précise entre mot-clé, annonce et page de destination.",
      },
      {
        num: '03',
        title: 'Création des annonces',
        description:
          "Rédaction des titres et descriptions en RSA, intégration des extensions (appel, site, promotion). Tests A/B planifiés dès le lancement.",
      },
      {
        num: '04',
        title: 'Optimisation continue',
        description:
          "Ajustements hebdomadaires : enchères, mots-clés négatifs, scores de qualité, landing pages. On optimise sur les données, pas les intuitions.",
      },
      {
        num: '05',
        title: 'Reporting et pilotage',
        description:
          "Rapport mensuel avec coût par clic, coût par lead, taux de conversion et recommandations concrètes pour le mois suivant.",
      },
    ],
    faq: [
      {
        question: "Quel budget minimum recommandez-vous pour Google Ads ?",
        answer:
          "En général 800 à 1 500 euros par mois de budget media pour avoir des données suffisantes à optimiser. En dessous, les apprentissages algorithmiques de Google sont trop lents.",
      },
      {
        question: "Les honoraires de gestion sont-ils séparés du budget media ?",
        answer:
          "Oui. Vous payez directement Google pour le budget media, et vous payez Yofield pour la gestion. Aucune marge cachée sur vos dépenses media.",
      },
      {
        question: "Peut-on voir les performances en temps réel ?",
        answer:
          "Oui. On vous partage l'accès en lecture à votre compte Google Ads et à un tableau de bord Google Looker Studio mis à jour quotidiennement.",
      },
    ],
    relatedSlugs: [
      'strategie-paid-social',
      'strategie-seo-referencement-naturel',
      'creation-site-vitrine',
    ],
  },

  {
    slug: 'strategie-paid-social',
    categorySlug: 'communication-digitale-acquisition',
    num: '03.4',
    name: 'Paid Social',
    nameFull: 'Stratégie Paid Social',
    description:
      "On pilote vos campagnes publicitaires sur les réseaux sociaux pour atteindre précisément vos cibles.",
    longDescription:
      "La publicité sur les réseaux sociaux a changé. Les audiences larges ne suffisent plus, les coûts ont augmenté, et la créativité est devenue le premier levier d'optimisation. Yofield pilote vos campagnes Meta Ads, LinkedIn Ads et TikTok Ads avec une logique de test créatif systématique : on teste plusieurs angles, on identifie ce qui performe, on scale ce qui fonctionne. La stratégie est alignée avec vos objectifs réels : notoriété, génération de leads ou ventes directes.",
    seoTitle: 'Stratégie Paid Social — Studio Yofield',
    seoDescription:
      "Gestion de campagnes Paid Social sur Meta, LinkedIn et TikTok. Studio Yofield : ciblage audience, créatifs, tests A/B, optimisation ROAS, reporting mensuel.",
    promises: [
      "Des audiences ciblées avec précision sur vos personas réels.",
      "Des créatifs testés en continu pour optimiser votre coût par résultat.",
      "Un reporting mensuel transparent sur vos dépenses et vos résultats.",
      "Une stratégie cohérente avec votre brand voice sur tous les réseaux.",
    ],
    steps: [
      {
        num: '01',
        title: 'Stratégie et ciblage',
        description:
          "Définition des objectifs de campagne, construction des audiences (custom, lookalike, intérêts), choix des formats selon les plateformes.",
      },
      {
        num: '02',
        title: 'Création des créatifs',
        description:
          "Production des visuels et vidéos publicitaires adaptés aux formats de chaque plateforme, avec copywriting aligné sur votre brand voice.",
      },
      {
        num: '03',
        title: 'Lancement et tests',
        description:
          "Mise en ligne avec structure de test systématique : plusieurs créatifs, plusieurs audiences, plusieurs accroches. On laisse les données décider.",
      },
      {
        num: '04',
        title: 'Optimisation',
        description:
          "Ajustements hebdomadaires : budgets vers les audiences qui performent, pause des créatifs épuisés, tests de nouveaux angles.",
      },
      {
        num: '05',
        title: 'Reporting mensuel',
        description:
          "Rapport avec CPM, CPC, CPL ou ROAS selon l'objectif, analyse créative et recommandations pour le mois suivant.",
      },
    ],
    faq: [
      {
        question: "Quelles plateformes gérez-vous ?",
        answer:
          "Meta (Facebook et Instagram), LinkedIn, TikTok et YouTube Ads. On recommande les plateformes selon votre public cible, pas par défaut.",
      },
      {
        question: "Produisez-vous les créatifs ou avons-nous besoin de les fournir ?",
        answer:
          "On produit les créatifs (visuels statiques, motion design, montage vidéo). Vous pouvez aussi nous fournir des assets bruts qu'on retravaille pour les formats publicitaires.",
      },
      {
        question: "Quel est le budget minimum recommandé ?",
        answer:
          "500 à 1 000 euros par mois par plateforme pour avoir des volumes de données suffisants. En dessous, les algorithmes de ciblage n'ont pas assez de données pour optimiser.",
      },
    ],
    relatedSlugs: [
      'strategie-sea-google-ads',
      'strategie-reseaux-sociaux',
      'creation-contenus-social-media',
    ],
  },

  {
    slug: 'strategie-reseaux-sociaux',
    categorySlug: 'communication-digitale-acquisition',
    num: '03.5',
    name: 'Réseaux sociaux',
    nameFull: 'Stratégie réseaux sociaux',
    description:
      "On construit votre présence organique sur les réseaux pour que votre marque existe entre deux campagnes payantes.",
    longDescription:
      "Une présence sur les réseaux sociaux sans stratégie, c'est du temps perdu et une marque qui semble désorganisée. Yofield définit votre stratégie éditoriale : quels réseaux selon votre public, quelle fréquence réaliste, quels formats pour chaque plateforme, quel calendrier. On produit les contenus ou on forme votre équipe à les produire en autonomie, selon votre organisation. L'objectif n'est pas d'être partout, c'est d'être juste là où votre public est vraiment.",
    seoTitle: 'Stratégie réseaux sociaux — Studio Yofield',
    seoDescription:
      "Stratégie éditoriale réseaux sociaux sur-mesure. Studio Yofield : choix des plateformes, calendrier éditorial, production de contenus, formation équipe.",
    promises: [
      "Une présence sur les réseaux adaptée à votre public, pas à une tendance.",
      "Un calendrier éditorial réaliste que votre équipe peut tenir.",
      "Des contenus cohérents avec votre identité et votre voix de marque.",
      "Des métriques d'engagement pertinentes, pas des abonnés vides.",
    ],
    steps: [
      {
        num: '01',
        title: 'Audit et choix de plateformes',
        description:
          "Analyse de votre présence actuelle, benchmark concurrentiel, recommandation des deux ou trois plateformes sur lesquelles concentrer vos efforts.",
      },
      {
        num: '02',
        title: 'Stratégie éditoriale',
        description:
          "Définition des piliers de contenu, du mix de formats (texte, image, vidéo, carrousel), du ton par plateforme et de la fréquence de publication.",
      },
      {
        num: '03',
        title: 'Calendrier éditorial',
        description:
          "Construction du planning mensuel avec sujets, formats, visuels associés et dates de publication. Vous savez ce que vous publiez six semaines à l'avance.",
      },
      {
        num: '04',
        title: 'Production et publication',
        description:
          "Création des contenus selon le planning défini. Publication et modération selon votre choix : on gère entièrement ou on transfert à votre équipe.",
      },
      {
        num: '05',
        title: 'Analyse mensuelle',
        description:
          "Rapport de performance sur les métriques qui comptent : portée, engagement, clics vers le site. Ajustement de la stratégie selon les résultats.",
      },
    ],
    faq: [
      {
        question: "Peut-on déléguer entièrement la gestion à Yofield ?",
        answer:
          "Oui. On peut gérer l'ensemble : stratégie, production, publication, modération et reporting. Ou en mode hybride : on produit, vous publiez et modérez.",
      },
      {
        question: "Sur combien de réseaux est-il raisonnable d'être présent ?",
        answer:
          "Deux ou trois plateformes gérées sérieusement valent mieux que cinq gérées à moitié. On recommande toujours de concentrer les efforts plutôt que de disperser.",
      },
      {
        question: "La stratégie réseaux est-elle coordonnée avec les campagnes payantes ?",
        answer:
          "Oui. L'organique et le payant se renforcent mutuellement : les contenus qui performent en organique sont les meilleurs candidats pour les campagnes Paid Social.",
      },
    ],
    relatedSlugs: [
      'strategie-paid-social',
      'creation-contenus-social-media',
      'marketing-influence',
    ],
  },

  {
    slug: 'marketing-influence',
    categorySlug: 'communication-digitale-acquisition',
    num: '03.6',
    name: 'Marketing d\'influence',
    nameFull: 'Marketing d\'influence',
    description:
      "On identifie les créateurs qui parlent réellement à votre public et on pilote les collaborations de A à Z.",
    longDescription:
      "Le marketing d'influence fonctionne quand le partenariat est authentique et que le créateur est réellement aligné avec votre marque. Il échoue quand on chasse uniquement les abonnés. Yofield prend en charge l'identification des créateurs pertinents (micro, macro, nano selon les objectifs), la négociation et la contractualisation, le briefing créatif et la mesure des résultats. On travaille avec des créateurs qui ont une vraie audience engagée, pas des comptes gonflés.",
    seoTitle: 'Marketing d\'influence — Studio Yofield',
    seoDescription:
      "Stratégie marketing d'influence : sélection de créateurs, négociation, brief créatif, pilotage campagnes. Studio Yofield travaille avec les créateurs alignés avec votre marque.",
    promises: [
      "Des créateurs sélectionnés pour leur alignement avec votre marque, pas leur seul nombre d'abonnés.",
      "Un brief créatif qui guide sans brider l'authenticité du créateur.",
      "Une gestion contractuelle et légale complète des collaborations.",
      "Un suivi de performance avec métriques réelles : portée, engagement, conversions.",
    ],
    steps: [
      {
        num: '01',
        title: 'Définition de la stratégie',
        description:
          "Objectifs de la campagne, type de créateurs visés, budgets, plateformes prioritaires. On choisit l'approche selon ce que vous voulez vraiment obtenir.",
      },
      {
        num: '02',
        title: 'Identification et qualification',
        description:
          "Recherche et analyse des créateurs : audience authentique, taux d'engagement réel, cohérence avec votre marque, historique de collaborations.",
      },
      {
        num: '03',
        title: 'Négociation et contractualisation',
        description:
          "Prise de contact, négociation des conditions et rédaction du contrat de partenariat. Droits d'usage, exclusivités, modalités de paiement.",
      },
      {
        num: '04',
        title: 'Brief et suivi créatif',
        description:
          "Brief créatif précis mais ouvert : objectifs clairs, points de marque non négociables, liberté créative sur la forme. Validation avant publication.",
      },
      {
        num: '05',
        title: 'Mesure et bilan',
        description:
          "Collecte des statistiques post-publication, analyse de la portée réelle, du taux d'engagement et des conversions générées. Bilan pour itérer.",
      },
    ],
    faq: [
      {
        question: "Micro ou macro-influenceurs : quoi choisir ?",
        answer:
          "Les micro-influenceurs (10 000 à 100 000 abonnés) ont généralement un meilleur taux d'engagement et une audience plus qualifiée sur leur niche. Les macro servent la notoriété à grande échelle. On choisit selon votre objectif.",
      },
      {
        question: "Gérez-vous les aspects légaux et fiscaux ?",
        answer:
          "On rédige les contrats et on s'assure que les publications respectent les obligations légales de transparence (mention #collaboration ou #partenariat commercial).",
      },
      {
        question: "Peut-on utiliser les contenus créateurs sur nos propres canaux ?",
        answer:
          "Oui, à condition de le prévoir dans le contrat. On négocie les droits d'usage lors de la contractualisation pour que vous puissiez reprendre les contenus sans friction.",
      },
    ],
    relatedSlugs: [
      'strategie-reseaux-sociaux',
      'strategie-paid-social',
      'creation-contenus-social-media',
    ],
  },

  /* ═══════════════════════════════════════════════════════════════════
     04 — PRODUCTION DE CONTENUS
  ═══════════════════════════════════════════════════════════════════ */

  {
    slug: 'redaction-copywriting',
    categorySlug: 'production-contenus',
    num: '04.1',
    name: 'Rédaction et copywriting',
    nameFull: 'Rédaction et copywriting',
    description:
      "On écrit vos textes pour qu'ils parlent à une vraie personne et la poussent à agir.",
    longDescription:
      "Écrire pour le web n'est pas écrire pour soi. C'est écrire pour une personne précise, à un moment précis de sa décision, avec un objectif clair : la faire progresser vers l'action. Yofield rédige vos pages web, vos emails, vos propositions commerciales, vos articles de blog et vos supports de vente avec cette logique : chaque mot est là pour une raison, chaque paragraphe fait avancer la lecture. On allie la persuasion du copywriting et la précision du contenu éditorial.",
    seoTitle: 'Rédaction et copywriting — Studio Yofield',
    seoDescription:
      "Rédaction web, copywriting et contenu éditorial. Studio Yofield écrit vos pages, emails, articles de blog et supports de vente en alignant persuasion et précision.",
    promises: [
      "Des textes qui parlent à une personne réelle, pas à un marché abstrait.",
      "Un ton cohérent avec votre brand voice sur tous vos supports écrits.",
      "Des pages qui guident vers l'action sans forcer ni sur-promettre.",
      "Des articles de blog qui rankent et qui valent vraiment la peine d'être lus.",
    ],
    steps: [
      {
        num: '01',
        title: 'Brief contenu',
        description:
          "Définition de l'objectif du texte, du lecteur cible, du ton, des points clés à couvrir et des contraintes (longueur, mots-clés SEO, CTA).",
      },
      {
        num: '02',
        title: 'Recherche et angle',
        description:
          "Recherche sur le sujet, les concurrents, les questions que se pose vraiment votre cible. Choix de l'angle qui sera le plus percutant.",
      },
      {
        num: '03',
        title: 'Premier jet',
        description:
          "Rédaction du contenu avec structure claire, hiérarchie des titres, paragraphes courts. Respect du brand voice guide si disponible.",
      },
      {
        num: '04',
        title: 'Révision et ajustements',
        description:
          "Votre feedback intégré dans une révision complète. On peut aller jusqu'à deux tours de révision inclus dans la mission.",
      },
      {
        num: '05',
        title: 'Livraison',
        description:
          "Livraison dans le format souhaité : Google Doc, Notion, Markdown, HTML. Prêt à être intégré directement par votre équipe technique.",
      },
    ],
    faq: [
      {
        question: "Rédigez-vous en anglais aussi ?",
        answer:
          "Principalement en français. Pour l'anglais, on travaille avec des copywriters natifs selon les besoins.",
      },
      {
        question: "Combien de révisions sont incluses ?",
        answer:
          "Deux tours de révision sont inclus dans toutes les missions. Cela couvre en général les ajustements nécessaires après le premier jet.",
      },
      {
        question: "Peut-on fournir un brand voice guide à respecter ?",
        answer:
          "Oui, c'est préférable. Si vous avez un guide de brand voice, on l'applique. Si vous n'en avez pas, on commence par le définir ou on travaille à partir de vos contenus existants.",
      },
      {
        question: "Les textes sont-ils optimisés pour le SEO ?",
        answer:
          "Sur demande, oui. On peut intégrer une optimisation SEO (mots-clés cibles, structure des titres, maillage interne) à la mission de rédaction.",
      },
    ],
    relatedSlugs: [
      'brand-voice-ton-de-marque',
      'strategie-seo-referencement-naturel',
      'creation-contenus-social-media',
    ],
  },

  {
    slug: 'creation-contenus-social-media',
    categorySlug: 'production-contenus',
    num: '04.2',
    name: 'Contenus social media',
    nameFull: 'Création de contenus social media',
    description:
      "On produit les visuels et les textes qui font exister votre marque sur les réseaux, semaine après semaine.",
    longDescription:
      "Une stratégie réseaux sociaux sans production de contenus n'existe pas. Yofield produit les assets visuels et les captions de vos publications : carrousels LinkedIn, stories Instagram, posts X, vidéos courtes TikTok ou Reels. Chaque contenu est ancré dans votre identité de marque et votre stratégie éditoriale. On produit en batch mensuel pour que vous ayez toujours six semaines d'avance sur votre calendrier.",
    seoTitle: 'Création contenus social media — Studio Yofield',
    seoDescription:
      "Production de contenus social media : visuels, captions, carrousels, vidéos courtes. Studio Yofield livre vos assets en batch mensuel pour tous vos réseaux.",
    promises: [
      "Des visuels cohérents avec votre charte graphique sur tous vos réseaux.",
      "Des captions qui donnent envie de lire avant même de voir le visuel.",
      "Un batch mensuel livré à temps pour tenir votre calendrier éditorial.",
      "Des formats adaptés aux spécificités de chaque plateforme.",
    ],
    steps: [
      {
        num: '01',
        title: 'Brief mensuel',
        description:
          "Réunion de 45 minutes en début de mois pour définir les sujets, les événements à couvrir et les objectifs de la période.",
      },
      {
        num: '02',
        title: 'Conception des visuels',
        description:
          "Création des visuels dans les formats requis par chaque plateforme. Respect de la charte graphique et de la direction artistique définie.",
      },
      {
        num: '03',
        title: 'Rédaction des captions',
        description:
          "Écriture des textes de chaque publication avec les hashtags pertinents, les mentions nécessaires et les CTA appropriés.",
      },
      {
        num: '04',
        title: 'Validation',
        description:
          "Présentation du batch complet pour validation avant planification. Un tour de révision inclus par batch mensuel.",
      },
      {
        num: '05',
        title: 'Planification',
        description:
          "Intégration dans votre outil de planification (Buffer, Later, Hootsuite) ou livraison d'un dossier organisé par date de publication.",
      },
    ],
    faq: [
      {
        question: "Combien de publications par mois produisez-vous ?",
        answer:
          "Variable selon le forfait et vos objectifs : de 8 à 30 publications par mois selon les plateformes. On définit le volume au moment du brief.",
      },
      {
        question: "Peut-on ajouter des publications en urgence en cours de mois ?",
        answer:
          "Oui, sur demande, selon la disponibilité. On facture les ajouts hors batch à la publication.",
      },
      {
        question: "Gérez-vous aussi la modération et les réponses aux commentaires ?",
        answer:
          "Ce n'est pas inclus par défaut, mais c'est une option. On peut intégrer la modération quotidienne dans la mission si vous le souhaitez.",
      },
    ],
    relatedSlugs: [
      'strategie-reseaux-sociaux',
      'direction-artistique',
      'motion-design',
    ],
  },

  {
    slug: 'shooting-photo',
    categorySlug: 'production-contenus',
    num: '04.3',
    name: 'Shooting photo',
    nameFull: 'Shooting photo professionnel',
    description:
      "On organise et réalise vos shootings pour que vos images montrent vraiment qui vous êtes.",
    longDescription:
      "Les images de stock ne font pas une marque. Vos clients le savent instinctivement, même s'ils ne peuvent pas l'expliquer. Un shooting photo spécifique à votre marque donne une cohérence visuelle immédiate : les images se reconnaissent, elles appartiennent à votre univers et à lui seul. Yofield prend en charge l'ensemble du processus : direction artistique, casting si nécessaire, repérage des lieux, shooting et post-production. Les images livrées sont prêtes à l'emploi sur votre site, vos réseaux et vos supports print.",
    seoTitle: 'Shooting photo professionnel — Studio Yofield',
    seoDescription:
      "Shooting photo professionnel avec direction artistique. Studio Yofield : packshots, portraits, ambiances, reportage. Images prêtes pour web, réseaux et print.",
    promises: [
      "Des images qui appartiennent à votre univers de marque et à lui seul.",
      "Une direction artistique cohérente avec votre charte visuelle.",
      "Un brief de shooting précis pour que rien n'est laissé au hasard.",
      "Des fichiers livrés optimisés pour web et pour print.",
    ],
    steps: [
      {
        num: '01',
        title: 'Direction artistique',
        description:
          "Définition du moodboard visuel, de la palette de couleurs, des angles et des ambiances. Chaque image est pensée avant d'être prise.",
      },
      {
        num: '02',
        title: 'Organisation logistique',
        description:
          "Repérage des lieux, coordination avec les modèles, préparation du matériel, brief du photographe partenaire selon le type de shooting.",
      },
      {
        num: '03',
        title: 'Shooting',
        description:
          "Réalisation du shooting avec direction artistique en temps réel. On valide les angles et les ambiances sur place pour éviter les surprises en post-production.",
      },
      {
        num: '04',
        title: 'Sélection et post-production',
        description:
          "Sélection des meilleures images, retouche colorimétrique cohérente, masquages si nécessaire. Uniformité de la direction de lumière sur l'ensemble des livrables.",
      },
      {
        num: '05',
        title: 'Livraison',
        description:
          "Livraison des images en haute résolution (print) et formats web optimisés (WebP, JPEG compressé). Organisées par usage dans un dossier partagé.",
      },
    ],
    faq: [
      {
        question: "Travaillez-vous avec des photographes partenaires ?",
        answer:
          "Oui. On sélectionne le photographe selon le type de shooting : portrait corporate, packshot produit, reportage terrain. La direction artistique reste chez Yofield.",
      },
      {
        question: "Combien d'images sont livrées en général ?",
        answer:
          "En général 40 à 80 images retouchées pour une journée de shooting. On préfère la qualité sur la quantité : on ne livre que les images qui sont bonnes.",
      },
      {
        question: "Peut-on utiliser les images sur tous les supports sans restriction ?",
        answer:
          "Oui. Toutes les images sont livrées avec les droits d'usage complets pour votre marque : web, réseaux, print, publicité.",
      },
    ],
    relatedSlugs: [
      'direction-artistique',
      'production-video',
      'creation-contenus-social-media',
    ],
  },

  {
    slug: 'production-video',
    categorySlug: 'production-contenus',
    num: '04.4',
    name: 'Production vidéo',
    nameFull: 'Production vidéo',
    description:
      "On produit vos vidéos de marque, de la présentation corporate au contenu court format pensé pour les réseaux.",
    longDescription:
      "La vidéo est le format qui explique en 60 secondes ce qu'une page entière peine à transmettre. Yofield prend en charge la production vidéo de votre marque : film de présentation, témoignage client, vidéo produit, contenu court format pour les réseaux, vidéo de recrutement. Chaque production part d'un brief précis, d'un storyboard validé et d'une logique de diffusion définie. On livre des fichiers prêts à l'emploi dans les formats requis.",
    seoTitle: 'Production vidéo de marque — Studio Yofield',
    seoDescription:
      "Production vidéo de marque : film de présentation, témoignage client, contenu court format. Studio Yofield gère brief, tournage, montage et livraison.",
    promises: [
      "Un storyboard validé avant le moindre jour de tournage.",
      "Une qualité de production cohérente avec l'identité de votre marque.",
      "Des formats adaptés à chaque plateforme de diffusion prévue.",
      "Un montage qui respecte votre voix et votre rythme de marque.",
    ],
    steps: [
      {
        num: '01',
        title: 'Brief et storyboard',
        description:
          "Définition de l'objectif, du public cible, du message principal, de la durée et du ton. Rédaction du script et du storyboard pour validation avant tournage.",
      },
      {
        num: '02',
        title: 'Pré-production',
        description:
          "Organisation du tournage : lieux, intervenants, matériel, planning. La pré-production est ce qui fait la différence entre un tournage fluide et un tournage chaotique.",
      },
      {
        num: '03',
        title: 'Tournage',
        description:
          "Réalisation avec direction artistique intégrée. On ne tourne que ce dont on a besoin, avec les angles prévus au storyboard et les ajustements nécessaires sur place.",
      },
      {
        num: '04',
        title: 'Montage et étalonnage',
        description:
          "Montage rythmique, étalonnage colorimétrique cohérent avec votre identité, intégration de la musique, des sous-titres et des mentions légales si nécessaire.",
      },
      {
        num: '05',
        title: 'Livraison multi-formats',
        description:
          "Livraison dans les formats requis : MP4 H.264 pour le web, formats verticaux pour les réseaux, versions sous-titrées. Fichier source transmis si demandé.",
      },
    ],
    faq: [
      {
        question: "Gérez-vous entièrement la production ou avez-vous besoin de notre matériel ?",
        answer:
          "On apporte l'ensemble du matériel de tournage et on coordonne l'équipe technique. Vous n'avez besoin de rien préparer côté équipement.",
      },
      {
        question: "Peut-on utiliser les vidéos en publicité payante ?",
        answer:
          "Oui. On peut adapter le montage aux formats publicitaires (6s, 15s, 30s) et livrer les versions prêtes pour Meta Ads, YouTube Ads et LinkedIn Ads.",
      },
      {
        question: "Proposez-vous des sous-titres pour l'accessibilité ?",
        answer:
          "Oui, les sous-titres sont intégrés par défaut sur les versions réseaux sociaux (format texte brûlé ou fichier .srt selon les besoins).",
      },
    ],
    relatedSlugs: [
      'motion-design',
      'shooting-photo',
      'direction-artistique',
    ],
  },

  {
    slug: 'motion-design',
    categorySlug: 'production-contenus',
    num: '04.5',
    name: 'Motion design',
    nameFull: 'Motion design',
    description:
      "On anime votre identité de marque pour que vos contenus numériques aient une vie que les images statiques n'ont pas.",
    longDescription:
      "Le motion design n'est pas de la vidéo et n'est pas de l'illustration : c'est l'animation de votre identité de marque en mouvement. Un logo animé qui s'ouvre sur votre site, une transition entre deux sections de votre application, une infographie animée pour expliquer votre processus, un bumper pour vos vidéos YouTube. Yofield produit des animations qui respectent l'ADN de votre charte graphique et qui s'intègrent proprement dans vos plateformes digitales.",
    seoTitle: 'Motion design — Studio Yofield',
    seoDescription:
      "Production motion design : logo animé, animations UI, infographies animées, bumper vidéo. Studio Yofield anime votre identité de marque sur tous vos supports digitaux.",
    promises: [
      "Des animations cohérentes avec votre charte graphique et votre identité.",
      "Des fichiers exportés dans les formats requis par vos plateformes.",
      "Un rendu fluide à 60 fps sur les supports web et mobile.",
      "Un brief d'animation précis qui garantit que le résultat correspond à votre vision.",
    ],
    steps: [
      {
        num: '01',
        title: 'Brief et références',
        description:
          "Définition de ce qui doit être animé, de l'émotion visée, du timing et des contraintes techniques. Collecte de références visuelles pour aligner les attentes.",
      },
      {
        num: '02',
        title: 'Storyboard d\'animation',
        description:
          "Keyframes statiques qui montrent les états clés de l'animation avant de commencer à animer. On valide la logique avant d'investir du temps en production.",
      },
      {
        num: '03',
        title: 'Animation',
        description:
          "Production de l'animation sur After Effects, Lottie (JSON) ou CSS/JavaScript selon le support de diffusion prévu.",
      },
      {
        num: '04',
        title: 'Révision',
        description:
          "Présentation du rendu et ajustements selon votre feedback : vitesse, easing, couleurs, timing. Jusqu'à deux tours de révision inclus.",
      },
      {
        num: '05',
        title: 'Export et intégration',
        description:
          "Export dans les formats requis : MP4, GIF, Lottie JSON, WebM. Documentation pour l'intégration web si nécessaire.",
      },
    ],
    faq: [
      {
        question: "Qu'est-ce qu'un fichier Lottie et pourquoi c'est utile pour le web ?",
        answer:
          "Lottie est un format d'animation vectorielle léger (JSON) qui s'anime en temps réel dans le navigateur. Il est beaucoup plus léger qu'un MP4 et reste net à toutes les résolutions. C'est idéal pour les animations d'interface.",
      },
      {
        question: "Peut-on animer un logo existant ?",
        answer:
          "Oui. On travaille à partir de votre logo SVG existant pour créer l'animation. On a besoin du fichier source vectoriel (AI ou SVG).",
      },
      {
        question: "Les animations sont-elles optimisées pour les performances web ?",
        answer:
          "Oui. On choisit le format le plus léger pour chaque usage : Lottie pour les animations d'interface, WebM/MP4 pour les animations complexes, CSS pour les micro-interactions simples.",
      },
    ],
    relatedSlugs: [
      'production-video',
      'direction-artistique',
      'creation-contenus-social-media',
    ],
  },

  {
    slug: 'direction-artistique',
    categorySlug: 'production-contenus',
    num: '04.6',
    name: 'Direction artistique',
    nameFull: 'Direction artistique',
    description:
      "On pilote la cohérence visuelle de tout ce que votre marque produit, pour que chaque contenu renforce l'identité.",
    longDescription:
      "La direction artistique, c'est la fonction qui fait que tout ce que votre marque publie semble venir du même endroit. Pas seulement le même logo, mais la même énergie visuelle, la même façon de cadrer une photo, le même poids des blancs dans un design, la même température de lumière dans une vidéo. Yofield peut assurer cette direction artistique en mission ponctuelle (pour un projet spécifique) ou en mission continue (pour superviser l'ensemble de vos productions visuelles).",
    seoTitle: 'Direction artistique de marque — Studio Yofield',
    seoDescription:
      "Direction artistique de marque : cohérence visuelle sur tous vos contenus. Studio Yofield supervise vos shootings, vidéos, illustrations et productions digitales.",
    promises: [
      "Une cohérence visuelle immédiate sur l'ensemble de vos contenus.",
      "Un référentiel créatif clair que tous vos prestataires peuvent appliquer.",
      "Une supervision des productions qui garantit le niveau de qualité attendu.",
      "Un regard extérieur permanent pour éviter que l'identité dérive avec le temps.",
    ],
    steps: [
      {
        num: '01',
        title: 'État des lieux',
        description:
          "Audit de l'ensemble de vos contenus visuels existants. Identification des incohérences, des dérives et des points forts à renforcer.",
      },
      {
        num: '02',
        title: 'Référentiel créatif',
        description:
          "Construction d'un guide de direction artistique : références visuelles, grille photographique, règles de composition, palette et règles d'usage.",
      },
      {
        num: '03',
        title: 'Briefing prestataires',
        description:
          "Transmission du référentiel à vos prestataires visuels (photographes, vidéastes, graphistes) avec les critères de validation des livrables.",
      },
      {
        num: '04',
        title: 'Supervision des productions',
        description:
          "Review des livrables de chaque prestataire avant publication. Feedback précis et documenté pour corriger et faire progresser.",
      },
      {
        num: '05',
        title: 'Évolution du référentiel',
        description:
          "Mise à jour périodique du guide de direction artistique selon l'évolution de votre marque, des tendances pertinentes et des retours de campagnes.",
      },
    ],
    faq: [
      {
        question: "En quoi la direction artistique diffère-t-elle de la création graphique ?",
        answer:
          "La direction artistique supervise et oriente. La création graphique produit. Un directeur artistique peut briefer dix prestataires différents pour que leurs productions forment un tout cohérent. C'est une fonction de pilotage, pas de production.",
      },
      {
        question: "Peut-on faire appel à Yofield pour une mission de DA ponctuelle ?",
        answer:
          "Oui. On peut intervenir pour un projet spécifique (lancement de produit, campagne de rentrée) sans engagement sur la durée.",
      },
      {
        question: "La direction artistique est-elle compatible avec une équipe graphique interne ?",
        answer:
          "C'est souvent la meilleure configuration. La DA externe apporte le recul et la cohérence stratégique, l'équipe interne apporte la connaissance du terrain et la réactivité.",
      },
    ],
    relatedSlugs: [
      'logo-et-charte-graphique',
      'shooting-photo',
      'production-video',
    ],
  },

  /* ═══════════════════════════════════════════════════════════════════
     05 — INTELLIGENCE ARTIFICIELLE ET AUTOMATISATION
  ═══════════════════════════════════════════════════════════════════ */

  {
    slug: 'creation-agents-ia',
    categorySlug: 'intelligence-artificielle-automatisation',
    num: '05.1',
    name: 'Création d\'agents IA',
    nameFull: 'Création d\'agents IA',
    description:
      "On conçoit et déploie des agents IA qui prennent en charge vos tâches répétitives sans que vous ayez besoin de coder.",
    longDescription:
      "Un agent IA est un programme qui comprend une instruction en langage naturel, l'exécute en utilisant des outils (recherche web, lecture de fichiers, envoi d'emails, appel d'API) et retourne un résultat. Yofield conçoit ces agents pour vos cas d'usage métier réels : qualification de leads entrants, rédaction de propositions commerciales, synthèse de rapports, veille concurrentielle, réponses support niveau 1. On les déploie sur des infrastructures que vous contrôlez, avec des garde-fous précis sur ce qu'ils peuvent et ne peuvent pas faire.",
    seoTitle: 'Création d\'agents IA pour entreprises — Studio Yofield',
    seoDescription:
      "Conception et déploiement d'agents IA sur-mesure. Studio Yofield : qualification leads, automatisation emails, synthèse documents, veille. Agents que vous contrôlez.",
    promises: [
      "Des agents conçus pour vos cas d'usage réels, pas des démos génériques.",
      "Un contrôle total sur ce que l'agent peut faire et ses limites d'action.",
      "Une intégration dans vos outils existants sans tout reconstruire.",
      "Une documentation claire pour que votre équipe comprend ce qu'elle utilise.",
    ],
    steps: [
      {
        num: '01',
        title: 'Identification des cas d\'usage',
        description:
          "Cartographie de vos processus manuels répétitifs. On identifie lesquels sont automatisables, dans quel ordre de priorité et quel gain réel attendre.",
      },
      {
        num: '02',
        title: 'Conception de l\'agent',
        description:
          "Définition du workflow de l'agent : trigger, étapes, outils utilisés, conditions de sortie, cas d'échec. Tout est documenté avant de coder.",
      },
      {
        num: '03',
        title: 'Développement et tests',
        description:
          "Développement de l'agent avec les tests sur vos données réelles. On itère jusqu'à ce que le comportement soit fiable et prévisible.",
      },
      {
        num: '04',
        title: 'Intégration',
        description:
          "Connexion de l'agent à vos outils existants : CRM, email, Slack, Notion, Google Workspace. On utilise les API disponibles ou des connecteurs sans code.",
      },
      {
        num: '05',
        title: 'Formation et supervision',
        description:
          "Formation de votre équipe à l'utilisation et à la supervision de l'agent. Mise en place d'un tableau de bord pour suivre ses actions et corriger les erreurs.",
      },
    ],
    faq: [
      {
        question: "Faut-il avoir des compétences techniques pour gérer un agent IA ?",
        answer:
          "Non. On conçoit les agents pour que votre équipe puisse les utiliser et les superviser sans compétence technique. L'interface d'interaction est en langage naturel.",
      },
      {
        question: "Les agents accèdent-ils à des données sensibles ?",
        answer:
          "On définit précisément les données auxquelles l'agent a accès. Rien n'est partagé avec des tiers : les données restent dans votre infrastructure ou sur des services cloud que vous contrôlez.",
      },
      {
        question: "Que se passe-t-il si l'agent fait une erreur ?",
        answer:
          "On conçoit les agents avec des garde-fous : actions irréversibles toujours soumises à validation humaine, logs de toutes les actions, alertes en cas de comportement inattendu.",
      },
      {
        question: "Peut-on construire plusieurs agents qui travaillent ensemble ?",
        answer:
          "Oui. C'est ce qu'on appelle un système multi-agents. Un agent orchestre, les autres exécutent des tâches spécialisées. On conçoit ces architectures pour les cas d'usage complexes.",
      },
    ],
    relatedSlugs: [
      'automatisations-ia',
      'ai-brand-voice',
      'creation-outils-metier',
    ],
  },

  {
    slug: 'ai-brand-voice',
    categorySlug: 'intelligence-artificielle-automatisation',
    num: '05.2',
    name: 'AI Brand Voice',
    nameFull: 'AI Brand Voice — votre voix de marque dans l\'IA',
    description:
      "On entraîne les outils IA de votre équipe à écrire avec votre voix, pour que la cohérence tienne même à grande vitesse.",
    longDescription:
      "Votre équipe utilise déjà l'IA pour écrire. Le problème, c'est qu'elle écrit dans la voix de ChatGPT, pas dans la vôtre. Yofield construit votre système AI Brand Voice : un prompt système précis qui encode votre voix de marque, votre vocabulaire interdit, vos tournures préférées, votre façon d'adresser votre public. Ce système s'intègre dans Claude, ChatGPT et les outils que votre équipe utilise déjà. Résultat : n'importe qui dans votre équipe peut générer du contenu cohérent avec votre marque en quelques secondes.",
    seoTitle: 'AI Brand Voice — Studio Yofield',
    seoDescription:
      "Création d'un système AI Brand Voice pour votre marque. Studio Yofield encode votre voix dans les outils IA de votre équipe : Claude, ChatGPT, intégrations sur-mesure.",
    promises: [
      "Un prompt système qui encode fidèlement votre voix de marque dans l'IA.",
      "Une intégration dans les outils que votre équipe utilise déjà.",
      "Des tests sur vos cas d'usage réels avant la livraison.",
      "Une documentation claire pour que votre équipe l'utilise en autonomie.",
    ],
    steps: [
      {
        num: '01',
        title: 'Audit de voix existante',
        description:
          "Analyse de vos contenus existants pour extraire les patterns de voix : tournures récurrentes, vocabulaire distinctif, rythme de phrase, sujets tabous.",
      },
      {
        num: '02',
        title: 'Définition du prompt système',
        description:
          "Rédaction du prompt système complet : identité de marque, règles de ton, vocabulaire autorisé et interdit, exemples de réécriture, cas d'usage principaux.",
      },
      {
        num: '03',
        title: 'Tests et calibrage',
        description:
          "Tests du prompt sur vos cas d'usage réels (email commercial, post LinkedIn, article de blog, réponse support). Calibrage jusqu'à ce que les sorties soient fiables.",
      },
      {
        num: '04',
        title: 'Intégration',
        description:
          "Déploiement dans les outils de votre équipe : Claude Projects, ChatGPT Custom GPT, Notion AI, ou intégration API dans vos outils propriétaires.",
      },
      {
        num: '05',
        title: 'Formation et documentation',
        description:
          "Guide d'utilisation pour votre équipe avec les cas d'usage principaux, les limites à connaître et les prompts auxiliaires pour les situations spécifiques.",
      },
    ],
    faq: [
      {
        question: "Le système AI Brand Voice est-il compatible avec tous les outils IA ?",
        answer:
          "Il est conçu pour fonctionner avec Claude, ChatGPT et les principaux LLMs. Pour les outils propriétaires avec API, on développe l'intégration sur-mesure.",
      },
      {
        question: "Peut-on mettre à jour le prompt quand la marque évolue ?",
        answer:
          "Oui. On livre la documentation complète de la structure du prompt pour que vous puissiez l'ajuster en autonomie, ou on le met à jour dans le cadre d'une mission d'évolution.",
      },
      {
        question: "Est-ce différent d'un simple prompt ChatGPT qu'on rédige soi-même ?",
        answer:
          "Significativement. Un prompt système AI Brand Voice est structuré selon des techniques de prompt engineering avancées, testé sur des centaines de cas d'usage et calibré pour être robuste face aux demandes imprévues de votre équipe.",
      },
    ],
    relatedSlugs: [
      'brand-voice-ton-de-marque',
      'creation-agents-ia',
      'automatisations-ia',
    ],
  },

  {
    slug: 'automatisations-ia',
    categorySlug: 'intelligence-artificielle-automatisation',
    num: '05.3',
    name: 'Automatisations IA',
    nameFull: 'Automatisations IA et workflows intelligents',
    description:
      "On connecte vos outils entre eux avec l'IA pour que les tâches répétitives se fassent sans que vous y pensiez.",
    longDescription:
      "L'automatisation sans IA connecte des outils. L'automatisation avec IA comprend le contenu, prend des décisions et produit des résultats intelligents. Yofield construit des workflows automatisés qui intègrent la compréhension du langage naturel : qualification automatique des emails entrants, extraction de données de documents, génération de rapports personnalisés, routing intelligent des demandes support. On utilise n8n, Make ou des API directes selon la complexité et vos outils existants.",
    seoTitle: 'Automatisations IA et workflows intelligents — Studio Yofield',
    seoDescription:
      "Construction de workflows d'automatisation avec IA. Studio Yofield : n8n, Make, API LLM. Qualification emails, extraction données, génération rapports, routing support.",
    promises: [
      "Des workflows qui fonctionnent 24h/24 sans supervision quotidienne.",
      "Une intégration dans vos outils existants sans tout reconstruire.",
      "Des logs clairs pour comprendre ce que fait chaque automatisation.",
      "Un temps de mise en place compté en jours, pas en mois.",
    ],
    steps: [
      {
        num: '01',
        title: 'Cartographie des processus',
        description:
          "Identification des processus manuels qui consomment du temps sans créer de valeur. Priorisation selon le gain horaire et la faisabilité technique.",
      },
      {
        num: '02',
        title: 'Conception du workflow',
        description:
          "Schéma du workflow automatisé : triggers, étapes, conditions, intégration IA, actions en sortie. Validation avec votre équipe avant développement.",
      },
      {
        num: '03',
        title: 'Développement',
        description:
          "Construction du workflow sur n8n, Make ou via API directe. Intégration des appels LLM (Claude, GPT-4) pour les étapes nécessitant de la compréhension.",
      },
      {
        num: '04',
        title: 'Tests sur cas réels',
        description:
          "Tests avec vos données réelles sur l'ensemble des scénarios prévus et des cas limites. On valide que l'automatisation est fiable avant de la mettre en production.",
      },
      {
        num: '05',
        title: 'Déploiement et formation',
        description:
          "Mise en production avec monitoring des erreurs. Formation de votre équipe sur la supervision et les corrections de base.",
      },
    ],
    faq: [
      {
        question: "Quelle est la différence entre Zapier, Make et n8n ?",
        answer:
          "Zapier est simple mais limité et coûteux à l'échelle. Make est plus puissant avec un meilleur rapport qualité/prix. n8n est open source, hébergeable chez vous, le plus flexible et le plus adapté aux workflows complexes avec IA.",
      },
      {
        question: "Les automatisations sont-elles fiables à 100% ?",
        answer:
          "Aucune automatisation n'est fiable à 100%. On conçoit avec des mécanismes de gestion d'erreur, des alertes et des logs pour que vous sachiez immédiatement si quelque chose ne fonctionne pas.",
      },
      {
        question: "Peut-on automatiser des processus impliquant des données personnelles ?",
        answer:
          "Oui, avec les précautions RGPD appropriées. On vous accompagne sur les aspects de conformité (base légale du traitement, durée de conservation, journalisation des accès).",
      },
    ],
    relatedSlugs: [
      'creation-agents-ia',
      'optimisation-processus-internes',
      'creation-outils-metier',
    ],
  },

  {
    slug: 'optimisation-processus-internes',
    categorySlug: 'intelligence-artificielle-automatisation',
    num: '05.4',
    name: 'Optimisation des processus',
    nameFull: 'Optimisation des processus internes par l\'IA',
    description:
      "On cartographie vos processus internes et on identifie où l'IA peut vous faire gagner des heures par semaine.",
    longDescription:
      "Avant d'automatiser quoi que ce soit, il faut savoir ce qui mérite vraiment d'être automatisé. Yofield conduit un audit de vos processus internes avec une grille d'analyse IA : quelles tâches sont répétitives, prévisibles, basées sur des règles, et donc candidates à l'automatisation ? Quelles tâches nécessitent du jugement humain et doivent être préservées ? Le résultat est une feuille de route priorisée avec un calcul de gain réel pour chaque automatisation proposée.",
    seoTitle: 'Optimisation des processus internes par l\'IA — Studio Yofield',
    seoDescription:
      "Audit et optimisation de vos processus internes par l'IA. Studio Yofield : cartographie, identification des gains, feuille de route d'automatisation priorisée.",
    promises: [
      "Un audit honnête qui distingue ce qui vaut la peine d'être automatisé de ce qui ne l'est pas.",
      "Un calcul de gain horaire réel pour chaque automatisation proposée.",
      "Une feuille de route priorisée selon l'impact et la faisabilité.",
      "Un plan d'implémentation que vous pouvez exécuter en autonomie ou avec nous.",
    ],
    steps: [
      {
        num: '01',
        title: 'Interviews et observation',
        description:
          "Entretiens avec les membres de votre équipe sur leurs tâches quotidiennes. On cherche les patterns répétitifs, les points de friction et les tâches chronophages.",
      },
      {
        num: '02',
        title: 'Cartographie des processus',
        description:
          "Documentation visuelle de vos processus clés : qui fait quoi, avec quels outils, à quelle fréquence. On rend visible ce qui fonctionne en coulisses.",
      },
      {
        num: '03',
        title: 'Analyse IA',
        description:
          "Évaluation de chaque processus selon trois critères : potentiel d'automatisation, complexité d'implémentation, retour sur investissement. On priorise ensemble.",
      },
      {
        num: '04',
        title: 'Feuille de route',
        description:
          "Construction du plan d'action priorisé : séquence d'implémentation, dépendances, estimations de temps et de budget, critères de succès mesurables.",
      },
      {
        num: '05',
        title: 'Accompagnement',
        description:
          "Suivi de l'implémentation selon vos préférences : autonome avec notre documentation, assisté par Yofield, ou totalement délégué à notre équipe.",
      },
    ],
    faq: [
      {
        question: "Cette mission est-elle utile pour une petite équipe ?",
        answer:
          "Particulièrement. Dans une petite équipe, chaque heure gagnée a un impact direct sur la croissance. Et les processus sont souvent moins formalisés, ce qui laisse plus de marge d'optimisation.",
      },
      {
        question: "Dois-je avoir déjà des outils en place ?",
        answer:
          "Non. On travaille avec ce que vous avez, qu'il s'agisse d'outils sophistiqués ou de spreadsheets Excel. L'audit s'adapte à votre niveau de maturité digitale.",
      },
      {
        question: "L'optimisation des processus nécessite-t-elle un changement d'outils ?",
        answer:
          "Pas forcément. On cherche d'abord à mieux utiliser les outils que vous avez. Le changement d'outil n'est recommandé que quand il apporte un gain clair qui justifie le coût de migration.",
      },
    ],
    relatedSlugs: [
      'automatisations-ia',
      'creation-agents-ia',
      'creation-outils-metier',
    ],
  },

  {
    slug: 'creation-outils-metier',
    categorySlug: 'intelligence-artificielle-automatisation',
    num: '05.5',
    name: 'Outils métier sur-mesure',
    nameFull: 'Création d\'outils métier sur-mesure',
    description:
      "On développe les outils internes que votre équipe utilise au quotidien, conçus pour votre façon de travailler.",
    longDescription:
      "Les outils génériques ne s'adaptent jamais parfaitement à votre façon de travailler. Un outil métier sur-mesure fait exactement ce dont vous avez besoin, sans les fonctionnalités inutiles, sans les limites arbitraires d'un SaaS. Yofield développe ces outils : générateur de propositions commerciales, calculateur de devis, outil de brief client, tableau de bord métier, interface de gestion de production. Chaque outil est construit en Next.js, déployé sur votre infrastructure et transmis avec le code source complet.",
    seoTitle: 'Création d\'outils métier sur-mesure — Studio Yofield',
    seoDescription:
      "Développement d'outils métier sur-mesure en Next.js. Studio Yofield : générateurs, calculateurs, tableaux de bord, interfaces de gestion. Code source livré.",
    promises: [
      "Un outil qui fait exactement ce dont vous avez besoin, sans compromis.",
      "Un code source livré et documenté que vous possédez entièrement.",
      "Une interface que votre équipe comprend sans formation technique.",
      "Un déploiement sur votre infrastructure ou sur Vercel selon votre choix.",
    ],
    steps: [
      {
        num: '01',
        title: 'Définition fonctionnelle',
        description:
          "Ateliers de cadrage pour définir exactement ce que l'outil doit faire : cas d'usage, utilisateurs, flux de données, intégrations requises.",
      },
      {
        num: '02',
        title: 'Conception UX',
        description:
          "Wireframes des écrans clés validés avec les utilisateurs réels avant le design. On s'assure que la logique est juste avant de passer au visuel.",
      },
      {
        num: '03',
        title: 'Design UI',
        description:
          "Interface sobre et efficace, alignée avec votre identité de marque si applicable. L'outil doit donner envie d'être utilisé.",
      },
      {
        num: '04',
        title: 'Développement',
        description:
          "Développement Next.js avec les intégrations nécessaires : base de données, API tierces, authentification, export de données.",
      },
      {
        num: '05',
        title: 'Déploiement et transmission',
        description:
          "Déploiement, formation des utilisateurs, remise du code source documenté. Vous êtes autonomes dès le premier jour.",
      },
    ],
    faq: [
      {
        question: "Quelle est la différence avec l'achat d'un SaaS ?",
        answer:
          "Un SaaS fait 80% de ce que vous voulez et vous force à vous adapter pour le reste. Un outil sur-mesure fait 100% de ce que vous voulez, ne fait pas ce dont vous n'avez pas besoin et n'augmente pas son prix chaque année.",
      },
      {
        question: "Livrez-vous le code source ?",
        answer:
          "Toujours. Vous possédez intégralement l'outil que nous développons : code source, documentation, droits complets. Pas de dépendance à Yofield pour faire évoluer votre outil.",
      },
      {
        question: "L'outil peut-il évoluer après livraison ?",
        answer:
          "Oui. Soit en faisant appel à Yofield pour les évolutions (on connaît le code), soit en le confiant à votre équipe technique avec la documentation livrée.",
      },
    ],
    relatedSlugs: [
      'creation-application-web',
      'automatisations-ia',
      'creation-agents-ia',
    ],
  },

  {
    slug: 'skills-claude-personnalisees',
    categorySlug: 'intelligence-artificielle-automatisation',
    num: '05.6',
    name: 'Skills Claude personnalisées',
    nameFull: 'Création de Skills Claude personnalisées',
    description:
      "On développe des Skills Claude sur-mesure pour votre marque, directement intégrées dans Claude Code et l'API Anthropic.",
    longDescription:
      "Claude permet de créer des compétences spécialisées (Skills) qui ajoutent des comportements précis à l'assistant dans votre contexte métier. Yofield développe ces Skills sur-mesure : une Skill qui génère des propositions commerciales selon votre template, une Skill qui analyse vos données de performance et rédige un rapport de synthèse, une Skill qui brief automatiquement vos créatifs selon votre brand voice. Ces Skills s'exécutent dans Claude Code, l'API Anthropic ou vos plateformes intégrées via MCP.",
    seoTitle: 'Création de Skills Claude personnalisées — Studio Yofield',
    seoDescription:
      "Développement de Skills Claude sur-mesure pour votre marque. Studio Yofield : intégration API Anthropic, Claude Code, MCP. Skills métier, brand voice, automation.",
    promises: [
      "Des Skills conçues pour vos cas d'usage métier réels, pas des démos.",
      "Une intégration dans Claude Code ou l'API Anthropic selon votre usage.",
      "Un code source documenté et livré avec les droits complets.",
      "Une formation de votre équipe à l'utilisation et à l'évolution des Skills.",
    ],
    steps: [
      {
        num: '01',
        title: 'Définition du cas d\'usage',
        description:
          "Identification précise de ce que la Skill doit faire, des entrées qu'elle reçoit, des sorties qu'elle produit et des outils qu'elle utilise.",
      },
      {
        num: '02',
        title: 'Architecture de la Skill',
        description:
          "Conception de la structure : system prompt, outils disponibles, flux d'exécution, gestion des erreurs. Documentation avant développement.",
      },
      {
        num: '03',
        title: 'Développement',
        description:
          "Développement de la Skill selon les spécifications de l'API Anthropic ou de Claude Code. Intégration des MCP servers nécessaires.",
      },
      {
        num: '04',
        title: 'Tests et calibrage',
        description:
          "Tests exhaustifs sur vos données réelles. Calibrage du prompt système pour des sorties fiables et cohérentes avec votre brand voice.",
      },
      {
        num: '05',
        title: 'Déploiement et formation',
        description:
          "Déploiement dans votre environnement Claude. Formation de votre équipe et documentation complète pour l'utilisation et la maintenance.",
      },
    ],
    faq: [
      {
        question: "Qu'est-ce qu'un MCP server et en avons-nous besoin ?",
        answer:
          "Un MCP (Model Context Protocol) server est un serveur qui expose des outils à Claude : accès à votre base de données, à vos fichiers, à vos API métier. Si votre Skill doit interagir avec vos systèmes existants, un MCP server est nécessaire.",
      },
      {
        question: "Les Skills fonctionnent-elles avec Claude.ai ou uniquement via l'API ?",
        answer:
          "Les Skills développées sur l'API fonctionnent via l'API Anthropic et Claude Code. Pour Claude.ai, on crée des Projects avec des instructions personnalisées et des documents de référence.",
      },
      {
        question: "Peut-on créer plusieurs Skills qui s'appellent entre elles ?",
        answer:
          "Oui. C'est l'architecture multi-agents : une Skill orchestratrice appelle des Skills spécialisées selon les besoins. On conçoit ces architectures pour les cas d'usage complexes.",
      },
      {
        question: "Nos données sont-elles transmises à Anthropic lors de l'utilisation ?",
        answer:
          "Selon votre contrat API Anthropic. Avec un accès Enterprise ou API standard avec les options de confidentialité activées, Anthropic ne réutilise pas vos données pour l'entraînement. On vous accompagne sur le choix du bon niveau de confidentialité.",
      },
    ],
    relatedSlugs: [
      'creation-agents-ia',
      'ai-brand-voice',
      'automatisations-ia',
    ],
  },
]

/* ─── Helpers ─────────────────────────────────────────── */

export function getPrestationBySlug(slug: string): Prestation | undefined {
  return prestations.find((p) => p.slug === slug)
}

export function getPrestationsByCategory(categorySlug: string): Prestation[] {
  return prestations.filter((p) => p.categorySlug === categorySlug)
}

export function getRelatedPrestations(slug: string): Prestation[] {
  const prestation = getPrestationBySlug(slug)
  if (!prestation) return []
  return prestation.relatedSlugs
    .map((s) => getPrestationBySlug(s))
    .filter((p): p is Prestation => p !== undefined)
}

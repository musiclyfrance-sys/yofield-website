/* ─── Secteurs — Yofield ────────────────────────────────────────────
   6 secteurs d'activité avec contenu SEO riche
   Règle stricte : jamais de "—", jamais de "agence", jamais de
   "solution", "innovant", "ROI", "synergies", "booster",
   "passionnés", "n'hésitez pas"
   Langue : français intégral
─────────────────────────────────────────────────────────────────── */

interface FAQItem {
  question: string
  answer: string
}

interface SecteurClient {
  name: string
  initials: string
  color: string
}

interface SecteurService {
  categorySlug: string
  label: string
  why: string
}

interface SecteurSection {
  heading: string
  body: string
  subsections?: Array<{ heading: string; body: string }>
}

export interface Secteur {
  slug: string
  num: string
  name: string
  nameShort: string
  tagline: string
  headline: string
  intro: string
  clients: SecteurClient[]
  services: SecteurService[]
  sections: SecteurSection[]
  faq: FAQItem[]
  seoTitle: string
  seoDescription: string
  seoKeywords: string[]
  casClientSlugs: string[]
}

export const secteurs: Secteur[] = [
  /* ─── 01 — BANQUE & ASSURANCE ──────────────────────────────────── */
  {
    slug: 'banque-assurance',
    num: '01',
    name: 'Banque & Assurance',
    nameShort: 'Banque',
    tagline: 'Marques financières qui inspirent confiance dès le premier contact.',
    headline:
      'Une marque financière qui inspire confiance dès le premier contact.',
    intro:
      "Dans la banque et l'assurance, la confiance se construit à chaque point de contact. Yofield aligne votre identité de marque sur la solidité réelle de vos produits.",
    clients: [
      { name: 'Crédit Capital', initials: 'CC', color: 'bg-pine' },
      { name: 'Mutuelle Solidaire', initials: 'MS', color: 'bg-soil' },
      { name: 'Finance Now', initials: 'FN', color: 'bg-sage' },
      { name: 'Invest Pro', initials: 'IP', color: 'bg-pine' },
      { name: 'Sécurité Vie', initials: 'SV', color: 'bg-soil' },
      { name: 'Capital Partners', initials: 'CP', color: 'bg-sage' },
      { name: 'Banque Terrain', initials: 'BT', color: 'bg-pine' },
      { name: 'Assur Vie', initials: 'AV', color: 'bg-soil' },
    ],
    services: [
      {
        categorySlug: 'branding-identite-de-marque',
        label: 'Branding & identité',
        why: 'Un système visuel cohérent construit la crédibilité avant même la lecture du contrat.',
      },
      {
        categorySlug: 'creation-sites-applications',
        label: 'Site vitrine',
        why: 'Un site clair et rapide réduit le taux de rebond et qualifie les prospects entrants.',
      },
      {
        categorySlug: 'communication-digitale-acquisition',
        label: 'SEO sectoriel',
        why: 'Les requêtes financières sont très concurrentielles ; une architecture de contenu solide fait la différence.',
      },
      {
        categorySlug: 'branding-identite-de-marque',
        label: 'Brand voice',
        why: "Un ton de marque humain et précis distingue votre établissement des discours juridiques inaccessibles.",
      },
      {
        categorySlug: 'production-contenus',
        label: 'Contenus éditoriaux',
        why: 'Des articles de fond pédagogiques positionnent votre marque comme référence dans votre segment.',
      },
    ],
    sections: [
      {
        heading: 'Pourquoi l\'identité de marque est critique dans la finance',
        body:
          "Le secteur bancaire et assurantiel souffre d'un déficit d'image structurel. Les clients font confiance à leur conseiller humain bien avant de faire confiance à l'institution qui l'emploie. Ce paradoxe crée une opportunité réelle pour les établissements qui investissent dans leur identité : se distinguer par la clarté, la proximité et la cohérence visuelle là où leurs concurrents restent dans le registre de l'abstraction institutionnelle.\n\nYofield observe que la plupart des sites de banques régionales et de mutuelles souffrent des mêmes problèmes : une architecture de l'information pensée pour l'interne, un vocabulaire juridique non traduit, et une identité graphique qui n'a pas évolué depuis la dernière refonte il y a dix ans. Ces éléments ne sont pas anodins. Ils génèrent de la friction à chaque étape du parcours client, depuis la première visite sur le site jusqu'à la signature du contrat.\n\nLe travail de Yofield dans ce secteur part toujours du même diagnostic : identifier précisément où l'identité de marque crée de la friction, puis reconstruire les éléments qui font vraiment la différence. Pas de refonte globale systématique, mais une intervention ciblée sur les points de contact à fort impact.",
        subsections: [
          {
            heading: 'La confiance comme actif de marque',
            body:
              "La confiance dans la finance ne se décrète pas. Elle se construit par l'accumulation de signaux cohérents : un logo stable, des couleurs qui reviennent, une voix qui ne change pas selon les canaux, des engagements formulés clairement. Yofield travaille à construire ces systèmes de cohérence qui transforment progressivement la réputation en actif tangible pour votre marque.",
          },
          {
            heading: 'Digitalisation et renouvellement des attentes clients',
            body:
              "Les néobanques et insurtech ont habitué un segment croissant de la clientèle à des interfaces rapides, des parcours sans friction et un discours direct. Les établissements traditionnels qui ignorent ce changement d'attente perdent du terrain non pas sur les produits, mais sur l'expérience de marque. Moderniser son identité ne signifie pas renoncer à ses valeurs : cela signifie les exprimer dans les formats et les codes visuels de 2026.",
          },
        ],
      },
      {
        heading: 'Branding financier : entre réglementation et différenciation',
        body:
          "Travailler l'identité d'une marque dans la finance implique de naviguer entre deux impératifs contradictoires. D'un côté, les contraintes réglementaires et les obligations de communication qui limitent la liberté créative. De l'autre, la nécessité de se distinguer dans un marché où l'offre produit est souvent peu différenciée.\n\nYofield résout cette tension en travaillant d'abord sur les éléments qui ne sont pas soumis à réglementation : le positionnement, le nom, l'identité visuelle, la voix, le ton. Ces éléments définissent la perception de la marque avant même que le client lise les conditions générales. Une mutuelle qui s'adresse à ses membres comme à des personnes intelligentes, avec un design sobre et des contenus pédagogiques honnêtes, crée un terrain de confiance que ses concurrents ne peuvent pas copier facilement.\n\nLe branding financier efficace n'est pas celui qui cache la complexité du produit derrière un design rassurant. C'est celui qui rend cette complexité accessible, qui donne au client les outils pour comprendre ce qu'il signe et pourquoi c'est dans son intérêt.",
        subsections: [
          {
            heading: 'Identité visuelle dans un secteur contraint',
            body:
              "Les mentions légales, les tableaux de garanties, les plaquettes commerciales standardisées : le matériel visuel d'un établissement financier est souvent imposé à 70% par la réglementation. Yofield se concentre sur les 30% qui restent pour construire une identité forte : la typographie, les couleurs secondaires, le style photographique, le ton des titres et accroches, la mise en page des supports libres.",
          },
        ],
      },
      {
        heading: 'Site web et présence digitale pour banques et mutuelles',
        body:
          "Le site web d'un établissement financier remplit plusieurs fonctions simultanément : vitrine institutionnelle, outil d'acquisition de prospects, espace de service pour les clients existants. Cette multiplicité d'objectifs aboutit souvent à des sites qui ne remplissent aucune de ces fonctions correctement, faute d'une architecture pensée avec rigueur.\n\nYofield construit des sites financiers avec une logique de parcours utilisateur claire. Les prospects qui ne connaissent pas encore l'établissement doivent pouvoir comprendre l'offre en moins de deux minutes. Les clients existants doivent trouver leurs informations sans avoir à appeler. Les moteurs de recherche doivent pouvoir indexer le contenu efficacement. Ces trois objectifs se gèrent avec une architecture d'information précise et un système de navigation sans ambiguïté.\n\nLe SEO est un levier particulièrement puissant dans le secteur financier. Les requêtes autour du crédit immobilier, de l'assurance santé ou de la gestion de patrimoine génèrent un volume de recherches considérable avec une forte intention d'achat. Occuper ces positions avec un contenu de qualité produit un flux de prospects qualifiés durable, sans dépendance aux budgets publicitaires.",
      },
      {
        heading: 'Contenus et brand voice dans la communication financière',
        body:
          "Le contenu éditorial est le terrain où les marques financières peuvent le plus facilement se différencier. Un article qui explique vraiment comment fonctionne une assurance emprunteur, un guide pratique sur la préparation de la retraite, une comparaison honnête entre différentes formules de placement : ces contenus créent une relation de confiance que la publicité ne peut pas construire.\n\nYofield produit des contenus financiers qui respectent deux impératifs simultanément : la précision technique, pour ne pas induire le lecteur en erreur, et la lisibilité, pour que le lecteur non-expert comprenne sans avoir besoin d'un dictionnaire. Cette combinaison est plus rare qu'il n'y paraît dans le secteur, et c'est précisément ce qui permet à ces contenus de ranker et de créer de l'engagement.\n\nLa brand voice d'un établissement financier doit être stable sur tous les points de contact : du post LinkedIn du PDG aux conditions générales des contrats, en passant par les mails de bienvenue et les notifications de l'application mobile. Yofield construit des guides de voix de marque opérationnels, que n'importe quel collaborateur ou prestataire peut utiliser sans formation approfondie.",
      },
    ],
    faq: [
      {
        question: 'Combien de temps dure un projet de branding pour un établissement financier ?',
        answer:
          "Un projet de branding complet pour une banque régionale ou une mutuelle prend entre huit et douze semaines. Le calendrier inclut la phase de diagnostic et de positionnement (deux à trois semaines), la création de l'identité visuelle (trois à quatre semaines) et la production du livret de marque et des templates (deux à trois semaines). Des projets plus ciblés, comme la refonte d'un logo existant ou la construction d'une brand voice, peuvent se traiter en quatre à six semaines.",
      },
      {
        question: 'Yofield peut-il travailler avec les contraintes de communication réglementaire du secteur ?',
        answer:
          "Oui. Yofield intègre dès le brief les contraintes réglementaires spécifiques à votre activité : mentions légales obligatoires, formats de communication imposés, validations juridiques internes. Le travail créatif se développe dans cet espace contraint, pas contre lui. On livre des créations validables par votre service juridique sans allers-retours interminables.",
      },
      {
        question: 'Comment Yofield aborde-t-il le SEO dans le secteur financier, très concurrentiel ?',
        answer:
          "La stratégie SEO financière repose sur un travail de niche : plutôt que de viser les requêtes génériques dominées par les grands acteurs, on identifie les requêtes de longue traîne locales et sectorielles où votre établissement peut réellement ranker. On construit une architecture de contenu autour de ces positions, avec des articles de fond qui créent de l'autorité thématique sur la durée.",
      },
      {
        question: 'Est-ce que Yofield peut gérer la communication vers des cibles B2B (entreprises) et B2C (particuliers) simultanément ?',
        answer:
          "Oui. Beaucoup d'établissements s'adressent à la fois aux particuliers et aux dirigeants d'entreprise avec des offres différentes. Yofield structure l'identité de marque et l'architecture du site pour que ces deux audiences trouvent leur chemin sans confusion, avec un ton adapté à chaque cible tout en maintenant une cohérence globale de la marque.",
      },
      {
        question: 'Que comprend un livret de marque livré par Yofield pour un établissement financier ?',
        answer:
          "Le livret de marque inclut le système d'identité visuelle complet (logo et ses déclinaisons, palette de couleurs avec codes précis, typographies avec règles d'usage), la brand voice (ton de marque, formulations types, exemples par canal), les templates des supports principaux (présentation commerciale, modèles d'emails, formats réseaux sociaux) et un guide d'utilisation opérationnel. Il est livré en PDF et fichiers sources modifiables.",
      },
      {
        question: 'Yofield travaille-t-il avec des fintech et insurtech, ou seulement avec les établissements traditionnels ?',
        answer:
          "Yofield travaille avec les deux. Les fintech et insurtech ont souvent des défis inverses aux établissements traditionnels : elles ont un design moderne mais manquent de profondeur de marque et de contenu de confiance. On adapte l'intervention selon le diagnostic : refonte de positionnement pour les uns, modernisation de l'identité visuelle pour les autres.",
      },
    ],
    seoTitle: 'Banque & Assurance · Studio créatif et digital | Yofield',
    seoDescription:
      'Studio Yofield conçoit l\'identité et la présence digitale des marques bancaires et assurantielles. Branding, site, SEO, brand voice. Cycle court, livraison directe.',
    seoKeywords: [
      'studio créatif banque',
      'branding fintech',
      'identité marque assurance',
      'studio digital finance',
      'branding mutuelle',
      'site web banque',
      'communication financière',
      'identité visuelle fintech',
    ],
    casClientSlugs: ['branding-fintech-credit-capital'],
  },

  /* ─── 02 — SPORT & PERFORMANCE ─────────────────────────────────── */
  {
    slug: 'sport',
    num: '02',
    name: 'Sport & Performance',
    nameShort: 'Sport',
    tagline: 'Des marques sportives à l\'image de leur intensité.',
    headline:
      'Une marque sportive aussi forte que ceux qui la portent.',
    intro:
      "Dans le sport, l'identité crée l'appartenance avant la performance. Yofield construit des marques qui tiennent sur un écran comme en broderie sur un maillot.",
    clients: [
      { name: 'Athletic Club', initials: 'AC', color: 'bg-pine' },
      { name: 'Performance Lab', initials: 'PL', color: 'bg-soil' },
      { name: 'SportsVibe', initials: 'SV', color: 'bg-sage' },
      { name: 'EnduranceX', initials: 'EX', color: 'bg-pine' },
      { name: 'FitPulse', initials: 'FP', color: 'bg-soil' },
      { name: 'Arena Pro', initials: 'AP', color: 'bg-sage' },
    ],
    services: [
      {
        categorySlug: 'branding-identite-de-marque',
        label: 'Branding & identité',
        why: 'Un système visuel fort crée l\'appartenance et la fierté avant même le premier match.',
      },
      {
        categorySlug: 'creation-sites-applications',
        label: 'Site web',
        why: 'Le site est la vitrine permanente de votre club ou marque, accessible à tout moment pour les sponsors et les adhérents.',
      },
      {
        categorySlug: 'production-contenus',
        label: 'Production de contenus',
        why: 'Les contenus sport performent mieux que dans tout autre secteur : montrez le terrain, pas seulement les résultats.',
      },
      {
        categorySlug: 'communication-digitale-acquisition',
        label: 'Réseaux sociaux',
        why: 'La présence sociale d\'une marque sportive est son principal terrain de recrutement d\'adhérents et de sponsors.',
      },
    ],
    sections: [
      {
        heading: 'L\'identité de marque dans le sport : terrain d\'appartenance',
        body:
          "Le sport est peut-être le seul secteur où le public défend l'identité visuelle de la marque avec autant de passion que les résultats sportifs eux-mêmes. Changer le maillot d'un club déclenche des débats qui durent des années. Modifier le logo d'une salle crée des frictions avec les membres historiques. Cette réalité impose une approche particulière du branding sportif : on ne repart pas de zéro si quelque chose fonctionne, on consolide et on systématise.\n\nYofield travaille le branding sportif avec cette conscience de l'héritage émotionnel. Quand une marque sport fait appel à Yofield, le premier travail est de comprendre ce qui existe déjà dans la perception des membres, des supporters ou des clients : quelles sont les images mentales associées à la marque, quels éléments visuels déclenchent de l'attachement, quels aspects sont perçus comme gênants ou datés. Ce diagnostic oriente l'intervention.\n\nPour les marques sport nouvelles ou en création, le travail est différent. Il s'agit de construire un système identitaire qui devienne rapidement reconnaissable, qui tienne sur tous les supports physiques et digitaux, et qui soit assez flexible pour évoluer sans se renier au fil des saisons.",
        subsections: [
          {
            heading: 'Logos sportifs : entre durabilité et modernité',
            body:
              "Un logo sportif doit fonctionner à toutes les échelles : sur l'écran d'une montre connectée, sur une bannière de stade, sur un maillot brodé, sur un autocollant. Cette contrainte technique oriente toutes les décisions de design. Yofield construit des logos sportifs avec un système de déclinaisons : version principale, version compacte, version monochrome, favicon. Chaque version est testée aux dimensions réelles avant livraison.",
          },
          {
            heading: 'Couleurs et système graphique dans le sport',
            body:
              "Les couleurs d'une marque sportive sont son signal identitaire le plus immédiat. Elles doivent fonctionner en sublimation textile, en impression numérique et en web. Yofield définit les palettes avec les codes colorimétrique précis pour chaque usage : Pantone pour le print textile, CMYK pour l'impression classique, RVB et HEX pour le digital. Cette précision évite les dérives colorées qui brouillent l'identité sur la durée.",
          },
        ],
      },
      {
        heading: 'Site web pour clubs et marques de sport',
        body:
          "Le site d'un club ou d'une marque sportive remplit des fonctions précises : informer les adhérents existants, attirer de nouveaux membres ou clients, présenter l'offre aux sponsors potentiels, et ranker localement sur les requêtes de recherche. Ces objectifs ne requièrent pas le même type de contenu ni la même architecture, et c'est précisément ce que beaucoup de sites sport négligent.\n\nYofield construit des sites sport avec une logique d'audience claire. La page d'accueil qualifie immédiatement le visiteur : je suis membre, je cherche à rejoindre le club, je suis partenaire potentiel. Chaque chemin aboutit à une action concrète : renouveler une licence, prendre contact, télécharger un dossier de sponsoring. Le design traduit l'énergie de la marque sans sacrifier la lisibilité.\n\nLe SEO local est particulièrement puissant pour les structures sportives. Une salle de sport qui rankera sur les requêtes 'salle de sport [ville]' ou 'cours de fitness [quartier]' reçoit un flux de prospects qualifiés constant, sans dépendre de la publicité payante. Yofield intègre cette logique dès la construction de l'architecture du site.",
      },
      {
        heading: 'Contenus et présence sociale pour une marque sport',
        body:
          "Le contenu sportif est naturellement engageant. Les résultats, les coulisses de l'entraînement, les portraits d'athlètes, les moments de victoire : autant de matière qui génère de l'engagement organique sur les réseaux si elle est bien mise en forme. Le problème récurrent des clubs et marques sport n'est pas le manque de matière, c'est le manque de système pour la transformer en contenu publiable régulièrement.\n\nYofield construit des systèmes de production de contenu sportif adaptés à la réalité des équipes : des templates visuels réutilisables pour les résultats et les annonces, des formats vidéos courts adaptés au mobile, un calendrier de publication qui suit le rythme des saisons et compétitions. L'objectif est que l'équipe interne puisse maintenir une présence cohérente sans faire appel à un prestataire pour chaque publication.\n\nLa production photo et vidéo en contexte sportif nécessite une approche spécifique. Les sujets bougent vite, la lumière est souvent difficile (gymnases, soirées, intérieur), et le montage doit être rapide pour coller à l'actualité. Yofield adapte ses cycles de production à ces contraintes sectorielles.",
      },
      {
        heading: 'Sponsoring et partenariats : construire le dossier de marque',
        body:
          "Le sponsoring sportif est un terrain où l'identité de marque joue un rôle direct sur les revenus. Un club avec une identité professionnelle, un site à jour et des contenus réguliers négocie ses partenariats dans de bien meilleures conditions qu'un club dont la communication ressemble à une page Facebook créée en 2014.\n\nYofield prépare les structures sportives à l'approche des sponsors en construisant le dossier de marque complet : présentation de l'identité, chiffres clés de la communauté, formats de visibilité disponibles, exemples de contenus, résultats sportifs contextualisés. Ce dossier est conçu pour être compris par un responsable marketing d'une entreprise qui ne connaît pas le secteur sportif spécifique.\n\nLa déclinaison des partenariats dans l'identité visuelle est également un exercice que Yofield maîtrise : comment intégrer les logos partenaires dans les supports sans casser l'identité de la marque sportive, comment hiérarchiser les niveaux de visibilité, comment gérer les conflits de couleurs entre partenaires.",
      },
    ],
    faq: [
      {
        question: 'Yofield travaille-t-il avec des clubs amateurs ou uniquement des structures professionnelles ?',
        answer:
          "Yofield travaille avec les deux. Les clubs amateurs ont souvent des besoins plus ciblés : refonte du logo, création d'un site simple, templates pour les réseaux sociaux. Les structures professionnelles ont des projets plus larges incluant l'identité complète, le dossier sponsor et la stratégie de contenu. Yofield adapte l'intervention et le budget au périmètre réel du besoin.",
      },
      {
        question: 'Comment Yofield gère-t-il la contrainte du budget dans le secteur sportif, souvent limité ?',
        answer:
          "La question du budget est abordée directement dès le premier échange. Yofield propose des interventions modulaires : on peut commencer par l'identité de marque seule, puis ajouter le site dans un second temps, puis les contenus. Cette approche permet de répartir l'investissement sur plusieurs saisons sportives et de construire la marque progressivement.",
      },
      {
        question: 'Est-ce que Yofield peut produire les fichiers de maillots et supports textiles ?',
        answer:
          "Oui. Yofield livre les fichiers techniques adaptés à l'impression textile : fichiers vectoriels en formats compatibles avec la sublimation, broderie et flocage, avec les codes Pantone correspondant aux couleurs de la marque. Ces fichiers sont directement utilisables par les prestataires textiles sans modification.",
      },
      {
        question: 'Combien de temps faut-il pour créer l\'identité d\'un club sportif de zéro ?',
        answer:
          "Un projet d'identité complet pour un club, incluant le logo, la charte graphique, les templates principaux et le livret de marque, prend entre six et dix semaines. Si le projet inclut également le site web, comptez deux à quatre semaines supplémentaires. Le calendrier précis est établi au moment du brief en tenant compte des échéances sportives importantes.",
      },
      {
        question: 'Yofield peut-il créer une identité qui fonctionne aussi pour une marque de vêtements sport liée au club ?',
        answer:
          "Oui. Le travail de positionnement et d'identité visuelle peut être conçu dès le départ pour couvrir à la fois le club et une marque dérivée de produits. On définit ensemble les règles d'usage qui permettent à la marque de fonctionner dans les deux contextes sans créer de confusion.",
      },
      {
        question: 'Comment Yofield mesure-t-il l\'efficacité de son travail pour une marque sportive ?',
        answer:
          "Les indicateurs varient selon les objectifs définis au départ. Pour un club qui cherche à recruter des membres : suivi du trafic SEO local et des demandes d'inscription. Pour une structure qui développe ses partenariats : nombre de demandes de dossier sponsor et valeur des contrats conclus. Pour une salle de sport : taux de conversion des visiteurs du site en essais gratuits. Ces indicateurs sont définis avant le début du projet et suivis après la mise en ligne.",
      },
    ],
    seoTitle: 'Sport & Performance · Studio créatif et digital | Yofield',
    seoDescription:
      'Yofield crée l\'identité de marque, le site et les contenus des clubs et marques sportives. Branding sport, logos, templates, présence digitale. Studio créatif.',
    seoKeywords: [
      'studio branding sport',
      'identité club sportif',
      'marque sport performance',
      'studio digital sport',
      'logo club sportif',
      'site web club sport',
      'communication digitale sport',
      'branding salle de sport',
    ],
    casClientSlugs: ["lancement-marque-athletic-club"],
  },

  /* ─── 03 — TECH & SAAS ─────────────────────────────────────────── */
  {
    slug: 'tech',
    num: '03',
    name: 'Tech & SaaS',
    nameShort: 'Tech',
    tagline: 'Des marques tech qui s\'imposent dans leur segment avant l\'échelle.',
    headline:
      'Une marque tech qui transforme la complexité en clarté.',
    intro:
      "Votre produit tech est bon, mais le décideur compare dix outils à la fois. Yofield construit les marques SaaS qui gagnent la confiance avant la démo.",
    clients: [
      { name: 'DataFlow', initials: 'DF', color: 'bg-pine' },
      { name: 'CloudSync', initials: 'CS', color: 'bg-soil' },
      { name: 'APIbridge', initials: 'AB', color: 'bg-sage' },
      { name: 'Nexus Analytics', initials: 'NA', color: 'bg-pine' },
      { name: 'TechForge', initials: 'TF', color: 'bg-soil' },
      { name: 'DevHub', initials: 'DH', color: 'bg-sage' },
    ],
    services: [
      {
        categorySlug: 'branding-identite-de-marque',
        label: 'Branding & identité',
        why: 'Une identité de marque claire compresse le cycle de vente en établissant la crédibilité avant l\'appel de démo.',
      },
      {
        categorySlug: 'creation-sites-applications',
        label: 'Site marketing SaaS',
        why: 'Votre site est votre premier commercial : il doit qualifier les visiteurs et déclencher les demandes de démonstration.',
      },
      {
        categorySlug: 'intelligence-artificielle-automatisation',
        label: 'IA et automatisations',
        why: 'Automatiser les tâches répétitives libère vos équipes pour les décisions à valeur ajoutée.',
      },
      {
        categorySlug: 'production-contenus',
        label: 'Contenus B2B',
        why: 'Les articles techniques de fond créent de l\'autorité thématique et attirent les équipes qui évaluent votre catégorie.',
      },
      {
        categorySlug: 'communication-digitale-acquisition',
        label: 'SEO B2B',
        why: 'Le SEO sur les requêtes d\'intention forte en B2B tech génère des leads qualifiés à coût marginal décroissant.',
      },
    ],
    sections: [
      {
        heading: 'Le défi de la marque tech : clarté face à la complexité',
        body:
          "Les équipes tech ont tendance à communiquer comme elles pensent : en couches d'abstraction, en jargon technique, en fonctionnalités. C'est cohérent en interne, mais paralysant en externe. Un directeur des achats qui évalue un SaaS RH ne comprend pas la différence entre une architecture microservices et une architecture monolithique, et il n'a pas besoin de la comprendre pour prendre sa décision. Ce qu'il doit comprendre, c'est ce que votre outil change concrètement dans son quotidien opérationnel.\n\nYofield travaille avec les équipes fondatrices pour effectuer cette traduction : pas simplifier le produit, mais simplifier la communication. On identifie les deux ou trois bénéfices qui font vraiment la différence pour vos acheteurs cibles, et on construit le discours de marque autour de ces bénéfices. Le reste suit : le nom, le positionnement, l'identité visuelle, le contenu du site.\n\nCette clarté n'est pas une concession à l'ignorance de votre public. C'est le respect de son temps et de son contexte décisionnel. Les acheteurs B2B qui vous liront ont d'autres réunions dans la journée. Votre marque a soixante secondes pour convaincre que la lecture de la suite vaut leur temps.",
        subsections: [
          {
            heading: 'Positionnement SaaS : se distinguer dans une catégorie encombrée',
            body:
              "La plupart des marchés SaaS sont devenus très encombrés. Des dizaines d'outils se positionnent sur les mêmes requêtes, avec des messagings similaires, des designs proches et des promesses interchangeables. Se distinguer dans ce contexte nécessite un travail de positionnement précis : identifier le segment où vous êtes réellement les meilleurs, pour quel profil d'acheteur, dans quel contexte d'usage spécifique. Yofield mène ce travail avant toute décision créative.",
          },
          {
            heading: 'Brand voice tech : entre crédibilité et accessibilité',
            body:
              "Une marque tech doit parler à deux audiences en même temps : les champions internes (souvent des profils techniques qui évaluent et défendent le produit) et les décideurs (qui valident et signent). Le ton de marque doit être assez crédible pour convaincre les premiers et assez clair pour ne pas perdre les seconds. Yofield construit des brand voice tech qui naviguent entre ces deux exigences avec des exemples concrets par format et par canal.",
          },
        ],
      },
      {
        heading: 'Site marketing SaaS : architecture d\'un outil de vente',
        body:
          "Un site SaaS bien construit est un commercial disponible vingt-quatre heures sur vingt-quatre, capable de qualifier les visiteurs, d'expliquer le produit et de déclencher une action concrète (demande de démo, essai gratuit, prise de contact). Cette performance ne s'obtient pas avec un beau design seul : elle nécessite une architecture de l'information précise, un contenu structuré autour des moments décisionnels et une performance technique irréprochable.\n\nYofield construit des sites SaaS avec une logique de conversion explicite. La page d'accueil répond à trois questions dans les dix premières secondes : pour qui est ce produit, quel problème il résout, et pourquoi vous plutôt qu'un concurrent. La page de prix est conçue pour réduire la friction à la décision, pas pour l'augmenter avec trop d'options. Les pages de cas clients racontent des transformations réelles avec des indicateurs vérifiables.\n\nLa performance technique est non-négociable dans le SaaS B2B. Vos prospects évaluent votre outil sous l'angle de la qualité : si votre site est lent, ils concluent que votre produit l'est aussi. Yofield livre des sites avec des scores Lighthouse supérieurs à 95 en performance, accessibilité et bonnes pratiques.",
        subsections: [
          {
            heading: 'Démonstration produit et onboarding : les pages qui convertissent',
            body:
              "Les pages de démonstration et d'onboarding sont souvent les plus importantes sur un site SaaS, et les plus négligées. Yofield y apporte une attention particulière : formulation claire de ce que le prospect va voir ou tester, réduction des étapes de formulaire au strict nécessaire, et confirmation post-inscription qui fixe les attentes sur la suite du processus.",
          },
        ],
      },
      {
        heading: 'Intelligence artificielle et automatisation pour les équipes tech',
        body:
          "Les éditeurs SaaS sont souvent les mieux placés pour comprendre l'IA, mais les moins bien placés pour l'intégrer dans leurs propres processus internes. L'équipe est focalisée sur le produit, les process internes restent manuels, et les tâches répétitives consomment du temps que l'équipe n'a pas.\n\nYofield déploie des systèmes d'automatisation et d'agents IA dans les workflows des startups tech. Qualification automatique des leads entrants, génération de premiers drafts pour les contenus marketing, synthèse des retours clients, suivi des mentions de marque : autant de tâches qui peuvent être partiellement automatisées sans perdre en qualité, à condition de définir précisément les limites et les points de validation humaine.\n\nCe travail s'inscrit dans la même logique que le branding : libérer les équipes des tâches à faible valeur ajoutée pour qu'elles se concentrent sur ce que personne d'autre ne peut faire à leur place. Un fondateur qui passe ses matinées à synthétiser les appels commerciaux de la veille est un fondateur qui ne construit pas son produit.",
      },
      {
        heading: 'SEO et contenus B2B pour les marques SaaS',
        body:
          "Le SEO B2B tech présente une caractéristique intéressante : les volumes de recherche sont faibles mais l'intention est très forte. Quelqu'un qui cherche 'logiciel gestion RH PME 50 salariés' n'est pas en train de faire une veille générale, il évalue activement des options pour un achat imminent. Occuper ces positions avec un contenu pertinent génère des leads qualifiés qui valent souvent dix fois plus qu'un lead généré par de la publicité.\n\nYofield construit des stratégies de contenu B2B tech autour de trois niveaux : les pages produit optimisées pour les requêtes transactionnelles, les articles de fond qui répondent aux questions des acheteurs en phase d'évaluation, et les guides qui se positionnent sur les requêtes informationnelles liées à votre catégorie. Cette architecture de contenu crée une présence SEO cohérente qui s'appuie sur l'autorité de domaine dans le temps.\n\nLa production de contenu tech requiert une connaissance sectorielle que Yofield construit en immersion dans votre environnement produit. Pas de contenu générique qui pourrait s'appliquer à n'importe quel SaaS : des articles précis qui montrent que vous comprenez les enjeux de vos acheteurs mieux que vos concurrents.",
      },
    ],
    faq: [
      {
        question: 'Yofield peut-il m\'aider à préparer l\'identité de ma startup tech avant une levée de fonds ?',
        answer:
          "Oui, c'est un cas fréquent. Les investisseurs regardent la marque comme un signal de maturité : une startup avec un positionnement clair, une identité cohérente et un site professionnel communique une capacité d'exécution que les slides seuls ne peuvent pas établir. Yofield peut intervenir en cycle court (quatre à six semaines) pour préparer les éléments de marque essentiels avant un roadshow.",
      },
      {
        question: 'Est-ce que Yofield peut travailler avec les designers et développeurs internes de ma startup ?',
        answer:
          "Oui. Yofield peut intervenir en complément d'une équipe interne existante. Dans ce cas, on définit clairement le périmètre : Yofield prend en charge la stratégie de positionnement, le système d'identité et le copywriting, l'équipe interne assure le développement et l'implémentation. Le livret de marque est conçu pour être utilisable par votre équipe sans dépendance continue.",
      },
      {
        question: 'Comment Yofield aborde-t-il le naming pour une startup tech ?',
        answer:
          "Le naming tech suit une méthodologie précise : analyse des noms existants dans votre catégorie pour éviter les collisions, génération de candidats selon plusieurs axes (descriptif, évocateur, inventé), validation de la disponibilité des domaines et des marques, puis tests de mémorisation et de prononciation. On livre un rapport de naming avec cinq à dix candidats qualifiés et une recommandation argumentée.",
      },
      {
        question: 'Quel type de site SaaS Yofield construit-il : vitrine marketing ou application ?',
        answer:
          "Yofield construit le site marketing de votre produit, pas l'application elle-même. Le site marketing est le point d'entrée pour vos prospects : il explique la valeur, déclenche les demandes de démo et sert votre SEO. L'application est construite par vos développeurs. Yofield peut cependant contribuer à l'identité visuelle de l'interface et au design system si cela fait partie du périmètre défini.",
      },
      {
        question: 'Combien de temps prend la création d\'un site SaaS complet avec Yofield ?',
        answer:
          "Un site SaaS complet incluant le positionnement, le copywriting, le design et le développement prend entre huit et douze semaines. Le calendrier dépend de la complexité du produit, du nombre de pages et de la disponibilité de l'équipe fondatrice pour les validations. Des versions simplifiées (cinq à sept pages) peuvent être livrées en six semaines.",
      },
      {
        question: 'Yofield peut-il gérer la communication technique et non-technique simultanément sur mon site ?',
        answer:
          "Oui. La plupart des sites SaaS B2B s'adressent à des profils différents selon les pages : page d'accueil pour les décideurs, documentation et intégrations pour les développeurs, cas clients pour les équipes financières. Yofield structure l'architecture et le contenu pour que chaque audience trouve ce dont elle a besoin sans friction, dans un registre adapté à son niveau de technicité.",
      },
    ],
    seoTitle: 'Tech & SaaS · Studio créatif et digital | Yofield',
    seoDescription:
      'Yofield construit les marques SaaS et startups tech qui gagnent la confiance avant la démo. Branding, site marketing, SEO B2B, contenus, IA. Studio créatif.',
    seoKeywords: [
      'studio design SaaS',
      'branding startup tech',
      'identité marque SaaS B2B',
      'studio digital tech',
      'site marketing SaaS',
      'positionnement startup',
      'SEO B2B SaaS',
      'branding B2B tech',
    ],
    casClientSlugs: ["automatisation-ia-cabinet-conseil","identite-dataflow-saas-b2b"],
  },

  /* ─── 04 — SANTÉ & BIEN-ÊTRE ────────────────────────────────────── */
  {
    slug: 'sante',
    num: '04',
    name: 'Santé & Bien-être',
    nameShort: 'Santé',
    tagline: 'Des marques médicales qui inspirent confiance sans jargon.',
    headline:
      'Une marque santé qui rassure dès le premier regard.',
    intro:
      "En santé, la confiance est la première décision du patient. Yofield construit des marques médicales qui rassurent, informent et fidélisent, sans jargon.",
    clients: [
      { name: 'MedCare Plus', initials: 'MC', color: 'bg-pine' },
      { name: 'Sana Clinic', initials: 'SC', color: 'bg-soil' },
      { name: 'WellPath', initials: 'WP', color: 'bg-sage' },
      { name: 'BioNatura', initials: 'BN', color: 'bg-pine' },
      { name: 'Santé360', initials: 'S3', color: 'bg-soil' },
      { name: 'Espace Bien-être', initials: 'EB', color: 'bg-sage' },
    ],
    services: [
      {
        categorySlug: 'branding-identite-de-marque',
        label: 'Branding & identité',
        why: 'Un système visuel cohérent construit immédiatement la confiance que les patients accordent à votre pratique.',
      },
      {
        categorySlug: 'creation-sites-applications',
        label: 'Site vitrine',
        why: 'Un site médical clair et rassurant convertit les visiteurs en prises de rendez-vous qualifiées.',
      },
      {
        categorySlug: 'communication-digitale-acquisition',
        label: 'SEO local',
        why: 'Le référencement local est le principal levier d\'acquisition de nouveaux patients pour les cabinets et cliniques.',
      },
      {
        categorySlug: 'production-contenus',
        label: 'Contenus santé',
        why: 'Des contenus éducatifs honnêtes positionnent votre marque comme référence de confiance dans votre spécialité.',
      },
    ],
    sections: [
      {
        heading: 'Identité de marque dans la santé : confiance et clarté',
        body:
          "Le secteur de la santé est particulier : la qualité du service est souvent invisible avant l'expérience elle-même. Le patient qui cherche un dermatologue, un kiné ou une clinique ne peut pas évaluer la compétence médicale depuis un moteur de recherche. Il évalue des signaux de substitution : la qualité du site, la clarté des informations, la cohérence visuelle, le ton du discours. Ces signaux construisent ou détruisent la confiance avant le premier rendez-vous.\n\nYofield travaille l'identité des marques santé avec cette réalité en tête. L'objectif n'est pas de produire quelque chose de beau, mais quelque chose de rassurant. Cela passe par des choix précis : des couleurs qui évoquent la sérénité sans tomber dans le cliché médical bleu-blanc, une typographie lisible à toutes les tailles, un discours qui respecte l'intelligence du patient sans abandonner l'accessibilité.\n\nLa confiance dans le secteur santé se construit aussi dans les détails. Une clinique dont le site présente des photos génériques de stock ne communique pas la même chose qu'une clinique dont le site montre ses espaces réels, ses professionnels identifiés et ses équipements. Yofield guide ses clients vers une communication authentique plutôt que rassurante en apparence.",
        subsections: [
          {
            heading: 'Bien-être et santé naturelle : se distinguer dans un marché saturé',
            body:
              "Le marché du bien-être (naturopathie, nutrition, coaching santé, méditation) est devenu très encombré. La différenciation passe obligatoirement par un positionnement précis et une identité de marque distinctive. Yofield travaille avec les praticiens et marques bien-être pour définir leur territoire spécifique et le communiquer avec cohérence sur tous leurs supports.",
          },
          {
            heading: 'Communication éthique et réglementation médicale',
            body:
              "La communication dans le secteur médical est encadrée par des règles précises : interdiction de la publicité pour les professionnels réglementés dans certains pays, obligations d'information, mentions légales spécifiques. Yofield connaît ces contraintes et les intègre dans sa façon de travailler. On construit des communications conformes sans sacrifier leur efficacité.",
          },
        ],
      },
      {
        heading: 'Site web médical et paramédical : informer et rassurer',
        body:
          "Un site médical ou paramédical bien conçu remplit plusieurs fonctions : présenter le praticien ou la structure, décrire les prestations clairement, permettre la prise de rendez-vous et ranker localement pour attirer de nouveaux patients. Ces objectifs ne sont pas contradictoires, mais ils nécessitent une architecture de l'information précise.\n\nYofield construit des sites santé avec une logique de parcours patient. Le visiteur qui arrive sur le site a souvent une question précise : ce praticien traite-t-il mon problème ? Est-il disponible ? Où est le cabinet ? Comment prendre rendez-vous ? L'architecture du site doit répondre à ces questions dans cet ordre, sans friction. Les informations pratiques (adresse, horaires, modalités de prise en charge) ne doivent jamais être difficiles à trouver.\n\nLe design d'un site santé doit équilibrer plusieurs impératifs : être rassurant sans être stérile, être professionnel sans être froid, être complet sans être surchargé. Yofield travaille avec les professionnels de santé pour trouver cet équilibre en fonction de leur spécialité, de leur patientèle et de leur territoire géographique.",
      },
      {
        heading: 'SEO local pour cabinets et cliniques',
        body:
          "Le référencement local est le principal levier d'acquisition de nouveaux patients pour les structures de santé. Une clinique qui rankera en première position sur 'dermatologue Paris 11' ou 'kiné Saint-Germain-en-Laye' reçoit un flux constant de nouveaux patients sans investissement publicitaire récurrent. Cette position s'obtient et se maintient avec un travail de fond sur l'optimisation technique du site, le contenu et la présence locale.\n\nYofield construit des stratégies SEO local santé qui s'appuient sur trois piliers : l'optimisation de la fiche Google Business Profile (la vitrine locale la plus visible), l'architecture de contenu du site orientée requêtes locales, et la production de contenus de spécialité qui créent de l'autorité thématique. Ces trois éléments travaillent ensemble pour consolider la position locale dans le temps.\n\nLes contenus de santé sont particulièrement puissants en SEO car ils répondent à des questions que les patients posent activement. Un article précis sur 'comment préparer une IRM avec claustrophobie' ou 'différence entre physiothérapeute et kinésithérapeute' attire des visiteurs en forte intention de contact, à condition d'être écrit avec la rigueur qu'exige le sujet.",
      },
      {
        heading: 'Contenus éducatifs et présence digitale durable',
        body:
          "Les professionnels de santé qui publient du contenu éducatif honnête et précis sur leurs spécialités construisent progressivement une autorité de référence qui leur apporte des patients qualifiés sur des années. Ce n'est pas un travail rapide, mais c'est un investissement dont le rendement s'améliore avec le temps, contrairement à la publicité payante qui s'arrête quand on coupe le budget.\n\nYofield produit des contenus santé qui respectent deux impératifs : la précision médicale (vérifiée avec le praticien) et la lisibilité pour un patient non-spécialiste. Ce double impératif est difficile à satisfaire sans une connaissance précise du secteur. Yofield travaille en collaboration étroite avec les professionnels de santé pour produire des contenus qui reflètent réellement leur expertise.\n\nLa présence sur les réseaux sociaux dans le secteur santé doit être abordée avec discernement. Les plateformes grand public (Instagram, TikTok) peuvent être pertinentes pour certains segments du bien-être, mais elles sont souvent inadaptées pour les structures médicales dont la communication doit rester dans un registre professionnel. Yofield aide à définir les canaux appropriés selon le profil de chaque structure.",
      },
    ],
    faq: [
      {
        question: 'Yofield peut-il créer l\'identité d\'un cabinet médical individuel, pas seulement d\'une grande clinique ?',
        answer:
          "Oui. Yofield travaille aussi bien avec des praticiens individuels (médecin, kiné, ostéopathe, psychologue) qu'avec des structures multi-praticiens. Pour un cabinet individuel, l'intervention est souvent plus ciblée : un logo professionnel, un site vitrine clair et une fiche Google optimisée. Ces trois éléments suffisent à construire une présence digitale solide et à attirer de nouveaux patients localement.",
      },
      {
        question: 'Comment Yofield gère-t-il la prise de rendez-vous en ligne dans les sites médicaux qu\'il construit ?',
        answer:
          "Yofield intègre les systèmes de prise de rendez-vous en ligne (Doctolib, Calendly, Acuity ou solutions propriétaires) dans l'architecture du site de façon fluide. L'objectif est que le bouton de prise de rendez-vous soit visible depuis toutes les pages importantes et que le tunnel soit court pour réduire les abandons. On ne développe pas les logiciels de prise de rendez-vous, on les intègre avec soin.",
      },
      {
        question: 'Yofield peut-il aider une marque de compléments alimentaires ou de cosmétiques naturels liée à la santé ?',
        answer:
          "Oui. Ce segment est distinct des structures médicales réglementées et permet une liberté créative plus grande. Yofield a travaillé avec des marques de cosmétiques naturels et de compléments et connaît les spécificités du secteur : allégations santé réglementées, certification et traçabilité comme argument de différenciation, communauté engagée comme premier terrain de lancement public.",
      },
      {
        question: 'Combien de temps faut-il pour créer un site médical complet avec Yofield ?',
        answer:
          "Un site médical complet incluant la stratégie, le design et le développement prend six à dix semaines. Si le projet inclut également la création de l'identité visuelle (logo, charte graphique), comptez deux à trois semaines supplémentaires. Des sites vitrine simples (quatre à six pages) peuvent être livrés en quatre à six semaines.",
      },
      {
        question: 'Yofield peut-il créer du contenu médical sans que le praticien ait besoin d\'écrire lui-même ?',
        answer:
          "Oui. Yofield produit les contenus en deux temps : un entretien avec le praticien pour recueillir les informations précises et les nuances de sa pratique, puis la rédaction par le studio. Le praticien valide le contenu avant publication. Cette approche permet de produire des contenus précis sans mobiliser le temps du professionnel de santé sur la rédaction.",
      },
      {
        question: 'Yofield prend-il en compte les contraintes RGPD pour les sites médicaux ?',
        answer:
          "Oui. Les sites médicaux manipulent des données de santé sensibles et sont soumis à des obligations RGPD strictes. Yofield intègre ces contraintes dans la conception technique du site : bannière de cookies conforme, formulaires de contact avec mentions légales adaptées, absence de traceurs tiers non consentis. On vous oriente également vers les démarches CNIL spécifiques aux professionnels de santé.",
      },
    ],
    seoTitle: 'Santé & Bien-être · Studio créatif et digital | Yofield',
    seoDescription:
      'Yofield construit l\'identité et la présence digitale des cabinets, cliniques et marques santé. Branding médical, site, SEO local, contenus. Studio créatif.',
    seoKeywords: [
      'studio santé',
      'branding clinique',
      'identité marque médicale',
      'studio digital santé',
      'site web médecin',
      'SEO local cabinet médical',
      'branding bien-être',
      'communication médicale',
    ],
    casClientSlugs: ["site-seo-medcare-clinique"],
  },

  /* ─── 05 — RESTAURATION & HÔTELLERIE ───────────────────────────── */
  {
    slug: 'restauration',
    num: '05',
    name: 'Restauration & Hôtellerie',
    nameShort: 'Restauration',
    tagline: 'Des marques de table et d\'accueil qui donnent envie avant l\'arrivée.',
    headline:
      'Une marque qui donne envie avant la première visite.',
    intro:
      "En restauration et hôtellerie, la réservation se joue sur une image vue en trente secondes. Yofield construit des identités qui donnent envie avant la première visite.",
    clients: [
      { name: 'Maison Tradition', initials: 'MT', color: 'bg-pine' },
      { name: 'The Grand Table', initials: 'GT', color: 'bg-soil' },
      { name: 'Chez Lumière', initials: 'CL', color: 'bg-sage' },
      { name: 'Hôtel Éclat', initials: 'HE', color: 'bg-pine' },
      { name: 'Bistro Moderne', initials: 'BM', color: 'bg-soil' },
      { name: 'Le Palais', initials: 'LP', color: 'bg-sage' },
    ],
    services: [
      {
        categorySlug: 'branding-identite-de-marque',
        label: 'Branding & identité',
        why: 'Une identité visuelle forte crée la désirabilité avant le premier contact et justifie le positionnement tarifaire.',
      },
      {
        categorySlug: 'creation-sites-applications',
        label: 'Site e-commerce',
        why: 'Un site avec réservation intégrée capte directement les clients sans commission de plateforme tierce.',
      },
      {
        categorySlug: 'production-contenus',
        label: 'Contenus & shooting',
        why: 'Les visuels gastronomiques de qualité sont le premier déclencheur de réservation sur tous les canaux.',
      },
      {
        categorySlug: 'communication-digitale-acquisition',
        label: 'Réseaux sociaux',
        why: 'Instagram et Google sont les deux premiers points de contact du client restaurant avant toute autre plateforme.',
      },
    ],
    sections: [
      {
        heading: 'L\'identité de marque dans la restauration : créer la désirabilité',
        body:
          "Le secteur de la restauration est profondément émotionnel. Les clients ne choisissent pas un restaurant uniquement pour la nourriture : ils choisissent une promesse d'expérience, une atmosphère, un style de service, une façon d'être accueillis. L'identité visuelle d'un restaurant doit traduire cette promesse avant même l'arrivée. Un logo qui ne reflète pas l'ambiance réelle, un site qui montre des photos génériques ou une carte dont la typographie ne correspond pas au positionnement tarifaire créent des dissonances qui brouillent la décision de réservation.\n\nYofield travaille l'identité des restaurants et hôtels en partant toujours de l'expérience réelle de l'établissement. Avant toute décision créative, on passe du temps dans l'établissement : on observe, on écoute, on comprend ce qui fait l'unicité du lieu. Ce travail de terrain oriente ensuite toutes les décisions visuelles et verbales.\n\nLa cohérence entre l'identité digitale et l'identité physique est particulièrement importante dans ce secteur. Un hôtel boutique dont le site promet un design soigné mais dont les cartes de chambre sont imprimées en urgence sur du papier standard crée une déception qui se retrouve dans les avis. Yofield pense l'identité dans sa totalité, du digital au print, du site aux menus.",
        subsections: [
          {
            heading: 'Branding gastronomique : entre prestige et accessibilité',
            body:
              "Un restaurant gastronomique doit communiquer l'excellence sans intimider. L'identité visuelle doit donner envie à des clients qui ne connaissent pas encore l'établissement, tout en confirmant le choix de ceux qui reviennent. Yofield construit des identités gastronomiques qui équilibrent ces deux impératifs : un design sobre et sûr, un discours précis qui parle aux sens sans jargon culinaire hermétique.",
          },
          {
            heading: 'Branding hôtelier : l\'identité comme promesse de séjour',
            body:
              "L'identité d'un hôtel boutique est la promesse que vous faites avant l'arrivée du client. Elle doit décrire avec précision l'expérience qu'il vivra : le style des chambres, l'ambiance des espaces communs, le registre du service, la philosophie de l'établissement. Yofield travaille cette promesse visuelle et verbale pour qu'elle soit tenue à chaque point de contact du séjour.",
          },
        ],
      },
      {
        heading: 'Site web et réservation directe pour restaurants et hôtels',
        body:
          "Le site web d'un restaurant ou d'un hôtel est le seul canal de réservation où l'établissement ne paie pas de commission. Les plateformes comme TheFork, Booking.com ou OpenTable prélèvent entre 15 et 30% sur chaque réservation. Un site avec une réservation directe bien conçue capte une partie de ce flux et améliore significativement la rentabilité par couvert ou par nuit.\n\nYofield construit des sites restauration et hôtellerie avec une logique de réservation directe. Le site doit permettre au visiteur de comprendre l'offre en moins d'une minute, de vérifier les disponibilités et de réserver sans friction. Pour les restaurants, l'intégration avec les systèmes de réservation (Zenchef, Sevenrooms, La Fourchette Manager) est pensée pour être la plus fluide possible. Pour les hôtels, le moteur de réservation est un élément central de l'architecture du site.\n\nLa galerie photos est l'élément le plus influent sur la décision de réservation en restauration et hôtellerie. Un site avec de mauvaises photos perd des réservations, quelle que soit la qualité réelle de l'établissement. Yofield peut coordonner un shooting photo professionnel en parallèle du développement du site, pour que les deux soient livrés ensemble.",
        subsections: [
          {
            heading: 'Menu en ligne et communication de l\'offre',
            body:
              "La présentation du menu en ligne est souvent négligée. Un PDF scanné illisible sur mobile, une carte non mise à jour depuis six mois, des prix absents pour ne pas effrayer : ces éléments génèrent de l'hésitation. Yofield construit des menus en ligne lisibles, beaux et facilement mis à jour par l'équipe de l'établissement sans passer par un prestataire.",
          },
        ],
      },
      {
        heading: 'Contenus visuels et stratégie sociale pour l\'univers table',
        body:
          "Instagram est le moteur de découverte principal de nombreux restaurants et hôtels en 2026. Un compte avec des photos cohérentes, des captions qui donnent envie et une fréquence de publication régulière fait une différence directe sur le remplissage. Le problème récurrent est que les équipes de restauration n'ont ni le temps ni les outils pour maintenir cette présence sans aide.\n\nYofield construit des systèmes de production de contenu adaptés à la réalité opérationnelle des établissements. Des templates visuels réutilisables pour les publications régulières, des formats stories prêts à l'emploi pour les promotions et événements, un guide de caption qui permet à l'équipe de publier sans chercher le bon ton. L'objectif est que l'équipe puisse maintenir une présence cohérente avec vingt minutes par semaine.\n\nLe shooting photo et vidéo est un investissement à fort rendement dans ce secteur. Des photos de plats bien éclairées, une vidéo de l'ambiance du soir, un timelapse d'une préparation en cuisine : ce contenu alimente les réseaux, le site, Google et les avis pendant des mois. Yofield organise des sessions de production pensées pour maximiser le volume et la diversité des visuels exploitables.",
      },
      {
        heading: 'Présence locale, avis et réputation digitale',
        body:
          "La fiche Google Business Profile est le point de contact le plus consulté avant une réservation au restaurant. Elle apparaît avant le site dans les résultats de recherche, affiche les horaires, les photos, les avis et le bouton d'appel ou de réservation. Une fiche non optimisée, avec des photos de mauvaise qualité ou une description générique, perd des clients avant même qu'ils atteignent le site.\n\nYofield optimise les fiches Google Business des établissements avec la même rigueur que le site : description précise et orientée requêtes locales, photos professionnelles sélectionnées par catégorie (intérieur, plats, équipe), réponses aux avis négociées pour montrer le professionnalisme de l'établissement. Cette optimisation a un impact immédiat et mesurable sur la visibilité locale.\n\nLa gestion de la réputation en ligne est un sujet sensible dans la restauration. Les avis négatifs sont inévitables dans un secteur où l'expérience est subjective, mais leur gestion est déterminante. Yofield construit des protocoles de réponse aux avis qui permettent à l'équipe de répondre de façon professionnelle, cohérente avec la voix de marque de l'établissement.",
      },
    ],
    faq: [
      {
        question: 'Yofield peut-il créer l\'identité d\'un restaurant qui ouvre dans deux mois ?',
        answer:
          "Oui, les projets d'ouverture sont des cas courants chez Yofield. Le calendrier est dense mais tenable : six à huit semaines pour l'identité complète et le site si le brief est précis dès le départ. L'essentiel est de démarrer le travail le plus tôt possible pour avoir le temps de livrer tous les supports physiques (menus, signalétique) avant le lancement public.",
      },
      {
        question: 'Yofield peut-il gérer à la fois le site et les réseaux sociaux d\'un restaurant ?',
        answer:
          "Yofield peut gérer les deux, soit en intervention continue (production de contenus mensuels et gestion des comptes), soit en mission ponctuelle (création des templates et du guide de contenu pour que l'équipe prenne le relais). La formule la plus adaptée dépend de votre budget et de la capacité interne de votre équipe.",
      },
      {
        question: 'Quelle est la différence entre ce que fait Yofield et un photographe culinaire ?',
        answer:
          "Un photographe culinaire produit des images. Yofield construit un système de marque dans lequel ces images s'inscrivent : le style photographique est défini dans la charte graphique, les images s'intègrent dans le site, alimentent les templates réseaux et respectent un fil directeur cohérent. Yofield peut coordonner le shooting avec un photographe partenaire ou travailler avec votre photographe habituel sur la base des directions artistiques définies.",
      },
      {
        question: 'Est-ce que Yofield peut aider un établissement qui a déjà une identité mais un site vieillissant ?',
        answer:
          "Oui. Si l'identité existante est solide, Yofield peut se concentrer sur la refonte du site sans toucher à l'identité. On commence par un audit de l'identité existante pour vérifier que tous les fichiers sont exploitables et à jour, puis on conçoit et développe le nouveau site en cohérence avec cette identité.",
      },
      {
        question: 'Yofield prend-il en charge les menus imprimés et la signalétique physique ?',
        answer:
          "Oui. Yofield produit les fichiers de tous les supports print : menus, cartes des vins, signalétique, packaging à emporter, ardoises templates, kakémonos. Ces supports sont livrés prêts à envoyer à l'imprimeur avec les spécifications techniques adaptées à chaque usage.",
      },
      {
        question: 'Combien de temps prend la refonte complète de l\'identité d\'un hôtel boutique existant ?',
        answer:
          "Une refonte d'identité complète pour un hôtel boutique, incluant le positionnement, le logo, la charte graphique, le site et les supports principaux, prend entre dix et seize semaines selon la complexité de l'établissement et le nombre de points de contact à couvrir. Les phases de validation sont planifiées au départ pour éviter les allers-retours qui allongent le calendrier.",
      },
    ],
    seoTitle: 'Restauration & Hôtellerie · Studio créatif et digital | Yofield',
    seoDescription:
      'Yofield crée l\'identité et la présence digitale des restaurants et hôtels. Branding gastronomique, site, réservation, contenus, réseaux sociaux. Studio créatif.',
    seoKeywords: [
      'studio restauration',
      'branding restaurant gastronomique',
      'identité hôtel boutique',
      'studio digital hôtellerie',
      'site web restaurant',
      'branding hôtelier',
      'communication digitale restauration',
      'identité visuelle restaurant',
    ],
    casClientSlugs: ["ecommerce-marque-cosmetique","branding-maison-tradition-gastronomie"],
  },

  /* ─── 06 — ÉDUCATION & FORMATION ───────────────────────────────── */
  {
    slug: 'education',
    num: '06',
    name: 'Éducation & Formation',
    nameShort: 'Éducation',
    tagline: 'Des marques éducatives qui inspirent confiance et attirent les bons apprenants.',
    headline:
      'Une marque qui attire les bons apprenants, et les garde.',
    intro:
      "Les apprenants comparent les organismes de formation comme des produits. Yofield construit des marques éducatives qui attirent les bons apprenants, et les gardent.",
    clients: [
      { name: 'LearnSphere', initials: 'LS', color: 'bg-pine' },
      { name: 'EduPath', initials: 'EP', color: 'bg-soil' },
      { name: 'Forma Pro', initials: 'FP', color: 'bg-sage' },
      { name: 'Knowledge Hub', initials: 'KH', color: 'bg-pine' },
      { name: 'Campus Digital', initials: 'CD', color: 'bg-soil' },
      { name: 'Savoir Plus', initials: 'SP', color: 'bg-sage' },
    ],
    services: [
      {
        categorySlug: 'branding-identite-de-marque',
        label: 'Branding & identité',
        why: 'Une identité de marque forte construit la crédibilité qui justifie les tarifs et attire les apprenants sérieux.',
      },
      {
        categorySlug: 'creation-sites-applications',
        label: 'Site web',
        why: 'Un site clair avec un parcours d\'inscription fluide est le principal convertisseur de prospects en apprenants.',
      },
      {
        categorySlug: 'intelligence-artificielle-automatisation',
        label: 'IA et automatisations',
        why: 'L\'automatisation du suivi des prospects et de l\'administration libère les formateurs pour la pédagogie.',
      },
      {
        categorySlug: 'production-contenus',
        label: 'Contenus pédagogiques',
        why: 'Les contenus gratuits de qualité sont le meilleur terrain de confiance avant l\'achat d\'une formation.',
      },
      {
        categorySlug: 'communication-digitale-acquisition',
        label: 'SEO formation',
        why: 'Les requêtes de formation ont une forte intention d\'achat ; occuper ces positions génère des inscriptions directes.',
      },
    ],
    sections: [
      {
        heading: 'Identité de marque dans l\'éducation : crédibilité et appartenance',
        body:
          "Le secteur de l'éducation et de la formation présente un défi particulier : la qualité de l'expérience pédagogique est invisible avant l'inscription. Un apprenant qui choisit un organisme de formation ou une école ne peut pas tester le produit avant de payer. Il s'appuie donc sur des signaux de substitution : la réputation, les avis, le design du site, la clarté du discours, la cohérence de la marque. Ces éléments font basculer la décision.\n\nYofield travaille l'identité des marques éducatives avec cette réalité en tête. L'enjeu est double : convaincre les apprenants individuels qui évaluent une formation pour leur développement personnel ou professionnel, et convaincre les responsables RH ou de formation d'entreprises qui achètent des formations en volume pour leurs équipes. Ces deux audiences ont des critères de décision différents mais partagent un exigence commune : la crédibilité.\n\nLa marque d'un organisme de formation doit aussi créer de l'appartenance. Les anciens apprenants qui deviennent ambassadeurs sont le meilleur outil de croissance dans ce secteur. Yofield construit des identités qui donnent aux diplômés et certifiés quelque chose dont ils sont fiers de se revendiquer.",
        subsections: [
          {
            heading: 'EdTech et formation en ligne : se distinguer dans un marché mondial',
            body:
              "Les plateformes EdTech se trouvent en concurrence avec des acteurs mondiaux (Coursera, Udemy, LinkedIn Learning) qui disposent de ressources quasi illimitées. La différenciation passe par la spécialisation et la proximité : une plateforme qui se concentre sur un segment précis (une industrie, une compétence technique spécifique, un public déterminé) avec un discours adapté bat systématiquement le généraliste sur son terrain de niche.",
          },
          {
            heading: 'Formation professionnelle continue et certification Qualiopi',
            body:
              "Les organismes de formation professionnelle continue opèrent dans un cadre réglementé (certification Qualiopi pour accéder aux financements OPCO). Ce cadre impose des obligations de communication et de transparence que Yofield intègre dans la construction du site et des supports. La certification Qualiopi devient un argument de marque, pas seulement une obligation administrative.",
          },
        ],
      },
      {
        heading: 'Site web éducatif : informer, convaincre et convertir',
        body:
          "Le site d'un organisme de formation ou d'une école est son principal outil de recrutement. Les candidats ou apprenants potentiels y cherchent des informations précises : les détails du programme, les débouchés, le profil des formateurs, les modalités de financement, les avis d'anciens participants. Si ces informations sont difficiles à trouver ou insuffisamment détaillées, la décision d'inscription ne se prend pas.\n\nYofield construit des sites éducatifs avec une architecture de l'information orientée décision d'inscription. Chaque page de formation répond aux questions que se pose l'apprenant avant de s'inscrire : qu'est-ce que je vais apprendre, comment, en combien de temps, pour quel prix, avec quel financement possible, et qu'est-ce que cela change dans mon parcours professionnel ? Ces réponses doivent être claires, complètes et crédibles.\n\nL'intégration des outils de gestion des candidatures et d'inscription est un enjeu technique que Yofield maîtrise. Un formulaire d'inscription en ligne bien conçu, connecté à un CRM, permet de qualifier les prospects automatiquement et de déclencher les bonnes séquences de communication selon leur profil.",
        subsections: [
          {
            heading: 'Pages de formation : la structure qui convertit',
            body:
              "Une page de formation bien construite suit une structure précise : accroche sur le bénéfice, public cible, programme détaillé, profil des formateurs, conditions d'accès, modalités de financement, avis, et appel à l'action clair. Yofield construit ces pages avec cette logique pour chaque formation de votre catalogue, en adaptant le niveau de détail à la durée et au prix de la formation.",
          },
        ],
      },
      {
        heading: 'IA et automatisations pour les organismes de formation',
        body:
          "Les organismes de formation passent un temps considérable sur des tâches administratives répétitives : traitement des demandes d'information, envoi des convocations, génération des conventions de formation, relances des candidats en cours d'inscription. Ces tâches sont essentielles mais ne nécessitent pas l'expertise d'un formateur ou d'un responsable pédagogique.\n\nYofield déploie des systèmes d'automatisation adaptés aux spécificités de la formation professionnelle : réponses automatiques aux demandes d'information avec qualification du prospect, génération des documents administratifs (conventions, attestations, feuilles d'émargement), séquences d'emails de préparation pour les apprenants avant le début d'une formation. Ces automatisations réduisent la charge administrative sans déshumaniser la relation avec les apprenants.\n\nLes agents IA peuvent également assister les formateurs dans la préparation de leurs contenus : synthèse de ressources pédagogiques, génération de plans de cours, création de QCM d'évaluation, adaptation des contenus à différents niveaux. Ces outils ne remplacent pas l'expertise pédagogique, mais augmentent la capacité de production des formateurs.",
      },
      {
        heading: 'SEO et contenus pour attirer des apprenants qualifiés',
        body:
          "Les requêtes de formation en ligne ont une caractéristique précieuse : elles sont souvent accompagnées d'une forte intention d'inscription. Quelqu'un qui cherche 'formation comptabilité gestion CPF éligible' ou 'certificat gestion de projet en ligne 3 mois' est en phase active d'évaluation. Occuper ces positions avec un contenu pertinent génère des inscriptions directes à coût marginal très faible.\n\nYofield construit des stratégies SEO formation autour de trois axes : les pages de formation optimisées pour les requêtes transactionnelles, les articles de fond qui répondent aux questions des apprenants en phase de réflexion (financement, reconnaissance des certifications, débouchés métier), et les contenus pédagogiques gratuits qui créent une relation de confiance avant l'achat. Ces trois niveaux travaillent ensemble pour une présence organique cohérente.\n\nLa production de contenus pédagogiques gratuits est particulièrement efficace dans la formation. Un article qui explique vraiment comment fonctionne un financement OPCO, un guide sur les métiers accessibles après une formation spécifique, ou un tutoriel sur une compétence technique liée à votre domaine : ces contenus attirent exactement le public qui a besoin de vos formations et établissent votre expertise avant même qu'ils aient visité votre page de vente.",
      },
    ],
    faq: [
      {
        question: 'Yofield peut-il aider un formateur indépendant à lancer sa première formation en ligne ?',
        answer:
          "Oui. Le formateur indépendant qui lance sa première formation a des besoins spécifiques : un positionnement clair, une page de vente efficace, et une présence sociale cohérente. Yofield peut intervenir sur ces trois éléments avec un périmètre adapté au budget d'un indépendant. Le lancement public d'une première formation peut être préparé en six à huit semaines avec ces bases solides.",
      },
      {
        question: 'Yofield peut-il construire un site e-learning avec gestion des cours intégrée ?',
        answer:
          "Yofield construit le site marketing et de vente de votre plateforme de formation. Pour la partie LMS (Learning Management System) où les apprenants accèdent aux cours, on intègre les plateformes existantes (Teachable, Thinkific, Moodle, 360Learning) ou on développe une interface sur-mesure selon les besoins. Le périmètre est défini précisément lors du brief.",
      },
      {
        question: 'Comment Yofield aborde-t-il la communication vers les entreprises clientes (B2B) et les apprenants individuels (B2C) ?',
        answer:
          "Ces deux audiences ont des critères décisionnels différents. Les entreprises regardent la conformité Qualiopi, la feuille de route pédagogique et les références clients. Les apprenants individuels regardent les témoignages, les débouchés et les modalités de financement personnel. Yofield structure le site et les contenus pour adresser ces deux audiences sans confusion, souvent avec des parcours séparés sur le site.",
      },
      {
        question: 'Est-ce que Yofield peut aider un organisme à valoriser sa certification Qualiopi dans sa communication ?',
        answer:
          "Oui. La certification Qualiopi est un vrai différenciateur pour les apprenants qui financent leur formation via CPF, OPCO ou Pôle Emploi. Yofield l'intègre dans la communication comme un argument de confiance, pas comme une simple mention légale. On explique ce que cela signifie concrètement pour l'apprenant dans les pages de formation et les contenus de confiance.",
      },
      {
        question: 'Combien de temps prend la création d\'un site complet pour un organisme de formation ?',
        answer:
          "Un site complet pour un organisme de formation incluant le catalogue des formations, les pages de vente, le blog et l'intégration des outils administratifs prend huit à douze semaines. Pour un organisme avec un catalogue large (plus de vingt formations), on planifie la mise en ligne en phases pour tenir le calendrier. Les formations prioritaires sont publiées en premier.",
      },
      {
        question: 'Yofield peut-il aider une école à construire sa stratégie de contenus pédagogiques gratuits pour l\'acquisition ?',
        answer:
          "Oui. La stratégie de contenus pédagogiques gratuits (blog, podcast, vidéos, ressources téléchargeables) est l'un des leviers d'acquisition les plus puissants dans le secteur éducatif. Yofield définit la stratégie de contenu, les formats adaptés à votre audience et votre capacité de production, puis prend en charge la production ou forme votre équipe à la produire en autonomie.",
      },
    ],
    seoTitle: 'Éducation & Formation · Studio créatif et digital | Yofield',
    seoDescription:
      'Yofield construit l\'identité et la présence digitale des écoles et organismes de formation. Branding, site, SEO, contenus, IA. Studio créatif EdTech.',
    seoKeywords: [
      'studio éducation',
      'branding école',
      'identité organisme formation',
      'studio digital EdTech',
      'site web formation professionnelle',
      'SEO formation en ligne',
      'branding EdTech',
      'communication école formation',
    ],
    casClientSlugs: ["plateforme-learnsphere-formation"],
  },
]

export function getSecteurBySlug(slug: string): Secteur | undefined {
  return secteurs.find((s) => s.slug === slug)
}

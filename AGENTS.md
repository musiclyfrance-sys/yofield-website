<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:yofield-responsive-rule -->
# RÈGLE PERMANENTE — Responsivité tous appareils (Yofield)

À CHAQUE composant créé ou modifié, concevoir et tester responsive sur 3 familles :
- **Mobile** 320–480px → PRIORITÉ, mobile-first
- **Tablette** 768–1024px
- **Desktop** 1280px+

## Checklist obligatoire

- [ ] Typographie fluide : `clamp()` ou breakpoints `sm/md/lg/xl`
- [ ] Zéro débordement horizontal, zéro scroll latéral parasite (`overflow-x: hidden` sur body si nécessaire)
- [ ] Grilles : `grid-cols-1` mobile → `grid-cols-2` tablette → `grid-cols-3+` desktop
- [ ] Espacements réduits proportionnellement sur petits écrans (`py-12 md:py-24`)
- [ ] Animations lourdes (WebGL SparkField, scrub vidéo, scroll horizontal) : version allégée ou désactivée sur mobile ; respecter `prefers-reduced-motion`
- [ ] Touch targets ≥ 44px sur mobile (boutons, liens de nav)
- [ ] Mega-menu Secteurs : vraie version mobile propre
- [ ] Hero pinned + scrub vidéo : fonctionnels sur mobile, pas juste desktop
- [ ] Images : `sizes` prop correcte pour Next.js Image, `width/height` ou `fill`

## Tokens de breakpoints (Tailwind v4)

| Breakpoint | px    | Tailwind prefix |
|------------|-------|-----------------|
| Mobile     | <640  | (défaut)        |
| sm         | 640   | `sm:`           |
| md         | 768   | `md:`           |
| lg         | 1024  | `lg:`           |
| xl         | 1280  | `xl:`           |

## Règles de brand

- Aucun em dash (—) dans le texte visible
- Aucun mot "agence" visible (autorisé SEO only)
- Interdit : "solution", "transformation digitale", "innovant/disruptif", "ROI/KPI"
- Phrase hero verrouillée : "Là où votre marque trouve sa forme, sa voix et son terrain."
- Vocabulaire requis : "studio", "marque", "terrain", "livrer", "lancement public"
<!-- END:yofield-responsive-rule -->

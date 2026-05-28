'use client'

/**
 * HeroFull — one block, full-screen, image as background, text on top
 * ────────────────────────────────────────────────────────────────────
 * Architecture
 * ─────────────
 *   <section>  min-height: 100vh + 968px   (scroll room for frame scrub)
 *     <div>    sticky top-0, h-screen, relative   (pins during scrub)
 *       <canvas>  absolute inset-0             (background — z-0)
 *       <div>     absolute top-0 inset-x-0     (text overlay — z-20)
 *     </div>
 *   </section>
 *
 * Canvas draw — drawCoverTopAligned (ALL viewports)
 * ──────────────────────────────────────────────────
 *   • object-cover: fills 100 % of the canvas, zero bars.
 *   • top-aligned (sy = 0 always): sky stays at canvas top.
 *   • Image composition: sky in upper ~⅔, rocket in lower ~⅓.
 *   • That proportion is preserved by drawCoverTopAligned, so the
 *     rocket lands in the bottom third of the viewport automatically.
 *
 * Text layout
 * ────────────
 *   • eyebrow + H1 (2 explicit lines) + description + CTAs
 *   • sit in the sky area (upper ~half of viewport)
 *   • H1: "Là où votre marque trouve" / "sa forme, sa voix et son terrain."
 *     two RevealText spans with display:block — browser NEVER decides wrap.
 *   • Animations: mount-only. NO scroll connections on the title.
 *
 * Scroll scrub
 * ─────────────
 *   121 frames × 8 px = 968 px of scrub room after 100 vh.
 *   useMotionValueEvent drives canvas redraws with zero React re-renders.
 */

import { memo, useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import NextImage from 'next/image'
import RevealText from '@/components/animations/RevealText'
import MagneticButton from '@/components/animations/MagneticButton'

/* ─── Config ──────────────────────────────────────────── */
const FRAME_COUNT      = 121
const SCROLL_PER_FRAME = 8
const EXTRA_SCROLL     = FRAME_COUNT * SCROLL_PER_FRAME   // 968 px

const FRAME_URLS = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/videos/frames/frame_${String(i + 1).padStart(4, '0')}.webp`
)

/* ─── Canvas draw — cover, top-aligned (all viewports) ── */
/*
 * Fills the canvas exactly (object-cover, zero bars).
 * sy = 0 always → sky at canvas top, rocket preserved in lower third.
 *
 * imgAspect ≥ canvasAspect  (normal: wide image on wide-ish screen)
 *   → fit by height (full image height visible), crop sides symmetrically.
 *
 * imgAspect < canvasAspect  (ultra-wide canvas wider than image)
 *   → fit by width (full width visible), show top sh pixels, crop bottom.
 *   Still sy = 0 → we keep the sky and sacrifice some landscape at bottom.
 */
function drawCoverTopAligned(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
) {
  if (!img.naturalWidth || !img.naturalHeight) return

  const imgAspect    = img.naturalWidth / img.naturalHeight
  const canvasAspect = canvasW / canvasH

  let sx: number, sy: number, sw: number, sh: number

  if (imgAspect >= canvasAspect) {
    // Image wider (or equal) → full height, crop sides
    sh = img.naturalHeight
    sw = sh * canvasAspect
    sx = (img.naturalWidth - sw) / 2   // centred horizontally
    sy = 0                              // sky at top
  } else {
    // Canvas wider than image → full width, crop bottom
    sw = img.naturalWidth
    sh = sw / canvasAspect
    sx = 0
    sy = 0                              // sky at top
  }

  ctx.clearRect(0, 0, canvasW, canvasH)
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvasW, canvasH)
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
) {
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
  drawCoverTopAligned(ctx, img, canvasW, canvasH)
}

/* ─── Shared easing ───────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

/* ─── Text overlay ────────────────────────────────────── */
/*
 * WHY memo() ?
 *   HeroFull re-renders when `ready` flips true (frames loaded, ~1-2 s).
 *   Without memo, that re-render cascades into RevealText, re-mounting the
 *   motion.span stagger mid-animation → "escalier" bug.
 *   memo() with no props = HeroText NEVER re-renders from its parent.
 *
 * WHY titleSettled ?
 *   Even after memo(), an internal state change at 2.2 s swaps the animated
 *   RevealText spans for plain <span> elements — no framer-motion, no
 *   transforms, no way for the title to move again, ever.
 *
 * Timing (mount-only, no scroll):
 *   0.05s  eyebrow fades in
 *   0.15s  H1 line 1 starts typing  (21 word-chars × 0.025 → last char at 0.65s)
 *   0.65s  H1 line 2 starts typing  (27 word-chars × 0.025 → last char at 1.30s, done ≈1.85s)
 *   1.50s  description fades in
 *   1.80s  CTAs fade in
 *   2.20s  titleSettled → static plain spans replace RevealText
 */
const HeroText = memo(function HeroText() {
  const [titleSettled, setTitleSettled] = useState(false)

  useEffect(() => {
    // 1.85s animation + 350 ms buffer
    const t = setTimeout(() => setTitleSettled(true), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    /* pt-[72px] mobile (clears 72 px header)
       md:pt-[88px] desktop (header + 16 px gap) */
    <div className="absolute inset-x-0 top-0 z-20 flex flex-col items-center text-center px-6 pt-[72px] md:pt-[88px]">

      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 0.45, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 0.05 }}
        className="eyebrow text-soil mb-5"
      >
        Studio créatif et digital
      </motion.p>

      {/* H1 — exactly 2 lines, explicit break */}
      <div className="mb-5 max-w-5xl">
        <h1 className="np-900 text-[clamp(26px,3.5vw,54px)] text-soil leading-[1.1]">
          {titleSettled ? (
            /* Static: plain HTML, zero transforms, zero animation ever again */
            <>
              <span className="block">Là où votre marque trouve</span>
              <span className="block">sa forme, sa voix et son terrain.</span>
            </>
          ) : (
            /* Animated: typing reveal, plays exactly once on mount */
            <>
              <RevealText
                text="Là où votre marque trouve"
                as="span"
                className="block"
                stagger={0.025}
                duration={0.55}
                delay={0.15}
                triggerOnMount
              />
              <RevealText
                text="sa forme, sa voix et son terrain."
                as="span"
                className="block"
                stagger={0.025}
                duration={0.55}
                delay={0.65}
                triggerOnMount
              />
            </>
          )}
        </h1>
      </div>

      {/* Description — fades in after H1 finishes */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease, delay: 1.5 }}
        className="font-body text-base md:text-lg text-soil/65 max-w-xl leading-relaxed mb-7"
      >
        Branding, sites web, acquisition, contenus et IA.
        <br className="hidden sm:block" />
        Du brief au lancement public, sans intermédiaires.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease, delay: 1.8 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <MagneticButton>
          <Link href="/contact" className="btn btn-citron">
            Démarrer un projet
          </Link>
        </MagneticButton>
        <MagneticButton>
          <Link href="/services" className="btn btn-outline-soil">
            Voir nos services
          </Link>
        </MagneticButton>
      </motion.div>
    </div>
  )
})

/* ─── Component ──────────────────────────────────────── */
export default function HeroFull() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const framesRef  = useRef<HTMLImageElement[]>([])
  const loadedRef  = useRef(0)
  const textRef    = useRef<HTMLDivElement>(null)
  const [ready, setReady]                 = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  /* Preload frames */
  useEffect(() => {
    if (reducedMotion) return
    let cancelled = false
    const images: HTMLImageElement[] = []

    const onLoad = () => {
      if (cancelled) return
      loadedRef.current++
      // Paint frame 0 the instant it arrives
      if (loadedRef.current === 1 && images[0]?.complete) {
        const canvas = canvasRef.current
        if (canvas) {
          const ctx = canvas.getContext('2d')
          const dpr = window.devicePixelRatio || 1
          if (ctx) drawFrame(ctx, images[0], canvas.width / dpr, canvas.height / dpr)
        }
      }
      if (loadedRef.current === FRAME_COUNT) {
        framesRef.current = images
        if (!cancelled) setReady(true)
      }
    }

    FRAME_URLS.forEach((src, i) => {
      const img = new Image()
      img.onload  = onLoad
      img.onerror = onLoad
      img.src = src
      images[i] = img
    })
    return () => { cancelled = true }
  }, [reducedMotion])

  /* DPR-aware canvas sizing + ResizeObserver */
  useEffect(() => {
    if (reducedMotion) return
    const canvas = canvasRef.current
    if (!canvas) return
    const dpr = window.devicePixelRatio || 1

    const resize = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      canvas.width  = w * dpr
      canvas.height = h * dpr
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.scale(dpr, dpr)
      const prog = scrollYProgress.get()
      const idx  = Math.round(prog * (FRAME_COUNT - 1))
      const img  = framesRef.current[idx]
      if (img?.complete) drawFrame(ctx, img, w, h)
      // Restore canvas position for current scroll progress
      const posP = Math.min(prog / 0.35, 1)
      canvas.style.transform = `translateY(${50 * (1 - posP)}%)`
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    return () => ro.disconnect()
  }, [scrollYProgress, reducedMotion])

  /* Scroll → frame (zero React re-renders) */
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (reducedMotion) return
    const canvas = canvasRef.current
    const images = framesRef.current
    if (!canvas || !images.length) return

    const idx = Math.min(
      Math.round(progress * (FRAME_COUNT - 1)),
      FRAME_COUNT - 1
    )
    const img = images[idx]
    if (!img?.complete) return

    const dpr = window.devicePixelRatio || 1
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    drawFrame(ctx, img, canvas.width / dpr, canvas.height / dpr)

    // Canvas slide-up: translateY(50% → 0%) over scroll progress [0 → 0.35]
    const posP = Math.min(progress / 0.35, 1)
    canvas.style.transform = `translateY(${50 * (1 - posP)}%)`

    // Text fade: opacity 1 → 0 over scroll progress [0 → 0.30]
    const textEl = textRef.current
    if (textEl) {
      const opP = Math.min(progress / 0.30, 1)
      textEl.style.opacity = String(1 - opP)
      textEl.style.pointerEvents = opP >= 1 ? 'none' : 'auto'
    }
  })

  /* Reduced-motion: static first frame, same cover draw */
  if (reducedMotion) {
    return (
      <section
        style={{ minHeight: `calc(100vh + ${EXTRA_SCROLL}px)` }}
        aria-label="Hero Yofield"
      >
        <div className="sticky top-0 h-screen relative overflow-hidden bg-snow">
          <NextImage
            src={FRAME_URLS[0]}
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-top"
            priority
          />
          <HeroText />
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: `calc(100vh + ${EXTRA_SCROLL}px)` }}
      aria-label="Hero Yofield"
    >
      <div className="sticky top-0 h-screen relative overflow-hidden bg-snow">

        {/* Canvas — full-viewport background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: 'block', willChange: 'transform' }}
          aria-hidden="true"
        />

        {/* Text — fades out as canvas slides up on scroll */}
        <div ref={textRef} className="absolute inset-0 z-20" style={{ willChange: 'opacity' }}>
          <HeroText />
        </div>

        {/* Loader */}
        {!ready && (
          <div
            className="fixed bottom-6 right-6 z-50 flex items-center gap-2 pointer-events-none"
            aria-hidden="true"
          >
            <span className="block h-1.5 w-1.5 rounded-full bg-citron animate-pulse" />
            <span className="font-mono text-[10px] text-soil/40 tracking-widest">
              chargement
            </span>
          </div>
        )}
      </div>
    </section>
  )
}

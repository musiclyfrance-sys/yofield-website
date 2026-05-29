'use client'

/**
 * HeroFull — full-width photo band anchored to the bottom, visible from load
 * ─────────────────────────────────────────────────────────────────────────
 * Architecture
 * ─────────────
 *   <section>  min-height: 100vh + 584px   (scroll room for frame scrub)
 *     <div>    sticky top-0, h-screen, relative, overflow-hidden, bg-snow
 *       <div>     absolute bottom-0 left-0 w-full, aspect-ratio 1920/884
 *         <canvas>  fills the band — whole frame, NO crop, sky ≈ Snow at top
 *       <div>     absolute inset-0, z-20   (text + CTAs, fade out on scroll)
 *     </div>
 *   </section>
 *
 * Scroll behaviour (RAF loop — Lenis-compatible, no window 'scroll' event)
 * ─────────────────────────────────────────────────────────────────────────
 *   progress = -section.getBoundingClientRect().top / (sectionH - vh)
 *   [0 → 0.35]  band translateY 40% → 0   (photo starts low, slides up)
 *   [0 → 0.30]  text opacity 1 → 0         (fades out)
 *   [0 → 1.00]  frames 0 → 72              (scrubbing the launch)
 *
 * Canvas draw — whole frame (ALL viewports)
 * ──────────────────────────────────────────
 *   • Canvas aspect === image aspect (1920/884) → full frame, full width, no crop.
 *   • Anchored bottom: grass meets the viewport bottom, sky blends into Snow.
 */

import { memo, useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import NextImage from 'next/image'
import RevealText from '@/components/animations/RevealText'
import MagneticButton from '@/components/animations/MagneticButton'

/* ─── Config ──────────────────────────────────────────── */
const FRAME_COUNT      = 73
const SCROLL_PER_FRAME = 8
const EXTRA_SCROLL     = FRAME_COUNT * SCROLL_PER_FRAME   // 584 px
const INITIAL_DROP     = 40   // % of band height — photo starts low (peek under CTAs), slides to 0 by progress 0.35

const FRAME_URLS = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/videos/frames/frame_${String(i + 1).padStart(4, '0')}.webp`
)

/* ─── Canvas draw — whole frame, no crop (canvas aspect = image aspect) ── */
function drawFrame(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
) {
  if (!img.naturalWidth || !img.naturalHeight) return
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
  ctx.clearRect(0, 0, canvasW, canvasH)
  // Canvas is sized to the frame's native aspect (1920/884), so the entire
  // image fills it exactly — full width, zero cropping, no distortion.
  ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, canvasW, canvasH)
}

/* ─── Shared easing ───────────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

/* ─── Text overlay (memo = never re-renders from parent) ─ */
const HeroText = memo(function HeroText() {
  const [titleSettled, setTitleSettled] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setTitleSettled(true), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
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

      {/* H1 — exactly 2 lines */}
      <div className="mb-5 max-w-5xl">
        <h1 className="np-900 text-[clamp(26px,3.5vw,54px)] text-soil leading-[1.1]">
          {titleSettled ? (
            <>
              <span className="block">Là où votre marque trouve</span>
              <span className="block">sa forme, sa voix et son terrain.</span>
            </>
          ) : (
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

      {/* Description */}
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
  const drawnRef   = useRef(false)
  const textRef    = useRef<HTMLDivElement>(null)
  const bandRef    = useRef<HTMLDivElement>(null)
  const [ready, setReady]                 = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  /* ── Read scroll progress directly from DOM each frame ─────── */
  // Uses querySelector instead of sectionRef.current to avoid any
  // ref-attachment timing issues (ref may lag the RAF start in hydration).
  const getProgress = () => {
    const section = sectionRef.current
      ?? document.querySelector<HTMLElement>('[aria-label="Hero Yofield"]')
    if (!section) return 0
    const rect       = section.getBoundingClientRect()
    const scrollable = section.offsetHeight - window.innerHeight
    if (scrollable <= 0) return 0
    return Math.max(0, Math.min(1, -rect.top / scrollable))
  }

  const applyProgress = (progress: number) => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Photo band: starts low (peeks under the CTAs) and slides up into place
    const bandEl = bandRef.current
    if (bandEl) {
      const posP = Math.min(progress / 0.35, 1)
      bandEl.style.transform = `translateY(${INITIAL_DROP * (1 - posP)}%)`
    }

    // Text fade: opacity 1 → 0 over [0 → 0.30]
    const textEl = textRef.current
    if (textEl) {
      const opP = Math.min(progress / 0.30, 1)
      textEl.style.opacity  = String(1 - opP)
      textEl.style.pointerEvents = opP >= 1 ? 'none' : 'auto'
    }

    // Frame scrubbing (only when images are ready)
    const images = framesRef.current
    if (!images.length) return
    const idx = Math.min(Math.round(progress * (FRAME_COUNT - 1)), FRAME_COUNT - 1)
    const img = images[idx]
    if (!img?.complete) return
    const dpr = window.devicePixelRatio || 1
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    drawFrame(ctx, img, canvas.width / dpr, canvas.height / dpr)
    drawnRef.current = true
  }

  /* Preload frames */
  useEffect(() => {
    if (reducedMotion) return
    let cancelled = false
    const images: HTMLImageElement[] = []
    // Expose the array immediately (not only once every frame has loaded) so
    // applyProgress / resize can paint frame 0 the moment it decodes — and
    // repaint it after any canvas-clearing resize while the rest still loads.
    framesRef.current = images

    const onLoad = () => {
      if (cancelled) return
      loadedRef.current++
      // Paint as soon as the first frame is available — don't wait for the set.
      if (loadedRef.current === 1) applyProgress(getProgress())
      if (loadedRef.current === FRAME_COUNT && !cancelled) setReady(true)
    }

    FRAME_URLS.forEach((src, i) => {
      const img = new Image()
      img.onload  = onLoad
      img.onerror = onLoad
      img.src = src
      images[i] = img
    })
    return () => { cancelled = true }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
      // Redraw and reposition at current scroll
      applyProgress(getProgress())
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    return () => ro.disconnect()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion])

  /* RAF loop — reads getBoundingClientRect() every frame.
   * Lenis does NOT dispatch window 'scroll' events; it runs its own RAF-based
   * interpolation. Polling via rAF is the only reliable way to stay in sync.
   * getProgress/applyProgress read refs live — no stale closure risk. */
  useEffect(() => {
    if (reducedMotion) return
    let rafId: number
    let lastProgress = -1

    const tick = () => {
      const progress = getProgress()
      // Repaint on change — and keep trying until the first frame is on canvas,
      // so frame 0 shows at load even though progress stays 0 (no scroll yet).
      if (Math.abs(progress - lastProgress) > 0.0005 || !drawnRef.current) {
        lastProgress = progress
        applyProgress(progress)
      }
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reducedMotion])

  /* Reduced-motion: static first frame */
  if (reducedMotion) {
    return (
      <section
        style={{ minHeight: `calc(100vh + ${EXTRA_SCROLL}px)` }}
        aria-label="Hero Yofield"
      >
        <div className="sticky top-0 h-screen relative overflow-hidden bg-snow">
          <div
            className="absolute bottom-0 left-0 w-full"
            style={{ aspectRatio: '1920 / 884' }}
          >
            <NextImage
              src={FRAME_URLS[0]}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
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

        {/* Canvas — full-width photo band, starts low then slides up on scroll */}
        <div
          ref={bandRef}
          className="absolute bottom-0 left-0 w-full"
          style={{ aspectRatio: '1920 / 884', willChange: 'transform' }}
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
        </div>

        {/* Text — fades out on scroll */}
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

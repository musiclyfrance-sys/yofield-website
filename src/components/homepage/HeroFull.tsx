'use client'

/**
 * HeroFull — compact hero: text block above, scene below, one composition
 * ─────────────────────────────────────────────────────────────────────────
 * Layout (flex-column inside a sticky viewport):
 *   • Text area  — flex-shrink-0, exact content height, Snow background.
 *   • Canvas     — flex-1, fills every remaining pixel below the CTAs.
 *
 * Seam is invisible because the sky of the video = Snow #FAFAF7.
 * drawCoverTopAligned() aligns the sky to the TOP of the canvas so it
 * meets the Snow background with zero colour difference.
 *
 * SparkField renders at z-0 (behind canvas at z-10), so sparkles only
 * appear in the Snow/text area — not over the landscape.
 *
 * Scroll scrub: 121 frames over 968 px, then section releases.
 * Mobile: object-cover, full-bleed.
 * prefers-reduced-motion: static first frame.
 */

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import NextImage from 'next/image'
import RevealText from '@/components/animations/RevealText'
import MagneticButton from '@/components/animations/MagneticButton'
import SparkField from '@/components/animations/SparkField'

/* ─── Config ──────────────────────────────────────────── */
const FRAME_COUNT      = 121
const SCROLL_PER_FRAME = 8
const EXTRA_SCROLL     = FRAME_COUNT * SCROLL_PER_FRAME  // 968 px

const FRAME_URLS = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/videos/frames/frame_${String(i + 1).padStart(4, '0')}.webp`
)

/* ─── Top-aligned object-cover ───────────────────────── */
/*
 * Standard object-cover centres the image — on a wide/short canvas the
 * centre of the video ends up visible, not the sky.
 * Top-aligned shows the SKY at the very top edge of the canvas, which
 * blends seamlessly with the Snow background of the text area above.
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
    // Image wider (or equal) → fill height, crop sides, sky at top
    sh = img.naturalHeight
    sw = sh * canvasAspect
    sx = (img.naturalWidth - sw) / 2   // centred horizontally
    sy = 0                              // TOP aligned
  } else {
    // Image taller → fill width, crop BOTTOM (keep top = sky)
    sw = img.naturalWidth
    sh = sw / canvasAspect
    sx = 0
    sy = 0                              // TOP aligned
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

/* ─── Entrance animation ──────────────────────────────── */
const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const fadeUp = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

/* ─── Text block (above the canvas) ─────────────────── */
function HeroText() {
  return (
    <motion.div
      className="relative z-20 flex flex-col items-center text-center px-6 flex-shrink-0"
      style={{ paddingTop: '88px', paddingBottom: '32px' }}
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {/* Eyebrow */}
      <motion.p
        variants={fadeUp}
        className="eyebrow text-soil mb-8"
        style={{ opacity: 0.45 }}
      >
        Studio créatif et digital
      </motion.p>

      {/* H1 */}
      <motion.div variants={fadeUp} className="mb-7 max-w-4xl">
        <RevealText
          text="Là où votre marque trouve sa forme, sa voix et son terrain."
          as="h1"
          className="np-900 text-[clamp(38px,7vw,80px)] text-soil leading-[1.05]"
          stagger={0.025}
          duration={0.55}
          delay={0.15}
          triggerOnMount
        />
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="font-body text-lg text-soil/65 max-w-xl leading-relaxed mb-10"
      >
        Branding, sites web, acquisition, contenus et IA.
        <br className="hidden sm:block" />
        Du brief au lancement public, sans intermédiaires.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={fadeUp}
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
    </motion.div>
  )
}

/* ─── Component ──────────────────────────────────────── */
export default function HeroFull() {
  const sectionRef = useRef<HTMLElement>(null)
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const framesRef  = useRef<HTMLImageElement[]>([])
  const loadedRef  = useRef(0)
  const [ready, setReady]               = useState(false)
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

  /* DPR-aware canvas sizing — tracks flex-1 container dimensions */
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
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    return () => ro.disconnect()
  }, [scrollYProgress, reducedMotion])

  /* Scroll → frame */
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
  })

  /* Reduced-motion: static first frame below text */
  if (reducedMotion) {
    return (
      <section
        style={{ minHeight: `calc(100vh + ${EXTRA_SCROLL}px)` }}
        aria-label="Hero Yofield"
      >
        <div className="sticky top-0 h-screen flex flex-col overflow-hidden bg-snow">
          <SparkField className="absolute inset-0 pointer-events-none z-0" />
          <HeroText />
          <div className="relative flex-1 overflow-hidden z-10">
            <NextImage src={FRAME_URLS[0]} alt="" fill sizes="100vw" className="object-cover" priority />
          </div>
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
      {/*
       * sticky h-screen flex-col:
       *   - Text (flex-shrink-0) takes its natural height
       *   - Canvas wrapper (flex-1) fills the rest — exactly below the CTAs
       * bg-snow: fallback colour before frame 0 loads (matches sky exactly)
       */}
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden bg-snow">

        {/* Sparks — z-0, behind canvas and text */}
        <SparkField className="absolute inset-0 pointer-events-none z-0" />

        {/* Text block — z-20, top portion */}
        <HeroText />

        {/* Canvas wrapper — z-10, fills remaining height */}
        <div className="relative flex-1 overflow-hidden z-10">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full"
            style={{ display: 'block' }}
            aria-hidden="true"
          />
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

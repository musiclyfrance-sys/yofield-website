'use client'

/**
 * HeroFull — text overlay + scroll-scrub video in one compact composition
 * ────────────────────────────────────────────────────────────────────────
 * Architecture (layers, bottom → top):
 *   1. <canvas>  — video frames fill 100% of the sticky viewport
 *   2. SparkField  — WebGL star particles (z-10)
 *   3. Text block  — eyebrow, H1, description, CTAs (z-20)
 *
 * Why it feels like one composition:
 *   • The sky of the video was color-corrected to exactly match Snow #FAFAF7,
 *     so there is zero visible seam between page background and video.
 *   • Text sits in the upper portion over the sky area (same color = invisible bg).
 *   • Rocket + landscape scene fills the lower portion of the viewport.
 *
 * Scroll mechanic (unchanged):
 *   • Section height: 100vh + 968 px of scroll room.
 *   • 121 frames scrub across those 968 px.
 *   • Sticky div pins the canvas, then releases naturally.
 *
 * Mobile:
 *   • object-cover everywhere — full-bleed, slight zoom, no letterbox bars.
 *
 * prefers-reduced-motion:
 *   • Static first frame shown, no scroll scrub.
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

/* ─── object-cover canvas draw ───────────────────────── */
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
) {
  if (!img.naturalWidth || !img.naturalHeight) return

  const imgAspect    = img.naturalWidth / img.naturalHeight
  const canvasAspect = canvasW / canvasH

  let sx: number, sy: number, sw: number, sh: number

  if (imgAspect > canvasAspect) {
    sh = img.naturalHeight
    sw = sh * canvasAspect
    sx = (img.naturalWidth - sw) / 2
    sy = 0
  } else {
    sw = img.naturalWidth
    sh = sw / canvasAspect
    sx = 0
    sy = (img.naturalHeight - sh) / 2
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
  drawCover(ctx, img, canvasW, canvasH)
}

/* ─── Entrance animation variants ────────────────────── */
const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const fadeUp = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

/* ─── Text overlay — memoised to avoid re-render on frame draw ─ */
function HeroText() {
  return (
    <motion.div
      className="absolute inset-0 z-20 flex flex-col items-center text-center px-6"
      style={{ paddingTop: '88px' }}   /* 72 px header + 16 px breathing */
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

      {/* H1 — typing reveal at mount, then perfectly stable */}
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

  /* Detect prefers-reduced-motion */
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  /* Scroll progress through the full section */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  /* Preload all frames */
  useEffect(() => {
    if (reducedMotion) return
    let cancelled = false
    const images: HTMLImageElement[] = []

    const onLoad = () => {
      if (cancelled) return
      loadedRef.current++

      /* Draw frame 0 the moment it arrives */
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
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()
    return () => ro.disconnect()
  }, [scrollYProgress, reducedMotion])

  /* Scroll → frame draw */
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

  /* ── Reduced-motion: static first frame + text ───── */
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
            className="object-cover"
            priority
          />
          <SparkField className="absolute inset-0 z-10 pointer-events-none" />
          <HeroText />
        </div>
      </section>
    )
  }

  /* ── Full scroll-scrub version ────────────────────── */
  return (
    <section
      ref={sectionRef}
      style={{ minHeight: `calc(100vh + ${EXTRA_SCROLL}px)` }}
      aria-label="Hero Yofield"
    >
      {/*
       * bg-snow: fallback visible before frame 0 loads.
       * overflow-hidden: clips canvas to exactly the sticky viewport.
       */}
      <div className="sticky top-0 h-screen relative overflow-hidden bg-snow">

        {/* Layer 1 — video canvas (object-cover, full-bleed) */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: 'block' }}
          aria-hidden="true"
        />

        {/* Layer 2 — star particles (above canvas, below text) */}
        <SparkField className="absolute inset-0 z-10 pointer-events-none" />

        {/* Layer 3 — text content */}
        <HeroText />

        {/* Discrete loader while frames are preloading */}
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

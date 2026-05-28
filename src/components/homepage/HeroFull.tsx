'use client'

/**
 * HeroFull — full-viewport background canvas with text overlay
 * ─────────────────────────────────────────────────────────────
 * Canvas fills 100 vh as absolute background. Text (z-20) is
 * absolutely positioned on top.
 *
 * Desktop (>768 px) — drawContainBottomAnchored:
 *   Full rocket scene visible, no cropping.  Snow fills the space
 *   above the image (sky colour = Snow → zero visible seam).
 *   Image anchored to the bottom of the viewport so the scene sits
 *   in the lower visual half while text floats over the sky area.
 *
 * Mobile (≤768 px) — drawCoverTopAligned:
 *   Full-bleed, sky at canvas top, rocket in lower half.
 *
 * Scroll scrub: 121 frames / 968 px, then section releases.
 * prefers-reduced-motion: static first frame (object-contain / bottom).
 */

import { useRef, useEffect, useState } from 'react'
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
const SNOW             = '#FAFAF7'

const FRAME_URLS = Array.from({ length: FRAME_COUNT }, (_, i) =>
  `/videos/frames/frame_${String(i + 1).padStart(4, '0')}.webp`
)

/* ─── Desktop: contain + bottom-anchor ───────────────── */
/*
 * Full scene visible (no crop). Snow bar fills the canvas above
 * the image — since sky = Snow the bar is invisible. Image sits
 * at the bottom, keeping the rocket/landscape in the lower half.
 */
function drawContainBottomAnchored(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
) {
  if (!img.naturalWidth || !img.naturalHeight) return

  const imgAspect    = img.naturalWidth / img.naturalHeight   // ≈1.799
  const canvasAspect = canvasW / canvasH

  // Fill entire canvas with Snow first (bar colour = sky colour → seamless)
  ctx.fillStyle = SNOW
  ctx.fillRect(0, 0, canvasW, canvasH)

  let dw: number, dh: number, dx: number, dy: number

  if (imgAspect >= canvasAspect) {
    // Image wider → fit width → Snow bar at top → anchor image to bottom
    dw = canvasW
    dh = canvasW / imgAspect
    dx = 0
    dy = canvasH - dh           // bottom anchor
  } else {
    // Image taller → fit height → side bars centred
    dh = canvasH
    dw = canvasH * imgAspect
    dx = (canvasW - dw) / 2
    dy = 0
  }

  ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, dx, dy, dw, dh)
}

/* ─── Mobile: cover top-aligned ──────────────────────── */
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
    // Image wider → fill height, crop sides, sky at top
    sh = img.naturalHeight
    sw = sh * canvasAspect
    sx = (img.naturalWidth - sw) / 2
    sy = 0
  } else {
    // Image taller → fill width, crop bottom (keep top = sky)
    sw = img.naturalWidth
    sh = sw / canvasAspect
    sx = 0
    sy = 0
  }

  ctx.clearRect(0, 0, canvasW, canvasH)
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvasW, canvasH)
}

/* ─── Frame dispatcher ────────────────────────────────── */
function drawFrame(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
) {
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
  if (canvasW <= 768) {
    drawCoverTopAligned(ctx, img, canvasW, canvasH)
  } else {
    drawContainBottomAnchored(ctx, img, canvasW, canvasH)
  }
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

/* ─── Text overlay (shared by main + reduced-motion) ─── */
function HeroText() {
  return (
    <motion.div
      className="absolute inset-x-0 top-0 z-20 flex flex-col items-center text-center px-6"
      style={{ paddingTop: '80px' }}
      variants={stagger}
      initial="hidden"
      animate="visible"
    >
      {/* Eyebrow */}
      <motion.p
        variants={fadeUp}
        className="eyebrow text-soil mb-5"
        style={{ opacity: 0.45 }}
      >
        Studio créatif et digital
      </motion.p>

      {/* H1 — reduced from clamp(38px,7vw,80px) */}
      <motion.div variants={fadeUp} className="mb-5 max-w-3xl">
        <RevealText
          text="Là où votre marque trouve sa forme, sa voix et son terrain."
          as="h1"
          className="np-900 text-[clamp(30px,4.5vw,60px)] text-soil leading-[1.05]"
          stagger={0.025}
          duration={0.55}
          delay={0.15}
          triggerOnMount
        />
      </motion.div>

      {/* Description */}
      <motion.p
        variants={fadeUp}
        className="font-body text-base md:text-lg text-soil/65 max-w-xl leading-relaxed mb-7"
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

  /* DPR-aware canvas sizing — tracks sticky div dimensions */
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

  /* Reduced-motion: static first frame */
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
            className="object-contain object-bottom"
            style={{ backgroundColor: SNOW }}
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
      {/*
       * sticky h-screen relative:
       *   canvas   — absolute inset-0, Snow background, image drawn inside
       *   HeroText — absolute top-0 z-20, text over the sky area
       */}
      <div className="sticky top-0 h-screen relative overflow-hidden bg-snow">

        {/* Canvas — fills full viewport as background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ display: 'block' }}
          aria-hidden="true"
        />

        {/* Text — absolute overlay, sits over the sky portion */}
        <HeroText />

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

'use client'

/**
 * HeroVideoScroll — Apple-style scroll-driven frame scrubbing
 * ───────────────────────────────────────────────────────────
 * • Sticky canvas fills 100 vh, no fade, no movement.
 * • 73 WebP frames (1920 × 884) preloaded into memory on mount.
 * • Scroll progress [0→1] maps to frame index [0→72].
 * • Canvas redraws via useMotionValueEvent — zero React re-renders.
 * • DPR-aware, imageSmoothingQuality = 'high' for crisp retina.
 * • Desktop (>768 px): object-cover — full-bleed landscape crop.
 * • Mobile (≤768 px): object-contain — full scene visible, Snow letterbox.
 * • prefers-reduced-motion: static first frame shown instead.
 */

import { useRef, useEffect, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import NextImage from 'next/image'

/* ─── Config ──────────────────────────────────────────── */
const FRAME_COUNT      = 73
const SCROLL_PER_FRAME = 8          // px of scroll room per frame
const EXTRA_SCROLL     = FRAME_COUNT * SCROLL_PER_FRAME  // 584 px
const SNOW             = '#FAFAF7'

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

/* ─── object-contain canvas draw (mobile) ────────────── */
function drawContain(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
) {
  if (!img.naturalWidth || !img.naturalHeight) return

  const imgAspect    = img.naturalWidth / img.naturalHeight
  const canvasAspect = canvasW / canvasH

  let dw: number, dh: number, dx: number, dy: number

  if (imgAspect > canvasAspect) {
    // Image wider than canvas → fit width, Snow bars top/bottom
    dw = canvasW
    dh = canvasW / imgAspect
    dx = 0
    dy = (canvasH - dh) / 2
  } else {
    // Image taller → fit height, Snow bars left/right
    dh = canvasH
    dw = canvasH * imgAspect
    dx = (canvasW - dw) / 2
    dy = 0
  }

  ctx.fillStyle = SNOW
  ctx.fillRect(0, 0, canvasW, canvasH)
  ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, dx, dy, dw, dh)
}

/* ─── Dispatcher: cover on desktop, contain on mobile ── */
function drawFrame(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  canvasW: number,
  canvasH: number
) {
  ctx.imageSmoothingEnabled = true
  ctx.imageSmoothingQuality = 'high'
  if (canvasW <= 768) {
    drawContain(ctx, img, canvasW, canvasH)
  } else {
    drawCover(ctx, img, canvasW, canvasH)
  }
}

/* ─── Component ──────────────────────────────────────── */
export default function HeroVideoScroll() {
  const sectionRef  = useRef<HTMLElement>(null)
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const framesRef   = useRef<HTMLImageElement[]>([])
  const loadedRef   = useRef(0)
  const [ready, setReady] = useState(false)

  /* prefers-reduced-motion — show static first frame */
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  /* Scroll progress through the section */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  /* ── Preload frames on mount ─────────────────────── */
  useEffect(() => {
    if (reducedMotion) return

    let cancelled = false
    const images: HTMLImageElement[] = []

    const onLoad = () => {
      if (cancelled) return
      loadedRef.current++

      // Draw frame 0 the moment it arrives (instant first paint)
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
      img.onerror = onLoad  // count errors too so we don't stall
      img.src = src
      images[i] = img
    })

    return () => { cancelled = true }
  }, [reducedMotion])

  /* ── DPR-aware canvas sizing + ResizeObserver ────── */
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

      // Redraw current frame after resize
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

  /* ── Scroll → frame draw (no re-renders) ─────────── */
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

  /* ── Reduced-motion fallback — static first frame ── */
  if (reducedMotion) {
    return (
      <section
        style={{ height: '100vh' }}
        aria-label="Image de présentation Yofield"
      >
        <div className="relative w-full h-full">
          <NextImage
            src={FRAME_URLS[0]}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: `calc(100vh + ${EXTRA_SCROLL}px)` }}
      aria-label="Vidéo de présentation Yofield"
    >
      {/* Canvas — sticky, fills viewport, rock-solid */}
      <canvas
        ref={canvasRef}
        className="sticky top-0 w-full"
        style={{ height: '100vh', display: 'block' }}
        aria-hidden="true"
      />

      {/* Discrete loader — shows while frames are preloading */}
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
    </section>
  )
}

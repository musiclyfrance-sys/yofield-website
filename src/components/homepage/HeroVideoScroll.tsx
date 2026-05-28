'use client'

/**
 * HeroVideoScroll — Apple-style scroll-driven frame scrubbing
 * ───────────────────────────────────────────────────────────
 * • Sticky canvas fills 100 vh, object-cover, no fade, no movement.
 * • 121 WebP frames preloaded into memory on mount.
 * • Scroll progress [0→1] maps to frame index [0→120].
 * • Canvas redraws via useMotionValueEvent — zero React re-renders.
 * • DPR-aware for sharp retina rendering.
 * • ResizeObserver redraws on window resize.
 */

import { useRef, useEffect, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'

/* ─── Config ─────────────────────────────────────────── */
const FRAME_COUNT   = 121
const SCROLL_PER_FRAME = 8          // px of scroll room per frame
const EXTRA_SCROLL  = FRAME_COUNT * SCROLL_PER_FRAME  // 968 px

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
    // Image is wider — crop sides
    sh = img.naturalHeight
    sw = sh * canvasAspect
    sx = (img.naturalWidth - sw) / 2
    sy = 0
  } else {
    // Image is taller — crop top/bottom
    sw = img.naturalWidth
    sh = sw / canvasAspect
    sx = 0
    sy = (img.naturalHeight - sh) / 2
  }

  ctx.clearRect(0, 0, canvasW, canvasH)
  ctx.drawImage(img, sx, sy, sw, sh, 0, 0, canvasW, canvasH)
}

/* ─── Component ──────────────────────────────────────── */
export default function HeroVideoScroll() {
  const sectionRef  = useRef<HTMLElement>(null)
  const canvasRef   = useRef<HTMLCanvasElement>(null)
  const framesRef   = useRef<HTMLImageElement[]>([])
  const loadedRef   = useRef(0)
  const [ready, setReady] = useState(false)

  /* Scroll progress through the section */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  /* ── Preload frames on mount ─────────────────────── */
  useEffect(() => {
    let cancelled = false
    const images: HTMLImageElement[] = []

    const onLoad = () => {
      if (cancelled) return
      loadedRef.current++

      // Draw frame 0 as soon as it's ready (instant first paint)
      if (loadedRef.current === 1 && images[0]?.complete) {
        const canvas = canvasRef.current
        if (canvas) {
          const ctx = canvas.getContext('2d')
          if (ctx) drawCover(ctx, images[0], canvas.width / dpr, canvas.height / dpr)
        }
      }

      if (loadedRef.current === FRAME_COUNT) {
        framesRef.current = images
        if (!cancelled) setReady(true)
      }
    }

    const dpr = typeof window !== 'undefined' ? (window.devicePixelRatio || 1) : 1

    FRAME_URLS.forEach((src, i) => {
      const img = new Image()
      img.onload = onLoad
      img.onerror = onLoad  // count errors too so we don't stall
      img.src = src
      images[i] = img
    })

    return () => { cancelled = true }
  }, [])

  /* ── DPR-aware canvas sizing + ResizeObserver ────── */
  useEffect(() => {
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
      if (img?.complete) drawCover(ctx, img, w, h)
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    resize()

    return () => ro.disconnect()
  }, [scrollYProgress])

  /* ── Scroll → frame draw (no re-renders) ─────────── */
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
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

    drawCover(ctx, img, canvas.width / dpr, canvas.height / dpr)
  })

  return (
    <section
      ref={sectionRef}
      style={{ minHeight: `calc(100vh + ${EXTRA_SCROLL}px)` }}
      aria-label="Vidéo de présentation Yofield"
    >
      {/* Canvas — sticky, fills viewport, rock-solid, no fade */}
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

'use client'

/**
 * HeroVideoScroll
 * ─────────────────────────────────────────────────────────────────────────
 * Full-screen, scroll-driven video section (Apple AirPods style).
 *
 * CURRENT STATE (placeholder)
 *   Renders a sticky full-screen image while the outer section scrolls.
 *   The section is deliberately h-screen + extra scroll room so the
 *   video has time to "breathe" before the next section appears.
 *
 * WHEN VIDEO IS READY — uncomment the video block and:
 *   1. Pass `videoSrc` and `videoDuration` props.
 *   2. Increase `SCROLL_HEIGHT` (default comment in JSX) — rule of thumb:
 *      ~120px of scroll per second of video.  Ex: 12s → 1440px extra.
 *   3. The `<video>` element will have its `currentTime` scrubbed by the
 *      scroll position via `useMotionValueEvent`.
 * ─────────────────────────────────────────────────────────────────────────
 */

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

interface HeroVideoScrollProps {
  /** Placeholder image shown until (and instead of) the real video. */
  placeholder: string
  placeholderAlt?: string

  /**
   * [FUTURE] Path to the scroll-driven video file.
   * Must be preloaded — use a short (8–15 s), compressed MP4/WebM.
   * Example: "/videos/hero-scroll.mp4"
   */
  videoSrc?: string

  /**
   * [FUTURE] Total duration of the video in seconds.
   * Required when videoSrc is set so scroll progress maps to currentTime.
   * Example: 12
   */
  videoDuration?: number
}

export default function HeroVideoScroll({
  placeholder,
  placeholderAlt = 'Yofield hero',
  videoSrc,
  videoDuration,
}: HeroVideoScrollProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const videoRef   = useRef<HTMLVideoElement>(null)

  /*
   * Track scroll through this section.
   * 0 = section top at viewport top  /  1 = section fully scrolled past
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  /* Entrance fade-in as this section scrolls into view from below */
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  /*
   * [FUTURE VIDEO SCRUBBING]
   * Maps scroll progress (0→1) to video currentTime (0→videoDuration).
   * useMotionValueEvent fires on every scroll tick — no React re-renders.
   */
  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    if (!videoRef.current || !videoSrc || !videoDuration) return
    // Clamp to avoid seeking past end
    videoRef.current.currentTime = Math.min(
      progress * videoDuration,
      videoDuration - 0.01
    )
  })

  return (
    /*
     * Outer section height:
     *   • Placeholder only  → `min-h-screen` (pure viewport height, no extra)
     *   • With video        → increase to  `min-h-[calc(100vh+<extra>px)]`
     *                         where <extra> ≈ videoDuration * 120
     *   This extra height is what gives "scroll room" for the video to scrub.
     */
    <section
      ref={sectionRef}
      className="relative"
      style={{
        minHeight: videoSrc && videoDuration
          ? `calc(100vh + ${Math.round(videoDuration * 120)}px)`
          : '100vh',
      }}
      aria-label="Présentation visuelle Yofield"
    >
      {/* Sticky full-screen frame — pins while outer section scrolls */}
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{ opacity: sectionOpacity }}
      >
        {/* ── PLACEHOLDER IMAGE ── visible when videoSrc is not set ── */}
        {!videoSrc && (
          <Image
            src={placeholder}
            alt={placeholderAlt}
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
        )}

        {/*
         * ── [FUTURE] SCROLL-DRIVEN VIDEO ──────────────────────────────
         * Uncomment when videoSrc is ready. Keep `muted` and `playsInline`
         * so it works on mobile. `preload="auto"` ensures all frames are
         * in memory before scrubbing begins.
         *
         * {videoSrc && (
         *   <video
         *     ref={videoRef}
         *     src={videoSrc}
         *     muted
         *     playsInline
         *     preload="auto"
         *     className="absolute inset-0 w-full h-full object-cover"
         *   />
         * )}
         */}

        {/* Subtle gradient veil at bottom — smooths cut into next section */}
        <div
          className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, rgba(250,250,247,0.6))',
          }}
        />
      </motion.div>
    </section>
  )
}

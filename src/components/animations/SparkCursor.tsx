'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/* ── 4-pointed star SVG ── */
function StarSVG({ size, color, opacity = 1 }: { size: number; color: string; opacity?: number }) {
  const cx = size / 2, cy = size / 2
  const r1 = size * 0.48  // outer tip
  const r2 = size * 0.13  // inner notch
  const pts: string[] = []
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4 - Math.PI / 2
    const r = i % 2 === 0 ? r1 : r2
    pts.push(`${(cx + r * Math.cos(a)).toFixed(2)},${(cy + r * Math.sin(a)).toFixed(2)}`)
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ display: 'block', opacity }}
      aria-hidden="true"
    >
      <polygon points={pts.join(' ')} fill={color} />
    </svg>
  )
}

const TRAIL = 3  // number of ghost particles

export default function SparkCursor() {
  /* Track raw mouse position */
  const rawX = useMotionValue(-200)
  const rawY = useMotionValue(-200)

  /* Spring-smoothed main cursor — tight for precision */
  const x = useSpring(rawX, { stiffness: 900, damping: 32, mass: 0.15 })
  const y = useSpring(rawY, { stiffness: 900, damping: 32, mass: 0.15 })

  /* Hover state */
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  /* Trail: array of recent pixel coords */
  const [trail, setTrail] = useState<Array<{ x: number; y: number; key: number }>>([])
  const trailRaw = useRef<Array<{ x: number; y: number }>>([])
  const keyRef = useRef(0)

  const onMove = useCallback((e: MouseEvent) => {
    rawX.set(e.clientX)
    rawY.set(e.clientY)
    if (!visible) setVisible(true)

    /* Shift trail: prepend current, cap at TRAIL */
    trailRaw.current = [
      { x: e.clientX, y: e.clientY },
      ...trailRaw.current,
    ].slice(0, TRAIL)

    setTrail(trailRaw.current.map((p, i) => ({ ...p, key: keyRef.current - i })))
    keyRef.current++
  }, [rawX, rawY, visible])

  const onOver = useCallback((e: MouseEvent) => {
    const el = (e.target as Element).closest('a, button, [role="button"], label, [tabindex]')
    if (el) setHovered(true)
  }, [])

  const onOut = useCallback((e: MouseEvent) => {
    const el = (e.target as Element).closest('a, button, [role="button"], label, [tabindex]')
    if (el) setHovered(false)
  }, [])

  const onLeave = useCallback(() => setVisible(false), [])

  useEffect(() => {
    /* Only activate on fine-pointer devices (mouse, not touch) */
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    document.documentElement.classList.add('spark-cursor-active')
    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver, { passive: true })
    document.addEventListener('mouseout', onOut, { passive: true })
    document.addEventListener('mouseleave', onLeave, { passive: true })

    return () => {
      document.documentElement.classList.remove('spark-cursor-active')
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [onMove, onOver, onOut, onLeave])

  if (!visible) return null

  return (
    <>
      {/* Trail ghosts — rendered at raw positions, no spring */}
      {trail.map((p, i) => (
        <div
          key={p.key}
          className="pointer-events-none fixed z-[9998]"
          style={{
            left: p.x,
            top: p.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <StarSVG
            size={8 - i * 1.8}
            color={i === 0 ? '#D4F551' : '#A8B5AD'}
            opacity={0.35 - i * 0.08}
          />
        </div>
      ))}

      {/* Main cursor — spring-smoothed */}
      <motion.div
        className="pointer-events-none fixed z-[9999]"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: hovered ? 1.8 : 1 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22 }}
      >
        <StarSVG size={12} color="#D4F551" />
      </motion.div>
    </>
  )
}

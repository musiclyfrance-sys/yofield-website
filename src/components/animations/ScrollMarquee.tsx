'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion'

const ITEMS = [
  { num: '01', label: 'Branding & Identité' },
  { num: '02', label: 'Sites & Applications' },
  { num: '03', label: 'Acquisition' },
  { num: '04', label: 'Contenus' },
  { num: '05', label: 'IA & Automatisation' },
]

/* Duplicate so the loop is seamless at -50% */
const DOUBLED = [...ITEMS, ...ITEMS]

interface TrackProps {
  baseVelocity: number
}

function Track({ baseVelocity }: TrackProps) {
  const baseX = useMotionValue(0)

  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], {
    clamp: false,
  })

  const directionFactor = useRef<number>(1)

  useAnimationFrame((_, delta) => {
    const vf = velocityFactor.get()
    if (vf < 0) directionFactor.current = -1
    else if (vf > 0) directionFactor.current = 1

    const step =
      (baseVelocity + baseVelocity * Math.abs(vf) * directionFactor.current) *
      (delta / 1000)

    let next = baseX.get() + step
    // Wrap in [-50, 0) — seamless because items are doubled
    if (next < -50) next += 50
    if (next >= 0) next -= 50
    baseX.set(next)
  })

  const x = useTransform(baseX, (v) => `${v}%`)

  return (
    <div className="overflow-hidden" aria-hidden="true">
      <motion.div
        className="flex items-center whitespace-nowrap will-change-transform"
        style={{ x }}
      >
        {DOUBLED.map((item, i) => (
          <span key={i} className="inline-flex items-baseline gap-4 flex-shrink-0 px-8 md:px-14">
            <span className="gm text-[10px] text-soil/30">{item.num}</span>
            <span className="np-800 text-4xl md:text-6xl text-soil">{item.label}</span>
            <span className="text-soil/20 text-2xl ml-4">·</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function ScrollMarquee() {
  return (
    <section
      className="py-10 md:py-14 overflow-hidden"
      style={{ borderTop: '0.5px solid rgba(15,15,14,0.08)', borderBottom: '0.5px solid rgba(15,15,14,0.08)' }}
    >
      <Track baseVelocity={-4} />
    </section>
  )
}

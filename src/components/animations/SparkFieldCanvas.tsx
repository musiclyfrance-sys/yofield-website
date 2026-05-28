'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const COUNT = 110

/* ── 4-pointed star sprite built on a canvas ── */
function makeStarTexture(): THREE.Texture {
  const S = 64
  const cvs = document.createElement('canvas')
  cvs.width = cvs.height = S
  const ctx = cvs.getContext('2d')!
  const cx = S / 2, cy = S / 2

  // Glow halo
  const grd = ctx.createRadialGradient(cx, cy, 0, cx, cy, S * 0.48)
  grd.addColorStop(0, 'rgba(255,255,255,0.9)')
  grd.addColorStop(0.35, 'rgba(255,255,255,0.4)')
  grd.addColorStop(1, 'rgba(255,255,255,0)')

  // 4-point star path
  const r1 = S * 0.44  // outer
  const r2 = S * 0.10  // inner
  ctx.beginPath()
  for (let i = 0; i < 8; i++) {
    const a = (i * Math.PI) / 4 - Math.PI / 2
    const r = i % 2 === 0 ? r1 : r2
    const x = cx + r * Math.cos(a)
    const y = cy + r * Math.sin(a)
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
  }
  ctx.closePath()
  ctx.fillStyle = grd
  ctx.fill()

  const tex = new THREE.CanvasTexture(cvs)
  tex.needsUpdate = true
  return tex
}

/* ── Particle system ── */
interface ParticlesProps {
  mouseRef: React.MutableRefObject<[number, number]>
}

function Particles({ mouseRef }: ParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null!)
  const orig = useRef<Float32Array | undefined>(undefined)

  /* Generate geometry once */
  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(COUNT * 3)
    const col = new Float32Array(COUNT * 3)
    const siz = new Float32Array(COUNT)

    // Brand colors
    const citron = new THREE.Color('#D4F551')  // bright yellow-green
    const pine   = new THREE.Color('#1F3D2C')  // deep forest
    const sage   = new THREE.Color('#A8B5AD')  // soft grey-green

    for (let i = 0; i < COUNT; i++) {
      // Density gradient: gaussian-ish, more particles near center
      const r = Math.pow(Math.random(), 0.6) * 5.5
      const theta = Math.random() * Math.PI * 2
      pos[i * 3]     = r * Math.cos(theta)
      pos[i * 3 + 1] = r * Math.sin(theta) * 0.65  // slightly flatter
      pos[i * 3 + 2] = (Math.random() - 0.5) * 1.2

      // 55% citron · 25% pine · 20% sage
      const rnd = Math.random()
      const c = rnd < 0.55 ? citron : rnd < 0.80 ? pine : sage
      col[i * 3]     = c.r
      col[i * 3 + 1] = c.g
      col[i * 3 + 2] = c.b

      siz[i] = Math.random() * 3.5 + 1.2
    }

    orig.current = pos.slice()
    return [pos, col, siz]
  }, [])

  const texture = useMemo(() => makeStarTexture(), [])

  useFrame(({ clock }) => {
    if (!pointsRef.current || !orig.current) return
    const geo = pointsRef.current.geometry
    const pos = geo.attributes.position.array as Float32Array
    const o   = orig.current
    const [mx, my] = mouseRef.current
    const t = clock.getElapsedTime()
    const RADIUS = 1.8
    const STRENGTH = 1.4

    for (let i = 0; i < COUNT; i++) {
      const ox = o[i * 3], oy = o[i * 3 + 1]
      const dx = ox - mx
      const dy = oy - my
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.001
      const push = Math.max(0, 1 - dist / RADIUS) * STRENGTH

      // Gentle ambient drift
      const drift = Math.sin(t * 0.35 + i * 0.7) * 0.025

      pos[i * 3]     = ox + (dx / dist) * push + drift
      pos[i * 3 + 1] = oy + (dy / dist) * push + drift
      // z stays fixed
    }

    geo.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
        <bufferAttribute args={[colors,    3]} attach="attributes-color"    />
        <bufferAttribute args={[sizes,     1]} attach="attributes-size"     />
      </bufferGeometry>
      <pointsMaterial
        map={texture}
        size={0.14}
        vertexColors
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.NormalBlending}
        alphaTest={0.02}
      />
    </points>
  )
}

/* ── Root canvas ── */
export default function SparkFieldCanvas({ className }: { className?: string }) {
  const mouseRef = useRef<[number, number]>([999, 999])
  const divRef   = useRef<HTMLDivElement>(null)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = divRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    // Map pixel coords → Three.js world coords (cam z=5, fov=60)
    const x =  ((e.clientX - rect.left)  / rect.width  * 2 - 1) * 6
    const y = -((e.clientY - rect.top)   / rect.height * 2 - 1) * 4
    mouseRef.current = [x, y]
  }

  const handleLeave = () => { mouseRef.current = [999, 999] }

  return (
    <div
      ref={divRef}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ alpha: true, antialias: false, powerPreference: 'high-performance' }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <Particles mouseRef={mouseRef} />
      </Canvas>
    </div>
  )
}

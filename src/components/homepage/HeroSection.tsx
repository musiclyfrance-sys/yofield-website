'use client'

import Link from 'next/link'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import RevealText from '@/components/animations/RevealText'
import MagneticButton from '@/components/animations/MagneticButton'
import SparkField from '@/components/animations/SparkField'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  /* Content fades: 1 → 0.12 at 55 % scroll, 0 at 80 % */
  const opacity = useTransform(scrollYProgress, [0, 0.55, 0.80], [1, 0.12, 0])
  /* Subtle upward drift */
  const y       = useTransform(scrollYProgress, [0, 0.80], ['0%', '-6%'])

  return (
    /*
     * 160 vh outer section gives the sticky inner div room to "hold" while
     * the user scrolls — next section slides over naturally at the bottom.
     */
    <section
      ref={sectionRef}
      className="relative bg-snow"
      style={{ minHeight: '160vh' }}
      aria-label="Hero Yofield"
    >
      {/* SparkField — covers full 160 vh */}
      <SparkField className="absolute inset-0 z-0 pointer-events-none" />

      {/* Sticky container — pins at top:0, one viewport tall */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">

        {/* Scroll-driven fade + drift (no entrance anim conflict) */}
        <motion.div
          className="w-full flex flex-col items-center justify-center"
          style={{ opacity, y }}
        >
          {/* Entrance stagger — fires once at mount */}
          <motion.div
            className="relative z-10 container flex flex-col items-center text-center px-6"
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

            {/* H1 — naturally at ~30 vh when content is centered */}
            <motion.div variants={fadeUp} className="mb-7 max-w-4xl">
              <RevealText
                text="Là où votre marque trouve sa forme, sa voix et son terrain."
                as="h1"
                className="np-900 text-[clamp(44px,6.5vw,80px)] text-soil leading-[1.05]"
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
        </motion.div>
      </div>
    </section>
  )
}

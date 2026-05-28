'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import RevealText from '@/components/animations/RevealText'
import MagneticButton from '@/components/animations/MagneticButton'
import SparkField from '@/components/animations/SparkField'

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

const revealFade = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
}

const imageReveal = {
  hidden: { opacity: 0, scale: 0.97, y: 28 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.1, ease } },
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  /*
   * Track scroll through the hero section.
   * offset: ['start start', 'end start'] means:
   *   0 = section top aligned with viewport top
   *   1 = section bottom aligned with viewport top (section fully scrolled past)
   */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })

  /* Content fades: full opacity → 0.15 at 55% scroll, invisible at 85% */
  const opacity  = useTransform(scrollYProgress, [0, 0.55, 0.85], [1, 0.15, 0])
  /* Subtle upward drift + scale-down for depth */
  const y        = useTransform(scrollYProgress, [0, 0.85], ['0%', '-5%'])
  const scale    = useTransform(scrollYProgress, [0, 0.85], [1, 0.97])

  return (
    /*
     * Outer section is 160vh — gives scroll room while the sticky inner
     * container remains pinned. Next section slides over naturally.
     */
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-snow"
      style={{ minHeight: '160vh' }}
      aria-label="Hero Yofield"
    >
      {/* SparkField covers the full 160vh section */}
      <SparkField className="absolute inset-0 z-0 pointer-events-none" />

      {/* Sticky container — pins at top:0, 100vh tall, while section scrolls */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* Scroll-driven fade/scale wrapper (no entrance anim here) */}
        <motion.div
          className="h-full flex flex-col items-center overflow-hidden"
          style={{ opacity, y, scale }}
        >
          {/* Entrance stagger — runs once on mount, scroll transform layers on top */}
          <motion.div
            className="relative z-10 container flex flex-col items-center text-center pt-[28vh]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Eyebrow */}
            <motion.p
              variants={revealFade}
              className="eyebrow text-soil mb-8"
              style={{ opacity: 0.45 }}
            >
              Studio créatif et digital
            </motion.p>

            {/* H1 — sticky at ~30vh from page top via pt-[28vh] above */}
            <motion.div variants={revealFade} className="mb-6 max-w-4xl">
              <RevealText
                text="Là où votre marque trouve sa forme, sa voix et son terrain."
                as="h1"
                className="np-900 text-[clamp(48px,7vw,80px)] text-soil leading-[1.05]"
                stagger={0.025}
                duration={0.55}
                delay={0.15}
                triggerOnMount
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={revealFade}
              className="font-body text-lg text-soil/65 max-w-xl leading-relaxed mb-10"
            >
              Branding, sites web, acquisition, contenus et IA.
              <br className="hidden sm:block" />
              Du brief au lancement public, sans intermédiaires.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={revealFade}
              className="flex flex-wrap items-center justify-center gap-4 mb-14"
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

            {/* Hero image */}
            <motion.div
              variants={imageReveal}
              className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-soil/10"
              style={{ aspectRatio: '16/9' }}
            >
              <Image
                src="/images/hero/homepage.jpg"
                alt="Yofield studio créatif — paysage cinématique avec fusée citron sur chemin de bois, champ de prairie dorée et montagnes"
                width={1920}
                height={960}
                className="w-full h-full object-cover"
                priority
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

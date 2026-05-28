'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
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
  return (
    <section
      className="relative flex min-h-[88vh] flex-col items-center justify-center overflow-hidden bg-snow pt-24 pb-16"
      aria-label="Hero Yofield"
    >
      {/* SparkField WebGL — particle layer behind all content */}
      <SparkField className="absolute inset-0 z-0 pointer-events-none" />

      <motion.div
        className="relative z-10 container flex flex-col items-center text-center"
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

        {/* H1 — char stagger reveal */}
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

        {/* CTAs — magnetic */}
        <motion.div variants={revealFade} className="flex flex-wrap items-center justify-center gap-4 mb-16">
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
          className="w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-soil/10"
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
    </section>
  )
}

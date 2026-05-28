'use client'

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type TagName = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'blockquote'

interface RevealTextProps {
  text: string
  className?: string
  /** Delay before first char starts (seconds) */
  delay?: number
  /** Animation duration per char (seconds) */
  duration?: number
  /** Stagger between chars (seconds) */
  stagger?: number
  as?: TagName
  /** Trigger immediately on mount (for above-the-fold elements) */
  triggerOnMount?: boolean
}

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number]

interface WordProps {
  word: string
  charOffset: number
  delay: number
  duration: number
  stagger: number
  isVisible: boolean
}

function Word({ word, charOffset, delay, duration, stagger, isVisible }: WordProps) {
  return (
    <span className="inline-block overflow-hidden" style={{ verticalAlign: 'bottom' }}>
      {word.split('').map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: '110%' }}
          animate={isVisible ? { opacity: 1, y: '0%' } : { opacity: 0, y: '110%' }}
          transition={{
            duration,
            delay: delay + (charOffset + i) * stagger,
            ease,
          }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export default function RevealText({
  text,
  className,
  delay = 0,
  duration = 0.55,
  stagger = 0.03,
  as: Tag = 'span',
  triggerOnMount = false,
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: '-8% 0px',
  })

  const isVisible = triggerOnMount || isInView
  const words = text.split(' ')

  let charOffset = 0
  const wordNodes = words.map((word, wi) => {
    const offset = charOffset
    charOffset += word.length
    return (
      <React.Fragment key={wi}>
        <Word
          word={word}
          charOffset={offset}
          delay={delay}
          duration={duration}
          stagger={stagger}
          isVisible={isVisible}
        />
        {wi < words.length - 1 && (
          <span className="inline-block">&nbsp;</span>
        )}
      </React.Fragment>
    )
  })

  return React.createElement(Tag, { ref, className, 'aria-label': text }, wordNodes)
}

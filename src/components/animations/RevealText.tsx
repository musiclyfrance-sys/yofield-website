'use client';

import React, { useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

type TagName = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  as?: TagName;
}

interface WordProps {
  word: string;
  wordIndex: number;
  charOffset: number;
  duration: number;
  delay: number;
  isInView: boolean;
}

function Word({ word, wordIndex, charOffset, duration, delay, isInView }: WordProps) {
  const chars = word.split('');

  return (
    <span
      className="inline-block overflow-hidden"
      style={{ verticalAlign: 'bottom' }}
    >
      {chars.map((char, charIndex) => {
        const globalIndex = charOffset + charIndex;
        return (
          <motion.span
            key={`${wordIndex}-${charIndex}`}
            className="inline-block"
            initial={{ opacity: 0, y: '100%' }}
            animate={
              isInView
                ? { opacity: 1, y: '0%' }
                : { opacity: 0, y: '100%' }
            }
            transition={{
              duration: duration,
              delay: delay + globalIndex * duration,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {char}
          </motion.span>
        );
      })}
    </span>
  );
}

export default function RevealText({
  text,
  className,
  delay = 0,
  duration = 0.05,
  as: Tag = 'span',
}: RevealTextProps) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, { once: true, margin: '-10% 0px' });

  const words = text.split(' ');

  // Pre-calculate char offsets per word so stagger is global across all words
  const charOffsets: number[] = [];
  let running = 0;
  for (const word of words) {
    charOffsets.push(running);
    running += word.length;
  }

  const inner = (
    <AnimatePresence>
      {words.map((word, wordIndex) => (
        <React.Fragment key={wordIndex}>
          <Word
            word={word}
            wordIndex={wordIndex}
            charOffset={charOffsets[wordIndex]}
            duration={duration}
            delay={delay}
            isInView={isInView}
          />
          {/* Render a space between words, except after the last word */}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </React.Fragment>
      ))}
    </AnimatePresence>
  );

  // Render the correct semantic tag while attaching the ref
  return React.createElement(
    Tag,
    { ref, className },
    inner,
  );
}

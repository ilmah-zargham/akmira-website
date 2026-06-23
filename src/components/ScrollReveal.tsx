'use client'

import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  yOffset?: number
  className?: string
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 0.4, 
  yOffset = 16,
  className = ''
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: yOffset }}
      whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ 
        duration: shouldReduceMotion ? 0.2 : duration, 
        ease: [0.16, 1, 0.3, 1], 
        delay 
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

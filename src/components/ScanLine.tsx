'use client'

import React from 'react'

interface ScanLineProps {
  className?: string
  direction?: 'horizontal' | 'vertical'
}

export default function ScanLine({ className = '', direction = 'horizontal' }: ScanLineProps) {
  if (direction === 'vertical') {
    return (
      <div className={`relative w-[2px] h-full overflow-hidden bg-white/5 ${className}`} aria-hidden="true">
        <div className="absolute top-0 left-0 w-full h-[30%] holographic-gradient opacity-80 shadow-[0_0_15px_#19C9D8] motion-safe:animate-scan-vertical" />
      </div>
    )
  }

  return (
    <div className={`relative w-full h-[1px] overflow-hidden bg-white/10 ${className}`} aria-hidden="true">
      <div className="absolute top-0 -left-1/4 h-full w-[250px] holographic-gradient opacity-90 blur-[1px] shadow-[0_0_10px_#19C9D8] motion-safe:animate-scan-horizontal" />
    </div>
  )
}

'use client'

import React, { useEffect, useState } from 'react'

export default function HomeHeroVisual() {
  const [dots, setDots] = useState<{ x: number; y: number; r: number; delay: number }[]>([])

  useEffect(() => {
    // Generate organic point cloud dots scattered around the model
    const newDots = []
    for (let i = 0; i < 45; i++) {
      // Position dots near the central ear-canal wireframe shape
      const angle = Math.random() * Math.PI * 2
      const spreadX = 70 + Math.random() * 120
      const spreadY = 40 + Math.random() * 60
      const x = 220 + Math.cos(angle) * spreadX
      const y = 160 + Math.sin(angle) * spreadY
      const r = 0.6 + Math.random() * 1.0
      const delay = Math.random() * 3
      newDots.push({ x, y, r, delay })
    }
    setDots(newDots)
  }, [])

  return (
    <div className="relative w-full aspect-[4/3] rounded-3xl border border-white/10 bg-gradient-to-b from-ink-soft/90 to-ink/95 shadow-2xl p-4 overflow-hidden group">
      {/* Grid background overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(25,201,216,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(25,201,216,0.03)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Sweeping scan line overlay */}
      <div 
        className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan to-transparent shadow-[0_0_12px_#19C9D8] opacity-80 animate-scan-sweep pointer-events-none z-10" 
        aria-hidden="true"
      />

      {/* Technical chips in top corners */}
      <div className="absolute top-4 left-4 z-10 bg-ink/70 border border-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-[9px] font-mono tracking-widest text-slate-300 uppercase select-none">
        EAR CANAL · 3D SCAN
      </div>

      <div className="absolute top-4 right-4 z-10 bg-ink/70 border border-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-[9px] font-mono tracking-widest text-white uppercase flex items-center space-x-1.5 select-none">
        <span className="h-1.5 w-1.5 rounded-full bg-cyan animate-pulse shadow-[0_0_6px_#19C9D8]" />
        <span>REAL-TIME 3D</span>
      </div>

      {/* Main SVG Graphic */}
      <svg 
        viewBox="0 0 450 320" 
        className="w-full h-full select-none" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main cyan to violet gradient for the wireframe contour rings */}
          <linearGradient id="contour-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#19C9D8" />
            <stop offset="100%" stopColor="#7C5CFF" />
          </linearGradient>

          {/* Glowing filter for high-activity items (e.g. Isthmus ring) */}
          <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Ambient background particles (point cloud visualization) */}
        {dots.map((dot, idx) => (
          <circle
            key={idx}
            cx={dot.x}
            cy={dot.y}
            r={dot.r}
            fill="#19C9D8"
            opacity={0.12 + Math.random() * 0.25}
            className="animate-pulse"
            style={{ 
              animationDelay: `${dot.delay}s`, 
              animationDuration: `${2.5 + Math.random() * 2}s` 
            }}
          />
        ))}

        {/* Outer guides representing the bounding limits of the scan */}
        <path
          d="M 95 110 Q 180 95 240 102 T 375 115"
          stroke="url(#contour-gradient)"
          strokeWidth="0.8"
          strokeDasharray="3 4"
          opacity="0.25"
        />
        <path
          d="M 95 250 Q 180 215 240 182 T 375 220"
          stroke="url(#contour-gradient)"
          strokeWidth="0.8"
          strokeDasharray="3 4"
          opacity="0.25"
        />
        <path
          d="M 50 180 Q 180 152 240 142 T 375 168"
          stroke="url(#contour-gradient)"
          strokeWidth="0.8"
          strokeDasharray="3 4"
          opacity="0.18"
        />

        {/* Stylized stacked 3D contour rings of the ear canal */}
        <g opacity="0.9">
          {/* Ring 1 (Entrance) */}
          <ellipse cx="95" cy="180" rx="45" ry="70" stroke="url(#contour-gradient)" strokeWidth="1.2" opacity="0.20" transform="rotate(-12 95 180)" />
          {/* Ring 2 */}
          <ellipse cx="120" cy="176" rx="41" ry="64" stroke="url(#contour-gradient)" strokeWidth="1.2" opacity="0.28" transform="rotate(-10 120 176)" />
          {/* Ring 3 */}
          <ellipse cx="145" cy="171" rx="37" ry="58" stroke="url(#contour-gradient)" strokeWidth="1.2" opacity="0.36" transform="rotate(-7 145 171)" />
          {/* Ring 4 */}
          <ellipse cx="170" cy="164" rx="33" ry="52" stroke="url(#contour-gradient)" strokeWidth="1.2" opacity="0.44" transform="rotate(-4 170 164)" />
          {/* Ring 5 */}
          <ellipse cx="195" cy="157" rx="30" ry="46" stroke="url(#contour-gradient)" strokeWidth="1.2" opacity="0.52" transform="rotate(-1 195 157)" />
          {/* Ring 6 */}
          <ellipse cx="220" cy="150" rx="27" ry="41" stroke="url(#contour-gradient)" strokeWidth="1.2" opacity="0.60" transform="rotate(2 220 150)" />
          {/* Ring 7 (Isthmus Narrowing - highlighted with glow) */}
          <ellipse cx="245" cy="144" rx="25" ry="38" stroke="url(#contour-gradient)" strokeWidth="2.2" strokeDasharray="4 1" filter="url(#neon-glow)" opacity="0.9" transform="rotate(5 245 144)" className="animate-pulse" />
          {/* Ring 8 */}
          <ellipse cx="270" cy="142" rx="26" ry="38" stroke="url(#contour-gradient)" strokeWidth="1.2" opacity="0.70" transform="rotate(7 270 142)" />
          {/* Ring 9 */}
          <ellipse cx="295" cy="143" rx="28" ry="40" stroke="url(#contour-gradient)" strokeWidth="1.2" opacity="0.78" transform="rotate(5 295 143)" />
          {/* Ring 10 */}
          <ellipse cx="320" cy="147" rx="31" ry="44" stroke="url(#contour-gradient)" strokeWidth="1.2" opacity="0.86" transform="rotate(2 320 147)" />
          {/* Ring 11 */}
          <ellipse cx="345" cy="154" rx="34" ry="49" stroke="url(#contour-gradient)" strokeWidth="1.2" opacity="0.92" transform="rotate(-1 345 154)" />
          {/* Ring 12 (Deep Tympanic End) */}
          <ellipse cx="370" cy="164" rx="38" ry="55" stroke="url(#contour-gradient)" strokeWidth="1.6" opacity="1.0" transform="rotate(-4 370 164)" />
        </g>

        {/* HUD Overlay lines, measurement points, and tags */}
        
        {/* ENTRANCE MEASUREMENT */}
        <g>
          {/* Dotted pointer lines */}
          <path d="M 95 110 L 80 65 L 40 65" stroke="#19C9D8" strokeWidth="0.8" strokeDasharray="1 1" opacity="0.7" />
          <circle cx="95" cy="110" r="2.5" fill="#19C9D8" className="animate-ping" style={{ animationDuration: '2s' }} />
          <circle cx="95" cy="110" r="1.5" fill="#19C9D8" />
          {/* Text fields */}
          <text x="40" y="58" fill="#19C9D8" className="font-mono text-[9px] font-semibold tracking-wide" opacity="0.9">
            Ø 7.2 mm
          </text>
          <text x="40" y="50" fill="rgba(25, 201, 216, 0.5)" className="font-mono text-[7px] uppercase tracking-widest font-medium">
            ENTRANCE
          </text>
        </g>

        {/* ISTHMUS MEASUREMENT */}
        <g>
          {/* Dotted pointer lines */}
          <path d="M 245 106 L 265 60 L 310 60" stroke="#7C5CFF" strokeWidth="0.8" strokeDasharray="1 1" opacity="0.7" />
          <circle cx="245" cy="106" r="2.5" fill="#7C5CFF" className="animate-ping" style={{ animationDuration: '2s', animationDelay: '0.5s' }} />
          <circle cx="245" cy="106" r="1.5" fill="#7C5CFF" />
          {/* Text fields */}
          <text x="270" y="53" fill="#7C5CFF" className="font-mono text-[9px] font-semibold tracking-wide" opacity="0.9">
            Ø 5.4 mm
          </text>
          <text x="270" y="45" fill="rgba(124, 92, 255, 0.5)" className="font-mono text-[7px] uppercase tracking-widest font-medium">
            ISTHMUS
          </text>
        </g>

        {/* DEPTH MEASUREMENT */}
        <g>
          {/* Dotted pointer lines */}
          <path d="M 370 164 L 390 120 L 420 120" stroke="#19C9D8" strokeWidth="0.8" strokeDasharray="1 1" opacity="0.7" />
          <circle cx="370" cy="164" r="2.5" fill="#19C9D8" className="animate-ping" style={{ animationDuration: '2s', animationDelay: '1s' }} />
          <circle cx="370" cy="164" r="1.5" fill="#19C9D8" />
          {/* Text fields */}
          <text x="382" y="113" fill="#19C9D8" className="font-mono text-[9px] font-semibold tracking-wide" opacity="0.9">
            depth 18.2 mm
          </text>
          <text x="382" y="105" fill="rgba(25, 201, 216, 0.5)" className="font-mono text-[7px] uppercase tracking-widest font-medium">
            PENETRATION
          </text>
        </g>
      </svg>

      {/* Caption bar at bottom of the scanner container */}
      <div className="absolute bottom-4 left-4 right-4 bg-ink/80 border border-white/5 rounded-xl px-4 py-2 flex items-center justify-between pointer-events-none select-none backdrop-blur-sm">
        <span className="text-[10px] font-sans text-slate-300 font-medium">
          Scan in seconds <span className="text-cyan">→</span> print-ready 3D model
        </span>
        <span className="flex items-center space-x-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10B981]" />
          <span className="font-mono text-[8px] text-emerald-400 font-bold tracking-widest uppercase">READY</span>
        </span>
      </div>
    </div>
  )
}

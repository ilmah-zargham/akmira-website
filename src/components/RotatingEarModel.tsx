'use client'

import React, { useRef, useEffect, useState } from 'react'

interface Point3D {
  x: number
  y: number
  z: number
}

export default function RotatingEarModel() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [rotation, setRotation] = useState({ x: 0.5, y: 0.6 })
  const [isDragging, setIsDragging] = useState(false)
  const dragStart = useRef({ x: 0, y: 0 })
  const [scanOffset, setScanOffset] = useState(0)

  // Generate ear canal 3D rings
  // Curved cylinder represented by rings at different Z depths
  const ringsCount = 32
  const pointsPerRing = 24
  const focalLength = 300

  // Animation loop for scan sweep
  useEffect(() => {
    let animId: number
    const animate = () => {
      setScanOffset((prev) => (prev + 0.5) % ringsCount)
      animId = requestAnimationFrame(animate)
    }
    animId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animId)
  }, [])

  // Draw loop
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Setup high DPI canvas
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * 2
    canvas.height = rect.height * 2
    ctx.scale(2, 2)

    const w = rect.width
    const h = rect.height

    // Clear background (ink #0A1322 color equivalent)
    ctx.fillStyle = '#0A1322'
    ctx.fillRect(0, 0, w, h)

    // Render grid background
    ctx.strokeStyle = 'rgba(25, 201, 216, 0.03)'
    ctx.lineWidth = 1
    const gridSize = 40
    for (let x = 0; x < w; x += gridSize) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, h)
      ctx.stroke()
    }
    for (let y = 0; y < h; y += gridSize) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(w, y)
      ctx.stroke()
    }

    // Generate rotated and projected points
    const cosX = Math.cos(rotation.x)
    const sinX = Math.sin(rotation.x)
    const cosY = Math.cos(rotation.y)
    const sinY = Math.sin(rotation.y)

    const projectedRings: { points: { px: number; py: number; depth: number }[]; isScanning: boolean }[] = []

    for (let i = 0; i < ringsCount; i++) {
      // Curve of the ear canal (S-shape curve along Z)
      const t = i / ringsCount
      const cz = -100 + t * 200 // Z depth ranges from -100 to 100
      
      // S-curve center coordinates
      const cx = Math.sin(t * Math.PI * 1.5) * 25
      const cy = Math.cos(t * Math.PI * 1.0) * 15

      // Radius of ear canal: narrow in middle, wide at entrance (t=1)
      const r = 22 - Math.sin(t * Math.PI) * 8 + (t > 0.85 ? (t - 0.85) * 80 : 0)

      const ringPoints: { px: number; py: number; depth: number }[] = []
      const isScanning = Math.abs(i - scanOffset) < 1.2

      for (let j = 0; j < pointsPerRing; j++) {
        const theta = (j / pointsPerRing) * Math.PI * 2
        // Base point coordinates
        const x = cx + r * Math.cos(theta)
        const y = cy + r * Math.sin(theta)
        const z = cz

        // Rotate around Y axis (horizontal drag)
        let x1 = x * cosY - z * sinY
        let z1 = x * sinY + z * cosY

        // Rotate around X axis (vertical drag)
        let y2 = y * cosX - z1 * sinX
        let z2 = y * sinX + z1 * cosX

        // Move center of coordinates to canvas center
        const screenZ = z2 + 250 // Camera distance
        const scale = focalLength / screenZ
        const px = w / 2 + x1 * scale
        const py = h / 2 + y2 * scale

        ringPoints.push({ px, py, depth: screenZ })
      }

      projectedRings.push({ points: ringPoints, isScanning })
    }

    // Draw rings (back-to-front sorting for correct layering)
    // Sort rings by average depth
    const sortedRings = projectedRings
      .map((ring, originalIdx) => {
        const avgDepth = ring.points.reduce((sum, p) => sum + p.depth, 0) / ring.points.length
        return { ring, avgDepth, originalIdx }
      })
      .sort((a, b) => b.avgDepth - a.avgDepth)

    sortedRings.forEach(({ ring }) => {
      const color = ring.isScanning 
        ? 'rgba(124, 92, 255, 0.9)' // violet scanner sweep
        : 'rgba(25, 201, 216, 0.25)' // cyan wireframe

      ctx.strokeStyle = color
      ctx.lineWidth = ring.isScanning ? 2.5 : 1
      ctx.beginPath()

      // Connect points in the ring
      ring.points.forEach((p, idx) => {
        if (idx === 0) {
          ctx.moveTo(p.px, p.py)
        } else {
          ctx.lineTo(p.px, p.py)
        }
      })
      ctx.closePath()
      ctx.stroke()

      // Draw point dots
      ctx.fillStyle = ring.isScanning ? '#FFFFFF' : 'rgba(25, 201, 216, 0.7)'
      ring.points.forEach((p) => {
        const size = ring.isScanning ? 2.5 : 1.2
        ctx.beginPath()
        ctx.arc(p.px, p.py, size, 0, Math.PI * 2)
        ctx.fill()

        if (ring.isScanning) {
          // Glow effect
          ctx.shadowColor = '#7C5CFF'
          ctx.shadowBlur = 8
          ctx.beginPath()
          ctx.arc(p.px, p.py, size * 1.5, 0, Math.PI * 2)
          ctx.stroke()
          ctx.shadowBlur = 0 // reset
        }
      })
    })

    // Draw longitudinal wireframe lines connecting rings
    ctx.strokeStyle = 'rgba(25, 201, 216, 0.08)'
    ctx.lineWidth = 0.8
    for (let j = 0; j < pointsPerRing; j += 2) {
      ctx.beginPath()
      for (let i = 0; i < ringsCount; i++) {
        const p = projectedRings[i].points[j]
        if (i === 0) {
          ctx.moveTo(p.px, p.py)
        } else {
          ctx.lineTo(p.px, p.py)
        }
      }
      ctx.stroke()
    }

  }, [rotation, scanOffset])

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true)
    dragStart.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDragging) return
    const dx = e.clientX - dragStart.current.x
    const dy = e.clientY - dragStart.current.y
    setRotation((prev) => ({
      x: prev.x - dy * 0.007,
      y: prev.y - dx * 0.007,
    }))
    dragStart.current = { x: e.clientX, y: e.clientY }
  }

  const handleMouseUpOrLeave = () => {
    setIsDragging(false)
  }

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (e.touches.length !== 1) return
    setIsDragging(true)
    dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDragging || e.touches.length !== 1) return
    const dx = e.touches[0].clientX - dragStart.current.x
    const dy = e.touches[0].clientY - dragStart.current.y
    setRotation((prev) => ({
      x: prev.x - dy * 0.007,
      y: prev.y - dx * 0.007,
    }))
    dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }

  return (
    <div className="relative w-full h-[400px] select-none cursor-grab active:cursor-grabbing bg-ink border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
      {/* HUD Info */}
      <div className="absolute top-4 left-4 font-mono text-[10px] text-cyan/70 space-y-1 pointer-events-none z-10">
        <div>SYS: AKURIS_SCN_3D</div>
        <div>SCAN_RES: 24p x 32r</div>
        <div>AXIS_YAW: {(rotation.y * (180 / Math.PI)).toFixed(1)}°</div>
        <div>AXIS_PITCH: {(rotation.x * (180 / Math.PI)).toFixed(1)}°</div>
      </div>

      <div className="absolute top-4 right-4 flex items-center space-x-2 pointer-events-none z-10">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan"></span>
        </span>
        <span className="font-mono text-[10px] text-white font-bold tracking-widest">LIVE POINT CLOUD</span>
      </div>

      <canvas
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUpOrLeave}
        className="w-full h-full block"
      />

      <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none z-10">
        <span className="bg-ink-soft/80 text-[10px] text-slate/90 px-3 py-1.5 rounded-full border border-white/5 font-sans tracking-wide">
          Drag to rotate 3D ear canal topography
        </span>
      </div>
    </div>
  )
}

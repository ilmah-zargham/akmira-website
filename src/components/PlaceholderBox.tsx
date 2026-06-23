import React from 'react'
import { Image } from 'lucide-react'

interface PlaceholderBoxProps {
  label: string
  aspectRatio?: string
  theme?: 'light' | 'dark'
  className?: string
}

export default function PlaceholderBox({ 
  label, 
  aspectRatio = 'aspect-[4/3]', 
  theme = 'dark', 
  className = '' 
}: PlaceholderBoxProps) {
  const isDark = theme === 'dark'
  return (
    <div className={`w-full ${aspectRatio} rounded-2xl flex flex-col items-center justify-center p-6 border text-center relative overflow-hidden ${
      isDark 
        ? 'border-white/10 bg-white/[0.02] text-white shadow-2xl bg-gradient-to-br from-ink-soft to-ink' 
        : 'border-slate-200 bg-slate-50 text-ink shadow-sm'
    } ${className}`}>
      {/* Subtle background grid pattern */}
      <div className={`absolute inset-0 pointer-events-none ${isDark ? 'opacity-20' : 'opacity-10'}`} style={{
        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
        backgroundSize: '16px 16px'
      }} />
      <div className={`h-10 w-10 rounded-full flex items-center justify-center mb-3 ${
        isDark ? 'bg-white/5 border border-white/10' : 'bg-slate-200/50 border border-slate-300'
      }`}>
        <Image className={`h-5 w-5 ${isDark ? 'text-slate-400' : 'text-slate-500'}`} />
      </div>
      <span className={`text-xs font-semibold tracking-wide mb-1 ${isDark ? 'text-slate-200' : 'text-slate-700'}`}>
        Visual coming soon
      </span>
      <span className={`text-[9px] font-mono uppercase max-w-xs leading-normal px-2.5 py-0.5 rounded-md ${
        isDark ? 'text-cyan bg-cyan/10 border border-cyan/20' : 'text-cyan-deep bg-cyan-deep/10 border border-cyan-deep/20'
      }`}>
        {label}
      </span>
    </div>
  )
}

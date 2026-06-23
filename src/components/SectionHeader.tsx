import React from 'react'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  description?: string
  theme?: 'dark' | 'light'
  className?: string
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  theme = 'light',
  className = '',
}: SectionHeaderProps) {
  const eyebrowColor = theme === 'dark' ? 'text-cyan' : 'text-cyan-deep'
  const titleColor = theme === 'dark' ? 'text-white' : 'text-ink'
  const descColor = theme === 'dark' ? 'text-slate/70' : 'text-slate'

  return (
    <div className={`max-w-3xl mb-12 ${className}`}>
      <span className={`text-[10px] md:text-xs font-semibold tracking-widest uppercase ${eyebrowColor} block mb-3`}>
        {eyebrow}
      </span>
      <h2 className={`font-heading text-3xl md:text-4xl font-bold tracking-tight ${titleColor} leading-tight`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${descColor}`}>
          {description}
        </p>
      )}
    </div>
  )
}

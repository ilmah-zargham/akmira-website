import React from 'react'
import Link from 'next/link'
import { 
  ArrowRight,
  ShieldCheck, 
  Award,
  ChevronDown
} from 'lucide-react'
import { getDictionary } from '../dictionaries'
import ScrollReveal from '@/components/ScrollReveal'
import ScanLine from '@/components/ScanLine'
import HomeHeroVisual from '@/components/HomeHeroVisual'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'de')

  const getLocalizedHref = (path: string) => {
    if (lang === 'de') return `/de${path}`
    return path
  }

  return (
    <div className="overflow-x-hidden">
      
      {/* SECTION 1: HERO (Dark, Premium Gradient, Full Height) */}
      <section className="relative min-h-screen min-h-[100svh] flex flex-col justify-between bg-hero-premium text-white pt-24 pb-16 overflow-hidden">
        {/* Animated Scan Line background element */}
        <div className="absolute inset-y-0 right-1/4 w-[2px] hidden lg:block opacity-20" aria-hidden="true">
          <ScanLine direction="vertical" />
        </div>

        {/* Vertically Centered Main Content Area */}
        <div className="flex-grow flex items-center w-full relative z-10 py-6 md:py-12">
          <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal delay={0.1}>
                {/* Eyebrow Label with Glowing Pulse Dot */}
                <div className="inline-flex items-center space-x-2.5 text-xs font-semibold tracking-widest text-cyan uppercase font-heading">
                  <span className="h-2 w-2 rounded-full bg-cyan animate-pulse shadow-[0_0_8px_#19C9D8]" />
                  <span>{dict.home.hero.eyebrow}</span>
                </div>
              </ScrollReveal>

              {/* 2-Line Gradient Heading */}
              <ScrollReveal delay={0.2}>
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                  <span className="block text-white">
                    {dict.home.hero.titleLine1}
                  </span>
                  <span className="block bg-gradient-to-r from-cyan to-violet bg-clip-text text-transparent">
                    {dict.home.hero.titleLine2}
                  </span>
                </h1>
              </ScrollReveal>

              {/* Subtitle */}
              <ScrollReveal delay={0.3}>
                <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl">
                  {dict.home.hero.subhead}
                </p>
              </ScrollReveal>

              {/* CTAs */}
              <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
                <Link 
                  href={getLocalizedHref('/akuris')} 
                  className="bg-cyan hover:bg-cyan-deep text-ink hover:text-white font-sans text-sm font-semibold px-8 py-4 rounded-xl text-center transition-all duration-200 shadow-[0_4px_12px_rgba(25,201,216,0.25)] focus-ring"
                >
                  {dict.common.cta.exploreAkuris}
                </Link>
                <Link 
                  href={getLocalizedHref('/contact')} 
                  className="border border-white/10 hover:border-white/20 bg-transparent text-slate-300 hover:text-white font-sans text-sm font-semibold px-8 py-4 rounded-xl text-center transition-all duration-200 focus-ring"
                >
                  {dict.common.cta.bookDemo}
                </Link>
              </ScrollReveal>

              {/* Proof Strip */}
              <ScrollReveal delay={0.5} className="pt-6 border-t border-white/5 mt-6">
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-slate-400 text-xs font-medium">
                  {/* Award */}
                  <div className="flex items-center space-x-2">
                    <Award className="h-4.5 w-4.5 text-cyan/90 flex-shrink-0" />
                    <span>1st place — Innovation Award 2024</span>
                  </div>
                  {/* Divider */}
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-700/60 hidden sm:inline-block" />
                  {/* Patents */}
                  <div className="flex items-center space-x-2">
                    <ShieldCheck className="h-4.5 w-4.5 text-cyan/90 flex-shrink-0" />
                    <span>9 patents</span>
                  </div>
                  {/* Divider */}
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-700/60 hidden md:inline-block" />
                  {/* EU Funding */}
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-3.5 flex-shrink-0 rounded-[1px] overflow-hidden" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <rect width="12" height="8" fill="#003399" />
                      <circle cx="6" cy="4" r="2" stroke="#FFCC00" strokeWidth="0.25" strokeDasharray="0.3 0.6" />
                    </svg>
                    <span>Co-funded by the EU</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Side Visual */}
            <div className="lg:col-span-5 w-full">
              <ScrollReveal delay={0.3}>
                <HomeHeroVisual />
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 z-20 pointer-events-none opacity-85 animate-gentle-bounce">
          <span className="font-heading text-[9px] tracking-widest text-slate-400 font-semibold uppercase">Scroll</span>
          <ChevronDown className="h-4 w-4 text-cyan" />
        </div>
      </section>

      {/* Section Divider Motif */}
      <ScanLine />

      {/* SECTION 2: HIGHLIGHT REEL TEASERS (Dark) */}
      <section className="bg-ink text-white py-24 relative overflow-hidden">
        {/* Holographic background glow */}
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-cyan/5 rounded-full filter blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-violet/5 rounded-full filter blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
          <ScrollReveal delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan block">
                Highlights
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {dict.home.teaser.title}
              </h2>
            </div>
          </ScrollReveal>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: AKuris */}
            <ScrollReveal delay={0.15}>
              <div className="bg-ink-soft border border-white/5 rounded-2xl p-8 hover:border-cyan/35 transition-colors group flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-cyan/70 uppercase">Product</span>
                  <h3 className="font-heading text-2xl font-bold text-white">AKuris</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {dict.home.teaser.akuris}
                  </p>
                </div>
                <div className="pt-8">
                  <Link 
                    href={getLocalizedHref('/akuris')} 
                    className="inline-flex items-center space-x-2 text-cyan hover:text-white font-semibold text-sm transition-colors focus-ring"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2: Technology */}
            <ScrollReveal delay={0.25}>
              <div className="bg-ink-soft border border-white/5 rounded-2xl p-8 hover:border-cyan/35 transition-colors group flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-cyan/70 uppercase">Innovation</span>
                  <h3 className="font-heading text-2xl font-bold text-white">Technology</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {dict.home.teaser.technology}
                  </p>
                </div>
                <div className="pt-8">
                  <Link 
                    href={getLocalizedHref('/technology')} 
                    className="inline-flex items-center space-x-2 text-cyan hover:text-white font-semibold text-sm transition-colors focus-ring"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 3: Company */}
            <ScrollReveal delay={0.35}>
              <div className="bg-ink-soft border border-white/5 rounded-2xl p-8 hover:border-cyan/35 transition-colors group flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-cyan/70 uppercase">Our Vision</span>
                  <h3 className="font-heading text-2xl font-bold text-white">Company</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {dict.home.teaser.company}
                  </p>
                </div>
                <div className="pt-8">
                  <Link 
                    href={getLocalizedHref('/company')} 
                    className="inline-flex items-center space-x-2 text-cyan hover:text-white font-semibold text-sm transition-colors focus-ring"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 4: Career */}
            <ScrollReveal delay={0.45}>
              <div className="bg-ink-soft border border-white/5 rounded-2xl p-8 hover:border-cyan/35 transition-colors group flex flex-col justify-between h-full">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-cyan/70 uppercase">Opportunities</span>
                  <h3 className="font-heading text-2xl font-bold text-white">Career</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {dict.home.teaser.career}
                  </p>
                </div>
                <div className="pt-8">
                  <Link 
                    href={getLocalizedHref('/career')} 
                    className="inline-flex items-center space-x-2 text-cyan hover:text-white font-semibold text-sm transition-colors focus-ring"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Contact Section Teaser Banner */}
          <ScrollReveal delay={0.5} className="mt-12">
            <div className="bg-ink-soft border border-white/5 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 hover:border-cyan/35 transition-colors">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold text-white">Ready to see AKuris in action?</h3>
                <p className="text-slate-400 text-sm md:text-base">
                  {dict.home.teaser.contact}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Link 
                  href={getLocalizedHref('/contact')} 
                  className="bg-cyan hover:bg-cyan-deep text-ink hover:text-white font-sans text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-md focus-ring block text-center"
                >
                  {dict.common.cta.bookDemo}
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Disclaimer Statement */}
          <div className="text-[11px] text-slate-500 italic mt-16 text-center select-none" aria-label="Disclaimer">
            Note: figures and clinical details on this page are illustrative and for concept-design purposes only.
          </div>

        </div>
      </section>

    </div>
  )
}

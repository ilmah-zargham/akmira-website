import React from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Check, 
  AlertTriangle, 
  Clock, 
  Cpu, 
  Award, 
  ShieldCheck, 
  Eye, 
  Leaf, 
  Sparkles,
  Calendar,
  MapPin
} from 'lucide-react'
import { getDictionary } from '../dictionaries'
import ScrollReveal from '@/components/ScrollReveal'
import ScanLine from '@/components/ScanLine'
import SectionHeader from '@/components/SectionHeader'
import PlaceholderBox from '@/components/PlaceholderBox'

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'de')

  const getLocalizedHref = (path: string) => {
    if (lang === 'de') return `/de${path}`
    return path
  }

  return (
    <div className="overflow-x-hidden">
      
      {/* 6.1 Hero Section (Dark) */}
      <section className="relative min-h-[90vh] flex flex-col justify-center bg-ink text-white pt-20 pb-16 overflow-hidden">
        {/* Animated Scan Line vertical overlay in background */}
        <div className="absolute inset-y-0 right-1/4 w-[2px] hidden lg:block opacity-20">
          <ScanLine direction="vertical" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.1}>
              <span className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-cyan uppercase bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                <Sparkles className="h-3.5 w-3.5 text-cyan animate-pulse" />
                <span>{dict.home.hero.eyebrow}</span>
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                {dict.home.hero.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
                {dict.home.hero.subhead}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a 
                href="#video-section" 
                className="bg-cyan hover:bg-cyan-deep text-ink hover:text-white font-sans text-sm font-semibold px-6 py-4 rounded-xl text-center transition-all duration-200 shadow-[0_4px_12px_rgba(25,201,216,0.2)] focus-ring"
              >
                {dict.common.cta.seeAction}
              </a>
              <Link 
                href={getLocalizedHref('/contact')} 
                className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-sans text-sm font-semibold px-6 py-4 rounded-xl text-center transition-all duration-200 focus-ring"
              >
                {dict.common.cta.bookDemo} →
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Visual Placeholder */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal delay={0.3} yOffset={24}>
              <div className="placeholder-box w-full aspect-[4/3] rounded-2xl flex flex-col items-center justify-center p-6 border border-white/10 relative shadow-2xl overflow-hidden bg-gradient-to-br from-ink to-ink-soft">
                {/* Simulated vertical scan sweep */}
                <div className="absolute inset-0 bg-grid-white/[0.02] pointer-events-none" />
                <div className="absolute left-0 right-0 h-[2px] bg-cyan/40 blur-[1px] motion-safe:animate-scan-vertical" style={{ top: '20%' }} />
                
                {/* Central wireframe graphics */}
                <div className="h-28 w-28 rounded-full border border-cyan/20 flex items-center justify-center relative animate-glow-pulse mb-4 bg-ink/40">
                  <div className="h-16 w-16 rounded-full border border-violet/30 flex items-center justify-center">
                    <Cpu className="h-8 w-8 text-cyan opacity-80" />
                  </div>
                </div>

                <span className="text-xs font-semibold text-slate-200 tracking-wide mb-1 relative z-10">Hero loop video coming soon</span>
                <span className="text-[9px] font-mono text-cyan/90 bg-cyan/5 border border-cyan/15 px-2 py-0.5 rounded-md relative z-10 uppercase">
                  Ear-canal scan demonstration
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* 6.1 Trust strip beneath fold */}
        <div className="mt-16 border-t border-white/5 bg-ink-soft/40 py-6 relative z-10">
          <div className="max-w-[1200px] mx-auto px-6">
            <p className="text-[10px] font-mono tracking-widest text-slate-400 uppercase text-center mb-4">
              Supported & Recognized Innovation
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-xs font-semibold text-slate-300 text-center">
              <span className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-cyan" />
                <span>{dict.common.labels.award}</span>
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan/30 hidden md:inline-block" />
              <span>{dict.common.labels.patents}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan/30 hidden md:inline-block" />
              <span>{dict.common.labels.euFunded}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan/30 hidden md:inline-block" />
              <span>{dict.common.labels.madeInGermany}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider Sweep */}
      <ScanLine />

      {/* 6.2 The Problem Section (Light) */}
      <section className="bg-mist text-ink py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <SectionHeader 
              eyebrow={dict.home.problem.eyebrow} 
              title={dict.home.problem.title} 
              theme="light"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { text: dict.home.problem.card1, icon: <AlertTriangle className="h-6 w-6 text-red-500" /> },
              { text: dict.home.problem.card2, icon: <Clock className="h-6 w-6 text-orange-500" /> },
              { text: dict.home.problem.card3, icon: <Cpu className="h-6 w-6 text-slate-500" /> }
            ].map((card, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <div className="bg-white border border-line rounded-2xl p-6 shadow-sm flex items-start space-x-4 h-full hover:shadow-md transition-shadow">
                  <div className="p-2.5 rounded-xl bg-mist border border-line flex-shrink-0">
                    {card.icon}
                  </div>
                  <p className="text-slate font-medium leading-relaxed pt-1.5">
                    {card.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider Sweep */}
      <ScanLine />

      {/* 6.3 The Solution Section (Dark) */}
      <section id="video-section" className="bg-ink text-white py-24 md:py-32 relative">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left copy */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal delay={0.1}>
              <SectionHeader 
                eyebrow={dict.home.solution.eyebrow} 
                title={dict.home.solution.title} 
                theme="dark"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                {dict.home.solution.text}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="pt-4">
              <Link 
                href={getLocalizedHref('/akuris')} 
                className="inline-flex items-center space-x-2 text-cyan hover:text-white font-semibold text-sm transition-colors focus-ring py-1.5"
              >
                <span>{dict.common.cta.exploreAkuris}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Video demo placeholder */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.2}>
              <PlaceholderBox label="AKuris live scanning demo video" theme="dark" aspectRatio="aspect-video" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section Divider Sweep */}
      <ScanLine />

      {/* 6.4 Benefits Grid (Light) */}
      <section className="bg-white text-ink py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <SectionHeader 
              eyebrow={dict.home.benefits.eyebrow} 
              title={dict.home.benefits.title} 
              theme="light"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { title: dict.home.benefits.faster.title, desc: dict.home.benefits.faster.desc },
              { title: dict.home.benefits.precise.title, desc: dict.home.benefits.precise.desc },
              { title: dict.home.benefits.hygienic.title, desc: dict.home.benefits.hygienic.desc },
              { title: dict.home.benefits.comfortable.title, desc: dict.home.benefits.comfortable.desc },
              { title: dict.home.benefits.workflow.title, desc: dict.home.benefits.workflow.desc },
              { title: dict.home.benefits.sustainable.title, desc: dict.home.benefits.sustainable.desc }
            ].map((benefit, i) => (
              <ScrollReveal key={i} delay={0.05 + i * 0.05}>
                <div className="bg-mist border border-line rounded-2xl p-6 h-full flex flex-col hover:border-cyan-deep/30 transition-all">
                  <div className="h-8 w-8 rounded-lg bg-success/10 border border-success/20 flex items-center justify-center mb-4 flex-shrink-0">
                    <Check className="h-4.5 w-4.5 text-success" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-ink mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 Audience Split (Light) */}
      <section className="bg-mist text-ink py-24 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-deep block mb-3">
                {dict.home.audience.eyebrow}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-ink">
                Tailored for medical precision and comfort
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Patients */}
            <ScrollReveal delay={0.15}>
              <div className="bg-white border border-line rounded-2xl p-8 md:p-10 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                    B2C / Patient Centric
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-ink">
                    {dict.home.audience.patients.title}
                  </h3>
                  <p className="text-slate text-base leading-relaxed">
                    {dict.home.audience.patients.desc}
                  </p>
                  <ul className="space-y-2 text-sm text-slate pt-2" role="list">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                      <span>Contactless scan: no messy gel or pressure pain</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                      <span>Hygienic scanning, zero chemical cleanup</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-8">
                  <Link 
                    href={getLocalizedHref('/akuris')} 
                    className="inline-flex items-center space-x-2 text-cyan-deep hover:text-ink font-semibold text-sm transition-colors focus-ring"
                  >
                    <span>Read patient benefits</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Audiologists */}
            <ScrollReveal delay={0.25}>
              <div className="bg-white border border-line rounded-2xl p-8 md:p-10 flex flex-col justify-between h-full shadow-sm hover:shadow-md transition-shadow">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                    B2B / Clinical Workflow
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-ink">
                    {dict.home.audience.audiologists.title}
                  </h3>
                  <p className="text-slate text-base leading-relaxed">
                    {dict.home.audience.audiologists.desc}
                  </p>
                  <ul className="space-y-2 text-sm text-slate pt-2" role="list">
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                      <span>Zero remakes: 3D point cloud accuracy</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className="h-4 w-4 text-success flex-shrink-0" />
                      <span>Instant manufacturing transfer, zero shipping times</span>
                    </li>
                  </ul>
                </div>
                <div className="pt-8">
                  <Link 
                    href={getLocalizedHref('/contact')} 
                    className="inline-flex items-center space-x-2 text-cyan-deep hover:text-ink font-semibold text-sm transition-colors focus-ring"
                  >
                    <span>Request integration guide</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section Divider Sweep */}
      <ScanLine />

      {/* 6.6 Platform Teaser (Dark) */}
      <section className="bg-ink text-white py-24 md:py-32 relative">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left copy */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.1}>
              <SectionHeader 
                eyebrow={dict.home.platform.eyebrow} 
                title={dict.home.platform.title} 
                theme="dark"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                {dict.home.platform.text}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="pt-4">
              <Link 
                href={getLocalizedHref('/technology')} 
                className="bg-cyan hover:bg-cyan-deep text-ink hover:text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl inline-block transition-all duration-200 focus-ring"
              >
                {dict.common.cta.discoverTech}
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Platform image placeholder */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.2}>
              <div className="placeholder-box w-full aspect-square rounded-2xl flex flex-col items-center justify-center p-6 border border-white/10 shadow-2xl bg-gradient-to-bl from-ink to-ink-soft">
                {/* Concentric rings to symbolize roadmap and lens sensor */}
                <div className="relative h-32 w-32 flex items-center justify-center mb-4">
                  <div className="absolute inset-0 rounded-full border border-cyan/20 animate-spin" style={{ animationDuration: '20s' }} />
                  <div className="absolute inset-3 rounded-full border border-violet/25 animate-reverse-spin" style={{ animationDuration: '15s' }} />
                  <div className="absolute inset-6 rounded-full border border-cyan/30" />
                  <div className="h-10 w-10 rounded-full bg-cyan/10 border border-cyan flex items-center justify-center">
                    <Eye className="h-5 w-5 text-cyan animate-pulse" />
                  </div>
                </div>
                <span className="text-xs font-semibold text-slate-200 tracking-wide mb-1 relative z-10">Sensor visual coming soon</span>
                <span className="text-[9px] font-mono text-cyan bg-cyan/5 border border-cyan/15 px-2 py-0.5 rounded relative z-10 uppercase">
                  Platform zoom & endoscopy renders
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section Divider Sweep */}
      <ScanLine />

      {/* 6.7 Recognition & Proof (Light) */}
      <section className="bg-white text-ink py-24 border-b border-line">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-deep block mb-3">
                {dict.home.recognition.eyebrow}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-ink">
                Factual validation and backing
              </h2>
            </div>
          </ScrollReveal>

          {/* Large numbers grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center" role="region" aria-label="Key company achievements">
            {[
              { num: "1st", label: "Innovation Award Berlin Brandenburg 2024" },
              { num: "9", label: "Own patents held by AKmira" },
              { num: "27", label: "Patents by founder Dr. Knüttel" },
              { num: "EU", label: "Co-financed European Union Development" }
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <div className="space-y-2 p-4">
                  <div className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold holographic-text tracking-tight">
                    {stat.num}
                  </div>
                  <div className="text-xs md:text-sm text-slate font-medium max-w-[200px] mx-auto leading-normal">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Credibility logos */}
          <div className="mt-16 pt-8 border-t border-line">
            <p className="text-center text-[10px] font-mono tracking-widest text-slate-400 uppercase mb-8">
              Official Partners & Regulatory Backing
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6 max-w-3xl mx-auto">
              {['EU co-funding', 'BMBF support', 'State of Brandenburg', 'Berlin-Brandenburg Award'].map((title, idx) => (
                <div key={idx} className="bg-mist border border-line rounded-xl px-6 py-3 text-center min-w-[140px] flex items-center justify-center">
                  <span className="text-xs font-semibold text-slate/70">{title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider Sweep */}
      <ScanLine />

      {/* 6.8 Trade Fair Callout (Dark) */}
      <section className="bg-ink text-white py-24 relative overflow-hidden">
        {/* Abstract circles design elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 holographic-gradient rounded-full opacity-5 blur-[80px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="bg-ink-soft border border-white/5 rounded-3xl p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left copy */}
            <div className="lg:col-span-8 space-y-6">
              <ScrollReveal delay={0.1}>
                <span className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-cyan uppercase bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                  <Calendar className="h-3.5 w-3.5 text-cyan" />
                  <span>{dict.home.tradefair.eyebrow}</span>
                </span>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h3 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
                  {dict.home.tradefair.title}
                </h3>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-slate-300 text-base md:text-lg flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 leading-relaxed">
                  <span className="flex items-center">
                    <MapPin className="h-4.5 w-4.5 text-cyan mr-1.5 flex-shrink-0" />
                    <span>Nuremberg, Germany</span>
                  </span>
                  <span className="hidden sm:inline text-slate-500">|</span>
                  <span>{dict.home.tradefair.detail}</span>
                </p>
              </ScrollReveal>
            </div>

            {/* Right CTA */}
            <div className="lg:col-span-4 flex flex-col justify-center items-stretch sm:items-start lg:items-end">
              <ScrollReveal delay={0.3}>
                <a 
                  href="https://www.euha.org/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-cyan hover:bg-cyan-deep text-ink hover:text-white font-sans text-sm font-semibold px-6 py-4 rounded-xl text-center inline-block transition-all duration-200 focus-ring shadow-[0_4px_12px_rgba(25,201,216,0.15)]"
                >
                  {dict.common.cta.planVisit} →
                </a>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* Section Divider Sweep */}
      <ScanLine />

      {/* 6.9 Final CTA Band (Dark, holographic accent) */}
      <section className="bg-ink text-white py-24 md:py-32 relative overflow-hidden">
        {/* Holographic background gradient accent */}
        <div className="absolute inset-0 holographic-gradient opacity-10 blur-[100px] pointer-events-none" />
        
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10 space-y-8">
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight max-w-2xl mx-auto leading-tight">
              {dict.home.ctaSection.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2} className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-sm sm:max-w-none mx-auto">
            <Link 
              href={getLocalizedHref('/contact')} 
              className="bg-cyan hover:bg-cyan-deep text-ink hover:text-white font-sans text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-200 focus-ring shadow-lg"
            >
              {dict.common.cta.bookDemo}
            </Link>
            <Link 
              href={getLocalizedHref('/contact')} 
              className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-sans text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-200 focus-ring"
            >
              {dict.common.cta.getInTouch}
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}

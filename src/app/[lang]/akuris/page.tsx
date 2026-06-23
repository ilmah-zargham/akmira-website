import React from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  Check, 
  HelpCircle, 
  Settings, 
  FileText, 
  ShieldCheck, 
  ChevronRight,
  Sparkles,
  Info
} from 'lucide-react'
import { getDictionary } from '../../dictionaries'
import ScrollReveal from '@/components/ScrollReveal'
import ScanLine from '@/components/ScanLine'
import SectionHeader from '@/components/SectionHeader'
import RotatingEarModel from '@/components/RotatingEarModel'

export default async function AkurisPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'de')

  const getLocalizedHref = (path: string) => {
    if (lang === 'de') return `/de${path}`
    return path
  }

  return (
    <div className="overflow-x-hidden">
      
      {/* SECTION 1: HERO (Dark) */}
      <section className="relative bg-ink text-white pt-24 pb-20 md:py-32 overflow-hidden">
        {/* Animated Scan Line background element */}
        <div className="absolute inset-y-0 right-1/3 w-[1px] opacity-10">
          <ScanLine direction="vertical" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal delay={0.1}>
              {/* Product Logo Lockup Placeholder */}
              <div className="inline-flex items-center space-x-2.5 px-3 py-1.5 rounded-full border border-cyan/20 bg-cyan/5 font-heading text-xs font-semibold text-cyan tracking-wider uppercase">
                <span className="h-2 w-2 rounded-full bg-cyan animate-pulse" />
                <span>AKuris Product World [PLACEHOLDER LOGO/LOCKUP]</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                {dict.akuris.hero.title}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl">
                {dict.akuris.hero.subhead}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-2">
              <Link 
                href={getLocalizedHref('/contact')} 
                className="bg-cyan hover:bg-cyan-deep text-ink hover:text-white font-sans text-sm font-semibold px-8 py-4 rounded-xl text-center transition-all duration-200 shadow-[0_4px_12px_rgba(25,201,216,0.2)] focus-ring"
              >
                {dict.common.cta.bookDemo}
              </Link>
              <a 
                href="#live-demo-section" 
                className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-sans text-sm font-semibold px-8 py-4 rounded-xl text-center transition-all duration-200 focus-ring"
              >
                Jump to 3D Viewer
              </a>
            </ScrollReveal>
          </div>

          {/* Right Product Render Placeholder */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={0.3}>
              <div className="placeholder-box w-full aspect-[4/3] rounded-2xl flex flex-col items-center justify-center p-6 border border-white/10 shadow-2xl bg-gradient-to-br from-ink-soft to-ink">
                <div className="h-16 w-16 rounded-full border border-cyan/30 flex items-center justify-center mb-4 bg-ink/55">
                  <Settings className="h-8 w-8 text-cyan animate-spin-slow" />
                </div>
                <span className="text-xs font-mono text-cyan bg-cyan/5 border border-cyan/15 px-3 py-1 rounded-md mb-2">
                  [PLACEHOLDER: AKuris scanner product render]
                </span>
                <span className="text-[10px] text-slate-400 text-center max-w-xs leading-normal">
                  High-fidelity industrial mockup of the handheld 3D scanning device.
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section Divider Motif */}
      <ScanLine />

      {/* SECTION 2: PROBLEM (Light) */}
      <section className="bg-mist text-ink py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <SectionHeader 
              eyebrow={dict.home.problem.eyebrow} 
              title={dict.home.problem.title} 
              theme="light"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12 items-center">
            {/* Expanded problem description */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal delay={0.2}>
                <p className="text-slate text-base md:text-lg leading-relaxed">
                  {dict.akuris.problemText}
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.3}>
                <div className="p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-800 flex items-start space-x-3">
                  <HelpCircle className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Important note for audiologists:</span> conventional manual molding presents clinical risks (e.g. pressure on the eardrum) and leads to an average remake rate of 8-12% due to shrinkage and distortion.
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Problem card grid */}
            <div className="lg:col-span-5 space-y-4">
              {[
                { title: "Silicone pressure", desc: "Cold chemical pastes expand, distorting soft tissue shapes." },
                { title: "Multi-day delays", desc: "Physical shipping adds days before manufacturing begins." },
                { title: "Manual variation", desc: "Results vary significantly between individual clinical practitioners." }
              ].map((card, i) => (
                <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                  <div className="bg-white border border-line rounded-xl p-5 shadow-sm flex items-start space-x-3.5">
                    <span className="h-5 w-5 rounded-full bg-red-50 text-red-600 font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">!</span>
                    <div>
                      <h4 className="font-heading text-sm font-bold text-ink mb-0.5">{card.title}</h4>
                      <p className="text-slate text-xs leading-normal">{card.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider Motif */}
      <ScanLine />

      {/* SECTION 3: SOLUTION (Dark) */}
      <section className="bg-ink text-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <SectionHeader 
              eyebrow={dict.akuris.steps.eyebrow} 
              title={dict.akuris.steps.title} 
              theme="dark"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { num: dict.akuris.steps.step1.num, title: dict.akuris.steps.step1.title, desc: dict.akuris.steps.step1.desc },
              { num: dict.akuris.steps.step2.num, title: dict.akuris.steps.step2.title, desc: dict.akuris.steps.step2.desc },
              { num: dict.akuris.steps.step3.num, title: dict.akuris.steps.step3.title, desc: dict.akuris.steps.step3.desc }
            ].map((step, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <div className="bg-ink-soft border border-white/5 rounded-2xl p-6 h-full space-y-4 hover:border-cyan/35 transition-colors group">
                  <div className="font-heading text-4xl font-extrabold text-cyan/20 group-hover:text-cyan/60 transition-colors">
                    {step.num}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider Motif */}
      <ScanLine />

      {/* SECTION 4: LIVE DEMO (Dark, Payoff Section) */}
      <section id="live-demo-section" className="bg-ink text-white py-24 relative overflow-hidden">
        {/* Abstract grids */}
        <div className="absolute inset-0 bg-grid-white/[0.01] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 space-y-12 relative z-10">
          
          <ScrollReveal delay={0.1}>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan block mb-3">
                {dict.akuris.demo.eyebrow}
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {dict.akuris.demo.title}
              </h2>
              <p className="mt-4 text-slate-300 text-sm md:text-base">
                {dict.akuris.demo.caption}
              </p>
            </div>
          </ScrollReveal>

          {/* Side by side media columns */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Live demo scan video placeholder */}
            <ScrollReveal delay={0.2} className="lg:col-span-6 flex">
              <div className="placeholder-box w-full rounded-2xl border border-white/10 p-6 flex flex-col justify-center items-center text-center relative overflow-hidden bg-ink/60 shadow-2xl min-h-[350px]">
                <div className="absolute inset-0 bg-gradient-to-t from-ink to-transparent" />
                <span className="text-xs font-mono text-cyan bg-cyan/5 border border-cyan/15 px-3 py-1 rounded-md mb-2 relative z-10">
                  [PLACEHOLDER: AKuris real-time scan video]
                </span>
                <p className="text-[10px] text-slate-400 max-w-xs leading-normal relative z-10">
                  10-second high definition silent video: probe scanning physical ear model, displaying immediate points rendering.
                </p>
              </div>
            </ScrollReveal>

            {/* Interactive canvas rotating ear-canal visualizer */}
            <ScrollReveal delay={0.3} className="lg:col-span-6 flex">
              <div className="w-full flex flex-col justify-between">
                <RotatingEarModel />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section Divider Motif */}
      <ScanLine />

      {/* SECTION 5: BENEFITS (Light) */}
      <section className="bg-white text-ink py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <SectionHeader 
              eyebrow={dict.home.benefits.eyebrow} 
              title={dict.home.benefits.title} 
              theme="light"
            />
          </ScrollReveal>

          {/* Benefits Grid */}
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

      {/* Section Divider Motif */}
      <ScanLine />

      {/* SECTION 6: APPLICATION EXAMPLES (Light) */}
      <section className="bg-mist text-ink py-24 border-t border-line">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <SectionHeader 
              eyebrow={dict.akuris.applications.eyebrow} 
              title={dict.akuris.applications.title} 
              theme="light"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: dict.akuris.applications.hearingAids.title, desc: dict.akuris.applications.hearingAids.desc },
              { title: dict.akuris.applications.monitors.title, desc: dict.akuris.applications.monitors.desc },
              { title: dict.akuris.applications.practices.title, desc: dict.akuris.applications.practices.desc }
            ].map((app, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <div className="bg-white border border-line rounded-2xl p-6 h-full hover:shadow-md transition-shadow">
                  <h3 className="font-heading text-lg font-bold text-ink mb-3">
                    {app.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">
                    {app.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider Motif */}
      <ScanLine />

      {/* SECTION 7: TRADE FAIRS (Dark) */}
      <section className="bg-ink-soft text-white py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan block mb-3">
                Events & Presence
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                {dict.akuris.futureFairs.title}
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-12 items-stretch">
            {/* Current Fair details */}
            <ScrollReveal delay={0.2} className="lg:col-span-7">
              <div className="bg-ink border border-white/5 rounded-2xl p-6 md:p-8 h-full flex flex-col justify-between">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-cyan uppercase tracking-wider bg-cyan/5 border border-cyan/15 px-3 py-1 rounded-full w-max block">
                    Featured Event
                  </span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                    EUHA 2025 – 69th International Congress of Hearing Aid Acousticians
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We will demonstrate AKuris live in Nuremberg. Meet the founders, physicists, and system engineers behind the technology.
                  </p>
                  <p className="text-xs font-semibold text-slate-300 font-mono flex items-center pt-2">
                    <span className="text-cyan mr-2">LOCATION:</span> Nuremberg, Booth 408 + Live Area
                  </p>
                </div>
                <div className="pt-8">
                  <a 
                    href="https://www.euha.org/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-2 text-cyan hover:text-white font-semibold text-sm transition-colors focus-ring"
                  >
                    <span>Official EUHA Website</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Future fair placeholder */}
            <ScrollReveal delay={0.3} className="lg:col-span-5">
              <div className="placeholder-box rounded-2xl p-6 h-full flex flex-col justify-center items-center text-center bg-ink/40 border border-white/5 min-h-[220px]">
                <span className="text-xs font-mono text-cyan bg-cyan/5 border border-cyan/15 px-3 py-1 rounded-md mb-2">
                  [PLACEHOLDER: Future trade fairs]
                </span>
                <p className="text-[10px] text-slate-400 max-w-xs leading-normal">
                  {dict.akuris.futureFairs.placeholderText}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Section Divider Motif */}
      <ScanLine />

      {/* SECTION 8: CONTACT / CONVERSION (Dark) */}
      <section className="bg-ink text-white py-24 relative overflow-hidden">
        {/* Holographic background glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 holographic-gradient rounded-full opacity-5 blur-[100px] pointer-events-none" />

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 text-center space-y-12">
          
          <ScrollReveal delay={0.1}>
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan block">
                {dict.akuris.ctas.eyebrow}
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                {dict.akuris.ctas.title}
              </h2>
            </div>
          </ScrollReveal>

          {/* Triple CTA buttons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6">
            
            {/* CTA 1: Book Demo */}
            <ScrollReveal delay={0.15}>
              <div className="bg-ink-soft border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-full hover:border-cyan/30 transition-colors">
                <div className="space-y-2 mb-6">
                  <h3 className="font-heading text-lg font-bold text-white">Book a Demo</h3>
                  <p className="text-slate-400 text-xs leading-normal">
                    Schedule a live virtual scan demonstration with our product experts.
                  </p>
                </div>
                <Link 
                  href={getLocalizedHref('/contact')} 
                  className="bg-cyan hover:bg-cyan-deep text-ink hover:text-white font-sans text-xs font-bold py-3 rounded-xl transition-all duration-200 focus-ring block"
                >
                  {dict.common.cta.bookDemo}
                </Link>
              </div>
            </ScrollReveal>

            {/* CTA 2: Download Spec Sheet Placeholder */}
            <ScrollReveal delay={0.25}>
              <div className="bg-ink-soft border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-full hover:border-cyan/30 transition-colors">
                <div className="space-y-2 mb-6">
                  <h3 className="font-heading text-lg font-bold text-white">Download Specs</h3>
                  <p className="text-slate-400 text-xs leading-normal">
                    Get detailed technical parameters, dimensions, and integration metrics.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-cyan bg-cyan/5 border border-cyan/15 px-2 py-0.5 rounded block w-max mx-auto">
                    [PLACEHOLDER: Spec PDF]
                  </span>
                  <Link 
                    href={getLocalizedHref('/contact')} 
                    className="border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-sans text-xs font-bold py-3 rounded-xl transition-all duration-200 focus-ring block"
                  >
                    {dict.common.cta.downloadSpec}
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA 3: Find Certified Audiologist Placeholder */}
            <ScrollReveal delay={0.35}>
              <div className="bg-ink-soft border border-white/5 p-6 rounded-2xl flex flex-col justify-between h-full hover:border-cyan/30 transition-colors">
                <div className="space-y-2 mb-6">
                  <h3 className="font-heading text-lg font-bold text-white">Partner Network</h3>
                  <p className="text-slate-400 text-xs leading-normal">
                    Locate clinical offices and hearing clinics utilizing AKuris scanners.
                  </p>
                </div>
                <div className="space-y-2">
                  <span className="text-[9px] font-mono text-cyan bg-cyan/5 border border-cyan/15 px-2 py-0.5 rounded block w-max mx-auto">
                    [PLACEHOLDER: Clinic map]
                  </span>
                  <Link 
                    href={getLocalizedHref('/contact')} 
                    className="border border-white/15 hover:border-white/30 bg-white/5 hover:bg-white/10 text-white font-sans text-xs font-bold py-3 rounded-xl transition-all duration-200 focus-ring block"
                  >
                    {dict.common.cta.findAudiologist}
                  </Link>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  )
}

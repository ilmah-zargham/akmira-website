import React from 'react'
import Link from 'next/link'
import { 
  Award, 
  MapPin, 
  Users, 
  Briefcase,
  ExternalLink,
  Info
} from 'lucide-react'
import { getDictionary } from '../../dictionaries'
import ScrollReveal from '@/components/ScrollReveal'
import ScanLine from '@/components/ScanLine'
import SectionHeader from '@/components/SectionHeader'
import PlaceholderBox from '@/components/PlaceholderBox'

export default async function CompanyPage({ params }: { params: Promise<{ lang: string }> }) {
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
        <div className="absolute inset-y-0 right-1/4 w-[1px] opacity-10">
          <ScanLine direction="vertical" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10 space-y-6">
          <ScrollReveal delay={0.1}>
            <span className="text-xs font-semibold tracking-widest uppercase text-cyan block">
              {dict.company.hero.eyebrow}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight tracking-tight">
              {dict.company.hero.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 2: MISSION VISION (Light) */}
      <section className="bg-mist text-ink py-24">
        <div className="max-w-[1200px] mx-auto px-6 max-w-4xl space-y-6">
          <ScrollReveal delay={0.1}>
            <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Mission Statement</span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-ink">
              {dict.company.mission.title}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-slate text-lg md:text-xl leading-relaxed font-medium">
              {dict.company.mission.text}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 3: LEADERS / FOUNDERS (Light) */}
      <section className="bg-white text-ink py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <SectionHeader 
              eyebrow="Leadership" 
              title={dict.company.founders.title} 
              theme="light"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            
            {/* Founder */}
            <ScrollReveal delay={0.15}>
              <div className="bg-mist border border-line rounded-3xl p-6 md:p-8 space-y-6 hover:shadow-sm transition-shadow flex flex-col justify-between h-full">
                <div className="space-y-6">
                  {/* Photo placeholder */}
                  <PlaceholderBox label="Founder Portrait" theme="light" aspectRatio="aspect-[3/4]" className="w-48 mx-auto" />

                  <div className="space-y-2 text-center">
                    <h3 className="font-heading text-xl font-bold text-ink">
                      {dict.company.founders.knuettel.name}
                    </h3>
                    <p className="text-xs font-mono font-bold tracking-wider text-cyan-deep uppercase">
                      {dict.company.founders.knuettel.role}
                    </p>
                  </div>

                  <p className="text-slate text-sm leading-relaxed">
                    {dict.company.founders.knuettel.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-line flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">Potsdam, Germany</span>
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-1.5 text-cyan-deep hover:text-ink font-semibold"
                    aria-label="LinkedIn profile of Founder (Demo)"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Co-founder */}
            <ScrollReveal delay={0.25}>
              <div className="bg-mist border border-line rounded-3xl p-6 md:p-8 space-y-6 hover:shadow-sm transition-shadow flex flex-col justify-between h-full">
                <div className="space-y-6">
                  {/* Photo placeholder */}
                  <PlaceholderBox label="Co-founder Portrait" theme="light" aspectRatio="aspect-[3/4]" className="w-48 mx-auto" />

                  <div className="space-y-2 text-center">
                    <h3 className="font-heading text-xl font-bold text-ink">
                      {dict.company.founders.filling.name}
                    </h3>
                    <p className="text-xs font-mono font-bold tracking-wider text-cyan-deep uppercase">
                      {dict.company.founders.filling.role}
                    </p>
                  </div>

                  <p className="text-slate text-sm leading-relaxed">
                    {dict.company.founders.filling.bio}
                  </p>
                </div>

                <div className="pt-6 border-t border-line flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">Potsdam, Germany</span>
                  <a 
                    href="https://www.linkedin.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center space-x-1.5 text-cyan-deep hover:text-ink font-semibold"
                    aria-label="LinkedIn profile of Co-founder (Demo)"
                  >
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 4: THE TEAM (Light) */}
      <section className="bg-mist text-ink py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal delay={0.1}>
              <SectionHeader 
                eyebrow="Organization" 
                title={dict.company.team.title} 
                theme="light"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-slate text-base md:text-lg leading-relaxed">
                {dict.company.team.text}
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3} className="pt-2">
              <Link 
                href={getLocalizedHref('/career')} 
                className="bg-cyan-deep hover:bg-ink text-white font-sans text-sm font-semibold px-6 py-3.5 rounded-xl inline-flex items-center space-x-2 transition-all focus-ring"
              >
                <Briefcase className="h-4 w-4" />
                <span>Join our team</span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Team photo grid placeholder */}
          <div className="lg:col-span-6">
            <ScrollReveal delay={0.2}>
              <PlaceholderBox label="Potsdam Team Photo Grid" theme="light" aspectRatio="aspect-video" />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 5: FUNDING AND COFINANCING (Dark) */}
      <section className="bg-ink text-white py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 space-y-12 relative z-10">
          
          <ScrollReveal delay={0.1}>
            <div className="max-w-3xl mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan block mb-3">
                Cofinancing & Support Compliance
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                European Union & State Financing
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Brandenburg EU text */}
            <ScrollReveal delay={0.15}>
              <div className="bg-ink-soft border border-white/5 p-6 md:p-8 rounded-2xl h-full flex flex-col justify-between space-y-6">
                <p className="text-slate-300 text-sm leading-relaxed">
                  AKmira Optronics GmbH is co-financed by the European Union and the State of Brandenburg. This funding supports our deep-tech developments in Potsdam, driving the validation and deployment of digital optical holography across clinical ear scanning platforms.
                </p>
                <div className="pt-4 border-t border-white/5 text-xs text-slate-500 font-mono">
                  {dict.common.labels.euBrandenburg}
                </div>
              </div>
            </ScrollReveal>

            {/* Compliance logo strip placeholder */}
            <ScrollReveal delay={0.25}>
              <div className="bg-ink-soft border border-white/5 p-6 md:p-8 rounded-2xl h-full flex flex-col justify-center items-center text-center space-y-4">
                <span className="text-xs font-semibold text-slate-200">Compliance Documentation</span>
                <p className="text-[10px] text-slate-400 max-w-xs leading-normal">
                  European Union (EFRE), State of Brandenburg, and BMBF funding guidelines.
                </p>
                <div className="flex space-x-4 pt-2">
                  <div className="h-10 w-24 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[8px] text-slate-400 uppercase">EU EFRE</div>
                  <div className="h-10 w-24 bg-white/5 border border-white/10 rounded flex items-center justify-center text-[8px] text-slate-400 uppercase">Brandenburg</div>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  )
}

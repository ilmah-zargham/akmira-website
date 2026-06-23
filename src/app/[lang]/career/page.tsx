import React from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Heart, 
  Coffee, 
  Compass, 
  Layers, 
  Check,
  Send
} from 'lucide-react'
import { getDictionary } from '../../dictionaries'
import ScrollReveal from '@/components/ScrollReveal'
import ScanLine from '@/components/ScanLine'
import SectionHeader from '@/components/SectionHeader'

export default async function CareerPage({ params }: { params: Promise<{ lang: string }> }) {
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
              Careers at AKmira
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight tracking-tight">
              {dict.career.hero.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              {dict.career.intro}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 2: PERKS (Light) */}
      <section className="bg-mist text-ink py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <SectionHeader 
              eyebrow="Benefits" 
              title={dict.career.perks.title} 
              theme="light"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: dict.career.perks.flexible, icon: <Clock className="h-5 w-5 text-cyan-deep" /> },
              { title: dict.career.perks.startup, icon: <Coffee className="h-5 w-5 text-cyan-deep" /> },
              { title: dict.career.perks.freedom, icon: <Compass className="h-5 w-5 text-cyan-deep" /> },
              { title: dict.career.perks.responsibility, icon: <Heart className="h-5 w-5 text-cyan-deep" /> },
              { title: dict.career.perks.canteen, icon: <Coffee className="h-5 w-5 text-cyan-deep" /> },
              { title: dict.career.perks.transport, icon: <Layers className="h-5 w-5 text-cyan-deep" /> },
              { title: dict.career.perks.ticket, icon: <Check className="h-5 w-5 text-cyan-deep" /> }
            ].map((perk, i) => (
              <ScrollReveal key={i} delay={0.05 + i * 0.05}>
                <div className="bg-white border border-line rounded-2xl p-6 h-full flex flex-col justify-between hover:shadow-sm transition-shadow">
                  <div className="h-10 w-10 bg-mist border border-line rounded-xl flex items-center justify-center text-cyan-deep mb-4">
                    {perk.icon}
                  </div>
                  <h3 className="font-heading text-sm font-bold text-ink leading-tight">
                    {perk.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 3: OPEN ROLES (Light) */}
      <section className="bg-white text-ink py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <SectionHeader 
              eyebrow="Opportunities" 
              title={dict.career.jobs.title} 
              theme="light"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 mt-12 max-w-4xl">
            {[
              {
                title: dict.career.jobs.student.title,
                dept: dict.career.jobs.student.dept,
                loc: dict.career.jobs.student.location,
                desc: dict.career.jobs.student.desc,
                placeholder: "[PLACEHOLDER: Student position details]"
              },
              {
                title: dict.career.jobs.optical.title,
                dept: dict.career.jobs.optical.dept,
                loc: dict.career.jobs.optical.location,
                desc: dict.career.jobs.optical.desc,
                placeholder: "[PLACEHOLDER: Optical systems position details]"
              },
              {
                title: dict.career.jobs.embedded.title,
                dept: dict.career.jobs.embedded.dept,
                loc: dict.career.jobs.embedded.location,
                desc: dict.career.jobs.embedded.desc,
                placeholder: "[PLACEHOLDER: Embedded developer position details]"
              }
            ].map((job, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <div className="bg-mist border border-line rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-cyan-deep/30 transition-colors">
                  <div className="space-y-3 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-cyan-deep bg-cyan/5 border border-cyan/15 px-2.5 py-0.5 rounded-full uppercase">
                        {job.dept}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider text-slate-500 bg-white border border-line px-2.5 py-0.5 rounded-full uppercase">
                        {job.loc}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-ink">
                      {job.title}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed">
                      {job.desc}
                    </p>
                    <div className="text-[10px] text-slate-400 font-mono italic">
                      {job.placeholder}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link 
                      href={getLocalizedHref('/contact')} 
                      className="bg-cyan-deep hover:bg-ink text-white font-sans text-xs font-semibold px-5 py-3 rounded-xl inline-flex items-center space-x-2 transition-colors focus-ring w-full md:w-auto text-center justify-center"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 4: APPLY CTA (Dark) */}
      <section className="bg-ink text-white py-24 text-center relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 space-y-6 relative z-10">
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight max-w-xl mx-auto leading-tight">
              Don't see an exact match for your skills?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-slate-300 text-sm md:text-base max-w-md mx-auto leading-relaxed">
              We are always looking for physicists, electronics experts, and IT specialists in deep tech. Send us an unsolicited application.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3} className="pt-4">
            <Link 
              href={getLocalizedHref('/contact')} 
              className="bg-cyan hover:bg-cyan-deep text-ink hover:text-white font-sans text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-200 focus-ring shadow-lg inline-flex items-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Submit spontaneous application [PLACEHOLDER]</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}

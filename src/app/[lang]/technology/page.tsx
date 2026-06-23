import React from 'react'
import Link from 'next/link'
import { 
  ArrowRight, 
  ChevronDown, 
  Activity, 
  Layers, 
  Maximize2, 
  Eye, 
  Shrink, 
  TrendingUp,
  Cpu,
  ShieldCheck,
  Compass,
  Info
} from 'lucide-react'
import { getDictionary } from '../../dictionaries'
import ScrollReveal from '@/components/ScrollReveal'
import ScanLine from '@/components/ScanLine'
import SectionHeader from '@/components/SectionHeader'

export default async function TechnologyPage({ params }: { params: Promise<{ lang: string }> }) {
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
              {dict.technology.advantages.eyebrow}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight tracking-tight">
              {dict.technology.hero.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 2: EXPLAINER & TECHNICAL EXPANDER (Light) */}
      <section className="bg-mist text-ink py-24">
        <div className="max-w-[1200px] mx-auto px-6 max-w-4xl space-y-12">
          
          {/* Plain explainer */}
          <ScrollReveal delay={0.1}>
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">Concept overview</span>
              <p className="font-sans text-xl md:text-2xl leading-relaxed text-ink font-medium">
                {dict.technology.explainer.plain}
              </p>
            </div>
          </ScrollReveal>

          {/* Expandable technical details (native details/summary for zero-JS semantic accessibility) */}
          <ScrollReveal delay={0.25}>
            <details className="group border border-line rounded-2xl bg-white overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-cyan transition-all">
              <summary className="flex justify-between items-center p-6 font-heading font-bold text-ink cursor-pointer list-none select-none hover:bg-mist/30 transition-colors focus-ring">
                <span className="flex items-center space-x-3">
                  <Info className="h-5 w-5 text-cyan-deep" />
                  <span>{dict.technology.explainer.technicalHeader}</span>
                </span>
                <ChevronDown className="h-5 w-5 text-slate transition-transform duration-300 group-open:-rotate-180" />
              </summary>
              <div className="px-6 pb-6 pt-2 text-slate text-sm md:text-base leading-relaxed border-t border-line bg-mist/10">
                <p>
                  {dict.technology.explainer.technical}
                </p>
              </div>
            </details>
          </ScrollReveal>

        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 3: ADVANTAGES GRID (Light) */}
      <section className="bg-white text-ink py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <SectionHeader 
              eyebrow={dict.technology.advantages.eyebrow} 
              title={dict.technology.advantages.title} 
              theme="light"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[
              { text: dict.technology.advantages.mini, icon: <Shrink className="h-5 w-5 text-cyan-deep" /> },
              { text: dict.technology.advantages.refocus, icon: <Eye className="h-5 w-5 text-cyan-deep" /> },
              { text: dict.technology.advantages.stitching, icon: <Layers className="h-5 w-5 text-cyan-deep" /> },
              { text: dict.technology.advantages.distance, icon: <Maximize2 className="h-5 w-5 text-cyan-deep" /> },
              { text: dict.technology.advantages.subsurface, icon: <Activity className="h-5 w-5 text-cyan-deep" /> },
              { text: dict.technology.advantages.microscope, icon: <Compass className="h-5 w-5 text-cyan-deep" /> }
            ].map((adv, i) => (
              <ScrollReveal key={i} delay={0.05 + i * 0.05}>
                <div className="bg-mist border border-line rounded-2xl p-6 flex items-start space-x-4 h-full hover:border-cyan-deep/30 transition-colors">
                  <div className="p-3 bg-white border border-line rounded-xl flex-shrink-0 text-cyan-deep">
                    {adv.icon}
                  </div>
                  <div className="pt-2">
                    <h3 className="font-heading text-base font-bold text-ink leading-tight">
                      {adv.text}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 4: CAMERA ROADMAP (Dark) */}
      <section className="bg-ink text-white py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
          <ScrollReveal delay={0.1}>
            <SectionHeader 
              eyebrow={dict.technology.roadmap.eyebrow} 
              title={dict.technology.roadmap.title} 
              theme="dark"
            />
          </ScrollReveal>

          {/* Timeline */}
          <div className="relative mt-20">
            {/* Timeline center line for desktop */}
            <div className="absolute top-[35px] left-[10%] right-[10%] h-[1px] bg-white/10 hidden lg:block" />
            <div className="absolute top-[35px] left-[10%] w-[40%] h-[1px] holographic-gradient hidden lg:block" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              
              {/* GEN 1 */}
              <ScrollReveal delay={0.15}>
                <div className="space-y-4 lg:text-center flex lg:flex-col items-start lg:items-center space-x-4 lg:space-x-0">
                  {/* Timeline circle icon */}
                  <div className="h-[70px] w-[70px] rounded-full bg-cyan/15 border border-cyan/40 flex items-center justify-center flex-shrink-0 relative shadow-[0_0_15px_rgba(25,201,216,0.15)] mb-2">
                    <span className="text-xs font-mono font-bold text-cyan">GEN 1</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {dict.technology.roadmap.gen1.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs lg:mx-auto">
                      {dict.technology.roadmap.gen1.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* GEN 2 */}
              <ScrollReveal delay={0.25}>
                <div className="space-y-4 lg:text-center flex lg:flex-col items-start lg:items-center space-x-4 lg:space-x-0">
                  {/* Timeline circle icon */}
                  <div className="h-[70px] w-[70px] rounded-full bg-cyan/20 border border-cyan flex items-center justify-center flex-shrink-0 relative shadow-[0_0_20px_rgba(25,201,216,0.3)] mb-2">
                    <span className="text-xs font-mono font-bold text-white">GEN 2</span>
                    {/* Active highlight */}
                    <span className="absolute -top-1 -right-1 h-3 w-3 bg-cyan rounded-full border-2 border-ink animate-pulse" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-bold text-white flex items-center lg:justify-center">
                      <span>{dict.technology.roadmap.gen2.title}</span>
                      <span className="ml-2 text-[9px] font-mono tracking-widest text-cyan bg-cyan/10 px-2 py-0.5 rounded border border-cyan/20">CURRENT</span>
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed max-w-xs lg:mx-auto">
                      {dict.technology.roadmap.gen2.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* GEN 3 */}
              <ScrollReveal delay={0.35}>
                <div className="space-y-4 lg:text-center flex lg:flex-col items-start lg:items-center space-x-4 lg:space-x-0">
                  {/* Timeline circle icon */}
                  <div className="h-[70px] w-[70px] rounded-full bg-violet/15 border border-violet/30 flex items-center justify-center flex-shrink-0 relative mb-2">
                    <span className="text-xs font-mono font-bold text-violet-300">GEN 3</span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-heading text-lg font-bold text-white">
                      {dict.technology.roadmap.gen3.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs lg:mx-auto">
                      {dict.technology.roadmap.gen3.desc}
                    </p>
                    <div className="pt-2">
                      <span className="text-[10px] font-mono text-cyan bg-cyan/5 border border-cyan/15 px-2 py-0.5 rounded">
                        [PLACEHOLDER: Golden Eye Render]
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>

        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 5: FUTURE APPLICATIONS (Light) */}
      <section className="bg-mist text-ink py-24 border-b border-line">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <SectionHeader 
              eyebrow={dict.technology.roadmap.eyebrow} 
              title={dict.technology.applications.title} 
              theme="light"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: dict.technology.applications.endoscopy.title, desc: dict.technology.applications.endoscopy.desc, tag: "Medical 3D Endoscopy" },
              { title: dict.technology.applications.security.title, desc: dict.technology.applications.security.desc, tag: "Security Biometrics" },
              { title: dict.technology.applications.zoom.title, desc: dict.technology.applications.zoom.desc, tag: "Long-Range Zoom" }
            ].map((app, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <div className="bg-white border border-line rounded-2xl p-6 h-full flex flex-col justify-between hover:shadow-md transition-shadow">
                  <div className="space-y-4">
                    <span className="text-[9px] font-mono font-bold tracking-widest text-slate-400 uppercase">
                      {app.tag}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-ink">
                      {app.title}
                    </h3>
                    <p className="text-slate text-sm leading-relaxed">
                      {app.desc}
                    </p>
                  </div>
                  <div className="pt-6">
                    <span className="text-[9px] font-mono text-cyan-deep bg-cyan/5 border border-cyan/15 px-2 py-0.5 rounded">
                      [PLACEHOLDER: Camera concept render]
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 6: CLOSE CTA (Dark) */}
      <section className="bg-ink text-white py-24 text-center relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 space-y-6 relative z-10">
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight max-w-xl mx-auto">
              Want to see our licensing and platform model?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2} className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-sm sm:max-w-none mx-auto pt-4">
            <Link 
              href={getLocalizedHref('/contact')} 
              className="bg-cyan hover:bg-cyan-deep text-ink hover:text-white font-sans text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-200 focus-ring shadow-lg"
            >
              Contact our engineering team
            </Link>
            <Link 
              href={getLocalizedHref('/company')} 
              className="border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white font-sans text-sm font-semibold px-8 py-4 rounded-xl transition-all duration-200 focus-ring"
            >
              About the founders
            </Link>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}

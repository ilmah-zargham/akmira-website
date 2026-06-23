import React from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Info,
  Compass
} from 'lucide-react'
import { getDictionary } from '../../dictionaries'
import ScrollReveal from '@/components/ScrollReveal'
import ScanLine from '@/components/ScanLine'
import SectionHeader from '@/components/SectionHeader'
import ContactForm from './ContactForm'

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const dict = await getDictionary(lang as 'en' | 'de')

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
              Contact us
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold max-w-4xl leading-tight tracking-tight">
              {dict.contact.hero.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 2: CONTENT & FORM (Light) */}
      <section className="bg-mist text-ink py-24">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info details */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal delay={0.1}>
              <SectionHeader 
                eyebrow="Coordinates" 
                title={dict.contact.details.title} 
                theme="light"
                className="mb-6"
              />
            </ScrollReveal>

            {/* Telephone & Email card */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-line rounded-2xl p-6 space-y-4 shadow-sm">
                <a 
                  href="mailto:info@akmira-optronics.de" 
                  className="flex items-center space-x-4 p-2 hover:bg-mist/50 rounded-xl transition-colors focus-ring"
                >
                  <div className="h-10 w-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan-deep flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase text-slate-400">Email</span>
                    <span className="text-sm font-bold text-ink">info@akmira-optronics.de</span>
                  </div>
                </a>

                <a 
                  href="tel:+490331982231-0" 
                  className="flex items-center space-x-4 p-2 hover:bg-mist/50 rounded-xl transition-colors focus-ring"
                >
                  <div className="h-10 w-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan-deep flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono font-bold uppercase text-slate-400">Telephone</span>
                    <span className="text-sm font-bold text-ink">+49 (0)331 982231-0</span>
                  </div>
                </a>
              </div>
            </ScrollReveal>

            {/* Address Relocation card */}
            <ScrollReveal delay={0.3}>
              <div className="bg-white border border-line rounded-2xl p-6 space-y-4 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center text-cyan-deep flex-shrink-0 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <span className="block text-[10px] font-mono font-bold uppercase text-slate-400">Office Address</span>
                    <p className="text-sm text-ink leading-relaxed font-semibold">
                      AKmira Optronics GmbH<br />
                      Am Luftschiffhafen 1<br />
                      14471 Potsdam, Germany
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-cyan/5 border border-cyan/15 text-xs text-slate space-y-2">
                  <div className="flex items-center space-x-1.5 text-cyan-deep font-bold uppercase tracking-wider">
                    <Info className="h-4 w-4" />
                    <span>Relocation Notice</span>
                  </div>
                  <p className="leading-relaxed">
                    {dict.common.footer.addressNotice}
                  </p>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Right: Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.2}>
              <ContactForm dict={dict} />
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Section Divider */}
      <ScanLine />

      {/* SECTION 3: MAP PLACEHOLDER (Light) */}
      <section className="bg-white text-ink py-24 border-b border-line">
        <div className="max-w-[1200px] mx-auto px-6">
          <ScrollReveal delay={0.1}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-cyan-deep block mb-3">
                Location
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold tracking-tight text-ink">
                Our base at Luftschiffhafen Potsdam
              </h2>
            </div>
          </ScrollReveal>

          {/* Map box placeholder */}
          <ScrollReveal delay={0.25}>
            <div className="placeholder-box w-full h-[400px] rounded-3xl border border-line bg-ink/5 flex flex-col justify-center items-center text-center p-6 overflow-hidden">
              <div className="h-12 w-12 rounded-full border border-cyan-deep/30 flex items-center justify-center mb-3 bg-white shadow-sm">
                <Compass className="h-6 w-6 text-cyan-deep animate-pulse" />
              </div>
              <span className="text-xs font-mono text-cyan-deep bg-cyan/5 border border-cyan/15 px-3 py-1 rounded-md mb-2">
                [PLACEHOLDER: Embedded Office Map]
              </span>
              <p className="text-[10px] text-slate-400 max-w-xs leading-normal">
                Google Map overlay centering Potsdam, Am Luftschiffhafen 1 (effective March 1, 2026).
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  )
}

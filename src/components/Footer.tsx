'use client'

import React from 'react'
import Link from 'next/link'

interface FooterProps {
  lang: 'en' | 'de'
  dict: any
}

export default function Footer({ lang, dict }: FooterProps) {
  const getLocalizedHref = (path: string) => {
    if (lang === 'de') return `/de${path}`
    return path
  }

  return (
    <footer className="bg-ink text-white border-t border-white/5 pt-16 pb-8" aria-label="Global Footer">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-4">
          <Link 
            href={getLocalizedHref('/')} 
            className="flex items-center space-x-2 font-heading font-bold text-xl text-white tracking-tight focus-ring rounded-lg w-max"
          >
            <span className="h-7 w-7 rounded-lg holographic-gradient flex items-center justify-between p-1.5" aria-hidden="true">
              <span className="h-full w-full bg-ink rounded-[4px] flex items-center justify-center font-heading text-[10px] text-cyan">AK</span>
            </span>
            <span>
              mira<span className="text-cyan text-sm font-light font-sans ml-1">Optronics</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
            {dict.common.footer.mission}
          </p>
        </div>

        {/* Navigation Column */}
        <div className="md:col-span-2 space-y-4">
          <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-cyan">
            Navigation
          </h4>
          <ul className="space-y-2.5 text-sm" role="list">
            <li>
              <Link href={getLocalizedHref('/akuris')} className="text-slate-400 hover:text-white transition-colors focus-ring rounded">
                {dict.common.nav.akuris}
              </Link>
            </li>
            <li>
              <Link href={getLocalizedHref('/technology')} className="text-slate-400 hover:text-white transition-colors focus-ring rounded">
                {dict.common.nav.technology}
              </Link>
            </li>
            <li>
              <Link href={getLocalizedHref('/company')} className="text-slate-400 hover:text-white transition-colors focus-ring rounded">
                {dict.common.nav.company}
              </Link>
            </li>
            <li>
              <Link href={getLocalizedHref('/career')} className="text-slate-400 hover:text-white transition-colors focus-ring rounded">
                {dict.common.nav.career}
              </Link>
            </li>
            <li>
              <Link href={getLocalizedHref('/contact')} className="text-slate-400 hover:text-white transition-colors focus-ring rounded">
                {dict.common.nav.contact}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-cyan">
            {dict.common.footer.contact}
          </h4>
          <address className="not-italic text-sm text-slate-400 space-y-2.5">
            <p>
              AKmira Optronics GmbH (Concept)<br />
              Example Street 1<br />
              14471 Potsdam, Germany
            </p>
            <p className="pt-2">
              <span className="text-slate-400">hello@example.com</span>
              <br />
              <span className="text-slate-400">+49 (0)000 000000</span>
            </p>
          </address>
        </div>

        {/* Credibility Logos Column */}
        <div className="md:col-span-3 space-y-4">
          <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-cyan">
            Credibility & Support
          </h4>
          <div className="grid grid-cols-2 gap-3" role="region" aria-label="Funding and Awards logos">
            {/* Logo Slot 1: EU Co-funding */}
            <div className="placeholder-box h-12 rounded-lg flex flex-col items-center justify-center p-2 text-center" aria-label="EU Co-funding logo placeholder">
              <span className="text-[8px] font-mono text-slate-500 block uppercase">Co-funded by</span>
              <span className="text-[9px] font-bold text-white leading-tight">European Union</span>
            </div>
            {/* Logo Slot 2: Innovation Award */}
            <div className="placeholder-box h-12 rounded-lg flex flex-col items-center justify-center p-2 text-center" aria-label="Innovation Award Berlin Brandenburg logo placeholder">
              <span className="text-[8px] font-mono text-slate-500 block uppercase">1st Place</span>
              <span className="text-[9px] font-bold text-cyan leading-tight">Innovation Award</span>
            </div>
            {/* Logo Slot 3: Brandenburg State */}
            <div className="placeholder-box h-12 rounded-lg flex flex-col items-center justify-center p-2 text-center" aria-label="Brandenburg State co-financing logo placeholder">
              <span className="text-[8px] font-mono text-slate-500 block uppercase">Co-financed</span>
              <span className="text-[9px] font-bold text-white leading-tight">Brandenburg</span>
            </div>
            {/* Logo Slot 4: BMBF Support */}
            <div className="placeholder-box h-12 rounded-lg flex flex-col items-center justify-center p-2 text-center" aria-label="BMBF funding logo placeholder">
              <span className="text-[8px] font-mono text-slate-500 block uppercase">BMBF</span>
              <span className="text-[9px] font-bold text-slate-400 leading-tight">Support</span>
            </div>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-[1200px] mx-auto px-6 mt-12 pt-8 border-t border-white/5 space-y-4">
        <p className="text-[11px] text-slate-500 leading-relaxed text-center md:text-left">
          This is an independent, self-initiated concept redesign created as a personal UX/design portfolio project. It is not affiliated with, endorsed by, or the official website of AKmira Optronics GmbH. All company references are used for illustrative design purposes only.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            {dict.common.footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  )
}

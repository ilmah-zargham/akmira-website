'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'

interface HeaderProps {
  lang: 'en' | 'de'
  dict: any
}

export default function Header({ lang, dict }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const navLinks = [
    { name: dict.common.nav.akuris, href: '/akuris' },
    { name: dict.common.nav.technology, href: '/technology' },
    { name: dict.common.nav.company, href: '/company' },
    { name: dict.common.nav.career, href: '/career' },
    { name: dict.common.nav.contact, href: '/contact' },
  ]

  // Localized path helper
  const getLocalizedHref = (path: string) => {
    if (lang === 'de') {
      return `/de${path}`
    }
    return path
  }

  // Get path for the other language
  const getAlternateLangPath = () => {
    let cleanPath = pathname
    if (pathname.startsWith('/en/')) {
      cleanPath = pathname.substring(3)
    } else if (pathname === '/en') {
      cleanPath = '/'
    } else if (pathname.startsWith('/de/')) {
      cleanPath = pathname.substring(3)
    } else if (pathname === '/de') {
      cleanPath = '/'
    }

    if (lang === 'en') {
      if (cleanPath === '/') return '/de'
      return `/de${cleanPath}`
    } else {
      return cleanPath
    }
  }

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-cyan text-ink px-4 py-2 rounded-lg font-semibold z-50">
        Skip to main content
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? 'bg-ink/95 border-b border-white/5 backdrop-blur-md py-4' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link 
            href={getLocalizedHref('/')} 
            className="flex items-center space-x-2 font-heading font-bold text-xl text-white tracking-tight focus-ring rounded-lg"
            aria-label="AKmira Optronics Home"
          >
            <span className="h-7 w-7 rounded-lg holographic-gradient flex items-center justify-between p-1.5 shadow-[0_0_10px_rgba(25,201,216,0.3)]" aria-hidden="true">
              <span className="h-full w-full bg-ink rounded-[4px] flex items-center justify-center font-heading text-[10px] text-cyan">AK</span>
            </span>
            <span>
              mira<span className="text-cyan text-sm font-light font-sans ml-1">Optronics</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const localizedHref = getLocalizedHref(link.href)
              // Active path match check
              const isActive = pathname === localizedHref || 
                (lang === 'en' && pathname === `/en${link.href}`) ||
                (lang === 'de' && pathname === `/de${link.href}`)

              return (
                <Link
                  key={link.href}
                  href={localizedHref}
                  className={`relative text-sm font-medium tracking-wide transition-colors py-1 focus-ring rounded ${
                    isActive ? 'text-cyan font-semibold' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {link.name}
                  {/* Hover Nav underline micro-interaction */}
                  <span className={`absolute bottom-0 left-0 w-full h-[1px] holographic-gradient origin-left transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                  }`} />
                </Link>
              )
            })}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Lang Toggle */}
            <Link
              href={getAlternateLangPath()}
              className="flex items-center space-x-1.5 text-xs font-semibold tracking-wider text-slate-300 hover:text-white uppercase transition-colors focus-ring rounded py-1 px-2 border border-white/5 bg-white/5"
              aria-label={`Switch to ${lang === 'en' ? 'German' : 'English'}`}
            >
              <Globe className="h-3.5 w-3.5 text-cyan" />
              <span>{lang === 'en' ? 'DE' : 'EN'}</span>
            </Link>

            {/* Book a Demo CTA */}
            <Link
              href={getLocalizedHref('/contact')}
              className="bg-cyan hover:bg-cyan-deep text-ink hover:text-white font-sans text-xs md:text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 transform hover:-translate-y-[1px] active:translate-y-0 focus-ring shadow-[0_4px_12px_rgba(25,201,216,0.15)]"
            >
              {dict.common.cta.bookDemo}
            </Link>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link
              href={getAlternateLangPath()}
              className="flex items-center space-x-1 text-xs font-semibold text-slate-300 hover:text-white uppercase transition-colors focus-ring rounded p-1.5 border border-white/5 bg-white/5"
              aria-label={`Switch to ${lang === 'en' ? 'German' : 'English'}`}
            >
              <Globe className="h-3 w-3 text-cyan" />
              <span>{lang === 'en' ? 'DE' : 'EN'}</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-cyan p-1.5 focus-ring rounded-lg bg-white/5 border border-white/5"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-30 bg-ink flex flex-col justify-center px-8 transition-all duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col space-y-6 text-center" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={getLocalizedHref(link.href)}
              onClick={() => setMobileMenuOpen(false)}
              className="font-heading text-2xl font-bold text-white hover:text-cyan focus-ring py-2 rounded-lg"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8 border-t border-white/5 flex flex-col space-y-4">
            <Link
              href={getLocalizedHref('/contact')}
              onClick={() => setMobileMenuOpen(false)}
              className="bg-cyan text-ink font-sans font-semibold py-4 rounded-xl text-center focus-ring block"
            >
              {dict.common.cta.bookDemo}
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}

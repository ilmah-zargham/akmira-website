import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { getDictionary } from '../dictionaries'
import { notFound } from 'next/navigation'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }]
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const isDe = lang === 'de'

  return {
    title: isDe 
      ? 'AKmira Optronics GmbH | Medizinische 3D-Holografie der nächsten Generation'
      : 'AKmira Optronics GmbH | Next Generation Medical 3D Holographic Imaging',
    description: isDe
      ? 'Pionierarbeit bei digitalen optischen Holografiekameras für berührungsloses medizinisches 3D-Scannen und Endoskopie.'
      : 'Pioneering digital optical holography cameras for non-contact medical 3D scanning and endoscopy.',
    icons: {
      icon: '/favicon.ico',
    },
    alternates: {
      languages: {
        'en-US': '/',
        'de-DE': '/de',
      },
    },
    openGraph: {
      title: 'AKmira Optronics GmbH',
      description: 'Next Generation Medical 3D Holographic Imaging',
      url: 'https://akmira-optronics.de',
      siteName: 'AKmira Optronics',
      images: [
        {
          url: '/images/og-share-placeholder.jpg', // Marked placeholder in PLACEHOLDERS.md
          width: 1200,
          height: 630,
          alt: 'AKmira Optronics 3D Ear Scanner',
        },
      ],
      locale: isDe ? 'de_DE' : 'en_US',
      type: 'website',
    },
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (lang !== 'en' && lang !== 'de') {
    notFound()
  }

  const dict = await getDictionary(lang as 'en' | 'de')

  return (
    <html lang={lang} className={`${spaceGrotesk.variable} ${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased text-ink bg-mist min-h-screen flex flex-col">
        <Header lang={lang as 'en' | 'de'} dict={dict} />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer lang={lang as 'en' | 'de'} dict={dict} />
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import './globals.css'
import LenisProvider from '@/components/providers/LenisProvider'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yofield.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Yofield · Studio créatif et digital',
    template: '%s | Yofield',
  },
  description:
    "Yofield est un studio créatif et digital qui assemble pour ses clients une marque complète : identité, site, communication, contenus et IA. Du brief au lancement public, en cycle court.",
  keywords: [
    'studio créatif',
    'studio digital',
    'branding',
    'création de site web',
    'identité de marque',
    'SEO',
    'agents IA',
    'production de contenus',
  ],
  authors: [{ name: 'Yofield Studio' }],
  creator: 'Yofield',
  publisher: 'Yofield',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Yofield',
    title: 'Yofield · Studio créatif et digital',
    description:
      "Là où votre marque trouve sa forme, sa voix et son terrain. Studio créatif et digital, du brief au lancement public en cycle court.",
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Yofield · Studio créatif et digital',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yofield · Studio créatif et digital',
    description:
      "Là où votre marque trouve sa forme, sa voix et son terrain.",
    images: ['/og/default.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#0F0F0E',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className="h-full">
      <body className="min-h-full flex flex-col antialiased bg-snow text-soil">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  )
}

import { Inter, Outfit } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { siteConfig } from '@/config/site';
import { analyticsConfig } from '@/config/analytics';
import { __BUILD_HASH_916__ } from '@/config/manifest';
import './globals.css';

// Google Fonts — self-hosted via next/font for zero layout shift
const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
});

// Next.js Metadata API — SEO tags, OG, Twitter, favicon
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
  },
  icons: {
    icon: '/brndo_logo.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        {/* Flaticon UIcons CDN */}
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/uicons-solid-rounded/css/uicons-solid-rounded.css"
        />
        <meta name="build-ref" content={__BUILD_HASH_916__} />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <span data-r916={__BUILD_HASH_916__} aria-hidden="true" style={{position:'absolute',width:0,height:0,overflow:'hidden',opacity:0,pointerEvents:'none'}} />
      </body>
      {/* Google Tag Manager */}
      <GoogleTagManager gtmId={analyticsConfig.gtmId} />
    </html>
  );
}

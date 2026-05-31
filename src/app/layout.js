import { EB_Garamond, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
  weight: ['400', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Vasu Goel — Architect & Developer Portfolio',
  description:
    'Full-stack developer building production-grade applications spanning web platforms, desktop apps, and AI-powered tools. Explore interactive 3D projects, skills, and experience.',
  keywords: [
    'Vasu Goel',
    'developer',
    'portfolio',
    'full-stack',
    'React',
    'Next.js',
    'Three.js',
    'Tauri',
    'AI',
  ],
  authors: [{ name: 'Vasu Goel' }],
  openGraph: {
    title: 'Vasu Goel — Architect & Developer Portfolio',
    description:
      'Full-stack developer building production-grade applications spanning web platforms, desktop apps, and AI-powered tools.',
    url: 'https://vasugoel.dev',
    siteName: 'Vasu Goel Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vasu Goel — Architect & Developer Portfolio',
    description:
      'Full-stack developer building production-grade applications spanning web platforms, desktop apps, and AI-powered tools.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${jetbrainsMono.variable} dark`}
    >
      <body>{children}</body>
    </html>
  );
}

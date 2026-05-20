import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Vasu Goel — Developer Portfolio',
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
    title: 'Vasu Goel — Developer Portfolio',
    description:
      'Full-stack developer building production-grade applications spanning web platforms, desktop apps, and AI-powered tools.',
    url: 'https://vasugoel.dev',
    siteName: 'Vasu Goel Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vasu Goel — Developer Portfolio',
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
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}

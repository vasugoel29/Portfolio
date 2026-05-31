'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { useMousePosition } from '@/hooks/useMousePosition';

import Navbar from '@/components/ui/Navbar';
import ScrollProgress from '@/components/ui/ScrollProgress';
import LoadingScreen from '@/components/layout/LoadingScreen';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/ui/Footer';

// Dynamic import for 3D components (client-only, no SSR)
const Scene = dynamic(() => import('@/components/canvas/Scene'), { ssr: false });
const ParticleField = dynamic(() => import('@/components/canvas/ParticleField'), { ssr: false });
const FloatingGeometry = dynamic(() => import('@/components/canvas/FloatingGeometry'), { ssr: false });

export default function HomePage() {
  const mouse = useMousePosition();

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />

      {/* 3D Background */}
      <Suspense fallback={null}>
        <Scene>
          <ParticleField count={1200} mouse={mouse} />
          <FloatingGeometry />
        </Scene>
      </Suspense>

      {/* Content Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { projects } from '@/lib/constants';

const projectImages = {
  1: '/projects/cras.png',
  2: '/projects/activity_tracker.png',
  3: '/projects/local_gpt.png',
  4: '/projects/iqac.png',
  5: '/projects/rbac.png',
};

const featuredDetails = {
  challenge: 'Architect a high-performance booking system to handle high-concurrency room allocation queues and database lock conflicts under heavy loads.',
  solution: 'Implemented a transaction-safe booking engine in PostgreSQL with real-time updates and an intuitive frontend layout.',
};

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  // Scroll Reveal hook-like effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            entry.target.classList.remove('reveal-hidden');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-hidden');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // 3D Tilt handlers
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -3; // Max 3 deg rotation
    const tiltY = ((x - centerX) / centerX) * 3;
    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.015, 1.015, 1.015)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const featuredProject = projects[0];
  const gridProjects = projects.slice(1);

  return (
    <section id="projects" className="section-padding relative border-b border-surface-variant">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <header className="mb-20">
          <p className="font-mono text-xs text-accent mb-4 tracking-widest uppercase">
            SYSTEMS // 02
          </p>
          <h2
            className="font-heading text-5xl md:text-6xl text-white font-extrabold tracking-tighter mb-6 leading-none"
            style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
          >
            Selected Works<span className="text-accent">.</span>
          </h2>
          <p className="font-mono text-sm text-muted max-w-2xl leading-relaxed">
            A curated selection of high-fidelity digital experiences, combining technical precision with avant-garde aesthetics. Engineered for the modern web.
          </p>
        </header>

        {/* Featured Case Study Card */}
        {featuredProject && (
          <div className="mb-16 reveal-hidden">
            <div
              className="group relative flex flex-col lg:flex-row gap-0 rounded-2xl overflow-hidden bg-[#1f2020]/40 backdrop-blur-xl border border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(198,243,17,0.1)] tilt-card"
              onMouseEnter={() => setHoveredId(featuredProject.id)}
              onMouseLeave={(e) => {
                setHoveredId(null);
                handleMouseLeave(e);
              }}
              onMouseMove={handleMouseMove}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Image Container */}
              <div
                className="w-full lg:w-7/12 relative overflow-hidden aspect-video lg:aspect-auto min-h-[300px]"
                style={{ transform: 'translateZ(15px)' }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#131313]/90 via-transparent to-transparent z-10 pointer-events-none" />
                <Image
                  src={projectImages[featuredProject.id]}
                  alt={featuredProject.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                  className="object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                />
                <div className="absolute top-6 left-6 z-20 bg-white/5 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-md flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent animate-pulse" />
                  <span className="font-mono text-[10px] text-white uppercase tracking-wider">
                    Featured Case Study
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div
                className="w-full lg:w-5/12 p-8 lg:p-12 flex flex-col justify-center relative z-20 bg-[#171717]/60 border-t lg:border-t-0 lg:border-l border-white/10"
                style={{ transform: 'translateZ(25px)' }}
              >
                <h3
                  className="text-3xl font-extrabold text-white mb-4 group-hover:text-accent transition-colors duration-300 font-heading"
                  style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
                >
                  {featuredProject.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-[10px] font-mono rounded-md bg-white/5 border border-white/10 text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent cursor-default"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 font-mono text-[12px] text-muted mb-8 leading-relaxed">
                  <div>
                    <strong className="text-white block mb-0.5">The Challenge:</strong>
                    {featuredDetails.challenge}
                  </div>
                  <div>
                    <strong className="text-white block mb-0.5">The Solution:</strong>
                    {featuredDetails.solution}
                  </div>
                </div>

                <div className="flex gap-6 mt-2">
                  <a
                    href={featuredProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent tracking-widest uppercase hover:translate-x-1 transition-transform"
                  >
                    [ CODE ]
                  </a>
                  {featuredProject.live && (
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-accent tracking-widest uppercase hover:translate-x-1 transition-transform"
                    >
                      [ LIVE DEMO ]
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gridProjects.map((project) => (
            <article key={project.id} className="reveal-hidden">
              <div
                className="group relative flex flex-col rounded-2xl overflow-hidden bg-[#1f2020]/40 backdrop-blur-xl border border-white/10 hover:border-accent/30 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(198,243,17,0.1)] tilt-card h-full"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={(e) => {
                  setHoveredId(null);
                  handleMouseLeave(e);
                }}
                onMouseMove={handleMouseMove}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Header Image */}
                <div
                  className="h-60 relative overflow-hidden border-b border-white/10"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  <Image
                    src={projectImages[project.id]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-in-out"
                  />
                  <span className="absolute top-4 right-4 z-20 font-mono text-[10px] text-surface-variant group-hover:text-accent transition-colors">
                    00{project.id}
                  </span>
                </div>

                {/* Content */}
                <div
                  className="p-8 flex flex-col flex-grow relative z-20 bg-[#171717]/60"
                  style={{ transform: 'translateZ(20px)' }}
                >
                  <h3
                    className="text-2xl font-extrabold text-white mb-2 group-hover:text-accent transition-colors duration-300 font-heading"
                    style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-accent uppercase tracking-wider mb-4">
                    {project.subtitle}
                  </p>
                  <p className="font-mono text-xs text-muted mb-6 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[10px] font-mono rounded-md bg-white/5 border border-white/10 text-muted transition-all duration-300 hover:border-accent/40 hover:text-accent cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 border-t border-white/10 pt-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted hover:text-accent tracking-widest uppercase hover:translate-x-1 transition-all"
                    >
                      [ CODE ]
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted hover:text-accent tracking-widest uppercase hover:translate-x-1 transition-all"
                      >
                        [ LIVE DEMO ]
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

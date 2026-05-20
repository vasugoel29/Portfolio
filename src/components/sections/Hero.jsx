'use client';

import { useEffect, useRef, useState } from 'react';

const roles = [
  'Full-Stack Developer',
  'Systems Architect',
  'AI Engineer',
  'Desktop App Builder',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout;

    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--accent-secondary)]/10 rounded-full blur-[128px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span
            className="text-xs text-[var(--text-secondary)] tracking-wider uppercase"
            style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
          >
            Available for opportunities
          </span>
        </div>

        {/* Name */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-fade-in-up"
          style={{
            fontFamily: 'var(--font-space-grotesk, Space Grotesk, sans-serif)',
            animationDelay: '0.1s',
            animationFillMode: 'both',
          }}
        >
          <span className="text-[var(--text-primary)]">Vasu </span>
          <span className="gradient-text">Goel</span>
        </h1>

        {/* Typewriter Role */}
        <div
          className="h-10 mb-8 flex items-center justify-center animate-fade-in-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
        >
          <span
            className="text-xl md:text-2xl text-[var(--text-secondary)]"
            style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
          >
            {'> '}
            <span className="text-[var(--accent)]">{displayText}</span>
            <span className="animate-cursor text-[var(--accent)]">▊</span>
          </span>
        </div>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
        >
          Building production-grade applications spanning{' '}
          <span className="text-[var(--text-primary)]">web platforms</span>,{' '}
          <span className="text-[var(--text-primary)]">desktop apps</span>, and{' '}
          <span className="text-[var(--text-primary)]">AI-powered tools</span>.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          <button
            onClick={scrollToProjects}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] text-[var(--bg-primary)] font-semibold text-sm tracking-wide hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg shadow-[var(--accent)]/20"
            id="cta-projects"
          >
            View Projects
          </button>
          <a
            href={`#contact`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3.5 rounded-xl border border-white/10 text-[var(--text-primary)] font-semibold text-sm tracking-wide hover:border-[var(--accent)]/30 hover:bg-white/5 transition-all duration-300"
            id="cta-contact"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
        <span className="text-xs text-[var(--text-secondary)] tracking-widest uppercase">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-[var(--accent)] animate-bounce" />
        </div>
      </div>
    </section>
  );
}

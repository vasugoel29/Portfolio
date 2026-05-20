'use client';

import { useState, useEffect } from 'react';
import { navLinks, socialLinks } from '@/lib/constants';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeSection } = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass-strong py-3 shadow-lg shadow-black/20'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-xl font-bold tracking-tight group"
          style={{ fontFamily: 'var(--font-space-grotesk, Space Grotesk, sans-serif)' }}
        >
          <span className="text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors duration-300">
            V
          </span>
          <span className="text-[var(--accent)]">.</span>
          <span className="text-[var(--text-secondary)] text-sm ml-1 hidden sm:inline">
            goel
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-[var(--accent)] bg-[var(--accent)]/10'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
              }`}
            >
              {link.title}
            </button>
          ))}
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 rounded-lg text-sm font-medium border border-[var(--accent)]/30 text-[var(--accent)] hover:bg-[var(--accent)]/10 transition-all duration-300"
          >
            GitHub ↗
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
          id="mobile-menu-toggle"
        >
          <span
            className={`w-5 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${
              mobileOpen ? 'rotate-45 translate-y-1' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-5 h-0.5 bg-[var(--text-primary)] transition-all duration-300 ${
              mobileOpen ? '-rotate-45 -translate-y-1' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-strong mt-2 mx-4 rounded-xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-4 py-3 rounded-lg text-sm font-medium text-left transition-all duration-300 ${
                activeSection === link.id
                  ? 'text-[var(--accent)] bg-[var(--accent)]/10'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-white/5'
              }`}
            >
              {link.title}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

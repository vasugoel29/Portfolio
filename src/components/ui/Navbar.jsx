'use client';

import { useState, useEffect } from 'react';
import { navLinks } from '@/lib/constants';
import { useScrollProgress } from '@/hooks/useScrollProgress';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { activeSection } = useScrollProgress();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80; // height of sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#131313]/90 backdrop-blur-md border-surface-variant py-3'
          : 'bg-[#131313]/40 backdrop-blur-sm border-surface-variant/40 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-2xl font-bold tracking-tighter text-white transition-colors duration-300 hover:text-accent font-heading"
          style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
        >
          VASU GOEL
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-xs font-mono tracking-widest transition-all duration-200 border-b-2 py-1 ${
                activeSection === link.id
                  ? 'text-accent border-accent font-bold'
                  : 'text-muted border-transparent hover:text-accent hover:border-accent/40'
              }`}
            >
              {link.title}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary text-xs font-mono font-bold px-4 py-2 flex items-center gap-1.5"
          >
            CONTACT
            <span className="text-sm font-sans">→</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => handleNavClick('contact')}
            className="btn-primary text-xs font-mono font-bold px-3 py-1.5 flex items-center gap-1"
          >
            CONTACT
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
            id="mobile-menu-toggle"
          >
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-1' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-5 h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-1' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? 'max-h-96 opacity-100 border-b border-surface-variant' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#191919] px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`py-2 text-xs font-mono tracking-widest text-left transition-all duration-200 ${
                activeSection === link.id
                  ? 'text-accent font-bold'
                  : 'text-muted hover:text-white'
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

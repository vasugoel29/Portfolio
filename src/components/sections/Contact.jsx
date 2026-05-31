'use client';

import { useState } from 'react';
import { socialLinks } from '@/lib/constants';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative border-b border-surface-variant">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Column: Header & Intro */}
          <div>
            <p className="font-mono text-xs text-accent mb-4 tracking-widest">
              CONTACT // 06
            </p>
            <h2
              className="font-heading text-5xl sm:text-6xl md:text-7xl text-white font-extrabold uppercase leading-none mb-6 tracking-tighter"
              style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
            >
              INITIATE<br />SEQUENCE
            </h2>
            <p className="font-mono text-sm text-muted mb-10 max-w-md leading-relaxed">
              Available for freelance opportunities, full-time contracts, and interesting collaborations. Establish contact to discuss potential systems integration.
            </p>
            
            {/* Social Grid */}
            <div className="flex gap-4">
              <a
                href={socialLinks.email}
                className="w-12 h-12 border border-surface-variant flex items-center justify-center text-white hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300 bg-transparent"
                aria-label="Email"
                id="contact-social-email"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="1" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </a>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-surface-variant flex items-center justify-center text-white hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300 bg-transparent"
                aria-label="GitHub"
                id="contact-social-github"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 border border-surface-variant flex items-center justify-center text-white hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300 bg-transparent"
                aria-label="LinkedIn"
                id="contact-social-linkedin"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Column: Transmission Form */}
          <div className="card-border p-8 md:p-12 relative">
            <span className="absolute top-0 right-0 p-3 font-mono text-[10px] text-surface-variant">SECURE_COMM</span>
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="flex flex-col">
                <label className="font-mono text-[10px] text-accent mb-2 uppercase tracking-widest">
                  Identification
                </label>
                <input
                  required
                  type="text"
                  placeholder="Name or Alias"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="input-line pb-3 text-sm placeholder-surface-variant focus:outline-none"
                  style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-mono text-[10px] text-accent mb-2 uppercase tracking-widest">
                  Comm Link
                </label>
                <input
                  required
                  type="email"
                  placeholder="Email Address"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="input-line pb-3 text-sm placeholder-surface-variant focus:outline-none"
                  style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
                />
              </div>
              <div className="flex flex-col">
                <label className="font-mono text-[10px] text-accent mb-2 uppercase tracking-widest">
                  Transmission Payload
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="Project details or inquiry..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="input-line pb-3 text-sm placeholder-surface-variant focus:outline-none resize-none"
                  style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
                />
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary self-start font-mono text-xs font-bold px-8 py-4 flex items-center gap-2"
                id="contact-form-submit"
              >
                {status === 'sending' ? (
                  <>TRANSMITTING...</>
                ) : status === 'success' ? (
                  <>TRANSMITTED ✓</>
                ) : (
                  <>TRANSMIT DATA →</>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { socialLinks } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import TerminalWindow from '@/components/ui/TerminalWindow';

const contactMethods = [
  {
    label: 'GitHub',
    value: 'vasugoel29',
    href: socialLinks.github,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'vasugoel29@gmail.com',
    href: socialLinks.email,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Connect',
    href: socialLinks.linkedin,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[var(--accent-secondary)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <SectionHeading title="Get in Touch" subtitle="// contact" align="center" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Terminal CTA */}
          <TerminalWindow title="~/contact.sh">
            <div className="space-y-3 text-[var(--text-secondary)]">
              <p>
                <span className="text-green-400">$</span>{' '}
                <span className="text-[var(--text-primary)]">echo &quot;Let&apos;s build something.&quot;</span>
              </p>
              <p className="pl-4 text-[var(--accent)]">Let&apos;s build something.</p>
              <p className="mt-4">
                <span className="text-green-400">$</span>{' '}
                <span className="text-[var(--text-primary)]">cat availability.txt</span>
              </p>
              <p className="pl-4 leading-relaxed">
                Open to full-time roles, freelance projects,
                and interesting collaborations. Particularly
                interested in systems engineering, AI tools,
                and developer experience.
              </p>
              <p className="mt-4">
                <span className="text-green-400">$</span>{' '}
                <span className="animate-cursor text-[var(--accent)]">▊</span>
              </p>
            </div>
          </TerminalWindow>

          {/* Contact Links */}
          <div className="space-y-4">
            {contactMethods.map((method) => (
              <a
                key={method.label}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass rounded-xl p-5 flex items-center gap-4 group hover:border-[var(--border-hover)] transition-all duration-300 block"
                id={`contact-${method.label.toLowerCase()}`}
              >
                <div className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors duration-300">
                  {method.icon}
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">{method.label}</p>
                  <p className="text-[var(--text-primary)] font-medium group-hover:text-[var(--accent)] transition-colors duration-300">
                    {method.value}
                  </p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="ml-auto text-[var(--text-secondary)] group-hover:text-[var(--accent)] group-hover:translate-x-1 transition-all duration-300"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            ))}

            {/* Quick CTA */}
            <a
              href={socialLinks.email}
              className="block w-full mt-4 px-6 py-4 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] text-[var(--bg-primary)] font-semibold text-sm text-center tracking-wide hover:opacity-90 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-[var(--accent)]/20"
              id="contact-cta-email"
            >
              Send me an email →
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <div className="w-16 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/30 to-transparent mx-auto mb-6" />
        <p className="text-sm text-[var(--text-secondary)]">
          Designed & Built by{' '}
          <span className="text-[var(--accent)]">Vasu Goel</span>
        </p>
        <p
          className="text-xs text-[var(--text-secondary)]/50 mt-2"
          style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
        >
          Next.js · Three.js · GSAP · TailwindCSS
        </p>
      </div>
    </section>
  );
}

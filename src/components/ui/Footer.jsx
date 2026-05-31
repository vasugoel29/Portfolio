'use client';

import { socialLinks } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="w-full mt-24 border-t border-surface-variant relative z-10 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="font-mono text-xs text-white uppercase tracking-wider">
          ©2026 VASU GOEL / ARCHITECT
        </div>
        <div className="flex flex-wrap gap-8">
          <a
            className="font-mono text-xs text-muted hover:text-accent transition-all duration-300 hover:translate-x-1"
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GITHUB
          </a>
          <a
            className="font-mono text-xs text-muted hover:text-accent transition-all duration-300 hover:translate-x-1"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN
          </a>
          <a
            className="font-mono text-xs text-muted hover:text-accent transition-all duration-300 hover:translate-x-1"
            href={socialLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            TWITTER
          </a>
          <a
            className="font-mono text-xs text-muted hover:text-accent transition-all duration-300 hover:translate-x-1"
            href={socialLinks.email}
          >
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}

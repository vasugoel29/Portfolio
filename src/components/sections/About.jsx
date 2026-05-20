'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import TerminalWindow from '@/components/ui/TerminalWindow';
import GlassCard from '@/components/ui/GlassCard';

const stats = [
  { label: 'Projects Shipped', value: '5+' },
  { label: 'Technologies', value: '15+' },
  { label: 'GitHub Repos', value: '8' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" subtitle="// who am i" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Terminal Bio */}
          <TerminalWindow title="~/about.sh">
            <div className="space-y-3 text-[var(--text-secondary)]">
              <p>
                <span className="text-green-400">$</span>{' '}
                <span className="text-[var(--text-primary)]">cat bio.txt</span>
              </p>
              <p className="pl-4 leading-relaxed">
                I&apos;m a developer focused on building{' '}
                <span className="text-[var(--accent)]">systems that work</span>.
                From real-time campus platforms to local AI engines,
                I obsess over architecture, performance, and clean UX.
              </p>
              <p className="mt-4">
                <span className="text-green-400">$</span>{' '}
                <span className="text-[var(--text-primary)]">echo $FOCUS</span>
              </p>
              <p className="pl-4">
                <span className="text-[var(--accent)]">Full-Stack Web</span> ·{' '}
                <span className="text-[var(--accent-secondary)]">Desktop Apps</span> ·{' '}
                <span className="text-pink-400">Local AI Integration</span>
              </p>
              <p className="mt-4">
                <span className="text-green-400">$</span>{' '}
                <span className="text-[var(--text-primary)]">echo $STACK</span>
              </p>
              <p className="pl-4">
                React · Next.js · Node.js · PostgreSQL · Tauri · Ollama
              </p>
              <p className="mt-2">
                <span className="text-green-400">$</span>{' '}
                <span className="animate-cursor text-[var(--accent)]">▊</span>
              </p>
            </div>
          </TerminalWindow>

          {/* Stats + Info Cards */}
          <div className="space-y-6">
            <GlassCard>
              <h3
                className="text-lg font-semibold text-[var(--text-primary)] mb-4"
                style={{ fontFamily: 'var(--font-space-grotesk, Space Grotesk, sans-serif)' }}
              >
                What I Build
              </h3>
              <div className="space-y-3 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  🔧 <span className="text-[var(--text-primary)]">Production platforms</span> — real-time booking systems, admin dashboards, PWAs with cross-device sync.
                </p>
                <p>
                  🖥️ <span className="text-[var(--text-primary)]">Desktop applications</span> — native Tauri apps with Rust backends and streaming AI interfaces.
                </p>
                <p>
                  🤖 <span className="text-[var(--text-primary)]">Local AI tools</span> — privacy-first AI integrations using Ollama and Mistral for on-device intelligence.
                </p>
              </div>
            </GlassCard>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <GlassCard key={stat.label} className="text-center py-5">
                  <p
                    className="text-2xl font-bold gradient-text"
                    style={{ fontFamily: 'var(--font-space-grotesk, Space Grotesk, sans-serif)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-[var(--text-secondary)] mt-1">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import SectionHeading from '@/components/ui/SectionHeading';
import TerminalWindow from '@/components/ui/TerminalWindow';
import GlassCard from '@/components/ui/GlassCard';

const stats = [
  { label: 'PROJECTS SHIPPED', value: '5+' },
  { label: 'TECHNOLOGIES', value: '15+' },
  { label: 'GITHUB REPOS', value: '8' },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative border-b border-surface-variant">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" subtitle="MANIFESTO // 03" />

        <div className="grid md:grid-cols-2 gap-10">
          {/* Terminal Bio */}
          <TerminalWindow title="~/about.sh">
            <div className="space-y-4 text-muted">
              <p>
                <span className="text-accent">$</span>{' '}
                <span className="text-white">cat bio.txt</span>
              </p>
              <p className="pl-4 leading-relaxed">
                I&apos;m an architect-developer focused on building{' '}
                <span className="text-accent">production systems that scale</span>.
                From real-time campus platforms to local AI engines,
                I obsess over architecture, performance, and highly refined UX.
              </p>
              <p className="mt-4">
                <span className="text-accent">$</span>{' '}
                <span className="text-white">echo $FOCUS</span>
              </p>
              <p className="pl-4 text-accent font-semibold">
                Full-Stack Web · Desktop Apps · Local AI Integration
              </p>
              <p className="mt-4">
                <span className="text-accent">$</span>{' '}
                <span className="text-white">echo $STACK</span>
              </p>
              <p className="pl-4">
                React · Next.js · Node.js · PostgreSQL · Tauri · Ollama
              </p>
              <p className="mt-2">
                <span className="text-accent">$</span>{' '}
                <span className="animate-pulse inline-block text-accent">▊</span>
              </p>
            </div>
          </TerminalWindow>

          {/* Stats + Info Cards */}
          <div className="space-y-6">
            <GlassCard hover={true}>
              <h3
                className="text-2xl font-extrabold text-white mb-4"
                style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
              >
                What I Build
              </h3>
              <div className="space-y-4 text-xs font-mono text-muted leading-relaxed">
                <p>
                  🔧 <span className="text-white font-semibold">Production platforms</span> — real-time booking systems, admin dashboards, PWAs with cross-device sync.
                </p>
                <p>
                  🖥️ <span className="text-white font-semibold">Desktop applications</span> — native Tauri apps with Rust backends and streaming AI interfaces.
                </p>
                <p>
                  🤖 <span className="text-white font-semibold">Local AI tools</span> — privacy-first AI integrations using Ollama and Mistral for on-device intelligence.
                </p>
              </div>
            </GlassCard>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <GlassCard key={stat.label} className="text-center py-5 px-2" hover={true}>
                  <p
                    className="text-3xl font-extrabold text-accent"
                    style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[10px] font-mono text-muted mt-2 tracking-wider leading-none">{stat.label}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

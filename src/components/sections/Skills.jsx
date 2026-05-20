'use client';

import { skillCategories } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent)]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <SectionHeading title="Skills" subtitle="// tech stack" align="center" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, index) => (
            <GlassCard
              key={category.title}
              className="group"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl text-[var(--accent)] opacity-60 group-hover:opacity-100 transition-opacity">
                  {category.icon}
                </span>
                <h3
                  className="text-lg font-semibold text-[var(--text-primary)]"
                  style={{ fontFamily: 'var(--font-space-grotesk, Space Grotesk, sans-serif)' }}
                >
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs bg-white/5 text-[var(--text-secondary)] border border-white/5 hover:border-[var(--accent)]/20 hover:text-[var(--accent)] hover:bg-[var(--accent)]/5 transition-all duration-300 cursor-default"
                    style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

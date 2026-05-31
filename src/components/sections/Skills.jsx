'use client';

import { skillCategories } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import GlassCard from '@/components/ui/GlassCard';

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative border-b border-surface-variant">
      <div className="max-w-6xl mx-auto relative">
        <SectionHeading title="Technical Inventory" subtitle="RESEARCH // 04" align="center" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <GlassCard
              key={category.title}
              className="group"
              hover={true}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xl text-accent transition-transform duration-300 group-hover:scale-110">
                  {category.icon}
                </span>
                <h3
                  className="text-xl font-extrabold text-white"
                  style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
                >
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono text-muted tag-border border-surface-variant hover:border-accent hover:text-accent transition-all duration-200 cursor-default"
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

'use client';

import { experiences } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Experience" subtitle="// journey" />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-secondary)] to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-14">
                {/* Timeline Dot */}
                <div className="absolute left-[12px] top-1.5 w-[15px] h-[15px] rounded-full border-2 border-[var(--accent)] bg-[var(--bg-primary)]">
                  <div className="absolute inset-1 rounded-full bg-[var(--accent)] animate-pulse" />
                </div>

                {/* Card */}
                <div className="glass rounded-xl p-6 hover:border-[var(--border-hover)] transition-all duration-500">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3
                      className="text-lg font-bold text-[var(--text-primary)]"
                      style={{ fontFamily: 'var(--font-space-grotesk, Space Grotesk, sans-serif)' }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      className="text-xs text-[var(--accent)] px-3 py-1 rounded-full bg-[var(--accent)]/10 w-fit"
                      style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--accent-secondary)] mb-3 font-medium">
                    {exp.company}
                  </p>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-[var(--text-secondary)] border border-white/5"
                        style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

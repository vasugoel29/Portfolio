'use client';

import { experiences } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative border-b border-surface-variant">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Work History" subtitle="ARCHIVE // 05" />

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-surface-variant" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-14 animate-fade-in-up">
                {/* Timeline Dot (Square) */}
                <div className="absolute left-[14px] top-2.5 w-3 h-3 bg-accent transition-all duration-300 group-hover:scale-125" />

                {/* Card */}
                <div className="card-border p-8 transition-all duration-300 rounded-none hover:border-accent hover:shadow-[4px_4px_0px_0px_var(--accent)] hover:-translate-y-0.5">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
                    <h3
                      className="text-2xl font-extrabold text-white leading-tight tracking-tight"
                      style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
                    >
                      {exp.role}
                    </h3>
                    <span
                      className="text-xs font-mono text-accent px-2.5 py-1 border border-accent bg-accent/5 w-fit"
                      style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
                    >
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-xs font-mono text-white/80 uppercase tracking-widest mb-4">
                    {exp.company}
                  </p>

                  <p className="text-sm font-mono text-muted leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-[11px] font-mono text-muted tag-border border-surface-variant"
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

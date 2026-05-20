'use client';

import { useState } from 'react';
import { projects } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="Projects" subtitle="// featured work" />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-white/10"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                animationDelay: `${index * 0.1}s`,
                borderColor: hoveredId === project.id ? project.color + '40' : undefined,
                boxShadow: hoveredId === project.id ? `0 0 40px ${project.color}15` : undefined,
              }}
              id={`project-card-${project.id}`}
            >
              {/* Color Accent Bar */}
              <div
                className="h-1 w-full transition-all duration-500"
                style={{
                  background: `linear-gradient(90deg, ${project.color}, ${project.color}00)`,
                  opacity: hoveredId === project.id ? 1 : 0.3,
                }}
              />

              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-xl font-bold text-[var(--text-primary)] group-hover:text-white transition-colors"
                      style={{ fontFamily: 'var(--font-space-grotesk, Space Grotesk, sans-serif)' }}
                    >
                      {project.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mt-1">
                      {project.subtitle}
                    </p>
                  </div>
                  {/* Node indicator */}
                  <div
                    className="w-3 h-3 rounded-full mt-1.5 transition-all duration-300"
                    style={{
                      backgroundColor: project.color,
                      boxShadow: hoveredId === project.id ? `0 0 12px ${project.color}` : 'none',
                    }}
                  />
                </div>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-xs bg-white/5 text-[var(--text-secondary)] border border-white/5"
                      style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors duration-300 flex items-center gap-1.5"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <div
      className={`
        glass rounded-2xl p-6 transition-all duration-500
        ${hover ? 'hover:border-[var(--border-hover)] glow-border-hover hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

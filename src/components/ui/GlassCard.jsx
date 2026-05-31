'use client';

export default function GlassCard({ children, className = '', hover = true }) {
  return (
    <div
      className={`
        card-border p-8 transition-all duration-300 rounded-none
        ${hover ? 'hover:border-accent hover:shadow-[4px_4px_0px_0px_var(--accent)] hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

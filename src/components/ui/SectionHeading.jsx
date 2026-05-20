'use client';

export default function SectionHeading({ title, subtitle, align = 'left' }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      <p
        className="text-[var(--accent)] text-sm font-medium tracking-[0.2em] uppercase mb-3"
        style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
      >
        {subtitle}
      </p>
      <h2
        className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] leading-tight"
        style={{ fontFamily: 'var(--font-space-grotesk, Space Grotesk, sans-serif)' }}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}

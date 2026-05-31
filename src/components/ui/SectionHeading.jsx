'use client';

export default function SectionHeading({ title, subtitle, align = 'left' }) {
  return (
    <div className={`mb-16 ${align === 'center' ? 'text-center' : ''}`}>
      {subtitle && (
        <p
          className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-2"
          style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
        >
          {subtitle}
        </p>
      )}
      <h2
        className="text-4xl md:text-5xl font-extrabold text-white leading-none tracking-tight"
        style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-[2px] w-16 bg-accent ${
          align === 'center' ? 'mx-auto' : ''
        }`}
      />
    </div>
  );
}

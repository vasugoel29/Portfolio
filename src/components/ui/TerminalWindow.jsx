'use client';

export default function TerminalWindow({ title = 'terminal', children }) {
  return (
    <div className="card-border overflow-hidden rounded-none">
      {/* Window Chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-surface-variant bg-[#171717]/60">
        <span className="w-2.5 h-2.5 bg-red-500/80" />
        <span className="w-2.5 h-2.5 bg-yellow-500/80" />
        <span className="w-2.5 h-2.5 bg-green-500/80" />
        <span
          className="ml-3 text-[11px] font-mono text-muted uppercase tracking-wider"
          style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
        >
          {title}
        </span>
      </div>
      {/* Content */}
      <div
        className="p-6 text-[13px] font-mono leading-relaxed"
        style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
      >
        {children}
      </div>
    </div>
  );
}

'use client';

export default function TerminalWindow({ title = 'terminal', children }) {
  return (
    <div className="glass rounded-xl overflow-hidden">
      {/* Window Chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
        <span className="terminal-dot bg-red-500/80" />
        <span className="terminal-dot bg-yellow-500/80" />
        <span className="terminal-dot bg-green-500/80" />
        <span
          className="ml-3 text-xs text-[var(--text-secondary)]"
          style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
        >
          {title}
        </span>
      </div>
      {/* Content */}
      <div
        className="p-5 text-sm leading-relaxed"
        style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
      >
        {children}
      </div>
    </div>
  );
}

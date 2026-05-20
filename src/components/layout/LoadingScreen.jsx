'use client';

import { useState, useEffect } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 400);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[var(--bg-primary)] flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="mb-8">
        <h1
          className="text-3xl font-bold tracking-tight"
          style={{ fontFamily: 'var(--font-space-grotesk, Space Grotesk, sans-serif)' }}
        >
          <span className="text-[var(--text-primary)]">V</span>
          <span className="text-[var(--accent)]">.</span>
        </h1>
      </div>

      {/* Progress Bar */}
      <div className="w-48 h-0.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] rounded-full transition-all duration-200"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading Text */}
      <p
        className="mt-4 text-xs text-[var(--text-secondary)] tracking-widest"
        style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
      >
        INITIALIZING
      </p>
    </div>
  );
}

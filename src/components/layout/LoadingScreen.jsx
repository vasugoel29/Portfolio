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
      className={`fixed inset-0 z-[9999] bg-[#131313] flex flex-col items-center justify-center transition-opacity duration-500 ${
        progress >= 100 ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Logo */}
      <div className="mb-8">
        <h1
          className="text-4xl font-extrabold tracking-tighter text-white uppercase font-heading"
          style={{ fontFamily: 'var(--font-eb-garamond, EB Garamond, serif)' }}
        >
          VASU GOEL
        </h1>
      </div>

      {/* Progress Bar */}
      <div className="w-56 h-[3px] bg-[#1a1a1a] border border-surface-variant overflow-hidden rounded-none">
        <div
          className="h-full bg-accent transition-all duration-200"
          style={{ width: `${Math.min(progress, 100)}%` }}
        />
      </div>

      {/* Loading Text */}
      <p
        className="mt-4 text-[10px] text-accent font-mono tracking-[0.2em]"
        style={{ fontFamily: 'var(--font-jetbrains-mono, monospace)' }}
      >
        INITIALIZING // {Math.min(Math.floor(progress), 100)}%
      </p>
    </div>
  );
}

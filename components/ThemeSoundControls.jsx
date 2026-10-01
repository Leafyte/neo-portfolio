'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { playSwitchSound } from '@/lib/sound';

export default function ThemeControls() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('portfolio-theme');
    const dark = savedTheme ? savedTheme === 'dark' : false;
    setIsDark(dark);
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, []);

  function toggleTheme() {
    const nextDark = !isDark;
    setIsDark(nextDark);
    document.documentElement.dataset.theme = nextDark ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', nextDark ? 'dark' : 'light');
    playSwitchSound();
  }

  if (!mounted) {
    return (
      <div className="sidebar-controls">
        <button type="button" className="theme-toggle-btn" aria-label="Toggle theme">
          <Moon size={18} strokeWidth={2.5} color="#000000" />
        </button>
      </div>
    );
  }

  return (
    <div className="sidebar-controls">
      <button
        type="button"
        onClick={toggleTheme}
        className="theme-toggle-btn"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <Sun size={18} strokeWidth={2.5} color="#FFD93D" />
        ) : (
          <Moon size={18} strokeWidth={2.5} color="#000000" />
        )}
      </button>
    </div>
  );
}

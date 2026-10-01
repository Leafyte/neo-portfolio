'use client';

import { useState, useEffect } from 'react';
import {
  Home, User, Folder, GraduationCap, FileText,
  Code2, PenSquare, Trophy, Mail,
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero',         label: 'Home',    icon: Home },
  { id: 'about',        label: 'About',   icon: User },
  { id: 'projects',     label: 'Projects',icon: Folder },
  { id: 'experience',   label: 'Exp',     icon: GraduationCap },
  { id: 'research',     label: 'Research',icon: FileText },
  { id: 'skills',       label: 'Skills',  icon: Code2 },
  { id: 'blog',         label: 'Blog',    icon: PenSquare },
  { id: 'achievements', label: 'Awards',  icon: Trophy },
  { id: 'contact',      label: 'Contact', icon: Mail },
];

export default function MobileNav() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const target = window.innerHeight * 0.40;
      let bestIdx = 0;
      let bestDist = Infinity;
      NAV_ITEMS.forEach(({ id }, idx) => {
        const el = document.getElementById(id);
        if (!el) return;
        const dist = Math.abs(el.getBoundingClientRect().top - target);
        if (dist < bestDist) { bestDist = dist; bestIdx = idx; }
      });
      setActiveIdx(bestIdx);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      <div className="mobile-nav-scroll">
        {NAV_ITEMS.map(({ id, label, icon: Icon }, idx) => {
          const isActive = activeIdx === idx;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`mobile-nav-item${isActive ? ' is-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
              aria-label={label}
            >
              <span className="mobile-nav-icon-wrap">
                <Icon size={20} strokeWidth={2.2} />
              </span>
              <span className="mobile-nav-label">{label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}

'use client';

import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import ThemeSoundControls from '@/components/ThemeSoundControls';
import {
  Home, User, Folder, GraduationCap, FileText,
  Code2, PenSquare, Trophy, Mail,
} from 'lucide-react';

const NAV_ITEMS = [
  { id: 'hero',         label: 'Home',         icon: Home },
  { id: 'about',        label: 'About',        icon: User },
  { id: 'projects',     label: 'Projects',     icon: Folder },
  { id: 'experience',   label: 'Experience',   icon: GraduationCap },
  { id: 'research',     label: 'Research',     icon: FileText },
  { id: 'skills',       label: 'Skills',       icon: Code2 },
  { id: 'blog',         label: 'Blog',         icon: PenSquare },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
  { id: 'contact',      label: 'Contact',      icon: Mail },
];

const SIDEBAR_W = 168;
const PILL_H    = 36; // approximate rendered pill height

/**
 * Build the zigzag wire SVG path.
 * Always produces the same number/type of path commands so the CSS `d` transition works.
 * pillYs: array of {y} giving the vertical CENTER of each pill, relative to sidebar top.
 * activeIdx: which pill is active.
 */
function buildWirePath(pillYs, activeIdx) {
  if (pillYs.length < 2) return '';

  const cx = SIDEBAR_W / 2;

  // Amplitude (horizontal swing) for the wire segment between pill i and pill i+1
  function amp(i) {
    const dist = Math.min(Math.abs(i - activeIdx), Math.abs(i + 1 - activeIdx));
    if (dist === 0) return 60;
    if (dist === 1) return 36;
    if (dist === 2) return 20;
    return 8; // compressed far away
  }

  const f = (n) => n.toFixed(1);
  const first = pillYs[0];
  let d = `M ${f(cx)} ${f(first + PILL_H / 2)}`;

  for (let i = 0; i < pillYs.length - 1; i++) {
    const startY = pillYs[i]     + PILL_H / 2;
    const endY   = pillYs[i + 1] - PILL_H / 2;
    const h      = endY - startY;
    const a      = amp(i);
    const toRight = i % 2 === 0;

    const y1 = startY + h * 0.33;
    const y2 = startY + h * 0.67;
    const x1 = toRight ? cx + a : cx - a;
    const x2 = toRight ? cx - a : cx + a;

    d += ` L ${f(x1)} ${f(y1)} L ${f(x2)} ${f(y2)}`;
  }

  const last = pillYs[pillYs.length - 1];
  d += ` L ${f(cx)} ${f(last - PILL_H / 2)}`;

  return d;
}

export default function SidebarClient() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [pillYs,    setPillYs]    = useState([]);
  const [vh,        setVh]        = useState(0);

  const sidebarRef  = useRef(null);
  const pillRefs    = useRef([]);

  /* ── Measure pill positions; guard against unnecessary re-renders ── */
  const measurePills = () => {
    const sidebar = sidebarRef.current;
    if (!sidebar || pillRefs.current.length === 0) return;
    const sidebarTop = sidebar.getBoundingClientRect().top;
    const ys = pillRefs.current.map((el) => {
      if (!el) return 0;
      const r = el.getBoundingClientRect();
      return r.top - sidebarTop + r.height / 2;
    });
    // Only update state if values changed — prevents infinite loop
    setPillYs(prev =>
      prev.length === ys.length && prev.every((v, i) => Math.abs(v - ys[i]) < 0.5)
        ? prev
        : ys
    );
  };

  // Measure once after first paint
  useLayoutEffect(() => {
    measurePills();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Keep viewport height in sync ── */
  useEffect(() => {
    const handleResize = () => {
      setVh(window.innerHeight);
      // Re-measure after resize settles
      setTimeout(measurePills, 50);
    };
    setVh(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  /* ── Track active section via scroll position ── */
  useEffect(() => {
    const handleScroll = () => {
      // Pick the section whose top is closest to 40% down the viewport
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

    handleScroll(); // set correct pill on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const wirePath = buildWirePath(pillYs, activeIdx);

  return (
    <aside ref={sidebarRef} className="spring-sidebar" aria-label="Main navigation">

      {/* ── Animated spring wire (behind pills, z-index 1) ── */}
      {pillYs.length > 0 && (
        <svg
          aria-hidden="true"
          className="spring-wire-svg"
          viewBox={`0 0 ${SIDEBAR_W} ${vh || 900}`}
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d={wirePath}
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            className="spring-wire-path"
          />
        </svg>
      )}

      {/* ── Nav pills — in normal flex flow, space-between ── */}
      <nav className="spring-nav" aria-label="Page sections">
        {NAV_ITEMS.map(({ id, label, icon: Icon }, idx) => {
          const isActive = activeIdx === idx;
          return (
            <a
              key={id}
              href={`#${id}`}
              ref={(el) => { pillRefs.current[idx] = el; }}
              className={`spring-pill${isActive ? ' is-active' : ''}`}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon
                size={16}
                strokeWidth={2.5}
                className="spring-pill-icon"
              />
              <span className="spring-pill-label">{label}</span>
            </a>
          );
        })}
      </nav>

      {/* ── Bottom controls (theme toggle only) ── */}
      <div className="spring-sidebar-controls">
        <ThemeSoundControls />
      </div>
    </aside>
  );
}

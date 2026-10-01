'use client';

import { useEffect } from 'react';

/**
 * Invisible client component that mirrors the original script.js scroll-reveal logic.
 * Queries ALL .reveal elements in the page (from any component) once after hydration
 * and adds .is-visible when each enters the viewport. Fires only once per element.
 */
export default function RevealObserver() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealEls = document.querySelectorAll('.reveal');

    // With reduced motion — or no IntersectionObserver support — show everything at once.
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target); // reveal only once
          }
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Renders nothing — this component is purely for its side-effect.
  return null;
}

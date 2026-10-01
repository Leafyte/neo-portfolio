'use client';

import { useEffect, useState } from 'react';

/**
 * Footer — needs client interactivity for:
 *  - The dynamic copyright year
 *  - The page-weight badge (fetches the page itself to measure KB; counts external requests)
 *
 * Mirrors script.js sections 7 and 8 exactly.
 */
export default function Footer() {
  const [year, setYear]           = useState('');
  const [badgeText, setBadgeText] = useState('Measuring page weight…');

  useEffect(() => {
    // Year
    setYear(String(new Date().getFullYear()));

    // Weight badge
    async function measureWeight() {
      // Count requests to other origins (we aim for zero)
      const external = performance.getEntriesByType('resource').filter((entry) => {
        try {
          const url = new URL(entry.name);
          return url.protocol.startsWith('http') && url.origin !== location.origin;
        } catch {
          return false;
        }
      }).length;

      // Try to measure our own page size (works on localhost / deployed, not file://)
      let bytes = 0;
      try {
        const pageUrl = location.href.split('#')[0];
        const res = await fetch(pageUrl);
        if (!res.ok) throw new Error('fetch failed');
        bytes = (await res.blob()).size;
      } catch {
        bytes = 0; // not measurable — omit from badge
      }

      const parts = [];
      if (bytes > 0) parts.push(`${(bytes / 1024).toFixed(1)} KB`);
      parts.push(`${external} external request${external === 1 ? '' : 's'}`);
      parts.push('0 trackers');
      if (external === 0) parts.push('works offline');

      setBadgeText(`This page: ${parts.join(' · ')}`);
    }

    // Wait until all resources are loaded so the request count is accurate
    if (document.readyState === 'complete') {
      measureWeight();
    } else {
      window.addEventListener('load', measureWeight, { once: true });
    }
  }, []);

  return (
    <footer className="footer">
      <p className="badge">{badgeText}</p>
      <p>© {year} Karthik M.</p>
    </footer>
  );
}

'use client';

import { useMemo, useState } from 'react';

function level(count) {
  if (!count) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 10) return 3;
  return 4;
}

export default function ContributionGraph({ handle = 'your-handle' }) {
  const [active, setActive] = useState(null);
  const days = useMemo(() => {
    const end = new Date();
    end.setHours(0, 0, 0, 0);
    return Array.from({ length: 364 }, (_, index) => {
      const date = new Date(end);
      date.setDate(end.getDate() - (363 - index));
      // Preview-only sample activity. Replace this with GitHub API data later.
      const count = (index * 17 + Math.floor(index / 7) * 5) % 13 < 4 ? 0 : (index * 7) % 12 + 1;
      return { date, count };
    });
  }, []);
  const total = days.reduce((sum, day) => sum + day.count, 0);
  const weeks = Array.from({ length: 52 }, (_, i) => days.slice(i * 7, i * 7 + 7));
  const months = weeks.map((week, i) => week.find((day) => day.date.getDate() === 1) ? { i, label: week.find((day) => day.date.getDate() === 1).date.toLocaleDateString('en-US', { month: 'short' }) } : null).filter(Boolean);

  return (
    <section className="contribution-card" aria-label="GitHub contribution preview">
      <div className="contribution-head">
        <p><strong>{total.toLocaleString()}</strong> contributions</p>
        <span>▣ Last year</span>
      </div>
      <div className="contribution-plot">
        <div className="month-labels">{months.map(({ i, label }) => <span key={`${label}-${i}`} style={{ left: `${i * 12}px` }}>{label}</span>)}</div>
        <div className="graph-grid" role="grid">
          {weeks.map((week, weekIndex) => <div className="graph-week" key={weekIndex}>{week.map((day) => {
            const label = `${day.count} contributions on ${day.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
            return <button key={day.date.toISOString()} type="button" aria-label={label} onMouseEnter={() => setActive(label)} onFocus={() => setActive(label)} onMouseLeave={() => setActive(null)} onBlur={() => setActive(null)} className={`graph-day level-${level(day.count)}`} />;
          })}</div>)}
        </div>
      </div>
      <div className="contribution-foot"><span>{active || `Preview data · connect @${handle} to show real activity`}</span><span className="legend">Less <i className="level-0" /><i className="level-1" /><i className="level-2" /><i className="level-3" /><i className="level-4" /> More</span></div>
    </section>
  );
}

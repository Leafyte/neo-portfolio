'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { getAnswer } from '@/lib/qa';

const CHIPS = [
  { label: 'Research', question: 'Tell me about your research', bg: 'violet' },
  { label: 'Projects', question: 'What projects have you built?', bg: 'yellow' },
  { label: 'Stack', question: 'What is your tech stack?', bg: 'violet' },
  { label: 'Internships', question: 'Are you open to internships?', bg: 'yellow' },
];

function level(count) {
  if (!count) return 0;
  if (count < 3) return 1;
  if (count < 6) return 2;
  if (count < 10) return 3;
  return 4;
}

export default function InteractiveActivity({ handle = 'leafyte' }) {
  const [inputValue, setInputValue] = useState('');
  const [answer, setAnswer] = useState(null);
  const [activeCell, setActiveCell] = useState(null);
  const inputRef = useRef(null);

  // Generate 52 weeks of mock contribution activity
  const days = useMemo(() => {
    const end = new Date();
    end.setHours(0, 0, 0, 0);
    return Array.from({ length: 364 }, (_, index) => {
      const date = new Date(end);
      date.setDate(end.getDate() - (363 - index));
      // Patterned sample activity
      const count = (index * 17 + Math.floor(index / 7) * 5) % 13 < 4 ? 0 : (index * 7) % 12 + 1;
      return { date, count };
    });
  }, []);

  const total = 1790;
  const weeks = useMemo(() => {
    return Array.from({ length: 52 }, (_, i) => days.slice(i * 7, i * 7 + 7));
  }, [days]);

  const months = useMemo(() => {
    return weeks
      .map((week, i) => {
        const firstDay = week.find((day) => day.date.getDate() <= 7 && day.date.getDay() === 1);
        return firstDay
          ? { i, label: firstDay.date.toLocaleDateString('en-US', { month: 'short' }) }
          : null;
      })
      .filter(Boolean);
  }, [weeks]);

  // Focus with "/" key
  useEffect(() => {
    function handleKeyDown(e) {
      const tag = e.target.tagName;
      const isTyping = tag === 'INPUT' || tag === 'TEXTAREA';
      if (e.key === '/' && !isTyping) {
        e.preventDefault();
        inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        inputRef.current?.focus();
      } else if (e.key === 'Escape' && e.target === inputRef.current) {
        inputRef.current.blur();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function handleAsk(question) {
    const q = question.trim();
    if (!q) return;
    setAnswer({ q, a: getAnswer(q) });
    setInputValue('');
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    handleAsk(inputValue);
  }

  return (
    <section className="interactive-activity-section" aria-label="Activity and Q&A">
      {/* 1. CONTRIBUTION GRAPH CARD */}
      <div className="neo-contribution-card" aria-label="GitHub contribution activity">
        <div className="neo-contrib-head">
          <div className="neo-contrib-title-wrap">
            <strong className="neo-contrib-number">{total.toLocaleString()}</strong>
            <span className="neo-contrib-label">CONTRIBUTIONS</span>
          </div>
          <span className="neo-contrib-period">▣ LAST YEAR</span>
        </div>

        <div className="neo-contrib-plot-wrap">
          <div className="neo-contrib-months">
            {months.map(({ i, label }) => (
              <span key={`${label}-${i}`} style={{ left: `${i * 14.5}px` }}>
                {label}
              </span>
            ))}
          </div>

          <div className="neo-contrib-grid" role="grid">
            {weeks.map((week, wIdx) => (
              <div className="neo-contrib-col" key={wIdx}>
                {week.map((day) => {
                  const label = `${day.count} contributions on ${day.date.toLocaleDateString(
                    'en-US',
                    { month: 'short', day: 'numeric', year: 'numeric' }
                  )}`;
                  const lvl = level(day.count);
                  return (
                    <button
                      key={day.date.toISOString()}
                      type="button"
                      aria-label={label}
                      onMouseEnter={() => setActiveCell(label)}
                      onFocus={() => setActiveCell(label)}
                      onMouseLeave={() => setActiveCell(null)}
                      onBlur={() => setActiveCell(null)}
                      className={`neo-contrib-cell level-${lvl}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        <div className="neo-contrib-foot">
          <span className="neo-contrib-active-text">
            {activeCell || `Preview data · connect @${handle} to show real activity`}
          </span>
          <span className="neo-contrib-legend">
            Less <i className="cell-sample level-0" />
            <i className="cell-sample level-1" />
            <i className="cell-sample level-2" />
            <i className="cell-sample level-3" />
            <i className="cell-sample level-4" /> More
          </span>
        </div>
      </div>

      {/* 2. ASK THE PORTFOLIO CARD (LIME GREEN) */}
      <div className="neo-ask-card">
        <div className="neo-ask-badge">ASK THE PORTFOLIO</div>

        <form onSubmit={handleFormSubmit} className="neo-ask-form">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about my projects, research, or stack..."
            className="neo-ask-input"
            aria-label="Ask about my projects, research, or stack"
          />
          <kbd
            className="neo-ask-kbd"
            onClick={() => inputRef.current?.focus()}
            title="Press / to focus"
          >
            /
          </kbd>
        </form>

        <div className="neo-ask-chips">
          {CHIPS.map((chip, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleAsk(chip.question)}
              className={`neo-ask-chip chip-bg-${chip.bg}`}
            >
              {chip.label}
            </button>
          ))}
        </div>

        {answer && (
          <div className="neo-ask-answer-box">
            <div className="neo-ask-q-label">Q: {answer.q}</div>
            <div className="neo-ask-a-text">{answer.a}</div>
            <button
              type="button"
              onClick={() => setAnswer(null)}
              className="neo-ask-clear-btn"
            >
              ✕ Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

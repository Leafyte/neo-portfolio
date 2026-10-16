'use client';

import { Zap, ArrowRight } from 'lucide-react';

const SKILLS = [
  { name: 'Java', variant: 'blue' },
  { name: 'Python', variant: 'blue' },
  { name: 'C', variant: 'blue' },
  { name: 'JavaScript', variant: 'yellow' },
  { name: 'TypeScript', variant: 'blue' },
  { name: 'React', variant: 'blue' },
  { name: 'Node.js', variant: 'green' },
  { name: 'Spring Boot', variant: 'blue' },
  { name: 'Flask', variant: 'blue' },
  { name: 'Machine Learning', variant: 'blue' },
  { name: 'Computer Vision', variant: 'blue' },
  { name: 'Raspberry Pi', variant: 'blue' },
  { name: 'Docker', variant: 'blue' },
  { name: 'AWS', variant: 'blue' },
  { name: 'Supabase', variant: 'gray' },
  { name: 'MySQL', variant: 'gray' },
  { name: 'MongoDB', variant: 'green' },
  { name: 'Git & GitHub', variant: 'orange' },
];

export default function Skills() {
  return (
    <section id="skills" className="content-section">
      <div className="section-header">
        <div className="section-title-with-icon">
          <Zap size={20} className="section-header-icon" />
          <h2 className="section-title">Skills</h2>
        </div>
        <a href="#skills" className="section-link">
          View all <ArrowRight size={15} />
        </a>
      </div>

      <div className="skills-container">
        {/* Skills pills */}
        <div className="skills-pills-row">
          {SKILLS.map((skill, idx) => (
            <span key={idx} className={`skill-pill skill-pill-${skill.variant}`}>
              {skill.name}
            </span>
          ))}
        </div>

        {/* Bottom Quote Banner */}
        <div className="quote-banner">
          <p className="quote-text">
            &ldquo;Consistent effort compounds into extraordinary results.&rdquo;
          </p>
          <span className="quote-author">&mdash; Karthik M</span>
        </div>
      </div>
    </section>
  );
}

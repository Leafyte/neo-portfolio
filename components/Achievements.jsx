'use client';

import { Trophy, ArrowRight, Award, Star } from 'lucide-react';

const ACHIEVEMENTS = [
  {
    title: 'Finalist / Top Innovation - Smart India Hackathon',
    organization: 'Ministry of Education, Govt. of India',
    description: 'Developed MANAKSETU: Automated Legal Metrology compliance verification system with OCR and NLP.',
    badge: 'National Finalist',
  },
  {
    title: 'Research Paper Accepted at ICIDTSM 2026',
    organization: 'IIT Madras',
    description: 'Published work on hybrid contextual reasoning architecture for offline conversational AI on edge devices.',
    badge: 'Peer-Reviewed Paper',
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="content-section">
      <div className="section-header">
        <div className="section-title-with-icon">
          <Trophy size={20} className="section-header-icon" />
          <h2 className="section-title">Achievements &amp; Honors</h2>
        </div>
        <a href="#achievements" className="section-link">
          View all <ArrowRight size={15} />
        </a>
      </div>

      <div className="achievements-grid">
        {ACHIEVEMENTS.map((item, idx) => (
          <div key={idx} className="achievement-card">
            <div className="achievement-badge-row">
              <span className="achievement-pill">
                <Award size={13} /> {item.badge}
              </span>
            </div>
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-org">{item.organization}</p>
            <p className="achievement-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

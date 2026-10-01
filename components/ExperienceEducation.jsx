'use client';

import { Briefcase, GraduationCap, ArrowRight } from 'lucide-react';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="content-section">
      <div className="dual-column-grid">
        {/* Experience Column */}
        <div className="dual-column">
          <div className="section-header">
            <div className="section-title-with-icon">
              <Briefcase size={20} className="section-header-icon" />
              <h2 className="section-title">Experience</h2>
            </div>
            <a href="#experience" className="section-link">
              View all <ArrowRight size={15} />
            </a>
          </div>

          <div className="info-card experience-card">
            <div className="card-top-header">
              <div className="card-logo-box">
                <img
                  src="/images/vvce_logo.png"
                  alt="VVCE logo"
                  className="card-logo-img"
                  width={44}
                  height={44}
                />
              </div>

              <div className="card-title-group">
                <div className="card-title-with-badge">
                  <h3 className="card-main-title">Research Intern (College Project)</h3>
                  <span className="status-pill status-pill-muted">Present</span>
                </div>
                <p className="card-sub-info">
                  VVCE, Mysuru &nbsp;|&nbsp; Jan 2026 – Present
                </p>
              </div>
            </div>

            <ul className="card-bullet-list">
              <li>
                Working on offline conversational AI (PRISM) using TinyLlama on Raspberry Pi.
              </li>
              <li>
                Designed hybrid retrieval and contextual reasoning pipeline.
              </li>
              <li>
                Achieved 0.884 multi-turn contextual accuracy (22.6% ↑ over baseline).
              </li>
              <li>
                <strong>Technologies:</strong> Python, Ollama, TinyLlama, SQLite, Raspberry Pi.
              </li>
            </ul>
          </div>
        </div>

        {/* Education Column */}
        <div className="dual-column">
          <div className="section-header">
            <div className="section-title-with-icon">
              <GraduationCap size={20} className="section-header-icon" />
              <h2 className="section-title">Education</h2>
            </div>
            <a href="#education" className="section-link">
              View all <ArrowRight size={15} />
            </a>
          </div>

          <div className="info-card education-card">
            <div className="card-top-header">
              <div className="card-logo-box">
                <img
                  src="/images/vvce_logo.png"
                  alt="Vidyavardhaka College seal"
                  className="card-logo-img"
                  width={44}
                  height={44}
                />
              </div>

              <div className="card-title-group">
                <h3 className="card-main-title">Vidyavardhaka College of Engineering</h3>
                <p className="card-sub-info">Mysuru, Karnataka</p>
                <p className="card-degree-info">B.E. in Computer Science and Engineering</p>
                <p className="card-duration-info">Aug 2024 – May 2028</p>
              </div>
            </div>

            <div className="education-details">
              <p className="education-cgpa">
                <strong>CGPA:</strong> (Optional)
              </p>
              <p className="education-coursework">
                <strong>Relevant Coursework:</strong> DSA, DBMS, OS, CN, Software Engineering, AI/ML,
                Cryptography
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

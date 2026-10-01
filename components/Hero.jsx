'use client';

import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-card">
        {/* Background photo & overlay */}
        <div className="hero-bg-layer" />

        <div className="hero-content">
          <div className="hero-text-block">
            <span className="hero-greeting">HI, I&apos;M</span>
            <h1 className="hero-title">Karthik M</h1>
            <p className="hero-tagline">
              Computer Science Engineer &nbsp;|&nbsp; Builder &nbsp;|&nbsp; Learner
            </p>
            <p className="hero-description">
              Exploring the intersection of AI, FinTech and Real-world Impact.
            </p>

            <div className="hero-actions">
              <a
                href="/resume.pdf"
                download
                className="hero-btn hero-btn-primary"
                id="hero-download-resume"
              >
                Download Resume <Download size={15} className="btn-icon" />
              </a>
              <a
                href="#contact"
                className="hero-btn hero-btn-secondary"
                id="hero-contact-me"
              >
                Contact Me <ArrowRight size={15} className="btn-icon" />
              </a>
            </div>
          </div>

          <div className="hero-quote-block">
            <p className="hero-quote-text">
              &ldquo;Build today<br />for a better tomorrow.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

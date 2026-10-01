'use client';

import { FileText, ArrowRight, ExternalLink } from 'lucide-react';

export default function Research() {
  return (
    <section id="research" className="content-section">
      <div className="section-header">
        <div className="section-title-with-icon">
          <FileText size={22} className="section-header-icon" />
          <h2 className="section-title">Research</h2>
        </div>
        <a href="#research" className="section-link">
          View all research <ArrowRight size={15} />
        </a>
      </div>

      <div className="research-card">
        <div className="research-layout">
          {/* Paper Thumbnail */}
          <div className="research-thumb-wrapper">
            <img
              src="/images/paper_thumb.png"
              alt="Research Paper ICIDTSM 2026 thumbnail"
              className="research-thumb"
              width={100}
              height={140}
            />
          </div>

          {/* Paper Details */}
          <div className="research-details">
            <div className="research-top-row">
              <h3 className="research-paper-title">
                A Hybrid Contextual Reasoning Architecture for Fully Offline Conversational AI on
                Resource-Constrained Edge Devices
              </h3>

              <div className="research-actions">
                <a
                  href="/papers/icidtsm-2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-btn"
                >
                  <FileText size={14} /> Paper <ExternalLink size={12} />
                </a>
                <a
                  href="#slides"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-btn"
                >
                  Slides <ExternalLink size={12} />
                </a>
                <a
                  href="#demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-btn"
                >
                  Demo <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <p className="research-authors">Karthik M et al.</p>
            <p className="research-venue">
              ICIDTSM 2026, IIT Madras &nbsp;|&nbsp; 20 – 22 July 2026
            </p>

            <div className="research-tags-row">
              <span className="tech-tag">Conversational AI</span>
              <span className="tech-tag">Edge AI</span>
              <span className="tech-tag">Contextual Reasoning</span>
              <span className="tech-tag">TinyML</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

'use client';

import Image from 'next/image';
import { ArrowRight, MapPin, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, XIcon } from '@/components/Icons';

export default function About() {
  return (
    <section id="about" className="content-section">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <a href="#contact" className="section-link">
          More about me <ArrowRight size={15} />
        </a>
      </div>

      <div className="about-card">
        <div className="about-grid">
          {/* Left Column: Portrait */}
          <div className="about-image-wrapper">
            <img
              src="/images/about_pfp.png"
              alt="Karthik M portrait"
              className="about-portrait"
              width={220}
              height={220}
            />
          </div>

          {/* Right Column: Narrative & Quick Badges */}
          <div className="about-content">
            <p className="about-paragraph">
              I&apos;m <strong>Karthik</strong>, a Computer Science and Engineering student at{' '}
              <strong>Vidyavardhaka College of Engineering, Mysuru</strong>. I&apos;m passionate about
              building technology that solves real-world problems, with a focus on AI/ML, FinTech, and
              impactful software products.
            </p>

            <p className="about-paragraph">
              I love exploring how intelligent systems can work on resource-constrained devices, and I enjoy
              turning ideas into working prototypes — whether it&apos;s for research, hackathons, or
              open-source.
            </p>

            <p className="about-paragraph">
              My goal is to combine technology, research, and global opportunities to create meaningful impact
              and learn continuously.
            </p>

            {/* 4 Info Badges Grid */}
            <div className="about-chips-grid">
              <div className="about-chip">
                <div className="chip-icon-box">
                  <MapPin size={17} className="chip-icon" />
                </div>
                <div className="chip-text">
                  <span className="chip-title">Mysuru, India</span>
                  <span className="chip-subtitle">IST (GMT+5:30)</span>
                </div>
              </div>

              <div className="about-chip">
                <div className="chip-icon-box">
                  <GraduationCap size={17} className="chip-icon" />
                </div>
                <div className="chip-text">
                  <span className="chip-title">4th Semester</span>
                  <span className="chip-subtitle">CSE, VVCE</span>
                </div>
              </div>

              <div className="about-chip">
                <div className="chip-icon-box">
                  <Briefcase size={17} className="chip-icon" />
                </div>
                <div className="chip-text">
                  <span className="chip-title">Open to</span>
                  <span className="chip-subtitle">Internships / Research</span>
                </div>
              </div>

              <div className="about-chip">
                <div className="chip-icon-box">
                  <span className="live-dot" />
                </div>
                <div className="chip-text">
                  <span className="chip-title">Currently Learning</span>
                  <span className="chip-subtitle">ML on Embedded Systems</span>
                </div>
              </div>
            </div>
            {/* Social Links row */}
            <div className="about-socials">
              <a href="https://github.com/karthikm" target="_blank" rel="noopener noreferrer"
                 aria-label="GitHub" className="social-icon-btn">
                <GithubIcon size={17} />
              </a>
              <a href="https://linkedin.com/in/karthikm" target="_blank" rel="noopener noreferrer"
                 aria-label="LinkedIn" className="social-icon-btn">
                <LinkedinIcon size={17} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                 aria-label="X / Twitter" className="social-icon-btn">
                <XIcon size={15} />
              </a>
              <a href="mailto:karthik@example.com" aria-label="Email" className="social-icon-btn">
                <Mail size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

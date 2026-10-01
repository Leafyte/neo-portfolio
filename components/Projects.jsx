'use client';

import { Folder, ArrowRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';

const PROJECTS = [
  {
    id: 'prism',
    title: 'PRISM',
    image: '/images/prism.png',
    statusBadges: [
      { label: 'Research', variant: 'blue' },
      { label: 'Deployed', variant: 'green' },
    ],
    description:
      'Offline conversational AI on Raspberry Pi with contextual reasoning and hybrid retrieval.',
    tags: ['AI/ML', 'Edge AI', 'TinyLlama', 'Python'],
    githubUrl: 'https://github.com/karthikm/prism',
    liveUrl: 'https://prism-demo.com',
  },
  {
    id: 'manaksetu',
    title: 'MANAKSETU',
    image: '/images/manaksetu.png',
    statusBadges: [
      { label: 'Hackathon', variant: 'blue' },
      { label: 'MVP', variant: 'green' },
    ],
    description:
      'AI-powered platform for Legal Metrology compliance of packaged commodities.',
    tags: ['OCR', 'NLP', 'Rules Engine', 'Web App'],
    githubUrl: 'https://github.com/karthikm/manaksetu',
    liveUrl: 'https://manaksetu.web.app',
  },
  {
    id: 'sports-predictor',
    title: 'Sports Predictor',
    image: '/images/sports_predictor.png',
    statusBadges: [
      { label: 'Personal', variant: 'blue' },
      { label: 'In Progress', variant: 'amber' },
    ],
    description:
      'Machine learning model to predict outcomes for IPL, NBA and Football matches.',
    tags: ['ML', 'Flask', 'Data Analytics', 'Web App'],
    githubUrl: 'https://github.com/karthikm/sports-predictor',
    liveUrl: 'https://sports-predictor-live.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="content-section">
      <div className="section-header">
        <div className="section-title-with-icon">
          <Folder size={22} className="section-header-icon" />
          <h2 className="section-title">Featured Projects</h2>
        </div>
        <a href="#projects" className="section-link">
          View all projects <ArrowRight size={15} />
        </a>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-image-container">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                className="project-image"
                width={400}
                height={200}
              />
            </div>

            <div className="project-body">
              <div className="project-badges-row">
                {project.statusBadges.map((badge, idx) => (
                  <span
                    key={idx}
                    className={`status-pill status-pill-${badge.variant}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tags-row">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-footer">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
                <span className="project-link-divider">|</span>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link-demo"
                >
                  <ExternalLink size={14} />
                  <span>Live Demo</span>
                  <ArrowRight size={14} className="demo-arrow" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

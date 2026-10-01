'use client';

import { PenSquare, ArrowRight, Clock } from 'lucide-react';

const POSTS = [
  {
    title: 'Why Was Flutter Even a Thing? From Code to Canvas',
    description: 'Deconstructing cross-platform rendering architectures and how owning the full canvas gives total visual consistency.',
    readTime: '6 min read',
    date: 'Sep 2026',
    slug: '#blog',
  },
  {
    title: 'Deploying TinyLlama on Resource-Constrained Edge Hardware',
    description: 'Lessons learned optimizing quantization, memory footprint, and multi-turn context on Raspberry Pi.',
    readTime: '8 min read',
    date: 'Aug 2026',
    slug: '#blog',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="content-section">
      <div className="section-header">
        <div className="section-title-with-icon">
          <PenSquare size={20} className="section-header-icon" />
          <h2 className="section-title">Latest Writing &amp; Blog</h2>
        </div>
        <a href="#blog" className="section-link">
          View all posts <ArrowRight size={15} />
        </a>
      </div>

      <div className="blog-posts-grid">
        {POSTS.map((post, idx) => (
          <article key={idx} className="blog-post-card">
            <div className="blog-post-meta">
              <span className="blog-date">{post.date}</span>
              <span className="blog-read-time">
                <Clock size={12} /> {post.readTime}
              </span>
            </div>
            <h3 className="blog-post-title">{post.title}</h3>
            <p className="blog-post-desc">{post.description}</p>
            <div className="blog-post-footer">
              <span className="read-more-link">
                Read article <ArrowRight size={13} />
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

'use client';

import { PenSquare, ArrowRight, Clock } from 'lucide-react';

const POSTS = [
  {
    title: 'My Resume and Portfolio Story: How I Stopped Having Two Documents That Said Different Things',
    description:
      'How aligning my resume, GitHub, and portfolio into a unified narrative turned a scattered project list into a compelling engineering story.',
    readTime: '5 min read',
    date: 'Oct 2026',
    url: 'https://leafyte.medium.com/my-resume-and-portfolio-story-how-i-stopped-having-two-documents-that-said-different-things-6da5bee7f034',
  },
  {
    title: 'Stop Typing Vague Prompts: How Students Can Get Better at Vibe Coding',
    description:
      'Moving past slot-machine prompting — practical lessons on crafting detailed design prompts, idea validation, and building real products with AI.',
    readTime: '6 min read',
    date: 'Oct 2026',
    url: 'https://leafyte.medium.com/stop-typing-vague-prompts-how-students-can-get-better-at-vibe-coding-62785a9040dc',
  },
  {
    title: 'How We Went From “I Think RL Is Cool” to a Research Paper (And How You Can Too)',
    description:
      'The honest, step-by-step journey of how undergrads with zero prior research background built an RL NPC framework and published an IEEE paper.',
    readTime: '5 min read',
    date: 'Oct 2026',
    url: 'https://leafyte.medium.com/how-we-went-from-i-think-rl-is-cool-to-a-research-paper-and-how-you-can-too-dba9a7823422',
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
        <a
          href="https://medium.com/@leafyte"
          target="_blank"
          rel="noopener noreferrer"
          className="section-link"
        >
          View all on Medium <ArrowRight size={15} />
        </a>
      </div>

      <div className="blog-posts-grid">
        {POSTS.map((post, idx) => (
          <a
            key={idx}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="blog-post-card"
          >
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
                Read on Medium <ArrowRight size={13} />
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

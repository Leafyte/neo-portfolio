'use client';

import { useState } from 'react';
import { Mail, ArrowRight, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

const EMAIL = 'karthikm@example.com';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const temp = document.createElement('textarea');
        temp.value = EMAIL;
        temp.style.cssText = 'position:fixed;opacity:0;pointer-events:none';
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        temp.remove();
      }
      setCopied(true);
    } catch {}
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <section id="contact" className="content-section">
      <div className="section-header">
        <div className="section-title-with-icon">
          <Mail size={20} className="section-header-icon" />
          <h2 className="section-title">Get In Touch</h2>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-content-grid">
          <div>
            <h3 className="contact-heading">Let&apos;s build something impactful together.</h3>
            <p className="contact-subtext">
              I am open to internship opportunities, research collaborations, and exciting projects in AI/ML, Edge Computing, and Full-Stack Engineering.
            </p>

            <div className="contact-email-row">
              <a href={`mailto:${EMAIL}`} className="contact-email-link">
                <Mail size={16} />
                <span>{EMAIL}</span>
              </a>
              <button
                type="button"
                onClick={handleCopy}
                className="contact-copy-btn"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={14} color="#10B981" /> Copied
                  </>
                ) : (
                  <>
                    <Copy size={14} /> Copy
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="contact-actions-col">
            <a
              href="https://github.com/karthikm"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-btn"
            >
              <GithubIcon size={16} /> View GitHub <ArrowRight size={14} />
            </a>
            <a
              href="https://linkedin.com/in/karthikm"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-action-btn"
            >
              <LinkedinIcon size={16} /> Connect on LinkedIn <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

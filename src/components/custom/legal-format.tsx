"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface Section {
  id: string;
  number: string;
  title: string;
  content: ReactNode;
}

interface LegalLayoutProps {
  badge: string;
  title: string;
  effectiveDate: string;
  intro: string;
  sections: Section[];
  relatedLinks: { label: string; href: string }[];
}

export default function LegalLayout({
  badge,
  title,
  effectiveDate,
  intro,
  sections,
  relatedLinks,
}: LegalLayoutProps) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        html, body {
  margin: 0;
  padding: 0;
  background: #0B0E17;
}
        :root {
          --black: #0B0E17;
          --graphite: #1A1F2B;
          --electric-blue: #1E6BFF;
          --royal-blue: #0F52BA;
          --cyan: #5BC0EB;
          --white: #F0F4FF;
          --muted: #6B7A99;
          --border: rgba(255,255,255,0.06);
        }

        .legal-page {
          min-height: 100vh;
          background: #0B0E17;
          font-family: 'DM Sans', sans-serif;
          color: var(--white);
          position: relative;
          overflow-x: hidden;
        }

        /* Ambient glows */
        .legal-glow-1 {
          position: fixed;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(30,107,255,0.06) 0%, transparent 70%);
          top: -150px; left: -150px;
          pointer-events: none;
          z-index: 0;
        }
        .legal-glow-2 {
          position: fixed;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(91,192,235,0.04) 0%, transparent 70%);
          bottom: 0; right: -100px;
          pointer-events: none;
          z-index: 0;
        }

        /* Grid texture */
        .legal-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(91,192,235,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,192,235,0.02) 1px, transparent 1px);
          background-size: 56px 56px;
          mask-image: radial-gradient(ellipse at 30% 20%, black 20%, transparent 70%);
          pointer-events: none;
          z-index: 0;
        }

        /* LAYOUT */
        .legal-layout {
          max-width: 1100px;
          margin: 0 auto;
          padding: 120px 32px 100px;
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 64px;
          align-items: start;
          position: relative;
          z-index: 1;
        }

        /* ── SIDEBAR ── */
        .legal-sidebar {
          position: sticky;
          top: 100px;
        }

        .sidebar-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          color: var(--muted);
          text-decoration: none;
          margin-bottom: 28px;
          transition: color 0.2s;
        }
        .sidebar-back:hover { color: var(--cyan); }

        .sidebar-label {
          font-size: 10px;
          font-weight: 600;
          color: var(--muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: 2px;
          margin-bottom: 32px;
        }

        .sidebar-nav a {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--muted);
          text-decoration: none;
          padding: 7px 10px;
          border-radius: 8px;
          border: 1px solid transparent;
          transition: all 0.2s;
          line-height: 1.4;
        }

        .sidebar-nav a:hover {
          color: var(--white);
          background: rgba(255,255,255,0.03);
          border-color: var(--border);
        }

        .sidebar-nav-num {
          font-family: 'Syne', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: rgba(91,192,235,0.4);
          flex-shrink: 0;
          width: 18px;
        }

        .sidebar-divider {
          height: 1px;
          background: var(--border);
          margin: 16px 0;
        }

        .sidebar-related-label {
          font-size: 10px;
          font-weight: 600;
          color: var(--muted);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }

        .sidebar-related {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .sidebar-related a {
          font-size: 12.5px;
          color: var(--muted);
          text-decoration: none;
          padding: 6px 10px;
          border-radius: 8px;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s;
        }

        .sidebar-related a:hover {
          color: var(--cyan);
          border-color: rgba(91,192,235,0.2);
          background: rgba(91,192,235,0.04);
        }

        /* ── MAIN CONTENT ── */
        .legal-main {}

        /* Hero block */
        .legal-hero {
          margin-bottom: 56px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--border);
        }

        .legal-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(91,192,235,0.07);
          border: 1px solid rgba(91,192,235,0.2);
          border-radius: 100px;
          padding: 4px 12px 4px 8px;
          font-size: 11px;
          font-weight: 500;
          color: var(--cyan);
          letter-spacing: 0.04em;
          margin-bottom: 20px;
        }

        .legal-badge-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--cyan);
        }

        .legal-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 16px;
        }

        .legal-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .legal-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          color: var(--muted);
        }

        .legal-intro {
          font-size: 15.5px;
          color: rgba(240,244,255,0.55);
          line-height: 1.75;
          max-width: 640px;
          font-weight: 300;
        }

        /* Sections */
        .legal-section {
          margin-bottom: 48px;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          scroll-margin-top: 100px;
        }

        .legal-section:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }

        .section-header {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 20px;
        }

        .section-num {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: rgba(91,192,235,0.5);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding-top: 6px;
          flex-shrink: 0;
          width: 28px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--white);
          line-height: 1.3;
          letter-spacing: -0.01em;
        }

        /* Content prose */
        .legal-prose {
          padding-left: 42px;
        }

        .legal-prose p {
          font-size: 14.5px;
          color: rgba(240,244,255,0.58);
          line-height: 1.8;
          margin-bottom: 14px;
          font-weight: 300;
        }

        .legal-prose p:last-child { margin-bottom: 0; }

        .legal-prose strong {
          color: rgba(240,244,255,0.8);
          font-weight: 500;
        }

        /* List */
        .legal-list {
          list-style: none;
          padding: 0;
          margin: 12px 0 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .legal-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: rgba(240,244,255,0.55);
          line-height: 1.6;
        }

        .legal-list li::before {
          content: '';
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--cyan);
          flex-shrink: 0;
          margin-top: 8px;
          opacity: 0.5;
        }

        /* Highlight box */
        .legal-highlight {
          background: rgba(30,107,255,0.06);
          border: 1px solid rgba(30,107,255,0.15);
          border-left: 3px solid var(--electric-blue);
          border-radius: 0 10px 10px 0;
          padding: 14px 18px;
          margin: 16px 0;
          font-size: 13.5px;
          color: rgba(240,244,255,0.65);
          line-height: 1.65;
        }

        .legal-highlight strong {
          color: rgba(240,244,255,0.85);
          font-weight: 500;
        }

        /* Contact chip */
        .legal-contact-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(26,31,43,0.8);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 8px 14px;
          font-size: 13px;
          color: var(--cyan);
          text-decoration: none;
          margin-top: 8px;
          transition: all 0.2s;
        }

        .legal-contact-chip:hover {
          border-color: rgba(91,192,235,0.3);
          background: rgba(91,192,235,0.06);
        }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .legal-layout {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 100px 20px 80px;
          }
          .legal-sidebar {
            position: static;
            display: flex;
            flex-direction: column;
          }
          .sidebar-nav { display: none; }
        }

        @media (max-width: 480px) {
          .legal-title { font-size: 28px; }
          .legal-prose { padding-left: 0; }
          .section-header { flex-direction: column; gap: 4px; }
          .section-num { padding-top: 0; }
        }
      `}</style>

      <div className="legal-page">
        <div className="legal-glow-1" />
        <div className="legal-glow-2" />
        <div className="legal-grid" />

        <div className="legal-layout">
          {/* ── SIDEBAR ── */}
          <aside className="legal-sidebar">
            <Link href="/" className="sidebar-back">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M9 2L4 7l5 5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Home
            </Link>

            <div className="sidebar-label">On this page</div>
            <nav className="sidebar-nav">
              {sections.map((s) => (
                <a href={`#${s.id}`} key={s.id}>
                  <span className="sidebar-nav-num">{s.number}</span>
                  {s.title}
                </a>
              ))}
            </nav>

            <div className="sidebar-divider" />

            <div className="sidebar-related-label">Also read</div>
            <div className="sidebar-related">
              {relatedLinks.map((l) => (
                <Link href={l.href} key={l.href}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6h8M6 2l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {l.label}
                </Link>
              ))}
            </div>
          </aside>

          {/* ── MAIN ── */}
          <main className="legal-main">
            <div className="legal-hero">
              <div className="legal-badge">
                <div className="legal-badge-dot" />
                {badge}
              </div>
              <h1 className="legal-title">{title}</h1>
              <div className="legal-meta">
                <div className="legal-meta-item">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <rect
                      x="1"
                      y="2"
                      width="11"
                      height="10"
                      rx="1.5"
                      stroke="#6B7A99"
                      strokeWidth="1.1"
                    />
                    <path
                      d="M1 5h11M4 1v2M9 1v2"
                      stroke="#6B7A99"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                    />
                  </svg>
                  Effective Date: {effectiveDate}
                </div>
                <div className="legal-meta-item">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path
                      d="M6.5 1C3.46 1 1 3.46 1 6.5S3.46 12 6.5 12 12 9.54 12 6.5 9.54 1 6.5 1z"
                      stroke="#6B7A99"
                      strokeWidth="1.1"
                    />
                    <path
                      d="M6.5 4v3l2 1.5"
                      stroke="#6B7A99"
                      strokeWidth="1.1"
                      strokeLinecap="round"
                    />
                  </svg>
                  FREMN TECHNOLOGIES LLP
                </div>
              </div>
              <p className="legal-intro">{intro}</p>
            </div>

            {sections.map((section) => (
              <section
                className="legal-section"
                id={section.id}
                key={section.id}
              >
                <div className="section-header">
                  <span className="section-num">{section.number}</span>
                  <h2 className="section-title">{section.title}</h2>
                </div>
                <div className="legal-prose">{section.content}</div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </>
  );
}

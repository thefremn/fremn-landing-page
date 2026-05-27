"use client";

import { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

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
        .legal-list {
          list-style: none;
          padding: 0;
          margin: 12px 0 16px;
          display: flex;
          flex-direction: column;
          gap: 9px;
        }
        .legal-list li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #4b5563;
          line-height: 1.65;
        }
        .legal-list li::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #2563eb;
          flex-shrink: 0;
          margin-top: 8px;
          opacity: 0.5;
        }
        .legal-highlight {
          background: #eff6ff;
          border: 1px solid #dbeafe;
          border-left: 3px solid #2563eb;
          border-radius: 0 10px 10px 0;
          padding: 14px 18px;
          margin: 16px 0;
          font-size: 13.5px;
          color: #374151;
          line-height: 1.65;
        }
        .legal-highlight strong { color: #111827; font-weight: 600; }
        .legal-contact-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 8px 14px;
          font-size: 13px;
          color: #2563eb;
          text-decoration: none;
          margin-top: 8px;
          transition: all 0.2s;
          font-family: var(--font-sans, sans-serif);
        }
        .legal-contact-chip:hover {
          border-color: #bfdbfe;
          background: #eff6ff;
        }

        @media (max-width: 900px) {
          .legal-layout {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 32px 20px 80px !important;
          }
          .legal-sidebar { position: static !important; }
          .legal-sidebar-nav { display: none !important; }
        }
        @media (max-width: 480px) {
          .legal-prose { padding-left: 0 !important; }
          .legal-section-header { flex-direction: column; gap: 4px; }
          .legal-section-num { padding-top: 0 !important; }
        }
      `}</style>

      <div
        className="min-h-screen font-sans"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(96,165,250,0.18) 0%, rgba(147,197,253,0.08) 45%, transparent 70%), " +
            "linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)",
        }}
      >
        {/* ── Navbar ── */}
        <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#f3f4f6]">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-[64px]">
            <Link href="/" aria-label="FREMN — home">
              <Image src="/logo.png" alt="FREMN" width={160} height={40} className="h-8 w-auto" priority />
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-1.5 font-sans text-[13px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M11 7H3M6 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Home
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-sans font-semibold text-[13px] text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors duration-150"
              >
                Book Now!
              </Link>
            </div>
          </div>
        </nav>

        {/* ── Two-column layout ── */}
        <div
          className="legal-layout max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-16"
          style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: "64px", alignItems: "start" }}
        >
          {/* ── Sidebar ── */}
          <aside className="legal-sidebar" style={{ position: "sticky", top: "88px" }}>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 font-sans text-[12.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150 mb-7"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Home
            </Link>

            <div className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-[#9ca3af] mb-3">
              On this page
            </div>
            <nav className="legal-sidebar-nav flex flex-col gap-0.5 mb-6">
              {sections.map((s) => (
                <a
                  href={`#${s.id}`}
                  key={s.id}
                  className="flex items-center gap-2 font-sans text-[13px] text-[#6b7280] hover:text-[#111827] px-2.5 py-1.5 rounded-lg hover:bg-[#f3f4f6] transition-all duration-150"
                >
                  <span className="font-sans text-[10px] font-bold text-[#2563eb]/40 w-[18px] flex-shrink-0">{s.number}</span>
                  {s.title}
                </a>
              ))}
            </nav>

            <div className="h-px bg-[#e5e7eb] mb-5" />

            <div className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-[#9ca3af] mb-3">
              Also read
            </div>
            <div className="flex flex-col gap-2">
              {relatedLinks.map((l) => (
                <Link
                  href={l.href}
                  key={l.href}
                  className="flex items-center gap-1.5 font-sans text-[12.5px] text-[#6b7280] hover:text-[#2563eb] px-2.5 py-1.5 rounded-lg border border-[#e5e7eb] hover:border-[#bfdbfe] hover:bg-[#eff6ff] transition-all duration-150"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {l.label}
                </Link>
              ))}
            </div>
          </aside>

          {/* ── Main content ── */}
          <main>
            {/* Hero block */}
            <div className="mb-12 pb-10 border-b border-[#e5e7eb]">
              <span className="inline-flex items-center gap-1.5 bg-[#eff6ff] border border-[#dbeafe] rounded-full px-3 py-1 font-sans text-[11px] font-semibold text-[#2563eb] tracking-[0.04em] mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                {badge}
              </span>
              <h1 className="font-sans font-extrabold text-[28px] md:text-[42px] text-[#111827] leading-[1.1] tracking-[-0.025em] mb-4">
                {title}
              </h1>
              <div className="flex items-center gap-5 flex-wrap mb-5">
                <div className="flex items-center gap-1.5 font-sans text-[12.5px] text-[#9ca3af]">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <rect x="1" y="2" width="11" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
                    <path d="M1 5h11M4 1v2M9 1v2" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                  </svg>
                  Effective Date: {effectiveDate}
                </div>
                <div className="flex items-center gap-1.5 font-sans text-[12.5px] text-[#9ca3af]">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M6.5 1C3.46 1 1 3.46 1 6.5S3.46 12 6.5 12 12 9.54 12 6.5 9.54 1 6.5 1z" stroke="currentColor" strokeWidth="1.1"/>
                    <path d="M6.5 4v3l2 1.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
                  </svg>
                  FREMN TECHNOLOGIES LLP
                </div>
              </div>
              <p className="font-sans text-[15px] text-[#6b7280] leading-[1.75] max-w-2xl">
                {intro}
              </p>
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                className="mb-12 pb-12 border-b border-[#f3f4f6] last:border-0 last:mb-0 last:pb-0"
                style={{ scrollMarginTop: "100px" }}
              >
                <div className="legal-section-header flex items-start gap-3.5 mb-5">
                  <span className="legal-section-num font-sans text-[11px] font-bold text-[#2563eb]/40 tracking-[0.1em] uppercase pt-1.5 flex-shrink-0 w-7">
                    {section.number}
                  </span>
                  <h2 className="font-sans font-bold text-[19px] text-[#111827] leading-[1.3] tracking-[-0.01em]">
                    {section.title}
                  </h2>
                </div>
                <div className="legal-prose font-sans text-[14.5px] text-[#4b5563] leading-[1.8]" style={{ paddingLeft: "42px" }}>
                  {section.content}
                </div>
              </section>
            ))}
          </main>
        </div>

        {/* ── Footer bar ── */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pb-10">
          <div className="flex items-center justify-between flex-wrap gap-3 pt-6 border-t border-[#e5e7eb]">
            <span className="font-sans text-[12.5px] text-[#9ca3af]">
              © {new Date().getFullYear()} FREMN Technologies LLP. All rights reserved.
            </span>
            <div className="flex gap-5">
              <Link href="/privacy-policy" className="font-sans text-[12.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150">Privacy Policy</Link>
              <Link href="/terms-of-service" className="font-sans text-[12.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150">Terms &amp; Conditions</Link>
              <Link href="/dpdp-compliance" className="font-sans text-[12.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150">DPDP Compliance</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

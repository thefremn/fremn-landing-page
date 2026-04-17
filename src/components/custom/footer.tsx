"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Channels", href: "#channels" },
      { label: "Pricing", href: "#contact" }
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Blog", href: "/blog" },
      { label: "Careers", href: "/careers" }
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Service", href: "/terms-of-service" },
      { label: "DPDP Compliance", href: "/dpdp-compliance" }
    ]
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .footer {
          padding: 64px 32px 32px;
          font-family: 'DM Sans', sans-serif;
          border-top: 1px solid rgba(255,255,255,0.05);
          position: relative;
          overflow: hidden;
        }

        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 56px;
        }

        /* Brand col */
        .footer-brand { display: flex; flex-direction: column; gap: 16px; }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }

        .footer-logo-mark {
          width: 32px; height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 14px rgba(30,107,255,0.35);
        }

        .footer-logo-text {
          font-family: 'Syne', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: #F0F4FF;
          letter-spacing: 0.04em;
        }

        .footer-logo-text span { color: #5BC0EB; }

        .footer-tagline {
          font-size: 13.5px;
          color: #6B7A99;
          line-height: 1.65;
          max-width: 240px;
        }

        .footer-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #6B7A99;
        }

        /* Social links */
        .footer-socials {
          display: flex;
          gap: 8px;
          margin-top: 4px;
        }

        .social-btn {
          width: 34px; height: 34px;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.07);
          background: rgba(26,31,43,0.5);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          color: #6B7A99;
          transition: all 0.2s;
        }

        .social-btn:hover {
          border-color: rgba(91,192,235,0.25);
          color: #5BC0EB;
          background: rgba(91,192,235,0.05);
        }

        /* Link columns */
        .footer-col { display: flex; flex-direction: column; gap: 12px; }

        .footer-col-title {
          font-family: 'Syne', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #F0F4FF;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          margin-bottom: 4px;
        }

        .footer-col a {
          font-size: 13.5px;
          color: #6B7A99;
          text-decoration: none;
          transition: color 0.2s;
          width: fit-content;
        }

        .footer-col a:hover { color: rgba(240,244,255,0.75); }

        /* Bottom bar */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 28px;
          border-top: 1px solid rgba(255,255,255,0.04);
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-copy {
          font-size: 12.5px;
          color: rgba(107,122,153,0.6);
        }

        .footer-pledge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: rgba(107,122,153,0.5);
        }

        .pledge-badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 6px;
          padding: 4px 9px;
          font-size: 11px;
          color: #6B7A99;
          text-decoration: none;
          transition: border-color 0.2s;
        }

        .pledge-badge:hover { border-color: rgba(255,255,255,0.1); }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 36px;
          }
          .footer-brand { grid-column: 1 / -1; }
        }

        @media (max-width: 480px) {
          .footer { padding: 48px 20px 24px; }
          .footer-top { grid-template-columns: 1fr; gap: 32px; }
          .footer-brand { grid-column: 1; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            {/* Brand */}
            <div className="footer-brand">
              <Link href="#hero" className="logo">
              <Image src="/logo.png" alt="Fremn Logo" width={30} height={30} className="rounded"/>
            <span className="logo-text">FREMN</span>
          </Link>

              <p className="footer-tagline">
                AI receptionist for outpatient clinics. Voice, WhatsApp and Web — 24/7 with zero extra headcount.
              </p>

              <div className="footer-location">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5c0 2.8 3.5 6.5 3.5 6.5s3.5-3.7 3.5-6.5C9.5 2.57 7.93 1 6 1zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="#6B7A99"/>
                </svg>
                Kolkata, India
              </div>

              <div className="footer-socials">
                <a href="https://linkedin.com/company/fremn" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="1" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M4.5 10V6M4.5 5V4.5M6.5 10V7.5c0-.8.5-1.5 1.5-1.5s1.5.7 1.5 1.5V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="https://x.com/thefremn" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="X / Twitter">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                    <path d="M1.5 1.5l10 10M11.5 1.5l-10 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </a>
                <a href="mailto:contact@fremn.com" className="social-btn" aria-label="Email">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <rect x="1" y="3.5" width="12" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                    <path d="M1.5 4.5l5.5 3.5 5.5-3.5" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(links).map(([title, items]) => (
              <div className="footer-col" key={title}>
                <div className="footer-col-title">{title}</div>
                {items.map(item => (
                  <a href={item.href} key={item.label}>
                    {item.label}
                  </a>
                ))}
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="footer-bottom">
            <div className="footer-copy">
              © {year} FREMN TECHNOLOGIES LLP. All rights reserved.
            </div>

            <div className="footer-pledge">
              Proud member of
              <a
                href="https://www.pledge1percent.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="pledge-badge"
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M5 1l1.2 2.5L9 4l-2 2 .5 3L5 7.7 2.5 9l.5-3L1 4l2.8-.5z" fill="#6B7A99"/>
                </svg>
                Pledge 1%
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
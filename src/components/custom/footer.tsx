"use client";

import Link from "next/link";

const links = {
  Product: [
    { label: "Features",     href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Channels",     href: "#channels" },
    { label: "Pricing",      href: "#contact" },
    { label: "FAQ",          href: "#faq" },
  ],
  Company: [
    { label: "Book a Demo",  href: "#contact" },
    { label: "Contact Us",   href: "mailto:contact@fremn.com" },
    { label: "Blog",         href: "/blog" },
    { label: "Careers",      href: "/careers" },
  ],
  Legal: [
    { label: "Privacy Policy",   href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "DPDP Compliance",  href: "/dpdp-compliance" },
  ],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-[#F0F4FF] px-6 md:px-12 lg:px-24 pt-16 pb-8"
      role="contentinfo"
    >
      {/* top accent */}
      <div
        className="h-px w-full mb-12"
        style={{ background: "linear-gradient(to right, transparent, rgba(27,79,216,0.2), transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto">
        {/* top grid */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-12">

          {/* brand col */}
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center gap-2.5 w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF] rounded-lg"
              aria-label="FREMN — home"
            >
              <div
                className="w-[36px] h-[36px] rounded-[8px] flex-shrink-0 bg-gradient-to-br from-[#1B4FD8] to-[#4D9FFF] flex items-center justify-center shadow-[0_2px_12px_rgba(27,79,216,0.4)]"
                aria-hidden="true"
              >
                <span className="font-serif text-[18px] leading-none text-white select-none">F</span>
              </div>
              <span className="font-sans font-semibold text-[#0D1B3E] tracking-[0.06em] text-[15px]">
                FREMN
              </span>
            </Link>

            <p className="font-sans text-[13.5px] text-[#0D1B3E]/60 leading-[1.65] max-w-[240px]">
              AI Front Desk for Indian Dental Clinics. WhatsApp bookings, reminders, and billing — 24/7 with zero extra headcount.
            </p>

            <div className="flex items-center gap-1.5 font-sans text-[12px] text-[#0D1B3E]/55">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5c0 2.8 3.5 6.5 3.5 6.5s3.5-3.7 3.5-6.5C9.5 2.57 7.93 1 6 1zm0 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" fill="rgba(13,27,62,0.35)"/>
              </svg>
              Kolkata, India · Built for Indian dentists
            </div>

            {/* socials */}
            <div className="flex items-center gap-2 mt-1">
              <a
                href="https://linkedin.com/company/fremn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[#0D1B3E]/[0.1] flex items-center justify-center text-[#0D1B3E]/40 hover:text-[#1B4FD8] hover:border-[#1B4FD8]/30 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4FD8]"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M4.5 10V6M4.5 5V4.5M6.5 10V7.5c0-.8.5-1.5 1.5-1.5s1.5.7 1.5 1.5V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </a>
              <a
                href="https://x.com/thefremn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[#0D1B3E]/[0.1] flex items-center justify-center text-[#0D1B3E]/40 hover:text-[#1B4FD8] hover:border-[#1B4FD8]/30 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4FD8]"
                aria-label="X / Twitter"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1.5 1.5l10 10M11.5 1.5l-10 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </a>
              <a
                href="mailto:contact@fremn.com"
                className="w-8 h-8 rounded-lg border border-[#0D1B3E]/[0.1] flex items-center justify-center text-[#0D1B3E]/40 hover:text-[#1B4FD8] hover:border-[#1B4FD8]/30 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4FD8]"
                aria-label="Email"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3.5" width="12" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1.5 4.5l5.5 3.5 5.5-3.5" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* link cols */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="flex flex-col gap-3">
              <div className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-[#0D1B3E]/60 mb-1">
                {title}
              </div>
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-sans text-[13.5px] text-[#0D1B3E]/60 hover:text-[#0D1B3E]/90 transition-colors duration-150 w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1B4FD8] rounded"
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* bottom bar */}
        <div
          className="flex items-center justify-between flex-wrap gap-3 pt-6"
          style={{ borderTop: "1px solid rgba(13,27,62,0.08)" }}
        >
          <p className="font-sans text-[12.5px] text-[#0D1B3E]/55">
            © {year} FREMN TECHNOLOGIES LLP. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="font-sans text-[12px] text-[#0D1B3E]/55">Proud member of</span>
            <a
              href="https://www.pledge1percent.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#0D1B3E]/[0.04] border border-[#0D1B3E]/[0.1] rounded px-2.5 py-1 font-sans text-[11px] text-[#0D1B3E]/55 hover:border-[#0D1B3E]/[0.2] hover:text-[#0D1B3E]/80 transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#1B4FD8]"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                <path d="M5 1l1.2 2.5L9 4l-2 2 .5 3L5 7.7 2.5 9l.5-3L1 4l2.8-.5z" fill="rgba(13,27,62,0.3)"/>
              </svg>
              Pledge 1%
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

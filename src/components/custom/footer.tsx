"use client";

import Link from "next/link";

const productLinks = [
  { label: "Features",        href: "#features" },
  { label: "Integrations",    href: "#integrations" },
  { label: "How We Compare",  href: "#comparison" },
  { label: "Testimonials",    href: "#testimonials" },
  { label: "FAQ",             href: "#faq" },
  { label: "Blog",            href: "/blog" },
];

const companyLinks = [
  { label: "Book Now!", href: "#contact" },
  { label: "Contact Us",       href: "mailto:contact@fremn.com" },
  { label: "Phone",            href: "tel:+919073644046", display: "+91 9073644046" },
];

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 lg:px-24 pt-16 pb-8"
      role="contentinfo"
      style={{
        background:
          "radial-gradient(ellipse 100% 65% at 50% 100%, rgba(96,165,250,0.22) 0%, rgba(147,197,253,0.1) 45%, transparent 70%), " +
          "radial-gradient(ellipse 70% 45% at 50% 105%, rgba(59,130,246,0.18) 0%, transparent 60%), " +
          "linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* top grid */}
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-12 mb-12">

          {/* brand col */}
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <Link
              href="/"
              className="flex items-center w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/40 rounded-lg"
              aria-label="FREMN — home"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="FREMN" className="h-9 w-auto" />
            </Link>

            <p className="font-sans text-[13.5px] text-[#6b7280] leading-[1.65] max-w-[240px]">
              AI Front Desk for Outpatient Healthcare
            </p>

            <p className="font-sans text-[12px] text-[#9ca3af] leading-[1.65]">
              FREMN Technologies LLP · Kolkata, India · Built for Indian dentists
            </p>

            {/* socials */}
            <div className="flex items-center gap-2 mt-1">
              <a
                href="https://linkedin.com/company/fremn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:text-[#2563eb] hover:border-[#bfdbfe] bg-white/60 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/30"
                aria-label="LinkedIn"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M4.5 10V6M4.5 5V4.5M6.5 10V7.5c0-.8.5-1.5 1.5-1.5s1.5.7 1.5 1.5V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/thefremn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:text-[#2563eb] hover:border-[#bfdbfe] bg-white/60 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/30"
                aria-label="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="1" width="12" height="12" rx="3" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="10.2" cy="3.8" r="0.6" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="https://x.com/thefremn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:text-[#2563eb] hover:border-[#bfdbfe] bg-white/60 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/30"
                aria-label="X / Twitter"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M1.5 1.5l10 10M11.5 1.5l-10 10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
              </a>
              <a
                href="mailto:contact@fremn.com"
                className="w-8 h-8 rounded-lg border border-[#e5e7eb] flex items-center justify-center text-[#6b7280] hover:text-[#2563eb] hover:border-[#bfdbfe] bg-white/60 transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]/30"
                aria-label="Email"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3.5" width="12" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1.5 4.5l5.5 3.5 5.5-3.5" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product links */}
          <div className="flex flex-col gap-3">
            <div className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-[#111827] mb-1">
              Product
            </div>
            {productLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[13.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150 w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563eb]/30 rounded"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Company links */}
          <div className="flex flex-col gap-3">
            <div className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-[#111827] mb-1">
              Company
            </div>
            {companyLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[13.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150 w-fit focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563eb]/30 rounded"
              >
                {"display" in item ? item.display : item.label}
              </a>
            ))}
          </div>
        </div>

        {/* bottom bar */}
        <div
          className="flex items-center justify-between flex-wrap gap-3 pt-6"
          style={{ borderTop: "1px solid #e5e7eb" }}
        >
          <p className="font-sans text-[12.5px] text-[#9ca3af]">
            © 2026 FREMN Technologies LLP. All rights reserved.
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="/privacy-policy"
              className="font-sans text-[12px] text-[#9ca3af] hover:text-[#111827] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563eb]/30 rounded"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="font-sans text-[12px] text-[#9ca3af] hover:text-[#111827] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563eb]/30 rounded"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="/dpdp-compliance"
              className="font-sans text-[12px] text-[#9ca3af] hover:text-[#111827] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#2563eb]/30 rounded"
            >
              DPDP Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

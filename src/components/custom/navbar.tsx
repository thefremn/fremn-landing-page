"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Features",      href: "#features" },
  { label: "Integrations",  href: "#integrations" },
  { label: "Testimonials",  href: "#testimonials" },
  { label: "Compare",       href: "#comparison" },
  { label: "Pricing",       href: "#pricing" },
  { label: "Blog",          href: "/blog" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── NAVBAR ─────────────────────────────────────────────────── */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-200 bg-white ${
          scrolled ? "border-b border-black/[0.07] shadow-[0_1px_20px_rgba(0,0,0,0.06)]" : ""
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center h-[64px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF] rounded-lg"
            aria-label="FREMN — home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="FREMN" className="h-9 w-auto" />
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-0.5 mx-auto list-none m-0 p-0" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block px-3.5 py-2 text-[13px] font-sans font-medium text-[#111827]/55 hover:text-[#111827] transition-colors duration-150 rounded-lg hover:bg-[#111827]/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1.5 px-5 py-[9px] rounded-lg font-sans font-semibold text-[13px] text-white bg-gradient-to-r from-[#1B4FD8] to-[#4D9FFF] transition-all duration-150 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(27,79,216,0.35)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Book Now!
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M2.5 6h7M7 3l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden ml-auto flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF] flex-shrink-0"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className="block w-[18px] h-[1.5px] bg-[#111827] rounded-full transition-all duration-[250ms]"
              style={{ transform: menuOpen ? "translateY(6.5px) rotate(45deg)" : undefined }}
              aria-hidden="true"
            />
            <span
              className="block w-[18px] h-[1.5px] bg-[#111827] rounded-full transition-all duration-200"
              style={{ opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : undefined }}
              aria-hidden="true"
            />
            <span
              className="block w-[18px] h-[1.5px] bg-[#111827] rounded-full transition-all duration-[250ms]"
              style={{ transform: menuOpen ? "translateY(-6.5px) rotate(-45deg)" : undefined }}
              aria-hidden="true"
            />
          </button>
        </div>
      </nav>

      {/* ── MOBILE OVERLAY ─────────────────────────────────────────── */}
      <div
        id="mobile-menu"
        className={`fixed top-[64px] inset-x-0 bottom-0 z-40 bg-white flex flex-col items-center justify-center md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-label="Mobile navigation"
      >
        {/* top accent */}
        <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-black/[0.06] to-transparent" aria-hidden="true" />

        <nav className="flex flex-col items-center gap-2 px-8 w-full max-w-xs">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="w-full text-center py-3.5 text-[17px] font-sans font-medium text-[#111827]/65 hover:text-[#111827] hover:bg-[#111827]/[0.03] rounded-xl transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="h-px w-full bg-black/[0.07] my-2" aria-hidden="true" />
          <a
            href="#contact"
            className="w-full text-center py-3.5 rounded-xl font-sans font-semibold text-[15px] text-white bg-gradient-to-r from-[#1B4FD8] to-[#4D9FFF] hover:shadow-[0_8px_24px_rgba(27,79,216,0.4)] transition-shadow"
            onClick={() => setMenuOpen(false)}
          >
            Book Now!
          </a>
        </nav>
      </div>
    </>
  );
}

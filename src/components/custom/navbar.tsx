"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Problem and Solution", href: "#problem" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Impact", href: "#testimonials" },
    { label: "Pricing", href: "#contact" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --black: #0A0A0A;
          --graphite: #1A1F2B;
          --electric-blue: #1E6BFF;
          --royal-blue: #0F52BA;
          --cyan: #5BC0EB;
          --white: #F0F4FF;
          --muted: #6B7A99;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .nav-root {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'DM Sans', sans-serif;
          /* Always visible dark bg — fades to stronger blur on scroll */
          background: rgba(11, 14, 23, 0.82);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .nav-root.scrolled {
          background: rgba(10, 10, 10, 0.92);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(91, 192, 235, 0.08);
          box-shadow: 0 4px 40px rgba(0, 0, 0, 0.5);
        }

        .nav-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LOGO */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-text {
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          font-size: 20px;
          letter-spacing: 0.04em;
          color: var(--white);
        }

        /* NAV LINKS */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          font-size: 14px;
          font-weight: 400;
          color: var(--muted);
          padding: 8px 12px;
          border-radius: 8px;
          letter-spacing: 0.01em;
          transition: color 0.2s, background 0.2s;
        }

        .nav-links a:hover {
          color: var(--white);
          background: rgba(255, 255, 255, 0.05);
        }

        /* RIGHT ACTIONS */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .btn-cta {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #fff;
          background: linear-gradient(135deg, var(--electric-blue), var(--royal-blue));
          border: none;
          cursor: pointer;
          padding: 9px 18px;
          border-radius: 9px;
          letter-spacing: 0.02em;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 7px;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 0 20px rgba(30, 107, 255, 0.3);
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .btn-cta::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--cyan), var(--electric-blue));
          opacity: 0;
          transition: opacity 0.25s;
        }

        .btn-cta:hover::before { opacity: 1; }
        .btn-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 0 32px rgba(30, 107, 255, 0.5);
        }

        .btn-cta span, .btn-cta svg { position: relative; z-index: 1; }
        .btn-cta svg { transition: transform 0.2s; }
        .btn-cta:hover svg { transform: translateX(3px); }

        /* PULSE DOT */
        .pulse-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--cyan);
          position: relative; flex-shrink: 0;
        }
        .pulse-dot::after {
          content: '';
          position: absolute; inset: -3px;
          border-radius: 50%;
          border: 1.5px solid var(--cyan);
          animation: pulse 2s ease-out infinite;
          opacity: 0;
        }
        @keyframes pulse {
          0%   { transform: scale(0.8); opacity: 0.8; }
          100% { transform: scale(2);   opacity: 0; }
        }

        /* HAMBURGER */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          transition: background 0.2s;
        }
        .hamburger:hover { background: rgba(255,255,255,0.09); }

        .hamburger span {
          display: block;
          width: 20px; height: 2px;
          background: var(--white);          /* always white — never invisible */
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* MOBILE MENU */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 64px; left: 0; right: 0;
          background: rgba(11, 14, 23, 0.98);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(91, 192, 235, 0.08);
          padding: 8px 20px 24px;
          transform: translateY(-8px);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .mobile-menu a {
          display: block;
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
          color: rgba(240,244,255,0.7);
          padding: 14px 8px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          transition: color 0.2s;
        }
        .mobile-menu a:last-of-type { border-bottom: none; }
        .mobile-menu a:hover { color: var(--white); }

        .mobile-cta {
          display: flex !important;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 12px;
          font-size: 15px !important;
          font-weight: 500 !important;
          color: #fff !important;
          background: linear-gradient(135deg, var(--electric-blue), var(--royal-blue));
          padding: 13px 20px;
          border-radius: 10px;
          text-decoration: none;
          border-bottom: none !important;
          box-shadow: 0 0 24px rgba(30, 107, 255, 0.35);
        }

        @media (max-width: 900px) {
          .nav-links { display: none; }
        }

        @media (max-width: 768px) {
          .nav-inner { padding: 0 20px; }
          .nav-links { display: none; }
          .hamburger { display: none; }
          .mobile-menu { display: none !important; }
          .nav-actions .btn-cta { display: none; }
          .nav-root,
          .nav-root.scrolled {
            background: #0B0E17;
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            border-bottom: 1px solid rgba(255,255,255,0.07);
            box-shadow: none;
          }
        }
      `}</style>

      <nav className={`nav-root${scrolled ? " scrolled" : ""}`}>
        <div className="nav-inner">

          {/* Logo */}
          <Link href="/" className="logo">
            <Image src="/logo.png" alt="Fremn Logo" width={30} height={30} className="rounded" />
            <span className="logo-text">FREMN</span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Right Actions */}
          <div className="nav-actions">
            <a href="#contact" className="btn-cta">
              <div className="pulse-dot" />
              <span>Request a Pilot</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>
          <div className="pulse-dot" />
          Request a Pilot →
        </a>
      </div>
    </>
  );
}
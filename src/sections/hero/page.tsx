"use client";

import { useEffect, useState } from "react";

const cyclingWords = ["Receptionist", "Front Desk", "Assistant"];

export default function HeroSection() {
  const [index, setIndex] = useState(0);
  const [animState, setAnimState] = useState<"visible" | "exit" | "enter">("visible");

  useEffect(() => {
    const cycle = () => {
      setAnimState("exit");
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % cyclingWords.length);
        setAnimState("enter");
      }, 380);
      setTimeout(() => {
        setAnimState("visible");
      }, 420);
    };
    const interval = setInterval(cycle, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        :root {
          --black: #0A0A0A;
          --graphite: #1A1F2B;
          --electric-blue: #1E6BFF;
          --royal-blue: #0F52BA;
          --cyan: #5BC0EB;
          --white: #F0F4FF;
          --muted: #6B7A99;
        }

        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 32px 80px;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
        }

        .hero-glow-1 {
          position: absolute;
          width: 700px; height: 700px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(30,107,255,0.10) 0%, transparent 70%);
          top: -200px; left: -150px;
          pointer-events: none;
        }

        .hero-glow-2 {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(91,192,235,0.07) 0%, transparent 70%);
          bottom: 0; right: -100px;
          pointer-events: none;
        }

        .hero-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(91,192,235,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,192,235,0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at 50% 50%, black 30%, transparent 80%);
          pointer-events: none;
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto; width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          position: relative; z-index: 1;
        }

        .hero-content {
          display: flex; flex-direction: column; gap: 28px;
        }

        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(91,192,235,0.07);
          border: 1px solid rgba(91,192,235,0.2);
          border-radius: 100px;
          padding: 6px 14px 6px 8px;
          width: fit-content;
          animation: fadeSlideUp 0.6s ease forwards;
          opacity: 0; animation-delay: 0.1s;
        }

        .hero-badge-dot {
          width: 22px; height: 22px; border-radius: 50%;
          background: linear-gradient(135deg, var(--electric-blue), var(--cyan));
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .hero-badge-dot svg { width: 12px; height: 12px; }
        .hero-badge span { font-size: 12.5px; font-weight: 500; color: var(--cyan); letter-spacing: 0.03em; }

        /* HEADING */
        .hero-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(40px, 5.5vw, 68px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: var(--white);
          animation: fadeSlideUp 0.6s ease forwards;
          opacity: 0; animation-delay: 0.2s;
        }

        /* CYCLING WORD */
        .cycling-wrapper {
          display: inline-block;
          position: relative;
          overflow: hidden;
          line-height: 1.08;
          vertical-align: bottom;
          min-width: 10ch;
          white-space: nowrap;
        }

        .cycling-word {
          display: inline-block;
          white-space: nowrap;
          background: linear-gradient(135deg, var(--electric-blue) 0%, var(--cyan) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          will-change: transform, opacity, filter;
        }

        .cycling-word.visible {
          opacity: 1; transform: translateY(0%); filter: blur(0px);
          transition:
            opacity   0.32s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.32s cubic-bezier(0.22, 1, 0.36, 1),
            filter    0.32s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .cycling-word.exit {
          opacity: 0; transform: translateY(-60%); filter: blur(10px);
          transition:
            opacity   0.32s cubic-bezier(0.55, 0, 1, 0.45),
            transform 0.32s cubic-bezier(0.55, 0, 1, 0.45),
            filter    0.32s cubic-bezier(0.55, 0, 1, 0.45);
        }
        .cycling-word.enter {
          opacity: 0; transform: translateY(60%); filter: blur(10px);
          transition: none;
        }

        .hero-heading .underline-cyan {
          position: relative; display: inline-block;
        }
        .hero-heading .underline-cyan::after {
          content: '';
          position: absolute; bottom: 4px; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--electric-blue), var(--cyan));
          border-radius: 2px; opacity: 0.6;
        }

        .hero-subheading {
          font-size: 17px; font-weight: 300; color: var(--muted);
          line-height: 1.7; max-width: 480px;
          animation: fadeSlideUp 0.6s ease forwards;
          opacity: 0; animation-delay: 0.3s;
        }
        .hero-subheading strong { color: rgba(240,244,255,0.75); font-weight: 500; }

        .hero-channels {
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
          animation: fadeSlideUp 0.6s ease forwards;
          opacity: 0; animation-delay: 0.35s;
        }

        .channel-label {
          font-size: 11.5px; font-weight: 500; color: var(--muted);
          letter-spacing: 0.06em; text-transform: uppercase; margin-right: 4px;
        }

        .channel-pill {
          display: flex; align-items: center; gap: 6px;
          background: rgba(26,31,43,0.8);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 100px; padding: 5px 12px 5px 8px;
          font-size: 12.5px; color: rgba(240,244,255,0.7); font-weight: 400;
        }

        .channel-pill .pill-icon {
          width: 16px; height: 16px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .pill-voice    { background: rgba(30,107,255,0.2); }
        .pill-whatsapp { background: rgba(37,211,102,0.2); }
        .pill-web      { background: rgba(91,192,235,0.2); }
        .pill-app      { background: rgba(168,85,247,0.2); }

        .hero-ctas {
          display: flex; align-items: center; gap: 14px; flex-wrap: wrap;
          animation: fadeSlideUp 0.6s ease forwards;
          opacity: 0; animation-delay: 0.4s;
        }

        .cta-primary {
          display: inline-flex; align-items: center; gap: 8px;
          background: linear-gradient(135deg, var(--electric-blue), var(--royal-blue));
          color: #fff; font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 500;
          padding: 14px 26px; border-radius: 10px;
          text-decoration: none; border: none; cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 0 28px rgba(30,107,255,0.35), 0 4px 16px rgba(0,0,0,0.3);
          position: relative; overflow: hidden;
        }
        .cta-primary::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
          opacity: 0; transition: opacity 0.25s;
        }
        .cta-primary:hover { transform: translateY(-2px); box-shadow: 0 0 40px rgba(30,107,255,0.5), 0 8px 24px rgba(0,0,0,0.4); }
        .cta-primary:hover::after { opacity: 1; }
        .cta-primary svg { transition: transform 0.2s; }
        .cta-primary:hover svg { transform: translateX(3px); }

        .cta-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          background: transparent; color: var(--muted);
          font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 400;
          padding: 14px 20px; border-radius: 10px;
          text-decoration: none; border: 1px solid rgba(255,255,255,0.08);
          cursor: pointer; transition: all 0.25s ease;
        }
        .cta-secondary:hover { color: var(--white); border-color: rgba(91,192,235,0.25); background: rgba(91,192,235,0.04); }

        .hero-stats {
          display: flex; align-items: center; gap: 28px; padding-top: 8px;
          animation: fadeSlideUp 0.6s ease forwards;
          opacity: 0; animation-delay: 0.5s;
        }
        .stat-item { text-align: left; }
        .stat-value { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; color: var(--white); letter-spacing: -0.01em; }
        .stat-value span { color: var(--cyan); }
        .stat-label { font-size: 12px; color: var(--muted); font-weight: 400; margin-top: 2px; }
        .stat-divider { width: 1px; height: 32px; background: rgba(255,255,255,0.07); }

        /* RIGHT VISUAL */
        .hero-visual {
          position: relative;
          display: flex; align-items: center; justify-content: center;
          animation: fadeSlideUp 0.7s ease forwards;
          opacity: 0; animation-delay: 0.3s;
        }

        .hero-card-main {
          width: 100%; max-width: 440px;
          background: rgba(26,31,43,0.7);
          border: 1px solid rgba(91,192,235,0.12);
          border-radius: 20px; padding: 28px;
          backdrop-filter: blur(16px);
          box-shadow: 0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03);
          position: relative; z-index: 2;
        }

        .card-header {
          display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;
        }
        .card-header-left { display: flex; align-items: center; gap: 10px; }
        .card-avatar {
          width: 38px; height: 38px; border-radius: 50%;
          background: linear-gradient(135deg, var(--electric-blue), var(--cyan));
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 14px rgba(30,107,255,0.4);
        }
        .card-avatar svg { width: 18px; height: 18px; }
        .card-title { font-family: 'Syne', sans-serif; font-size: 14px; font-weight: 600; color: var(--white); }
        .card-subtitle { font-size: 11.5px; color: var(--muted); margin-top: 1px; }
        .card-status { display: flex; align-items: center; gap: 5px; font-size: 11px; color: #4ade80; font-weight: 500; }
        .status-dot { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; animation: blink 2s ease-in-out infinite; }

        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

        .chat-area { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }
        .bubble { max-width: 80%; padding: 10px 14px; border-radius: 14px; font-size: 13px; line-height: 1.5; }
        .bubble-patient {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.06);
          color: rgba(240,244,255,0.75); border-radius: 14px 14px 14px 4px;
        }
        .bubble-ai {
          background: rgba(30,107,255,0.15); border: 1px solid rgba(30,107,255,0.25);
          color: rgba(240,244,255,0.85); border-radius: 14px 14px 4px 14px; align-self: flex-end;
        }
        .bubble-label { font-size: 10px; color: var(--muted); margin-bottom: 4px; letter-spacing: 0.04em; }
        .bubble-wrapper { display: flex; flex-direction: column; }
        .bubble-wrapper.ai { align-items: flex-end; }

        .confirm-card {
          background: rgba(30,107,255,0.08); border: 1px solid rgba(30,107,255,0.2);
          border-radius: 12px; padding: 12px 14px;
          display: flex; align-items: center; gap: 12px;
        }
        .confirm-icon {
          width: 32px; height: 32px; border-radius: 8px;
          background: linear-gradient(135deg, var(--electric-blue), var(--royal-blue));
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .confirm-icon svg { width: 16px; height: 16px; }
        .confirm-text { flex: 1; }
        .confirm-title { font-size: 12.5px; font-weight: 500; color: var(--white); }
        .confirm-sub { font-size: 11px; color: var(--muted); margin-top: 2px; }
        .confirm-check {
          width: 20px; height: 20px; border-radius: 50%;
          background: rgba(74,222,128,0.15); border: 1px solid rgba(74,222,128,0.3);
          display: flex; align-items: center; justify-content: center;
        }

        .float-card {
          position: absolute;
          background: rgba(26,31,43,0.9); border: 1px solid rgba(255,255,255,0.07);
          border-radius: 12px; padding: 10px 14px;
          backdrop-filter: blur(12px); z-index: 3;
        }
        .float-card-1 { top: -20px; right: -20px; display: flex; align-items: center; gap: 8px; animation: floatY 4s ease-in-out infinite; }
        .float-card-2 { bottom: 20px; left: -28px; animation: floatY 4s ease-in-out infinite; animation-delay: 2s; }

        @keyframes floatY { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }

        .float-icon { width: 28px; height: 28px; border-radius: 7px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .float-title { font-size: 11.5px; font-weight: 500; color: var(--white); }
        .float-sub   { font-size: 10px; color: var(--muted); margin-top: 1px; }
        .float-value { font-family: 'Syne', sans-serif; font-size: 18px; font-weight: 700; color: var(--white); }
        .float-value span { color: var(--cyan); font-size: 12px; font-weight: 400; margin-left: 3px; }

        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── TABLET ── */
        @media (max-width: 900px) {
          .hero-inner { grid-template-columns: 1fr; gap: 48px; text-align: center; }
          .hero-badge      { margin: 0 auto; }
          .hero-subheading { margin: 0 auto; max-width: 100%; }
          .hero-channels   { justify-content: center; }
          .hero-ctas       { justify-content: center; }
          .hero-stats      { justify-content: center; }
          .hero-visual     { order: -1; }
          .float-card-1    { right: 0; top: -12px; }
          .float-card-2    { left: 0; }
          .cycling-wrapper { min-width: 0; }
        }

        /* ── MOBILE ── */
        @media (max-width: 480px) {
          .hero-section { padding: 100px 20px 60px; }
          .hero-stats   { gap: 16px; flex-wrap: wrap; }
          .float-card   { display: none; }
          .cta-primary, .cta-secondary { width: 100%; justify-content: center; }
          .hero-ctas    { flex-direction: column; }

          /* Shrink the chat card so it fits without horizontal scroll */
          .hero-card-main { padding: 16px; max-width: 100%; }
          .card-avatar    { width: 30px; height: 30px; }
          .card-avatar svg{ width: 14px; height: 14px; }
          .card-title     { font-size: 12px; }
          .card-subtitle  { font-size: 10px; }
          .bubble         { font-size: 12px; padding: 8px 11px; }
          .bubble-label   { font-size: 9px; }
          .confirm-card   { padding: 10px 11px; gap: 8px; }
          .confirm-icon   { width: 26px; height: 26px; border-radius: 6px; }
          .confirm-icon svg { width: 13px; height: 13px; }
          .confirm-title  { font-size: 11.5px; }
          .confirm-sub    { font-size: 10px; }
          .confirm-check  { width: 18px; height: 18px; }

          /* Fix cycling word — "AI Front Desk" was wrapping mid-phrase.
             Shrink the heading font and let the cycling span flow inline
             without a fixed min-width clip. */
          .hero-heading {
            font-size: clamp(28px, 9vw, 38px);
          }
          .cycling-wrapper {
            display: inline;
            overflow: visible;
            min-width: 0;
            white-space: normal;
          }
          .cycling-word {
            display: inline;
            white-space: normal;
          }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-glow-1" />
        <div className="hero-glow-2" />
        <div className="hero-grid" />

        <div className="hero-inner">

          {/* ── LEFT CONTENT ── */}
          <div className="hero-content">
            <div className="hero-badge">
              <div className="hero-badge-dot">
                <svg viewBox="0 0 12 12" fill="none">
                  <path d="M6 1L7.5 4.5L11 5.5L8.5 8L9 11.5L6 10L3 11.5L3.5 8L1 5.5L4.5 4.5L6 1Z" fill="white"/>
                </svg>
              </div>
              <span>India-first · Built for Outpatient Clinics</span>
            </div>

            <h1 className="hero-heading">
              Your Clinic&apos;s
              <br />
              AI{" "}
              <span className="cycling-wrapper">
                <span className={`cycling-word ${animState}`}>
                  {cyclingWords[index]}
                </span>
              </span>
              <br />
              <span className="underline-cyan">Never Sleeps</span>
            </h1>

            <p className="hero-subheading">
              Voice, WhatsApp &amp; Web automation that handles{" "}
              <strong>appointments, patient queries and follow-ups</strong> —{" "}
              24/7, without adding a single headcount.
            </p>

            <div className="hero-channels">
              <span className="channel-label">Works on</span>
              <div className="channel-pill">
                <div className="pill-icon pill-voice">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1a2 2 0 0 1 2 2v2a2 2 0 0 1-4 0V3a2 2 0 0 1 2-2z" fill="#1E6BFF"/>
                    <path d="M2 5a3 3 0 0 0 6 0" stroke="#1E6BFF" strokeWidth="1" strokeLinecap="round"/>
                  </svg>
                </div>
                Voice
              </div>
              <div className="channel-pill">
                <div className="pill-icon pill-whatsapp">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4.5" fill="#25D366" opacity="0.8"/>
                    <path d="M3 7l.5-1.5A2.5 2.5 0 1 1 5 7.5L3 7z" fill="white" opacity="0.9"/>
                  </svg>
                </div>
                WhatsApp
              </div>
              <div className="channel-pill">
                <div className="pill-icon pill-web">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4" stroke="#5BC0EB" strokeWidth="1"/>
                    <path d="M1.5 5h7M5 1.5C3.5 3 3.5 7 5 8.5M5 1.5C6.5 3 6.5 7 5 8.5" stroke="#5BC0EB" strokeWidth="0.8"/>
                  </svg>
                </div>
                Web
              </div>
              <div className="channel-pill">
                <div className="pill-icon pill-app">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <rect x="2" y="1" width="6" height="8" rx="1.5" stroke="#a855f7" strokeWidth="0.9"/>
                    <path d="M3.5 2.5h3M4 8h2" stroke="#a855f7" strokeWidth="0.8" strokeLinecap="round"/>
                    <circle cx="5" cy="6.5" r="0.6" fill="#a855f7"/>
                  </svg>
                </div>
                Clinic App
              </div>
            </div>

            <div className="hero-ctas">
              <a href="#contact" className="cta-primary">
                Book a Pilot
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#how-it-works" className="cta-secondary">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                  <circle cx="7.5" cy="7.5" r="6.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M6 5.5L9.5 7.5L6 9.5V5.5Z" fill="currentColor"/>
                </svg>
                See how it works
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-value">24<span>/7</span></div>
                <div className="stat-label">Always available</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-value">4<span>ch</span></div>
                <div className="stat-label">Channels covered</div>
              </div>
              <div className="stat-divider" />
              <div className="stat-item">
                <div className="stat-value">0<span> extra staff</span></div>
                <div className="stat-label">No headcount added</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT VISUAL ── */}
          <div className="hero-visual">
            <div className="float-card float-card-1">
              <div className="float-icon" style={{ background: 'rgba(74,222,128,0.12)' }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7.5L5.5 10.5L11.5 4" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <div className="float-title">Appointment Booked</div>
                <div className="float-sub">Just now · via WhatsApp</div>
              </div>
            </div>

            <div className="hero-card-main">
              <div className="card-header">
                <div className="card-header-left">
                  <div className="card-avatar">
                    <svg viewBox="0 0 18 18" fill="none">
                      <circle cx="9" cy="6.5" r="2.5" fill="white"/>
                      <path d="M3 16c0-3.314 2.686-5.5 6-5.5s6 2.186 6 5.5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <div className="card-title">FREMN AI Receptionist</div>
                    <div className="card-subtitle">Dental Clinic · Kolkata</div>
                  </div>
                </div>
                <div className="card-status">
                  <div className="status-dot" />
                  Active
                </div>
              </div>

              <div className="chat-area">
                <div className="bubble-wrapper">
                  <div className="bubble-label">Patient</div>
                  <div className="bubble bubble-patient">Hi, I need to book a dental checkup for tomorrow.</div>
                </div>
                <div className="bubble-wrapper ai">
                  <div className="bubble-label">FREMN AI</div>
                  <div className="bubble bubble-ai">Sure! Dr. Sharma has slots at 10:30 AM and 2:00 PM tomorrow. Which works for you?</div>
                </div>
                <div className="bubble-wrapper">
                  <div className="bubble-label">Patient</div>
                  <div className="bubble bubble-patient">10:30 AM please.</div>
                </div>
              </div>

              <div className="confirm-card">
                <div className="confirm-icon">
                  <svg viewBox="0 0 16 16" fill="none">
                    <rect x="2" y="3" width="12" height="11" rx="2" stroke="white" strokeWidth="1.3"/>
                    <path d="M5 2v2M11 2v2M2 7h12" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="confirm-text">
                  <div className="confirm-title">Appointment Confirmed</div>
                  <div className="confirm-sub">Tomorrow · 10:30 AM · Dr. Sharma</div>
                </div>
                <div className="confirm-check">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5.5L4 7.5L8 3" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            <div className="float-card float-card-2">
              <div className="float-value">98<span>% response rate</span></div>
              <div className="float-sub" style={{ fontSize: '10px', color: 'var(--muted)', marginTop: '2px' }}>
                Across all channels
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
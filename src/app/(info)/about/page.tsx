// app/about/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — FREMN",
  description: "Learn about FREMN and how we are redefining clinic operations with AI-powered front desks.",
};

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .about-root {
          min-height: 100vh;
          background: #0B0E17;
          font-family: 'DM Sans', sans-serif;
          color: #F0F4FF;
          position: relative;
          overflow-x: hidden;
        }

        .about-glow-top {
          position: fixed; top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 500px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(30,107,255,0.07) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        .about-glow-right {
          position: fixed; top: 40%; right: -200px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(91,192,235,0.04) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        /* ── Nav ── */
        .about-nav {
          position: sticky; top: 0; z-index: 50;
          padding: 0 40px; height: 64px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(11,14,23,0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .about-nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 20px; font-weight: 800;
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          text-decoration: none;
        }

        .about-nav-link {
          font-size: 13px; color: #6B7A99;
          text-decoration: none; transition: color 0.2s;
        }

        .about-nav-link:hover { color: #5BC0EB; }

        /* ── Header ── */
        .about-header {
          padding: 80px 40px 0;
          max-width: 1100px; margin: 0 auto;
          position: relative; z-index: 1;
        }

        .about-eyebrow {
          font-size: 11px;
          color: #5BC0EB;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-bottom: 14px;
        }

        .about-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 800;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin-bottom: 18px;
        }

        .about-title span {
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .about-sub {
          font-size: 16px;
          color: #6B7A99;
          max-width: 520px;
          line-height: 1.7;
          margin-bottom: 60px;
        }

        .about-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          margin-bottom: 60px;
        }

        /* ── Content ── */
        .about-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px 120px;
          position: relative; z-index: 1;
        }

        .section {
          margin-bottom: 64px;
          max-width: 720px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          margin-bottom: 14px;
          color: #F0F4FF;
        }

        .section p {
          font-size: 15px;
          color: #6B7A99;
          line-height: 1.75;
          margin-bottom: 12px;
        }

        /* ── Footer ── */
        .about-footer {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 32px 40px;
          display: flex;
          justify-content: space-between;
          max-width: 1100px;
          margin: 0 auto;
          font-size: 13px;
          color: #6B7A99;
        }

        .about-footer a {
          color: #6B7A99;
          text-decoration: none;
        }

        .about-footer a:hover {
          color: #5BC0EB;
        }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .about-header { animation: fadeUp 0.5s ease both; }
        .about-content { animation: fadeUp 0.5s 0.1s ease both; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .about-header, .about-content { padding-left: 24px; padding-right: 24px; }
          .about-nav { padding: 0 24px; }
        }
      `}</style>

      <div className="about-root">
        <div className="about-glow-top" />
        <div className="about-glow-right" />

        <nav className="about-nav">
          <Link href="/" className="about-nav-logo">FREMN</Link>
          <Link href="/#contact" className="about-nav-link">Request Demo →</Link>
        </nav>

        <header className="about-header">
          <p className="about-eyebrow">Who we are</p>
          <h1 className="about-title">
            Rebuilding the way clinics <br /><span>operate</span>
          </h1>
          <p className="about-sub">
            FREMN exists to remove friction from healthcare operations. We design AI-powered front desks that handle conversations, scheduling, and follow-ups so clinics can focus on care instead of coordination.
          </p>
          <div className="about-divider" />
        </header>

        <main className="about-content">
          <div className="section">
            <h2 className="section-title">The Problem</h2>
            <p>
              Modern clinics are overwhelmed by repetitive workflows. Calls go unanswered. Appointments are mismanaged. Staff spend more time coordinating than caring.
            </p>
            <p>The system works, but only barely.</p>
          </div>

          <div className="section">
            <h2 className="section-title">Our Approach</h2>
            <p>
              FREMN replaces fragmented front-desk processes with a single intelligent layer.
            </p>
            <p>
              An AI that understands patient intent. A system that adapts to clinic workflows. An interface that feels invisible when it works right.
            </p>
            <p>We are not adding more software. We are simplifying the stack.</p>
          </div>

          <div className="section">
            <h2 className="section-title">What We Believe</h2>
            <p>Healthcare does not need more tools. It needs fewer, better ones.</p>
            <p>
              Automation should feel natural, not robotic. Efficiency should not come at the cost of human connection.
            </p>
            <p>And the best systems are the ones you forget are even there.</p>
          </div>

          <div className="section">
            <h2 className="section-title">Where We’re Going</h2>
            <p>
              We are building toward a future where every clinic runs on intelligent infrastructure.
            </p>
            <p>
              Where no call is missed. No patient is left waiting. And no team is overwhelmed by the basics.
            </p>
          </div>
        </main>

        <footer className="about-footer">
          <span>© {new Date().getFullYear()} FREMN</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/#contact">Request Demo</Link>
            <a href="mailto:contact@fremn.com">contact@fremn.com</a>
          </div>
        </footer>
      </div>
    </>
  );
}
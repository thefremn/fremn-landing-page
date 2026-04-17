// app/team/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — FREMN",
  description: "The team behind FREMN.",
};

const founders = [
  {
    name: "Chinton Dutta",
    role: "Co-founder",
    initials: "CD",
  },
  {
    name: "Amar Kumar Thakur",
    role: "Co-founder",
    initials: "AK",
  },
  {
    name: "Sheikh Sami Akhtar",
    role: "Co-founder",
    initials: "SS",
  },
  {
    name: "Krishti Poddar",
    role: "Co-founder",
    initials: "KP",
  },
];

// Rotate through subtle accent hues for the initials circles
const accentStyles = [
  { bg: "rgba(30,107,255,0.12)",  border: "rgba(30,107,255,0.25)",  color: "#5BC0EB" },
  { bg: "rgba(91,192,235,0.10)",  border: "rgba(91,192,235,0.22)",  color: "#7DD3F0" },
  { bg: "rgba(30,107,255,0.08)",  border: "rgba(30,107,255,0.18)",  color: "#4DA6FF" },
  { bg: "rgba(91,192,235,0.12)",  border: "rgba(91,192,235,0.28)",  color: "#5BC0EB" },
];

export default function TeamPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .team-root {
          min-height: 100vh;
          background: #0B0E17;
          font-family: 'DM Sans', sans-serif;
          color: #F0F4FF;
          position: relative;
          overflow-x: hidden;
        }

        /* ── Ambient glows ── */
        .team-glow-top {
          position: fixed; top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 500px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(30,107,255,0.07) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }
        .team-glow-right {
          position: fixed; top: 40%; right: -200px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(91,192,235,0.04) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        /* ── Nav ── */
        .team-nav {
          position: sticky; top: 0; z-index: 50;
          padding: 0 40px; height: 64px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(11,14,23,0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .team-nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 20px; font-weight: 800;
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; text-decoration: none;
        }
        .team-nav-link {
          font-size: 13px; color: #6B7A99;
          text-decoration: none; transition: color 0.2s;
        }
        .team-nav-link:hover { color: #5BC0EB; }

        /* ── Header ── */
        .team-header {
          max-width: 1100px; margin: 0 auto;
          padding: 80px 40px 0;
          position: relative; z-index: 1;
        }
        .team-eyebrow {
          font-size: 11px; font-weight: 500;
          color: #5BC0EB; letter-spacing: 0.12em;
          text-transform: uppercase; margin-bottom: 14px;
        }
        .team-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.03em; margin-bottom: 18px;
          color: #F0F4FF;
        }
        .team-title span {
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .team-sub {
          font-size: 16px; color: #6B7A99;
          max-width: 480px; line-height: 1.7;
          margin-bottom: 60px;
        }
        .team-divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          margin-bottom: 64px;
        }

        /* ── Content ── */
        .team-content {
          max-width: 1100px; margin: 0 auto;
          padding: 0 40px 120px;
          position: relative; z-index: 1;
        }

        /* ── Section label ── */
        .section-label {
          font-size: 10.5px; font-weight: 500;
          color: #5BC0EB; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 28px;
          display: flex; align-items: center; gap: 8px;
        }
        .section-label::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(91,192,235,0.15);
        }

        /* ── Founders grid ── */
        .founders-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 80px;
        }

        .founder-card {
          background: rgba(26,31,43,0.5);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 18px;
          padding: 32px 24px 28px;
          display: flex; flex-direction: column;
          align-items: flex-start; gap: 16px;
          position: relative; overflow: hidden;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .founder-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, #1E6BFF, #5BC0EB);
          opacity: 0; transition: opacity 0.3s;
        }
        /* Large background letter */
        .founder-card::after {
          content: attr(data-initial);
          position: absolute; bottom: -12px; right: -4px;
          font-family: 'Syne', sans-serif;
          font-size: 96px; font-weight: 800;
          color: rgba(255,255,255,0.025);
          line-height: 1; pointer-events: none;
          letter-spacing: -0.04em;
          transition: color 0.3s;
        }
        .founder-card:hover {
          border-color: rgba(30,107,255,0.22);
          transform: translateY(-5px);
          box-shadow: 0 20px 48px rgba(0,0,0,0.45);
        }
        .founder-card:hover::before { opacity: 1; }
        .founder-card:hover::after  { color: rgba(30,107,255,0.06); }

        /* Initials circle */
        .founder-avatar {
          width: 48px; height: 48px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 15px; font-weight: 700;
          flex-shrink: 0;
        }

        .founder-info { display: flex; flex-direction: column; gap: 4px; }
        .founder-name {
          font-family: 'Syne', sans-serif;
          font-size: 16px; font-weight: 700;
          color: #F0F4FF; line-height: 1.2;
          letter-spacing: -0.01em;
        }
        .founder-role {
          font-size: 12px; color: #6B7A99;
          letter-spacing: 0.03em;
        }

        /* ── Mission strip ── */
        .mission-strip {
          background: rgba(26,31,43,0.4);
          border: 1px solid rgba(255,255,255,0.055);
          border-radius: 20px;
          padding: 44px 48px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          position: relative; overflow: hidden;
        }
        .mission-strip::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(30,107,255,0.3), rgba(91,192,235,0.3), transparent);
        }
        .mission-left {}
        .mission-eyebrow {
          font-size: 10.5px; font-weight: 500;
          color: #5BC0EB; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 14px;
        }
        .mission-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 700; line-height: 1.25;
          letter-spacing: -0.02em; color: #F0F4FF;
        }
        .mission-right {
          display: flex; flex-direction: column; gap: 14px;
        }
        .mission-stat {
          display: flex; flex-direction: column; gap: 2px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .mission-stat:last-child { border-bottom: none; padding-bottom: 0; }
        .mission-stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 26px; font-weight: 800;
          letter-spacing: -0.03em;
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .mission-stat-label {
          font-size: 13px; color: #6B7A99;
        }

        /* ── Footer ── */
        .team-footer {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 32px 40px;
          display: flex; align-items: center; justify-content: space-between;
          max-width: 1100px; margin: 0 auto;
          font-size: 13px; color: #6B7A99;
          position: relative; z-index: 1;
        }
        .team-footer a { color: #6B7A99; text-decoration: none; transition: color 0.2s; }
        .team-footer a:hover { color: #5BC0EB; }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .team-header  { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .team-content { animation: fadeUp 0.5s 0.1s cubic-bezier(0.16,1,0.3,1) both; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .founders-grid { grid-template-columns: repeat(2, 1fr); }
          .mission-strip { grid-template-columns: 1fr; gap: 32px; padding: 32px 28px; }
        }
        @media (max-width: 600px) {
          .founders-grid { grid-template-columns: 1fr; }
          .team-header, .team-content { padding-left: 24px; padding-right: 24px; }
          .team-nav { padding: 0 24px; }
          .team-footer { flex-direction: column; gap: 12px; }
        }
      `}</style>

      <div className="team-root">
        <div className="team-glow-top" />
        <div className="team-glow-right" />

        <nav className="team-nav">
          <Link href="/" className="team-nav-logo">FREMN</Link>
          <Link href="/#contact" className="team-nav-link">Request Demo →</Link>
        </nav>

        <header className="team-header">
          <p className="team-eyebrow">The people</p>
          <h1 className="team-title">
            Built by founders<br />who <span>give a damn</span>
          </h1>
          <p className="team-sub">
            Four people. One mission. Making clinic operations invisible so doctors can focus on patients.
          </p>
          <div className="team-divider" />
        </header>

        <main className="team-content">

          <p className="section-label">Founders</p>

          <div className="founders-grid">
            {founders.map((founder, i) => {
              const accent = accentStyles[i % accentStyles.length];
              return (
                <div
                  key={founder.name}
                  className="founder-card"
                  data-initial={founder.initials[0]}
                >
                  <div
                    className="founder-avatar"
                    style={{
                      background: accent.bg,
                      border: `1px solid ${accent.border}`,
                      color: accent.color,
                    }}
                  >
                    {founder.initials}
                  </div>
                  <div className="founder-info">
                    <div className="founder-name">{founder.name}</div>
                    <div className="founder-role">{founder.role}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mission strip */}
          <div className="mission-strip">
            <div className="mission-left">
              <p className="mission-eyebrow">Our focus</p>
              <h2 className="mission-heading">
                Automating the parts of clinic life that drain good people
              </h2>
            </div>
            <div className="mission-right">
              <div className="mission-stat">
                <span className="mission-stat-num">48 hrs</span>
                <span className="mission-stat-label">From sign-up to live pilot</span>
              </div>
              <div className="mission-stat">
                <span className="mission-stat-num">40%</span>
                <span className="mission-stat-label">Avg. drop in no-shows</span>
              </div>
              <div className="mission-stat">
                <span className="mission-stat-num">Zero</span>
                <span className="mission-stat-label">Changes to your existing workflow</span>
              </div>
            </div>
          </div>

        </main>

        <footer className="team-footer">
          <span>© {new Date().getFullYear()} FREMN. All rights reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/careers">Careers</Link>
            <a href="mailto:contact@fremn.com">contact@fremn.com</a>
          </div>
        </footer>
      </div>
    </>
  );
}
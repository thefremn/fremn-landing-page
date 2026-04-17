// app/careers/page.tsx
import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — FREMN",
  description: "Join FREMN and help build the future of AI-powered clinic operations.",
};

// ── Types ─────────────────────────────────────────────────────────────────────
type Role = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string; // "Full-time" | "Part-time" | "Contract" | "Internship"
  tags: string[]; // e.g. ["Next.js", "UI Systems"]
  email_subject: string; // pre-filled subject line for mailto
};

// ── Supabase ──────────────────────────────────────────────────────────────────
async function getRoles(): Promise<Role[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  const { data, error } = await supabase
    .from("career_roles")
    .select("id, title, department, location, type, tags, email_subject")
    .eq("active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching roles:", error);
    return [];
  }

  return data ?? [];
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function CareersPage() {
  const roles = await getRoles();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .careers-root {
          min-height: 100vh;
          background: #0B0E17;
          font-family: 'DM Sans', sans-serif;
          color: #F0F4FF;
          position: relative;
          overflow-x: hidden;
        }

        .careers-glow-top {
          position: fixed; top: -200px; left: 50%;
          transform: translateX(-50%);
          width: 900px; height: 500px; border-radius: 50%;
          background: radial-gradient(ellipse, rgba(30,107,255,0.07) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }
        .careers-glow-right {
          position: fixed; top: 40%; right: -200px;
          width: 500px; height: 500px; border-radius: 50%;
          background: radial-gradient(circle, rgba(91,192,235,0.04) 0%, transparent 70%);
          pointer-events: none; z-index: 0;
        }

        /* ── Nav ── */
        .careers-nav {
          position: sticky; top: 0; z-index: 50;
          padding: 0 40px; height: 64px;
          display: flex; align-items: center; justify-content: space-between;
          background: rgba(11,14,23,0.8);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .careers-nav-logo {
          font-family: 'Syne', sans-serif;
          font-size: 20px; font-weight: 800;
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; text-decoration: none;
        }
        .careers-nav-link {
          font-size: 13px; color: #6B7A99;
          text-decoration: none; transition: color 0.2s;
        }
        .careers-nav-link:hover { color: #5BC0EB; }

        /* ── Header ── */
        .careers-header {
          padding: 80px 40px 0;
          max-width: 1100px; margin: 0 auto;
          position: relative; z-index: 1;
        }
        .careers-eyebrow {
          font-size: 11px; color: #5BC0EB;
          letter-spacing: 0.12em; text-transform: uppercase;
          margin-bottom: 14px; font-weight: 500;
        }
        .careers-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(36px, 5vw, 62px);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.03em; margin-bottom: 18px;
        }
        .careers-title span {
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .careers-sub {
          font-size: 16px; color: #6B7A99;
          max-width: 520px; line-height: 1.7; margin-bottom: 60px;
        }
        .careers-divider {
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
          margin-bottom: 60px;
        }

        /* ── Content ── */
        .careers-content {
          max-width: 1100px; margin: 0 auto;
          padding: 0 40px 120px;
          position: relative; z-index: 1;
        }

        .section { margin-bottom: 64px; max-width: 720px; }
        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px; font-weight: 700;
          margin-bottom: 14px; color: #F0F4FF;
        }
        .section p {
          font-size: 15px; color: #6B7A99;
          line-height: 1.75; margin-bottom: 12px;
        }

        /* ── Section label (matches blog style) ── */
        .section-label {
          font-size: 10.5px; font-weight: 500;
          color: #5BC0EB; letter-spacing: 0.1em;
          text-transform: uppercase; margin-bottom: 24px;
          display: flex; align-items: center; gap: 8px;
          max-width: 1020px;
        }
        .section-label::after {
          content: ''; flex: 1; height: 1px;
          background: rgba(91,192,235,0.15);
        }

        /* ── Roles grid ── */
        .roles-section { margin-bottom: 64px; }

        .roles-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          max-width: 1020px;
        }

        .role-card {
          background: rgba(26,31,43,0.5);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 26px 28px;
          display: flex; flex-direction: column; gap: 14px;
          position: relative; overflow: hidden;
          transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
        }
        .role-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, #1E6BFF, #5BC0EB);
          opacity: 0; transition: opacity 0.25s;
        }
        .role-card:hover {
          border-color: rgba(30,107,255,0.2);
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.35);
        }
        .role-card:hover::before { opacity: 1; }

        .role-card-top {
          display: flex; align-items: flex-start;
          justify-content: space-between; gap: 12px;
        }
        .role-title {
          font-family: 'Syne', sans-serif;
          font-size: 17px; font-weight: 700;
          color: #F0F4FF; line-height: 1.2;
        }
        .role-type {
          flex-shrink: 0;
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.05em;
          padding: 3px 9px; border-radius: 100px;
          background: rgba(30,107,255,0.1);
          border: 1px solid rgba(30,107,255,0.2);
          color: #5BC0EB; white-space: nowrap;
        }

        .role-meta {
          display: flex; align-items: center; gap: 14px;
          font-size: 12.5px; color: #6B7A99;
          flex-wrap: wrap;
        }
        .role-meta-item {
          display: flex; align-items: center; gap: 5px;
        }

        .role-tags {
          display: flex; flex-wrap: wrap; gap: 6px;
        }
        .role-tag {
          font-size: 11px; color: #8090AE;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          padding: 3px 9px; border-radius: 6px;
        }

        .role-apply {
          display: inline-flex; align-items: center; gap: 6px;
          margin-top: auto;
          font-size: 13px; font-weight: 500;
          color: #1E6BFF; text-decoration: none;
          transition: gap 0.2s, color 0.2s;
        }
        .role-card:hover .role-apply { gap: 9px; color: #5BC0EB; }

        /* ── Empty roles state ── */
        .roles-empty {
          max-width: 1020px;
          background: rgba(26,31,43,0.4);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 40px 36px;
          display: flex; align-items: center; gap: 20px;
        }
        .roles-empty-icon {
          width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0;
          background: rgba(30,107,255,0.08);
          border: 1px solid rgba(30,107,255,0.15);
          display: flex; align-items: center; justify-content: center;
        }
        .roles-empty-text h3 {
          font-family: 'Syne', sans-serif;
          font-size: 16px; font-weight: 700;
          color: #D0D8EE; margin-bottom: 4px;
        }
        .roles-empty-text p { font-size: 14px; color: #6B7A99; }

        /* ── Speculative CTA ── */
        .speculative-strip {
          max-width: 1020px;
          background: rgba(26,31,43,0.45);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 16px;
          padding: 28px 32px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
          margin-top: 20px;
        }
        .speculative-strip-text p {
          font-size: 14px; color: #6B7A99; line-height: 1.6;
          margin: 0;
        }
        .speculative-strip-text strong { color: #A0AABB; font-weight: 500; }
        .speculative-btn {
          flex-shrink: 0;
          display: inline-flex; align-items: center; gap: 7px;
          padding: 11px 22px;
          background: linear-gradient(135deg, #1E6BFF, #0F52BA);
          color: white; font-family: 'DM Sans', sans-serif;
          font-size: 13.5px; font-weight: 500;
          border-radius: 10px; text-decoration: none;
          box-shadow: 0 0 24px rgba(30,107,255,0.25);
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .speculative-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 36px rgba(30,107,255,0.45);
        }

        /* ── Footer ── */
        .careers-footer {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 32px 40px;
          display: flex; justify-content: space-between; align-items: center;
          max-width: 1100px; margin: 0 auto;
          font-size: 13px; color: #6B7A99;
          position: relative; z-index: 1;
        }
        .careers-footer a {
          color: #6B7A99; text-decoration: none; transition: color 0.2s;
        }
        .careers-footer a:hover { color: #5BC0EB; }

        /* ── Animations ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .careers-header  { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) both; }
        .careers-content { animation: fadeUp 0.5s 0.1s cubic-bezier(0.16,1,0.3,1) both; }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .careers-header, .careers-content { padding-left: 24px; padding-right: 24px; }
          .careers-nav { padding: 0 24px; }
          .roles-grid { grid-template-columns: 1fr; }
          .speculative-strip { flex-direction: column; align-items: flex-start; }
          .careers-footer { flex-direction: column; gap: 16px; }
        }
      `}</style>

      <div className="careers-root">
        <div className="careers-glow-top" />
        <div className="careers-glow-right" />

        <nav className="careers-nav">
          <Link href="/" className="careers-nav-logo">FREMN</Link>
          <Link href="/#contact" className="careers-nav-link">Request Demo →</Link>
        </nav>

        <header className="careers-header">
          <p className="careers-eyebrow">Careers</p>
          <h1 className="careers-title">
            Build what clinics <br /><span>actually need</span>
          </h1>
          <p className="careers-sub">
            We are a small team solving a very real problem. If you care about building thoughtful systems that operate at scale, you will feel at home here.
          </p>
          <div className="careers-divider" />
        </header>

        <main className="careers-content">

          <div className="section">
            <h2 className="section-title">Why FREMN</h2>
            <p>Every improvement we ship reduces friction for real clinics, real staff, and real patients.</p>
            <p>There is no abstraction layer between effort and impact.</p>
          </div>

          <div className="section">
            <h2 className="section-title">How We Work</h2>
            <p>We value clarity over noise. Speed over perfection. Ownership over hierarchy.</p>
            <p>You will not be handed tasks. You will be trusted with outcomes.</p>
            <p>We move quickly, but not carelessly.</p>
          </div>

          {/* ── Open Roles ── */}
          <div className="roles-section">
            <p className="section-label">Open Roles</p>

            {roles.length === 0 ? (
              <div className="roles-empty">
                <div className="roles-empty-icon">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M10 2a8 8 0 1 1 0 16A8 8 0 0 1 10 2zm0 4v5m0 2v1" stroke="#5BC0EB" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div className="roles-empty-text">
                  <h3>No open roles right now</h3>
                  <p>We hire deliberately and rarely — check back soon, or send a speculative application below.</p>
                </div>
              </div>
            ) : (
              <div className="roles-grid">
                {roles.map((role) => {
                  const subject = encodeURIComponent(role.email_subject || `Application — ${role.title}`);
                  const body = encodeURIComponent(`Hi FREMN team,\n\nI'd like to apply for the ${role.title} role.\n\n[Your intro here]\n\nCV attached.`);
                  const mailto = `mailto:contact@fremn.com?subject=${subject}&body=${body}`;

                  return (
                    <div key={role.id} className="role-card">
                      <div className="role-card-top">
                        <div className="role-title">{role.title}</div>
                        <span className="role-type">{role.type}</span>
                      </div>

                      <div className="role-meta">
                        <span className="role-meta-item">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="#6B7A99" strokeWidth="1.1"/>
                            <circle cx="6" cy="4.5" r="1.2" stroke="#6B7A99" strokeWidth="1.1"/>
                          </svg>
                          {role.location}
                        </span>
                        <span className="role-meta-item">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <rect x="1" y="3" width="10" height="7" rx="1.5" stroke="#6B7A99" strokeWidth="1.1"/>
                            <path d="M4 3V2.5A1.5 1.5 0 0 1 8 2.5V3" stroke="#6B7A99" strokeWidth="1.1"/>
                          </svg>
                          {role.department}
                        </span>
                      </div>

                      {role.tags?.length > 0 && (
                        <div className="role-tags">
                          {role.tags.map((tag) => (
                            <span key={tag} className="role-tag">{tag}</span>
                          ))}
                        </div>
                      )}

                      <a href={mailto} className="role-apply">
                        Mail your CV
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                          <path d="M1.5 6.5h10M8 3l3.5 3.5L8 10" stroke="#1E6BFF" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Speculative applications — always shown */}
            <div className="speculative-strip">
              <div className="speculative-strip-text">
                <p>
                  <strong>Don&apos;t see your role?</strong> We welcome speculative applications.
                  Tell us who you are and what you want to build.
                </p>
              </div>
              <a
                href={`mailto:contact@fremn.com?subject=${encodeURIComponent("Speculative Application — FREMN")}&body=${encodeURIComponent("Hi FREMN team,\n\nI'd love to work with you. Here's a bit about me and what I'd bring:\n\n[Your intro here]\n\nCV attached.")}`}
                className="speculative-btn"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="white" strokeWidth="1.2"/>
                  <path d="M1 4l6 4 6-4" stroke="white" strokeWidth="1.2"/>
                </svg>
                Mail your CV
              </a>
            </div>
          </div>

        </main>

        <footer className="careers-footer">
          <span>© {new Date().getFullYear()} FREMN. All rights reserved.</span>
          <div style={{ display: "flex", gap: "24px" }}>
            <Link href="/#contact">Request Demo</Link>
            <a href="mailto:contact@fremn.com">contact@fremn.com</a>
          </div>
        </footer>
      </div>
    </>
  );
}
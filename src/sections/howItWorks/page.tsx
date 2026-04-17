"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Patient Reaches Out",
      description: "A patient calls, sends a WhatsApp message, or uses the web widget on your clinic's site — any time of day.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 3a9 9 0 0 1 7.79 13.5l.71 4.25-4.25-.71A9 9 0 1 1 14 3z" stroke="#5BC0EB" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M10 11h8M10 15h5" stroke="#5BC0EB" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ),
      detail: "Voice · WhatsApp · Web Widget",
      color: "#5BC0EB",
    },
    {
      number: "02",
      title: "FREMN AI Responds",
      description: "The AI understands the patient's intent — booking, query, reschedule or follow-up — and responds naturally in under 10 seconds.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="9" stroke="#1E6BFF" strokeWidth="1.6"/>
          <path d="M10 14l3 3 5-6" stroke="#1E6BFF" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="21" cy="7" r="3" fill="#1E6BFF" opacity="0.5"/>
        </svg>
      ),
      detail: "NLP · Intent Detection · Instant Reply",
      color: "#1E6BFF",
    },
    {
      number: "03",
      title: "Appointment Confirmed",
      description: "FREMN checks availability, books the slot, and sends a confirmation to the patient — all without staff involvement.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="4" y="6" width="20" height="18" rx="3" stroke="#0F52BA" strokeWidth="1.6"/>
          <path d="M4 11h20" stroke="#0F52BA" strokeWidth="1.4"/>
          <path d="M9 4v4M19 4v4" stroke="#0F52BA" strokeWidth="1.4" strokeLinecap="round"/>
          <path d="M9 17l2.5 2.5L19 14" stroke="#5BC0EB" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      detail: "Calendar Sync · Auto-Confirmation",
      color: "#0F52BA",
    },
    {
      number: "04",
      title: "Staff Gets Notified",
      description: "Your team receives a clean summary of every booked appointment and patient interaction — zero manual data entry.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 4a7 7 0 0 1 7 7v4l2 3H5l2-3v-4a7 7 0 0 1 7-7z" stroke="#5BC0EB" strokeWidth="1.6" strokeLinejoin="round"/>
          <path d="M11.5 21a2.5 2.5 0 0 0 5 0" stroke="#5BC0EB" strokeWidth="1.4"/>
        </svg>
      ),
      detail: "Dashboard · WhatsApp Alert · Email",
      color: "#5BC0EB",
    },
    {
      number: "05",
      title: "Patient Gets Reminders",
      description: "FREMN sends automated reminders and follow-ups to patients, reducing no-shows and keeping your schedule full.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          {/* Phone body */}
          <rect x="8" y="2" width="12" height="20" rx="3" stroke="#22C55E" strokeWidth="1.6"/>
          {/* Screen lines suggesting message */}
          <path d="M11 9h6M11 12.5h4" stroke="#22C55E" strokeWidth="1.3" strokeLinecap="round"/>
          {/* Pulse / signal arcs emanating top-right */}
          <path d="M21 6.5a4 4 0 0 1 0 5.5" stroke="#22C55E" strokeWidth="1.4" strokeLinecap="round" opacity="0.4"/>
          <path d="M23 4.5a7 7 0 0 1 0 9.5" stroke="#22C55E" strokeWidth="1.3" strokeLinecap="round" opacity="0.2"/>
          {/* Home button dot */}
          <circle cx="14" cy="19" r="1" fill="#22C55E" opacity="0.6"/>
        </svg>
      ),
      detail: "Calendar · SMS · Reminders",
      color: "#008000",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .hiw-section {
          padding: 100px 32px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .hiw-glow {
          position: absolute;
          width: 500px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(91,192,235,0.05) 0%, transparent 70%);
          right: -100px; top: 50%;
          transform: translateY(-50%);
          pointer-events: none;
        }

        .hiw-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .hiw-eyebrow {
          text-align: center;
          font-size: 11.5px;
          font-weight: 500;
          color: #5BC0EB;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .hiw-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: #F0F4FF;
          text-align: center;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .hiw-sub {
          text-align: center;
          font-size: 16px;
          color: #6B7A99;
          max-width: 500px;
          margin: 0 auto 72px;
          line-height: 1.65;
        }

        /* Steps grid */
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 2px;
          position: relative;
        }

        /* Connecting line */
        .steps-grid::before {
          content: '';
          position: absolute;
          top: 44px;
          left: calc(12.5% + 20px);
          right: calc(12.5% + 20px);
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(91,192,235,0.3) 20%, rgba(30,107,255,0.4) 50%, rgba(91,192,235,0.3) 80%, transparent);
          z-index: 0;
        }

        .step-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 32px 20px;
          border-radius: 18px;
          background: rgba(26,31,43,0.4);
          border: 1px solid rgba(255,255,255,0.04);
          transition: border-color 0.3s, background 0.3s, transform 0.3s;
          cursor: default;
          position: relative;
          z-index: 1;
        }

        .step-card:hover {
          background: rgba(26,31,43,0.7);
          border-color: rgba(91,192,235,0.15);
          transform: translateY(-4px);
        }

        .step-number {
          font-family: 'Syne', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #6B7A99;
          margin-bottom: 16px;
          text-transform: uppercase;
        }

        .step-icon-wrap {
          width: 64px;
          height: 64px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
          background: rgba(26,31,43,0.9);
          border: 1px solid rgba(255,255,255,0.06);
          position: relative;
          transition: box-shadow 0.3s;
        }

        .step-card:hover .step-icon-wrap {
          box-shadow: 0 0 24px rgba(91,192,235,0.15);
        }

        .step-title {
          font-family: 'Syne', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: #F0F4FF;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .step-desc {
          font-size: 13.5px;
          color: #6B7A99;
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .step-detail {
          font-size: 11px;
          color: rgba(91,192,235,0.6);
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(91,192,235,0.06);
          border: 1px solid rgba(91,192,235,0.1);
        }

        /* CTA below steps */
        .hiw-cta {
          display: flex;
          justify-content: center;
          margin-top: 56px;
        }

        .hiw-cta a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #5BC0EB;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          padding: 12px 24px;
          border-radius: 10px;
          text-decoration: none;
          border: 1px solid rgba(91,192,235,0.2);
          transition: all 0.25s ease;
        }

        .hiw-cta a:hover {
          background: rgba(91,192,235,0.06);
          border-color: rgba(91,192,235,0.4);
          transform: translateY(-1px);
        }

        @media (max-width: 900px) {
          .steps-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }
          .steps-grid::before { display: none; }
        }

        @media (max-width: 520px) {
          .hiw-section { padding: 72px 20px; }
          .steps-grid { grid-template-columns: 1fr; gap: 10px; }
        }
      `}</style>

      <section className="hiw-section" id="how-it-works">
        <div className="hiw-glow" />
        <div className="hiw-inner">
          <p className="hiw-eyebrow">How It Works</p>
          <h2 className="hiw-heading">From missed call to booked<br />appointment in 60 seconds</h2>
          <p className="hiw-sub">A seamless four-step flow that runs entirely on autopilot — no training, no scripts, no staff overhead.</p>

          <div className="steps-grid">
            {steps.map((step, i) => (
              <div className="step-card" key={i}>
                <div className="step-number">{step.number}</div>
                <div className="step-icon-wrap">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>
                <span className="step-detail">{step.detail}</span>
              </div>
            ))}
          </div>

          <div className="hiw-cta">
            <a href="#contact">
              See a live demo
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
"use client";

export default function Features() {
  const features = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="17" rx="2.5" stroke="#5BC0EB" strokeWidth="1.5"/>
          <path d="M3 9h18" stroke="#5BC0EB" strokeWidth="1.3"/>
          <path d="M8 3v3M16 3v3" stroke="#5BC0EB" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M7 14h4M7 17h6" stroke="#5BC0EB" strokeWidth="1.2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Appointment Booking",
      description: "Patients book slots instantly via voice or chat. FREMN checks real-time availability and confirms in seconds.",
      tag: "Core",
      tagColor: "#5BC0EB",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M4 4l6 6M20 4l-6 6M12 10v10" stroke="#1E6BFF" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="10" r="3" stroke="#1E6BFF" strokeWidth="1.5"/>
        </svg>
      ),
      title: "Smart Rescheduling",
      description: "When patients need to reschedule, FREMN handles it gracefully — no hold music, no callbacks needed.",
      tag: "Automated",
      tagColor: "#1E6BFF",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="#5BC0EB" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M8 10h8M8 13h5" stroke="#5BC0EB" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      ),
      title: "Patient FAQs",
      description: "Clinic hours, fees, doctors, procedures — FREMN answers common questions without involving your staff.",
      tag: "Always On",
      tagColor: "#5BC0EB",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="#1E6BFF" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#1E6BFF" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      title: "Follow-up Reminders",
      description: "Post-visit follow-ups sent automatically over WhatsApp — improving retention without any manual effort.",
      tag: "Retention",
      tagColor: "#1E6BFF",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V5a3 3 0 0 1 3-3z" stroke="#5BC0EB" strokeWidth="1.5"/>
          <path d="M5 10a7 7 0 0 0 14 0" stroke="#5BC0EB" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 19v3M9 22h6" stroke="#5BC0EB" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      ),
      title: "Voice Support",
      description: "An AI that talks — answering incoming calls with natural speech and handling end-to-end voice booking.",
      tag: "Voice AI",
      tagColor: "#5BC0EB",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="3" width="20" height="14" rx="2" stroke="#1E6BFF" strokeWidth="1.5"/>
          <path d="M8 21h8M12 17v4" stroke="#1E6BFF" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M6 8l3 3 3-3 3 3 3-3" stroke="#5BC0EB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Web Widget",
      description: "Embed FREMN directly on your clinic website — a floating chat widget that converts visitors into booked patients.",
      tag: "Web",
      tagColor: "#1E6BFF",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17.472 14.382a10.06 10.06 0 0 1-3.198 1.393 10.13 10.13 0 0 1-1.02.144 9.916 9.916 0 0 1-5.29-1.582" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M5.516 5.516A9.955 9.955 0 0 1 12 3c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-5.27-1.5L3 21l1.5-4.73A9.956 9.956 0 0 1 2 13" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "WhatsApp Native",
      description: "Meets patients where they already are — full booking and support flows over WhatsApp, no app download needed.",
      tag: "WhatsApp",
      tagColor: "#25D366",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#5BC0EB" strokeWidth="1.5" strokeLinejoin="round"/>
          <path d="M9 12l2 2 4-4" stroke="#5BC0EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "DPDP Compliant",
      description: "Built with India's Digital Personal Data Protection Act in mind — patient data is encrypted and never shared.",
      tag: "Security",
      tagColor: "#5BC0EB",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .feat-section {
          padding: 100px 32px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .feat-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(91,192,235,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(91,192,235,0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: radial-gradient(ellipse at 50% 50%, black 20%, transparent 75%);
          pointer-events: none;
        }

        .feat-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .feat-eyebrow {
          text-align: center;
          font-size: 11.5px;
          font-weight: 500;
          color: #5BC0EB;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .feat-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: #F0F4FF;
          text-align: center;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .feat-sub {
          text-align: center;
          font-size: 16px;
          color: #6B7A99;
          max-width: 480px;
          margin: 0 auto 64px;
          line-height: 1.65;
        }

        .feat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .feat-card {
          background: rgba(26,31,43,0.5);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 16px;
          padding: 26px 22px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.3s cubic-bezier(0.16,1,0.3,1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .feat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(91,192,235,0.3), transparent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .feat-card:hover {
          background: rgba(26,31,43,0.8);
          border-color: rgba(91,192,235,0.12);
          transform: translateY(-3px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.3);
        }

        .feat-card:hover::before { opacity: 1; }

        .feat-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(10,10,10,0.6);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .feat-tag {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 5px;
          width: fit-content;
        }

        .feat-title {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #F0F4FF;
          line-height: 1.3;
        }

        .feat-desc {
          font-size: 13px;
          color: #6B7A99;
          line-height: 1.6;
          flex: 1;
        }

        @media (max-width: 1024px) {
          .feat-grid { grid-template-columns: repeat(3, 1fr); }
        }

        @media (max-width: 768px) {
          .feat-section { padding: 72px 20px; }
          .feat-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
        }

        @media (max-width: 480px) {
          .feat-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="feat-section" id="features">
        <div className="feat-bg" />
        <div className="feat-inner">
          <p className="feat-eyebrow">Capabilities</p>
          <h2 className="feat-heading">Everything your front desk does —<br />done better, automatically</h2>
          <p className="feat-sub">Built specifically for outpatient clinics. No complex setup, no training period.</p>

          <div className="feat-grid">
            {features.map((f, i) => (
              <div className="feat-card" key={i}>
                <div className="feat-icon">{f.icon}</div>
                <span
                  className="feat-tag"
                  style={{
                    color: f.tagColor,
                    background: `${f.tagColor}15`,
                    border: `1px solid ${f.tagColor}25`,
                  }}
                >
                  {f.tag}
                </span>
                <h3 className="feat-title">{f.title}</h3>
                <p className="feat-desc">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
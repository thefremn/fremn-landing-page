"use client";

const testimonials = [
  {
    quote: "We used to miss at least 8–10 calls a day during lunch. Now FREMN picks up every single one and books appointments automatically. Our front desk team is finally focused on patients in the room.",
    name: "Dr. Priya Mehta",
    role: "Owner, Smile Studio Dental",
    location: "Kolkata",
    specialty: "Dental",
    initials: "PM",
    color: "#1E6BFF",
  },
  {
    quote: "The WhatsApp booking alone has changed how we operate. Patients love it — they get a confirmation in under a minute. We've seen a 30% drop in no-shows since the reminders kicked in.",
    name: "Dr. Rohit Bansal",
    role: "Founder, ClearSight Eye Clinic",
    location: "Bengaluru",
    specialty: "Ophthalmology",
    initials: "RB",
    color: "#5BC0EB",
  },
  {
    quote: "I was skeptical about AI handling patient calls, but FREMN sounds remarkably natural. Patients think they're talking to a staff member. Setup took less than a day.",
    name: "Dr. Anjali Krishnan",
    role: "Chief Physician, Wellness First OPD",
    location: "Chennai",
    specialty: "General Physician",
    initials: "AK",
    color: "#0F52BA",
  },
];

export default function Testimonials() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,400&display=swap');

        .test-section {
          padding: 100px 32px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .test-glow {
          position: absolute;
          width: 700px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(91,192,235,0.05) 0%, transparent 70%);
          bottom: 0; right: -200px;
          pointer-events: none;
        }

        .test-inner {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .test-eyebrow {
          text-align: center;
          font-size: 11.5px;
          font-weight: 500;
          color: #5BC0EB;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .test-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: #F0F4FF;
          text-align: center;
          letter-spacing: -0.02em;
          margin-bottom: 16px;
          line-height: 1.15;
        }

        .test-sub {
          text-align: center;
          font-size: 15px;
          color: #6B7A99;
          margin-bottom: 64px;
        }

        .test-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .test-card {
          background: rgba(26,31,43,0.5);
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          padding: 32px 28px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .test-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .test-card:hover {
          background: rgba(26,31,43,0.75);
          transform: translateY(-4px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
        }

        .test-card:hover::before { opacity: 1; }

        .quote-mark {
          font-family: 'Syne', sans-serif;
          font-size: 48px;
          line-height: 1;
          font-weight: 800;
          opacity: 0.15;
          margin-bottom: -12px;
        }

        .test-quote {
          font-size: 14.5px;
          color: rgba(240,244,255,0.65);
          line-height: 1.75;
          font-style: italic;
          font-weight: 300;
          flex: 1;
        }

        .test-footer {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .test-avatar {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: white;
          flex-shrink: 0;
        }

        .test-name {
          font-family: 'Syne', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: #F0F4FF;
        }

        .test-role {
          font-size: 12px;
          color: #6B7A99;
          margin-top: 2px;
        }

        .test-specialty {
          margin-left: auto;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 5px;
          flex-shrink: 0;
        }

        /* Stars */
        .test-stars {
          display: flex;
          gap: 3px;
        }

        .test-stars svg { width: 14px; height: 14px; }

        /* Bottom pilot CTA */
        .test-pilot {
          margin-top: 56px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }

        .test-pilot p {
          font-size: 15px;
          color: #6B7A99;
        }

        .test-pilot a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, #1E6BFF, #0F52BA);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          padding: 13px 28px;
          border-radius: 10px;
          text-decoration: none;
          box-shadow: 0 0 28px rgba(30,107,255,0.3);
          transition: all 0.25s ease;
        }

        .test-pilot a:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 40px rgba(30,107,255,0.5);
        }

        @media (max-width: 900px) {
          .test-grid { grid-template-columns: 1fr; gap: 14px; }
        }

        @media (max-width: 600px) {
          .test-section { padding: 72px 20px; }
        }
      `}</style>

      <section className="test-section" id="testimonials">
        <div className="test-glow" />
        <div className="test-inner">
          <p className="test-eyebrow">Real Results</p>
          <h2 className="test-heading">Clinics that never miss<br />a patient anymore</h2>
          <p className="test-sub">Early pilots. Real doctors. Real feedback.</p>

          <div className="test-grid">
            {testimonials.map((t, i) => (
              <div
                className="test-card"
                key={i}
                style={{ borderTopColor: `${t.color}25` }}
              >
                <style>{`.test-card:nth-child(${i+1})::before { background: linear-gradient(90deg, ${t.color}, transparent); }`}</style>

                <div className="test-stars">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} viewBox="0 0 14 14" fill={t.color}>
                      <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.3l-3.2 1.6.6-3.6L1.8 4.8l3.6-.5z"/>
                    </svg>
                  ))}
                </div>

                <div className="quote-mark" style={{ color: t.color }}>&quot;</div>
                <p className="test-quote">{t.quote}</p>

                <div className="test-footer">
                  <div
                    className="test-avatar"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}80)` }}
                  >
                    {t.initials}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="test-name">{t.name}</div>
                    <div className="test-role">{t.role} · {t.location}</div>
                  </div>
                  <span
                    className="test-specialty"
                    style={{ color: t.color, background: `${t.color}12`, border: `1px solid ${t.color}20` }}
                  >
                    {t.specialty}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="test-pilot">
            <p>Join clinics already running on FREMN AI</p>
            <a href="#contact">
              Request your pilot
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
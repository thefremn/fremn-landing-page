"use client";

export default function TrustBar() {
  const specialties = [
    { label: "Dental Clinics" },
    { label: "General Physician" },
    { label: "ENT Specialists" },
    { label: "Dermatology" },
    { label: "Orthopedics" },
    { label: "Pediatrics" },
    { label: "Ophthalmology" },
    { label: "Physiotherapy" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&family=DM+Sans:wght@300;400;500&display=swap');

        .trust-section {
          padding: 48px 32px;
          position: relative;
          overflow: hidden;
          font-family: 'DM Sans', sans-serif;
          border-top: 1px solid rgba(255,255,255,0.04);
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }

        .trust-label {
          text-align: center;
          font-size: 11.5px;
          font-weight: 500;
          color: #6B7A99;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }

        /* Scrolling marquee */
        .marquee-wrapper {
          position: relative;
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent);
        }

        .marquee-track {
          display: flex;
          gap: 12px;
          width: max-content;
          animation: marquee 28s linear infinite;
        }

        .marquee-track:hover { animation-play-state: paused; }

        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .specialty-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(26,31,43,0.6);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 100px;
          padding: 8px 18px 8px 12px;
          white-space: nowrap;
          font-size: 13.5px;
          color: rgba(240,244,255,0.6);
          font-weight: 400;
          transition: border-color 0.2s, color 0.2s;
          cursor: default;
        }

        .specialty-pill:hover {
          border-color: rgba(91,192,235,0.2);
          color: rgba(240,244,255,0.85);
        }

        .specialty-icon {
          font-size: 15px;
          line-height: 1;
        }

        /* Stats strip */
        .stats-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0;
          margin-top: 40px;
          flex-wrap: wrap;
        }

        .strip-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 40px;
          position: relative;
        }

        .strip-stat + .strip-stat::before {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 32px;
          background: rgba(255,255,255,0.07);
        }

        .strip-value {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #F0F4FF;
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .strip-value em {
          font-style: normal;
          color: #5BC0EB;
        }

        .strip-label {
          font-size: 12px;
          color: #6B7A99;
          margin-top: 5px;
          font-weight: 400;
          text-align: center;
        }

        @media (max-width: 640px) {
          .trust-section { padding: 40px 20px; }
          .strip-stat { padding: 16px 20px; }
          .strip-stat + .strip-stat::before { display: none; }
          .stats-strip { gap: 0; flex-direction: row; flex-wrap: wrap; justify-content: center; }
        }
      `}</style>

      <section className="trust-section">
        <p className="trust-label">Designed for outpatient clinics across specialties</p>

        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...specialties, ...specialties].map((s, i) => (
              <div className="specialty-pill" key={i}>
                {s.label}
              </div>
            ))}
          </div>
        </div>

        <div className="stats-strip">
          <div className="strip-stat">
            <div className="strip-value">24<em>/7</em></div>
            <div className="strip-label">Always online</div>
          </div>
          <div className="strip-stat">
            <div className="strip-value">3<em>x</em></div>
            <div className="strip-label">Channels covered</div>
          </div>
          <div className="strip-stat">
            <div className="strip-value">&lt;10<em>s</em></div>
            <div className="strip-label">Average response time</div>
          </div>
          <div className="strip-stat">
            <div className="strip-value">0<em>%</em></div>
            <div className="strip-label">Missed appointments</div>
          </div>
        </div>
      </section>
    </>
  );
}
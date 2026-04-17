"use client";

export default function ProblemSolution() {
  const problems = [
    {  text: "Calls missed during lunch & peak hours" },
    { text: "Staff overwhelmed with repetitive queries" },
    {  text: "Patients booking elsewhere due to no response" },
    {  text: "Follow-ups forgotten, patients don't return" },
  ];

  const solutions = [
    {  text: "Every call & message answered instantly, 24/7" },
    {  text: "AI handles bookings, FAQs & reschedules automatically" },
    {  text: "Patients stay — confirmed in under 60 seconds" },
    {  text: "Automated follow-up reminders sent via WhatsApp" },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .ps-section {
          padding: 100px 32px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .ps-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(30,107,255,0.06) 0%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .ps-inner {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .ps-eyebrow {
          text-align: center;
          font-size: 11.5px;
          font-weight: 500;
          color: #5BC0EB;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .ps-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(30px, 4vw, 46px);
          font-weight: 800;
          color: #F0F4FF;
          text-align: center;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 64px;
        }

        .ps-heading span { color: #1E6BFF; }

        .ps-grid {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          gap: 24px;
          align-items: start;
        }

        /* Panel */
        .ps-panel {
          background: rgba(26,31,43,0.5);
          border-radius: 20px;
          padding: 32px;
          border: 1px solid rgba(255,255,255,0.05);
        }

        .ps-panel-problem {
          border-color: rgba(239,68,68,0.1);
          background: rgba(239,68,68,0.03);
        }

        .ps-panel-solution {
          border-color: rgba(30,107,255,0.15);
          background: rgba(30,107,255,0.04);
        }

        .panel-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 24px;
        }

        .panel-tag-problem {
          color: #f87171;
          background: rgba(239,68,68,0.1);
        }

        .panel-tag-solution {
          color: #5BC0EB;
          background: rgba(91,192,235,0.1);
        }

        .panel-title {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #F0F4FF;
          margin-bottom: 24px;
          line-height: 1.3;
        }

        .panel-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .panel-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 14px;
          border-radius: 10px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.03);
          font-size: 14px;
          color: rgba(240,244,255,0.65);
          line-height: 1.5;
          transition: background 0.2s, border-color 0.2s;
        }

        .ps-panel-problem .panel-item:hover {
          background: rgba(239,68,68,0.05);
          border-color: rgba(239,68,68,0.1);
        }

        .ps-panel-solution .panel-item:hover {
          background: rgba(30,107,255,0.06);
          border-color: rgba(30,107,255,0.15);
        }

        .item-icon { font-size: 16px; flex-shrink: 0; margin-top: 1px; }

        /* Divider */
        .ps-divider {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding-top: 80px;
        }

        .divider-line {
          width: 1px;
          flex: 1;
          background: linear-gradient(to bottom, transparent, rgba(91,192,235,0.2), transparent);
          min-height: 80px;
        }

        .divider-arrow {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1E6BFF, #0F52BA);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 20px rgba(30,107,255,0.35);
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .ps-section { padding: 72px 20px; }
          .ps-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .ps-divider {
            flex-direction: row;
            padding-top: 0;
          }
          .divider-line {
            flex: 1;
            min-height: 1px;
            width: auto;
            height: 1px;
            background: linear-gradient(to right, transparent, rgba(91,192,235,0.2), transparent);
          }
          .divider-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>

      <section className="ps-section" id="problem">
        <div className="ps-glow" />
        <div className="ps-inner">
          <p className="ps-eyebrow">The Reality vs. The Solution</p>
          <h2 className="ps-heading">
            Your clinic is losing patients<br />
            <span>every hour it goes unanswered</span>
          </h2>

          <div className="ps-grid">
            {/* Problem Panel */}
            <div className="ps-panel ps-panel-problem">
              <div className="panel-tag panel-tag-problem">⚠ Without FREMN</div>
              <h3 className="panel-title">The front desk bottleneck</h3>
              <ul className="panel-list">
                {problems.map((p, i) => (
                  <li className="panel-item" key={i}>
                    <span className="item-icon">⚠</span>
                    {p.text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Arrow Divider */}
            <div className="ps-divider">
              <div className="divider-line" />
              <div className="divider-arrow">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 8h8M8 4l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="divider-line" />
            </div>

            {/* Solution Panel */}
            <div className="ps-panel ps-panel-solution">
              <div className="panel-tag panel-tag-solution">✦ With FREMN AI</div>
              <h3 className="panel-title">A front desk that never drops a call</h3>
              <ul className="panel-list">
                {solutions.map((s, i) => (
                  <li className="panel-item" key={i}>
                    <span className="item-icon">✦</span>
                    {s.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
"use client";

const pillars = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M17 12a2 2 0 0 1-2 2H5l-3 3V3a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M6 7.5h8M6 11h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "WhatsApp-native booking",
    desc: "Patients book, reschedule, and cancel entirely on WhatsApp — no app to download, no form to fill. Three messages and they're confirmed.",
    metric: "0",
    metricLabel: "app downloads for patients",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M16 6A6 6 0 0 0 4 6c0 6.5-2.5 8-2.5 8h17S16 12.5 16 6" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M11.5 18a1.73 1.73 0 0 1-3 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "Smart reminders & recall",
    desc: "24-hour and 2-hour reminders sent automatically. No-shows get rebooking messages. Recall reminders bring patients back at the right time.",
    metric: "35–45%",
    metricLabel: "fewer no-shows",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M3 18c0-3.9 3.1-5.5 7-5.5s7 1.6 7 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M15 3l1.5 1.5M16.5 3l-1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Patient care automation",
    desc: "Post-visit check-ins, pre-visit history collection, Google review requests, and dormant patient reactivation — all on autopilot.",
    metric: "24 / 7",
    metricLabel: "always on, zero effort",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="1.5" y="4" width="17" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M1.5 8h17" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M5 12.5h3.5M11.5 12.5h3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    title: "Payments & dashboard",
    desc: "Send UPI payment links on WhatsApp. View revenue, no-shows, and recovery — all in one real-time dashboard.",
    metric: "100%",
    metricLabel: "front desk coverage",
  },
];

export default function Features() {
  return (
    <section
      className="bg-white px-6 md:px-12 lg:px-24 py-20 md:py-28 relative overflow-hidden"
      id="features"
      aria-label="What FREMN does"
    >
      {/* ambient center glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(27,79,216,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* header */}
        <div className="text-center mb-14">
          <p className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase text-[#4D9FFF] mb-4">
            What FREMN Does
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0D1B3E] leading-[1.15] tracking-[-0.3px] mb-4">
            Your AI Patient Coordinator
          </h2>
          <p className="font-sans text-sm md:text-base text-[#0D1B3E]/65 max-w-md mx-auto leading-relaxed">
            Handle bookings, reminders, follow-ups, and payments with 100% front desk
            coverage — fully on WhatsApp.
          </p>
        </div>

        {/* 2 × 2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px rounded-2xl overflow-hidden"
          style={{ background: "#DDE3EF", boxShadow: "0 0 0 1px #DDE3EF" }}
        >
          {pillars.map((p, i) => (
            <div
              key={i}
              className="relative flex flex-col gap-6 p-5 md:p-8 group transition-colors duration-200"
              style={{ background: "#FFFFFF" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(27,79,216,0.03)")}
              onMouseLeave={e => (e.currentTarget.style.background = "#FFFFFF")}
            >
              {/* top row: icon + metric */}
              <div className="flex items-start justify-between gap-4">
                {/* icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, rgba(77,159,255,0.15) 0%, rgba(27,79,216,0.08) 100%)",
                    border: "1px solid rgba(77,159,255,0.2)",
                    color: "#4D9FFF",
                  }}
                >
                  {p.icon}
                </div>

                {/* metric */}
                <div className="text-right">
                  <div className="font-serif text-[28px] leading-none text-[#0D1B3E] tracking-tight">
                    {p.metric}
                  </div>
                  <div className="font-sans text-[10.5px] text-[#0D1B3E]/55 mt-1 leading-[1.35] max-w-[110px] text-right">
                    {p.metricLabel}
                  </div>
                </div>
              </div>

              {/* divider */}
              <div className="h-px w-full" style={{ background: "rgba(13,27,62,0.07)" }} aria-hidden="true" />

              {/* text */}
              <div>
                <h3 className="font-serif text-[19px] text-[#0D1B3E] leading-snug tracking-[-0.15px] mb-3">
                  {p.title}
                </h3>
                <p className="font-sans text-[13.5px] text-[#0D1B3E]/55 leading-[1.7]">
                  {p.desc}
                </p>
              </div>

              {/* hover top-edge accent */}
              <div
                className="absolute top-0 inset-x-0 h-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(90deg, transparent, rgba(77,159,255,0.5), transparent)" }}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>

        {/* bottom link */}
        <div className="text-center mt-12">
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 font-sans text-[13.5px] font-medium text-[#0D1B3E]/55 hover:text-[#1B4FD8] transition-colors duration-150"
          >
            See exactly how each step works
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 2.5v9M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

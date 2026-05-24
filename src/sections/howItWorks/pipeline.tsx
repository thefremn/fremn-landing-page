"use client";

const features = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 2a6 6 0 1 0 0 12A6 6 0 0 0 10 2zm0 10V8m0-2.5v.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M3 18c0-2.2 3.1-4 7-4s7 1.8 7 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Missed Call Recovery",
    desc: "Patient calls while you're busy — FREMN sends available slots on WhatsApp in under 60 seconds.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M17 12a2 2 0 0 1-2 2H5l-3 3V3a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
    title: "AI WhatsApp Receptionist",
    desc: "Books patients in 3 messages, operates 24/7, follows up until the slot is confirmed.",
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2" y="3" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.4"/>
        <path d="M2 8h16M7 1v4M13 1v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "Direct Calendar Booking",
    desc: "Books directly into your clinic schedule with real-time slot management. No double bookings, ever.",
  },
];

/* Live Transcript Mockup */
function TranscriptMockup() {
  const messages = [
    { from: "ai",      text: "Hi! You just called our clinic. Which day works best for your appointment?" },
    { from: "patient", text: "Monday works for me." },
    { from: "ai",      text: "Great! I have 10:00 AM or 3:30 PM available. Which do you prefer?" },
    { from: "patient", text: "3:30 PM please." },
    { from: "ai",      text: "Confirmed! Monday 3:30 PM booked. Reminder sent ✓" },
  ];

  return (
    <div className="rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
      {/* header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#e5e7eb]">
        <span className="font-sans font-semibold text-[14px] text-[#111827]">Live Transcript</span>
        <div className="flex items-center gap-2 bg-[#fef2f2] border border-[#fecaca] rounded-full px-3 py-1">
          <div className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse" />
          <span className="font-sans text-[11px] font-semibold text-[#ef4444]">Live  02:14</span>
        </div>
      </div>
      {/* messages */}
      <div className="flex flex-col gap-3 p-5">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === "patient" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 font-sans text-[13px] leading-[1.5] ${
                m.from === "ai"
                  ? "bg-[#f3f4f6] text-[#374151] rounded-tl-sm"
                  : "bg-[#2563eb] text-white rounded-tr-sm"
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Pipeline Visual */
function PipelineVisual() {
  const steps = [
    { label: "Patient Calls Clinic",      detail: "Missed call recovered in 60s",   badge: "Active", color: "#22c55e" },
    { label: "WhatsApp Booking",           detail: "Slot confirmed in 3 messages",    badge: "Live",   color: "#2563eb" },
    { label: "AI Follow-up & Reminders",  detail: "60% reduction in no-shows",       badge: "24/7",   color: "#16a34a" },
  ];
  return (
    <div className="flex flex-col gap-0">
      {steps.map((step, i) => (
        <div key={i} className="relative flex gap-4 items-start pb-6 last:pb-0">
          {/* connector line */}
          {i < steps.length - 1 && (
            <div className="absolute left-[15px] top-8 bottom-0 w-[2px] bg-[#e5e7eb]" aria-hidden="true" />
          )}
          {/* dot */}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10 border-2 border-white shadow-sm"
            style={{ background: step.color }}
          >
            <span className="font-sans font-bold text-white text-[11px]">{i + 1}</span>
          </div>
          <div className="flex-1 pt-1">
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="font-sans font-semibold text-[14px] text-[#111827]">{step.label}</span>
              <span
                className="font-sans text-[10px] font-semibold px-2.5 py-0.5 rounded-full text-white"
                style={{ background: step.color }}
              >{step.badge}</span>
            </div>
            <p className="font-sans text-[13px] text-[#6b7280] mt-0.5">{step.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Pipeline() {
  return (
    <section
      className="bg-white px-6 md:px-12 lg:px-24 py-20 md:py-28 border-t border-[#e5e7eb]"
      id="pipeline"
      aria-label="What you get"
    >
      <div className="max-w-6xl mx-auto">
        {/* header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-sans font-semibold tracking-[0.12em] uppercase text-[#2563eb] mb-4">What You Get</p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#111827] leading-[1.15] tracking-[-0.02em] mb-4">
            What You Get
          </h2>
          <p className="font-sans text-sm md:text-base text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            A complete system to recover missed calls, book patients automatically, and keep chairs filled.
          </p>
        </div>

        {/* top: 3-col feature blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {features.map((f, i) => (
            <div key={i} className="rounded-2xl border border-[#e5e7eb] bg-[#f9fafb] p-6">
              <div className="w-10 h-10 rounded-xl bg-[#eff6ff] border border-[#dbeafe] flex items-center justify-center text-[#2563eb] mb-4">
                {f.icon}
              </div>
              <h3 className="font-sans font-semibold text-[16px] text-[#111827] mb-2">{f.title}</h3>
              <p className="font-sans text-[13px] text-[#6b7280] leading-[1.65]">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* bottom: pipeline + transcript side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#f0fdf4] border border-[#bbf7d0] rounded-full px-4 py-1.5 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
              <span className="font-sans text-[12px] font-semibold text-[#166534]">Appointment Recovery Pipeline · 60% no-show reduction</span>
            </div>
            <PipelineVisual />
          </div>
          <TranscriptMockup />
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-sans font-semibold text-[15px] text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.45)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
          >
            Book Now!
          </a>
        </div>
      </div>
    </section>
  );
}

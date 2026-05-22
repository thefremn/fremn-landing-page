"use client";

import React, { useState } from "react";

/* ── Minimal stroke icons, 16×16, currentColor ───────────────── */
const Icon = ({ d, d2 }: { d: string; d2?: string }) => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d={d} stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round"/>
    {d2 && <path d={d2} stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>}
  </svg>
);

const PhoneMissed   = () => <Icon d="M3 2.5h3l1.5 3.5-2 1.5c.8 1.5 2.5 3.2 4 4l1.5-2 3.5 1.5V14c-8 1.5-13.5-5-11.5-11.5z" />;
const MessageDots   = () => <Icon d="M13 2H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2.5l2.5 3 2.5-3H13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" d2="M5 6.5h6M5 9h4" />;
const ClipboardList = () => <Icon d="M5 2h6a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z" d2="M6 2v2h4V2M5.5 7h5M5.5 10h5M5.5 13h3" />;
const CalCheck      = () => <Icon d="M2 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z" d2="M5 1v4M11 1v4M2 7h12M5.5 11l2 2 4-3.5" />;
const CalRefresh    = () => <Icon d="M2 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5H2V4z" d2="M5 1v4M11 1v4M2 9h12M5 13a4 4 0 0 0 7 0M5 13l-1.5-1.5M5 13l1.5-1.5" />;
const Users         = () => <Icon d="M11 8c1.2.4 3 1.3 3 3.5M2 11.5c0-2.2 1.8-3.5 4-3.5s4 1.3 4 3.5" d2="M6 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zM10.5 3a2 2 0 0 1 0 4" />;
const Shield        = () => <Icon d="M8 2L3 4v4c0 3 2.5 5.5 5 6 2.5-.5 5-3 5-6V4L8 2z" d2="M5.5 8l2 2 3-3" />;
const Bell          = () => <Icon d="M8 2a4 4 0 0 1 4 4c0 4 2 5 2 5H2s2-1 2-5a4 4 0 0 1 4-4z" d2="M6.5 15a1.5 1.5 0 0 0 3 0" />;
const Clock         = () => <Icon d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z" d2="M8 5v3.5l2.5 1.5" />;
const UserReturn    = () => <Icon d="M8 9c-2 0-5 1-5 3v1h10v-1c0-2-3-3-5-3z" d2="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM11 13c0-1.5 1-2.5 1-2.5" />;
const CalRepeat     = () => <Icon d="M2 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4H2V4z" d2="M5 1v4M11 1v4M2 8h12M4 12h6M4 12l1.5-1.5M4 12l1.5 1.5M12 14l-1.5-1.5M12 14l-1.5 1.5M10 14h2" />;
const Tooth         = () => <Icon d="M6 2C4.5 2 3 3 3 5c0 1.5.5 2.5 1 4l.5 4c0 .5.5 1 1 1h1l.5-3 1-1 1 1 .5 3h1c.5 0 1-.5 1-1l.5-4c.5-1.5 1-2.5 1-4 0-2-1.5-3-3-3H6z" />;
const HeartCheck    = () => <Icon d="M8 13.5S2 9.5 2 5.5a3 3 0 0 1 6-1 3 3 0 0 1 6 1c0 2-1.5 4-6 8z" d2="M5.5 6l1.5 1.5 3-3" />;
const FileText      = () => <Icon d="M4 2h5.5L12 4.5V14H4V2z" d2="M9 2v3h3M6 7.5h5M6 10h5M6 12.5h3" />;
const Star          = () => <Icon d="M8 2l1.5 3.5H13l-2.8 2 1 3.5L8 9.3l-3.2 1.7 1-3.5L3 5.5h3.5L8 2z" />;
const UserSpark     = () => <Icon d="M8 9c-2 0-5 1-5 3v1h7" d2="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM12 10v4M10 12h4" />;
const Receipt       = () => <Icon d="M3 2h10v12l-2-1.5-2 1.5-2-1.5L5 14 3 14V2z" d2="M6 6h5M6 9h5M6 12h3" />;
const CreditCard    = () => <Icon d="M2 4h12a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" d2="M1 8h14M4 11.5h2" />;
const GridCal       = () => <Icon d="M2 4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4z" d2="M5 1v4M11 1v4M2 7h12M2 10h12M5.5 7v7M10.5 7v7" />;
const UserCircle    = () => <Icon d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2z" d2="M8 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4zM4.5 13a3.5 3.5 0 0 1 7 0" />;
const BarChart      = () => <Icon d="M2 14h12" d2="M4 14V9M8 14V6M12 14V4" />;
const TrendUp       = () => <Icon d="M2 12L6.5 7 9 9.5 14 4" d2="M10 4h4v4" />;
const Layers        = () => <Icon d="M8 2l6 3-6 3-6-3 6-3z" d2="M2 8l6 3 6-3M2 11l6 3 6-3" />;
const StarMedal     = () => <Icon d="M8 2l1.5 3 3.5.5-2.5 2.5.5 3.5L8 10l-3 1.5.5-3.5L3 5.5l3.5-.5L8 2z" d2="M6 12l-1 3M10 12l1 3M6 15h4" />;

type Feature = { Icon: () => React.ReactElement; name: string; desc: string };
type Step = { number: string; label: string; short: string; tagline: string; features: Feature[] };

const steps: Step[] = [
  {
    number: "01", label: "Patient calls your clinic", short: "Missed calls",
    tagline: "Busy with a patient? FREMN makes sure no call goes to waste.",
    features: [
      { Icon: PhoneMissed,   name: "Missed call recovery",   desc: "Patient calls, you're busy — they get available slots on WhatsApp in 60 seconds." },
      { Icon: MessageDots,   name: "SMS backup",             desc: "No WhatsApp? Patient gets an SMS — nobody falls through the gap." },
      { Icon: ClipboardList, name: "Callback list",          desc: "Patients who need a call back appear in your dashboard — your receptionist never forgets." },
    ],
  },
  {
    number: "02", label: "Patient books on WhatsApp", short: "Booking",
    tagline: "The entire booking happens on WhatsApp — no app, no form, no phone tag.",
    features: [
      { Icon: CalCheck,   name: "WhatsApp booking",          desc: "Patient picks a slot, selects their doctor, and confirms — in 3 messages." },
      { Icon: CalRefresh, name: "Reschedule & cancel",       desc: "Patients change or cancel on WhatsApp — your schedule updates instantly." },
      { Icon: Users,      name: "Multi-doctor scheduling",   desc: "Each doctor has their own slots — patients pick who they want to see." },
      { Icon: Shield,     name: "Double-booking prevention", desc: "Slots are held while a patient confirms — no overlaps, ever." },
    ],
  },
  {
    number: "03", label: "FREMN fills your chair", short: "Reminders",
    tagline: "Reminders go out automatically — confirmed patients show up, empty slots get filled.",
    features: [
      { Icon: Bell,       name: "24-hour reminder",              desc: "Day-before reminder — patient replies YES to confirm or NO to reschedule." },
      { Icon: Clock,      name: "Same-day reminder",             desc: "2-hour reminder on the day — only if the patient hasn't already confirmed." },
      { Icon: UserReturn, name: "No-show recovery",              desc: "Patient misses their slot — FREMN automatically reaches out to rebook them." },
      { Icon: CalRepeat,  name: "Recall reminders",              desc: "FREMN messages patients when it's time for their next cleaning, scaling, or check-up." },
      { Icon: Tooth,      name: "Incomplete treatment follow-up",desc: "Patient skips RCT session 2 — FREMN sends a gentle reminder to come back and finish." },
    ],
  },
  {
    number: "04", label: "Care after every visit", short: "Follow-up",
    tagline: "Patients feel looked after — and keep coming back.",
    features: [
      { Icon: HeartCheck, name: "Post-visit check-in",           desc: "\"How are you feeling?\" sent 48 hours after every visit — concerns flagged to you immediately." },
      { Icon: FileText,   name: "Pre-visit medical history",     desc: "Patients fill their history on WhatsApp before arriving — ready when they walk in." },
      { Icon: Star,       name: "Google review request",         desc: "Happy patients get a one-tap Google review link — automatically after every positive visit." },
      { Icon: UserSpark,  name: "Dormant patient reactivation",  desc: "Patients you haven't seen in 6+ months — FREMN reaches out to bring them back." },
    ],
  },
  {
    number: "05", label: "Billing & payments", short: "Payments",
    tagline: "Generate invoices and collect payments — no paper, no phone calls.",
    features: [
      { Icon: Receipt,    name: "Invoice generation",            desc: "Generate a patient invoice in seconds after every appointment." },
      { Icon: CreditCard, name: "WhatsApp payment collection",   desc: "Payment link on WhatsApp — patients pay by UPI, card, or net banking instantly." },
    ],
  },
  {
    number: "06", label: "Know your clinic at a glance", short: "Dashboard",
    tagline: "Everything you need to run a smarter clinic — one dashboard, updated in real time.",
    features: [
      { Icon: GridCal,   name: "Appointments dashboard",    desc: "All today's appointments — confirmed, pending, no-show — in one live view." },
      { Icon: UserCircle,name: "Patient profiles",          desc: "Every patient's history, treatments, and all messages in one place." },
      { Icon: BarChart,  name: "Revenue dashboard",         desc: "Today's and this month's revenue — the moment you open FREMN." },
      { Icon: TrendUp,   name: "No-show revenue report",    desc: "See exactly how much revenue FREMN recovered for you each month." },
      { Icon: Layers,    name: "Revenue by treatment",      desc: "Which treatments bring the most revenue — cleanings, RCT, crowns — at a glance." },
      { Icon: StarMedal, name: "Monthly reputation report", desc: "New Google reviews, rating trend, and AI-drafted responses to negative reviews." },
    ],
  },
];

export default function HowItWorks() {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <section
      className="bg-[#F7F9FF] px-6 md:px-12 lg:px-24 py-20 md:py-28"
      id="how-it-works"
      aria-label="How FREMN works — 6-step journey"
    >
      <div className="max-w-6xl mx-auto">

        {/* header */}
        <div className="text-center mb-12">
          <p className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase text-[#4D9FFF] mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0D1B3E] leading-[1.15] tracking-[-0.3px] mb-4">
            From missed call to loyal patient —{" "}
            <em className="italic text-[#1B4FD8]">automatically.</em>
          </h2>
          <p className="font-sans text-sm md:text-base text-[#0D1B3E]/60 max-w-sm mx-auto">
            Six steps. Zero staff. Every patient looked after.
          </p>
        </div>

        {/* Step tabs */}
        <div
          className="flex gap-2 justify-center mb-8 overflow-x-auto pb-1"
          style={{ scrollbarWidth: "none" }}
          role="tablist"
          aria-label="Journey steps"
        >
          {steps.map((s, i) => (
            <button
              key={s.number}
              role="tab"
              aria-selected={active === i}
              aria-controls={`step-panel-${i}`}
              onClick={() => setActive(i)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full font-sans text-[12px] font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF] whitespace-nowrap flex-shrink-0"
              style={
                active === i
                  ? { background: "linear-gradient(135deg,#1B4FD8,#4D9FFF)", color: "white", boxShadow: "0 2px 12px rgba(27,79,216,0.4)" }
                  : { background: "rgba(13,27,62,0.04)", border: "1px solid rgba(13,27,62,0.09)", color: "rgba(13,27,62,0.45)" }
              }
            >
              <span className="text-[10px] font-semibold" style={{ color: active === i ? "rgba(255,255,255,0.75)" : "#1B4FD8" }}>
                {s.number}
              </span>
              {s.short}
            </button>
          ))}
        </div>

        {/* Active step panel */}
        <div
          id={`step-panel-${active}`}
          role="tabpanel"
          aria-label={step.label}
          className="rounded-2xl overflow-hidden"
          style={{ background: "#FFFFFF", border: "1px solid rgba(13,27,62,0.08)", boxShadow: "0 2px 16px rgba(13,27,62,0.05)" }}
        >
          {/* Step header */}
          <div className="relative px-4 py-5 md:px-8 md:py-8 overflow-hidden" style={{ borderBottom: "1px solid rgba(13,27,62,0.07)" }}>
            {/* decorative step number */}
            <span
              className="absolute right-6 top-1/2 -translate-y-1/2 font-serif leading-none select-none pointer-events-none"
              style={{ fontSize: "clamp(72px,10vw,120px)", color: "rgba(13,27,62,0.04)", letterSpacing: "-0.04em" }}
              aria-hidden="true"
            >
              {step.number}
            </span>

            <div className="relative flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
              {/* step badge */}
              <div
                className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-white text-[12px] font-sans font-semibold"
                style={{ background: "linear-gradient(135deg,#1B4FD8,#4D9FFF)", boxShadow: "0 2px 12px rgba(27,79,216,0.35)" }}
                aria-hidden="true"
              >
                {step.number}
              </div>

              <div className="flex-1 min-w-0">
                <p className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-[#4D9FFF] mb-1">
                  Step {step.number}
                </p>
                <h3 className="font-serif text-[22px] md:text-[26px] text-[#0D1B3E] leading-snug tracking-[-0.2px]">
                  {step.label}
                </h3>
              </div>

              <p className="font-sans text-[13px] text-[#0D1B3E]/60 leading-[1.65] max-w-xs flex-shrink-0">
                {step.tagline}
              </p>
            </div>
          </div>

          {/* Feature list */}
          <div className="p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
            {step.features.map((f, i) => (
              <div key={i} className="flex items-start gap-4 group">
                {/* icon container */}
                <div
                  className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center mt-0.5 transition-colors duration-150 group-hover:bg-[rgba(27,79,216,0.1)]"
                  style={{ background: "rgba(27,79,216,0.06)", border: "1px solid rgba(27,79,216,0.12)", color: "#1B4FD8" }}
                >
                  <f.Icon />
                </div>
                <div>
                  <p className="font-sans font-semibold text-[13.5px] text-[#0D1B3E] mb-1 leading-snug">{f.name}</p>
                  <p className="font-sans text-[12.5px] text-[#0D1B3E]/60 leading-[1.6]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-1.5 mt-5" aria-hidden="true">
          {steps.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="rounded-full transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF]"
              style={active === i
                ? { width: 24, height: 5, background: "#4D9FFF" }
                : { width: 5, height: 5, background: "rgba(13,27,62,0.22)" }
              }
              aria-label={`Go to step ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Data ─────────────────────────────────────────────────── */

const metrics = [
  { value: "60s",    label: "Missed call to booked slot",   sub: "avg. AI response time",        color: "#1B4FD8", bg: "#EEF3FF", border: "#C7D7FF" },
  { value: "40%",    label: "Avg no-show reduction",        sub: "after reminder automation",     color: "#16A34A", bg: "#F0FDF4", border: "#BBF7D0" },
  { value: "3×",     label: "More Google reviews",          sub: "per month, on autopilot",       color: "#D97706", bg: "#FFFBEB", border: "#FDE68A" },
  { value: "₹72K",   label: "Avg monthly revenue recovered", sub: "per clinic on FREMN",          color: "#1B4FD8", bg: "#EEF3FF", border: "#C7D7FF" },
];

const journey = [
  {
    n: "01", label: "Missed call",       time: "0s",       desc: "Clinic is busy with a patient",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 2.5h3l1.5 3.5-2 1.5c.8 1.5 2.5 3.2 4 4l1.5-2 3.5 1.5V14c-8 1.5-13.5-5-11.5-11.5z" stroke="#1B4FD8" strokeWidth="1.4" strokeLinejoin="round"/><line x1="14" y1="2" x2="16" y2="4" stroke="#DC2626" strokeWidth="1.4" strokeLinecap="round"/><line x1="16" y1="2" x2="14" y2="4" stroke="#DC2626" strokeWidth="1.4" strokeLinecap="round"/></svg>,
  },
  {
    n: "02", label: "FREMN detects",     time: "< 5s",     desc: "AI intercepts automatically",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#1B4FD8" strokeWidth="1.4"/><path d="M6 9l2 2 4-4" stroke="#1B4FD8" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    n: "03", label: "WhatsApp sent",     time: "60s",      desc: "Available slots delivered",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15 10a5 5 0 0 1-5 5H5l-3 3V5a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5z" stroke="#25D366" strokeWidth="1.4" strokeLinejoin="round"/><path d="M6 7h6M6 10h4" stroke="#25D366" strokeWidth="1.2" strokeLinecap="round"/></svg>,
  },
  {
    n: "04", label: "Patient books",     time: "~2 min",   desc: "Confirms in 3 messages",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="3" width="14" height="13" rx="2" stroke="#1B4FD8" strokeWidth="1.4"/><path d="M5 1v4M13 1v4M2 8h14" stroke="#1B4FD8" strokeWidth="1.3" strokeLinecap="round"/><path d="M6 12l2 2 4-3" stroke="#1B4FD8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  },
  {
    n: "05", label: "Chair filled",      time: "Done",     desc: "Revenue recovered",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2l1.8 3.6 4 .6-2.9 2.8.7 4L9 11l-3.6 2 .7-4L3.2 6.2l4-.6z" fill="#D97706" stroke="#D97706" strokeWidth="0.8" strokeLinejoin="round"/></svg>,
  },
];

const comparisons = [
  { label: "Missed call recovery",  before: 5,  after: 87, unit: "%",   higherIsBetter: true  },
  { label: "No-show rate",          before: 35, after: 8,  unit: "%",   higherIsBetter: false },
  { label: "Avg response time",     before: 28, after: 1,  unit: "min", higherIsBetter: false },
];

/* ─── Bar component with IntersectionObserver animation ──── */

function CompareBar({ label, before, after, unit, higherIsBetter, animate }: {
  label: string; before: number; after: number; unit: string; higherIsBetter: boolean; animate: boolean;
}) {
  const max = Math.max(before, after, 100);
  const beforePct = (before / max) * 100;
  const afterPct  = (after  / max) * 100;
  const beforeColor = higherIsBetter ? "rgba(13,27,62,0.18)" : "#DC2626";
  const afterColor  = higherIsBetter ? "#16A34A" : "#1B4FD8";

  return (
    <div className="flex flex-col gap-2.5">
      <span className="font-sans text-[12px] font-medium text-[#0D1B3E]/70">{label}</span>

      {/* Before */}
      <div className="flex items-center gap-3">
        <span className="font-sans text-[10px] text-[#0D1B3E]/40 w-[52px] flex-shrink-0">Before</span>
        <div className="flex-1 h-[7px] rounded-full bg-[#0D1B3E]/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: animate ? `${beforePct}%` : "0%",
              background: beforeColor,
              transition: "width 0.9s cubic-bezier(0.4,0,0.2,1) 0.1s",
            }}
          />
        </div>
        <span className="font-sans text-[11px] font-semibold w-[38px] text-right flex-shrink-0" style={{ color: beforeColor }}>
          {before}{unit}
        </span>
      </div>

      {/* After */}
      <div className="flex items-center gap-3">
        <span className="font-sans text-[10px] text-[#0D1B3E]/40 w-[52px] flex-shrink-0">With FREMN</span>
        <div className="flex-1 h-[7px] rounded-full bg-[#0D1B3E]/[0.06] overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{
              width: animate ? `${afterPct}%` : "0%",
              background: afterColor,
              transition: "width 0.9s cubic-bezier(0.4,0,0.2,1) 0.35s",
            }}
          />
        </div>
        <span className="font-sans text-[11px] font-semibold w-[38px] text-right flex-shrink-0" style={{ color: afterColor }}>
          {after}{unit}
        </span>
      </div>
    </div>
  );
}

/* ─── Main component ────────────────────────────────────────── */

export default function Infographics() {
  const barsRef = useRef<HTMLDivElement>(null);
  const [barsVisible, setBarsVisible] = useState(false);

  useEffect(() => {
    const el = barsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setBarsVisible(true); },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes ig-fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ig-card { animation: ig-fade-up 0.5s ease both; }
        .ig-card:nth-child(1) { animation-delay: 0.05s; }
        .ig-card:nth-child(2) { animation-delay: 0.12s; }
        .ig-card:nth-child(3) { animation-delay: 0.19s; }
        .ig-card:nth-child(4) { animation-delay: 0.26s; }
      `}</style>

      <section
        className="bg-white px-6 md:px-12 lg:px-24 py-16 md:py-24 relative overflow-hidden"
        aria-label="Impact by the numbers"
      >
        {/* ambient glow */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
          style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(27,79,216,0.05) 0%, transparent 70%)" }} />

        <div className="max-w-5xl mx-auto relative z-10">

          {/* ── Header ──────────────────────────────────────────── */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase text-[#4D9FFF] mb-4">
              By The Numbers
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#0D1B3E] leading-[1.15] tracking-[-0.3px] mb-4">
              The math behind every{" "}
              <em className="italic text-[#1B4FD8]">filled chair.</em>
            </h2>
            <p className="font-sans text-sm text-[#0D1B3E]/50 max-w-xs mx-auto leading-relaxed">
              Real outcomes from the FREMN platform across Indian dental clinics.
            </p>
          </div>

          {/* ── Metric tiles ────────────────────────────────────── */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-14 md:mb-20">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="ig-card rounded-2xl p-5 md:p-6 flex flex-col gap-2 relative overflow-hidden"
                style={{ background: m.bg, border: `1px solid ${m.border}` }}
              >
                {/* decorative circle */}
                <div className="absolute -right-4 -top-4 w-20 h-20 rounded-full pointer-events-none"
                  style={{ background: `${m.color}10` }} aria-hidden="true" />

                <span className="font-serif text-[32px] md:text-[38px] leading-none tracking-tight relative z-10"
                  style={{ color: m.color }}>
                  {m.value}
                </span>
                <p className="font-sans font-semibold text-[12px] md:text-[13px] text-[#0D1B3E]/80 leading-snug relative z-10">
                  {m.label}
                </p>
                <p className="font-sans text-[10.5px] text-[#0D1B3E]/45 leading-snug relative z-10">
                  {m.sub}
                </p>
              </div>
            ))}
          </div>

          {/* ── 60-second journey ───────────────────────────────── */}
          <div className="mb-14 md:mb-20">
            <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#0D1B3E]/40 mb-6 text-center">
              What happens in 60 seconds after a missed call
            </p>

            {/* Scrollable on mobile */}
            <div className="overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
              <div className="flex items-start min-w-[560px] md:min-w-0 px-2">
                {journey.map((step, i) => (
                  <div key={i} className="flex items-start flex-1">
                    {/* Step node */}
                    <div className="flex flex-col items-center gap-2.5 flex-shrink-0" style={{ width: 88 }}>
                      {/* icon circle */}
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          background: i === journey.length - 1
                            ? "linear-gradient(135deg,#1B4FD8,#4D9FFF)"
                            : "#FFFFFF",
                          border: i === journey.length - 1
                            ? "none"
                            : "1.5px solid rgba(13,27,62,0.1)",
                          boxShadow: i === journey.length - 1
                            ? "0 4px 16px rgba(27,79,216,0.3)"
                            : "0 1px 6px rgba(13,27,62,0.06)",
                        }}
                      >
                        {i === journey.length - 1
                          ? <svg width="20" height="20" viewBox="0 0 18 18" fill="none"><path d="M3 9l4.5 4.5 7.5-8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          : step.icon
                        }
                      </div>

                      {/* timing badge */}
                      <span
                        className="font-sans text-[10px] font-semibold px-2 py-0.5 rounded-full"
                        style={{
                          background: i === journey.length - 1 ? "#EEF3FF" : "rgba(13,27,62,0.05)",
                          color: i === journey.length - 1 ? "#1B4FD8" : "rgba(13,27,62,0.45)",
                          border: i === journey.length - 1 ? "1px solid #C7D7FF" : "1px solid rgba(13,27,62,0.08)",
                        }}
                      >
                        {step.time}
                      </span>

                      <div className="text-center">
                        <p className="font-sans font-semibold text-[11.5px] text-[#0D1B3E]/80 leading-snug">
                          {step.label}
                        </p>
                        <p className="font-sans text-[10px] text-[#0D1B3E]/40 leading-snug mt-0.5">
                          {step.desc}
                        </p>
                      </div>
                    </div>

                    {/* Connector arrow */}
                    {i < journey.length - 1 && (
                      <div className="flex-1 flex items-center justify-center mt-6 px-1" aria-hidden="true">
                        <svg width="100%" height="12" viewBox="0 0 60 12" preserveAspectRatio="none">
                          <line x1="0" y1="6" x2="48" y2="6" stroke="rgba(13,27,62,0.12)" strokeWidth="1.5"
                            strokeDasharray="4 3" />
                          <path d="M46 2.5L52 6l-6 3.5" fill="none" stroke="rgba(13,27,62,0.18)" strokeWidth="1.4"
                            strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Before / After bars ─────────────────────────────── */}
          <div
            ref={barsRef}
            className="rounded-2xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
            style={{
              background: "#F7F9FF",
              border: "1px solid rgba(13,27,62,0.07)",
            }}
          >
            {/* Left: label */}
            <div className="flex flex-col justify-center gap-4">
              <div>
                <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#4D9FFF] mb-2">
                  Before vs After
                </p>
                <h3 className="font-serif text-[22px] md:text-[26px] text-[#0D1B3E] leading-snug tracking-[-0.2px]">
                  The difference{" "}
                  <em className="italic text-[#1B4FD8]">FREMN makes.</em>
                </h3>
                <p className="font-sans text-[13px] text-[#0D1B3E]/50 leading-relaxed mt-3">
                  Averaged across clinics in the first 3 months on FREMN.
                </p>
              </div>

              {/* outcome callout */}
              <div className="rounded-xl px-4 py-3 inline-flex items-start gap-3"
                style={{ background: "#EEF3FF", border: "1px solid #C7D7FF" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5" aria-hidden="true">
                  <path d="M8 1l1.6 3.4 3.7.5-2.7 2.6.6 3.7L8 9.6 4.8 11.2l.6-3.7L2.7 4.9l3.7-.5z"
                    fill="#D97706" stroke="#D97706" strokeWidth="0.5"/>
                </svg>
                <p className="font-sans text-[12px] text-[#2D4A9A] leading-[1.6]">
                  Average clinic recovers{" "}
                  <span className="font-semibold text-[#1B4FD8]">₹72,000/month</span>{" "}
                  in previously missed revenue within 90 days.
                </p>
              </div>
            </div>

            {/* Right: comparison bars */}
            <div className="flex flex-col gap-6">
              {comparisons.map((c, i) => (
                <CompareBar key={i} {...c} animate={barsVisible} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

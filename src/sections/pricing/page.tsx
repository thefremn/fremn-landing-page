"use client";

import { useState, useEffect, useRef } from "react";

const fmt = (n: number) =>
  "₹" + Math.round(n).toLocaleString("en-IN");

function Slider({
  label,
  value,
  min,
  max,
  step,
  display,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-baseline justify-between">
        <span className="font-sans text-[13px] text-[#6b7280]">{label}</span>
        <span className="font-sans font-semibold text-[15px] text-[#111827] tabular-nums">{display}</span>
      </div>
      <div className="relative h-5 flex items-center">
        {/* track background */}
        <div className="absolute inset-x-0 h-[5px] rounded-full bg-[#e5e7eb]" />
        {/* filled track */}
        <div
          className="absolute left-0 h-[5px] rounded-full bg-gradient-to-r from-[#2563eb] to-[#60a5fa]"
          style={{ width: `${pct}%` }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer h-5"
          aria-label={label}
        />
        {/* thumb */}
        <div
          className="absolute w-5 h-5 rounded-full bg-white border-2 border-[#2563eb] shadow-[0_2px_8px_rgba(37,99,235,0.35)] pointer-events-none transition-transform"
          style={{ left: `calc(${pct}% - 10px)` }}
        />
      </div>
    </div>
  );
}

export default function Calculator() {
  const [missed,     setMissed]     = useState(8);
  const [ticket,     setTicket]     = useState(1200);
  const [conversion, setConversion] = useState(60);

  const daily   = Math.round(missed * ticket * (conversion / 100));
  const monthly = daily * 26;
  const yearly  = monthly * 12;
  const payback = Math.ceil(3000 / ticket);

  /* subtle entrance animation */
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="bg-[#f9fafb] px-6 md:px-12 lg:px-24 py-20 md:py-28 border-t border-[#e5e7eb]"
      aria-label="Lost revenue calculator"
    >
      <div className="max-w-5xl mx-auto">

        {/* header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-sans font-semibold tracking-[0.12em] uppercase text-[#2563eb] mb-4">
            Revenue Calculator
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#111827] leading-[1.15] tracking-[-0.02em] mb-4">
            See what missed calls are costing you
          </h2>
          <p className="font-sans text-sm md:text-base text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            Adjust the sliders to match your clinic. The numbers update in real time.
          </p>
        </div>

        {/* card */}
        <div
          className="rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_4px_32px_rgba(0,0,0,0.08)] overflow-hidden transition-all duration-500"
          style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr]">

            {/* ── LEFT: sliders ── */}
            <div className="p-8 md:p-10 flex flex-col gap-8">
              <div>
                <p className="font-sans font-semibold text-[11px] tracking-[0.1em] uppercase text-[#9ca3af] mb-6">
                  Your clinic numbers
                </p>
                <div className="flex flex-col gap-7">
                  <Slider
                    label="Missed calls & messages per day"
                    value={missed}
                    min={1} max={30} step={1}
                    display={String(missed)}
                    onChange={setMissed}
                  />
                  <Slider
                    label="Average ticket size"
                    value={ticket}
                    min={500} max={5000} step={100}
                    display={fmt(ticket)}
                    onChange={setTicket}
                  />
                  <Slider
                    label="Enquiry conversion rate"
                    value={conversion}
                    min={10} max={100} step={5}
                    display={`${conversion}%`}
                    onChange={setConversion}
                  />
                </div>
              </div>

              {/* formula hint */}
              <p className="font-sans text-[11px] text-[#9ca3af] leading-relaxed mt-auto">
                Based on industry averages for Indian dental clinics.
                Formula: missed calls × ticket size × conversion rate.
              </p>
            </div>

            {/* divider */}
            <div className="hidden md:block bg-[#e5e7eb]" aria-hidden="true" />
            <div className="block md:hidden h-px bg-[#e5e7eb]" aria-hidden="true" />

            {/* ── RIGHT: results ── */}
            <div className="p-8 md:p-10 flex flex-col gap-6 bg-white">
              <p className="font-sans font-semibold text-[11px] tracking-[0.1em] uppercase text-[#9ca3af]">
                Revenue you&apos;re losing
              </p>

              {/* big yearly number */}
              <div>
                <div className="font-sans font-extrabold text-[32px] sm:text-[52px] md:text-[60px] text-[#111827] leading-none tracking-tight tabular-nums truncate">
                  {fmt(yearly)}
                </div>
                <p className="font-sans text-[13px] text-[#9ca3af] mt-2">per year in missed revenue</p>
              </div>

              {/* breakdown row */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Per day",   value: fmt(daily) },
                  { label: "Per month", value: fmt(monthly) },
                ].map((r) => (
                  <div key={r.label} className="rounded-xl bg-[#f9fafb] border border-[#e5e7eb] px-3 sm:px-4 py-2.5 sm:py-3 min-w-0 overflow-hidden">
                    <div className="font-sans font-bold text-[14px] sm:text-[20px] text-[#111827] tabular-nums leading-none truncate">{r.value}</div>
                    <div className="font-sans text-[10px] sm:text-[11px] text-[#9ca3af] mt-1">{r.label}</div>
                  </div>
                ))}
              </div>

              {/* callout */}
              <div className="rounded-xl bg-[#eff6ff] border border-[#dbeafe] px-5 py-4">
                <p className="font-sans text-[13px] text-[#1e40af] leading-[1.65]">
                  You&apos;re leaving{" "}
                  <span className="font-bold">{fmt(yearly)}</span> on the table every year.
                  FREMN pays for itself with just{" "}
                  <span className="font-bold">{payback} recovered appointment{payback !== 1 ? "s" : ""}</span>{" "}
                  per month.
                </p>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3 sm:py-4 rounded-full font-sans font-semibold text-[13px] sm:text-[15px] text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.45)] transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
              >
                Recover That Revenue
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

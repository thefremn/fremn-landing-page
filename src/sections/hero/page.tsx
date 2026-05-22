"use client";

import { useState } from "react";

const fmt = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function HeroSection() {
  // Calculator state — matches content.md inputs
  const [missed,     setMissed]     = useState(8);
  const [ticket,     setTicket]     = useState(1200);
  const [conversion, setConversion] = useState(60);

  // content.md formula: missed × ticket × conversion = daily
  const daily   = Math.round(missed * ticket * (conversion / 100));
  const monthly = daily * 26;
  const yearly  = monthly * 12;

  // FREMN cost assumption for payback line (₹3000/mo placeholder)
  const fremnMonthly = 3000;
  const paybackAppts = Math.ceil(fremnMonthly / ticket);

  const fillMissed     = `${((missed - 1) / (30 - 1)) * 100}%`;
  const fillTicket     = `${((ticket - 500) / (5000 - 500)) * 100}%`;
  const fillConversion = `${((conversion - 10) / (100 - 10)) * 100}%`;

  return (
    <>
      <style>{`
        .hero-range {
          appearance: none;
          -webkit-appearance: none;
          width: 100%;
          height: 20px;
          background: transparent;
          cursor: pointer;
          outline: none;
        }
        .hero-range::-webkit-slider-runnable-track {
          height: 5px;
          border-radius: 99px;
          background: linear-gradient(
            90deg,
            #4D9FFF 0%,
            #1B4FD8 var(--fill, 40%),
            rgba(13,27,62,0.1) var(--fill, 40%),
            rgba(13,27,62,0.1) 100%
          );
        }
        .hero-range::-moz-range-track {
          height: 5px; border-radius: 99px;
          background: rgba(13,27,62,0.1);
        }
        .hero-range::-moz-range-progress {
          height: 5px; border-radius: 99px;
          background: linear-gradient(90deg,#4D9FFF,#1B4FD8);
        }
        .hero-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px; height: 16px; margin-top: -5.5px;
          border-radius: 50%;
          background: white; border: 2px solid #1B4FD8;
          box-shadow: 0 2px 8px rgba(27,79,216,0.4);
          transition: transform .12s, box-shadow .18s;
        }
        .hero-range:hover::-webkit-slider-thumb  { transform: scale(1.1); }
        .hero-range:active::-webkit-slider-thumb { transform: scale(1.15); }
        .hero-range::-moz-range-thumb {
          width: 16px; height: 16px; border-radius: 50%;
          background: white; border: 2px solid #1B4FD8;
          box-shadow: 0 2px 8px rgba(27,79,216,0.4); cursor: pointer;
        }
        @keyframes hero-fade-up {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .h-a1 { animation: hero-fade-up .55s .05s ease both; }
        .h-a2 { animation: hero-fade-up .55s .14s ease both; }
        .h-a3 { animation: hero-fade-up .55s .24s ease both; }
        .h-a4 { animation: hero-fade-up .55s .34s ease both; }
        .h-a5 { animation: hero-fade-up .55s .18s ease both; }
      `}</style>

      <section
        className="bg-white px-6 md:px-12 lg:px-24 py-16 md:py-24 lg:py-32 relative overflow-hidden"
        aria-label="Hero"
      >
        {/* ambient glows */}
        <div className="absolute pointer-events-none" aria-hidden="true"
          style={{ width:640, height:640, borderRadius:"50%",
            background:"radial-gradient(circle,rgba(27,79,216,0.06) 0%,transparent 65%)",
            top:"-160px", right:"-120px" }} />
        <div className="absolute pointer-events-none" aria-hidden="true"
          style={{ width:400, height:400, borderRadius:"50%",
            background:"radial-gradient(circle,rgba(77,159,255,0.04) 0%,transparent 70%)",
            bottom:"-100px", left:"-80px" }} />

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[55fr_45fr] gap-12 lg:gap-20 items-center relative z-10">

          {/* ── LEFT ─────────────────────────────────────────── */}
          <div className="flex flex-col">

            <p className="h-a1 text-[10px] font-sans font-semibold tracking-[0.12em] uppercase text-[#4D9FFF] mb-5">
              Designed for Indian Dental Clinics
            </p>

            <h1 className="h-a2 font-serif text-[36px] sm:text-5xl md:text-6xl lg:text-[68px] text-[#0D1B3E] leading-[1.08] tracking-[-0.5px] mb-6">
              Never miss a<br />patient{" "}
              <em className="italic text-[#4D9FFF]">again.</em>
            </h1>

            <p className="h-a3 font-sans text-[15px] md:text-base text-[#0D1B3E]/55 leading-[1.75] mb-10 max-w-[440px]">
              FREMN handles your bookings, reminders, follow-ups, and billing
              on WhatsApp — so every missed call becomes a filled chair.
            </p>

            {/* Stats row */}
            <div className="h-a3 flex items-start flex-wrap gap-y-4 mb-10">
              {[
                { value: "60s",  label: "Missed call → booked slot" },
                { value: "0",    label: "App downloads needed" },
                { value: "24/7", label: "Automatic front desk" },
              ].map((s, i) => (
                <div key={s.label} className="flex flex-col items-start px-5 relative">
                  {i > 0 && (
                    <div className="absolute left-0 top-1 h-8 w-px bg-[#0D1B3E]/[0.1]" aria-hidden="true" />
                  )}
                  <span className="font-serif text-[28px] leading-none text-[#0D1B3E]">{s.value}</span>
                  <span className="font-sans text-[10.5px] text-[#0D1B3E]/55 mt-1 leading-[1.4] max-w-[80px]">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="h-a4 flex items-center gap-3 flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-7 py-3 rounded-lg font-sans font-semibold text-sm text-white bg-gradient-to-r from-[#1B4FD8] to-[#4D9FFF] hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(27,79,216,0.5)] active:scale-[0.99] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF]"
              >
                Book a Free Demo →
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-1 px-7 py-3 rounded-lg font-sans font-medium text-sm text-[#0D1B3E]/60 border border-[#0D1B3E]/[0.15] hover:border-[#0D1B3E]/40 hover:text-[#0D1B3E] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF]"
              >
                See How It Works ↓
              </a>
            </div>
          </div>

          {/* ── RIGHT — calculator ───────────────────────────── */}
          <div className="h-a5">
            <div
              className="relative rounded-2xl p-6"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(13,27,62,0.08)",
                boxShadow: "0 8px 40px rgba(13,27,62,0.08), 0 2px 8px rgba(13,27,62,0.04)",
              }}
            >
              {/* top accent */}
              <div className="absolute top-0 left-6 right-6 h-[1px] rounded-full"
                style={{ background:"linear-gradient(to right,transparent,rgba(77,159,255,0.5),transparent)" }}
                aria-hidden="true" />

              <p className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase text-[#0D1B3E]/55 mb-1">
                How Much Are You Losing?
              </p>
              <h3 className="font-serif text-xl text-[#0D1B3E] mb-5 leading-snug">
                See what missed calls are<br />
                <em className="italic text-[#4D9FFF]">costing you.</em>
              </h3>

              {/* Slider — missed calls/messages per day */}
              <div className="mb-4">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-sans text-[12px] text-[#0D1B3E]/60">Missed calls & messages / day</span>
                  <span className="font-sans text-[13px] font-medium text-[#0D1B3E] tabular-nums">{missed}</span>
                </div>
                <input type="range" min={1} max={30} step={1} value={missed}
                  onChange={e => setMissed(Number(e.target.value))}
                  className="hero-range" style={{ ["--fill" as string]: fillMissed }}
                  aria-label="Missed calls per day" />
              </div>

              {/* Slider — average ticket size */}
              <div className="mb-4">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-sans text-[12px] text-[#0D1B3E]/60">Avg ticket size</span>
                  <span className="font-sans text-[13px] font-medium text-[#0D1B3E] tabular-nums">{fmt(ticket)}</span>
                </div>
                <input type="range" min={500} max={5000} step={100} value={ticket}
                  onChange={e => setTicket(Number(e.target.value))}
                  className="hero-range" style={{ ["--fill" as string]: fillTicket }}
                  aria-label="Average ticket size" />
              </div>

              {/* Slider — conversion rate */}
              <div className="mb-5">
                <div className="flex justify-between items-baseline mb-2">
                  <span className="font-sans text-[12px] text-[#0D1B3E]/60">Conversion rate</span>
                  <span className="font-sans text-[13px] font-medium text-[#0D1B3E] tabular-nums">{conversion}%</span>
                </div>
                <input type="range" min={10} max={100} step={5} value={conversion}
                  onChange={e => setConversion(Number(e.target.value))}
                  className="hero-range" style={{ ["--fill" as string]: fillConversion }}
                  aria-label="Enquiry conversion rate" />
              </div>

              <div className="h-px bg-[#0D1B3E]/[0.07] mb-5" aria-hidden="true" />

              {/* Results */}
              <div className="grid grid-cols-3 gap-3 mb-5">
                {[
                  { label: "Per day",   val: fmt(daily) },
                  { label: "Per month", val: fmt(monthly) },
                  { label: "Per year",  val: fmt(yearly) },
                ].map(r => (
                  <div key={r.label}
                    className="rounded-xl p-3 text-center"
                    style={{ background:"#F5F7FB", border:"1px solid rgba(13,27,62,0.06)" }}>
                    <div className="font-serif text-[18px] leading-none text-[#DC2626] tabular-nums">{r.val}</div>
                    <div className="font-sans text-[10px] text-[#0D1B3E]/55 mt-1">{r.label}</div>
                  </div>
                ))}
              </div>

              {/* Callout */}
              <div className="rounded-xl px-4 py-3 mb-4"
                style={{ background:"#EEF3FF", border:"1px solid #C7D7FF" }}>
                <p className="font-sans text-[12px] text-[#2D4A9A] leading-[1.6]">
                  You&apos;re leaving <span className="text-[#1B4FD8] font-semibold">{fmt(yearly)}</span> on the table every year.
                  FREMN pays for itself with just{" "}
                  <span className="text-[#1B4FD8] font-semibold">{paybackAppts} recovered appointments</span>{" "}
                  per month.
                </p>
              </div>

              <a href="#contact"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg font-sans font-semibold text-[13px] text-white bg-gradient-to-r from-[#1B4FD8] to-[#4D9FFF] hover:shadow-[0_8px_24px_rgba(27,79,216,0.45)] transition-shadow duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF]"
              >
                Book a Demo — Recover That Revenue →
              </a>

              <p className="font-sans text-[10px] text-[#0D1B3E]/45 text-center mt-3 leading-[1.5]">
                Based on industry averages for Indian dental clinics.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

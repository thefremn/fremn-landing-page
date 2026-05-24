"use client";

import { useEffect, useRef, useState } from "react";
import { PhoneCall, MessageSquare, CalendarCheck, Clock } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: <PhoneCall size={22} aria-hidden="true" />,
    title: "Patient Calls",
    desc: "Your line is busy or it's after hours",
    color: "#6b7280",
    bg: "#f9fafb",
    border: "#e5e7eb",
  },
  {
    num: "02",
    icon: <MessageSquare size={22} aria-hidden="true" />,
    title: "FREMN Replies",
    desc: "WhatsApp message sent in under 60 seconds",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    num: "03",
    icon: <CalendarCheck size={22} aria-hidden="true" />,
    title: "Slot Confirmed",
    desc: "Booked in 3 messages, any time of day",
    color: "#2563eb",
    bg: "#eff6ff",
    border: "#bfdbfe",
  },
  {
    num: "04",
    icon: <Clock size={22} aria-hidden="true" />,
    title: "Auto Reminder",
    desc: "Sent 24 hrs before — no-show prevented",
    color: "#7c3aed",
    bg: "#f5f3ff",
    border: "#ddd6fe",
  },
];

const messages = [
  { from: "ai", text: "Hi! You just called City Dental. We couldn't pick up — which day works for your appointment?", delay: 0 },
  { from: "pt", text: "Monday please", delay: 700 },
  { from: "ai", text: "Got it! Monday I have 10:00 AM or 3:30 PM free. Which works?", delay: 1500 },
  { from: "pt", text: "3:30 PM works perfectly", delay: 2400 },
  { from: "ai", text: "Confirmed. Monday 3:30 PM with Dr. Mehta. I'll send you a reminder 24 hours before.", delay: 3300 },
];

function PhoneMockup({ play }: { play: boolean }) {
  const [visible, setVisible] = useState<boolean[]>(messages.map(() => false));

  useEffect(() => {
    if (!play) return;
    setVisible(messages.map(() => false));
    const timers = messages.map((m, i) =>
      setTimeout(
        () => setVisible((v) => v.map((x, j) => (j <= i ? true : x))),
        m.delay + 400
      )
    );
    return () => timers.forEach(clearTimeout);
  }, [play]);

  return (
    <div
      className="relative mx-auto w-[290px] rounded-[36px] border-[7px] border-[#1a1a1a] bg-[#1a1a1a] shadow-[0_32px_80px_rgba(0,0,0,0.22)]"
      aria-label="WhatsApp conversation demo"
    >
      {/* notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#1a1a1a] rounded-b-2xl z-10" aria-hidden="true" />

      <div className="rounded-[30px] overflow-hidden bg-white">
        {/* WhatsApp header */}
        <div className="bg-[#075e54] px-4 pt-8 pb-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#25d366] flex items-center justify-center flex-shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="white" aria-hidden="true">
              <path d="M9 1C4.58 1 1 4.58 1 9c0 1.42.37 2.75 1.02 3.91L1 17l4.18-1.09A8 8 0 1 0 9 1z"/>
            </svg>
          </div>
          <div>
            <div className="text-white font-semibold text-[13px] leading-none">City Dental Care</div>
            <div className="text-[#a7f3d0] text-[10px] mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] inline-block" aria-hidden="true" />
              online
            </div>
          </div>
        </div>

        {/* chat */}
        <div
          className="flex flex-col gap-2 p-3 min-h-[300px]"
          style={{ background: "#e5ddd5" }}
        >
          <div className="self-center bg-white/70 rounded-full px-3 py-0.5 text-[9px] text-[#6b7280] font-medium">
            Today
          </div>

          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.from === "pt" ? "justify-end" : "justify-start"}`}
              style={{
                opacity: visible[i] ? 1 : 0,
                transform: visible[i] ? "translateY(0)" : "translateY(6px)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-3 py-2 text-[11px] leading-[1.5] shadow-sm ${
                  m.from === "ai"
                    ? "bg-white text-[#111827] rounded-tl-sm"
                    : "bg-[#dcf8c6] text-[#111827] rounded-tr-sm"
                }`}
              >
                {m.text}
                <span className="block text-right text-[8px] text-[#9ca3af] mt-0.5">
                  {m.from === "ai" ? "FREMN" : "You"} · just now
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* input bar */}
        <div className="flex items-center gap-2 px-3 py-2 bg-[#f0f0f0] border-t border-[#e5e7eb]">
          <div className="flex-1 bg-white rounded-full px-3 py-1.5 text-[10px] text-[#9ca3af]">
            Message
          </div>
          <div className="w-7 h-7 rounded-full bg-[#25d366] flex items-center justify-center flex-shrink-0">
            <svg width="13" height="13" viewBox="0 0 14 14" fill="white" aria-hidden="true">
              <path d="M2 7l10-5-5 10V8L2 7z"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setPlay(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="bg-white px-6 md:px-12 lg:px-24 py-20 md:py-28 border-t border-[#e5e7eb]"
      aria-label="How it works"
    >
      <div className="max-w-6xl mx-auto">

        {/* header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: play ? 1 : 0,
            transform: play ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <p className="text-[11px] font-sans font-semibold tracking-[0.12em] uppercase text-[#2563eb] mb-4">
            How It Works
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#111827] leading-[1.15] tracking-[-0.02em] mb-4">
            From missed call to booked slot
          </h2>
          <p className="font-sans text-sm md:text-base text-[#6b7280] max-w-sm mx-auto leading-relaxed">
            Four steps. Fully automatic. Zero staff effort.
          </p>
        </div>

        {/* steps */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 mb-20">
          {/* dashed connector — desktop only */}
          <div
            className="hidden md:block absolute top-9 left-[12.5%] right-[12.5%] h-px z-0"
            style={{ borderTop: "2px dashed #e5e7eb" }}
            aria-hidden="true"
          />

          {steps.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center relative z-10 px-3"
              style={{
                opacity: play ? 1 : 0,
                transform: play ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.5s ease ${i * 0.12}s, transform 0.5s ease ${i * 0.12}s`,
              }}
            >
              <div
                className="w-[68px] h-[68px] rounded-2xl flex items-center justify-center mb-4 shadow-sm border"
                style={{ background: s.bg, borderColor: s.border, color: s.color }}
              >
                {s.icon}
              </div>
              <span
                className="font-sans font-bold text-[10px] tracking-widest mb-1"
                style={{ color: s.color }}
              >
                {s.num}
              </span>
              <div className="font-sans font-bold text-[14px] text-[#111827] mb-1 leading-snug">
                {s.title}
              </div>
              <div className="font-sans text-[12px] text-[#9ca3af] leading-[1.5] max-w-[110px]">
                {s.desc}
              </div>
            </div>
          ))}
        </div>

        {/* phone + bullet points */}
        <div
          className="flex flex-col md:flex-row items-center gap-12 md:gap-16"
          style={{
            opacity: play ? 1 : 0,
            transform: play ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.55s, transform 0.6s ease 0.55s",
          }}
        >

          <div className="flex-shrink-0">
            <PhoneMockup play={play} />
          </div>

          <div className="flex flex-col gap-7 max-w-sm">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M9 1v4M9 13v4M1 9h4M13 9h4M3.22 3.22l2.83 2.83M11.95 11.95l2.83 2.83M14.78 3.22l-2.83 2.83M6.05 11.95l-2.83 2.83" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                ),
                label: "60-second response",
                desc: "The moment a call is missed, FREMN is already messaging the patient.",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <circle cx="9" cy="9" r="7.5" stroke="#2563eb" strokeWidth="1.5"/>
                    <path d="M9 5v4l2.5 2" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                label: "Works around the clock",
                desc: "2 AM, Sunday, public holiday — every missed call gets the same instant reply.",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                    <path d="M3 9l4.5 4.5 7.5-9" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                label: "No staff involvement",
                desc: "The appointment books itself. Your team just sees a new confirmed slot.",
              },
            ].map((item) => (
              <div key={item.label} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#eff6ff] border border-[#dbeafe] flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-sans font-semibold text-[14px] text-[#111827] mb-1">
                    {item.label}
                  </div>
                  <div className="font-sans text-[13px] text-[#6b7280] leading-[1.65]">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}

            <a
              href="#contact"
              className="self-start inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-sans font-semibold text-[14px] text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
            >
              See it live →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

/* ── Count-up hook ───────────────────────────────────────────────────────── */
function useCountUp(target: number, triggered: boolean, duration = 1500) {
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!triggered) return;
    const start = performance.now();
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3); // ease-out cubic
      setValue(Math.round(eased * target));
      if (t < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [triggered, target, duration]);

  return value;
}

/* ── Feature Card 1 — Automated Payment Collection ── */
function PaymentCard() {
  return (
    <div className="group relative rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] hover:border-[#bfdbfe] cursor-default overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
      <div className="rounded-xl bg-[#f9fafb] border border-[#e5e7eb] p-4 text-[12px] font-sans">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-[#111827]">Overdue</span>
          <span className="px-2 py-0.5 rounded-full bg-[#fef3c7] text-[#92400e] font-semibold text-[10px]">3</span>
        </div>
        {[
          { name: "Priya S.", amount: "₹4,200", days: "30 days" },
          { name: "Rahul M.", amount: "₹6,800", days: "14 days" },
        ].map((p) => (
          <div key={p.name} className="flex items-center gap-2 py-1.5 border-b border-[#f3f4f6] last:border-0">
            <div className="w-7 h-7 rounded-full bg-[#dbeafe] flex items-center justify-center flex-shrink-0 font-semibold text-[#2563eb] text-[9px]">{p.name[0]}</div>
            <span className="flex-1 text-[#374151]">{p.name}</span>
            <span className="text-[#111827] font-semibold">{p.amount}</span>
            <span className="text-[#9ca3af] text-[10px]">{p.days}</span>
          </div>
        ))}
        <div className="flex items-center justify-between mt-3 mb-2">
          <span className="font-semibold text-[#111827]">Paid</span>
          <span className="px-2 py-0.5 rounded-full bg-[#dcfce7] text-[#166534] font-semibold text-[10px]">2</span>
        </div>
        <div className="flex items-center gap-2 py-1.5">
          <div className="w-7 h-7 rounded-full bg-[#d1fae5] flex items-center justify-center flex-shrink-0 font-semibold text-[#16a34a] text-[9px]">A</div>
          <span className="flex-1 text-[#374151]">Anita R.</span>
          <span className="text-[#111827] font-semibold">₹3,500</span>
          <span className="text-[#16a34a] text-[10px] font-medium">Paid today</span>
        </div>
        <div className="grid grid-cols-3 gap-2 mt-4">
          {["UPI", "Visa", "MC", "NetBank", "RuPay", "PhonePe"].map((pm) => (
            <div key={pm} className="rounded-lg bg-white border border-[#e5e7eb] py-1.5 flex items-center justify-center">
              <span className="font-sans font-semibold text-[9px] text-[#6b7280]">{pm}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="font-sans font-bold text-[19px] text-[#111827] leading-snug mb-2">Automated Payment Collection</h3>
        <p className="font-sans text-[14px] text-[#6b7280] leading-[1.7]">AI sends invoices and payment links on WhatsApp. Patients pay by UPI, card, or net banking instantly.</p>
      </div>
    </div>
  );
}

/* ── Feature Card 2 — WhatsApp Appointment Booking (animated) ── */
function WhatsAppCard({ triggered }: { triggered: boolean }) {
  const revenue = useCountUp(52,   triggered, 1600);
  const calls   = useCountUp(1247, triggered, 1800);
  const pct     = useCountUp(34,   triggered, 1400);

  const stats = [
    { label: "Revenue Recovered", value: `₹${revenue}k`, badge: `+${pct}%`, badgeColor: "#dcfce7", badgeText: "#166534" },
    { label: "Calls answered",    value: calls.toLocaleString(), badge: null },
    { label: "Missed calls",      value: "0", badge: null },
  ];

  return (
    <div className="group relative rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] hover:border-[#bfdbfe] cursor-default overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
      <div className="rounded-xl bg-[#f9fafb] border border-[#e5e7eb] p-4 font-sans text-[12px]">
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-xl bg-white border border-[#e5e7eb] p-3 flex flex-col gap-1.5">
              <span className="text-[10px] text-[#9ca3af] leading-tight">{stat.label}</span>
              <span className="font-bold text-[#111827] text-[22px] leading-none tabular-nums">{stat.value}</span>
              {stat.badge && (
                <span className="self-start px-1.5 py-0.5 rounded-full text-[9px] font-semibold"
                  style={{ background: stat.badgeColor, color: stat.badgeText }}>{stat.badge}</span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl bg-[#eff6ff] border border-[#dbeafe] p-3">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-[#22c55e]" />
            <span className="text-[10px] font-semibold text-[#2563eb]">WhatsApp — Booking confirmed ✓</span>
          </div>
          <span className="text-[11px] text-[#374151]">Monday 3:30 PM booked for Priya Sharma</span>
        </div>
      </div>
      <div>
        <h3 className="font-sans font-bold text-[19px] text-[#111827] leading-snug mb-2">WhatsApp Appointment Booking</h3>
        <p className="font-sans text-[14px] text-[#6b7280] leading-[1.7]">Patients book, reschedule, and confirm appointments on WhatsApp — no app, no form, no phone tag.</p>
      </div>
    </div>
  );
}

/* ── Feature Card 3 — 24/7 Missed Call Recovery (animated) ── */
function MissedCallCard({ triggered }: { triggered: boolean }) {
  const handled = useCountUp(47, triggered, 1600);
  const pending = useCountUp(12, triggered, 1200);

  const patients = [
    { name: "Arjun Sharma", status: "New patient • Teeth cleaning", init: "AS" },
    { name: "Meera Nair",   status: "Follow-up • Root canal",       init: "MN" },
    { name: "Suresh K.",    status: "Missed call • Callback",       init: "SK" },
  ];

  return (
    <div className="group relative rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] hover:border-[#bfdbfe] cursor-default overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
      <div className="rounded-xl bg-[#f9fafb] border border-[#e5e7eb] p-4 font-sans text-[12px]">
        <div className="flex items-center justify-between mb-3">
          <span className="font-semibold text-[#111827]">Patient Queue</span>
          <span className="px-2.5 py-1 rounded-full bg-[#eff6ff] text-[#2563eb] font-semibold text-[13px] tabular-nums">
            {pending} pending
          </span>
        </div>
        {patients.map((p) => (
          <div key={p.name} className="flex items-center gap-2.5 py-2 border-b border-[#f3f4f6] last:border-0">
            <div className="w-7 h-7 rounded-full bg-[#dbeafe] flex items-center justify-center flex-shrink-0 font-semibold text-[#2563eb] text-[9px]">{p.init}</div>
            <div className="flex-1 min-w-0">
              <div className="text-[#111827] font-medium truncate">{p.name}</div>
              <div className="text-[#9ca3af] text-[10px]">{p.status}</div>
            </div>
          </div>
        ))}
        <div className="mt-3 flex items-center justify-between rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] px-3 py-2">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" aria-hidden="true" />
            <span className="text-[11px] font-medium text-[#166534]">Messaging now · Arjun Sharma · 0:12</span>
          </div>
          <span className="font-bold text-[#111827] text-[22px] tabular-nums">{handled}</span>
        </div>
      </div>
      <div>
        <h3 className="font-sans font-bold text-[19px] text-[#111827] leading-snug mb-2">24/7 Missed Call Recovery</h3>
        <p className="font-sans text-[14px] text-[#6b7280] leading-[1.7]">Every missed call gets a WhatsApp message with available slots in 60 seconds. No call goes to waste.</p>
      </div>
    </div>
  );
}

/* ── Feature Card 4 — Recall & Re-activation ── */
function RecallCard() {
  return (
    <div className="group relative rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-6 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] hover:border-[#bfdbfe] cursor-default overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
      <div className="rounded-xl bg-[#f9fafb] border border-[#e5e7eb] p-4 font-sans text-[12px]">
        <div className="font-semibold text-[#111827] mb-3">Re-activation Campaigns</div>
        {[
          { label: "6-month recall reminder", status: "Sent",   count: "47 patients",  color: "#16a34a" },
          { label: "Post-visit follow-up",    status: "Active", count: "23 sent today", color: "#2563eb" },
          { label: "Lapsed patient win-back", status: "Queued", count: "31 patients",  color: "#9ca3af" },
        ].map((c) => (
          <div key={c.label} className="flex items-center gap-3 py-2 border-b border-[#f3f4f6] last:border-0">
            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: c.color }} />
            <div className="flex-1">
              <div className="text-[#374151] font-medium">{c.label}</div>
              <div className="text-[#9ca3af] text-[10px]">{c.count}</div>
            </div>
            <span className="text-[10px] font-semibold" style={{ color: c.color }}>{c.status}</span>
          </div>
        ))}
        <a href="#contact" className="mt-4 flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-[#2563eb] text-white font-semibold text-[12px] hover:bg-[#1d4ed8] transition-colors">
          Book Now!
        </a>
      </div>
      <div>
        <h3 className="font-sans font-bold text-[19px] text-[#111827] leading-snug mb-2">Recall &amp; Re-activation Campaigns</h3>
        <p className="font-sans text-[14px] text-[#6b7280] leading-[1.7]">FREMN automatically reaches out to lapsed patients and reminds them when it&apos;s time for their next visit.</p>
      </div>
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────────────────── */
export default function Features() {
  const [triggered, setTriggered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f9fafb] px-6 md:px-12 lg:px-24 py-20 md:py-28"
      id="features"
      aria-label="Features"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-14"
          style={{
            opacity: triggered ? 1 : 0,
            transform: triggered ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.5s ease, transform 0.5s ease",
          }}
        >
          <p className="text-[11px] font-sans font-semibold tracking-[0.12em] uppercase text-[#2563eb] mb-4">Features</p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#111827] leading-[1.15] tracking-[-0.02em] mb-4">
            Your AI Patient Coordinator
          </h2>
          <p className="font-sans text-sm md:text-base text-[#6b7280] max-w-2xl mx-auto leading-relaxed">
            Handle calls, WhatsApp bookings, reminders, payment collection, and post-visit follow-ups with 100% front desk coverage — fully automated.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            <PaymentCard />,
            <WhatsAppCard triggered={triggered} />,
            <MissedCallCard triggered={triggered} />,
            <RecallCard />,
          ].map((card, i) => (
            <div
              key={i}
              style={{
                opacity: triggered ? 1 : 0,
                transform: triggered ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
              }}
            >
              {card}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

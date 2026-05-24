import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team — FREMN",
  description: "The team behind FREMN.",
};

const founders = [
  { name: "Chinton Dutta",       role: "Co-founder", initials: "CD" },
  { name: "Amar Kumar Thakur",   role: "Co-founder", initials: "AK" },
  { name: "Sheikh Sami Akhtar",  role: "Co-founder", initials: "SS" },
  { name: "Krishti Poddar",      role: "Co-founder", initials: "KP" },
];

export default function TeamPage() {
  return (
    <div
      className="min-h-screen font-sans"
      style={{
        background:
          "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(96,165,250,0.18) 0%, rgba(147,197,253,0.08) 45%, transparent 70%), " +
          "linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)",
      }}
    >
      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-[#f3f4f6]">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-[64px]">
          <Link href="/" aria-label="FREMN — home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="FREMN" className="h-8 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-1.5 font-sans text-[13px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M11 7H3M6 3l-4 4 4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Home
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-sans font-semibold text-[13px] text-white bg-[#2563eb] hover:bg-[#1d4ed8] transition-colors duration-150"
            >
              Book Now!
            </Link>
          </div>
        </div>
      </nav>

      {/* ── Header ── */}
      <header className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-12">
        <p className="font-sans text-[11px] font-semibold tracking-[0.12em] uppercase text-[#2563eb] mb-4">
          The people
        </p>
        <h1 className="font-sans font-extrabold text-4xl md:text-5xl text-[#111827] leading-[1.1] tracking-[-0.025em] mb-4">
          Built by founders who <span className="text-[#2563eb]">give a damn</span>
        </h1>
        <p className="font-sans text-[16px] text-[#6b7280] max-w-lg leading-[1.7] mb-10">
          Four people. One mission. Making clinic operations invisible so doctors can focus on patients.
        </p>
        <div className="h-px bg-[#e5e7eb]" />
      </header>

      {/* ── Content ── */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pb-24">

        {/* Section label */}
        <p className="font-sans text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#2563eb] mb-6 flex items-center gap-2">
          Founders
          <span className="flex-1 h-px bg-[#dbeafe]" />
        </p>

        {/* Founders grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group relative rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 flex flex-col gap-4 transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] hover:border-[#bfdbfe] overflow-hidden"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              <div className="w-12 h-12 rounded-full bg-[#eff6ff] border border-[#dbeafe] flex items-center justify-center flex-shrink-0">
                <span className="font-sans font-bold text-[14px] text-[#2563eb]">{founder.initials}</span>
              </div>
              <div>
                <div className="font-sans font-bold text-[15px] text-[#111827] leading-snug mb-1">{founder.name}</div>
                <div className="font-sans text-[12px] text-[#9ca3af]">{founder.role}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission strip */}
        <div className="rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_4px_24px_rgba(0,0,0,0.07)] p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <p className="font-sans text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#2563eb] mb-3">
              Our focus
            </p>
            <h2 className="font-sans font-bold text-[20px] md:text-[24px] text-[#111827] leading-[1.25] tracking-[-0.02em]">
              Automating the parts of clinic life that drain good people
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { num: "48 hrs",  label: "From sign-up to live pilot" },
              { num: "40%",     label: "Avg. drop in no-shows" },
              { num: "Zero",    label: "Changes to your existing workflow" },
            ].map((stat, i, arr) => (
              <div
                key={stat.label}
                className={`flex flex-col gap-0.5 pb-4 ${i < arr.length - 1 ? "border-b border-[#f3f4f6]" : ""}`}
              >
                <span className="font-sans font-extrabold text-[26px] text-[#2563eb] tracking-[-0.03em]">{stat.num}</span>
                <span className="font-sans text-[13px] text-[#6b7280]">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* ── Footer bar ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pb-10">
        <div className="flex items-center justify-between flex-wrap gap-3 pt-6 border-t border-[#e5e7eb]">
          <span className="font-sans text-[12.5px] text-[#9ca3af]">
            © {new Date().getFullYear()} FREMN Technologies LLP. All rights reserved.
          </span>
          <div className="flex gap-5">
            <Link href="/careers" className="font-sans text-[12.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150">
              Careers
            </Link>
            <a href="mailto:contact@fremn.com" className="font-sans text-[12.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150">
              contact@fremn.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

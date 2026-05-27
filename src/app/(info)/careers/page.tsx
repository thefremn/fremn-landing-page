import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers — FREMN",
  description: "Join FREMN and help build the future of AI-powered clinic operations.",
};

// ── Types ─────────────────────────────────────────────────────────────────────
type Role = {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  tags: string[];
  email_subject: string;
};

// ── Supabase ──────────────────────────────────────────────────────────────────
async function getRoles(): Promise<Role[]> {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );

  const { data, error } = await supabase
    .from("career_roles")
    .select("id, title, department, location, type, tags, email_subject")
    .eq("active", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching roles:", error);
    return [];
  }

  return data ?? [];
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default async function CareersPage() {
  const roles = await getRoles();

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
            <Image src="/logo.png" alt="FREMN" width={160} height={40} className="h-8 w-auto" priority />
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
          Careers
        </p>
        <h1 className="font-sans font-extrabold text-4xl md:text-5xl text-[#111827] leading-[1.1] tracking-[-0.025em] mb-4">
          Build what clinics <span className="text-[#2563eb]">actually need</span>
        </h1>
        <p className="font-sans text-[16px] text-[#6b7280] max-w-xl leading-[1.7] mb-10">
          We are a small team solving a very real problem. If you care about building thoughtful systems that operate at scale, you will feel at home here.
        </p>
        <div className="h-px bg-[#e5e7eb]" />
      </header>

      {/* ── Content ── */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pb-24">

        {/* Why + How sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          <div className="rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-7">
            <h2 className="font-sans font-bold text-[17px] text-[#111827] mb-3">Why FREMN</h2>
            <p className="font-sans text-[14.5px] text-[#6b7280] leading-[1.75] mb-2">
              Every improvement we ship reduces friction for real clinics, real staff, and real patients.
            </p>
            <p className="font-sans text-[14.5px] text-[#6b7280] leading-[1.75]">
              There is no abstraction layer between effort and impact.
            </p>
          </div>
          <div className="rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-7">
            <h2 className="font-sans font-bold text-[17px] text-[#111827] mb-3">How We Work</h2>
            <p className="font-sans text-[14.5px] text-[#6b7280] leading-[1.75] mb-2">
              We value clarity over noise. Speed over perfection. Ownership over hierarchy.
            </p>
            <p className="font-sans text-[14.5px] text-[#6b7280] leading-[1.75] mb-2">
              You will not be handed tasks. You will be trusted with outcomes.
            </p>
            <p className="font-sans text-[14.5px] text-[#6b7280] leading-[1.75]">
              We move quickly, but not carelessly.
            </p>
          </div>
        </div>

        {/* Open roles */}
        <p className="font-sans text-[10.5px] font-semibold tracking-[0.1em] uppercase text-[#2563eb] mb-6 flex items-center gap-2">
          Open Roles
          <span className="flex-1 h-px bg-[#dbeafe]" />
        </p>

        {roles.length === 0 ? (
          <div className="flex items-center gap-4 rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-7 mb-5">
            <div className="w-11 h-11 rounded-full bg-[#eff6ff] border border-[#dbeafe] flex items-center justify-center flex-shrink-0">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 2a7 7 0 1 1 0 14A7 7 0 0 1 9 2zm0 4v4m0 2v1" stroke="#2563eb" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
            </div>
            <div>
              <div className="font-sans font-semibold text-[15px] text-[#111827] mb-1">No open roles right now</div>
              <p className="font-sans text-[13.5px] text-[#6b7280]">We hire deliberately and rarely — check back soon, or send a speculative application below.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {roles.map((role) => {
              const subject = encodeURIComponent(role.email_subject || `Application — ${role.title}`);
              const body = encodeURIComponent(`Hi FREMN team,\n\nI'd like to apply for the ${role.title} role.\n\n[Your intro here]\n\nCV attached.`);
              const mailto = `mailto:contact@fremn.com?subject=${subject}&body=${body}`;

              return (
                <div
                  key={role.id}
                  className="group relative flex flex-col gap-3.5 rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.06)] p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(37,99,235,0.12)] hover:border-[#bfdbfe] overflow-hidden"
                >
                  <div className="absolute inset-x-0 top-0 h-[2px] rounded-t-2xl bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                  <div className="flex items-start justify-between gap-3">
                    <div className="font-sans font-bold text-[16px] text-[#111827] leading-snug">{role.title}</div>
                    <span className="flex-shrink-0 inline-flex items-center px-2.5 py-1 rounded-full font-sans text-[11px] font-semibold text-[#2563eb] bg-[#eff6ff] border border-[#dbeafe]">
                      {role.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 flex-wrap font-sans text-[12.5px] text-[#9ca3af]">
                    <span className="flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="currentColor" strokeWidth="1.1"/>
                        <circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1.1"/>
                      </svg>
                      {role.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <rect x="1" y="3" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
                        <path d="M4 3V2.5A1.5 1.5 0 0 1 8 2.5V3" stroke="currentColor" strokeWidth="1.1"/>
                      </svg>
                      {role.department}
                    </span>
                  </div>

                  {role.tags?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5">
                      {role.tags.map((tag) => (
                        <span key={tag} className="font-sans text-[11px] text-[#6b7280] bg-[#f3f4f6] border border-[#e5e7eb] px-2.5 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <a
                    href={mailto}
                    className="inline-flex items-center gap-1.5 font-sans text-[13px] font-semibold text-[#2563eb] hover:gap-2.5 transition-all duration-150 mt-auto"
                  >
                    Mail your CV
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M1.5 6.5h10M8 3l3.5 3.5L8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        )}

        {/* Speculative strip */}
        <div className="flex items-center justify-between flex-wrap gap-5 rounded-2xl bg-white border border-[#e5e7eb] shadow-[0_2px_12px_rgba(0,0,0,0.05)] p-7">
          <div>
            <p className="font-sans font-semibold text-[15px] text-[#111827] mb-1">Don&apos;t see your role?</p>
            <p className="font-sans text-[13.5px] text-[#6b7280]">
              We welcome speculative applications. Tell us who you are and what you want to build.
            </p>
          </div>
          <a
            href={`mailto:contact@fremn.com?subject=${encodeURIComponent("Speculative Application — FREMN")}&body=${encodeURIComponent("Hi FREMN team,\n\nI'd love to work with you. Here's a bit about me and what I'd bring:\n\n[Your intro here]\n\nCV attached.")}`}
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full font-sans font-semibold text-[14px] text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-[0_4px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.4)] transition-all duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="white" strokeWidth="1.2"/>
              <path d="M1 4l6 4 6-4" stroke="white" strokeWidth="1.2"/>
            </svg>
            Mail your CV
          </a>
        </div>
      </main>

      {/* ── Footer bar ── */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pb-10">
        <div className="flex items-center justify-between flex-wrap gap-3 pt-6 border-t border-[#e5e7eb]">
          <span className="font-sans text-[12.5px] text-[#9ca3af]">
            © {new Date().getFullYear()} FREMN Technologies LLP. All rights reserved.
          </span>
          <div className="flex gap-5">
            <Link href="/#contact" className="font-sans text-[12.5px] text-[#6b7280] hover:text-[#111827] transition-colors duration-150">
              Book Now!
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

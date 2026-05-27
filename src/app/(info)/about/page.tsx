import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — FREMN",
  description: "Learn about FREMN and how we are redefining clinic operations with AI-powered front desks.",
};

export default function AboutPage() {
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
          Who we are
        </p>
        <h1 className="font-sans font-extrabold text-4xl md:text-5xl text-[#111827] leading-[1.1] tracking-[-0.025em] mb-4">
          Rebuilding the way clinics <span className="text-[#2563eb]">operate</span>
        </h1>
        <p className="font-sans text-[16px] text-[#6b7280] max-w-xl leading-[1.7] mb-10">
          FREMN exists to remove friction from healthcare operations. We design AI-powered front desks that handle conversations, scheduling, and follow-ups so clinics can focus on care instead of coordination.
        </p>
        <div className="h-px bg-[#e5e7eb]" />
      </header>

      {/* ── Content ── */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-2xl flex flex-col gap-12">

          <div>
            <h2 className="font-sans font-bold text-[19px] text-[#111827] mb-3">The Problem</h2>
            <p className="font-sans text-[15px] text-[#6b7280] leading-[1.75] mb-2">
              Modern clinics are overwhelmed by repetitive workflows. Calls go unanswered. Appointments are mismanaged. Staff spend more time coordinating than caring.
            </p>
            <p className="font-sans text-[15px] text-[#6b7280] leading-[1.75]">
              The system works, but only barely.
            </p>
          </div>

          <div>
            <h2 className="font-sans font-bold text-[19px] text-[#111827] mb-3">Our Approach</h2>
            <p className="font-sans text-[15px] text-[#6b7280] leading-[1.75] mb-2">
              FREMN replaces fragmented front-desk processes with a single intelligent layer.
            </p>
            <p className="font-sans text-[15px] text-[#6b7280] leading-[1.75] mb-2">
              An AI that understands patient intent. A system that adapts to clinic workflows. An interface that feels invisible when it works right.
            </p>
            <p className="font-sans text-[15px] text-[#6b7280] leading-[1.75]">
              We are not adding more software. We are simplifying the stack.
            </p>
          </div>

          <div>
            <h2 className="font-sans font-bold text-[19px] text-[#111827] mb-3">What We Believe</h2>
            <p className="font-sans text-[15px] text-[#6b7280] leading-[1.75] mb-2">
              Healthcare does not need more tools. It needs fewer, better ones.
            </p>
            <p className="font-sans text-[15px] text-[#6b7280] leading-[1.75] mb-2">
              Automation should feel natural, not robotic. Efficiency should not come at the cost of human connection.
            </p>
            <p className="font-sans text-[15px] text-[#6b7280] leading-[1.75]">
              And the best systems are the ones you forget are even there.
            </p>
          </div>

          <div>
            <h2 className="font-sans font-bold text-[19px] text-[#111827] mb-3">Where We&apos;re Going</h2>
            <p className="font-sans text-[15px] text-[#6b7280] leading-[1.75] mb-2">
              We are building toward a future where every clinic runs on intelligent infrastructure.
            </p>
            <p className="font-sans text-[15px] text-[#6b7280] leading-[1.75]">
              Where no call is missed. No patient is left waiting. And no team is overwhelmed by the basics.
            </p>
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

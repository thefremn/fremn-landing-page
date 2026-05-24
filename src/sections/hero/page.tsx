"use client";

const clinics = [
  "City Dental Care", "SmilePlus Clinic", "Oral Health Centre", "DentaWell",
  "BrightSmile Clinic", "ClearDent", "PrimeDental", "ToothFirst",
  "GumShield Dental", "ApexDental",
];
const track = [...clinics, ...clinics];

export default function HeroSection() {
  return (
    <>
      <style>{`
        @keyframes hero-fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .h-a1 { animation: hero-fade-up .5s .05s ease both; }
        .h-a2 { animation: hero-fade-up .55s .15s ease both; }
        .h-a3 { animation: hero-fade-up .55s .26s ease both; }
        .h-a4 { animation: hero-fade-up .55s .36s ease both; }
        .h-a5 { animation: hero-fade-up .55s .44s ease both; }
      `}</style>

      <section
        className="relative overflow-hidden px-6 md:px-12 pt-14 md:pt-24 pb-16 md:pb-24 text-center"
        style={{
          borderRadius: "24px",
          background:
            "radial-gradient(ellipse 100% 65% at 50% 100%, rgba(96, 165, 250, 0.22) 0%, rgba(147, 197, 253, 0.1) 45%, transparent 70%), " +
            "radial-gradient(ellipse 70% 45% at 50% 105%, rgba(59, 130, 246, 0.18) 0%, transparent 60%), " +
            "linear-gradient(180deg, #ffffff 0%, #f0f7ff 100%)",
        }}
        aria-label="Hero"
      >
        <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">

          {/* badge */}
          <div className="h-a1 inline-flex items-center gap-2 bg-white border border-[#e5e7eb] rounded-full px-4 py-2 mb-8 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse flex-shrink-0" aria-hidden="true" />
            <span className="font-sans text-[13px] font-medium text-[#374151]">
              AI Front Desk for Dental Clinics
            </span>
          </div>

          {/* H1 */}
          <h1 className="h-a2 font-sans font-extrabold text-[42px] sm:text-6xl md:text-7xl text-[#111827] leading-[1.08] tracking-[-0.03em] mb-6">
            Never miss another<br />
            <span className="text-[#2563eb]">patient call.</span>
          </h1>

          {/* subheading */}
          <p className="h-a3 font-sans text-[17px] md:text-[19px] text-[#6b7280] leading-[1.65] max-w-2xl mb-10">
            An AI receptionist that handles your calls and books directly on WhatsApp —
            no app downloads, no manual follow-up, 24/7.
          </p>

          {/* CTA */}
          <div className="h-a4 mb-14">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-sans font-semibold text-[15px] text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-[0_8px_32px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.45)] transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2"
            >
              Book Now!
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* ── Trusted by strip ── */}
          <div className="h-a5 w-full">
            <p className="font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9ca3af] mb-5">
              Trusted by dental clinics across India
            </p>

            {/* left + right fade masks */}
            <div className="relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, rgba(255,255,255,0.9), transparent)" }}
                aria-hidden="true"
              />
              <div
                className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, rgba(255,255,255,0.9), transparent)" }}
                aria-hidden="true"
              />

              <div className="flex animate-marquee gap-3 w-max">
                {track.map((name, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#e5e7eb] bg-white/70 flex-shrink-0"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
                      <span className="font-sans font-bold text-[8px] text-[#2563eb]">{name[0]}</span>
                    </div>
                    <span className="font-sans text-[12px] font-medium text-[#6b7280] whitespace-nowrap">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

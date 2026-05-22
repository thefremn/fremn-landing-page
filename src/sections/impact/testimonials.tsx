"use client";

const testimonials = [
  {
    quote: "In emergency departments, clinical care takes priority and routine patient calls are often missed. A system like FREMN could help ensure patients still receive timely responses and appointment guidance without increasing staff workload.",
    name: "Dr. Suchismita Paul",
    role: "MBBS · Junior Doctor",
    location: "Calcutta Medical College & Hospital, Kolkata",
    specialty: "Emergency",
    initials: "SP",
    color: "#1B4FD8",
  },
  {
    quote: "Specialty departments manage significant coordination with patients before procedures. An AI front desk platform like FREMN could reduce repetitive communication tasks and improve how patients interact with clinics prior to scheduled care.",
    name: "Dr. Anshuman Sarkar",
    role: "MBBS, MD (Anaesthesiology) · Senior Anaesthesiologist",
    location: "Tata Medical Center, Kolkata",
    specialty: "Anaesthesiology",
    initials: "AS",
    color: "#0D5FA8",
  },
  {
    quote: "Dental clinics receive frequent patient queries regarding appointments, timings, and procedures. Automating these interactions through FREMN could help clinics respond faster and manage scheduling more efficiently.",
    name: "Dr. Aaheli Banerjee",
    role: "BDS · Dental Surgeon",
    location: "Guru Nanak Institute of Dental Sciences & Research, Kolkata",
    specialty: "Dental",
    initials: "AB",
    color: "#1B4FD8",
  },
  {
    quote: "Outpatient departments still depend heavily on manual communication systems. An AI receptionist platform like FREMN could improve coordination efficiency and reduce missed patient interactions at the clinic level.",
    name: "Dr. A. K. Das",
    role: "MBBS, MD (Internal Medicine), DM (Cardiology) · Senior Cardiologist",
    location: "Sahid Khudiram Government General Hospital, West Bengal",
    specialty: "Cardiology",
    initials: "AD",
    color: "#0D5FA8",
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-[#F7F9FF] px-6 md:px-12 lg:px-24 py-14 md:py-20"
      id="testimonials"
      aria-label="Clinician testimonials"
    >
      <div className="max-w-5xl mx-auto">
        {/* header */}
        <div className="text-center mb-8 md:mb-10">
          <p className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase text-[#4D9FFF] mb-3">
            Real Results
          </p>
          <h2 className="font-serif text-2xl md:text-3xl text-[#0D1B3E] leading-[1.15] tracking-[-0.3px] mb-3">
            Clinicians who see the value{" "}
            <em className="italic text-[#1B4FD8]">firsthand.</em>
          </h2>
          <p className="font-sans text-[13px] text-[#0D1B3E]/50 max-w-sm mx-auto leading-relaxed">
            Early clinician feedback supporting outpatient workflow validation for FREMN.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative rounded-xl p-4 md:p-5 flex flex-col gap-3 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(27,79,216,0.09)]"
              style={{
                background: "#FFFFFF",
                border: "1px solid rgba(13,27,62,0.07)",
                boxShadow: "0 1px 8px rgba(13,27,62,0.04)",
              }}
            >
              {/* top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-xl"
                style={{ background: `linear-gradient(to right, ${t.color}, ${t.color}40, transparent)` }}
                aria-hidden="true"
              />

              {/* stars */}
              <div className="flex gap-0.5" aria-label="5 stars">
                {[...Array(5)].map((_, si) => (
                  <svg key={si} width="12" height="12" viewBox="0 0 14 14" fill={t.color} aria-hidden="true">
                    <path d="M7 1l1.6 3.3 3.6.5-2.6 2.5.6 3.6L7 9.3l-3.2 1.6.6-3.6L1.8 4.8l3.6-.5z"/>
                  </svg>
                ))}
              </div>

              {/* quote */}
              <p className="font-sans text-[12.5px] md:text-[13px] text-[#0D1B3E]/60 leading-[1.7] italic font-normal flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* footer */}
              <div className="pt-3 flex items-center justify-between gap-3 flex-wrap" style={{ borderTop: "1px solid rgba(13,27,62,0.06)" }}>
                <div className="flex items-center gap-2.5">
                  {/* avatar */}
                  <div
                    className="w-[34px] h-[34px] rounded-full flex items-center justify-center font-sans text-[11px] font-semibold text-white flex-shrink-0"
                    style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}bb)` }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-[12.5px] text-[#0D1B3E]">{t.name}</div>
                    <div className="font-sans text-[10.5px] text-[#0D1B3E]/55 mt-0.5 leading-[1.4]">{t.role}</div>
                    <div className="font-sans text-[10px] text-[#0D1B3E]/45 mt-0.5 leading-[1.4]">{t.location}</div>
                  </div>
                </div>

                <span
                  className="self-start font-sans text-[9.5px] font-semibold tracking-[0.06em] uppercase px-2 py-0.5 rounded"
                  style={{
                    color: t.color,
                    background: `${t.color}12`,
                    border: `1px solid ${t.color}22`,
                  }}
                >
                  {t.specialty}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="font-sans text-[13px] text-[#0D1B3E]/55">
            Join clinics already running on FREMN AI
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-sans font-semibold text-[13px] text-white bg-gradient-to-r from-[#1B4FD8] to-[#4D9FFF] hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(27,79,216,0.4)] active:scale-[0.99] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF]"
          >
            Request your pilot
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M7.5 3.5L11 7l-3.5 3.5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

type Cell = { type: "yes" | "no" | "partial" | "manual" | "na"; label?: string };

const features = [
  "24/7 availability",
  "WhatsApp-native (no app for patients)",
  "Hindi / Bengali / English",
  "Missed call → booked in 60s",
  "24hr + 2hr auto reminders",
  "No-show recovery",
  "UPI / WhatsApp payments",
  "Google review automation",
  "Revenue & no-show dashboard",
  "DPDP compliant, India-built",
  "₹ INR pricing",
];

type Row = [Cell, Cell, Cell, Cell];

const rows: Row[] = [
  [{ type: "yes" }, { type: "yes" }, { type: "no" }, { type: "no" }],
  [{ type: "yes" }, { type: "no" }, { type: "no" }, { type: "manual", label: "Manual" }],
  [{ type: "yes" }, { type: "partial", label: "Partial" }, { type: "partial", label: "Depends" }, { type: "manual", label: "Manual" }],
  [{ type: "yes" }, { type: "no" }, { type: "no" }, { type: "no" }],
  [{ type: "yes" }, { type: "partial", label: "Partial" }, { type: "no" }, { type: "manual", label: "Manual" }],
  [{ type: "yes" }, { type: "no" }, { type: "no" }, { type: "no" }],
  [{ type: "yes" }, { type: "no" }, { type: "no" }, { type: "no" }],
  [{ type: "yes" }, { type: "no" }, { type: "no" }, { type: "no" }],
  [{ type: "yes" }, { type: "partial", label: "Partial" }, { type: "no" }, { type: "no" }],
  [{ type: "yes" }, { type: "no" }, { type: "na", label: "N/A" }, { type: "na", label: "N/A" }],
  [{ type: "yes" }, { type: "no" }, { type: "na", label: "N/A" }, { type: "na", label: "N/A" }],
];

function Yes({ highlight }: { highlight: boolean }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-label="Yes">
      <path
        d="M4 9l3.5 3.5 6.5-7"
        stroke={highlight ? "#1B4FD8" : "rgba(13,27,62,0.3)"}
        strokeWidth={highlight ? 2 : 1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function No() {
  return (
    <span className="font-sans text-[16px] leading-none select-none" style={{ color: "rgba(13,27,62,0.2)" }} aria-label="No">
      —
    </span>
  );
}

function Qualifier({ label }: { label: string }) {
  return (
    <span className="font-sans text-[11px] font-medium" style={{ color: "rgba(13,27,62,0.4)" }}>
      {label}
    </span>
  );
}

function Cell({ cell, isFremnCol }: { cell: Cell; isFremnCol: boolean }) {
  if (cell.type === "yes")     return <Yes highlight={isFremnCol} />;
  if (cell.type === "no")      return <No />;
  return <Qualifier label={cell.label!} />;
}

const competitors = ["Generic AI Tools", "Human Receptionist", "Manual WhatsApp"];

export default function ComparisonTable() {
  return (
    <section
      className="bg-[#F7F9FF] px-6 md:px-12 lg:px-24 py-20 md:py-28"
      id="comparison"
      aria-label="How FREMN compares"
    >
      <div className="max-w-5xl mx-auto">

        {/* header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase text-[#4D9FFF] mb-4">
            How We Compare
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0D1B3E] leading-[1.15] tracking-[-0.3px] mb-4">
            Why dentists choose{" "}
            <em className="italic text-[#1B4FD8]">FREMN</em>
          </h2>
          <p className="font-sans text-sm md:text-base text-[#0D1B3E]/50 max-w-sm mx-auto leading-relaxed">
            Not another generic tool. Built specifically for Indian dental clinics.
          </p>
        </div>

        {/* scroll hint — mobile only */}
        <p className="md:hidden font-sans text-[11px] text-[#0D1B3E]/40 text-center mb-3 flex items-center justify-center gap-1.5">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M2 6h8M6.5 3l3 3-3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Swipe to compare
        </p>

        {/* table with scroll fade */}
        <div className="relative">
          {/* right-edge fade — visible only when content overflows on mobile */}
          <div
            className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-20 md:hidden"
            style={{ background: "linear-gradient(to left, #F7F9FF, transparent)" }}
            aria-hidden="true"
          />

          <div className="overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            <table className="w-full border-collapse min-w-[480px]">
              <thead>
                <tr>
                  {/* feature col label — sticky on mobile */}
                  <th className="text-left pb-5 pr-4 md:pr-6 w-[36%] sticky left-0 bg-[#F7F9FF] z-10">
                    <span className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-[#0D1B3E]/55">
                      Feature
                    </span>
                  </th>

                  {/* FREMN header — lifted card */}
                  <th className="pb-0 px-2 w-[16%]">
                    <div
                      className="rounded-t-2xl px-3 md:px-4 pt-5 pb-4 flex flex-col items-center gap-2"
                      style={{
                        background: "linear-gradient(180deg, #1B4FD8 0%, #2860E8 100%)",
                        borderTop: "1.5px solid #4D9FFF",
                        borderLeft: "1.5px solid #3D72F0",
                        borderRight: "1.5px solid #3D72F0",
                      }}
                    >
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-sans text-[9px] font-semibold tracking-[0.08em] uppercase text-white"
                        style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)" }}
                      >
                        Recommended
                      </span>
                      <span className="font-serif text-[18px] md:text-[20px] text-white tracking-[-0.2px]">FREMN</span>
                    </div>
                  </th>

                  {/* competitor headers */}
                  {competitors.map((col) => (
                    <th key={col} className="pb-5 px-2 text-center w-[16%]">
                      <span className="font-sans text-[11px] md:text-[12px] font-medium text-[#0D1B3E]/60 leading-snug block">
                        {col}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {features.map((feature, ri) => {
                  const isLast = ri === features.length - 1;
                  return (
                    <tr key={feature} className="group">
                      {/* feature label — sticky on mobile */}
                      <td
                        className="py-3 md:py-3.5 pr-4 md:pr-6 font-sans text-[12px] md:text-[13.5px] text-[#0D1B3E]/65 leading-snug group-hover:text-[#0D1B3E]/85 transition-colors duration-150 sticky left-0 bg-[#F7F9FF] z-10"
                        style={{ borderTop: "1px solid rgba(13,27,62,0.06)" }}
                      >
                        {feature}
                      </td>

                      {/* FREMN cell */}
                      <td
                        className="py-3 md:py-3.5 px-2 text-center"
                        style={{
                          background: "#EEF3FF",
                          borderTop: "1px solid #D5E2FF",
                          borderLeft: "1.5px solid #3D72F0",
                          borderRight: "1.5px solid #3D72F0",
                          ...(isLast ? {
                            borderBottom: "1.5px solid #3D72F0",
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16,
                          } : {}),
                        }}
                      >
                        <Cell cell={rows[ri][0]} isFremnCol={true} />
                      </td>

                      {/* competitor cells */}
                      {rows[ri].slice(1).map((cell, ci) => (
                        <td
                          key={ci}
                          className="py-3 md:py-3.5 px-2 text-center"
                          style={{ borderTop: "1px solid rgba(13,27,62,0.06)" }}
                        >
                          <Cell cell={cell} isFremnCol={false} />
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-7 py-3 rounded-lg font-sans font-semibold text-sm text-white bg-gradient-to-r from-[#1B4FD8] to-[#4D9FFF] hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(27,79,216,0.4)] active:scale-[0.99] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D9FFF]"
          >
            See FREMN in Action →
          </a>
        </div>

      </div>
    </section>
  );
}

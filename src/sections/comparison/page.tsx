"use client";

type Cell = { type: "yes" | "no" | "partial" | "na"; label?: string };

const features = [
  "Dedicated 1-to-1 support",
  "Built for Indian dental clinics",
  "WhatsApp-native booking",
  "Missed call recovery",
  "UPI / Indian payment collection",
  "Flexible contracts",
  "Refundable setup fee",
];

type Row = [Cell, Cell, Cell, Cell];

const rows: Row[] = [
  [{ type: "yes" }, { type: "partial", label: "Self-serve" }, { type: "na", label: "N/A" }, { type: "partial", label: "Ticket only" }],
  [{ type: "yes" }, { type: "partial", label: "Generic" }, { type: "partial", label: "Manual only" }, { type: "partial", label: "Generic" }],
  [{ type: "yes" }, { type: "no" }, { type: "no" }, { type: "partial", label: "Limited" }],
  [{ type: "yes" }, { type: "no" }, { type: "no" }, { type: "no" }],
  [{ type: "yes" }, { type: "no" }, { type: "partial", label: "Manual" }, { type: "partial", label: "Limited" }],
  [{ type: "partial", label: "Monthly" }, { type: "partial", label: "Annual" }, { type: "partial", label: "Full-time" }, { type: "partial", label: "12-mo lock" }],
  [{ type: "yes" }, { type: "partial", label: "Non-refund." }, { type: "na", label: "N/A" }, { type: "partial", label: "Non-refund." }],
];

const competitors = ["Generic AI Chatbots", "Traditional Receptionist", "Other SaaS Products"];

function Yes() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-label="Yes">
      <path
        d="M4 9l3.5 3.5 6.5-7"
        stroke="#2563eb"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function No() {
  return (
    <span className="font-sans text-[16px] leading-none select-none text-[#d1d5db]" aria-label="No">
      —
    </span>
  );
}

function Qualifier({ label }: { label: string }) {
  return (
    <span className="font-sans text-[11px] font-medium text-[#9ca3af]">
      {label}
    </span>
  );
}

function CellDisplay({ cell, isFremnCol }: { cell: Cell; isFremnCol: boolean }) {
  if (cell.type === "yes") return <Yes />;
  if (cell.type === "no") return <No />;
  if (cell.type === "na") return <Qualifier label={cell.label ?? "N/A"} />;
  return <Qualifier label={cell.label!} />;
}

export default function ComparisonTable() {
  return (
    <section
      className="bg-white px-6 md:px-12 lg:px-24 py-20 md:py-28"
      id="comparison"
      aria-label="How FREMN compares"
    >
      <div className="max-w-5xl mx-auto">

        {/* header */}
        <div className="text-center mb-10 md:mb-14">
          <p className="text-[11px] font-sans font-semibold tracking-[0.12em] uppercase text-[#2563eb] mb-4">
            How We Compare
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#111827] leading-[1.15] tracking-[-0.02em] mb-4">
            How We Compare
          </h2>
          <p className="font-sans text-sm md:text-base text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            See why dental clinics in India choose FREMN over generic alternatives.
          </p>
        </div>

        {/* scroll hint — mobile only */}
        <p className="md:hidden font-sans text-[11px] text-[#9ca3af] text-center mb-3 flex items-center justify-center gap-1.5">
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
            style={{ background: "linear-gradient(to left, #ffffff, transparent)" }}
            aria-hidden="true"
          />

          <div className="overflow-x-auto" style={{ scrollbarWidth: "none" }}>
            <table className="w-full border-collapse min-w-[480px]">
              <thead>
                <tr>
                  {/* feature col label — sticky on mobile */}
                  <th className="text-left pb-5 pr-4 md:pr-6 w-[36%] sticky left-0 bg-white z-10">
                    <span className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase text-[#9ca3af]">
                      Feature
                    </span>
                  </th>

                  {/* FREMN header — lifted card */}
                  <th className="pb-0 w-[16%]">
                    <div
                      className="rounded-t-2xl px-3 md:px-4 pt-5 pb-4 flex flex-col items-center gap-2"
                      style={{
                        background: "#2563eb",
                        borderTop: "1.5px solid #3b82f6",
                        borderLeft: "1.5px solid #1d4ed8",
                        borderRight: "1.5px solid #1d4ed8",
                      }}
                    >
                      <span
                        className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full font-sans text-[9px] font-semibold tracking-[0.08em] uppercase text-white"
                        style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)" }}
                      >
                        Recommended
                      </span>
                      <span className="font-sans font-bold text-[18px] md:text-[20px] text-white tracking-[-0.2px]">FREMN</span>
                    </div>
                  </th>

                  {/* competitor headers */}
                  {competitors.map((col) => (
                    <th key={col} className="pb-5 px-2 text-center w-[16%]">
                      <span className="font-sans text-[11px] md:text-[12px] font-medium text-[#6b7280] leading-snug block">
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
                        className="py-3 md:py-3.5 pr-4 md:pr-6 font-sans text-[12px] md:text-[13.5px] text-[#6b7280] leading-snug group-hover:text-[#111827] transition-colors duration-150 sticky left-0 bg-white z-10"
                        style={{ borderTop: "1px solid #f3f4f6" }}
                      >
                        {feature}
                      </td>

                      {/* FREMN cell */}
                      <td
                        className="py-3 md:py-3.5 px-2 text-center"
                        style={{
                          background: "#eff6ff",
                          borderTop: "1px solid #dbeafe",
                          borderLeft: "1.5px solid #1d4ed8",
                          borderRight: "1.5px solid #1d4ed8",
                          ...(isLast ? {
                            borderBottom: "1.5px solid #1d4ed8",
                            borderBottomLeftRadius: 16,
                            borderBottomRightRadius: 16,
                          } : {}),
                        }}
                      >
                        <CellDisplay cell={rows[ri][0]} isFremnCol={true} />
                      </td>

                      {/* competitor cells */}
                      {rows[ri].slice(1).map((cell, ci) => (
                        <td
                          key={ci}
                          className="py-3 md:py-3.5 px-2 text-center"
                          style={{ borderTop: "1px solid #f3f4f6" }}
                        >
                          <CellDisplay cell={cell} isFremnCol={false} />
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
            className="inline-flex items-center gap-1.5 px-7 py-3 rounded-full font-sans font-semibold text-sm text-white bg-[#2563eb] hover:bg-[#1d4ed8] shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_32px_rgba(37,99,235,0.45)] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb]"
          >
            See It In Action →
          </a>
        </div>

      </div>
    </section>
  );
}

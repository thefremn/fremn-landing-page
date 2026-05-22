"use client";

const stats = [
  { value: "24",  suffix: "/7",   label: "Always online" },
  { value: "4",   suffix: "x",    label: "Channels covered" },
  { value: "<10", suffix: "s",    label: "Response time" },
  { value: "0",   suffix: "%",    label: "Missed appointments" },
];

export default function TrustBar() {
  return (
    <section
      className="bg-[#F7F9FF] px-6 md:px-12 lg:px-24 py-16 md:py-20"
      aria-label="Supported specialties and stats"
    >
      <div className="max-w-6xl mx-auto">

        {/* Stats strip */}
        <div className="flex items-center justify-center flex-wrap">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="flex flex-col items-center px-8 md:px-10 py-2 relative"
            >
              {i > 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-7 bg-[#0D1B3E]/[0.1]"
                  aria-hidden="true"
                />
              )}
              <div className="font-serif text-[38px] leading-none text-[#0D1B3E] tracking-[-0.5px]">
                {stat.value}
                <em className="not-italic text-[#1B4FD8]">{stat.suffix}</em>
              </div>
              <div className="font-sans text-[11.5px] text-[#0D1B3E]/60 mt-2 font-normal tracking-[0.02em] text-center">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

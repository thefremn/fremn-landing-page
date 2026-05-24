"use client";

const clinics = [
  "City Dental Care",
  "SmilePlus Clinic",
  "Oral Health Centre",
  "DentaWell",
  "BrightSmile Clinic",
  "ClearDent",
  "PrimeDental",
  "ToothFirst",
  "GumShield Dental",
  "ApexDental",
];

// Duplicate for seamless loop
const track = [...clinics, ...clinics];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-[#e5e7eb] py-10 overflow-hidden" aria-label="Trusted by dental clinics">
      <div className="max-w-6xl mx-auto px-6 mb-6 text-center">
        <p className="font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#9ca3af]">
          Trusted by dental clinics across India
        </p>
      </div>

      {/* marquee row */}
      <div className="relative">
        <div className="flex animate-marquee gap-8 w-max">
          {track.map((name, i) => (
            <div
              key={i}
              className="flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#e5e7eb] bg-[#f9fafb] flex-shrink-0"
            >
              {/* placeholder logo circle */}
              <div className="w-6 h-6 rounded-full bg-[#dbeafe] flex items-center justify-center flex-shrink-0">
                <span className="font-sans font-bold text-[9px] text-[#2563eb]">{name[0]}</span>
              </div>
              <span className="font-sans text-[13px] font-medium text-[#6b7280] whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

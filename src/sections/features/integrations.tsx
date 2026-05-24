"use client";

const integrations = [
  "WhatsApp Business API",
  "Practo",
  "Clinicea",
  "Dentulu",
  "Zoho CRM",
  "Razorpay",
  "PayU",
  "Cashfree",
  "Google Calendar",
  "Custom HMS / PMS",
  "And more",
];

export default function Integrations() {
  return (
    <section
      className="bg-[#f9fafb] px-6 md:px-12 lg:px-24 py-20 md:py-28 border-t border-[#e5e7eb]"
      id="integrations"
      aria-label="Integrations"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[11px] font-sans font-semibold tracking-[0.12em] uppercase text-[#2563eb] mb-4">Integrations</p>
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#111827] leading-[1.15] tracking-[-0.02em] mb-4">
          Integrations
        </h2>
        <p className="font-sans text-sm md:text-base text-[#6b7280] max-w-xl mx-auto leading-relaxed mb-10">
          FREMN works with WhatsApp Business API, major clinic software, and Indian payment gateways out of the box.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          {integrations.map((name) => (
            <span
              key={name}
              className="inline-flex items-center px-4 py-2 rounded-full border border-[#e5e7eb] bg-white font-sans text-[13px] text-[#374151] font-medium shadow-sm"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Does my patient need to download an app?",
    a: "No. Everything happens on WhatsApp — the app they already have on their phone. No new app, no account, no friction.",
  },
  {
    q: "Which languages does FREMN support?",
    a: "FREMN currently supports Hindi, Bengali, and English. Patients can message in their preferred language and FREMN responds accordingly.",
  },
  {
    q: "What happens when a patient misses my call?",
    a: "Within 60 seconds, FREMN sends the patient a WhatsApp message with available booking slots. If they don't have WhatsApp, they receive an SMS instead.",
  },
  {
    q: "Can patients still call and speak to someone?",
    a: "Yes. FREMN handles the routine — bookings, reminders, FAQs. Complex or urgent cases are flagged to your staff immediately with full context.",
  },
  {
    q: "How do appointment reminders work?",
    a: "FREMN sends a reminder 24 hours before the appointment and a second one 2 hours before — but only if the patient hasn't already confirmed. Patients reply YES to confirm or NO to reschedule.",
  },
  {
    q: "Does FREMN integrate with my existing appointment system?",
    a: "Yes. FREMN syncs with your calendar and appointment setup during onboarding. Your existing workflow doesn't change — FREMN adds to it.",
  },
  {
    q: "How does WhatsApp payment collection work?",
    a: "After an appointment, FREMN sends a payment link directly on WhatsApp. Patients pay via UPI, debit/credit card, or net banking — all within the chat.",
  },
  {
    q: "Is patient data secure?",
    a: "Yes. FREMN is built in alignment with India's Digital Personal Data Protection Act (DPDP Act), 2023. Patient data is encrypted, never sold, and processed only to run your front desk.",
  },
  {
    q: "How long does setup take?",
    a: "Most clinics are live within 48 hours of signing up. Our team handles the entire setup — you just confirm your availability slots and doctor list.",
  },
  {
    q: "What does FREMN cost?",
    a: "Pricing is in ₹ INR and based on your clinic size and the features you need. Book a demo and we'll walk you through a plan that fits your practice.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="bg-white px-6 md:px-12 lg:px-24 py-20 md:py-28"
      id="faq"
      aria-label="Frequently asked questions"
    >
      <div className="max-w-3xl mx-auto">

        {/* header */}
        <div className="mb-14">
          <p className="text-[10px] font-sans font-semibold tracking-[0.12em] uppercase text-[#4D9FFF] mb-4">
            Common Questions
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#0D1B3E] leading-[1.15] tracking-[-0.3px]">
            Everything you need to know
          </h2>
        </div>

        {/* accordion — divider style */}
        <div>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const num = String(i + 1).padStart(2, "0");

            return (
              <div
                key={i}
                style={{
                  borderTop: "1px solid rgba(13,27,62,0.08)",
                  ...(i === faqs.length - 1 ? { borderBottom: "1px solid rgba(13,27,62,0.08)" } : {}),
                }}
              >
                <button
                  className="w-full text-left py-5 sm:py-6 flex items-start gap-3 sm:gap-6 group focus-visible:outline-none"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  {/* number */}
                  <span
                    className="font-sans text-[11px] font-semibold tracking-[0.08em] flex-shrink-0 mt-0.5 transition-colors duration-150"
                    style={{ color: isOpen ? "#1B4FD8" : "rgba(13,27,62,0.4)" }}
                  >
                    {num}
                  </span>

                  {/* question */}
                  <span
                    className="flex-1 font-sans font-medium text-[15px] leading-[1.5] transition-colors duration-150"
                    style={{ color: isOpen ? "#0D1B3E" : "rgba(13,27,62,0.7)" }}
                  >
                    {faq.q}
                  </span>

                  {/* toggle icon */}
                  <span
                    className="flex-shrink-0 mt-0.5 transition-colors duration-200"
                    style={{ color: isOpen ? "#1B4FD8" : "rgba(13,27,62,0.38)" }}
                    aria-hidden="true"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ transition: "transform 0.2s", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>

                {/* answer */}
                {isOpen && (
                  <div className="pl-4 sm:pl-[calc(11px+24px)] pb-5 sm:pb-6">
                    <p className="font-sans text-[14px] text-[#0D1B3E]/55 leading-[1.75]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* bottom */}
        <p className="font-sans text-[13px] text-[#0D1B3E]/55 mt-12">
          Still have questions?{" "}
          <a
            href="mailto:contact@fremn.com"
            className="text-[#4D9FFF] hover:text-[#1B4FD8] transition-colors duration-150"
          >
            contact@fremn.com
          </a>
        </p>

      </div>
    </section>
  );
}

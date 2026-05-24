"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Can FREMN handle calls when my receptionist is busy?",
    a: "Absolutely. When a patient calls and your line is busy or unanswered, FREMN automatically sends them a WhatsApp message within 60 seconds with your available appointment slots. The patient can confirm their booking directly on WhatsApp — without calling back, without an app, and without your staff doing anything manually.",
  },
  {
    q: "Can FREMN collect payments and send invoices?",
    a: "Yes. After every appointment, FREMN generates an invoice and sends a payment link on WhatsApp. Patients can pay instantly by UPI, debit/credit card, or net banking — no paper, no phone calls, no chasing. Outstanding balances are tracked and friendly reminders are sent automatically.",
  },
  {
    q: "Do you charge per conversation, or are there additional charges?",
    a: "Your plan includes a set number of conversations each month covering your typical volume. Overage is only charged if you exceed that limit at a flat per-conversation rate. There are no hidden fees — everything is transparent in your monthly plan so you know exactly what you're paying for upfront.",
  },
  {
    q: "Can FREMN work with my existing clinic phone number?",
    a: "Yes! FREMN connects to your existing phone line. Your patients will continue to see the same number they already know. No number porting, no disruption to your current setup.",
  },
  {
    q: "How does FREMN reduce no-shows?",
    a: "FREMN sends automated reminders 24 hours before the appointment and again 2 hours before if the patient hasn't confirmed. Patients reply YES to confirm or NO to reschedule — directly on WhatsApp. If a patient misses their slot anyway, FREMN automatically follows up to rebook them. Clinics typically see a significant drop in no-shows within the first month.",
  },
  {
    q: "Does it integrate with my clinic management software?",
    a: "Yes. FREMN integrates with major clinic and practice management platforms including Practo, Clinicea, Dentulu, Google Calendar, and custom HMS systems via API. It syncs appointment data in real time and prevents double-bookings automatically.",
  },
  {
    q: "Is FREMN available 24/7?",
    a: "Yes, absolutely. FREMN operates around the clock with no breaks, no sick leave, and no out-of-office periods. It handles inbound calls and WhatsApp messages from patients at any hour — ensuring your clinic never misses an opportunity, even at 2 AM.",
  },
  {
    q: "How cost-effective is it compared to hiring a receptionist?",
    a: "Very cost-effective. FREMN pays for itself with just one recovered appointment per month. It is significantly cheaper than hiring a full-time or even part-time receptionist, with no training, no HR overhead, and no turnover risk. It also handles volume that would require multiple staff members during peak hours.",
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
            FAQ
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-[#111827] leading-[1.15] tracking-[-0.3px]">
            Frequently Asked Questions
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
                    style={{ color: isOpen ? "#111827" : "rgba(13,27,62,0.7)" }}
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
                    <p className="font-sans text-[14px] text-[#111827]/55 leading-[1.75]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* bottom */}
        <p className="font-sans text-[13px] text-[#111827]/55 mt-12">
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

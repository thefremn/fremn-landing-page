"use client";

const testimonials = [
  {
    quote: "A lot of patients ask how we always respond so fast. The honest answer is FREMN. It works for us around the clock — 24 hours a day, seven days a week. Our front desk has never been this efficient.",
    name: "Dr. Priya Mehta",
    practice: "SmilePlus Dental, Kolkata",
    rating: 5,
  },
  {
    quote: "Setup was smooth and the team was incredibly responsive. We saw a drop in no-shows within the first two weeks.",
    name: "Dr. Rohan Sharma",
    practice: "ClearDent Clinic",
    rating: 5,
  },
  {
    quote: "We just opened a second branch and FREMN handled the entire patient communication flow from day one. I'd recommend it to any clinic that wants to grow without hiring more staff.",
    name: "Dr. Anika Patel",
    practice: "BrightSmile Dental",
    rating: 5,
  },
  {
    quote: "FREMN has been a game changer. We recovered revenue we didn't even know we were losing, and patients love getting reminders on WhatsApp.",
    name: "Dr. Vikram Iyer",
    practice: "PrimeDental, Chennai",
    rating: 5,
  },
  {
    quote: "Consistent, reliable, and the support team actually picks up. FREMN has made running our front desk stress-free.",
    name: "Dr. Sunita Rao",
    practice: "Oral Health Centre",
    rating: 5,
  },
  {
    quote: "Our missed appointment rate dropped significantly in the first month. The WhatsApp reminders are simple and patients actually respond to them.",
    name: "Dr. Kabir Singh",
    practice: "ToothFirst Clinic, Bengaluru",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      className="bg-white px-6 md:px-12 lg:px-24 py-20 md:py-28"
      id="testimonials"
      aria-label="Testimonials"
    >
      <div className="max-w-5xl mx-auto">
        {/* header */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-sans font-semibold tracking-[0.12em] uppercase text-[#2563eb] mb-4">
            Testimonials
          </p>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-[#111827] leading-[1.15] tracking-[-0.02em] mb-4">
            What Dentists Are Saying
          </h2>
          <p className="font-sans text-sm md:text-base text-[#6b7280] max-w-xl mx-auto leading-relaxed">
            Real results from clinics using FREMN.
          </p>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-white border border-[#e5e7eb] shadow-sm p-6 flex flex-col gap-4 overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(37,99,235,0.1)] hover:border-[#bfdbfe] cursor-default"
            >
              <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#2563eb] via-[#60a5fa] to-[#2563eb] opacity-0 group-hover:opacity-100 transition-opacity duration-200" aria-hidden="true" />
              {/* stars */}
              <div className="flex gap-1" aria-label={`${t.rating} stars`}>
                {[...Array(t.rating)].map((_, si) => (
                  <span key={si} className="text-[#f59e0b] text-base leading-none" aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>

              {/* quote */}
              <p className="font-sans text-[13px] md:text-[14px] text-[#6b7280] leading-[1.7] italic flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* author */}
              <div>
                <div className="font-sans font-bold text-[14px] text-[#111827]">{t.name}</div>
                <div className="font-sans text-[12px] text-[#6b7280] mt-0.5">{t.practice}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

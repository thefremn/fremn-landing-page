"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// ─── Supabase client ────────────────────────────────────────────────────────
// Replace these with your actual project values (or pull from env vars).
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://YOUR_PROJECT.supabase.co";
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "YOUR_ANON_KEY";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// ────────────────────────────────────────────────────────────────────────────

const specialties = [
  "Dental", "General Physician", "ENT", "Dermatology",
  "Ophthalmology", "Orthopedics", "Pediatrics", "Physiotherapy",
  "Gynecology", "Cardiology", "Other",
];

type FormState = {
  clinic: string;
  specialty: string;
  name: string;
  phone: string;
  email: string;
  note: string;
};

const EMPTY_FORM: FormState = {
  clinic: "", specialty: "", name: "", phone: "", email: "", note: "",
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError(null);
  };

  const handleSubmit = async () => {
    // Basic validation
    if (!form.clinic || !form.name || !form.phone || !form.email) {
      setError("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setError(null);

    const { error: supabaseError } = await supabase
      .from("requests")          // ← table name (matches the SQL below)
      .insert([
        {
          clinic_name: form.clinic,
          specialty: form.specialty || null,
          contact_name: form.name,
          phone: form.phone,
          email: form.email,
          automation_note: form.note || null,
        },
      ]);

    setLoading(false);

    if (supabaseError) {
      console.error("Supabase error:", supabaseError);
      setError("Something went wrong. Please try again or email us directly.");
      return;
    }

    setSubmitted(true);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        .contact-section {
          padding: 100px 32px 120px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .contact-glow-1 {
          position: absolute;
          width: 800px; height: 500px;
          border-radius: 50%;
          background: radial-gradient(ellipse, rgba(30,107,255,0.08) 0%, transparent 65%);
          top: -100px; left: 50%;
          transform: translateX(-50%);
          pointer-events: none;
        }

        .contact-glow-2 {
          position: absolute;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(91,192,235,0.06) 0%, transparent 70%);
          bottom: 0; right: -100px;
          pointer-events: none;
        }

        .contact-inner {
          max-width: 680px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .contact-eyebrow {
          text-align: center;
          font-size: 11.5px;
          font-weight: 500;
          color: #5BC0EB;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .contact-heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(28px, 4.5vw, 50px);
          font-weight: 800;
          color: #F0F4FF;
          text-align: center;
          letter-spacing: -0.02em;
          line-height: 1.1;
          margin-bottom: 12px;
        }

        .contact-heading span {
          background: linear-gradient(135deg, #1E6BFF, #5BC0EB);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-sub {
          text-align: center;
          font-size: 15px;
          color: #6B7A99;
          margin-bottom: 48px;
          line-height: 1.65;
        }

        .contact-card {
          background: rgba(26,31,43,0.6);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 24px;
          padding: 40px;
          backdrop-filter: blur(16px);
          box-shadow: 0 32px 80px rgba(0,0,0,0.4);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group.full { grid-column: 1 / -1; }

        .form-label {
          font-size: 12px;
          font-weight: 500;
          color: #6B7A99;
          letter-spacing: 0.04em;
        }

        .form-label span { color: #f87171; margin-left: 2px; }

        .form-input, .form-select, .form-textarea {
          background: rgba(10,10,10,0.6);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 11px 14px;
          font-size: 14px;
          color: #F0F4FF;
          font-family: 'DM Sans', sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
          box-sizing: border-box;
          appearance: none;
          -webkit-appearance: none;
        }

        .form-input::placeholder, .form-textarea::placeholder {
          color: rgba(107,122,153,0.5);
        }

        .form-input:focus, .form-select:focus, .form-textarea:focus {
          border-color: rgba(30,107,255,0.4);
          box-shadow: 0 0 0 3px rgba(30,107,255,0.1);
        }

        .form-select {
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%236B7A99' stroke-width='1.4' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 36px;
          cursor: pointer;
          color: #F0F4FF;
        }

        .form-select option {
          background: #1A1F2B;
          color: #F0F4FF;
        }

        .form-textarea {
          resize: vertical;
          min-height: 90px;
        }

        /* Error banner */
        .form-error {
          grid-column: 1 / -1;
          background: rgba(248,113,113,0.08);
          border: 1px solid rgba(248,113,113,0.2);
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 13px;
          color: #fca5a5;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .form-submit {
          width: 100%;
          padding: 14px 24px;
          background: linear-gradient(135deg, #1E6BFF, #0F52BA);
          color: white;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 500;
          border: none;
          border-radius: 11px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
          transition: all 0.25s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 0 0 28px rgba(30,107,255,0.3);
          letter-spacing: 0.02em;
        }

        .form-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 0 40px rgba(30,107,255,0.5);
        }

        .form-submit:active:not(:disabled) { transform: translateY(0); }

        .form-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        /* Spinner */
        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        @keyframes spin { to { transform: rotate(360deg); } }

        .form-footer {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 16px;
          font-size: 12px;
          color: #6B7A99;
        }

        /* Success state */
        .success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 40px 20px;
          text-align: center;
        }

        .success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(74,222,128,0.1);
          border: 1px solid rgba(74,222,128,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-title {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #F0F4FF;
        }

        .success-sub { font-size: 14px; color: #6B7A99; line-height: 1.6; }

        .reach-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: 32px;
          flex-wrap: wrap;
        }

        .reach-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: #6B7A99;
          text-decoration: none;
          transition: color 0.2s;
        }

        .reach-link:hover { color: #5BC0EB; }

        @media (max-width: 640px) {
          .contact-section { padding: 72px 20px 80px; }
          .contact-card { padding: 28px 20px; }
          .form-grid { grid-template-columns: 1fr; }
          .form-group.full { grid-column: 1; }
          .form-error { grid-column: 1; }
        }
      `}</style>

      <section className="contact-section" id="contact">
        <div className="contact-glow-1" />
        <div className="contact-glow-2" />
        <div className="contact-inner">
          <p className="contact-eyebrow">Get Started</p>
          <h2 className="contact-heading">
            Ready to <span>automate</span><br />your front desk?
          </h2>
          <p className="contact-sub">
            Tell us about your clinic. We will set up a personalised pilot demo within 48 hours — no commitment needed.
          </p>

          <div className="contact-card">
            {submitted ? (
              <div className="success-state">
                <div className="success-icon">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M6 14l5.5 5.5L22 9" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="success-title">We have got your request!</div>
                <p className="success-sub">
                  Thanks, {form.name.split(" ")[0]}. Our team will reach out within 48 hours to set up your personalised FREMN pilot for {form.clinic}.
                </p>
              </div>
            ) : (
              <>
                <div className="form-grid">
                  {error && (
                    <div className="form-error">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <circle cx="7" cy="7" r="6" stroke="#f87171" strokeWidth="1.3"/>
                        <path d="M7 4v3.5M7 9.5v.5" stroke="#f87171" strokeWidth="1.3" strokeLinecap="round"/>
                      </svg>
                      {error}
                    </div>
                  )}

                  <div className="form-group">
                    <label className="form-label">Clinic Name <span>*</span></label>
                    <input
                      name="clinic"
                      className="form-input"
                      placeholder="City Dental Clinic"
                      value={form.clinic}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Specialty</label>
                    <select
                      name="specialty"
                      className="form-select"
                      value={form.specialty}
                      onChange={handleChange}
                      disabled={loading}
                    >
                      <option value="">Select specialty</option>
                      {specialties.map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Name <span>*</span></label>
                    <input
                      name="name"
                      className="form-input"
                      placeholder="Dr. Priya Mehta"
                      value={form.name}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Phone <span>*</span></label>
                    <input
                      name="phone"
                      className="form-input"
                      placeholder="+91 98000 00000"
                      value={form.phone}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group full">
                    <label className="form-label">Work Email <span>*</span></label>
                    <input
                      name="email"
                      type="email"
                      className="form-input"
                      placeholder="doctor@clinic.in"
                      value={form.email}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>

                  <div className="form-group full">
                    <label className="form-label">
                      What do you want to automate?{" "}
                      <span style={{ color: "#6B7A99", fontWeight: 400 }}>(optional)</span>
                    </label>
                    <textarea
                      name="note"
                      className="form-textarea"
                      placeholder="e.g. Appointment booking, WhatsApp replies, follow-up reminders..."
                      value={form.note}
                      onChange={handleChange}
                      disabled={loading}
                    />
                  </div>
                </div>

                <button className="form-submit" onClick={handleSubmit} disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      Request Pilot Demo
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </>
                  )}
                </button>

                <div className="form-footer">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <rect x="2" y="5" width="8" height="6" rx="1.5" stroke="#6B7A99" strokeWidth="1.2"/>
                    <path d="M4 5V3.5a2 2 0 0 1 4 0V5" stroke="#6B7A99" strokeWidth="1.2"/>
                  </svg>
                  No spam. Your data stays private. We will only reach out about your demo.
                </div>
              </>
            )}
          </div>

          <div className="reach-row">
            <a href="mailto:contact@fremn.com" className="reach-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M1 4l6 4 6-4" stroke="currentColor" strokeWidth="1.2"/>
              </svg>
              contact@fremn.com
            </a>
            <a href="https://linkedin.com/company/fremn" target="_blank" rel="noopener noreferrer" className="reach-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1" y="1" width="12" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M4.5 10V6M4.5 5V4.5M6.5 10V7.5c0-.8.5-1.5 1.5-1.5s1.5.7 1.5 1.5V10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://x.com/thefremn" target="_blank" rel="noopener noreferrer" className="reach-link">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              </svg>
              @thefremn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
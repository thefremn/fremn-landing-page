import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "FREMN",
  description: "AI receptionist for outpatient clinics. Voice, WhatsApp and Web — 24/7 with zero extra headcount.",
};

const schema1 = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "FREMN",
  "alternateName": "FREMN Technologies",
  "description": "AI-powered front desk platform for outpatient clinics in India. Handles patient calls, WhatsApp bookings, appointment reminders, and follow-ups automatically — 24/7, without adding staff.",
  "url": "https://fremn.com",
  "applicationCategory": "HealthcareApplication",
  "operatingSystem": "Web, WhatsApp, Voice",
  "offers": {
    "@type": "Offer",
    "description": "Flat monthly plans. Free 48-hour pilot available with no commitment.",
    "url": "https://fremn.com/#contact"
  },
  "creator": {
    "@type": "Organization",
    "name": "FREMN Technologies LLP",
    "url": "https://fremn.com",
    "email": "contact@fremn.com",
    "foundingLocation": "Kolkata, India",
    "sameAs": [
      "https://linkedin.com/company/fremn",
      "https://x.com/thefremn"
    ],
    "founder": [
      { "@type": "Person", "name": "Chinton Dutta" },
      { "@type": "Person", "name": "Amar Kumar Thakur" },
      { "@type": "Person", "name": "Sheikh Sami Akhtar" },
      { "@type": "Person", "name": "Krishti Poddar" }
    ]
  }
}`;

const schema2 = `{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FREMN Technologies LLP",
  "alternateName": "FREMN",
  "url": "https://fremn.com",
  "email": "contact@fremn.com",
  "description": "FREMN builds AI front desk software for outpatient clinics in India. Automates patient calls, WhatsApp bookings, appointment reminders, and follow-ups.",
  "foundingLocation": {
    "@type": "Place",
    "name": "Kolkata, West Bengal, India"
  },
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "sameAs": [
    "https://linkedin.com/company/fremn",
    "https://x.com/thefremn"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "contact@fremn.com",
    "contactType": "customer support",
    "areaServed": "IN",
    "availableLanguage": ["English", "Hindi", "Bengali"]
  },
  "knowsAbout": [
    "AI receptionist for clinics",
    "Clinic appointment automation",
    "WhatsApp booking for hospitals",
    "Patient communication software",
    "Healthcare front desk automation",
    "No-show reduction for clinics"
  ]
}`;

const schema3 = `{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "FREMN Services",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "AI Voice Receptionist",
        "description": "Handles inbound patient calls 24/7. Books appointments, answers queries, and routes urgent calls to staff — without a human receptionist picking up.",
        "provider": { "@type": "Organization", "name": "FREMN" },
        "areaServed": "India",
        "audience": { "@type": "Audience", "name": "Outpatient clinics" }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "WhatsApp Appointment Automation",
        "description": "Two-way WhatsApp conversations for booking, confirmation, rescheduling, and cancellation. Patients get responses in under a minute.",
        "provider": { "@type": "Organization", "name": "FREMN" },
        "areaServed": "India",
        "audience": { "@type": "Audience", "name": "Outpatient clinics" }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Appointment Reminder System",
        "description": "Automated reminders sent 24 hours and 2 hours before appointments via WhatsApp. Reduces no-shows by 35–45% within the first month.",
        "provider": { "@type": "Organization", "name": "FREMN" },
        "areaServed": "India",
        "audience": { "@type": "Audience", "name": "Outpatient clinics" }
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Patient Follow-up Automation",
        "description": "Post-visit follow-ups, feedback collection, and return visit prompts sent automatically after each appointment.",
        "provider": { "@type": "Organization", "name": "FREMN" },
        "areaServed": "India",
        "audience": { "@type": "Audience", "name": "Outpatient clinics" }
      }
    }
  ]
}`;

const schema4 = `{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to set up FREMN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Setup takes 48 hours. No IT involvement is needed. The only requirement is a WhatsApp-enabled number and 45 minutes with a practice manager to complete the intake form. The clinic reviews and approves everything before it goes live."
      }
    },
    {
      "@type": "Question",
      "name": "How much does FREMN cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FREMN offers flat monthly plans priced per clinic. The pilot is completely free with no commitment required. Email contact@fremn.com or visit fremn.com to request current pricing."
      }
    },
    {
      "@type": "Question",
      "name": "Does FREMN replace the receptionist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. FREMN handles routine tasks — answering calls, booking appointments, sending reminders — so receptionists can focus on patients who are physically present. It works alongside existing staff, not instead of them."
      }
    },
    {
      "@type": "Question",
      "name": "How much does FREMN reduce no-shows?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clinics using FREMN's WhatsApp reminder flow see a 35–45% reduction in no-shows within the first month. Patients can confirm, reschedule, or cancel directly in WhatsApp, which eliminates most no-shows caused by patients who cannot reach the clinic to change their appointment."
      }
    },
    {
      "@type": "Question",
      "name": "Which clinic specialties does FREMN work for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FREMN works for any outpatient clinic — dental, general physician, ENT, dermatology, ophthalmology, orthopedics, pediatrics, physiotherapy, gynecology, cardiology, and more. It has been validated by clinicians at Calcutta Medical College, Tata Medical Center, and Sahid Khudiram Government General Hospital."
      }
    },
    {
      "@type": "Question",
      "name": "Which channels does FREMN support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FREMN works on voice (inbound phone calls), WhatsApp, web, and clinic apps. All channels are managed from a single dashboard."
      }
    },
    {
      "@type": "Question",
      "name": "Does FREMN work with existing clinic software?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FREMN does not require access to existing clinic management software, though integration is available for supported platforms. No new hardware is required. Most clinics run FREMN alongside whatever system they already use."
      }
    },
    {
      "@type": "Question",
      "name": "Is FREMN available outside Kolkata?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. FREMN is available to any outpatient clinic in India. Setup is fully remote. Current pilot clinics are in Kolkata, Bengaluru, and Chennai."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a patient asks something the AI cannot handle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "FREMN escalates complex or sensitive queries to a staff member. Escalation rules are configured during onboarding and can be updated at any time from the clinic dashboard."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get started with FREMN?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Visit fremn.com and fill out the pilot request form, or email contact@fremn.com. The team will reach out within 48 hours to set up a personalised pilot for your clinic. No commitment is required."
      }
    }
  ]
}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="hydrated">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema1 }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema2 }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema3 }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema4 }} />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
         <Script
          src="https://solvia-widget.vercel.app/widget.js"
          data-organization-id={process.env.NEXT_PUBLIC_SOLVIA_ORG_ID}
          strategy="afterInteractive"
        />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
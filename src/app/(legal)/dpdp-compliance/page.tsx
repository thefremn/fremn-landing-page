import LegalLayout from "@/components/custom/legal-format";

export default function DPDPCompliance() {
  return (
    <LegalLayout
      badge="Legal · DPDP Compliance"
      title="DPDP Compliance Notice"
      effectiveDate="17th April 2026"
      intro="FREMN, operated by FREMN TECHNOLOGIES LLP, follows responsible personal data handling practices aligned with India's Digital Personal Data Protection Act, 2023 (DPDP Act). This notice explains our role, obligations, and the rights available to individuals."
      relatedLinks={[
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
      ]}
      sections={[
        {
          id: "role",
          number: "01",
          title: "Role of FREMN Under the DPDP Act",
          content: (
            <>
              <p>The DPDP Act, 2023 establishes a clear framework for how personal data is handled. Under this framework, when clinics use FREMN:</p>
              <ul className="legal-list">
                <li><strong>Clinics act as Data Fiduciaries</strong> — they determine the purpose and means of processing patient data</li>
                <li><strong>FREMN TECHNOLOGIES LLP acts as a Data Processor</strong> — processing communication data only as directed by the clinic, solely to deliver AI receptionist services</li>
              </ul>
              <div className="legal-highlight">
                FREMN processes personal data strictly to provide the AI receptionist services contracted by each clinic. We do not process data for any independent purpose beyond service delivery.
              </div>
            </>
          ),
        },
        {
          id: "processing-principles",
          number: "02",
          title: "Processing Principles",
          content: (
            <>
              <p>FREMN&apos;s data handling practices are aligned with the core principles of the DPDP Act, 2023, including:</p>
              <ul className="legal-list">
                <li><strong>Purpose limitation</strong> — data is processed only for the specific purpose for which it was collected</li>
                <li><strong>Data minimization</strong> — only the data necessary for service delivery is processed</li>
                <li><strong>Secure processing</strong> — appropriate technical safeguards are applied at all times</li>
                <li><strong>Consent-based usage</strong> — processing occurs only where a valid lawful basis exists</li>
                <li><strong>Reasonable safeguards</strong> — organizational measures are in place to prevent unauthorized access or misuse</li>
              </ul>
            </>
          ),
        },
        {
          id: "user-rights",
          number: "03",
          title: "User Rights Under the DPDP Act",
          content: (
            <>
              <p>Individuals whose personal data is processed through FREMN have the following rights under the DPDP Act, 2023:</p>
              <ul className="legal-list">
                <li><strong>Right of Access</strong> — request information about personal data held and how it is being used</li>
                <li><strong>Right to Correction</strong> — request correction of any inaccurate or incomplete personal data</li>
                <li><strong>Right to Withdrawal of Consent</strong> — withdraw previously granted consent for data processing</li>
                <li><strong>Right to Erasure</strong> — request removal of personal data where applicable under the Act</li>
              </ul>
              <p>All requests under the DPDP Act may be submitted to:</p>
              <a href="mailto:privacy@fremn.com" className="legal-contact-chip">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="1" y="3" width="11" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
                  <path d="M1 4.5l5.5 3.5L12 4.5" stroke="currentColor" strokeWidth="1.1"/>
                </svg>
                privacy@fremn.com
              </a>
            </>
          ),
        },
        {
          id: "security-safeguards",
          number: "04",
          title: "Security Safeguards",
          content: (
            <>
              <p>To protect personal data and meet our obligations under the DPDP Act, FREMN applies the following technical and organizational safeguards:</p>
              <ul className="legal-list">
                <li>Secure authentication for all platform access points</li>
                <li>Controlled internal system access on a need-to-know basis</li>
                <li>Cloud infrastructure protections aligned with industry-standard practices</li>
                <li>Active monitoring for unauthorized access attempts or anomalous activity</li>
              </ul>
              <div className="legal-highlight">
                These safeguards are reviewed and updated periodically to reflect evolving security standards and DPDP Act requirements as they are notified by the Government of India.
              </div>
            </>
          ),
        },
        {
          id: "grievance",
          number: "05",
          title: "Grievance Contact",
          content: (
            <>
              <p>For any DPDP-related concerns, complaints, or data rights requests, individuals may reach our designated grievance contact:</p>
              <a href="mailto:contact@fremn.com" className="legal-contact-chip">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="1" y="3" width="11" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
                  <path d="M1 4.5l5.5 3.5L12 4.5" stroke="currentColor" strokeWidth="1.1"/>
                </svg>
                contact@fremn.com
              </a>
              <p style={{ marginTop: "14px" }}>We aim to acknowledge all DPDP-related requests within 72 hours and resolve them within the timeframes prescribed under the Act.</p>
            </>
          ),
        },
      ]}
    />
  );
}
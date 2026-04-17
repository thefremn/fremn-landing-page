import LegalLayout from "@/components/custom/legal-format";

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      badge="Legal · Privacy Policy"
      title="Privacy Policy"
      effectiveDate="17th April 2026"
      intro="FREMN, operated by FREMN TECHNOLOGIES LLP, respects your privacy and is committed to protecting personal information shared through our website and services. This policy explains what we collect, why, and how we protect it."
      relatedLinks={[
        { label: "Terms of Service", href: "/terms-of-service" },
        { label: "DPDP Compliance", href: "/dpdp-compliance" },
      ]}
      sections={[
        {
          id: "information-collected",
          number: "01",
          title: "Information We Collect",
          content: (
            <>
              <p>When you interact with FREMN through our website or services, we may collect the following categories of information:</p>
              <ul className="legal-list">
                <li>Name and contact details (email address, phone number)</li>
                <li>Organization or clinic name and specialty</li>
                <li>Device and browser information for platform optimization</li>
                <li>Interaction logs from supported communication channels</li>
              </ul>
              <p>This information is used exclusively to operate, support, and improve the FREMN platform.</p>
            </>
          ),
        },
        {
          id: "communication-data",
          number: "02",
          title: "Communication Data",
          content: (
            <>
              <p>When clinics use FREMN, the platform may process communication content exchanged through:</p>
              <ul className="legal-list">
                <li>Voice call interactions handled by the AI receptionist</li>
                <li>WhatsApp messages sent to or from the clinic's FREMN channel</li>
                <li>Website widget conversations initiated by patients</li>
              </ul>
              <div className="legal-highlight">
                This processing is limited exclusively to supporting automation of clinic communication workflows. FREMN does not use this data for advertising or profiling.
              </div>
            </>
          ),
        },
        {
          id: "data-use",
          number: "03",
          title: "Purpose of Data Use",
          content: (
            <>
              <p>Collected information may be used for the following purposes:</p>
              <ul className="legal-list">
                <li>Operate and deliver platform services reliably</li>
                <li>Respond to pilot demo requests and onboarding inquiries</li>
                <li>Improve platform performance and AI accuracy over time</li>
                <li>Maintain platform security and prevent misuse</li>
                <li>Provide ongoing technical support to clinics using FREMN</li>
              </ul>
            </>
          ),
        },
        {
          id: "healthcare-data",
          number: "04",
          title: "Role in Healthcare Data Handling",
          content: (
            <>
              <p>Clinics using FREMN remain responsible for all patient communication decisions and the accuracy of information provided through the platform.</p>
              <div className="legal-highlight">
                <strong>FREMN TECHNOLOGIES LLP acts as a technology service provider</strong> supporting workflow automation only. We do not provide healthcare services and are not a data fiduciary in the clinical context — the clinic is.
              </div>
            </>
          ),
        },
        {
          id: "data-storage",
          number: "05",
          title: "Data Storage and Protection",
          content: (
            <>
              <p>We apply appropriate technical and organizational safeguards to protect personal data, including:</p>
              <ul className="legal-list">
                <li>Secure authentication protocols for all system access</li>
                <li>Restricted internal access based on role and necessity</li>
                <li>Cloud infrastructure protection practices aligned with industry standards</li>
              </ul>
              <p>These measures are applied to support responsible and secure data handling across the platform.</p>
            </>
          ),
        },
        {
          id: "third-party",
          number: "06",
          title: "Third-Party Services",
          content: (
            <>
              <p>FREMN may rely on trusted third-party providers for certain platform functions, including:</p>
              <ul className="legal-list">
                <li>Cloud hosting and infrastructure</li>
                <li>Authentication and identity management</li>
                <li>Communication APIs (voice, WhatsApp, web)</li>
                <li>Analytics and performance monitoring tools</li>
              </ul>
              <p>These providers maintain their own independent privacy policies and security practices.</p>
            </>
          ),
        },
        {
          id: "cookies",
          number: "07",
          title: "Cookies",
          content: (
            <>
              <p>Cookies may be used on the FREMN website to:</p>
              <ul className="legal-list">
                <li>Improve overall website performance and load times</li>
                <li>Analyze usage patterns and visitor behaviour</li>
                <li>Maintain session continuity across interactions</li>
              </ul>
              <p>Users can disable cookies at any time through their browser settings without affecting core functionality.</p>
            </>
          ),
        },
        {
          id: "data-retention",
          number: "08",
          title: "Data Retention",
          content: (
            <>
              <p>Personal data is retained only for as long as is necessary to operate our services and support users effectively. When data is no longer needed, it is securely deleted or anonymized in accordance with applicable standards.</p>
            </>
          ),
        },
        {
          id: "your-rights",
          number: "09",
          title: "Your Rights",
          content: (
            <>
              <p>You may exercise the following rights with respect to your personal data at any time:</p>
              <ul className="legal-list">
                <li>Request access to the data we hold about you</li>
                <li>Request correction of any inaccurate information</li>
                <li>Request removal of submitted contact information</li>
              </ul>
              <p>To exercise any of these rights, please contact us at:</p>
              <a href="mailto:contacts@fremn.com" className="legal-contact-chip">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="1" y="3" width="11" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
                  <path d="M1 4.5l5.5 3.5L12 4.5" stroke="currentColor" strokeWidth="1.1"/>
                </svg>
                contacts@fremn.com
              </a>
            </>
          ),
        },
        {
          id: "policy-updates",
          number: "10",
          title: "Policy Updates",
          content: (
            <>
              <p>This Privacy Policy may be updated periodically to reflect changes in our practices, technology, or applicable laws. The latest version will always be available on this page.</p>
              <p>We encourage you to review this policy periodically. Continued use of the platform constitutes acceptance of any updates.</p>
            </>
          ),
        },
      ]}
    />
  );
}
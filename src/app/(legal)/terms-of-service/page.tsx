import LegalLayout from "@/components/custom/legal-format";
export default function TermsOfService() {
  return (
    <LegalLayout
      badge="Legal · Terms of Service"
      title="Terms of Service"
      effectiveDate="17th April 2026"
      intro="These Terms of Service govern your use of FREMN, an AI receptionist platform for outpatient healthcare clinics operated by FREMN TECHNOLOGIES LLP. By accessing or using our website and services, you agree to these Terms."
      relatedLinks={[
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "DPDP Compliance", href: "/dpdp-compliance" },
      ]}
      sections={[
        {
          id: "about",
          number: "01",
          title: "About FREMN",
          content: (
            <>
              <p>FREMN is an AI receptionist platform designed to help outpatient healthcare clinics manage patient communication across voice calls, WhatsApp, and web-based interfaces.</p>
              <p>The platform supports automation of front desk workflows such as appointment inquiries, confirmations, reminders, and missed-call responses.</p>
              <div className="legal-highlight">
                <strong>Important:</strong> FREMN does <strong>not</strong> provide medical advice or clinical decision support of any kind.
              </div>
            </>
          ),
        },
        {
          id: "acceptance",
          number: "02",
          title: "Acceptance of Terms",
          content: (
            <>
              <p>By using FREMN, you agree to the following:</p>
              <ul className="legal-list">
                <li>Provide accurate information when using the platform</li>
                <li>Comply with applicable laws and regulations</li>
                <li>Use the platform responsibly and in good faith</li>
                <li>Not misuse platform infrastructure in any manner</li>
              </ul>
              <p>If you do not agree to these terms, please discontinue use of the platform immediately.</p>
            </>
          ),
        },
        {
          id: "permitted-use",
          number: "03",
          title: "Permitted Use",
          content: (
            <>
              <p>Users of the FREMN platform expressly agree not to:</p>
              <ul className="legal-list">
                <li>Attempt unauthorized access to any part of the platform or its infrastructure</li>
                <li>Reverse engineer any system components, algorithms, or AI workflows</li>
                <li>Upload harmful, malicious, or illegal content through any channel</li>
                <li>Misuse automated communication features for spam or unsolicited outreach</li>
              </ul>
              <p>FREMN TECHNOLOGIES LLP reserves the right to restrict or terminate access if misuse is detected or suspected.</p>
            </>
          ),
        },
        {
          id: "healthcare-disclaimer",
          number: "04",
          title: "Healthcare Responsibility Disclaimer",
          content: (
            <>
              <p>FREMN provides communication automation support only. The platform is not a clinical system and does not participate in medical decision-making.</p>
              <p>Healthcare providers using FREMN remain solely responsible for:</p>
              <ul className="legal-list">
                <li>All diagnosis and treatment decisions</li>
                <li>Patient communication accuracy and clinical appropriateness</li>
                <li>Regulatory compliance obligations under applicable healthcare laws</li>
              </ul>
              <div className="legal-highlight">
                <strong>FREMN does not replace licensed medical professionals or clinical systems.</strong> It is a front desk automation tool only.
              </div>
            </>
          ),
        },
        {
          id: "availability",
          number: "05",
          title: "Platform Availability",
          content: (
            <>
              <p>We aim to maintain reliable service availability but cannot guarantee uninterrupted operation at all times. Temporary downtime may occur due to:</p>
              <ul className="legal-list">
                <li>Scheduled maintenance and updates</li>
                <li>Emergency patches or security fixes</li>
                <li>Third-party service dependencies beyond our control</li>
              </ul>
              <p>We will endeavour to communicate planned downtime in advance wherever possible.</p>
            </>
          ),
        },
        {
          id: "intellectual-property",
          number: "06",
          title: "Intellectual Property",
          content: (
            <>
              <p>All platform components remain the exclusive property of FREMN TECHNOLOGIES LLP, including but not limited to:</p>
              <ul className="legal-list">
                <li>Software code and architecture</li>
                <li>Design system, branding, and visual identity</li>
                <li>AI workflows, models, and prompt systems</li>
                <li>Documentation, guides, and training materials</li>
              </ul>
              <p>Unauthorized reproduction, distribution, or modification of any platform component is strictly prohibited.</p>
            </>
          ),
        },
        {
          id: "liability",
          number: "07",
          title: "Limitation of Liability",
          content: (
            <>
              <p>FREMN TECHNOLOGIES LLP is not responsible for outcomes arising from use of the platform, including:</p>
              <ul className="legal-list">
                <li>Communication delays or failed message delivery</li>
                <li>Missed appointments due to platform or third-party failures</li>
                <li>Clinic workflow decisions made based on platform output</li>
                <li>Disruptions caused by third-party service providers</li>
              </ul>
              <p>Use of the platform is at your own discretion. FREMN TECHNOLOGIES LLP's liability is limited to the maximum extent permitted by applicable law.</p>
            </>
          ),
        },
        {
          id: "updates",
          number: "08",
          title: "Updates to Terms",
          content: (
            <>
              <p>These Terms may be updated periodically to reflect changes in the platform, applicable laws, or business practices. The effective date at the top of this document will be revised accordingly.</p>
              <p>Continued use of the platform after an update is published constitutes acceptance of the revised Terms.</p>
            </>
          ),
        },
        {
          id: "contact",
          number: "09",
          title: "Contact",
          content: (
            <>
              <p>For any questions, concerns, or support related to these Terms of Service, please reach out to:</p>
              <a href="mailto:contact@fremn.com" className="legal-contact-chip">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <rect x="1" y="3" width="11" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.1"/>
                  <path d="M1 4.5l5.5 3.5L12 4.5" stroke="currentColor" strokeWidth="1.1"/>
                </svg>
                contact@fremn.com
              </a>
            </>
          ),
        },
      ]}
    />
  );
}
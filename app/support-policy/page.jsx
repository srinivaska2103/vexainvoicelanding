import LegalPageLayout from '@/components/LegalPageLayout';
import { APP_CONFIG } from '@/lib/config';

export const metadata = {
  title: 'Support Policy — VEXA Invoice by VEXA TECH',
  description: 'Understand VEXA Invoice customer support scope, technical assistance channels, bug resolution workflows, and lifetime package support coverage.',
  alternates: {
    canonical: `${APP_CONFIG.landingUrl}/support-policy`,
  },
  openGraph: {
    title: 'Support Policy — VEXA Invoice',
    description: 'Understand VEXA Invoice customer support scope, technical assistance channels, and lifetime package coverage.',
    url: `${APP_CONFIG.landingUrl}/support-policy`,
    siteName: 'VEXA Invoice',
    locale: 'en_IN',
    type: 'website',
  },
};

const toc = [
  { href: '#sec-1', label: '1. Support Policy Scope' },
  { href: '#sec-2', label: '2. Supported Product Modules' },
  { href: '#sec-3', label: '3. Contacting Support' },
  { href: '#sec-4', label: '4. Information to Provide' },
  { href: '#sec-5', label: '5. Account Verification' },
  { href: '#sec-6', label: '6. Billing & Subscription Inquiries' },
  { href: '#sec-7', label: '7. Payment Issue Resolution' },
  { href: '#sec-8', label: '8. Technical Bug Workflow' },
  { href: '#sec-9', label: '9. Planned Maintenance' },
  { href: '#sec-10', label: '10. Feature Feedback' },
  { href: '#sec-11', label: '11. Support Exclusions' },
  { href: '#sec-12', label: '12. Lifetime Package Support' },
  { href: '#sec-13', label: '13. Policy Amendments' },
];

export default function SupportPolicyPage() {
  return (
    <LegalPageLayout
      title="Support Policy"
      subtitle="Our commitment to delivering responsive, reliable customer assistance, troubleshooting, and system guidance for active VEXA Invoice subscribers."
      breadcrumbText="Support Policy"
      lastUpdated="October 22, 2026"
      tableOfContents={toc}
    >
      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-blue-900 leading-relaxed">
        <strong>Direct Assistance:</strong> Our customer success and engineering team is available to assist you with onboarding, daily invoicing questions, and software troubleshooting via our official support channel: <a href={`mailto:${APP_CONFIG.supportEmail}`} className="font-bold underline">{APP_CONFIG.supportEmail}</a>.
      </div>

      <section id="sec-1" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          1. Scope of Support
        </h2>
        <p>
          This Support Policy describes the technical and account assistance provided by VEXA TECH to authorized administrators and users of VEXA Invoice. Support is available for commercial subscribers with an active monthly subscription or verified Lifetime entitlement.
        </p>
      </section>

      <section id="sec-2" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          2. Supported Product Modules
        </h2>
        <p>
          Standard support covers the official feature set included in your package:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Sales Invoicing, Proforma Estimates, and PDF receipt generation</li>
          <li>POS counter workflow, customer associations, and barcode scanning</li>
          <li>Inventory management, stock inward logs, and automated SKU generation</li>
          <li>GST rate formulas, HSN code associations, and summary report generation</li>
          <li>Customer & Supplier directory ledgers and balance tracking</li>
          <li>Custom Online Shop Storefront configuration, QR code download, and order intake (Lifetime Plan)</li>
        </ul>
      </section>

      <section id="sec-3" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          3. How to Contact Support
        </h2>
        <p>
          Support requests can be submitted through our verified channels:
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-2">
          <div>
            <span className="font-bold text-slate-900">Email Support: </span>
            <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-blue-600 font-semibold">{APP_CONFIG.supportEmail}</a>
          </div>
          <div>
            <span className="font-bold text-slate-900">Business Hours: </span>
            <span>Monday through Saturday, 9:30 AM to 6:30 PM IST (excluding national holidays)</span>
          </div>
        </div>
      </section>

      <section id="sec-4" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          4. Information to Provide When Reporting an Issue
        </h2>
        <p>
          To expedite technical investigation, please include the following in your ticket:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Your registered company name and administrator email address</li>
          <li>Specific module or page where the behavior occurred (e.g., POS counter, Invoicing)</li>
          <li>Invoice, SKU, or Order number involved (if applicable)</li>
          <li>Exact text or screenshot of any error messages displayed</li>
          <li>Operating system and browser version used</li>
        </ul>
      </section>

      <section id="sec-5" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          5. Account Access and Verification
        </h2>
        <p>
          For security and data privacy reasons, our support engineers will only execute account-level changes (such as administrator email modification or cancellation) upon verification of ownership from the registered administrator email. VEXA TECH staff will never ask for your account password or net banking credentials.
        </p>
      </section>

      <section id="sec-6" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          6. Billing & Subscription Inquiries
        </h2>
        <p>
          Our team assists with billing queries, subscription upgrades, plan transitions, and invoice receipt requests for your VEXA Invoice software fees.
        </p>
      </section>

      <section id="sec-7" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          7. Payment-Related Enquiries & Verification
        </h2>
        <p>
          If your account payment was debited but your workspace subscription did not update immediately, send your transaction reference ID and timestamp to <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-blue-600 font-semibold">{APP_CONFIG.supportEmail}</a>. Our team will verify settlement with our payment partner and activate your entitlement promptly.
        </p>
      </section>

      <section id="sec-8" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          8. Technical Bug Investigation Workflow
        </h2>
        <p>
          Software defects reported by users are evaluated by our engineering desk. High-severity issues impacting billing transactions or database integrity receive top priority for emergency patches and deployment.
        </p>
      </section>

      <section id="sec-9" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          9. Planned Maintenance & Service Interruptions
        </h2>
        <p>
          Routine database optimizations and cloud upgrades are scheduled during off-peak commercial hours (typically late night IST) to minimize disruption to retail billing counters. Notice of scheduled maintenance is communicated in advance through the application banner.
        </p>
      </section>

      <section id="sec-10" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          10. Feature Feedback & Enhancement Requests
        </h2>
        <p>
          We welcome customer recommendations for workflow improvements. While we carefully review all feature submissions, inclusion in future software releases remains at the sole technical discretion of the VEXA TECH product team.
        </p>
      </section>

      <section id="sec-11" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          11. Support Exclusions
        </h2>
        <p>
          Standard support does not encompass:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>On-site physical computer repair, printer hardware servicing, or operating system troubleshooting</li>
          <li>Chartered accountant tax advisory, filing assistance on the GST portal, or legal compliance consultation</li>
          <li>Custom source-code development, private database modifications, or third-party API integration outside standard platform capabilities</li>
          <li>Workspaces operating outside active trial or paid subscription status</li>
        </ul>
      </section>

      <section id="sec-12" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          12. Lifetime Package Support Coverage
        </h2>
        <p className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 italic">
          “Lifetime free support is available for the features included in the VEXA Invoice Lifetime package, subject to the published scope of support.”
        </p>
        <p>
          Subscribers who purchase the ₹59,999 Lifetime package receive continuous access to standard technical support, troubleshooting, and software maintenance for the included feature set without requiring monthly renewal fees.
        </p>
      </section>

      <section id="sec-13" className="space-y-3 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          13. Policy Amendments
        </h2>
        <p>
          VEXA TECH may update this Support Policy to reflect improvements in support infrastructure and operational procedures. Any changes will be published on this page.
        </p>
      </section>
    </LegalPageLayout>
  );
}

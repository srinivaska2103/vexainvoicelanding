import LegalPageLayout from '@/components/LegalPageLayout';
import { APP_CONFIG } from '@/lib/config';

export const metadata = {
  title: 'Terms of Service — VEXA Invoice by VEXA TECH',
  description: 'Terms of Service, subscription conditions, acceptable use, and licensing terms for VEXA Invoice SaaS billing software.',
  alternates: {
    canonical: `${APP_CONFIG.landingUrl}/terms-of-service`,
  },
  openGraph: {
    title: 'Terms of Service — VEXA Invoice',
    description: 'Terms of Service and licensing terms for VEXA Invoice SaaS billing software.',
    url: `${APP_CONFIG.landingUrl}/terms-of-service`,
    siteName: 'VEXA Invoice',
    locale: 'en_IN',
    type: 'website',
  },
};

const toc = [
  { href: '#sec-1', label: '1. Introduction & Acceptance' },
  { href: '#sec-2', label: '2. Eligibility & Registration' },
  { href: '#sec-3', label: '3. Company Account Ownership' },
  { href: '#sec-4', label: '4. Authorized Staff Accounts' },
  { href: '#sec-5', label: '5. Subscription Plans & Pricing' },
  { href: '#sec-6', label: '6. Free Trial Terms' },
  { href: '#sec-7', label: '7. Monthly Billing & Renewal' },
  { href: '#sec-8', label: '8. Lifetime Entitlement Scope' },
  { href: '#sec-9', label: '9. Third-Party Payment Services' },
  { href: '#sec-10', label: '10. Acceptable Use Policy' },
  { href: '#sec-11', label: '11. Online Shop Storefronts' },
  { href: '#sec-12', label: '12. Invoice & Tax Calculations' },
  { href: '#sec-13', label: '13. Intellectual Property' },
  { href: '#sec-14', label: '14. Service Availability' },
  { href: '#sec-15', label: '15. Suspension & Termination' },
  { href: '#sec-16', label: '16. Governing Law & Contact' },
];

export default function TermsOfServicePage() {
  return (
    <LegalPageLayout
      title="Terms of Service"
      subtitle="These Terms of Service govern your commercial access to and use of VEXA Invoice, an enterprise billing, point-of-sale, and inventory management platform operated by VEXA TECH."
      breadcrumbText="Terms of Service"
      lastUpdated="October 22, 2026"
      tableOfContents={toc}
    >
      <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs sm:text-sm text-amber-950 leading-relaxed">
        <strong>Important Agreement:</strong> By creating an account, initiating a trial, or completing a payment on VEXA Invoice, you represent that you have legal authority to bind your business organization to these Terms of Service.
      </div>

      <section id="sec-1" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          1. Introduction and Acceptance
        </h2>
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between your registered business organization (&ldquo;Customer&rdquo;, &ldquo;Subscriber&rdquo;, &ldquo;you&rdquo;) and <strong>VEXA TECH</strong> (&ldquo;VEXA TECH&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). These Terms apply to your use of the VEXA Invoice website, web application, API services, and associated modules.
        </p>
      </section>

      <section id="sec-2" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          2. Eligibility and Account Registration
        </h2>
        <p>
          VEXA Invoice is intended strictly for commercial and business purposes. You must be at least 18 years old and competent to enter into commercial contracts under the Indian Contract Act, 1872. You agree to provide accurate, current, and complete registration details, including your business name, contact information, and state of operation.
        </p>
      </section>

      <section id="sec-3" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          3. Company Account Ownership & Administrator Responsibility
        </h2>
        <p>
          The individual registering the company workspace is deemed the primary Account Administrator. The Administrator holds ultimate authority over tenant settings, staff invitations, subscription billing decisions, and data export. You are responsible for safeguarding your administrative credentials.
        </p>
      </section>

      <section id="sec-4" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          4. Authorized Employee Accounts & Access Control
        </h2>
        <p>
          Subscribers may invite authorized staff members to access the POS counter or inventory modules subject to their subscription entitlement. You are solely responsible for all actions conducted under your workspace user credentials.
        </p>
      </section>

      <section id="sec-5" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          5. Subscription Plans & Published Pricing
        </h2>
        <p>
          VEXA Invoice offers two primary transparent packages:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-slate-200 bg-slate-50">
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Plan A</div>
            <div className="text-lg font-extrabold text-slate-900 mt-0.5">VEXA Invoice Monthly</div>
            <div className="text-2xl font-bold text-blue-600 my-1">₹599<span className="text-xs text-slate-500 font-normal"> / month</span></div>
            <p className="text-xs text-slate-600">
              Includes sales invoicing, proforma estimates, POS counter, inventory & barcode/SKU tracking, GST formulas, customer/supplier ledgers, purchase orders, and business reports.
            </p>
          </div>

          <div className="p-4 rounded-xl border-2 border-blue-600 bg-blue-50/40">
            <div className="text-xs font-bold text-blue-700 uppercase tracking-wider">Plan B • Best Value</div>
            <div className="text-lg font-extrabold text-slate-900 mt-0.5">VEXA Invoice Lifetime</div>
            <div className="text-2xl font-bold text-slate-900 my-1">₹59,999<span className="text-xs text-blue-700 font-semibold"> (One-Time)</span></div>
            <p className="text-xs text-slate-700">
              Includes 100% of the core ₹599 monthly feature set for life with zero recurring renewal charges, plus the Custom Online Shop Store, shop QR download, customer order intake, and lifetime free priority support.
            </p>
          </div>
        </div>
      </section>

      <section id="sec-6" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          6. Free Trial Terms
        </h2>
        <p>
          New company accounts are eligible for a 7-day full access free trial for core billing and inventory modules upon registration. No credit card is required to initiate the trial. The backend authentication server maintains authoritative eligibility records; trials cannot be repeatedly triggered or reset for the same registered enterprise.
        </p>
      </section>

      <section id="sec-7" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          7. Monthly Recurring Billing, Cancellation & Renewal
        </h2>
        <p>
          Subscribers enrolled in the ₹599 monthly plan authorize recurring billing each month through the authorized payment flow. You may cancel your monthly subscription at any time directly from your account settings. Upon cancellation, your workspace retains active access until the conclusion of the paid billing cycle, after which invoicing actions are paused until renewal.
        </p>
      </section>

      <section id="sec-8" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          8. Lifetime Entitlement Scope
        </h2>
        <p>
          Payment of the ₹59,999 one-time fee grants perpetual software entitlement to the included feature set (core billing, POS, inventory, GST calculations, and the Custom Online Shop Store) with zero future recurring software charges. Lifetime entitlement is non-transferable between unrelated business entities. Lifetime support covers published software troubleshooting and updates for the included modules as detailed in our Support Policy.
        </p>
      </section>

      <section id="sec-9" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          9. Third-Party Payment Services & Gateways
        </h2>
        <p>
          Payments are verified and processed through authorized Indian payment gateway integrations. By initiating a payment transaction, you agree to comply with standard banking clearinghouse timelines and payment partner terms. VEXA TECH is not responsible for external bank network delays or card issuer declines.
        </p>
      </section>

      <section id="sec-10" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          10. Acceptable Use Policy
        </h2>
        <p>
          You agree not to:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Use VEXA Invoice for fraudulent, illegal, or deceptive business practices or issuing counterfeit invoices</li>
          <li>Reverse-engineer, decompile, or copy platform source code, database structures, or UI designs</li>
          <li>Circumvent account authentication, trial timers, or multi-tenant database isolation controls</li>
          <li>Introduce malware, exploit scripts, or conduct unauthorized automated vulnerability scans</li>
        </ul>
      </section>

      <section id="sec-11" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          11. Custom Online Shop Storefronts
        </h2>
        <p>
          Subscribers utilizing the Custom Online Shop Store are solely responsible for the legality, pricing accuracy, and availability of products listed in their public text catalogue. VEXA TECH provides the software platform and is not a party to commercial contracts or disputes between you and your retail customers.
        </p>
      </section>

      <section id="sec-12" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          12. Statutory Tax Calculations & Invoicing Responsibility
        </h2>
        <p>
          VEXA Invoice provides computational software automation for GST rates (CGST, SGST, IGST) and HSN codes based on values configured by the user. <strong>VEXA TECH does not provide legal, accounting, or chartered taxation advisory services.</strong> Subscribers are solely responsible for verifying the accuracy of tax invoices, filing statutory GSTR returns with government portals, and ensuring compliance with applicable Indian tax legislation.
        </p>
      </section>

      <section id="sec-13" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          13. Intellectual Property
        </h2>
        <p>
          VEXA TECH retains all right, title, and interest in and to VEXA Invoice, including all copyrights, trademarks, software code, visual designs, and documentation. You retain full ownership of your proprietary company records, inventory catalogs, and invoice data.
        </p>
      </section>

      <section id="sec-14" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          14. Service Availability & Maintenance
        </h2>
        <p>
          We strive to provide uninterrupted service through reliable cloud hosting. Scheduled maintenance windows are conducted with prior advisory notice whenever practicable. We are not liable for downtime caused by public internet disruptions, upstream cloud infrastructure outages, or force majeure events.
        </p>
      </section>

      <section id="sec-15" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          15. Account Suspension & Termination
        </h2>
        <p>
          We reserve the right to suspend or terminate access to any workspace that violates these Terms, engages in fraudulent billing, or fails to satisfy outstanding subscription charges after appropriate notice.
        </p>
      </section>

      <section id="sec-16" className="space-y-3 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          16. Governing Law, Jurisdiction & Legal Contact
        </h2>
        <p>
          These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any legal proceedings or disputes arising under these Terms shall be subject to the exclusive jurisdiction of the competent courts in India.
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1 mt-3">
          <div className="font-bold text-slate-900">VEXA TECH — Legal Operations</div>
          <div>Official Email: <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-blue-600 font-semibold">{APP_CONFIG.supportEmail}</a></div>
          <div>Corporate Website: <a href={APP_CONFIG.landingUrl} className="text-blue-600">{APP_CONFIG.landingUrl}</a></div>
        </div>
      </section>
    </LegalPageLayout>
  );
}

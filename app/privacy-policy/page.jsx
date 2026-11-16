import LegalPageLayout from '@/components/LegalPageLayout';
import { APP_CONFIG } from '@/lib/config';

export const metadata = {
  title: 'Privacy Policy — VEXA Invoice by VEXA TECH',
  description: 'Learn how VEXA Invoice collects, processes, and protects business, invoice, inventory, and customer data for Indian enterprises.',
  alternates: {
    canonical: `${APP_CONFIG.landingUrl}/privacy-policy`,
  },
  openGraph: {
    title: 'Privacy Policy — VEXA Invoice',
    description: 'Learn how VEXA Invoice collects, processes, and protects business, invoice, inventory, and customer data.',
    url: `${APP_CONFIG.landingUrl}/privacy-policy`,
    siteName: 'VEXA Invoice',
    locale: 'en_IN',
    type: 'website',
  },
};

const toc = [
  { href: '#sec-1', label: '1. Introduction & Scope' },
  { href: '#sec-2', label: '2. Information We Collect' },
  { href: '#sec-3', label: '3. Customer & Supplier Data' },
  { href: '#sec-4', label: '4. Inventory & Order Data' },
  { href: '#sec-5', label: '5. Account Authentication' },
  { href: '#sec-6', label: '6. Payment Processing' },
  { href: '#sec-7', label: '7. Cookies & Sessions' },
  { href: '#sec-8', label: '8. Purposes of Processing' },
  { href: '#sec-9', label: '9. Third-Party Integrations' },
  { href: '#sec-10', label: '10. Storage & Retention' },
  { href: '#sec-11', label: '11. Security Practices' },
  { href: '#sec-12', label: '12. Access & Deletion' },
  { href: '#sec-13', label: '13. Business Responsibilities' },
  { href: '#sec-14', label: '14. Online Shop Storefronts' },
  { href: '#sec-15', label: '15. Policy Changes' },
  { href: '#sec-16', label: '16. Contact & Enquiries' },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="This Privacy Policy describes how VEXA TECH collects, processes, and protects business information and personal data through the VEXA Invoice software platform."
      breadcrumbText="Privacy Policy"
      lastUpdated="October 22, 2026"
      tableOfContents={toc}
    >
      <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200 text-xs sm:text-sm text-blue-900 leading-relaxed">
        <strong>Notice:</strong> VEXA Invoice is a commercial business-to-business (B2B) billing, inventory, and point-of-sale software solution operated by VEXA TECH. By using VEXA Invoice, you consent to the data collection and operational practices described herein.
      </div>

      <section id="sec-1" className="space-y-3 pt-4">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          1. Introduction and Scope
        </h2>
        <p>
          VEXA TECH (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides the <strong>VEXA Invoice</strong> software platform designed for Indian retail shops, garment businesses, wholesale traders, and enterprises. This Privacy Policy applies to our website (<a href={APP_CONFIG.landingUrl} className="text-blue-600 hover:underline">{APP_CONFIG.landingUrl}</a>), the hosted billing web application, point-of-sale (POS) modules, and related online services.
        </p>
      </section>

      <section id="sec-2" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          2. Account and Company Information
        </h2>
        <p>
          When you register for a company workspace in VEXA Invoice, we collect administrative information necessary to establish and maintain your account, including:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Company legal/trade name, registered address, state, and pincode</li>
          <li>Authorized business administrator name, business email address, and phone number</li>
          <li>Goods and Services Tax Identification Number (GSTIN) and PAN details (where provided)</li>
          <li>Login credentials (passwords stored using industry-standard one-way cryptographic hashing)</li>
        </ul>
      </section>

      <section id="sec-3" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          3. Customer, Supplier & Transaction Data Entered by Businesses
        </h2>
        <p>
          In the normal course of using our billing and ledger software, your authorized staff may input third-party business records into your workspace:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>Client & Customer Data:</strong> Customer names, billing/shipping addresses, GSTINs, contact numbers, and transaction balances.</li>
          <li><strong>Supplier Data:</strong> Vendor names, contact points, supply addresses, and purchase ledger entries.</li>
          <li><strong>Invoicing Records:</strong> Sales invoices, tax computations, HSN/SAC codes, payment modes, receipt vouchers, and credit/debit balances.</li>
        </ul>
        <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-lg border border-slate-200">
          All client and supplier transaction data remains the exclusive proprietary business information of the registered subscriber tenant. VEXA TECH does not sell, broker, or commercially market your customer lists.
        </p>
      </section>

      <section id="sec-4" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          4. Product, Inventory, Invoice and Order Information
        </h2>
        <p>
          We store product master details entered into your catalog, such as item titles, SKU codes, barcode serials, tax percentages, cost prices, selling prices, and stock movements. This data is processed strictly to provide real-time inventory tracking, low-stock alerts, and billing workflows.
        </p>
      </section>

      <section id="sec-5" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          5. Authentication and Account Security Information
        </h2>
        <p>
          To safeguard user sessions and prevent unauthorized access, our backend servers automatically record technical metadata such as access timestamps, IP addresses, browser agent headers, and token refresh records. Session tokens are securely managed via HTTP-only security cookies.
        </p>
      </section>

      <section id="sec-6" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          6. Payment Processing Through Configured Providers
        </h2>
        <p>
          VEXA Invoice utilizes authorized RBI-compliant third-party payment gateways to process monthly subscription fees (₹599/month) and one-time Lifetime plan purchases (₹59,999).
        </p>
        <p>
          Payment instrument details (such as credit/debit card numbers, UPI PINs, or net banking credentials) are captured directly by the payment processor and are never stored on VEXA TECH servers. We receive only transaction settlement identifiers, payment timestamps, and subscription validity tokens.
        </p>
      </section>

      <section id="sec-7" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          7. Cookies, Sessions and Essential Technologies
        </h2>
        <p>
          We use strictly essential cookies and local storage tokens necessary for session continuity, user authentication state, and workspace route navigation. We do not use third-party behavioral advertising trackers on authenticated SaaS application pages.
        </p>
      </section>

      <section id="sec-8" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          8. Purposes of Processing
        </h2>
        <p>
          Your information is processed for specific, documented business purposes:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Provisioning and maintaining your company invoicing workspace and POS counters</li>
          <li>Generating tax-compliant sales invoices and proforma estimates</li>
          <li>Reconciling stock levels, inward movements, and barcode scans</li>
          <li>Verifying subscription status, free trial eligibility, and secure payment confirmation</li>
          <li>Delivering system operational announcements and responding to technical support tickets</li>
        </ul>
      </section>

      <section id="sec-9" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          9. Service Providers & Third-Party Integrations
        </h2>
        <p>
          We do not disclose tenant records to outside entities except to verified service vendors essential for platform operations:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Cloud hosting and database infrastructure providers supporting database storage</li>
          <li>Authorized Indian payment gateway partners for payment verification</li>
          <li>Email delivery services for account activation and password recovery notices</li>
        </ul>
      </section>

      <section id="sec-10" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          10. Data Storage and Retention
        </h2>
        <p>
          Your data is retained for the active lifecycle of your registered subscription and for a reasonable grace period following subscription cancellation to allow for reactivation or export. Company administrators may request account closure and database record purge as described in Section 12.
        </p>
      </section>

      <section id="sec-11" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          11. Data Security Practices
        </h2>
        <p>
          VEXA TECH applies multi-layered technical security safeguards, including HTTPS (TLS 1.3) encryption for all browser-to-server traffic, strict tenant identifier isolation in PostgreSQL database queries, access control policies, and regular automated database snapshot backups.
        </p>
      </section>

      <section id="sec-12" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          12. Data Access, Correction and Deletion Requests
        </h2>
        <p>
          Company workspace administrators can edit, update, or export their inventory, invoices, and customer masters directly via the VEXA Invoice web interface. For permanent workspace deletion or account closure requests, please contact our privacy desk at <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-blue-600 font-semibold">{APP_CONFIG.supportEmail}</a> from your registered administrative email.
        </p>
      </section>

      <section id="sec-13" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          13. Business Customer Responsibilities
        </h2>
        <p>
          As a business subscriber using VEXA Invoice, your company acts as the independent data fiduciary/controller with respect to personal information you gather from your retail customers, buyers, and suppliers. You are responsible for obtaining appropriate customer consents and ensuring compliance with applicable Indian data protection guidelines.
        </p>
      </section>

      <section id="sec-14" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          14. Custom Online Shop Storefronts & Orders
        </h2>
        <p>
          For Lifetime plan users utilizing the Custom Online Shop Store feature, the product items you select are rendered on a public text-based catalogue accessible via your unique URL or QR code. When a customer submits an order online, their name, contact phone, and cart items are transmitted directly to your workspace Customer Orders tab. VEXA TECH does not market to or contact your online store shoppers.
        </p>
      </section>

      <section id="sec-15" className="space-y-3">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          15. Changes to This Privacy Policy
        </h2>
        <p>
          We may update this policy periodically to reflect product evolutions or statutory compliance updates. When revisions occur, the updated policy will be posted on this page with an updated &ldquo;Last Reviewed&rdquo; date. Continued use of VEXA Invoice following publication constitutes agreement to the updated terms.
        </p>
      </section>

      <section id="sec-16" className="space-y-3 pt-2">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          16. Contact Information & Privacy Enquiries
        </h2>
        <p>
          For questions, notices, or data inquiries regarding this Privacy Policy, please contact:
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm space-y-1">
          <div className="font-bold text-slate-900">VEXA TECH — Privacy Department</div>
          <div>Product: VEXA Invoice</div>
          <div>Official Email: <a href={`mailto:${APP_CONFIG.supportEmail}`} className="text-blue-600 font-semibold">{APP_CONFIG.supportEmail}</a></div>
          <div>Website: <a href={APP_CONFIG.landingUrl} className="text-blue-600">{APP_CONFIG.landingUrl}</a></div>
        </div>
      </section>
    </LegalPageLayout>
  );
}

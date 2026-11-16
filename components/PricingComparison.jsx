'use client';

import { useState } from 'react';
import {
  Check, Minus, ChevronDown, ChevronUp, Info, Sparkles,
  Package, ReceiptText, Users, Megaphone, Bell,
  Store, Shield, ArrowRight
} from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';

const CATEGORIES = [
  {
    id: 'billing',
    label: 'Billing, Sales & Quotations',
    icon: ReceiptText,
    color: 'emerald',
    features: [
      { name: 'Sales & POS Billing', monthly: 'available', lifetime: 'available', tip: 'Fast counter billing with thermal receipt and PDF printing.' },
      { name: 'Tax Invoices & Proforma Estimates', monthly: 'available', lifetime: 'available', tip: 'Generate GST-compliant tax invoices and proforma estimates for customers.' },
      { name: 'Quotations & Customer Estimates', monthly: 'available', lifetime: 'available', tip: 'Create itemised quotations and estimates to share with prospective customers.' },
      { name: 'Convert Quotations to Sales Invoices', monthly: 'available', lifetime: 'available', tip: 'One-click conversion of approved quotations into finalised sales invoices.' },
      { name: 'Invoice History & Payment Tracking', monthly: 'available', lifetime: 'available', tip: 'View full invoice history and track payment status for every transaction.' },
      { name: 'Sales Returns & Adjustments', monthly: 'available', lifetime: 'available', tip: 'Record sales returns and apply credit adjustments to customer accounts.' },
      { name: 'Customer Purchase History', monthly: 'available', lifetime: 'available', tip: 'Access a complete purchase history per customer for informed selling.' },
    ],
  },
  {
    id: 'inventory',
    label: 'Inventory & Product Management',
    icon: Package,
    color: 'violet',
    features: [
      { name: 'Product & Variant Management', monthly: 'available', lifetime: 'available', tip: 'Manage products with size, colour, and custom attribute variants.' },
      { name: 'Inventory & Stock-Level Tracking', monthly: 'available', lifetime: 'available', tip: 'Real-time inward and outward stock logs per product.' },
      { name: 'Barcode Scanning & SKU Generation', monthly: 'available', lifetime: 'available', tip: 'Auto-generate Code128 barcodes and unique SKUs; scan at POS with any barcode gun.' },
      { name: 'Purchase Orders & Stock Inward', monthly: 'available', lifetime: 'available', tip: 'Create purchase orders from suppliers and record incoming stock.' },
      { name: 'Supplier Management', monthly: 'available', lifetime: 'available', tip: 'Maintain a supplier database with outstanding balances and transaction history.' },
      { name: 'Low-Stock Alerts', monthly: 'available', lifetime: 'available', tip: 'Get notified when stock falls below a configured minimum threshold.' },
      { name: 'Stock Movement History', monthly: 'available', lifetime: 'available', tip: 'Audit full stock inward/outward movement logs per item.' },
    ],
  },
  {
    id: 'gst',
    label: 'GST & Financial Management',
    icon: ReceiptText,
    color: 'blue',
    features: [
      { name: 'GST Calculation & Tax Invoicing', monthly: 'available', lifetime: 'available', tip: 'Automatic CGST, SGST, and IGST calculations on every invoice.' },
      { name: 'HSN-Based Reporting', monthly: 'available', lifetime: 'available', tip: 'Item-level HSN and SAC code tracking for GST reporting.' },
      { name: 'GST Summary Reports', monthly: 'available', lifetime: 'available', tip: 'Export GST summaries to share with your CA for monthly filing. Direct portal filing is not included.' },
      { name: 'Customer & Supplier Ledgers', monthly: 'available', lifetime: 'available', tip: 'Full ledger per customer and supplier with outstanding balances.' },
      { name: 'Outstanding Balance Tracking', monthly: 'available', lifetime: 'available', tip: 'Track unpaid invoices and pending dues across all parties.' },
      { name: 'Expense Tracking', monthly: 'available', lifetime: 'available', tip: 'Log business expenses by category and include them in financial summaries.' },
      { name: 'Sales & Financial Reports', monthly: 'available', lifetime: 'available', tip: 'Download sales analytics, profit summaries, and business performance reports.' },
    ],
  },
  {
    id: 'crm',
    label: 'Customer Relationship Management',
    icon: Users,
    color: 'sky',
    features: [
      { name: 'Customer Database & Profiles', monthly: 'available', lifetime: 'available', tip: 'Maintain a full customer directory with contact details and billing history.' },
      { name: 'Customer Purchase History', monthly: 'available', lifetime: 'available', tip: 'View complete order history for each customer across all invoices.' },
      { name: 'Customer Order Management', monthly: 'available', lifetime: 'available', tip: 'Manage and track active customer orders from placement to invoice.' },
      { name: 'Customer Segmentation', monthly: 'available', lifetime: 'available', tip: 'Group customers by purchase frequency, value, or category for targeted actions.' },
      { name: 'Customer Activity Insights', monthly: 'available', lifetime: 'available', tip: 'Understand buying patterns and engagement trends per customer.' },
      { name: 'Customer Enquiry Tracking', monthly: 'available', lifetime: 'available', tip: 'Log and follow up on customer enquiries and pre-sale conversations.' },
    ],
  },
  {
    id: 'marketing',
    label: 'Marketing & Customer Engagement',
    icon: Megaphone,
    color: 'amber',
    features: [
      { name: 'Discount & Offer Management', monthly: 'available', lifetime: 'available', tip: 'Create item-level or invoice-level discounts and apply promotional pricing.' },
      { name: 'Customer Communication Campaigns', monthly: 'available', lifetime: 'available', tip: 'Bulk messaging campaigns to customer groups via WhatsApp or email.' },
      { name: 'Customer Segmentation for Marketing', monthly: 'available', lifetime: 'available', tip: 'Target customer segments based on purchase history for marketing outreach.' },
      { name: 'Marketing Performance Reports', monthly: 'available', lifetime: 'available', tip: 'Track campaign reach, conversions, and revenue attributed to promotions.' },
      { name: 'Customer Re-Engagement Tools', monthly: 'available', lifetime: 'available', tip: 'Automated nudges to win back inactive customers.' },
    ],
  },
  {
    id: 'notifications',
    label: 'Automated Messages & Notifications',
    icon: Bell,
    color: 'rose',
    features: [
      { name: 'Automated Invoice Notifications', monthly: 'available', lifetime: 'available', tip: 'Send invoice PDFs to customers via WhatsApp or email after billing.' },
      { name: 'Payment Reminder Notifications', monthly: 'available', lifetime: 'available', tip: 'Scheduled reminders to customers with pending outstanding balances.' },
      { name: 'Customer Order Confirmation Messages', monthly: 'available', lifetime: 'available', tip: 'Notify customers when their online orders are received.' },
      { name: 'Order Status Notifications', monthly: 'available', lifetime: 'available', tip: 'Real-time updates to customers as their order status changes.' },
      { name: 'Low-Stock Notifications', monthly: 'available', lifetime: 'available', tip: 'In-app alerts to staff when product stock falls below threshold.' },
      { name: 'Subscription Renewal Reminders', monthly: 'available', lifetime: 'not-included', tip: 'Automated reminders before the monthly renewal date. Not applicable for lifetime.' },
      { name: 'Email Notifications', monthly: 'available', lifetime: 'available', tip: 'System transactional emails for invoices and account events.' },
      { name: 'WhatsApp Business Notifications', monthly: 'available', lifetime: 'available', tip: 'Send invoices, receipts, and statements via WhatsApp to customers.' },
    ],
  },
  {
    id: 'store',
    label: 'Custom Online Shop Store',
    icon: Store,
    color: 'indigo',
    features: [
      { name: 'Custom Online Shop Storefront', monthly: 'not-included', lifetime: 'available', tip: 'A public-facing shop page for your business, accessible via unique link.' },
      { name: 'Shop QR Code Generation & Download', monthly: 'not-included', lifetime: 'available', tip: 'Generate and download a high-resolution QR code for your shop.' },
      { name: 'Public Product Catalogue & Search', monthly: 'not-included', lifetime: 'available', tip: 'Customers can browse and search your product catalogue by name.' },
      { name: 'Product Variant Selection', monthly: 'not-included', lifetime: 'available', tip: 'Customers can select from product variants while ordering.' },
      { name: 'Customer Cart & Online Order Submission', monthly: 'not-included', lifetime: 'available', tip: 'Customers add items to a cart and submit orders directly to your dashboard.' },
      { name: 'Customer Order Management Dashboard', monthly: 'not-included', lifetime: 'available', tip: 'Staff can view and manage incoming online orders from a dedicated orders tab.' },
      { name: 'Order-to-Invoice Workflow', monthly: 'not-included', lifetime: 'available', tip: 'Convert accepted online orders into sales invoices with a single click.' },
      { name: 'Existing Inventory Integration', monthly: 'not-included', lifetime: 'available', tip: 'Online shop catalogue is synced directly with your VEXA Invoice product inventory.' },
      { name: 'Lifetime Access to Online Store Features', monthly: 'not-included', lifetime: 'available', tip: 'All online store features included for life with no additional recurring charges.' },
    ],
  },
  {
    id: 'platform',
    label: 'Platform & Support',
    icon: Shield,
    color: 'slate',
    features: [
      { name: 'Multi-Device Cloud Access', monthly: 'available', lifetime: 'available', tip: 'Access your account from any device with a secure internet connection.' },
      { name: 'Secure Cloud Backups', monthly: 'available', lifetime: 'available', tip: 'Your data is backed up automatically to secure cloud servers.' },
      { name: 'Role-Based Employee Access', monthly: 'available', lifetime: 'available', tip: 'Grant staff members limited access based on their role in the business.' },
      { name: 'Company-Level Data Isolation', monthly: 'available', lifetime: 'available', tip: 'Your company data is fully isolated from other accounts on the platform.' },
      { name: 'Reports & Analytics', monthly: 'available', lifetime: 'available', tip: 'Access sales, inventory, and financial performance reports.' },
      { name: 'Product Updates', monthly: 'available', lifetime: 'available', tip: 'Receive platform updates and new feature releases as they are rolled out.' },
      { name: 'Standard Customer Support', monthly: 'available', lifetime: 'available', tip: 'Technical support via email and WhatsApp under published support terms.' },
      { name: 'Lifetime Free Priority Support', monthly: 'not-included', lifetime: 'available', tip: 'Dedicated lifetime free support for all included product features under published terms.' },
    ],
  },
];

const COLOR_MAP = {
  emerald: { icon: 'bg-emerald-100 text-emerald-600', badge: 'bg-emerald-50 text-emerald-700 border border-emerald-200' },
  violet:  { icon: 'bg-violet-100 text-violet-600',   badge: 'bg-violet-50 text-violet-700 border border-violet-200'   },
  blue:    { icon: 'bg-blue-100 text-blue-600',       badge: 'bg-blue-50 text-blue-700 border border-blue-200'         },
  sky:     { icon: 'bg-sky-100 text-sky-600',         badge: 'bg-sky-50 text-sky-700 border border-sky-200'            },
  amber:   { icon: 'bg-amber-100 text-amber-600',     badge: 'bg-amber-50 text-amber-700 border border-amber-200'      },
  rose:    { icon: 'bg-rose-100 text-rose-600',       badge: 'bg-rose-50 text-rose-700 border border-rose-200'         },
  indigo:  { icon: 'bg-indigo-100 text-indigo-600',   badge: 'bg-indigo-50 text-indigo-700 border border-indigo-200'   },
  slate:   { icon: 'bg-slate-100 text-slate-600',     badge: 'bg-slate-50 text-slate-700 border border-slate-200'      },
};

function StatusCell({ status, isLifetime }) {
  if (status === 'available') {
    return (
      <div className="flex items-center justify-center">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isLifetime ? 'bg-blue-100 text-blue-600' : 'bg-emerald-100 text-emerald-600'}`}>
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
      </div>
    );
  }
  if (status === 'coming-soon') {
    return (
      <div className="flex items-center justify-center">
        <span className="text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full bg-amber-50 text-amber-600 border border-amber-200 whitespace-nowrap">
          Soon
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center justify-center">
      <Minus className="w-4 h-4 text-slate-300 stroke-[2.5]" />
    </div>
  );
}

function Tooltip({ text }) {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-flex ml-1 align-middle">
      <button suppressHydrationWarning
        type="button"
        className="text-slate-400 hover:text-blue-500 focus:text-blue-600 focus:outline-none transition-colors"
        aria-label="Feature info"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen(v => !v)}
      >
        <Info className="w-3.5 h-3.5" />
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-slate-900 text-white text-[11px] leading-snug rounded-lg px-3 py-2 shadow-xl pointer-events-none"
        >
          {text}
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900" />
        </span>
      )}
    </span>
  );
}

export default function PricingComparison() {
  const [openCategories, setOpenCategories] = useState(
    Object.fromEntries(CATEGORIES.map(c => [c.id, true]))
  );
  const [mobilePlan, setMobilePlan] = useState('monthly');

  const toggleCategory = (id) => setOpenCategories(prev => ({ ...prev, [id]: !prev[id] }));
  const allOpen = Object.values(openCategories).every(Boolean);
  const expandAll = () => setOpenCategories(Object.fromEntries(CATEGORIES.map(c => [c.id, true])));
  const collapseAll = () => setOpenCategories(Object.fromEntries(CATEGORIES.map(c => [c.id, false])));

  return (
    <div className="mt-16 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-5 px-1">
        <div>
          <h3 className="text-xl font-extrabold text-slate-900">Full Feature Comparison</h3>
          <p className="text-sm text-slate-500 mt-0.5">See exactly what each plan includes.</p>
        </div>
        <button suppressHydrationWarning type="button" onClick={allOpen ? collapseAll : expandAll}
          className="text-xs font-semibold text-blue-600 hover:text-blue-700 underline underline-offset-2 self-start sm:self-auto transition-colors">
          {allOpen ? 'Collapse All' : 'Expand All'}
        </button>
      </div>

      {/* Mobile Plan Selector */}
      <div className="flex sm:hidden mb-3 rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-1 gap-1">
        {['monthly', 'lifetime'].map(plan => (
          <button suppressHydrationWarning key={plan} type="button" onClick={() => setMobilePlan(plan)}
            className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all ${
              mobilePlan === plan ? 'bg-white text-blue-700 shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-700'
            }`}>
            {plan === 'monthly' ? 'Monthly — ₹599/mo' : 'Lifetime — ₹59,999'}
          </button>
        ))}
      </div>

      {/* Desktop Table Header */}
      <div className="hidden sm:block bg-white rounded-t-2xl border border-b-0 border-slate-200">
        <div className="grid grid-cols-[1fr_170px_200px] text-[11px] font-bold uppercase tracking-widest text-slate-500 items-center">
          <div className="py-3.5 px-6">Feature / Capability</div>
          <div className="py-3.5 px-4 text-center border-l border-slate-100 font-extrabold text-slate-700">
            Monthly — ₹599/month
          </div>
          <div className="py-3.5 px-4 text-center border-l border-slate-100 bg-blue-50/70 text-blue-700 font-extrabold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Lifetime — ₹59,999</span>
          </div>
        </div>
      </div>

      {/* Category Blocks */}
      <div className="rounded-b-2xl sm:rounded-t-none border border-slate-200 divide-y divide-slate-100 overflow-hidden">
        {CATEGORIES.map((cat) => {
          const Icon = cat.icon;
          const colors = COLOR_MAP[cat.color];
          const isOpen = openCategories[cat.id];
          return (
            <div key={cat.id} className="bg-white">
              <button suppressHydrationWarning type="button" onClick={() => toggleCategory(cat.id)}
                className="w-full flex items-center justify-between px-4 sm:px-6 py-3.5 hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset group"
                aria-expanded={isOpen}>
                <div className="flex items-center gap-3">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${colors.icon}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-bold text-slate-800 text-left">{cat.label}</span>
                  <span className={`hidden sm:inline text-[10px] font-semibold px-2 py-0.5 rounded-full ${colors.badge}`}>
                    {cat.features.length} features
                  </span>
                </div>
                <div className="text-slate-400 group-hover:text-slate-600 transition-colors">
                  {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {isOpen && (
                <div className="divide-y divide-slate-50 border-t border-slate-100">
                  {cat.features.map((feat, fi) => (
                    <div key={fi} className="grid grid-cols-1 sm:grid-cols-[1fr_170px_200px] items-center hover:bg-slate-50/60 transition-colors">
                      <div className="px-4 sm:px-6 py-3 flex items-center gap-1 text-sm text-slate-700">
                        <span className="pl-10">{feat.name}</span>
                        <Tooltip text={feat.tip} />
                      </div>
                      <div className="hidden sm:flex py-3 px-4 border-l border-slate-100 items-center justify-center">
                        <StatusCell status={feat.monthly} isLifetime={false} />
                      </div>
                      <div className="hidden sm:flex py-3 px-4 border-l border-slate-100 bg-blue-50/30 items-center justify-center">
                        <StatusCell status={feat.lifetime} isLifetime={true} />
                      </div>
                      <div className="flex sm:hidden px-4 pb-3 -mt-1 items-center gap-2">
                        <StatusCell
                          status={mobilePlan === 'monthly' ? feat.monthly : feat.lifetime}
                          isLifetime={mobilePlan === 'lifetime'}
                        />
                        <span className="text-xs text-slate-500">
                          {(() => {
                            const s = mobilePlan === 'monthly' ? feat.monthly : feat.lifetime;
                            return s === 'available' ? 'Included' : s === 'coming-soon' ? 'Coming Soon' : 'Not included';
                          })()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="mt-5 flex flex-wrap items-center gap-5 px-1">
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          Included in Monthly
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <div className="w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
            <Check className="w-3 h-3 stroke-[3]" />
          </div>
          Included in Lifetime
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-500">
          <Minus className="w-4 h-4 text-slate-300 stroke-[2.5]" />
          Not Included
        </div>
        <p className="ml-auto text-[11px] text-slate-400 hidden sm:block">
          * GST summary reports are for CA filing. Direct portal submission not included.
        </p>
      </div>

      {/* CTA Row */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
        <a
          href={APP_CONFIG.plans.monthly.ctaHref}
          className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 hover:border-blue-200 transition-all text-sm"
        >
          <span>Choose Monthly Plan</span>
          <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href={APP_CONFIG.plans.lifetime.ctaHref}
          className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md shadow-blue-500/20 active:scale-[0.98] transition-all text-sm hover:-translate-y-0.5 transform"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Get Lifetime Access</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}


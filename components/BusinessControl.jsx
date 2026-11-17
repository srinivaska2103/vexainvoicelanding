'use client';

import { useState, useEffect } from 'react';
import { 
  UsersRound, 
  KeyRound, 
  LockKeyhole, 
  Database, 
  ShieldCheck, 
  FileText, 
  HardDrive,
  ChevronRight,
  X,
  ArrowRight,
  Check,
  Shield,
  Sparkles,
  SlidersHorizontal
} from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';
import ScrollReveal from './ScrollReveal';
import ContactSalesModal from './ContactSalesModal';

export default function BusinessControl() {
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const featureCards = [
    {
      id: 'role-based-access',
      title: 'Role-Based Access',
      icon: UsersRound,
      description: 'Define administrator, accountant, cashier, and staff roles with appropriate access rights.',
      footerLabel: 'Access Management',
      modalBadge: 'Role Isolation',
      details: [
        'Administrator: Complete oversight over company settings, reports, staff, and pricing controls.',
        'Accountant & Billing Staff: Streamlined access to invoices, vouchers, ledgers, and tax reports without altering system-level parameters.',
        'Cashier & Counter POS: Fast point-of-sale invoicing, receipt issuing, and cash register actions tailored for counter workflows.',
        'Controlled Responsibility: Keeps daily business workflows organized and prevents unauthorized configuration changes.'
      ],
      practicalValue: 'Prevents operational mistakes and ensures employees only see what is relevant to their job duty.'
    },
    {
      id: 'user-management',
      title: 'User Management',
      icon: KeyRound,
      description: 'Manage employee accounts, login access, active sessions, and staff permissions.',
      footerLabel: 'User Controls',
      modalBadge: 'Staff Oversight',
      details: [
        'Employee Account Provisioning: Add, edit, or deactivate employee profiles whenever staff changes occur.',
        'Login Credential Control: Manage authorized user IDs and keep login access confined to active team members.',
        'Active Session Awareness: Maintain oversight over users actively accessing the billing portal from authorized terminals.',
        'Immediate Revocation: Instantly disable access for departed employees without impacting past business transaction history.'
      ],
      practicalValue: 'Maintains strict ownership over who can log into your billing and stock management software.'
    },
    {
      id: 'permission-control',
      title: 'Permission Control',
      icon: LockKeyhole,
      description: 'Control access to sensitive information, including financial reports, pricing, discounts, and inventory adjustments, according to configured permissions.',
      footerLabel: 'Permission Settings',
      modalBadge: 'Access Restrictions',
      details: [
        'Financial Report Safeguards: Restrict net profit, balance summaries, and revenue analytics to business owners and designated managers.',
        'Discount & Pricing Discretion: Set boundaries on who can edit base product costs, override selling rates, or apply manual billing discounts.',
        'Stock Adjustment Authority: Ensure inward stock additions, damaged goods write-offs, and manual stock updates require verified authorization.',
        'Granular Operations: Adapt permissions according to your team size and operational comfort level.'
      ],
      practicalValue: 'Shields your profit margins, confidential financial margins, and inventory integrity from unauthorized alterations.'
    },
    {
      id: 'business-data-isolation',
      title: 'Business Data Isolation',
      icon: Database,
      description: "Keep each business's records separated through company-scoped access and data management.",
      footerLabel: 'Data Protection',
      modalBadge: 'Company Separation',
      details: [
        'Company-Scoped Access: Every sales receipt, customer profile, and stock movement is strictly tied to your specific business workspace.',
        'Strict Organizational Boundaries: Multi-tenant database querying ensures complete isolation between distinct registered businesses.',
        'Zero Cross-Contamination: Customer records, pricing structures, and financial ledgers cannot be accessed or viewed by any other business.',
        'Scalable Architecture: Allows growing retail stores and wholesale enterprises to manage operations with peace of mind.'
      ],
      practicalValue: 'Ensures your commercial data, client list, and transactions remain completely private and isolated.'
    },
    {
      id: 'secure-authentication',
      title: 'Secure Authentication',
      icon: ShieldCheck,
      description: 'Protect application access through authentication and configured login security controls.',
      footerLabel: 'Account Security',
      modalBadge: 'Verified Login',
      details: [
        'Protected Application Access: Industry-standard authentication mechanisms prevent unauthorized portal entry.',
        'Hashed Password Security: User credentials and passwords are encrypted and securely stored using modern cryptographic standards.',
        'Session Integrity: Secure, authenticated tokens validate each request made to the billing and inventory portal.',
        'HTTPS/TLS Encryption: All data transferred between your browser, counter POS, and server is encrypted in transit.'
      ],
      practicalValue: 'Stops unauthorized logins and protects counter terminals and web dashboards from eavesdropping.'
    },
    {
      id: 'audit-friendly-records',
      title: 'Audit-Friendly Records',
      icon: FileText,
      description: 'Maintain traceable business records for supported sales, invoices, stock adjustments, and payment transactions.',
      footerLabel: 'Business Records',
      modalBadge: 'Traceability',
      details: [
        'Traceable Transaction History: Chronological sales records, credit/debit adjustments, and tax invoice sequences.',
        'Stock Movement Visibility: Track when inward inventory was recorded, who created specific invoices, and when returns were logged.',
        'GST-Compliant Record Keeping: Accurate invoice series, HSN references, and customer GSTINs ready for reconciliation and tax filing.',
        'Transparent Financial Footprint: Eliminates spreadsheet confusion and manual receipt disputes during annual reviews.'
      ],
      practicalValue: 'Gives business owners reliable, orderly records for tax compliance, accounting audits, and customer transparency.'
    },
    {
      id: 'backup-recovery',
      title: 'Backup & Recovery',
      icon: HardDrive,
      description: 'Protect business continuity with the backup and recovery options supported by the selected VEXA Invoice deployment.',
      footerLabel: 'Data Recovery',
      modalBadge: 'Continuity Options',
      details: [
        'Cloud Deployment Resilience: Cloud-hosted instances leverage structured database snapshots to prevent data loss from local hardware failures.',
        'Exportable Business Data: Easily export invoices, product catalogs, customer ledgers, and transaction registers to standard formats (Excel/PDF).',
        'Hardware Independence: Since your data is not tied to a single physical hard drive, billing can continue if a shop counter laptop fails.',
        'Deployment-Specific Recovery: Enterprise and dedicated deployments can be paired with tailored disaster recovery policies upon request.'
      ],
      practicalValue: 'Ensures your critical trade history and customer balances are safeguarded against accidental device damage.'
    },
    {
      id: 'system-configuration',
      title: 'Business Configuration',
      icon: SlidersHorizontal,
      description: 'Configure invoice numbering, tax slabs, branch parameters, and billing defaults tailored to your store operations.',
      footerLabel: 'Operations Setup',
      modalBadge: 'Custom Settings',
      details: [
        'Custom Invoice Prefixes: Configure distinct invoice series, estimate numbering, and financial year codes for multi-counter billing.',
        'GST & Tax Slabs: Set up applicable GST rates, HSN/SAC codes, and tax calculation rules compliant with current taxation laws.',
        'Counter & Branch Defaults: Manage default cash counters, payment modes, terms and conditions, and store receipt footers.',
        'Flexible Billing Workflow: Toggle barcode scanning, print templates, and WhatsApp notification defaults to match your workflow.'
      ],
      practicalValue: 'Allows complete adaptability to match your unique retail, wholesale, or textile shop billing standards.'
    }
  ];

  // Lock scroll when details modal is open
  useEffect(() => {
    if (selectedCardId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCardId]);

  // Handle ESC key press to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && selectedCardId) {
        setSelectedCardId(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCardId]);

  const activeCard = featureCards.find(c => c.id === selectedCardId);

  return (
    <section 
      id="business-control" 
      aria-label="Built for Business Control & Security"
      className="py-20 sm:py-28 bg-slate-50/70 border-t border-slate-200/70 relative overflow-hidden"
    >
      {/* Background ambient lighting/subtle glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-100/40 via-indigo-100/30 to-sky-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Shield className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
              <span>GOVERNANCE & DATA SAFETY</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Built for Business Control
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Ensure role isolation, safeguard sensitive business data, and maintain control over your daily operations.
            </p>
          </div>
        </ScrollReveal>

        {/* 7 Feature Cards Grid:
            - Desktop: 4 columns on large screens (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4)
            - Tablet: 2 columns
            - Mobile: 1 column
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch mb-14">
          {featureCards.map((card, index) => {
            const Icon = card.icon;
            const isSelected = selectedCardId === card.id;

            return (
              <ScrollReveal 
                key={card.id} 
                animation="fade-up" 
                delay={index * 50} 
                duration={500}
                className="h-full"
              >
                <div
                  role="button" suppressHydrationWarning
                  tabIndex={0}
                  aria-haspopup="dialog"
                  aria-expanded={isSelected}
                  aria-label={`${card.title}: ${card.description}`}
                  onClick={() => setSelectedCardId(card.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedCardId(card.id);
                    }
                  }}
                  className={`group h-full bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between cursor-pointer text-left select-none outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                    isSelected 
                      ? 'border-blue-600 ring-2 ring-blue-500/20 shadow-lg shadow-blue-500/10' 
                      : 'border-slate-200/90 shadow-xs hover:border-blue-400 hover:shadow-md hover:-translate-y-1'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon + Indicator */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-xs">
                        <Icon className="w-6 h-6 stroke-[2.2]" />
                      </div>
                      
                      <span className="text-[11px] font-semibold text-slate-600 group-hover:text-blue-600 transition-colors inline-flex items-center gap-0.5">
                        Details
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>

                    {/* Card Title */}
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2.5">
                      {card.title}
                    </h3>

                    {/* Card Description */}
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  {/* Card Footer Badge */}
                  <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-800 transition-colors">
                      {card.footerLabel}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70 group-hover:scale-125 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Compact CTA Panel below cards */}
        <ScrollReveal animation="fade-up" delay={200} duration={600}>
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-blue-900/15 relative overflow-hidden">
            {/* Subtle decorative glow circles */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-blue-200 text-xs font-semibold mb-3 border border-white/15">
                  <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                  <span>Centralized Business Authority</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  Take Control of Your Business
                </h3>
                <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                  Manage your billing, inventory, employees, and daily operations from one connected platform.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto flex-shrink-0">
                <a
                  href={APP_CONFIG.routes.signup}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-blue-700 bg-white hover:bg-blue-50 active:bg-blue-100 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                
                <button suppressHydrationWarning
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl backdrop-blur-xs transition-all active:scale-95 cursor-pointer"
                >
                  <span>Contact Sales</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Interactive Detail Modal / Expanded Information Panel */}
      {activeCard && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="business-control-modal-title"
          onClick={() => setSelectedCardId(null)}
        >
          <div 
            className="bg-white rounded-3xl shadow-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 text-slate-800 flex flex-col relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-6 sm:p-7 border-b border-slate-100 flex items-start justify-between bg-gradient-to-b from-blue-50/60 to-white sticky top-0 z-10 backdrop-blur-xs">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/20 flex-shrink-0">
                  <activeCard.icon className="w-6 h-6 stroke-[2.2]" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                    {activeCard.modalBadge}
                  </span>
                  <h4 id="business-control-modal-title" className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                    {activeCard.title}
                  </h4>
                </div>
              </div>

              <button suppressHydrationWarning
                type="button"
                aria-label="Close dialog"
                onClick={() => setSelectedCardId(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-700 flex items-center justify-center transition-colors active:scale-95 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-7 space-y-6">
              {/* Primary Summary */}
              <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {activeCard.description}
                </p>
              </div>

              {/* Structured Key Points */}
              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  How It Functions in VEXA Invoice
                </h5>
                <ul className="space-y-3">
                  {activeCard.details.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-600 leading-normal">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Practical Value Box */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-200/70 text-slate-700">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wide mb-1">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span>Business Impact</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeCard.practicalValue}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
                Included with active VEXA Invoice deployments.
              </span>
              <button suppressHydrationWarning
                type="button"
                onClick={() => setSelectedCardId(null)}
                className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 rounded-xl transition-colors active:scale-95 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Reuse existing Contact Sales Modal for Enquiry Flow */}
      <ContactSalesModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
        preselectedInterest="Business Control & Governance"
      />
    </section>
  );
}

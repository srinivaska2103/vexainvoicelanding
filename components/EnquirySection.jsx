'use client';

import { useState } from 'react';
import { APP_CONFIG } from '@/lib/config';
import { 
  Send, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  Building2, 
  User, 
  Briefcase, 
  Layers, 
  Users, 
  FileText,
  ExternalLink,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CustomDropdown from './CustomDropdown';

export default function EnquirySection() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: '',
    packageInterest: '',
    employeeCount: '',
    message: '',
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null); // 'opened' | 'popup-blocked' | null
  const [generatedWhatsAppUrl, setGeneratedWhatsAppUrl] = useState('');
  const [generatedMessageText, setGeneratedMessageText] = useState('');
  const [copied, setCopied] = useState(false);

  // Business Types
  const businessTypes = [
    'Retail Shop',
    'Textile & Garments',
    'Wholesale Business',
    'Supermarket',
    'Electronics & Electricals',
    'Other'
  ];

  // Packages
  const packageOptions = [
    '₹599 Monthly Plan',
    '₹59,999 Lifetime Plan',
    'Need Help Choosing'
  ];

  // Employee counts
  const employeeRanges = [
    '1 - 5 Employees',
    '6 - 15 Employees',
    '16 - 50 Employees',
    '50+ Employees'
  ];

  const validate = () => {
    const errs = {};
    const trimmedName = formData.fullName.trim();
    const trimmedBiz = formData.businessName.trim();
    const trimmedPhone = formData.phone.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!trimmedBiz) {
      errs.businessName = 'Please enter your business name.';
    }

    if (!trimmedPhone) {
      errs.phone = 'Please enter your WhatsApp / mobile number.';
    } else {
      // Clean digits & check length: accepts 10 digits or international formats (8-15 digits)
      const digitsOnly = trimmedPhone.replace(/[\s\-\+\(\)]/g, '');
      if (digitsOnly.length < 10 || digitsOnly.length > 15 || !/^\d+$/.test(digitsOnly)) {
        errs.phone = 'Please enter a valid 10-digit mobile number.';
      }
    }

    if (trimmedEmail) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmedEmail)) {
        errs.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.businessType) {
      errs.businessType = 'Please select your business type.';
    }

    if (!formData.packageInterest) {
      errs.packageInterest = 'Please select a package or choose "Need Help Choosing".';
    }

    if (!formData.consent) {
      errs.consent = 'You must agree to be contacted by VEXA TECH regarding your enquiry.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const name = formData.fullName.trim();
    const biz = formData.businessName.trim();
    const phone = formData.phone.trim();
    const email = formData.email.trim() || 'Not Provided';
    const bizType = formData.businessType;
    const pkg = formData.packageInterest;
    const employees = formData.employeeCount || 'Not Specified';
    const userMsg = formData.message.trim() || 'None provided';

    // Format WhatsApp message strictly per specification
    const message = 
`New VEXA Invoice Website Enquiry

Name: ${name}
Business Name: ${biz}
Mobile: ${phone}
Email: ${email}
Business Type: ${bizType}
Interested Package: ${pkg}
Employees: ${employees}

Requirements:
${userMsg}

Source: VEXA Invoice Landing Page`;

    setGeneratedMessageText(message);

    // Get WhatsApp number from APP_CONFIG (or env) in digits-only format
    const targetWhatsApp = (APP_CONFIG.whatsappNumber || '918946029205').replace(/\D/g, '');
    const url = `https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(message)}`;
    setGeneratedWhatsAppUrl(url);

    // Attempt to open WhatsApp Click-to-Chat in a new tab safely
    try {
      const win = window.open(url, '_blank', 'noopener,noreferrer');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        // Blocked by popup blocker
        setSubmissionStatus('popup-blocked');
      } else {
        setSubmissionStatus('opened');
      }
    } catch (err) {
      setSubmissionStatus('popup-blocked');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopyMessage = () => {
    if (!generatedMessageText) return;
    navigator.clipboard.writeText(generatedMessageText).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-gradient-to-b from-slate-50/70 via-white to-blue-50/30 border-t border-slate-200/80 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={600} className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold mb-4 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-blue-600 fill-current" />
            <span>Direct WhatsApp Enquiry</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-3">
            Have Questions? Let's Talk About Your Business.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Tell us about your business and our team can help you find the right VEXA Invoice solution.
          </p>
        </ScrollReveal>

        {/* Centered Single Column Form */}
        <div className="max-w-3xl mx-auto">
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xl shadow-slate-200/50 relative">
                
                {/* Form status notification banner if user already submitted */}
                {submissionStatus && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 text-xs space-y-2 animate-in fade-in">
                    <div className="flex items-center gap-2 font-bold text-emerald-800 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                      <span>WhatsApp has been opened in a new tab!</span>
                    </div>
                    <p className="text-emerald-700 leading-relaxed">
                      Please review your prefilled enquiry message in WhatsApp and tap <strong>Send</strong> to complete your request.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-2">
                      <a
                        href={generatedWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
                      >
                        <span>Re-open WhatsApp</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                      <button suppressHydrationWarning
                        type="button"
                        onClick={handleCopyMessage}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-emerald-100/60 border border-emerald-300 text-emerald-800 font-semibold text-xs transition-colors"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copied ? 'Copied to Clipboard!' : 'Copy Formatted Message'}</span>
                      </button>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-4 sm:space-y-5">
                  
                  {/* Row 1: Full Name & Business Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input suppressHydrationWarning
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Ramesh Kumar"
                          className={`w-full text-xs sm:text-sm bg-slate-50/70 border rounded-xl pl-10 pr-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                            errors.fullName 
                              ? 'border-rose-300 focus:ring-rose-500/20 focus:border-rose-500' 
                              : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Business Name <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input suppressHydrationWarning
                          type="text"
                          value={formData.businessName}
                          onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                          placeholder="Sri Krishna Garments"
                          className={`w-full text-xs sm:text-sm bg-slate-50/70 border rounded-xl pl-10 pr-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                            errors.businessName 
                              ? 'border-rose-300 focus:ring-rose-500/20 focus:border-rose-500' 
                              : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'
                          }`}
                        />
                      </div>
                      {errors.businessName && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.businessName}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 2: WhatsApp Number & Email Address */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        WhatsApp / Mobile Number <span className="text-rose-500">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input suppressHydrationWarning
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className={`w-full text-xs sm:text-sm bg-slate-50/70 border rounded-xl pl-10 pr-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                            errors.phone 
                              ? 'border-rose-300 focus:ring-rose-500/20 focus:border-rose-500' 
                              : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'
                          }`}
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                        <span>Email Address</span>
                        <span className="text-[10px] text-slate-400 font-normal">Optional</span>
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                        <input suppressHydrationWarning
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="ramesh@example.com"
                          className={`w-full text-xs sm:text-sm bg-slate-50/70 border rounded-xl pl-10 pr-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
                            errors.email 
                              ? 'border-rose-300 focus:ring-rose-500/20 focus:border-rose-500' 
                              : 'border-slate-200 focus:ring-blue-500/20 focus:border-blue-500'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Business Type & Interested Package */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <CustomDropdown
                        label="Business Type"
                        required={true}
                        icon={Briefcase}
                        options={businessTypes}
                        value={formData.businessType}
                        onChange={(val) => {
                          setFormData({ ...formData, businessType: val });
                          if (errors.businessType) {
                            setErrors({ ...errors, businessType: null });
                          }
                        }}
                        placeholder="Select your business type"
                        error={!!errors.businessType}
                      />
                      {errors.businessType && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.businessType}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <CustomDropdown
                        label="Interested Package"
                        required={true}
                        icon={Layers}
                        options={packageOptions}
                        value={formData.packageInterest}
                        onChange={(val) => {
                          setFormData({ ...formData, packageInterest: val });
                          if (errors.packageInterest) {
                            setErrors({ ...errors, packageInterest: null });
                          }
                        }}
                        placeholder="Select package"
                        error={!!errors.packageInterest}
                      />
                      {errors.packageInterest && (
                        <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.packageInterest}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Row 4: Employees (Optional) */}
                  <div>
                    <CustomDropdown
                      label="Number of Employees"
                      optional={true}
                      icon={Users}
                      options={employeeRanges}
                      value={formData.employeeCount}
                      onChange={(val) => setFormData({ ...formData, employeeCount: val })}
                      placeholder="Select team size"
                    />
                  </div>

                  {/* Row 5: Message / Requirements (Optional) */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center justify-between">
                      <span>Message / Specific Requirements</span>
                      <span className="text-[10px] text-slate-400 font-normal">Optional</span>
                    </label>
                    <textarea suppressHydrationWarning
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="e.g. We need barcode scanning at 2 billing counters and automated WhatsApp invoices for customers."
                      maxLength={1000}
                      className="w-full text-xs sm:text-sm bg-slate-50/70 border border-slate-200 rounded-xl p-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Required Consent Checkbox */}
                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 cursor-pointer select-none">
                      <input suppressHydrationWarning
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-0.5 w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-xs text-slate-600 leading-tight">
                        I agree to be contacted by VEXA TECH regarding my enquiry. <span className="text-rose-500">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="mt-1 text-[11px] text-rose-600 font-medium flex items-center gap-1">
                        <AlertCircle className="w-3 h-3 flex-shrink-0" />
                        <span>{errors.consent}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button - Vibrant Blue */}
                  <div className="pt-2">
                    <button suppressHydrationWarning
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-blue-600/25 transition-all text-sm sm:text-base cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>{isSubmitting ? 'Opening WhatsApp...' : 'Submit & Chat on WhatsApp'}</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      Opens WhatsApp with your prefilled details. You can review before hitting send.
                    </p>
                  </div>

                </form>

              </div>
            </ScrollReveal>
          </div>

      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';
import { APP_CONFIG } from '@/lib/config';
import { 
  X, 
  User, 
  Building2, 
  Phone, 
  Mail, 
  Briefcase, 
  Users, 
  FileText, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Send,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import CustomDropdown from './CustomDropdown';

export default function ContactSalesModal({ isOpen, onClose, preselectedInterest = 'Custom Business' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: '',
    teamSize: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');
  const [messageSummary, setMessageSummary] = useState('');
  const [copied, setCopied] = useState(false);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const businessTypes = [
    'Retail Store / Showroom',
    'Textile, Garments & Apparel',
    'Wholesale Trader & Distribution',
    'Supermarket & Groceries',
    'Manufacturing / Fabrication',
    'Multiple Branches / Chain',
    'Other Business Type'
  ];

  const teamSizes = [
    '1 - 5 Users / 1 Branch',
    '6 - 15 Users / 1 - 2 Branches',
    '16 - 50 Users / Multi-Branch',
    '50+ Users / Enterprise Setup'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }
    if (!formData.businessName.trim()) {
      errs.businessName = 'Please enter your business name.';
    }
    
    const phoneTrimmed = formData.phone.trim();
    if (!phoneTrimmed) {
      errs.phone = 'Please enter your phone / WhatsApp number.';
    } else {
      const digitsOnly = phoneTrimmed.replace(/[\s\-\+\(\)]/g, '');
      if (digitsOnly.length < 10 || digitsOnly.length > 15 || !/^\d+$/.test(digitsOnly)) {
        errs.phone = 'Please enter a valid 10-digit mobile number.';
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        errs.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.businessType) {
      errs.businessType = 'Please select your business type.';
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
    const team = formData.teamSize || 'Not Specified';
    const reqs = formData.message.trim() || 'General Custom Business Enquiry';

    // Format WhatsApp message strictly
    const formattedMessage = 
`VEXA Invoice Custom Business Enquiry

Name: ${name}
Business Name: ${biz}
Phone: ${phone}
Email: ${email}
Business Type: ${bizType}
Users / Branches: ${team}
Plan Interest: ${preselectedInterest}

Requirements / Message:
${reqs}

Source: VEXA Invoice Pricing Custom Business Card`;

    setMessageSummary(formattedMessage);

    const targetWhatsApp = (APP_CONFIG.whatsappNumber || '918946029205').replace(/\D/g, '');
    const url = `https://wa.me/${targetWhatsApp}?text=${encodeURIComponent(formattedMessage)}`;
    setWhatsappUrl(url);

    // Safely open WhatsApp
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (err) {
      // Handled via modal action button
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleCopy = () => {
    if (!messageSummary) return;
    navigator.clipboard.writeText(messageSummary).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      businessName: '',
      phone: '',
      email: '',
      businessType: '',
      teamSize: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden my-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-sales-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 bg-gradient-to-r from-slate-50 to-blue-50/40 border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider mb-1">
              Custom Solutions
            </div>
            <h2 id="contact-sales-title" className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Contact Sales — Custom Business
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Tell us about your business and tailored software requirements.
            </p>
          </div>

          <button suppressHydrationWarning
            type="button"
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7 max-h-[80vh] overflow-y-auto">
          {isSuccess ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-sm border border-emerald-200">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Enquiry Prepared Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-1 leading-relaxed">
                  WhatsApp has been opened in a new tab with your prefilled details. Tap send to connect with our retail solutions desk.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 font-mono whitespace-pre-line max-h-40 overflow-y-auto">
                {messageSummary}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Open WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button suppressHydrationWarning
                  type="button"
                  onClick={handleCopy}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 font-semibold text-xs transition-colors"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy Enquiry'}</span>
                </button>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <button suppressHydrationWarning
                  type="button"
                  onClick={() => {
                    handleReset();
                    onClose();
                  }}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Row 1: Full Name & Business Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input suppressHydrationWarning
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Anand Sharma"
                      className={`w-full text-xs sm:text-sm bg-slate-50/80 border rounded-xl pl-10 pr-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Business Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input suppressHydrationWarning
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Sharma Textiles & Retail"
                      className={`w-full text-xs sm:text-sm bg-slate-50/80 border rounded-xl pl-10 pr-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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

              {/* Row 2: Phone & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input suppressHydrationWarning
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 9876543210"
                      className={`w-full text-xs sm:text-sm bg-slate-50/80 border rounded-xl pl-10 pr-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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
                  <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                    <span>Email Address</span>
                    <span className="text-[10px] text-slate-400 font-normal">Optional</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input suppressHydrationWarning
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="anand@example.com"
                      className={`w-full text-xs sm:text-sm bg-slate-50/80 border rounded-xl pl-10 pr-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:bg-white transition-all ${
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

              {/* Row 3: Business Type & Number of Users/Branches */}
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
                      if (errors.businessType) setErrors({ ...errors, businessType: null });
                    }}
                    placeholder="Select business type"
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
                    label="Users or Branches"
                    optional={true}
                    icon={Users}
                    options={teamSizes}
                    value={formData.teamSize}
                    onChange={(val) => setFormData({ ...formData, teamSize: val })}
                    placeholder="Select scale"
                  />
                </div>
              </div>

              {/* Row 4: Requirements / Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1 flex items-center justify-between">
                  <span>Custom Requirements & Workflows</span>
                  <span className="text-[10px] text-slate-400 font-normal">Optional</span>
                </label>
                <textarea suppressHydrationWarning
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us what you need: e.g., 3 billing counters, custom barcode format, multi-branch stock transfers, or data migration."
                  className="w-full text-xs sm:text-sm bg-slate-50/80 border border-slate-200 rounded-xl p-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
                />
              </div>

              {/* Notice */}
              <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 text-[11px] text-blue-900 leading-relaxed">
                <strong>Please note:</strong> Custom business setups are evaluated by our solution engineers for architectural feasibility prior to deployment.
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button suppressHydrationWarning
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 transition-all text-xs sm:text-sm shadow-md shadow-blue-500/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting...' : 'Submit Custom Enquiry'}</span>
                </button>
                <button suppressHydrationWarning
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto py-3 px-5 rounded-xl font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors text-xs sm:text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

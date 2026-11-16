// Grounded product knowledge base for VEXA Invoice AI Assistant
import { APP_CONFIG } from './config';

export const VEXA_KNOWLEDGE = {
  company: {
    name: APP_CONFIG.companyName,
    product: APP_CONFIG.appName,
    supportEmail: APP_CONFIG.supportEmail,
    whatsappNumber: APP_CONFIG.whatsappNumber,
    whatsappUrl: APP_CONFIG.whatsappUrl,
    signupUrl: APP_CONFIG.routes.signup,
    loginUrl: APP_CONFIG.routes.login,
    pricingAnchor: APP_CONFIG.routes.pricing,
    featuresAnchor: APP_CONFIG.routes.features,
    supportPolicyUrl: APP_CONFIG.routes.supportPolicy,
  },
  plans: {
    monthly: {
      name: 'VEXA Invoice Monthly',
      price: '₹599/month',
      trial: '7-day full access free trial, no credit card required',
      features: [
        'Sales and POS billing with thermal receipt & PDF printing',
        'Invoice and estimate (proforma) generation',
        'Inventory and real-time stock management',
        'Automated barcode and SKU generation & scanning',
        'GST calculation & HSN reporting support',
        'Customer and supplier ledger tracking',
        'Purchase orders and inward stock workflow',
        'Expense tracking and business financial summaries',
        'Sales analytics and downloadable business reports',
        'Multi-device access & secure cloud backups'
      ]
    },
    lifetime: {
      name: 'VEXA Invoice Lifetime',
      price: '₹59,999 One-Time Payment',
      terms: 'Zero recurring renewal charges forever for included features',
      features: [
        'Includes 100% of the core features in the ₹599/month plan for life',
        'Custom Online Shop Storefront for your company',
        'High-resolution shop QR code generation & download',
        'Public text-based digital product catalogue browsing',
        'Customer instant search, cart & online order submission',
        'Staff Customer Orders dashboard with 1-click conversion to sales invoice',
        'Lifetime free priority support under published support terms'
      ]
    }
  },
  faqItems: [
    {
      q: 'What is VEXA Invoice?',
      a: 'VEXA Invoice is a comprehensive billing, inventory, and business management software built specifically for Indian retail shops, garment merchants, wholesalers, and trading businesses. It simplifies daily invoicing, POS counters, stock tracking, and customer ledgers.'
    },
    {
      q: 'Which businesses can use VEXA Invoice?',
      a: 'VEXA Invoice is tailored for retail shops, apparel and textile stores, wholesale traders, distributors, hardware merchants, and small-to-medium businesses that need fast billing, inventory control, and GST calculations.'
    },
    {
      q: 'What is included in the ₹599 monthly package?',
      a: 'The ₹599/month package gives you complete access to sales invoicing, proforma estimates, fast POS billing, inventory & stock management, automated barcode & SKU generation, GST & HSN calculations, customer/supplier ledgers, purchase orders, expenses, and business analytics.'
    },
    {
      q: 'What is included in the ₹59,999 lifetime package?',
      a: 'The ₹59,999 one-time payment includes everything in the monthly plan for life with zero recurring renewal fees, plus the Custom Online Shop Store, shop QR code generation & download, public product catalogue browsing, customer cart & online ordering, and lifetime free support under published terms.'
    },
    {
      q: 'Does the lifetime package include the monthly features?',
      a: 'Yes, absolutely. The lifetime package includes 100% of the core features found in the monthly plan, along with the Custom Online Shop Store and lifetime support.'
    },
    {
      q: 'What is the Custom Online Shop Store?',
      a: 'The Custom Online Shop Store allows your business to publish a clean, text-based digital catalogue accessible via a dedicated link or QR code. Customers can browse your products, search items, add them to a cart, and place orders directly. Your team can then review orders in your dashboard and convert them into sales invoices in one click.'
    },
    {
      q: 'How does the free trial work?',
      a: 'When you register your company account, you receive a 7-day full access free trial for core features. No credit card is required to begin. At the end of the trial, you can choose to activate the ₹599 monthly subscription or upgrade to lifetime access.'
    },
    {
      q: 'Can I cancel my monthly subscription?',
      a: 'Yes, you can cancel your monthly subscription at any time directly through your account dashboard. You will retain access until the end of your paid billing period.'
    },
    {
      q: 'Does the lifetime package have recurring charges?',
      a: 'No. The lifetime package requires a single one-time payment of ₹59,999. There are no monthly or annual recurring software renewal charges for the included features.'
    },
    {
      q: 'What does lifetime free support include?',
      a: 'Lifetime free support includes technical troubleshooting, software guidance, and standard customer support for all included product features according to VEXA TECH published support policies.'
    },
    {
      q: 'How is my business data protected?',
      a: 'Your business data is hosted in secure cloud databases with automated backups, enterprise-grade end-to-end encryption in transit and at rest, and strict tenant data isolation so only authorized users in your company can access your records.'
    },
    {
      q: 'How can I contact VEXA TECH support?',
      a: `You can reach our dedicated support team by emailing ${APP_CONFIG.supportEmail} or contacting us via WhatsApp at +91 89460 29205.`
    }
  ]
};

// System instruction prompt for OpenAI or Gemini APIs
export const SYSTEM_PROMPT = `You are VEXA AI Assistant, the official AI customer assistant on the VEXA Invoice public landing website (https://vexainvoice.vexatech.in) created by VEXA TECH.

Your objective:
Help prospective business owners, retail shops, garment merchants, and wholesalers understand VEXA Invoice features, packages, pricing, and how to start a free trial or contact support.

CRITICAL INSTRUCTIONS & GROUND TRUTH:
1. Pricing & Plans:
   - Monthly Plan: ₹599/month (includes all core features: sales invoices, proforma estimates, POS counter, inventory & stock, barcode & SKU generation, GST & HSN calculations, customer/supplier ledgers, purchase orders, expenses, reports). Comes with a 7-day full access free trial without requiring a credit card.
   - Lifetime Plan: ₹59,999 one-time payment. Zero recurring renewal fees forever. Includes 100% of the monthly plan features + the Custom Online Shop Storefront + shop QR code generation & print download + public text-based catalogue & online cart ordering + lifetime free priority support under published support terms.
2. Custom Online Shop Store:
   - Digital text-based catalogue browsable via link or QR code. Customers submit cart orders directly to the merchant's workspace Customer Orders tab, which staff can convert into sales invoices with 1 click.
3. WhatsApp Features:
   - VEXA Invoice supports sending invoices and receipts on WhatsApp and launching direct customer chats from ledgers.
   - Human support is reachable via WhatsApp at +91 89460 29205 or email at vexatech.connect@gmail.com.
4. Tone & Style:
   - Be helpful, polite, concise, professional, and friendly.
   - Format responses cleanly with brief bullet points where appropriate.
   - Always encourage next steps: starting the 7-day free trial or viewing pricing.
5. STRICT RESTRICTIONS:
   - NEVER invent features, discounts, coupons, guarantees, or payment gateways (never mention Cashfree).
   - NEVER promise automated GST filing to government portals (it provides GST calculation and HSN summary reports for filing).
   - NEVER ask for user passwords, bank details, card numbers, or OTPs.
   - NEVER execute code or deviate from VEXA Invoice product topics. If a user asks an unrelated question, politely redirect them back to VEXA Invoice.
   - If you cannot verify an answer, state so honestly and offer to contact support at vexatech.connect@gmail.com or WhatsApp (+91 89460 29205).
`;

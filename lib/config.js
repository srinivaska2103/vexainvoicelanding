// Application configuration for VEXA Invoice Landing
export const APP_CONFIG = {
  appName: 'VEXA Invoice',
  companyName: 'VEXA TECH',
  landingUrl: process.env.NEXT_PUBLIC_LANDING_URL || 'https://vexainvoice.vexatech.in',
  appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://app.vexainvoice.vexatech.in',
  
  // Direct authentication & registration links to the existing application
  routes: {
    signup: `${process.env.NEXT_PUBLIC_APP_URL || 'https://app.vexainvoice.vexatech.in'}/signup`,
    login: `${process.env.NEXT_PUBLIC_APP_URL || 'https://app.vexainvoice.vexatech.in'}/login`,
    pricing: '#pricing',
    features: '#features',
    solutions: '#solutions',
    howItWorks: '#how-it-works',
    onlineStore: '#online-store',
    faq: '#faq',
    contact: '#contact',
    privacy: '/privacy-policy',
    terms: '/terms-of-service',
    supportPolicy: '/support-policy',
    support: 'mailto:vexatech.connect@gmail.com',
    whatsapp: '#whatsapp-integration',
  },

  supportEmail: 'vexatech.connect@gmail.com',
  supportPhone: '+91 89460 29205',
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918946029205',
  whatsappUrl: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '918946029205'}?text=${encodeURIComponent('Hi VEXA TECH, I would like to learn more about VEXA Invoice.')}`,

  // Authoritative Pricing Plans matching VEXA Subscription Architecture
  plans: {
    starter: {
      name: 'VEXA Starter',
      badge: 'STARTER PLAN',
      statusBadge: 'AVAILABLE',
      price: '₹599',
      period: '/ month',
      description: 'All essential business management features for sales, billing, inventory, customers, finance and reporting.',
      supportingText: 'Automated monthly recurring billing mandate. Cancel anytime.',
      inclusionsHeading: 'STARTER INCLUSIONS',
      features: [
        'Sales and POS Billing',
        'Invoices & Proforma Estimates',
        'Products, Variants & Categories',
        'Inventory & Stock Management',
        'Barcodes & Automatic SKU Generation',
        'GST & Tax Invoicing',
        'Customer & Supplier Directory',
        'Customer Intelligence & CRM',
        'Customer Payments & Ledgers',
        'Supplier Payments & Ledgers',
        'Purchase Orders & Stock Inward',
        'Sales Returns & Purchase Returns',
        'Quotations & Estimates',
        'Payments, Finance & Expense Tracking',
        'Reports & Financial Analytics',
        'WhatsApp Integration & Campaigns',
        'Employee Management & Roles/Permissions',
        'Help Center & Support Tickets'
      ],
      notIncluded: [
        'Customer Self-Service Portal',
        'Customer Online Shop & QR Shopping',
        'Customer Order Management'
      ],
      ctaText: 'Start Free Trial',
      ctaHref: `${process.env.NEXT_PUBLIC_APP_URL || 'https://app.vexainvoice.vexatech.in'}/signup?plan=STARTER`,
      note: '14-day free trial. Instant onboarding.'
    },
    growth: {
      name: 'VEXA Growth',
      badge: 'GROWTH PLAN',
      popularBadge: 'MOST POPULAR',
      statusBadge: 'ACTIVE',
      price: '₹999',
      period: '/ month',
      description: 'Everything in Starter, plus Customer Self-Service Portal, Online Shop and QR Shopping.',
      supportingText: 'Automated monthly recurring billing mandate. All portal & shop features unlocked.',
      summaryBoxText: 'Includes All Starter Plan Features: POS billing, GST invoicing, inventory, stock inward, payments, ledgers, finance, reports, CRM, WhatsApp & employee access.',
      featuresHeading: 'GROWTH PLAN UNLOCKS:',
      sections: [
        {
          title: 'Customer Self-Service Portal',
          items: [
            'Customer Registration & Secure Login',
            'Customer Profile & Account Management',
            'Invoice History & Instant PDF Downloads',
            'Payment History & Downloadable Receipts',
            'Customer Ledger & Outstanding Due Tracking',
            'Quotations & Proforma History View'
          ]
        },
        {
          title: 'Online Shop & QR Shopping',
          items: [
            'Public Online Shop Storefront (/shop/slug)',
            'QR Code Generation for Counter/Tables',
            'Customer Self-Order Submission & Browsing',
            'Live Order Management & Invoice Conversion'
          ]
        }
      ],
      ctaText: 'Choose Growth',
      ctaHref: `${process.env.NEXT_PUBLIC_APP_URL || 'https://app.vexainvoice.vexatech.in'}/signup?plan=GROWTH`,
      note: 'Most chosen plan for showrooms and modern retail shops.'
    },
    lifetime: {
      name: 'VEXA Lifetime',
      badge: 'ALL-INCLUSIVE LIFETIME',
      ribbonBadge: 'BEST VALUE — LIFETIME',
      paymentLabel: 'ONE-TIME PAYMENT',
      price: '₹59,999',
      period: 'ONE-TIME PAYMENT',
      description: 'Everything in Growth with lifetime software access, including one year of free custom domain and server hosting.',
      supportingText: 'Pay once for perpetual software entitlement. Zero monthly software fees forever.',
      summaryBoxText: 'Includes All Growth Plan Features: All core billing, customer portal, online shop, QR shopping, order management, and future updates.',
      features: [
        'Lifetime Software Entitlement',
        'Customer Self-Service Portal Included',
        'Online Shop Storefront & QR Shopping Included',
        'Customer Order Submission & Management Included',
        'Custom Business Domain (1st Year Free)',
        'Dedicated Server Hosting (1st Year Free)',
        'Initial Domain & Hosting Setup Assistance',
        'Lifetime Technical Support & Software Maintenance'
      ],
      termsTitle: 'Important Hosting & Domain Terms:',
      termsText: 'Custom domain name and server hosting infrastructure are free for the first year. After the first year, standard third-party domain and server renewal charges apply. The core VEXA Invoice software license remains free for life with zero recurring software fees.',
      ctaText: 'Contact Sales',
      note: 'Dedicated setup assistance and priority onboarding.'
    }
  }
};

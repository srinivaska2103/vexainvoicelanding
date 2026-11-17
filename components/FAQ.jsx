'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';
import ScrollReveal from './ScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is VEXA Invoice?',
      a: 'VEXA Invoice is a comprehensive billing, inventory, and business management software built specifically for Indian retail shops, garment merchants, wholesalers, and trading businesses. It simplifies daily invoicing, POS counters, stock tracking, and customer ledgers.'
    },
    {
      q: 'Which businesses can use VEXA Invoice?',
      a: 'VEXA Invoice is designed for retail shops, apparel and textile stores, wholesale traders, distributors, hardware merchants, and small-to-medium businesses that need fast billing, inventory control, and GST calculations.'
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
      q: 'How does billing and access work?',
      a: 'VEXA Invoice is a commercial pay-and-use product. Simply register your business, choose between our affordable ₹599 monthly subscription or the ₹59,999 Lifetime License, and enjoy immediate uninterrupted access to all enterprise billing and inventory tools.'
    },
    {
      q: 'Can I cancel my monthly subscription?',
      a: 'Yes, you can cancel your monthly subscription at any time directly through your account dashboard. You will retain access until the end of your paid billing period.'
    },
    {
      q: 'Does the lifetime package have recurring charges?',
      a: 'No. The lifetime package requires a single one-time payment of ₹59,999 processed securely via authorized checkout. There are no monthly or annual recurring software renewal charges for the included features.'
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
      a: `You can reach our dedicated support team by emailing ${APP_CONFIG.supportEmail} or contacting us through your registered account dashboard.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <ScrollReveal animation="fade-up" duration={600} className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Everything you need to know about VEXA Invoice features, plans, and packages.
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={index}
                animation="fade-up"
                delay={Math.min(index * 40, 300)}
                duration={450}
              >
                <div
                  className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-200 hover:border-slate-300"
                >
                  <button suppressHydrationWarning
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 bg-white hover:bg-slate-50/70 transition-colors focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-slate-900">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 transition-transform duration-200 flex-shrink-0 ${
                        isOpen ? 'transform rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      {item.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Support Help Box */}
        <ScrollReveal animation="fade-up" delay={200} duration={500} className="mt-12 p-6 rounded-2xl bg-blue-50 border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-slate-900">Have more questions?</h4>
            <p className="text-sm text-slate-600 mt-0.5">
              Our team is here to assist your business setup and answer inquiries.
            </p>
          </div>
          <a
            href={APP_CONFIG.routes.support}
            className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-sm transition-all flex-shrink-0"
          >
            Contact Support
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
}

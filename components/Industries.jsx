import { APP_CONFIG } from '@/lib/config';
import { 
  Store, 
  Shirt, 
  Warehouse, 
  Briefcase, 
  ArrowRight, 
  Check 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Industries() {
  const industries = [
    {
      icon: Store,
      title: 'Retail Shops',
      subtitle: 'Kirana, Electronics & General Stores',
      description: 'Speed up customer checkout with fast POS, barcode scanning, instant receipt printing, and daily cash reconciliation.',
      features: ['Fast POS billing', 'Barcode label scanning', 'Low-stock warnings']
    },
    {
      icon: Shirt,
      title: 'Textile & Garment Businesses',
      subtitle: 'Clothing, Apparel & Fabric Merchants',
      description: 'Manage diverse sizes, colors, and SKU variants with ease. Print compliant GST tax invoices with appropriate HSN rate codes.',
      features: ['SKU & variant management', 'HSN rate calculation', 'Wholesale & retail pricing']
    },
    {
      icon: Warehouse,
      title: 'Wholesale Businesses',
      subtitle: 'Distributors & Bulk Suppliers',
      description: 'Keep tabs on high-volume inward stock, track customer and supplier credit balances, and generate proforma estimates in seconds.',
      features: ['Supplier inward records', 'Customer balance ledgers', 'Proforma to invoice flow']
    },
    {
      icon: Briefcase,
      title: 'General Trading Businesses',
      subtitle: 'B2B Traders, Resellers & Hardware Stores',
      description: 'Centralize purchase orders, track operational expenses, maintain customer relationships and monitor profit margins.',
      features: ['Purchase order tracking', 'Expense categorization', 'Sales performance analytics']
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-slate-50 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-semibold mb-3">
              <span>Tailored For Indian Commerce</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built For Your Industry
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              From single-counter retail shops to multi-item wholesale distributors, VEXA Invoice provides the essential tools to run your trade smoothly.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => {
            const Icon = ind.icon;
            return (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={idx * 90}
                duration={550}
                className="h-full"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between h-full group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {ind.title}
                    </h3>
                    <div className="text-xs font-semibold text-blue-600 mb-3">
                      {ind.subtitle}
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {ind.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-4 space-y-2">
                    {ind.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* CTA banner below industries */}
        <ScrollReveal animation="fade-up" delay={200} duration={600}>
          <div className="mt-14 text-center">
            <a
              href={APP_CONFIG.routes.signup}
              className="inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
            >
              <span>Get Started for Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

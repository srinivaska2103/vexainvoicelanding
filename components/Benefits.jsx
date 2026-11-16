import { ReceiptText, Layers, LineChart, ShoppingBag } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Benefits() {
  const benefits = [
    {
      icon: ReceiptText,
      title: 'Simplify Daily Billing',
      description: 'Create fast sales invoices, proforma estimates and manage day-to-day point of sale operations with zero friction.',
      badge: 'Core Workflow'
    },
    {
      icon: Layers,
      title: 'Keep Stock Under Control',
      description: 'Track products, manage inventory levels, record inward stock movements and print barcode/SKU labels effortlessly.',
      badge: 'Real-time Tracking'
    },
    {
      icon: LineChart,
      title: 'Understand Your Business',
      description: 'Use practical reports, sales summaries, customer ledgers and GST calculations to review financial health anytime.',
      badge: 'Actionable Insights'
    },
    {
      icon: ShoppingBag,
      title: 'Serve Customers Better',
      description: 'Maintain accurate customer records, track balances and launch your Custom Online Shop Store for direct ordering.',
      badge: 'Customer Growth'
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs uppercase font-bold tracking-widest text-blue-600 mb-2">
              Why Choose VEXA Invoice
            </h2>
            <p className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything Your Business Needs to Run Smarter
            </p>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Purpose-built tools for everyday business workflows, eliminating spreadsheet errors and complex accounting hurdles.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <ScrollReveal
                key={index}
                animation="fade-up"
                delay={index * 100}
                duration={550}
                className="h-full"
              >
                <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wide uppercase px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {benefit.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

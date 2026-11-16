import { APP_CONFIG } from '@/lib/config';
import { UserPlus, Settings, Rocket, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      icon: UserPlus,
      title: 'Create Your Account',
      description: 'Register your company through the standard signup workflow. Verify your email to activate your account and start your 7-day free trial immediately.'
    },
    {
      step: '02',
      icon: Settings,
      title: 'Set Up Your Business',
      description: 'Add your company profile, GSTIN details, product catalogue with pricing & HSN codes, and configure your receipt preferences in minutes.'
    },
    {
      step: '03',
      icon: Rocket,
      title: 'Start Managing Your Business',
      description: 'Begin issuing professional tax invoices, recording POS sales, tracking stock levels, and managing customer ledgers effortlessly.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
              <span>Fast Onboarding</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Get up and running in three simple steps. No technical expertise or lengthy training required.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={index}
                animation="fade-up"
                delay={index * 120}
                duration={550}
                className="h-full"
              >
                <div className="relative bg-slate-50/70 rounded-2xl p-8 border border-slate-200/80 hover:border-blue-300 hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-start h-full group">
                  <div className="flex items-center justify-between w-full mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-3xl font-extrabold text-slate-300 font-mono group-hover:text-blue-200 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <div className="mt-12 text-center text-xs text-slate-500 max-w-2xl mx-auto">
          * Account creation integrates with standard email verification and trial activation. The backend remains authoritative for company verification and subscription status.
        </div>
      </div>
    </section>
  );
}

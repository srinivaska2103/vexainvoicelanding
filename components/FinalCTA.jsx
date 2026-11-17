'use client';

import { APP_CONFIG } from '@/lib/config';
import { 
  ArrowRight, 
  Sparkles, 
  Check, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50/60 to-slate-100/40 relative overflow-hidden border-t border-slate-200/70">
      {/* Subtle ambient theme glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-gradient-to-r from-blue-400/10 via-indigo-400/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact, Theme-Aligned Card Container */}
        <ScrollReveal
          animation="scale-in"
          duration={550}
          className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 text-white p-8 sm:p-12 shadow-2xl shadow-slate-900/15 border border-slate-800 relative overflow-hidden text-center"
        >
          {/* Subtle geometric dot grid overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff12_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
          
          {/* Theme blue glow accent */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-2xl mx-auto">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-semibold mb-5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Get started with full features in under 2 minutes</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
              Ready to Simplify Your Business?
            </h2>

            {/* Concise Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-lg mx-auto mb-7 leading-relaxed">
              Get started today. Manage billing, inventory, POS, and customer orders seamlessly in one powerful pay-and-use system.
            </p>

            {/* Action Buttons with Theme-based Blue Styling */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-7">
              <a
                href={APP_CONFIG.routes.signup}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-600/40 transition-all transform hover:-translate-y-0.5"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl transition-all"
              >
                <span>View Plans & Pricing</span>
              </a>
            </div>

            {/* Micro value badges */}
            <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-400 stroke-[3]" />
                <span>No Credit Card Required</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-blue-400 stroke-[3]" />
                <span>₹599/mo or Lifetime Access</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant Setup</span>
              </span>
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

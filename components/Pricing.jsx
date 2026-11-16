'use client';

import { useState } from 'react';
import { APP_CONFIG } from '@/lib/config';
import { 
  Check, 
  Minus, 
  Sparkles, 
  ArrowRight, 
  Crown, 
  ShieldCheck, 
  PhoneCall, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import ContactSalesModal from './ContactSalesModal';

export default function Pricing() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const starter = APP_CONFIG.plans.starter;
  const growth = APP_CONFIG.plans.growth;
  const lifetime = APP_CONFIG.plans.lifetime;

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/60 relative overflow-hidden">
      {/* Ambient decorative blurs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-semibold mb-3">
              <span>Transparent Pricing Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Choose the Right Plan for Your Business
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Start with core business management, unlock customer portal and online shop features, or enjoy lifetime software ownership.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Pricing Cards:
            - Desktop: 3 equal cards side-by-side
            - Mobile & Tablet: Stacked with clean padding, zero horizontal scroll
        */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto items-stretch">
          
          {/* =========================================================
              CARD 1: VEXA STARTER (₹599 / month)
             ========================================================= */}
          <ScrollReveal animation="fade-up" delay={50} duration={550} className="h-full">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
              <div>
                {/* Header Pills */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                    {starter.badge}
                  </span>
                  <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                    {starter.statusBadge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                  {starter.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {starter.description}
                </p>

                {/* Price Display Card */}
                <div className="mt-5 mb-6 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/80">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                      {starter.price}
                    </span>
                    <span className="text-xs font-bold text-slate-600">
                      {starter.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 font-medium">
                    {starter.supportingText}
                  </p>
                </div>

                {/* Inclusions Heading */}
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 mb-3">
                  {starter.inclusionsHeading}
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6 text-xs text-slate-700">
                  {starter.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 leading-snug">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Not Included Section */}
                <div className="pt-4 border-t border-slate-100 mb-6">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 mb-2.5">
                    NOT INCLUDED IN STARTER
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-400">
                    {starter.notIncluded.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Minus className="w-3.5 h-3.5 text-slate-300 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <a
                  href={starter.ctaHref}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-slate-800 bg-slate-100 hover:bg-blue-600 hover:text-white active:scale-95 transition-all text-xs shadow-xs"
                >
                  <span>{starter.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  {starter.note}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* =========================================================
              CARD 2: VEXA GROWTH (₹999 / month) — MOST POPULAR
             ========================================================= */}
          <ScrollReveal animation="fade-up" delay={120} duration={550} className="h-full">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-blue-600 shadow-xl shadow-blue-500/10 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
              {/* Most Popular Top Ribbon */}
              <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-xs">
                {growth.popularBadge}
              </div>

              <div>
                {/* Header Pills */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 border border-blue-200">
                    {growth.badge}
                  </span>
                  <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                    {growth.statusBadge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-black text-slate-950 tracking-tight flex items-center gap-1.5">
                  <span>{growth.name}</span>
                  <Sparkles className="w-4 h-4 text-blue-600" />
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {growth.description}
                </p>

                {/* Price Display Card */}
                <div className="mt-5 mb-6 p-4 rounded-2xl bg-blue-50/60 border border-blue-200">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                      {growth.price}
                    </span>
                    <span className="text-xs font-bold text-slate-600">
                      {growth.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 font-medium">
                    {growth.supportingText}
                  </p>
                </div>

                {/* Blue Inclusions Summary Box */}
                <div className="mb-5 p-3.5 rounded-xl bg-blue-50/80 border border-blue-200/90 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-blue-900 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Includes All Starter Plan Features</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                    POS billing, GST invoicing, inventory, stock inward, payments, ledgers, finance, reports, CRM, WhatsApp & employee access.
                  </p>
                </div>

                {/* Growth Unlocks Sections */}
                <div className="text-[11px] font-extrabold uppercase tracking-wider text-blue-700 mb-3">
                  {growth.featuresHeading}
                </div>

                <div className="space-y-4 mb-6">
                  {growth.sections.map((section, sIdx) => (
                    <div key={sIdx} className="space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{section.title}</span>
                      </div>
                      <div className="pl-5 space-y-1 text-[11px] text-slate-600 font-medium">
                        {section.items.map((subItem, idx) => (
                          <div key={idx} className="flex items-start gap-1.5">
                            <span className="text-slate-400">•</span>
                            <span>{subItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <a
                  href={growth.ctaHref}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 transition-all text-xs shadow-md shadow-blue-500/25"
                >
                  <span>{growth.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  {growth.note}
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* =========================================================
              CARD 3: VEXA LIFETIME (₹59,999 One-Time)
             ========================================================= */}
          <ScrollReveal animation="fade-up" delay={180} duration={550} className="h-full">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between h-full relative overflow-hidden">
              {/* Best Value Ribbon */}
              <div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-bl-xl shadow-xs">
                {lifetime.ribbonBadge}
              </div>

              <div>
                {/* Header Badge */}
                <div className="flex items-center gap-1.5 mb-4">
                  <Crown className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-[10px] font-extrabold tracking-wider uppercase px-2.5 py-1 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                    {lifetime.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-black text-slate-950 tracking-tight">
                  {lifetime.name}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {lifetime.description}
                </p>

                {/* Price Display Card */}
                <div className="mt-5 mb-6 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                      {lifetime.price}
                    </span>
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                      {lifetime.paymentLabel}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mt-1 font-medium">
                    {lifetime.supportingText}
                  </p>
                </div>

                {/* Blue Inclusions Summary Box */}
                <div className="mb-5 p-3.5 rounded-xl bg-blue-50/60 border border-blue-200 text-xs">
                  <div className="flex items-center gap-1.5 font-bold text-blue-900 mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>Includes All Growth Plan Features</span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-relaxed font-medium">
                    All core billing, customer portal, online shop, QR shopping, order management, and future updates.
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-5 text-xs text-slate-700">
                  {lifetime.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 leading-snug">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="font-medium">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Important Hosting & Domain Terms Box */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs mb-6">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900 mb-1">
                    <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{lifetime.termsTitle}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    {lifetime.termsText}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 mt-auto">
                <button suppressHydrationWarning
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-white bg-slate-900 hover:bg-slate-800 active:scale-95 transition-all text-xs shadow-md shadow-slate-900/20 cursor-pointer"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{lifetime.ctaText}</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  {lifetime.note}
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>

      {/* Interactive Contact Sales Modal for Lifetime Plan */}
      <ContactSalesModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        preselectedInterest="Lifetime Plan (₹59,999)"
      />
    </section>
  );
}

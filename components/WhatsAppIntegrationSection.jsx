'use client';

import { useState } from 'react';
import { APP_CONFIG } from '@/lib/config';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  ReceiptText, 
  Store, 
  BellRing, 
  ShieldCheck,
  Zap,
  Smartphone,
  ChevronRight
} from 'lucide-react';
import WhatsAppConversationPreview from './WhatsAppConversationPreview';
import ScrollReveal from './ScrollReveal';

export default function WhatsAppIntegrationSection() {
  const [activeScenario, setActiveScenario] = useState('order'); // 'order' | 'invoice'

  const capabilities = [
    {
      id: 'order',
      icon: Store,
      title: 'Customer Order Notifications',
      description: 'Receive instant alert messages when shoppers place orders through your text-based Custom Online Shop Storefront.',
      status: 'Store Integration',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200/80',
      tag: 'Order Alert'
    },
    {
      id: 'invoice',
      icon: ReceiptText,
      title: 'Invoice & Payment Notifications',
      description: 'Deliver clean PDF invoices, payment receipts, and balance summaries directly to customers on WhatsApp without manual paperwork.',
      status: 'Workflow Supported',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
      tag: 'PDF Delivery'
    },
    {
      id: 'dispatch',
      icon: BellRing,
      title: 'Order Status & Dispatch Updates',
      description: 'Keep buyers in the loop automatically when an order is reviewed and converted into an active invoice in your VEXA dashboard.',
      status: 'Status Tracking',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200/80',
      tag: 'Live Status'
    },
    {
      id: 'chat',
      icon: MessageSquare,
      title: 'Direct Customer Communication',
      description: 'Launch immediate WhatsApp chats with customers or vendors straight from your client ledgers for faster payment settlements.',
      status: 'One-Click Chat',
      badgeColor: 'bg-teal-50 text-teal-700 border-teal-200/80',
      tag: 'Direct Chat'
    }
  ];

  return (
    <section id="whatsapp-integration" className="py-20 sm:py-28 bg-gradient-to-b from-white via-emerald-50/20 to-slate-50/50 border-t border-slate-200/80 relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={600} className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-bold mb-4 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600 fill-current" />
            <span>WhatsApp-Powered Business Workflows</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
            Your Business, Connected on{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700">
              WhatsApp
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Make it easier for your business to stay connected with customers using WhatsApp-powered communication, alongside your VEXA Invoice workflows.
          </p>
        </ScrollReveal>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Interactive Capability Cards */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <ScrollReveal animation="fade-in" delay={100} duration={500} className="flex items-center justify-between pb-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Click any capability to preview in chat
              </span>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                const isSelected = activeScenario === item.id;
                return (
                  <ScrollReveal
                    key={index}
                    animation="fade-up"
                    delay={100 + index * 50}
                    duration={500}
                    className="h-full"
                  >
                    <button suppressHydrationWarning
                      type="button"
                      onClick={() => setActiveScenario(item.id)}
                      className={`w-full h-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-200 border flex flex-col justify-between group active:scale-[0.99] ${
                        isSelected
                          ? 'bg-white border-emerald-500 shadow-xl shadow-emerald-600/10 ring-2 ring-emerald-500/15 translate-y-[-2px]'
                          : 'bg-white/90 hover:bg-white border-slate-200/90 hover:border-emerald-300 shadow-2xs hover:shadow-md'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <div
                            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                              isSelected
                                ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/20'
                                : 'bg-emerald-50 text-emerald-700 border border-emerald-100 group-hover:bg-emerald-100/80'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                          </div>
                          <span
                            className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${item.badgeColor}`}
                          >
                            {item.status}
                          </span>
                        </div>
                        <h3 className={`text-sm font-bold mb-1.5 transition-colors ${isSelected ? 'text-emerald-950 font-extrabold' : 'text-slate-900 group-hover:text-emerald-900'}`}>
                          {item.title}
                        </h3>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                        <span className={isSelected ? 'text-emerald-700' : 'text-slate-400 group-hover:text-slate-600'}>
                          {isSelected ? '✓ Viewing in Mockup' : 'Click to View Scenario'}
                        </span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'translate-x-0.5 text-emerald-600' : 'text-slate-400 group-hover:translate-x-0.5'}`} />
                      </div>
                    </button>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* CTAs */}
            <ScrollReveal animation="fade-up" delay={380} duration={500} className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-md shadow-blue-500/20 transition-all"
              >
                <span>Explore WhatsApp Features</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {APP_CONFIG.whatsappNumber && (
                <a
                  href={APP_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm shadow-md shadow-emerald-500/25 transition-all transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Contact Us on WhatsApp</span>
                </a>
              )}
            </ScrollReveal>

            <ScrollReveal animation="fade-in" delay={440} duration={400} className="text-xs text-slate-500 flex items-center gap-2 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Compliant with WhatsApp Business messaging guidelines & tenant privacy</span>
            </ScrollReveal>
          </div>

          {/* Right Column: WhatsApp Interactive Conversation Mockup */}
          <ScrollReveal animation="slide-right" delay={200} duration={600} className="lg:col-span-5 flex justify-center">
            <WhatsAppConversationPreview
              activeScenario={activeScenario}
              onScenarioChange={setActiveScenario}
            />
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}

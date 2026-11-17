'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  IndianRupee, 
  Package, 
  UsersRound, 
  Layers, 
  CircleCheck,
  RefreshCw, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';
import ScrollReveal from './ScrollReveal';
import InteractiveHeroPhone from './InteractiveHeroPhone';

export default function Hero() {
  const [activeModule, setActiveModule] = useState('dashboard');

  const modules = [
    {
      id: 'dashboard',
      title: 'Dashboard',
      icon: BarChart3,
      description: 'Real-time sales summary',
    },
    {
      id: 'sales',
      title: 'Sales',
      icon: IndianRupee,
      description: 'Fast mobile invoice creation',
    },
    {
      id: 'products',
      title: 'Products',
      icon: Package,
      description: 'Catalog & barcode lookup',
    },
    {
      id: 'customers',
      title: 'Customers',
      icon: UsersRound,
      description: 'Ledger & contact lookup',
    },
    {
      id: 'stock',
      title: 'Stock',
      icon: Layers,
      description: 'Live inventory balance',
    },
    {
      id: 'payments',
      title: 'Payments',
      icon: CircleCheck,
      description: 'Receipt & payment tracking',
    },
  ];

  return (
    <section 
      id="hero"
      aria-label="Hero - Your Business, In Your Pocket"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-100/70 via-indigo-50/40 to-slate-50/70"
    >
      {/* Decorative ambient gradient orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-tr from-blue-300/25 via-indigo-200/20 to-sky-200/25 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Background subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f612_1px,transparent_1px),linear-gradient(to_bottom,#3b82f612_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_20%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mobile Header Order (Screen < 768px): Heading & text first */}
        <div className="md:hidden text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>BUSINESS MANAGEMENT, ANYWHERE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.15] mb-3">
            Your Business, In Your Pocket
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed max-w-md mx-auto">
            Take your business management experience with you. Click any module card below to preview the mobile interface live on the phone screen:
          </p>
        </div>

        {/* 2-Column Desktop Grid Layout: Left = Hero text & Modules, Right = Phone */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ==============================================================
              LEFT COLUMN — Hero Content, Module Cards, Cloud Sync, & CTAs (Approx 58-60%)
             ============================================================== */}
          <div className="order-1 md:order-1 md:col-span-7 lg:col-span-7 text-left">
            <ScrollReveal animation="fade-up" duration={600}>
              
              {/* Desktop Pill Badge */}
              <div className="hidden md:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>BUSINESS MANAGEMENT, ANYWHERE</span>
              </div>

              {/* Desktop Main Heading */}
              <h1 className="hidden md:block text-4xl lg:text-[2.75rem] xl:text-[3.25rem] font-black tracking-tight text-slate-900 leading-[1.12] mb-4">
                Your Business, In Your Pocket
              </h1>

              {/* Desktop Supporting Text */}
              <p className="hidden md:block text-base lg:text-lg text-slate-600 leading-relaxed mb-6 max-w-2xl">
                Take your business management experience with you. Click any module card below to preview the mobile interface live on the phone screen:
              </p>

              {/* Interactive 6-Module Grid (2 Columns on desktop & tablet) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
                {modules.map((mod) => {
                  const Icon = mod.icon;
                  const isSelected = activeModule === mod.id;

                  return (
                    <button suppressHydrationWarning
                      key={mod.id}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      onClick={() => setActiveModule(mod.id)}
                      className={`group p-3.5 sm:p-4 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3.5 outline-none focus-visible:ring-2 focus-visible:ring-blue-600 cursor-pointer ${
                        isSelected
                          ? 'bg-blue-50/70 border-blue-600 ring-2 ring-blue-500/20 shadow-sm'
                          : 'bg-white border-slate-200/90 shadow-xs hover:border-blue-300 hover:bg-slate-50/60'
                      }`}
                    >
                      {/* Icon */}
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-xs'
                          : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100/80'
                      }`}>
                        <Icon className="w-5 h-5 stroke-[2.2]" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className={`text-sm font-bold truncate ${
                            isSelected ? 'text-blue-900' : 'text-slate-900'
                          }`}>
                            {mod.title}
                          </span>
                          
                          {isSelected && (
                            <span className="text-[10px] font-bold text-blue-700 bg-white border border-blue-200 px-2 py-0.5 rounded-full shadow-2xs whitespace-nowrap">
                              Active Screen
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-slate-500 truncate mt-0.5">
                          {mod.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Real-time Cloud Sync Information Card */}
              <div className="bg-white rounded-2xl p-4 border border-blue-200/90 shadow-xs flex items-start sm:items-center gap-3.5 mb-6">
                <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0">
                  <RefreshCw className="w-4 h-4 animate-[spin_8s_linear_infinite]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-900">
                      REAL-TIME CLOUD SYNC
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-0.5">
                    Mobile App syncs instantly with Online Web Edition and Windows Desktop Edition in real time.
                  </p>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5">
                <a
                  href={APP_CONFIG.routes.signup}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Get Started Now</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/90 rounded-xl shadow-xs transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
                >
                  <span>Contact Sales</span>
                </a>

                <a
                  href="#features"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-slate-500 hover:text-blue-600 transition-colors"
                >
                  <span>Explore Features</span>
                </a>
              </div>

            </ScrollReveal>
          </div>

          {/* ==============================================================
              RIGHT COLUMN — Smartphone Preview (Approx 40-42%)
             ============================================================== */}
          <div className="order-2 md:order-2 md:col-span-5 lg:col-span-5 flex justify-center items-center">
            <ScrollReveal animation="fade-up" delay={150} duration={650} className="w-full">
              <InteractiveHeroPhone 
                activeModule={activeModule} 
                onSelectModule={setActiveModule} 
              />
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}



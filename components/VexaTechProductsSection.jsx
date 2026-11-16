'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ExternalLink, Sparkles, ArrowUpRight, Coffee, Shirt, Globe, Zap, Shield, Star } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const products = [
  {
    id: 'fahara',
    name: 'Fahara',
    tagline: 'Cafe & Event Booking Platform',
    category: 'Hospitality & Events',
    description:
      'A comprehensive platform crafted for modern cafes, event venues, and dining spaces. Streamline seat reservations, catering menus, and event bookings with ease.',
    url: 'https://fahara.in',
    logo: '/fahara-logo.jpeg',
    icon: Coffee,
    highlights: [
      { icon: Globe, label: 'Online Reservations' },
      { icon: Zap, label: 'Instant Booking' },
      { icon: Shield, label: 'Secure Payments' },
      { icon: Star, label: 'Event Management' },
    ],
  },
  {
    id: 'asva',
    name: 'ASVA',
    tagline: 'Premium Textiles & Innerwear',
    category: 'Textiles & Fashion',
    description:
      'Premium apparel and textile brand delivering comfort, elegance, and high-performance craft. Designed with thoughtful fabric innovations and seamless ordering.',
    url: 'https://asva.vexatech.in',
    logo: '/asva-logo.jpeg',
    icon: Shirt,
    highlights: [
      { icon: Star, label: 'Premium Quality' },
      { icon: Zap, label: 'Fast Delivery' },
      { icon: Shield, label: 'Quality Assured' },
      { icon: Globe, label: 'Pan-India Shipping' },
    ],
  },
];

export default function VexaTechProductsSection() {
  const [activeProduct, setActiveProduct] = useState(0);
  const product = products[activeProduct];
  const ProductIcon = product.icon;

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-slate-50/50 to-blue-50/20 text-slate-800 relative overflow-hidden">
      {/* Animated background orbs — VEXA Invoice blue theme */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-blue-100/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s' }} />
        <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute top-[50%] left-[60%] w-60 h-60 bg-blue-50/40 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '7s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal animation="fade-in" duration={550} className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-bold uppercase tracking-wider mb-5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>VEXA TECH Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight">
            Explore More Products by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
              VEXA TECH
            </span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            From cafe seating and event booking to premium textiles and digital commerce — explore the versatile suite of solutions engineered by VEXA TECH.
          </p>
        </ScrollReveal>

        {/* Interactive Product Showcase */}
        <ScrollReveal animation="slide-up" duration={600}>
          <div className="max-w-5xl mx-auto">

            {/* Product Selector Tabs — VEXA Invoice blue theme */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
              {products.map((prod, idx) => {
                const Icon = prod.icon;
                const isActive = idx === activeProduct;
                return (
                  <button suppressHydrationWarning
                    key={prod.id}
                    onClick={() => setActiveProduct(idx)}
                    className={`
                      relative group flex items-center gap-2.5 sm:gap-3 px-5 sm:px-7 py-3 sm:py-3.5 rounded-2xl 
                      font-semibold text-sm sm:text-base transition-all duration-400 ease-out cursor-pointer
                      ${isActive
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 scale-[1.03]'
                        : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:shadow-md hover:scale-[1.02]'
                      }
                    `}
                  >
                    <Icon className={`w-4.5 h-4.5 sm:w-5 sm:h-5 ${isActive ? 'text-white' : 'text-blue-600'}`} />
                    <span>{prod.name}</span>
                    {isActive && (
                      <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-6 h-1 rounded-full bg-white/60" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Product Detail Panel */}
            <div
              key={product.id}
              className="relative bg-white rounded-3xl border border-slate-200/80 shadow-xl shadow-slate-200/40 overflow-hidden transition-all duration-500"
              style={{
                animation: 'productReveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
              }}
            >
              {/* Accent top bar — VEXA Invoice gradient */}
              <div className="h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600" />

              <div className="flex flex-col lg:flex-row">
                
                {/* Left: Visual & Logo Panel */}
                <div className="relative flex-shrink-0 lg:w-[42%] p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-blue-50/80 to-indigo-50/60 flex flex-col items-center justify-center text-center lg:text-left lg:items-start">
                  
                  {/* Floating decorative circles */}
                  <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-blue-100/50 opacity-60 blur-sm" />
                  <div className="absolute bottom-10 left-8 w-10 h-10 rounded-full bg-indigo-100/40 opacity-40 blur-sm" />

                  {/* Logo */}
                  <div className="relative mb-6">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-white p-3 shadow-lg border-2 border-blue-200 overflow-hidden transition-transform duration-300 hover:scale-105 hover:rotate-1">
                      <Image
                        src={product.logo}
                        alt={`${product.name} Logo`}
                        width={100}
                        height={100}
                        className="object-contain w-full h-full rounded-xl"
                      />
                    </div>
                    {/* Pulse ring */}
                    <div className="absolute inset-0 rounded-3xl ring-4 ring-blue-500/20 animate-ping opacity-20" style={{ animationDuration: '3s' }} />
                  </div>

                  {/* Product name & tagline */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-blue-600 mb-3">
                    {product.tagline}
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    {product.category}
                  </span>
                </div>

                {/* Right: Content & Action Panel */}
                <div className="flex-1 p-8 sm:p-10 lg:p-12 flex flex-col justify-between">
                  
                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                      {product.description}
                    </p>

                    {/* Feature highlights */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {product.highlights.map((hl, i) => {
                        const HLIcon = hl.icon;
                        return (
                          <div
                            key={i}
                            className="group/hl flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50/80 border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-sm transition-all duration-300 cursor-default"
                          >
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center flex-shrink-0 group-hover/hl:scale-110 transition-transform duration-300">
                              <HLIcon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-slate-700">{hl.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* CTA Button — VEXA Invoice blue gradient */}
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 rounded-2xl font-bold text-sm sm:text-base bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-blue-500/20"
                  >
                    <span>Visit {product.name}</span>
                    <ArrowUpRight className="w-4.5 h-4.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </ScrollReveal>

      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes productReveal {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      ` }} />
    </section>
  );
}

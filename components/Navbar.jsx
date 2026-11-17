'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { APP_CONFIG } from '@/lib/config';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('features');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['features', 'whatsapp-integration', 'solutions', 'online-store', 'how-it-works', 'pricing', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'WhatsApp', href: '#whatsapp-integration', id: 'whatsapp-integration' },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'Online Store', href: '#online-store', id: 'online-store', badge: 'New' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-white/80 backdrop-blur-xl border-b border-slate-200/70 shadow-sm shadow-slate-200/40'
          : 'py-3.5 bg-white/60 backdrop-blur-md border-b border-slate-100/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name with subtle glow */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-white to-slate-50 border border-slate-200/90 shadow-xs p-1 flex items-center justify-center overflow-hidden group-hover:scale-105 group-hover:shadow-md group-hover:border-blue-300 transition-all duration-200">
              <Image
                src="/vexa-logo.png"
                alt="VEXA TECH Logo"
                width={38}
                height={38}
                className="object-contain w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
                  VEXA
                </span>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-blue-600">
                  Invoice
                </span>
              </div>
              <span className="text-[9px] uppercase font-bold tracking-wider text-slate-400 -mt-1 group-hover:text-slate-600 transition-colors">
                By VEXA TECH
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Modern Interactive Pill Dock */}
          <nav className="hidden lg:flex items-center p-1 rounded-full bg-slate-100/70 border border-slate-200/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-blue-700 bg-white shadow-xs font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] font-extrabold px-1.5 py-0.2 rounded-full bg-blue-100 text-blue-700">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Tablet/Medium Navbar Links (Compact) */}
          <nav className="hidden md:flex lg:hidden items-center gap-1">
            {navLinks.slice(0, 5).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-blue-600 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={APP_CONFIG.routes.login}
              className="relative px-4 py-2 text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-600 rounded-full hover:bg-slate-100/70 border border-transparent hover:border-slate-200/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              Log In
            </a>
            <a
              href={APP_CONFIG.routes.signup}
              className="group relative inline-flex items-center gap-2 px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-bold text-white rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 hover:from-blue-500 hover:via-blue-600 hover:to-indigo-500 shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.98] transition-all duration-200 transform hover:-translate-y-0.5 border border-blue-400/30 overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-500/30"
            >
              {/* Subtle light sweep reflection */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out pointer-events-none" />
              
              <span className="relative z-10 tracking-tight">Get Started</span>
              <div className="relative z-10 w-4 h-4 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                <ArrowRight className="w-2.5 h-2.5 stroke-[3]" />
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button suppressHydrationWarning
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 shadow-xl">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:bg-blue-50/60 rounded-xl flex items-center justify-between transition-colors"
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={APP_CONFIG.routes.login}
              className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl border border-slate-200"
            >
              Log In
            </a>
            <a
              href={APP_CONFIG.routes.signup}
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-md shadow-blue-500/20"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

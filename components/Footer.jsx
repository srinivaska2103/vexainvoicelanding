import Link from 'next/link';
import Image from 'next/image';
import { APP_CONFIG } from '@/lib/config';
import { Mail, Phone, ShieldCheck, MapPin } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-900 text-slate-400 text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <ScrollReveal animation="fade-in" duration={600} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center overflow-hidden shadow-sm flex-shrink-0">
                <Image
                  src="/vexa-logo.png"
                  alt="VEXA TECH Logo"
                  width={40}
                  height={40}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-extrabold tracking-tight text-white">
                    VEXA
                  </span>
                  <span className="text-xl font-bold tracking-tight text-blue-400">
                    Invoice
                  </span>
                </div>
                <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 -mt-1">
                  By VEXA TECH
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Billing, inventory and business management software tailored for retail shops, garment businesses, and wholesale traders in India.
            </p>

            <div className="space-y-2 pt-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${APP_CONFIG.supportEmail}`} className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  {APP_CONFIG.supportEmail}
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% Secure Encrypted Payments</span>
              </div>
            </div>
          </div>

          {/* Features Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Features
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  Billing & Invoicing
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  POS & Daily Sales
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  Inventory & Barcode
                </a>
              </li>
              <li>
                <a href="#online-store" className="hover:text-white transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  <span>Online Shop Store</span>
                  <span className="text-[10px] bg-blue-500/20 text-blue-400 px-1.5 py-0.2 rounded font-semibold">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions & Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#solutions" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  Retail Shops
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  Textile & Garments
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  Wholesale Traders
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  FAQ & Support
                </a>
              </li>
            </ul>
          </div>

          {/* Account & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Account & Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href={APP_CONFIG.routes.login} className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  Login to Application
                </a>
              </li>
              <li>
                <a href={APP_CONFIG.routes.signup} className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  Start Free Trial
                </a>
              </li>
              <li>
                <Link href={APP_CONFIG.routes.privacy} className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={APP_CONFIG.routes.terms} className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href={APP_CONFIG.routes.supportPolicy} className="hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
                  Support Policy
                </Link>
              </li>
            </ul>
          </div>

        </ScrollReveal>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {currentYear} VEXA TECH. All rights reserved. VEXA Invoice is a product of VEXA TECH.
          </p>
          <div className="flex items-center gap-6">
            <Link href={APP_CONFIG.routes.privacy} className="hover:text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
              Privacy
            </Link>
            <Link href={APP_CONFIG.routes.terms} className="hover:text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
              Terms
            </Link>
            <Link href={APP_CONFIG.routes.supportPolicy} className="hover:text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
              Support Policy
            </Link>
            <a href={APP_CONFIG.routes.login} className="hover:text-slate-400 transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400 rounded">
              App Login
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

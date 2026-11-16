import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ChevronRight, Calendar, ShieldCheck, Mail, ArrowRight } from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';

export default function LegalPageLayout({
  title,
  subtitle,
  breadcrumbText,
  lastUpdated = 'October 22, 2026',
  children,
  tableOfContents = []
}) {
  return (
    <main className="min-h-screen bg-white text-slate-700 flex flex-col">
      <Navbar />

      {/* Hero Header Area */}
      <section className="pt-32 pb-12 sm:pt-40 sm:pb-16 bg-gradient-to-b from-blue-50/60 via-slate-50/50 to-white border-b border-slate-200/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-slate-500 mb-6">
            <Link href="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-800 font-semibold">{breadcrumbText}</span>
          </nav>

          {/* Heading and Intro */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-3xl leading-relaxed mb-6">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-2xs">
              <Calendar className="w-3.5 h-3.5 text-blue-600" />
              <span>Last Reviewed: {lastUpdated}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
              <span>Official Policy Document • VEXA TECH</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Layout with optional sticky TOC */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Table of contents (Desktop sticky) */}
            {tableOfContents.length > 0 && (
              <aside className="hidden lg:block lg:col-span-4">
                <div className="sticky top-28 bg-slate-50/80 border border-slate-200/90 rounded-2xl p-5 shadow-2xs">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                    <span>Contents</span>
                  </h3>
                  <nav className="space-y-1.5 text-xs text-slate-600">
                    {tableOfContents.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.href}
                        className="block py-1 hover:text-blue-600 transition-colors line-clamp-1"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>

                  <div className="mt-6 pt-5 border-t border-slate-200">
                    <div className="text-xs font-semibold text-slate-800 mb-1">
                      Have questions?
                    </div>
                    <p className="text-[11px] text-slate-500 mb-3">
                      Our legal & support team can help clarify policy terms.
                    </p>
                    <a
                      href={`mailto:${APP_CONFIG.supportEmail}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>{APP_CONFIG.supportEmail}</span>
                    </a>
                  </div>
                </div>
              </aside>
            )}

            {/* Document Body */}
            <article className={`space-y-8 text-sm sm:text-base leading-relaxed text-slate-600 ${tableOfContents.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'}`}>
              {children}
            </article>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

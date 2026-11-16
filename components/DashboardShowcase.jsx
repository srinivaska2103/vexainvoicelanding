import DesktopDashboardPreview from './DesktopDashboardPreview';
import MobileDashboardPreview from './MobileDashboardPreview';
import { TrendingUp, Package, ShieldCheck, ArrowUpRight, AlertCircle } from 'lucide-react';

export default function DashboardShowcase() {
  return (
    <div className="relative w-full">
      {/* Background ambient lighting/glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Composition Container */}
      <div className="relative mx-auto max-w-full">
        {/* Floating Insight Card 1: Sales Overview (Top-Left / Top-Right Floating) */}
        <div className="absolute -top-6 -left-3 sm:-left-6 lg:-left-8 z-30 hidden sm:flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-300/40 floating-card-1">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/80 border border-emerald-200/60 text-emerald-600 flex items-center justify-center flex-shrink-0 shadow-xs">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="pr-1 text-left">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Sales Overview</span>
              <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-full border border-emerald-200/50">
                <ArrowUpRight className="w-2.5 h-2.5" /> +28%
              </span>
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">₹42,850.00 Today</div>
          </div>
        </div>

        {/* Floating Insight Card 2: Inventory Management (Top-Right Floating) */}
        <div className="absolute -top-4 -right-2 sm:-right-4 lg:-right-6 z-30 hidden md:flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-xl shadow-slate-300/40 floating-card-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/80 border border-blue-200/60 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-xs">
            <Package className="w-5 h-5" />
          </div>
          <div className="pr-1 text-left">
            <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Inventory Status</div>
            <div className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
              <span>512 SKUs Tracked</span>
              <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-200/60">
                GST Ready
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Dashboard Preview (Primary Visual Window) */}
        <div className="relative z-10 transition-all duration-300 transform lg:hover:scale-[1.008]">
          <DesktopDashboardPreview />
        </div>

        {/* Floating Mobile Preview (Overlapping bottom-right corner of Desktop Dashboard) */}
        <div className="absolute -bottom-8 -right-3 sm:-right-5 lg:-right-7 z-20 hidden sm:block floating-phone drop-shadow-2xl">
          <MobileDashboardPreview />
        </div>

        {/* Mobile-only stacked layout */}
        <div className="sm:hidden mt-6 flex justify-center">
          <div className="w-full max-w-xs">
            <MobileDashboardPreview />
          </div>
        </div>
      </div>
    </div>
  );
}


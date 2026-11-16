'use client';

import { useState } from 'react';
import { 
  ScanBarcode, 
  Plus, 
  FileText, 
  TrendingUp, 
  Package, 
  QrCode, 
  ChevronRight, 
  Layers, 
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Home,
  ReceiptText,
  Boxes,
  MoreHorizontal,
  X,
  Search,
  Check
} from 'lucide-react';

export default function MobileDashboardPreview() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'sales' | 'inventory' | 'more'
  const [activeModal, setActiveModal] = useState(null); // 'create' | 'sales' | 'stock' | null

  return (
    <div className="w-[270px] sm:w-[290px] rounded-[40px] bg-slate-900 p-3 shadow-2xl shadow-blue-900/30 border-4 border-slate-800/90 ring-1 ring-slate-900/20 text-slate-800 select-none relative">
      {/* Phone Speaker & Dynamic Island Top */}
      <div className="flex justify-center mb-2.5">
        <div className="w-24 h-4 bg-slate-800 rounded-full flex items-center justify-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-slate-900" />
          <span className="w-8 h-1.5 bg-slate-700 rounded-full" />
        </div>
      </div>

      {/* Screen Area */}
      <div className="bg-white rounded-[28px] overflow-hidden border border-slate-200/80 flex flex-col min-h-[440px] relative">
        
        {/* Mobile App Header */}
        <div className="bg-gradient-to-r from-blue-700 to-blue-600 text-white p-3.5 pt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-6 h-6 rounded-md bg-white text-blue-600 font-extrabold text-xs flex items-center justify-center shadow-2xs">
                V
              </div>
              <span className="text-xs font-bold tracking-tight">VEXA Mobile</span>
            </div>
            <span className="text-[9px] bg-blue-500/40 text-blue-100 font-semibold px-2 py-0.5 rounded-full border border-blue-400/30">
              Interactive
            </span>
          </div>

          <div className="mt-1">
            <div className="text-[10px] text-blue-200">Today's Revenue</div>
            <div className="text-lg font-extrabold tracking-tight">₹42,850.00</div>
          </div>
        </div>

        {/* Tab 1: Home View */}
        {activeTab === 'home' && (
          <div className="flex-1 flex flex-col justify-between">
            {/* Quick Actions Row */}
            <div className="p-2.5 bg-slate-50 border-b border-slate-100 grid grid-cols-3 gap-1.5 text-center">
              <button suppressHydrationWarning
                type="button"
                onClick={() => setActiveModal('create')}
                className="bg-white p-2 rounded-xl border border-slate-200/70 shadow-2xs hover:border-blue-300 transition-colors"
              >
                <div className="w-7 h-7 mx-auto rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-1">
                  <Plus className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700 block">New Bill</span>
              </button>

              <button suppressHydrationWarning
                type="button"
                onClick={() => setActiveModal('sales')}
                className="bg-white p-2 rounded-xl border border-slate-200/70 shadow-2xs hover:border-emerald-300 transition-colors"
              >
                <div className="w-7 h-7 mx-auto rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1">
                  <ReceiptText className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700 block">View Sales</span>
              </button>

              <button suppressHydrationWarning
                type="button"
                onClick={() => setActiveModal('stock')}
                className="bg-white p-2 rounded-xl border border-slate-200/70 shadow-2xs hover:border-purple-300 transition-colors"
              >
                <div className="w-7 h-7 mx-auto rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center mb-1">
                  <Package className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] font-semibold text-slate-700 block">View Stock</span>
              </button>
            </div>

            {/* Recent Invoices Mini List */}
            <div className="p-3 space-y-2 flex-1">
              <div className="flex items-center justify-between text-[11px] font-bold text-slate-800">
                <span>Recent Transactions</span>
                <span className="text-blue-600 text-[10px]">18 Total</span>
              </div>

              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="truncate pr-1">
                  <div className="text-[11px] font-semibold text-slate-900 truncate">Sri Krishna Garments</div>
                  <div className="text-[9px] text-slate-500 font-mono">INV-00142 • Paid</div>
                </div>
                <span className="text-[11px] font-bold text-slate-900 whitespace-nowrap">₹12,450</span>
              </div>

              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="truncate pr-1">
                  <div className="text-[11px] font-semibold text-slate-900 truncate">POS Retail Counter</div>
                  <div className="text-[9px] text-slate-500 font-mono">POS-00891 • Cash</div>
                </div>
                <span className="text-[11px] font-bold text-slate-900 whitespace-nowrap">₹3,890</span>
              </div>

              <div className="p-2 rounded-lg bg-purple-50/70 border border-purple-100 flex items-center justify-between">
                <div className="truncate pr-1">
                  <div className="text-[11px] font-semibold text-purple-900 truncate">Online Store Order</div>
                  <div className="text-[9px] text-purple-600 font-mono">Ramesh Kumar • New</div>
                </div>
                <span className="text-[11px] font-bold text-purple-800 whitespace-nowrap">₹2,100</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Sales View */}
        {activeTab === 'sales' && (
          <div className="p-3 space-y-2 flex-1 overflow-y-auto">
            <div className="text-[11px] font-bold text-slate-900 flex items-center justify-between">
              <span>Sales Invoices</span>
              <span className="text-[10px] text-slate-500">Today: 18</span>
            </div>
            
            <div className="space-y-1.5 text-xs">
              <div className="p-2 rounded-lg bg-white border border-slate-200">
                <div className="flex justify-between font-semibold text-slate-900 text-[11px]">
                  <span>INV-2026-00142</span>
                  <span className="text-emerald-600 font-bold">₹12,450.00</span>
                </div>
                <div className="text-[9px] text-slate-500">Sri Krishna Garments • HSN 5407</div>
              </div>

              <div className="p-2 rounded-lg bg-white border border-slate-200">
                <div className="flex justify-between font-semibold text-slate-900 text-[11px]">
                  <span>INV-2026-00141</span>
                  <span className="text-emerald-600 font-bold">₹8,990.00</span>
                </div>
                <div className="text-[9px] text-slate-500">Balaji Electronics • Barcoded</div>
              </div>

              <div className="p-2 rounded-lg bg-white border border-slate-200">
                <div className="flex justify-between font-semibold text-slate-900 text-[11px]">
                  <span>INV-2026-00140</span>
                  <span className="text-emerald-600 font-bold">₹4,320.00</span>
                </div>
                <div className="text-[9px] text-slate-500">Apex Hardware Stores</div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Inventory View */}
        {activeTab === 'inventory' && (
          <div className="p-3 space-y-2 flex-1 overflow-y-auto">
            <div className="text-[11px] font-bold text-slate-900 flex items-center justify-between">
              <span>Inventory & Stock</span>
              <span className="text-[10px] text-emerald-600 font-semibold">512 Items</span>
            </div>

            <div className="space-y-1.5 text-xs">
              <div className="p-2 rounded-lg bg-white border border-slate-200">
                <div className="text-[11px] font-semibold text-slate-900">Pure Cotton Kurti Set</div>
                <div className="flex justify-between text-[9px] text-slate-500 mt-0.5">
                  <span className="font-mono">SKU: KRT-COT-01</span>
                  <span className="text-emerald-600 font-bold">24 in stock</span>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-white border border-slate-200">
                <div className="text-[11px] font-semibold text-slate-900">Chanderi Silk Saree</div>
                <div className="flex justify-between text-[9px] text-slate-500 mt-0.5">
                  <span className="font-mono">SKU: SAR-CHN-88</span>
                  <span className="text-emerald-600 font-bold">12 in stock</span>
                </div>
              </div>

              <div className="p-2 rounded-lg bg-amber-50/70 border border-amber-200">
                <div className="text-[11px] font-semibold text-amber-950">Formal Fabric Roll</div>
                <div className="flex justify-between text-[9px] text-amber-800 mt-0.5">
                  <span className="font-mono">SKU: FAB-LIN-04</span>
                  <span className="text-amber-700 font-bold">3 left (Low)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: More View */}
        {activeTab === 'more' && (
          <div className="p-3 space-y-2 flex-1 text-xs">
            <div className="text-[11px] font-bold text-slate-900">Modules & Settings</div>
            <div className="space-y-1">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-700 font-medium">Customer Ledgers</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-700 font-medium">GST & HSN Summary</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-700 font-medium">Online Shop Storefront</span>
                <span className="text-[9px] bg-purple-100 text-purple-700 px-1 rounded font-bold">QR</span>
              </div>
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-700 font-medium">Tax & Bill Settings</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>
          </div>
        )}

        {/* In-Preview Interactive Modal Overlay (Clearly labelled Product Preview) */}
        {activeModal && (
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-2xs p-3 z-30 flex items-center justify-center animate-in fade-in duration-150">
            <div className="bg-white rounded-2xl p-3.5 w-full border border-slate-200 shadow-xl text-slate-800">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2 mb-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-xs font-bold text-slate-900">
                    {activeModal === 'create' && 'Quick Invoice Demo'}
                    {activeModal === 'sales' && 'Sales Summary Demo'}
                    {activeModal === 'stock' && 'Stock Status Demo'}
                  </span>
                </div>
                <button suppressHydrationWarning
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="text-[11px] text-slate-600 space-y-2 mb-3">
                <p>
                  {activeModal === 'create' && 'Create GST invoices, apply customer discounts, and print thermal POS bills instantly in the full app.'}
                  {activeModal === 'sales' && 'Review daily totals, tax collections, and export reports for monthly GST filing.'}
                  {activeModal === 'stock' && 'Track SKU levels, scan barcodes at billing counter, and generate inward stock logs.'}
                </p>
                <div className="p-2 bg-blue-50 border border-blue-100 rounded-lg text-blue-900 text-[10px] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-blue-600 flex-shrink-0" />
                  <span>Interactive product preview — no data modified.</span>
                </div>
              </div>

              <button suppressHydrationWarning
                type="button"
                onClick={() => setActiveModal(null)}
                className="w-full py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                Close Preview
              </button>
            </div>
          </div>
        )}

        {/* Interactive Bottom Navigation Tabs */}
        <div className="bg-white border-t border-slate-200 grid grid-cols-4 py-1.5 text-center text-[10px]">
          <button suppressHydrationWarning
            type="button"
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === 'home' ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Home className="w-4 h-4 mb-0.5" />
            <span>Home</span>
          </button>

          <button suppressHydrationWarning
            type="button"
            onClick={() => setActiveTab('sales')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === 'sales' ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <ReceiptText className="w-4 h-4 mb-0.5" />
            <span>Sales</span>
          </button>

          <button suppressHydrationWarning
            type="button"
            onClick={() => setActiveTab('inventory')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === 'inventory' ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <Boxes className="w-4 h-4 mb-0.5" />
            <span>Stock</span>
          </button>

          <button suppressHydrationWarning
            type="button"
            onClick={() => setActiveTab('more')}
            className={`flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === 'more' ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            <MoreHorizontal className="w-4 h-4 mb-0.5" />
            <span>More</span>
          </button>
        </div>

        {/* Bottom home bar indicator */}
        <div className="p-1 bg-slate-50 border-t border-slate-100 text-center">
          <div className="w-20 h-1 bg-slate-300 rounded-full mx-auto" />
        </div>
      </div>
    </div>
  );
}

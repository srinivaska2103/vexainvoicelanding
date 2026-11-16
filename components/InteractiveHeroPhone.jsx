'use client';

import { useState } from 'react';
import { 
  BarChart3, 
  IndianRupee, 
  Package, 
  UsersRound, 
  Layers, 
  CircleCheck,
  Search,
  Barcode,
  ArrowUpRight,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Sparkles,
  ShieldCheck,
  Plus,
  Check,
  ArrowRight
} from 'lucide-react';

export default function InteractiveHeroPhone({ activeModule, onSelectModule }) {
  // Local interaction states within the phone
  const [productSearch, setProductSearch] = useState('');
  const [customerSearch, setCustomerSearch] = useState('');
  const [selectedCustomer, setSelectedCustomer] = useState('Sri Krishna Garments');
  const [invoiceCreated, setInvoiceCreated] = useState(false);
  const [activeChartBar, setActiveChartBar] = useState(5); // 0-5
  const [stockFilter, setStockFilter] = useState('all'); // 'all' | 'low'

  const chartData = [
    { time: '10 AM', height: '35%', sales: '₹14,200', bills: 4 },
    { time: '12 PM', height: '60%', sales: '₹28,500', bills: 7 },
    { time: '2 PM', height: '25%', sales: '₹9,800', bills: 2 },
    { time: '4 PM', height: '85%', sales: '₹41,200', bills: 9 },
    { time: '6 PM', height: '70%', sales: '₹32,500', bills: 6 },
    { time: '8 PM', height: '95%', sales: '₹48,900', bills: 11 },
  ];

  const handleCreateInvoice = () => {
    setInvoiceCreated(true);
    setTimeout(() => {
      setInvoiceCreated(false);
    }, 2000);
  };

  const moduleMeta = {
    dashboard: {
      name: 'Dashboard',
      icon: BarChart3,
      badge: 'Live Sync',
    },
    sales: {
      name: 'Sales',
      icon: IndianRupee,
      badge: 'Live Sync',
    },
    products: {
      name: 'Products',
      icon: Package,
      badge: 'Live Sync',
    },
    customers: {
      name: 'Customers',
      icon: UsersRound,
      badge: 'Live Sync',
    },
    stock: {
      name: 'Stock',
      icon: Layers,
      badge: 'Live Sync',
    },
    payments: {
      name: 'Payments',
      icon: CircleCheck,
      badge: 'Live Sync',
    },
  };

  const currentMeta = moduleMeta[activeModule] || moduleMeta.dashboard;
  const ActiveIcon = currentMeta.icon;

  const navItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dash' },
    { id: 'sales', icon: IndianRupee, label: 'Sales' },
    { id: 'products', icon: Package, label: 'Items' },
    { id: 'customers', icon: UsersRound, label: 'Clients' },
    { id: 'stock', icon: Layers, label: 'Stock' },
    { id: 'payments', icon: CircleCheck, label: 'Pay' },
  ];

  return (
    <div className="relative flex justify-center items-center w-full select-none floating-phone">
      {/* Outer Phone Ambient Shadow / Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-80 h-[520px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Realistic Smartphone Shell */}
      <div className="relative z-10 w-[295px] sm:w-[325px] md:w-[340px] rounded-[50px] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 p-[10px] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4),0_0_0_1px_rgba(255,255,255,0.1)_inset] ring-1 ring-slate-950/80">
        
        {/* Hardware side buttons (Volume + Power) */}
        <div className="absolute -left-[13px] top-[105px] w-[3px] h-[32px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[13px] top-[147px] w-[3px] h-[52px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[13px] top-[207px] w-[3px] h-[52px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -right-[13px] top-[140px] w-[3px] h-[70px] bg-slate-700 rounded-r-sm" />

        {/* Screen Bezel & Container */}
        <div className="bg-[#f8fafc] rounded-[40px] overflow-hidden border border-slate-900/40 flex flex-col h-[570px] relative text-left shadow-inner">
          
          {/* Dynamic Island Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
            <div className="w-[100px] h-[22px] bg-black rounded-full flex items-center justify-between px-3 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-950 ring-1 ring-slate-800 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-indigo-950/80" />
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
            </div>
          </div>

          {/* Status Bar */}
          <div className="pt-2 px-6 pb-1 bg-white text-slate-800 flex items-center justify-between text-[11px] font-semibold flex-shrink-0 z-20">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span>5G</span>
              <div className="w-4 h-2 border border-slate-700 rounded-[2px] p-[1px] flex items-center">
                <div className="w-2.5 h-full bg-slate-800 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* Top Phone Header: Brand + LIVE ANALYTICS */}
          <div className="bg-white px-4 py-2.5 border-b border-slate-200/70 flex items-center justify-between flex-shrink-0 z-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-xs">
                VX
              </div>
              <span className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight">
                VEXA Mobile
              </span>
            </div>

            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded-md tracking-wider">
              LIVE ANALYTICS
            </span>
          </div>

          {/* Active Module Header Card (Matches reference screenshot) */}
          <div className="p-3 pb-2 flex-shrink-0">
            <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block">
                  ACTIVE MODULE
                </span>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <ActiveIcon className="w-3.5 h-3.5 text-blue-600 stroke-[2.5]" />
                  <span className="text-sm font-extrabold text-slate-900 tracking-tight">
                    {currentMeta.name}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{currentMeta.badge}</span>
              </div>
            </div>
          </div>

          {/* Scrollable / Transition Screen Content */}
          <div className="px-3 pb-3 flex-1 overflow-y-auto no-scrollbar space-y-2.5">
            
            {/* MODULE A: DASHBOARD */}
            {activeModule === 'dashboard' && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                {/* 2 Top Metric Cards */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-xs text-center">
                    <span className="text-[9px] font-semibold text-slate-500 block mb-0.5">
                      Sales Today
                    </span>
                    <span className="text-xs font-black text-blue-600 tracking-tight block">
                      ₹1,48,200.00
                    </span>
                  </div>

                  <div className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-xs text-center">
                    <span className="text-[9px] font-semibold text-slate-500 block mb-0.5">
                      Billed Invoices
                    </span>
                    <span className="text-xs font-black text-slate-900 tracking-tight block">
                      24 Bills
                    </span>
                  </div>
                </div>

                {/* Hourly Sales Activity Chart (Matches reference design) */}
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      HOURLY SALES ACTIVITY
                    </span>
                    <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-md border border-emerald-200/50">
                      +18.4%
                    </span>
                  </div>

                  {/* Visual Interactive Bar Chart */}
                  <div className="h-20 flex items-end justify-between gap-1.5 pt-2 pb-1 px-1">
                    {chartData.map((bar, idx) => (
                      <button suppressHydrationWarning
                        key={idx}
                        type="button"
                        onClick={() => setActiveChartBar(idx)}
                        className={`w-full rounded-sm transition-all cursor-pointer ${
                          activeChartBar === idx 
                            ? 'bg-blue-600 ring-2 ring-blue-400/40' 
                            : 'bg-blue-200/90 hover:bg-blue-400'
                        }`}
                        style={{ height: bar.height }}
                        title={`${bar.time}: ${bar.sales}`}
                      />
                    ))}
                  </div>

                  <div className="flex justify-between text-[8px] text-slate-400 font-semibold px-0.5 mt-1">
                    {chartData.map((bar, idx) => (
                      <span key={idx} className={activeChartBar === idx ? 'text-blue-600 font-bold' : ''}>
                        {bar.time}
                      </span>
                    ))}
                  </div>

                  {/* Active chart bar tooltip */}
                  <div className="mt-2 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[9px]">
                    <span className="text-slate-500 font-medium">
                      Selected: <strong className="text-slate-800">{chartData[activeChartBar].time}</strong>
                    </span>
                    <span className="font-extrabold text-blue-600">
                      {chartData[activeChartBar].sales} ({chartData[activeChartBar].bills} bills)
                    </span>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      RECENT ACTIVITY
                    </span>
                    <span className="text-[8px] text-slate-400 font-medium">Demo Data</span>
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between py-1 border-b border-slate-100 text-[10px]">
                      <div>
                        <div className="font-bold text-slate-800">INV-2026-089</div>
                        <div className="text-[8px] text-slate-400">Sri Krishna Garments • POS</div>
                      </div>
                      <span className="font-extrabold text-slate-900">₹4,250.00</span>
                    </div>

                    <div className="flex items-center justify-between py-1 text-[10px]">
                      <div>
                        <div className="font-bold text-slate-800">INV-2026-088</div>
                        <div className="text-[8px] text-slate-400">Balaji Retail Store • GST</div>
                      </div>
                      <span className="font-extrabold text-slate-900">₹8,920.00</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODULE B: SALES */}
            {activeModule === 'sales' && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold text-slate-900">New Invoice Setup</span>
                    <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                      Tax Invoice
                    </span>
                  </div>

                  <div className="space-y-2 text-[10px]">
                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200/70">
                      <div className="text-[8px] uppercase font-bold text-slate-400">Invoice Series</div>
                      <div className="font-bold text-slate-800">INV-2026-0092</div>
                    </div>

                    <div className="bg-slate-50 p-2 rounded-lg border border-slate-200/70">
                      <div className="text-[8px] uppercase font-bold text-slate-400">Customer Selection</div>
                      <div className="font-bold text-slate-800 flex items-center justify-between">
                        <span>{selectedCustomer}</span>
                        <span className="text-[9px] text-emerald-600 font-semibold">Verified GST</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs text-[10px]">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    SELECTED ITEMS (2)
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between py-1 border-b border-slate-100">
                      <div>
                        <div className="font-semibold text-slate-800">Cotton Shirt L (x2)</div>
                        <div className="text-[8px] text-slate-400">SKU-001 • 5% GST</div>
                      </div>
                      <span className="font-bold text-slate-900">₹1,798.00</span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <div>
                        <div className="font-semibold text-slate-800">Denim Jeans 32 (x1)</div>
                        <div className="text-[8px] text-slate-400">SKU-002 • 12% GST</div>
                      </div>
                      <span className="font-bold text-slate-900">₹1,499.00</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-200 flex items-center justify-between font-black text-xs text-slate-900">
                    <span>Invoice Total</span>
                    <span className="text-blue-600">₹3,297.00</span>
                  </div>

                  {invoiceCreated ? (
                    <div className="w-full mt-2.5 py-2 bg-emerald-600 text-white font-bold rounded-xl text-center shadow-xs flex items-center justify-center gap-1.5 animate-in zoom-in-95 duration-150">
                      <Check className="w-4 h-4 stroke-[3]" />
                      <span>Invoice Created & Printed!</span>
                    </div>
                  ) : (
                    <button suppressHydrationWarning 
                      type="button"
                      onClick={handleCreateInvoice}
                      className="w-full mt-2.5 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold rounded-xl text-center shadow-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer active:scale-95"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Create & Print Invoice</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* MODULE C: PRODUCTS */}
            {activeModule === 'products' && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                {/* Search Bar Preview */}
                <div className="bg-white rounded-xl p-2 border border-slate-200/80 shadow-xs flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-slate-400 ml-1" />
                  <input suppressHydrationWarning
                    type="text"
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    placeholder="Search catalog or SKU..."
                    className="text-[10px] text-slate-800 placeholder:text-slate-400 bg-transparent outline-none flex-1 w-full"
                  />
                  {productSearch && (
                    <button suppressHydrationWarning type="button" onClick={() => setProductSearch('')} className="text-[10px] text-slate-400 font-bold px-1">✕</button>
                  )}
                  <Barcode className="w-4 h-4 text-blue-600 mr-1 flex-shrink-0" />
                </div>

                {/* Product List */}
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs text-[10px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      CATALOGUE ITEMS
                    </span>
                    <span className="text-[9px] font-bold text-blue-600">512 SKUs</span>
                  </div>

                  <div className="space-y-2">
                    {(!productSearch || 'casual linen shirt sku-001'.includes(productSearch.toLowerCase())) && (
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:border-blue-300 transition-colors cursor-pointer">
                        <div>
                          <div className="font-bold text-slate-800">Casual Linen Shirt</div>
                          <div className="text-[8px] text-slate-400 font-mono">SKU-001 • Barcode: 890123</div>
                        </div>
                        <div className="text-right">
                          <div className="font-extrabold text-blue-600">₹899.00</div>
                          <span className="text-[8px] text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded font-semibold">
                            48 in Stock
                          </span>
                        </div>
                      </div>
                    )}

                    {(!productSearch || 'pure cotton trousers sku-002'.includes(productSearch.toLowerCase())) && (
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:border-blue-300 transition-colors cursor-pointer">
                        <div>
                          <div className="font-bold text-slate-800">Pure Cotton Trousers</div>
                          <div className="text-[8px] text-slate-400 font-mono">SKU-002 • Barcode: 890124</div>
                        </div>
                        <div className="text-right">
                          <div className="font-extrabold text-blue-600">₹1,499.00</div>
                          <span className="text-[8px] text-emerald-700 bg-emerald-100/70 px-1.5 py-0.2 rounded font-semibold">
                            24 in Stock
                          </span>
                        </div>
                      </div>
                    )}

                    {(!productSearch || 'printed silk stole sku-004'.includes(productSearch.toLowerCase())) && (
                      <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between hover:border-blue-300 transition-colors cursor-pointer">
                        <div>
                          <div className="font-bold text-slate-800">Printed Silk Stole</div>
                          <div className="text-[8px] text-slate-400 font-mono">SKU-004 • Barcode: 890126</div>
                        </div>
                        <div className="text-right">
                          <div className="font-extrabold text-blue-600">₹450.00</div>
                          <span className="text-[8px] text-amber-700 bg-amber-100/70 px-1.5 py-0.2 rounded font-semibold">
                            4 Left (Low)
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* MODULE D: CUSTOMERS */}
            {activeModule === 'customers' && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                <div className="bg-white rounded-xl p-2 border border-slate-200/80 shadow-xs flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-slate-400 ml-1" />
                  <input suppressHydrationWarning
                    type="text"
                    value={customerSearch}
                    onChange={(e) => setCustomerSearch(e.target.value)}
                    placeholder="Search customer or phone..."
                    className="text-[10px] text-slate-800 placeholder:text-slate-400 bg-transparent outline-none flex-1 w-full"
                  />
                  {customerSearch && (
                    <button suppressHydrationWarning type="button" onClick={() => setCustomerSearch('')} className="text-[10px] text-slate-400 font-bold px-1">✕</button>
                  )}
                </div>

                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs text-[10px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      CUSTOMER LEDGER DIRECTORY
                    </span>
                    <span className="text-[9px] font-bold text-blue-600">284 Accounts</span>
                  </div>

                  <div className="space-y-2">
                    {(!customerSearch || 'sri krishna garments wholesale 98765'.includes(customerSearch.toLowerCase())) && (
                      <div 
                        onClick={() => setSelectedCustomer('Sri Krishna Garments')}
                        className={`p-2 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          selectedCustomer === 'Sri Krishna Garments'
                            ? 'bg-blue-50/70 border-blue-400 shadow-2xs'
                            : 'bg-slate-50 border-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-slate-800 flex items-center gap-1">
                            <span>Sri Krishna Garments</span>
                            {selectedCustomer === 'Sri Krishna Garments' && (
                              <Check className="w-3 h-3 text-blue-600 stroke-[3]" />
                            )}
                          </div>
                          <div className="text-[8px] text-slate-400">+91 98765 43210 • Wholesale</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[8px] text-slate-400">Outstanding</div>
                          <div className="font-extrabold text-emerald-600">₹0.00 (Cleared)</div>
                        </div>
                      </div>
                    )}

                    {(!customerSearch || 'balaji retail store retail pos 94432'.includes(customerSearch.toLowerCase())) && (
                      <div 
                        onClick={() => setSelectedCustomer('Balaji Retail Store')}
                        className={`p-2 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          selectedCustomer === 'Balaji Retail Store'
                            ? 'bg-blue-50/70 border-blue-400 shadow-2xs'
                            : 'bg-slate-50 border-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-slate-800 flex items-center gap-1">
                            <span>Balaji Retail Store</span>
                            {selectedCustomer === 'Balaji Retail Store' && (
                              <Check className="w-3 h-3 text-blue-600 stroke-[3]" />
                            )}
                          </div>
                          <div className="text-[8px] text-slate-400">+91 94432 10987 • Retail POS</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[8px] text-slate-400">Outstanding</div>
                          <div className="font-extrabold text-amber-600">₹2,450.00 Due</div>
                        </div>
                      </div>
                    )}

                    {(!customerSearch || 'ramesh textiles credit 99123'.includes(customerSearch.toLowerCase())) && (
                      <div 
                        onClick={() => setSelectedCustomer('Ramesh Textiles')}
                        className={`p-2 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          selectedCustomer === 'Ramesh Textiles'
                            ? 'bg-blue-50/70 border-blue-400 shadow-2xs'
                            : 'bg-slate-50 border-slate-100 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <div className="font-bold text-slate-800 flex items-center gap-1">
                            <span>Ramesh Textiles</span>
                            {selectedCustomer === 'Ramesh Textiles' && (
                              <Check className="w-3 h-3 text-blue-600 stroke-[3]" />
                            )}
                          </div>
                          <div className="text-[8px] text-slate-400">+91 99123 45678 • Credit</div>
                        </div>
                        <div className="text-right">
                          <div className="text-[8px] text-slate-400">Outstanding</div>
                          <div className="font-extrabold text-rose-600">₹8,900.00 Due</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* MODULE E: STOCK */}
            {activeModule === 'stock' && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-xs text-center">
                    <span className="text-[9px] font-semibold text-slate-500 block">Total Items</span>
                    <span className="text-xs font-black text-slate-900 block mt-0.5">512 SKUs</span>
                  </div>
                  <div className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-xs text-center">
                    <span className="text-[9px] font-semibold text-slate-500 block">Low Stock Alerts</span>
                    <span className="text-xs font-black text-amber-600 block mt-0.5">3 Critical</span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs text-[10px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      REAL-TIME INVENTORY AUDIT
                    </span>
                    <span className="text-[9px] text-emerald-600 font-bold">Auto-Deducted</span>
                  </div>

                  <div className="space-y-2">
                    <div className="p-2 rounded-xl bg-rose-50/60 border border-rose-200/60 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900">Pure Linen Kurti S</div>
                        <div className="text-[8px] text-slate-400 font-mono">SKU-003 • Min Level: 10</div>
                      </div>
                      <span className="text-[9px] font-extrabold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                        2 Left
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900">Cotton Casual Shirt M</div>
                        <div className="text-[8px] text-slate-400 font-mono">SKU-001 • Inward Batch #22</div>
                      </div>
                      <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        48 Units
                      </span>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900">Denim Slim Trousers 34</div>
                        <div className="text-[8px] text-slate-400 font-mono">SKU-002 • Inward Batch #19</div>
                      </div>
                      <span className="text-[9px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                        24 Units
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* MODULE F: PAYMENTS */}
            {activeModule === 'payments' && (
              <div className="space-y-2.5 animate-in fade-in duration-200">
                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs">
                  <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    TODAY'S COLLECTIONS
                  </span>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-black text-slate-900">₹42,850.00</div>
                      <div className="text-[8px] text-slate-400">18 Reconciled Transactions</div>
                    </div>
                    <span className="text-[9px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                      Reconciled
                    </span>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3 border border-slate-200/80 shadow-xs text-[10px]">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    RECENT PAYMENT RECEIPTS
                  </div>

                  <div className="space-y-2">
                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-800">UPI / QR Payment</div>
                        <div className="text-[8px] text-slate-400">Txn: UPI-84930 • 12:42 PM</div>
                      </div>
                      <div className="text-right">
                        <div className="font-extrabold text-emerald-600">+₹1,450.00</div>
                        <span className="text-[8px] text-emerald-700 bg-emerald-100 px-1 rounded">Paid</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-800">Cash Counter Collection</div>
                        <div className="text-[8px] text-slate-400">Register #1 • 11:15 AM</div>
                      </div>
                      <div className="text-right">
                        <div className="font-extrabold text-emerald-600">+₹3,200.00</div>
                        <span className="text-[8px] text-emerald-700 bg-emerald-100 px-1 rounded">Settled</span>
                      </div>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-800">Bank NEFT Transfer</div>
                        <div className="text-[8px] text-slate-400">Wholesale Invoice • 10:05 AM</div>
                      </div>
                      <div className="text-right">
                        <div className="font-extrabold text-emerald-600">+₹12,450.00</div>
                        <span className="text-[8px] text-emerald-700 bg-emerald-100 px-1 rounded">Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom App Navigation Bar (Matches reference screenshot) */}
          <div className="bg-white border-t border-slate-200/80 px-2 py-2 flex items-center justify-around flex-shrink-0">
            {navItems.map((item) => {
              const ItemIcon = item.icon;
              const isActive = activeModule === item.id;

              return (
                <button suppressHydrationWarning
                  key={item.id}
                  type="button"
                  onClick={() => onSelectModule(item.id)}
                  aria-label={item.label}
                  className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs scale-105'
                      : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <ItemIcon className="w-4 h-4 stroke-[2.2]" />
                </button>
              );
            })}
          </div>

          {/* iPhone Home Swipe Indicator */}
          <div className="pt-1.5 pb-2 bg-white flex justify-center flex-shrink-0">
            <div className="w-28 h-1 bg-slate-300 rounded-full" />
          </div>

        </div>
      </div>
    </div>
  );
}

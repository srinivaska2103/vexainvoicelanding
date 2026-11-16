'use client';

import { useState } from 'react';
import { 
  Plus, 
  ReceiptText, 
  Package, 
  Users2, 
  BarChart3, 
  ArrowLeft, 
  Search, 
  CheckCircle2, 
  Sparkles,
  TrendingUp,
  ArrowUpRight,
  ChevronRight,
  Filter,
  ScanBarcode,
  ShoppingBag,
  Bell,
  Clock,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

export default function MobileHeroShowcase() {
  // Screen views: 'dashboard' | 'new-sale' | 'products' | 'customers' | 'reports'
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  
  // Interactive state inside screens
  const [saleCustomer, setSaleCustomer] = useState('Sri Krishna Garments');
  const [saleAmount, setSaleAmount] = useState('₹1,450.00');
  const [saleSuccess, setSaleSuccess] = useState(false);
  const [productSearch, setProductSearch] = useState('');
  const [customerSearch, setCustomerSearch] = useState('');

  const demoProducts = [
    { id: 'SKU-001', name: 'Cotton Casual Shirt', price: '₹899.00', stock: 48, status: 'In Stock' },
    { id: 'SKU-002', name: 'Denim Slim Trousers', price: '₹1,499.00', stock: 24, status: 'In Stock' },
    { id: 'SKU-003', name: 'Pure Linen Kurti', price: '₹1,150.00', stock: 6, status: 'Low Stock' },
    { id: 'SKU-004', name: 'Printed Silk Scarf', price: '₹450.00', stock: 82, status: 'In Stock' },
  ];

  const demoCustomers = [
    { name: 'Sri Krishna Garments', phone: '+91 98765 *****', type: 'Wholesale', dues: '₹0.00' },
    { name: 'Balaji Retail Store', phone: '+91 94432 *****', type: 'Retail POS', dues: '₹2,450.00' },
    { name: 'Ramesh Textiles', phone: '+91 99123 *****', type: 'Credit Account', dues: '₹8,900.00' },
    { name: 'City Fashion Hub', phone: '+91 98840 *****', type: 'Regular Buyer', dues: '₹0.00' },
  ];

  const handleCreateDemoSale = () => {
    setSaleSuccess(true);
    setTimeout(() => {
      setSaleSuccess(false);
      setCurrentScreen('dashboard');
    }, 1400);
  };

  return (
    <div className="relative flex justify-center items-center py-4 w-full">
      {/* Background ambient lighting/glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-96 sm:w-96 sm:h-[480px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/15 to-blue-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Smartphone Mockup with CSS gentle vertical float */}
      <div className="relative z-10 floating-phone w-[310px] sm:w-[340px] md:w-[350px] transition-all duration-300">
        
        {/* Outer Phone Frame */}
        <div className="rounded-[44px] bg-slate-950 p-3 sm:p-3.5 shadow-2xl shadow-blue-900/30 border-4 border-slate-850 ring-1 ring-slate-800/80 text-slate-800 select-none">
          
          {/* Top Notch / Dynamic Island */}
          <div className="flex justify-center mb-2.5">
            <div className="w-28 h-4 bg-slate-900 rounded-full flex items-center justify-between px-3">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-950 flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-blue-900/60" />
              </span>
              <span className="w-8 h-1 bg-slate-800 rounded-full" />
              <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
            </div>
          </div>

          {/* Phone Screen Container */}
          <div className="bg-slate-50 rounded-[32px] overflow-hidden border border-slate-200/90 flex flex-col min-h-[540px] max-h-[580px] relative text-left shadow-inner">
            
            {/* Top In-App Status & Header */}
            <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white p-4 pt-3.5 shadow-sm flex-shrink-0">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-lg bg-white text-blue-600 font-black text-xs flex items-center justify-center shadow-xs">
                    V
                  </div>
                  <div>
                    <span className="text-xs font-black tracking-tight block leading-tight">VEXA Mobile</span>
                    <span className="text-[9px] text-blue-200 font-medium">Smart Retail Suite</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <span className="text-[9px] bg-white/20 text-white font-semibold px-2 py-0.5 rounded-full backdrop-blur-xs border border-white/25">
                    Demo Mode
                  </span>
                </div>
              </div>

              {/* Navigation Back Bar if on subscreen */}
              {currentScreen !== 'dashboard' ? (
                <div className="flex items-center justify-between pt-1 animate-in fade-in duration-200">
                  <button suppressHydrationWarning
                    type="button"
                    onClick={() => setCurrentScreen('dashboard')}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-white/20 hover:bg-white/30 px-2.5 py-1 rounded-lg transition-all active:scale-95"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back to Home</span>
                  </button>
                  <span className="text-xs font-extrabold capitalize text-blue-100">
                    {currentScreen.replace('-', ' ')}
                  </span>
                </div>
              ) : (
                <div className="pt-0.5">
                  <div className="flex items-center justify-between text-[11px] text-blue-200">
                    <span>Today's Total Sales</span>
                    <span className="flex items-center gap-1 text-emerald-300 font-bold text-[10px]">
                      <ArrowUpRight className="w-3 h-3" /> +24%
                    </span>
                  </div>
                  <div className="text-2xl font-black tracking-tight text-white mt-0.5">₹42,850.00</div>
                  <div className="text-[10px] text-blue-100/90 mt-0.5 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-300" />
                    <span>18 Invoices reconciled & GST ready</span>
                  </div>
                </div>
              )}
            </div>

            {/* SCREEN 1: MAIN DASHBOARD */}
            {currentScreen === 'dashboard' && (
              <div className="flex-1 overflow-y-auto p-3.5 space-y-3.5 animate-in fade-in duration-200">
                
                {/* 4 Interactive Quick Actions */}
                <div>
                  <div className="text-[11px] font-bold text-slate-800 mb-2 flex items-center justify-between">
                    <span>Quick Actions</span>
                    <span className="text-[9px] text-blue-600 font-semibold">Tap to preview</span>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    <button suppressHydrationWarning
                      type="button"
                      onClick={() => setCurrentScreen('new-sale')}
                      className="p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-400 hover:shadow-xs transition-all active:scale-95 flex flex-col items-center group text-center"
                    >
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-1.5 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Plus className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 block leading-tight">New Sale</span>
                    </button>

                    <button suppressHydrationWarning
                      type="button"
                      onClick={() => setCurrentScreen('products')}
                      className="p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-emerald-400 hover:shadow-xs transition-all active:scale-95 flex flex-col items-center group text-center"
                    >
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1.5 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <Package className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 block leading-tight">Products</span>
                    </button>

                    <button suppressHydrationWarning
                      type="button"
                      onClick={() => setCurrentScreen('customers')}
                      className="p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-purple-400 hover:shadow-xs transition-all active:scale-95 flex flex-col items-center group text-center"
                    >
                      <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-1.5 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                        <Users2 className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 block leading-tight">Customers</span>
                    </button>

                    <button suppressHydrationWarning
                      type="button"
                      onClick={() => setCurrentScreen('reports')}
                      className="p-2.5 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:border-indigo-400 hover:shadow-xs transition-all active:scale-95 flex flex-col items-center group text-center"
                    >
                      <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-1.5 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] font-bold text-slate-700 block leading-tight">Reports</span>
                    </button>
                  </div>
                </div>

                {/* Inventory Overview Card */}
                <div 
                  onClick={() => setCurrentScreen('products')}
                  className="p-3 bg-white rounded-2xl border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors cursor-pointer"
                >
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-900 mb-1.5">
                    <span className="flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-blue-600" />
                      <span>Inventory Overview</span>
                    </span>
                    <span className="text-[10px] text-blue-600 font-bold flex items-center gap-0.5">
                      View all <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-50 p-2 rounded-xl">
                      <div className="text-[10px] text-slate-500">Active Items</div>
                      <div className="text-sm font-extrabold text-slate-900">512 Items</div>
                    </div>
                    <div className="bg-amber-50/70 p-2 rounded-xl border border-amber-200/50">
                      <div className="text-[10px] text-amber-700 font-semibold">Low Stock Alerts</div>
                      <div className="text-sm font-extrabold text-amber-900">3 SKUs</div>
                    </div>
                  </div>
                </div>

                {/* Recent Sales Activity Mini-List */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-800">
                    <span>Recent Sales Activity</span>
                    <span className="text-[10px] text-slate-500 font-normal">Today</span>
                  </div>

                  <div 
                    onClick={() => setCurrentScreen('new-sale')}
                    className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between hover:bg-blue-50/40 cursor-pointer transition-colors"
                  >
                    <div className="truncate pr-2">
                      <div className="text-xs font-bold text-slate-900 truncate">Sri Krishna Garments</div>
                      <div className="text-[10px] text-slate-500 font-mono">INV-00142 • Tax Invoice</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs font-black text-slate-900">₹12,450</div>
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Paid
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs flex items-center justify-between hover:bg-blue-50/40 cursor-pointer transition-colors">
                    <div className="truncate pr-2">
                      <div className="text-xs font-bold text-slate-900 truncate">Counter POS Retail</div>
                      <div className="text-[10px] text-slate-500 font-mono">POS-00891 • Barcode Gun</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs font-black text-slate-900">₹3,890</div>
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        Cash
                      </span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-purple-50/70 border border-purple-200/80 shadow-2xs flex items-center justify-between hover:bg-purple-100/50 cursor-pointer transition-colors">
                    <div className="truncate pr-2">
                      <div className="text-xs font-bold text-purple-950 truncate">Online Store Order (#104)</div>
                      <div className="text-[10px] text-purple-700 font-mono">QR Catalogue • Ready</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs font-black text-purple-900">₹2,100</div>
                      <span className="text-[9px] font-bold px-1.5 py-0.2 rounded bg-purple-100 text-purple-800">
                        Online
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* SCREEN 2: NEW SALE PREVIEW */}
            {currentScreen === 'new-sale' && (
              <div className="flex-1 overflow-y-auto p-3.5 space-y-3 animate-in slide-in-from-right duration-200">
                <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[11px] text-blue-800 font-medium">
                  <strong>Simulated POS Screen:</strong> Create quick retail receipts or B2B GST tax invoices.
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-700 block">Select Customer</label>
                  <select suppressHydrationWarning 
                    value={saleCustomer}
                    onChange={(e) => setSaleCustomer(e.target.value)}
                    className="w-full text-xs bg-white border border-slate-300 rounded-xl px-3 py-2 text-slate-800 font-medium focus:ring-1 focus:ring-blue-500"
                  >
                    <option>Sri Krishna Garments (Wholesale)</option>
                    <option>Balaji Retail Store (Counter)</option>
                    <option>Counter Walk-In Cash Sale</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-slate-700 block">Items in Bill</label>
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-xs space-y-1.5">
                    <div className="flex justify-between font-semibold text-slate-900">
                      <span>Pure Linen Kurti x 1</span>
                      <span>₹1,150.00</span>
                    </div>
                    <div className="flex justify-between text-slate-500 text-[10px]">
                      <span>GST (5% HSN 5407)</span>
                      <span>₹57.50</span>
                    </div>
                    <div className="border-t border-slate-100 pt-1 flex justify-between font-extrabold text-slate-900">
                      <span>Total Net Payable</span>
                      <span className="text-blue-600">₹1,207.50</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  {saleSuccess ? (
                    <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs font-bold text-emerald-700 animate-in fade-in">
                      ✓ Demo Invoice Created & WhatsApp PDF Sent!
                    </div>
                  ) : (
                    <button suppressHydrationWarning
                      type="button"
                      onClick={handleCreateDemoSale}
                      className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Generate Sample Invoice</span>
                    </button>
                  )}
                </div>
              </div>
            )}

            {/* SCREEN 3: PRODUCTS PREVIEW */}
            {currentScreen === 'products' && (
              <div className="flex-1 overflow-y-auto p-3.5 space-y-3 animate-in slide-in-from-right duration-200">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input suppressHydrationWarning
                    type="text"
                    value={productSearch}
                    onChange={(e) => setProductSearch(e.target.value)}
                    placeholder="Search 512 SKUs..."
                    className="w-full text-xs bg-white border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  {demoProducts
                    .filter(p => p.name.toLowerCase().includes(productSearch.toLowerCase()))
                    .map(item => (
                      <div key={item.id} className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-slate-900">{item.name}</div>
                          <div className="text-[10px] text-slate-500 font-mono">{item.id} • {item.stock} in stock</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-black text-slate-900">{item.price}</div>
                          <span className={`text-[9px] font-semibold px-1.5 py-0.2 rounded ${item.status === 'Low Stock' ? 'bg-amber-100 text-amber-800' : 'bg-emerald-50 text-emerald-700'}`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* SCREEN 4: CUSTOMERS PREVIEW */}
            {currentScreen === 'customers' && (
              <div className="flex-1 overflow-y-auto p-3.5 space-y-3 animate-in slide-in-from-right duration-200">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input suppressHydrationWarning
                    type="text"
                    value={customerSearch}
                    onChange={(e) => setCustomerSearch(e.target.value)}
                    placeholder="Search customer directory..."
                    className="w-full text-xs bg-white border border-slate-200 rounded-xl pl-8 pr-3 py-1.5 text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  {demoCustomers
                    .filter(c => c.name.toLowerCase().includes(customerSearch.toLowerCase()))
                    .map((c, i) => (
                      <div key={i} className="p-2.5 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold text-slate-900">{c.name}</div>
                          <div className="text-[10px] text-slate-500">{c.type} • {c.phone}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-bold text-slate-900">
                            {c.dues === '₹0.00' ? (
                              <span className="text-emerald-600 font-semibold text-[10px]">Settled</span>
                            ) : (
                              <span className="text-rose-600 font-extrabold">{c.dues}</span>
                            )}
                          </div>
                          <span className="text-[9px] text-slate-400">Ledger</span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* SCREEN 5: REPORTS PREVIEW */}
            {currentScreen === 'reports' && (
              <div className="flex-1 overflow-y-auto p-3.5 space-y-3 animate-in slide-in-from-right duration-200">
                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900 flex items-center justify-between">
                    <span>GST & Tax Breakdown</span>
                    <span className="text-[10px] text-blue-600 font-bold">Monthly</span>
                  </div>
                  <div className="flex justify-between text-xs py-1 border-b border-slate-100">
                    <span className="text-slate-600">CGST (9%)</span>
                    <span className="font-bold text-slate-900">₹3,856.50</span>
                  </div>
                  <div className="flex justify-between text-xs py-1 border-b border-slate-100">
                    <span className="text-slate-600">SGST (9%)</span>
                    <span className="font-bold text-slate-900">₹3,856.50</span>
                  </div>
                  <div className="flex justify-between text-xs pt-1 font-extrabold text-blue-700">
                    <span>Total Tax Collected</span>
                    <span>₹7,713.00</span>
                  </div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-slate-200 space-y-2">
                  <div className="text-xs font-bold text-slate-900">Profit & Margins Summary</div>
                  <div className="text-xs text-slate-600 leading-relaxed">
                    Gross revenue: <strong>₹1,42,850.00</strong> with average gross margin of <strong>34.2%</strong> across clothing & textile SKUs.
                  </div>
                </div>
              </div>
            )}

            {/* Bottom App Navigation Bar */}
            <div className="bg-white border-t border-slate-200/90 grid grid-cols-4 py-2 px-1 text-center text-[10px] flex-shrink-0">
              <button suppressHydrationWarning
                type="button"
                onClick={() => setCurrentScreen('dashboard')}
                className={`flex flex-col items-center justify-center transition-colors ${
                  currentScreen === 'dashboard' ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <ReceiptText className="w-4 h-4 mb-0.5" />
                <span>Home</span>
              </button>

              <button suppressHydrationWarning
                type="button"
                onClick={() => setCurrentScreen('new-sale')}
                className={`flex flex-col items-center justify-center transition-colors ${
                  currentScreen === 'new-sale' ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Plus className="w-4 h-4 mb-0.5" />
                <span>New Sale</span>
              </button>

              <button suppressHydrationWarning
                type="button"
                onClick={() => setCurrentScreen('products')}
                className={`flex flex-col items-center justify-center transition-colors ${
                  currentScreen === 'products' ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Package className="w-4 h-4 mb-0.5" />
                <span>Products</span>
              </button>

              <button suppressHydrationWarning
                type="button"
                onClick={() => setCurrentScreen('reports')}
                className={`flex flex-col items-center justify-center transition-colors ${
                  currentScreen === 'reports' ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <BarChart3 className="w-4 h-4 mb-0.5" />
                <span>Reports</span>
              </button>
            </div>

            {/* Phone Home Bar */}
            <div className="p-1 bg-slate-100 border-t border-slate-200/60 text-center flex-shrink-0">
              <div className="w-24 h-1 bg-slate-300 rounded-full mx-auto" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useState } from 'react';
import { 
  ShieldCheck, 
  LayoutDashboard, 
  FileText, 
  Package, 
  ScanBarcode, 
  Users2, 
  Store, 
  BarChart3, 
  Settings, 
  Search, 
  Bell, 
  Plus, 
  TrendingUp, 
  ArrowUpRight, 
  ReceiptText, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Filter
} from 'lucide-react';

export default function DesktopDashboardPreview() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [salesMetric, setSalesMetric] = useState('₹42,850.00');
  const [invoicesCount, setInvoicesCount] = useState(18);

  const transactions = [
    {
      id: 'INV-2026-00142',
      name: 'Sri Krishna Garments',
      code: 'INV',
      type: 'Tax Invoice',
      hsn: '5407',
      amount: '₹12,450.00',
      status: 'Paid',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      color: 'bg-emerald-50 text-emerald-600'
    },
    {
      id: 'POS-2026-00891',
      name: 'Counter Retail Sale',
      code: 'POS',
      type: 'Barcode Scanned POS',
      hsn: '6109',
      amount: '₹3,890.00',
      status: 'Paid (Cash)',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      color: 'bg-blue-50 text-blue-600'
    },
    {
      id: 'ORD-2026-00104',
      name: 'Online Store Order (#104)',
      code: 'QR',
      type: 'Ramesh Kumar • Online Cart',
      hsn: 'Textile',
      amount: '₹2,100.00',
      status: 'Ready to Bill',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      color: 'bg-purple-50 text-purple-600'
    },
    {
      id: 'INV-2026-00141',
      name: 'Balaji Textiles & Cottons',
      code: 'INV',
      type: 'Wholesale Invoice',
      hsn: '5208',
      amount: '₹24,400.00',
      status: 'Paid (UPI)',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      color: 'bg-emerald-50 text-emerald-600'
    }
  ];

  const filteredTransactions = transactions.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSimulateNewBill = () => {
    setInvoicesCount(prev => prev + 1);
    setSalesMetric('₹44,350.00');
    setSelectedInvoice({
      id: `INV-2026-0014${invoicesCount + 1}`,
      name: 'New Retail Customer',
      type: 'Simulated POS Invoice',
      amount: '₹1,500.00',
      status: 'Generated & Reconciled'
    });
  };

  return (
    <div className="w-full rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-slate-300/40 ring-1 ring-slate-100/80 overflow-hidden">
      {/* Browser Chrome Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-200/80 bg-slate-100/80 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-400 inline-block hover:opacity-80 cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-amber-400 inline-block hover:opacity-80 cursor-pointer" />
          <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block hover:opacity-80 cursor-pointer" />
        </div>
        <div className="flex items-center gap-2 px-3 sm:px-4 py-1 rounded-md bg-white border border-slate-200 text-slate-600 font-mono text-[11px] max-w-sm truncate shadow-2xs">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
          <span className="truncate">https://app.vexainvoice.vexatech.in/dashboard</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-600">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="hidden sm:inline text-slate-600">Live Workspace</span>
        </div>
      </div>

      {/* Main SaaS Dashboard Container */}
      <div className="flex min-h-[480px] lg:min-h-[540px] bg-slate-50/70">
        
        {/* Left Sidebar Navigation with interactive active links */}
        <aside className="w-52 lg:w-56 border-r border-slate-200/80 bg-white p-3.5 hidden md:flex flex-col justify-between flex-shrink-0">
          <div className="space-y-4">
            {/* Tenant branding */}
            <div className="flex items-center gap-2.5 px-2 py-1 rounded-xl bg-slate-50 border border-slate-100">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-black flex items-center justify-center text-xs shadow-xs">
                V
              </div>
              <div className="flex flex-col truncate">
                <span className="text-xs font-bold text-slate-900 truncate">VEXA Tech Store</span>
                <span className="text-[9px] text-slate-500 font-mono">GST: 36ABCDE1234F</span>
              </div>
            </div>

            {/* Nav list with interactive switching */}
            <nav className="space-y-1 text-xs">
              <button suppressHydrationWarning
                type="button"
                onClick={() => setActiveMenu('dashboard')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg font-semibold transition-all ${
                  activeMenu === 'dashboard'
                    ? 'bg-blue-50 text-blue-700 shadow-2xs font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <LayoutDashboard className="w-4 h-4 text-blue-600" />
                <span>Dashboard</span>
              </button>

              <button suppressHydrationWarning
                type="button"
                onClick={() => setActiveMenu('invoices')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg font-semibold transition-all ${
                  activeMenu === 'invoices'
                    ? 'bg-blue-50 text-blue-700 shadow-2xs font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <FileText className="w-4 h-4 text-slate-500" />
                <span>Sales Invoices</span>
              </button>

              <button suppressHydrationWarning
                type="button"
                onClick={() => setActiveMenu('pos')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg font-semibold transition-all ${
                  activeMenu === 'pos'
                    ? 'bg-blue-50 text-blue-700 shadow-2xs font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <ScanBarcode className="w-4 h-4 text-slate-500" />
                <span>POS Counter</span>
              </button>

              <button suppressHydrationWarning
                type="button"
                onClick={() => setActiveMenu('inventory')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg font-semibold transition-all ${
                  activeMenu === 'inventory'
                    ? 'bg-blue-50 text-blue-700 shadow-2xs font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Package className="w-4 h-4 text-slate-500" />
                <span>Inventory & SKUs</span>
              </button>

              <button suppressHydrationWarning
                type="button"
                onClick={() => setActiveMenu('store')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg font-semibold transition-all ${
                  activeMenu === 'store'
                    ? 'bg-purple-50 text-purple-700 shadow-2xs font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <Store className="w-4 h-4 text-purple-600" />
                <span className="flex-1 text-left">Online Store</span>
                <span className="text-[9px] bg-purple-100 text-purple-700 font-bold px-1.5 py-0.5 rounded">QR</span>
              </button>

              <button suppressHydrationWarning
                type="button"
                onClick={() => setActiveMenu('gst')}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg font-semibold transition-all ${
                  activeMenu === 'gst'
                    ? 'bg-blue-50 text-blue-700 shadow-2xs font-bold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                <BarChart3 className="w-4 h-4 text-slate-500" />
                <span>GST Reports</span>
              </button>
            </nav>
          </div>

          <div className="border-t border-slate-100 pt-3 px-2">
            <div className="flex items-center gap-2 text-xs text-slate-500 hover:text-slate-700 cursor-pointer">
              <Settings className="w-4 h-4 text-slate-400" />
              <span>Settings & Taxes</span>
            </div>
          </div>
        </aside>

        {/* Dashboard Content Area */}
        <main className="flex-1 p-3.5 sm:p-5 lg:p-6 overflow-hidden flex flex-col justify-between">
          <div>
            {/* Top internal header bar with search and interactive button */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-4 border-b border-slate-200/80 gap-3">
              <div>
                <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>Business Overview</span>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Live Demo
                  </span>
                </h2>
                <p className="text-[11px] text-slate-500">Real-time billing, inventory metrics & POS status</p>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="relative flex-1 sm:flex-initial">
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
                  <input suppressHydrationWarning
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search invoices..."
                    className="w-full sm:w-44 text-xs bg-white border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-2xs"
                  />
                </div>

                <button suppressHydrationWarning
                  type="button"
                  onClick={handleSimulateNewBill}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-xs shadow-xs transition-all whitespace-nowrap active:scale-95"
                  title="Click to generate sample bill"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>+ New Invoice</span>
                </button>
              </div>
            </div>

            {/* KPI Summary Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3.5 mb-5">
              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between text-slate-500 text-[11px] mb-1">
                  <span>Today's Sales</span>
                  <span className="p-1 rounded bg-blue-50 text-blue-600">
                    <TrendingUp className="w-3 h-3" />
                  </span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900">{salesMetric}</div>
                <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1 mt-0.5">
                  <ArrowUpRight className="w-3 h-3" />
                  <span>{invoicesCount} invoices generated</span>
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-colors">
                <div className="flex items-center justify-between text-slate-500 text-[11px] mb-1">
                  <span>Active Stock</span>
                  <span className="p-1 rounded bg-emerald-50 text-emerald-600">
                    <Package className="w-3 h-3" />
                  </span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900">512 Items</div>
                <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                  3 low stock alerts
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-colors">
                <div className="flex items-center justify-between text-slate-500 text-[11px] mb-1">
                  <span>GST Collected</span>
                  <span className="p-1 rounded bg-indigo-50 text-indigo-600">
                    <ReceiptText className="w-3 h-3" />
                  </span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-slate-900">₹7,713.00</div>
                <div className="text-[10px] text-blue-600 font-medium mt-0.5">
                  CGST + SGST reconciled
                </div>
              </div>

              <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs hover:border-purple-300 transition-colors">
                <div className="flex items-center justify-between text-slate-500 text-[11px] mb-1">
                  <span>Store Orders</span>
                  <span className="p-1 rounded bg-purple-50 text-purple-600">
                    <Store className="w-3 h-3" />
                  </span>
                </div>
                <div className="text-base sm:text-lg font-extrabold text-purple-700">8 Orders</div>
                <div className="text-[10px] text-slate-500 font-medium mt-0.5">
                  QR catalogue intake
                </div>
              </div>
            </div>

            {/* Recent Sales & Invoices Table preview with interactive clicks */}
            <div className="bg-white rounded-xl border border-slate-200/80 overflow-hidden shadow-xs">
              <div className="px-3.5 py-2.5 bg-slate-50/80 border-b border-slate-200/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-800">
                  <FileText className="w-3.5 h-3.5 text-slate-500" />
                  <span>Recent Invoices & POS Transactions</span>
                </div>
                <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full">
                  Click any invoice to view
                </span>
              </div>

              <div className="divide-y divide-slate-100 text-xs">
                {filteredTransactions.map((tx) => (
                  <div
                    key={tx.id}
                    onClick={() => setSelectedInvoice(tx)}
                    className="px-3.5 py-2.5 flex items-center justify-between hover:bg-blue-50/40 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5 truncate pr-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-[10px] flex-shrink-0 ${tx.color}`}>
                        {tx.code}
                      </div>
                      <div className="truncate">
                        <div className="font-semibold text-slate-900 text-xs truncate">{tx.name}</div>
                        <div className="text-[10px] text-slate-400 font-mono truncate">{tx.id} • {tx.type}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 flex-shrink-0">
                      <span className="font-bold text-slate-900 text-xs">{tx.amount}</span>
                      <span className={`px-2 py-0.5 rounded text-[9px] font-semibold border ${tx.badgeColor}`}>
                        {tx.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Invoice Interactive Modal Preview */}
            {selectedInvoice && (
              <div className="mt-3 p-3 bg-blue-50/90 border border-blue-200 rounded-xl flex items-center justify-between gap-3 text-xs animate-in fade-in duration-200">
                <div className="flex items-center gap-2 truncate">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span className="truncate">
                    <strong>{selectedInvoice.name}</strong> ({selectedInvoice.id}): {selectedInvoice.amount} — {selectedInvoice.status}
                  </span>
                </div>
                <button suppressHydrationWarning
                  type="button"
                  onClick={() => setSelectedInvoice(null)}
                  className="px-2.5 py-1 bg-white border border-blue-200 rounded text-[11px] font-semibold text-blue-700 hover:bg-blue-50 whitespace-nowrap"
                >
                  Close
                </button>
              </div>
            )}
          </div>

          {/* Interactive footer bar indicator */}
          <div className="pt-3 mt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Multi-tenant encrypted cloud database connected</span>
            </span>
            <span className="hidden sm:inline text-blue-600 font-medium">
              VEXA Invoice Desktop Suite
            </span>
          </div>

        </main>
      </div>
    </div>
  );
}

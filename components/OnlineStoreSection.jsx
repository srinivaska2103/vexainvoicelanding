'use client';

import { useState } from 'react';
import { APP_CONFIG } from '@/lib/config';
import { 
  Store, 
  QrCode, 
  Search, 
  ShoppingCart, 
  ArrowRight, 
  Sparkles,
  Smartphone,
  Check,
  Plus,
  Minus,
  CheckCircle2,
  Share2,
  Download,
  ExternalLink,
  Settings2,
  FileText,
  Boxes,
  Users2,
  Copy,
  ReceiptText,
  Layers,
  ShoppingBag,
  Info
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function OnlineStoreSection() {
  // Step navigation: 0 = Setup, 1 = Share, 2 = Browse & Order, 3 = Manage & Invoice
  const [activeStep, setActiveStep] = useState(2); // default on Storefront Browse & Order
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Interactive Cart State
  const [cart, setCart] = useState({
    'OTTO-MENS-WEAR-S-001': 1,
  });
  const [copiedLink, setCopiedLink] = useState(false);
  const [shareSuccess, setShareSuccess] = useState(false);

  // How-It-Works 4 Steps definitions
  const steps = [
    {
      id: 0,
      num: '1',
      icon: Settings2,
      title: 'Set Up Your Store',
      desc: 'Configure your store name, contact information, and the products customers can browse.'
    },
    {
      id: 1,
      num: '2',
      icon: QrCode,
      title: 'Share Your Store',
      desc: 'Share your unique store link or download your QR code for customers to scan.'
    },
    {
      id: 2,
      num: '3',
      icon: ShoppingBag,
      title: 'Customers Browse & Order',
      desc: 'Customers browse products, search the catalogue, select available items, and add them to their cart.'
    },
    {
      id: 3,
      num: '4',
      icon: ReceiptText,
      title: 'Manage Orders & Create Invoices',
      desc: 'Review submitted customer orders and process them through your existing sales and invoice workflow.'
    }
  ];

  // Category filter chips matching Asva store
  const categories = ['All Items', 'Mens Wear', 'Shirt'];

  // Text-Only Demo Products matching the real Asva Garment & Textile store
  const sampleProducts = [
    {
      sku: 'OTTO-MENS-WEAR-S-001',
      name: 'Men pant',
      brand: 'Otto',
      category: 'Mens Wear',
      variant: 'Blue / S',
      price: 10,
      stockQty: 10,
      isAvailable: true
    },
    {
      sku: 'OTTO-MENS-WEAR-S-001',
      name: 'Slim T shirt',
      brand: 'Otto',
      category: 'Mens Wear',
      variant: 'Blue / S',
      price: 10,
      stockQty: 8,
      isAvailable: true
    },
    {
      sku: 'OTTO-SHIRT-M-002',
      name: 'Formal Cotton Shirt',
      brand: 'Otto',
      category: 'Shirt',
      variant: 'White / M',
      price: 10,
      stockQty: 15,
      isAvailable: true
    }
  ];

  // Filtering by category and search query
  const filteredProducts = sampleProducts.filter((p) => {
    const matchesCategory = selectedCategory === 'All Items' || p.category === selectedCategory;
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (sku) => {
    const product = sampleProducts.find(p => p.sku === sku);
    if (!product || !product.isAvailable) return;
    setCart((prev) => ({
      ...prev,
      [sku]: (prev[sku] || 0) + 1,
    }));
  };

  const removeFromCart = (sku) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[sku] > 1) {
        updated[sku] -= 1;
      } else {
        delete updated[sku];
      }
      return updated;
    });
  };

  const clearCartItem = (sku) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[sku];
      return updated;
    });
  };

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalCartAmount = Object.entries(cart).reduce((sum, [sku, qty]) => {
    const item = sampleProducts.find((p) => p.sku === sku);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const storeUrl = 'https://vexainvoice.vexatech.in/shop/asva';

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(storeUrl).then(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    }).catch(() => {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2200);
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Asva Garment & Textile - VEXA Online Store',
        text: 'Check out our product catalogue and order online:',
        url: storeUrl,
      }).catch(() => {
        handleCopyLink();
      });
    } else {
      handleCopyLink();
    }
  };

  return (
    <section id="online-store" className="py-20 sm:py-28 bg-gradient-to-b from-white via-blue-50/25 to-slate-50/60 text-slate-800 relative overflow-hidden border-t border-slate-200/80">
      {/* Subtle brand ambient accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100/70 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Online Shop Store</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-5 leading-tight">
              Turn Your Inventory Into Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700">
                Online Store.
              </span>
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Give your customers a simple way to browse your products, check availability, and place orders online. Manage submitted orders directly through your VEXA Invoice workflow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <a
                href="#store-preview-container"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('store-preview-container')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-sm shadow-md shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Online Store</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 border border-slate-200/90 font-semibold text-sm shadow-2xs transition-all hover:-translate-y-0.5"
              >
                <span>Explore Lifetime Plan</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* 2-Column Interactive Showcase on Desktop, Mobile-First Stack on Small screens */}
        <div id="store-preview-container" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Interactive 4-Step Cards (How It Works) */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="flex items-center justify-between pb-1">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Store className="w-4 h-4 text-blue-600" />
                <span>How It Works</span>
              </span>
              <span className="text-[11px] font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                Click any step to preview
              </span>
            </div>

            {/* Mobile Horizontal Step Selector (Visible only on mobile/tablet) */}
            <div className="lg:hidden flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 pt-1">
              {steps.map((st) => {
                const isSelected = activeStep === st.id;
                return (
                  <button suppressHydrationWarning
                    key={st.id}
                    type="button"
                    onClick={() => setActiveStep(st.id)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border active:scale-95 ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-black ${
                      isSelected ? 'bg-white text-blue-600' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {st.num}
                    </span>
                    <span>{st.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Desktop Vertical Step Cards */}
            <div className="hidden lg:block space-y-3">
              {steps.map((st) => {
                const IconComponent = st.icon;
                const isSelected = activeStep === st.id;
                return (
                  <button suppressHydrationWarning
                    key={st.id}
                    type="button"
                    onClick={() => setActiveStep(st.id)}
                    suppressHydrationWarning
                    className={`w-full text-left p-4 sm:p-4.5 rounded-2xl transition-all duration-200 border flex items-start gap-4 group cursor-pointer ${
                      isSelected
                        ? 'bg-white border-blue-500 shadow-lg shadow-blue-500/10 ring-2 ring-blue-500/15 translate-x-1'
                        : 'bg-white/90 hover:bg-white border-slate-200/90 hover:border-slate-300 shadow-xs'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0 transition-all ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                          : 'bg-slate-100 text-slate-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`text-sm font-bold ${isSelected ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-600'}`}>
                          Step {st.num}: {st.title}
                        </h3>
                        {isSelected && (
                          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                            Active
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Lifetime plan perk card */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50/80 to-indigo-50/50 border border-blue-200/80 text-xs text-slate-700 space-y-1.5 hidden lg:block">
              <div className="flex items-center gap-1.5 font-bold text-blue-900">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span>Zero Monthly Storefront Hosting Fees</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                The Online Shop Store is an included lifetime capability with no separate domain hosting or monthly add-on costs.
              </p>
            </div>
          </div>

          {/* Right Column: Live Browser-Like Storefront Preview */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-100 overflow-hidden">
              
              {/* Clean App Dashboard Header */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 bg-white border-b border-slate-200/90 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-extrabold text-xs flex items-center justify-center shadow-xs">
                    V
                  </div>
                  <div>
                    <div className="font-extrabold text-slate-900 text-xs sm:text-sm tracking-tight flex items-center gap-1.5">
                      <span>VEXA Storefront Manager</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-[10px] text-slate-400 font-medium">Asva Garment & Textile • Live Counter</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button suppressHydrationWarning
                    type="button"
                    onClick={handleShare}
                    className="px-2.5 py-1.5 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 flex items-center gap-1.5 text-[11px] font-semibold transition-colors border border-slate-200 cursor-pointer shadow-2xs"
                    title="Share Catalogue"
                  >
                    <Share2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>{copiedLink ? 'Link Copied!' : 'Share Store'}</span>
                  </button>
                  <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-blue-50 text-blue-700 border border-blue-200">
                    Store Demo
                  </span>
                </div>
              </div>

              {/* Dynamic Viewport according to selected Step */}
              <div className="p-4 sm:p-5 bg-slate-50/70">
                
                {/* STEP 0: SET UP STORE IDENTITY PREVIEW */}
                {activeStep === 0 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/90 shadow-2xs space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Merchant Settings</span>
                          <h3 className="text-base font-bold text-slate-900">Store Profile & Inventory Visibility</h3>
                        </div>
                        <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-mono">
                          VEXA Admin
                        </span>
                      </div>

                      <div className="space-y-3 text-xs">
                        <div>
                          <label className="font-bold text-slate-700 block mb-1">Public Business Name</label>
                          <input suppressHydrationWarning 
                            readOnly 
                            value="Asva Garment & Textile" 
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-semibold cursor-default"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="font-bold text-slate-700 block mb-1">Store URL Handle</label>
                            <input suppressHydrationWarning 
                              readOnly 
                              value="asva" 
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 font-mono text-[11px] cursor-default"
                            />
                          </div>
                          <div>
                            <label className="font-bold text-slate-700 block mb-1">Store Location & Phone</label>
                            <input suppressHydrationWarning 
                              readOnly 
                              value="Surat, Gujarat • 8946029205" 
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-slate-800 cursor-default"
                            />
                          </div>
                        </div>

                        <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Boxes className="w-4 h-4 text-blue-600" />
                            <span className="font-semibold text-slate-800">Catalogue Sync: 2 Products Active (Mens Wear & Shirts)</span>
                          </div>
                          <span className="text-emerald-700 font-bold text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            Live Synced
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-xs px-1">
                      <span className="text-slate-500 italic text-[11px]">Illustrative landing-page configuration preview.</span>
                      <button suppressHydrationWarning
                        type="button"
                        onClick={() => setActiveStep(1)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs shadow-xs transition-colors"
                      >
                        <span>Next: Share Store</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 1: SHARE YOUR STORE & QR CODE PREVIEW */}
                {activeStep === 1 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs text-center space-y-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                          Instant Customer Access
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1.5">
                          Shareable QR Code & Customer Link
                        </h3>
                        <p className="text-xs text-slate-500 max-w-md mx-auto mt-0.5">
                          Print this QR code on physical bill receipts, standees, and banners for instant smartphone shopping.
                        </p>
                      </div>

                      {/* Realistic Demonstration QR Display */}
                      <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-xs mx-auto flex flex-col items-center">
                        <div className="w-36 h-36 bg-white p-2 rounded-xl border border-slate-300 shadow-sm flex items-center justify-center">
                          <QrCode className="w-32 h-32 text-slate-900" />
                        </div>
                        <span className="text-xs font-bold text-slate-900 mt-2">Scan to Browse & Order</span>
                        <span className="text-[10px] text-slate-500 font-mono">Sri Lakshmi Textiles</span>
                      </div>

                      {/* Store URL & Copy Link Action */}
                      <div className="flex items-center gap-2 max-w-md mx-auto">
                        <input suppressHydrationWarning
                          readOnly
                          value={storeUrl}
                          className="flex-1 bg-slate-50 border border-slate-200 text-slate-700 text-xs px-3 py-2 rounded-xl font-mono truncate"
                        />
                        <button suppressHydrationWarning
                          type="button"
                          onClick={handleCopyLink}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl text-xs font-bold shadow-xs transition-all active:scale-95"
                        >
                          {copiedLink ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-xs px-1">
                      <span className="text-slate-500 italic text-[11px]">Demonstration QR & link module.</span>
                      <button suppressHydrationWarning
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs shadow-xs transition-colors"
                      >
                        <span>Next: View Customer Storefront</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: CUSTOMERS BROWSE & ORDER (Interactive Text-Only Storefront) */}
                {activeStep === 2 && (
                  <div className="space-y-3.5 animate-in fade-in duration-200">
                    
                    {/* Storefront Header Card */}
                    <div className="bg-white p-3.5 sm:p-4 rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center font-black text-purple-700 text-xs shrink-0">
                          ASVA
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-[10px] font-extrabold uppercase tracking-wider text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                              GARMENT TEXTILE
                            </span>
                            <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                              VEXA 000101
                            </span>
                            <span className="text-[10px] text-slate-400 font-semibold">• 0946029205</span>
                          </div>
                          <h3 className="text-base font-extrabold text-slate-900 leading-tight">
                            Asva Online Catalogue
                          </h3>
                          <p className="text-[11px] text-slate-500">
                            123 Textile Market, Main Road, Surat, Gujarat - 395002
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 self-start sm:self-auto">
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200 hidden sm:inline-flex items-center gap-1">
                          ● Official Catalogue
                        </span>
                        <button suppressHydrationWarning
                          type="button"
                          onClick={handleShare}
                          className="px-2.5 py-1 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-700 text-[11px] font-semibold flex items-center gap-1"
                        >
                          <Share2 className="w-3 h-3 text-blue-600" />
                          <span>{copiedLink ? 'Copied!' : 'Share'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Search Bar & Category Filter Chips */}
                    <div className="space-y-2">
                      <div className="relative">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5" />
                        <input suppressHydrationWarning
                          type="text"
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search product name or SKU (e.g., Kurti, Saree, Fabric)..."
                          className="w-full bg-white text-xs text-slate-800 pl-10 pr-4 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-2xs"
                        />
                        {searchQuery && (
                          <button suppressHydrationWarning
                            type="button"
                            onClick={() => setSearchQuery('')}
                            className="absolute right-3 top-2 text-xs text-slate-400 hover:text-slate-600"
                          >
                            ✕
                          </button>
                        )}
                      </div>

                      {/* Category Chips with Icons */}
                      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                        {categories.map((cat) => {
                          const isSel = selectedCategory === cat;
                          return (
                            <button suppressHydrationWarning
                              key={cat}
                              type="button"
                              onClick={() => setSelectedCategory(cat)}
                              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap active:scale-95 flex items-center gap-1.5 ${
                                isSel
                                  ? 'bg-blue-600 text-white shadow-2xs'
                                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                              }`}
                            >
                              {cat === 'All Items' && <Boxes className="w-3.5 h-3.5" />}
                              {cat === 'Mens Wear' && <ShoppingBag className="w-3.5 h-3.5" />}
                              {cat === 'Shirt' && <Layers className="w-3.5 h-3.5" />}
                              <span>{cat}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Product Cards List (Text-Only, No Images) */}
                    <div className="space-y-2 max-h-[240px] overflow-y-auto pr-1">
                      {filteredProducts.length === 0 ? (
                        <div className="text-center py-8 text-xs text-slate-500 bg-white rounded-xl border border-dashed border-slate-200">
                          No matching products found. Try clearing your search.
                        </div>
                      ) : (
                        filteredProducts.map((item) => {
                          const inCartQty = cart[item.sku] || 0;
                          return (
                            <div
                              key={item.name}
                              className="p-3.5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs flex items-center justify-between gap-3 hover:border-blue-300 transition-colors"
                            >
                              <div className="truncate">
                                <div className="flex items-center gap-1.5 mb-0.5">
                                  <span className="text-[9px] font-extrabold uppercase text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                                    {item.category}
                                  </span>
                                  {item.brand && (
                                    <span className="text-[9px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                                      {item.brand}
                                    </span>
                                  )}
                                </div>
                                <h4 className="font-extrabold text-sm text-slate-900 truncate">
                                  {item.name}
                                </h4>
                                <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                                  SKU: {item.sku}
                                </div>
                                {item.variant && (
                                  <div className="mt-1 flex items-center gap-1">
                                    <span className="text-[10px] font-bold text-slate-400">SELECT (1):</span>
                                    <span className="text-[10px] font-extrabold text-white bg-blue-600 px-2 py-0.5 rounded-full">
                                      {item.variant}
                                    </span>
                                  </div>
                                )}
                              </div>

                              <div className="flex flex-col items-end gap-2 shrink-0">
                                <div className="text-right">
                                  <span className="text-[9px] text-slate-400 font-bold uppercase block">PURCHASE PRICE</span>
                                  <div className="font-black text-sm text-slate-900">
                                    ₹{item.price.toFixed(2)}<span className="text-[10px] text-slate-500 font-normal">/PCS</span>
                                  </div>
                                </div>

                                <div className="flex items-center gap-1.5">
                                  <span className="text-[9px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                                    On Order
                                  </span>
                                  {inCartQty > 0 ? (
                                    <div className="flex items-center gap-1 bg-blue-50 border border-blue-200 rounded-lg p-0.5">
                                      <button suppressHydrationWarning
                                        type="button"
                                        onClick={() => removeFromCart(item.sku)}
                                        aria-label="Decrease quantity"
                                        className="w-5 h-5 rounded bg-white text-blue-700 flex items-center justify-center hover:bg-blue-100 font-bold text-xs shadow-2xs"
                                      >
                                        <Minus className="w-3 h-3" />
                                      </button>
                                      <span className="text-xs font-bold text-blue-800 px-1.5">
                                        {inCartQty}
                                      </span>
                                      <button suppressHydrationWarning
                                        type="button"
                                        onClick={() => addToCart(item.sku)}
                                        aria-label="Increase quantity"
                                        className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 font-bold text-xs shadow-2xs"
                                      >
                                        <Plus className="w-3 h-3" />
                                      </button>
                                    </div>
                                  ) : (
                                    <button suppressHydrationWarning
                                      type="button"
                                      onClick={() => addToCart(item.sku)}
                                      className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-xs active:scale-95 flex items-center gap-1"
                                    >
                                      <ShoppingCart className="w-3 h-3" />
                                      <span>Add</span>
                                    </button>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })
                      )}
                    </div>

                    {/* Interactive Customer Cart Summary */}
                    <div className="p-3 bg-white rounded-xl border border-blue-200 shadow-sm flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                          <ShoppingCart className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-slate-900">
                            {totalCartCount} {totalCartCount === 1 ? 'item' : 'items'} in customer cart
                          </div>
                          <div className="text-[10px] text-slate-500">
                            Subtotal: <strong className="text-blue-700 font-extrabold">₹{totalCartAmount.toLocaleString('en-IN')}.00</strong>
                          </div>
                        </div>
                      </div>

                      <button suppressHydrationWarning
                        type="button"
                        onClick={() => setActiveStep(3)}
                        disabled={totalCartCount === 0}
                        className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all shadow-xs ${
                          totalCartCount === 0 
                            ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700 text-white active:scale-95'
                        }`}
                      >
                        Review Order →
                      </button>
                    </div>

                  </div>
                )}

                {/* STEP 3: MANAGE ORDERS & CREATE INVOICES PREVIEW */}
                {activeStep === 3 && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-2xs space-y-3.5">
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                        <div className="flex items-center gap-2">
                          <ReceiptText className="w-4 h-4 text-blue-600" />
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                            Merchant Dashboard • Customer Orders Intake
                          </h4>
                        </div>
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 font-bold px-2 py-0.5 rounded border border-emerald-200">
                          Ready to Bill
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                        <div className="flex justify-between font-bold text-slate-900">
                          <span>Order #ORD-SHOP-012</span>
                          <span className="text-blue-600">₹{totalCartAmount > 0 ? totalCartAmount.toLocaleString('en-IN') : '1,798'}.00</span>
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Customer: <strong>Ramesh Kumar</strong> • Mobile: +91 98765 *****
                        </div>
                        <div className="text-[11px] text-slate-600 border-t border-slate-200/60 pt-1.5">
                          Items: Pure Cotton Daily Wear Kurti (Qty: {totalCartCount > 0 ? totalCartCount : 2})
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-900 space-y-1">
                        <div className="font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-blue-600" />
                          <span>1-Click Order-to-Invoice Workflow</span>
                        </div>
                        <p className="text-[11px] text-blue-800 leading-relaxed">
                          Clicking "Convert to Tax Invoice" in the authenticated VEXA dashboard imports customer order items directly into a GST-ready sales bill, deducts inventory, and sends the invoice PDF over WhatsApp.
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-xs px-1">
                      <span className="text-slate-500 italic text-[11px]">Authorized VEXA Invoice workflow demonstration.</span>
                      <button suppressHydrationWarning
                        type="button"
                        onClick={() => setActiveStep(2)}
                        className="inline-flex items-center gap-1.5 text-xs text-blue-600 hover:text-blue-700 font-bold"
                      >
                        <span>← Back to Storefront Demo</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Information Notice */}
              <div className="p-3 bg-slate-100 border-t border-slate-200 text-[11px] text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
                <span className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                  <span>Text-only digital catalogue ensures lightning-fast mobile loading on 4G/5G connections.</span>
                </span>
                <span className="text-slate-400 font-mono text-[10px]">
                  VEXA Online Storefront Suite
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* Section Call to Action */}
        <ScrollReveal animation="fade-up" delay={200} duration={600}>
          <div className="mt-14 sm:mt-18 text-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-lg shadow-slate-200/40 max-w-4xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Ready to take your store online?
            </h3>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
              Manage your inventory and give customers an easier way to place orders.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={APP_CONFIG.routes.signup}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl bg-slate-100 hover:bg-blue-50 text-slate-800 hover:text-blue-700 border border-slate-200 font-bold text-sm transition-all"
              >
                <span>View Pricing</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

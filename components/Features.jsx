import {
  FileText,
  ScanBarcode,
  Boxes,
  Calculator,
  Users2,
  Truck,
  BarChart2,
  Store,
  CheckCircle2
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Features() {
  const featuresList = [
    {
      icon: FileText,
      title: 'Billing and Invoicing',
      description: 'Generate clean professional GST and non-GST sales invoices, create proforma estimates, view complete billing history, and record partial or full customer payments.',
      points: ['Tax & retail sales invoices', 'Proforma estimates to invoice conversion', 'Payment status & history recording']
    },
    {
      icon: ScanBarcode,
      title: 'POS and Daily Sales',
      description: 'Accelerate checkout counter operations with an intuitive Point of Sale interface. Quickly select items, associate customers, apply item discounts and complete transactions.',
      points: ['Fast product selection counter', 'Customer search & association', 'Thermal and standard A4 receipt printing']
    },
    {
      icon: Boxes,
      title: 'Inventory Management',
      description: 'Track stock counts in real time, configure product variants, generate custom SKU codes, and create barcode labels to streamline retail and warehouse scanning.',
      points: ['Live stock level adjustments', 'Automated SKU & barcode generation', 'Low-stock visibility']
    },
    {
      icon: Calculator,
      title: 'GST and Tax Capabilities',
      description: 'Built-in Indian GST calculation formulas (CGST, SGST, IGST) supported by the application. Keep HSN codes organized and issue tax-compliant invoices accurately.',
      points: ['Automatic rate calculations', 'HSN & SAC code tracking', 'Clean tax invoice breakdowns']
    },
    {
      icon: Users2,
      title: 'Customers and Suppliers',
      description: 'Maintain an organized directory of all your clients and vendors. Access party ledgers, track outstanding balances, and ensure smooth business credit reconciliation.',
      points: ['Customer & vendor master records', 'Individual party ledgers', 'Outstanding balance tracking']
    },
    {
      icon: Truck,
      title: 'Purchases and Expenses',
      description: 'Record purchase orders, inward stock arrivals to automatically update inventory, and log business overheads and daily operating expenses in one dashboard.',
      points: ['Inward stock inventory updates', 'Vendor purchase tracking', 'Categorized operational expense logs']
    },
    {
      icon: BarChart2,
      title: 'Reports and Analytics',
      description: 'Gain clear visibility with sales performance metrics, stock movement summaries, payment collections, and GST summary reports ready for export.',
      points: ['Daily/monthly sales summaries', 'Stock valuation reports', 'Data export for accounting review']
    },
    {
      icon: Store,
      title: 'Custom Online Shop Store',
      description: 'Available with the Lifetime Plan: launch a dedicated digital storefront with a text-based public product catalogue, unique QR code, and customer order management.',
      points: ['Instant shop storefront & QR code', 'Customer cart & online order intake', 'Direct order-to-invoice billing conversion'],
      highlight: true
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
              <span>Built-in Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Designed for Real Daily Operations
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Explore the complete suite of features engineered to help businesses manage sales, inventory, and operations reliably.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuresList.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={index}
                animation="fade-up"
                delay={(index % 4) * 80}
                duration={550}
                className="h-full"
              >
                <div
                  className={`rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between h-full group hover:-translate-y-1 ${
                    item.highlight
                      ? 'bg-gradient-to-b from-blue-50/70 to-white border-blue-300 shadow-md ring-1 ring-blue-200 hover:border-blue-400'
                      : 'bg-white border-slate-200 hover:border-blue-200 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                          item.highlight
                            ? 'bg-blue-600 text-white shadow-sm'
                            : 'bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600'
                        }`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      {item.highlight && (
                        <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                          Lifetime Bonus
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  <div className="border-t border-slate-100 pt-4 mt-2 space-y-2">
                    {item.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

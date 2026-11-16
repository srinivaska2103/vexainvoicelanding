import './globals.css';
import { APP_CONFIG } from '@/lib/config';
import ClientBody from '@/components/ClientBody';

export const metadata = {
  title: 'VEXA Invoice | Smart Billing Software',
  description: 'Manage billing, inventory, GST features, customers and business operations with VEXA Invoice. Explore monthly and lifetime packages for your business.',
  metadataBase: new URL(APP_CONFIG.landingUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'VEXA Invoice — Billing, Inventory & Business Management Software',
    description: 'Manage invoices, inventory, GST, customers and business operations in one place with VEXA Invoice. Spend less time on paperwork and more time growing your business.',
    url: APP_CONFIG.landingUrl,
    siteName: 'VEXA Invoice',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VEXA Invoice — Billing, Inventory & Business Management Software',
    description: 'Manage invoices, inventory, GST, customers and business operations in one place with VEXA Invoice.',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: '#2563EB',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/vexa-logo.png" />
        <link rel="shortcut icon" href="/vexa-logo.png" />
        <link rel="apple-touch-icon" href="/vexa-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <ClientBody className="min-h-screen bg-white text-slate-600 font-sans antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </ClientBody>
    </html>
  );
}


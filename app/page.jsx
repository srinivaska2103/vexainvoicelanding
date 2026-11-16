import ScrollProgressBar from '@/components/ScrollProgressBar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Benefits from '@/components/Benefits';
import Features from '@/components/Features';
import WhatsAppIntegrationSection from '@/components/WhatsAppIntegrationSection';
import Industries from '@/components/Industries';
import OnlineStoreSection from '@/components/OnlineStoreSection';
import HowItWorks from '@/components/HowItWorks';
import Pricing from '@/components/Pricing';
import BusinessControl from '@/components/BusinessControl';
import FAQ from '@/components/FAQ';
import EnquirySection from '@/components/EnquirySection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import AIChatbot from '@/components/AIChatbot';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-700 flex flex-col relative">
      <ScrollProgressBar />
      <Navbar />
      <Hero />
      <Benefits />
      <Features />
      <WhatsAppIntegrationSection />
      <Industries />
      <OnlineStoreSection />
      <HowItWorks />
      <Pricing />
      <BusinessControl />
      <FAQ />
      <EnquirySection />
      <FinalCTA />
      <Footer />
      <AIChatbot />
    </main>
  );
}

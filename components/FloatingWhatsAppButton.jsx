'use client';

import { useState } from 'react';
import { APP_CONFIG } from '@/lib/config';
import { MessageSquare, X } from 'lucide-react';

export default function FloatingWhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  if (!APP_CONFIG.whatsappNumber) {
    return null;
  }

  return (
    <aside aria-label="WhatsApp Support" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Accessible Tooltip */}
      {showTooltip && (
        <div className="bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg shadow-lg border border-slate-700 animate-in fade-in slide-in-from-right duration-200 hidden sm:block">
          <span>Chat with VEXA TECH on WhatsApp</span>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={APP_CONFIG.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
        aria-label="Chat on WhatsApp with VEXA TECH"
      >
        <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
      </a>
    </aside>
  );
}

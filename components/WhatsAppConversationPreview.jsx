'use client';

import { useState } from 'react';
import { 
  CheckCheck, 
  ArrowRight, 
  Clock, 
  Send, 
  Sparkles,
  ReceiptText,
  Store,
  FileText,
  Download,
  Check,
  BellRing,
  MessageSquare,
  Truck,
  RotateCcw
} from 'lucide-react';

export default function WhatsAppConversationPreview({ activeScenario = 'order', onScenarioChange }) {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const scenarioTabs = [
    { id: 'order', label: 'Online Order', icon: Store },
    { id: 'invoice', label: 'Tax Bill PDF', icon: ReceiptText },
    { id: 'dispatch', label: 'Dispatch', icon: Truck },
    { id: 'chat', label: 'Payment Chat', icon: MessageSquare },
  ];

  const quickPrompts = [
    'Can I get my latest invoice PDF?',
    'What is my outstanding balance?',
    'Is my order dispatched?'
  ];

  const handleSendCustomMessage = (textToSend) => {
    const text = typeof textToSend === 'string' ? textToSend : inputText;
    if (!text || !text.trim()) return;

    const newMsg = {
      text: text,
      sender: 'user',
      time: 'Just now'
    };

    setMessages((prev) => [...prev, newMsg]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let reply = `Thank you for your message! Our VEXA Invoice billing desk has received your request and will follow up shortly.`;
      
      if (text.toLowerCase().includes('invoice') || text.toLowerCase().includes('pdf') || text.toLowerCase().includes('bill')) {
        reply = `Here is your requested Tax Invoice (INV-2026-00142). Total: ₹12,450.00 (Paid in full via UPI). GST summary included.`;
      } else if (text.toLowerCase().includes('balance') || text.toLowerCase().includes('due')) {
        reply = `Current balance for Sri Krishna Garments: ₹0.00. All past bills settled. Thank you for your business!`;
      } else if (text.toLowerCase().includes('dispatch') || text.toLowerCase().includes('order')) {
        reply = `Order ORD-SHOP-012 for Pure Cotton Kurti is Packed & Ready for Pickup via DTDC tracking #DT948201.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          text: reply,
          sender: 'business',
          time: 'Just now'
        }
      ]);
    }, 900);
  };

  const handleResetChat = () => {
    setMessages([]);
    setIsTyping(false);
  };

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[360px] select-none transition-all floating-phone">
      
      {/* Outer Phone Hardware Frame */}
      <div className="relative rounded-[50px] bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 p-[10px] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.4),0_0_0_1px_rgba(255,255,255,0.1)_inset] ring-1 ring-slate-950/80">
        
        {/* Hardware side buttons (Volume + Power) */}
        <div className="absolute -left-[13px] top-[105px] w-[3px] h-[32px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[13px] top-[147px] w-[3px] h-[52px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -left-[13px] top-[207px] w-[3px] h-[52px] bg-slate-700 rounded-l-sm" />
        <div className="absolute -right-[13px] top-[140px] w-[3px] h-[70px] bg-slate-700 rounded-r-sm" />

        {/* Screen Bezel & Container */}
        <div className="relative rounded-[40px] overflow-hidden bg-[#EFEAE2] flex flex-col h-[640px] shadow-inner text-left border border-slate-900/40">
          
          {/* Dynamic Island / Camera Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
            <div className="w-[100px] h-[22px] bg-black rounded-full flex items-center justify-between px-3 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-950 ring-1 ring-slate-800 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-indigo-950/80" />
              </div>
              <div className="w-2 h-2 rounded-full bg-emerald-500/80 animate-pulse" />
            </div>
          </div>

          {/* Status Bar */}
          <div className="pt-2 px-6 pb-1 bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white flex items-center justify-between text-[11px] font-semibold flex-shrink-0 z-20">
            <span>9:41</span>
            <div className="flex items-center gap-1.5 text-[10px]">
              <span>5G</span>
              <div className="w-4 h-2 border border-white rounded-[2px] p-[1px] flex items-center">
                <div className="w-2.5 h-full bg-white rounded-[1px]" />
              </div>
            </div>
          </div>
          
          {/* WhatsApp App Bar */}
          <div className="bg-gradient-to-r from-[#075E54] to-[#128C7E] text-white px-3.5 py-2.5 flex items-center justify-between shadow-sm flex-shrink-0 z-10 border-t border-emerald-600/30">
            <div className="flex items-center gap-2">
              <div className="relative flex-shrink-0">
                <div className="w-8 h-8 rounded-full bg-white text-[#075E54] font-black text-xs flex items-center justify-center shadow-xs">
                  V
                </div>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#075E54] absolute -bottom-0.5 -right-0.5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold flex items-center gap-1.5 leading-tight truncate">
                  <span className="truncate">VEXA Business Desk</span>
                  <span className="text-[9px] bg-emerald-500/30 border border-emerald-300/40 px-1 py-0.2 rounded text-emerald-100 font-semibold flex-shrink-0">
                    Verified
                  </span>
                </div>
                <div className="text-[10px] text-emerald-100/80 flex items-center gap-1 mt-0.5 truncate">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse flex-shrink-0" />
                  <span className="truncate">Online • VEXA Connected</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1 flex-shrink-0">
              <button suppressHydrationWarning
                type="button"
                onClick={handleResetChat}
                title="Reset test conversation"
                className="p-1 rounded-lg text-emerald-200 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
              <span className="text-[9px] font-bold uppercase tracking-wider text-emerald-100 bg-white/15 px-1.5 py-0.5 rounded-full">
                Demo
              </span>
            </div>
          </div>

          {/* Demo Scenario Selector Pill Tabs (All 4 Scenarios) - with scrollbar hidden */}
          <div className="px-2.5 py-1.5 bg-emerald-50/95 border-b border-emerald-200/60 text-xs flex-shrink-0">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              {scenarioTabs.map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeScenario === tab.id;
                return (
                  <button suppressHydrationWarning
                    key={tab.id}
                    type="button"
                    onClick={() => onScenarioChange?.(tab.id)}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all whitespace-nowrap active:scale-95 cursor-pointer ${
                      isActive
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-white text-emerald-800 border border-emerald-200/80 hover:bg-emerald-100/50'
                    }`}
                  >
                    <TabIcon className="w-3 h-3" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Chat Canvas (WhatsApp Background pattern styling) */}
          <div className="p-3 space-y-2 bg-[#EFEAE2] flex-1 overflow-y-auto no-scrollbar flex flex-col justify-end text-xs">
            
            <div className="text-center my-0.5">
              <span className="bg-white/90 border border-slate-200/80 text-slate-500 text-[9px] px-2.5 py-0.5 rounded-full shadow-2xs font-medium">
                Today • End-to-end encrypted
              </span>
            </div>

          {/* SCENARIO 1: ONLINE STORE ORDER */}
          {activeScenario === 'order' && (
            <>
              <div className="flex flex-col items-start max-w-[88%] self-start animate-in fade-in">
                <div className="bg-white p-2.5 sm:p-3 rounded-2xl rounded-tl-xs shadow-xs border border-slate-200/80 text-slate-800">
                  <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-800 mb-0.5">
                    Customer (Ramesh Kumar)
                  </div>
                  <p className="leading-snug text-xs">
                    Hello! I placed an order via your online store catalogue for <strong>Pure Cotton Kurti Set (Qty: 2)</strong>. Order Ref: <span className="font-mono text-emerald-700 font-bold bg-emerald-50 px-1 py-0.5 rounded">ORD-SHOP-012</span>.
                  </p>
                  <div className="text-[9px] text-slate-400 text-right mt-1 flex items-center justify-end gap-1">
                    <span>10:32 AM</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end max-w-[90%] self-end animate-in fade-in">
                <div className="bg-[#E7FFDB] p-2.5 sm:p-3 rounded-2xl rounded-tr-xs shadow-xs border border-emerald-200 text-slate-900">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-950 mb-1">
                    <Store className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Sri Lakshmi Textiles (VEXA Store)</span>
                  </div>
                  <p className="leading-snug mb-2 text-xs">
                    Thank you, Ramesh ji! Your order has been reviewed in VEXA Invoice and converted to invoice <strong>INV-2026-089</strong>. Total: <strong>₹1,798.00</strong>.
                  </p>
                  <div className="p-2 bg-white rounded-xl border border-emerald-200/80 text-[11px] flex items-center justify-between shadow-2xs">
                    <span className="font-bold text-slate-800 flex items-center gap-1">
                      <ReceiptText className="w-3.5 h-3.5 text-emerald-600" /> Invoice PDF Ready
                    </span>
                    <span className="text-emerald-700 font-extrabold flex items-center gap-0.5 text-[10px] bg-emerald-50 px-2 py-0.5 rounded">
                      View Bill <ArrowRight className="w-2.5 h-2.5" />
                    </span>
                  </div>
                  <div className="text-[9px] text-slate-400 text-right mt-1 flex items-center justify-end gap-1">
                    <span>10:33 AM</span>
                    <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* SCENARIO 2: TAX INVOICE PDF */}
          {activeScenario === 'invoice' && (
            <>
              <div className="flex flex-col items-end max-w-[90%] self-end animate-in fade-in">
                <div className="bg-[#E7FFDB] p-2.5 sm:p-3 rounded-2xl rounded-tr-xs shadow-xs border border-emerald-200 text-slate-900">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-950 mb-1">
                    <ReceiptText className="w-3.5 h-3.5 text-emerald-700" />
                    <span>VEXA Tax Invoice Dispatch</span>
                  </div>
                  <p className="leading-snug mb-2 text-xs">
                    Dear Customer, thank you for visiting Sri Krishna Garments today. Here is your GST Tax Invoice copy:
                  </p>
                  
                  {/* Mock PDF Card Attachment */}
                  <div className="p-2 bg-white rounded-xl border border-emerald-200/90 flex items-center gap-2.5 shadow-2xs">
                    <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-extrabold text-xs flex-shrink-0 border border-rose-100">
                      PDF
                    </div>
                    <div className="truncate flex-1">
                      <div className="font-bold text-slate-900 text-xs truncate">INV-2026-00142.pdf</div>
                      <div className="text-[9px] text-slate-500">145 KB • ₹12,450.00 Paid (Cash)</div>
                    </div>
                    <Download className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  </div>

                  <div className="text-[9px] text-slate-400 text-right mt-1 flex items-center justify-end gap-1">
                    <span>02:15 PM</span>
                    <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start max-w-[85%] self-start animate-in fade-in">
                <div className="bg-white p-2.5 rounded-xl rounded-tl-xs shadow-2xs border border-slate-200/80 text-slate-800 text-xs">
                  <span>Received invoice on WhatsApp, thank you for the speedy bill! 🙏</span>
                  <div className="text-[9px] text-slate-400 text-right mt-0.5">02:16 PM</div>
                </div>
              </div>
            </>
          )}

          {/* SCENARIO 3: DISPATCH & STATUS UPDATES */}
          {activeScenario === 'dispatch' && (
            <>
              <div className="flex flex-col items-end max-w-[90%] self-end animate-in fade-in">
                <div className="bg-[#E7FFDB] p-2.5 sm:p-3 rounded-2xl rounded-tr-xs shadow-xs border border-emerald-200 text-slate-900">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-950 mb-1">
                    <Truck className="w-3.5 h-3.5 text-blue-600" />
                    <span>Order Dispatch Alert • VEXA Delivery</span>
                  </div>
                  <p className="leading-snug mb-1.5 text-xs">
                    Great news! Your order <strong>ORD-SHOP-012</strong> has been dispatched.
                  </p>
                  <div className="p-2 bg-white rounded-xl border border-emerald-200/80 text-[10px] space-y-1">
                    <div className="flex justify-between font-semibold text-slate-800">
                      <span>Carrier: DTDC Express</span>
                      <span className="font-mono text-blue-600 font-bold">AWB: 948201</span>
                    </div>
                    <div className="text-slate-500">Estimated delivery: Tomorrow by 2:00 PM</div>
                  </div>
                  <div className="text-[9px] text-slate-400 text-right mt-1 flex items-center justify-end gap-1">
                    <span>04:10 PM</span>
                    <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                </div>
              </div>
            </>
          )}

          {/* SCENARIO 4: DIRECT CUSTOMER CHAT & SETTLEMENT */}
          {activeScenario === 'chat' && (
            <>
              <div className="flex flex-col items-end max-w-[90%] self-end animate-in fade-in">
                <div className="bg-[#E7FFDB] p-2.5 sm:p-3 rounded-2xl rounded-tr-xs shadow-xs border border-emerald-200 text-slate-900">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-950 mb-1">
                    <MessageSquare className="w-3.5 h-3.5 text-teal-700" />
                    <span>Client Ledger Settlement Nudge</span>
                  </div>
                  <p className="leading-snug mb-2 text-xs">
                    Hi Ramesh ji, a friendly reminder from Sri Krishna Garments regarding pending invoice <strong>INV-2026-00138</strong> for <strong>₹4,200.00</strong>.
                  </p>
                  <div className="p-2 bg-white rounded-xl border border-emerald-200/80 text-[10px] flex items-center justify-between">
                    <span className="font-semibold text-slate-800">UPI Instant Pay Link</span>
                    <span className="text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded">Pay via GPay / PhonePe</span>
                  </div>
                  <div className="text-[9px] text-slate-400 text-right mt-1 flex items-center justify-end gap-1">
                    <span>11:45 AM</span>
                    <CheckCheck className="w-3.5 h-3.5 text-blue-500" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start max-w-[85%] self-start animate-in fade-in">
                <div className="bg-white p-2.5 rounded-xl rounded-tl-xs shadow-2xs border border-slate-200/80 text-slate-800 text-xs">
                  <span>Paid ₹4,200 via UPI just now. Transaction ref: 40281903. Thanks!</span>
                  <div className="text-[9px] text-slate-400 text-right mt-0.5">11:47 AM</div>
                </div>
              </div>
            </>
          )}

          {/* User interactive typed messages */}
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col max-w-[88%] animate-in fade-in ${
                m.sender === 'user' ? 'items-start self-start' : 'items-end self-end'
              }`}
            >
              <div
                className={`p-2.5 rounded-2xl shadow-2xs border text-xs ${
                  m.sender === 'user'
                    ? 'bg-white rounded-tl-xs border-slate-200/80 text-slate-800'
                    : 'bg-[#E7FFDB] rounded-tr-xs border-emerald-200 text-slate-900'
                }`}
              >
                <p className="leading-snug">{m.text}</p>
                <div className="text-[9px] text-slate-400 text-right mt-1 flex items-center justify-end gap-1">
                  <span>{m.time}</span>
                  {m.sender === 'business' && <CheckCheck className="w-3 h-3 text-blue-500" />}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="self-end bg-[#E7FFDB] px-3 py-1.5 rounded-full text-[10px] text-emerald-800 border border-emerald-200 flex items-center gap-1.5 animate-pulse">
              <span>VEXA Desk is typing</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-bounce" />
            </div>
          )}

        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-2 py-1 bg-slate-100 border-t border-slate-200/70 flex items-center gap-1 overflow-x-auto no-scrollbar flex-shrink-0">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider pl-1 whitespace-nowrap">Try:</span>
          {quickPrompts.map((prompt, i) => (
            <button suppressHydrationWarning
              key={i}
              type="button"
              onClick={() => handleSendCustomMessage(prompt)}
              className="text-[10px] text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-200/70 rounded-full px-2 py-0.5 whitespace-nowrap transition-colors active:scale-95 font-medium shadow-2xs"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Interactive Message Input Box */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendCustomMessage();
          }}
          className="bg-slate-50 p-2 sm:p-2.5 border-t border-slate-200 flex items-center gap-2 text-xs flex-shrink-0"
        >
          <input suppressHydrationWarning
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type a message (e.g., Can I get my bill?)..."
            className="flex-1 bg-white rounded-full px-3.5 py-1.5 sm:py-2 border border-slate-300 text-[11px] text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 shadow-2xs"
          />
          <button suppressHydrationWarning
            type="submit"
            disabled={!inputText.trim()}
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#075E54] hover:bg-[#128C7E] disabled:opacity-40 text-white flex items-center justify-center shadow-xs transition-colors active:scale-95 flex-shrink-0 cursor-pointer"
            title="Send test message"
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </form>

        {/* iPhone Home Indicator bar */}
        <div className="pt-2 pb-1.5 bg-slate-50 flex justify-center flex-shrink-0">
          <div className="w-28 h-1 bg-slate-400/80 rounded-full" />
        </div>

      </div>

    </div>

    <div className="mt-3 text-center text-[10px] text-slate-400 flex items-center justify-center gap-1">
      <Sparkles className="w-3 h-3 text-emerald-400" />
      <span>Click scenarios or type in the bar to test the live preview</span>
    </div>

  </div>
  );
}


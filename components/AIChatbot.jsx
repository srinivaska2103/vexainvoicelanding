'use client';

import { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  MessageSquare,
  RefreshCw,
  ExternalLink,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { APP_CONFIG } from '@/lib/config';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: "Hi! 👋 Welcome to VEXA Invoice. I'm here to help you find the right billing, inventory, and POS solution for your business.",
      actions: [
        { label: 'Get Started', href: APP_CONFIG.routes.signup, primary: true },
        { label: 'View Pricing', href: APP_CONFIG.routes.pricing }
      ]
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Suggested questions based on requirements and user's screenshot
  const suggestedQuestions = [
    'What features do you offer?',
    'Explain the ₹599 monthly plan',
    'What is included in the ₹59,999 lifetime plan?',
    'How does billing and access work?',
    'How does the Custom Online Shop Store work?',
    'Does VEXA Invoice support barcode and inventory management?',
    'How can I contact support?'
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages]);

  const handleSendMessage = async (textToSend) => {
    const query = (textToSend || inputText).trim();
    if (!query || isLoading) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      text: query
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-5)
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to get a response');
      }

      const assistantMessage = {
        id: Date.now() + 1,
        sender: 'assistant',
        text: data.reply,
        actions: data.actions || []
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now() + 1,
          sender: 'assistant',
          text: "I'm having trouble reaching the server right now. You can get started directly or chat with our team on WhatsApp.",
          actions: [
            { label: 'Get Started', href: APP_CONFIG.routes.signup, primary: true },
            { label: 'Chat on WhatsApp', href: APP_CONFIG.whatsappUrl }
          ],
          isError: true
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Launcher Button */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5">
        {!isOpen && hasUnread && (
          <div className="hidden sm:flex items-center gap-1.5 bg-white text-slate-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md border border-slate-200 animate-in fade-in slide-in-from-right duration-300">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Ask VEXA AI</span>
          </div>
        )}

        <button suppressHydrationWarning
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close VEXA AI Assistant' : 'Open VEXA AI Assistant'}
          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 relative ${
            isOpen 
              ? 'bg-slate-800 text-white shadow-slate-900/20' 
              : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/30'
          }`}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <>
              <Bot className="w-6 h-6" />
              {hasUnread && (
                <span className="absolute top-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white animate-pulse" />
              )}
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Window Panel - Compact Light Theme */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="VEXA AI Assistant Chat Window"
          className="fixed bottom-20 right-4 sm:right-5 w-[calc(100vw-2rem)] sm:w-[340px] h-[480px] max-h-[75vh] rounded-2xl bg-white text-slate-800 shadow-2xl border border-slate-200/90 z-50 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-3.5 py-3 flex items-center justify-between border-b border-blue-500/20 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-xs">
                <Bot className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <h3 className="font-extrabold text-xs tracking-tight text-white">VEXA AI Assistant</h3>
                  <CheckCircle2 className="w-3 h-3 text-blue-200 fill-blue-500" />
                </div>
                <p className="text-[10px] text-blue-100 font-medium">Ask us about VEXA Invoice</p>
              </div>
            </div>

            <button suppressHydrationWarning
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close Chat Window"
              className="p-1 rounded-lg text-blue-100 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Conversation Area (Light Theme) */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3 bg-slate-50/70 text-slate-700 text-xs">
            {messages.map((msg) => {
              const isAssistant = msg.sender === 'assistant';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isAssistant ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed text-xs ${
                      isAssistant
                        ? 'bg-white border border-slate-200/80 text-slate-800 shadow-2xs'
                        : 'bg-blue-600 text-white font-medium shadow-xs'
                    }`}
                  >
                    <div className="whitespace-pre-line">{msg.text}</div>

                    {/* Grounded Action Buttons */}
                    {isAssistant && msg.actions && msg.actions.length > 0 && (
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                        {msg.actions.map((act, i) => (
                          <a
                            key={i}
                            href={act.href}
                            target={act.href.startsWith('http') ? '_blank' : '_self'}
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                              act.primary
                                ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-2xs'
                                : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                            }`}
                          >
                            <span>{act.label}</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-center gap-2 text-slate-400 text-xs py-1">
                <div className="w-5 h-5 rounded-full bg-white border border-slate-200 flex items-center justify-center text-blue-600">
                  <Bot className="w-3 h-3 animate-pulse" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}

            {/* Starter Suggested Questions */}
            {messages.length === 1 && !isLoading && (
              <div className="pt-1 space-y-1.5">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Suggested questions
                </div>
                <div className="space-y-1">
                  {suggestedQuestions.slice(0, 5).map((q, idx) => (
                    <button suppressHydrationWarning
                      key={idx}
                      type="button"
                      onClick={() => handleSendMessage(q)}
                      className="w-full text-left px-3 py-2 rounded-xl bg-white hover:bg-blue-50/70 border border-slate-200 hover:border-blue-300 text-xs text-slate-700 hover:text-blue-700 flex items-center justify-between transition-all group shadow-2xs"
                    >
                      <span className="truncate pr-2 font-medium">{q}</span>
                      <ChevronRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 flex-shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input & Footer Disclosure Area (Light Theme) */}
          <div className="p-2.5 bg-white border-t border-slate-200/90 space-y-1.5 flex-shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-1.5"
            >
              <input suppressHydrationWarning
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                disabled={isLoading}
                maxLength={500}
                className="flex-1 bg-slate-50 text-slate-800 placeholder-slate-400 text-xs px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white shadow-2xs"
              />
              <button suppressHydrationWarning
                type="submit"
                disabled={!inputText.trim() || isLoading}
                aria-label="Send Message"
                className="w-8 h-8 rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all flex-shrink-0 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            <div className="text-[9px] text-slate-400 text-center flex items-center justify-center">
              <span>AI-generated responses may need verification.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

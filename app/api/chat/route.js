import { NextResponse } from 'next/server';
import { VEXA_KNOWLEDGE, SYSTEM_PROMPT } from '@/lib/aiKnowledge';
import { APP_CONFIG } from '@/lib/config';

// Simple in-memory sliding rate limiter per IP address
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 20;

function isRateLimited(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip) || [];
  const validTimestamps = record.filter(timestamp => now - timestamp < RATE_LIMIT_WINDOW);
  
  if (validTimestamps.length >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  
  validTimestamps.push(now);
  rateLimitMap.set(ip, validTimestamps);

  // Periodically cleanup stale IPs
  if (rateLimitMap.size > 1000) {
    for (const [key, timestamps] of rateLimitMap.entries()) {
      if (timestamps.every(t => now - t >= RATE_LIMIT_WINDOW)) {
        rateLimitMap.delete(key);
      }
    }
  }

  return false;
}

// Grounded intelligent fallback responder based on keywords
function generateGroundedFallback(message) {
  const lower = message.toLowerCase().trim();

  // Pricing & Packages
  if (lower.includes('price') || lower.includes('cost') || lower.includes('plan') || lower.includes('package') || lower.includes('599') || lower.includes('59,999') || lower.includes('subscription')) {
    return {
      text: `VEXA Invoice offers two straightforward packages designed for Indian businesses:\n\n• Monthly Plan (₹599/month): Full access to daily invoicing, POS billing, real-time stock & inventory, automatic barcode & SKU generation, GST/HSN reporting, customer/supplier ledgers, purchase orders, expenses, and analytics. Includes a 7-day free trial with no credit card required.\n\n• Lifetime Plan (₹59,999 one-time payment): Zero recurring renewal charges forever. Includes everything in the monthly plan for life, PLUS your own Custom Online Shop Storefront, shop QR code generation & download, customer cart/catalogue ordering, and lifetime free priority support.\n\nWould you like to start your 7-day free trial or compare features?`,
      actions: [
        { label: 'Start Free Trial', href: APP_CONFIG.routes.signup, primary: true },
        { label: 'View Pricing Table', href: APP_CONFIG.routes.pricing }
      ]
    };
  }

  // Monthly plan specific
  if (lower.includes('monthly')) {
    return {
      text: `The ₹599/month package gives you complete business management capabilities:\n\n• Fast POS counter billing & thermal/PDF receipts\n• Sales invoices & proforma estimates\n• Real-time stock control & low stock alerts\n• Automated barcode and SKU generation & scanning\n• GST & HSN calculation summaries\n• Customer & vendor ledgers\n• Purchase orders and expense tracking\n\nYou can start risk-free with our 7-day full access free trial without entering credit card details.`,
      actions: [
        { label: 'Start 7-Day Free Trial', href: `${APP_CONFIG.routes.signup}?plan=monthly`, primary: true },
        { label: 'Explore Features', href: APP_CONFIG.routes.features }
      ]
    };
  }

  // Lifetime plan specific
  if (lower.includes('lifetime')) {
    return {
      text: `The ₹59,999 Lifetime Plan is a one-time investment with zero recurring software fees:\n\n• 100% of Monthly Features Forever: Full invoicing, POS counter, inventory, barcode, GST, and ledgers.\n• Custom Online Shop Store: A digital catalogue accessible via a custom link or downloadable QR code for shoppers to browse and place orders online.\n• Order-to-Invoice Conversion: Easily convert online customer orders into sales invoices with one click.\n• Lifetime Free Support: Priority technical support included under published terms.\n\nNo monthly or annual renewal charges.`,
      actions: [
        { label: 'Get Lifetime Plan', href: `${APP_CONFIG.routes.signup}?plan=lifetime`, primary: true },
        { label: 'Compare Plans', href: APP_CONFIG.routes.pricing }
      ]
    };
  }

  // Free trial
  if (lower.includes('trial') || lower.includes('free') || lower.includes('signup') || lower.includes('register') || lower.includes('start')) {
    return {
      text: `Yes! You can begin right now with our 7-day full access free trial:\n\n• No credit card or upfront payment required\n• Full access to all core billing, POS, and inventory features\n• Quick company onboarding in under 2 minutes\n\nAt the end of 7 days, you can choose to activate the ₹599 monthly subscription or upgrade to lifetime access.`,
      actions: [
        { label: 'Start Free Trial Now', href: APP_CONFIG.routes.signup, primary: true },
        { label: 'View Pricing', href: APP_CONFIG.routes.pricing }
      ]
    };
  }

  // Online Store / QR Catalogue
  if (lower.includes('store') || lower.includes('online shop') || lower.includes('catalogue') || lower.includes('qr')) {
    return {
      text: `The Custom Online Shop Storefront (included with the Lifetime Plan) empowers your business to sell online effortlessly:\n\n• Public Digital Catalogue: Showcase your inventory online with item photos, pricing, and descriptions.\n• High-Res Shop QR Code: Download and print table/counter QR codes for customers to scan.\n• Cart & Order Intake: Shoppers add items and submit orders directly to your workspace Customer Orders tab.\n• 1-Click Invoicing: Staff can review and convert incoming orders into sales invoices instantly.`,
      actions: [
        { label: 'Learn More in Online Store', href: APP_CONFIG.routes.onlineStore, primary: true },
        { label: 'Lifetime Pricing', href: APP_CONFIG.routes.pricing }
      ]
    };
  }

  // WhatsApp Integration
  if (lower.includes('whatsapp') || lower.includes('message') || lower.includes('chat') || lower.includes('notification')) {
    return {
      text: `VEXA Invoice is designed to seamlessly integrate WhatsApp into your daily business workflows:\n\n• Deliver PDF invoices, receipts, and account statements directly to customer WhatsApp chats.\n• Receive instant notifications when shoppers place orders on your online storefront.\n• Launch 1-click customer chats from ledgers for faster payments.\n\nYou can also contact our team directly on WhatsApp at +91 89460 29205!`,
      actions: [
        { label: 'Chat on WhatsApp', href: APP_CONFIG.whatsappUrl, primary: true },
        { label: 'Explore WhatsApp Workflows', href: APP_CONFIG.routes.whatsapp }
      ]
    };
  }

  // Barcode, Inventory, SKUs
  if (lower.includes('barcode') || lower.includes('sku') || lower.includes('inventory') || lower.includes('stock')) {
    return {
      text: `Yes! VEXA Invoice features built-in Inventory & Barcode Management:\n\n• Automatic Barcode & SKU Generation: Create standard Code128 barcodes and unique product SKUs with one click.\n• Counter Barcode Scanning: Scan items with standard USB/Bluetooth barcode guns for ultra-fast POS checkout.\n• Printable Barcode Labels: Generate barcode stickers for garments, boxes, and shelf tags.\n• Stock Tracking: Real-time inward/outward logs and automated low-stock threshold notifications.`,
      actions: [
        { label: 'Start Free Trial', href: APP_CONFIG.routes.signup, primary: true },
        { label: 'Explore Features', href: APP_CONFIG.routes.features }
      ]
    };
  }

  // GST & Invoicing
  if (lower.includes('gst') || lower.includes('hsn') || lower.includes('tax') || lower.includes('invoice') || lower.includes('bill')) {
    return {
      text: `VEXA Invoice makes GST compliance easy for Indian businesses:\n\n• Generate GST-compliant B2B and B2C sales invoices with proper CGST, SGST, and IGST breakdowns.\n• Automatic HSN/SAC code tracking and item-level tax rates.\n• Thermal receipt printing for POS retail and professional A4/A5 PDF invoices.\n• Exportable tax reports to hand directly to your CA or accountant for monthly filing.\n\n(Note: VEXA Invoice generates all reconciliation calculations and reports; filings are submitted through your official GST portal).`,
      actions: [
        { label: 'Start Free Trial', href: APP_CONFIG.routes.signup, primary: true },
        { label: 'View Features', href: APP_CONFIG.routes.features }
      ]
    };
  }

  // Which businesses / suitability
  if (lower.includes('who') || lower.includes('business') || lower.includes('garment') || lower.includes('retail') || lower.includes('wholesale') || lower.includes('suitable') || lower.includes('use')) {
    return {
      text: `VEXA Invoice is specifically engineered for Indian small and medium trading businesses:\n\n• Retail Shops & Supermarkets: Fast POS counter billing, barcode scanning, daily cash reconciliation.\n• Textile & Garment Merchants: Sizing, SKU variants, rack inventory, and custom barcodes.\n• Wholesale Traders & Distributors: Party ledgers, bulk purchase orders, outstanding payment reminders, and proforma estimates.\n• Hardware & Electronics: Item serial/warranty notes and multi-device cloud accessibility.`,
      actions: [
        { label: 'Explore Solutions', href: APP_CONFIG.routes.solutions, primary: true },
        { label: 'Start Free Trial', href: APP_CONFIG.routes.signup }
      ]
    };
  }

  // Contact / Support
  if (lower.includes('contact') || lower.includes('support') || lower.includes('email') || lower.includes('phone') || lower.includes('help')) {
    return {
      text: `Our dedicated team is ready to assist you!\n\n• Email: ${APP_CONFIG.supportEmail}\n• WhatsApp & Phone: +91 89460 29205\n• Support Policy: We offer technical troubleshooting and product guidance under our published terms.`,
      actions: [
        { label: 'Chat on WhatsApp', href: APP_CONFIG.whatsappUrl, primary: true },
        { label: 'Email Support', href: `mailto:${APP_CONFIG.supportEmail}` }
      ]
    };
  }

  // General default overview
  return {
    text: `VEXA Invoice is a modern billing, inventory, and business management software for Indian retail shops, garment businesses, and wholesale traders.\n\nIt features fast POS billing, GST & HSN calculations, real-time inventory with automated barcode generation, customer ledgers, and an optional Custom Online Shop Storefront.\n\nWe offer a ₹599/month plan (with a 7-day free trial) and a ₹59,999 Lifetime Access Plan with zero recurring fees.\n\nHow can I help you today?`,
    actions: [
      { label: 'Start 7-Day Free Trial', href: APP_CONFIG.routes.signup, primary: true },
      { label: 'View Pricing', href: APP_CONFIG.routes.pricing },
      { label: 'Chat on WhatsApp', href: APP_CONFIG.whatsappUrl }
    ]
  };
}

export async function POST(request) {
  try {
    // 1. IP extraction & Rate limiting
    const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 
               request.headers.get('x-real-ip') || 
               '127.0.0.1';

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment before sending another message.' },
        { status: 429 }
      );
    }

    // 2. Body parsing and validation
    const body = await request.json();
    const { message, history } = body;

    if (!message || typeof message !== 'string' || !message.trim()) {
      return NextResponse.json(
        { error: 'Message cannot be empty.' },
        { status: 400 }
      );
    }

    const trimmedMessage = message.trim();
    if (trimmedMessage.length > 500) {
      return NextResponse.json(
        { error: 'Message is too long. Please keep questions under 500 characters.' },
        { status: 400 }
      );
    }

    // 3. Check for external AI API keys (OpenAI or Gemini)
    const openAiApiKey = process.env.OPENAI_API_KEY;
    const geminiApiKey = process.env.GEMINI_API_KEY;

    // Optional OpenAI Provider Integration
    if (openAiApiKey) {
      try {
        const formattedHistory = Array.isArray(history) 
          ? history.slice(-6).map(h => ({
              role: h.sender === 'user' ? 'user' : 'assistant',
              content: String(h.text || '').slice(0, 300)
            }))
          : [];

        const messages = [
          { role: 'system', content: SYSTEM_PROMPT },
          ...formattedHistory,
          { role: 'user', content: trimmedMessage }
        ];

        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const aiRes = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${openAiApiKey}`
          },
          body: JSON.stringify({
            model: process.env.OPENAI_MODEL || 'gpt-4o-mini',
            messages,
            temperature: 0.3,
            max_tokens: 400
          }),
          signal: controller.signal
        });

        clearTimeout(timeoutId);

        if (aiRes.ok) {
          const data = await aiRes.json();
          const aiText = data.choices?.[0]?.message?.content?.trim();
          if (aiText) {
            return NextResponse.json({
              reply: aiText,
              actions: [
                { label: 'Start Free Trial', href: APP_CONFIG.routes.signup, primary: true },
                { label: 'View Pricing', href: APP_CONFIG.routes.pricing }
              ]
            });
          }
        }
      } catch (aiErr) {
        console.warn('OpenAI provider call failed, falling back to grounded knowledge:', aiErr.message);
      }
    }

    // Optional Google Gemini Provider Integration
    if (geminiApiKey) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [
                {
                  role: 'user',
                  parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Question: ${trimmedMessage}` }]
                }
              ],
              generationConfig: {
                temperature: 0.3,
                maxOutputTokens: 400
              }
            }),
            signal: controller.signal
          }
        );

        clearTimeout(timeoutId);

        if (geminiRes.ok) {
          const data = await geminiRes.json();
          const geminiText = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
          if (geminiText) {
            return NextResponse.json({
              reply: geminiText,
              actions: [
                { label: 'Start Free Trial', href: APP_CONFIG.routes.signup, primary: true },
                { label: 'View Pricing', href: APP_CONFIG.routes.pricing }
              ]
            });
          }
        }
      } catch (geminiErr) {
        console.warn('Gemini provider call failed, falling back to grounded knowledge:', geminiErr.message);
      }
    }

    // 4. Fallback to Grounded Built-in VEXA Knowledge Engine (Zero-latency, 100% accurate, always available)
    const fallback = generateGroundedFallback(trimmedMessage);
    return NextResponse.json({
      reply: fallback.text,
      actions: fallback.actions
    });

  } catch (error) {
    console.error('AI chat endpoint error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request. Please try again.' },
      { status: 500 }
    );
  }
}


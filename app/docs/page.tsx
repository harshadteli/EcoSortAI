'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  Code, 
  Server, 
  Cpu, 
  ShieldCheck, 
  Layers, 
  Terminal, 
  ExternalLink,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function DocsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
      
      {/* Header */}
      <div className="space-y-3 pb-6 border-b border-slate-200">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <FileText className="w-3.5 h-3.5 text-emerald-600" />
          <span>Technical Architecture &amp; API Reference</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Developer &amp; Project Documentation
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Comprehensive technical specifications, schema validations, and deployment instructions for EcoSort AI.
        </p>
      </div>

      {/* Architecture Overview */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Server className="w-5 h-5 text-emerald-600" />
          <span>System Architecture</span>
        </h2>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 text-xs text-slate-600 leading-relaxed">
          <p>
            EcoSort AI is designed with a decoupled, modular architecture adhering to zero-trust client-side principles:
          </p>
          <div className="bg-slate-900 text-slate-200 p-4 rounded-xl font-mono text-[11px] overflow-x-auto space-y-1">
            <p className="text-emerald-400">// Architecture Pipeline</p>
            <p>1. Frontend UI: Next.js (App Router) + Tailwind CSS + Lucide Icons + Recharts</p>
            <p>2. Media Capture: WebRTC navigator.mediaDevices API / FileReader Base64</p>
            <p>3. Backend Proxy: POST /api/analyze (Server-side API Key isolation)</p>
            <p>4. Multimodal Model: Google Gemini 1.5/2.0 Flash Vision / Modular Engine</p>
            <p>5. Validation Layer: Strict JSON Schema sanitizer &amp; Safety check</p>
            <p>6. Local Storage: Client-side ephemeral audit database</p>
          </div>
        </div>
      </section>

      {/* API Endpoint Specification */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Code className="w-5 h-5 text-emerald-600" />
          <span>API Specification: <code>POST /api/analyze</code></span>
        </h2>
        <div className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 text-xs">
          <div>
            <span className="font-bold text-slate-900 block mb-1">Request Body (JSON):</span>
            <pre className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-[11px] overflow-x-auto">
{`{
  "image": "data:image/jpeg;base64,...", // Optional if sample_id provided
  "sample_id": "sample-plastic-bottle"     // Optional if image provided
}`}
            </pre>
          </div>

          <div>
            <span className="font-bold text-slate-900 block mb-1">Response Body (JSON):</span>
            <pre className="bg-slate-50 p-3 rounded-xl border border-slate-200 font-mono text-[11px] overflow-x-auto">
{`{
  "success": true,
  "ai_mode": "connected" | "demo",
  "data": {
    "id": "scan-1726500000000-xyz",
    "item": "PET Plastic Bottle",
    "category": "Plastic",
    "material": "PET (#1)",
    "recyclability": "Usually Recyclable",
    "recommended_action": "Rinse, flatten, and cap.",
    "sustainability_tip": "Use reusable stainless steel canteens.",
    "confidence": 96,
    "confidence_level": "High",
    "explanation": "Visual inspection shows clear thermoplastic...",
    "safety_note": "Non-hazardous.",
    "is_demo": false,
    "analyzed_at": "2026-09-16T22:50:00.000Z"
  }
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* Environment & Deployment */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <Terminal className="w-5 h-5 text-emerald-600" />
          <span>Deployment &amp; Hosting</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Vercel Deployment (1-Click)</h3>
            <p className="text-slate-600 leading-relaxed">
              Push your repository to GitHub, import into Vercel, optionally set <code>GEMINI_API_KEY</code>, and deploy instantly with native edge optimization.
            </p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Render / Node Web Service</h3>
            <p className="text-slate-600 leading-relaxed">
              Connect Git repo, set build command to <code>npm install && npm run build</code> and start command to <code>npm start</code>.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

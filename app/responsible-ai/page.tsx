'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Scale, 
  Eye, 
  Lock, 
  AlertTriangle, 
  CheckCircle2, 
  Info, 
  Sparkles,
  ArrowRight,
  Flame,
  FileCheck
} from 'lucide-react';

export default function ResponsibleAIPage() {
  const principles = [
    {
      id: 'fairness',
      title: 'Fairness & Bias Mitigation',
      icon: Scale,
      color: 'bg-blue-500',
      badgeBg: 'bg-blue-50 border-blue-200 text-blue-900',
      summary: 'Ensuring consistent, unbiased material classification across varied visual contexts.',
      points: [
        'Tested with diverse waste items across varied lighting conditions, shadows, angles, and background clutter to avoid bias towards clean studio packaging.',
        'Supports informal economy items and local brand packagings, not just Western multinational brand designs.',
        'Continuous evaluation of false positive and false negative rates across tricky composite materials.',
      ],
    },
    {
      id: 'transparency',
      title: 'Transparency & Explainability',
      icon: Eye,
      color: 'bg-teal-500',
      badgeBg: 'bg-teal-50 border-teal-200 text-teal-900',
      summary: 'Never presenting AI estimates as infallible facts; providing clear visual reasoning and confidence gauges.',
      points: [
        'Every prediction includes a numerical AI Confidence Percentage and an intuitive Low/Medium/High gauge.',
        'Features an explicit visual reasoning snippet detailing why the model made its classification decision.',
        'Explicit uncertainty warning when confidence < 75%: "AI is not fully certain about this item. Please verify with local waste-management guidance."',
        'Clear indicator distinguishing between live connected Multimodal AI and simulated Demo AI mode.',
      ],
    },
    {
      id: 'privacy',
      title: 'Privacy & Data Minimization',
      icon: Lock,
      color: 'bg-emerald-600',
      badgeBg: 'bg-emerald-50 border-emerald-200 text-emerald-900',
      summary: 'Strict client-side retention and zero collection of personal identifiable information.',
      points: [
        'Zero personal data collection: No names, phone numbers, location tracking, or user accounts are required to analyze waste.',
        'Images processed in-memory: Uploaded photos are passed ephemerally to the vision inference pipeline and never retained on remote servers.',
        'Audit history is stored strictly in the user\'s local browser (localStorage), giving users full control to view or erase their data instantly.',
      ],
    },
    {
      id: 'safety',
      title: 'Safety & Hazardous Guardrails',
      icon: AlertTriangle,
      color: 'bg-red-500',
      badgeBg: 'bg-red-50 border-red-200 text-red-900',
      summary: 'Preventing dangerous handling instructions for reactive chemicals, batteries, and clinical waste.',
      points: [
        'Strict safety protocols: Never recommends burning, crushing, chemical washing, or home incineration of electronics or batteries.',
        'Dedicated warning banners for lithium batteries, biomedical sharps, expired pharmaceuticals, and e-waste.',
        'Directs users to authorized government municipal drop-off centers and certified WEEE recycling facilities.',
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Ethical AI Framework &bull; 1M1B / IBM SkillsBuild</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Responsible AI Considerations
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Artificial Intelligence in sustainability must be trustworthy, safe, and accountable. EcoSort AI implements strict ethical guardrails across fairness, transparency, privacy, and safety.
        </p>
      </div>

      {/* Prominent Mandatory Disclaimer Banner */}
      <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-amber-500/10 border-2 border-amber-300 rounded-3xl p-6 sm:p-8 shadow-sm space-y-3">
        <div className="flex items-center gap-3 text-amber-900 font-black text-base sm:text-lg">
          <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0">
            <Info className="w-5 h-5" />
          </div>
          <span>Official Responsible AI Policy &amp; Disclaimer</span>
        </div>
        <p className="text-xs sm:text-sm text-amber-950 leading-relaxed font-medium">
          &ldquo;AI-generated results are informational recommendations. Waste-disposal rules and recycling facility capabilities vary by municipality and geographical location. Always follow local waste-management guidelines and authorized collection procedures.&rdquo;
        </p>
        <div className="pt-2 flex items-center gap-2 text-xs text-amber-800 font-semibold">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>Model operates strictly as an assistive segregation advisor, not an infallible authority.</span>
        </div>
      </div>

      {/* 4 Core Principles Deep Dive */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {principles.map((p, idx) => {
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl ${p.color} text-white flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Pillar 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900">{p.title}</h3>
                  <p className="text-xs text-slate-500 mt-1 font-medium">{p.summary}</p>
                </div>

                <ul className="space-y-3 pt-2">
                  {p.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                <span>Verified Compliance Standard</span>
                <span className="text-emerald-700 font-bold">Passed Guardrail</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ethical Boundaries Table */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            System Boundaries
          </span>
          <h3 className="text-2xl font-black">
            What EcoSort AI Does vs. What It Does NOT Do
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 text-xs">
          <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-3">
            <h4 className="font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>What EcoSort AI Does</span>
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>&bull; Identifies common consumer packaging and domestic items.</li>
              <li>&bull; Provides conservative preparation steps (rinsing, flattening).</li>
              <li>&bull; Prompts users when visual uncertainty exists.</li>
              <li>&bull; Flags toxic chemical and electronic hazards for special disposal.</li>
            </ul>
          </div>

          <div className="bg-slate-800/80 rounded-2xl p-5 border border-slate-700 space-y-3">
            <h4 className="font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>What EcoSort AI Does NOT Do</span>
            </h4>
            <ul className="space-y-2 text-slate-300">
              <li>&bull; Never claims 100% infallible identification without verification.</li>
              <li>&bull; Never recommends DIY disposal of dangerous medical or chemical wastes.</li>
              <li>&bull; Never collects or sells user photos or tracking metadata.</li>
              <li>&bull; Never fabricates unscientific carbon metric claims.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action links */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/analyzer"
          className="px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4" />
          <span>Test the AI Waste Analyzer</span>
        </Link>
        <Link
          href="/presentation"
          className="px-6 py-3 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs border border-slate-200 shadow-xs transition-all flex items-center gap-2"
        >
          <FileCheck className="w-4 h-4 text-emerald-600" />
          <span>Review 10-Slide Student Deck</span>
        </Link>
      </div>

    </div>
  );
}

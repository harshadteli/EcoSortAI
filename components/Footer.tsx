import React from 'react';
import Link from 'next/link';
import { Recycle, ShieldAlert, Heart, ExternalLink } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-sm">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Purpose */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                <Recycle className="w-5 h-5" />
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                EcoSort<span className="text-emerald-400">AI</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              AI-Powered Waste Segregation &amp; Sustainability Assistant created for the 1M1B AI for Sustainability Virtual Internship in collaboration with IBM SkillsBuild &amp; AICTE.
            </p>
            <div className="flex items-center gap-2 pt-1 text-xs text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              Advancing UN Sustainable Development Goals
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-3">
              Application
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-emerald-400 transition-colors">Home &amp; Overview</Link>
              </li>
              <li>
                <Link href="/analyzer" className="hover:text-emerald-400 transition-colors">AI Waste Analyzer</Link>
              </li>
              <li>
                <Link href="/dashboard" className="hover:text-emerald-400 transition-colors">Sustainability Dashboard</Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-emerald-400 transition-colors">5R &amp; Waste Segregation Guide</Link>
              </li>
              <li>
                <Link href="/responsible-ai" className="hover:text-emerald-400 transition-colors">Responsible AI Principles</Link>
              </li>
              <li>
                <Link href="/presentation" className="hover:text-emerald-400 transition-colors">Student Presentation Slides</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: UN SDGs Alignment */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-3">
              UN SDG Alignment
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px] shrink-0">
                  SDG 12
                </span>
                <span>Responsible Consumption &amp; Production (Primary Focus)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300 font-bold text-[10px] shrink-0">
                  SDG 11
                </span>
                <span>Sustainable Cities &amp; Communities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold text-[10px] shrink-0">
                  SDG 13
                </span>
                <span>Climate Action &amp; Landfill Mitigation</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional Collaboration */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-100 mb-3">
              Program Details
            </h3>
            <div className="bg-slate-800/80 rounded-xl p-3 border border-slate-700/60 space-y-2 text-xs">
              <div className="text-slate-200 font-semibold">1M1B Virtual Internship</div>
              <p className="text-slate-400 text-[11px]">
                AI for Sustainability Track in partnership with IBM SkillsBuild and AICTE.
              </p>
              <div className="pt-2 border-t border-slate-700 flex items-center justify-between text-[11px] text-slate-400">
                <span>Model: Multimodal Vision</span>
                <span className="text-emerald-400 font-medium">Demo/Live Ready</span>
              </div>
            </div>
          </div>
        </div>

        {/* Disclaimer Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/80 bg-slate-950/40 rounded-xl p-4 flex items-start gap-3 text-xs text-slate-400">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-slate-200">Responsible AI Disclaimer: </span>
            AI-generated results are informational recommendations. Waste-disposal rules and recycling facility capabilities vary by municipality. Always follow local waste-management guidelines and authorized collection drives for hazardous materials.
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-8 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} EcoSort AI. Student Project for 1M1B, IBM SkillsBuild &amp; AICTE.</p>
          <p className="flex items-center gap-1">
            Built for sustainable impact with <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" /> and Responsible AI
          </p>
        </div>
      </div>
    </footer>
  );
}

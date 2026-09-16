'use client';

import React from 'react';
import { 
  Sparkles, 
  Brain, 
  Lightbulb, 
  Split, 
  Recycle, 
  ShoppingBag, 
  TrendingUp, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

export function ImpactModelChart() {
  const modelNodes = [
    {
      title: 'AI Identification',
      icon: Brain,
      desc: 'Accurate computer vision reduces confusion regarding complex materials and packaging composite types.',
      color: 'bg-blue-50 border-blue-200 text-blue-800',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Better Awareness',
      icon: Lightbulb,
      desc: 'Users understand the exact material lifecycle, recyclability limitations, and proper prep steps.',
      color: 'bg-amber-50 border-amber-200 text-amber-800',
      iconColor: 'text-amber-600',
    },
    {
      title: 'Better Segregation',
      icon: Split,
      desc: 'Households, schools, and offices place wet, dry, recyclable, and hazardous items in the correct designated bins.',
      color: 'bg-teal-50 border-teal-200 text-teal-800',
      iconColor: 'text-teal-600',
    },
    {
      title: 'Improved Recycling',
      icon: Recycle,
      desc: 'Reduces batch contamination at municipal sorting centers, boosting material recovery efficiency.',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Responsible Consumption',
      icon: ShoppingBag,
      desc: 'Informed by 5R principles, users adopt durable reusables and reduce single-use plastic reliance.',
      color: 'bg-purple-50 border-purple-200 text-purple-800',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Sustainability Impact',
      icon: TrendingUp,
      desc: 'Contributes to SDG 12, SDG 11, and SDG 13 by reducing landfill burden and conserving circular resources.',
      color: 'bg-green-100 border-green-300 text-green-900 font-bold',
      iconColor: 'text-green-700',
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider">
            Theory of Change
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Potential Impact Framework
          </h3>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Qualitative Impact Model</span>
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        EcoSort AI follows an evidence-based behavioral progression framework. Rather than claiming unverified theoretical carbon metrics, we emphasize how AI assists the critical decision point: the moment of waste disposal.
      </p>

      {/* Grid of Nodes */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {modelNodes.map((node, i) => {
          const Icon = node.icon;
          return (
            <div
              key={node.title}
              className={`rounded-2xl border p-5 transition-all hover:shadow-md flex flex-col justify-between ${node.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-xl bg-white shadow-xs flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${node.iconColor}`} />
                  </div>
                  <span className="text-[10px] font-bold uppercase opacity-60 tracking-wider">
                    Phase {i + 1}
                  </span>
                </div>
                <h4 className="text-sm font-bold mb-1.5">
                  {node.title}
                </h4>
                <p className="text-xs opacity-90 leading-relaxed">
                  {node.desc}
                </p>
              </div>

              {i < modelNodes.length - 1 && (
                <div className="mt-4 pt-2 border-t border-black/5 flex items-center justify-between text-[11px] font-semibold opacity-70">
                  <span>Leads to Next Phase</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-xs text-slate-500 leading-relaxed">
        <strong className="text-slate-700">Scientific Note on Environmental Claims: </strong>
        Actual real-world diversion rates and landfill reduction depend on local municipal infrastructure, community compliance, and supply chain logistics. EcoSort AI focuses on educational accuracy and segregation compliance.
      </div>
    </div>
  );
}

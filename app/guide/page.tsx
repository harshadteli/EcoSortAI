'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BookOpen, 
  Recycle, 
  Leaf, 
  ShieldAlert, 
  HelpCircle, 
  Sparkles, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
import { QuizComponent } from '@/components/QuizComponent';

export default function GuidePage() {
  const [active5R, setActive5R] = useState<number>(0);

  const fiveRPillars = [
    {
      name: 'Refuse',
      subtitle: 'First Line of Defense',
      tagline: 'Say NO to what you do not need',
      color: 'bg-red-500',
      badge: 'bg-red-100 text-red-800 border-red-200',
      description: 'Refuse unnecessary single-use items, plastic cutlery, promotional flyers, excess packaging, and disposable polybags.',
      action: 'Carry a reusable tote bag, say "no receipt" when digital is an option, and decline plastic straws.',
    },
    {
      name: 'Reduce',
      subtitle: 'Conscious Consumption',
      tagline: 'Minimize overall resource usage',
      color: 'bg-amber-500',
      badge: 'bg-amber-100 text-amber-800 border-amber-200',
      description: 'Buy in bulk to cut packaging volume, choose durable goods over cheap short-lived alternatives, and eliminate food waste.',
      action: 'Plan grocery lists to prevent kitchen spoilage, borrow tools used infrequently, and digitize documents.',
    },
    {
      name: 'Reuse',
      subtitle: 'Extend Product Lifespan',
      tagline: 'Use items repeatedly before discarding',
      color: 'bg-blue-500',
      badge: 'bg-blue-100 text-blue-800 border-blue-200',
      description: 'Find second lives for household containers, glass food jars, cardboard boxes, and gently worn clothing.',
      action: 'Repurpose glass jars for spice storage, use scrap cardboard for packing, and donate wearable clothes to charities.',
    },
    {
      name: 'Repair',
      subtitle: 'Right to Repair',
      tagline: 'Fix broken things instead of replacing',
      color: 'bg-teal-500',
      badge: 'bg-teal-100 text-teal-800 border-teal-200',
      description: 'Mend torn textiles, replace worn smartphone batteries, service kitchen appliances, and fix loose furniture joints.',
      action: 'Support local repair cafes and cobblers, consult online DIY fix guides, and look for modular repairable electronics.',
    },
    {
      name: 'Recycle',
      subtitle: 'Closing the Loop',
      tagline: 'Process items into raw materials',
      color: 'bg-emerald-600',
      badge: 'bg-emerald-100 text-emerald-800 border-emerald-200',
      description: 'Ensure clean segregation of paper, metal, glass, and approved plastics to facilitate high-grade industrial re-manufacturing.',
      action: 'Rinse food residue from cans/bottles, separate hazardous batteries from dry waste, and adhere to local bin rules.',
    },
  ];

  const guideTopics = [
    {
      title: 'Wet / Organic Waste & Composting',
      icon: Leaf,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-200',
      items: [
        'Segregate vegetable peelings, fruit rinds, tea leaves, and garden trimmings in a green wet waste bin.',
        'Never wrap wet waste in non-biodegradable polythene bags.',
        'Aerobic home composting creates rich organic fertilizer within 45 to 60 days, preventing methane release in municipal landfills.',
      ],
    },
    {
      title: 'Dry Recyclables (Plastic, Paper, Metal, Glass)',
      icon: Recycle,
      color: 'text-blue-600 bg-blue-50 border-blue-200',
      items: [
        'Keep dry recyclables completely free from liquids and oils to avoid ruining fiber balers.',
        'Flatten cardboard boxes and crush plastic bottles to optimize collection bin volume.',
        'Glass bottles can be recycled infinitely without losing structural integrity or purity.',
      ],
    },
    {
      title: 'E-Waste & Dangerous Hazardous Stream',
      icon: ShieldAlert,
      color: 'text-purple-600 bg-purple-50 border-purple-200',
      items: [
        'Old smartphones, cables, chargers, and circuit boards contain hazardous lead and valuable gold/copper.',
        'Never discard lithium batteries or electronics in general trash or open flames.',
        'Drop off at certified e-waste recovery centers or municipal take-back drives.',
      ],
    },
    {
      title: 'Medical & Domestic Sanitary Waste',
      icon: AlertCircle,
      color: 'text-red-600 bg-red-50 border-red-200',
      items: [
        'Expired medicines, used syringes, and bandages require specialized high-temperature incineration.',
        'Wrap sanitary waste securely in newspaper and mark with a red dot for sanitation worker safety.',
        'Do not flush unused medicines down toilets, as they contaminate aquatic water bodies.',
      ],
    },
  ];

  const resinCodes = [
    { code: '1', name: 'PETE / PET', desc: 'Water bottles, soda containers', rec: 'Widely Recycled' },
    { code: '2', name: 'HDPE', desc: 'Milk jugs, shampoo bottles, detergents', rec: 'Widely Recycled' },
    { code: '3', name: 'PVC', desc: 'Pipes, wire sheathing, vinyl flooring', rec: 'Rarely Recycled' },
    { code: '4', name: 'LDPE', desc: 'Squeeze bottles, grocery bags', rec: 'Check Local Facility' },
    { code: '5', name: 'PP', desc: 'Yogurt cups, bottle caps, medicine vials', rec: 'Frequently Recycled' },
    { code: '6', name: 'PS', desc: 'Styrofoam cups, packaging foam', rec: 'Difficult / Non-Recyclable' },
    { code: '7', name: 'OTHER', desc: 'Multi-layer composite, polycarbonate', rec: 'Non-Recyclable' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
          <span>Educational Curriculum &bull; SDG 12</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Sustainability &amp; Waste Segregation Guide
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Master circular waste management principles, master the 5R hierarchy, understand resin codes, and build lifelong eco-conscious habits.
        </p>
      </div>

      {/* The 5R Principle Interactive Section */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Circular Economy Hierarchy
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            The 5R Principle
          </h2>
          <p className="text-xs text-slate-500">
            Prioritized in order of environmental impact from highest prevention to end-of-life recovery.
          </p>
        </div>

        {/* 5R Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {fiveRPillars.map((pillar, idx) => {
            const isSelected = active5R === idx;
            return (
              <button
                key={pillar.name}
                onClick={() => setActive5R(idx)}
                className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-500 bg-emerald-50/70 ring-2 ring-emerald-500/20 shadow-sm'
                    : 'border-slate-200 bg-white hover:bg-slate-50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`w-6 h-6 rounded-lg text-white font-bold text-xs flex items-center justify-center ${pillar.color}`}>
                      {idx + 1}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400">
                      R#{idx + 1}
                    </span>
                  </div>
                  <h3 className="font-extrabold text-sm text-slate-900">
                    {pillar.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">
                    {pillar.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active 5R Detail Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-4 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className={`w-10 h-10 rounded-2xl text-white font-black text-lg flex items-center justify-center ${fiveRPillars[active5R].color} shadow-sm`}>
                {active5R + 1}
              </span>
              <div>
                <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border ${fiveRPillars[active5R].badge}`}>
                  Hierarchy Level {active5R + 1}
                </span>
                <h3 className="text-xl font-black text-slate-900">
                  {fiveRPillars[active5R].name}: {fiveRPillars[active5R].tagline}
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Core Principle
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                {fiveRPillars[active5R].description}
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 space-y-1.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Everyday Practical Action</span>
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed">
                {fiveRPillars[active5R].action}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Segregation Guidelines by Category */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Source Segregation Guidelines
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            How to Segregate Waste at Source
          </h2>
          <p className="text-xs text-slate-500">
            Essential protocols to prevent batch contamination and ensure worker safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guideTopics.map((topic) => {
            const Icon = topic.icon;
            return (
              <div
                key={topic.title}
                className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-2xl border flex items-center justify-center ${topic.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {topic.title}
                    </h3>
                  </div>

                  <ul className="space-y-2.5 pt-2 text-xs text-slate-600">
                    {topic.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Plastic Resin Codes Reference Table */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="max-w-2xl space-y-1">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
            Resin Identification Guide
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Plastic Recycling Codes (#1 to #7)
          </h2>
          <p className="text-xs text-slate-500">
            Look for the triangular chasing arrows symbol stamped on the bottom of plastic containers.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-600">
            <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="py-3 px-4 rounded-l-xl">Resin Code</th>
                <th className="py-3 px-3">Polymer Name</th>
                <th className="py-3 px-4">Common Everyday Uses</th>
                <th className="py-3 px-4 rounded-r-xl">Recyclability Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {resinCodes.map((item) => (
                <tr key={item.code} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3 px-4 font-black text-slate-900 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-slate-100 border border-slate-300 flex items-center justify-center text-xs">
                      #{item.code}
                    </span>
                  </td>
                  <td className="py-3 px-3 font-bold text-slate-800">{item.name}</td>
                  <td className="py-3 px-4 text-slate-600">{item.desc}</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-0.5 rounded-md font-semibold text-[10px] border ${
                      item.rec.includes('Widely') || item.rec.includes('Frequently')
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                        : item.rec.includes('Check')
                        ? 'bg-amber-50 text-amber-800 border-amber-200'
                        : 'bg-red-50 text-red-800 border-red-200'
                    }`}>
                      {item.rec}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Interactive Quiz Component */}
      <section className="max-w-3xl mx-auto">
        <QuizComponent />
      </section>

    </div>
  );
}

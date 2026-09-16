'use client';

import React, { useState } from 'react';
import { 
  User, 
  Camera, 
  Cpu, 
  Search, 
  Tags, 
  Recycle, 
  CheckCircle2, 
  Sparkles, 
  HeartHandshake, 
  Globe2,
  ArrowRight,
  ChevronDown
} from 'lucide-react';

export function WorkflowDiagram() {
  const [activeStep, setActiveStep] = useState<number>(3);

  const steps = [
    {
      step: 1,
      title: 'User Input',
      subtitle: 'Upload / Camera Capture',
      icon: Camera,
      color: 'from-blue-500 to-indigo-600',
      description: 'The user snaps a waste item via camera or uploads an image file (JPEG/PNG/WebP). Pre-processing resizes and optimizes resolution.',
    },
    {
      step: 2,
      title: 'AI Vision Analysis',
      subtitle: 'Multimodal Vision Layer',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-600',
      description: 'The image is examined by a computer vision model that extracts geometric contours, material reflectivity, surface texture, and printed recycling codes.',
    },
    {
      step: 3,
      title: 'Identification & Categorization',
      subtitle: 'Class & Material Extraction',
      icon: Tags,
      color: 'from-emerald-500 to-teal-600',
      description: 'Matches the visual profile to defined waste categories (Plastic, Organic, E-waste, Metal, Glass, Hazardous, etc.) and detects specific resin/material composition.',
    },
    {
      step: 4,
      title: 'Recyclability & Safety Assessment',
      subtitle: 'Rule-Based & Context Logic',
      icon: Recycle,
      color: 'from-teal-500 to-emerald-600',
      description: 'Determines if the item is recyclable, checks contamination risks, and applies strict safety guidelines (especially for hazardous batteries and e-waste).',
    },
    {
      step: 5,
      title: 'Disposal & Sustainability Action',
      subtitle: 'Actionable Guidance & Tip',
      icon: Sparkles,
      color: 'from-amber-500 to-emerald-600',
      description: 'Delivers clear step-by-step preparation steps (rinse, crush, tape terminals), circular 5R recommendations, and confidence explanations.',
    },
    {
      step: 6,
      title: 'Responsible Impact',
      subtitle: 'SDG 12 Alignment',
      icon: Globe2,
      color: 'from-emerald-600 to-green-700',
      description: 'Enables correct bin segregation in homes, schools, and offices, diverting reusable materials from landfills and preventing environmental contamination.',
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-8">
      <div>
        <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Core AI Architecture</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
          System Workflow: From Waste Image to Sustainable Action
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-2xl">
          A high-level architectural walkthrough illustrating how multimodal AI and safety rules guide users to proper segregation.
        </p>
      </div>

      {/* Steps visualization */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative">
        {steps.map((item, idx) => {
          const Icon = item.icon;
          const isSelected = activeStep === item.step;

          return (
            <button
              key={item.step}
              onClick={() => setActiveStep(item.step)}
              className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between relative ${
                isSelected
                  ? 'border-emerald-500 bg-emerald-50/50 shadow-md ring-2 ring-emerald-500/20'
                  : 'border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`w-7 h-7 rounded-xl bg-gradient-to-br ${item.color} text-white text-xs font-bold flex items-center justify-center shadow-xs`}>
                    {item.step}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase">
                    Stage {item.step}
                  </span>
                </div>
                <div className="font-bold text-xs text-slate-900 mb-1">
                  {item.title}
                </div>
                <div className="text-[11px] text-slate-500 font-medium">
                  {item.subtitle}
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-200/60 flex items-center justify-between text-[10px] font-semibold text-emerald-600">
                <span>{isSelected ? 'Viewing' : 'Details'}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-180' : ''}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Active step detailed card */}
      {activeStep && (
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-2xl p-6 border border-slate-700 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                {React.createElement(steps[activeStep - 1].icon, { className: 'w-5 h-5' })}
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">
                  Detailed Workflow &bull; Step {activeStep} of 6
                </span>
                <h4 className="text-lg font-bold text-white">
                  {steps[activeStep - 1].title}: {steps[activeStep - 1].subtitle}
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep((prev) => (prev > 1 ? prev - 1 : 6))}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 border border-slate-700"
              >
                Previous
              </button>
              <button
                onClick={() => setActiveStep((prev) => (prev < 6 ? prev + 1 : 1))}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-xs font-semibold text-white shadow-sm"
              >
                Next Step
              </button>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
            {steps[activeStep - 1].description}
          </p>
        </div>
      )}
    </div>
  );
}

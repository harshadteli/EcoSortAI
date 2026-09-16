'use client';

import React from 'react';
import { SAMPLE_WASTE_ITEMS, SampleWasteItem } from '@/lib/demo-data';
import { Sparkles, ArrowRight } from 'lucide-react';
import { getCategoryColor } from '@/lib/utils';

interface SampleImageSelectorProps {
  onSelectSample: (sample: SampleWasteItem) => void;
  selectedId?: string;
}

export function SampleImageSelector({ onSelectSample, selectedId }: SampleImageSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700">
            Or Test with 1-Click Sample Waste Items
          </h4>
        </div>
        <span className="text-[11px] text-slate-400 font-medium hidden sm:inline">
          Curated for instant demonstration
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {SAMPLE_WASTE_ITEMS.map((sample) => {
          const colors = getCategoryColor(sample.category);
          const isSelected = selectedId === sample.id;

          return (
            <button
              key={sample.id}
              onClick={() => onSelectSample(sample)}
              className={`group text-left p-2.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between overflow-hidden relative ${
                isSelected
                  ? 'border-emerald-500 ring-2 ring-emerald-500/20 bg-emerald-50/50 shadow-md'
                  : 'border-slate-200 bg-white hover:border-emerald-300 hover:shadow-sm'
              }`}
            >
              <div className="space-y-2 w-full">
                <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-100">
                  <img
                    src={sample.thumbnail}
                    alt={sample.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1.5 left-1.5">
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-md border shadow-xs ${colors.badge}`}>
                      {sample.category.split('/')[0]}
                    </span>
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-800 line-clamp-1 group-hover:text-emerald-700 transition-colors">
                    {sample.name}
                  </h5>
                  <p className="text-[10px] text-slate-500 line-clamp-1">
                    {sample.description}
                  </p>
                </div>
              </div>

              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-emerald-600">
                <span>Select Item</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

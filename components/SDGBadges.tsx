import React from 'react';
import { Target, Leaf, Building2, Flame } from 'lucide-react';

export function SDGBadges({ variant = 'cards' }: { variant?: 'cards' | 'pills' | 'compact' }) {
  const sdgs = [
    {
      number: '12',
      title: 'Responsible Consumption and Production',
      role: 'Primary SDG',
      color: 'bg-amber-600',
      badgeBg: 'bg-amber-50 dark:bg-amber-950/30',
      border: 'border-amber-200 dark:border-amber-800',
      text: 'text-amber-800 dark:text-amber-300',
      icon: Leaf,
      description: 'Fosters waste reduction, prevention, recycling, and reuse (Target 12.5) to achieve sustainable management and efficient use of natural resources.',
    },
    {
      number: '11',
      title: 'Sustainable Cities & Communities',
      role: 'Secondary SDG',
      color: 'bg-orange-600',
      badgeBg: 'bg-orange-50 dark:bg-orange-950/30',
      border: 'border-orange-200 dark:border-orange-800',
      text: 'text-orange-800 dark:text-orange-300',
      icon: Building2,
      description: 'Reduces the adverse per capita environmental impact of cities by paying special attention to municipal and other waste management (Target 11.6).',
    },
    {
      number: '13',
      title: 'Climate Action',
      role: 'Secondary SDG',
      color: 'bg-emerald-700',
      badgeBg: 'bg-emerald-50 dark:bg-emerald-950/30',
      border: 'border-emerald-200 dark:border-emerald-800',
      text: 'text-emerald-800 dark:text-emerald-300',
      icon: Flame,
      description: 'Diverting organic waste from landfills directly mitigates methane emissions, reducing greenhouse gas impacts on global climate.',
    },
  ];

  if (variant === 'pills') {
    return (
      <div className="flex flex-wrap items-center gap-2">
        {sdgs.map((sdg) => (
          <div
            key={sdg.number}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold ${sdg.badgeBg} ${sdg.border} ${sdg.text}`}
          >
            <span className={`w-5 h-5 rounded-full text-white ${sdg.color} flex items-center justify-center text-[10px] font-bold`}>
              {sdg.number}
            </span>
            <span>SDG {sdg.number}: {sdg.title}</span>
            <span className="text-[10px] opacity-75 font-normal">({sdg.role})</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {sdgs.map((sdg) => {
        const Icon = sdg.icon;
        return (
          <div
            key={sdg.number}
            className={`relative rounded-2xl border p-6 transition-all hover:shadow-lg ${sdg.badgeBg} ${sdg.border} flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2.5 py-1 rounded-lg text-white font-bold text-xs ${sdg.color} shadow-sm`}>
                  SDG {sdg.number}
                </span>
                <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${sdg.border} ${sdg.text}`}>
                  {sdg.role}
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Icon className={`w-5 h-5 ${sdg.text}`} />
                {sdg.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                {sdg.description}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-medium text-slate-500">
              UN 2030 Agenda Target Focus
            </div>
          </div>
        );
      })}
    </div>
  );
}

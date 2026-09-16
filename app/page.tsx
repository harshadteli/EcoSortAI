'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  ArrowRight, 
  Recycle, 
  ShieldCheck, 
  Leaf, 
  Layers, 
  Cpu, 
  Compass, 
  CheckCircle2, 
  Globe2, 
  BookOpen, 
  BarChart3,
  HelpCircle
} from 'lucide-react';
import { SDGBadges } from '@/components/SDGBadges';
import { SampleImageSelector } from '@/components/SampleImageSelector';
import { useRouter } from 'next/navigation';
import { SampleWasteItem } from '@/lib/demo-data';

export default function HomePage() {
  const router = useRouter();

  const handleSelectSample = (sample: SampleWasteItem) => {
    router.push(`/analyzer?sample=${sample.id}`);
  };

  const featureCards = [
    {
      title: 'AI Waste Detection',
      description: 'Identify discarded items and packaging materials instantly using computer vision and multimodal AI.',
      icon: Cpu,
      color: 'bg-emerald-500',
      badge: 'Vision AI',
    },
    {
      title: 'Smart Disposal Guidance',
      description: 'Receive practical, stepwise disposal guidance, preparation instructions, and certified e-waste safety precautions.',
      icon: Recycle,
      color: 'bg-teal-500',
      badge: 'Actionable',
    },
    {
      title: 'Sustainability Awareness',
      description: 'Adopt 5R circular habits (Refuse, Reduce, Reuse, Repair, Recycle) aligned with UN Sustainable Development Goals.',
      icon: Leaf,
      color: 'bg-green-600',
      badge: 'SDG 12 Impact',
    },
  ];

  const wasteCategories = [
    { name: 'Plastic', count: 'PET, HDPE, PP', color: 'bg-amber-100 text-amber-800 border-amber-200' },
    { name: 'Paper', count: 'Newsprint, Office Paper', color: 'bg-blue-100 text-blue-800 border-blue-200' },
    { name: 'Cardboard', count: 'Corrugated, Kraft Boxes', color: 'bg-sky-100 text-sky-800 border-sky-200' },
    { name: 'Glass', count: 'Bottles, Food Jars', color: 'bg-cyan-100 text-cyan-800 border-cyan-200' },
    { name: 'Metal', count: 'Aluminum Cans, Tins', color: 'bg-slate-200 text-slate-800 border-slate-300' },
    { name: 'Organic / Wet', count: 'Scraps, Peels, Food', color: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
    { name: 'E-waste', count: 'Circuits, Gadgets, Cables', color: 'bg-purple-100 text-purple-800 border-purple-200' },
    { name: 'Textile', count: 'Fabric, Garments', color: 'bg-pink-100 text-pink-800 border-pink-200' },
    { name: 'Hazardous / Medical', count: 'Batteries, Blisters, Sharps', color: 'bg-red-100 text-red-800 border-red-200' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* Hero Section */}
      <section className="relative pt-12 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
            <span>1M1B AI for Sustainability Virtual Internship &bull; IBM SkillsBuild</span>
          </div>

          {/* Main Hero Header */}
          <div className="space-y-3">
            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
              EcoSort <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 bg-clip-text text-transparent">AI</span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-slate-700">
              AI-Powered Waste Segregation &amp; Sustainability Assistant
            </p>
            <p className="text-base sm:text-lg text-slate-600 font-medium italic">
              &ldquo;Identify waste. Understand its impact. Take the right action.&rdquo;
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Empowering households, schools, colleges, and communities with computer vision to accurately identify waste types, assess recyclability, and take verified circular actions.
          </p>

          {/* CTA Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/analyzer"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 transition-all flex items-center justify-center gap-2 group"
            >
              <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Analyze Waste</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/guide"
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 active:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Explore Sustainability</span>
            </Link>
          </div>

          {/* Quick stats / Highlights */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 10+ Waste Categories
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Multimodal Vision AI
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Responsible AI Safeguards
            </span>
          </div>
        </div>

        {/* Problem Statement Card */}
        <div className="mt-14 max-w-4xl mx-auto bg-gradient-to-br from-emerald-900 via-slate-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-800/40 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
          
          <div className="relative z-10 space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <Compass className="w-4 h-4" />
              <span>Core Problem Statement</span>
            </div>
            <p className="text-base sm:text-xl font-semibold leading-relaxed text-slate-100">
              &ldquo;How might we use AI to help people identify and segregate waste correctly so that waste management and resource utilization can become more sustainable?&rdquo;
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 border-t border-slate-800">
              <span>Target: Students, Households, Schools, Colleges, Offices &amp; Communities</span>
              <span className="text-emerald-400 font-semibold">SDG 12 &bull; SDG 11 &bull; SDG 13</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Feature Cards */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Key Features
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            How EcoSort AI Drives Responsible Waste Management
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-3xl border border-slate-200/90 p-7 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${card.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-lg">
                      {card.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Interactive Demo Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-slate-50/80 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
              Instant Hands-on Demo
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">
              Try EcoSort AI Without Uploading Files
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Click any sample waste item below to see the complete multimodal vision analysis, recyclability determination, and safety recommendations in action.
            </p>
          </div>

          <SampleImageSelector onSelectSample={handleSelectSample} />
        </div>
      </section>

      {/* UN Sustainable Development Goals Section */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Global Impact Framework
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Advancing UN Sustainable Development Goals
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            EcoSort AI aligns directly with UN 2030 Agenda targets to reduce municipal waste burdens and empower responsible resource cycles.
          </p>
        </div>

        <SDGBadges variant="cards" />
      </section>

      {/* Supported Waste Categories Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Comprehensive Waste Category Support
            </h3>
            <p className="text-xs text-slate-500">
              Engineered with specialized segregation rules for everyday household and institutional items.
            </p>
          </div>
          <Link
            href="/guide"
            className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1"
          >
            <span>View 5R Guide</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {wasteCategories.map((cat) => (
            <div
              key={cat.name}
              className="p-3.5 rounded-2xl border bg-white shadow-xs hover:border-emerald-300 transition-colors"
            >
              <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold border mb-1.5 ${cat.color}`}>
                {cat.name}
              </div>
              <p className="text-[11px] text-slate-500 leading-tight">
                {cat.count}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action bar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-black">
              Ready to Segregate Waste Responsibly?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
              Snap a photo of any item or explore our interactive sustainability activity dashboard to track environmental progress.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/analyzer"
              className="px-6 py-3 rounded-2xl bg-white text-emerald-800 font-bold text-sm shadow-md hover:bg-emerald-50 transition-all"
            >
              Start AI Scan
            </Link>
            <Link
              href="/dashboard"
              className="px-6 py-3 rounded-2xl bg-emerald-800/60 hover:bg-emerald-800 text-white font-bold text-sm border border-emerald-400/40 transition-all"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

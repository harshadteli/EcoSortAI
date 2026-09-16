'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Info, 
  Target, 
  Users, 
  Cpu, 
  Layers, 
  Lightbulb, 
  Compass, 
  AlertTriangle, 
  Sparkles, 
  ArrowRight,
  Globe2,
  CheckCircle2,
  ShieldCheck,
  Zap,
  BookOpen
} from 'lucide-react';
import { SDGBadges } from '@/components/SDGBadges';
import { WorkflowDiagram } from '@/components/WorkflowDiagram';
import { ImpactModelChart } from '@/components/ImpactModelChart';

export default function AboutPage() {
  const designThinkingSteps = [
    {
      phase: 'Empathize',
      title: 'Understanding Citizen Dilemma',
      color: 'border-blue-200 bg-blue-50 text-blue-900',
      badge: 'bg-blue-600 text-white',
      desc: 'Users often struggle to differentiate complex composite packaging, coated papers, and plastic resin numbers, causing widespread bin contamination at the source.',
    },
    {
      phase: 'Define',
      title: 'Problem Framing',
      color: 'border-amber-200 bg-amber-50 text-amber-900',
      badge: 'bg-amber-600 text-white',
      desc: '“How might we use AI to help people identify and segregate waste correctly so that waste management and resource utilization can become more sustainable?”',
    },
    {
      phase: 'Ideate',
      title: 'Multimodal AI Architecture',
      color: 'border-teal-200 bg-teal-50 text-teal-900',
      badge: 'bg-teal-600 text-white',
      desc: 'Conceived an instant visual assistant that processes images, enforces strict safety guidelines for hazardous items, and provides conservative 5R circular actions.',
    },
    {
      phase: 'Prototype',
      title: 'Next.js & Vision AI Assistant',
      color: 'border-purple-200 bg-purple-50 text-purple-900',
      badge: 'bg-purple-600 text-white',
      desc: 'Built a modern, mobile-friendly full-stack prototype featuring live camera capture, secure backend AI proxy, and a robust demo simulation fallback mode.',
    },
    {
      phase: 'Test & Refine',
      title: 'Validation & Responsible AI',
      color: 'border-emerald-200 bg-emerald-50 text-emerald-900',
      badge: 'bg-emerald-600 text-white',
      desc: 'Tested across 10+ waste material classes. Integrated uncertainty alerts for low-confidence scans and strict safety protocols for batteries and e-waste.',
    },
  ];

  const limitations = [
    'Visual Ambiguity: AI models may misclassify visually similar objects (e.g. biodegradable PLA vs conventional PET plastic without clear markings).',
    'Image Quality Sensitivity: Poor lighting, extreme motion blur, or heavy occlusions reduce classification confidence.',
    'Municipal Variation: Local waste collection infrastructure and facility sorting capabilities vary significantly by city and region.',
    'Specialized Materials: Composite multi-layer plastics and industrial chemicals require laboratory testing for exact material characterization.',
    'Informational Role: AI recommendations are educational guidance and should not replace municipal directives or hazardous material regulations.',
    'Measurement Rigor: Real-world landfill diversion impact requires long-term longitudinal field measurement and community compliance audits.',
  ];

  const futureScopeItems = [
    {
      title: 'Multilingual Regional Support',
      desc: 'Localize interface and audio guidance into Marathi, Hindi, and regional languages for wider grassroots adoption across Indian communities.',
      badge: 'Localization',
    },
    {
      title: 'Voice-Based Waste Assistant',
      desc: 'Interactive two-way speech recognition allowing users to ask questions like "Is this medicine wrapper recyclable in Mumbai?"',
      badge: 'Voice AI',
    },
    {
      title: 'Municipality-Specific Rule Engine',
      desc: 'Geo-location integration to map items directly against local municipal ward collection calendars and dry/wet pick-up days.',
      badge: 'Geo-Spatial',
    },
    {
      title: 'Edge AI / Offline Vision Models',
      desc: 'Quantized on-device TensorFlow.js / ONNX models allowing waste identification even in remote areas without internet connectivity.',
      badge: 'Edge AI',
    },
    {
      title: 'Community Sustainability Gamification',
      desc: 'School and college leaderboards, green eco-points, and verified certificates for active waste segregation participation.',
      badge: 'Gamification',
    },
    {
      title: 'Recycling Facility & Kabadiwala Locator',
      desc: 'Direct map integration connecting citizens with licensed e-waste recyclers, scrap dealers, and battery drop-off bins.',
      badge: 'Logistics',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <Info className="w-3.5 h-3.5 text-emerald-600" />
          <span>Project Specifications &bull; 1M1B Internship</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          About EcoSort AI
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
          Developed as a student project for the <strong>1M1B AI for Sustainability Virtual Internship</strong> in collaboration with <strong>IBM SkillsBuild &amp; AICTE</strong>.
        </p>
      </div>

      {/* Project Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-2 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Project Purpose</div>
          <h3 className="font-bold text-slate-900 text-base">AI Waste Segregation</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Automating accurate source segregation and cultivating circular economy habits across communities.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-2 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Primary SDG</div>
          <h3 className="font-bold text-amber-900 text-base">SDG 12: Responsible Consumption</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Target 12.5: Substantially reduce waste generation through prevention, reduction, recycling and reuse.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-2 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Target Users</div>
          <h3 className="font-bold text-slate-900 text-base">Students &amp; Communities</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Households, schools, university campuses, offices, residential societies, and civic volunteers.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-2 shadow-xs">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400">AI Technologies</div>
          <h3 className="font-bold text-emerald-900 text-base">Multimodal Vision &amp; Generative AI</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Gemini Multimodal Vision API, prompt engineering, structured JSON validation, and ethical guardrails.
          </p>
        </div>
      </div>

      {/* Design Thinking Section */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Methodology Framework
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Design Thinking Process
          </h2>
          <p className="text-xs text-slate-500">
            How human-centered design shaped EcoSort AI from user empathy to validated prototype.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {designThinkingSteps.map((step, idx) => (
            <div
              key={step.phase}
              className={`rounded-2xl border p-5 transition-all shadow-xs flex flex-col justify-between ${step.color}`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-0.5 rounded-lg text-[10px] font-bold uppercase ${step.badge}`}>
                    {step.phase}
                  </span>
                  <span className="text-xs font-black opacity-50">0{idx + 1}</span>
                </div>
                <h4 className="font-bold text-xs mb-2">{step.title}</h4>
                <p className="text-[11px] leading-relaxed opacity-90">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* System Workflow Diagram Component */}
      <section>
        <WorkflowDiagram />
      </section>

      {/* Impact Model Framework Component */}
      <section>
        <ImpactModelChart />
      </section>

      {/* Project Limitations */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="max-w-2xl space-y-1">
          <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider">
            <AlertTriangle className="w-4 h-4" />
            <span>Honest Technical Boundaries</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900">
            Project Limitations &amp; Ethical Constraints
          </h2>
          <p className="text-xs text-slate-500">
            In accordance with Responsible AI standards, we explicitly document model limitations and real-world boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {limitations.map((item, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Future Scope */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Product Roadmap
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Future Scope &amp; Scalability
          </h2>
          <p className="text-xs text-slate-500">
            Planned enhancements for larger societal and municipal deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {futureScopeItems.map((scope) => (
            <div
              key={scope.title}
              className="bg-white rounded-2xl border border-slate-200 p-5 shadow-xs hover:border-emerald-300 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {scope.badge}
                </span>
                <h4 className="font-bold text-sm text-slate-900">{scope.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{scope.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Responsible AI and Slides */}
      <section className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900 text-white rounded-3xl p-6 sm:p-8">
        <div className="space-y-1">
          <h3 className="font-bold text-lg text-white">Responsible AI Considerations</h3>
          <p className="text-xs text-slate-300">
            Explore how fairness, privacy, safety, and transparency govern EcoSort AI.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/responsible-ai"
            className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Read Responsible AI</span>
          </Link>
          <Link
            href="/presentation"
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>View 10-Slide Deck</span>
          </Link>
        </div>
      </section>

    </div>
  );
}

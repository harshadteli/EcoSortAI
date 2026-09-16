'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Minimize2, 
  FileText, 
  Sparkles, 
  Recycle, 
  ShieldCheck, 
  Target, 
  Users, 
  Cpu, 
  HelpCircle,
  BarChart3,
  Globe2,
  CheckCircle2,
  Layers,
  ArrowRight
} from 'lucide-react';

interface Slide {
  number: number;
  title: string;
  tagline: string;
  badge: string;
  content: React.ReactNode;
  speakerNotes: string;
}

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showSpeakerNotes, setShowSpeakerNotes] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowLeft') {
        setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  const slides: Slide[] = [
    {
      number: 1,
      title: 'EcoSort AI',
      tagline: 'AI-Powered Waste Segregation & Sustainability Assistant',
      badge: 'Project Title & Introduction',
      speakerNotes: 'Good morning/afternoon respected mentors and jury. I am presenting EcoSort AI, developed under the 1M1B AI for Sustainability Virtual Internship in collaboration with IBM SkillsBuild and AICTE.',
      content: (
        <div className="space-y-6 text-center max-w-2xl mx-auto py-8">
          <div className="w-20 h-20 rounded-3xl bg-emerald-600 text-white flex items-center justify-center mx-auto shadow-xl shadow-emerald-600/30">
            <Recycle className="w-10 h-10 animate-spin-slow" />
          </div>
          <div className="space-y-2">
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-300">
              1M1B &bull; IBM SkillsBuild &bull; AICTE
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              EcoSort <span className="text-emerald-600">AI</span>
            </h1>
            <p className="text-lg text-slate-700 font-semibold">
              AI-Powered Waste Segregation &amp; Sustainability Assistant
            </p>
            <p className="text-sm text-slate-500 italic">
              &ldquo;Identify waste. Understand its impact. Take the right action.&rdquo;
            </p>
          </div>
          <div className="pt-4 border-t border-slate-200 grid grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
            <div>
              <span className="block font-bold text-slate-900">Track</span>
              <span>AI for Sustainability</span>
            </div>
            <div>
              <span className="block font-bold text-slate-900">Primary SDG</span>
              <span>SDG 12 (Target 12.5)</span>
            </div>
            <div>
              <span className="block font-bold text-slate-900">Technology</span>
              <span>Multimodal Vision AI</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 2,
      title: 'The Problem Statement',
      tagline: 'Addressing Household & Institutional Waste Segregation Gaps',
      badge: 'Context & Challenge',
      speakerNotes: 'Improper segregation at the source is the single largest bottleneck in waste management. When recyclables get mixed with food waste or wet garbage, entire truckloads get rejected and dumped in landfills.',
      content: (
        <div className="space-y-6 max-w-3xl mx-auto py-4">
          <div className="bg-emerald-900 text-white rounded-3xl p-6 sm:p-8 shadow-md border border-emerald-800">
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-400">Core Problem Statement</span>
            <blockquote className="text-xl sm:text-2xl font-bold leading-relaxed mt-2 text-emerald-50">
              &ldquo;How might we use AI to help people identify and segregate waste correctly so that waste management and resource utilization can become more sustainable?&rdquo;
            </blockquote>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">Material Confusion</h4>
              <p className="text-slate-600">Citizens cannot easily distinguish composite packaging, coated paper, or multi-layer plastics.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">Batch Contamination</h4>
              <p className="text-slate-600">A single unrinsed food container can ruin a 50kg batch of clean recyclable paper/cardboard.</p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 text-sm">Hazardous Risks</h4>
              <p className="text-slate-600">Batteries and e-waste dumped into general garbage cause compactor fires and toxic groundwater leaching.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 3,
      title: 'UN SDG Alignment',
      tagline: 'Targeting Global Sustainable Development Goals',
      badge: 'Impact Architecture',
      speakerNotes: 'Our project aligns directly with UN Sustainable Development Goal 12 (Responsible Consumption & Production) as the primary focus, with secondary alignment to SDG 11 (Sustainable Cities) and SDG 13 (Climate Action).',
      content: (
        <div className="space-y-6 max-w-3xl mx-auto py-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-amber-50 border border-amber-200 rounded-3xl p-5 text-amber-950 space-y-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-amber-600 text-white">
                SDG 12 &bull; PRIMARY
              </span>
              <h4 className="text-base font-extrabold">Responsible Consumption &amp; Production</h4>
              <p className="text-xs text-amber-900 leading-relaxed">
                Target 12.5: Substantially reduce waste generation through prevention, reduction, recycling, and reuse.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-3xl p-5 text-orange-950 space-y-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-orange-600 text-white">
                SDG 11 &bull; SECONDARY
              </span>
              <h4 className="text-base font-extrabold">Sustainable Cities &amp; Communities</h4>
              <p className="text-xs text-orange-900 leading-relaxed">
                Target 11.6: Reduce per capita urban environmental impact through efficient municipal waste sorting.
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-5 text-emerald-950 space-y-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-black bg-emerald-700 text-white">
                SDG 13 &bull; SECONDARY
              </span>
              <h4 className="text-base font-extrabold">Climate Action</h4>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Diverting organic wet waste from anaerobic landfills mitigates fugitive methane emissions.
              </p>
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 text-center">
            <strong>Scientific Integrity: </strong> We avoid fabricated carbon metrics and focus on verifiable source segregation compliance.
          </div>
        </div>
      ),
    },
    {
      number: 4,
      title: 'Target Users & Personas',
      tagline: 'Designing for Everyday Citizens & Communities',
      badge: 'Stakeholder Focus',
      speakerNotes: 'EcoSort AI is designed with an accessible, mobile-first interface suitable for diverse user groups—from primary school students to college campuses and residential apartment societies.',
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto py-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-4 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mx-auto">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-xs">Students &amp; Schools</h4>
            <p className="text-[11px] text-slate-500">Eco-clubs and classrooms learning circular 5R principles through hands-on scanning.</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-4 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Recycle className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-xs">Households</h4>
            <p className="text-[11px] text-slate-500">Families segregating daily wet kitchen scraps from dry packaging and recyclables.</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-4 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-xs">Offices &amp; Colleges</h4>
            <p className="text-[11px] text-slate-500">Managing bulk paper, e-waste, cardboard shipping boxes, and cafeteria waste.</p>
          </div>
          <div className="bg-white rounded-2xl border border-slate-200 p-4 text-center space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
              <Globe2 className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-slate-900 text-xs">Civic Communities</h4>
            <p className="text-[11px] text-slate-500">Residential welfare associations and volunteer cleanliness drives conducting waste audits.</p>
          </div>
        </div>
      ),
    },
    {
      number: 5,
      title: 'The AI Solution Architecture',
      tagline: 'Computer Vision & Structured Multimodal Intelligence',
      badge: 'Technical Solution',
      speakerNotes: 'We utilize a multimodal AI pipeline. Images captured via camera or upload are analyzed for texture, geometry, and resin codes, returning strictly validated JSON with safety guardrails.',
      content: (
        <div className="space-y-6 max-w-3xl mx-auto py-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <Cpu className="w-4 h-4 text-emerald-600" />
                <span>Multimodal Vision Layer</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Connects to Gemini Multimodal Vision API via a secure backend route handler (`/api/analyze`), protecting secrets and performing prompt engineering for structured extraction.
              </p>
            </div>
            <div className="bg-white rounded-3xl border border-slate-200 p-5 space-y-3">
              <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Structured JSON Validation</span>
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Enforces strict schema: Item, Category (10 classes), Material, Recyclability, Stepwise Action, Sustainability Tip, Confidence Score (0-100%), and Safety Notes.
              </p>
            </div>
          </div>
          <div className="bg-slate-900 text-white rounded-2xl p-4 font-mono text-[11px] overflow-x-auto">
            <span className="text-slate-400">// Strict Schema Format</span>
            <br />
            {`{ "item": "PET Bottle", "category": "Plastic", "recyclability": "Usually Recyclable", "confidence": 96 }`}
          </div>
        </div>
      ),
    },
    {
      number: 6,
      title: 'How AI is Used: The 6-Stage Pipeline',
      tagline: 'From Pixel Input to Certified Disposal Guidance',
      badge: 'AI Workflow',
      speakerNotes: 'Here is the exact pipeline: The user uploads an image, the vision layer extracts visual features, categorizes material, applies safety rules, generates practical disposal steps, and displays visual reasoning.',
      content: (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-3xl mx-auto py-4 text-xs">
          {[
            { step: '1', title: 'Capture / Upload', desc: 'WebRTC camera or drag-and-drop' },
            { step: '2', title: 'Vision Processing', desc: 'Multimodal feature extraction' },
            { step: '3', title: 'Classification', desc: '10 distinct waste categories' },
            { step: '4', title: 'Recyclability Check', desc: 'Conservative circular assessment' },
            { step: '5', title: 'Safety & 5R Tip', desc: 'Hazard alerts & circular habits' },
            { step: '6', title: 'Confidence & Reason', desc: 'Transparent visual reasoning' },
          ].map((item) => (
            <div key={item.step} className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1">
              <span className="w-5 h-5 rounded-md bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center">
                {item.step}
              </span>
              <h5 className="font-bold text-slate-900">{item.title}</h5>
              <p className="text-[11px] text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      ),
    },
    {
      number: 7,
      title: 'Prototype Features & Implementation',
      tagline: 'Modern, Responsive Full-Stack Next.js Application',
      badge: 'Product Features',
      speakerNotes: 'Our application includes 5 fully responsive modules: The interactive AI Waste Analyzer, Live Camera modal, Activity Dashboard with charts, 5R Sustainability Guide, and Knowledge Quiz.',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto py-4 text-xs">
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-emerald-700 text-sm">&bull; AI Waste Analyzer</h4>
            <p className="text-slate-600">WebRTC camera integration, drag-drop upload, instant sample selector, and voice text-to-speech reading.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-blue-700 text-sm">&bull; Sustainability Dashboard</h4>
            <p className="text-slate-600">Category pie charts, recyclability donut graphs, weekly trends, CSV export, and live session tracking.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-amber-700 text-sm">&bull; 5R &amp; Resin Guide</h4>
            <p className="text-slate-600">Educational hierarchy (Refuse to Recycle), plastic codes #1-#7 table, and interactive quiz check.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
            <h4 className="font-bold text-purple-700 text-sm">&bull; Dual Mode Operation</h4>
            <p className="text-slate-600">Seamlessly runs in Demo AI Mode without API keys, and switches to Connected Live AI when API key is provided.</p>
          </div>
        </div>
      ),
    },
    {
      number: 8,
      title: 'Responsible AI & Safety Guardrails',
      tagline: 'Ethical, Transparent, and Safe AI Operation',
      badge: 'Responsible AI',
      speakerNotes: 'We implemented 4 core Responsible AI principles: Fairness across diverse lighting and items, Transparency with confidence scores and explanations, complete user Privacy, and strict Safety guardrails for hazardous materials.',
      content: (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto py-4 text-xs">
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-blue-950 space-y-1">
            <h4 className="font-bold text-sm">1. Fairness</h4>
            <p className="text-blue-900">Tested across diverse angles, shadows, and packaging appearances to prevent skewed classifications.</p>
          </div>
          <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-teal-950 space-y-1">
            <h4 className="font-bold text-sm">2. Transparency</h4>
            <p className="text-teal-900">Prominent confidence percentage, visual reasoning explanation, and low-confidence uncertainty notices.</p>
          </div>
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-950 space-y-1">
            <h4 className="font-bold text-sm">3. Privacy</h4>
            <p className="text-emerald-900">Zero collection of personal data; ephemeral image processing; local client-side audit logs.</p>
          </div>
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-950 space-y-1">
            <h4 className="font-bold text-sm">4. Safety</h4>
            <p className="text-red-900">Strict hazard alerts for lithium batteries and e-waste; never suggests unsafe DIY burning or crushing.</p>
          </div>
        </div>
      ),
    },
    {
      number: 9,
      title: 'Expected & Potential Impact',
      tagline: 'Theory of Change: From AI Awareness to Circular Habit',
      badge: 'Impact Analysis',
      speakerNotes: 'Our impact model connects AI identification directly to citizen awareness, which drives better source segregation, reduces sorting facility contamination, and supports SDG 12 targets.',
      content: (
        <div className="space-y-4 max-w-3xl mx-auto py-4 text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 p-4 rounded-2xl bg-white border border-slate-200 font-medium text-slate-700">
            <span>AI Recognition</span>
            <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Citizen Awareness</span>
            <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Clean Source Sorting</span>
            <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>High-Grade Recycling</span>
            <ArrowRight className="w-4 h-4 text-emerald-600 shrink-0" />
            <span className="font-bold text-emerald-700">SDG 12 Impact</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
              <h5 className="font-bold text-slate-900">Qualitative Benefits</h5>
              <p className="text-slate-600 leading-relaxed">
                Empowers citizens with immediate clarity on complex items like blister packs, tetra packs, and greasy boxes.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1">
              <h5 className="font-bold text-slate-900">Municipal Synergies</h5>
              <p className="text-slate-600 leading-relaxed">
                Assists urban local bodies by lowering contamination rates in dry collection streams and hazardous battery bins.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      number: 10,
      title: 'Conclusion & Future Scope',
      tagline: 'Scaling EcoSort AI for Communities & Campuses',
      badge: 'Roadmap & Conclusion',
      speakerNotes: 'In conclusion, EcoSort AI demonstrates a tangible, ethical application of AI for environmental sustainability. Our future roadmap includes Marathi/Hindi multilingual support, voice assistance, and offline edge vision models.',
      content: (
        <div className="space-y-5 max-w-3xl mx-auto py-4 text-xs">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-emerald-950 space-y-1">
            <h4 className="font-bold text-sm">Conclusion</h4>
            <p className="leading-relaxed">
              EcoSort AI bridges the gap between complex waste segregation protocols and everyday citizen decisions using accessible, responsible multimodal AI.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1">
              <h5 className="font-bold text-slate-900 text-xs">1. Regional Languages</h5>
              <p className="text-[11px] text-slate-500">Marathi, Hindi, and regional speech interfaces.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1">
              <h5 className="font-bold text-slate-900 text-xs">2. Municipal Geo-Mapping</h5>
              <p className="text-[11px] text-slate-500">Ward-specific collection schedules &amp; recyclers locator.</p>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-slate-200 space-y-1">
              <h5 className="font-bold text-slate-900 text-xs">3. Offline Edge Vision</h5>
              <p className="text-[11px] text-slate-500">On-device quantized vision models for zero-connectivity zones.</p>
            </div>
          </div>
          <div className="text-center pt-2 font-bold text-slate-700">
            Thank you! We welcome questions and feedback from the jury.
          </div>
        </div>
      ),
    },
  ];

  const current = slides[currentSlide];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between py-6 px-4 sm:px-8">
      
      {/* Presentation Top Control Bar */}
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1">
            <ChevronLeft className="w-4 h-4" />
            <span>Exit to App</span>
          </Link>
          <span className="text-slate-600">|</span>
          <span className="text-slate-400">10-Slide Student Presentation Mode</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowSpeakerNotes(!showSpeakerNotes)}
            className={`px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all flex items-center gap-1.5 ${
              showSpeakerNotes
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{showSpeakerNotes ? 'Hide Speaker Notes' : 'Speaker Notes'}</span>
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
            title="Toggle fullscreen"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Slide Card */}
      <div className="max-w-5xl mx-auto w-full my-auto py-6">
        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 relative overflow-hidden min-h-[480px] flex flex-col justify-between animate-fadeIn">
          
          {/* Slide Header */}
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold text-xs border border-emerald-500/30">
                Slide {current.number} of {slides.length}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {current.badge}
              </span>
            </div>
            <div className="text-xs font-bold text-slate-400">
              EcoSort AI Presentation
            </div>
          </div>

          {/* Slide Dynamic Content */}
          <div className="flex-1 flex flex-col justify-center">
            {current.content}
          </div>

          {/* Slide Footer / Progress bar */}
          <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Optional Speaker Notes Drawer */}
        {showSpeakerNotes && (
          <div className="mt-4 bg-slate-800/90 border border-slate-700 rounded-2xl p-4 text-xs space-y-1 animate-fadeIn">
            <div className="text-amber-400 font-bold uppercase tracking-wider text-[10px]">
              Presenter Talking Points (Slide {current.number})
            </div>
            <p className="text-slate-300 leading-relaxed italic">
              &ldquo;{current.speakerNotes}&rdquo;
            </p>
          </div>
        )}
      </div>

      {/* Slide Navigation Buttons */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between pt-4 border-t border-slate-800">
        <button
          onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev))}
          disabled={currentSlide === 0}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-white font-semibold text-xs border border-slate-700 transition-all flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Slide</span>
        </button>

        {/* Slide Dots / Selectors */}
        <div className="flex items-center gap-1.5 overflow-x-auto max-w-xs sm:max-w-md px-2">
          {slides.map((s, idx) => (
            <button
              key={s.number}
              onClick={() => setCurrentSlide(idx)}
              className={`w-7 h-7 rounded-lg text-[11px] font-bold transition-all ${
                currentSlide === idx
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
              }`}
            >
              {s.number}
            </button>
          ))}
        </div>

        <button
          onClick={() => setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : prev))}
          disabled={currentSlide === slides.length - 1}
          className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
        >
          <span>Next Slide</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}

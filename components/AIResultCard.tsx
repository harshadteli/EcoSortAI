'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  Sparkles, 
  Recycle, 
  Volume2, 
  BookmarkCheck, 
  ArrowRight, 
  RefreshCw,
  Info,
  ShieldAlert,
  Flame,
  Check,
  Share2
} from 'lucide-react';
import { AIAnalysisResult } from '@/lib/types';
import { getCategoryColor, getConfidenceLevel, speakText } from '@/lib/utils';
import confetti from 'canvas-confetti';

interface AIResultCardProps {
  result: AIAnalysisResult;
  onReset: () => void;
  onSave?: (result: AIAnalysisResult) => void;
  isSaved?: boolean;
}

export function AIResultCard({ result, onReset, onSave, isSaved = false }: AIResultCardProps) {
  const [speaking, setSpeaking] = useState(false);
  const [copied, setCopied] = useState(false);

  const colors = getCategoryColor(result.category);
  const confidenceLevel = result.confidence_level || getConfidenceLevel(result.confidence);
  const isLowConfidence = result.confidence < 75;

  const handleVoicePlay = () => {
    setSpeaking(true);
    const speechText = `Waste detected: ${result.item}. Category: ${result.category}. Material: ${result.material}. Recyclability: ${result.recyclability}. Recommended Action: ${result.recommended_action}. Sustainability Tip: ${result.sustainability_tip}`;
    speakText(speechText);
    setTimeout(() => setSpeaking(false), 5000);
  };

  const handleSave = () => {
    if (onSave) {
      onSave(result);
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {}
    }
  };

  const handleCopy = () => {
    const summary = `EcoSort AI Waste Result:\nItem: ${result.item}\nCategory: ${result.category}\nRecyclability: ${result.recyclability}\nAction: ${result.recommended_action}\nTip: ${result.sustainability_tip}`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden transition-all animate-fadeIn">
      {/* Top Banner with AI Mode & Confidence */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b border-slate-700">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              AI Analysis Result
            </span>
            <div className="text-[11px] text-slate-300">
              {result.is_demo ? (
                <span className="inline-flex items-center gap-1.5 text-amber-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span>
                  Demo AI Mode (Sample Analysis)
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-emerald-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  Connected Multimodal AI
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Confidence Gauge */}
        <div className="flex items-center gap-3 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700">
          <div className="text-right">
            <div className="text-[10px] text-slate-400 uppercase font-semibold">AI Confidence</div>
            <div className="text-sm font-bold text-white flex items-center gap-1 justify-end">
              <span>{result.confidence}%</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                confidenceLevel === 'High' 
                  ? 'bg-emerald-500/20 text-emerald-300' 
                  : confidenceLevel === 'Medium' 
                  ? 'bg-amber-500/20 text-amber-300' 
                  : 'bg-red-500/20 text-red-300'
              }`}>
                {confidenceLevel}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 space-y-6">
        
        {/* Main Item Header & Classification */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1">
              Waste Detected
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight flex items-center gap-3">
              {result.item}
            </h2>
            <div className="text-xs text-slate-500 mt-1">
              <span className="font-semibold text-slate-700">Material:</span> {result.material}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Category Badge */}
            <div className={`px-3.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-2 shadow-xs ${colors.badge}`}>
              <span className={`w-2 h-2 rounded-full ${colors.dot}`}></span>
              <span>{result.category}</span>
            </div>

            {/* Recyclability Badge */}
            <div className={`px-3.5 py-1.5 rounded-xl border font-bold text-xs flex items-center gap-1.5 ${
              result.recyclability === 'Recyclable' || result.recyclability === 'Usually Recyclable'
                ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                : result.recyclability === 'Depends on Local Facility'
                ? 'bg-blue-100 text-blue-800 border-blue-300'
                : 'bg-slate-100 text-slate-800 border-slate-300'
            }`}>
              <Recycle className="w-3.5 h-3.5" />
              <span>{result.recyclability}</span>
            </div>
          </div>
        </div>

        {/* Low Confidence or Uncertainty Alert (Required Rule) */}
        {isLowConfidence && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3 text-amber-900 animate-pulse-subtle">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="font-bold">AI Uncertainty Warning</p>
              <p className="leading-relaxed">
                AI is not fully certain about this item (confidence: {result.confidence}%). Please verify with local waste-management guidance before disposal.
              </p>
            </div>
          </div>
        )}

        {/* Critical Safety Alert if Hazardous / Medical / Battery / E-waste */}
        {result.safety_note && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 text-red-900">
            <ShieldAlert className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
            <div className="text-xs space-y-1">
              <p className="font-bold">Safety &amp; Handling Caution</p>
              <p className="leading-relaxed">{result.safety_note}</p>
            </div>
          </div>
        )}

        {/* Grid for Recommended Action & Sustainability Tip */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Action Box */}
          <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Recommended Disposal Action</span>
            </div>
            <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
              {result.recommended_action}
            </p>
          </div>

          {/* Sustainability Tip Box */}
          <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 space-y-2">
            <div className="flex items-center gap-2 text-blue-800 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Sustainability Recommendation</span>
            </div>
            <p className="text-slate-800 text-xs sm:text-sm leading-relaxed font-medium">
              {result.sustainability_tip}
            </p>
          </div>
        </div>

        {/* AI Visual Explanation Box */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
          <div className="flex items-center gap-2 text-slate-700 font-bold text-xs">
            <Info className="w-4 h-4 text-slate-500" />
            <span>AI Visual Reasoning &amp; Explanation</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed italic">
            &ldquo;{result.explanation}&rdquo;
          </p>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {/* Audio Voice button */}
            <button
              onClick={handleVoicePlay}
              disabled={speaking}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              title="Listen to result summary"
            >
              <Volume2 className={`w-4 h-4 ${speaking ? 'text-emerald-600 animate-pulse' : 'text-slate-500'}`} />
              <span>{speaking ? 'Reading...' : 'Listen'}</span>
            </button>

            {/* Copy button */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-colors"
              title="Copy analysis details"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-slate-500" />}
              <span>{copied ? 'Copied' : 'Share'}</span>
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Save to history */}
            {onSave && (
              <button
                onClick={handleSave}
                disabled={isSaved}
                className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-xs ${
                  isSaved
                    ? 'bg-slate-100 text-slate-500 cursor-default'
                    : 'bg-emerald-50 text-emerald-700 border border-emerald-300 hover:bg-emerald-100'
                }`}
              >
                <BookmarkCheck className="w-4 h-4" />
                <span>{isSaved ? 'Saved to Dashboard' : 'Save Result'}</span>
              </button>
            )}

            {/* Analyze another item */}
            <button
              onClick={onReset}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-md shadow-emerald-600/20 transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Analyze Another Item</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { 
  UploadCloud, 
  Camera, 
  Sparkles, 
  RefreshCw, 
  AlertCircle, 
  CheckCircle2, 
  Trash2, 
  Cpu, 
  Layers, 
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { AIResultCard } from '@/components/AIResultCard';
import { CameraModal } from '@/components/CameraModal';
import { SampleImageSelector } from '@/components/SampleImageSelector';
import { AIAnalysisResult } from '@/lib/types';
import { SAMPLE_WASTE_ITEMS, SampleWasteItem } from '@/lib/demo-data';
import { saveResultToHistory, getStoredHistory } from '@/lib/utils';

function AnalyzerContent() {
  const searchParams = useSearchParams();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [selectedSample, setSelectedSample] = useState<SampleWasteItem | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<AIAnalysisResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSaved, setIsSaved] = useState(false);
  const [analysisStage, setAnalysisStage] = useState<string>('Initializing AI vision...');
  const [isDragging, setIsDragging] = useState(false);

  // Check if sample ID passed via URL query
  useEffect(() => {
    const sampleId = searchParams.get('sample');
    if (sampleId) {
      const sample = SAMPLE_WASTE_ITEMS.find((s) => s.id === sampleId);
      if (sample) {
        handleSampleSelect(sample);
      }
    }
  }, [searchParams]);

  const handleSampleSelect = (sample: SampleWasteItem) => {
    setSelectedSample(sample);
    setImagePreview(sample.thumbnail);
    setAnalysisResult(null);
    setErrorMessage(null);
    setIsSaved(false);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    processSelectedFile(file);
  };

  const processSelectedFile = (file?: File) => {
    setErrorMessage(null);
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrorMessage('Please upload a valid image file (JPEG, PNG, WebP, etc.).');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage('Image file is too large (maximum 10MB). Please select a smaller photo.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      setImagePreview(result);
      setSelectedSample(null);
      setAnalysisResult(null);
      setIsSaved(false);
    };
    reader.onerror = () => {
      setErrorMessage('Error reading file. Please try selecting the image again.');
    };
    reader.readAsDataURL(file);
  };

  // Drag and Drop
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    processSelectedFile(file);
  };

  // Camera Capture
  const handleCameraCapture = (base64Image: string) => {
    setImagePreview(base64Image);
    setSelectedSample(null);
    setAnalysisResult(null);
    setIsSaved(false);
    setErrorMessage(null);
  };

  // Main Analyze Execution
  const handleAnalyze = async () => {
    if (!imagePreview && !selectedSample) {
      setErrorMessage('Please upload an image, capture a photo, or choose a sample item first.');
      return;
    }

    setIsAnalyzing(true);
    setErrorMessage(null);
    setAnalysisStage('Analyzing visual features with multimodal AI...');

    const stages = [
      'Scanning object geometry & surface textures...',
      'Identifying material composition & resin markings...',
      'Assessing local recyclability & safety guidelines...',
      'Synthesizing actionable sustainability recommendations...',
    ];

    let stageIdx = 0;
    const stageInterval = setInterval(() => {
      if (stageIdx < stages.length) {
        setAnalysisStage(stages[stageIdx]);
        stageIdx++;
      }
    }, 450);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: selectedSample ? undefined : imagePreview,
          sample_id: selectedSample?.id,
        }),
      });

      clearInterval(stageInterval);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to complete AI analysis');
      }

      const resJson = await response.json();
      if (resJson.success && resJson.data) {
        setAnalysisResult(resJson.data);
      } else {
        throw new Error('Invalid response structure received from AI service.');
      }
    } catch (err: any) {
      clearInterval(stageInterval);
      console.error('Analysis error:', err);
      setErrorMessage(
        err.message || 'We could not analyze this image. Please try another clear photo of the waste item.'
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setImagePreview(null);
    setSelectedSample(null);
    setAnalysisResult(null);
    setErrorMessage(null);
    setIsSaved(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSaveResult = (result: AIAnalysisResult) => {
    saveResultToHistory(result);
    setIsSaved(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      
      {/* Page Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Interactive Computer Vision</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          AI Waste Analyzer
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Upload or capture any waste item. Our AI analyzes the material, categorizes it, verifies recyclability, and provides safe disposal guidance.
        </p>
      </div>

      {/* Main Content Area */}
      <div className="space-y-8">
        
        {/* If no result yet: Upload / Camera / Preview Interface */}
        {!analysisResult ? (
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
            
            {/* Error banner */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-4 flex items-start gap-3 text-red-900 text-xs">
                <AlertCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="font-bold">Analysis Warning</p>
                  <p>{errorMessage}</p>
                </div>
              </div>
            )}

            {/* Dropzone & Preview Box */}
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-3xl p-6 sm:p-10 transition-all text-center flex flex-col items-center justify-center min-h-[280px] ${
                isDragging
                  ? 'border-emerald-500 bg-emerald-50/50 scale-[0.99]'
                  : imagePreview
                  ? 'border-emerald-300 bg-emerald-50/20'
                  : 'border-slate-300 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-400'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                id="waste-file-input"
              />

              {imagePreview ? (
                /* Preview State */
                <div className="space-y-4 max-w-md w-full">
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 shadow-md">
                    <img
                      src={imagePreview}
                      alt="Waste item preview"
                      className="w-full h-full object-contain"
                    />
                    <button
                      onClick={handleReset}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 hover:bg-black/80 text-white text-xs backdrop-blur-xs transition-colors"
                      title="Remove image"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="text-xs text-slate-500 flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>
                      {selectedSample ? `Sample: ${selectedSample.name}` : 'Photo ready for analysis'}
                    </span>
                  </div>
                </div>
              ) : (
                /* Upload Prompt State */
                <div className="space-y-4 max-w-sm">
                  <div className="w-16 h-16 rounded-3xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <UploadCloud className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      Upload a waste image
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Drag &amp; drop your photo here, or browse from your device
                    </p>
                  </div>
                </div>
              )}

              {/* Action Buttons inside Dropzone */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs shadow-xs transition-all flex items-center gap-2"
                >
                  <UploadCloud className="w-4 h-4 text-slate-500" />
                  <span>{imagePreview ? 'Change Image' : 'Upload Image'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsCameraOpen(true)}
                  className="px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs shadow-xs transition-all flex items-center gap-2"
                >
                  <Camera className="w-4 h-4 text-slate-500" />
                  <span>Use Camera</span>
                </button>

                {imagePreview && !isAnalyzing && (
                  <button
                    type="button"
                    onClick={handleAnalyze}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-xs shadow-md shadow-emerald-600/25 transition-all flex items-center gap-2"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Analyze Waste Item</span>
                  </button>
                )}
              </div>
            </div>

            {/* Loading State animation during analysis */}
            {isAnalyzing && (
              <div className="bg-slate-900 text-white rounded-2xl p-8 text-center space-y-4 shadow-xl border border-slate-800 animate-fadeIn">
                <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border-4 border-emerald-500/20 animate-ping"></div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center animate-spin-slow">
                    <Sparkles className="w-6 h-6 animate-pulse" />
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">
                    Analyzing your waste with AI...
                  </h4>
                  <p className="text-xs text-emerald-400 font-medium mt-1 animate-pulse">
                    {analysisStage}
                  </p>
                </div>
                <div className="max-w-xs mx-auto bg-slate-800 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-2/3 animate-pulse"></div>
                </div>
              </div>
            )}

            {/* Quick Sample Selector */}
            <div className="pt-4 border-t border-slate-100">
              <SampleImageSelector
                onSelectSample={handleSampleSelect}
                selectedId={selectedSample?.id}
              />
            </div>
          </div>
        ) : (
          /* Result Card Display */
          <div className="space-y-6">
            <AIResultCard
              result={analysisResult}
              onReset={handleReset}
              onSave={handleSaveResult}
              isSaved={isSaved}
            />
          </div>
        )}

      </div>

      {/* Camera Capture Modal */}
      <CameraModal
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onCapture={handleCameraCapture}
      />
    </div>
  );
}

export default function AnalyzerPage() {
  return (
    <Suspense fallback={<div className="p-12 text-center text-sm text-slate-500">Loading AI Analyzer...</div>}>
      <AnalyzerContent />
    </Suspense>
  );
}

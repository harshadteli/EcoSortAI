'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Camera, RefreshCw, X, AlertCircle, Sparkles } from 'lucide-react';

interface CameraModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCapture: (base64Image: string) => void;
}

export function CameraModal({ isOpen, onClose, onCapture }: CameraModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [facingMode, setFacingMode] = useState<'environment' | 'user'>('environment');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      startCamera();
    } else {
      stopCamera();
      setCapturedImage(null);
      setCameraError(null);
    }
    return () => {
      stopCamera();
    };
  }, [isOpen, facingMode]);

  const startCamera = async () => {
    setCameraError(null);
    try {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }

      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: facingMode,
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
        audio: false,
      });

      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err: any) {
      console.error('Camera access error:', err);
      setCameraError('Camera access was not granted. You can upload an image instead.');
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      setStream(null);
    }
  };

  const toggleCameraFacing = () => {
    setFacingMode((prev) => (prev === 'environment' ? 'user' : 'environment'));
  };

  const takePhoto = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
    setCapturedImage(dataUrl);
    stopCamera();
  };

  const handleRetake = () => {
    setCapturedImage(null);
    startCamera();
  };

  const handleConfirm = () => {
    if (capturedImage) {
      onCapture(capturedImage);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-fadeIn">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <Camera className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Capture Waste Item</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 space-y-4">
          {cameraError ? (
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center space-y-3">
              <AlertCircle className="w-10 h-10 text-amber-600 mx-auto" />
              <p className="text-sm font-semibold text-amber-900">{cameraError}</p>
              <p className="text-xs text-amber-700">
                Please ensure your browser has camera permission or use the file upload option on the analyzer page.
              </p>
              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800"
                >
                  Return to File Upload
                </button>
              </div>
            </div>
          ) : capturedImage ? (
            /* Image Preview after Capture */
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-black aspect-video flex items-center justify-center border border-slate-200">
                <img
                  src={capturedImage}
                  alt="Captured waste preview"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={handleRetake}
                  className="flex-1 py-2.5 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Retake Photo</span>
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-md shadow-emerald-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Use This Photo</span>
                </button>
              </div>
            </div>
          ) : (
            /* Live Camera Stream */
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video flex items-center justify-center border border-slate-800">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full h-full object-cover"
                />
                
                {/* Target overlay reticle */}
                <div className="absolute inset-0 pointer-events-none border-2 border-dashed border-white/30 rounded-2xl m-6 flex items-center justify-center">
                  <span className="text-[11px] font-medium text-white/70 bg-black/50 px-3 py-1 rounded-full backdrop-blur-xs">
                    Align waste item inside frame
                  </span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={toggleCameraFacing}
                  className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-medium flex items-center gap-1.5"
                  title="Switch camera"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span className="hidden sm:inline">Flip Camera</span>
                </button>

                <button
                  onClick={takePhoto}
                  className="flex-1 py-3 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-sm shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
                >
                  <Camera className="w-5 h-5" />
                  <span>Capture Photo</span>
                </button>

                <button
                  onClick={onClose}
                  className="p-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-medium"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <canvas ref={canvasRef} className="hidden" />
        </div>
      </div>
    </div>
  );
}

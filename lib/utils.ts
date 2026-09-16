import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AIAnalysisResult, ConfidenceLevel, WasteCategory } from './types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getConfidenceLevel(confidence: number): ConfidenceLevel {
  if (confidence >= 85) return 'High';
  if (confidence >= 70) return 'Medium';
  return 'Low';
}

export function getCategoryColor(category: WasteCategory): {
  bg: string;
  text: string;
  border: string;
  badge: string;
  dot: string;
} {
  switch (category) {
    case 'Plastic':
      return {
        bg: 'bg-amber-50 dark:bg-amber-950/30',
        text: 'text-amber-800 dark:text-amber-300',
        border: 'border-amber-200 dark:border-amber-800/40',
        badge: 'bg-amber-100 text-amber-800 border-amber-300',
        dot: 'bg-amber-500',
      };
    case 'Paper':
    case 'Cardboard':
      return {
        bg: 'bg-blue-50 dark:bg-blue-950/30',
        text: 'text-blue-800 dark:text-blue-300',
        border: 'border-blue-200 dark:border-blue-800/40',
        badge: 'bg-blue-100 text-blue-800 border-blue-300',
        dot: 'bg-blue-500',
      };
    case 'Glass':
      return {
        bg: 'bg-cyan-50 dark:bg-cyan-950/30',
        text: 'text-cyan-800 dark:text-cyan-300',
        border: 'border-cyan-200 dark:border-cyan-800/40',
        badge: 'bg-cyan-100 text-cyan-800 border-cyan-300',
        dot: 'bg-cyan-500',
      };
    case 'Metal':
      return {
        bg: 'bg-slate-100 dark:bg-slate-800/40',
        text: 'text-slate-800 dark:text-slate-300',
        border: 'border-slate-300 dark:border-slate-700',
        badge: 'bg-slate-200 text-slate-800 border-slate-400',
        dot: 'bg-slate-500',
      };
    case 'Organic / Wet Waste':
      return {
        bg: 'bg-emerald-50 dark:bg-emerald-950/30',
        text: 'text-emerald-800 dark:text-emerald-300',
        border: 'border-emerald-200 dark:border-emerald-800/40',
        badge: 'bg-emerald-100 text-emerald-800 border-emerald-300',
        dot: 'bg-emerald-500',
      };
    case 'E-waste':
      return {
        bg: 'bg-purple-50 dark:bg-purple-950/30',
        text: 'text-purple-800 dark:text-purple-300',
        border: 'border-purple-200 dark:border-purple-800/40',
        badge: 'bg-purple-100 text-purple-800 border-purple-300',
        dot: 'bg-purple-500',
      };
    case 'Textile':
      return {
        bg: 'bg-pink-50 dark:bg-pink-950/30',
        text: 'text-pink-800 dark:text-pink-300',
        border: 'border-pink-200 dark:border-pink-800/40',
        badge: 'bg-pink-100 text-pink-800 border-pink-300',
        dot: 'bg-pink-500',
      };
    case 'Medical / Hazardous Waste':
      return {
        bg: 'bg-red-50 dark:bg-red-950/30',
        text: 'text-red-800 dark:text-red-300',
        border: 'border-red-200 dark:border-red-800/40',
        badge: 'bg-red-100 text-red-800 border-red-300',
        dot: 'bg-red-500',
      };
    default:
      return {
        bg: 'bg-stone-50 dark:bg-stone-900/40',
        text: 'text-stone-800 dark:text-stone-300',
        border: 'border-stone-200 dark:border-stone-800',
        badge: 'bg-stone-100 text-stone-800 border-stone-300',
        dot: 'bg-stone-500',
      };
  }
}

export function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return dateString;
  }
}

// Local Storage Helper
const STORAGE_KEY = 'ecosort_history_v1';

export function getStoredHistory(): AIAnalysisResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch (err) {
    console.error('Error reading localStorage history:', err);
    return [];
  }
}

export function saveResultToHistory(result: AIAnalysisResult): AIAnalysisResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const history = getStoredHistory();
    // Avoid duplicate IDs
    const updated = [result, ...history.filter(h => h.id !== result.id)].slice(0, 50); // limit to 50 items
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Error saving to history:', err);
    return [];
  }
}

export function clearHistory(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

// Export data to CSV
export function exportToCSV(records: AIAnalysisResult[]): void {
  if (!records.length) return;
  
  const headers = [
    'Item Detected',
    'Category',
    'Material',
    'Recyclability',
    'Confidence (%)',
    'Recommended Action',
    'Sustainability Tip',
    'Date Analyzed',
    'Is Demo',
  ];

  const rows = records.map(r => [
    `"${r.item.replace(/"/g, '""')}"`,
    `"${r.category}"`,
    `"${r.material.replace(/"/g, '""')}"`,
    `"${r.recyclability}"`,
    r.confidence,
    `"${r.recommended_action.replace(/"/g, '""')}"`,
    `"${r.sustainability_tip.replace(/"/g, '""')}"`,
    `"${r.analyzed_at}"`,
    r.is_demo ? 'Yes' : 'No',
  ]);

  const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', `ecosort_waste_audit_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Text to speech utility
export function speakText(text: string): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

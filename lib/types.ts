export type WasteCategory =
  | 'Plastic'
  | 'Paper'
  | 'Cardboard'
  | 'Glass'
  | 'Metal'
  | 'Organic / Wet Waste'
  | 'E-waste'
  | 'Textile'
  | 'Medical / Hazardous Waste'
  | 'Mixed / Unknown Waste';

export type RecyclabilityStatus =
  | 'Recyclable'
  | 'Usually Recyclable'
  | 'Not Normally Recyclable'
  | 'Depends on Local Facility';

export type ConfidenceLevel = 'Low' | 'Medium' | 'High';

export interface AIAnalysisResult {
  id: string;
  item: string;
  category: WasteCategory;
  material: string;
  recyclability: RecyclabilityStatus;
  recommended_action: string;
  sustainability_tip: string;
  confidence: number; // 0 to 100
  confidence_level?: ConfidenceLevel;
  explanation: string;
  safety_note?: string;
  is_demo: boolean;
  analyzed_at: string;
  image_url?: string;
  hazard_level?: 'none' | 'low' | 'high';
}

export interface WasteAnalysisRequest {
  image?: string; // base64 data url
  sample_id?: string;
}

export interface ActivityRecord extends AIAnalysisResult {
  notes?: string;
}

export interface DashboardMetrics {
  totalAnalyzed: number;
  recyclableCount: number;
  organicCount: number;
  hazardousCount: number;
  reviewRequiredCount: number;
}

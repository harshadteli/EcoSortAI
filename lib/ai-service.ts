import { GoogleGenerativeAI } from '@google/generative-ai';
import { AIAnalysisResult, WasteCategory, RecyclabilityStatus } from './types';
import { SAMPLE_WASTE_ITEMS } from './demo-data';

const ALLOWED_CATEGORIES: WasteCategory[] = [
  'Plastic',
  'Paper',
  'Cardboard',
  'Glass',
  'Metal',
  'Organic / Wet Waste',
  'E-waste',
  'Textile',
  'Medical / Hazardous Waste',
  'Mixed / Unknown Waste',
];

const ALLOWED_RECYCLABILITY: RecyclabilityStatus[] = [
  'Recyclable',
  'Usually Recyclable',
  'Not Normally Recyclable',
  'Depends on Local Facility',
];

export const SYSTEM_PROMPT = `
You are EcoSort AI, an expert computer vision sustainability and waste segregation assistant built for the 1M1B AI for Sustainability Virtual Internship with IBM SkillsBuild & AICTE.

Analyze the uploaded image of a discarded item or waste material.

Your task:
1. Identify the primary visible waste item.
2. Classify it into one of these EXACT categories:
   - Plastic
   - Paper
   - Cardboard
   - Glass
   - Metal
   - Organic / Wet Waste
   - E-waste
   - Textile
   - Medical / Hazardous Waste
   - Mixed / Unknown Waste
3. Identify the specific material (e.g. PET Plastic, Kraft Cardboard, Aluminum, Silicone, etc.).
4. Assess recyclability conservatively as one of:
   - "Recyclable"
   - "Usually Recyclable"
   - "Not Normally Recyclable"
   - "Depends on Local Facility"
5. Provide a clear, actionable, practical recommended disposal action.
6. Provide a short, impactful sustainability recommendation or waste prevention tip.
7. Assign an honest confidence score (integer 0 to 100). If blurry, mixed, or ambiguous, assign low confidence (e.g. 40-70%).
8. Provide a concise explanation (1-3 sentences) detailing the visual reasoning.
9. For hazardous, medical, chemical, battery, sharp glass, or electronic waste, provide a prominent safety note. NEVER recommend unsafe handling (e.g. burning, crushing batteries, pouring chemicals down drain).
10. If confidence < 75% or item is ambiguous, explicitly add to explanation or safety note: "AI is not fully certain about this item. Please verify with local waste-management guidance."

You MUST return ONLY valid JSON matching this exact structure:
{
  "item": "string",
  "category": "Plastic | Paper | Cardboard | Glass | Metal | Organic / Wet Waste | E-waste | Textile | Medical / Hazardous Waste | Mixed / Unknown Waste",
  "material": "string",
  "recyclability": "Recyclable | Usually Recyclable | Not Normally Recyclable | Depends on Local Facility",
  "recommended_action": "string",
  "sustainability_tip": "string",
  "confidence": 92,
  "explanation": "string",
  "safety_note": "string"
}
`;

export async function analyzeWasteImage(params: {
  imageBase64?: string;
  sampleId?: string;
}): Promise<AIAnalysisResult> {
  const { imageBase64, sampleId } = params;

  // 1. Check if matching sample item was selected
  if (sampleId) {
    const foundSample = SAMPLE_WASTE_ITEMS.find((s) => s.id === sampleId);
    if (foundSample) {
      return {
        ...foundSample.result,
        id: `scan-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
        analyzed_at: new Date().toISOString(),
        image_url: foundSample.thumbnail,
        is_demo: true,
      };
    }
  }

  const apiKey = process.env.GEMINI_API_KEY;

  // 2. If API Key is configured and an image was uploaded, call Gemini Multimodal Vision API
  if (apiKey && apiKey.trim() !== '' && imageBase64) {
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

      // Clean base64 string
      const base64Data = imageBase64.replace(/^data:image\/\w+;base64,/, '');
      const mimeMatch = imageBase64.match(/^data:(image\/\w+);base64,/);
      const mimeType = mimeMatch ? mimeMatch[1] : 'image/jpeg';

      const promptParts = [
        SYSTEM_PROMPT,
        {
          inlineData: {
            data: base64Data,
            mimeType: mimeType,
          },
        },
      ];

      const result = await model.generateContent(promptParts);
      const responseText = result.response.text();
      
      // Parse JSON from response
      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        const parsed = JSON.parse(jsonMatch[0]);
        const validated = validateAndSanitizeAIResponse(parsed, imageBase64);
        return validated;
      }
    } catch (error) {
      console.warn('Real AI API call failed or timed out. Falling back to robust Demo AI simulation:', error);
      // Fallback seamlessly to demo mode
    }
  }

  // 3. Demo AI Mode (Realistic Simulation)
  return generateSimulatedAnalysis(imageBase64);
}

function validateAndSanitizeAIResponse(raw: any, imageBase64?: string): AIAnalysisResult {
  const category: WasteCategory = ALLOWED_CATEGORIES.includes(raw.category)
    ? raw.category
    : 'Mixed / Unknown Waste';

  const recyclability: RecyclabilityStatus = ALLOWED_RECYCLABILITY.includes(raw.recyclability)
    ? raw.recyclability
    : 'Depends on Local Facility';

  const confidence = typeof raw.confidence === 'number' 
    ? Math.max(10, Math.min(100, Math.round(raw.confidence))) 
    : 85;

  let explanation = typeof raw.explanation === 'string' && raw.explanation.length > 5
    ? raw.explanation
    : 'Visual features analyzed through computer vision model for material segregation.';

  if (confidence < 75 && !explanation.includes('verify with local')) {
    explanation += ' (AI is not fully certain about this item. Please verify with local waste-management guidance.)';
  }

  const isHazardous = category === 'Medical / Hazardous Waste' || category === 'E-waste';

  return {
    id: `scan-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    item: typeof raw.item === 'string' ? raw.item : 'Identified Waste Item',
    category,
    material: typeof raw.material === 'string' ? raw.material : 'Composite Material',
    recyclability,
    recommended_action: typeof raw.recommended_action === 'string' ? raw.recommended_action : 'Place in appropriate segregated bin following municipal guidance.',
    sustainability_tip: typeof raw.sustainability_tip === 'string' ? raw.sustainability_tip : 'Adopting circular economy habits reduces landfill pressure.',
    confidence,
    explanation,
    safety_note: raw.safety_note || (isHazardous ? 'Exercise caution: handle with gloves and drop off at certified centers.' : undefined),
    is_demo: false,
    analyzed_at: new Date().toISOString(),
    image_url: imageBase64,
    hazard_level: isHazardous ? 'high' : 'none',
  };
}

function generateSimulatedAnalysis(imageBase64?: string): AIAnalysisResult {
  // Rotate through rich realistic sample profiles for user uploaded images in Demo Mode
  const demoProfiles = [
    {
      item: 'Polyethylene Packaging / Container',
      category: 'Plastic' as WasteCategory,
      material: 'HDPE (#2 High-Density Polyethylene)',
      recyclability: 'Recyclable' as RecyclabilityStatus,
      recommended_action: 'Rinse thoroughly to eliminate residual product, remove adhesive labels if simple, and place in dry recyclables stream.',
      sustainability_tip: 'HDPE is one of the easiest plastics to recycle into sturdy lumber and pipes. Prioritize large refill packs over multiple small containers.',
      confidence: 91,
      explanation: 'Visual classification identified semi-rigid opaque polymer structure with characteristic molding seam lines and high resistance to deformation.',
      safety_note: 'Non-hazardous household plastic container.',
      hazard_level: 'none' as const,
    },
    {
      item: 'Printed Paper / Notebook Document',
      category: 'Paper' as WasteCategory,
      material: 'Cellulose Wood Pulp Paper',
      recyclability: 'Recyclable' as RecyclabilityStatus,
      recommended_action: 'Remove any plastic binding or heavy metal clips. Keep clean and dry in the paper recycling bin.',
      sustainability_tip: 'Digitizing study notes and office paperwork saves mature trees and conserves thousands of liters of processing water.',
      confidence: 94,
      explanation: 'Detected flat sheet cellulose fibrous texture with monochromatic printed surface and absence of plastic lamination.',
      safety_note: 'Safe dry recyclable. Keep protected from moisture and grease.',
      hazard_level: 'none' as const,
    },
    {
      item: 'Organic Citrus & Vegetable Peelings',
      category: 'Organic / Wet Waste' as WasteCategory,
      material: 'Biodegradable Plant Biomass',
      recyclability: 'Not Normally Recyclable' as RecyclabilityStatus,
      recommended_action: 'Add to aerobic home compost or deposit in municipal green organic bin.',
      sustainability_tip: 'Organic waste decomposition in landfills releases potent methane gas; composting sequesters carbon back into the soil.',
      confidence: 96,
      explanation: 'Spectral pattern matches natural biological cellular matter undergoing typical oxidative maturation.',
      safety_note: 'Do not dispose in plastic garbage bags.',
      hazard_level: 'none' as const,
    },
    {
      item: 'Electronic Circuit / Cable Scrap',
      category: 'E-waste' as WasteCategory,
      material: 'Copper Wire & PVC Insulating Sheath',
      recyclability: 'Depends on Local Facility' as RecyclabilityStatus,
      recommended_action: 'Do not burn or strip insulation manually. Bring to an authorized e-waste collection center for mechanized copper recovery.',
      sustainability_tip: 'Recovering copper from e-waste uses 85% less energy than extracting virgin ore from mining operations.',
      confidence: 88,
      explanation: 'Detected stranded metallic conductor encased in synthetic thermoplastic elastomer with plug terminal.',
      safety_note: 'CAUTION: Burning wires releases toxic dioxins and chlorine gas. Always route to certified recyclers.',
      hazard_level: 'high' as const,
    }
  ];

  const picked = demoProfiles[Math.floor(Math.random() * demoProfiles.length)];

  return {
    id: `demo-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    ...picked,
    is_demo: true,
    analyzed_at: new Date().toISOString(),
    image_url: imageBase64,
  };
}

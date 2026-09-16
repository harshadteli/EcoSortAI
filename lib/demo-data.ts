import { AIAnalysisResult, WasteCategory, RecyclabilityStatus } from './types';

export interface SampleWasteItem {
  id: string;
  name: string;
  category: WasteCategory;
  thumbnail: string;
  description: string;
  result: Omit<AIAnalysisResult, 'id' | 'analyzed_at'>;
}

export const SAMPLE_WASTE_ITEMS: SampleWasteItem[] = [
  {
    id: 'sample-plastic-bottle',
    name: 'PET Water Bottle',
    category: 'Plastic',
    thumbnail: 'https://images.unsplash.com/photo-1562077772-3ab1218634f6?w=600&auto=format&fit=crop&q=80',
    description: 'Clear plastic drinking bottle with cap',
    result: {
      item: 'Clear Plastic Bottle',
      category: 'Plastic',
      material: 'PET (#1 Polyethylene Terephthalate)',
      recyclability: 'Usually Recyclable',
      recommended_action: 'Empty any remaining liquids, rinse lightly, flatten to save bin space, and screw the cap back on before placing in your dry recyclables bin.',
      sustainability_tip: 'Switch to a reusable stainless steel or BPA-free water bottle to prevent hundreds of single-use bottles from entering landfills each year.',
      confidence: 96,
      confidence_level: 'High',
      explanation: 'Visual inspection shows a transparent, cylindrical thermoplastic container with standard beverage threading and base reinforcement typical of PET resin #1.',
      safety_note: 'Non-hazardous. Ensure containers that held chemicals or pesticides are never mixed with beverage PET bottles.',
      is_demo: true,
      hazard_level: 'none'
    }
  },
  {
    id: 'sample-banana-peel',
    name: 'Banana Peel / Fruit Waste',
    category: 'Organic / Wet Waste',
    thumbnail: 'https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&auto=format&fit=crop&q=80',
    description: 'Organic fruit scraps and peelings',
    result: {
      item: 'Banana Peel & Fruit Scraps',
      category: 'Organic / Wet Waste',
      material: 'Biodegradable Organic Biomass',
      recyclability: 'Not Normally Recyclable',
      recommended_action: 'Place in your green wet waste bin or home composting bin. Keep free from plastic wrappers, stickers, or metal twist ties.',
      sustainability_tip: 'Composting organic waste at home or community level creates nutrient-rich soil fertilizer and prevents methane generation in landfills.',
      confidence: 98,
      confidence_level: 'High',
      explanation: 'Identified as organic botanical matter with typical fibrous cellulose structure and yellow-brown pigmentation characteristic of discarded Musa fruit peel.',
      safety_note: 'Safe organic item. Do not wrap in non-biodegradable polythene bags when disposing in wet waste.',
      is_demo: true,
      hazard_level: 'none'
    }
  },
  {
    id: 'sample-lithium-battery',
    name: 'Rechargeable Battery / Cell',
    category: 'Medical / Hazardous Waste',
    thumbnail: 'https://images.unsplash.com/photo-1619725002198-6a689b72f41d?w=600&auto=format&fit=crop&q=80',
    description: 'Discarded cylindrical battery cell',
    result: {
      item: 'Lithium-Ion / Alkaline Battery',
      category: 'Medical / Hazardous Waste',
      material: 'Lithium, Cobalt, Nickel & Heavy Metal Electrolytes',
      recyclability: 'Depends on Local Facility',
      recommended_action: 'DO NOT throw in general trash or recycling bins. Tape the terminals with non-conductive tape and drop off at an authorized e-waste or hazardous battery collection center.',
      sustainability_tip: 'Opt for long-life rechargeable NiMH or USB-C rechargeable cells to reduce hazardous battery disposal frequency.',
      confidence: 93,
      confidence_level: 'High',
      explanation: 'Detected cylindrical galvanic cell with metallic casing and polarity terminals. Contains toxic heavy metals and reactive chemical compounds requiring dedicated handling.',
      safety_note: 'CRITICAL SAFETY: Damaged or punctured batteries can short-circuit, overheat, or ignite. Never crush or incinerate batteries.',
      is_demo: true,
      hazard_level: 'high'
    }
  },
  {
    id: 'sample-cardboard-box',
    name: 'Corrugated Shipping Box',
    category: 'Cardboard',
    thumbnail: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?w=600&auto=format&fit=crop&q=80',
    description: 'Brown corrugated shipping cardboard',
    result: {
      item: 'Corrugated Cardboard Box',
      category: 'Cardboard',
      material: 'Unbleached Kraft Paper & Corrugated Fluting',
      recyclability: 'Recyclable',
      recommended_action: 'Remove excessive plastic shipping tape, flatten the box completely to maximize collection space, and keep it dry in the paper/cardboard bin.',
      sustainability_tip: 'Cardboard fibers can be recycled 5 to 7 times. Reuse sturdy boxes for storage or shipping before recycling.',
      confidence: 95,
      confidence_level: 'High',
      explanation: 'Visual features show rigid multi-ply brown fiberboard with fluted inner layer, cleanly cut edges, and absence of food contamination.',
      safety_note: 'If heavily soaked with grease or food oils (e.g. greasy pizza box bottoms), tear off the clean lid for recycling and compost or discard greasy parts.',
      is_demo: true,
      hazard_level: 'none'
    }
  },
  {
    id: 'sample-aluminum-can',
    name: 'Beverage Soda Can',
    category: 'Metal',
    thumbnail: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&auto=format&fit=crop&q=80',
    description: 'Aluminum beverage can with pull tab',
    result: {
      item: 'Aluminum Beverage Can',
      category: 'Metal',
      material: 'Aluminum Alloy (Series 3000/5000)',
      recyclability: 'Recyclable',
      recommended_action: 'Empty completely, rinse residue with a little water, and place in dry metal recycling bin. Pull tabs can stay attached.',
      sustainability_tip: 'Recycling aluminum saves up to 95% of the energy needed to make new aluminum from raw bauxite ore, with infinite recyclability.',
      confidence: 97,
      confidence_level: 'High',
      explanation: 'Detected cylindrical drawn-and-ironed metal container with stay-on pull tab mechanism and printed brand lacquering.',
      safety_note: 'Watch for sharp metal edges if the can is torn or crushed with tools.',
      is_demo: true,
      hazard_level: 'none'
    }
  },
  {
    id: 'sample-broken-phone',
    name: 'Broken Smartphone / PCB',
    category: 'E-waste',
    thumbnail: 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80',
    description: 'Damaged mobile phone with circuit board',
    result: {
      item: 'Smartphone / Electronic Circuit Board',
      category: 'E-waste',
      material: 'FR-4 Silicon PCB, Gold/Copper Traces, Glass & Lithium Polymer Battery',
      recyclability: 'Depends on Local Facility',
      recommended_action: 'E-waste requires specialized dismantling. Take to a registered authorized e-waste collection center, brand take-back booth, or municipal e-waste drive.',
      sustainability_tip: 'Electronics contain precious metals (gold, silver, palladium) and hazardous lead. Proper e-waste recycling recovers vital resources and protects soil water tables.',
      confidence: 91,
      confidence_level: 'High',
      explanation: 'Features electronic circuit components, ribbon connectors, screen assembly, and microchip packaging requiring certified WEEE handling.',
      safety_note: 'Ensure personal data is wiped if possible. Do not attempt to pry open sealed lithium battery compartments.',
      is_demo: true,
      hazard_level: 'high'
    }
  },
  {
    id: 'sample-glass-jar',
    name: 'Clear Glass Food Jar',
    category: 'Glass',
    thumbnail: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=600&auto=format&fit=crop&q=80',
    description: 'Transparent glass sauce jar',
    result: {
      item: 'Glass Food Container / Jar',
      category: 'Glass',
      material: 'Soda-Lime Container Glass',
      recyclability: 'Recyclable',
      recommended_action: 'Rinse out food remnants. Separate metal lid and place both into respective dry recycling streams.',
      sustainability_tip: 'Glass is 100% recyclable endlessly without any loss in purity or quality. Clean jars can also be repurposed for pantry storage.',
      confidence: 94,
      confidence_level: 'High',
      explanation: 'Visual refraction, transparency, and threaded glass neck indicate standard soda-lime container glass.',
      safety_note: 'Handle with care. If broken, wrap securely in newspaper or cardboard before disposal to prevent injury to sanitation workers.',
      is_demo: true,
      hazard_level: 'none'
    }
  },
  {
    id: 'sample-uncertain-composite',
    name: 'Laminated Snack Wrapper (Chip Bag)',
    category: 'Mixed / Unknown Waste',
    thumbnail: 'https://images.unsplash.com/photo-1621451537084-482c73073a0f?w=600&auto=format&fit=crop&q=80',
    description: 'Multi-layer foil-lined plastic packaging',
    result: {
      item: 'Multi-Layer Composite Snack Wrapper',
      category: 'Mixed / Unknown Waste',
      material: 'Metallized Plastic Film (BOPP / Aluminium Laminate)',
      recyclability: 'Not Normally Recyclable',
      recommended_action: 'Place in dry non-recyclable refuse bin unless your local municipality operates advanced pyrolysis or cement-kiln co-processing for multi-layered plastics (MLP).',
      sustainability_tip: 'Multi-layered plastics are difficult to separate mechanically. Seek snacks in bulk or recyclable mono-material packaging when feasible.',
      confidence: 68,
      confidence_level: 'Medium',
      explanation: 'The visual appearance shows flexible foil-coated film with composite polymer bonding. Due to multi-layer thermal fusion, mechanical recyclability varies widely by municipal facility.',
      safety_note: 'AI is not fully certain about this item. Please verify with local waste-management guidance.',
      is_demo: true,
      hazard_level: 'low'
    }
  }
];

export const INITIAL_DEMO_DASHBOARD_HISTORY: AIAnalysisResult[] = [
  {
    id: 'demo-item-1',
    item: 'Plastic PET Water Bottle',
    category: 'Plastic',
    material: 'PET (#1)',
    recyclability: 'Usually Recyclable',
    recommended_action: 'Rinse and crush, place in dry recyclables bin.',
    sustainability_tip: 'Carry a refillable canteen to eliminate single-use bottles.',
    confidence: 96,
    confidence_level: 'High',
    explanation: 'Clear plastic bottle with standard threaded cap and PET #1 identification.',
    safety_note: 'Non-hazardous dry recyclable.',
    is_demo: true,
    analyzed_at: new Date(Date.now() - 1000 * 60 * 45).toISOString(), // 45 mins ago
    hazard_level: 'none'
  },
  {
    id: 'demo-item-2',
    item: 'Vegetable & Fruit Peels',
    category: 'Organic / Wet Waste',
    material: 'Biodegradable Organic Residue',
    recyclability: 'Not Normally Recyclable',
    recommended_action: 'Deposit in green wet waste container or home compost bin.',
    sustainability_tip: 'Home composting transforms kitchen scraps into rich soil humus.',
    confidence: 98,
    confidence_level: 'High',
    explanation: 'Organic kitchen food scraps consisting of botanical cellulose material.',
    safety_note: 'Keep free from plastic bags.',
    is_demo: true,
    analyzed_at: new Date(Date.now() - 1000 * 60 * 180).toISOString(), // 3 hours ago
    hazard_level: 'none'
  },
  {
    id: 'demo-item-3',
    item: 'Corrugated Delivery Box',
    category: 'Cardboard',
    material: 'Kraft Corrugated Fiberboard',
    recyclability: 'Recyclable',
    recommended_action: 'Remove packaging tape, fold flat, store dry.',
    sustainability_tip: 'Flattening boxes saves 70% bin volume and eases transport logistics.',
    confidence: 94,
    confidence_level: 'High',
    explanation: 'Clean corrugated box without food or oil stains.',
    safety_note: 'Non-hazardous.',
    is_demo: true,
    analyzed_at: new Date(Date.now() - 1000 * 60 * 360).toISOString(), // 6 hours ago
    hazard_level: 'none'
  },
  {
    id: 'demo-item-4',
    item: 'Lithium Button Cell Battery',
    category: 'Medical / Hazardous Waste',
    material: 'Lithium Manganese Dioxide & Heavy Metals',
    recyclability: 'Depends on Local Facility',
    recommended_action: 'Store in dry container with taped terminals. Take to authorized hazardous waste drop-off.',
    sustainability_tip: 'Rechargeable devices eliminate disposable coin cell waste.',
    confidence: 91,
    confidence_level: 'High',
    explanation: 'Metallic coin cell with chemical voltage rating.',
    safety_note: 'CRITICAL: Never put batteries in regular trash or water. Ingestion or short-circuit hazard.',
    is_demo: true,
    analyzed_at: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
    hazard_level: 'high'
  },
  {
    id: 'demo-item-5',
    item: 'Cracked Smartphone Display',
    category: 'E-waste',
    material: 'Aluminosilicate Glass, Indium Tin Oxide & Electronics',
    recyclability: 'Depends on Local Facility',
    recommended_action: 'Take to brand exchange or licensed e-waste dismantling facility.',
    sustainability_tip: 'Repairing screens extends device lifespan by 2-3 years.',
    confidence: 89,
    confidence_level: 'High',
    explanation: 'Electronic touch screen digitizer with glass fracture patterns.',
    safety_note: 'Beware of tiny glass splinters.',
    is_demo: true,
    analyzed_at: new Date(Date.now() - 1000 * 60 * 60 * 30).toISOString(),
    hazard_level: 'high'
  },
  {
    id: 'demo-item-6',
    item: 'Unlabeled Laminated Film',
    category: 'Mixed / Unknown Waste',
    material: 'Composite Polymer & Foil',
    recyclability: 'Not Normally Recyclable',
    recommended_action: 'Check with municipal waste depot for multi-layer plastic collection.',
    sustainability_tip: 'Support brands using mono-material packaging.',
    confidence: 62,
    confidence_level: 'Low',
    explanation: 'AI is not fully certain about this item. Please verify with local waste-management guidance.',
    safety_note: 'Uncertain material composition.',
    is_demo: true,
    analyzed_at: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(),
    hazard_level: 'low'
  }
];

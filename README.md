# EcoSort AI – AI-Powered Waste Segregation & Sustainability Assistant

[![1M1B Virtual Internship](https://img.shields.io/badge/1M1B-AI%20for%20Sustainability-059669.svg)](https://1m1b.org/)
[![IBM SkillsBuild](https://img.shields.io/badge/IBM-SkillsBuild-0062FF.svg)](https://skillsbuild.org/)
[![AICTE](https://img.shields.io/badge/AICTE-Collaborative%20Project-FF6B00.svg)](https://www.aicte-india.org/)
[![UN SDG 12](https://img.shields.io/badge/UN%20SDG-12%20Responsible%20Consumption-DDA63A.svg)](https://sdgs.un.org/goals/goal12)
[![Next.js 14](https://img.shields.io/badge/Next.js-14%20App%20Router-black.svg)](https://nextjs.org/)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

**EcoSort AI** is a complete, modern, responsive web application developed as a student project for the **1M1B AI for Sustainability Virtual Internship** in collaboration with **IBM SkillsBuild & AICTE**.

The application establishes an evidence-based connection between **Artificial Intelligence, Environmental Sustainability, Responsible AI, and the UN Sustainable Development Goals (SDG 12, SDG 11, and SDG 13)**.

---

## 📌 Problem Statement

> “How might we use AI to help people identify and segregate waste correctly so that waste management and resource utilization can become more sustainable?”

---

## 🎯 UN Sustainable Development Goals (SDG) Alignment

### Primary SDG
* **SDG 12: Responsible Consumption and Production**
  * *Target 12.5:* Substantially reduce waste generation through prevention, reduction, recycling, and reuse.

### Secondary SDGs
* **SDG 11: Sustainable Cities and Communities**
  * *Target 11.6:* Reduce the adverse per capita environmental impact of cities through municipal waste management.
* **SDG 13: Climate Action**
  * Mitigate fugitive greenhouse gas (methane) emissions by diverting organic waste away from anaerobic landfills.

---

## ✨ Key Features

1. **AI Waste Analyzer:**
   - Upload images (JPEG, PNG, WebP) or use the live **WebRTC camera** interface.
   - 1-click **Sample Waste Items** gallery for instant zero-friction testing.
   - Real-time scanning animation and multi-stage feature extraction.
2. **Comprehensive AI Result Card:**
   - **Waste Detected** & precise **Material Composition** (e.g. PET #1, HDPE #2, Kraft board).
   - **Waste Category** (Plastic, Paper, Cardboard, Glass, Metal, Organic, E-waste, Textile, Hazardous, Mixed).
   - **Recyclability Assessment** (*Recyclable*, *Usually Recyclable*, *Not Normally Recyclable*, *Depends on Local Facility*).
   - **Recommended Action** & **Sustainability 5R Tip**.
   - **AI Confidence Gauge** (0–100%) and **Visual Reasoning Explanation**.
   - **Uncertainty Warning** when confidence < 75%: *“AI is not fully certain about this item. Please verify with local waste-management guidance.”*
   - **Critical Safety Alerts** for hazardous batteries, e-waste, and medical sharps.
   - **Text-to-Speech (TTS) Voice Narration** for accessibility.
3. **Sustainability Activity Dashboard:**
   - 5 KPI metric cards: *Items Analyzed, Recyclable Items, Organic Waste, Special/Hazardous Items, Items Requiring Review*.
   - Interactive charts: *Category Distribution Donut*, *Recyclability Ratio*, and *Weekly Activity Trends*.
   - Filterable, searchable audit history table.
   - **Export CSV** function and toggle between **Demo Data** and **Live Session Data**.
4. **Sustainability & 5R Guide:**
   - The **5R Principle hierarchy**: *Refuse $\rightarrow$ Reduce $\rightarrow$ Reuse $\rightarrow$ Repair $\rightarrow$ Recycle*.
   - Source segregation protocols for Wet, Dry, E-waste, and Medical streams.
   - Plastic resin identification codes (#1 PET to #7 OTHER).
   - Interactive **4-Question Sustainability Knowledge Quiz**.
5. **Responsible AI Framework:**
   - Deep dive into the 4 Pillars: **Fairness, Transparency, Privacy, Safety**.
   - Clear ethical boundaries and visible disclaimers.
6. **10-Slide Interactive Presentation Deck (`/presentation`):**
   - Built-in full-screen slide deck with speaker notes, slide controls, and keyboard navigation for internship juries.

---

## 🤖 AI Role & Implementation

The AI architecture is strictly decoupled and modular:

```
User (Upload / Camera)
         ↓
Frontend Client (Validation & Preview)
         ↓
Backend API Proxy (/api/analyze)
         ↓
Multimodal Vision Model (Google Gemini 1.5/2.0 Flash)
         ↓
Structured JSON Validation Layer & Safety Filter
         ↓
Frontend Result Card + LocalStorage History + Dashboard
```

### JSON Response Schema:
```json
{
  "item": "Clear Plastic Bottle",
  "category": "Plastic",
  "material": "PET (#1 Polyethylene Terephthalate)",
  "recyclability": "Usually Recyclable",
  "recommended_action": "Empty liquids, rinse, flatten, and screw cap on before binning.",
  "sustainability_tip": "Carry a refillable stainless steel bottle to prevent single-use waste.",
  "confidence": 96,
  "explanation": "Visual inspection reveals a cylindrical thermoplastic bottle with PET #1 threading.",
  "safety_note": "Non-hazardous dry recyclable."
}
```

---

## 🛡️ Responsible AI Considerations

* **Fairness:** Tested across varied lighting conditions, shadows, angles, and background clutter to avoid bias towards clean studio packaging.
* **Transparency:** Displays numerical confidence percentages, visual explanations, and uncertainty disclaimers. Distinguishes between `Connected AI` and `Demo AI` mode.
* **Privacy:** Zero personal data collection. Ephemeral in-memory image processing. Audit history is stored exclusively in client-side `localStorage`.
* **Safety:** Never encourages unsafe handling. Flags reactive lithium batteries and e-waste for certified collection centers.

---

## 🛠️ Technology Stack

* **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Server Components & Route Handlers)
* **Language:** TypeScript 5
* **Styling:** Tailwind CSS + PostCSS
* **Icons:** Lucide React
* **Charts:** Recharts
* **AI Multimodal SDK:** `@google/generative-ai`
* **Micro-interactions:** Framer Motion & Canvas Confetti

---

## 🚀 Quick Start & Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ecosort-ai.git
cd ecosort-ai
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env.local` file in the root directory:
```env
# Optional: Google Gemini API Key for Live AI Vision Analysis
# If left blank, the app seamlessly runs in Demo AI Mode.
GEMINI_API_KEY=your_gemini_api_key_here
```

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub.
2. Go to [vercel.com](https://vercel.com) $\rightarrow$ **Add New Project** $\rightarrow$ Import repository.
3. In Environment Variables, optionally add `GEMINI_API_KEY`.
4. Click **Deploy**.

### Deploy to Render
1. Go to [render.com](https://render.com) $\rightarrow$ **New Web Service**.
2. Set Build Command to `npm install && npm run build` and Start Command to `npm start`.

---

## 🔬 Limitations & Future Scope

### Limitations
* Model relies on visual features; chemical composition of unmarked multi-layer plastics requires laboratory testing.
* Image quality and heavy shadows may reduce confidence score.
* AI recommendations are educational and should not supersede local municipal regulations.

### Future Scope
* 🇮🇳 **Multilingual Support:** Localized interfaces in Marathi and Hindi.
* 🎙️ **Voice AI Assistant:** Two-way speech conversational query support.
* 📍 **Municipal Geo-Mapping:** Ward-specific collection schedules and authorized recycler locators.
* ⚡ **Edge AI:** On-device quantized vision models for zero-connectivity offline usage.

---

## 👥 Project Team & Acknowledgments

* **Project Name:** EcoSort AI
* **Program:** 1M1B AI for Sustainability Virtual Internship
* **Institutional Partners:** IBM SkillsBuild & AICTE
* **Mission:** Harnessing Responsible AI to drive sustainable consumption and circular community habits.

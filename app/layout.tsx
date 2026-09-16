import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'EcoSort AI – AI-Powered Waste Segregation & Sustainability Assistant',
  description: 'AI-Powered waste identification, recyclability assessment, and disposal assistant built for the 1M1B AI for Sustainability Virtual Internship with IBM SkillsBuild & AICTE. Advancing UN SDG 12, 11 & 13.',
  keywords: ['AI Waste Segregation', 'Sustainability', 'SDG 12', '1M1B', 'IBM SkillsBuild', 'AICTE', 'Recycling AI', 'Responsible AI'],
  authors: [{ name: 'EcoSort AI Student Team' }],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'EcoSort AI – AI-Powered Waste Segregation & Sustainability Assistant',
    description: 'AI-Powered waste identification, recyclability assessment, and disposal assistant built for the 1M1B AI for Sustainability Virtual Internship with IBM SkillsBuild & AICTE.',
    type: 'website',
    images: [
      {
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd71vrYZ6XXjP2mmbu0puaoULjq3OBojsQHE8nMNPxKA&s=10',
        width: 1200,
        height: 630,
        alt: 'EcoSort AI - AI-Powered Waste Segregation & Sustainability Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoSort AI – AI-Powered Waste Segregation & Sustainability Assistant',
    description: 'AI-Powered waste identification, recyclability assessment, and disposal assistant built for the 1M1B AI for Sustainability Virtual Internship with IBM SkillsBuild & AICTE.',
    images: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd71vrYZ6XXjP2mmbu0puaoULjq3OBojsQHE8nMNPxKA&s=10'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col antialiased bg-[#fcfdfd] text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        <main className="flex-1 w-full eco-mesh">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

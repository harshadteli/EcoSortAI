'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Recycle, 
  Sparkles, 
  BarChart3, 
  BookOpen, 
  Info, 
  ShieldCheck, 
  Presentation, 
  Menu, 
  X, 
  ChevronRight,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/', icon: Recycle },
    { name: 'AI Analyzer', href: '/analyzer', icon: Sparkles },
    { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
    { name: 'Sustainability Guide', href: '/guide', icon: BookOpen },
    { name: 'Responsible AI', href: '/responsible-ai', icon: ShieldCheck },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Slides', href: '/presentation', icon: Presentation },
  ];

  return (
    <header 
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200 backdrop-blur-md border-b',
        scrolled 
          ? 'bg-white/90 border-slate-200/80 shadow-sm' 
          : 'bg-white/70 border-slate-100'
      )}
    >
      {/* Top Banner for Internship attribution */}
      <div className="bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 text-white text-[11px] sm:text-xs py-1 px-4 text-center font-medium flex items-center justify-center gap-2">
        <span className="bg-white/20 px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider">
          Student Project
        </span>
        <span>
          1M1B AI for Sustainability Virtual Internship &bull; IBM SkillsBuild &bull; AICTE
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Recycle className="w-5 h-5 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 bg-clip-text text-transparent">
                  EcoSort<span className="text-emerald-600">AI</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-200">
                  SDG 12
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium hidden sm:block">
                AI Waste Segregation Assistant
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive
                      ? 'text-emerald-700 bg-emerald-50/80 font-semibold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                  )}
                >
                  <Icon className={cn('w-4 h-4', isActive ? 'text-emerald-600' : 'text-slate-400')} />
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/analyzer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Analyze Waste</span>
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-2 pb-6 space-y-1 shadow-lg animate-fadeIn">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  'flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'text-emerald-700 bg-emerald-50 font-semibold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn('w-4 h-4', isActive ? 'text-emerald-600' : 'text-slate-400')} />
                  <span>{link.name}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </Link>
            );
          })}
          
          <div className="pt-3">
            <Link
              href="/analyzer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch AI Waste Analyzer</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

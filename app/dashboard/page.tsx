'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BarChart3, 
  Recycle, 
  Leaf, 
  AlertTriangle, 
  CheckCircle2, 
  ShieldAlert, 
  Download, 
  Trash2, 
  Sparkles, 
  Filter, 
  Search, 
  ExternalLink,
  Info
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  Legend 
} from 'recharts';
import { AIAnalysisResult } from '@/lib/types';
import { INITIAL_DEMO_DASHBOARD_HISTORY } from '@/lib/demo-data';
import { getStoredHistory, clearHistory, exportToCSV, formatDate, getCategoryColor } from '@/lib/utils';

export default function DashboardPage() {
  const [useDemoData, setUseDemoData] = useState(true);
  const [historyRecords, setHistoryRecords] = useState<AIAnalysisResult[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    loadData();
  }, [useDemoData]);

  const loadData = () => {
    if (useDemoData) {
      setHistoryRecords(INITIAL_DEMO_DASHBOARD_HISTORY);
    } else {
      const live = getStoredHistory();
      setHistoryRecords(live);
    }
  };

  const handleClear = () => {
    if (confirm('Are you sure you want to clear your scanned items history?')) {
      clearHistory();
      if (!useDemoData) {
        setHistoryRecords([]);
      }
    }
  };

  const handleExport = () => {
    exportToCSV(historyRecords);
  };

  // KPI Metrics Calculation
  const totalAnalyzed = historyRecords.length;
  const recyclableCount = historyRecords.filter(
    (r) => r.recyclability === 'Recyclable' || r.recyclability === 'Usually Recyclable'
  ).length;
  const organicCount = historyRecords.filter(
    (r) => r.category === 'Organic / Wet Waste'
  ).length;
  const hazardousCount = historyRecords.filter(
    (r) => r.category === 'Medical / Hazardous Waste' || r.category === 'E-waste'
  ).length;
  const reviewRequiredCount = historyRecords.filter(
    (r) => r.confidence < 75 || r.category === 'Mixed / Unknown Waste'
  ).length;

  // Chart Data Preparation: Category Distribution
  const categoryCountMap: Record<string, number> = {};
  historyRecords.forEach((r) => {
    categoryCountMap[r.category] = (categoryCountMap[r.category] || 0) + 1;
  });

  const categoryChartData = Object.entries(categoryCountMap).map(([name, count]) => ({
    name,
    count,
  }));

  // Chart Data: Recyclability Breakdown
  const recyclabilityMap: Record<string, number> = {};
  historyRecords.forEach((r) => {
    recyclabilityMap[r.recyclability] = (recyclabilityMap[r.recyclability] || 0) + 1;
  });

  const recyclabilityChartData = Object.entries(recyclabilityMap).map(([name, count]) => ({
    name,
    count,
  }));

  // Activity over days/time
  const activityData = [
    { day: 'Mon', items: useDemoData ? 4 : Math.min(totalAnalyzed, 2) },
    { day: 'Tue', items: useDemoData ? 7 : Math.min(totalAnalyzed, 4) },
    { day: 'Wed', items: useDemoData ? 5 : Math.min(totalAnalyzed, 3) },
    { day: 'Thu', items: useDemoData ? 8 : Math.min(totalAnalyzed, 6) },
    { day: 'Fri', items: useDemoData ? 12 : Math.min(totalAnalyzed, 8) },
    { day: 'Sat', items: useDemoData ? 9 : Math.min(totalAnalyzed, 5) },
    { day: 'Sun', items: useDemoData ? totalAnalyzed : totalAnalyzed },
  ];

  const PIE_COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6', '#64748b', '#ef4444'];

  // Filtered List
  const filteredRecords = historyRecords.filter((record) => {
    const matchesCategory = filterCategory === 'All' || record.category === filterCategory;
    const matchesQuery =
      searchQuery === '' ||
      record.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.material.toLowerCase().includes(searchQuery.toLowerCase()) ||
      record.recommended_action.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Sustainability Activity Dashboard
            </span>
            {useDemoData && (
              <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-2 py-0.5 rounded border border-amber-200">
                Sample / Demo View
              </span>
            )}
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
            Waste Segregation Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Monitor circular waste diversion, item recyclability profiles, and municipal compliance.
          </p>
        </div>

        {/* Action controls */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Demo Data Toggle */}
          <button
            onClick={() => setUseDemoData(!useDemoData)}
            className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
              useDemoData
                ? 'bg-amber-50 text-amber-900 border-amber-300 shadow-xs'
                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{useDemoData ? 'Viewing Demo Data' : 'Viewing Live Session'}</span>
          </button>

          {/* Export CSV */}
          <button
            onClick={handleExport}
            disabled={historyRecords.length === 0}
            className="px-3.5 py-2 rounded-xl text-xs font-semibold bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 transition-all flex items-center gap-1.5 disabled:opacity-50"
            title="Download audit CSV"
          >
            <Download className="w-3.5 h-3.5 text-slate-500" />
            <span>Export CSV</span>
          </button>

          {/* Link to scan */}
          <Link
            href="/analyzer"
            className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md shadow-emerald-600/20 transition-all flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>New Scan</span>
          </Link>
        </div>
      </div>

      {/* 5 KPI Metric Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* Card 1: Total Scanned */}
        <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-500 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Items Analyzed</span>
            <BarChart3 className="w-4 h-4 text-slate-400" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">
              {totalAnalyzed}
            </div>
            <div className="text-[11px] text-slate-500 mt-1">Total items processed</div>
          </div>
        </div>

        {/* Card 2: Recyclable */}
        <div className="bg-emerald-50/50 rounded-2xl border border-emerald-200 p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-emerald-800 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Recyclable Items</span>
            <Recycle className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-950">
              {recyclableCount}
            </div>
            <div className="text-[11px] text-emerald-700 mt-1">
              {totalAnalyzed > 0 ? Math.round((recyclableCount / totalAnalyzed) * 100) : 0}% recovery rate
            </div>
          </div>
        </div>

        {/* Card 3: Organic */}
        <div className="bg-green-50/50 rounded-2xl border border-green-200 p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-green-800 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Organic / Wet Waste</span>
            <Leaf className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-green-950">
              {organicCount}
            </div>
            <div className="text-[11px] text-green-700 mt-1">Compostable fraction</div>
          </div>
        </div>

        {/* Card 4: Hazardous */}
        <div className="bg-purple-50/50 rounded-2xl border border-purple-200 p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-purple-800 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Special / Hazardous</span>
            <ShieldAlert className="w-4 h-4 text-purple-600" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-purple-950">
              {hazardousCount}
            </div>
            <div className="text-[11px] text-purple-700 mt-1">E-waste / chemical stream</div>
          </div>
        </div>

        {/* Card 5: Review Required */}
        <div className="bg-amber-50/50 rounded-2xl border border-amber-200 p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between text-amber-800 mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider">Items Under Review</span>
            <AlertTriangle className="w-4 h-4 text-amber-600" />
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-amber-950">
              {reviewRequiredCount}
            </div>
            <div className="text-[11px] text-amber-700 mt-1">Low confidence / mixed</div>
          </div>
        </div>
      </div>

      {/* Interactive Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Category Breakdown Pie Chart */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">
              Waste Category Distribution
            </h3>
            <p className="text-[11px] text-slate-500">Breakdown of scanned materials</p>
          </div>
          <div className="h-64 w-full py-2">
            {categoryChartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={45}
                    paddingAngle={3}
                    dataKey="count"
                    nameKey="name"
                  >
                    {categoryChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index % PIE_COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => [`${value} items`, 'Count']}
                    contentStyle={{ borderRadius: '12px', fontSize: '11px', border: '1px solid #e2e8f0' }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: '10px' }}
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-slate-400">
                No category data available yet
              </div>
            )}
          </div>
        </div>

        {/* Recyclability Ratio */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">
              Recyclability Assessment
            </h3>
            <p className="text-[11px] text-slate-500">Separation by circular potential</p>
          </div>
          <div className="h-64 w-full py-2">
            {recyclabilityChartData.length > 0 ? (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={recyclabilityChartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="count"
                    nameKey="name"
                  >
                    {recyclabilityChartData.map((entry, index) => (
                      <Cell key={`rec-cell-${index}`} fill={['#10b981', '#3b82f6', '#f59e0b', '#ef4444'][index % 4]} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any) => [`${value} items`, 'Count']}
                    contentStyle={{ borderRadius: '12px', fontSize: '11px', border: '1px solid #e2e8f0' }}
                  />
                  <Legend
                    wrapperStyle={{ fontSize: '10px' }}
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="h-full flex items-center justify-center text-xs text-slate-400">
                No recyclability data available yet
              </div>
            )}
          </div>
        </div>

        {/* Analysis Activity Trend */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-slate-900 text-sm">
              Analysis Activity Trends
            </h3>
            <p className="text-[11px] text-slate-500">Weekly waste scanning cadence</p>
          </div>
          <div className="h-64 w-full py-2">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} allowDecimals={false} />
                <Tooltip
                  formatter={(value: any) => [`${value} items`, 'Scanned']}
                  contentStyle={{ borderRadius: '12px', fontSize: '11px', border: '1px solid #e2e8f0' }}
                />
                <Bar dataKey="items" fill="#10b981" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>

      {/* Activity History Table */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Waste Audit &amp; Segregation History
            </h3>
            <p className="text-xs text-slate-500">
              Detailed chronological log of scanned items and guidance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Search */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search items or material..."
                className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-emerald-500 w-48 sm:w-56"
              />
            </div>

            {/* Filter Category */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="py-1.5 px-3 rounded-xl border border-slate-200 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              <option value="All">All Categories</option>
              <option value="Plastic">Plastic</option>
              <option value="Paper">Paper</option>
              <option value="Cardboard">Cardboard</option>
              <option value="Glass">Glass</option>
              <option value="Metal">Metal</option>
              <option value="Organic / Wet Waste">Organic / Wet</option>
              <option value="E-waste">E-waste</option>
              <option value="Medical / Hazardous Waste">Hazardous</option>
              <option value="Mixed / Unknown Waste">Mixed / Review</option>
            </select>

            {/* Clear button if live */}
            {!useDemoData && historyRecords.length > 0 && (
              <button
                onClick={handleClear}
                className="p-2 rounded-xl text-slate-400 hover:text-red-600 hover:bg-red-50 border border-slate-200 transition-colors"
                title="Clear history"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Table Content */}
        {filteredRecords.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-600">
              <thead className="bg-slate-50 text-slate-700 font-bold uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 rounded-l-xl">Waste Item</th>
                  <th className="py-3 px-3">Category</th>
                  <th className="py-3 px-3">Material</th>
                  <th className="py-3 px-3">Recyclability</th>
                  <th className="py-3 px-3">Confidence</th>
                  <th className="py-3 px-4">Recommended Action</th>
                  <th className="py-3 px-3 rounded-r-xl">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filteredRecords.map((item) => {
                  const colors = getCategoryColor(item.category);
                  return (
                    <tr key={item.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        {item.item}
                        {item.is_demo && (
                          <span className="ml-1.5 text-[9px] font-semibold text-amber-700 bg-amber-50 border border-amber-200 px-1 py-0.2 rounded">
                            Demo
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-3">
                        <span className={`px-2 py-0.5 rounded-md border font-semibold text-[10px] ${colors.badge}`}>
                          {item.category}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 text-slate-600 font-medium">{item.material}</td>
                      <td className="py-3.5 px-3">
                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold border ${
                          item.recyclability.includes('Recyclable')
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                            : 'bg-slate-100 text-slate-700 border-slate-200'
                        }`}>
                          {item.recyclability}
                        </span>
                      </td>
                      <td className="py-3.5 px-3 font-semibold text-slate-800">
                        <span className={item.confidence < 75 ? 'text-amber-600 font-bold' : 'text-slate-800'}>
                          {item.confidence}%
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-600 max-w-xs truncate" title={item.recommended_action}>
                        {item.recommended_action}
                      </td>
                      <td className="py-3.5 px-3 text-slate-400 text-[11px] whitespace-nowrap">
                        {formatDate(item.analyzed_at)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12 space-y-3 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <Info className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-xs font-semibold text-slate-600">
              No scan records found matching your filters.
            </p>
            <p className="text-[11px] text-slate-400 max-w-sm mx-auto">
              {useDemoData
                ? 'Try clearing the search query or selecting "All Categories".'
                : 'Scanned waste items will automatically appear here once analyzed.'}
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

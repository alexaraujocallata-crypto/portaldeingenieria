import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getAllCareers, getCareerById } from '../data/careersResolver';
import {
  GitCompare,
  ArrowRight,
  DollarSign,
  Clock,
  GraduationCap,
  Trophy,
  CheckCircle,
  Building2,
  BookOpen,
} from 'lucide-react';
import { EngineeringCareer } from '../types';

export const CompareView: React.FC = () => {
  const {
    compareCareerIds,
    selectedLanguage,
    t,
    setCompareCareerIds,
    navigateToCareer,
  } = useApp();

  const allCareers = getAllCareers();

  const [careerId1, setCareerId1] = useState<string>(compareCareerIds[0] || allCareers[0]?.id || 'pe-sistemas');
  const [careerId2, setCareerId2] = useState<string>(compareCareerIds[1] || allCareers[1]?.id || 'pe-minas');

  const career1 = getCareerById(careerId1) || allCareers[0];
  const career2 = getCareerById(careerId2) || allCareers[1];

  const handleSwap = () => {
    const temp = careerId1;
    setCareerId1(careerId2);
    setCareerId2(temp);
    setCompareCareerIds([careerId2, temp]);
  };

  return (
    <div id="compare-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-in fade-in duration-200">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 text-xs font-semibold">
          <GitCompare className="w-3.5 h-3.5" />
          <span>{t.compareTitle}</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
          {t.compareTitle}
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          {t.compareSubtitle}
        </p>
      </div>

      {/* Selectors Bar */}
      <div className="p-4 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center">
          
          {/* First Career Selector */}
          <div className="md:col-span-2 space-y-1">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              1. {t.selectFirstCareer}
            </label>
            <select
              id="compare-select-career-1"
              value={careerId1}
              onChange={(e) => {
                setCareerId1(e.target.value);
                setCompareCareerIds([e.target.value, careerId2]);
              }}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-500"
            >
              {allCareers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title[selectedLanguage]} ({c.salary.currencyCode})
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <div className="flex justify-center md:col-span-1">
            <button
              id="swap-compare-btn"
              onClick={handleSwap}
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-700 hover:bg-blue-50 dark:hover:bg-blue-900 text-slate-700 dark:text-slate-200 transition-colors"
              title="Intercambiar"
            >
              <GitCompare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </button>
          </div>

          {/* Second Career Selector */}
          <div className="md:col-span-2 space-y-1">
            <label className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block">
              2. {t.selectSecondCareer}
            </label>
            <select
              id="compare-select-career-2"
              value={careerId2}
              onChange={(e) => {
                setCareerId2(e.target.value);
                setCompareCareerIds([careerId1, e.target.value]);
              }}
              className="w-full p-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-xs sm:text-sm text-slate-900 dark:text-white font-medium focus:ring-2 focus:ring-blue-500"
            >
              {allCareers.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title[selectedLanguage]} ({c.salary.currencyCode})
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>

      {/* Side-by-Side Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Career 1 Card */}
        {career1 && (
          <div className="p-6 rounded-3xl border-2 border-blue-200 dark:border-blue-900 bg-white dark:bg-slate-800/90 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                {career1.salary.currencyCode}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
                {career1.title[selectedLanguage]}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {career1.shortDescription[selectedLanguage]}
              </p>
            </div>

            {/* Metrics */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">{t.salaryMinEntryLabel} (Junior)</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {career1.salary.currencySymbol} {career1.salary.entryLevelMonthly.toLocaleString()} {career1.salary.currencyCode}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">{t.compareMetricSalary} (Mid-Level)</span>
                <span className="font-black text-blue-600 dark:text-blue-400 text-base">
                  {career1.salary.currencySymbol} {career1.salary.averageMonthly.toLocaleString()} {career1.salary.currencyCode}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">{t.salaryMaxSeniorLabel} (+6 años)</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {career1.salary.currencySymbol} {career1.salary.seniorMonthly.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">{t.compareMetricDuration}</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {career1.academic.durationYears} {selectedLanguage === 'es' ? 'Años' : 'Years'} ({career1.academic.totalSemesters} {selectedLanguage === 'es' ? 'semestres' : 'semesters'})
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">{t.compareMetricEmployability}</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  {career1.ranking.employabilityRatePercent}%
                </span>
              </div>

              <div className="py-2 border-b border-slate-100 dark:border-slate-700 space-y-1">
                <span className="text-slate-500 dark:text-slate-400 block">{t.compareMetricDegree}</span>
                <span className="font-bold text-slate-900 dark:text-white block">
                  {career1.academic.degreeAwarded[selectedLanguage]}
                </span>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-medium block">
                  💼 {career1.academic.professionalTitle[selectedLanguage]}
                </span>
              </div>

              <div className="py-2 space-y-1">
                <span className="text-slate-500 dark:text-slate-400 block">{t.curriculumSectionTitle}</span>
                <div className="flex flex-wrap gap-1">
                  {career1.curriculumAreas.slice(0, 2).map((a) => (
                    <span key={a.id} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 font-medium">
                      {a.name[selectedLanguage]}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => navigateToCareer(career1.id)}
              className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{t.viewEngineeringBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Career 2 Card */}
        {career2 && (
          <div className="p-6 rounded-3xl border-2 border-indigo-200 dark:border-indigo-900 bg-white dark:bg-slate-800/90 shadow-sm space-y-6">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
                {career2.salary.currencyCode}
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white font-display">
                {career2.title[selectedLanguage]}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {career2.shortDescription[selectedLanguage]}
              </p>
            </div>

            {/* Metrics */}
            <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-700 text-xs sm:text-sm">
              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">{t.salaryMinEntryLabel} (Junior)</span>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {career2.salary.currencySymbol} {career2.salary.entryLevelMonthly.toLocaleString()} {career2.salary.currencyCode}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">{t.compareMetricSalary} (Mid-Level)</span>
                <span className="font-black text-indigo-600 dark:text-indigo-400 text-base">
                  {career2.salary.currencySymbol} {career2.salary.averageMonthly.toLocaleString()} {career2.salary.currencyCode}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">{t.salaryMaxSeniorLabel} (+6 años)</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">
                  {career2.salary.currencySymbol} {career2.salary.seniorMonthly.toLocaleString()}
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">{t.compareMetricDuration}</span>
                <span className="font-bold text-slate-900 dark:text-white">
                  {career2.academic.durationYears} {selectedLanguage === 'es' ? 'Años' : 'Years'} ({career2.academic.totalSemesters} {selectedLanguage === 'es' ? 'semestres' : 'semesters'})
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-100 dark:border-slate-700">
                <span className="text-slate-500 dark:text-slate-400">{t.compareMetricEmployability}</span>
                <span className="font-bold text-indigo-600 dark:text-indigo-400">
                  {career2.ranking.employabilityRatePercent}%
                </span>
              </div>

              <div className="py-2 border-b border-slate-100 dark:border-slate-700 space-y-1">
                <span className="text-slate-500 dark:text-slate-400 block">{t.compareMetricDegree}</span>
                <span className="font-bold text-slate-900 dark:text-white block">
                  {career2.academic.degreeAwarded[selectedLanguage]}
                </span>
                <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium block">
                  💼 {career2.academic.professionalTitle[selectedLanguage]}
                </span>
              </div>

              <div className="py-2 space-y-1">
                <span className="text-slate-500 dark:text-slate-400 block">{t.curriculumSectionTitle}</span>
                <div className="flex flex-wrap gap-1">
                  {career2.curriculumAreas.slice(0, 2).map((a) => (
                    <span key={a.id} className="text-[11px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 font-medium">
                      {a.name[selectedLanguage]}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => navigateToCareer(career2.id)}
              className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>{t.viewEngineeringBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

    </div>
  );
};

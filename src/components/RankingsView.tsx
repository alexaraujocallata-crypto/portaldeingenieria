import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getRankingsForCountry } from '../data/careersResolver';
import { COUNTRIES } from '../data/countries';
import {
  Trophy,
  Award,
  TrendingUp,
  DollarSign,
  Briefcase,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Globe,
} from 'lucide-react';
import { RankingSortCriteria } from '../types';

export const RankingsView: React.FC = () => {
  const {
    selectedCountry,
    selectedLanguage,
    t,
    setSelectedCountry,
    setIsCountryModalOpen,
    navigateToCareer,
  } = useApp();

  const [sortBy, setSortBy] = useState<RankingSortCriteria>('salary');

  const rankedCareers = getRankingsForCountry(selectedCountry.id, sortBy);
  const first = rankedCareers[0];
  const second = rankedCareers[1];
  const third = rankedCareers[2];
  const rest = rankedCareers.slice(3);

  return (
    <div id="rankings-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-in fade-in duration-200">
      
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>{selectedLanguage === 'es' ? 'Ranking Oficial 2026' : 'Official 2026 Rankings'}</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-display">
            {t.rankingSectionTitle} — {selectedCountry.flag} {selectedCountry.name[selectedLanguage]}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            {t.rankingSubtitle} ({selectedCountry.currency.symbol} {selectedCountry.currency.code})
          </p>
        </div>

        {/* Change country quick button */}
        <button
          onClick={() => setIsCountryModalOpen(true)}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:border-blue-400 self-start md:self-auto shadow-2xs"
        >
          <Globe className="w-4 h-4 text-blue-500" />
          <span>{t.changeCountry} ({selectedCountry.name[selectedLanguage]})</span>
        </button>
      </div>

      {/* Interactive Ranking Filters (Section 10) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs sm:text-sm">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">
          {selectedLanguage === 'es' ? 'Ordenar por:' : 'Sort by:'}
        </span>
        <button
          id="rank-filter-salary"
          onClick={() => setSortBy('salary')}
          className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            sortBy === 'salary'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <DollarSign className="w-4 h-4" />
          <span>{t.rankSalaryFilter}</span>
        </button>
        <button
          id="rank-filter-demand"
          onClick={() => setSortBy('demand')}
          className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            sortBy === 'demand'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Briefcase className="w-4 h-4" />
          <span>{t.rankDemandFilter}</span>
        </button>
        <button
          id="rank-filter-employability"
          onClick={() => setSortBy('employability')}
          className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            sortBy === 'employability'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>{t.rankEmployabilityFilter}</span>
        </button>
        <button
          id="rank-filter-growth"
          onClick={() => setSortBy('growth')}
          className={`px-4 py-2 rounded-xl font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
            sortBy === 'growth'
              ? 'bg-blue-600 text-white shadow-xs'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>{t.rankGrowthFilter}</span>
        </button>
      </div>

      {/* Visual Podium (🥇 🥈 🥉) - Section 10 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-2">
        
        {/* 🥈 2nd Place */}
        {second && (
          <div
            id="podium-second-place"
            onClick={() => navigateToCareer(second.id)}
            className="order-2 md:order-1 p-5 rounded-2xl border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800/95 shadow-sm hover:shadow-2xl hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer space-y-3 group will-change-transform"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 text-xs font-black group-hover:scale-105 transition-transform duration-300">
                🥈 {t.podiumSecond}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {second.salary.currencyCode}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {second.title[selectedLanguage]}
            </h3>
            <p className="text-2xl font-black text-blue-600 dark:text-cyan-400 font-display group-hover:scale-105 origin-left transition-transform duration-300">
              {second.salary.currencySymbol} {second.salary.averageMonthly.toLocaleString()} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">{t.perMonth}</span>
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 font-medium flex items-center justify-between">
              <span>{second.ranking.employabilityRatePercent}% {t.employabilityRate}</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform duration-200">
                {t.rankActions} <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        )}

        {/* 🥇 1st Place (Featured Highest) */}
        {first && (
          <div
            id="podium-first-place"
            onClick={() => navigateToCareer(first.id)}
            className="order-1 md:order-2 p-6 rounded-2xl border-2 border-amber-400 dark:border-amber-500 bg-white dark:bg-slate-800/95 shadow-lg hover:shadow-2xl hover:scale-105 md:hover:scale-110 md:-translate-y-2 hover:-translate-y-4 transition-all duration-300 ease-out cursor-pointer space-y-4 group relative will-change-transform z-10"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-amber-950 text-xs font-black shadow-xs group-hover:scale-105 transition-transform duration-300">
                🥇 {t.podiumFirst}
              </span>
              <span className="text-xs font-bold text-amber-700 dark:text-amber-300">
                Top #1
              </span>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors font-display">
                {first.title[selectedLanguage]}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                {first.shortDescription[selectedLanguage]}
              </p>
            </div>
            <p className="text-3xl sm:text-4xl font-black text-amber-600 dark:text-amber-400 font-display group-hover:scale-105 origin-left transition-transform duration-300">
              {first.salary.currencySymbol} {first.salary.averageMonthly.toLocaleString()} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">{t.perMonth}</span>
            </p>
            <div className="pt-2 border-t border-amber-200/60 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 font-medium flex items-center justify-between">
              <span>🎯 {first.ranking.employabilityRatePercent}% {t.employabilityRate}</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform duration-200">
                {t.viewEngineeringBtn} <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        )}

        {/* 🥉 3rd Place */}
        {third && (
          <div
            id="podium-third-place"
            onClick={() => navigateToCareer(third.id)}
            className="order-3 p-5 rounded-2xl border-2 border-orange-300 dark:border-orange-800 bg-white dark:bg-slate-800/95 shadow-sm hover:shadow-2xl hover:scale-105 hover:-translate-y-1.5 transition-all duration-300 ease-out cursor-pointer space-y-3 group will-change-transform"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-200 dark:bg-orange-950 text-orange-900 dark:text-orange-200 text-xs font-black group-hover:scale-105 transition-transform duration-300">
                🥉 {t.podiumThird}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {third.salary.currencyCode}
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {third.title[selectedLanguage]}
            </h3>
            <p className="text-2xl font-black text-orange-600 dark:text-orange-400 font-display group-hover:scale-105 origin-left transition-transform duration-300">
              {third.salary.currencySymbol} {third.salary.averageMonthly.toLocaleString()} <span className="text-xs font-normal text-slate-500 dark:text-slate-400">{t.perMonth}</span>
            </p>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-700 text-xs text-slate-600 dark:text-slate-300 font-medium flex items-center justify-between">
              <span>{third.ranking.employabilityRatePercent}% {t.employabilityRate}</span>
              <span className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform duration-200">
                {t.rankActions} <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        )}

      </div>

      {/* Complete Rankings Table / Cards (Responsive) */}
      <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs space-y-4">
        <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
          {selectedLanguage === 'es' ? 'Tabla Completa de Posiciones' : 'Full Ranking Standings'}
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700 text-slate-400 uppercase text-[11px]">
                <th className="pb-3 font-semibold">{t.rankPosition}</th>
                <th className="pb-3 font-semibold">{t.rankCareer}</th>
                <th className="pb-3 font-semibold">{t.rankSalaryCol}</th>
                <th className="pb-3 font-semibold">{t.rankDemandCol}</th>
                <th className="pb-3 font-semibold">{t.rankEmployabilityCol}</th>
                <th className="pb-3 font-semibold text-right">{t.rankActions}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {rankedCareers.map((career, index) => {
                const rankNum = index + 1;
                return (
                  <tr
                    key={career.id}
                    onClick={() => navigateToCareer(career.id)}
                    className="hover:bg-slate-50 dark:hover:bg-slate-700/50 cursor-pointer transition-colors"
                  >
                    <td className="py-3.5 font-bold">
                      {rankNum === 1 ? '🥇 #1' : rankNum === 2 ? '🥈 #2' : rankNum === 3 ? '🥉 #3' : `#${rankNum}`}
                    </td>
                    <td className="py-3.5">
                      <span className="font-bold text-slate-900 dark:text-white block">
                        {career.title[selectedLanguage]}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        {career.academic.durationYears} {selectedLanguage === 'es' ? 'años' : 'years'} • {career.academic.level[selectedLanguage]}
                      </span>
                    </td>
                    <td className="py-3.5 font-bold text-slate-900 dark:text-white">
                      {career.salary.currencySymbol} {career.salary.averageMonthly.toLocaleString()}
                    </td>
                    <td className="py-3.5 text-slate-600 dark:text-slate-300">
                      #{career.ranking.nationalRankDemand} {selectedLanguage === 'es' ? 'Nivel Nacional' : 'National'}
                    </td>
                    <td className="py-3.5 font-semibold text-emerald-600 dark:text-emerald-400">
                      {career.ranking.employabilityRatePercent}%
                    </td>
                    <td className="py-3.5 text-right">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigateToCareer(career.id);
                        }}
                        className="p-1.5 rounded-lg text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 inline-flex items-center gap-1 text-xs font-semibold"
                      >
                        <span>{t.rankActions}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

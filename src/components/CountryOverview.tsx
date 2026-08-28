import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { getCareersForCountry } from '../data/careersResolver';
import { ENGINEERING_CATEGORIES } from '../data/engineers';
import {
  DollarSign,
  GraduationCap,
  Trophy,
  Layers,
  Search,
  ArrowRight,
  Code2,
  Factory,
  Building2,
  Cpu,
  Flame,
  Dna,
  Clock,
  Sparkles,
  ChevronRight,
  Filter,
} from 'lucide-react';
import { EngineeringCareer } from '../types';

export const CountryOverview: React.FC = () => {
  const {
    selectedCountry,
    selectedLanguage,
    t,
    setIsCountryModalOpen,
    navigateToCareer,
    navigateToRankings,
    navigateToCompare,
  } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [localSearch, setLocalSearch] = useState<string>('');

  const careers = getCareersForCountry(selectedCountry.id);

  // Filter careers by category & search
  const filteredCareers = useMemo(() => {
    return careers.filter((career) => {
      const matchCategory = selectedCategory === 'all' || career.category === selectedCategory;
      const matchSearch =
        !localSearch.trim() ||
        career.title.es.toLowerCase().includes(localSearch.toLowerCase().trim()) ||
        career.title.en.toLowerCase().includes(localSearch.toLowerCase().trim()) ||
        career.shortDescription.es.toLowerCase().includes(localSearch.toLowerCase().trim()) ||
        career.shortDescription.en.toLowerCase().includes(localSearch.toLowerCase().trim());
      return matchCategory && matchSearch;
    });
  }, [careers, selectedCategory, localSearch]);

  // Aggregate stats
  const avgSalaryCountry = Math.round(
    careers.reduce((acc, c) => acc + c.salary.averageMonthly, 0) / (careers.length || 1)
  );
  const maxSalaryCareer = [...careers].sort((a, b) => b.salary.seniorMonthly - a.salary.seniorMonthly)[0] || careers[0];
  const topDemandCareer = [...careers].sort((a, b) => a.ranking.nationalRankDemand - b.ranking.nationalRankDemand)[0] || careers[0];

  const getCareerCategoryIcon = (category: string) => {
    switch (category) {
      case 'software_tech':
        return <Code2 className="w-5 h-5 text-blue-500" />;
      case 'industrial_management':
        return <Factory className="w-5 h-5 text-amber-500" />;
      case 'infrastructure_civil':
        return <Building2 className="w-5 h-5 text-emerald-500" />;
      case 'mechanical_electrical':
        return <Cpu className="w-5 h-5 text-violet-500" />;
      case 'earth_energy':
        return <Flame className="w-5 h-5 text-orange-500" />;
      case 'bio_chemical':
        return <Dna className="w-5 h-5 text-teal-500" />;
      default:
        return <Layers className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <div id="country-overview-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10">
      
      {/* Country Header & Breadcrumbs */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <span className="hover:text-blue-600 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            {t.breadcrumbHome}
          </span>
          <ChevronRight className="w-3 h-3" />
          <button
            onClick={() => setIsCountryModalOpen(true)}
            className="hover:text-blue-600 font-medium flex items-center gap-1"
          >
            <span>{selectedCountry.flag} {selectedCountry.name[selectedLanguage]}</span>
            <span className="text-[10px] text-blue-600 dark:text-blue-400 underline">({t.changeCountry})</span>
          </button>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-5xl" role="img">{selectedCountry.flag}</span>
              <div>
                <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white uppercase tracking-tight font-display">
                  {selectedCountry.name[selectedLanguage]}
                </h1>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                  {t.heroCountryCardCurrency}: {selectedCountry.currency.symbol} ({selectedCountry.currency.code}) • {selectedCountry.primaryLanguage[selectedLanguage]}
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-3xl mt-3 leading-relaxed">
              {t.countryHubTitle} <strong className="text-slate-900 dark:text-white">{selectedCountry.name[selectedLanguage]}</strong>. {selectedCountry.shortDescription[selectedLanguage]}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              id="country-view-rankings-pill"
              onClick={() => navigateToRankings(selectedCountry.id)}
              className="px-4 py-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 font-semibold text-xs sm:text-sm flex items-center gap-2 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors"
            >
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>{t.rankingSectionTitle}</span>
            </button>
            <button
              id="country-compare-btn"
              onClick={() => navigateToCompare()}
              className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-medium text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            >
              <span>{t.compareTitle}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Indicadores Rápidos del País (Section 5) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        
        {/* 💰 Salarios Card */}
        <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs hover:border-blue-400 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t.countryHubBadgeSalaries}
            </span>
            <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <p className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white mt-2 font-display">
            {selectedCountry.currency.symbol} {avgSalaryCountry.toLocaleString()}
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            {t.avgSalaryLabel} ({selectedCountry.currency.code})
          </p>
        </div>

        {/* 🎓 Educación & Duración Card */}
        <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs hover:border-blue-400 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              🎓 {t.countryHubBadgeEducation}
            </span>
            <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
          </div>
          <p className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white mt-2 font-display">
            {careers[0]?.academic.durationYears || 5} {selectedLanguage === 'es' ? 'Años' : 'Years'}
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            {careers[0]?.academic.totalSemesters || 10} {selectedLanguage === 'es' ? 'semestres / ciclos' : 'university terms'}
          </p>
        </div>

        {/* 🏆 Rankings Card */}
        <div
          onClick={() => navigateToRankings(selectedCountry.id)}
          className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs hover:border-amber-400 transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t.countryHubBadgeRankings}
            </span>
            <div className="w-8 h-8 rounded-lg bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Trophy className="w-4 h-4" />
            </div>
          </div>
          <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            🥇 {maxSalaryCareer?.title[selectedLanguage]}
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            {selectedLanguage === 'es' ? 'Mayor remuneración senior' : 'Highest senior salary'}
          </p>
        </div>

        {/* ⚙️ Ingenierías Card */}
        <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs hover:border-blue-400 transition-all">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {t.countryHubBadgeCareers}
            </span>
            <div className="w-8 h-8 rounded-lg bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <p className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white mt-2 font-display">
            {careers.length} {selectedLanguage === 'es' ? 'Especialidades' : 'Fields'}
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
            {selectedLanguage === 'es' ? 'Programas con grado oficial' : 'Official accredited degrees'}
          </p>
        </div>

      </div>

      {/* Sistema Académico y Grados del País Banner */}
      <div className="p-4 sm:p-5 rounded-2xl border border-blue-200 dark:border-blue-900/60 bg-blue-50/50 dark:bg-blue-950/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              🎓 {selectedLanguage === 'es' ? 'Marco Académico y Titulación' : 'Academic Framework & Licensure'} • {selectedCountry.name[selectedLanguage]}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300">
            {selectedCountry.educationSystemOverview[selectedLanguage]}
          </p>
        </div>
        <div className="shrink-0 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shadow-2xs">
            <Clock className="w-3.5 h-3.5" />
            <span>{careers[0]?.academic.durationYears} {selectedLanguage === 'es' ? 'Años' : 'Years'} ({careers[0]?.academic.totalSemesters} {selectedLanguage === 'es' ? 'Semestres' : 'Semesters'})</span>
          </span>
        </div>
      </div>

      {/* Ingenierías Disponibles Section (Section 5) */}
      <div className="space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>⚙️</span> {t.availableCareersTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
              {selectedLanguage === 'es'
                ? `Explora los planes de estudio, materias, salarios y campo laboral en ${selectedCountry.name.es}.`
                : `Explore curricula, coursework, compensation, and industry demand in ${selectedCountry.name.en}.`}
            </p>
          </div>

          {/* Search within country */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              id="filter-country-careers-input"
              type="text"
              placeholder={selectedLanguage === 'es' ? 'Filtrar especialidad...' : 'Filter specialty...'}
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Category Filters Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
          {ENGINEERING_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                id={`cat-filter-btn-${cat.key}`}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-3.5 py-2 rounded-xl font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span>{cat.name[selectedLanguage]}</span>
              </button>
            );
          })}
        </div>

        {/* Grid of Engineering Cards (Section 5) */}
        {filteredCareers.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800">
            <span className="text-3xl block mb-2">😕</span>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              {t.emptySearchResultsTitle}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              {t.emptySearchResultsSubtitle}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCareers.map((career) => {
              return (
                <div
                  key={career.id}
                  id={`career-card-${career.id}`}
                  className="group relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xl transition-all duration-200"
                >
                  <div className="space-y-3.5">
                    {/* Top row: Icon + Ranking badge */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/60 group-hover:scale-105 transition-transform">
                        {getCareerCategoryIcon(career.category)}
                      </div>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60">
                        <Trophy className="w-3 h-3" />
                        <span>#{career.ranking.nationalRankDemand} {selectedLanguage === 'es' ? 'Demanda' : 'Demand'}</span>
                      </span>
                    </div>

                    {/* Title and description */}
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                        {career.title[selectedLanguage]}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                        {career.shortDescription[selectedLanguage]}
                      </p>
                    </div>

                    {/* Academic Degree and Duration row */}
                    <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/70 border border-slate-100 dark:border-slate-700/60 space-y-1">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-slate-500 dark:text-slate-400 font-medium flex items-center gap-1">
                          <GraduationCap className="w-3.5 h-3.5 text-blue-500" />
                          <span className="truncate max-w-[180px] font-semibold text-slate-800 dark:text-slate-200">
                            {career.academic.degreeAwarded[selectedLanguage]}
                          </span>
                        </span>
                        <span className="shrink-0 font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
                          {career.academic.durationYears} {selectedLanguage === 'es' ? 'Años' : 'Years'} ({career.academic.totalSemesters} sem)
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                        💼 {career.academic.professionalTitle[selectedLanguage]}
                      </p>
                    </div>

                    {/* Stats pills: Salario por experiencia y grado */}
                    <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                      <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 flex items-center justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                            {selectedLanguage === 'es' ? 'Rango por Experiencia' : 'Experience Range'}
                          </span>
                          <span className="font-bold text-slate-900 dark:text-white text-xs block mt-0.5">
                            {career.salary.currencySymbol} {career.salary.entryLevelMonthly.toLocaleString()} <span className="text-slate-400 font-normal">({selectedLanguage === 'es' ? 'Junior' : 'Entry'})</span> → {career.salary.currencySymbol} {career.salary.seniorMonthly.toLocaleString()} <span className="text-emerald-600 dark:text-emerald-400 font-normal">({selectedLanguage === 'es' ? 'Senior' : 'Sr'})</span>
                          </span>
                        </div>
                        <div className="text-right shrink-0">
                          <span className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold block uppercase">
                            {selectedLanguage === 'es' ? 'Media' : 'Median'}
                          </span>
                          <span className="font-extrabold text-blue-700 dark:text-blue-300 text-xs block">
                            {career.salary.currencySymbol} {career.salary.averageMonthly.toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <button
                      id={`view-career-btn-${career.id}`}
                      onClick={() => navigateToCareer(career.id)}
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 text-white text-xs sm:text-sm font-semibold transition-all group-hover:shadow-md"
                    >
                      <span>{t.viewEngineeringBtn}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};

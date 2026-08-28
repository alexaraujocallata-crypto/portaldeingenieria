import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { COUNTRIES, REGIONS } from '../data/countries';
import { getCareersForCountry } from '../data/careersResolver';
import {
  Search,
  Globe2,
  ArrowRight,
  TrendingUp,
  Award,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Compass,
  CheckCircle2,
  DollarSign,
} from 'lucide-react';
import { Country, RegionKey } from '../types';

export const HeroSection: React.FC = () => {
  const {
    selectedCountry,
    selectedLanguage,
    t,
    setSelectedCountry,
    setIsCountryModalOpen,
    setIsSearchModalOpen,
    navigateToCountry,
    navigateToRankings,
    navigateToCompare,
  } = useApp();

  const [activeRegion, setActiveRegion] = useState<RegionKey>('latam');
  const regionCountries = COUNTRIES.filter((c) => c.region === activeRegion);
  const countryCareers = getCareersForCountry(selectedCountry.id);

  // Typewriter effect state for main heading
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    const fullText = t.heroTitle;
    setDisplayedTitle('');
    setIsTypingComplete(false);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedTitle(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 38);

    return () => clearInterval(typingInterval);
  }, [t.heroTitle]);

  // Quick stats for the selected country
  const topSalaryCareer = [...countryCareers].sort((a, b) => b.salary.averageMonthly - a.salary.averageMonthly)[0] || countryCareers[0];

  return (
    <section id="hero-section" className="relative overflow-hidden bg-gradient-to-b from-blue-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 border-b border-slate-200 dark:border-slate-800 py-4 sm:py-12 md:py-16 transition-colors">
      
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        
        {/* Top Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-0.5 sm:py-1.5 rounded-full bg-blue-100/80 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-[10px] sm:text-xs font-semibold shadow-2xs animate-in fade-in slide-in-from-bottom-2 duration-300">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{t.heroBadge}</span>
          </div>
        </div>

        {/* Main Heading with Zero-Layout-Shift Typewriter Animation & Subtitle */}
        <div className="text-center mt-2.5 sm:mt-5 max-w-4xl mx-auto space-y-1.5 sm:space-y-3.5">
          <h1 className="text-xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug sm:leading-tight lg:leading-none font-display">
            <span>{displayedTitle}</span>
            {!isTypingComplete && (
              <span className="inline-block relative w-0 h-0 overflow-visible" aria-hidden="true">
                <span className="absolute bottom-0 sm:bottom-0.5 left-0.5 sm:left-1 w-0.5 sm:w-1 h-5 sm:h-8 lg:h-10 bg-slate-900 dark:bg-white animate-pulse" />
              </span>
            )}
            <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
              {t.heroTitle.slice(displayedTitle.length)}
            </span>
          </h1>
          <p className="text-[11px] sm:text-base lg:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed px-1 sm:px-2">
            {t.heroSubtitle}
          </p>
        </div>

        {/* Main Big Search Bar */}
        <div className="mt-3.5 sm:mt-8 max-w-2xl mx-auto">
          <div
            id="hero-search-trigger"
            onClick={() => setIsSearchModalOpen(true)}
            className="group relative flex items-center w-full p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-800 border sm:border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-500 shadow-sm sm:shadow-md hover:shadow-lg transition-all cursor-pointer"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400 shrink-0 ml-0.5 sm:ml-1" />
            <span className="ml-2 sm:ml-3 text-xs sm:text-base text-slate-400 dark:text-slate-400 font-normal flex-1 truncate">
              {t.searchPlaceholder}
            </span>
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="hidden sm:inline text-xs font-medium px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                {t.navSearch}
              </span>
              <kbd className="hidden sm:inline px-2 py-1 text-xs font-mono bg-slate-100 dark:bg-slate-700 rounded text-slate-500">
                ⌘K
              </kbd>
            </div>
          </div>
        </div>

        {/* Region & Country Selection Module (Section 2 & 3) */}
        <div className="mt-4 sm:mt-12 max-w-4xl mx-auto bg-white/80 dark:bg-slate-800/80 rounded-xl sm:rounded-2xl border border-slate-200 dark:border-slate-700 p-3 sm:p-7 shadow-sm sm:shadow-md backdrop-blur-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-3 pb-2.5 sm:pb-4 border-b border-slate-200 dark:border-slate-700">
            <div>
              <h3 className="text-xs sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-1.5 sm:gap-2">
                <span>🌎</span> {t.heroSelectCountryHeading}
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {selectedLanguage === 'es' ? 'Selecciona tu país para consultar salarios oficiales y planes de estudio.' : 'Select your country to view official wages and university curricula.'}
              </p>
            </div>

            <button
              id="hero-browse-all-countries-btn"
              onClick={() => setIsCountryModalOpen(true)}
              className="text-[10px] sm:text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 self-start sm:self-auto"
            >
              <span>{selectedLanguage === 'es' ? `Ver los ${COUNTRIES.length} países` : `View all ${COUNTRIES.length} countries`}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Region Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2 mt-3 sm:mt-4">
            {REGIONS.map((region) => {
              const isActive = activeRegion === region.key;
              return (
                <button
                  key={region.key}
                  id={`hero-region-tab-${region.key}`}
                  onClick={() => setActiveRegion(region.key)}
                  className={`flex items-center justify-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-600/30'
                      : 'bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  <span>{region.emoji}</span>
                  <span>{region.name[selectedLanguage]}</span>
                </button>
              );
            })}
          </div>

          {/* Country Chips in Region */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-2.5 mt-3 sm:mt-4">
            {regionCountries.map((country) => {
              const isSelected = country.id === selectedCountry.id;
              return (
                <button
                  key={country.id}
                  id={`hero-country-chip-${country.id}`}
                  onClick={() => setSelectedCountry(country)}
                  className={`flex items-center gap-1.5 sm:gap-2 p-2 sm:p-2.5 rounded-lg sm:rounded-xl border text-left text-xs sm:text-sm transition-all ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50/80 dark:bg-blue-950/60 text-blue-900 dark:text-blue-100 font-bold shadow-xs ring-1 ring-blue-500'
                      : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-300 dark:hover:border-blue-600'
                  }`}
                >
                  <span className="text-base sm:text-xl" role="img">{country.flag}</span>
                  <span className="truncate text-xs sm:text-sm">{country.name[selectedLanguage]}</span>
                  {isSelected && <span className="ml-auto text-blue-600 dark:text-blue-400 text-xs">●</span>}
                </button>
              );
            })}
          </div>

          {/* ACTIVE SELECTED COUNTRY SUMMARY CARD (Section 3) */}
          <div
            id="active-country-summary-card"
            className="mt-4 sm:mt-6 p-3 sm:p-5 rounded-xl border border-blue-200 dark:border-blue-900/60 bg-gradient-to-r from-blue-50/70 via-slate-50 to-indigo-50/50 dark:from-slate-800/90 dark:via-slate-800/70 dark:to-blue-950/40 shadow-xs"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
              
              {/* Left: Country details */}
              <div className="flex items-start sm:items-center gap-2.5 sm:gap-3.5">
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 flex items-center justify-center text-xl sm:text-3xl shadow-sm shrink-0">
                  {selectedCountry.flag}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <h4 className="text-sm sm:text-xl font-bold text-slate-900 dark:text-white uppercase tracking-wider font-display">
                      {selectedCountry.name[selectedLanguage]}
                    </h4>
                    <span className="px-1.5 py-0.2 sm:px-2 sm:py-0.5 rounded text-[10px] sm:text-xs font-semibold bg-blue-600 text-white">
                      {selectedCountry.code}
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-0.5 sm:gap-x-4 sm:gap-y-1 mt-0.5 sm:mt-1 text-[11px] sm:text-xs text-slate-600 dark:text-slate-300">
                    <span>
                      <strong>{t.heroCountryCardCurrency}:</strong> {selectedCountry.currency.symbol} ({selectedCountry.currency.code})
                    </span>
                    <span>
                      <strong>{t.heroCountryCardLanguage}:</strong> {selectedCountry.primaryLanguage[selectedLanguage]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right: CTA action buttons */}
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                <button
                  id="hero-explore-country-btn"
                  onClick={() => navigateToCountry(selectedCountry.id)}
                  className="flex-1 sm:flex-none flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <span>{t.heroExploreBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
                <button
                  id="hero-view-rankings-btn"
                  onClick={() => navigateToRankings(selectedCountry.id)}
                  className="flex items-center justify-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 font-medium text-xs sm:text-sm transition-colors"
                >
                  <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                  <span>{t.countryHubBadgeRankings}</span>
                </button>
              </div>
            </div>

            {/* Quick Country Insight */}
            <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-slate-200/80 dark:border-slate-700/80 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 gap-1.5 sm:gap-2">
              <p className="line-clamp-1">
                📌 {selectedCountry.shortDescription[selectedLanguage]}
              </p>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <span className="font-medium text-slate-700 dark:text-slate-300">
                  {countryCareers.length} {selectedLanguage === 'es' ? 'carreras' : 'careers'}
                </span>
                <span>•</span>
                <span className="font-medium text-emerald-600 dark:text-emerald-400">
                  Max: {topSalaryCareer.salary.currencySymbol} {topSalaryCareer.salary.seniorMonthly.toLocaleString()} /m
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

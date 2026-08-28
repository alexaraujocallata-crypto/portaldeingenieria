import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import { searchCareers } from '../data/careersResolver';
import { Search, X, Layers, ArrowRight, Code2, Factory, Building2, Cpu, Flame, Dna, Briefcase } from 'lucide-react';
import { EngineeringCareer } from '../types';

export const QuickSearchModal: React.FC = () => {
  const {
    selectedCountry,
    selectedLanguage,
    isSearchModalOpen,
    t,
    setIsSearchModalOpen,
    navigateToCareer,
  } = useApp();

  const [query, setQuery] = useState('');
  const [filterBySelectedCountryOnly, setFilterBySelectedCountryOnly] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchModalOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
    } else {
      setQuery('');
    }
  }, [isSearchModalOpen]);

  const searchResults = useMemo(() => {
    if (!query.trim()) {
      // Default top suggestions for the country
      return searchCareers('ingenieria', selectedCountry.id).slice(0, 6);
    }
    return searchCareers(
      query,
      filterBySelectedCountryOnly ? selectedCountry.id : undefined
    );
  }, [query, filterBySelectedCountryOnly, selectedCountry.id]);

  if (!isSearchModalOpen) return null;

  const handleSelectCareer = (career: EngineeringCareer) => {
    setIsSearchModalOpen(false);
    navigateToCareer(career.id);
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'software_tech':
        return <Code2 className="w-4 h-4 text-blue-500" />;
      case 'industrial_management':
        return <Factory className="w-4 h-4 text-amber-500" />;
      case 'infrastructure_civil':
        return <Building2 className="w-4 h-4 text-emerald-500" />;
      case 'mechanical_electrical':
        return <Cpu className="w-4 h-4 text-violet-500" />;
      case 'earth_energy':
        return <Flame className="w-4 h-4 text-orange-500" />;
      case 'bio_chemical':
        return <Dna className="w-4 h-4 text-teal-500" />;
      default:
        return <Layers className="w-4 h-4 text-slate-500" />;
    }
  };

  return (
    <div
      id="quick-search-modal-backdrop"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-950/65 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={() => setIsSearchModalOpen(false)}
    >
      <div
        id="quick-search-modal-container"
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3 bg-slate-50/50 dark:bg-slate-800/30">
          <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
          <input
            ref={inputRef}
            id="quick-search-modal-input"
            type="text"
            placeholder={t.searchPlaceholder}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : prev));
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
              } else if (e.key === 'Enter' && searchResults[selectedIndex]) {
                e.preventDefault();
                handleSelectCareer(searchResults[selectedIndex]);
              }
            }}
            className="w-full bg-transparent border-none text-base text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs font-mono bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded text-slate-500">
            ESC
          </kbd>
        </div>

        {/* Filter Toggle */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-800/60 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300">
          <span>
            {query.trim()
              ? `${searchResults.length} ${selectedLanguage === 'es' ? 'resultados encontrados' : 'results found'}`
              : selectedLanguage === 'es' ? 'Ingenierías destacadas' : 'Popular engineering careers'}
          </span>
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={filterBySelectedCountryOnly}
              onChange={(e) => setFilterBySelectedCountryOnly(e.target.checked)}
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500 h-3.5 w-3.5"
            />
            <span>
              {selectedLanguage === 'es'
                ? `Solo en ${selectedCountry.name.es} (${selectedCountry.flag})`
                : `Only in ${selectedCountry.name.en} (${selectedCountry.flag})`}
            </span>
          </label>
        </div>

        {/* Live Results List */}
        <div className="p-3 overflow-y-auto space-y-1.5 flex-1 divide-y divide-slate-100 dark:divide-slate-800/40">
          {searchResults.length === 0 ? (
            <div className="text-center py-12 px-4">
              <span className="text-3xl mb-2 block">😕</span>
              <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                {t.emptySearchResultsTitle}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
                {t.emptySearchResultsSubtitle}
              </p>
            </div>
          ) : (
            searchResults.map((career, idx) => {
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={career.id}
                  id={`search-result-item-${career.id}`}
                  onClick={() => handleSelectCareer(career)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`p-3 rounded-xl cursor-pointer transition-all flex items-start justify-between gap-3 ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-blue-950/60 ring-1 ring-blue-500/20'
                      : 'hover:bg-slate-50 dark:hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shrink-0 shadow-2xs mt-0.5">
                      {getCategoryIcon(career.category)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white truncate">
                          {career.title[selectedLanguage]}
                        </h4>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {career.salary.currencySymbol} {career.salary.averageMonthly.toLocaleString()} {career.salary.currencyCode} /m
                        </span>
                      </div>
                      <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                        {career.shortDescription[selectedLanguage]}
                      </p>
                      <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-400 dark:text-slate-500">
                        <span>⏱️ {career.academic.durationYears} {selectedLanguage === 'es' ? 'años' : 'years'}</span>
                        <span>🏆 #{career.ranking.nationalRankDemand} {selectedLanguage === 'es' ? 'en demanda' : 'in demand'}</span>
                        <span>🎓 {career.academic.level[selectedLanguage]}</span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center self-center text-slate-400">
                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-blue-600 dark:text-blue-400' : ''}`} />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-3">
            <span><kbd className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-slate-200 dark:border-slate-700">↑</kbd> <kbd className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-slate-200 dark:border-slate-700">↓</kbd> {selectedLanguage === 'es' ? 'Navegar' : 'Navigate'}</span>
            <span><kbd className="font-mono bg-white dark:bg-slate-800 px-1 py-0.5 rounded border border-slate-200 dark:border-slate-700">↵</kbd> {selectedLanguage === 'es' ? 'Seleccionar' : 'Select'}</span>
          </div>
          <span>{selectedLanguage === 'es' ? 'Datos oficiales 2026' : '2026 official data'}</span>
        </div>
      </div>
    </div>
  );
};

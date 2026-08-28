import React, { useState, useMemo } from 'react';
import { useApp } from '../context/AppContext';
import { COUNTRIES, REGIONS } from '../data/countries';
import { Search, X, Check, Globe, ArrowRight } from 'lucide-react';
import { Country, RegionKey } from '../types';

export const CountrySelectorModal: React.FC = () => {
  const {
    selectedCountry,
    selectedLanguage,
    isCountryModalOpen,
    t,
    setIsCountryModalOpen,
    setSelectedCountry,
    navigateToCountry,
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [activeRegionTab, setActiveRegionTab] = useState<RegionKey | 'all'>('all');

  const filteredCountries = useMemo(() => {
    let list = COUNTRIES;
    if (activeRegionTab !== 'all') {
      list = list.filter((c) => c.region === activeRegionTab);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (c) =>
          c.name.es.toLowerCase().includes(q) ||
          c.name.en.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          c.currency.name.es.toLowerCase().includes(q) ||
          c.currency.code.toLowerCase().includes(q)
      );
    }
    return list;
  }, [searchQuery, activeRegionTab]);

  if (!isCountryModalOpen) return null;

  const handleSelectCountry = (country: Country) => {
    setSelectedCountry(country);
    setIsCountryModalOpen(false);
    navigateToCountry(country.id);
  };

  return (
    <div
      id="country-selector-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={() => setIsCountryModalOpen(false)}
    >
      <div
        id="country-selector-modal-container"
        className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[85vh] animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/70 dark:bg-slate-800/40">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {t.heroSelectCountryHeading}
              </h3>
              <p className="text-xs text-slate-700 dark:text-slate-200">
                {t.currentCountry}: <strong className="text-slate-800 dark:text-slate-200">{selectedCountry.flag} {selectedCountry.name[selectedLanguage]}</strong> ({selectedCountry.currency.code})
              </p>
            </div>
          </div>
          <button
            id="close-country-modal-btn"
            onClick={() => setIsCountryModalOpen(false)}
            className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search bar & Region tabs */}
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 space-y-3">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-700 dark:text-slate-200" />
            <input
              id="search-country-input"
              type="text"
              placeholder={selectedLanguage === 'es' ? 'Buscar país o moneda (ej. Perú, México, USD, EUR)...' : 'Search country or currency (e.g. Peru, Mexico, USD, EUR)...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:bg-white dark:focus:bg-slate-900 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none text-xs">
            <button
              id="region-tab-all"
              onClick={() => setActiveRegionTab('all')}
              className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                activeRegionTab === 'all'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              🌎 {selectedLanguage === 'es' ? 'Todas las regiones' : 'All Regions'}
            </button>
            {REGIONS.map((region) => (
              <button
                key={region.key}
                id={`region-tab-${region.key}`}
                onClick={() => setActiveRegionTab(region.key)}
                className={`px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors ${
                  activeRegionTab === region.key
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                {region.emoji} {region.name[selectedLanguage]}
              </button>
            ))}
          </div>
        </div>

        {/* Countries Grid */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1">
          {filteredCountries.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-slate-500 dark:text-slate-400 text-sm">
                {selectedLanguage === 'es'
                  ? 'No se encontraron países con ese nombre.'
                  : 'No countries found matching your search.'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {filteredCountries.map((country) => {
                const isSelected = country.id === selectedCountry.id;
                return (
                  <button
                    key={country.id}
                    id={`country-card-${country.id}`}
                    onClick={() => handleSelectCountry(country)}
                    className={`flex items-center justify-between p-3.5 rounded-xl border text-left transition-all group ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50/70 dark:bg-blue-950/40 shadow-xs ring-1 ring-blue-500/20'
                        : 'border-slate-200 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700 bg-white dark:bg-slate-800/60 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl sm:text-3xl leading-none" role="img">
                        {country.flag}
                      </span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {country.name[selectedLanguage]}
                          </h4>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-mono">
                            {country.code}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {country.currency.symbol} {country.currency.code} • {country.primaryLanguage[selectedLanguage]}
                        </p>
                      </div>
                    </div>

                    {isSelected ? (
                      <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                    ) : (
                      <ArrowRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-blue-500 group-hover:translate-x-0.5 transition-all" />
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3.5 border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/40 text-center text-xs text-slate-500 dark:text-slate-400">
          {selectedLanguage === 'es'
            ? 'Los salarios y normativas académicas se actualizan de forma automática al cambiar de país.'
            : 'Salaries and academic frameworks automatically adapt when switching country.'}
        </div>
      </div>
    </div>
  );
};

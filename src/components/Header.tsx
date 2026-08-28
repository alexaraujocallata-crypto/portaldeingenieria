import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Compass,
  Search,
  Globe2,
  Moon,
  Sun,
  Monitor,
  Menu,
  X,
  ChevronDown,
  Trophy,
  Layers,
  GitCompare,
  Sparkles,
} from 'lucide-react';
import { Language, ThemeMode } from '../types';

export const Header: React.FC = () => {
  const {
    selectedCountry,
    selectedLanguage,
    themeMode,
    currentView,
    t,
    setSelectedLanguage,
    setThemeMode,
    setIsCountryModalOpen,
    setIsSearchModalOpen,
    navigateToHome,
    navigateToCountry,
    navigateToRankings,
    navigateToCompare,
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isThemeDropdownOpen, setIsThemeDropdownOpen] = useState(false);

  const toggleLanguage = (lang: Language) => {
    setSelectedLanguage(lang);
    setIsLangDropdownOpen(false);
  };

  const toggleTheme = (mode: ThemeMode) => {
    setThemeMode(mode);
    setIsThemeDropdownOpen(false);
  };

  return (
    <header id="main-header" className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-2.5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 sm:h-16 md:h-18">
          
          {/* Logo and Brand */}
          <div className="flex items-center gap-1.5 sm:gap-3 cursor-pointer select-none" onClick={navigateToHome} id="brand-logo-btn">
            <div className="w-7 h-7 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white shadow-xs ring-1 sm:ring-2 ring-blue-600/20">
              <Compass className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <span className="font-bold text-xs sm:text-lg md:text-xl tracking-tight text-slate-900 dark:text-white font-display">
                  {t.appName}
                </span>
                <span className="inline-flex items-center px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded text-[8px] sm:text-[10px] font-bold bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  2026
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-700 dark:text-slate-200 hidden sm:block">
                {t.appTagline}
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium" id="desktop-nav-menu">
            <button
              id="nav-btn-countries"
              onClick={() => setIsCountryModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <Globe2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t.navCountries}</span>
            </button>

            <button
              id="nav-btn-careers"
              onClick={() => navigateToCountry(selectedCountry.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                currentView === 'country' || currentView === 'engineering'
                  ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-semibold'
                  : 'text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t.navCareers}</span>
            </button>

            <button
              id="nav-btn-rankings"
              onClick={() => navigateToRankings(selectedCountry.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                currentView === 'rankings'
                  ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-semibold'
                  : 'text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Trophy className="w-4 h-4 text-amber-500 dark:text-amber-400" />
              <span>{t.navRankings}</span>
            </button>

            <button
              id="nav-btn-compare"
              onClick={() => navigateToCompare()}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg transition-colors ${
                currentView === 'compare'
                  ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 font-semibold'
                  : 'text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <GitCompare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{t.navCompare}</span>
            </button>
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            
            {/* Quick Search Button (Cmd+K) */}
            <button
              id="quick-search-trigger-btn"
              onClick={() => setIsSearchModalOpen(true)}
              className="flex items-center gap-1.5 p-1.5 sm:px-3 sm:py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 hover:border-blue-400 dark:hover:border-blue-500 hover:bg-white dark:hover:bg-slate-800 transition-all text-xs sm:text-sm shadow-xs"
              title={`${t.searchPromptShortcut} (Ctrl+K)`}
            >
              <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-700 dark:text-slate-200" />
              <span className="hidden lg:inline text-slate-700 dark:text-slate-200 font-normal">
                {t.searchPlaceholder.slice(0, 18)}...
              </span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-slate-700 dark:text-slate-200">
                ⌘K
              </kbd>
            </button>

            {/* Country Pill Button (Always visible) */}
            <button
              id="header-country-pill-btn"
              onClick={() => setIsCountryModalOpen(true)}
              className="flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-3 sm:py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-slate-800 text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 transition-colors shadow-xs"
              title={t.changeCountry}
            >
              <span className="text-sm sm:text-lg leading-none" role="img" aria-label={selectedCountry.name[selectedLanguage]}>
                {selectedCountry.flag}
              </span>
              <span className="hidden sm:inline font-semibold">
                {selectedCountry.name[selectedLanguage]}
              </span>
              <span className="inline sm:hidden font-semibold text-[11px]">
                {selectedCountry.code}
              </span>
              <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-400" />
            </button>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                id="header-lang-btn"
                onClick={() => {
                  setIsLangDropdownOpen(!isLangDropdownOpen);
                  setIsThemeDropdownOpen(false);
                }}
                className="flex items-center gap-0.5 sm:gap-1 px-1.5 py-1 sm:px-2.5 sm:py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 text-[11px] sm:text-xs md:text-sm font-medium text-slate-700 dark:text-slate-200 transition-colors"
                aria-label="Language selector"
              >
                <span>{selectedLanguage === 'es' ? '🇪🇸 ES' : '🇺🇸 EN'}</span>
                <ChevronDown className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-slate-400" />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 py-1.5 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    id="lang-option-es"
                    onClick={() => toggleLanguage('es')}
                    className={`w-full px-3 py-2 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700/60 ${
                      selectedLanguage === 'es' ? 'font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span>🇪🇸 {t.langSpanish}</span>
                    {selectedLanguage === 'es' && <span className="text-xs">✓</span>}
                  </button>
                  <button
                    id="lang-option-en"
                    onClick={() => toggleLanguage('en')}
                    className={`w-full px-3 py-2 text-left text-xs sm:text-sm flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700/60 ${
                      selectedLanguage === 'en' ? 'font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-950/30' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span>🇺🇸 {t.langEnglish}</span>
                    {selectedLanguage === 'en' && <span className="text-xs">✓</span>}
                  </button>
                </div>
              )}
            </div>

            {/* Theme Toggle Dropdown */}
            <div className="relative">
              <button
                id="header-theme-btn"
                onClick={() => {
                  setIsThemeDropdownOpen(!isThemeDropdownOpen);
                  setIsLangDropdownOpen(false);
                }}
                className="p-1.5 sm:p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 transition-colors"
                aria-label="Theme selector"
              >
                {themeMode === 'dark' ? (
                  <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                ) : themeMode === 'light' ? (
                  <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500" />
                ) : (
                  <Monitor className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600 dark:text-slate-400" />
                )}
              </button>

              {isThemeDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 py-1.5 bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <button
                    id="theme-option-light"
                    onClick={() => toggleTheme('light')}
                    className={`w-full px-3 py-2 text-left text-xs sm:text-sm flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700/60 ${
                      themeMode === 'light' ? 'font-semibold text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5 text-amber-500" />
                    <span>{t.themeLight}</span>
                  </button>
                  <button
                    id="theme-option-dark"
                    onClick={() => toggleTheme('dark')}
                    className={`w-full px-3 py-2 text-left text-xs sm:text-sm flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700/60 ${
                      themeMode === 'dark' ? 'font-semibold text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5 text-blue-400" />
                    <span>{t.themeDark}</span>
                  </button>
                  <button
                    id="theme-option-system"
                    onClick={() => toggleTheme('system')}
                    className={`w-full px-3 py-2 text-left text-xs sm:text-sm flex items-center gap-2 hover:bg-slate-100 dark:hover:bg-slate-700/60 ${
                      themeMode === 'system' ? 'font-semibold text-blue-600 dark:text-blue-400' : 'text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5 text-slate-500" />
                    <span>{t.themeSystem}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-5 space-y-4 shadow-xl">
          <div className="grid grid-cols-2 gap-2">
            <button
              id="mobile-nav-home"
              onClick={() => {
                navigateToHome();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100 text-sm font-medium"
            >
              <Compass className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t.breadcrumbHome}</span>
            </button>

            <button
              id="mobile-nav-countries"
              onClick={() => {
                setIsCountryModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100 text-sm font-medium"
            >
              <Globe2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t.navCountries}</span>
            </button>

            <button
              id="mobile-nav-careers"
              onClick={() => {
                navigateToCountry(selectedCountry.id);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100 text-sm font-medium"
            >
              <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t.navCareers}</span>
            </button>

            <button
              id="mobile-nav-rankings"
              onClick={() => {
                navigateToRankings(selectedCountry.id);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-2 p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 text-slate-800 dark:text-slate-100 text-sm font-medium"
            >
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>{t.navRankings}</span>
            </button>

            <button
              id="mobile-nav-compare"
              onClick={() => {
                navigateToCompare();
                setIsMobileMenuOpen(false);
              }}
              className="col-span-2 flex items-center justify-center gap-2 p-3 rounded-xl border border-blue-200 dark:border-blue-800 bg-blue-50/70 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 text-sm font-semibold"
            >
              <GitCompare className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{t.compareTitle}</span>
            </button>
          </div>

          <div className="pt-2 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-700 dark:text-slate-200 font-medium">
              {t.currentCountry}: <strong className="text-slate-900 dark:text-white font-bold">{selectedCountry.flag} {selectedCountry.name[selectedLanguage]}</strong>
            </span>
            <button
              id="mobile-change-country-btn"
              onClick={() => {
                setIsCountryModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 underline underline-offset-2"
            >
              {t.changeCountry}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

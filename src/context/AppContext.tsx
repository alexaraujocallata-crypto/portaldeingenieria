import React, { createContext, useContext, useState, useEffect } from 'react';
import { ActiveView, Country, Language, ThemeMode } from '../types';
import { COUNTRIES } from '../data/countries';
import { TRANSLATIONS } from '../data/translations';

interface AppContextType {
  selectedCountry: Country;
  selectedLanguage: Language;
  themeMode: ThemeMode;
  currentView: ActiveView;
  selectedCareerId: string | null;
  isCountryModalOpen: boolean;
  isSearchModalOpen: boolean;
  compareCareerIds: [string | null, string | null];
  t: typeof TRANSLATIONS.es;
  
  // Actions
  setSelectedCountry: (country: Country) => void;
  setSelectedLanguage: (lang: Language) => void;
  setThemeMode: (theme: ThemeMode) => void;
  setCurrentView: (view: ActiveView) => void;
  setSelectedCareerId: (id: string | null) => void;
  setIsCountryModalOpen: (open: boolean) => void;
  setIsSearchModalOpen: (open: boolean) => void;
  setCompareCareerIds: (ids: [string | null, string | null]) => void;
  
  // High-level navigation helpers
  navigateToHome: () => void;
  navigateToCountry: (countryId?: string) => void;
  navigateToCareer: (careerId: string) => void;
  navigateToRankings: (countryId?: string) => void;
  navigateToCompare: (careerId1?: string, careerId2?: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(() => {
    return COUNTRIES.find((c) => c.id === 'pe') || COUNTRIES[0];
  });

  const [selectedLanguage, setSelectedLanguage] = useState<Language>('es');
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [currentView, setCurrentView] = useState<ActiveView>('home');
  const [selectedCareerId, setSelectedCareerId] = useState<string | null>('pe-sistemas');
  const [isCountryModalOpen, setIsCountryModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [compareCareerIds, setCompareCareerIds] = useState<[string | null, string | null]>(['pe-sistemas', 'pe-minas']);

  // Handle Theme switching with root element class and system preference detection
  useEffect(() => {
    const root = document.documentElement;
    const isDark =
      themeMode === 'dark' ||
      (themeMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [themeMode]);

  // Global keyboard shortcuts (Cmd+K / Ctrl+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsSearchModalOpen(false);
        setIsCountryModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const t = TRANSLATIONS[selectedLanguage];

  const navigateToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCountry = (countryId?: string) => {
    if (countryId) {
      const country = COUNTRIES.find((c) => c.id === countryId);
      if (country) setSelectedCountry(country);
    }
    setCurrentView('country');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCareer = (careerId: string) => {
    setSelectedCareerId(careerId);
    setCurrentView('engineering');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToRankings = (countryId?: string) => {
    if (countryId) {
      const country = COUNTRIES.find((c) => c.id === countryId);
      if (country) setSelectedCountry(country);
    }
    setCurrentView('rankings');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCompare = (careerId1?: string, careerId2?: string) => {
    if (careerId1 || careerId2) {
      setCompareCareerIds([
        careerId1 || compareCareerIds[0] || 'pe-sistemas',
        careerId2 || compareCareerIds[1] || 'pe-minas',
      ]);
    }
    setCurrentView('compare');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        selectedCountry,
        selectedLanguage,
        themeMode,
        currentView,
        selectedCareerId,
        isCountryModalOpen,
        isSearchModalOpen,
        compareCareerIds,
        t,
        setSelectedCountry,
        setSelectedLanguage,
        setThemeMode,
        setCurrentView,
        setSelectedCareerId,
        setIsCountryModalOpen,
        setIsSearchModalOpen,
        setCompareCareerIds,
        navigateToHome,
        navigateToCountry,
        navigateToCareer,
        navigateToRankings,
        navigateToCompare,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

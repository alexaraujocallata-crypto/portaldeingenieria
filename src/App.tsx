import React, { useEffect } from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CountryOverview } from './components/CountryOverview';
import { EngineeringDetail } from './components/EngineeringDetail';
import { RankingsView } from './components/RankingsView';
import { CompareView } from './components/CompareView';
import { CountrySelectorModal } from './components/CountrySelectorModal';
import { QuickSearchModal } from './components/QuickSearchModal';
import { Footer } from './components/Footer';

const AppContent: React.FC = () => {
  const { currentView, setIsSearchModalOpen } = useApp();

  // Global keyboard shortcuts (Command+K or Ctrl+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setIsSearchModalOpen]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans antialiased selection:bg-blue-500 selection:text-white transition-colors">
      {/* Header */}
      <Header />

      {/* Main Content Based on Current View */}
      <main className="flex-1">
        {currentView === 'home' && (
          <>
            <HeroSection />
            <CountryOverview />
          </>
        )}

        {currentView === 'country' && <CountryOverview />}

        {(currentView === 'career' || currentView === 'engineering') && <EngineeringDetail />}

        {currentView === 'rankings' && <RankingsView />}

        {currentView === 'compare' && <CompareView />}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <CountrySelectorModal />
      <QuickSearchModal />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

import React from 'react';
import { useApp } from '../context/AppContext';
import { COUNTRIES } from '../data/countries';
import { GraduationCap, ShieldCheck, Heart, Globe, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const { selectedLanguage, t, navigateToHome, navigateToCountry, navigateToRankings, navigateToCompare, setIsCountryModalOpen } = useApp();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & mission */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2.5 cursor-pointer" onClick={navigateToHome}>
              <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-xs">
                <GraduationCap className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-slate-900 dark:text-white font-display tracking-tight">
                {t.brandTitle}
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {t.brandSubtitle}. {selectedLanguage === 'es' ? 'Portal universitario oficial para orientación vocacional, planes de estudio y mercado laboral.' : 'Official university portal for vocational guidance, curricula, and job market trends.'}
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>{selectedLanguage === 'es' ? 'Datos oficiales 2026' : '2026 Verified Data'}</span>
            </div>
          </div>

          {/* Col 2: Top Countries */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.navCountries}
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              {COUNTRIES.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => navigateToCountry(c.id)}
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
                  >
                    <span>{c.flag}</span>
                    <span>{c.name[selectedLanguage]}</span>
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setIsCountryModalOpen(true)}
                  className="text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                >
                  {selectedLanguage === 'es' ? 'Ver todos los 11 países →' : 'View all 11 countries →'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {selectedLanguage === 'es' ? 'Navegación' : 'Navigation'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={navigateToHome} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {t.navHome}
                </button>
              </li>
              <li>
                <button onClick={() => navigateToRankings()} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {t.navRankings}
                </button>
              </li>
              <li>
                <button onClick={navigateToCompare} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {t.navCompare}
                </button>
              </li>
              <li>
                <button onClick={() => setIsCountryModalOpen(true)} className="hover:text-blue-600 dark:hover:text-blue-400">
                  {t.navSearch}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Institutional info & Scroll to top */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {t.sourcesSectionTitle}
            </h4>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              {selectedLanguage === 'es'
                ? 'Información consolidada de ministerios de trabajo, SUNEDU, INEGI, MiFuturo, BLS y agencias oficiales de acreditación universitaria.'
                : 'Consolidated data from national labor ministries, accreditation boards, and statistical agencies.'}
            </p>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-xs font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{selectedLanguage === 'es' ? 'Volver arriba' : 'Back to top'}</span>
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 Portal de Ingenierías. {selectedLanguage === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}</p>
          <div className="flex items-center gap-4">
            <span>{selectedLanguage === 'es' ? 'Actualizado: Febrero 2026' : 'Updated: February 2026'}</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span>Hecho con precisión para estudiantes y profesionales</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getCareerById, getCareersForCountry, formatCurrency } from '../data/careersResolver';
import { COUNTRIES } from '../data/countries';
import {
  ChevronRight,
  DollarSign,
  Clock,
  GraduationCap,
  Trophy,
  BookOpen,
  Briefcase,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Building2,
  TrendingUp,
  Layers,
  ArrowLeft,
  GitCompare,
  Share2,
  Sparkles,
  Award,
  AlertCircle,
  BarChart3,
  Calendar,
} from 'lucide-react';
import { EngineeringCareer } from '../types';

export const EngineeringDetail: React.FC = () => {
  const {
    selectedCountry,
    selectedLanguage,
    selectedCareerId,
    t,
    navigateToCountry,
    navigateToCompare,
    navigateToCareer,
  } = useApp();

  const [copiedLink, setCopiedLink] = useState(false);

  const countryCareers = getCareersForCountry(selectedCountry.id);
  const career = (selectedCareerId ? getCareerById(selectedCareerId) : null) || countryCareers[0];
  const careerCountry = (career ? COUNTRIES.find((c) => c.id === career.countryId) : null) || selectedCountry;
  const relatedCareers = countryCareers.filter((c) => c.id !== career?.id).slice(0, 3);

  if (!career) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <span className="text-4xl block">😕</span>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          {t.noDataAvailableTitle}
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {t.noDataAvailableSubtitle}
        </p>
        <button
          onClick={() => navigateToCountry(selectedCountry.id)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t.backToCountry} {selectedCountry.name[selectedLanguage]}</span>
        </button>
      </div>
    );
  }

  const handleCopyShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div id="career-detail-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 animate-in fade-in duration-200">
      
      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 flex-wrap">
        <button onClick={() => navigateToCountry(careerCountry.id)} className="hover:text-blue-600 flex items-center gap-1">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t.backToCountry} {careerCountry.name[selectedLanguage]}</span>
        </button>
        <ChevronRight className="w-3 h-3" />
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          {career.title[selectedLanguage]}
        </span>
      </div>

      {/* Main Header / Banner (Section 6) */}
      <div className="p-6 sm:p-8 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 shadow-sm relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                {careerCountry.flag} {careerCountry.name[selectedLanguage]}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
                {career.academic.level[selectedLanguage]}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                {career.ranking.employabilityRatePercent}% {t.employabilityRate}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight font-display">
              {career.title[selectedLanguage]}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {career.fullDescription[selectedLanguage]}
            </p>
          </div>

          {/* Top Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3 self-start lg:self-center shrink-0 flex-wrap">
            <button
              id="compare-this-career-btn"
              onClick={() => navigateToCompare(career.id)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
            >
              <GitCompare className="w-4 h-4" />
              <span>{t.compareTitle}</span>
            </button>
            <button
              id="share-career-btn"
              onClick={handleCopyShare}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 text-slate-700 dark:text-slate-200 text-xs sm:text-sm font-medium transition-colors"
              title="Copiar enlace"
            >
              <Share2 className="w-4 h-4" />
              <span>{copiedLink ? (selectedLanguage === 'es' ? '¡Copiado!' : 'Copied!') : (selectedLanguage === 'es' ? 'Compartir' : 'Share')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Indicadores Principales (KPI Cards) - Section 6 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* KPI 1: Salario */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs hover:border-blue-400 transition-all">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              💰 {t.kpiSalaryTitle}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-semibold font-mono">
              {career.salary.currencyCode}
            </span>
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2 font-display">
            {career.salary.currencySymbol} {career.salary.averageMonthly.toLocaleString()}
          </p>
          <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span>{t.yearLabel}: {career.salary.year}</span>
            <span className="truncate max-w-[120px]">{career.salary.source}</span>
          </div>
        </div>

        {/* KPI 2: Duración */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs hover:border-blue-400 transition-all">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              ⏱️ {t.kpiDurationTitle}
            </span>
            <Clock className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2 font-display">
            {career.academic.durationYears} {selectedLanguage === 'es' ? 'Años' : 'Years'}
          </p>
          <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span>{career.academic.totalSemesters} {selectedLanguage === 'es' ? 'semestres' : 'semesters'}</span>
            <span>{selectedLanguage === 'es' ? 'Plan Universitario' : 'Full University'}</span>
          </div>
        </div>

        {/* KPI 3: Grado / Título */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs hover:border-blue-400 transition-all">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              🎓 {t.kpiDegreeTitle}
            </span>
            <GraduationCap className="w-4 h-4 text-violet-500" />
          </div>
          <p className="text-base font-bold text-slate-900 dark:text-white mt-2 line-clamp-2">
            {career.academic.degreeAwarded[selectedLanguage]}
          </p>
          <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 dark:text-slate-400 truncate">
            {career.academic.professionalTitle[selectedLanguage]}
          </div>
        </div>

        {/* KPI 4: Ranking */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs hover:border-blue-400 transition-all">
          <div className="flex items-center justify-between text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              🏆 {t.kpiRankingTitle}
            </span>
            <Trophy className="w-4 h-4 text-amber-500" />
          </div>
          <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mt-2 font-display">
            #{career.ranking.nationalRankDemand}
          </p>
          <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
            <span>#{career.ranking.nationalRankSalary} {selectedLanguage === 'es' ? 'en Salario' : 'in Salary'}</span>
            <span className="font-semibold text-emerald-600">+{career.ranking.futureGrowthScorePercent}% {selectedLanguage === 'es' ? 'crecimiento' : 'growth'}</span>
          </div>
        </div>

      </div>

      {/* 🎓 INFORMACIÓN ACADÉMICA Y ESTUDIOS (Section 7) */}
      <section id="academic-studies-section" className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>🎓</span> {t.studiesSectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {selectedLanguage === 'es'
              ? 'Estructura universitaria formal, requisitos de ingreso y titulación profesional habilitante.'
              : 'Official university structure, admission criteria, and chartered professional title requirements.'}
          </p>
        </div>

        {/* Tarjetas de estudios estructuradas (Section 7) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Nivel & Duración */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 space-y-1.5">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              ⏱️ {t.academicLevelLabel}
            </span>
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {career.academic.level[selectedLanguage]}
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
              {career.academic.durationYears} {selectedLanguage === 'es' ? 'Años académicos oficiales' : 'Official academic years'}
            </p>
          </div>

          {/* Semestres & Ciclos */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 space-y-1.5">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              📅 {t.totalSemestersLabel}
            </span>
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
              {career.academic.totalSemesters} {selectedLanguage === 'es' ? 'Semestres / Ciclos' : 'Semesters / Terms'}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {selectedLanguage === 'es' ? 'Malla curricular completa acreditada' : 'Full accredited curriculum'}
            </p>
          </div>

          {/* Grado Académico Otorgado */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 space-y-1.5">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              🎓 {selectedLanguage === 'es' ? 'Grado Académico' : 'Degree Awarded'}
            </span>
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-2">
              {career.academic.degreeAwarded[selectedLanguage]}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {selectedLanguage === 'es' ? 'Grado universitario oficial' : 'Official university degree'}
            </p>
          </div>

          {/* Título Profesional Habilitante */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 space-y-1.5">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
              💼 {t.professionalTitleLabel}
            </span>
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-2">
              {career.academic.professionalTitle[selectedLanguage]}
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              {selectedLanguage === 'es' ? 'Habilitación con firma oficial y colegiatura' : 'Legally registered chartered title'}
            </p>
          </div>

        </div>

        {/* Requisitos de Ingreso y Graduación */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Requisitos de Ingreso */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 space-y-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-blue-500" />
              {t.admissionRequirementsLabel}
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {career.academic.admissionRequirements[selectedLanguage].map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold shrink-0">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requisitos de Graduación */}
          <div className="p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 space-y-3">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-emerald-500" />
              {t.graduationRequirementsLabel}
            </span>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
              {career.academic.graduationRequirements[selectedLanguage].map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">•</span>
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 📚 MATERIAS — ¿Qué se estudia? (Section 8) */}
      <section id="curriculum-subjects-section" className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>📚</span> {t.curriculumSectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t.curriculumSubtitle}
          </p>
        </div>

        {/* Tarjetas de áreas y materias pequeñas (Section 8) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {career.curriculumAreas.map((area) => (
            <div
              key={area.id}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 space-y-3 shadow-2xs hover:border-blue-400 transition-all"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  <BookOpen className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  {area.name[selectedLanguage]}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {area.subjects[selectedLanguage].map((subject, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-700/70 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-600/70 font-medium"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 💰 SECCIÓN VISUAL DE SALARIOS Y EXPERIENCIA LABORAL */}
      <section id="salary-breakdown-section" className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>💰</span> {t.salarySectionTitle} {careerCountry.name[selectedLanguage]}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t.salaryDisclaimer}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono font-medium">
              {career.salary.currencyCode} ({career.salary.currencySymbol})
            </span>
            <span className="text-xs px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold">
              {t.yearLabel} {career.salary.year}
            </span>
          </div>
        </div>

        {/* ⚠️ AVISO DESTACADO DE DEPENDENCIA EN EXPERIENCIA LABORAL */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-700/60 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-amber-900 dark:text-amber-200">
              {t.experienceFactorNoticeTitle}
            </h3>
            <p className="text-xs sm:text-sm text-amber-800/90 dark:text-amber-300/80 leading-relaxed">
              {t.experienceFactorNoticeDesc}
            </p>
          </div>
        </div>

        {/* 3 Salary Cards: Mínimo/Inicial, Promedio de Mercado, Mayor Experiencia */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Salario Inicial / Mínimo de Entrada (Junior: 0 - 2 Años) */}
          <div className="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-xs space-y-3 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 uppercase tracking-wider">
                  {t.entryLevelTag}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">0 – 2 {selectedLanguage === 'es' ? 'años' : 'yrs'}</span>
              </div>
              <span className="text-xs font-semibold text-slate-600 dark:text-slate-400 block">
                {t.salaryMinEntryLabel}
              </span>
              <p className="text-2xl sm:text-3xl font-black text-slate-800 dark:text-slate-100 font-display mt-1">
                {career.salary.currencySymbol} {career.salary.entryLevelMonthly.toLocaleString()}
                <span className="text-xs font-normal text-slate-400 ml-1.5">{career.salary.currencyCode} / {selectedLanguage === 'es' ? 'mes' : 'mo'}</span>
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 text-xs text-slate-500 dark:text-slate-400">
              {selectedLanguage === 'es' 
                ? 'Egresados y primeros puestos de asistencia técnica en proyectos u operaciones.'
                : 'Fresh university graduates and junior entry-level operational positions.'}
            </div>
          </div>

          {/* Salario Promedio de Mercado (Mid-Level: 3 - 5 Años) */}
          <div className="p-5 sm:p-6 rounded-2xl border-2 border-blue-500 bg-blue-50/40 dark:bg-blue-950/30 shadow-md space-y-3 relative flex flex-col justify-between">
            <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider shadow-xs">
              {selectedLanguage === 'es' ? 'Media Nacional' : 'National Median'}
            </div>
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 uppercase tracking-wider">
                  {t.midLevelTag}
                </span>
                <span className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">3 – 5 {selectedLanguage === 'es' ? 'años' : 'yrs'}</span>
              </div>
              <span className="text-xs font-bold text-blue-900 dark:text-blue-200 block">
                {t.salaryAvgLabel}
              </span>
              <p className="text-3xl sm:text-4xl font-black text-blue-700 dark:text-blue-300 font-display mt-1">
                {career.salary.currencySymbol} {career.salary.averageMonthly.toLocaleString()}
                <span className="text-xs font-normal text-blue-500 dark:text-blue-400 ml-1.5">{career.salary.currencyCode} / {selectedLanguage === 'es' ? 'mes' : 'mo'}</span>
              </p>
            </div>
            <div className="pt-3 border-t border-blue-200/60 dark:border-blue-900/60 text-xs text-blue-800/80 dark:text-blue-300/80">
              {selectedLanguage === 'es'
                ? 'Ingeniero autónomo con proyectos concluidos y especializaciones técnicas.'
                : 'Autonomous engineer managing full project lifecycles and domain tools.'}
            </div>
          </div>

          {/* Salario con Mayor Experiencia (Senior / Liderazgo: 6 - 10+ Años) */}
          <div className="p-5 sm:p-6 rounded-2xl border border-emerald-300 dark:border-emerald-700/60 bg-emerald-50/30 dark:bg-emerald-950/20 shadow-xs space-y-3 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                  {t.seniorLevelTag}
                </span>
                <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">+6 {selectedLanguage === 'es' ? 'años' : 'yrs'}</span>
              </div>
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 block">
                {t.salaryMaxSeniorLabel}
              </span>
              <p className="text-2xl sm:text-3xl font-black text-emerald-700 dark:text-emerald-400 font-display mt-1">
                {career.salary.currencySymbol} {career.salary.seniorMonthly.toLocaleString()}
                <span className="text-xs font-normal text-emerald-600/70 dark:text-emerald-400/70 ml-1.5">{career.salary.currencyCode} / {selectedLanguage === 'es' ? 'mes' : 'mo'}</span>
              </p>
            </div>
            <div className="pt-3 border-t border-emerald-200/60 dark:border-emerald-800/60 text-xs text-emerald-800/80 dark:text-emerald-300/80">
              {selectedLanguage === 'es'
                ? 'Jefaturas, gerencias, superintendencias, consultoría senior y firmas de proyectos.'
                : 'Engineering managers, lead architects, superintendents, and certified consultants.'}
            </div>
          </div>

        </div>

        {/* 📊 ESCALAFÓN VISUAL DE CRECIMIENTO POR AÑOS DE EXPERIENCIA */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-blue-600" />
              {selectedLanguage === 'es' ? 'Escalafón Salarial por Años de Experiencia Comprobada' : 'Salary Growth Timeline by Experience Level'}
            </h3>
            <span className="text-xs text-emerald-600 dark:text-emerald-400 font-bold">
              +{Math.round(((career.salary.seniorMonthly - career.salary.entryLevelMonthly) / career.salary.entryLevelMonthly) * 100)}% {selectedLanguage === 'es' ? 'crecimiento profesional' : 'career growth'}
            </span>
          </div>

          <div className="space-y-2">
            <div className="grid grid-cols-3 text-center text-xs font-semibold text-slate-600 dark:text-slate-300">
              <div>{selectedLanguage === 'es' ? '0 – 2 Años' : '0 – 2 Years'}</div>
              <div>{selectedLanguage === 'es' ? '3 – 5 Años' : '3 – 5 Years'}</div>
              <div>{selectedLanguage === 'es' ? '+6 Años' : '6+ Years'}</div>
            </div>

            {/* Gradient progress bar */}
            <div className="h-3 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden flex p-0.5">
              <div className="h-full bg-slate-400 dark:bg-slate-500 rounded-l-full" style={{ width: '33.33%' }} />
              <div className="h-full bg-blue-500" style={{ width: '33.33%' }} />
              <div className="h-full bg-emerald-500 rounded-r-full" style={{ width: '33.34%' }} />
            </div>

            <div className="grid grid-cols-3 text-center text-xs font-mono text-slate-500 dark:text-slate-400">
              <div>{career.salary.currencySymbol} {career.salary.entryLevelMonthly.toLocaleString()}</div>
              <div className="font-bold text-blue-600 dark:text-blue-400">{career.salary.currencySymbol} {career.salary.averageMonthly.toLocaleString()}</div>
              <div className="font-bold text-emerald-600 dark:text-emerald-400">{career.salary.currencySymbol} {career.salary.seniorMonthly.toLocaleString()}</div>
            </div>
          </div>
        </div>

        {/* Salary Source & Notes */}
        <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-600 dark:text-slate-300 gap-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
            <span>
              <strong>{t.sourceLabel}:</strong> {career.salary.source} ({career.salary.year})
            </span>
          </div>
          {career.salary.hourlyOrAnnualNote && (
            <span className="text-slate-500 dark:text-slate-400 italic">
              ℹ️ {career.salary.hourlyOrAnnualNote[selectedLanguage]}
            </span>
          )}
        </div>
      </section>

      {/* 💼 CAMPO LABORAL & SECTORES (Section 11) */}
      <section id="work-sectors-section" className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>💼</span> {t.workSectorSectionTitle}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            {t.workSectorSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {career.workSectors.map((sector) => (
            <div
              key={sector.id}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 space-y-3.5 shadow-2xs hover:border-blue-400 transition-all"
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                    {sector.name[selectedLanguage]}
                  </h3>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                  sector.estimatedDemandLevel === 'critical'
                    ? 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                    : 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                }`}>
                  {sector.estimatedDemandLevel === 'critical' ? t.demandLevelCritical : t.demandLevelHigh}
                </span>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {sector.description[selectedLanguage]}
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-700 space-y-1.5">
                <span className="text-[11px] font-semibold text-slate-400 block">
                  {t.commonRolesLabel}:
                </span>
                <div className="flex flex-wrap gap-1">
                  {sector.commonJobRoles[selectedLanguage].map((role, i) => (
                    <span
                      key={i}
                      className="text-[11px] px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-medium"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Otras ingenierías recomendadas en este país */}
      {relatedCareers.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>⚙️</span> {selectedLanguage === 'es' ? 'Otras ingenierías en' : 'Other engineering careers in'} {selectedCountry.name[selectedLanguage]}
            </h3>
            <button
              onClick={() => navigateToCountry(selectedCountry.id)}
              className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
            >
              {selectedLanguage === 'es' ? 'Ver todas' : 'View all'}
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedCareers.map((rc) => (
              <div
                key={rc.id}
                onClick={() => navigateToCareer(rc.id)}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 hover:border-blue-500 cursor-pointer transition-all space-y-1.5 group"
              >
                <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
                  {rc.title[selectedLanguage]}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.avgSalaryLabel}: {rc.salary.currencySymbol} {rc.salary.averageMonthly.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 📚 FUENTES Y ACTUALIZACIÓN (Section 12) */}
      <section id="sources-and-updates-section" className="p-5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>{t.sourcesSectionTitle}</span>
          </h4>
          <span className="text-[11px] text-slate-400">
            {t.lastUpdateLabel}: Febrero 2026
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-1">
          {career.sources.map((src, i) => (
            <div key={i} className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
              <span className="font-bold text-slate-800 dark:text-slate-200 block truncate">
                {src.name}
              </span>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span>{t.yearLabel}: {src.year}</span>
                <span>{src.updatedAt}</span>
              </div>
              {src.url && (
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-blue-400 hover:underline pt-1"
                >
                  <span>{t.officialPortalLink}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

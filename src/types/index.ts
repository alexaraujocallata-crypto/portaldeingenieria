export type Language = 'es' | 'en';
export type ThemeMode = 'light' | 'dark' | 'system';
export type ActiveView = 'home' | 'country' | 'engineering' | 'rankings' | 'compare';

export type RegionKey = 'latam' | 'central_america' | 'north_america' | 'europe';

export interface Country {
  id: string; // e.g. 'pe', 'cl', 'co', 'mx', 'ar', 'cr', 'pa', 'us', 'ca', 'es', 'de'
  code: string;
  name: {
    es: string;
    en: string;
  };
  flag: string;
  region: RegionKey;
  currency: {
    symbol: string;
    code: string;
    name: {
      es: string;
      en: string;
    };
    exchangeRateToUSD: number; // For international normalized comparisons
  };
  primaryLanguage: {
    es: string;
    en: string;
  };
  shortDescription: {
    es: string;
    en: string;
  };
  educationSystemOverview: {
    es: string;
    en: string;
  };
  officialSources: SourceInfo[];
}

export interface SourceInfo {
  name: string;
  year: string;
  updatedAt: string;
  url?: string;
  type: 'government' | 'university' | 'statistical_labor' | 'professional_college';
}

export interface SalaryBreakdown {
  currencyCode: string;
  currencySymbol: string;
  entryLevelMonthly: number; // Salario inicial (junior / egresado)
  averageMonthly: number;    // Salario promedio nacional (mid)
  seniorMonthly: number;     // Salario con experiencia (senior / líder)
  year: number;              // 2026
  source: string;
  sourceUrl?: string;
  hourlyOrAnnualNote?: {
    es: string;
    en: string;
  };
}

export interface AcademicStructure {
  level: {
    es: string;
    en: string;
  };
  durationYears: number;
  totalSemesters: number;
  degreeAwarded: {
    es: string;
    en: string;
  };
  professionalTitle: {
    es: string;
    en: string;
  };
  admissionRequirements: {
    es: string[];
    en: string[];
  };
  graduationRequirements: {
    es: string[];
    en: string[];
  };
}

export interface SubjectArea {
  id: string;
  iconName: string;
  name: {
    es: string;
    en: string;
  };
  subjects: {
    es: string[];
    en: string[];
  };
}

export interface WorkSector {
  id: string;
  iconName: string;
  name: {
    es: string;
    en: string;
  };
  description: {
    es: string;
    en: string;
  };
  commonJobRoles: {
    es: string[];
    en: string[];
  };
  estimatedDemandLevel: 'high' | 'very_high' | 'medium' | 'critical';
}

export interface EngineeringRanking {
  nationalRankSalary: number;
  nationalRankDemand: number;
  employabilityRatePercent: number;
  futureGrowthScorePercent: number;
}

export interface EngineeringCareer {
  id: string; // e.g. 'sistemas', 'software', 'industrial', 'civil', 'mecatronica', 'minas', 'biomedica', 'ambiental', 'quimica', 'telecomunicaciones', 'datos-ia'
  countryId: string;
  slug: string;
  category: 'software_tech' | 'industrial_management' | 'infrastructure_civil' | 'mechanical_electrical' | 'bio_chemical' | 'earth_energy';
  iconName: string;
  title: {
    es: string;
    en: string;
  };
  shortDescription: {
    es: string;
    en: string;
  };
  fullDescription: {
    es: string;
    en: string;
  };
  salary: SalaryBreakdown;
  academic: AcademicStructure;
  curriculumAreas: SubjectArea[];
  workSectors: WorkSector[];
  ranking: EngineeringRanking;
  sources: SourceInfo[];
}

export type RankingSortCriteria = 'salary' | 'demand' | 'employability' | 'growth';

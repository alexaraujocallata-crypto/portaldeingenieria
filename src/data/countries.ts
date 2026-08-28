import { Country, RegionKey } from '../types';

export const REGIONS: { key: RegionKey; name: { es: string; en: string }; emoji: string }[] = [
  {
    key: 'latam',
    name: { es: 'Latinoamérica / Sudamérica', en: 'Latin / South America' },
    emoji: '🌎',
  },
  {
    key: 'central_america',
    name: { es: 'Centroamérica', en: 'Central America' },
    emoji: '🌴',
  },
  {
    key: 'north_america',
    name: { es: 'Norteamérica', en: 'North America' },
    emoji: '🍁',
  },
  {
    key: 'europe',
    name: { es: 'Europa', en: 'Europe' },
    emoji: '🌍',
  },
];

export const COUNTRIES: Country[] = [
  // ==========================================
  // LATINOAMÉRICA / SUDAMÉRICA
  // ==========================================
  {
    id: 'pe',
    code: 'PER',
    name: { es: 'Perú', en: 'Peru' },
    flag: '🇵🇪',
    region: 'latam',
    currency: {
      symbol: 'S/',
      code: 'PEN',
      name: { es: 'Sol peruano', en: 'Peruvian Sol' },
      exchangeRateToUSD: 0.27,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Mercado con alta demanda en minería polimetálica, software y TI, gestión industrial e infraestructura con acreditaciones Sunedu y CIP.',
      en: 'High-demand market in polymetallic mining, software & IT, industrial management, and civil infrastructure accredited by Sunedu and CIP.',
    },
    educationSystemOverview: {
      es: 'Duración regular de 5 años universitarios (10 semestres). Otorga Grado de Bachiller y Título Profesional con tesis o trabajo de suficiencia ante el CIP.',
      en: 'Standard 5-year university duration (10 semesters). Awards Bachelor Degree and Professional Title via thesis or proficiency project.',
    },
    officialSources: [
      {
        name: 'Ministerio de Trabajo y Promoción del Empleo (MTPE) / Ponte en Carrera',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.gob.pe/mtpe',
        type: 'government',
      },
      {
        name: 'Colegio de Ingenieros del Perú (CIP)',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.cip.org.pe',
        type: 'professional_college',
      },
      {
        name: 'Superintendencia Nacional de Educación Superior Universitaria (SUNEDU)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.sunedu.gob.pe',
        type: 'government',
      },
    ],
  },
  {
    id: 'cl',
    code: 'CHL',
    name: { es: 'Chile', en: 'Chile' },
    flag: '🇨🇱',
    region: 'latam',
    currency: {
      symbol: '$',
      code: 'CLP',
      name: { es: 'Peso chileno', en: 'Chilean Peso' },
      exchangeRateToUSD: 0.00105,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Ecosistema líder en minería del cobre y litio, energías renovables, automatización e ingeniería civil industrial.',
      en: 'Leading ecosystem in copper and lithium mining, renewable energies, automation, and industrial civil engineering.',
    },
    educationSystemOverview: {
      es: 'Doble titulación típica: Licenciatura en Ciencias de la Ingeniería (4 años) y Título de Ingeniero Civil/Especialista (5.5 a 6 años).',
      en: 'Typical dual path: Bachelor of Science in Engineering (4 years) and Professional Civil Engineer title (5.5 to 6 years).',
    },
    officialSources: [
      {
        name: 'Mifuturo.cl — Ministerio de Educación de Chile (Mineduc)',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.mifuturo.cl',
        type: 'government',
      },
      {
        name: 'Colegio de Ingenieros de Chile A.G.',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.ingenieros.cl',
        type: 'professional_college',
      },
    ],
  },
  {
    id: 'co',
    code: 'COL',
    name: { es: 'Colombia', en: 'Colombia' },
    flag: '🇨🇴',
    region: 'latam',
    currency: {
      symbol: '$',
      code: 'COP',
      name: { es: 'Peso colombiano', en: 'Colombian Peso' },
      exchangeRateToUSD: 0.00024,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Hub regional de desarrollo de software, fintech, agroindustria y logística con alta presencia de centros de ingeniería aplicada.',
      en: 'Regional hub for software development, fintech, agro-industry, and logistics with applied engineering hubs.',
    },
    educationSystemOverview: {
      es: 'Programas de pregrado de 4.5 a 5 años (9 a 10 semestres), regulados por el Ministerio de Educación Nacional y el Consejo Profesional COPNIA.',
      en: 'Undergraduate programs spanning 4.5 to 5 years (9 to 10 semesters), regulated by the Ministry of Education and COPNIA.',
    },
    officialSources: [
      {
        name: 'Observatorio Laboral para la Educación (OLE) — Mineducación',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.mineducacion.gov.co',
        type: 'government',
      },
      {
        name: 'Consejo Profesional Nacional de Ingeniería (COPNIA)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.copnia.gov.co',
        type: 'professional_college',
      },
    ],
  },
  {
    id: 'ar',
    code: 'ARG',
    name: { es: 'Argentina', en: 'Argentina' },
    flag: '🇦🇷',
    region: 'latam',
    currency: {
      symbol: '$',
      code: 'ARS',
      name: { es: 'Peso argentino', en: 'Argentine Peso' },
      exchangeRateToUSD: 0.00095,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Prestigio académico internacional en biotecnología, energía nuclear, satelital, petróleo no convencional (Vaca Muerta) y unicornios tech.',
      en: 'International prestige in biotechnology, nuclear and satellite tech, oil & gas (Vaca Muerta), and software unicorns.',
    },
    educationSystemOverview: {
      es: 'Planes de 5 a 6 años con fuerte carga en ciencias exactas y proyectos integradores finales acreditados por CONEAU.',
      en: '5 to 6-year engineering programs with solid fundamental math/physics and final capstone projects accredited by CONEAU.',
    },
    officialSources: [
      {
        name: 'Ministerio de Capital Humano / Secretaría de Educación de la Nación',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.argentina.gob.ar/educacion',
        type: 'government',
      },
      {
        name: 'Consejo Federal de Decanos de Ingeniería (CONFEDI)',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://confedi.org.ar',
        type: 'university',
      },
    ],
  },
  {
    id: 'ec',
    code: 'ECU',
    name: { es: 'Ecuador', en: 'Ecuador' },
    flag: '🇪🇨',
    region: 'latam',
    currency: {
      symbol: '$',
      code: 'USD',
      name: { es: 'Dólar estadounidense', en: 'US Dollar' },
      exchangeRateToUSD: 1.0,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Mercado dinámico en hidrocarburos, ingeniería civil hidrotérmica, agroindustria bananera y camaronera, y creciente sector TI.',
      en: 'Dynamic market in petroleum, hydrothermal civil engineering, agroindustrial exports, and emerging IT tech sector.',
    },
    educationSystemOverview: {
      es: 'Carreras universitarias de 4.5 a 5 años (9 a 10 semestres) acreditadas por CACES y registradas ante la Senescyt.',
      en: '4.5 to 5-year university engineering degrees (9 to 10 semesters) accredited by CACES and registered with Senescyt.',
    },
    officialSources: [
      {
        name: 'Secretaría de Educación Superior, Ciencia y Tecnología (SENESCYT)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.educacionsuperior.gob.ec',
        type: 'government',
      },
      {
        name: 'Instituto Nacional de Estadística y Censos (INEC Ecuador)',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.ecuadorencifras.gob.ec',
        type: 'statistical_labor',
      },
      {
        name: 'Colegio de Ingenieros del Ecuador',
        year: '2026',
        updatedAt: 'Febrero 2026',
        type: 'professional_college',
      },
    ],
  },
  {
    id: 'bo',
    code: 'BOL',
    name: { es: 'Bolivia', en: 'Bolivia' },
    flag: '🇧🇴',
    region: 'latam',
    currency: {
      symbol: 'Bs.',
      code: 'BOB',
      name: { es: 'Boliviano', en: 'Bolivian Boliviano' },
      exchangeRateToUSD: 0.145,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Enorme potencial en recursos evaporíticos y litio, minería tradicional, gas natural, infraestructura vial y agroindustria del oriente.',
      en: 'Enormous potential in lithium evaporitic reserves, mining, natural gas pipelines, transportation infrastructure, and agribusiness.',
    },
    educationSystemOverview: {
      es: 'Planes universitarios de 5 años (10 semestres) que otorgan Grado de Licenciatura en Ingeniería y matriculación ante la Sociedad de Ingenieros de Bolivia (SIB).',
      en: '5-year university curriculum (10 semesters) leading to Licentiate in Engineering and chartering with the SIB.',
    },
    officialSources: [
      {
        name: 'Sociedad de Ingenieros de Bolivia (SIB)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://sib.org.bo',
        type: 'professional_college',
      },
      {
        name: 'Instituto Nacional de Estadística (INE Bolivia)',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.ine.gob.bo',
        type: 'government',
      },
    ],
  },
  {
    id: 'uy',
    code: 'URY',
    name: { es: 'Uruguay', en: 'Uruguay' },
    flag: '🇺🇾',
    region: 'latam',
    currency: {
      symbol: '$',
      code: 'UYU',
      name: { es: 'Peso uruguayo', en: 'Uruguayan Peso' },
      exchangeRateToUSD: 0.025,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Líder sudamericano en exportación de software per cápita, matriz eléctrica 98% renovable, agrotecnología de punta y seguridad jurídica.',
      en: 'South American leader in per-capita software exports, 98% renewable energy grid, advanced agritech, and strong legal framework.',
    },
    educationSystemOverview: {
      es: 'Planes de 5 años universitarios (Fing Udelar / UCU / ORT) con créditos ajustados al Mercosur y titulación avalada por el MEC.',
      en: '5-year engineering programs (Fing Udelar / UCU / ORT) aligned with Mercosur standards and MEC licensure.',
    },
    officialSources: [
      {
        name: 'Asociación de Ingenieros del Uruguay (AIU) & CUTI',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.aiu.org.uy',
        type: 'professional_college',
      },
      {
        name: 'Instituto Nacional de Estadística (INE Uruguay) / Uruguay XXI',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.ine.gub.uy',
        type: 'government',
      },
    ],
  },
  {
    id: 'br',
    code: 'BRA',
    name: { es: 'Brasil', en: 'Brazil' },
    flag: '🇧🇷',
    region: 'latam',
    currency: {
      symbol: 'R$',
      code: 'BRL',
      name: { es: 'Real brasileño', en: 'Brazilian Real' },
      exchangeRateToUSD: 0.18,
    },
    primaryLanguage: { es: 'Portugués', en: 'Portuguese' },
    shortDescription: {
      es: 'Mayor economía regional: referente global en aeronáutica (Embraer), extracción petrolera offshore (Pre-sal), agronegocios e ingeniería civil pesada.',
      en: 'Largest regional economy: global benchmark in aerospace (Embraer), offshore deepwater oil (Pre-salt), agribusiness, and heavy civil works.',
    },
    educationSystemOverview: {
      es: 'Bacharelado em Engenharia de 5 anos (10 períodos / 3.600+ horas) regulado por el MEC y registro obligatorio en CREA/CONFEA.',
      en: '5-year Bachelor in Engineering (10 terms / 3,600+ hours) regulated by MEC with mandatory CREA/CONFEA licensure.',
    },
    officialSources: [
      {
        name: 'Conselho Federal de Engenharia e Agronomia (CONFEA / CREA)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.confea.org.br',
        type: 'professional_college',
      },
      {
        name: 'Instituto Brasileiro de Geografia e Estatística (IBGE / CAGED)',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.ibge.gov.br',
        type: 'government',
      },
    ],
  },

  // ==========================================
  // CENTROAMÉRICA
  // ==========================================
  {
    id: 'cr',
    code: 'CRI',
    name: { es: 'Costa Rica', en: 'Costa Rica' },
    flag: '🇨🇷',
    region: 'central_america',
    currency: {
      symbol: '₡',
      code: 'CRC',
      name: { es: 'Colón costarricense', en: 'Costa Rican Colón' },
      exchangeRateToUSD: 0.0019,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Clúster tecnológico líder en dispositivos médicos, semiconductores, microelectrónica y sostenibilidad ecológica.',
      en: 'Leading tech cluster in medical devices, semiconductor assembly, microelectronics, and clean energy sustainability.',
    },
    educationSystemOverview: {
      es: 'Programas de Bachillerato Universitario (4 años) y Licenciatura en Ingeniería (5 años) reconocidos por el CFIA.',
      en: 'University Bachelor degrees (4 years) and Engineering Licentiate (5 years) certified by the CFIA engineering board.',
    },
    officialSources: [
      {
        name: 'Consejo Nacional de Rectores (CONARE) — Observatorio Laboral',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://olap.conare.ac.cr',
        type: 'statistical_labor',
      },
      {
        name: 'Colegio Federado de Ingenieros y de Arquitectos (CFIA)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.cfia.or.cr',
        type: 'professional_college',
      },
    ],
  },
  {
    id: 'pa',
    code: 'PAN',
    name: { es: 'Panamá', en: 'Panama' },
    flag: '🇵🇦',
    region: 'central_america',
    currency: {
      symbol: 'B/.',
      code: 'PAB',
      name: { es: 'Balboa / Dólar USD', en: 'Panamanian Balboa / USD' },
      exchangeRateToUSD: 1.0,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Eje logístico e interoceánico del Canal de Panamá, infraestructura portuaria, transporte marítimo, finanzas y telecomunicaciones.',
      en: 'Global maritime and logistics hub of the Panama Canal, port infrastructure, shipping, finance, and telecom.',
    },
    educationSystemOverview: {
      es: 'Licenciaturas en Ingeniería de 5 años con énfasis práctico e internacionalización avaladas por la Junta Técnica de Ingeniería y Arquitectura.',
      en: '5-year Bachelor in Engineering degrees with practical emphasis recognized by the Panamanian Technical Board of Engineering.',
    },
    officialSources: [
      {
        name: 'Universidad Tecnológica de Panamá (UTP) & Junta Técnica JTIA',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://utp.ac.pa',
        type: 'university',
      },
      {
        name: 'Instituto Nacional de Estadística y Censo (INEC Panamá)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.inec.gob.pa',
        type: 'government',
      },
    ],
  },
  {
    id: 'gt',
    code: 'GTM',
    name: { es: 'Guatemala', en: 'Guatemala' },
    flag: '🇬🇹',
    region: 'central_america',
    currency: {
      symbol: 'Q',
      code: 'GTQ',
      name: { es: 'Quetzal guatemalteco', en: 'Guatemalan Quetzal' },
      exchangeRateToUSD: 0.13,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Mayor economía centroamericana con alta actividad en ingeniería industrial, generación hidroeléctrica, construcción civil y agroexportación.',
      en: 'Largest Central American economy with strong activity in industrial manufacturing, hydroelectric power, civil construction, and agribusiness.',
    },
    educationSystemOverview: {
      es: 'Planes universitarios de 5 años (10 semestres) que confieren el grado de Licenciatura e incorporación obligatoria al Colegio de Ingenieros de Guatemala (CIG).',
      en: '5-year university curriculum (10 semesters) leading to Licentiate degree and mandatory registration with CIG.',
    },
    officialSources: [
      {
        name: 'Colegio de Ingenieros de Guatemala (CIG)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://cig.org.gt',
        type: 'professional_college',
      },
      {
        name: 'Instituto Nacional de Estadística (INE Guatemala)',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.ine.gob.gt',
        type: 'government',
      },
    ],
  },
  {
    id: 'sv',
    code: 'SLV',
    name: { es: 'El Salvador', en: 'El Salvador' },
    flag: '🇸🇻',
    region: 'central_america',
    currency: {
      symbol: '$',
      code: 'USD',
      name: { es: 'Dólar estadounidense', en: 'US Dollar' },
      exchangeRateToUSD: 1.0,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Emergente hub tecnológico en nearshoring de software, energías geotérmicas y renovables, logística aduanera e infraestructura urbana.',
      en: 'Emerging tech hub in software nearshoring, geothermal and renewable power, trade logistics, and urban infrastructure.',
    },
    educationSystemOverview: {
      es: 'Ingenierías universitarias de 5 años (10 ciclos) reguladas por el Ministerio de Educación y certificadas por ASIA.',
      en: '5-year engineering degree programs (10 cycles) regulated by the Ministry of Education and certified by ASIA.',
    },
    officialSources: [
      {
        name: 'Asociación Salvadoreña de Ingenieros y Arquitectos (ASIA)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://asia.org.sv',
        type: 'professional_college',
      },
      {
        name: 'Banco Central de Reserva / Observatorio Laboral El Salvador',
        year: '2026',
        updatedAt: 'Enero 2026',
        type: 'government',
      },
    ],
  },
  {
    id: 'hn',
    code: 'HND',
    name: { es: 'Honduras', en: 'Honduras' },
    flag: '🇭🇳',
    region: 'central_america',
    currency: {
      symbol: 'L',
      code: 'HNL',
      name: { es: 'Lempira hondureño', en: 'Honduran Lempira' },
      exchangeRateToUSD: 0.04,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Fuerte desarrollo en ingeniería de manufactura textil y maquila, generación fotovoltaica e hidroeléctrica, obras viales y agronomía.',
      en: 'Strong development in industrial manufacturing, photovoltaic & hydro power generation, highway works, and agronomy.',
    },
    educationSystemOverview: {
      es: 'Programas de ingeniería de 5 años universitarios avalados por el Consejo de Educación Superior y colegiación en CICH / CIMEQH.',
      en: '5-year university engineering curricula approved by Higher Education Council and chartered with CICH / CIMEQH.',
    },
    officialSources: [
      {
        name: 'Colegio de Ingenieros Civiles de Honduras (CICH) & CIMEQH',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://cichorg.org',
        type: 'professional_college',
      },
      {
        name: 'Instituto Nacional de Estadística (INE Honduras)',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.ine.gob.hn',
        type: 'government',
      },
    ],
  },

  // ==========================================
  // NORTEAMÉRICA (México, Estados Unidos, Canadá)
  // ==========================================
  {
    id: 'mx',
    code: 'MEX',
    name: { es: 'México', en: 'Mexico' },
    flag: '🇲🇽',
    region: 'north_america',
    currency: {
      symbol: '$',
      code: 'MXN',
      name: { es: 'Peso mexicano', en: 'Mexican Peso' },
      exchangeRateToUSD: 0.052,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Potencia manufacturera norteamericana: clúster automotriz, aeroespacial, mecatrónica, semiconductores y desarrollo tecnológico nearshoring.',
      en: 'North American manufacturing powerhouse: automotive cluster, aerospace, mechatronics, semiconductors, and nearshoring tech.',
    },
    educationSystemOverview: {
      es: 'Planes universitarios de 4.5 a 5 años (9 a 10 semestres) acreditados por CACEI con obtención de Cédula Profesional SEP.',
      en: 'University curriculum spanning 4.5 to 5 years (9 to 10 semesters) accredited by CACEI with SEP Federal Professional License.',
    },
    officialSources: [
      {
        name: 'Instituto Mexicano para la Competitividad (IMCO) — ComparaCarreras',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://imco.org.mx/comparacarreras',
        type: 'statistical_labor',
      },
      {
        name: 'Secretaría de Educación Pública (SEP) — Cédulas Profesionales & CACEI',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.gob.mx/sep',
        type: 'government',
      },
    ],
  },
  {
    id: 'us',
    code: 'USA',
    name: { es: 'Estados Unidos', en: 'United States' },
    flag: '🇺🇸',
    region: 'north_america',
    currency: {
      symbol: '$',
      code: 'USD',
      name: { es: 'Dólar estadounidense', en: 'US Dollar' },
      exchangeRateToUSD: 1.0,
    },
    primaryLanguage: { es: 'Inglés', en: 'English' },
    shortDescription: {
      es: 'Epicentro mundial de innovación tecnológica, Silicon Valley, IA generativa, exploración aeroespacial y biotecnología.',
      en: 'Global epicenter of tech innovation, Silicon Valley, artificial intelligence, aerospace exploration, and biotech.',
    },
    educationSystemOverview: {
      es: 'Bachelor of Science in Engineering (B.S. Eng) de 4 años acreditado por ABET, seguido de certificación FE/PE (Professional Engineer).',
      en: '4-year ABET-accredited Bachelor of Science in Engineering (B.S. Eng), followed by FE and PE (Professional Engineer) licensing.',
    },
    officialSources: [
      {
        name: 'U.S. Bureau of Labor Statistics (BLS) — Occupational Outlook Handbook',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.bls.gov/ooh/architecture-and-engineering/home.htm',
        type: 'government',
      },
      {
        name: 'National Society of Professional Engineers (NSPE)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.nspe.org',
        type: 'professional_college',
      },
    ],
  },
  {
    id: 'ca',
    code: 'CAN',
    name: { es: 'Canadá', en: 'Canada' },
    flag: '🇨🇦',
    region: 'north_america',
    currency: {
      symbol: 'CA$',
      code: 'CAD',
      name: { es: 'Dólar canadiense', en: 'Canadian Dollar' },
      exchangeRateToUSD: 0.73,
    },
    primaryLanguage: { es: 'Inglés / Francés', en: 'English / French' },
    shortDescription: {
      es: 'Alta inversión en inteligencia artificial, energías limpias, minería sostenible e ingeniería aeroespacial con programas P.Eng.',
      en: 'High investment in AI, clean tech energy, sustainable mining, and aerospace engineering governed by P.Eng licensing.',
    },
    educationSystemOverview: {
      es: 'Bachelor of Applied Science (B.A.Sc) o B.Eng de 4 años con programas cooperativos (Co-op) acreditados por CEAB / Engineers Canada.',
      en: '4-year B.A.Sc / B.Eng with integrated paid co-op internships accredited by the Canadian Engineering Accreditation Board (CEAB).',
    },
    officialSources: [
      {
        name: 'Job Bank Canada — Government of Canada Labour Market Insights',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.jobbank.gc.ca',
        type: 'government',
      },
      {
        name: 'Engineers Canada / Ingénieurs Canada',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://engineerscanada.ca',
        type: 'professional_college',
      },
    ],
  },

  // ==========================================
  // EUROPA
  // ==========================================
  {
    id: 'es',
    code: 'ESP',
    name: { es: 'España', en: 'Spain' },
    flag: '🇪🇸',
    region: 'europe',
    currency: {
      symbol: '€',
      code: 'EUR',
      name: { es: 'Euro', en: 'Euro' },
      exchangeRateToUSD: 1.08,
    },
    primaryLanguage: { es: 'Español', en: 'Spanish' },
    shortDescription: {
      es: 'Punto neurálgico europeo en energías renovables, trenes de alta velocidad, ciberseguridad, aeroespacial y telecomunicaciones.',
      en: 'European hub for renewable power, high-speed rail civil engineering, cybersecurity, aerospace, and telecoms.',
    },
    educationSystemOverview: {
      es: 'Espacio Europeo de Educación Superior (Plan Bolonia): Grado en Ingeniería (4 años / 240 ECTS) + Máster Habilitante (1-2 años) para firma oficial.',
      en: 'European Higher Education Area (Bologna Process): 4-year Bachelor Degree (240 ECTS) + 1-2 year Qualifying Master for full charter.',
    },
    officialSources: [
      {
        name: 'Servicio Público de Empleo Estatal (SEPE) & Ministerio de Universidades',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.sepe.es',
        type: 'government',
      },
      {
        name: 'Instituto Nacional de Estadística (INE España)',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.ine.es',
        type: 'statistical_labor',
      },
      {
        name: 'Instituto de la Ingeniería de España (IIE)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.iie.es',
        type: 'professional_college',
      },
    ],
  },
  {
    id: 'de',
    code: 'DEU',
    name: { es: 'Alemania', en: 'Germany' },
    flag: '🇩🇪',
    region: 'europe',
    currency: {
      symbol: '€',
      code: 'EUR',
      name: { es: 'Euro', en: 'Euro' },
      exchangeRateToUSD: 1.08,
    },
    primaryLanguage: { es: 'Alemán', en: 'German' },
    shortDescription: {
      es: 'Referente mundial en Industria 4.0, automoción de vanguardia, robótica de precisión, química industrial e ingeniería mecánica.',
      en: 'World benchmark for Industry 4.0, automotive engineering, precision robotics, chemical processing, and mechanical design.',
    },
    educationSystemOverview: {
      es: 'Bachelor of Engineering / Science (3 a 3.5 años) + Master of Science (1.5 a 2 años) en Universidades TU9 o Universidades de Ciencias Aplicadas (FH).',
      en: 'Bachelor of Engineering/Science (3-3.5 years) + Master of Science (1.5-2 years) at TU9 Universities or Applied Sciences (Fachhochschulen).',
    },
    officialSources: [
      {
        name: 'Bundesagentur für Arbeit (Federal Employment Agency Germany)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.arbeitsagentur.de',
        type: 'government',
      },
      {
        name: 'VDI — Association of German Engineers (Verein Deutscher Ingenieure)',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.vdi.de',
        type: 'professional_college',
      },
    ],
  },
  {
    id: 'gb',
    code: 'GBR',
    name: { es: 'Reino Unido', en: 'United Kingdom' },
    flag: '🇬🇧',
    region: 'europe',
    currency: {
      symbol: '£',
      code: 'GBP',
      name: { es: 'Libra esterlina', en: 'British Pound' },
      exchangeRateToUSD: 1.28,
    },
    primaryLanguage: { es: 'Inglés', en: 'English' },
    shortDescription: {
      es: 'Potencia en software financiero, ingeniería aeroespacial (Rolls-Royce, BAE), automovilismo de competición F1 y energías eólicas marinas.',
      en: 'Global power in fintech software, aerospace (Rolls-Royce, BAE), Formula 1 motorsport engineering, and offshore wind energy.',
    },
    educationSystemOverview: {
      es: 'BEng (3 años) o MEng integrado (4 años) acreditado por la Royal Academy of Engineering y el Engineering Council para Chartered Engineer (CEng).',
      en: '3-year BEng or 4-year integrated MEng accredited by the Engineering Council leading to Chartered Engineer (CEng) status.',
    },
    officialSources: [
      {
        name: 'Engineering Council UK & Royal Academy of Engineering',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.engc.org.uk',
        type: 'professional_college',
      },
      {
        name: 'Office for National Statistics (ONS UK) — Labour Market',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.ons.gov.uk',
        type: 'statistical_labor',
      },
    ],
  },
  {
    id: 'fr',
    code: 'FRA',
    name: { es: 'Francia', en: 'France' },
    flag: '🇫🇷',
    region: 'europe',
    currency: {
      symbol: '€',
      code: 'EUR',
      name: { es: 'Euro', en: 'Euro' },
      exchangeRateToUSD: 1.08,
    },
    primaryLanguage: { es: 'Francés', en: 'French' },
    shortDescription: {
      es: 'Excelencia en ingeniería aeroespacial (Airbus, CNES), energía nuclear civil (70% de la matriz), transporte ferroviario de alta velocidad (TGV) e IA.',
      en: 'Excellence in aerospace engineering (Airbus, CNES), civil nuclear power (70% of grid), high-speed rail (TGV), and AI research.',
    },
    educationSystemOverview: {
      es: 'Sistema de Grandes Écoles d’Ingénieurs (Diplôme d’Ingénieur Bac+5 habilitado por la CTI) y universidades públicas en marco ECTS.',
      en: 'Grandes Écoles d’Ingénieurs system (5-year Diplôme d’Ingénieur certified by CTI) and university master programs.',
    },
    officialSources: [
      {
        name: 'Ingénieurs et Scientifiques de France (IESF) & CTI',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.iesf.fr',
        type: 'professional_college',
      },
      {
        name: 'France Travail & Ministère de l’Enseignement Supérieur',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.francetravail.fr',
        type: 'government',
      },
    ],
  },
  {
    id: 'it',
    code: 'ITA',
    name: { es: 'Italia', en: 'Italy' },
    flag: '🇮🇹',
    region: 'europe',
    currency: {
      symbol: '€',
      code: 'EUR',
      name: { es: 'Euro', en: 'Euro' },
      exchangeRateToUSD: 1.08,
    },
    primaryLanguage: { es: 'Italiano', en: 'Italian' },
    shortDescription: {
      es: 'Líder en diseño industrial, automatización robótica, automoción de alto rendimiento (Ferrari, Lamborghini), obras civiles y naval.',
      en: 'Leader in industrial design, precision robotics, high-performance automotive (Ferrari, Lamborghini), naval, and civil works.',
    },
    educationSystemOverview: {
      es: 'Laurea Triennale (3 años / 180 ECTS) + Laurea Magistrale (2 años / 120 ECTS) con examen de Estado y colegiación en CNI.',
      en: '3-year Laurea (180 ECTS) + 2-year Laurea Magistrale (120 ECTS) followed by State Examination and registration in CNI.',
    },
    officialSources: [
      {
        name: 'Consiglio Nazionale degli Ingegneri (CNI Italia)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.tuttoingegnere.it',
        type: 'professional_college',
      },
      {
        name: 'Istituto Nazionale di Statistica (ISTAT) & AlmaLaurea',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.istat.it',
        type: 'statistical_labor',
      },
    ],
  },
  {
    id: 'ch',
    code: 'CHE',
    name: { es: 'Suiza', en: 'Switzerland' },
    flag: '🇨🇭',
    region: 'europe',
    currency: {
      symbol: 'CHF',
      code: 'CHF',
      name: { es: 'Franco suizo', en: 'Swiss Franc' },
      exchangeRateToUSD: 1.12,
    },
    primaryLanguage: { es: 'Alemán / Francés / Italiano', en: 'German / French / Italian' },
    shortDescription: {
      es: 'Máximo nivel salarial mundial: investigación de vanguardia en ETH Zurich / EPFL, microtecnología, farmaindustria, robótica y fintech.',
      en: 'World-leading compensation: cutting-edge research at ETH Zurich / EPFL, microtechnology, pharmaceuticals, robotics, and fintech.',
    },
    educationSystemOverview: {
      es: 'Bachelor (3 años / 180 ECTS) + Master (1.5 - 2 años / 90-120 ECTS) en Escuelas Politécnicas Federales (ETH / EPFL) y Fachhochschulen (HES).',
      en: 'Bachelor (3 yrs / 180 ECTS) + Master (1.5-2 yrs / 90-120 ECTS) at Federal Institutes of Technology (ETH/EPFL) and Applied Sciences (HES).',
    },
    officialSources: [
      {
        name: 'Swiss Engineering STV / UTS / ATS',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.swissengineering.ch',
        type: 'professional_college',
      },
      {
        name: 'Federal Statistical Office (FSO Switzerland) — Salarium',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.bfs.admin.ch',
        type: 'government',
      },
    ],
  },
];

import { EngineeringCareer } from '../types';

export const ENGINEERING_CATEGORIES = [
  {
    key: 'all',
    name: { es: 'Todas las ingenierías', en: 'All engineering fields' },
    icon: 'Layers',
  },
  {
    key: 'software_tech',
    name: { es: 'Software, TI & Datos', en: 'Software, IT & Data' },
    icon: 'Code2',
  },
  {
    key: 'industrial_management',
    name: { es: 'Industrial & Gestión', en: 'Industrial & Management' },
    icon: 'Factory',
  },
  {
    key: 'infrastructure_civil',
    name: { es: 'Civil & Infraestructura', en: 'Civil & Infrastructure' },
    icon: 'Building2',
  },
  {
    key: 'mechanical_electrical',
    name: { es: 'Mecatrónica, Mecánica & Eléctrica', en: 'Mechatronics, Mech & Elec' },
    icon: 'Cpu',
  },
  {
    key: 'earth_energy',
    name: { es: 'Minas, Petróleo & Energía', en: 'Mining, Energy & Earth' },
    icon: 'Flame',
  },
  {
    key: 'bio_chemical',
    name: { es: 'Biomédica, Química & Ambiental', en: 'Biomedical, Chemical & Enviro' },
    icon: 'Dna',
  },
] as const;

// Base templates that will be localized and adjusted per country with real local salary statistics
export const ENGINEERING_CAREERS: EngineeringCareer[] = [
  // ================= PERÚ (pe) =================
  {
    id: 'pe-sistemas',
    countryId: 'pe',
    slug: 'ingenieria-de-sistemas',
    category: 'software_tech',
    iconName: 'Code2',
    title: {
      es: 'Ingeniería de Sistemas y Computación',
      en: 'Systems & Computer Engineering',
    },
    shortDescription: {
      es: 'Diseño de arquitecturas de software empresarial, infraestructura cloud, ciberseguridad y transformación digital.',
      en: 'Design of enterprise software architectures, cloud infrastructure, cybersecurity, and digital transformation.',
    },
    fullDescription: {
      es: 'La Ingeniería de Sistemas en Perú forma profesionales capacitados para modelar, diseñar e implementar soluciones tecnológicas integrales que optimizan procesos de negocio, sistemas distribuidos, plataformas en la nube y ciberseguridad en el sector corporativo y público.',
      en: 'Systems Engineering prepares professionals to model, design, and deploy holistic technological systems optimizing corporate business processes, cloud distributed architectures, and cybersecurity across private and public sectors.',
    },
    salary: {
      currencyCode: 'PEN',
      currencySymbol: 'S/',
      entryLevelMonthly: 2600,
      averageMonthly: 5800,
      seniorMonthly: 13500,
      year: 2026,
      source: 'MTPE / Portal Ponte en Carrera & Encuesta CIP',
      sourceUrl: 'https://www.gob.pe/mtpe',
      hourlyOrAnnualNote: {
        es: 'La remuneración depende directamente de la experiencia: inicial (S/ 2.600), promedio (S/ 5.800) y senior/liderazgo (S/ 13.500+). 14 sueldos anuales.',
        en: 'Compensation strictly depends on experience: junior (S/ 2,600), mid-level (S/ 5,800), and senior/lead (S/ 13,500+). 14 payrolls per year.',
      },
    },
    academic: {
      level: { es: 'Pregrado Universitario', en: 'University Undergraduate' },
      durationYears: 5,
      totalSemesters: 10,
      degreeAwarded: {
        es: 'Bachiller en Ciencias de la Ingeniería de Sistemas',
        en: 'Bachelor of Science in Systems Engineering',
      },
      professionalTitle: {
        es: 'Ingeniero de Sistemas (Colegiado en CIP)',
        en: 'Chartered Systems Engineer (CIP Licensed)',
      },
      admissionRequirements: {
        es: [
          'Examen de admisión universitario o tercio superior escolar.',
          'Sólidas bases en matemáticas, razonamiento lógico y física básica.',
          'Aptitud para el pensamiento algorítmico y resolución analítica de problemas.',
        ],
        en: [
          'University entrance examination or top academic third standing.',
          'Solid fundamentals in mathematics, logical reasoning, and physics.',
          'Aptitude for algorithmic thinking and analytical problem solving.',
        ],
      },
      graduationRequirements: {
        es: [
          'Aprobación de 200 a 220 créditos académicos reglamentarios.',
          'Sustentación de tesis o trabajo de investigación de suficiencia profesional.',
          'Acreditación de idioma extranjero (Inglés B2 mínimo) y prácticas preprofesionales.',
        ],
        en: [
          'Completion of 200 to 220 statutory academic credits.',
          'Defense of undergraduate research thesis or professional sufficiency project.',
          'Foreign language proficiency (English B2 min) and internship validation.',
        ],
      },
    },
    curriculumAreas: [
      {
        id: 'math-core',
        iconName: 'Sigma',
        name: { es: 'Ciencias Básicas & Matemáticas', en: 'Basic Sciences & Math' },
        subjects: {
          es: ['Cálculo Multivariable', 'Álgebra Lineal', 'Matemática Discreta', 'Física para Computación', 'Probabilidad y Estadística'],
          en: ['Multivariable Calculus', 'Linear Algebra', 'Discrete Math', 'Physics for Computing', 'Probability & Statistics'],
        },
      },
      {
        id: 'software-eng',
        iconName: 'Terminal',
        name: { es: 'Desarrollo de Software & Arquitectura', en: 'Software Development & Architecture' },
        subjects: {
          es: ['Algoritmos y Estructuras de Datos', 'Programación Orientada a Objetos', 'Arquitectura de Software', 'Bases de Datos Relacionales y NoSQL', 'Patrones de Diseño'],
          en: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Software Architecture', 'SQL & NoSQL Databases', 'Design Patterns'],
        },
      },
      {
        id: 'infra-cloud',
        iconName: 'Cloud',
        name: { es: 'Infraestructura, Redes & Cloud', en: 'Infrastructure, Networks & Cloud' },
        subjects: {
          es: ['Sistemas Operativos', 'Redes de Comunicación', 'Cloud Computing & DevOps', 'Ciberseguridad y Criptografía', 'Arquitectura de Servidores'],
          en: ['Operating Systems', 'Computer Networks', 'Cloud Computing & DevOps', 'Cybersecurity & Cryptography', 'Server Architecture'],
        },
      },
      {
        id: 'management-ai',
        iconName: 'Cpu',
        name: { es: 'Inteligencia de Datos & Gestión TI', en: 'Data Intelligence & IT Management' },
        subjects: {
          es: ['Inteligencia Artificial y Machine Learning', 'Gestión de Proyectos TI (Scrum/Agile)', 'Gobierno de TI (ITIL/COBIT)', 'Inteligencia de Negocios (BI)', 'Auditoría de Sistemas'],
          en: ['Artificial Intelligence & ML', 'Agile/Scrum IT Project Mgmt', 'IT Governance (ITIL/COBIT)', 'Business Intelligence (BI)', 'Systems Auditing'],
        },
      },
    ],
    workSectors: [
      {
        id: 'tech-fintech',
        iconName: 'Building2',
        name: { es: 'Banca, Finanzas & FinTech', en: 'Banking, Finance & FinTech' },
        description: {
          es: 'Diseño de pasarelas de pago, banca móvil de alta disponibilidad y sistemas antifraude.',
          en: 'Design of payment gateways, high-availability mobile banking, and anti-fraud systems.',
        },
        commonJobRoles: {
          es: ['Arquitecto de Soluciones Cloud', 'Líder Técnico de Software', 'Ingeniero DevOps / SRE', 'Especialista en Ciberseguridad'],
          en: ['Cloud Solutions Architect', 'Tech Lead', 'DevOps / SRE Engineer', 'Cybersecurity Specialist'],
        },
        estimatedDemandLevel: 'critical',
      },
      {
        id: 'consulting',
        iconName: 'Briefcase',
        name: { es: 'Consultoría & Startups Globales', en: 'Consulting & Global Tech Hubs' },
        description: {
          es: 'Implementación de plataformas SaaS, modernización de sistemas heredados y trabajo remoto internacional.',
          en: 'SaaS platform rollout, legacy software modernization, and international remote engineering.',
        },
        commonJobRoles: {
          es: ['Ingeniero de Software Full Stack', 'Arquitecto de Datos', 'Scrum Master / Agile Coach', 'Consultor ERP'],
          en: ['Full Stack Software Engineer', 'Data Architect', 'Scrum Master / Agile Coach', 'ERP Consultant'],
        },
        estimatedDemandLevel: 'very_high',
      },
      {
        id: 'mining-corp',
        iconName: 'HardHat',
        name: { es: 'Minería, Telecomunicaciones & Retail', en: 'Mining, Telecom & Large Retail' },
        description: {
          es: 'Automatización de centros de control, logística inteligente de inventarios y redes industriales.',
          en: 'Control room automation, smart supply-chain logistics, and industrial sensor networks.',
        },
        commonJobRoles: {
          es: ['Jefe de TI y Telecomunicaciones', 'Ingeniero de Automatización y Datos', 'Analista de Infraestructura'],
          en: ['IT & Telecom Manager', 'Data & Automation Engineer', 'Infrastructure Analyst'],
        },
        estimatedDemandLevel: 'high',
      },
    ],
    ranking: {
      nationalRankSalary: 2,
      nationalRankDemand: 1,
      employabilityRatePercent: 94,
      futureGrowthScorePercent: 97,
    },
    sources: [
      {
        name: 'Portal Ponte en Carrera — Ministerio de Trabajo del Perú',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.gob.pe/mtpe',
        type: 'government',
      },
      {
        name: 'Colegio de Ingenieros del Perú (CIP) — Capítulo de Sistemas',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.cip.org.pe',
        type: 'professional_college',
      },
    ],
  },
  {
    id: 'pe-minas',
    countryId: 'pe',
    slug: 'ingenieria-de-minas',
    category: 'earth_energy',
    iconName: 'Flame',
    title: {
      es: 'Ingeniería de Minas y Metalurgia',
      en: 'Mining & Metallurgical Engineering',
    },
    shortDescription: {
      es: 'Extracción, planificación y procesamiento sostenible de recursos minerales metálicos y no metálicos con alta tecnología.',
      en: 'Extraction, planning, and sustainable processing of metallic and non-metallic mineral resources.',
    },
    fullDescription: {
      es: 'La Ingeniería de Minas en Perú lidera la industria más importante de la economía nacional. Capacita a ingenieros en diseño de minas a tajo abierto y subterráneas, geotecnia, ventilación, gestión ambiental y metalurgia extractiva de cobre, oro, plata, zinc y litio.',
      en: 'Mining Engineering powers the backbone of Peru’s economy. It equips engineers in open-pit and underground mine design, geotechnics, ventilation, environmental management, and extractive metallurgy of copper, gold, zinc, and lithium.',
    },
    salary: {
      currencyCode: 'PEN',
      currencySymbol: 'S/',
      entryLevelMonthly: 3800,
      averageMonthly: 8200,
      seniorMonthly: 19500,
      year: 2026,
      source: 'MTPE / Sociedad Nacional de Minería, Petróleo y Energía (SNMPE)',
      sourceUrl: 'https://www.snmpe.org.pe',
      hourlyOrAnnualNote: {
        es: 'Sueldo graduado por experiencia: junior en mina (S/ 3.800), promedio (S/ 8.200) y superintendencia/senior (S/ 19.500+). Incluye regímenes mineros y utilidades.',
        en: 'Compensation scaled by experience: junior on-site (S/ 3,800), mid-level (S/ 8,200), and superintendent/senior (S/ 19,500+). Includes mining rotation and dividends.',
      },
    },
    academic: {
      level: { es: 'Pregrado Universitario', en: 'University Undergraduate' },
      durationYears: 5,
      totalSemesters: 10,
      degreeAwarded: {
        es: 'Bachiller en Ciencias de Ingeniería de Minas',
        en: 'Bachelor of Science in Mining Engineering',
      },
      professionalTitle: {
        es: 'Ingeniero de Minas (Colegiado CIP)',
        en: 'Chartered Mining Engineer (CIP Licensed)',
      },
      admissionRequirements: {
        es: [
          'Examen de admisión universitario con alta ponderación en física y química.',
          'Evaluación médica de aptitud para trabajos en altura sobre 4,000 msnm.',
          'Interés en geociencias, diseño 3D y gestión de operaciones complejas.',
        ],
        en: [
          'University entrance exam with strong physics and chemistry weighting.',
          'Medical clearance for high-altitude operations above 4,000 meters.',
          'Interest in geosciences, 3D mine planning, and heavy operations management.',
        ],
      },
      graduationRequirements: {
        es: [
          'Aprobación del plan curricular completo de 210 créditos.',
          'Prácticas profesionales en operaciones mineras activas (mínimo 6 meses).',
          'Sustentación de tesis sobre optimización de costos, seguridad o planeamiento.',
        ],
        en: [
          'Completion of full 210 credit curriculum.',
          'Field internship in active mining operations (minimum 6 months).',
          'Thesis defense on mine planning, safety geomechanics, or cost optimization.',
        ],
      },
    },
    curriculumAreas: [
      {
        id: 'geology-geo',
        iconName: 'Mountain',
        name: { es: 'Geología & Geotecnia', en: 'Geology & Geotechnics' },
        subjects: {
          es: ['Geología Estructural y de Minas', 'Mecánica de Rocas', 'Topografía Minera', 'Hidrogeología Minera', 'Geomecánica'],
          en: ['Structural Mining Geology', 'Rock Mechanics', 'Mining Surveying', 'Hydrogeology', 'Geomechanics'],
        },
      },
      {
        id: 'mining-ops',
        iconName: 'Pickaxe',
        name: { es: 'Operaciones & Perforación', en: 'Operations & Drilling' },
        subjects: {
          es: ['Perforación y Voladura de Rocas', 'Minería Subterránea', 'Minería Superficial (Open Pit)', 'Ventilación de Minas', 'Carguío y Transporte'],
          en: ['Drilling & Blasting', 'Underground Mining', 'Surface Mining (Open Pit)', 'Mine Ventilation', 'Haulage & Transport'],
        },
      },
      {
        id: 'planning-env',
        iconName: 'ShieldAlert',
        name: { es: 'Planeamiento, Seguridad & Cierre', en: 'Planning, Safety & Mine Closure' },
        subjects: {
          es: ['Software de Planeamiento Minero (Datamine/Deswik)', 'Seguridad y Salud Ocupacional en Minería', 'Gestión Ambiental y Relaves', 'Economía Minera y Valorización', 'Cierre de Minas'],
          en: ['Mine Planning Software (Datamine/Deswik)', 'Occupational Health & Mining Safety', 'Tailings & Environmental Mgmt', 'Mineral Economics & Valuation', 'Mine Closure'],
        },
      },
    ],
    workSectors: [
      {
        id: 'mining-companies',
        iconName: 'HardHat',
        name: { es: 'Compañías Mineras Globales', en: 'Global Mining Operators' },
        description: {
          es: 'Operación y superintendencia en yacimientos polimetálicos, cupríferos y auríferos de gran escala.',
          en: 'Superintendence and operations in large-scale copper, gold, and polymetallic sites.',
        },
        commonJobRoles: {
          es: ['Ingeniero de Planeamiento Corto/Largo Plazo', 'Jefe de Guardia de Mina', 'Superintendente de Operaciones', 'Ingeniero Geomecánico'],
          en: ['Short/Long-term Mine Planner', 'Mine Shift Supervisor', 'Operations Superintendent', 'Geomechanical Engineer'],
        },
        estimatedDemandLevel: 'critical',
      },
      {
        id: 'suppliers-contractors',
        iconName: 'Wrench',
        name: { es: 'Empresas de Perforación & Contratistas', en: 'Drilling & Mining Contractors' },
        description: {
          es: 'Servicios especializados de tunelería, voladura controlada y sostenimiento de roca.',
          en: 'Specialized tunneling, controlled blasting, and ground support services.',
        },
        commonJobRoles: {
          es: ['Especialista en Voladura (Blaster)', 'Residente de Obra Minera', 'Gerente de Seguridad Minera'],
          en: ['Blasting Specialist', 'Mining Project Resident', 'Mining Safety Director'],
        },
        estimatedDemandLevel: 'high',
      },
    ],
    ranking: {
      nationalRankSalary: 1,
      nationalRankDemand: 3,
      employabilityRatePercent: 96,
      futureGrowthScorePercent: 91,
    },
    sources: [
      {
        name: 'Sociedad Nacional de Minería, Petróleo y Energía (SNMPE)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.snmpe.org.pe',
        type: 'statistical_labor',
      },
      {
        name: 'Colegio de Ingenieros del Perú — Capítulo de Minas',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.cip.org.pe',
        type: 'professional_college',
      },
    ],
  },
  {
    id: 'pe-industrial',
    countryId: 'pe',
    slug: 'ingenieria-industrial',
    category: 'industrial_management',
    iconName: 'Factory',
    title: {
      es: 'Ingeniería Industrial y de Procesos',
      en: 'Industrial & Operations Engineering',
    },
    shortDescription: {
      es: 'Optimización de cadenas de suministro, operaciones de manufactura, calidad, finanzas estratégicas y productividad.',
      en: 'Optimization of supply chains, manufacturing operations, quality management, and productivity.',
    },
    fullDescription: {
      es: 'La Ingeniería Industrial integra personas, tecnología, información y finanzas para maximizar la eficiencia y rentabilidad de organizaciones manufactureras y de servicios en los sectores de consumo masivo, retail, agroexportación, logística y banca.',
      en: 'Industrial Engineering connects people, technology, and finance to maximize efficiency and profitability across consumer goods, retail, logistics, manufacturing, and banking sectors.',
    },
    salary: {
      currencyCode: 'PEN',
      currencySymbol: 'S/',
      entryLevelMonthly: 2500,
      averageMonthly: 5400,
      seniorMonthly: 13000,
      year: 2026,
      source: 'Ponte en Carrera / Encuesta Salarial Peruana',
      sourceUrl: 'https://www.gob.pe/mtpe',
      hourlyOrAnnualNote: {
        es: 'La compensación escala con la experiencia: egresado junior (S/ 2.500), mando medio (S/ 5.400) y gerencias de planta/senior (S/ 13.000+).',
        en: 'Compensation scales with experience: junior graduate (S/ 2,500), mid-level (S/ 5,400), and plant management/senior (S/ 13,000+).',
      },
    },
    academic: {
      level: { es: 'Pregrado Universitario', en: 'University Undergraduate' },
      durationYears: 5,
      totalSemesters: 10,
      degreeAwarded: {
        es: 'Bachiller en Ingeniería Industrial',
        en: 'Bachelor of Science in Industrial Engineering',
      },
      professionalTitle: {
        es: 'Ingeniero Industrial (Colegiado CIP)',
        en: 'Chartered Industrial Engineer (CIP Licensed)',
      },
      admissionRequirements: {
        es: [
          'Examen de admisión universitario con balance en matemáticas y ciencias sociales.',
          'Capacidad para el liderazgo, trabajo en equipo y visión de negocio.',
        ],
        en: [
          'University entrance exam balancing mathematics and analytical skills.',
          'Leadership aptitude, teamwork, and strategic business perspective.',
        ],
      },
      graduationRequirements: {
        es: [
          'Completar los 200 créditos académicos con cursos de gestión y plantas industriales.',
          'Prácticas preprofesionales acreditadas de 360 horas mínimas.',
          'Sustentación de tesis o plan de mejora de procesos productivos.',
        ],
        en: [
          'Completion of 200 academic credits covering plant operations and management.',
          'Accredited professional internship (minimum 360 hours).',
          'Undergraduate thesis or process improvement capstone project defense.',
        ],
      },
    },
    curriculumAreas: [
      {
        id: 'ops-prod',
        iconName: 'Boxes',
        name: { es: 'Operaciones & Producción', en: 'Operations & Production' },
        subjects: {
          es: ['Investigación de Operaciones I y II', 'Diseño y Distribución de Plantas', 'Gestión de la Producción (Lean Six Sigma)', 'Ingeniería de Métodos y Tiempos', 'Automatización Industrial'],
          en: ['Operations Research I & II', 'Plant Layout & Design', 'Production Mgmt (Lean Six Sigma)', 'Methods & Ergonomics', 'Industrial Automation'],
        },
      },
      {
        id: 'supply-logistics',
        iconName: 'Truck',
        name: { es: 'Cadena de Suministro & Logística', en: 'Supply Chain & Logistics' },
        subjects: {
          es: ['Logística y Cadena de Suministro', 'Gestión de Compras y Almacenes', 'Comercio Exterior y Aduanas', 'Simulación de Sistemas Discretos', 'Sistemas ERP (SAP)'],
          en: ['Supply Chain Management', 'Procurement & Warehouse Mgmt', 'International Trade & Customs', 'Discrete System Simulation', 'ERP Systems (SAP)'],
        },
      },
      {
        id: 'finance-qual',
        iconName: 'TrendingUp',
        name: { es: 'Calidad, Finanzas & Proyectos', en: 'Quality, Finance & Projects' },
        subjects: {
          es: ['Control Estadístico de la Calidad (ISO)', 'Ingeniería Económica y Finanzas', 'Evaluación de Proyectos de Inversión', 'Seguridad y Salud Ocupacional', 'Analítica de Negocios'],
          en: ['Statistical Quality Control (ISO)', 'Engineering Economics & Finance', 'Investment Project Evaluation', 'Occupational Safety', 'Business Analytics'],
        },
      },
    ],
    workSectors: [
      {
        id: 'fmcg-manufacturing',
        iconName: 'Store',
        name: { es: 'Consumo Masivo & Retail', en: 'Consumer Goods & Retail' },
        description: {
          es: 'Planificación de la demanda, centros de distribución y optimización de líneas de producción.',
          en: 'Demand planning, automated distribution centers, and production line optimization.',
        },
        commonJobRoles: {
          es: ['Gerente de Cadena de Suministro (Supply Chain)', 'Jefe de Planta / Operaciones', 'Analista Senior de Planeamiento de la Demanda'],
          en: ['Supply Chain Manager', 'Plant / Operations Manager', 'Senior Demand Planner'],
        },
        estimatedDemandLevel: 'very_high',
      },
      {
        id: 'agro-export',
        iconName: 'TreePine',
        name: { es: 'Agroindustria & Exportación', en: 'Agroindustry & Exports' },
        description: {
          es: 'Procesamiento, trazabilidad y control de calidad para exportación de arándanos, palta, uva y café.',
          en: 'Cold-chain packaging, traceability, and quality assurance for fruit & coffee exports.',
        },
        commonJobRoles: {
          es: ['Jefe de Aseguramiento de Calidad', 'Superintendente de Packing', 'Coordinador de Logística Internacional'],
          en: ['Quality Assurance Head', 'Packing Plant Superintendent', 'International Freight Coordinator'],
        },
        estimatedDemandLevel: 'high',
      },
    ],
    ranking: {
      nationalRankSalary: 4,
      nationalRankDemand: 2,
      employabilityRatePercent: 93,
      futureGrowthScorePercent: 92,
    },
    sources: [
      {
        name: 'MTPE — Observatorio Ponte en Carrera',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.gob.pe/mtpe',
        type: 'government',
      },
    ],
  },
  {
    id: 'pe-civil',
    countryId: 'pe',
    slug: 'ingenieria-civil',
    category: 'infrastructure_civil',
    iconName: 'Building2',
    title: {
      es: 'Ingeniería Civil y Estructural',
      en: 'Civil & Structural Engineering',
    },
    shortDescription: {
      es: 'Cálculo estructural sismorresistente, carreteras, puertos, represas, túneles y modelado BIM.',
      en: 'Earthquake-resistant structural calculation, highways, ports, dams, tunnels, and BIM modeling.',
    },
    fullDescription: {
      es: 'La Ingeniería Civil en Perú se enfoca en el diseño, construcción y supervisión de infraestructuras críticas con normativas sismorresistentes de vanguardia, gestión de contratos NEC/FIDIC, presas hidráulicas, puentes y transporte masivo.',
      en: 'Civil Engineering in Peru focuses on designing, constructing, and supervising critical infrastructure with cutting-edge seismic codes, BIM technology, NEC/FIDIC contracting, dams, and highway networks.',
    },
    salary: {
      currencyCode: 'PEN',
      currencySymbol: 'S/',
      entryLevelMonthly: 2600,
      averageMonthly: 5600,
      seniorMonthly: 14000,
      year: 2026,
      source: 'Colegio de Ingenieros del Perú & CAPECO',
      sourceUrl: 'https://www.capeco.org',
      hourlyOrAnnualNote: {
        es: 'Evolución según experiencia en obra: asistente junior (S/ 2.600), residente/calculista (S/ 5.600) y director de proyectos/senior (S/ 14.000+).',
        en: 'Progresses by site experience: junior field assistant (S/ 2,600), resident engineer (S/ 5,600), and senior project director (S/ 14,000+).',
      },
    },
    academic: {
      level: { es: 'Pregrado Universitario', en: 'University Undergraduate' },
      durationYears: 5,
      totalSemesters: 10,
      degreeAwarded: {
        es: 'Bachiller en Ingeniería Civil',
        en: 'Bachelor of Science in Civil Engineering',
      },
      professionalTitle: {
        es: 'Ingeniero Civil (Colegiado CIP con firma habilitada)',
        en: 'Chartered Civil Engineer (CIP Licensed)',
      },
      admissionRequirements: {
        es: ['Evaluación rigurosa en estática, física clásica, cálculo y geometría espacial.'],
        en: ['Rigorous admission exam covering statics, physics, calculus, and spatial geometry.'],
      },
      graduationRequirements: {
        es: ['Aprobación de 210 créditos universitarios.', 'Sustentación de tesis de diseño estructural, hidráulico o vial.'],
        en: ['Completion of 210 academic credits.', 'Thesis defense in structural, geotechnical, or hydraulic engineering.'],
      },
    },
    curriculumAreas: [
      {
        id: 'structures',
        iconName: 'Building',
        name: { es: 'Estructuras & Sismorresistencia', en: 'Structures & Seismic Design' },
        subjects: {
          es: ['Mecánica de Materiales', 'Análisis Estructural', 'Diseño en Concreto Armado', 'Ingeniería Sismorresistente', 'Estructuras de Acero'],
          en: ['Mechanics of Materials', 'Structural Analysis', 'Reinforced Concrete Design', 'Earthquake Engineering', 'Steel Structures'],
        },
      },
      {
        id: 'geotech-water',
        iconName: 'Droplet',
        name: { es: 'Geotecnia & Recursos Hídricos', en: 'Geotechnics & Water Resources' },
        subjects: {
          es: ['Mecánica de Suelos I y II', 'Cimentaciones Profundas', 'Mecánica de Fluidos', 'Hidráulica de Canales y Presas', 'Hidrología'],
          en: ['Soil Mechanics I & II', 'Deep Foundations', 'Fluid Mechanics', 'Open Channel Hydraulics & Dams', 'Hydrology'],
        },
      },
      {
        id: 'construction-bim',
        iconName: 'Layers',
        name: { es: 'Gestión de Construcción & BIM', en: 'Construction Management & BIM' },
        subjects: {
          es: ['Modelado BIM (Revit/Navisworks)', 'Costos y Presupuestos de Obras', 'Topografía y Geodesia', 'Caminos y Pavimentos', 'Gestión de Contratos de Obra'],
          en: ['BIM Modeling (Revit/Navisworks)', 'Cost Estimating & Scheduling', 'Topography & Geodesy', 'Highways & Pavements', 'Construction Contract Law'],
        },
      },
    ],
    workSectors: [
      {
        id: 'infrastructure-public',
        iconName: 'Hammer',
        name: { es: 'Obras Viales, Puentes & Puertos', en: 'Highways, Bridges & Ports' },
        description: {
          es: 'Ejecución y supervisión de megaproyectos de transporte e infraestructura vial.',
          en: 'Execution and technical oversight of transit and maritime mega-projects.',
        },
        commonJobRoles: {
          es: ['Residente de Obra', 'Ingeniero Calculista Estructural', 'Supervisor de Obras Civiles', 'Coordinador BIM'],
          en: ['Site Resident Engineer', 'Structural Calculation Engineer', 'Civil Works Inspector', 'BIM Coordinator'],
        },
        estimatedDemandLevel: 'very_high',
      },
    ],
    ranking: {
      nationalRankSalary: 3,
      nationalRankDemand: 4,
      employabilityRatePercent: 91,
      futureGrowthScorePercent: 88,
    },
    sources: [
      {
        name: 'Cámara Peruana de la Construcción (CAPECO)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.capeco.org',
        type: 'statistical_labor',
      },
    ],
  },
  {
    id: 'pe-mecatronica',
    countryId: 'pe',
    slug: 'ingenieria-mecatronica',
    category: 'mechanical_electrical',
    iconName: 'Cpu',
    title: {
      es: 'Ingeniería Mecatrónica y Robótica',
      en: 'Mechatronics & Robotics Engineering',
    },
    shortDescription: {
      es: 'Sinergia de mecánica de precisión, electrónica de potencia, servomecanismos, IoT industrial y robótica autónoma.',
      en: 'Synergy of precision mechanics, power electronics, servomechanisms, industrial IoT, and autonomous robotics.',
    },
    fullDescription: {
      es: 'La Ingeniería Mecatrónica combina robótica, control automático, inteligencia artificial e ingeniería mecánica para automatizar plantas de producción, vehículos autónomos mineros y sistemas de visión computacional.',
      en: 'Mechatronics Engineering integrates robotics, automatic control, artificial intelligence, and mechanical engineering to automate factories, autonomous mining fleets, and computer vision systems.',
    },
    salary: {
      currencyCode: 'PEN',
      currencySymbol: 'S/',
      entryLevelMonthly: 2700,
      averageMonthly: 6000,
      seniorMonthly: 14500,
      year: 2026,
      source: 'MTPE / Observatorio Tecnológico',
      sourceUrl: 'https://www.gob.pe/mtpe',
      hourlyOrAnnualNote: {
        es: 'Sueldo promedio mensual en plantas industriales automatizadas y minería.',
        en: 'Average monthly compensation in automated industrial plants and mining.',
      },
    },
    academic: {
      level: { es: 'Pregrado Universitario', en: 'University Undergraduate' },
      durationYears: 5,
      totalSemesters: 10,
      degreeAwarded: {
        es: 'Bachiller en Ingeniería Mecatrónica',
        en: 'Bachelor of Science in Mechatronics Engineering',
      },
      professionalTitle: {
        es: 'Ingeniero Mecatrónico (Colegiado CIP)',
        en: 'Chartered Mechatronics Engineer (CIP Licensed)',
      },
      admissionRequirements: {
        es: ['Alta destreza en física mecánica, cálculo diferencial e interés en hardware y código.'],
        en: ['Strong aptitude in classical mechanics, differential calculus, hardware and programming.'],
      },
      graduationRequirements: {
        es: ['Aprobación de 205 créditos y desarrollo de prototipo funcional automatizado con informe de tesis.'],
        en: ['Completion of 205 credits and defense of a functional automated prototype thesis.'],
      },
    },
    curriculumAreas: [
      {
        id: 'mechanics-cad',
        iconName: 'Cog',
        name: { es: 'Mecánica & Diseño CAD/CAM', en: 'Mechanics & CAD/CAM Design' },
        subjects: {
          es: ['Dinámica de Sistemas', 'Diseño de Elementos de Máquinas', 'CAD/CAM 3D (SolidWorks/Inventor)', 'Manufactura Asistida por Computador', 'Mecatrónica de Precisión'],
          en: ['System Dynamics', 'Machine Elements Design', '3D CAD/CAM (SolidWorks)', 'Computer-Aided Manufacturing', 'Precision Mechatronics'],
        },
      },
      {
        id: 'electronics-control',
        iconName: 'Zap',
        name: { es: 'Electrónica & Control Automático', en: 'Electronics & Automatic Control' },
        subjects: {
          es: ['Circuitos Electrónicos y Potencia', 'Microcontroladores y Sistemas Embebidos', 'Sistemas de Control Clásico y Moderno', 'Sensores y Actuadores Industriales', 'PLCs y SCADA'],
          en: ['Electronic Circuits & Power', 'Microcontrollers & Embedded Systems', 'Modern Control Systems', 'Industrial Sensors & Actuators', 'PLCs & SCADA'],
        },
      },
      {
        id: 'robotics-ai',
        iconName: 'Bot',
        name: { es: 'Robótica & Visión Artificial', en: 'Robotics & Computer Vision' },
        subjects: {
          es: ['Cinemática y Dinámica de Robots', 'Visión por Computador e IA', 'Internet de las Cosas Industrial (IIoT)', 'Robótica Móvil y Vehículos Autónomos', 'Redes de Comunicación Industrial'],
          en: ['Robot Kinematics & Dynamics', 'Computer Vision & AI', 'Industrial IoT (IIoT)', 'Mobile Robotics & Autonomous Vehicles', 'Industrial Fieldbuses'],
        },
      },
    ],
    workSectors: [
      {
        id: 'automation-industry',
        iconName: 'Cpu',
        name: { es: 'Automatización de Plantas & Manufactura', en: 'Plant Automation & Smart Factories' },
        description: {
          es: 'Integración de brazos robóticos, líneas de empaquetado continuo y sensores SCADA.',
          en: 'Integration of robotic arms, continuous packaging lines, and SCADA monitoring.',
        },
        commonJobRoles: {
          es: ['Ingeniero de Automatización y Control', 'Integrador de Robótica Industrial', 'Ingeniero de Mantenimiento Mecatrónico'],
          en: ['Automation & Control Engineer', 'Robotics Integrator', 'Mechatronic Reliability Engineer'],
        },
        estimatedDemandLevel: 'very_high',
      },
    ],
    ranking: {
      nationalRankSalary: 5,
      nationalRankDemand: 5,
      employabilityRatePercent: 92,
      futureGrowthScorePercent: 96,
    },
    sources: [
      {
        name: 'Colegio de Ingenieros del Perú — Capítulo Mecánico-Mecatrónico',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.cip.org.pe',
        type: 'professional_college',
      },
    ],
  },
  {
    id: 'pe-ambiental',
    countryId: 'pe',
    slug: 'ingenieria-ambiental',
    category: 'bio_chemical',
    iconName: 'Leaf',
    title: {
      es: 'Ingeniería Ambiental y Sostenibilidad',
      en: 'Environmental & Sustainability Engineering',
    },
    shortDescription: {
      es: 'Gestión de recursos hídricos, evaluación de impacto ambiental (EIA), remediación de suelos y huella de carbono.',
      en: 'Water resource management, environmental impact assessments (EIA), soil remediation, and carbon footprint reduction.',
    },
    fullDescription: {
      es: 'La Ingeniería Ambiental en Perú aplica principios científicos e ingenieriles para proteger los ecosistemas, prevenir la contaminación industrial, diseñar plantas de tratamiento de efluentes y asegurar el cumplimiento de estándares ambientales OEFA y SENACE.',
      en: 'Environmental Engineering in Peru applies engineering principles to protect ecosystems, prevent industrial pollution, design wastewater treatment plants, and maintain strict environmental compliance.',
    },
    salary: {
      currencyCode: 'PEN',
      currencySymbol: 'S/',
      entryLevelMonthly: 2400,
      averageMonthly: 5200,
      seniorMonthly: 12000,
      year: 2026,
      source: 'OEFA & MTPE Estadísticas',
      sourceUrl: 'https://www.gob.pe/oefa',
      hourlyOrAnnualNote: {
        es: 'Variación según experiencia: analista junior (S/ 2.400), consultor EIA medio (S/ 5.200) y gerente de medio ambiente (S/ 12.000+).',
        en: 'Scales by experience: junior analyst (S/ 2,400), mid-level EIA consultant (S/ 5,200), and environmental director (S/ 12,000+).',
      },
    },
    academic: {
      level: { es: 'Pregrado Universitario', en: 'University Undergraduate' },
      durationYears: 5,
      totalSemesters: 10,
      degreeAwarded: {
        es: 'Bachiller en Ingeniería Ambiental',
        en: 'Bachelor of Science in Environmental Engineering',
      },
      professionalTitle: {
        es: 'Ingeniero Ambiental (Colegiado CIP)',
        en: 'Chartered Environmental Engineer (CIP Licensed)',
      },
      admissionRequirements: {
        es: ['Conocimientos sólidos en química orgánica, biología, física y ecología básica.'],
        en: ['Solid grounding in organic chemistry, biology, physics, and basic ecology.'],
      },
      graduationRequirements: {
        es: ['Aprobación de 200 créditos académicos y sustentación de tesis en remediación o monitoreo.'],
        en: ['Completion of 200 credits and defense of a remediation or environmental monitoring thesis.'],
      },
    },
    curriculumAreas: [
      {
        id: 'water-air',
        iconName: 'Wind',
        name: { es: 'Tratamiento de Aguas & Emisiones', en: 'Water & Air Treatment' },
        subjects: {
          es: ['Química Ambiental', 'Tratamiento de Aguas Residuales y Potabilización', 'Control de Emisiones Atmosféricas', 'Remediación de Suelos Contaminados', 'Gestión Integral de Residuos Sólidos'],
          en: ['Environmental Chemistry', 'Wastewater Treatment & Purification', 'Air Quality & Emissions Control', 'Soil Remediation', 'Solid Waste Management'],
        },
      },
      {
        id: 'eia-compliance',
        iconName: 'FileCheck',
        name: { es: 'Evaluación de Impacto (EIA) & Legislación', en: 'EIA & Environmental Law' },
        subjects: {
          es: ['Estudios de Impacto Ambiental (EIA)', 'Legislación y Fiscalización Ambiental (OEFA)', 'Sistemas de Gestión Ambiental (ISO 14001)', 'Huella de Carbono y Cambio Climático', 'Auditoría Ambiental'],
          en: ['Environmental Impact Assessments (EIA)', 'Environmental Law & Compliance', 'Environmental Management Systems (ISO 14001)', 'Carbon Footprint & Climate Change', 'Environmental Auditing'],
        },
      },
    ],
    workSectors: [
      {
        id: 'mining-energy-env',
        iconName: 'Shield',
        name: { es: 'Minería, Energía & Consultoría', en: 'Mining, Energy & Consulting' },
        description: {
          es: 'Monitoreo de efluentes, planes de manejo ambiental y relacionamiento comunitario.',
          en: 'Effluent monitoring, environmental management plans, and community sustainability.',
        },
        commonJobRoles: {
          es: ['Jefe de Medio Ambiente y Permisos', 'Consultor Senior de EIA', 'Ingeniero de Tratamiento de Aguas'],
          en: ['Environmental & Permitting Manager', 'Senior EIA Consultant', 'Water Treatment Engineer'],
        },
        estimatedDemandLevel: 'high',
      },
    ],
    ranking: {
      nationalRankSalary: 7,
      nationalRankDemand: 6,
      employabilityRatePercent: 88,
      futureGrowthScorePercent: 94,
    },
    sources: [
      {
        name: 'Organismo de Evaluación y Fiscalización Ambiental (OEFA)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.gob.pe/oefa',
        type: 'government',
      },
    ],
  },

  // ================= CHILE (cl) =================
  {
    id: 'cl-civil-minas',
    countryId: 'cl',
    slug: 'ingenieria-civil-de-minas',
    category: 'earth_energy',
    iconName: 'Flame',
    title: {
      es: 'Ingeniería Civil de Minas',
      en: 'Civil Mining Engineering',
    },
    shortDescription: {
      es: 'Planificación de megafaenas cupríferas, extracción de litio, geomecánica profunda y automatización de rajos.',
      en: 'Planning of mega copper pits, lithium extraction, deep geomechanics, and pit automation.',
    },
    fullDescription: {
      es: 'Carrera emblemática de Chile, primer productor mundial de cobre. Forma ingenieros civiles para liderar operaciones en Codelco, BHP, Antofagasta Minerals y nuevos proyectos de salares de litio con tecnología autónoma.',
      en: 'Premier engineering field in Chile, the world’s top copper producer. Trains civil engineers to lead operations at Codelco, BHP, and new lithium salt flat projects with autonomous fleets.',
    },
    salary: {
      currencyCode: 'CLP',
      currencySymbol: '$',
      entryLevelMonthly: 1700000,
      averageMonthly: 3400000,
      seniorMonthly: 6500000,
      year: 2026,
      source: 'Mifuturo.cl — Mineduc Chile',
      sourceUrl: 'https://www.mifuturo.cl',
      hourlyOrAnnualNote: {
        es: 'Variación según años de experiencia: recién titulado ($1.700.000), 4to año ($3.400.000) y superintendente/senior ($6.500.000+ CLP).',
        en: 'Varies by work experience: recent graduate ($1.7M CLP), 4th year ($3.4M CLP), and superintendent/senior ($6.5M+ CLP).',
      },
    },
    academic: {
      level: { es: 'Pregrado Universitario / Plan Común', en: 'Undergraduate / Common Engineering Core' },
      durationYears: 5.5,
      totalSemesters: 11,
      degreeAwarded: {
        es: 'Licenciado en Ciencias de la Ingeniería',
        en: 'Bachelor of Science in Engineering',
      },
      professionalTitle: {
        es: 'Ingeniero Civil de Minas',
        en: 'Professional Civil Mining Engineer',
      },
      admissionRequirements: {
        es: ['Puntaje PAES destacado en Competencia Matemática (M1 y M2) y Ciencias.'],
        en: ['Top percentile PAES national exam scores in Advanced Mathematics and Science.'],
      },
      graduationRequirements: {
        es: ['Memoria de título profesional y práctica industrial en faena minera activa.'],
        en: ['Professional engineering capstone thesis and heavy industrial field internship.'],
      },
    },
    curriculumAreas: [
      {
        id: 'chile-mining-core',
        iconName: 'Pickaxe',
        name: { es: 'Extracción & Planificación Minera', en: 'Extraction & Mine Planning' },
        subjects: {
          es: ['Mecánica de Rocas Aplicada', 'Evaluación de Yacimientos y Geoestadística', 'Minería a Rajo Abierto y Subterránea', 'Ventilación y Servicios Mineros', 'Economía de Minerales'],
          en: ['Applied Rock Mechanics', 'Geostatistics & Mineral Evaluation', 'Open Pit & Underground Mining', 'Mine Ventilation & Utilities', 'Mineral Economics'],
        },
      },
      {
        id: 'chile-lithium-auto',
        iconName: 'BatteryCharging',
        name: { es: 'Litio, Automatización & Sustentabilidad', en: 'Lithium, Automation & Sustainability' },
        subjects: {
          es: ['Procesamiento de Salares y Litio', 'Flotas Autónomas y Telemetría', 'Manejo de Relaves Espesados y Agua', 'Cierre de Faenas y ESG'],
          en: ['Lithium & Salt Lake Processing', 'Autonomous Fleets & Telemetry', 'Thickened Tailings & Water Mgmt', 'Mine Closure & ESG'],
        },
      },
    ],
    workSectors: [
      {
        id: 'mining-chile',
        iconName: 'Building2',
        name: { es: 'Gran Minería del Cobre y Litio', en: 'Mega Copper & Lithium Mining' },
        description: {
          es: 'Operaciones en la Región de Antofagasta, Calama, Atacama y Santiago corporativo.',
          en: 'Operations in Antofagasta, Calama, Atacama, and Santiago corporate headquarters.',
        },
        commonJobRoles: {
          es: ['Ingeniero de Planificación Minera', 'Superintendente de Mina', 'Especialista en Geomecánica'],
          en: ['Mine Planning Engineer', 'Mine Superintendent', 'Geomechanics Specialist'],
        },
        estimatedDemandLevel: 'critical',
      },
    ],
    ranking: {
      nationalRankSalary: 1,
      nationalRankDemand: 2,
      employabilityRatePercent: 95,
      futureGrowthScorePercent: 93,
    },
    sources: [
      {
        name: 'Mifuturo.cl — Ministerio de Educación de Chile',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.mifuturo.cl',
        type: 'government',
      },
    ],
  },
  {
    id: 'cl-civil-industrial',
    countryId: 'cl',
    slug: 'ingenieria-civil-industrial',
    category: 'industrial_management',
    iconName: 'Factory',
    title: {
      es: 'Ingeniería Civil Industrial',
      en: 'Civil Industrial Engineering',
    },
    shortDescription: {
      es: 'Alta dirección corporativa, finanzas cuantitativas, consultoría estratégica, analítica de datos y optimización.',
      en: 'Corporate executive leadership, quantitative finance, strategic consulting, data analytics, and optimization.',
    },
    fullDescription: {
      es: 'Una de las carreras más versátiles y de mayor demanda en Chile. Combina sólidas ciencias duras con economía avanzada, ciencia de datos, evaluación de negocios y optimización de cadenas logísticas.',
      en: 'One of the most prestigious and versatile degrees in Chile. Blends rigorous mathematics and physics with economics, data science, financial valuation, and supply chain optimization.',
    },
    salary: {
      currencyCode: 'CLP',
      currencySymbol: '$',
      entryLevelMonthly: 1400000,
      averageMonthly: 2600000,
      seniorMonthly: 5200000,
      year: 2026,
      source: 'Mifuturo.cl & Ranking Qué Pasa',
      sourceUrl: 'https://www.mifuturo.cl',
      hourlyOrAnnualNote: {
        es: 'Sueldo según antigüedad: inicial ($1.400.000), media de mercado ($2.600.000) y jefatura/senior ($5.200.000+ CLP).',
        en: 'Salary by seniority: entry ($1.4M CLP), market median ($2.6M CLP), and management/senior ($5.2M+ CLP).',
      },
    },
    academic: {
      level: { es: 'Pregrado Universitario', en: 'University Undergraduate' },
      durationYears: 5.5,
      totalSemesters: 11,
      degreeAwarded: {
        es: 'Licenciado en Ciencias de la Ingeniería',
        en: 'Bachelor of Science in Engineering',
      },
      professionalTitle: {
        es: 'Ingeniero Civil Industrial',
        en: 'Civil Industrial Engineer',
      },
      admissionRequirements: {
        es: ['Rendición de PAES con alto puntaje en Matemática M1/M2 y Lenguaje.'],
        en: ['High PAES percentile in Advanced Mathematics M1/M2 and Reading Comprehension.'],
      },
      graduationRequirements: {
        es: ['Memoria de grado en optimización de operaciones o consultoría estratégica y práctica profesional.'],
        en: ['Graduation thesis in operations optimization or management consulting plus internship.'],
      },
    },
    curriculumAreas: [
      {
        id: 'opt-math',
        iconName: 'TrendingUp',
        name: { es: 'Optimización & Finanzas', en: 'Optimization & Finance' },
        subjects: {
          es: ['Optimización Estocástica y Lineal', 'Finanzas Corporativas y Mercado de Capitales', 'Micro y Macroeconomía Aplicada', 'Evaluación Social y Privada de Proyectos'],
          en: ['Linear & Stochastic Optimization', 'Corporate Finance & Capital Markets', 'Applied Micro & Macroeconomics', 'Project Valuation & Economics'],
        },
      },
      {
        id: 'data-analytics',
        iconName: 'Database',
        name: { es: 'Analítica de Negocios & Operaciones', en: 'Business Analytics & Ops' },
        subjects: {
          es: ['Data Science para Negocios (Python/R)', 'Gestión de la Cadena de Suministro', 'Marketing Cuantitativo', 'Estrategia y Gestión Empresarial'],
          en: ['Data Science for Business (Python/R)', 'Supply Chain Management', 'Quantitative Marketing', 'Corporate Strategy & Governance'],
        },
      },
    ],
    workSectors: [
      {
        id: 'finance-banking-chile',
        iconName: 'Building2',
        name: { es: 'Banca, Fintech & Consultoría', en: 'Banking, Fintech & Consulting' },
        description: {
          es: 'Liderazgo en bancos, firmas de consultoría (McKinsey/BCG) y fondos de inversión.',
          en: 'Leadership roles across top-tier banking, strategy consulting, and private equity.',
        },
        commonJobRoles: {
          es: ['Gerente de Operaciones / Finanzas', 'Consultor Estratégico', 'Lead Data Analyst', 'Product Manager'],
          en: ['Operations / Finance VP', 'Strategy Consultant', 'Lead Data Analyst', 'Product Manager'],
        },
        estimatedDemandLevel: 'very_high',
      },
    ],
    ranking: {
      nationalRankSalary: 3,
      nationalRankDemand: 1,
      employabilityRatePercent: 94,
      futureGrowthScorePercent: 95,
    },
    sources: [
      {
        name: 'Mifuturo.cl — Mineduc',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.mifuturo.cl',
        type: 'government',
      },
    ],
  },
  {
    id: 'cl-civil-informatica',
    countryId: 'cl',
    slug: 'ingenieria-civil-en-computacion-e-informatica',
    category: 'software_tech',
    iconName: 'Code2',
    title: {
      es: 'Ingeniería Civil Informática y Computación',
      en: 'Computer Science & Software Engineering',
    },
    shortDescription: {
      es: 'Inteligencia artificial, cloud computing, ciberdefensa y desarrollo de arquitecturas complejas de software.',
      en: 'Artificial intelligence, cloud computing, cyber defense, and complex distributed software architectures.',
    },
    fullDescription: {
      es: 'Prepara a profesionales para liderar la era de la inteligencia artificial, computación distribuida, centros de datos y desarrollo de software de escala mundial desde el dinámico ecosistema tecnológico chileno.',
      en: 'Prepares engineers to lead the AI era, distributed cloud computing, modern data centers, and global-scale software engineering from Chile’s booming tech hub.',
    },
    salary: {
      currencyCode: 'CLP',
      currencySymbol: '$',
      entryLevelMonthly: 1500000,
      averageMonthly: 2800000,
      seniorMonthly: 5800000,
      year: 2026,
      source: 'Mifuturo.cl & Asociación Chilena de Empresas de TI (ACTI)',
      sourceUrl: 'https://www.acti.cl',
      hourlyOrAnnualNote: {
        es: 'Ingresos según experiencia: junior ($1.500.000), semi-senior ($2.800.000) y lead/senior ($5.800.000+ CLP).',
        en: 'Compensation by experience: junior ($1.5M CLP), mid-level ($2.8M CLP), and lead/senior ($5.8M+ CLP).',
      },
    },
    academic: {
      level: { es: 'Pregrado Universitario', en: 'University Undergraduate' },
      durationYears: 5.5,
      totalSemesters: 11,
      degreeAwarded: {
        es: 'Licenciado en Ciencias de la Ingeniería Informática',
        en: 'Bachelor of Science in Computer Science & Engineering',
      },
      professionalTitle: {
        es: 'Ingeniero Civil en Informática / Computación',
        en: 'Chartered Computer Science Engineer',
      },
      admissionRequirements: {
        es: ['Alto rendimiento en PAES Matemáticas M1 y M2.'],
        en: ['Top PAES scores in Advanced Mathematics.'],
      },
      graduationRequirements: {
        es: ['Memoria de grado en software/IA y prácticas profesionales supervisadas.'],
        en: ['Engineering thesis in AI/systems and supervised industry internship.'],
      },
    },
    curriculumAreas: [
      {
        id: 'ai-cl',
        iconName: 'Cpu',
        name: { es: 'Inteligencia Artificial & Datos', en: 'AI & Data Engineering' },
        subjects: {
          es: ['Modelos de Machine Learning y Deep Learning', 'Procesamiento de Lenguaje Natural (LLMs)', 'Big Data y Computación Distribuida', 'Visión por Computador'],
          en: ['Machine Learning & Deep Learning', 'Natural Language Processing (LLMs)', 'Big Data & Distributed Computing', 'Computer Vision'],
        },
      },
      {
        id: 'cloud-arch-cl',
        iconName: 'Cloud',
        name: { es: 'Arquitectura Cloud & Ciberseguridad', en: 'Cloud Architecture & Cybersecurity' },
        subjects: {
          es: ['Arquitectura de Software y Microservicios', 'DevOps, CI/CD y Kubernetes', 'Seguridad Ofensiva y Criptografía', 'Sistemas Distribuidos y Redes'],
          en: ['Software Architecture & Microservices', 'DevOps, CI/CD & Kubernetes', 'Offensive Security & Cryptography', 'Distributed Systems & Networks'],
        },
      },
    ],
    workSectors: [
      {
        id: 'tech-unicorns-chile',
        iconName: 'Laptop',
        name: { es: 'Startups, Ecosistema Cloud & Global Tech', en: 'Tech Unicorns & Global Cloud' },
        description: {
          es: 'Desarrollo en empresas como Mercado Libre, NotCo, Betterfly y centros de datos de Google/AWS en Chile.',
          en: 'Engineering at unicorns (NotCo, Betterfly) and Google/AWS datacenter regions in Chile.',
        },
        commonJobRoles: {
          es: ['Staff Software Engineer', 'AI/ML Research Engineer', 'Cloud Solutions Architect', 'Chief Technology Officer (CTO)'],
          en: ['Staff Software Engineer', 'AI/ML Research Engineer', 'Cloud Solutions Architect', 'Chief Technology Officer (CTO)'],
        },
        estimatedDemandLevel: 'critical',
      },
    ],
    ranking: {
      nationalRankSalary: 2,
      nationalRankDemand: 1,
      employabilityRatePercent: 96,
      futureGrowthScorePercent: 98,
    },
    sources: [
      {
        name: 'Mifuturo.cl — Mineduc Chile',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.mifuturo.cl',
        type: 'government',
      },
    ],
  },

  // ================= MÉXICO (mx) =================
  {
    id: 'mx-mecatronica',
    countryId: 'mx',
    slug: 'ingenieria-en-mecatronica-y-automotriz',
    category: 'mechanical_electrical',
    iconName: 'Cpu',
    title: {
      es: 'Ingeniería en Mecatrónica y Automotriz',
      en: 'Mechatronics & Automotive Engineering',
    },
    shortDescription: {
      es: 'Robótica de ensamble automotriz, manufactura avanzada 4.0, vehículos eléctricos y aeroespacial en el hub de Nearshoring.',
      en: 'Automotive assembly robotics, Industry 4.0 smart manufacturing, EV design, and aerospace nearshoring.',
    },
    fullDescription: {
      es: 'México es una de las principales potencias automotrices del mundo. Esta ingeniería forma líderes para diseñar líneas robotizadas, trenes motrices eléctricos, manufactura aeroespacial en Querétaro y plantas automatizadas en el Bajío y Norte.',
      en: 'Mexico is a global automotive and nearshoring powerhouse. This career trains engineers in robotized assembly lines, electric vehicle powertrains, aerospace systems in Querétaro, and automated mega-factories.',
    },
    salary: {
      currencyCode: 'MXN',
      currencySymbol: '$',
      entryLevelMonthly: 16000,
      averageMonthly: 34000,
      seniorMonthly: 75000,
      year: 2026,
      source: 'IMCO ComparaCarreras & AMIA',
      sourceUrl: 'https://imco.org.mx/comparacarreras',
      hourlyOrAnnualNote: {
        es: 'Remuneración por experiencia: recién egresado ($16,000), ingeniero de planta ($34,000) y gerente de ingeniería ($75,000+ MXN).',
        en: 'Compensation by experience: fresh graduate ($16k), plant engineer ($34k), and engineering manager ($75k+ MXN).',
      },
    },
    academic: {
      level: { es: 'Licenciatura Universitaria', en: 'University Bachelor Degree' },
      durationYears: 4.5,
      totalSemesters: 9,
      degreeAwarded: {
        es: 'Licenciado en Ingeniería Mecatrónica',
        en: 'Bachelor in Mechatronics Engineering',
      },
      professionalTitle: {
        es: 'Ingeniero Mecatrónico (Cédula Profesional SEP)',
        en: 'Licensed Mechatronics Engineer (SEP License)',
      },
      admissionRequirements: {
        es: ['Examen EXANI-II o examen interno de la institución con enfoque físico-matemático.'],
        en: ['EXANI-II or institutional entrance test with math/physics focus.'],
      },
      graduationRequirements: {
        es: ['Residencia profesional en planta industrial (mínimo 500 horas) y titulación por examen CENEVAL o tesis.'],
        en: ['Industrial plant residency (min 500 hours) and CENEVAL national exam or thesis.'],
      },
    },
    curriculumAreas: [
      {
        id: 'mx-robotics',
        iconName: 'Bot',
        name: { es: 'Robótica & Automatización Industrial', en: 'Robotics & Industrial Automation' },
        subjects: {
          es: ['Robótica Industrial (KUKA/ABB/Fanuc)', 'Controladores Lógicos Programables (PLC Siemens/Rockwell)', 'Sistemas SCADA y Redes Industriales', 'Servomecanismos y Control Numérico (CNC)'],
          en: ['Industrial Robotics (KUKA/ABB/Fanuc)', 'Programmable Logic Controllers (PLCs)', 'SCADA & Industrial Fieldbuses', 'Servomechanisms & CNC Machining'],
        },
      },
      {
        id: 'mx-ev-auto',
        iconName: 'Zap',
        name: { es: 'Vehículos Eléctricos & Manufactura 4.0', en: 'EV Technology & Smart Manufacturing' },
        subjects: {
          es: ['Baterías y Trenes Motrices de Vehículos Eléctricos', 'Diseño CAD/CAE Automotriz (CATIA)', 'Internet Industrial de las Cosas (IIoT)', 'Sistemas Embebidos Automotrices (CAN Bus)'],
          en: ['EV Batteries & Powertrains', 'Automotive CAD/CAE (CATIA)', 'Industrial IoT & Smart Sensors', 'Automotive Embedded Systems (CAN Bus)'],
        },
      },
    ],
    workSectors: [
      {
        id: 'auto-oem-mx',
        iconName: 'Factory',
        name: { es: 'Plantas Automotrices & Aeroespaciales', en: 'Automotive OEMs & Aerospace Plants' },
        description: {
          es: 'Ensambladoras de BMW, Tesla Gigafactory, GM, Audi, Safran y Bombardier.',
          en: 'Assembly plants for BMW, GM, Audi, Tesla ecosystem, Safran, and Bombardier.',
        },
        commonJobRoles: {
          es: ['Ingeniero de Automatización y Robótica', 'Ingeniero de Calidad y Procesos (Six Sigma)', 'Líder de Línea de Ensamble'],
          en: ['Automation & Robotics Engineer', 'Six Sigma Quality Engineer', 'Manufacturing Line Lead'],
        },
        estimatedDemandLevel: 'critical',
      },
    ],
    ranking: {
      nationalRankSalary: 2,
      nationalRankDemand: 1,
      employabilityRatePercent: 93,
      futureGrowthScorePercent: 97,
    },
    sources: [
      {
        name: 'Instituto Mexicano para la Competitividad (IMCO)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://imco.org.mx/comparacarreras',
        type: 'statistical_labor',
      },
    ],
  },
  {
    id: 'mx-software',
    countryId: 'mx',
    slug: 'ingenieria-en-desarrollo-de-software-e-ia',
    category: 'software_tech',
    iconName: 'Code2',
    title: {
      es: 'Ingeniería en Software e Inteligencia Artificial',
      en: 'Software Engineering & AI',
    },
    shortDescription: {
      es: 'Desarrollo full-stack, cloud computing, IA generativa y ciberseguridad en el Silicon Valley mexicano (Guadalajara/CDMX).',
      en: 'Full-stack development, cloud computing, generative AI, and cybersecurity across Mexico’s tech hubs.',
    },
    fullDescription: {
      es: 'El desarrollo de software en México ha experimentado un crecimiento exponencial con miles de ingenieros trabajando para empresas de Estados Unidos y hubs tecnológicos en Guadalajara, Ciudad de México y Monterrey.',
      en: 'Software engineering in Mexico is experiencing explosive nearshoring growth with thousands of engineers building systems for US multinationals and regional tech hubs in Guadalajara, Mexico City, and Monterrey.',
    },
    salary: {
      currencyCode: 'MXN',
      currencySymbol: '$',
      entryLevelMonthly: 18000,
      averageMonthly: 38000,
      seniorMonthly: 88000,
      year: 2026,
      source: 'IMCO & Encuesta Salarial SG Buzz',
      sourceUrl: 'https://imco.org.mx/comparacarreras',
      hourlyOrAnnualNote: {
        es: 'Escalafón por experiencia: junior ($18,000), mid-level ($38,000) y tech lead / arquitecto ($88,000+ MXN).',
        en: 'Career ladder by experience: junior ($18k), mid-level ($38k), and tech lead / architect ($88k+ MXN).',
      },
    },
    academic: {
      level: { es: 'Licenciatura Universitaria', en: 'University Bachelor Degree' },
      durationYears: 4,
      totalSemesters: 8,
      degreeAwarded: {
        es: 'Licenciado en Ingeniería de Software',
        en: 'Bachelor of Science in Software Engineering',
      },
      professionalTitle: {
        es: 'Ingeniero de Software (Cédula Profesional)',
        en: 'Licensed Software Engineer',
      },
      admissionRequirements: {
        es: ['Examen de ingreso y dominio intermedio del idioma inglés.'],
        en: ['Admission exam and intermediate English proficiency.'],
      },
      graduationRequirements: {
        es: ['Proyecto integrador de software, estadía empresarial y acreditación de inglés B2.'],
        en: ['Software capstone project, corporate practicum, and English B2 certification.'],
      },
    },
    curriculumAreas: [
      {
        id: 'mx-sw-core',
        iconName: 'Code',
        name: { es: 'Ingeniería de Software & Cloud', en: 'Software Engineering & Cloud' },
        subjects: {
          es: ['Estructuras de Datos y Algoritmos Avanzados', 'Arquitecturas Cloud Nativas (AWS/GCP/Azure)', 'Bases de Datos Escalables y Event-Driven', 'DevOps, CI/CD y Microservicios'],
          en: ['Advanced Data Structures & Algorithms', 'Cloud Native Architectures (AWS/GCP)', 'Scalable Event-Driven Databases', 'DevOps, CI/CD & Microservices'],
        },
      },
      {
        id: 'mx-sw-ai',
        iconName: 'Cpu',
        name: { es: 'Inteligencia Artificial & Seguridad', en: 'AI & Application Security' },
        subjects: {
          es: ['Machine Learning y Redes Neuronales', 'Integración de Modelos Fundacionales (LLMs)', 'Ciberseguridad y DevSecOps', 'Desarrollo Móvil Multiplataforma'],
          en: ['Machine Learning & Neural Networks', 'LLM Integration & Prompt Pipelines', 'Cybersecurity & DevSecOps', 'Cross-Platform Mobile Engineering'],
        },
      },
    ],
    workSectors: [
      {
        id: 'us-nearshore',
        iconName: 'Globe',
        name: { es: 'Empresas Globales & Nearshoring USA', en: 'Global Tech & US Nearshoring' },
        description: {
          es: 'Puestos de desarrollo remoto o híbrido para el mercado norteamericano.',
          en: 'Remote or hybrid engineering roles serving the North American tech ecosystem.',
        },
        commonJobRoles: {
          es: ['Senior Backend Engineer', 'Cloud Solutions Architect', 'Machine Learning Engineer', 'Engineering Manager'],
          en: ['Senior Backend Engineer', 'Cloud Solutions Architect', 'Machine Learning Engineer', 'Engineering Manager'],
        },
        estimatedDemandLevel: 'critical',
      },
    ],
    ranking: {
      nationalRankSalary: 1,
      nationalRankDemand: 1,
      employabilityRatePercent: 97,
      futureGrowthScorePercent: 99,
    },
    sources: [
      {
        name: 'IMCO — ComparaCarreras 2026',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://imco.org.mx/comparacarreras',
        type: 'statistical_labor',
      },
    ],
  },

  // ================= ESTADOS UNIDOS (us) =================
  {
    id: 'us-computer-science',
    countryId: 'us',
    slug: 'computer-software-engineering',
    category: 'software_tech',
    iconName: 'Code2',
    title: {
      es: 'Ingeniería de Software & Computación (USA)',
      en: 'Software & Computer Engineering',
    },
    shortDescription: {
      es: 'Desarrollo de sistemas distribuidos a gran escala, modelos fundacionales de IA, infraestructura cloud y sistemas operativos.',
      en: 'Large-scale distributed systems, foundation AI models, cloud infrastructure, and core operating systems.',
    },
    fullDescription: {
      es: 'La carrera insignia del sector tecnológico estadounidense. Forma ingenieros capaces de crear las plataformas digitales globales, algoritmos de aprendizaje profundo, procesadores avanzados y sistemas de computación cuántica.',
      en: 'The premier engineering degree in the US tech industry. Prepares students to build global cloud backends, frontier AI models, GPU acceleration architectures, and quantum computing frameworks.',
    },
    salary: {
      currencyCode: 'USD',
      currencySymbol: '$',
      entryLevelMonthly: 5800,
      averageMonthly: 9500,
      seniorMonthly: 16500,
      year: 2026,
      source: 'U.S. Bureau of Labor Statistics (BLS)',
      sourceUrl: 'https://www.bls.gov/ooh/computer-and-information-technology/software-developers.htm',
      hourlyOrAnnualNote: {
        es: 'Ingresos según experiencia: Entry-level ($70k/año), Mid-level ($114k/año) y Senior/Staff ($198k+/año en USD).',
        en: 'Earnings by experience: Entry-level ($70k/yr), Mid-level ($114k/yr), and Senior/Staff ($198k+/yr in USD).',
      },
    },
    academic: {
      level: { es: 'Bachelor of Science (B.S.)', en: 'Bachelor of Science (B.S.)' },
      durationYears: 4,
      totalSemesters: 8,
      degreeAwarded: {
        es: 'Bachelor of Science in Computer Engineering / Software Engineering',
        en: 'Bachelor of Science in Computer Engineering / Software Engineering',
      },
      professionalTitle: {
        es: 'Software Engineer / Computer Engineer (ABET Accredited)',
        en: 'Software Engineer / Computer Engineer (ABET Accredited)',
      },
      admissionRequirements: {
        es: ['Evaluación SAT/ACT, GPA escolar destacado y cartas de recomendación en STEM.'],
        en: ['SAT/ACT standardized testing, high school STEM GPA, and faculty recommendation letters.'],
      },
      graduationRequirements: {
        es: ['Completar 120 a 128 créditos semestrales y proyecto Senior Capstone Design.'],
        en: ['Completion of 120-128 credit hours and a year-long Senior Capstone Design project.'],
      },
    },
    curriculumAreas: [
      {
        id: 'us-cs-core',
        iconName: 'Binary',
        name: { es: 'Algoritmos & Sistemas Distribuidos', en: 'Algorithms & Distributed Systems' },
        subjects: {
          es: ['Data Structures & Complexity (Big-O)', 'Computer Systems & Architecture', 'Operating Systems Internals', 'Distributed Cloud Systems'],
          en: ['Data Structures & Complexity (Big-O)', 'Computer Systems & Architecture', 'Operating Systems Internals', 'Distributed Cloud Systems'],
        },
      },
      {
        id: 'us-cs-ai',
        iconName: 'Sparkles',
        name: { es: 'IA Generativa & Criptografía', en: 'Generative AI & Cryptography' },
        subjects: {
          es: ['Deep Learning & Neural Networks', 'Large Language Models (LLMs)', 'Applied Cryptography & Cybersecurity', 'Compiler Design'],
          en: ['Deep Learning & Neural Networks', 'Large Language Models (LLMs)', 'Applied Cryptography & Cybersecurity', 'Compiler Design'],
        },
      },
    ],
    workSectors: [
      {
        id: 'big-tech-us',
        iconName: 'Building2',
        name: { es: 'Big Tech, Silicon Valley & AI Labs', en: 'Big Tech, Silicon Valley & AI Labs' },
        description: {
          es: 'Empresas líderes: Google, Apple, Microsoft, NVIDIA, Meta, OpenAI y startups.',
          en: 'Leading employers: Google, Apple, Microsoft, NVIDIA, Meta, OpenAI, and high-growth AI startups.',
        },
        commonJobRoles: {
          es: ['Staff Software Engineer', 'AI Research Engineer', 'Systems Architect', 'Security Engineer'],
          en: ['Staff Software Engineer', 'AI Research Engineer', 'Systems Architect', 'Security Engineer'],
        },
        estimatedDemandLevel: 'critical',
      },
    ],
    ranking: {
      nationalRankSalary: 2,
      nationalRankDemand: 1,
      employabilityRatePercent: 97,
      futureGrowthScorePercent: 98,
    },
    sources: [
      {
        name: 'U.S. Bureau of Labor Statistics (BLS)',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.bls.gov/ooh/architecture-and-engineering/home.htm',
        type: 'government',
      },
    ],
  },
  {
    id: 'us-aerospace',
    countryId: 'us',
    slug: 'aerospace-engineering',
    category: 'mechanical_electrical',
    iconName: 'Rocket',
    title: {
      es: 'Ingeniería Aeroespacial & Defensa',
      en: 'Aerospace & Astronautical Engineering',
    },
    shortDescription: {
      es: 'Diseño de cohetes orbitales, satélites, propulsión hipersónica, drones autónomos y aeronaves comerciales.',
      en: 'Design of orbital rockets, satellites, hypersonic propulsion, autonomous UAVs, and commercial airliners.',
    },
    fullDescription: {
      es: 'Estados Unidos lidera la exploración espacial y la aviación militar/civil mundial. Esta disciplina forma ingenieros para misiones lunares Artemis, constelaciones satelitales Starlink y sistemas de defensa avanzada.',
      en: 'The United States leads global space exploration and aeronautics. This discipline prepares engineers for lunar Artemis missions, Starlink satellite constellations, and next-gen defense avionics.',
    },
    salary: {
      currencyCode: 'USD',
      currencySymbol: '$',
      entryLevelMonthly: 5600,
      averageMonthly: 9200,
      seniorMonthly: 15500,
      year: 2026,
      source: 'U.S. BLS & AIAA',
      sourceUrl: 'https://www.bls.gov/ooh/architecture-and-engineering/aerospace-engineers.htm',
      hourlyOrAnnualNote: {
        es: 'Rango por experiencia: inicial ($67k/año), promedio ($110k/año) y senior de propulsión ($186k+/año en USD).',
        en: 'Experience tiers: entry ($67k/yr), median ($110k/yr), and senior propulsion lead ($186k+/yr in USD).',
      },
    },
    academic: {
      level: { es: 'Bachelor of Science (B.S.)', en: 'Bachelor of Science (B.S.)' },
      durationYears: 4,
      totalSemesters: 8,
      degreeAwarded: {
        es: 'Bachelor of Science in Aerospace Engineering',
        en: 'Bachelor of Science in Aerospace Engineering',
      },
      professionalTitle: {
        es: 'Aerospace Engineer (ABET Accredited / PE Track)',
        en: 'Aerospace Engineer (ABET Accredited / PE Track)',
      },
      admissionRequirements: {
        es: ['Excelente rendimiento en cálculo avanzado, física newtoniana y química.'],
        en: ['Top scores in AP/IB Calculus BC, Newtonian Physics, and Chemistry.'],
      },
      graduationRequirements: {
        es: ['128 créditos académicos y diseño aeroespacial integrado con pruebas en túnel de viento.'],
        en: ['128 semester credits and comprehensive Capstone rocket/aircraft design with wind tunnel testing.'],
      },
    },
    curriculumAreas: [
      {
        id: 'us-aero-flight',
        iconName: 'Plane',
        name: { es: 'Aerodinámica & Propulsión', en: 'Aerodynamics & Propulsion' },
        subjects: {
          es: ['Fluid Dynamics & Compressible Flow', 'Rocket Propulsion & Turbomachinery', 'Orbital Mechanics & Astrodynamics', 'Aerospace Structures & Composite Materials'],
          en: ['Fluid Dynamics & Compressible Flow', 'Rocket Propulsion & Turbomachinery', 'Orbital Mechanics & Astrodynamics', 'Aerospace Structures & Composite Materials'],
        },
      },
    ],
    workSectors: [
      {
        id: 'space-defense-us',
        iconName: 'Globe',
        name: { es: 'Compañías Espaciales & Defensa', en: 'Commercial Space & Defense Contractors' },
        description: {
          es: 'SpaceX, NASA, Lockheed Martin, Northrop Grumman, Boeing y Blue Origin.',
          en: 'SpaceX, NASA, Lockheed Martin, Northrop Grumman, Boeing, and Blue Origin.',
        },
        commonJobRoles: {
          es: ['Propulsion Engineer', 'Guidance, Navigation & Control (GNC) Engineer', 'Structural Flight Test Engineer'],
          en: ['Propulsion Engineer', 'Guidance, Navigation & Control (GNC) Engineer', 'Structural Flight Test Engineer'],
        },
        estimatedDemandLevel: 'very_high',
      },
    ],
    ranking: {
      nationalRankSalary: 3,
      nationalRankDemand: 3,
      employabilityRatePercent: 94,
      futureGrowthScorePercent: 92,
    },
    sources: [
      {
        name: 'U.S. Bureau of Labor Statistics (BLS)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.bls.gov',
        type: 'government',
      },
    ],
  },

  // ================= ESPAÑA (es) =================
  {
    id: 'es-teleco',
    countryId: 'es',
    slug: 'ingenieria-de-telecomunicacion',
    category: 'software_tech',
    iconName: 'Radio',
    title: {
      es: 'Ingeniería de Telecomunicación',
      en: 'Telecommunications Engineering',
    },
    shortDescription: {
      es: 'Redes 5G/6G, procesamiento de señal e imágenes, ciberseguridad europea, IoT satelital y fotónica.',
      en: '5G/6G cellular networks, signal & image processing, European cybersecurity, satellite IoT, and photonics.',
    },
    fullDescription: {
      es: 'Una de las carreras de mayor prestigio y exigencia académica en España. Habilita para el ejercicio de la profesión regulada de Ingeniero de Telecomunicación en toda la Unión Europea.',
      en: 'One of the most prestigious and challenging engineering degrees in Spain. Qualifies graduates for the chartered regulated profession of Telecommunications Engineer across the European Union.',
    },
    salary: {
      currencyCode: 'EUR',
      currencySymbol: '€',
      entryLevelMonthly: 1900,
      averageMonthly: 3400,
      seniorMonthly: 6800,
      year: 2026,
      source: 'Colegio Oficial de Ingenieros de Telecomunicación (COIT) & SEPE',
      sourceUrl: 'https://www.coit.es',
      hourlyOrAnnualNote: {
        es: 'Salario bruto mensual en 14 pagas: junior inicial (1.900€), consolidado (3.400€) y arquitecto/senior (6.800€+).',
        en: 'Gross monthly salary (14 payments): junior entry (€1,900), experienced (€3,400), and lead architect (€6,800+).',
      },
    },
    academic: {
      level: { es: 'Grado Universitario + Máster Habilitante', en: 'Bologna Bachelor + Qualifying Master' },
      durationYears: 5,
      totalSemesters: 10,
      degreeAwarded: {
        es: 'Grado en Tecnologías de Telecomunicación + Máster Universitario en Ingeniería de Telecomunicación',
        en: 'Bachelor in Telecom Tech (240 ECTS) + Qualifying Master in Telecom Engineering (120 ECTS)',
      },
      professionalTitle: {
        es: 'Ingeniero de Telecomunicación (Colegiado COIT con firma oficial)',
        en: 'Chartered Telecommunications Engineer (COIT Licensed)',
      },
      admissionRequirements: {
        es: ['Alta nota de corte en la EBAU/PAU en Matemáticas II y Física.'],
        en: ['High EBAU/PAU university entrance cutoff score in Advanced Mathematics and Physics.'],
      },
      graduationRequirements: {
        es: ['Superación de 240 créditos ECTS de Grado + 120 créditos ECTS de Máster con Trabajo de Fin de Máster (TFM).'],
        en: ['Completion of 240 ECTS credits (Bachelor) + 120 ECTS (Master) and defense of Master’s Capstone Thesis (TFM).'],
      },
    },
    curriculumAreas: [
      {
        id: 'telecom-rf',
        iconName: 'Wifi',
        name: { es: 'Radiocomunicación & Redes Móviles', en: 'RF & Mobile Networks' },
        subjects: {
          es: ['Campos Electromagnéticos y Antenas', 'Comunicaciones Móviles 5G/6G y Satelitales', 'Teoría de la Información y Codificación', 'Comunicaciones Ópticas y Fotónica'],
          en: ['Electromagnetic Fields & Antennas', '5G/6G & Satellite Mobile Communications', 'Information Theory & Channel Coding', 'Optical Communications & Photonics'],
        },
      },
      {
        id: 'telecom-cyber',
        iconName: 'ShieldCheck',
        name: { es: 'Ciberseguridad, IA & Procesamiento', en: 'Cybersecurity, AI & Signal Processing' },
        subjects: {
          es: ['Tratamiento Digital de la Señal (Audio/Video)', 'Criptografía y Seguridad en Redes', 'Inteligencia Artificial Aplicada a Datos', 'Arquitectura Telemática y Protocolos'],
          en: ['Digital Signal Processing (Audio/Video)', 'Cryptography & Network Security', 'Applied AI & Big Data in Networks', 'Telematic Architecture & Protocols'],
        },
      },
    ],
    workSectors: [
      {
        id: 'telecom-companies-es',
        iconName: 'Globe2',
        name: { es: 'Operadores, Defensa & Consultoras Tech', en: 'Telecom Operators, Defense & High-Tech' },
        description: {
          es: 'Telefónica, Indra, Vodafone, Ericsson, Hispasat, ESA (Agencia Espacial Europea) y centros de ciberseguridad INCIBE.',
          en: 'Telefónica, Indra, Vodafone, Ericsson, Hispasat, ESA (European Space Agency), and INCIBE Cyber Hub.',
        },
        commonJobRoles: {
          es: ['Ingeniero de Redes y 5G', 'Arquitecto de Ciberseguridad', 'Ingeniero de Sistemas Espaciales', 'Lead Data Scientist'],
          en: ['5G Network Engineer', 'Cybersecurity Architect', 'Space Systems Engineer', 'Lead Data Scientist'],
        },
        estimatedDemandLevel: 'critical',
      },
    ],
    ranking: {
      nationalRankSalary: 2,
      nationalRankDemand: 1,
      employabilityRatePercent: 97,
      futureGrowthScorePercent: 96,
    },
    sources: [
      {
        name: 'Colegio Oficial de Ingenieros de Telecomunicación (COIT)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.coit.es',
        type: 'professional_college',
      },
      {
        name: 'Instituto Nacional de Estadística (INE España)',
        year: '2026',
        updatedAt: 'Enero 2026',
        url: 'https://www.ine.es',
        type: 'statistical_labor',
      },
    ],
  },
  {
    id: 'es-caminos',
    countryId: 'es',
    slug: 'ingenieria-de-caminos-canales-y-puertos',
    category: 'infrastructure_civil',
    iconName: 'Building2',
    title: {
      es: 'Ingeniería de Caminos, Canales y Puertos (Civil)',
      en: 'Civil & Structural Engineering (Caminos)',
    },
    shortDescription: {
      es: 'Megainfraestructuras, trenes de alta velocidad (AVE), presas, puertos marítimos y túneles internacionales.',
      en: 'Mega-infrastructure, high-speed rail networks (AVE), hydraulic dams, sea ports, and transcontinental tunnels.',
    },
    fullDescription: {
      es: 'Las constructoras españolas lideran las concesiones mundiales de infraestructuras. Esta carrera histórica prepara a ingenieros para diseñar y gestionar los proyectos de obra civil más ambiciosos del planeta.',
      en: 'Spanish infrastructure contractors lead global concession leagues. This prestigious discipline equips engineers to design and oversee the planet’s most ambitious high-speed rail, bridge, and port projects.',
    },
    salary: {
      currencyCode: 'EUR',
      currencySymbol: '€',
      entryLevelMonthly: 1850,
      averageMonthly: 3300,
      seniorMonthly: 6900,
      year: 2026,
      source: 'Colegio de Ingenieros de Caminos, Canales y Puertos (CICCP)',
      sourceUrl: 'https://www.ciccp.es',
      hourlyOrAnnualNote: {
        es: 'Salario por experiencia en obra: asistente (1.850€), jefe de obra medio (3.300€) y director de megaproyectos (6.900€+).',
        en: 'Compensation by experience: site assistant (€1,850), project manager (€3,300), and director (€6,900+).',
      },
    },
    academic: {
      level: { es: 'Grado + Máster Habilitante (Plan Bolonia)', en: 'Bologna Bachelor + Qualifying Master' },
      durationYears: 5.5,
      totalSemesters: 11,
      degreeAwarded: {
        es: 'Grado en Ingeniería Civil + Máster en Ingeniería de Caminos, Canales y Puertos',
        en: 'Bachelor in Civil Engineering (240 ECTS) + Master in Caminos (120 ECTS)',
      },
      professionalTitle: {
        es: 'Ingeniero de Caminos, Canales y Puertos (Colegiado CICCP)',
        en: 'Chartered Civil Infrastructure Engineer (CICCP Licensed)',
      },
      admissionRequirements: {
        es: ['Fuerte preparación en cálculo infinitesimal, física teórica y dibujo técnico.'],
        en: ['Strong foundation in multivariable calculus, theoretical physics, and technical drafting.'],
      },
      graduationRequirements: {
        es: ['Defensa de Tesis de Fin de Máster y prácticas de obra civil.'],
        en: ['Master’s Capstone Thesis defense and on-site engineering practicum.'],
      },
    },
    curriculumAreas: [
      {
        id: 'caminos-infra',
        iconName: 'Hammer',
        name: { es: 'Estructuras, Túneles & Puertos', en: 'Structures, Tunnels & Maritime' },
        subjects: {
          es: ['Puentes y Estructuras Singulares', 'Obras Subterráneas y Túneles', 'Ingeniería de Puertos y Costas', 'Presas y Aprovechamientos Hidroeléctricos'],
          en: ['Bridges & Complex Structures', 'Underground Works & Tunneling', 'Port & Coastal Engineering', 'Hydraulic Dams & Hydroelectric Plants'],
        },
      },
    ],
    workSectors: [
      {
        id: 'caminos-global',
        iconName: 'Building',
        name: { es: 'Grandes Multinacionales de Construcción', en: 'Global Infrastructure Groups' },
        description: {
          es: 'ACS, Ferrovial, Acciona, Sacyr, FCC y consultoras internacionales (Ineco, Typsa).',
          en: 'ACS, Ferrovial, Acciona, Sacyr, FCC, and global design consultancies (Ineco, Typsa).',
        },
        commonJobRoles: {
          es: ['Jefe de Obra de Megaproyectos', 'Director de Estructuras', 'Project Manager Internacional'],
          en: ['Mega-project Site Director', 'Head Structural Designer', 'International Project Director'],
        },
        estimatedDemandLevel: 'very_high',
      },
    ],
    ranking: {
      nationalRankSalary: 3,
      nationalRankDemand: 3,
      employabilityRatePercent: 92,
      futureGrowthScorePercent: 90,
    },
    sources: [
      {
        name: 'Colegio de Ingenieros de Caminos, Canales y Puertos (CICCP)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.ciccp.es',
        type: 'professional_college',
      },
    ],
  },
  {
    id: 'es-renovables',
    countryId: 'es',
    slug: 'ingenieria-de-la-energia-y-renovables',
    category: 'earth_energy',
    iconName: 'SunMedium',
    title: {
      es: 'Ingeniería de la Energía y Renovables',
      en: 'Energy & Renewable Systems Engineering',
    },
    shortDescription: {
      es: 'Parques eólicos marinos (offshore), plantas fotovoltaicas, hidrógeno verde, almacenamiento con baterías y red eléctrica inteligente.',
      en: 'Offshore wind farms, utility solar PV, green hydrogen, battery energy storage systems (BESS), and smart grids.',
    },
    fullDescription: {
      es: 'España es líder europeo en transición energética y generación renovable. Esta ingeniería forma especialistas en diseño de parques eólicos, huertos solares, electrólisis de hidrógeno verde y mercados eléctricos mayoristas.',
      en: 'Spain is a European frontrunner in renewable power and energy transition. This field produces engineers designing utility-scale wind farms, solar PV arrays, green hydrogen electrolysis, and smart grid trading.',
    },
    salary: {
      currencyCode: 'EUR',
      currencySymbol: '€',
      entryLevelMonthly: 1900,
      averageMonthly: 3250,
      seniorMonthly: 6500,
      year: 2026,
      source: 'Asociación de Empresas de Energías Renovables (APPA) & SEPE',
      sourceUrl: 'https://www.appa.es',
      hourlyOrAnnualNote: {
        es: 'Salario según experiencia: junior en planta (1.900€), ingeniero de proyectos (3.250€) y responsable técnico (6.500€+).',
        en: 'Salary by experience: junior plant tech (€1,900), project engineer (€3,250), and director (€6,500+).',
      },
    },
    academic: {
      level: { es: 'Grado Universitario (4 años / 240 ECTS)', en: 'University Bachelor (4 years / 240 ECTS)' },
      durationYears: 4,
      totalSemesters: 8,
      degreeAwarded: {
        es: 'Grado en Ingeniería de la Energía',
        en: 'Bachelor of Science in Energy Engineering',
      },
      professionalTitle: {
        es: 'Ingeniero de la Energía',
        en: 'Energy Systems Engineer',
      },
      admissionRequirements: {
        es: ['EBAU con énfasis en física, termodinámica y matemáticas avanzadas.'],
        en: ['EBAU with emphasis in physics, thermodynamics, and calculus.'],
      },
      graduationRequirements: {
        es: ['240 créditos ECTS y Trabajo de Fin de Grado (TFG) en modelado de parque renovable o microrred.'],
        en: ['240 ECTS credits and Bachelor Thesis in renewable farm modeling or microgrid design.'],
      },
    },
    curriculumAreas: [
      {
        id: 'es-energy-solar-wind',
        iconName: 'Wind',
        name: { es: 'Eólica, Solar & Almacenamiento', en: 'Solar, Wind & Battery Storage' },
        subjects: {
          es: ['Energía Solar Fotovoltaica y Termosolar', 'Aerogeneradores y Parques Eólicos Offshore', 'Sistemas de Almacenamiento y Baterías de Litio/Sodio', 'Redes Eléctricas Inteligentes (Smart Grids)'],
          en: ['Solar PV & Solar Thermal Power', 'Wind Turbines & Offshore Wind Farms', 'Battery Energy Storage Systems (BESS)', 'Smart Electrical Grids & Power Flow'],
        },
      },
    ],
    workSectors: [
      {
        id: 'renewables-energy-es',
        iconName: 'Zap',
        name: { es: 'Gigantes Energéticos & Desarrolladores', en: 'Renewable Energy Utilities & IPPs' },
        description: {
          es: 'Iberdrola, Endesa, Repsol Renovables, EDP, Naturgy y fabricantes de aerogeneradores.',
          en: 'Iberdrola, Endesa, Repsol, EDP, Naturgy, and wind turbine manufacturers.',
        },
        commonJobRoles: {
          es: ['Ingeniero de Desarrollo y Proyectos Renovables', 'Director de Parque Eólico / Solar', 'Especialista en Hidrógeno Verde'],
          en: ['Renewable Project Development Engineer', 'Wind / Solar Plant Manager', 'Green Hydrogen Specialist'],
        },
        estimatedDemandLevel: 'very_high',
      },
    ],
    ranking: {
      nationalRankSalary: 4,
      nationalRankDemand: 2,
      employabilityRatePercent: 95,
      futureGrowthScorePercent: 98,
    },
    sources: [
      {
        name: 'Asociación de Empresas de Energías Renovables (APPA)',
        year: '2026',
        updatedAt: 'Febrero 2026',
        url: 'https://www.appa.es',
        type: 'statistical_labor',
      },
    ],
  },
];

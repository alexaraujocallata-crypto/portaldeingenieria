import { COUNTRIES } from './countries';
import { ENGINEERING_CAREERS } from './engineers';
import { EngineeringCareer, RankingSortCriteria, AcademicStructure, SubjectArea, WorkSector, SourceInfo } from '../types';

interface CountryAcademicTemplate {
  level: { es: string; en: string };
  durationYears: number;
  totalSemesters: number;
  creditsOrHours: { es: string; en: string };
  degreePrefix: { es: string; en: string };
  titlePrefix: { es: string; en: string };
  admissionRequirements: { es: string[]; en: string[] };
  graduationRequirements: { es: string[]; en: string[] };
  professionalCouncil: string;
}

const COUNTRY_ACADEMIC_PROFILES: Record<string, CountryAcademicTemplate> = {
  pe: {
    level: {
      es: 'Pregrado Universitario (Ley 30220 / Sunedu)',
      en: 'Undergraduate University Degree (Sunedu Accredited)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '200 a 220 créditos académicos', en: '200 to 220 academic credits' },
    degreePrefix: { es: 'Bachiller en Ciencias de la', en: 'Bachelor of Science in' },
    titlePrefix: { es: 'Ingeniero Colegiado en el Colegio de Ingenieros del Perú (CIP)', en: 'Chartered Engineer (CIP Licensed)' },
    admissionRequirements: {
      es: [
        'Examen de admisión universitario con alta ponderación en matemáticas y física.',
        'Aptitud para el razonamiento lógico, analítico y modelado de sistemas.',
        'Sólida vocación científica y resolución de problemas técnicos.',
      ],
      en: [
        'University entrance exam with strong emphasis in mathematics and physics.',
        'Logical reasoning aptitude and analytical systems modeling.',
        'Scientific vocation and complex technical problem-solving skills.',
      ],
    },
    graduationRequirements: {
      es: [
        'Aprobación del 100% de créditos académicos del plan de estudios (10 semestres).',
        'Sustentación de tesis o trabajo de investigación de suficiencia profesional.',
        'Acreditación de idioma extranjero (mínimo Inglés nivel B2) y prácticas preprofesionales.',
      ],
      en: [
        'Completion of 100% statutory curriculum credits (10 semesters).',
        'Defense of research thesis or professional sufficiency capstone project.',
        'Foreign language proficiency certification (English B2 minimum) and internships.',
      ],
    },
    professionalCouncil: 'Colegio de Ingenieros del Perú (CIP)',
  },
  cl: {
    level: {
      es: 'Plan de Formación en Ciencias de la Ingeniería (CRUCH / CNA)',
      en: 'Engineering Science Degree Program (CRUCH / CNA Accredited)',
    },
    durationYears: 5.5,
    totalSemesters: 11,
    creditsOrHours: { es: '300 a 330 créditos SCT-Chile', en: '300 to 330 SCT-Chile credits' },
    degreePrefix: { es: 'Licenciado en Ciencias de la Ingeniería + Título de', en: 'B.S. in Engineering + Professional Title in' },
    titlePrefix: { es: 'Ingeniero Civil Profesional (Colegio de Ingenieros de Chile)', en: 'Professional Civil Engineer (College of Engineers of Chile)' },
    admissionRequirements: {
      es: [
        'Prueba de Acceso a la Educación Superior (PAES) con alta puntuación en Matemática M1/M2 y Ciencias.',
        'Rendimiento académico destacado en NEM (Notas de Enseñanza Media) y Ranking escolar.',
      ],
      en: [
        'PAES university admissions test with top scores in M1/M2 Mathematics and Sciences.',
        'High secondary school GPA (NEM) and national cohort percentile ranking.',
      ],
    },
    graduationRequirements: {
      es: [
        'Obtención de Licenciatura (4 años / 8 semestres) y continuación de ciclo profesional.',
        'Práctica profesional supervisada I y II en empresas u obras activas.',
        'Memoria de Título con defensa pública de investigación aplicada de ingeniería.',
      ],
      en: [
        'Attainment of Licentiate degree (4 years) followed by professional specialization cycle.',
        'Supervised professional practicums I & II in active corporations or sites.',
        'Capstone Engineering Defense Thesis on applied technical innovation.',
      ],
    },
    professionalCouncil: 'Colegio de Ingenieros de Chile A.G.',
  },
  co: {
    level: {
      es: 'Pregrado Universitario Profesional (SNIES / MinEducación)',
      en: 'University Professional Degree (SNIES / MinEducación)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '160 a 175 créditos académicos', en: '160 to 175 academic credits' },
    degreePrefix: { es: 'Título Profesional Universitario de', en: 'Professional University Degree in' },
    titlePrefix: { es: 'Ingeniero con Tarjeta Profesional expedida por COPNIA / CPNAA', en: 'Licensed Engineer with COPNIA / CPNAA Professional Card' },
    admissionRequirements: {
      es: [
        'Examen de Estado de la Educación Media (Prueba Saber 11 / ICFES) con percentiles superiores en matemáticas y ciencias.',
        'Entrevista y evaluación de competencias cuantitativas en la institución universitaria.',
      ],
      en: [
        'National Saber 11 (ICFES) high school exit exam with top percentiles in quantitative reasoning.',
        'University admissions interview and quantitative problem-solving screening.',
      ],
    },
    graduationRequirements: {
      es: [
        'Aprobación completa de la malla curricular reglamentada en créditos.',
        'Presentación del Examen de Estado de Calidad de la Educación Superior (Saber Pro).',
        'Opción de grado: Tesis investigativa, pasantía empresarial o cursos de posgrado.',
      ],
      en: [
        'Full completion of accredited curricular credits.',
        'Completion of the national higher education quality exit exam (Saber Pro).',
        'Degree option: Research thesis, enterprise internship, or graduate coursework.',
      ],
    },
    professionalCouncil: 'Consejo Profesional Nacional de Ingeniería (COPNIA)',
  },
  mx: {
    level: {
      es: 'Nivel Superior - Licenciatura en Ingeniería (SEP / CACEI)',
      en: 'Higher Education - Bachelor of Engineering (SEP / CACEI)',
    },
    durationYears: 4.5,
    totalSemesters: 9,
    creditsOrHours: { es: '300 a 450 créditos SATCA', en: '300 to 450 SATCA credits' },
    degreePrefix: { es: 'Título de Licenciatura en', en: 'Bachelor of Science Degree in' },
    titlePrefix: { es: 'Ingeniero con Cédula Profesional Federal (Dirección General de Profesiones SEP)', en: 'Chartered Engineer with SEP Federal Professional License' },
    admissionRequirements: {
      es: [
        'Examen Nacional de Ingreso a la Educación Superior (EXANI-II CENEVAL) o examen institucional (UNAM/IPN/ITESM).',
        'Certificado de bachillerato con promedio aprobatorio y especialidad físico-matemática.',
      ],
      en: [
        'National Higher Education Admissions Exam (EXANI-II CENEVAL) or institutional exam.',
        'High school diploma with Physics-Math specialization background.',
      ],
    },
    graduationRequirements: {
      es: [
        'Aprobación del 100% de asignaturas y créditos del plan de estudios.',
        'Servicio Social Constitucional obligatorio (mínimo 480 horas en beneficio comunitario/público).',
        'Titulación mediante Examen General para el Egreso de la Licenciatura (EGEL CENEVAL) o Tesis.',
      ],
      en: [
        '100% coursework completion across all semesters.',
        'Mandatory Constitutional Social Service (minimum 480 public interest hours).',
        'National Licensure Exam (EGEL CENEVAL) or Capstone Thesis defense.',
      ],
    },
    professionalCouncil: 'Dirección General de Profesiones (Secretaría de Educación Pública)',
  },
  ar: {
    level: {
      es: 'Carrera de Grado Universitario de Interés Público (Art. 43 LES / CONEAU)',
      en: 'University Degree of Public Interest (Art. 43 Higher Ed Law / CONEAU)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '3.600 a 4.000 horas reloj de cátedra', en: '3,600 to 4,000 direct instructional clock hours' },
    degreePrefix: { es: 'Título de Grado de', en: 'University Degree of' },
    titlePrefix: { es: 'Ingeniero con Matrícula Profesional Habilitante (CPII / COPITEC / CPIC)', en: 'Chartered Engineer with CPII / COPITEC / CPIC Professional License' },
    admissionRequirements: {
      es: [
        'Ciclo Básico Común (CBC) o curso de articulación y nivelación en matemáticas, física y química.',
        'Título de nivel secundario o polimodal debidamente legalizado.',
      ],
      en: [
        'Common Basic Cycle (CBC) or university foundation module in math, physics, and chemistry.',
        'Legalized high school diploma credential.',
      ],
    },
    graduationRequirements: {
      es: [
        'Cumplimiento de la carga horaria estipulada por los estándares CONEAU.',
        'Práctica Profesional Supervisada (PPS) de 200 horas mínimas en entornos industriales.',
        'Defensa pública de Proyecto Final Integrador de Ingeniería.',
      ],
      en: [
        'Fulfillment of the full CONEAU national engineering curriculum standards.',
        'Supervised Professional Practicum (PPS) of at least 200 hours in industry.',
        'Public defense of an Integrative Engineering Capstone Project.',
      ],
    },
    professionalCouncil: 'Consejo Profesional de Ingeniería (CPII / COPITEC / CPIC)',
  },
  cr: {
    level: {
      es: 'Educación Superior Universitaria (SINAES / CONESUP)',
      en: 'Higher University Education (SINAES / CONESUP Accredited)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '160 a 180 créditos universitarios', en: '160 to 180 university credits' },
    degreePrefix: { es: 'Licenciatura en', en: 'Licentiate / Bachelor in' },
    titlePrefix: { es: 'Ingeniero Incorporado al Colegio Federado de Ingenieros y de Arquitectos (CFIA)', en: 'Chartered Engineer incorporated in the CFIA' },
    admissionRequirements: {
      es: [
        'Prueba de Aptitud Académica (PAA) de las universidades públicas (UCR / TEC) o bachillerato nacional.',
        'Aptitud comprobada en cálculo diferencial y ciencias exactas.',
      ],
      en: [
        'Academic Aptitude Test (PAA) from public universities (UCR / TEC) or national diploma.',
        'Demonstrated competence in differential calculus and exact sciences.',
      ],
    },
    graduationRequirements: {
      es: [
        'Aprobación de los bloques de Bachillerato Universitario y ciclo de Licenciatura.',
        'Trabajo Final de Graduación (TFG): Tesis, Proyecto de Graduación o Práctica Dirigida.',
        'Cumplimiento de las 300 horas reglamentarias de Trabajo Comunal Universitario (TCU).',
      ],
      en: [
        'Completion of Bachelor coursework and advanced Licentiate cycle.',
        'Graduation Capstone (TFG): Research thesis, engineering project, or directed practicum.',
        'Completion of 300 hours of mandatory University Community Service (TCU).',
      ],
    },
    professionalCouncil: 'Colegio Federado de Ingenieros y de Arquitectos de Costa Rica (CFIA)',
  },
  pa: {
    level: {
      es: 'Educación Superior Universitaria (CONEAUPA / UTP)',
      en: 'Higher University Education (CONEAUPA / UTP Accredited)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '190 a 220 créditos académicos', en: '190 to 220 academic credits' },
    degreePrefix: { es: 'Licenciatura en', en: 'Bachelor of Science in' },
    titlePrefix: { es: 'Ingeniero Idóneo con Certificación de la Junta Técnica de Ingeniería y Arquitectura (JTIA)', en: 'Chartered Engineer certified by the JTIA Board' },
    admissionRequirements: {
      es: [
        'Prueba de Aptitud Académica (PAA College Board) y pruebas de conocimientos en física y matemáticas.',
        'Diploma de educación media en ciencias o bachillerato técnico.',
      ],
      en: [
        'College Board PAA test and technical physics and math placement screening.',
        'High school diploma in sciences or technical track.',
      ],
    },
    graduationRequirements: {
      es: [
        'Superación de todos los cursos y laboratorios del plan de estudios de 5 años.',
        'Opción de graduación: Tesis de grado, práctica profesional de 6 meses o cursos de posgrado.',
        'Certificación de suficiencia en idioma inglés.',
      ],
      en: [
        'Completion of all 5-year coursework and engineering laboratories.',
        'Graduation option: Senior thesis, 6-month industry internship, or graduate credits.',
        'English language proficiency certification.',
      ],
    },
    professionalCouncil: 'Junta Técnica de Ingeniería y Arquitectura de Panamá (JTIA)',
  },
  us: {
    level: {
      es: 'Undergraduate Degree - Bachelor of Science (ABET-EAC Accredited)',
      en: 'Undergraduate Degree - Bachelor of Science (ABET-EAC Accredited)',
    },
    durationYears: 4,
    totalSemesters: 8,
    creditsOrHours: { es: '120 a 128 semester credit hours', en: '120 to 128 semester credit hours' },
    degreePrefix: { es: 'Bachelor of Science in', en: 'Bachelor of Science in' },
    titlePrefix: { es: 'Professional Engineer (PE License / NCEES FE Track)', en: 'Professional Engineer (PE License / NCEES FE Track)' },
    admissionRequirements: {
      es: [
        'High school diploma con GPA competitivo, cartas de recomendación y ensayo personal.',
        'Exámenes estandarizados SAT / ACT y cursos avanzados AP/IB Calculus y Physics.',
      ],
      en: [
        'High school diploma with competitive GPA, recommendation letters, and personal statement.',
        'Standardized SAT / ACT scores and AP/IB Calculus and Physics coursework.',
      ],
    },
    graduationRequirements: {
      es: [
        'Aprobación de 120-128 créditos con promedio mínimo GPA en asignaturas mayores.',
        'Senior Capstone Design Project de dos semestres con prototipo funcional y defensa ante panel industrial.',
        'Aprobación del examen Fundamentals of Engineering (FE) administrado por NCEES.',
      ],
      en: [
        'Completion of 120-128 semester credits with minimum major GPA requirements.',
        'Two-semester Senior Capstone Design Project with industry panel evaluation.',
        'Passing score on the Fundamentals of Engineering (FE) exam via NCEES.',
      ],
    },
    professionalCouncil: 'National Council of Examiners for Engineering and Surveying (NCEES / State PE Board)',
  },
  ca: {
    level: {
      es: 'Undergraduate Engineering Program (CEAB Accredited / Engineers Canada)',
      en: 'Undergraduate Engineering Program (CEAB Accredited / Engineers Canada)',
    },
    durationYears: 4,
    totalSemesters: 8,
    creditsOrHours: { es: '140 a 150 credit units / 8 academic terms', en: '140 to 150 credit units / 8 academic terms' },
    degreePrefix: { es: 'Bachelor of Applied Science (B.A.Sc.) / B.Eng. in', en: 'Bachelor of Applied Science (B.A.Sc.) / B.Eng. in' },
    titlePrefix: { es: 'Professional Engineer (P.Eng. License / Iron Ring Holder)', en: 'Professional Engineer (P.Eng. License / Iron Ring Holder)' },
    admissionRequirements: {
      es: [
        'Grade 12 graduation con honores en Calculus, Advanced Functions, Chemistry y Physics.',
        'Evaluación complementaria con video-entrevista y resolución de problemas bajo tiempo.',
      ],
      en: [
        'Grade 12 diploma with top prerequisites in Calculus, Advanced Functions, Chemistry & Physics.',
        'Supplementary application with timed video interviews and written problem solving.',
      ],
    },
    graduationRequirements: {
      es: [
        'Completar el plan CEAB de 4 años (o 5 años con esquema Co-op de prácticas remuneradas).',
        'Culminación del Senior Engineering Design Project y Ceremonia del Anillo de Hierro (Iron Ring).',
        'Registro como Engineer-in-Training (EIT) previo a los 4 años de experiencia para P.Eng.',
      ],
      en: [
        'Completion of 4-year CEAB curriculum (or 5-year Co-op work-study structure).',
        'Successful Senior Capstone Design Project and Ritual of the Calling of an Engineer (Iron Ring).',
        'Enrollment as Engineer-in-Training (EIT) leading to provincial P.Eng. licensure.',
      ],
    },
    professionalCouncil: 'Engineers Canada / Provincial Regulators (PEO, EGBC, APEGA, OIQ)',
  },
  es: {
    level: {
      es: 'Espacio Europeo de Educación Superior - Grado + Máster Habilitante (Plan Bolonia / ANECA)',
      en: 'European Higher Education Area - Bachelor + Qualifying Master (Bologna / ANECA)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '240 ECTS de Grado + 90 a 120 ECTS de Máster', en: '240 ECTS Bachelor + 90 to 120 ECTS Master' },
    degreePrefix: { es: 'Grado en Ingeniería + Máster Universitario en', en: 'Bachelor in Engineering + Master in' },
    titlePrefix: { es: 'Ingeniero Colegiado Oficial con Atribuciones Profesionales Plenas (COIT, CICCP, COII)', en: 'Chartered Professional Engineer (COIT, CICCP, COII Licensed)' },
    admissionRequirements: {
      es: [
        'Prueba de Acceso a la Universidad (PAU / EBAU) con nota de corte competitiva.',
        'Fase específica de selectividad con máxima ponderación (0.2) en Matemáticas II y Física.',
      ],
      en: [
        'University Entrance Examination (PAU / EBAU) with competitive cutoff grade.',
        'Advanced phase testing with maximum coefficient (0.2) in Advanced Math and Physics.',
      ],
    },
    graduationRequirements: {
      es: [
        'Superación de los 240 créditos ECTS del Grado con defensa del Trabajo de Fin de Grado (TFG).',
        'Cursado del Máster Universitario Oficial habilitante para la profesión regulada.',
        'Superación del Trabajo de Fin de Máster (TFM) y prácticas curriculares en empresa.',
      ],
      en: [
        'Completion of 240 ECTS Bachelor with Bachelor Thesis (TFG) public defense.',
        'Enrollment in the officially accredited Qualifying Master degree program.',
        'Master’s Thesis (TFM) defense and industry internship placement.',
      ],
    },
    professionalCouncil: 'Consejo General de Colegios Oficiales de la Ingeniería de España',
  },
  de: {
    level: {
      es: 'Hochschulstudium / Bolognaprozess (Akkreditierungsrat / ASIIN)',
      en: 'Higher University Education / Bologna Process (ASIIN Accredited)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '180-210 ECTS (Bachelor) + 90-120 ECTS (Master)', en: '180-210 ECTS (Bachelor) + 90-120 ECTS (Master)' },
    degreePrefix: { es: 'Bachelor of Science (B.Sc.) & Master of Science (M.Sc.) in', en: 'B.Sc. & M.Sc. in' },
    titlePrefix: { es: 'Gesetzlich geschützte Berufsbezeichnung "Ingenieur" (Ingenieurkammer)', en: 'Legally Protected Title "Ingenieur" (Chamber of Engineers Registered)' },
    admissionRequirements: {
      es: [
        'Allgemeine Hochschulreife (Abitur) o Fachhochschulreife con altas notas en matemáticas y ciencias.',
        'En universidades técnicas (TU9), prueba de aptitud o curso preparatorio en cálculo avanzado.',
      ],
      en: [
        'Allgemeine Hochschulreife (Abitur) with advanced grades in mathematics and physics.',
        'For Technical Universities (TU9), aptitude screening and advanced calculus foundation.',
      ],
    },
    graduationRequirements: {
      es: [
        'Superación de módulos teóricos y de laboratorio en sistema ECTS.',
        'Semestre obligatorio de prácticas en la industria alemana (Praxissemester / Fachpraktikum).',
        'Elaboración y defensa de la Bachelorarbeit y posterior Masterarbeit en vinculación industrial.',
      ],
      en: [
        'Full mastery of theoretical and laboratory modules under ECTS grading.',
        'Mandatory industrial practicum semester (Fachpraktikum) at a German engineering firm.',
        'Preparation and defense of Bachelorarbeit and Masterarbeit with industrial research partner.',
      ],
    },
    professionalCouncil: 'Bundesingenieurkammer (Chamber of Professional Engineers Germany)',
  },
  ec: {
    level: {
      es: 'Tercer Nivel de Grado - Ingeniería (CACES / Senescyt)',
      en: 'Higher Degree - Engineering (CACES / Senescyt)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '180 a 200 créditos académicos', en: '180 to 200 academic credits' },
    degreePrefix: { es: 'Título Profesional de Grado en', en: 'Professional Degree in' },
    titlePrefix: { es: 'Ingeniero Registrado en Senescyt y Colegio de Ingenieros del Ecuador', en: 'Chartered Engineer registered with Senescyt and CIDE' },
    admissionRequirements: {
      es: [
        'Evaluación de competencias académicas de educación superior y bachillerato general unificado.',
        'Puntaje de postulación en áreas cuantitativas, física y razonamiento lógico.',
      ],
      en: [
        'Higher education academic competencies assessment and unified high school diploma.',
        'Competitive admission score in quantitative areas, physics, and logical reasoning.',
      ],
    },
    graduationRequirements: {
      es: [
        'Aprobación de la totalidad de horas pedagógicas y créditos de la malla curricular.',
        'Desarrollo y defensa del Trabajo de Titulación o aprobación del Examen Complexivo.',
        '240 horas reglamentarias de prácticas preprofesionales y vinculación comunitaria.',
      ],
      en: [
        'Completion of all statutory curriculum hours and academic credits.',
        'Defense of Degree Capstone Project or passing the National Complexive Examination.',
        '240 hours of pre-professional internships and community outreach programs.',
      ],
    },
    professionalCouncil: 'Colegio de Ingenieros del Ecuador (CIDE) / Senescyt',
  },
  bo: {
    level: {
      es: 'Grado Académico de Licenciatura en Ingeniería (CEUB)',
      en: 'Academic Licentiate in Engineering Degree (CEUB Accredited)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '4.500 a 5.000 horas académicas', en: '4,500 to 5,000 academic hours' },
    degreePrefix: { es: 'Licenciatura en', en: 'Licentiate in' },
    titlePrefix: { es: 'Ingeniero con Título en Provisión Nacional y Registro SIB', en: 'Chartered Engineer with National Provision and SIB Registration' },
    admissionRequirements: {
      es: [
        'Prueba de Suficiencia Académica (PSA) o Curso Preuniversitario con aprobación en matemáticas, física y química.',
        'Título de Bachiller en Humanidades debidamente legalizado.',
      ],
      en: [
        'Academic Sufficiency Test (PSA) or Pre-university foundation course in math and physics.',
        'Official high school diploma credential.',
      ],
    },
    graduationRequirements: {
      es: [
        'Vencimiento del plan curricular de 10 semestres académicos.',
        'Modalidad de graduación: Tesis de Grado, Proyecto de Grado, Trabajo Dirigido o Graduación por Excelencia.',
        'Trámite del Título en Provisión Nacional y colegiación en la Sociedad de Ingenieros de Bolivia.',
      ],
      en: [
        'Full completion of the 10-semester academic curriculum.',
        'Graduation modality: Research Thesis, Engineering Project, Directed Internship, or Academic Excellence.',
        'Chartering with the National Society of Engineers of Bolivia (SIB).',
      ],
    },
    professionalCouncil: 'Sociedad de Ingenieros de Bolivia (SIB)',
  },
  uy: {
    level: {
      es: 'Carrera Universitaria de Grado (Udelar / MEC Uruguay)',
      en: 'University Degree in Engineering (Udelar / MEC Uruguay)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '450 créditos universitarios Udelar', en: '450 Udelar university credits' },
    degreePrefix: { es: 'Título de Grado de Ingeniero en', en: 'Bachelor of Science Degree in' },
    titlePrefix: { es: 'Ingeniero Colegiado en la Asociación de Ingenieros del Uruguay (AIU)', en: 'Chartered Professional Engineer (AIU Licensed)' },
    admissionRequirements: {
      es: [
        'Bachillerato diversificado en opción Científica o Físico-Matemática.',
        'Acreditación de conocimientos en cálculo, física fundamental y lógica algebraica.',
      ],
      en: [
        'Secondary diploma with focus in Scientific or Physics-Mathematics specialization.',
        'Proven foundation in differential calculus, physics, and algebraic logic.',
      ],
    },
    graduationRequirements: {
      es: [
        'Aprobación de los 450 créditos obligatorios y electivos del plan de estudios.',
        'Realización y sustentación del Proyecto de Fin de Carrera (PFC) de ingeniería aplicada.',
        'Prácticas profesionales e informe de actividades de vinculación tecnológica.',
      ],
      en: [
        'Completion of 450 mandatory and elective curricular credits.',
        'Preparation and oral defense of the Final Engineering Project (PFC).',
        'Industry practicum and technical innovation report.',
      ],
    },
    professionalCouncil: 'Asociación de Ingenieros del Uruguay (AIU)',
  },
  br: {
    level: {
      es: 'Graduação de Nível Superior - Bacharelado em Engenharia (MEC Brasil)',
      en: 'Higher Education Degree - Bachelor in Engineering (MEC Brazil)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '3.600 a 4.000 horas aula / 200 a 240 créditos', en: '3,600 to 4,000 instructional hours' },
    degreePrefix: { es: 'Bacharel em', en: 'Bachelor of Science in' },
    titlePrefix: { es: 'Engenheiro com Registro Profissional no CREA / CONFEA', en: 'Licensed Engineer registered with CREA / CONFEA' },
    admissionRequirements: {
      es: [
        'Exame Nacional do Ensino Médio (ENEM / SiSU) o vestibular propio con alta puntuación en ciências exatas.',
        'Certificado de conclusão do Ensino Médio.',
      ],
      en: [
        'National High School Exam (ENEM / SiSU) or university entrance vestibular exam.',
        'High school graduation certificate.',
      ],
    },
    graduationRequirements: {
      es: [
        'Cumprimento de 100% da carga horária e disciplinas da grade curricular.',
        'Estágio Curricular Supervisionado obrigatório (mínimo 160 a 300 horas).',
        'Trabalho de Conclusão de Curso (TCC) con apresentação pública perante banca examinadora.',
      ],
      en: [
        'Completion of 100% of curriculum credits and instructional hours.',
        'Mandatory Supervised Engineering Internship (160 to 300 hours).',
        'Final Capstone Coursework (TCC) defense before faculty examination panel.',
      ],
    },
    professionalCouncil: 'Conselho Federal de Engenharia e Agronomia (CONFEA / CREA)',
  },
  gt: {
    level: {
      es: 'Educación Superior - Licenciatura en Ingeniería (USAC / CEPS)',
      en: 'Higher Education - Licentiate in Engineering (USAC / CEPS Accredited)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '220 a 250 créditos académicos', en: '220 to 250 academic credits' },
    degreePrefix: { es: 'Licenciatura en', en: 'Licentiate / Bachelor in' },
    titlePrefix: { es: 'Ingeniero Colegiado Activo en el Colegio de Ingenieros de Guatemala (CIG)', en: 'Chartered Active Engineer in the CIG' },
    admissionRequirements: {
      es: [
        'Prueba de Orientación Vocacional (POV) y Pruebas de Conocimientos Básicos (PCB) en matemáticas y física.',
        'Título de nivel diversificado o bachillerato en ciencias y letras.',
      ],
      en: [
        'Vocational aptitude testing and Basic Placement Exam (PCB) in mathematics and physics.',
        'High school diploma in sciences or technical curriculum.',
      ],
    },
    graduationRequirements: {
      es: [
        'Cierre de currículum de 10 semestres académicos con asignaturas aprobadas.',
        'Ejercicio Profesional Supervisado (EPS) de 6 meses o Tesis de Graduación.',
        'Colegiación profesional obligatoria conforme a la Ley de Colegiación Profesional.',
      ],
      en: [
        '100% curriculum coursework completion across 10 semesters.',
        '6-month Supervised Professional Practicum (EPS) or Senior Research Thesis.',
        'Mandatory statutory registration with the College of Engineers of Guatemala (CIG).',
      ],
    },
    professionalCouncil: 'Colegio de Ingenieros de Guatemala (CIG)',
  },
  sv: {
    level: {
      es: 'Educación Superior Universitaria (MINED El Salvador)',
      en: 'Higher University Education (MINED El Salvador)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '160 a 180 unidades valorativas (UV)', en: '160 to 180 UV credit units' },
    degreePrefix: { es: 'Título de Grado de', en: 'Bachelor of Science Degree in' },
    titlePrefix: { es: 'Ingeniero Incorporado a la Asociación Salvadoreña de Ingenieros y Arquitectos (ASIA)', en: 'Chartered Engineer incorporated in ASIA' },
    admissionRequirements: {
      es: [
        'Prueba de Aprendizaje y Aptitudes (PAES / Avanzo) y curso propedéutico universitario en ciencias exactas.',
        'Título de bachillerato debidamente registrado.',
      ],
      en: [
        'National Avanzo / PAES examination and pre-university engineering foundation program.',
        'Official high school graduation certificate.',
      ],
    },
    graduationRequirements: {
      es: [
        'Aprobación de la totalidad de unidades valorativas del plan curricular.',
        'Trabajo de Graduación (Tesis de investigación o pasantía empresarial especializada).',
        'Cumplimiento de 500 horas de servicio social estudiantil comunitario.',
      ],
      en: [
        'Completion of all curriculum UV credit requirements.',
        'Graduation Thesis or specialized enterprise internship project.',
        'Completion of 500 mandatory community service hours.',
      ],
    },
    professionalCouncil: 'Asociación Salvadoreña de Ingenieros y Arquitectos (ASIA)',
  },
  hn: {
    level: {
      es: 'Nivel de Educación Superior Universitaria (UNAH / DES)',
      en: 'Higher University Education (UNAH / DES Accredited)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '200 a 230 unidades valorativas', en: '200 to 230 academic credit units' },
    degreePrefix: { es: 'Título de', en: 'Professional Degree in' },
    titlePrefix: { es: 'Ingeniero Colegiado en el CICH o Colegio de Ingenieros Mecánicos y Eléctricos (CIMEQH)', en: 'Chartered Engineer registered with CICH / CIMEQH' },
    admissionRequirements: {
      es: [
        'Prueba de Aptitud Académica (PAA College Board) con puntaje mínimo de ingeniería y Prueba de Aprovechamiento Matemático (PAM).',
        'Título de Educación Media en Ciencias y Humanidades o Técnico.',
      ],
      en: [
        'PAA College Board entrance test and PAM Advanced Math achievement exam.',
        'Secondary education diploma in Sciences or technical field.',
      ],
    },
    graduationRequirements: {
      es: [
        'Aprobación completa de las asignaturas y talleres de ingeniería.',
        'Práctica Profesional Supervisada (PPS) de 800 horas en el sector productivo.',
        'Desarrollo y defensa de Proyecto de Graduación y servicio social comunitario.',
      ],
      en: [
        'Full completion of all engineering courses and laboratory modules.',
        'Supervised Professional Internship (PPS) of 800 hours in industry.',
        'Capstone Graduation Project defense and community social service.',
      ],
    },
    professionalCouncil: 'Colegio de Ingenieros Civiles de Honduras (CICH) / CIMEQH',
  },
  gb: {
    level: {
      es: 'Higher Education - BEng (Honours) / MEng Integrated (Engineering Council UK)',
      en: 'Higher Education - BEng (Honours) / MEng Integrated (Engineering Council UK)',
    },
    durationYears: 4,
    totalSemesters: 8,
    creditsOrHours: { es: '360 a 480 UK Academic Credits (FHEQ Level 6/7)', en: '360 to 480 UK Academic Credits (FHEQ Level 6/7)' },
    degreePrefix: { es: 'Bachelor of Engineering (BEng) / Master of Engineering (MEng) in', en: 'BEng / MEng in' },
    titlePrefix: { es: 'Chartered Engineer (CEng / IET, IMechE, ICE Licensed)', en: 'Chartered Engineer (CEng / IET, IMechE, ICE Licensed)' },
    admissionRequirements: {
      es: [
        'A-Levels con calificaciones destacadas (típicamente AAA o AAB) en Mathematics y Physics.',
        'UCAS Personal Statement y referencias académicas de excelencia.',
      ],
      en: [
        'A-Levels with top grades (typically AAA or AAB) in Mathematics and Physics.',
        'UCAS Personal Statement and outstanding academic references.',
      ],
    },
    graduationRequirements: {
      es: [
        'Superación de 360 créditos para BEng o 480 créditos para MEng integrado acreditado.',
        'Desarrollo de Individual Senior Research Project y Group Design Project industrial.',
        'Desarrollo profesional inicial (IPD) conducente a la colegiación CEng ante el Engineering Council.',
      ],
      en: [
        'Completion of 360 credits for BEng or 480 credits for integrated MEng.',
        'Senior Individual Research Project and collaborative Industrial Group Design Project.',
        'Initial Professional Development (IPD) pathway toward CEng chartership.',
      ],
    },
    professionalCouncil: 'Engineering Council UK (IET, IMechE, ICE, RAeS)',
  },
  fr: {
    level: {
      es: 'Diplôme d’Ingénieur / Grade de Master (Bac+5 - CTI / Grandes Écoles)',
      en: 'Diplôme d’Ingénieur / Master Grade (Bac+5 - CTI / Grandes Écoles)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '300 ECTS (Classes Préparatoires + Cycle Ingénieur)', en: '300 ECTS (Classes Préparatoires + Engineering Cycle)' },
    degreePrefix: { es: 'Diplôme d’Ingénieur de l’École Nationale Supérieure en', en: 'Diplôme d’Ingénieur / Master in' },
    titlePrefix: { es: 'Titre d’Ingénieur Diplômé d’État (Habilitation CTI / IESF)', en: 'Chartered State Engineer (CTI / IESF Certified)' },
    admissionRequirements: {
      es: [
        'Baccalauréat Général con especialidades en Mathématiques y Physique-Chimie.',
        'Concurso nacional tras 2 años de Classes Préparatoires (CPGE MPSI/PCSI) o admisión en ciclos integrados.',
      ],
      en: [
        'Baccalauréat with specialties in Mathematics and Physics-Chemistry.',
        'National competitive exam following 2 years of CPGE preparatory classes.',
      ],
    },
    graduationRequirements: {
      es: [
        'Aprobación de los 300 créditos ECTS conforme al marco de la Commission des Titres d’Ingénieur (CTI).',
        'Estadía internacional obligatoria (mínimo 3 meses) y certificación C1 en inglés.',
        'Stage de Fin d’Études (PFE) de 6 meses en centro de investigación o corporación industrial.',
      ],
      en: [
        'Validation of 300 ECTS under the Commission des Titres d’Ingénieur (CTI) standards.',
        'Mandatory international placement (minimum 3 months) and English C1 proficiency.',
        '6-month Final Graduation Internship (PFE) with industrial project defense.',
      ],
    },
    professionalCouncil: 'Commission des Titres d’Ingénieur (CTI) / IESF',
  },
  it: {
    level: {
      es: 'Laurea Magistrale in Ingegneria (Bologna Process / CUN Italia)',
      en: 'Laurea Magistrale in Engineering (Bologna Process / CUN Italy)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '180 CFU (Laurea Triennale) + 120 CFU (Laurea Magistrale)', en: '180 CFU (Bachelor) + 120 CFU (Master)' },
    degreePrefix: { es: 'Dottore Magistrale in Ingegneria', en: 'Master of Science in Engineering' },
    titlePrefix: { es: 'Ingegnere Iscritto all’Ordine degli Ingegneri (Sezione A - CNI)', en: 'Chartered Professional Engineer (Section A - CNI Registered)' },
    admissionRequirements: {
      es: [
        'Diploma di Maturità Scientifica o Tecnica con alto rendimento analítico.',
        'Prueba de admisión de ingeniería (TOLC-I del consorcio CISIA) con notas destacadas en matemáticas y física.',
      ],
      en: [
        'High School Diploma (Maturità) with strong technical/scientific background.',
        'CISIA TOLC-I national engineering entrance test with high mathematics score.',
      ],
    },
    graduationRequirements: {
      es: [
        'Completar 300 crediti formativi universitari (CFU) entre primer y segundo ciclo.',
        'Tesi di Laurea Magistrale con investigación experimental o desarrollo proyectual.',
        'Esame di Stato per l’abilitazione all’esercizio della professione e iscripción en el CNI.',
      ],
      en: [
        'Completion of 300 university formative credits (CFU) across dual cycle.',
        'Experimental research thesis defense for the Laurea Magistrale.',
        'State Professional Licensing Exam (Esame di Stato) and registration with CNI.',
      ],
    },
    professionalCouncil: 'Consiglio Nazionale degli Ingegneri (CNI Italia)',
  },
  ch: {
    level: {
      es: 'Hochschulstudium / Master of Science in Engineering (ETH Zurich / EPFL / Swissuniversities)',
      en: 'Master of Science in Engineering (ETH Zurich / EPFL / Swissuniversities)',
    },
    durationYears: 5,
    totalSemesters: 10,
    creditsOrHours: { es: '180 ECTS (B.Sc.) + 90 a 120 ECTS (M.Sc.)', en: '180 ECTS (B.Sc.) + 90 to 120 ECTS (M.Sc.)' },
    degreePrefix: { es: 'Bachelor & Master of Science ETH / EPFL in', en: 'B.Sc. & M.Sc. ETH / EPFL in' },
    titlePrefix: { es: 'Ingenieur mit Eidgenössischem Diplom / Swiss Engineering STV', en: 'Chartered Swiss Engineer (STV / REG A Certified)' },
    admissionRequirements: {
      es: [
        'Maturité Gymnasiale / Eidgenössische Matura con honores en matemáticas superiores y física.',
        'Para estudiantes internacionales, examen centralizado de admisión de ETH Zurich / EPFL.',
      ],
      en: [
        'Swiss Federal Matura certificate with honors in advanced mathematics and physics.',
        'For international applicants, competitive ETH Zurich / EPFL entrance examination.',
      ],
    },
    graduationRequirements: {
      es: [
        'Aprobación rigurosa de 270-300 créditos ECTS en ciencias fundamentales e ingeniería aplicada.',
        'Semestre de prácticas en laboratorios de investigación puntera o industria helvética.',
        'Defensa de la Master Thesis en cooperación con institutos globales y registro en Stiftung REG.',
      ],
      en: [
        'Rigorous completion of 270-300 ECTS in fundamental sciences and applied engineering.',
        'Internship term in leading research laboratories or top Swiss industry.',
        'Master Thesis defense with global research partners and REG A registration.',
      ],
    },
    professionalCouncil: 'Swiss Engineering STV / Foundation of Swiss Registers (REG A)',
  },
};

interface CareerArchetype {
  idSuffix: string;
  slug: string;
  category: EngineeringCareer['category'];
  iconName: string;
  titles: { es: string; en: string };
  descriptions: {
    short: { es: string; en: string };
    full: { es: string; en: string };
  };
  salaryUsdFactor: { entry: number; avg: number; senior: number };
  rankings: { salary: number; demand: number; employability: number; growth: number };
  curriculum: SubjectArea[];
  workSectors: WorkSector[];
}

const CAREER_ARCHETYPES: CareerArchetype[] = [
  {
    idSuffix: 'sistemas',
    slug: 'ingenieria-de-sistemas-y-software',
    category: 'software_tech',
    iconName: 'Code2',
    titles: {
      es: 'Ingeniería de Sistemas, Software & IA',
      en: 'Systems, Software & AI Engineering',
    },
    descriptions: {
      short: {
        es: 'Arquitectura de software distribuido, computación en la nube, ciberseguridad avanzada y modelos de inteligencia artificial.',
        en: 'Distributed software architectures, cloud computing, advanced cybersecurity, and artificial intelligence models.',
      },
      full: {
        es: 'Formación universitaria integral de alto nivel orientada al diseño y gobierno de sistemas computacionales complejos, ingeniería de datos, plataformas SaaS de alta concurrencia y seguridad de la información conforme a estándares internacionales.',
        en: 'Comprehensive high-level university education focused on engineering complex computational systems, enterprise data platforms, scalable SaaS architectures, and cybersecurity according to global standards.',
      },
    },
    salaryUsdFactor: { entry: 1200, avg: 2200, senior: 5200 },
    rankings: { salary: 2, demand: 1, employability: 96, growth: 98 },
    curriculum: [
      {
        id: 'sw-core',
        iconName: 'Terminal',
        name: { es: 'Algoritmos, Software & Arquitectura', en: 'Algorithms, Software & Architecture' },
        subjects: {
          es: ['Estructuras de Datos y Algoritmos Avanzados', 'Programación Orientada a Objetos y Funcional', 'Arquitectura de Microservicios y Cloud', 'Bases de Datos Relacionales y NoSQL', 'Ingeniería de Requisitos'],
          en: ['Advanced Data Structures & Algorithms', 'Object-Oriented & Functional Programming', 'Microservices & Cloud Architecture', 'Relational & NoSQL Databases', 'Requirements Engineering'],
        },
      },
      {
        id: 'cloud-security-ai',
        iconName: 'ShieldCheck',
        name: { es: 'Cloud, Ciberseguridad & IA', en: 'Cloud, Cybersecurity & AI' },
        subjects: {
          es: ['Cloud Computing (AWS / Azure / GCP)', 'DevOps, CI/CD y Contenedores (Docker/K8s)', 'Ciberseguridad y Criptografía Aplicada', 'Machine Learning y Procesamiento de Lenguaje Natural', 'Gobierno de TI y Ética'],
          en: ['Cloud Computing (AWS / Azure / GCP)', 'DevOps, CI/CD & Kubernetes', 'Applied Cybersecurity & Cryptography', 'Machine Learning & NLP', 'IT Governance & Ethics'],
        },
      },
    ],
    workSectors: [
      {
        id: 'fintech-tech',
        iconName: 'Building2',
        name: { es: 'Sector Tecnológico, Banca & FinTech', en: 'Tech Sector, Banking & FinTech' },
        description: {
          es: 'Diseño de pasarelas de pago, banca digital de alta concurrencia y plataformas en la nube.',
          en: 'Design of payment gateways, high-concurrency digital banking, and cloud architectures.',
        },
        commonJobRoles: {
          es: ['Software Architect', 'Lead Cloud Engineer', 'Tech Lead', 'Cybersecurity Engineer'],
          en: ['Software Architect', 'Lead Cloud Engineer', 'Tech Lead', 'Cybersecurity Engineer'],
        },
        estimatedDemandLevel: 'critical',
      },
    ],
  },
  {
    idSuffix: 'industrial',
    slug: 'ingenieria-industrial-y-gestion',
    category: 'industrial_management',
    iconName: 'Factory',
    titles: {
      es: 'Ingeniería Industrial & Dirección de Operaciones',
      en: 'Industrial & Operations Management Engineering',
    },
    descriptions: {
      short: {
        es: 'Optimización de cadenas de suministro globales, manufactura esbelta, control estadístico de calidad y finanzas de proyectos.',
        en: 'Global supply chain optimization, Lean manufacturing, statistical quality management, and project investment finance.',
      },
      full: {
        es: 'Disciplina líder en integrar talento humano, recursos tecnológicos, materiales y capital para maximizar la productividad y sostenibilidad de corporaciones industriales, logísticas, agroalimentarias y de servicios.',
        en: 'Leading discipline integrating human capital, technology, materials, and finance to maximize productivity and sustainability across industrial, logistics, and retail corporations.',
      },
    },
    salaryUsdFactor: { entry: 1100, avg: 2050, senior: 4800 },
    rankings: { salary: 3, demand: 2, employability: 94, growth: 93 },
    curriculum: [
      {
        id: 'ind-ops',
        iconName: 'Boxes',
        name: { es: 'Operaciones, Logística & Lean', en: 'Operations, Logistics & Lean' },
        subjects: {
          es: ['Investigación de Operaciones I y II', 'Gestión de la Cadena de Suministro (SCM)', 'Lean Manufacturing y Six Sigma', 'Diseño y Distribución de Plantas', 'Simulación de Procesos'],
          en: ['Operations Research I & II', 'Supply Chain Management (SCM)', 'Lean Six Sigma', 'Plant Design & Layout', 'Process Simulation'],
        },
      },
      {
        id: 'ind-fin',
        iconName: 'TrendingUp',
        name: { es: 'Finanzas, Calidad & Analítica', en: 'Finance, Quality & Analytics' },
        subjects: {
          es: ['Ingeniería Económica y Finanzas', 'Control Estadístico de la Calidad (ISO)', 'Evaluación de Proyectos de Inversión', 'Seguridad y Salud Ocupacional', 'Analítica de Negocios'],
          en: ['Engineering Economics & Finance', 'Statistical Quality Control (ISO)', 'Investment Project Appraisal', 'Occupational Safety', 'Business Analytics'],
        },
      },
    ],
    workSectors: [
      {
        id: 'ind-supply',
        iconName: 'Truck',
        name: { es: 'Manufactura, Retail & Logística Global', en: 'Manufacturing, Retail & Global Logistics' },
        description: {
          es: 'Supervisión de cadenas de suministro, centros de distribución robotizados y manufactura avanzada.',
          en: 'Oversight of supply chains, automated fulfillment centers, and advanced manufacturing.',
        },
        commonJobRoles: {
          es: ['Supply Chain Director', 'Gerente de Planta / Operaciones', 'Consultor Lean Six Sigma'],
          en: ['Supply Chain Director', 'Plant / Operations Manager', 'Lean Six Sigma Consultant'],
        },
        estimatedDemandLevel: 'very_high',
      },
    ],
  },
  {
    idSuffix: 'civil',
    slug: 'ingenieria-civil-y-estructuras',
    category: 'infrastructure_civil',
    iconName: 'Building2',
    titles: {
      es: 'Ingeniería Civil & Infraestructura Sismorresistente',
      en: 'Civil & Structural Earthquake Engineering',
    },
    descriptions: {
      short: {
        es: 'Diseño estructural sismorresistente, autopistas, puentes, presas hidráulicas, puertos y modelado BIM.',
        en: 'Earthquake-resilient structural design, highways, bridges, dams, ports, and BIM modeling.',
      },
      full: {
        es: 'Especialidad esencial para el desarrollo territorial que capacita a ingenieros en cálculo de estructuras complejas, mecánica de suelos, obras viales, gestión de contratos de construcción y sostenibilidad ambiental.',
        en: 'Essential territorial engineering discipline preparing professionals in structural calculation, soil mechanics, transit infrastructure, construction contract management, and environmental resilience.',
      },
    },
    salaryUsdFactor: { entry: 1150, avg: 2150, senior: 5000 },
    rankings: { salary: 4, demand: 3, employability: 93, growth: 90 },
    curriculum: [
      {
        id: 'civ-struct',
        iconName: 'Building',
        name: { es: 'Estructuras & Geotecnia', en: 'Structures & Geotechnics' },
        subjects: {
          es: ['Mecánica de Suelos y Cimentaciones', 'Análisis Estructural Matricial', 'Diseño en Concreto Armado y Acero', 'Ingeniería Sismorresistente', 'Modelado BIM (Revit/Navisworks)'],
          en: ['Soil Mechanics & Foundations', 'Matrix Structural Analysis', 'Reinforced Concrete & Steel Design', 'Earthquake Engineering', 'BIM Modeling (Revit/Navisworks)'],
        },
      },
      {
        id: 'civ-hydr',
        iconName: 'Droplet',
        name: { es: 'Hidráulica, Vías & Construcción', en: 'Hydraulics, Highways & Construction' },
        subjects: {
          es: ['Mecánica de Fluidos e Hidráulica', 'Diseño Geométrico de Vías y Pavimentos', 'Presas y Obras Hidráulicas', 'Costos, Presupuestos y Supervisión de Obra', 'Gestión Ambiental en Construcción'],
          en: ['Fluid Mechanics & Hydraulics', 'Highway Geometric Design & Pavements', 'Dams & Water Resources', 'Construction Cost Estimation & Oversight', 'Environmental Construction Mgmt'],
        },
      },
    ],
    workSectors: [
      {
        id: 'civ-contracting',
        iconName: 'Hammer',
        name: { es: 'Megaproyectos, Construcción & Vías', en: 'Mega-projects, Construction & Transit' },
        description: {
          es: 'Ejecución y supervisión de infraestructuras de transporte, edificación vertical y obras hidráulicas.',
          en: 'Execution and oversight of transit corridors, high-rise buildings, and hydraulic systems.',
        },
        commonJobRoles: {
          es: ['Ingeniero Calculista Estructural', 'Residente de Obra', 'Coordinador BIM', 'Gerente de Proyectos'],
          en: ['Structural Analysis Engineer', 'Site Resident Engineer', 'BIM Coordinator', 'Project Director'],
        },
        estimatedDemandLevel: 'very_high',
      },
    ],
  },
  {
    idSuffix: 'mecatronica',
    slug: 'ingenieria-mecatronica-y-robotica',
    category: 'mechanical_electrical',
    iconName: 'Cpu',
    titles: {
      es: 'Ingeniería Mecatrónica, Robótica & Automatización',
      en: 'Mechatronics, Robotics & Automation Engineering',
    },
    descriptions: {
      short: {
        es: 'Robótica industrial, sistemas embebidos, servocontrol de precisión, visión artificial y Fábricas 4.0.',
        en: 'Industrial robotics, embedded hardware, precision servo control, computer vision, and Industry 4.0.',
      },
      full: {
        es: 'Sinergia de mecánica de precisión, electrónica digital, control automático y programación para automatizar líneas productivas, vehículos autónomos y equipamiento biomédico inteligente.',
        en: 'Synergy of precision mechanics, digital electronics, automatic control, and software to automate production lines, autonomous systems, and smart equipment.',
      },
    },
    salaryUsdFactor: { entry: 1250, avg: 2300, senior: 5400 },
    rankings: { salary: 2, demand: 4, employability: 95, growth: 97 },
    curriculum: [
      {
        id: 'mec-core',
        iconName: 'Bot',
        name: { es: 'Robótica, Control & PLCs', en: 'Robotics, Control & PLCs' },
        subjects: {
          es: ['Cinemática y Dinámica de Robots', 'Sistemas de Control Automático', 'Microcontroladores y Sistemas Embebidos', 'PLCs y Redes Industriales (SCADA)', 'Electrónica de Potencia'],
          en: ['Robot Kinematics & Dynamics', 'Automatic Control Systems', 'Microcontrollers & Embedded Systems', 'Industrial PLCs & SCADA', 'Power Electronics'],
        },
      },
    ],
    workSectors: [
      {
        id: 'mec-industry',
        iconName: 'Cpu',
        name: { es: 'Automatización & Manufactura Avanzada', en: 'Automation & Smart Manufacturing' },
        description: {
          es: 'Líneas robotizadas, mantenimiento predictivo basado en IoT y sensorización industrial.',
          en: 'Robotic assembly cells, IoT predictive maintenance, and industrial sensorization.',
        },
        commonJobRoles: {
          es: ['Ingeniero de Automatización y Control', 'Integrador de Celdas Robóticas', 'Ingeniero de Sistemas Embebidos'],
          en: ['Automation & Control Engineer', 'Robotics Integrator', 'Embedded Systems Engineer'],
        },
        estimatedDemandLevel: 'critical',
      },
    ],
  },
  {
    idSuffix: 'energia-minas',
    slug: 'ingenieria-en-energia-y-recursos',
    category: 'earth_energy',
    iconName: 'Flame',
    titles: {
      es: 'Ingeniería de Energía, Minas & Sostenibilidad',
      en: 'Energy, Mining & Resources Engineering',
    },
    descriptions: {
      short: {
        es: 'Extracción de minerales críticos (cobre/litio), parques eólicos, plantas solares y descarbonización.',
        en: 'Critical minerals extraction (copper/lithium), wind farms, solar PV plants, and decarbonization.',
      },
      full: {
        es: 'Especialidad estratégica para liderar la transición hacia recursos limpios y explotación responsable de minerales fundamentales para la electrificación global y la seguridad energética.',
        en: 'Strategic discipline driving the global energy transition and responsible extraction of critical minerals required for worldwide electrification.',
      },
    },
    salaryUsdFactor: { entry: 1400, avg: 2700, senior: 6500 },
    rankings: { salary: 1, demand: 3, employability: 96, growth: 95 },
    curriculum: [
      {
        id: 'energy-clean',
        iconName: 'Zap',
        name: { es: 'Energías Limpias & Recursos', en: 'Clean Energy & Resources' },
        subjects: {
          es: ['Energía Solar y Eólica', 'Almacenamiento en Baterías (BESS)', 'Planificación y Geomecánica de Yacimientos', 'Redes Eléctricas Inteligentes', 'Auditoría Energética y Cierre Ambiental'],
          en: ['Solar & Wind Energy Systems', 'Battery Storage (BESS)', 'Mine Planning & Geomechanics', 'Smart Power Grids', 'Energy Auditing & Environmental Closure'],
        },
      },
    ],
    workSectors: [
      {
        id: 'energy-companies',
        iconName: 'SunMedium',
        name: { es: 'Compañías Energéticas & Mineras', en: 'Energy Utilities & Mining Operators' },
        description: {
          es: 'Desarrollo de proyectos renovables, yacimientos de minerales y microrredes de potencia.',
          en: 'Renewable energy projects, mineral extraction sites, and industrial microgrids.',
        },
        commonJobRoles: {
          es: ['Ingeniero de Proyectos Renovables / Mineros', 'Superintendente de Energía', 'Consultor en Eficiencia Energética'],
          en: ['Renewable / Mining Project Engineer', 'Energy Superintendent', 'Energy Efficiency Consultant'],
        },
        estimatedDemandLevel: 'critical',
      },
    ],
  },
  {
    idSuffix: 'biomedica-quimica',
    slug: 'ingenieria-biomedica-y-biotecnologia',
    category: 'bio_chemical',
    iconName: 'Dna',
    titles: {
      es: 'Ingeniería Biomédica & Biotecnología',
      en: 'Biomedical & Bioengineering',
    },
    descriptions: {
      short: {
        es: 'Equipos médicos de alta complejidad, prótesis biónicas, ingeniería de tejidos y bioprocesos farmacológicos.',
        en: 'Advanced medical instrumentation, bionic prosthetics, tissue engineering, and pharmaceutical bioprocesses.',
      },
      full: {
        es: 'Unión de las ciencias de la vida y la ingeniería para innovar en diagnóstico clínico, equipamiento hospitalario, biomecánica y desarrollo de bioproductos terapéuticos.',
        en: 'Convergence of life sciences and engineering to innovate in medical diagnostics, hospital clinical engineering, biomechanics, and therapeutic bioproducts.',
      },
    },
    salaryUsdFactor: { entry: 1200, avg: 2250, senior: 5100 },
    rankings: { salary: 3, demand: 5, employability: 93, growth: 97 },
    curriculum: [
      {
        id: 'bio-med',
        iconName: 'Heart',
        name: { es: 'Dispositivos Médicos & Biomecánica', en: 'Medical Devices & Biomechanics' },
        subjects: {
          es: ['Fisiología para Ingenieros', 'Instrumentación Biomédica', 'Procesamiento de Señales e Imágenes Médicas', 'Biomecánica y Biomateriales', 'Regulación de Dispositivos Médicos (FDA/CE)'],
          en: ['Physiology for Engineers', 'Biomedical Instrumentation', 'Medical Signal & Image Processing', 'Biomechanics & Biomaterials', 'Medical Device Regulation (FDA/CE)'],
        },
      },
    ],
    workSectors: [
      {
        id: 'bio-hospital',
        iconName: 'ShieldAlert',
        name: { es: 'Hospitales, Clínicas & Farma Tech', en: 'Hospitals, MedTech & Pharma' },
        description: {
          es: 'Ingeniería clínica hospitalaria, desarrollo de prótesis y validación de tecnología médica.',
          en: 'Clinical engineering, prosthetic devices manufacturing, and medical technology compliance.',
        },
        commonJobRoles: {
          es: ['Ingeniero Clínico Hospitalario', 'Especialista en Equipos de Resonancia y Tomografía', 'Desarrollador de Dispositivos Médicos'],
          en: ['Hospital Clinical Engineer', 'MRI & CT Systems Specialist', 'Medical Device R&D Engineer'],
        },
        estimatedDemandLevel: 'very_high',
      },
    ],
  },
  {
    idSuffix: 'ambiental',
    slug: 'ingenieria-ambiental-y-sostenibilidad',
    category: 'bio_chemical',
    iconName: 'Leaf',
    titles: {
      es: 'Ingeniería Ambiental & Cambio Climático',
      en: 'Environmental & Sustainability Engineering',
    },
    descriptions: {
      short: {
        es: 'Tratamiento de aguas residuales, gestión de residuos peligrosos, evaluación de impacto ambiental y taxonomía ESG.',
        en: 'Wastewater treatment, hazardous waste management, environmental impact assessment, and ESG reporting.',
      },
      full: {
        es: 'Especialidad orientada a prevenir y mitigar los impactos ecológicos de las actividades industriales mediante tecnologías de biorremediación, monitoreo de cuencas hídricas y cumplimiento de normativas de descarbonización.',
        en: 'Discipline focused on preventing and mitigating industrial environmental impacts through bioremediation, water monitoring, circular economy, and ESG compliance.',
      },
    },
    salaryUsdFactor: { entry: 1050, avg: 1950, senior: 4300 },
    rankings: { salary: 6, demand: 4, employability: 91, growth: 95 },
    curriculum: [
      {
        id: 'env-water',
        iconName: 'Droplet',
        name: { es: 'Aguas, Aire & Residuos', en: 'Water, Air & Waste' },
        subjects: {
          es: ['Tratamiento de Aguas y Efluentes', 'Control de Emisiones y Calidad del Aire', 'Gestión Integral de Residuos Sólidos', 'Evaluación de Impacto Ambiental (EIA)', 'Modelado de Cambio Climático y Huella de Carbono'],
          en: ['Wastewater & Effluent Treatment', 'Air Quality & Emission Control', 'Solid & Hazardous Waste Management', 'Environmental Impact Assessment (EIA)', 'Climate Change & Carbon Footprint Modeling'],
        },
      },
    ],
    workSectors: [
      {
        id: 'env-consulting',
        iconName: 'Trees',
        name: { es: 'Consultoría Ambiental, Minería & Sector Público', en: 'Environmental Consulting, Mining & Public Sector' },
        description: {
          es: 'Auditorías ambientales, plantas de potabilización y cumplimiento de licencias ecológicas.',
          en: 'Environmental audits, water purification plants, and ecological licensing compliance.',
        },
        commonJobRoles: {
          es: ['Auditor Ambiental Líder', 'Especialista en Estudios de Impacto Ambiental (EIA)', 'Gerente de Sostenibilidad y ESG'],
          en: ['Lead Environmental Auditor', 'EIA Specialist', 'Sustainability & ESG Director'],
        },
        estimatedDemandLevel: 'high',
      },
    ],
  },
];

export function getCareersForCountry(countryId: string): EngineeringCareer[] {
  const targetCountry = COUNTRIES.find((c) => c.id === countryId) || COUNTRIES[0];
  const academicTemplate = COUNTRY_ACADEMIC_PROFILES[countryId] || COUNTRY_ACADEMIC_PROFILES['pe'];

  // Check if we have explicit bespoke records in engineers.ts for this country
  const explicit = ENGINEERING_CAREERS.filter((c) => c.countryId === countryId);
  if (explicit.length >= 6) {
    return explicit;
  }

  // Country USD multipliers for accurate salary ranges
  const countryUSDMultiplier: Record<string, number> = {
    pe: 1.0,  // Perú: PEN (baseline)
    cl: 1.5,  // Chile: CLP
    co: 1.05, // Colombia: COP
    ar: 0.9,  // Argentina: ARS
    ec: 1.15, // Ecuador: USD
    bo: 0.85, // Bolivia: BOB
    uy: 1.55, // Uruguay: UYU
    br: 1.35, // Brasil: BRL
    cr: 1.35, // Costa Rica: CRC
    pa: 1.45, // Panamá: USD / PAB
    gt: 1.0,  // Guatemala: GTQ
    sv: 1.05, // El Salvador: USD
    hn: 0.95, // Honduras: HNL
    mx: 1.25, // México: MXN (Norteamérica)
    us: 5.4,  // USA: USD (~$6.5k - $14k monthly)
    ca: 4.3,  // Canadá: CAD
    es: 2.2,  // España: EUR (~€2.5k - €7.5k monthly)
    de: 2.85, // Alemania: EUR (~€3.2k - €8.5k monthly)
    gb: 3.0,  // Reino Unido: GBP (~£2.8k - £8.5k monthly)
    fr: 2.45, // Francia: EUR (~€2.6k - €8.2k monthly)
    it: 2.25, // Italia: EUR (~€2.2k - €7.5k monthly)
    ch: 5.8,  // Suiza: CHF (~CHF 6.8k - CHF 18k monthly)
  };

  const multiplier = countryUSDMultiplier[countryId] || 1.0;
  const rateToUSD = targetCountry.currency.exchangeRateToUSD || 1.0;

  // Build the complete array of engineering careers tailored for this country
  const generatedCareers: EngineeringCareer[] = CAREER_ARCHETYPES.map((arch) => {
    // Check if an explicit career exists with this category/slug
    const existing = explicit.find((e) => e.category === arch.category || e.slug.includes(arch.idSuffix));
    if (existing) {
      return existing;
    }

    const calculatedEntry = Math.round((arch.salaryUsdFactor.entry * multiplier) / rateToUSD / 50) * 50;
    const calculatedAvg = Math.round((arch.salaryUsdFactor.avg * multiplier) / rateToUSD / 50) * 50;
    const calculatedSenior = Math.round((arch.salaryUsdFactor.senior * multiplier) / rateToUSD / 50) * 50;

    const degreeTitleEs = `${academicTemplate.degreePrefix.es} ${arch.titles.es}`;
    const degreeTitleEn = `${academicTemplate.degreePrefix.en} ${arch.titles.en}`;

    const profTitleEs = `${arch.titles.es} — ${academicTemplate.titlePrefix.es}`;
    const profTitleEn = `${arch.titles.en} — ${academicTemplate.titlePrefix.en}`;

    const academic: AcademicStructure = {
      level: academicTemplate.level,
      durationYears: academicTemplate.durationYears,
      totalSemesters: academicTemplate.totalSemesters,
      degreeAwarded: {
        es: degreeTitleEs,
        en: degreeTitleEn,
      },
      professionalTitle: {
        es: profTitleEs,
        en: profTitleEn,
      },
      admissionRequirements: academicTemplate.admissionRequirements,
      graduationRequirements: academicTemplate.graduationRequirements,
    };

    return {
      id: `${countryId}-${arch.idSuffix}`,
      countryId: countryId,
      slug: `${arch.slug}-${countryId}`,
      category: arch.category,
      iconName: arch.iconName,
      title: {
        es: `${arch.titles.es} (${targetCountry.name.es})`,
        en: `${arch.titles.en} (${targetCountry.name.en})`,
      },
      shortDescription: {
        es: `${arch.descriptions.short.es} Plan oficial en ${targetCountry.name.es}.`,
        en: `${arch.descriptions.short.en} Official curriculum in ${targetCountry.name.en}.`,
      },
      fullDescription: {
        es: `${arch.descriptions.full.es} En ${targetCountry.name.es}, el programa tiene una duración de ${academicTemplate.durationYears} años (${academicTemplate.totalSemesters} semestres) y cuenta con acreditación ante ${academicTemplate.professionalCouncil}.`,
        en: `${arch.descriptions.full.en} In ${targetCountry.name.en}, the academic program has an official duration of ${academicTemplate.durationYears} years (${academicTemplate.totalSemesters} semesters) with professional accreditation.`,
      },
      salary: {
        currencyCode: targetCountry.currency.code,
        currencySymbol: targetCountry.currency.symbol,
        entryLevelMonthly: calculatedEntry,
        averageMonthly: calculatedAvg,
        seniorMonthly: calculatedSenior,
        year: 2026,
        source: targetCountry.officialSources[0]?.name || 'Observatorio Laboral Oficial 2026',
        sourceUrl: targetCountry.officialSources[0]?.url,
        hourlyOrAnnualNote: {
          es: `La remuneración depende directamente de los años de experiencia: inicial/mínimo (0-2 años), promedio de mercado (3-5 años) y mayor experiencia/senior (6+ años) en ${targetCountry.name.es}.`,
          en: `Compensation strictly depends on verified work experience: entry/minimum (0-2 yrs), market median (3-5 yrs), and senior/leadership (6+ yrs) in ${targetCountry.name.en}.`,
        },
      },
      academic: academic,
      curriculumAreas: arch.curriculum,
      workSectors: arch.workSectors,
      ranking: {
        nationalRankSalary: arch.rankings.salary,
        nationalRankDemand: arch.rankings.demand,
        employabilityRatePercent: arch.rankings.employability,
        futureGrowthScorePercent: arch.rankings.growth,
      },
      sources: targetCountry.officialSources,
    };
  });

  return generatedCareers;
}

export function getAllCareers(): EngineeringCareer[] {
  let all: EngineeringCareer[] = [];
  for (const country of COUNTRIES) {
    all = all.concat(getCareersForCountry(country.id));
  }
  return all;
}

export function getCareerById(id: string): EngineeringCareer | undefined {
  const all = getAllCareers();
  return all.find((c) => c.id === id);
}

export function searchCareers(query: string, countryId?: string): EngineeringCareer[] {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return [];

  const pool = countryId ? getCareersForCountry(countryId) : getAllCareers();

  return pool.filter((career) => {
    const matchTitleEs = career.title.es.toLowerCase().includes(cleanQuery);
    const matchTitleEn = career.title.en.toLowerCase().includes(cleanQuery);
    const matchDescEs = career.shortDescription.es.toLowerCase().includes(cleanQuery);
    const matchDescEn = career.shortDescription.en.toLowerCase().includes(cleanQuery);
    const matchSlug = career.slug.toLowerCase().includes(cleanQuery);
    const matchCategory = career.category.toLowerCase().includes(cleanQuery);

    const matchAcademic =
      career.academic.degreeAwarded.es.toLowerCase().includes(cleanQuery) ||
      career.academic.degreeAwarded.en.toLowerCase().includes(cleanQuery) ||
      career.academic.professionalTitle.es.toLowerCase().includes(cleanQuery);

    const matchSubjects = career.curriculumAreas.some((area) =>
      area.subjects.es.some((s) => s.toLowerCase().includes(cleanQuery)) ||
      area.subjects.en.some((s) => s.toLowerCase().includes(cleanQuery))
    );

    return matchTitleEs || matchTitleEn || matchDescEs || matchDescEn || matchSlug || matchCategory || matchAcademic || matchSubjects;
  });
}

export function getRankingsForCountry(countryId: string, sortBy: RankingSortCriteria = 'salary'): EngineeringCareer[] {
  const careers = getCareersForCountry(countryId);

  return [...careers].sort((a, b) => {
    if (sortBy === 'salary') {
      return b.salary.averageMonthly - a.salary.averageMonthly;
    }
    if (sortBy === 'demand') {
      return a.ranking.nationalRankDemand - b.ranking.nationalRankDemand;
    }
    if (sortBy === 'employability') {
      return b.ranking.employabilityRatePercent - a.ranking.employabilityRatePercent;
    }
    if (sortBy === 'growth') {
      return b.ranking.futureGrowthScorePercent - a.ranking.futureGrowthScorePercent;
    }
    return 0;
  });
}

export function formatCurrency(amount: number, currencyCode: string, currencySymbol: string): string {
  const formatted = new Intl.NumberFormat('es-PE', {
    maximumFractionDigits: 0,
  }).format(amount);

  return `${currencySymbol} ${formatted} ${currencyCode}`;
}

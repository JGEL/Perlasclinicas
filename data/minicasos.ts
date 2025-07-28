
import { MiniCase } from '../types';

const miniCases: MiniCase[] = [
  {
    id: "MC001",
    term: "Dolor abdominal en Fosa Iliaca Derecha",
    definition: "Un hombre de 22 años acude a urgencias por dolor abdominal que comenzó hace 12 horas en la zona periumbilical y ahora se localiza en la fosa ilíaca derecha. Presenta náuseas, febrícula (38.1°C) y signo de Blumberg positivo.",
    quizOptions: [
      { id: 'A', text: 'Iniciar antibioterapia de amplio espectro y observar evolución.' },
      { id: 'B', text: 'Solicitar TC abdominal con contraste y valoración por Cirugía General.' },
      { id: 'C', text: 'Administrar analgesia potente y dar de alta con pautas de alarma.' }
    ],
    correctAnswerId: 'B',
    clinicalPearl: "La migración del dolor periumbilical a la fosa ilíaca derecha es un signo clásico de apendicitis aguda. Ante una alta sospecha clínica, la valoración quirúrgica es prioritaria y la TC confirma el diagnóstico y descarta complicaciones.",
    rotation: "Cirugía General",
    difficulty: "baja"
  },
  {
    id: "MC002",
    term: "Disnea Súbita y Dolor Torácico",
    definition: "Una mujer de 68 años, en postoperatorio de una prótesis de cadera hace 3 días, presenta disnea súbita, dolor torácico pleurítico y taquicardia (110 lpm). La saturación de oxígeno es del 89%.",
    quizOptions: [
      { id: 'A', text: 'Administrar un diurético por posible sobrecarga de líquidos.' },
      { id: 'B', text: 'Realizar un electrocardiograma y solicitar troponinas por sospecha de infarto.' },
      { id: 'C', text: 'Iniciar oxigenoterapia, solicitar Angio-TC pulmonar y comenzar anticoagulación.' }
    ],
    correctAnswerId: 'C',
    clinicalPearl: "En un paciente con factores de riesgo (cirugía reciente, inmovilización), la aparición súbita de disnea, dolor pleurítico y taquicardia es altamente sugestiva de embolia pulmonar. El Angio-TC es la prueba de imagen de elección.",
    rotation: "Medicina Interna",
    difficulty: "alta"
  },
  {
    id: "MC003",
    term: "Crisis Hipertensiva y Cefalea",
    definition: "Un hombre de 55 años con antecedentes de hipertensión mal controlada acude por cefalea intensa, visión borrosa y una presión arterial de 220/130 mmHg. No presenta focalidad neurológica.",
    quizOptions: [
      { id: 'A', text: 'Administrar captopril sublingual y dar de alta cuando baje la PA.' },
      { id: 'B', text: 'Ingresar al paciente para descenso gradual de la PA con fármacos intravenosos (ej. labetalol) y estudio de daño orgánico.' },
      { id: 'C', text: 'Aumentar su medicación oral habitual y revaluar en 24 horas.' }
    ],
    correctAnswerId: 'B',
    clinicalPearl: "Una PA >180/120 mmHg con signos de daño agudo a órgano diana (en este caso, retinopatía hipertensiva evidenciada por la visión borrosa) constituye una emergencia hipertensiva. Requiere ingreso y reducción controlada de la PA para evitar isquemia.",
    rotation: "Urgencias",
    difficulty: "alta"
  },
  {
    id: "MC004",
    term: "Lactante con Tos Perruna",
    definition: "Un niño de 18 meses es traído a urgencias a las 2 AM por presentar tos metálica (perruna), estridor inspiratorio y disfonía de inicio brusco. No tiene fiebre alta.",
    quizOptions: [
      { id: 'A', text: 'Administrar una dosis de dexametasona oral y observar.' },
      { id: 'B', text: 'Iniciar antibioterapia por sospecha de epiglotitis.' },
      { id: 'C', text: 'Realizar una radiografía de tórax para descartar neumonía.' }
    ],
    correctAnswerId: 'A',
    clinicalPearl: "La tríada de tos perruna, estridor y disfonía es característica del crup o laringitis subglótica. El tratamiento de elección en casos leves-moderados es una dosis única de corticoides (dexametasona) para reducir la inflamación laríngea.",
    rotation: "Pediatría",
    difficulty: "baja"
  },
  {
    id: "MC005",
    term: "Palpitaciones y Pulso Irregular",
    definition: "Una mujer de 72 años consulta por palpitaciones y cansancio. En la exploración, se detecta un pulso arrítmico a 130 lpm. El electrocardiograma muestra un ritmo irregularmente irregular sin ondas P claras.",
    quizOptions: [
      { id: 'A', text: 'Realizar cardioversión eléctrica inmediata.' },
      { id: 'B', text: 'Iniciar control de frecuencia cardíaca (ej. bisoprolol) y valorar anticoagulación según escala CHA₂DS₂-VASc.' },
      { id: 'C', text: 'Dar de alta con un Holter de 24h para confirmar la arritmia.' }
    ],
    correctAnswerId: 'B',
    clinicalPearl: "El ECG es diagnóstico de fibrilación auricular (FA). En un paciente estable, la estrategia inicial es controlar la frecuencia ventricular. La anticoagulación es crucial para prevenir eventos embólicos y su inicio se basa en la puntuación de riesgo (CHA₂DS₂-VASc).",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    id: "MC006",
    term: "Neumonía adquirida en la comunidad",
    definition: "Varón de 55 años, fumador, acude por fiebre, tos productiva y dolor torácico pleurítico. En la auscultación se detectan crepitantes en base pulmonar derecha.",
    quizOptions: [
      { id: "A", text: "Amoxicilina-clavulánico" },
      { id: "B", text: "Ciprofloxacino" },
      { id: "C", text: "Doxiciclina" }
    ],
    correctAnswerId: "A",
    clinicalPearl: "En España, la amoxicilina-clavulánico es el antibiótico empírico de primera elección en neumonía adquirida en la comunidad sin criterios de gravedad.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "media"
  },
  {
    id: "MC007",
    term: "Infección urinaria no complicada en mujer joven",
    definition: "Mujer de 25 años, sin antecedentes, consulta por disuria, polaquiuria y urgencia miccional. No fiebre ni dolor lumbar.",
    quizOptions: [
      { id: "A", text: "Amoxicilina" },
      { id: "B", text: "Fosfomicina trometamol" },
      { id: "C", text: "Ciprofloxacino" }
    ],
    correctAnswerId: "B",
    clinicalPearl: "La fosfomicina trometamol en dosis única es el tratamiento de elección para cistitis no complicada en mujeres jóvenes.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "baja"
  },
  {
    id: "MC008",
    term: "Meningitis bacteriana aguda",
    definition: "Varón de 20 años, fiebre alta, cefalea intensa, rigidez de nuca y fotofobia. LCR: pleocitosis con predominio de PMN, glucosa baja, proteínas elevadas.",
    quizOptions: [
      { id: "A", text: "Amoxicilina" },
      { id: "B", text: "Vancomicina" },
      { id: "C", text: "Ceftriaxona + vancomicina" }
    ],
    correctAnswerId: "C",
    clinicalPearl: "En adultos jóvenes, la combinación de ceftriaxona y vancomicina cubre los principales patógenos de la meningitis bacteriana aguda.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "alta"
  },
  {
    id: "MC009",
    term: "Celulitis bacteriana en miembro inferior",
    definition: "Mujer de 60 años, diabética, presenta eritema, calor y dolor en pierna izquierda, con fiebre de 38,5°C.",
    quizOptions: [
      { id: "A", text: "Ciprofloxacino" },
      { id: "B", text: "Claritromicina" },
      { id: "C", text: "Amoxicilina-clavulánico" }
    ],
    correctAnswerId: "C",
    clinicalPearl: "Amoxicilina-clavulánico es de elección en celulitis no complicada porque cubre estreptococos y estafilococos.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "media"
  },
  {
    id: "MC010",
    term: "Tuberculosis pulmonar",
    definition: "Varón de 38 años, inmigrante, tos crónica, hemoptisis, sudoración nocturna y pérdida de peso. Rx tórax: infiltrado apical con cavitación.",
    quizOptions: [
      { id: "A", text: "Amoxicilina-clavulánico" },
      { id: "B", text: "Isoniazida + rifampicina + pirazinamida + etambutol" },
      { id: "C", text: "Claritromicina" }
    ],
    correctAnswerId: "B",
    clinicalPearl: "El tratamiento inicial de la tuberculosis activa siempre incluye cuatro fármacos: isoniazida, rifampicina, pirazinamida y etambutol.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "alta"
  },
  {
    id: "MC011",
    term: "Faringoamigdalitis aguda estreptocócica",
    definition: "Mujer de 16 años, fiebre, odinofagia, exudado amigdalar y adenopatías cervicales dolorosas. No tos ni rinorrea.",
    quizOptions: [
      { id: "A", text: "Penicilina V" },
      { id: "B", text: "Claritromicina" },
      { id: "C", text: "Ciprofloxacino" }
    ],
    correctAnswerId: "A",
    clinicalPearl: "En faringoamigdalitis estreptocócica, la penicilina V sigue siendo el tratamiento de elección.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "baja"
  },
  {
    id: "MC012",
    term: "Pielonefritis aguda en mujer joven",
    definition: "Mujer de 30 años, fiebre alta, dolor lumbar, disuria y puño-percusión lumbar positiva. Urocultivo pendiente.",
    quizOptions: [
      { id: "A", text: "Amoxicilina" },
      { id: "B", text: "Doxiciclina" },
      { id: "C", text: "Ciprofloxacino" }
    ],
    correctAnswerId: "C",
    clinicalPearl: "En pielonefritis aguda no complicada, ciprofloxacino oral es el antibiótico de elección si no hay contraindicaciones.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "media"
  },
  {
    id: "MC013",
    term: "Endocarditis infecciosa en portador de prótesis valvular",
    definition: "Varón de 65 años, portador de prótesis valvular, fiebre prolongada y soplo cardíaco nuevo. Hemocultivos positivos a Streptococcus.",
    quizOptions: [
      { id: "A", text: "Amoxicilina-clavulánico" },
      { id: "B", text: "Ciprofloxacino + metronidazol" },
      { id: "C", text: "Vancomicina + gentamicina" }
    ],
    correctAnswerId: "C",
    clinicalPearl: "En endocarditis sobre prótesis valvular, la combinación de vancomicina y gentamicina cubre tanto cocos grampositivos como enterococos.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "alta"
  },
  {
    id: "MC014",
    term: "Herpes zóster",
    definition: "Mujer de 70 años, dolor y erupción vesicular en dermatoma torácico derecho, de 3 días de evolución.",
    quizOptions: [
      { id: "A", text: "Amoxicilina" },
      { id: "B", text: "Claritromicina" },
      { id: "C", text: "Aciclovir" }
    ],
    correctAnswerId: "C",
    clinicalPearl: "El aciclovir oral es el tratamiento de elección en herpes zóster si se inicia en las primeras 72 horas.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "baja"
  },
  {
    id: "MC015",
    term: "Infección respiratoria por virus de la gripe en asmático",
    definition: "Varón de 28 años, asmático, fiebre alta, tos seca, disnea y artromialgias. PCR positiva para gripe B.",
    quizOptions: [
      { id: "A", text: "Amoxicilina" },
      { id: "B", text: "Doxiciclina" },
      { id: "C", text: "Oseltamivir" }
    ],
    correctAnswerId: "C",
    clinicalPearl: "En pacientes con asma y gripe confirmada, el oseltamivir reduce complicaciones y debe iniciarse precozmente.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "media"
  },
  {
    id: "MC016",
    term: "Erisipela en miembro inferior",
    definition: "Varón de 62 años, antecedentes de insuficiencia venosa, presenta eritema brillante, dolor y fiebre de 38,7°C en pierna derecha.",
    quizOptions: [
      { id: "A", text: "Penicilina V" },
      { id: "B", text: "Claritromicina" },
      { id: "C", text: "Ciprofloxacino" }
    ],
    correctAnswerId: "A",
    clinicalPearl: "La penicilina V es el tratamiento de elección en la erisipela, causada típicamente por Streptococcus pyogenes.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "media"
  },
  {
    id: "MC017",
    term: "Gonococia uretral",
    definition: "Varón de 24 años, secreción uretral purulenta y disuria tras contacto sexual sin protección.",
    quizOptions: [
      { id: "A", text: "Ceftriaxona IM dosis única" },
      { id: "B", text: "Amoxicilina oral" },
      { id: "C", text: "Claritromicina oral" }
    ],
    correctAnswerId: "A",
    clinicalPearl: "La ceftriaxona intramuscular en dosis única es el tratamiento de elección para la infección gonocócica.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "baja"
  },
  {
    id: "MC018",
    term: "Candidiasis orofaríngea",
    definition: "Mujer de 40 años, VIH+, placas blanquecinas en lengua y mucosa oral, dolor al tragar.",
    quizOptions: [
      { id: "A", text: "Amoxicilina" },
      { id: "B", text: "Fluconazol oral" },
      { id: "C", text: "Ciprofloxacino" }
    ],
    correctAnswerId: "B",
    clinicalPearl: "El fluconazol oral es el tratamiento de elección para la candidiasis orofaríngea en pacientes inmunodeprimidos.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "media"
  },
  {
    id: "MC019",
    term: "Diarrea del viajero",
    definition: "Hombre de 35 años, tras viaje a India, presenta diarrea acuosa, dolor abdominal y fiebre baja.",
    quizOptions: [
      { id: "A", text: "Amoxicilina" },
      { id: "B", text: "Azitromicina" },
      { id: "C", text: "Metronidazol" }
    ],
    correctAnswerId: "B",
    clinicalPearl: "La azitromicina es el antibiótico de elección en diarrea del viajero, especialmente en Asia por resistencia a quinolonas.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "media"
  },
  {
    id: "MC020",
    term: "Sífilis primaria",
    definition: "Hombre de 29 años, úlcera indolora en pene y adenopatía inguinal no dolorosa. Serología positiva para Treponema pallidum.",
    quizOptions: [
      { id: "A", text: "Doxiciclina" },
      { id: "B", text: "Ceftriaxona" },
      { id: "C", text: "Penicilina G benzatina IM dosis única" }
    ],
    correctAnswerId: "C",
    clinicalPearl: "La penicilina G benzatina intramuscular en dosis única es el tratamiento de elección para la sífilis primaria.",
    rotation: "Enfermedades Infecciosas",
    difficulty: "media"
  },
  {
    id: "MC021",
    term: "Dolor torácico típico en reposo",
    definition: "Varón de 58 años, hipertenso y fumador, presenta dolor torácico opresivo en reposo, irradiado a brazo izquierdo, de 30 minutos de duración.",
    quizOptions: [
      { id: "A", text: "Alta con control ambulatorio" },
      { id: "B", text: "Solicitar ECG y enzimas cardíacas de urgencia" },
      { id: "C", text: "Administrar antiácidos y observar" }
    ],
    correctAnswerId: "B",
    clinicalPearl: "El dolor torácico típico en reposo sugiere síndrome coronario agudo; requiere ECG y marcadores cardíacos inmediatos.",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    id: "MC022",
    term: "Disnea paroxística nocturna",
    definition: "Mujer de 72 años con antecedentes de hipertensión y diabetes, refiere episodios nocturnos de disnea que la despiertan.",
    quizOptions: [
      { id: "A", text: "Sospechar insuficiencia cardíaca y solicitar ecocardiograma" },
      { id: "B", text: "Tratar con broncodilatadores" },
      { id: "C", text: "Recomendar dormir sentada" }
    ],
    correctAnswerId: "A",
    clinicalPearl: "La disnea paroxística nocturna es un síntoma característico de insuficiencia cardíaca izquierda.",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    id: "MC023",
    term: "Edema maleolar bilateral",
    definition: "Varón de 68 años, antecedentes de cardiopatía isquémica, consulta por edema en ambos tobillos, ortopnea y aumento de peso.",
    quizOptions: [
      { id: "A", text: "Recomendar dieta baja en sal únicamente" },
      { id: "B", text: "Iniciar diurético y valorar función cardíaca" },
      { id: "C", text: "Solicitar radiografía de tobillo" }
    ],
    correctAnswerId: "B",
    clinicalPearl: "El edema maleolar bilateral en un paciente cardiópata suele indicar insuficiencia cardíaca congestiva.",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    id: "MC024",
    term: "Síncope en esfuerzo",
    definition: "Varón de 19 años, sin antecedentes, sufre síncope durante partido de fútbol. ECG muestra QTc prolongado.",
    quizOptions: [
      { id: "A", text: "Alta con control ambulatorio" },
      { id: "B", text: "Remitir a cardiología para estudio de canalopatía" },
      { id: "C", text: "Recomendar evitar ejercicio físico" }
    ],
    correctAnswerId: "B",
    clinicalPearl: "El síncope en esfuerzo y QT largo sugieren canalopatía; requiere valoración especializada.",
    rotation: "Cardiología",
    difficulty: "alta"
  },
  {
    id: "MC025",
    term: "Palpitaciones y pulso irregular",
    definition: "Una mujer de 72 años consulta por palpitaciones y cansancio. En la exploración, se detecta un pulso arrítmico a 130 lpm. El electrocardiograma muestra un ritmo irregularmente irregular sin ondas P claras.",
    quizOptions: [
      { id: "A", text: "Realizar cardioversión eléctrica inmediata." },
      { id: "B", text: "Iniciar control de frecuencia cardíaca (ej. bisoprolol) y valorar anticoagulación según escala CHA₂DS₂-VASc." },
      { id: "C", text: "Dar de alta con un Holter de 24h para confirmar la arritmia." }
    ],
    correctAnswerId: "B",
    clinicalPearl: "El ECG es diagnóstico de fibrilación auricular (FA). En un paciente estable, la estrategia inicial es controlar la frecuencia ventricular. La anticoagulación es crucial para prevenir eventos embólicos y su inicio se basa en la puntuación de riesgo (CHA₂DS₂-VASc).",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    id: "MC026",
    term: "Dolor torácico atípico en mujer joven",
    definition: "Mujer de 32 años, sin factores de riesgo, dolor torácico punzante, no relacionado con el ejercicio, ECG normal.",
    quizOptions: [
      { id: "A", text: "Ingresar para monitorización" },
      { id: "B", text: "Alta con recomendaciones y seguimiento ambulatorio" },
      { id: "C", text: "Solicitar coronariografía urgente" }
    ],
    correctAnswerId: "B",
    clinicalPearl: "El dolor torácico atípico en paciente joven y ECG normal rara vez es de origen cardíaco.",
    rotation: "Cardiología",
    difficulty: "baja"
  },
  {
    id: "MC027",
    term: "Bradicardia sintomática",
    definition: "Varón de 80 años, mareo y síncope. Pulso 38 lpm, PA 90/50 mmHg. ECG: bloqueo AV completo.",
    quizOptions: [
      { id: "A", text: "Iniciar atropina y preparar marcapasos transitorio" },
      { id: "B", text: "Administrar betabloqueantes" },
      { id: "C", text: "Observar sin tratamiento" }
    ],
    correctAnswerId: "A",
    clinicalPearl: "La bradicardia sintomática con bloqueo AV completo requiere tratamiento inmediato con atropina y marcapasos.",
    rotation: "Cardiología",
    difficulty: "alta"
  },
  {
    id: "MC028",
    term: "Soplo sistólico irradiado a carótidas",
    definition: "Mujer de 78 años, disnea de esfuerzo y síncope. Soplo sistólico en foco aórtico irradiado a carótidas.",
    quizOptions: [
      { id: "A", text: "Administrar antibióticos" },
      { id: "B", text: "Iniciar anticoagulación" },
      { id: "C", text: "Sospechar estenosis aórtica y solicitar ecocardiograma" }
    ],
    correctAnswerId: "C",
    clinicalPearl: "El soplo sistólico irradiado a carótidas es característico de la estenosis aórtica.",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    id: "MC029",
    term: "Hipertensión arterial asintomática",
    definition: "Varón de 45 años, PA 162/98 mmHg en dos ocasiones, sin síntomas ni daño de órgano diana.",
    quizOptions: [
      { id: "A", text: "Iniciar tratamiento antihipertensivo oral" },
      { id: "B", text: "Ingresar para control estricto" },
      { id: "C", text: "Solo dieta y ejercicio" }
    ],
    correctAnswerId: "A",
    clinicalPearl: "La hipertensión arterial persistente sin síntomas requiere inicio de tratamiento farmacológico y cambios en el estilo de vida.",
    rotation: "Cardiología",
    difficulty: "baja"
  },
  {
    id: "MC030",
    term: "Soplo diastólico en decúbito",
    definition: "Mujer de 67 años, disnea y soplo diastólico en ápex, que aumenta en decúbito lateral izquierdo.",
    quizOptions: [
      { id: "A", text: "Iniciar tratamiento con IECA" },
      { id: "B", text: "Solicitar ecocardiograma para descartar insuficiencia mitral" },
      { id: "C", text: "Administrar diuréticos de inmediato" }
    ],
    correctAnswerId: "B",
    clinicalPearl: "El soplo diastólico en ápex es sugestivo de insuficiencia mitral o estenosis mitral; el ecocardiograma es fundamental.",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    id: "MC031",
    term: "Embolia pulmonar aguda",
    definition: "Varón de 54 años, dolor torácico súbito, disnea, taquicardia y antecedente de cirugía reciente.",
    quizOptions: [
      { id: "A", text: "Solicitar angio-TC pulmonar" },
      { id: "B", text: "Administrar antibióticos" },
      { id: "C", text: "Alta con seguimiento ambulatorio" }
    ],
    correctAnswerId: "A",
    clinicalPearl: "La sospecha de embolia pulmonar requiere confirmación diagnóstica con angio-TC.",
    rotation: "Cardiología",
    difficulty: "alta"
  },
  {
    id: "MC032",
    term: "Soplo holosistólico en borde esternal izquierdo",
    definition: "Varón de 60 años, disnea y soplo holosistólico en borde esternal izquierdo bajo, irradiado a la axila.",
    quizOptions: [
      { id: "A", text: "Sospechar insuficiencia tricuspídea" },
      { id: "B", text: "Iniciar anticoagulación" },
      { id: "C", text: "Administrar betabloqueantes" }
    ],
    correctAnswerId: "A",
    clinicalPearl: "El soplo holosistólico en borde esternal izquierdo bajo sugiere insuficiencia tricuspídea.",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    id: "MC033",
    term: "IAM con elevación del ST",
    definition: "Varón de 62 años, dolor torácico intenso, sudoración y ECG con elevación del ST en derivaciones inferiores.",
    quizOptions: [
      { id: "A", text: "Administrar nitroglicerina sublingual y oxígeno" },
      { id: "B", text: "Activar código infarto y preparar para angioplastia urgente" },
      { id: "C", text: "Alta con control ambulatorio" }
    ],
    correctAnswerId: "B",
    clinicalPearl: "El IAM con elevación del ST requiere reperfusión urgente, preferiblemente mediante angioplastia.",
    rotation: "Cardiología",
    difficulty: "alta"
  },
  {
    id: "MC034",
    term: "Pericarditis aguda",
    definition: "Mujer de 40 años, dolor torácico pleurítico, fiebre y roce pericárdico a la auscultación. ECG: elevación difusa del ST.",
    quizOptions: [
      { id: "A", text: "Administrar AINEs y reposo" },
      { id: "B", text: "Iniciar anticoagulación" },
      { id: "C", text: "Ingresar para fibrinólisis" }
    ],
    correctAnswerId: "A",
    clinicalPearl: "El tratamiento de la pericarditis aguda idiopática suele ser con antiinflamatorios y reposo.",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    id: "MC035",
    term: "Hipertensión arterial secundaria",
    definition: "Mujer de 48 años, hipertensión de difícil control, hipopotasemia y soplo abdominal.",
    quizOptions: [
      { id: "A", text: "Sospechar estenosis de arteria renal" },
      { id: "B", text: "Iniciar tratamiento con espironolactona" },
      { id: "C", text: "Administrar calcioantagonistas" }
    ],
    correctAnswerId: "A",
    clinicalPearl: "La hipertensión resistente con hipopotasemia y soplo abdominal sugiere estenosis de arteria renal.",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    id: "MC036",
    term: "Taquicardia supraventricular paroxística",
    definition: "Varón de 30 años, palpitaciones súbitas, ECG: QRS estrecho, frecuencia 180 lpm.",
    quizOptions: [
      { id: "A", text: "Iniciar anticoagulación" },
      { id: "B", text: "Administrar adenosina en bolo" },
      { id: "C", text: "Administrar amiodarona intravenosa" }
    ],
    correctAnswerId: "B",
    clinicalPearl: "La adenosina es el fármaco de elección para revertir taquicardias supraventriculares paroxísticas.",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    id: "MC037",
    term: "Cardiopatía isquémica silente",
    definition: "Mujer de 65 años, diabética, asintomática, ECG de control: ondas Q patológicas en cara inferior.",
    quizOptions: [
      { id: "A", text: "Iniciar tratamiento antibiótico" },
      { id: "B", text: "Alta sin más estudios" },
      { id: "C", text: "Sospechar infarto previo silente" }
    ],
    correctAnswerId: "C",
    clinicalPearl: "Las ondas Q patológicas en un ECG de control sugieren infarto previo, especialmente en diabéticos.",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    id: "MC038",
    term: "Miocardiopatía dilatada",
    definition: "Varón de 50 años, disnea progresiva, edemas y cardiomegalia en radiografía de tórax.",
    quizOptions: [
      { id: "A", text: "Solicitar ecocardiograma para valorar función sistólica" },
      { id: "B", text: "Iniciar tratamiento antibiótico" },
      { id: "C", text: "Administrar calcioantagonistas" }
    ],
    correctAnswerId: "A",
    clinicalPearl: "El ecocardiograma es esencial para el diagnóstico y manejo de la miocardiopatía dilatada.",
    rotation: "Cardiología",
    difficulty: "media"
  },
  {
    "id": "MC039",
    "term": "Apendicitis aguda",
    "definition": "Varón de 21 años, dolor abdominal en fosa ilíaca derecha, fiebre y leucocitosis.",
    "quizOptions": [
      { "id": "A", "text": "Solicitar TAC abdominal" },
      { "id": "B", "text": "Iniciar antibióticos y observación" },
      { "id": "C", "text": "Indicar apendicectomía urgente" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "El tratamiento de elección en la apendicitis aguda es la apendicectomía urgente para evitar complicaciones.",
    "rotation": "Cirugía General",
    "difficulty": "fácil"
  },
  {
    "id": "MC040",
    "term": "Colecistitis aguda litiásica",
    "definition": "Mujer de 45 años, dolor en hipocondrio derecho, fiebre y Murphy positivo.",
    "quizOptions": [
      { "id": "A", "text": "Indicar colecistectomía laparoscópica" },
      { "id": "B", "text": "Alta con dieta baja en grasas" },
      { "id": "C", "text": "Administrar antiácidos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La colecistectomía laparoscópica es el tratamiento de elección en la colecistitis aguda litiásica.",
    "rotation": "Cirugía General",
    "difficulty": "fácil"
  },
  {
    "id": "MC041",
    "term": "Hernia inguinal incarcerada",
    "definition": "Varón de 70 años, masa dolorosa e irreductible en región inguinal derecha, náuseas y vómitos.",
    "quizOptions": [
      { "id": "A", "text": "Reducción manual y observación" },
      { "id": "B", "text": "Indicar cirugía urgente" },
      { "id": "C", "text": "Administrar analgésicos y alta" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La hernia incarcerada requiere intervención quirúrgica urgente para evitar isquemia intestinal.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "MC042",
    "term": "Absceso perianal",
    "definition": "Hombre de 35 años, dolor intenso perianal, fiebre y tumefacción fluctuante cerca del ano.",
    "quizOptions": [
      { "id": "A", "text": "Drenaje quirúrgico urgente" },
      { "id": "B", "text": "Antibióticos orales únicamente" },
      { "id": "C", "text": "Alta con analgésicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento de elección del absceso perianal es el drenaje quirúrgico precoz.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "MC043",
    "term": "Diverticulitis aguda no complicada",
    "definition": "Mujer de 62 años, dolor en fosa ilíaca izquierda, febrícula y leucocitosis. TAC: engrosamiento de sigma sin absceso.",
    "quizOptions": [
      { "id": "A", "text": "Cirugía urgente" },
      { "id": "B", "text": "Antibióticos orales y dieta líquida" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La diverticulitis aguda no complicada se trata habitualmente con antibióticos y dieta líquida.",
    "rotation": "Cirugía General",
    "difficulty": "fácil"
  },
  {
    "id": "MC044",
    "term": "Pancreatitis aguda",
    "definition": "Varón de 50 años, dolor epigástrico irradiado a espalda, náuseas, amilasa elevada.",
    "quizOptions": [
      { "id": "A", "text": "Alta con dieta blanda" },
      { "id": "B", "text": "Cirugía inmediata" },
      { "id": "C", "text": "Reposo digestivo, hidratación y analgesia" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "El tratamiento inicial de la pancreatitis aguda es conservador: reposo digestivo, hidratación y analgesia.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "MC045",
    "term": "Obstrucción intestinal por bridas",
    "definition": "Mujer de 68 años, antecedente de cirugías abdominales previas, dolor abdominal, vómitos y distensión.",
    "quizOptions": [
      { "id": "A", "text": "Sonda nasogástrica e hidratación" },
      { "id": "B", "text": "Cirugía inmediata siempre" },
      { "id": "C", "text": "Administrar laxantes" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La obstrucción intestinal por bridas suele tratarse inicialmente de forma conservadora salvo signos de isquemia o perforación.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "MC046",
    "term": "Perforación de úlcera gástrica",
    "definition": "Varón de 60 años, dolor epigástrico súbito, abdomen en tabla y neumoperitoneo en radiografía.",
    "quizOptions": [
      { "id": "A", "text": "Tratamiento antibiótico exclusivo" },
      { "id": "B", "text": "Cirugía urgente" },
      { "id": "C", "text": "Observación y dieta absoluta" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La perforación de úlcera gástrica es una urgencia quirúrgica que requiere intervención inmediata.",
    "rotation": "Cirugía General",
    "difficulty": "alta"
  },
  {
    "id": "MC047",
    "term": "Eventración postquirúrgica",
    "definition": "Mujer de 55 años, masa abdominal en cicatriz de laparotomía previa, no dolorosa, aumenta con esfuerzo.",
    "quizOptions": [
      { "id": "A", "text": "Reparación quirúrgica programada" },
      { "id": "B", "text": "Alta sin tratamiento" },
      { "id": "C", "text": "Administrar antibióticos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La eventración o hernia incisional se trata mediante reparación quirúrgica electiva.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "MC048",
    "term": "Isquemia mesentérica aguda",
    "definition": "Varón de 75 años, fibrilación auricular, dolor abdominal intenso desproporcionado a la exploración.",
    "quizOptions": [
      { "id": "A", "text": "Anticoagulación oral" },
      { "id": "B", "text": "Cirugía urgente" },
      { "id": "C", "text": "Alta con dieta líquida" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La isquemia mesentérica aguda es una urgencia vital que requiere cirugía inmediata.",
    "rotation": "Cirugía General",
    "difficulty": "alta"
  },
  {
    "id": "MC049",
    "term": "Cólico biliar no complicado",
    "definition": "Mujer de 40 años, dolor en hipocondrio derecho tras comidas copiosas, sin fiebre ni ictericia.",
    "quizOptions": [
      { "id": "A", "text": "Colecistectomía electiva" },
      { "id": "B", "text": "Alta con dieta baja en grasas" },
      { "id": "C", "text": "Antibióticos intravenosos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento definitivo del cólico biliar es la colecistectomía programada.",
    "rotation": "Cirugía General",
    "difficulty": "fácil"
  },
  {
    "id": "MC050",
    "term": "Fisura anal crónica",
    "definition": "Mujer de 35 años, dolor anal intenso con la defecación, sangrado escaso y fisura visible en exploración.",
    "quizOptions": [
      { "id": "A", "text": "Alta sin tratamiento" },
      { "id": "B", "text": "Cirugía inmediata" },
      { "id": "C", "text": "Tratamiento tópico con nitroglicerina" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "El tratamiento inicial de la fisura anal crónica es conservador con pomadas tópicas relajantes del esfínter.",
    "rotation": "Cirugía General",
    "difficulty": "fácil"
  },
  {
    "id": "MC051",
    "term": "Hemorroides sintomáticas",
    "definition": "Varón de 29 años, sangrado rojo brillante con la defecación, prurito y hemorroides externas visibles.",
    "quizOptions": [
      { "id": "A", "text": "Tratamiento médico con medidas higiénico-dietéticas" },
      { "id": "B", "text": "Ligadura con banda elástica inmediata" },
      { "id": "C", "text": "Cirugía urgente" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento inicial de las hemorroides sintomáticas es conservador con dieta rica en fibra y hábitos saludables.",
    "rotation": "Cirugía General",
    "difficulty": "fácil"
  },
  {
    "id": "MC052",
    "term": "Cáncer de colon izquierdo",
    "definition": "Varón de 65 años, rectorragia, cambio del ritmo intestinal y pérdida de peso. Colonoscopia: masa en sigma.",
    "quizOptions": [
      { "id": "A", "text": "Quimioterapia exclusiva" },
      { "id": "B", "text": "Resección quirúrgica programada" },
      { "id": "C", "text": "Observación y control" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de elección del cáncer de colon es la resección quirúrgica del segmento afectado.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "MC053",
    "term": "Traumatismo abdominal cerrado",
    "definition": "Varón de 35 años, accidente de tráfico, dolor abdominal difuso, hipotensión y taquicardia.",
    "quizOptions": [
      { "id": "A", "text": "Exploración quirúrgica urgente" },
      { "id": "B", "text": "Observación en urgencias" },
      { "id": "C", "text": "Administrar analgésicos y alta" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El traumatismo abdominal con inestabilidad hemodinámica requiere laparotomía exploradora urgente.",
    "rotation": "Cirugía General",
    "difficulty": "alta"
  },
  {
    "id": "MC054",
    "term": "Cetoacidosis diabética",
    "definition": "Mujer de 28 años, diabética tipo 1, acude por vómitos, dolor abdominal y respiración de Kussmaul. Glucemia 420 mg/dl, cetonas en orina.",
    "quizOptions": [
      { "id": "A", "text": "Administrar insulina intravenosa y líquidos" },
      { "id": "B", "text": "Alta con ajuste de insulina subcutánea" },
      { "id": "C", "text": "Administrar glucosa oral" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La cetoacidosis diabética requiere tratamiento urgente con insulina IV, fluidoterapia y corrección de electrolitos.",
    "rotation": "Medicina Interna",
    "difficulty": "alta"
  },
  {
    "id": "MC055",
    "term": "Síndrome nefrótico",
    "definition": "Varón de 45 años, edemas en miembros inferiores, proteinuria masiva y hipoalbuminemia.",
    "quizOptions": [
      { "id": "A", "text": "Alta sin tratamiento" },
      { "id": "B", "text": "Administrar antibióticos" },
      { "id": "C", "text": "Iniciar diuréticos y restricción de sal" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "El manejo inicial del síndrome nefrótico incluye diuréticos y restricción salina; requiere estudio etiológico.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "MC056",
    "term": "Hipercalcemia por hiperparatiroidismo",
    "definition": "Mujer de 60 años, astenia, poliuria, dolor óseo y cálculos renales. Calcemia elevada, PTH alta.",
    "quizOptions": [
      { "id": "A", "text": "Administrar calcio oral" },
      { "id": "B", "text": "Hidratación y valoración para paratiroidectomía" },
      { "id": "C", "text": "Alta con seguimiento anual" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La hipercalcemia sintomática se trata con hidratación y, si es primaria, la paratiroidectomía es el tratamiento definitivo.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "MC057",
    "term": "Anemia ferropénica",
    "definition": "Mujer de 35 años, fatiga, palidez, Hb 9 g/dl, ferritina baja y microcitosis.",
    "quizOptions": [
      { "id": "A", "text": "Suplementar con hierro oral" },
      { "id": "B", "text": "Transfusión sanguínea urgente" },
      { "id": "C", "text": "Administrar vitamina B12" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento de la anemia ferropénica es la reposición de hierro, preferiblemente por vía oral.",
    "rotation": "Medicina Interna",
    "difficulty": "fácil"
  },
  {
    "id": "MC058",
    "term": "Crisis hipertensiva",
    "definition": "Varón de 55 años, PA 220/120 mmHg, cefalea intensa y visión borrosa.",
    "quizOptions": [
      { "id": "A", "text": "Solo reposo y observación" },
      { "id": "B", "text": "Alta con ajuste de tratamiento oral" },
      { "id": "C", "text": "Administrar antihipertensivos intravenosos" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "La crisis hipertensiva con daño de órgano diana requiere descenso controlado de la presión con fármacos IV.",
    "rotation": "Medicina Interna",
    "difficulty": "alta"
  },
  {
    "id": "MC059",
    "term": "Síndrome confusional agudo (delirium)",
    "definition": "Mujer de 80 años, desorientación aguda, fluctuante, con infección urinaria diagnosticada.",
    "quizOptions": [
      { "id": "A", "text": "Tratar causa desencadenante y medidas ambientales" },
      { "id": "B", "text": "Administrar antipsicóticos como primera medida" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El delirium se aborda corrigiendo la causa subyacente y con medidas de reorientación; los antipsicóticos son solo de apoyo.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "MC060",
    "term": "Trombosis venosa profunda",
    "definition": "Varón de 65 años, dolor y edema en pierna izquierda, signo de Homans positivo, eco-Doppler confirma trombo.",
    "quizOptions": [
      { "id": "A", "text": "Alta con medias elásticas" },
      { "id": "B", "text": "Iniciar anticoagulación" },
      { "id": "C", "text": "Administrar antibióticos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de la TVP es la anticoagulación inmediata para prevenir embolia pulmonar.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "MC061",
    "term": "Hiponatremia sintomática",
    "definition": "Mujer de 70 años, confusión, náuseas, Na 118 mmol/L, euvolémica.",
    "quizOptions": [
      { "id": "A", "text": "Alta sin tratamiento" },
      { "id": "B", "text": "Restringir líquidos únicamente" },
      { "id": "C", "text": "Corregir lentamente con solución salina hipertónica" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "La hiponatremia sintomática requiere corrección cuidadosa para evitar mielinólisis central pontina.",
    "rotation": "Medicina Interna",
    "difficulty": "alta"
  },
  {
    "id": "MC062",
    "term": "EPOC exacerbado",
    "definition": "Varón de 68 años, fumador, disnea aguda, tos con esputo purulento, sibilancias y uso de músculos accesorios.",
    "quizOptions": [
      { "id": "A", "text": "Broncodilatadores, corticoides y antibióticos" },
      { "id": "B", "text": "Solo oxígeno" },
      { "id": "C", "text": "Alta con control ambulatorio" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La exacerbación de EPOC se trata con broncodilatadores, corticoides sistémicos y antibióticos si hay esputo purulento.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "MC063",
    "term": "Hipertiroidismo",
    "definition": "Mujer de 42 años, pérdida de peso, taquicardia, temblor fino, TSH suprimida, T4 libre elevada.",
    "quizOptions": [
      { "id": "A", "text": "Administrar hormona tiroidea" },
      { "id": "B", "text": "Iniciar antitiroideos (metimazol o propiltiouracilo)" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El hipertiroidismo se trata con antitiroideos, betabloqueantes y, en algunos casos, yodo radiactivo o cirugía.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "MC064",
    "term": "Neumonía adquirida en la comunidad",
    "definition": "Varón de 59 años, fiebre, tos productiva, crepitantes en base pulmonar derecha, infiltrado en Rx.",
    "quizOptions": [
      { "id": "A", "text": "Alta con antipiréticos" },
      { "id": "B", "text": "Iniciar antibiótico empírico (amoxicilina-clavulánico o levofloxacino)" },
      { "id": "C", "text": "Solo oxígeno" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La neumonía comunitaria requiere antibiótico empírico precoz para reducir complicaciones.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "MC065",
    "term": "Arteritis de células gigantes",
    "definition": "Mujer de 74 años, cefalea temporal, claudicación mandibular, VSG elevada y pérdida visual brusca.",
    "quizOptions": [
      { "id": "A", "text": "Iniciar corticoides sistémicos de inmediato" },
      { "id": "B", "text": "Solicitar biopsia antes de tratar" },
      { "id": "C", "text": "Alta con analgésicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La arteritis de células gigantes requiere corticoides inmediatos para prevenir ceguera irreversible.",
    "rotation": "Medicina Interna",
    "difficulty": "alta"
  },
  {
    "id": "MC066",
    "term": "Síndrome hepatorrenal",
    "definition": "Varón de 58 años, cirrosis, ascitis, deterioro renal progresivo, Na bajo y creatinina elevada.",
    "quizOptions": [
      { "id": "A", "text": "Diuréticos de asa en monoterapia" },
      { "id": "B", "text": "Vasoconstrictores y albúmina" },
      { "id": "C", "text": "Alta con dieta baja en sal" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El síndrome hepatorrenal se trata con vasoconstrictores (terlipresina) y albúmina; el trasplante hepático es la solución definitiva.",
    "rotation": "Medicina Interna",
    "difficulty": "alta"
  },
  {
    "id": "MC067",
    "term": "Trombocitopenia inmune primaria (PTI)",
    "definition": "Mujer de 29 años, petequias, equimosis, plaquetas 18.000/µl, sin anemia ni leucopenia.",
    "quizOptions": [
      { "id": "A", "text": "Alta sin tratamiento" },
      { "id": "B", "text": "Transfusión de plaquetas" },
      { "id": "C", "text": "Iniciar corticoides sistémicos" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "El tratamiento inicial de la PTI sintomática es con corticoides; las transfusiones se reservan para sangrado grave.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "MC068",
    "term": "Enfermedad pulmonar intersticial",
    "definition": "Varón de 61 años, disnea progresiva, crepitantes en bases y patrón reticular en TAC.",
    "quizOptions": [
      { "id": "A", "text": "Solicitar valoración por neumología y estudio funcional respiratorio" },
      { "id": "B", "text": "Alta con broncodilatadores" },
      { "id": "C", "text": "Administrar antibióticos empíricos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Las enfermedades intersticiales requieren diagnóstico multidisciplinar y estudio funcional respiratorio.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "MC069",
    "term": "Bronquiolitis aguda",
    "definition": "Lactante de 4 meses, tos, dificultad respiratoria, sibilancias y tiraje subcostal. SatO₂ 92%.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos de amplio espectro" },
      { "id": "B", "text": "Oxigenoterapia y soporte respiratorio" },
      { "id": "C", "text": "Alta con control ambulatorio" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de la bronquiolitis es de soporte; los antibióticos no están indicados salvo sobreinfección.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "MC070",
    "term": "Fiebre sin foco en lactante menor",
    "definition": "Lactante de 2 meses, fiebre de 38,5°C sin foco aparente en la exploración.",
    "quizOptions": [
      { "id": "A", "text": "Antivirales orales" },
      { "id": "B", "text": "Alta con control domiciliario" },
      { "id": "C", "text": "Ingreso para estudio y antibioterapia empírica" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "En menores de 3 meses, la fiebre sin foco requiere ingreso y antibioterapia empírica por riesgo de sepsis.",
    "rotation": "Pediatría",
    "difficulty": "alta"
  },
  {
    "id": "MC071",
    "term": "Laringitis aguda (crup)",
    "definition": "Niño de 3 años, tos perruna, disfonía y estridor inspiratorio. Febrícula.",
    "quizOptions": [
      { "id": "A", "text": "Corticoides orales o nebulizados" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Adrenalina intramuscular" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento de la laringitis viral es con corticoides; la adrenalina nebulizada se reserva para casos graves.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "MC072",
    "term": "Gastroenteritis aguda",
    "definition": "Niño de 18 meses, diarrea acuosa, vómitos y deshidratación leve.",
    "quizOptions": [
      { "id": "A", "text": "Rehidratación oral con sales" },
      { "id": "B", "text": "Antibióticos" },
      { "id": "C", "text": "Antidiarreicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La rehidratación oral es el pilar del tratamiento en la gastroenteritis pediátrica.",
    "rotation": "Pediatría",
    "difficulty": "fácil"
  },
  {
    "id": "MC073",
    "term": "Convulsión febril simple",
    "definition": "Niño de 15 meses, fiebre de 39°C y convulsión tónico-clónica generalizada de 2 minutos. Recuperación completa.",
    "quizOptions": [
      { "id": "A", "text": "Observación y control de la fiebre" },
      { "id": "B", "text": "Iniciar anticonvulsivantes crónicos" },
      { "id": "C", "text": "Ingreso obligatorio" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La convulsión febril simple no requiere tratamiento anticonvulsivante ni ingreso, solo observación.",
    "rotation": "Pediatría",
    "difficulty": "fácil"
  },
  {
    "id": "MC074",
    "term": "Purpura de Schönlein-Henoch",
    "definition": "Niño de 7 años, púrpura palpable en extremidades, dolor abdominal y artralgias.",
    "quizOptions": [
      { "id": "A", "text": "Observación y control sintomático" },
      { "id": "B", "text": "Corticoides sistémicos siempre" },
      { "id": "C", "text": "Antibióticos de amplio espectro" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La púrpura de Schönlein-Henoch es autolimitada y suele requerir solo tratamiento sintomático.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "MC075",
    "term": "Asma infantil aguda leve",
    "definition": "Niño de 6 años, sibilancias y disnea leve tras ejercicio, sin hipoxemia ni dificultad para hablar.",
    "quizOptions": [
      { "id": "A", "text": "Broncodilatador inhalado a demanda" },
      { "id": "B", "text": "Corticoides orales de inicio" },
      { "id": "C", "text": "Antibióticos empíricos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El asma leve se maneja con broncodilatadores inhalados según necesidad.",
    "rotation": "Pediatría",
    "difficulty": "fácil"
  },
  {
    "id": "MC076",
    "term": "Escarlatina",
    "definition": "Niña de 5 años, fiebre, exantema eritematoso, lengua en fresa y faringitis. Prueba rápida de estreptococo positiva.",
    "quizOptions": [
      { "id": "A", "text": "Penicilina V oral" },
      { "id": "B", "text": "Corticoides orales" },
      { "id": "C", "text": "Antivirales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La escarlatina se trata con penicilina oral para prevenir complicaciones.",
    "rotation": "Pediatría",
    "difficulty": "fácil"
  },
  {
    "id": "MC077",
    "term": "Otitis media aguda",
    "definition": "Lactante de 8 meses, fiebre, irritabilidad, otoscopia: membrana timpánica abombada y eritematosa.",
    "quizOptions": [
      { "id": "A", "text": "Amoxicilina oral" },
      { "id": "B", "text": "Antibióticos tópicos" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La amoxicilina oral es el antibiótico de elección en la otitis media aguda en menores de 2 años.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "MC078",
    "term": "Enfermedad mano-pie-boca",
    "definition": "Niño de 2 años, fiebre, lesiones vesiculosas en manos, pies y úlceras orales. Buen estado general.",
    "quizOptions": [
      { "id": "A", "text": "Tratamiento sintomático y medidas de hidratación" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Antivirales sistémicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La enfermedad mano-pie-boca es viral y autolimitada, solo requiere tratamiento sintomático.",
    "rotation": "Pediatría",
    "difficulty": "fácil"
  },
  {
    "id": "MC079",
    "term": "Meningitis bacteriana",
    "definition": "Lactante de 10 meses, fiebre alta, irritabilidad, fontanela abombada y rigidez de nuca.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos intravenosos y hospitalización" },
      { "id": "B", "text": "Antipiréticos y alta" },
      { "id": "C", "text": "Antivirales orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La meningitis bacteriana en lactantes requiere ingreso y antibióticos intravenosos de inmediato.",
    "rotation": "Pediatría",
    "difficulty": "alta"
  },
  {
    "id": "MC080",
    "term": "Testículo agudo",
    "definition": "Niño de 12 años, dolor testicular súbito e intenso, náuseas, reflejo cremastérico ausente.",
    "quizOptions": [
      { "id": "A", "text": "Exploración quirúrgica urgente" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Observación ambulatoria" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El testículo agudo puede deberse a torsión testicular, una urgencia quirúrgica.",
    "rotation": "Pediatría",
    "difficulty": "alta"
  },
  {
    "id": "MC081",
    "term": "Diabetes mellitus tipo 1 debut",
    "definition": "Niña de 8 años, poliuria, polidipsia, pérdida de peso y glucemia 320 mg/dl.",
    "quizOptions": [
      { "id": "A", "text": "Iniciar insulinoterapia" },
      { "id": "B", "text": "Dieta baja en azúcares y control" },
      { "id": "C", "text": "Antidiabéticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El debut de diabetes tipo 1 en niños requiere insulinoterapia inmediata.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "MC082",
    "term": "Enfermedad celíaca",
    "definition": "Niña de 5 años, diarrea crónica, distensión abdominal, pérdida de peso y anemia ferropénica.",
    "quizOptions": [
      { "id": "A", "text": "Dieta estricta sin gluten" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La dieta sin gluten es el único tratamiento eficaz en la enfermedad celíaca.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "MC083",
    "term": "Crisis asmática grave",
    "definition": "Niño de 9 años, disnea intensa, uso de músculos accesorios, SatO₂ 88%.",
    "quizOptions": [
      { "id": "A", "text": "Broncodilatadores inhalados y corticoides sistémicos" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Alta con control domiciliario" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La crisis asmática grave requiere tratamiento urgente con broncodilatadores y corticoides.",
    "rotation": "Pediatría",
    "difficulty": "alta"
  },
  {
    "id": "MC084",
    "term": "Shock anafiláctico",
    "definition": "Mujer de 25 años, picadura de abeja, dificultad respiratoria, hipotensión y urticaria generalizada.",
    "quizOptions": [
      { "id": "A", "text": "Antihistamínicos orales" },
      { "id": "B", "text": "Adrenalina intramuscular" },
      { "id": "C", "text": "Corticoides intravenosos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La adrenalina IM es el tratamiento de elección en el shock anafiláctico; los antihistamínicos y corticoides son secundarios.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "MC085",
    "term": "Infarto agudo de miocardio",
    "definition": "Varón de 62 años, dolor torácico opresivo, sudoración y ECG con elevación del ST.",
    "quizOptions": [
      { "id": "A", "text": "Reposo y observación" },
      { "id": "B", "text": "Administrar nitroglicerina sublingual y oxígeno" },
      { "id": "C", "text": "Activar código infarto y preparar para angioplastia urgente" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "El IAM con elevación del ST requiere reperfusión urgente, preferiblemente mediante angioplastia.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "MC086",
    "term": "Intoxicación por benzodiacepinas",
    "definition": "Mujer de 40 años, somnolienta, pupilas normales, respiración lenta tras ingesta de alprazolam.",
    "quizOptions": [
      { "id": "A", "text": "Flumazenilo intravenoso" },
      { "id": "B", "text": "Carbón activado" },
      { "id": "C", "text": "Observación y soporte vital" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El flumazenilo es el antídoto específico para intoxicación por benzodiacepinas, pero debe usarse con precaución.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "MC087",
    "term": "Cetoacidosis diabética",
    "definition": "Varón de 30 años, DM1, vómitos, dolor abdominal, respiración de Kussmaul, glucemia 480 mg/dl.",
    "quizOptions": [
      { "id": "A", "text": "Administrar insulina subcutánea" },
      { "id": "B", "text": "Insulina intravenosa y fluidoterapia" },
      { "id": "C", "text": "Alta con ajuste de insulina" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La cetoacidosis diabética se trata con insulina IV, fluidoterapia y corrección de electrolitos.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "MC088",
    "term": "Accidente cerebrovascular isquémico agudo",
    "definition": "Mujer de 68 años, hemiparesia brusca, disartria y desviación ocular. TC sin sangrado.",
    "quizOptions": [
      { "id": "A", "text": "Administrar fibrinólisis intravenosa si no hay contraindicaciones" },
      { "id": "B", "text": "Corticoides intravenosos" },
      { "id": "C", "text": "Alta con control ambulatorio" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La fibrinólisis IV es el tratamiento de elección en el ictus isquémico agudo dentro de ventana terapéutica.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "MC089",
    "term": "Hipoglucemia grave",
    "definition": "Varón de 55 años, DM2, inconsciente, glucemia capilar 32 mg/dl.",
    "quizOptions": [
      { "id": "A", "text": "Glucosa oral" },
      { "id": "B", "text": "Glucagón intramuscular" },
      { "id": "C", "text": "Glucosa intravenosa" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "En hipoglucemia grave con alteración de conciencia, la glucosa IV es el tratamiento inmediato.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "MC090",
    "term": "Crisis epiléptica tónico-clónica generalizada",
    "definition": "Mujer de 19 años, convulsión de 4 minutos, recupera conciencia lentamente, sin antecedentes previos.",
    "quizOptions": [
      { "id": "A", "text": "Administrar anticonvulsivante crónico" },
      { "id": "B", "text": "Observación y estudio etiológico" },
      { "id": "C", "text": "Alta inmediata sin pruebas" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "Tras una primera crisis convulsiva, se recomienda observación y estudio, no iniciar tratamiento crónico de entrada.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "MC091",
    "term": "Neumotórax espontáneo",
    "definition": "Varón de 20 años, dolor torácico súbito y disnea. Rx: colapso parcial del pulmón derecho.",
    "quizOptions": [
      { "id": "A", "text": "Colocación de drenaje torácico" },
      { "id": "B", "text": "Observación y oxigenoterapia" },
      { "id": "C", "text": "Toracotomía urgente" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "En neumotórax pequeño y estable, la observación y oxígeno suelen ser suficientes.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "MC092",
    "term": "Hemorragia digestiva alta",
    "definition": "Varón de 65 años, hematemesis y melena, hipotensión y taquicardia.",
    "quizOptions": [
      { "id": "A", "text": "Endoscopia urgente tras estabilización" },
      { "id": "B", "text": "Alta con dieta blanda" },
      { "id": "C", "text": "Administrar antiácidos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La hemorragia digestiva alta requiere estabilización y endoscopia urgente para diagnóstico y tratamiento.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "MC093",
    "term": "Intoxicación por paracetamol",
    "definition": "Mujer de 32 años, ingesta masiva de paracetamol hace 2 horas, asintomática.",
    "quizOptions": [
      { "id": "A", "text": "Lavado gástrico" },
      { "id": "B", "text": "Administrar N-acetilcisteína" },
      { "id": "C", "text": "Alta con control domiciliario" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El antídoto para la intoxicación por paracetamol es la N-acetilcisteína, especialmente si se administra precozmente.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "MC094",
    "term": "Hipotermia moderada",
    "definition": "Varón de 45 años, encontrado en la calle, temperatura axilar 32°C, confuso, bradicárdico.",
    "quizOptions": [
      { "id": "A", "text": "Recalentamiento externo activo" },
      { "id": "B", "text": "Alta con manta térmica" },
      { "id": "C", "text": "Administrar líquidos calientes intravenosos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La hipotermia moderada se trata con recalentamiento externo activo y monitorización.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "MC095",
    "term": "Cólico nefrítico",
    "definition": "Mujer de 35 años, dolor lumbar intenso, hematuria microscópica, sin fiebre.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos" },
      { "id": "B", "text": "Analgesia y control ambulatorio" },
      { "id": "C", "text": "Cirugía urgente" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El cólico nefrítico sin complicaciones se maneja con analgesia y seguimiento ambulatorio.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "MC096",
    "term": "Fractura expuesta de tibia",
    "definition": "Varón de 22 años, accidente de moto, herida sangrante con hueso visible en pierna derecha.",
    "quizOptions": [
      { "id": "A", "text": "Inmovilización y antibióticos" },
      { "id": "B", "text": "Reducción cerrada y alta" },
      { "id": "C", "text": "Cirugía urgente para limpieza y fijación" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "Las fracturas expuestas requieren cirugía urgente para desbridamiento y prevención de infección.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "MC097",
    "term": "Crisis hipertensiva sin daño de órgano diana",
    "definition": "Varón de 60 años, PA 210/110 mmHg, asintomático, sin signos de daño agudo.",
    "quizOptions": [
      { "id": "A", "text": "Descenso gradual con antihipertensivos orales" },
      { "id": "B", "text": "Descenso rápido con antihipertensivos IV" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "En ausencia de daño de órgano diana, la PA se reduce gradualmente con tratamiento oral.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "MC098",
    "term": "Intoxicación etílica aguda",
    "definition": "Adolescente de 16 años, obnubilado, aliento etílico, sin focalidad neurológica.",
    "quizOptions": [
      { "id": "A", "text": "Lavado gástrico" },
      { "id": "B", "text": "Observación y soporte" },
      { "id": "C", "text": "Alta inmediata" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La intoxicación etílica aguda se trata con medidas de soporte y observación hasta la recuperación.",
    "rotation": "Urgencias",
    "difficulty": "fácil"
  },
  {
    "id": "MC099",
    "term": "Psoriasis vulgar",
    "definition": "Varón de 35 años, placas eritematosas cubiertas de escamas blanquecinas en codos y rodillas, prurito leve.",
    "quizOptions": [
      { "id": "A", "text": "Corticoides tópicos" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Antifúngicos tópicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento de primera línea en la psoriasis leve-moderada son los corticoides tópicos.",
    "rotation": "Dermatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC100",
    "term": "Dermatitis atópica",
    "definition": "Niña de 4 años, eccema pruriginoso en pliegues de codos y rodillas, piel seca y antecedentes familiares de alergia.",
    "quizOptions": [
      { "id": "A", "text": "Antihistamínicos orales" },
      { "id": "B", "text": "Corticoides tópicos y emolientes" },
      { "id": "C", "text": "Antibióticos sistémicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de la dermatitis atópica incluye emolientes y corticoides tópicos en brotes.",
    "rotation": "Dermatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC101",
    "term": "Melanoma cutáneo",
    "definition": "Mujer de 52 años, lesión pigmentada asimétrica, bordes irregulares, varios colores y diámetro de 8 mm en la pierna.",
    "quizOptions": [
      { "id": "A", "text": "Biopsia excisional de la lesión" },
      { "id": "B", "text": "Crioterapia" },
      { "id": "C", "text": "Corticoides tópicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Toda lesión sospechosa de melanoma debe ser extirpada completamente para estudio histológico.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "MC102",
    "term": "Tiña corporal",
    "definition": "Niño de 7 años, placas anulares eritematosas con borde descamativo activo en tronco y prurito.",
    "quizOptions": [
      { "id": "A", "text": "Corticoides tópicos" },
      { "id": "B", "text": "Antifúngicos tópicos" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de elección para la tiña corporal son los antifúngicos tópicos.",
    "rotation": "Dermatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC103",
    "term": "Impétigo",
    "definition": "Niño de 6 años, lesiones costrosas melicéricas en cara y alrededor de la boca, sin fiebre.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos tópicos (mupirocina)" },
      { "id": "B", "text": "Corticoides tópicos" },
      { "id": "C", "text": "Antifúngicos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El impétigo leve se trata con antibióticos tópicos como la mupirocina.",
    "rotation": "Dermatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC104",
    "term": "Acné vulgar moderado",
    "definition": "Adolescente de 16 años, pápulas y pústulas en cara y espalda, sin cicatrices.",
    "quizOptions": [
      { "id": "A", "text": "Limpieza con jabón neutro" },
      { "id": "B", "text": "Antibióticos tópicos y retinoides" },
      { "id": "C", "text": "Antifúngicos orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El acné moderado se trata con retinoides y antibióticos tópicos; los sistémicos se reservan para casos graves.",
    "rotation": "Dermatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC105",
    "term": "Urticaria aguda",
    "definition": "Mujer de 30 años, lesiones habonosas pruriginosas que desaparecen en menos de 24h, sin síntomas sistémicos.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Corticoides sistémicos" },
      { "id": "C", "text": "Antihistamínicos orales" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "El tratamiento de elección en la urticaria aguda son los antihistamínicos orales.",
    "rotation": "Dermatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC106",
    "term": "Carcinoma basocelular",
    "definition": "Varón de 68 años, lesión ulcerada, perlada y de crecimiento lento en la mejilla.",
    "quizOptions": [
      { "id": "A", "text": "Crioterapia" },
      { "id": "B", "text": "Extirpación quirúrgica" },
      { "id": "C", "text": "Corticoides tópicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El carcinoma basocelular se trata mediante extirpación quirúrgica completa.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "MC107",
    "term": "Herpes zóster",
    "definition": "Mujer de 55 años, dolor y vesículas agrupadas en dermatoma torácico derecho, de 48h de evolución.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Antivirales sistémicos (aciclovir)" },
      { "id": "C", "text": "Corticoides tópicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento precoz del herpes zóster con antivirales sistémicos reduce la duración y complicaciones.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "MC108",
    "term": "Dermatitis de contacto alérgica",
    "definition": "Mujer de 28 años, eritema, vesículas y prurito en manos tras uso de detergentes.",
    "quizOptions": [
      { "id": "A", "text": "Evitar el contacto y corticoides tópicos" },
      { "id": "B", "text": "Antibióticos sistémicos" },
      { "id": "C", "text": "Antifúngicos tópicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La dermatitis de contacto alérgica se trata evitando el alérgeno y con corticoides tópicos.",
    "rotation": "Dermatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC109",
    "term": "Hipotiroidismo primario en la infancia",
    "definition": "Niña de 10 años, cansancio, piel seca, estreñimiento y TSH elevada con T4 libre baja.",
    "quizOptions": [
      { "id": "A", "text": "Iniciar tratamiento con levotiroxina" },
      { "id": "B", "text": "Administrar corticoides" },
      { "id": "C", "text": "Solo seguimiento clínico" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El hipotiroidismo primario se trata con levotiroxina ajustando la dosis según edad y evolución clínica.",
    "rotation": "Endocrinología",
    "difficulty": "fácil"
  },
  {
    "id": "MC110",
    "term": "Crisis tirotóxica (tormenta tiroidea)",
    "definition": "Mujer de 35 años, antecedentes de hipertiroidismo, fiebre, taquicardia, agitación y vómitos.",
    "quizOptions": [
      { "id": "A", "text": "Alta con ajuste de antitiroideos" },
      { "id": "B", "text": "Beta-bloqueantes, antitiroideos y soporte vital" },
      { "id": "C", "text": "Solo líquidos intravenosos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La tormenta tiroidea es una urgencia vital que requiere tratamiento intensivo con betabloqueantes, antitiroideos y soporte vital.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "MC111",
    "term": "Diabetes mellitus tipo 1 debut",
    "definition": "Niño de 12 años, poliuria, polidipsia, pérdida de peso y glucemia 350 mg/dl.",
    "quizOptions": [
      { "id": "A", "text": "Iniciar insulina subcutánea" },
      { "id": "B", "text": "Antidiabéticos orales" },
      { "id": "C", "text": "Solo dieta y ejercicio" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento de elección en el debut de DM1 es la insulinoterapia subcutánea intensiva.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "MC112",
    "term": "Hiperplasia suprarrenal congénita no clásica",
    "definition": "Niña de 6 años, pubarquia precoz, acné, crecimiento acelerado y 17-OHP elevada.",
    "quizOptions": [
      { "id": "A", "text": "Iniciar glucocorticoides" },
      { "id": "B", "text": "Solo observación clínica" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La hiperplasia suprarrenal congénita se trata con glucocorticoides para suprimir la ACTH y el hiperandrogenismo.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "MC113",
    "term": "Síndrome de Cushing",
    "definition": "Mujer de 40 años, obesidad centrípeta, cara de luna llena, estrías violáceas e hipertensión.",
    "quizOptions": [
      { "id": "A", "text": "Suspender corticoides exógenos si los toma" },
      { "id": "B", "text": "Iniciar metformina" },
      { "id": "C", "text": "Solo dieta baja en sal" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El primer paso ante un síndrome de Cushing iatrogénico es suspender gradualmente los corticoides exógenos.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "MC114",
    "term": "Hipoglucemia por insulina",
    "definition": "Varón de 55 años, DM2 en tratamiento con insulina, sudoración, temblor y confusión. Glucemia 42 mg/dl.",
    "quizOptions": [
      { "id": "A", "text": "Administrar glucosa oral si está consciente" },
      { "id": "B", "text": "Administrar insulina rápida" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La hipoglucemia leve/moderada se trata con glucosa oral si el paciente está consciente.",
    "rotation": "Endocrinología",
    "difficulty": "fácil"
  },
  {
    "id": "MC115",
    "term": "Hipercalcemia por hiperparatiroidismo primario",
    "definition": "Mujer de 62 años, astenia, litiasis renal, calcemia elevada y PTH alta.",
    "quizOptions": [
      { "id": "A", "text": "Hidratación y valoración para paratiroidectomía" },
      { "id": "B", "text": "Administrar calcio oral" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La hipercalcemia sintomática por hiperparatiroidismo se trata con hidratación y cirugía si está indicada.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "MC116",
    "term": "Feocromocitoma",
    "definition": "Varón de 48 años, crisis de cefalea, sudoración, palpitaciones e hipertensión paroxística.",
    "quizOptions": [
      { "id": "A", "text": "Betabloqueantes como primera línea" },
      { "id": "B", "text": "Alfabloqueantes antes de cirugía" },
      { "id": "C", "text": "Solo dieta baja en sal" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento prequirúrgico del feocromocitoma requiere alfabloqueantes antes de los betabloqueantes.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "MC117",
    "term": "Hipopituitarismo",
    "definition": "Mujer de 56 años, masa supraselar, panhipopituitarismo y diabetes insípida.",
    "quizOptions": [
      { "id": "A", "text": "Reposición hormonal múltiple" },
      { "id": "B", "text": "Solo corticoides" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El hipopituitarismo requiere sustitución de todas las hormonas deficitarias, incluyendo corticoides, tiroidea y desmopresina si hay diabetes insípida.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "MC118",
    "term": "Síndrome de Turner",
    "definition": "Mujer de 22 años, amenorrea primaria, talla baja, cuello alado, cariotipo 45,X0.",
    "quizOptions": [
      { "id": "A", "text": "Terapia estrogénica sustitutiva" },
      { "id": "B", "text": "Anticonceptivos orales combinados" },
      { "id": "C", "text": "Solo seguimiento clínico" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El síndrome de Turner requiere terapia estrogénica para desarrollo puberal y salud ósea.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "MC119",
    "term": "Acromegalia",
    "definition": "Varón de 45 años, crecimiento de manos y mandíbula, cefalea y elevación de IGF-1.",
    "quizOptions": [
      { "id": "A", "text": "Cirugía hipofisaria transesfenoidal" },
      { "id": "B", "text": "Solo agonistas dopaminérgicos" },
      { "id": "C", "text": "Radioterapia exclusiva" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La cirugía hipofisaria es el tratamiento de elección inicial en acromegalia.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "MC120",
    "term": "Diabetes insípida central",
    "definition": "Mujer de 30 años, poliuria, polidipsia, hipernatremia y osmolalidad urinaria baja.",
    "quizOptions": [
      { "id": "A", "text": "Administrar desmopresina" },
      { "id": "B", "text": "Restringir líquidos" },
      { "id": "C", "text": "Alta con control ambulatorio" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La diabetes insípida central se trata con desmopresina, un análogo de la vasopresina.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "MC121",
    "term": "Enfermedad de Addison",
    "definition": "Varón de 38 años, hiperpigmentación cutánea, hipotensión, hiponatremia y cortisol bajo.",
    "quizOptions": [
      { "id": "A", "text": "Reposición con hidrocortisona y fludrocortisona" },
      { "id": "B", "text": "Solo dieta rica en sal" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La insuficiencia suprarrenal primaria requiere tratamiento sustitutivo con glucocorticoides y mineralocorticoides.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "MC122",
    "term": "Nódulo tiroideo sospechoso",
    "definition": "Mujer de 45 años, nódulo tiroideo de 2 cm, hipoecoico, bordes irregulares y microcalcificaciones en ecografía.",
    "quizOptions": [
      { "id": "A", "text": "Punción aspiración con aguja fina (PAAF)" },
      { "id": "B", "text": "Seguimiento anual con ecografía" },
      { "id": "C", "text": "Administrar levotiroxina empírica" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Todo nódulo tiroideo con características de sospecha debe ser valorado con PAAF para descartar malignidad.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "MC123",
    "term": "Osteoporosis posmenopáusica",
    "definition": "Mujer de 67 años, fractura de cadera tras caída, DMO baja en columna y cadera.",
    "quizOptions": [
      { "id": "A", "text": "Calcio y vitamina D únicamente" },
      { "id": "B", "text": "Bisfosfonatos orales" },
      { "id": "C", "text": "Anticonceptivos orales combinados" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "Los bisfosfonatos son el tratamiento de elección en osteoporosis con fractura y baja DMO.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "MC124",
    "term": "Síndrome metabólico",
    "definition": "Varón de 52 años, obesidad abdominal, hipertensión, glucosa en ayunas 118 mg/dl y triglicéridos elevados.",
    "quizOptions": [
      { "id": "A", "text": "Cambios en el estilo de vida y metformina si hay intolerancia a la glucosa" },
      { "id": "B", "text": "Insulinoterapia" },
      { "id": "C", "text": "Solo dieta sin ejercicio" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El manejo inicial del síndrome metabólico es con dieta, ejercicio y, si hay intolerancia a la glucosa, metformina.",
    "rotation": "Endocrinología",
    "difficulty": "fácil"
    },
  {
    "id": "MC125",
    "term": "Enfermedad por reflujo gastroesofágico (ERGE)",
    "definition": "Varón de 54 años, pirosis y regurgitación tras las comidas, síntomas nocturnos y alivio parcial con antiácidos.",
    "quizOptions": [
      { "id": "A", "text": "Iniciar inhibidores de bomba de protones (IBP)" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Solo dieta sin grasas" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento inicial de la ERGE es con inhibidores de la bomba de protones y cambios en el estilo de vida.",
    "rotation": "Gastroenterología",
    "difficulty": "fácil"
  },
  {
    "id": "MC126",
    "term": "Úlcera gástrica con sangrado",
    "definition": "Mujer de 63 años, hematemesis, melena y dolor epigástrico. Antecedente de AINEs.",
    "quizOptions": [
      { "id": "A", "text": "Alta con dieta blanda" },
      { "id": "B", "text": "Endoscopia digestiva urgente" },
      { "id": "C", "text": "Antibióticos empíricos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La hemorragia digestiva alta requiere estabilización y endoscopia urgente para diagnóstico y tratamiento.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "MC127",
    "term": "Enfermedad celíaca",
    "definition": "Niña de 7 años, diarrea crónica, distensión abdominal, pérdida de peso y anemia ferropénica.",
    "quizOptions": [
      { "id": "A", "text": "Dieta estricta sin gluten" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Antidiarreicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La dieta sin gluten es el único tratamiento eficaz en la enfermedad celíaca.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "MC128",
    "term": "Hepatitis viral aguda",
    "definition": "Varón de 28 años, ictericia, astenia, coluria y acolia. Transaminasas elevadas, antecedentes de contacto con caso similar.",
    "quizOptions": [
      { "id": "A", "text": "Antivirales de inicio" },
      { "id": "B", "text": "Reposo, hidratación y control analítico" },
      { "id": "C", "text": "Corticoides orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La hepatitis viral aguda suele ser autolimitada y se maneja con reposo e hidratación; antivirales solo en casos seleccionados.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "MC129",
    "term": "Pancreatitis aguda leve",
    "definition": "Mujer de 45 años, dolor epigástrico irradiado a espalda, náuseas, amilasa elevada, sin signos de gravedad.",
    "quizOptions": [
      { "id": "A", "text": "Cirugía urgente" },
      { "id": "B", "text": "Reposo digestivo, hidratación y analgesia" },
      { "id": "C", "text": "Antibióticos empíricos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El manejo inicial de la pancreatitis aguda leve es conservador: reposo digestivo, hidratación y analgesia.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "MC130",
    "term": "Colitis ulcerosa",
    "definition": "Varón de 31 años, diarrea con sangre, dolor abdominal y pérdida de peso. Colonoscopia: mucosa friable y ulcerada.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Mesalazina oral y/o rectal" },
      { "id": "C", "text": "Antidiarreicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La mesalazina es el tratamiento de primera línea en la colitis ulcerosa leve-moderada.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "MC131",
    "term": "Colelitiasis sintomática",
    "definition": "Mujer de 40 años, dolor en hipocondrio derecho tras comidas copiosas, sin fiebre ni ictericia.",
    "quizOptions": [
      { "id": "A", "text": "Colecistectomía electiva" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento definitivo de la colelitiasis sintomática es la colecistectomía programada.",
    "rotation": "Gastroenterología",
    "difficulty": "fácil"
  },
  {
    "id": "MC132",
    "term": "Ascitis por cirrosis hepática",
    "definition": "Varón de 58 años, abdomen distendido, edemas y antecedentes de cirrosis hepática. Paracentesis: líquido trasudado.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos empíricos" },
      { "id": "B", "text": "Restricción de sal y diuréticos" },
      { "id": "C", "text": "Cirugía urgente" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La ascitis por cirrosis se maneja con restricción de sal, diuréticos y control de peso.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "MC133",
    "term": "Infección por Helicobacter pylori",
    "definition": "Varón de 36 años, dispepsia, test de aliento positivo para H. pylori.",
    "quizOptions": [
      { "id": "A", "text": "Triple terapia: IBP, amoxicilina y claritromicina" },
      { "id": "B", "text": "Solo antiácidos" },
      { "id": "C", "text": "Antidiarreicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La erradicación de H. pylori requiere triple terapia con IBP y dos antibióticos.",
    "rotation": "Gastroenterología",
    "difficulty": "fácil"
  },
  {
    "id": "MC134",
    "term": "Hemorragia digestiva baja",
    "definition": "Mujer de 69 años, rectorragia indolora, anemia ferropénica, colonoscopia: pólipo sangrante en sigma.",
    "quizOptions": [
      { "id": "A", "text": "Alta con control ambulatorio" },
      { "id": "B", "text": "Colonoscopia terapéutica" },
      { "id": "C", "text": "Antibióticos empíricos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La hemorragia digestiva baja con sangrado activo requiere colonoscopia diagnóstica y terapéutica.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "MC135",
    "term": "Diverticulitis aguda no complicada",
    "definition": "Varón de 62 años, dolor en fosa ilíaca izquierda, febrícula y leucocitosis. TAC: engrosamiento de sigma sin absceso.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales y dieta líquida" },
      { "id": "B", "text": "Cirugía urgente" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La diverticulitis aguda no complicada se trata habitualmente con antibióticos y dieta líquida.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "MC136",
    "term": "Enfermedad de Crohn",
    "definition": "Joven de 24 años, dolor abdominal recurrente, diarrea con sangre y pérdida de peso. Colonoscopia: úlceras aftosas en íleon terminal.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Corticoides y/o inmunosupresores" },
      { "id": "C", "text": "Antidiarreicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de la enfermedad de Crohn activa incluye corticoides sistémicos y, en casos graves, inmunosupresores.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "MC137",
    "term": "Síndrome de intestino irritable",
    "definition": "Mujer de 35 años, dolor abdominal crónico, alternancia de diarrea y estreñimiento, sin pérdida de peso ni anemia.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Medidas dietéticas y control sintomático" },
      { "id": "C", "text": "Cirugía programada" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El síndrome de intestino irritable se maneja con cambios dietéticos y tratamiento sintomático.",
    "rotation": "Gastroenterología",
    "difficulty": "fácil"
  },
  {
    "id": "MC138",
    "term": "Absceso hepático piógeno",
    "definition": "Varón de 59 años, fiebre, dolor en hipocondrio derecho, leucocitosis y masa hepática en ecografía.",
    "quizOptions": [
      { "id": "A", "text": "Drenaje percutáneo y antibióticos" },
      { "id": "B", "text": "Solo antibióticos orales" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El absceso hepático piógeno requiere drenaje percutáneo y antibióticos intravenosos.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "MC139",
    "term": "Síndrome de Mallory-Weiss",
    "definition": "Varón de 38 años, hematemesis tras vómitos repetidos, sin inestabilidad hemodinámica.",
    "quizOptions": [
      { "id": "A", "text": "Observación y soporte" },
      { "id": "B", "text": "Cirugía urgente" },
      { "id": "C", "text": "Antibióticos empíricos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El síndrome de Mallory-Weiss suele ser autolimitado y se maneja con observación y soporte.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "MC140",
    "term": "Accidente cerebrovascular isquémico agudo",
    "definition": "Varón de 70 años, hemiparesia brusca, afasia y desviación de la mirada. TC sin sangrado.",
    "quizOptions": [
      { "id": "A", "text": "Fibrinólisis intravenosa si está en ventana terapéutica" },
      { "id": "B", "text": "Corticoides intravenosos" },
      { "id": "C", "text": "Alta con control ambulatorio" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La fibrinólisis IV es el tratamiento de elección en el ictus isquémico agudo dentro de las primeras 4,5 horas.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "MC141",
    "term": "Crisis epiléptica tónico-clónica generalizada",
    "definition": "Mujer de 25 años, convulsión de 2 minutos, recuperación completa, sin antecedentes previos.",
    "quizOptions": [
      { "id": "A", "text": "Iniciar anticonvulsivantes crónicos" },
      { "id": "B", "text": "Observación y estudio etiológico" },
      { "id": "C", "text": "Alta inmediata sin pruebas" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "Tras una primera crisis convulsiva, se recomienda observación y estudio, no iniciar tratamiento crónico de entrada.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "MC142",
    "term": "Migraña con aura",
    "definition": "Mujer de 32 años, cefalea hemicraneal pulsátil, náuseas, fotofobia y destellos visuales previos.",
    "quizOptions": [
      { "id": "A", "text": "Triptanes al inicio de la cefalea" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Corticoides orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Los triptanes son el tratamiento sintomático de elección en la migraña moderada-grave.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "MC143",
    "term": "Parálisis de Bell",
    "definition": "Varón de 40 años, parálisis facial periférica aguda, sin otros síntomas neurológicos.",
    "quizOptions": [
      { "id": "A", "text": "Antivirales orales" },
      { "id": "B", "text": "Corticoides orales" },
      { "id": "C", "text": "Antibióticos tópicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de la parálisis de Bell es corticoides orales en los primeros días para mejorar la recuperación.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "MC144",
    "term": "Neuralgia del trigémino",
    "definition": "Mujer de 60 años, dolor facial paroxístico, intenso, en territorio V2, desencadenado por el tacto.",
    "quizOptions": [
      { "id": "A", "text": "Carbamazepina oral" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Corticoides tópicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La carbamazepina es el tratamiento de primera línea para la neuralgia del trigémino.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "MC145",
    "term": "Meningitis bacteriana aguda",
    "definition": "Varón de 23 años, fiebre alta, cefalea, rigidez de nuca y fotofobia. LCR: pleocitosis con predominio de PMN.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos intravenosos de amplio espectro" },
      { "id": "B", "text": "Alta con antipiréticos" },
      { "id": "C", "text": "Antivirales orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La meningitis bacteriana aguda requiere antibióticos intravenosos urgentes.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "MC146",
    "term": "Esclerosis múltiple brote agudo",
    "definition": "Mujer de 28 años, pérdida de visión monocular y parestesias en pierna derecha. RM: lesiones desmielinizantes.",
    "quizOptions": [
      { "id": "A", "text": "Interferón beta" },
      { "id": "B", "text": "Corticoides intravenosos" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento del brote agudo de esclerosis múltiple son los corticoides intravenosos.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "MC147",
    "term": "Miastenia gravis",
    "definition": "Varón de 35 años, ptosis palpebral fluctuante, debilidad muscular y fatiga que empeora al final del día.",
    "quizOptions": [
      { "id": "A", "text": "Anticolinesterásicos (piridostigmina)" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Corticoides tópicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento inicial de la miastenia gravis son los anticolinesterásicos como la piridostigmina.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "MC148",
    "term": "Cefalea tensional",
    "definition": "Mujer de 45 años, cefalea opresiva bilateral, sin náuseas ni fotofobia, relacionada con estrés.",
    "quizOptions": [
      { "id": "A", "text": "Triptanes" },
      { "id": "B", "text": "Analgésicos simples y técnicas de relajación" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La cefalea tensional responde bien a analgésicos simples y manejo del estrés.",
    "rotation": "Neurología",
    "difficulty": "fácil"
  },
  {
    "id": "MC149",
    "term": "Guillain-Barré",
    "definition": "Varón de 42 años, debilidad ascendente progresiva, arreflexia y parestesias tras infección respiratoria.",
    "quizOptions": [
      { "id": "A", "text": "Corticoides orales" },
      { "id": "B", "text": "Inmunoglobulinas intravenosas o plasmaféresis" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento del síndrome de Guillain-Barré son las inmunoglobulinas IV o plasmaféresis, no corticoides.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "MC150",
    "term": "Hemorragia subaracnoidea",
    "definition": "Mujer de 55 años, cefalea súbita intensa 'en trueno', rigidez de nuca y disminución del nivel de conciencia.",
    "quizOptions": [
      { "id": "A", "text": "TC craneal urgente y neurocirugía" },
      { "id": "B", "text": "Analgésicos orales y alta" },
      { "id": "C", "text": "Corticoides orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La hemorragia subaracnoidea requiere TC urgente y valoración neuroquirúrgica inmediata.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "MC151",
    "term": "Parkinson idiopático",
    "definition": "Varón de 68 años, temblor de reposo, rigidez, bradicinesia y marcha festinante.",
    "quizOptions": [
      { "id": "A", "text": "Levodopa/carbidopa" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Corticoides orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La levodopa es el tratamiento más eficaz para los síntomas motores del Parkinson idiopático.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "MC152",
    "term": "Status epiléptico",
    "definition": "Niño de 10 años, convulsión generalizada que dura más de 5 minutos.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos intravenosos" },
      { "id": "B", "text": "Benzodiacepinas intravenosas" },
      { "id": "C", "text": "Alta con control ambulatorio" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El status epiléptico requiere benzodiacepinas IV como primera línea de tratamiento.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "MC153",
    "term": "Demencia tipo Alzheimer",
    "definition": "Mujer de 76 años, pérdida progresiva de memoria, desorientación y alteración de la funcionalidad.",
    "quizOptions": [
      { "id": "A", "text": "Inhibidores de la acetilcolinesterasa (donepezilo, rivastigmina)" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Corticoides orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Los inhibidores de la acetilcolinesterasa mejoran síntomas cognitivos leves y moderados en Alzheimer.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "MC154",
    "term": "Neuritis óptica",
    "definition": "Mujer de 27 años, pérdida visual monocular dolorosa, disminución de la visión de colores. Fondo de ojo normal.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Corticoides intravenosos" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La neuritis óptica se trata con corticoides IV para acelerar la recuperación visual.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "MC155",
    "term": "Neumonía adquirida en la comunidad",
    "definition": "Varón de 62 años, fiebre, tos productiva, dolor pleurítico y crepitantes en base pulmonar derecha.",
    "quizOptions": [
      { "id": "A", "text": "Iniciar antibiótico empírico (amoxicilina-clavulánico o levofloxacino)" },
      { "id": "B", "text": "Solo antipiréticos" },
      { "id": "C", "text": "Alta con control ambulatorio" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento inicial de la neumonía comunitaria es antibiótico empírico precoz.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "MC156",
    "term": "EPOC exacerbado",
    "definition": "Varón de 70 años, fumador, disnea aguda, tos con esputo purulento y sibilancias.",
    "quizOptions": [
      { "id": "A", "text": "Solo oxígeno" },
      { "id": "B", "text": "Broncodilatadores, corticoides sistémicos y antibióticos" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La exacerbación de EPOC se trata con broncodilatadores, corticoides y antibióticos si hay esputo purulento.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "MC157",
    "term": "Asma bronquial leve persistente",
    "definition": "Mujer de 25 años, episodios de disnea y sibilancias más de dos veces por semana, sin limitación de actividad.",
    "quizOptions": [
      { "id": "A", "text": "Corticoides inhalados a dosis bajas" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Solo broncodilatador a demanda" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El asma leve persistente requiere corticoides inhalados como tratamiento controlador.",
    "rotation": "Neumología",
    "difficulty": "fácil"
  },
  {
    "id": "MC158",
    "term": "Embolia pulmonar aguda",
    "definition": "Varón de 54 años, disnea súbita, dolor torácico pleurítico, taquicardia y antecedente de cirugía reciente.",
    "quizOptions": [
      { "id": "A", "text": "Alta con control ambulatorio" },
      { "id": "B", "text": "Solicitar angio-TC pulmonar" },
      { "id": "C", "text": "Administrar antibióticos empíricos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La sospecha de embolia pulmonar requiere confirmación diagnóstica con angio-TC.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "MC159",
    "term": "Neumotórax espontáneo pequeño",
    "definition": "Varón de 22 años, dolor torácico súbito, disnea leve. Rx: colapso parcial del pulmón derecho.",
    "quizOptions": [
      { "id": "A", "text": "Observación y oxigenoterapia" },
      { "id": "B", "text": "Colocación de drenaje torácico" },
      { "id": "C", "text": "Toracotomía urgente" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "En neumotórax pequeño y estable, la observación y oxígeno suelen ser suficientes.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "MC160",
    "term": "Fibrosis pulmonar idiopática",
    "definition": "Varón de 68 años, disnea progresiva, crepitantes en bases y patrón en panal de abeja en TAC.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Antifibróticos (pirfenidona, nintedanib)" },
      { "id": "C", "text": "Solo oxígeno domiciliario" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La fibrosis pulmonar idiopática se trata con antifibróticos; el oxígeno es solo de soporte.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "MC161",
    "term": "Derrame pleural paraneumónico",
    "definition": "Mujer de 58 años, fiebre, dolor torácico, disnea y Rx con derrame pleural moderado.",
    "quizOptions": [
      { "id": "A", "text": "Toracocentesis diagnóstica y antibióticos" },
      { "id": "B", "text": "Solo antipiréticos" },
      { "id": "C", "text": "Alta con control ambulatorio" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Todo derrame pleural paraneumónico requiere toracocentesis y antibioterapia.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "MC162",
    "term": "Tuberculosis pulmonar",
    "definition": "Varón de 38 años, tos crónica, hemoptisis, sudoración nocturna y pérdida de peso. Rx: infiltrado apical con cavitación.",
    "quizOptions": [
      { "id": "A", "text": "Amoxicilina-clavulánico" },
      { "id": "B", "text": "Isoniazida, rifampicina, pirazinamida y etambutol" },
      { "id": "C", "text": "Antivirales orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento inicial de la tuberculosis pulmonar incluye cuatro fármacos: isoniazida, rifampicina, pirazinamida y etambutol.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "MC163",
    "term": "Asma grave reagudizada",
    "definition": "Niña de 12 años, disnea intensa, uso de músculos accesorios y SatO₂ 88%.",
    "quizOptions": [
      { "id": "A", "text": "Broncodilatadores inhalados y corticoides sistémicos" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Alta con control domiciliario" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La crisis asmática grave requiere broncodilatadores y corticoides sistémicos de inmediato.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "MC164",
    "term": "Carcinoma microcítico de pulmón",
    "definition": "Varón de 60 años, fumador, tos, pérdida de peso, masa hiliar en Rx y metástasis hepáticas.",
    "quizOptions": [
      { "id": "A", "text": "Cirugía pulmonar" },
      { "id": "B", "text": "Quimioterapia sistémica" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El carcinoma microcítico de pulmón se trata principalmente con quimioterapia sistémica.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "MC165",
    "term": "Neumonía por aspiración",
    "definition": "Mujer de 77 años, disfagia, fiebre, tos y consolidación en lóbulo inferior derecho.",
    "quizOptions": [
      { "id": "A", "text": "Amoxicilina-clavulánico o ceftriaxona" },
      { "id": "B", "text": "Antivirales orales" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La neumonía por aspiración se trata con antibióticos que cubran anaerobios y bacterias gramnegativas.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "MC166",
    "term": "Derrame pleural maligno",
    "definition": "Mujer de 65 años, disnea progresiva, antecedente de cáncer de mama, Rx: derrame pleural masivo.",
    "quizOptions": [
      { "id": "A", "text": "Toracocentesis evacuadora y considerar pleurodesis" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Alta con control ambulatorio" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El manejo del derrame pleural maligno incluye drenaje y, en casos recurrentes, pleurodesis.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "MC167",
    "term": "Apnea obstructiva del sueño",
    "definition": "Varón de 52 años, obesidad, ronquidos, somnolencia diurna y pausas respiratorias nocturnas.",
    "quizOptions": [
      { "id": "A", "text": "CPAP nocturno y pérdida de peso" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento de elección en el SAOS es la CPAP nocturna y medidas de pérdida de peso.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "MC168",
    "term": "Neumonía por Pneumocystis jirovecii",
    "definition": "Varón de 35 años, VIH+, disnea progresiva, fiebre y Rx con infiltrados intersticiales bilaterales.",
    "quizOptions": [
      { "id": "A", "text": "Amoxicilina-clavulánico" },
      { "id": "B", "text": "Cotrimoxazol (trimetoprima-sulfametoxazol)" },
      { "id": "C", "text": "Antivirales orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de elección para la neumonía por Pneumocystis jirovecii es cotrimoxazol.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "MC169",
    "term": "Bronquiectasias infecciosas",
    "definition": "Mujer de 47 años, tos crónica con expectoración purulenta, infecciones respiratorias recurrentes y Rx con dilatación bronquial.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos dirigidos según cultivo y fisioterapia respiratoria" },
      { "id": "B", "text": "Solo fisioterapia respiratoria" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Las bronquiectasias con infección requieren antibióticos según cultivo y fisioterapia respiratoria.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "MC170",
    "term": "Hipertensión arterial esencial",
    "definition": "Varón de 52 años, PA 154/94 mmHg en dos controles, sin síntomas ni daño de órgano diana.",
    "quizOptions": [
      { "id": "A", "text": "Iniciar tratamiento antihipertensivo y cambios en el estilo de vida" },
      { "id": "B", "text": "Solo dieta y ejercicio" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La hipertensión persistente requiere tratamiento farmacológico y cambios en el estilo de vida.",
    "rotation": "Medicina Familiar",
    "difficulty": "fácil"
  },
  {
    "id": "MC171",
    "term": "Diabetes mellitus tipo 2 debut",
    "definition": "Mujer de 60 años, glucemia basal 145 mg/dl en dos ocasiones, HbA1c 7,2%, asintomática.",
    "quizOptions": [
      { "id": "A", "text": "Insulinoterapia inmediata" },
      { "id": "B", "text": "Iniciar metformina y cambios en el estilo de vida" },
      { "id": "C", "text": "Solo dieta sin medicación" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La metformina es el fármaco de elección en el debut de DM2, junto a medidas higiénico-dietéticas.",
    "rotation": "Medicina Familiar",
    "difficulty": "fácil"
  },
  {
    "id": "MC172",
    "term": "Infección urinaria no complicada en mujer joven",
    "definition": "Mujer de 27 años, disuria, polaquiuria, sin fiebre ni dolor lumbar.",
    "quizOptions": [
      { "id": "A", "text": "Amoxicilina" },
      { "id": "B", "text": "Fosfomicina trometamol dosis única" },
      { "id": "C", "text": "Ciprofloxacino" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La fosfomicina en dosis única es el tratamiento de elección para la cistitis no complicada en mujeres jóvenes.",
    "rotation": "Medicina Familiar",
    "difficulty": "fácil"
  },
  {
    "id": "MC173",
    "term": "Lumbalgia aguda inespecífica",
    "definition": "Varón de 35 años, dolor lumbar tras esfuerzo, sin irradiación ni signos de alarma.",
    "quizOptions": [
      { "id": "A", "text": "Reposo absoluto" },
      { "id": "B", "text": "Analgésicos y mantener actividad física" },
      { "id": "C", "text": "Resonancia magnética urgente" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La lumbalgia aguda sin signos de alarma se trata con analgesia y actividad física precoz.",
    "rotation": "Medicina Familiar",
    "difficulty": "fácil"
  },
  {
    "id": "MC174",
    "term": "Amigdalitis aguda estreptocócica",
    "definition": "Niño de 8 años, fiebre, odinofagia, exudado amigdalar y adenopatías cervicales dolorosas.",
    "quizOptions": [
      { "id": "A", "text": "Penicilina V oral" },
      { "id": "B", "text": "Ibuprofeno únicamente" },
      { "id": "C", "text": "Ceftriaxona intramuscular" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La penicilina V es el tratamiento de elección en la faringoamigdalitis estreptocócica.",
    "rotation": "Medicina Familiar",
    "difficulty": "fácil"
  },
  {
    "id": "MC175",
    "term": "EPOC estable",
    "definition": "Varón de 68 años, fumador, disnea de esfuerzo, tos crónica y espirometría compatible con EPOC.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Broncodilatadores inhalados de acción prolongada" },
      { "id": "C", "text": "Corticoides sistémicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de base del EPOC estable son los broncodilatadores inhalados de acción prolongada.",
    "rotation": "Medicina Familiar",
    "difficulty": "media"
  },
  {
    "id": "MC176",
    "term": "Hipotiroidismo subclínico",
    "definition": "Mujer de 45 años, TSH 6,2 mUI/L, T4 libre normal, asintomática.",
    "quizOptions": [
      { "id": "A", "text": "Iniciar levotiroxina" },
      { "id": "B", "text": "Observación y control analítico periódico" },
      { "id": "C", "text": "Corticoides orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El hipotiroidismo subclínico asintomático suele manejarse con observación salvo TSH >10 o síntomas.",
    "rotation": "Medicina Familiar",
    "difficulty": "media"
  },
  {
    "id": "MC177",
    "term": "Dermatitis atópica leve",
    "definition": "Niño de 5 años, eccema pruriginoso en pliegues, piel seca y antecedentes familiares de alergia.",
    "quizOptions": [
      { "id": "A", "text": "Emolientes y corticoides tópicos en brote" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Antifúngicos tópicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento de la dermatitis atópica leve son emolientes y corticoides tópicos en brote.",
    "rotation": "Medicina Familiar",
    "difficulty": "fácil"
  },
  {
    "id": "MC178",
    "term": "Dislipemia primaria",
    "definition": "Varón de 50 años, colesterol total 270 mg/dl, LDL 180 mg/dl, sin factores de riesgo adicionales.",
    "quizOptions": [
      { "id": "A", "text": "Estatinas orales" },
      { "id": "B", "text": "Solo dieta y ejercicio" },
      { "id": "C", "text": "Fibratos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Las estatinas son el tratamiento de elección en la dislipemia primaria con LDL elevado.",
    "rotation": "Medicina Familiar",
    "difficulty": "media"
  },
  {
    "id": "MC179",
    "term": "Insomnio primario",
    "definition": "Mujer de 38 años, dificultad para conciliar el sueño, sin ansiedad ni depresión.",
    "quizOptions": [
      { "id": "A", "text": "Hipnóticos de inicio" },
      { "id": "B", "text": "Higiene del sueño y terapia cognitivo-conductual" },
      { "id": "C", "text": "Antidepresivos tricíclicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El insomnio primario se aborda primero con higiene del sueño y terapia cognitivo-conductual.",
    "rotation": "Medicina Familiar",
    "difficulty": "fácil"
  },
  {
    "id": "MC180",
    "term": "Síndrome gripal en adulto sano",
    "definition": "Varón de 30 años, fiebre, mialgias, tos seca y malestar general de 2 días de evolución.",
    "quizOptions": [
      { "id": "A", "text": "Antivirales orales" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Tratamiento sintomático y reposo" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "El síndrome gripal en adultos sanos se maneja con tratamiento sintomático y reposo.",
    "rotation": "Medicina Familiar",
    "difficulty": "fácil"
  },
  {
    "id": "MC181",
    "term": "Hiperglucemia en paciente anciano",
    "definition": "Mujer de 80 años, DM2, glucemia basal 210 mg/dl, sin síntomas agudos.",
    "quizOptions": [
      { "id": "A", "text": "Insulinoterapia intensiva" },
      { "id": "B", "text": "Ajuste de antidiabéticos orales y control de dieta" },
      { "id": "C", "text": "Alta sin cambios" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "En el anciano con DM2 y sin síntomas agudos, se prioriza ajuste de antidiabéticos orales y control dietético.",
    "rotation": "Medicina Familiar",
    "difficulty": "media"
  },
  {
    "id": "MC182",
    "term": "Cefalea tensional",
    "definition": "Mujer de 42 años, cefalea opresiva bilateral, sin náuseas ni fotofobia, relacionada con estrés.",
    "quizOptions": [
      { "id": "A", "text": "Triptanes" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Analgésicos simples y técnicas de relajación" }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "La cefalea tensional responde bien a analgésicos simples y manejo del estrés.",
    "rotation": "Medicina Familiar",
    "difficulty": "fácil"
  },
  {
    "id": "MC183",
    "term": "Dermatitis seborreica",
    "definition": "Varón de 28 años, descamación y enrojecimiento en surco nasogeniano y cuero cabelludo.",
    "quizOptions": [
      { "id": "A", "text": "Champú con ketoconazol y corticoide tópico suave" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Antihistamínicos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La dermatitis seborreica se trata con antifúngicos tópicos y corticoides suaves en brotes.",
    "rotation": "Medicina Familiar",
    "difficulty": "fácil"
  },
  {
    "id": "MC184",
    "term": "Síndrome ansioso generalizado",
    "definition": "Mujer de 33 años, insomnio, inquietud, preocupación excesiva y dificultad para concentrarse.",
    "quizOptions": [
      { "id": "A", "text": "Ansiolíticos de inicio" },
      { "id": "B", "text": "Terapia cognitivo-conductual y valorar ISRS" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de primera línea en el TAG es la terapia cognitivo-conductual y, si es necesario, ISRS.",
    "rotation": "Medicina Familiar",
    "difficulty": "media"
  },
  {
    "id": "MC185",
    "term": "Candidiasis vulvovaginal",
    "definition": "Mujer de 28 años, prurito vulvar intenso, flujo blanco grumoso y eritema vulvar.",
    "quizOptions": [
      { "id": "A", "text": "Antifúngicos tópicos" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Corticoides tópicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La candidiasis vulvovaginal se trata con antifúngicos tópicos como primera línea.",
    "rotation": "Ginecología",
    "difficulty": "fácil"
  },
  {
    "id": "MC186",
    "term": "Enfermedad inflamatoria pélvica",
    "definition": "Mujer de 23 años, dolor abdominal bajo, fiebre, leucorrea purulenta y dolor a la movilización cervical.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Antibióticos intravenosos y hospitalización" },
      { "id": "C", "text": "Alta con analgésicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La EIP leve-moderada se trata con antibióticos orales; IV si hay criterios de gravedad.",
    "rotation": "Ginecología",
    "difficulty": "media"
  },
  {
    "id": "MC187",
    "term": "Embarazo ectópico",
    "definition": "Mujer de 35 años, amenorrea de 7 semanas, dolor abdominal y sangrado vaginal escaso. Beta-hCG positiva, eco: saco gestacional vacío.",
    "quizOptions": [
      { "id": "A", "text": "Observación y control seriado" },
      { "id": "B", "text": "Metotrexato si estable y criterios adecuados" },
      { "id": "C", "text": "Legrado uterino" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento médico con metotrexato es opción en embarazo ectópico no complicado y paciente estable.",
    "rotation": "Ginecología",
    "difficulty": "alta"
  },
  {
    "id": "MC188",
    "term": "Mioma uterino sintomático",
    "definition": "Mujer de 42 años, menorragia, anemia ferropénica y útero aumentado de tamaño en la exploración.",
    "quizOptions": [
      { "id": "A", "text": "Miomectomía o histerectomía según deseo gestacional" },
      { "id": "B", "text": "Anticonceptivos orales combinados" },
      { "id": "C", "text": "Solo hierro oral" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento definitivo de los miomas sintomáticos es la cirugía; la opción depende del deseo de fertilidad.",
    "rotation": "Ginecología",
    "difficulty": "media"
  },
  {
    "id": "MC189",
    "term": "Síndrome de ovario poliquístico (SOP)",
    "definition": "Mujer de 19 años, hirsutismo, acné, ciclos irregulares y ovarios poliquísticos en ecografía.",
    "quizOptions": [
      { "id": "A", "text": "Anticonceptivos orales combinados" },
      { "id": "B", "text": "Metformina en monoterapia" },
      { "id": "C", "text": "Solo control clínico" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Los anticonceptivos orales combinados son el tratamiento de primera línea en el SOP con síntomas hiperandrogénicos.",
    "rotation": "Ginecología",
    "difficulty": "media"
  },
  {
    "id": "MC190",
    "term": "Cervicitis por Chlamydia",
    "definition": "Mujer de 26 años, leucorrea mucopurulenta, disuria y test de Chlamydia positivo.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales (azitromicina o doxiciclina)" },
      { "id": "B", "text": "Antifúngicos tópicos" },
      { "id": "C", "text": "Corticoides orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La cervicitis por Chlamydia se trata con azitromicina o doxiciclina vía oral.",
    "rotation": "Ginecología",
    "difficulty": "fácil"
  },
  {
    "id": "MC191",
    "term": "Menopausia sintomática",
    "definition": "Mujer de 51 años, sofocos, insomnio y sequedad vaginal. FSH elevada.",
    "quizOptions": [
      { "id": "A", "text": "Terapia hormonal sustitutiva si no hay contraindicaciones" },
      { "id": "B", "text": "Antidepresivos ISRS" },
      { "id": "C", "text": "Solo lubricantes vaginales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La terapia hormonal sustitutiva es el tratamiento más eficaz para los síntomas vasomotores de la menopausia.",
    "rotation": "Ginecología",
    "difficulty": "media"
  },
  {
    "id": "MC192",
    "term": "Vaginosis bacteriana",
    "definition": "Mujer de 34 años, flujo grisáceo, olor a pescado y test de aminas positivo.",
    "quizOptions": [
      { "id": "A", "text": "Antifúngicos tópicos" },
      { "id": "B", "text": "Metronidazol oral o vaginal" },
      { "id": "C", "text": "Corticoides tópicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de elección en la vaginosis bacteriana es metronidazol oral o vaginal.",
    "rotation": "Ginecología",
    "difficulty": "fácil"
  },
  {
    "id": "MC193",
    "term": "Embarazo molar",
    "definition": "Mujer de 29 años, metrorragia, útero mayor que amenorrea, beta-hCG muy elevada y eco con imagen en 'copos de nieve'.",
    "quizOptions": [
      { "id": "A", "text": "Legrado uterino evacuador" },
      { "id": "B", "text": "Observación expectante" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El embarazo molar requiere evacuación uterina mediante legrado.",
    "rotation": "Ginecología",
    "difficulty": "alta"
  },
  {
    "id": "MC194",
    "term": "Infección por VPH de bajo riesgo",
    "definition": "Mujer de 22 años, verrugas genitales blandas, indoloras y exofíticas.",
    "quizOptions": [
      { "id": "A", "text": "Crioterapia o tratamiento tópico con podofilina" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Corticoides tópicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Las verrugas genitales por VPH se tratan con crioterapia o podofilina tópica.",
    "rotation": "Ginecología",
    "difficulty": "fácil"
  },
  {
    "id": "MC195",
    "term": "Endometriosis",
    "definition": "Mujer de 33 años, dismenorrea severa, dispareunia y dolor pélvico crónico.",
    "quizOptions": [
      { "id": "A", "text": "Anticonceptivos orales combinados o gestágenos" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Solo analgésicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento médico inicial de la endometriosis son los anticonceptivos hormonales o gestágenos.",
    "rotation": "Ginecología",
    "difficulty": "media"
  },
  {
    "id": "MC196",
    "term": "Quiste ovárico funcional",
    "definition": "Mujer de 24 años, dolor pélvico leve y eco con quiste ovárico simple de 4 cm.",
    "quizOptions": [
      { "id": "A", "text": "Anticonceptivos orales combinados" },
      { "id": "B", "text": "Observación y control ecográfico" },
      { "id": "C", "text": "Cirugía laparoscópica urgente" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La mayoría de los quistes ováricos funcionales se resuelven espontáneamente y solo requieren control.",
    "rotation": "Ginecología",
    "difficulty": "fácil"
  },
  {
    "id": "MC197",
    "term": "Hemorragia uterina disfuncional en adolescente",
    "definition": "Adolescente de 15 años, metrorragia abundante, anemia leve, ciclos irregulares.",
    "quizOptions": [
      { "id": "A", "text": "Anticonceptivos orales combinados" },
      { "id": "B", "text": "Hierro oral y observación" },
      { "id": "C", "text": "Legrado uterino" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento de primera línea en la hemorragia disfuncional adolescente son los anticonceptivos orales combinados.",
    "rotation": "Ginecología",
    "difficulty": "media"
  },
  {
    "id": "MC198",
    "term": "Cáncer de cérvix in situ",
    "definition": "Mujer de 36 años, citología con lesión intraepitelial de alto grado, confirmada por biopsia.",
    "quizOptions": [
      { "id": "A", "text": "Conización cervical" },
      { "id": "B", "text": "Quimioterapia sistémica" },
      { "id": "C", "text": "Solo seguimiento anual" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El carcinoma in situ de cérvix se trata con conización cervical.",
    "rotation": "Ginecología",
    "difficulty": "alta"
  },
  {
    "id": "MC199",
    "term": "Fractura de Colles",
    "definition": "Mujer de 68 años, caída sobre la mano extendida, dolor e impotencia funcional en muñeca, deformidad en 'dorso de tenedor'.",
    "quizOptions": [
      { "id": "A", "text": "Reducción cerrada e inmovilización con yeso" },
      { "id": "B", "text": "Cirugía urgente" },
      { "id": "C", "text": "Alta con analgésicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La mayoría de las fracturas de Colles estables se tratan con reducción cerrada e inmovilización con yeso.",
    "rotation": "Traumatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC200",
    "term": "Luxación glenohumeral anterior",
    "definition": "Varón de 25 años, dolor intenso en hombro tras caída, deformidad y limitación de movimientos.",
    "quizOptions": [
      { "id": "A", "text": "Inmovilización con cabestrillo" },
      { "id": "B", "text": "Reducción cerrada bajo sedación" },
      { "id": "C", "text": "Cirugía inmediata" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La luxación anterior de hombro se trata con reducción cerrada bajo sedación y posterior inmovilización.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "MC201",
    "term": "Fractura diafisaria de fémur en adulto",
    "definition": "Varón de 40 años, accidente de tráfico, dolor intenso y deformidad en muslo, acortamiento y rotación externa.",
    "quizOptions": [
      { "id": "A", "text": "Reducción cerrada y yeso pelvipédico" },
      { "id": "B", "text": "Osteosíntesis quirúrgica" },
      { "id": "C", "text": "Alta con reposo domiciliario" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La fractura diafisaria de fémur en adultos requiere estabilización y tratamiento quirúrgico con osteosíntesis.",
    "rotation": "Traumatología",
    "difficulty": "alta"
  },
  {
    "id": "MC202",
    "term": "Esguince de tobillo grado II",
    "definition": "Mujer de 30 años, torsión de tobillo, dolor e inflamación, sin inestabilidad evidente ni fractura en Rx.",
    "quizOptions": [
      { "id": "A", "text": "Reposo, hielo, compresión y elevación (RICE)" },
      { "id": "B", "text": "Inmovilización con férula 4 semanas" },
      { "id": "C", "text": "Cirugía urgente" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento inicial del esguince de tobillo es conservador con reposo, hielo, compresión y elevación.",
    "rotation": "Traumatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC203",
    "term": "Fractura supracondílea de húmero en niño",
    "definition": "Niño de 6 años, caída con apoyo en mano, dolor y deformidad en codo, pulsos distales presentes.",
    "quizOptions": [
      { "id": "A", "text": "Reducción cerrada e inmovilización" },
      { "id": "B", "text": "Cirugía urgente" },
      { "id": "C", "text": "Alta con cabestrillo" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La fractura supracondílea no desplazada puede tratarse con reducción cerrada e inmovilización; desplazada suele requerir cirugía.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "MC204",
    "term": "Fractura abierta de tibia",
    "definition": "Varón de 32 años, accidente de moto, herida sangrante con hueso visible en pierna.",
    "quizOptions": [
      { "id": "A", "text": "Inmovilización y antibióticos" },
      { "id": "B", "text": "Cirugía urgente para limpieza y fijación" },
      { "id": "C", "text": "Alta con vendaje compresivo" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "Las fracturas abiertas requieren cirugía urgente para limpieza, estabilización y profilaxis antibiótica.",
    "rotation": "Traumatología",
    "difficulty": "alta"
  },
  {
    "id": "MC205",
    "term": "Fractura de clavícula en adulto joven",
    "definition": "Varón de 22 años, caída en bicicleta, dolor y deformidad en tercio medio de clavícula, sin compromiso neurovascular.",
    "quizOptions": [
      { "id": "A", "text": "Inmovilización con vendaje en 8" },
      { "id": "B", "text": "Reducción quirúrgica inmediata" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La mayoría de las fracturas de clavícula se manejan con inmovilización conservadora.",
    "rotation": "Traumatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC206",
    "term": "Luxación de rótula",
    "definition": "Mujer de 19 años, dolor súbito en rodilla tras giro brusco, deformidad lateral de la rótula.",
    "quizOptions": [
      { "id": "A", "text": "Reducción cerrada y férula temporal" },
      { "id": "B", "text": "Cirugía inmediata" },
      { "id": "C", "text": "Alta con analgésicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La luxación rotuliana aguda se reduce manualmente y se inmoviliza temporalmente.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "MC207",
    "term": "Fractura de cadera en anciano",
    "definition": "Mujer de 84 años, caída en domicilio, dolor e imposibilidad para deambular, acortamiento y rotación externa de la pierna.",
    "quizOptions": [
      { "id": "A", "text": "Reposo en cama" },
      { "id": "B", "text": "Cirugía para osteosíntesis o prótesis" },
      { "id": "C", "text": "Alta con analgésicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La fractura de cadera en ancianos requiere tratamiento quirúrgico precoz para evitar complicaciones.",
    "rotation": "Traumatología",
    "difficulty": "alta"
  },
  {
    "id": "MC208",
    "term": "Síndrome compartimental agudo",
    "definition": "Varón de 28 años, fractura de tibia, dolor intenso desproporcionado, parestesias y pulso distal presente.",
    "quizOptions": [
      { "id": "A", "text": "Fasciotomía urgente" },
      { "id": "B", "text": "Inmovilización y observación" },
      { "id": "C", "text": "Alta con analgesia" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El síndrome compartimental es una urgencia que requiere fasciotomía inmediata para evitar necrosis.",
    "rotation": "Traumatología",
    "difficulty": "alta"
  },
  {
    "id": "MC209",
    "term": "Fractura de escafoides carpiano",
    "definition": "Varón de 17 años, caída sobre la mano extendida, dolor en tabaquera anatómica, Rx sin desplazamiento.",
    "quizOptions": [
      { "id": "A", "text": "Inmovilización con yeso antebraquiopalmar" },
      { "id": "B", "text": "Cirugía inmediata" },
      { "id": "C", "text": "Alta con control ambulatorio" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Las fracturas de escafoides no desplazadas se tratan con inmovilización prolongada.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "MC210",
    "term": "Fractura-luxación de Lisfranc",
    "definition": "Hombre de 35 años, accidente deportivo, dolor e impotencia en mediopié, edema y deformidad evidente.",
    "quizOptions": [
      { "id": "A", "text": "Inmovilización y reposo" },
      { "id": "B", "text": "Reducción y fijación quirúrgica" },
      { "id": "C", "text": "Alta con analgésicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La fractura-luxación de Lisfranc requiere reducción y fijación quirúrgica para evitar secuelas funcionales.",
    "rotation": "Traumatología",
    "difficulty": "alta"
  },
  {
    "id": "MC211",
    "term": "Fractura de pelvis estable",
    "definition": "Varón de 60 años, caída desde su altura, dolor en región inguinal, Rx: fractura de ramas púbicas sin desplazamiento.",
    "quizOptions": [
      { "id": "A", "text": "Tratamiento conservador con analgesia y movilización precoz" },
      { "id": "B", "text": "Cirugía urgente" },
      { "id": "C", "text": "Alta inmediata" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Las fracturas estables de pelvis se tratan de forma conservadora y movilización precoz.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "MC212",
    "term": "Lesión del ligamento cruzado anterior (LCA)",
    "definition": "Joven de 20 años, giro brusco de rodilla, chasquido, derrame y prueba de Lachman positiva.",
    "quizOptions": [
      { "id": "A", "text": "Inmovilización prolongada" },
      { "id": "B", "text": "Rehabilitación y cirugía diferida según actividad" },
      { "id": "C", "text": "Alta con analgésicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La rotura del LCA suele requerir cirugía diferida en pacientes jóvenes y activos; la rehabilitación es fundamental.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "MC213",
    "term": "Fractura vertebral osteoporótica",
    "definition": "Mujer de 74 años, dolor lumbar agudo tras esfuerzo mínimo, Rx: acuñamiento vertebral.",
    "quizOptions": [
      { "id": "A", "text": "Reposo relativo, analgesia y corsé ortopédico" },
      { "id": "B", "text": "Cirugía urgente" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Las fracturas vertebrales osteoporóticas estables se tratan con reposo relativo, analgesia y ortesis.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "MC214",
    "term": "Síndrome nefrótico idiopático",
    "definition": "Niño de 6 años, edema generalizado, proteinuria masiva y hipoalbuminemia.",
    "quizOptions": [
      { "id": "A", "text": "Corticoides sistémicos" },
      { "id": "B", "text": "Diuréticos únicamente" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El síndrome nefrótico idiopático en niños responde bien a corticoides sistémicos.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "MC215",
    "term": "Insuficiencia renal aguda prerrenal",
    "definition": "Varón de 70 años, hipotenso, oliguria, creatinina elevada y antecedentes de deshidratación.",
    "quizOptions": [
      { "id": "A", "text": "Reposición de volumen y corrección de causa" },
      { "id": "B", "text": "Diálisis inmediata" },
      { "id": "C", "text": "Restricción hídrica" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La insuficiencia renal prerrenal mejora con reposición de volumen y tratamiento de la causa subyacente.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "MC216",
    "term": "Glomerulonefritis postinfecciosa",
    "definition": "Niño de 8 años, hematuria macroscópica, hipertensión y antecedentes de infección faríngea reciente.",
    "quizOptions": [
      { "id": "A", "text": "Tratamiento sintomático y control de la presión arterial" },
      { "id": "B", "text": "Antibióticos prolongados" },
      { "id": "C", "text": "Diálisis urgente" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La glomerulonefritis postinfecciosa suele resolverse con tratamiento sintomático y control de la hipertensión.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "MC217",
    "term": "Nefrolitiasis renal",
    "definition": "Mujer de 35 años, dolor lumbar intenso, hematuria microscópica y litiasis de 5 mm en uréter proximal.",
    "quizOptions": [
      { "id": "A", "text": "Analgesia y aumento de ingesta hídrica" },
      { "id": "B", "text": "Cirugía inmediata" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Los cálculos menores de 6 mm suelen eliminarse con analgesia y aumento de líquidos.",
    "rotation": "Nefrología",
    "difficulty": "fácil"
  },
  {
    "id": "MC218",
    "term": "Síndrome urémico",
    "definition": "Varón de 60 años, insuficiencia renal crónica avanzada, náuseas, prurito y alteración del estado mental.",
    "quizOptions": [
      { "id": "A", "text": "Inicio de diálisis" },
      { "id": "B", "text": "Restricción hídrica estricta" },
      { "id": "C", "text": "Solo dieta baja en proteínas" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El síndrome urémico grave requiere inicio de diálisis para controlar síntomas y complicaciones.",
    "rotation": "Nefrología",
    "difficulty": "alta"
  },
  {
    "id": "MC219",
    "term": "Hiperkalemia leve",
    "definition": "Mujer de 55 años, creatinina normal, potasio sérico 5,8 mEq/L, asintomática.",
    "quizOptions": [
      { "id": "A", "text": "Restricción dietética y revisión de fármacos" },
      { "id": "B", "text": "Diálisis urgente" },
      { "id": "C", "text": "Administrar gluconato cálcico" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La hiperkalemia leve asintomática se maneja con cambios dietéticos y ajuste farmacológico.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "MC220",
    "term": "Síndrome nefrítico",
    "definition": "Varón de 45 años, hematuria, hipertensión y edema, proteinuria moderada.",
    "quizOptions": [
      { "id": "A", "text": "Control de la presión arterial y diuréticos" },
      { "id": "B", "text": "Antibióticos prolongados" },
      { "id": "C", "text": "Diálisis inmediata" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El síndrome nefrítico se trata con control de la hipertensión y manejo de la sobrecarga hídrica.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "MC221",
    "term": "Nefropatía diabética",
    "definition": "Paciente diabético de 58 años, proteinuria persistente y disminución progresiva del filtrado glomerular.",
    "quizOptions": [
      { "id": "A", "text": "Control estricto de glucemia y presión arterial con IECA o ARA II" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Diálisis inmediata" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El manejo de la nefropatía diabética incluye control glucémico y antihipertensivos que protejan el riñón.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "MC222",
    "term": "Infección urinaria complicada",
    "definition": "Mujer de 65 años, fiebre, disuria, dolor lumbar y antecedentes de litiasis renal.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos intravenosos y hospitalización" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Alta con analgésicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Las infecciones urinarias complicadas requieren tratamiento antibiótico intravenoso y hospitalización.",
    "rotation": "Nefrología",
    "difficulty": "alta"
  },
  {
    "id": "MC223",
    "term": "Síndrome de Fanconi",
    "definition": "Niño de 4 años, poliuria, raquitismo, glucosuria y aminoaciduria sin hiperglucemia.",
    "quizOptions": [
      { "id": "A", "text": "Tratamiento con suplementos de bicarbonato y vitamina D" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Diálisis urgente" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El síndrome de Fanconi se trata con corrección de acidosis y déficit vitamínicos.",
    "rotation": "Nefrología",
    "difficulty": "alta"
  },
  {
    "id": "MC224",
    "term": "Síndrome urémico hemolítico",
    "definition": "Niña de 3 años, diarrea hemorrágica, anemia hemolítica, trombocitopenia y fallo renal agudo.",
    "quizOptions": [
      { "id": "A", "text": "Soporte vital y diálisis si es necesario" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Corticoides sistémicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El síndrome urémico hemolítico requiere soporte intensivo y diálisis en casos graves.",
    "rotation": "Nefrología",
    "difficulty": "alta"
  },
  {
    "id": "MC225",
    "term": "Hiponatremia hipovolémica",
    "definition": "Varón de 65 años, náuseas, hipotensión y natremia 125 mEq/L.",
    "quizOptions": [
      { "id": "A", "text": "Reposición de volumen con solución salina isotónica" },
      { "id": "B", "text": "Restricción hídrica" },
      { "id": "C", "text": "Administrar diuréticos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La hiponatremia hipovolémica se corrige con reposición adecuada de volumen.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "MC226",
    "term": "Nefritis lúpica",
    "definition": "Mujer de 28 años con lupus eritematoso sistémico, proteinuria, hematuria y aumento de creatinina.",
    "quizOptions": [
      { "id": "A", "text": "Corticoides y ciclofosfamida o micofenolato" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Diálisis inmediata" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La nefritis lúpica requiere tratamiento inmunosupresor con corticoides y agentes citotóxicos.",
    "rotation": "Nefrología",
    "difficulty": "alta"
  },
  {
    "id": "MC227",
    "term": "Hipercalcemia por hiperparatiroidismo",
    "definition": "Mujer de 58 años, fatiga, poliuria, cálculos renales y calcemia elevada con PTH alta.",
    "quizOptions": [
      { "id": "A", "text": "Hidratación y cirugía paratiroidea" },
      { "id": "B", "text": "Administrar calcio oral" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La hipercalcemia sintomática se trata con hidratación y paratiroidectomía si está indicada.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "MC228",
    "term": "Embarazo ectópico",
    "definition": "Mujer de 32 años, amenorrea de 7 semanas, dolor abdominal, sangrado vaginal escaso y beta-hCG positiva. Ecografía: útero vacío.",
    "quizOptions": [
      { "id": "A", "text": "Metotrexato si estable y criterios adecuados" },
      { "id": "B", "text": "Legrado uterino" },
      { "id": "C", "text": "Observación expectante" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El metotrexato es opción en embarazo ectópico no complicado y paciente estable.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "MC229",
    "term": "Preeclampsia leve",
    "definition": "Gestante de 28 semanas, PA 148/92 mmHg, proteinuria leve, sin síntomas.",
    "quizOptions": [
      { "id": "A", "text": "Inducción inmediata del parto" },
      { "id": "B", "text": "Reposo relativo y control clínico-analítico" },
      { "id": "C", "text": "Anticonvulsivantes" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La preeclampsia leve se maneja con reposo y seguimiento estrecho, no requiere inducción inmediata.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "MC230",
    "term": "Diabetes gestacional",
    "definition": "Gestante de 30 años, glucosa basal 110 mg/dl, test de O'Sullivan alterado, sin síntomas.",
    "quizOptions": [
      { "id": "A", "text": "Dieta y ejercicio físico" },
      { "id": "B", "text": "Insulina de inicio" },
      { "id": "C", "text": "Antidiabéticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El manejo inicial de la diabetes gestacional es dieta y ejercicio; insulina si no hay control.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "MC231",
    "term": "Amenaza de parto pretérmino",
    "definition": "Gestante de 32 semanas, contracciones uterinas regulares, cuello uterino acortado en ecografía.",
    "quizOptions": [
      { "id": "A", "text": "Reposo absoluto y antibióticos" },
      { "id": "B", "text": "Tocolíticos y corticoides para maduración pulmonar" },
      { "id": "C", "text": "Inducción inmediata del parto" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La amenaza de parto pretérmino se maneja con tocolíticos y corticoides para maduración pulmonar fetal.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "MC232",
    "term": "Placenta previa",
    "definition": "Gestante de 34 semanas, metrorragia indolora, sin contracciones, PA y pulso estables.",
    "quizOptions": [
      { "id": "A", "text": "Reposo y control hospitalario" },
      { "id": "B", "text": "Legrado uterino" },
      { "id": "C", "text": "Parto vaginal inmediato" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La placenta previa con sangrado estable se maneja con reposo y observación hospitalaria.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "MC233",
    "term": "Rotura prematura de membranas a término",
    "definition": "Gestante de 39 semanas, pérdida de líquido claro por vagina, sin contracciones ni fiebre.",
    "quizOptions": [
      { "id": "A", "text": "Inducción del parto si no hay inicio espontáneo" },
      { "id": "B", "text": "Alta con control domiciliario" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La rotura prematura de membranas a término se maneja con inducción si no hay parto espontáneo en pocas horas.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "MC234",
    "term": "Hemorragia postparto",
    "definition": "Mujer de 29 años, sangrado abundante tras parto vaginal, útero blando a la palpación.",
    "quizOptions": [
      { "id": "A", "text": "Masaje uterino y oxitocina intravenosa" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Alta con control domiciliario" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La causa más frecuente de hemorragia postparto es la atonía uterina; se trata con masaje y oxitocina.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "MC235",
    "term": "Infección urinaria durante el embarazo",
    "definition": "Gestante de 24 semanas, disuria, polaquiuria, fiebre y urocultivo positivo.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos seguros en embarazo (ej. amoxicilina)" },
      { "id": "B", "text": "Alta sin tratamiento" },
      { "id": "C", "text": "Antiinflamatorios no esteroideos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Las infecciones urinarias en el embarazo requieren tratamiento antibiótico seguro para evitar complicaciones.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "MC236",
    "term": "Preeclampsia grave",
    "definition": "Gestante de 36 semanas, PA 170/110 mmHg, cefalea, edemas y proteinuria masiva.",
    "quizOptions": [
      { "id": "A", "text": "Reposo domiciliario" },
      { "id": "B", "text": "Inducción del parto y antihipertensivos" },
      { "id": "C", "text": "Solo control analítico" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La preeclampsia grave requiere finalización del embarazo y control de la PA.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "MC237",
    "term": "Anemia ferropénica en gestante",
    "definition": "Gestante de 26 semanas, Hb 9,8 g/dl, ferritina baja, sin otros síntomas.",
    "quizOptions": [
      { "id": "A", "text": "Hierro oral" },
      { "id": "B", "text": "Transfusión sanguínea" },
      { "id": "C", "text": "Solo dieta rica en hierro" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La anemia ferropénica leve-moderada en gestantes se trata con hierro oral.",
    "rotation": "Obstetricia",
    "difficulty": "fácil"
  },
  {
    "id": "MC238",
    "term": "Amenaza de aborto en primer trimestre",
    "definition": "Mujer de 9 semanas, metrorragia escasa, dolor leve, cuello uterino cerrado en exploración.",
    "quizOptions": [
      { "id": "A", "text": "Reposo relativo y control ecográfico" },
      { "id": "B", "text": "Legrado uterino urgente" },
      { "id": "C", "text": "Alta sin seguimiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La amenaza de aborto se maneja con reposo relativo y seguimiento ecográfico.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "MC239",
    "term": "Incompatibilidad Rh",
    "definition": "Gestante Rh negativa, pareja Rh positiva, sin sensibilización previa.",
    "quizOptions": [
      { "id": "A", "text": "Administrar gammaglobulina anti-D en la semana 28 y tras el parto" },
      { "id": "B", "text": "Solo seguimiento analítico" },
      { "id": "C", "text": "Antibióticos profilácticos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La profilaxis anti-D previene la sensibilización Rh en gestantes Rh negativas.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "MC240",
    "term": "Embarazo gemelar bicorial biamniótico",
    "definition": "Gestante de 18 semanas, ecografía: dos fetos, dos placentas y dos sacos amnióticos.",
    "quizOptions": [
      { "id": "A", "text": "Control prenatal más frecuente y ecografías seriadas" },
      { "id": "B", "text": "Alta con seguimiento habitual" },
      { "id": "C", "text": "Inducción del parto a las 28 semanas" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El embarazo gemelar requiere controles prenatales y ecografías más frecuentes.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "MC241",
    "term": "Infección por Streptococcus agalactiae en gestante",
    "definition": "Gestante de 37 semanas, cultivo vaginal-rectal positivo para Streptococcus agalactiae.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos intraparto (penicilina G)" },
      { "id": "B", "text": "Antibióticos orales antes del parto" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La profilaxis antibiótica intraparto previene la transmisión neonatal del estreptococo grupo B.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "MC242",
    "term": "Otitis media aguda",
    "definition": "Niño de 3 años, fiebre, otalgia, irritabilidad y membrana timpánica abombada y eritematosa.",
    "quizOptions": [
      { "id": "A", "text": "Amoxicilina oral" },
      { "id": "B", "text": "Antibióticos tópicos" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La amoxicilina oral es el tratamiento de elección en la otitis media aguda en menores de 2 años o con síntomas graves.",
    "rotation": "Otorrinolaringología",
    "difficulty": "fácil"
  },
  {
    "id": "MC243",
    "term": "Sinusitis aguda bacteriana",
    "definition": "Mujer de 28 años, dolor facial, rinorrea purulenta, fiebre y congestión nasal de más de 10 días.",
    "quizOptions": [
      { "id": "A", "text": "Corticoides nasales" },
      { "id": "B", "text": "Amoxicilina-clavulánico oral" },
      { "id": "C", "text": "Antivirales orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La sinusitis bacteriana aguda se trata con antibióticos; amoxicilina-clavulánico es de primera elección.",
    "rotation": "Otorrinolaringología",
    "difficulty": "media"
  },
  {
    "id": "MC244",
    "term": "Faringoamigdalitis estreptocócica",
    "definition": "Niño de 7 años, fiebre, odinofagia, exudado amigdalar y adenopatías cervicales dolorosas.",
    "quizOptions": [
      { "id": "A", "text": "Ibuprofeno únicamente" },
      { "id": "B", "text": "Penicilina V oral" },
      { "id": "C", "text": "Antivirales orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La penicilina V es el tratamiento de elección en la faringoamigdalitis estreptocócica.",
    "rotation": "Otorrinolaringología",
    "difficulty": "fácil"
  },
  {
    "id": "MC245",
    "term": "Epistaxis anterior",
    "definition": "Varón de 15 años, sangrado nasal unilateral tras manipulación, sin sangrado posterior.",
    "quizOptions": [
      { "id": "A", "text": "Compresión nasal y taponamiento anterior si persiste" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Cauterización quirúrgica inmediata" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La mayoría de las epistaxis anteriores se controlan con compresión y, si es necesario, taponamiento anterior.",
    "rotation": "Otorrinolaringología",
    "difficulty": "fácil"
  },
  {
    "id": "MC246",
    "term": "Laringitis aguda (crup)",
    "definition": "Niño de 2 años, tos perruna, disfonía, estridor inspiratorio y fiebre baja.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Corticoides orales o nebulizados" },
      { "id": "C", "text": "Antivirales orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La laringitis viral se trata con corticoides; la adrenalina nebulizada se reserva para casos graves.",
    "rotation": "Otorrinolaringología",
    "difficulty": "media"
  },
  {
    "id": "MC247",
    "term": "Otitis externa aguda",
    "definition": "Mujer de 25 años, dolor auricular, prurito y supuración tras baño en piscina. Trago positivo.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos tópicos (gotas óticas)" },
      { "id": "B", "text": "Amoxicilina oral" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La otitis externa aguda se trata con antibióticos tópicos en gotas óticas.",
    "rotation": "Otorrinolaringología",
    "difficulty": "fácil"
  },
  {
    "id": "MC248",
    "term": "Parálisis facial periférica (Bell)",
    "definition": "Varón de 38 años, desviación de la boca, imposibilidad de cerrar el ojo derecho, sin otros síntomas.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Corticoides orales" },
      { "id": "C", "text": "Antivirales orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de la parálisis de Bell es corticoides orales en los primeros días.",
    "rotation": "Otorrinolaringología",
    "difficulty": "media"
  },
  {
    "id": "MC249",
    "term": "Absceso periamigdalino",
    "definition": "Adolescente de 16 años, fiebre alta, odinofagia intensa, trismus y desviación de la úvula.",
    "quizOptions": [
      { "id": "A", "text": "Drenaje y antibióticos intravenosos" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Corticoides tópicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El absceso periamigdalino requiere drenaje y antibióticos intravenosos.",
    "rotation": "Otorrinolaringología",
    "difficulty": "alta"
  },
  {
    "id": "MC250",
    "term": "Rinitis alérgica estacional",
    "definition": "Mujer de 20 años, estornudos, rinorrea acuosa, prurito nasal y conjuntival en primavera.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Antihistamínicos orales y corticoides nasales" },
      { "id": "C", "text": "Antivirales orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento de la rinitis alérgica es con antihistamínicos orales y corticoides nasales.",
    "rotation": "Otorrinolaringología",
    "difficulty": "fácil"
  },
  {
    "id": "MC251",
    "term": "Vertigo posicional paroxístico benigno (VPPB)",
    "definition": "Mujer de 42 años, episodios breves de vértigo al girar la cabeza, sin síntomas auditivos.",
    "quizOptions": [
      { "id": "A", "text": "Maniobras de reposicionamiento (Epley)" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Corticoides orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El VPPB se trata con maniobras de reposicionamiento canalicular como la de Epley.",
    "rotation": "Otorrinolaringología",
    "difficulty": "media"
  },
  {
    "id": "MC252",
    "term": "Epiglotitis aguda",
    "definition": "Niño de 5 años, fiebre alta, disfagia, estridor y posición en trípode.",
    "quizOptions": [
      { "id": "A", "text": "Corticoides orales" },
      { "id": "B", "text": "Antibióticos intravenosos y control de vía aérea" },
      { "id": "C", "text": "Alta con control domiciliario" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La epiglotitis es una urgencia que requiere antibióticos IV y asegurar la vía aérea.",
    "rotation": "Otorrinolaringología",
    "difficulty": "alta"
  },
  {
    "id": "MC253",
    "term": "Perforación timpánica traumática",
    "definition": "Varón de 35 años, dolor y otorragia tras buceo, hipoacusia y perforación timpánica visible.",
    "quizOptions": [
      { "id": "A", "text": "Observación y evitar entrada de agua" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Cirugía inmediata" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La mayoría de las perforaciones timpánicas traumáticas curan espontáneamente; evitar agua y control.",
    "rotation": "Otorrinolaringología",
    "difficulty": "media"
  },
  {
    "id": "MC254",
    "term": "Parotiditis viral (paperas)",
    "definition": "Niño de 8 años, fiebre, tumefacción dolorosa preauricular bilateral, sin supuración.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Tratamiento sintomático y reposo" },
      { "id": "C", "text": "Corticoides orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La parotiditis viral se trata con medidas sintomáticas y reposo; los antibióticos no están indicados.",
    "rotation": "Otorrinolaringología",
    "difficulty": "fácil"
  },
  {
    "id": "MC255",
    "term": "Sordera súbita",
    "definition": "Mujer de 48 años, pérdida brusca de audición unilateral, sin otalgia ni supuración.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Corticoides sistémicos" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La sordera súbita se trata con corticoides sistémicos de forma precoz para mejorar el pronóstico.",
    "rotation": "Otorrinolaringología",
    "difficulty": "alta"
  },
  {
    "id": "MC256",
    "term": "Conjuntivitis bacteriana aguda",
    "definition": "Niño de 6 años, ojo rojo, secreción purulenta y leve edema palpebral, sin afectación visual.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos tópicos (gotas oftálmicas)" },
      { "id": "B", "text": "Corticoides tópicos" },
      { "id": "C", "text": "Lavados con suero fisiológico únicamente" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La conjuntivitis bacteriana aguda se trata con antibióticos tópicos en colirio.",
    "rotation": "Oftalmología",
    "difficulty": "fácil"
  },
  {
    "id": "MC257",
    "term": "Uveítis anterior aguda",
    "definition": "Varón de 35 años, ojo rojo, dolor ocular, fotofobia y miosis. No secreción.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos tópicos" },
      { "id": "B", "text": "Corticoides tópicos y midriáticos" },
      { "id": "C", "text": "Lavados con suero fisiológico" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La uveítis anterior se trata con corticoides tópicos y midriáticos para prevenir sinequias.",
    "rotation": "Oftalmología",
    "difficulty": "media"
  },
  {
    "id": "MC258",
    "term": "Glaucoma agudo de ángulo cerrado",
    "definition": "Mujer de 60 años, dolor ocular intenso, visión borrosa, halos de colores y midriasis fija.",
    "quizOptions": [
      { "id": "A", "text": "Pilocarpina tópica y derivación urgente a oftalmología" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Corticoides sistémicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El glaucoma agudo requiere tratamiento inmediato con hipotensores y valoración urgente por oftalmología.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "MC259",
    "term": "Orzuelo",
    "definition": "Mujer de 25 años, dolor y enrojecimiento en el borde palpebral, nódulo pequeño y doloroso.",
    "quizOptions": [
      { "id": "A", "text": "Compresas calientes y antibiótico tópico si supura" },
      { "id": "B", "text": "Corticoides tópicos" },
      { "id": "C", "text": "Incisión quirúrgica inmediata" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El orzuelo se trata con calor local y antibiótico tópico si hay supuración.",
    "rotation": "Oftalmología",
    "difficulty": "fácil"
  },
  {
    "id": "MC260",
    "term": "Desprendimiento de retina",
    "definition": "Varón de 58 años, visión de 'cortina negra', fotopsias y miodesopsias bruscas.",
    "quizOptions": [
      { "id": "A", "text": "Observación y control ambulatorio" },
      { "id": "B", "text": "Derivación urgente a oftalmología para cirugía" },
      { "id": "C", "text": "Antibióticos tópicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El desprendimiento de retina es una urgencia que requiere valoración y cirugía urgente.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "MC261",
    "term": "Catarata senil",
    "definition": "Mujer de 74 años, disminución progresiva de la agudeza visual, sin dolor ni enrojecimiento.",
    "quizOptions": [
      { "id": "A", "text": "Cirugía de catarata programada" },
      { "id": "B", "text": "Antibióticos tópicos" },
      { "id": "C", "text": "Corticoides tópicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La catarata sintomática se resuelve con cirugía de extracción del cristalino.",
    "rotation": "Oftalmología",
    "difficulty": "media"
  },
  {
    "id": "MC262",
    "term": "Conjuntivitis alérgica",
    "definition": "Niña de 9 años, prurito ocular, lagrimeo, enrojecimiento bilateral y antecedentes de alergia.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos tópicos" },
      { "id": "B", "text": "Antihistamínicos tópicos y lágrimas artificiales" },
      { "id": "C", "text": "Corticoides sistémicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La conjuntivitis alérgica se trata con antihistamínicos tópicos y lágrimas artificiales.",
    "rotation": "Oftalmología",
    "difficulty": "fácil"
  },
  {
    "id": "MC263",
    "term": "Queratitis herpética",
    "definition": "Varón de 34 años, ojo rojo, dolor, fotofobia y úlcera dendrítica en córnea.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos tópicos" },
      { "id": "B", "text": "Antivirales tópicos (aciclovir)" },
      { "id": "C", "text": "Corticoides tópicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La queratitis herpética requiere antivirales tópicos; los corticoides están contraindicados.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "MC264",
    "term": "Glaucoma crónico de ángulo abierto",
    "definition": "Mujer de 65 años, pérdida progresiva de visión periférica, presión intraocular elevada.",
    "quizOptions": [
      { "id": "A", "text": "Hipotensores tópicos (prostaglandinas, betabloqueantes)" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Corticoides tópicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento inicial del glaucoma crónico es con hipotensores tópicos.",
    "rotation": "Oftalmología",
    "difficulty": "media"
  },
  {
    "id": "MC265",
    "term": "Celulitis orbitaria",
    "definition": "Niño de 7 años, fiebre, proptosis, dolor ocular y limitación de la movilidad ocular.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos intravenosos y hospitalización" },
      { "id": "B", "text": "Antibióticos tópicos" },
      { "id": "C", "text": "Alta con control domiciliario" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La celulitis orbitaria es una urgencia que requiere antibióticos IV y hospitalización.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "MC266",
    "term": "Blefaritis crónica",
    "definition": "Mujer de 50 años, enrojecimiento y descamación en borde palpebral, prurito y sensación de arenilla.",
    "quizOptions": [
      { "id": "A", "text": "Higiene palpebral y lágrimas artificiales" },
      { "id": "B", "text": "Antibióticos sistémicos" },
      { "id": "C", "text": "Corticoides sistémicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La blefaritis se trata con higiene palpebral diaria y lágrimas artificiales.",
    "rotation": "Oftalmología",
    "difficulty": "fácil"
  },
  {
    "id": "MC267",
    "term": "Dacriocistitis aguda",
    "definition": "Varón de 62 años, dolor, enrojecimiento e inflamación en ángulo interno del ojo, secreción purulenta.",
    "quizOptions": [
      { "id": "A", "text": "Compresas calientes y antibióticos orales" },
      { "id": "B", "text": "Corticoides tópicos" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La dacriocistitis aguda se trata con antibióticos orales y compresas calientes.",
    "rotation": "Oftalmología",
    "difficulty": "media"
  },
  {
    "id": "MC268",
    "term": "Oclusión arterial central de la retina",
    "definition": "Mujer de 68 años, pérdida visual súbita e indolora, fondo de ojo con mácula rojo cereza.",
    "quizOptions": [
      { "id": "A", "text": "Masaje ocular y derivación urgente a oftalmología" },
      { "id": "B", "text": "Antibióticos tópicos" },
      { "id": "C", "text": "Corticoides sistémicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La oclusión arterial central de la retina es una urgencia que requiere masaje ocular y derivación inmediata.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "MC269",
    "term": "Chalazión",
    "definition": "Niño de 8 años, nódulo indoloro en el párpado superior, sin signos de infección.",
    "quizOptions": [
      { "id": "A", "text": "Compresas calientes y observación" },
      { "id": "B", "text": "Antibióticos tópicos" },
      { "id": "C", "text": "Incisión quirúrgica inmediata" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El chalazión suele resolverse con medidas locales; la cirugía se reserva para casos persistentes.",
    "rotation": "Oftalmología",
    "difficulty": "fácil"
  },
  {
    "id": "MC270",
    "term": "Artritis reumatoide de inicio",
    "definition": "Mujer de 35 años, dolor y rigidez matutina en dedos y muñecas desde hace 4 meses, hinchazón bilateral y simétrica. FR y anti-CCP positivos.",
    "quizOptions": [
      { "id": "A", "text": "Iniciar metotrexato y AINEs" },
      { "id": "B", "text": "Solo analgésicos" },
      { "id": "C", "text": "Corticoides a largo plazo en monoterapia" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento de inicio en la artritis reumatoide es con FAMEs como metotrexato, asociado a AINEs para control sintomático.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "MC271",
    "term": "Gota aguda",
    "definition": "Varón de 58 años, dolor e inflamación súbita en primer dedo del pie, enrojecimiento y calor local, antecedentes de hiperuricemia.",
    "quizOptions": [
      { "id": "A", "text": "Alopurinol de inicio" },
      { "id": "B", "text": "Colchicina o AINEs" },
      { "id": "C", "text": "Corticoides orales a largo plazo" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "En la crisis aguda de gota, el tratamiento de elección son colchicina o AINEs; el alopurinol se inicia tras la fase aguda.",
    "rotation": "Reumatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC272",
    "term": "Lupus eritematoso sistémico (LES)",
    "definition": "Mujer de 22 años, artralgias, rash malar, fotosensibilidad y ANA positivos.",
    "quizOptions": [
      { "id": "A", "text": "AINEs en monoterapia" },
      { "id": "B", "text": "Hidroxicloroquina y protección solar" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La hidroxicloroquina es fundamental en LES leve-moderado, junto a protección solar.[8]",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "MC273",
    "term": "Espondilitis anquilosante",
    "definition": "Varón de 28 años, dolor lumbar inflamatorio, rigidez matutina >30 minutos, mejoría con ejercicio, HLA-B27 positivo.",
    "quizOptions": [
      { "id": "A", "text": "AINEs y ejercicio físico regular" },
      { "id": "B", "text": "Reposo absoluto" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento inicial de la espondilitis anquilosante son los AINEs y mantener actividad física.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "MC274",
    "term": "Polimialgia reumática",
    "definition": "Mujer de 72 años, dolor y rigidez en cintura escapular y pélvica, VSG y PCR elevadas, sin debilidad muscular.",
    "quizOptions": [
      { "id": "A", "text": "Corticoides a dosis bajas" },
      { "id": "B", "text": "AINEs en monoterapia" },
      { "id": "C", "text": "Fisioterapia exclusiva" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La polimialgia reumática responde de forma espectacular a corticoides a dosis bajas.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "MC275",
    "term": "Artritis séptica",
    "definition": "Varón de 66 años, dolor y tumefacción en rodilla, fiebre, líquido articular purulento con leucocitosis.",
    "quizOptions": [
      { "id": "A", "text": "AINEs y reposo" },
      { "id": "B", "text": "Drenaje articular y antibióticos intravenosos" },
      { "id": "C", "text": "Corticoides intraarticulares" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La artritis séptica es una urgencia médica que requiere drenaje y antibióticos IV.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "MC276",
    "term": "Vasculitis leucocitoclástica",
    "definition": "Varón de 57 años, fiebre, artritis de tobillos y muñeca, pápulas purpúricas en piernas, biopsia compatible con vasculitis.",
    "quizOptions": [
      { "id": "A", "text": "Corticoides sistémicos" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "AINEs en monoterapia" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Las vasculitis cutáneas con afectación sistémica requieren corticoides sistémicos.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "MC277",
    "term": "Síndrome de Sjögren primario",
    "definition": "Mujer de 49 años, sequedad oral y ocular, test de Schirmer positivo, anticuerpos anti-Ro/La positivos.",
    "quizOptions": [
      { "id": "A", "text": "Lágrimas y saliva artificiales, sintomático" },
      { "id": "B", "text": "Corticoides sistémicos" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento del síndrome de Sjögren es sintomático con sustitutos de lágrimas y saliva.",
    "rotation": "Reumatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC278",
    "term": "Dermatomiositis",
    "definition": "Mujer de 35 años, debilidad muscular proximal, exantema heliotropo y pápulas de Gottron.",
    "quizOptions": [
      { "id": "A", "text": "Fisioterapia exclusiva" },
      { "id": "B", "text": "Corticoides sistémicos y valorar inmunosupresores" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La dermatomiositis requiere corticoides sistémicos y, a menudo, inmunosupresores.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "MC279",
    "term": "Fiebre reumática aguda",
    "definition": "Niño de 9 años, fiebre, poliartritis migratoria, antecedente de faringitis estreptocócica reciente.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos y antiinflamatorios" },
      { "id": "B", "text": "Corticoides sistémicos" },
      { "id": "C", "text": "Reposo absoluto" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento de la fiebre reumática incluye antibióticos y antiinflamatorios para prevenir complicaciones cardíacas.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "MC280",
    "term": "Esclerodermia sistémica limitada",
    "definition": "Mujer de 55 años, fenómeno de Raynaud, esclerodactilia y telangiectasias, anticuerpos anticentrómero positivos.",
    "quizOptions": [
      { "id": "A", "text": "Vasodilatadores y cuidados de la piel" },
      { "id": "B", "text": "Corticoides sistémicos" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento de la esclerodermia limitada es sintomático, con vasodilatadores y cuidados cutáneos.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "MC281",
    "term": "Artritis reactiva",
    "definition": "Varón de 30 años, artritis asimétrica de rodilla y tobillo, uretritis y conjuntivitis tras infección gastrointestinal.",
    "quizOptions": [
      { "id": "A", "text": "Corticoides sistémicos" },
      { "id": "B", "text": "AINEs y fisioterapia" },
      { "id": "C", "text": "Antibióticos orales prolongados" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La artritis reactiva se trata con AINEs y fisioterapia; los antibióticos solo si hay infección activa.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "MC282",
    "term": "Osteoartritis de rodilla",
    "definition": "Mujer de 68 años, dolor mecánico en rodilla, rigidez breve matutina, crepitación y radiografía con osteofitos.",
    "quizOptions": [
      { "id": "A", "text": "AINEs tópicos u orales y ejercicio" },
      { "id": "B", "text": "Corticoides intraarticulares de inicio" },
      { "id": "C", "text": "Reposo absoluto" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La artrosis se maneja con ejercicio, control de peso y AINEs; los corticoides se reservan para brotes.",
    "rotation": "Reumatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC283",
    "term": "Vasculitis de grandes vasos (arteritis de células gigantes)",
    "definition": "Mujer de 74 años, cefalea temporal, claudicación mandibular, VSG elevada y pérdida visual brusca.",
    "quizOptions": [
      { "id": "A", "text": "AINEs" },
      { "id": "B", "text": "Corticoides sistémicos de inmediato" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La arteritis de células gigantes requiere corticoides inmediatos para prevenir ceguera irreversible.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "MC284",
    "term": "Bursitis olecraniana aguda",
    "definition": "Varón de 45 años, tumefacción y dolor en codo, sin fiebre ni signos de infección sistémica.",
    "quizOptions": [
      { "id": "A", "text": "Reposo, hielo y AINEs" },
      { "id": "B", "text": "Corticoides sistémicos" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La bursitis no infecciosa se trata con reposo, hielo y antiinflamatorios; los antibióticos solo si hay infección.",
    "rotation": "Reumatología",
    "difficulty": "fácil"
  },
  {
    "id": "MC285",
    "term": "Cólico nefrítico agudo",
    "definition": "Varón de 45 años, dolor súbito en flanco izquierdo irradiado a genitales, náuseas, hematuria y puño-percusión renal positiva.",
    "quizOptions": [
      { "id": "A", "text": "AINEs y abundante hidratación" },
      { "id": "B", "text": "Cirugía urgente" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento inicial del cólico nefrítico es analgésico (AINEs) e hidratación; la cirugía se reserva para complicaciones.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "MC286",
    "term": "Infección urinaria baja no complicada en varón joven",
    "definition": "Varón de 24 años, disuria, polaquiuria, sin fiebre ni dolor lumbar.",
    "quizOptions": [
      { "id": "A", "text": "Amoxicilina" },
      { "id": "B", "text": "Ciprofloxacino oral" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "En varones jóvenes, la infección urinaria baja se trata con antibióticos como ciprofloxacino tras urocultivo.",
    "rotation": "Urología",
    "difficulty": "fácil"
  },
  {
    "id": "MC287",
    "term": "Retención aguda de orina",
    "definition": "Varón de 68 años, antecedentes de HBP, dolor suprapúbico, globo vesical y ausencia de micción.",
    "quizOptions": [
      { "id": "A", "text": "Colocación de sonda vesical" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Cirugía urgente" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La retención aguda de orina se resuelve inicialmente con sondaje vesical y estudio posterior de la causa.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "MC288",
    "term": "Hematuria macroscópica en fumador",
    "definition": "Mujer de 60 años, fumadora, hematuria macroscópica indolora, sin fiebre ni dolor.",
    "quizOptions": [
      { "id": "A", "text": "Cistoscopia y estudio de imagen" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Alta con control ambulatorio" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La hematuria macroscópica en adultos, especialmente fumadores, requiere descartar tumor vesical con cistoscopia.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "MC289",
    "term": "Orquiepididimitis aguda",
    "definition": "Varón de 32 años, dolor testicular unilateral, fiebre y tumefacción escrotal. Signo de Prehn positivo.",
    "quizOptions": [
      { "id": "A", "text": "Cirugía urgente" },
      { "id": "B", "text": "Antibióticos orales y reposo" },
      { "id": "C", "text": "Alta sin tratamiento" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La orquiepididimitis se trata con antibióticos y reposo; la cirugía es solo para complicaciones.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "MC290",
    "term": "Cáncer de próstata sospechado por PSA elevado",
    "definition": "Varón de 70 años, PSA 7,2 ng/mL, tacto rectal normal.",
    "quizOptions": [
      { "id": "A", "text": "Biopsia prostática transrectal" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Observación y repetir PSA en 6 meses" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "Ante un PSA elevado persistente, la biopsia prostática es el siguiente paso diagnóstico.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "MC291",
    "term": "Priapismo isquémico",
    "definition": "Varón de 34 años, erección dolorosa y mantenida de más de 4 horas tras uso de fármacos.",
    "quizOptions": [
      { "id": "A", "text": "Alta con analgésicos" },
      { "id": "B", "text": "Drenaje corporal y fármacos simpaticomiméticos" },
      { "id": "C", "text": "Antibióticos orales" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El priapismo isquémico es una urgencia que requiere drenaje y tratamiento farmacológico local.",
    "rotation": "Urología",
    "difficulty": "alta"
  },
  {
    "id": "MC292",
    "term": "Tumor renal incidental",
    "definition": "Mujer de 54 años, masa renal sólida en ecografía, asintomática, función renal normal.",
    "quizOptions": [
      { "id": "A", "text": "Nefrectomía parcial o radical según tamaño y localización" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Alta con control anual" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El tratamiento de elección de un tumor renal sólido es la nefrectomía parcial o radical según el caso.",
    "rotation": "Urología",
    "difficulty": "alta"
  },
  {
    "id": "MC293",
    "term": "Incontinencia urinaria de esfuerzo en mujer",
    "definition": "Mujer de 47 años, escapes de orina al toser o hacer ejercicio, sin síntomas de infección.",
    "quizOptions": [
      { "id": "A", "text": "Ejercicios de suelo pélvico (Kegel)" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Cirugía inmediata" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La primera línea en la incontinencia de esfuerzo es la rehabilitación del suelo pélvico.",
    "rotation": "Urología",
    "difficulty": "fácil"
  },
  {
    "id": "MC294",
    "term": "Cáncer vesical no músculo-invasivo",
    "definition": "Varón de 65 años, hematuria indolora, cistoscopia: tumor vesical superficial.",
    "quizOptions": [
      { "id": "A", "text": "Resección transuretral y BCG intravesical" },
      { "id": "B", "text": "Cistectomía radical inmediata" },
      { "id": "C", "text": "Alta con control anual" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "El cáncer vesical superficial se trata con resección transuretral y, según riesgo, BCG intravesical.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "MC295",
    "term": "Fimosis en niño",
    "definition": "Niño de 5 años, prepucio no retráctil, sin infecciones ni síntomas urinarios.",
    "quizOptions": [
      { "id": "A", "text": "Cirugía inmediata" },
      { "id": "B", "text": "Observación y medidas higiénicas" },
      { "id": "C", "text": "Antibióticos tópicos" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "La fimosis fisiológica en niños pequeños suele resolverse espontáneamente y solo requiere observación.",
    "rotation": "Urología",
    "difficulty": "fácil"
  },
  {
    "id": "MC296",
    "term": "Torsión testicular",
    "definition": "Adolescente de 15 años, dolor testicular súbito, náuseas, testículo elevado y reflejo cremastérico ausente.",
    "quizOptions": [
      { "id": "A", "text": "Cirugía urgente (exploración y destorsión)" },
      { "id": "B", "text": "Antibióticos orales" },
      { "id": "C", "text": "Alta con analgésicos" }
    ],
    "correctAnswerId": "A",
    "clinicalPearl": "La torsión testicular es una urgencia quirúrgica: requiere exploración y destorsión inmediata.",
    "rotation": "Urología",
    "difficulty": "alta"
  },
  {
    "id": "MC297",
    "term": "Hiperplasia benigna de próstata (HBP) sintomática",
    "definition": "Varón de 72 años, nicturia, chorro débil, vacilación miccional y sensación de vaciado incompleto.",
    "quizOptions": [
      { "id": "A", "text": "Antibióticos orales" },
      { "id": "B", "text": "Alfabloqueantes (tamsulosina) y control" },
      { "id": "C", "text": "Cirugía inmediata" }
    ],
    "correctAnswerId": "B",
    "clinicalPearl": "El tratamiento inicial de la HBP sintomática son los alfabloqueantes; la cirugía queda para casos refractarios.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "MC298",
    "term": "Disfunción eréctil en varón con factores de riesgo cardiovascular",
    "definition": "Varón de 58 años, diabético e hipertenso, consulta por dificultad para mantener la erección. Niega problemas de libido.",
    "quizOptions": [
      { "id": "A", "text": "Iniciar tratamiento con sildenafilo directamente." },
      { "id": "B", "text": "Remitir a psicología por probable causa psicógena." },
      { "id": "C", "text": "Evaluar y optimizar control de factores de riesgo cardiovascular antes de iniciar tratamiento." }
    ],
    "correctAnswerId": "C",
    "clinicalPearl": "La disfunción eréctil es a menudo un marcador precoz de enfermedad cardiovascular. Es crucial controlar los factores de riesgo (diabetes, HTA, dislipidemia, tabaquismo) antes de iniciar tratamiento sintomático.",
    "rotation": "Medicina Familiar",
    "difficulty": "media"
  }
];

export default miniCases;

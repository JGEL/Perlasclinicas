import { Flashcard } from '../types';

const flashcards: Flashcard[] = [
  {
    "id": "001",
    "term": "Definir brevemente: Hipocalcemia",
    "definition": "Disminución del calcio sérico total por debajo de 8.5 mg/dL o del calcio iónico por debajo de 4.5 mg/dL.",
    "clinicalPearl": "Signo de Trousseau: espasmo muscular tras inflar el manguito del tensiómetro durante 3 minutos sugiere hipocalcemia.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "002",
    "term": "Definir brevemente: Estenosis mitral",
    "definition": "Estrechamiento del orificio de la válvula mitral que obstruye el flujo sanguíneo desde la aurícula izquierda al ventrículo izquierdo.",
    "clinicalPearl": "Paciente inmigrante joven + disnea progresiva + hemoptisis: piensa en fiebre reumática → estenosis mitral.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "003",
    "term": "Definir brevemente: Pancreatitis aguda",
    "definition": "Proceso inflamatorio agudo del páncreas, con compromiso variable de otros tejidos regionales o remotos.",
    "clinicalPearl": "Si el dolor abdominal se irradia 'en cinturón' hacia la espalda y se alivia al inclinarse hacia adelante, sospecha pancreatitis.",
    "rotation": "Cirugía General",
    "difficulty": "alta"
  },
  {
    "id": "004",
    "term": "Definir brevemente: Derrame pleural",
    "definition": "Acumulación anormal de líquido en el espacio pleural.",
    "clinicalPearl": "Matidez a la percusión y disminución del murmullo vesicular en la base pulmonar son los hallazgos clave. Una radiografía de tórax confirmará el diagnóstico.",
    "rotation": "Neumología",
    "difficulty": "baja"
  },
  {
    "id": "005",
    "term": "Definir brevemente: Insuficiencia cardíaca derecha",
    "definition": "Fallo del ventrículo derecho para bombear sangre de manera eficaz, causando congestión venosa sistémica.",
    "clinicalPearl": "Edemas en miembros inferiores + ingurgitación yugular + hepatomegalia, incluso sin disnea, sugieren insuficiencia cardíaca derecha.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "006",
    "term": "Definir brevemente: Hipertiroidismo",
    "definition": "Exceso de hormonas tiroideas circulantes que provoca hiperactividad metabólica.",
    "clinicalPearl": "Paciente joven con palpitaciones, pérdida de peso y ansiedad: explora cuello (bocio) y busca temblor fino en manos.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "007",
    "term": "Definir brevemente: EPOC",
    "definition": "Enfermedad pulmonar obstructiva crónica caracterizada por limitación persistente al flujo aéreo.",
    "clinicalPearl": "Fumador crónico con tos matutina y expectoración: sospecha EPOC aunque la disnea sea leve o tardía.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "008",
    "term": "Definir brevemente: Apendicitis aguda",
    "definition": "Inflamación del apéndice vermiforme, generalmente por obstrucción luminal.",
    "clinicalPearl": "Dolor abdominal que migra de epigastrio/periumbilical a fosa iliaca derecha es clásico, aunque la fiebre sea baja o tardía.",
    "rotation": "Cirugía General",
    "difficulty": "baja"
  },
  {
    "id": "009",
    "term": "Definir brevemente: Diabetes tipo 2",
    "definition": "Trastorno metabólico caracterizado por hiperglucemia secundaria a resistencia a la insulina y disfunción de las células beta.",
    "clinicalPearl": "Mayor con infecciones urinarias recurrentes, prurito genital o poliuria nocturna: descarta diabetes tipo 2 aunque no haya síntomas clássicos.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "010",
    "term": "Definir brevemente: Hiponatremia",
    "definition": "Concentración de sodio sérico menor de 135 mEq/L.",
    "clinicalPearl": "Confusión, náuseas y vómitos sin causa clara: revisa el sodio, la hiponatremia puede ser la responsable.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "011",
    "term": "Definir brevemente: Embolia pulmonar",
    "definition": "Obstrucción aguda de la arteria pulmonar o sus ramas por un trombo.",
    "clinicalPearl": "Disnea súbita + dolor torácico pleurítico + taquicardia en paciente con inmovilización: sospecha embolia pulmonar aunque la Rx sea normal.",
    "rotation": "Medicina Interna",
    "difficulty": "alta"
  },
  {
    "id": "012",
    "term": "Definir brevemente: Fibrilación auricular",
    "definition": "Arritmia supraventricular caracterizada por actividad eléctrica auricular desorganizada y ritmo ventricular irregular.",
    "clinicalPearl": "Palpitaciones irregulares + pulso irregularmente irregular: piensa en fibrilación auricular, incluso si el paciente está asintomático.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "013",
    "term": "Definir brevemente: Pielonefritis aguda",
    "definition": "Infección bacteriana del parénquima renal y sistema pielocalicial.",
    "clinicalPearl": "Fiebre alta + dolor lumbar + piuria: piensa en pielonefritis, sobre todo en mujeres jóvenes o ancianos con confusión.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "014",
    "term": "Definir brevemente: Síndrome nefrótico",
    "definition": "Conjunto de síntomas caracterizado por proteinuria masiva, hipoalbuminemia, edema e hiperlipidemia.",
    "clinicalPearl": "Edema facial matutino + proteinuria masiva: sospecha síndrome nefrótico, especialmente en niños.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "015",
    "term": "Definir brevemente: Hipertensión arterial esencial",
    "definition": "Elevación persistente de la presión arterial sin causa secundaria identificable.",
    "clinicalPearl": "Si detectas hipertensión en consulta, confirma con mediciones repetidas en diferentes días antes de diagnosticar.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "016",
    "term": "Definir brevemente: Gota",
    "definition": "Artritis inflamatoria causada por depósito de cristales de urato monosódico en las articulaciones.",
    "clinicalPearl": "Ataque agudo en primer dedo del pie (podagra) en varón adulto: sospecha gota, especialmente si hay consumo de alcohol o diuréticos.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "017",
    "term": "Definir brevemente: Anemia ferropénica",
    "definition": "Disminución de hemoglobina por déficit de hierro, la causa más frecuente de anemia.",
    "clinicalPearl": "Fatiga + palidez + uñas frágiles: pide ferritina, la anemia ferropénica es común, sobre todo en mujeres jóvenes.",
    "rotation": "Medicina Interna",
    "difficulty": "baja"
  },
  {
    "id": "018",
    "term": "Definir brevemente: Colecistitis aguda",
    "definition": "Inflamación de la vesícula biliar, generalmente secundaria a litiasis.",
    "clinicalPearl": "Dolor en hipocondrio derecho + Murphy positivo + fiebre: piensa en colecistitis, sobre todo en mujeres obesas de mediana edad.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "019",
    "term": "Definir brevemente: Migraña",
    "definition": "Cefalea recurrente, generalmente unilateral, pulsátil y asociada a síntomas neurovegetativos.",
    "clinicalPearl": "Cefalea que mejora al dormir y se asocia a fotofobia o fonofobia: sospecha migraña, especialmente en mujeres jóvenes.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "020",
    "term": "Definir brevemente: Neumonía adquirida en la comunidad",
    "definition": "Infección aguda del parénquima pulmonar adquirida fuera del hospital.",
    "clinicalPearl": "Fiebre + tos productiva + crepitantes en la auscultación: pide radiografía para confirmar neumonía.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "021",
    "term": "Definir brevemente: Hiperglucemia hiperosmolar",
    "definition": "Complicación aguda de la diabetes caracterizada por hiperglucemia extrema y deshidratación sin cetosis significativa.",
    "clinicalPearl": "Paciente anciano con diabetes, deshidratado y muy confuso: piensa en hiperglucemia hiperosmolar, aunque no haya cetonas.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "022",
    "term": "Definir brevemente: Hiperplasia prostática benigna",
    "definition": "Crecimiento benigno de la próstata que causa síntomas urinarios obstructivos en varones mayores.",
    "clinicalPearl": "Varón mayor con chorro urinario débil y nicturia: sospecha hiperplasia prostática benigna antes de buscar causas neurológicas.",
    "rotation": "Urología",
    "difficulty": "baja"
  },
  {
    "id": "023",
    "term": "Definir brevemente: Dermatitis atópica",
    "definition": "Enfermedad inflamatoria crónica de la piel caracterizada por prurito y eccema.",
    "clinicalPearl": "Niño con prurito crónico y lesiones eccematosas en pliegues: piensa en dermatitis atópica, especialmente si hay antecedentes familiares de alergia.",
    "rotation": "Dermatología",
    "difficulty": "baja"
  },
  {
    "id": "024",
    "term": "Definir brevemente: Cistitis aguda",
    "definition": "Infección aguda de la vejiga urinaria, frecuente en mujeres jóvenes.",
    "clinicalPearl": "Disuria, polaquiuria y urgencia miccional sin fiebre alta: piensa en cistitis y trata empíricamente si no hay complicaciones.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "025",
    "term": "Definir brevemente: Mononucleosis infecciosa",
    "definition": "Enfermedad viral causada por el virus de Epstein-Barr, caracterizada por fiebre, faringitis y linfadenopatía.",
    "clinicalPearl": "Faringitis intensa + linfadenopatía cervical posterior + esplenomegalia en adolescente: sospecha mononucleosis aunque el test rápido sea negativo.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "026",
    "term": "Definir brevemente: Insuficiencia renal aguda prerrenal",
    "definition": "Disminución brusca de la función renal secundaria a hipoperfusión sin daño estructural inicial.",
    "clinicalPearl": "Paciente mayor con vómitos o diarrea y creatinina elevada: piensa en causa prerrenal antes de otras etiologías.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "027",
    "term": "Definir brevemente: Asma bronquial",
    "definition": "Enfermedad inflamatoria crónica de la vía aérea caracterizada por hiperreactividad bronquial y obstrucción reversible.",
    "clinicalPearl": "Tos nocturna recurrente en niño, especialmente tras ejercicio o risa: sospecha asma aunque no haya sibilancias en consulta.",
    "rotation": "Neumología",
    "difficulty": "baja"
  },
  {
    "id": "028",
    "term": "Definir brevemente: Úlcera gástrica",
    "definition": "Lesión en la mucosa gástrica que penetra la muscularis mucosae, generalmente por H. pylori o AINEs.",
    "clinicalPearl": "Dolor epigástrico que mejora con alimentos: sugiere úlcera duodenal; si empeora, piensa en úlcera gástrica.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "029",
    "term": "Definir brevemente: Hipertiroidismo subclínico",
    "definition": "Disminución de TSH con niveles normales de T3 y T4, generalmente asintomático.",
    "clinicalPearl": "TSH baja con T3 y T4 normales en paciente asintomático: monitoriza, no siempre requiere tratamento inmediato.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "030",
    "term": "Definir brevemente: Otitis media aguda",
    "definition": "Infección aguda del oído medio, frecuente en niños pequeños.",
    "clinicalPearl": "Niño con fiebre y dolor de oído tras catarro: sospecha otitis media, especialmente si hay irritabilidad nocturna.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "031",
    "term": "Definir brevemente: Enfermedad ácido-péptica",
    "definition": "Conjunto de trastornos relacionados con la exposición de la mucosa gástrica o duodenal al ácido gástrico.",
    "clinicalPearl": "Dispepsia crónica en paciente con antecedentes de AINEs: descarta úlcera péptica aunque no haya dolor intenso.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "032",
    "term": "Definir brevemente: Sinusitis aguda",
    "definition": "Inflamación aguda de los senos paranasales, generalmente secundaria a infección viral o bacteriana.",
    "clinicalPearl": "Congestión nasal + dolor facial que empeora al agacharse: piensa en sinusitis, sobre todo si dura más de 7 días.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "033",
    "term": "Definir brevemente: Lumbalgia mecánica",
    "definition": "Dolor lumbar de origen musculoesquelético, sin signos de alarma ni irradiación neurológica.",
    "clinicalPearl": "Dolor lumbar que mejora con reposo y empeora con actividad: suele ser mecánico, evita pruebas de imagen en el primer episodio.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "034",
    "term": "Definir brevemente: Crisis hipertensiva",
    "definition": "Elevación aguda y severa de la presión arterial, con o sin daño agudo a órgano diana.",
    "clinicalPearl": "Paciente con cefalea intensa y PA >180/120 mmHg: descarta daño a órgano diana antes de decidir tratamiento urgente.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "035",
    "term": "Definir brevemente: Bronquitis aguda",
    "definition": "Inflamación aguda de los bronquios, generalmente de origen viral, caracterizada por tos persistente.",
    "clinicalPearl": "Tos persistente tras un catarro, sin fiebre alta ni consolidación pulmonar: suele ser bronquitis aguda, evita antibióticos salvo sospecha bacteriana.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "036",
    "term": "Definir brevemente: Hipopotasemia",
    "definition": "o hipocalemia. Disminución de potasio sérico por debajo de 3.5 mEq/L.",
    "clinicalPearl": "Debilidad muscular, calambres o arritmias en paciente con diuréticos: revisa potasio, la hipocalemia puede ser la causa.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "037",
    "term": "Definir brevemente: Celulitis",
    "definition": "Infección bacteriana aguda de la dermis y tejido subcutáneo, habitualmente por estreptococos o estafilococos.",
    "clinicalPearl": "Enrojecimiento, calor y dolor local en extremidad con fiebre: piensa en celulitis, especialmente en diabéticos o inmunosuprimidos.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "038",
    "term": "Definir brevemente: Síndrome de intestino irritable",
    "definition": "Trastorno funcional digestivo caracterizado por dolor abdominal y alteraciones del ritmo intestinal sin causa orgánica identificable.",
    "clinicalPearl": "Dolor abdominal crónico que mejora tras defecar y alterna diarrea/estreñimiento: sospecha síndrome de intestino irritable si los estudios son normales.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "039",
    "term": "Definir brevemente: Osteoartritis",
    "definition": "Enfermedad articular degenerativa caracterizada por dolor, rigidez y limitación funcional progresiva.",
    "clinicalPearl": "Dolor articular que empeora con el uso y mejora con el reposo, sin inflamación importante: sugiere osteoartritis, especialmente en adultos mayores.",
    "rotation": "Reumatología",
    "difficulty": "baja"
  },
  {
    "id": "040",
    "term": "Definir brevemente: Hipoglucemia",
    "definition": "Descenso de glucosa plasmática por debajo de 70 mg/dL, con o sin síntomas.",
    "clinicalPearl": "Paciente diabético con sudoración, temblor y confusión: sospecha hipoglucemia, administra glucosa rápidamente.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "041",
    "term": "Definir brevemente: Rinitis alérgica",
    "definition": "Inflamación de la mucosa nasal por reacción alérgica, caracterizada por estornudos, rinorrea y prurito nasal.",
    "clinicalPearl": "Estornudos en salva, picor nasal y lagrimeo en primavera: piensa en rinitis alérgica, pregunta por antecedentes atópicos.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "042",
    "term": "Definir brevemente: Enfermedad por reflujo gastroesofágico",
    "definition": "Paso retrógrado de contenido gástrico al esófago, causando síntomas o complicaciones.",
    "clinicalPearl": "Pirosis postprandial frecuente que mejora con antiácidos: sospecha reflujo gastroesofágico, aconseja medidas dietéticas y de postura.",
    "rotation": "Gastroenterología",
    "difficulty": "baja"
  },
  {
    "id": "043",
    "term": "Definir brevemente: Anemia megaloblástica",
    "definition": "Anemia causada por déficit de vitamina B12 o ácido fólico, caracterizada por macrocitosis.",
    "clinicalPearl": "Anemia con macrocitosis y glositis: descarta déficit de B12 o folato, sobre todo en ancianos o alcohólicos.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "044",
    "term": "Definir brevemente: Enfermedad celíaca",
    "definition": "Enteropatía autoinmune inducida por el gluten en personas genéticamente predispuestas.",
    "clinicalPearl": "Diarrea crónica, pérdida de peso y anemia ferropénica inexplicada: considera enfermedad celíaca, pide anticuerpos específicos.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "045",
    "term": "Definir brevemente: Síndrome vertiginoso periférico",
    "definition": "Trastorno del equilibrio causado por alteraciones en el oído interno o nervio vestibular.",
    "clinicalPearl": "Vértigo intenso de inicio súbito, con nistagmo horizontal y audición conservada: sugiere origen periférico, como VPPB o neuronitis vestibular.",
    "rotation": "Otorrinolaringología",
    "difficulty": "media"
  },
  {
    "id": "046",
    "term": "Definir brevemente: Hipertensión secundaria",
    "definition": "Elevación de la presión arterial debida a una causa identificable, como enfermedad renal o endocrina.",
    "clinicalPearl": "Hipertensión de difícil control en joven o con hipopotasemia: busca causas secundarias como hiperaldosteronismo o feocromocitoma.",
    "rotation": "Medicina Interna",
    "difficulty": "alta"
  },
  {
    "id": "047",
    "term": "Definir brevemente: Varicela",
    "definition": "Infección viral aguda causada por el virus varicela-zóster, caracterizada por exantema vesicular pruriginoso.",
    "clinicalPearl": "Lesiones en diferentes fases evolutivas (máculas, pápulas, vesículas y costras) en el mismo paciente: típico de varicela.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "048",
    "term": "Definir brevemente: Trombosis venosa profunda",
    "definition": "Formación de un trombo en el sistema venoso profundo, habitualmente en extremidades inferiores.",
    "clinicalPearl": "Edema unilateral, dolor y aumento de temperatura en pierna tras inmovilización: sospecha TVP y solicita eco-Doppler.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "049",
    "term": "Definir brevemente: Insuficiencia suprarrenal",
    "definition": "Déficit de producción de hormonas suprarrenales, principalmente cortisol y aldosterona.",
    "clinicalPearl": "Fatiga, hipotensión y pigmentación cutánea: piensa en insuficiencia suprarrenal, especialmente si hay antecedentes autoinmunes.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "050",
    "term": "Definir brevemente: Enfermedad de Parkinson",
    "definition": "Trastorno neurodegenerativo caracterizado por bradicinesia, temblor en reposo y rigidez.",
    "clinicalPearl": "Temblor de reposo, lentitud de movimientos y marcha festinante en anciano: sospecha enfermedad de Parkinson.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "051",
    "term": "Definir brevemente: Pancreatitis aguda",
    "definition": "Inflamación aguda del páncreas, generalmente causada por litiasis biliar o alcohol.",
    "clinicalPearl": "Dolor epigástrico irradiado a espalda + elevación de amilasa/lipasa: piensa en pancreatitis aguda, solicita ecografía abdominal.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "052",
    "term": "Definir brevemente: Enfermedad pulmonar intersticial",
    "definition": "Grupo de enfermedades que afectan el intersticio pulmonar, causando fibrosis y alteración del intercambio gaseoso.",
    "clinicalPearl": "Disnea progresiva + crepitantes en velcro + hipocratismo digital: sospecha enfermedad pulmonar intersticial, solicita TC de tórax.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "053",
    "term": "Definir brevemente: Tiroiditis subaguda (de Quervain)",
    "definition": "Inflamación autolimitada de la glándula tiroides, generalmente posterior a infección viral.",
    "clinicalPearl": "Dolor cervical anterior, fiebre y tiroides dolorosa tras cuadro viral: sugiere tiroiditis subaguda.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "054",
    "term": "Definir brevemente: Enfermedad arterial periférica",
    "definition": "Estenosis u oclusión de arterias periféricas, generalmente por aterosclerosis, que causa isquemia en extremidades.",
    "clinicalPearl": "Claudicación intermitente (dolor al caminar que cede en reposo): sospecha enfermedad arterial periférica, explora pulsos y pide índice tobillo-brazo.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "055",
    "term": "Definir brevemente: Síndrome nefrítico agudo",
    "definition": "Conjunto de signos y síntomas caracterizados por hematuria, proteinuria, hipertensión y edema, generalmente por glomerulonefritis.",
    "clinicalPearl": "Hematuria macroscópica, edema y aumento de la presión arterial tras faringitis o impétigo: sospecha glomerulonefritis postestreptocócica.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "056",
    "term": "Definir brevemente: Enfermedad de Graves",
    "definition": "Trastorno autoinmune que causa hipertiroidismo por estimulación del receptor de TSH.",
    "clinicalPearl": "Hipertiroidismo + oftalmopatía (exoftalmos) y bocio difuso: piensa en enfermedad de Graves.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "057",
    "term": "Definir brevemente: Enfermedad diverticular del colon",
    "definition": "Presencia de divertículos en el colon, que pueden inflamarse y causar diverticulitis.",
    "clinicalPearl": "Dolor en fosa iliaca izquierda y fiebre en adulto mayor: sospecha diverticulitis, pide TAC abdominal.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "058",
    "term": "Definir brevemente: Síndrome de Cushing",
    "definition": "Conjunto de signos y síntomas por exceso de glucocorticoides endógenos o exógenos.",
    "clinicalPearl": "Obesidad central, cara de luna llena, debilidad proximal y estrías violáceas: piensa en síndrome de Cushing.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "059",
    "term": "Definir brevemente: Anemia por enfermedad crónica",
    "definition": "Anemia secundaria a enfermedades inflamatorias, infecciosas o neoplásicas crónicas.",
    "clinicalPearl": "Anemia leve-moderada con ferritina normal o alta y hierro bajo: sospecha anemia por enfermedad crónica.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "060",
    "term": "Definir brevemente: Insuficiencia hepática aguda",
    "definition": "Deterioro rápido de la función hepática con encefalopatía y coagulopatía en paciente sin enfermedad hepática previa.",
    "clinicalPearl": "Ictericia, alteración del estado mental y sangrado en joven previamente sano: sospecha insuficiencia hepática aguda.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "061",
    "term": "Definir brevemente: Hiperparatiroidismo primario",
    "definition": "Exceso de hormona paratiroidea por adenoma, hiperplasia o carcinoma de paratiroides.",
    "clinicalPearl": "Hipercalcemia, litiasis renal y osteoporosis: piensa en hiperparatiroidismo primario, pide PTH.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "062",
    "term": "Definir brevemente: Enfermedad pulmonar obstructiva crónica agudizada",
    "definition": "Empeoramiento agudo de los síntomas respiratorios en paciente con EPOC.",
    "clinicalPearl": "Aumento de disnea, tos y expectoración purulenta en EPOC: sospecha agudización, valora antibióticos y corticoides.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "063",
    "term": "Definir brevemente: Síndrome de apnea-hipopnea del sueño",
    "definition": "Trastorno caracterizado por episodios repetidos de obstrucción de la vía aérea superior durante el sueño.",
    "clinicalPearl": "Ronquidos intensos, pausas respiratorias y somnolencia diurna: sospecha apnea del sueño, pide polisomnografía.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "064",
    "term": "Definir brevemente: Enfermedad de Crohn",
    "definition": "Enfermedad inflamatoria crónica del tracto gastrointestinal, de etiología autoinmune.",
    "clinicalPearl": "Diarrea crónica, dolor abdominal y pérdida de peso en joven: sospecha enfermedad de Crohn, busca lesiones en íleon terminal.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "065",
    "term": "Definir brevemente: Litiasis renal",
    "definition": "Formación de cálculos en el sistema urinario, principalmente en los riñones.",
    "clinicalPearl": "Dolor lumbar intenso, cólico, que irradia a la ingle y hematuria: sospecha litiasis renal, solicita ecografía o TAC sin contraste.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "066",
    "term": "Definir brevemente: Infección urinaria baja (cistitis)",
    "definition": "Infección bacteriana de la vejiga, caracterizada por disuria, urgencia y polaquiuria.",
    "clinicalPearl": "Disuria, urgencia y dolor suprapúbico sin fiebre: típico de cistitis, especialmente en mujeres jóvenes.",
    "rotation": "Urología",
    "difficulty": "baja"
  },
  {
    "id": "067",
    "term": "Definir brevemente: Infección urinaria alta (pielonefritis)",
    "definition": "Infección bacteriana del parénquima renal y sistema pielocalicial.",
    "clinicalPearl": "Fiebre alta, dolor lumbar y piuria: piensa en pielonefritis, inicia antibióticos empíricos y valora ingreso si hay sepsis.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "068",
    "term": "Definir brevemente: Hiperplasia prostática benigna",
    "definition": "Crecimiento benigno de la próstata que causa síntomas urinarios obstructivos en varones mayores.",
    "clinicalPearl": "Nicturia, chorro débil y vacilación urinaria en varón mayor: sospecha HPB, realiza tacto rectal y PSA.",
    "rotation": "Urología",
    "difficulty": "baja"
  },
  {
    "id": "069",
    "term": "Definir brevemente: Cáncer de próstata",
    "definition": "Neoplasia maligna de la glándula prostática, frecuente en varones mayores.",
    "clinicalPearl": "Elevación del PSA y nódulo duro al tacto rectal: sospecha cáncer de próstata, solicita biopsia.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "070",
    "term": "Definir brevemente: Cáncer de vejiga",
    "definition": "Neoplasia maligna que afecta la mucosa vesical, asociada al tabaquismo.",
    "clinicalPearl": "Hematuria indolora en adulto mayor, especialmente fumador: sospecha cáncer de vejiga, solicita cistoscopia.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "071",
    "term": "Definir brevemente: Torsión testicular",
    "definition": "Rotación del cordón espermático que compromete la irrigación testicular, causando isquemia.",
    "clinicalPearl": "Dolor testicular agudo, intenso y elevación del testículo: sospecha torsión testicular, requiere cirugía urgente.",
    "rotation": "Urología",
    "difficulty": "alta"
  },
  {
    "id": "072",
    "term": "Definir brevemente: Epididimitis",
    "definition": "Inflamación del epidídimo, generalmente por infección bacteriana.",
    "clinicalPearl": "Dolor testicular progresivo, fiebre y testículo elevado pero con reflejo cremastérico presente: sugiere epididimitis, diferencia de torsión.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "073",
    "term": "Definir brevemente: Fimosis",
    "definition": "Imposibilidad de retraer el prepucio sobre el glande en varones no circuncidados.",
    "clinicalPearl": "Dificultad para retraer el prepucio en niño o adulto con infecciones urinarias recurrentes: sospecha fimosis, valora cirugía.",
    "rotation": "Urología",
    "difficulty": "baja"
  },
  {
    "id": "074",
    "term": "Definir brevemente: Varicocele",
    "definition": "Dilatación anormal de las venas del plexo pampiniforme del escroto.",
    "clinicalPearl": "Masa escrotal blanda, indolora, que aumenta de tamaño al estar de pie: típico de varicocele, asocia infertilidad.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "075",
    "term": "Definir brevemente: Shock hipovolémico",
    "definition": "Estado de hipoperfusión tisular secundaria a pérdida significativa de volumen intravascular.",
    "clinicalPearl": "Taquicardia, hipotensión y piel fría tras hemorragia o deshidratación: sospecha shock hipovolémico, inicia fluidoterapia rápida.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "076",
    "term": "Definir brevemente: Infarto agudo de miocardio",
    "definition": "Necrosis del miocardio por obstrucción aguda de una arteria coronaria.",
    "clinicalPearl": "Dolor torácico opresivo, irradiado a brazo izquierdo, asociado a sudoración y náuseas: realiza ECG y enzimas cardíacas de inmediato.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "077",
    "term": "Definir brevemente: Accidente cerebrovascular isquémico",
    "definition": "Déficit neurológico agudo por interrupción del flujo sanguíneo cerebral.",
    "clinicalPearl": "Déficit focal súbito (hemiparesia, afasia) en paciente con factores de risco: sospecha ACV isquémico, activa código ictus.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "078",
    "term": "Definir brevemente: Crisis epiléptica",
    "definition": "Descarga eléctrica anormal y excesiva de las neuronas cerebrales que produce síntomas motores, sensitivos o alteración de conciencia.",
    "clinicalPearl": "Pérdida súbita de conciencia con movimentos tónico-clónicos y recuperación posictal: típico de crisis epiléptica generalizada.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "079",
    "term": "Definir brevemente: Neumotórax espontáneo",
    "definition": "Presencia de aire en el espacio pleural sin causa traumática, que colapsa el pulmón.",
    "clinicalPearl": "Disnea súbita y dolor torácico unilateral en joven alto y delgado: sospecha neumotórax, confirma con radiografía.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "080",
    "term": "Definir brevemente: Anafilaxia",
    "definition": "Reacción alérgica sistémica grave y potencialmente mortal, mediada por IgE.",
    "clinicalPearl": "Urticaria, dificultad respiratoria e hipotensión tras exposición a alérgeno: administra adrenalina intramuscular de inmediato.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "081",
    "term": "Definir brevemente: Intoxicación por paracetamol",
    "definition": "Ingesta de dosis tóxicas de paracetamol que puede causar daño hepático grave.",
    "clinicalPearl": "Ingesta aguda >7.5 g en adulto: mide niveles plasmáticos y administra N-acetilcisteína precozmente.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "082",
    "term": "Definir brevemente: Estado asmático",
    "definition": "Crisis de asma grave que no responde a tratamiento inicial y pone en riesgo la vida.",
    "clinicalPearl": "Disnea intensa, uso de músculos accesorios y silencio auscultatorio: sospecha estado asmático, requiere tratamento urgente y posible intubación.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "083",
    "term": "Definir brevemente: Hipoglucemia severa",
    "definition": "Descenso de glucosa plasmática a niveles peligrosamente bajos, con alteración de conciencia o convulsiones.",
    "clinicalPearl": "Paciente diabético inconsciente o convulsivo: administra glucosa intravenosa sin demora.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "084",
    "term": "Definir brevemente: Hemorragia digestiva alta",
    "definition": "Sangrado proveniente del tracto digestivo proximal al ángulo de Treitz.",
    "clinicalPearl": "Vómito en poso de café o melenas: sospecha hemorragia digestiva alta, estabiliza hemodinámicamente y solicita endoscopia urgente.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "085",
    "term": "Definir brevemente: Hernia umbilical",
    "definition": "Protrusión de contenido abdominal a través del anillo umbilical, frecuente en niños y adultos obesos.",
    "clinicalPearl": "Masa umbilical blanda que aumenta con la tos o esfuerzo: sospecha hernia umbilical, valora cirugía si es sintomática o complicada.",
    "rotation": "Cirugía General",
    "difficulty": "baja"
  },
  {
    "id": "086",
    "term": "Definir brevemente: Hernia incisional",
    "definition": "Protrusión de vísceras a través de una cicatriz quirúrgica previa en la pared abdominal.",
    "clinicalPearl": "Masa en zona de cicatriz abdominal que aumenta al esfuerzo: sospecha hernia incisional, riesgo de incarceración.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "087",
    "term": "Definir brevemente: Hernia femoral",
    "definition": "Protrusión de contenido abdominal a través del canal femoral, más frecuente en mujeres.",
    "clinicalPearl": "Masa dolorosa bajo el ligamento inguinal en mujer mayor: sospecha hernia femoral, alto riesgo de estrangulación.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "088",
    "term": "Definir brevemente: Fisura anal",
    "definition": "Desgarro lineal en el anodermo, habitualmente en la línea media posterior.",
    "clinicalPearl": "Dolor anal intenso y sangrado tras la defecación: típico de fisura anal, suele mejorar con tratamiento tópico.",
    "rotation": "Cirugía General",
    "difficulty": "baja"
  },
  {
    "id": "089",
    "term": "Definir brevemente: Fístula perianal",
    "definition": "Trayecto anómalo entre el canal anal y la piel perianal, generalmente secundaria a absceso previo.",
    "clinicalPearl": "Secreción purulenta crónica por orificio perianal: sospecha fístula, requiere evaluación quirúrgica.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "090",
    "term": "Definir brevemente: Hidrocele",
    "definition": "Acumulación de líquido seroso en la túnica vaginal del testículo.",
    "clinicalPearl": "Aumento indoloro del escroto, transluminable: sugiere hidrocele, valora cirugía si es sintomático.",
    "rotation": "Cirugía General",
    "difficulty": "baja"
  },
  {
    "id": "091",
    "term": "Definir brevemente: Quiste pilonidal",
    "definition": "Cavidad subcutánea en la región sacrococcígea con contenido de pelo y material sebáceo.",
    "clinicalPearl": "Dolor, enrojecimiento y supuración en región sacra: sospecha quiste pilonidal, requiere drenaje si hay absceso.",
    "rotation": "Cirugía General",
    "difficulty": "baja"
  },
  {
    "id": "092",
    "term": "Definir brevemente: Úlcera gástrica perforada",
    "definition": "Rotura de una úlcera gástrica que permite la salida de contenido gástrico a la cavidad peritoneal.",
    "clinicalPearl": "Dolor abdominal súbito, intenso y signos de irritación peritoneal: sospecha perforación, busca neumoperitoneo en radiografía.",
    "rotation": "Cirugía General",
    "difficulty": "alta"
  },
  {
    "id": "093",
    "term": "Definir brevemente: Cáncer colorrectal",
    "definition": "Neoplasia maligna que afecta el colon o el recto, frecuente en adultos mayores.",
    "clinicalPearl": "Hematoquecia, anemia ferropénica y cambio en el ritmo intestinal en mayor de 50 años: sospecha cáncer colorrectal, solicita colonoscopia.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "094",
    "term": "Definir brevemente: Eventración",
    "definition": "Protrusión de vísceras abdominales a través de una dehiscencia de la pared abdominal, generalmente en el postoperatorio.",
    "clinicalPearl": "Masa blanda en herida quirúrgica reciente, que aumenta con la tos: sospecha eventración, requiere valoración quirúrgica.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "095",
    "term": "Definir brevemente: Insuficiencia cardíaca congestiva",
    "definition": "Síndrome clínico caracterizado por la incapacidad del corazón para bombear sangre suficiente para satisfacer las necesidades del organismo.",
    "clinicalPearl": "Disnea de esfuerzo, ortopnea y edemas periféricos: sospecha insuficiencia cardíaca, busca crepitantes y cardiomegalia.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "096",
    "term": "Definir brevemente: Fibrilación auricular",
    "definition": "Arritmia supraventricular caracterizada por ritmo irregularmente irregular y ausencia de ondas P.",
    "clinicalPearl": "Palpitaciones irregulares y pulso arrítmico: piensa en fibrilación auricular, confirma con ECG.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "097",
    "term": "Definir brevemente: Bloqueo auriculoventricular completo",
    "definition": "Interrupción total de la conducción entre aurículas y ventrículos, con disociación AV.",
    "clinicalPearl": "Bradicardia marcada, síncope y disociación entre P y QRS: sospecha bloqueo AV completo, puede requerir marcapasos.",
    "rotation": "Cardiología",
    "difficulty": "alta"
  },
  {
    "id": "098",
    "term": "Definir brevemente: Síndrome coronario agudo sin elevación del ST (SCASEST)",
    "definition": "Isquemia miocárdica aguda sin elevación persistente del segmento ST en el ECG.",
    "clinicalPearl": "Dolor torácico opresivo en reposo, ECG con infradesnivel del ST o T negativa: sospecha SCASEST, pide troponinas.",
    "rotation": "Cardiología",
    "difficulty": "alta"
  },
  {
    "id": "099",
    "term": "Definir brevemente: Pericarditis aguda",
    "definition": "Inflamación del pericardio, generalmente de origen viral.",
    "clinicalPearl": "Dolor torácico que mejora al inclinarse hacia adelante y frotes pericárdicos: típico de pericarditis, busca elevación difusa del ST.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "100",
    "term": "Definir brevemente: Miocardiopatía dilatada",
    "definition": "Enfermedad cardíaca caracterizada por dilatación y disfunción sistólica del ventrículo izquierdo.",
    "clinicalPearl": "Disnea progresiva, cardiomegalia y bajo gasto cardíaco: sospecha miocardiopatía dilatada, descarta causas reversibles.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "101",
    "term": "Definir brevemente: Estenosis aórtica",
    "definition": "Obstrucción al flujo sanguíneo desde el ventrículo izquierdo hacia la aorta por estrechamiento valvular.",
    "clinicalPearl": "Síncope, angina y disnea de esfuerzo en anciano: triada clásica de estenosis aórtica severa.",
    "rotation": "Cardiología",
    "difficulty": "alta"
  },
  {
    "id": "102",
    "term": "Definir brevemente: Endocarditis infecciosa",
    "definition": "Infección de las válvulas cardíacas o endocardio, generalmente por bacterias.",
    "clinicalPearl": "Fiebre prolongada, soplo nuevo y fenómenos embólicos: sospecha endocarditis, busca hemocultivos positivos.",
    "rotation": "Cardiología",
    "difficulty": "alta"
  },
  {
    "id": "103",
    "term": "Definir brevemente: Síndrome de Wolff-Parkinson-White",
    "definition": "Trastorno de preexcitación cardíaca por vía accesoria, que puede causar taquiarritmias.",
    "clinicalPearl": "Palpitaciones paroxísticas y ECG con onda delta: típico de WPW, evita bloqueadores AV en taquicardia.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "104",
    "term": "Definir brevemente: Miocardiopatía hipertrófica",
    "definition": "Engrosamiento anormal del miocardio, principalmente del septo interventricular, que puede causar obstrucción al flujo de salida.",
    "clinicalPearl": "Síncope o muerte súbita en joven deportista, soplo que aumenta con Valsalva: sospecha miocardiopatía hipertrófica.",
    "rotation": "Cardiología",
    "difficulty": "alta"
  },
  {
    "id": "105",
    "term": "Definir brevemente: Psoriasis",
    "definition": "Enfermedad inflamatoria crónica de la piel caracterizada por placas eritematosas con descamación plateada.",
    "clinicalPearl": "Placas bien delimitadas en codos, rodillas y cuero cabelludo: sospecha psoriasis, busca afectación ungueal.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "106",
    "term": "Definir brevemente: Dermatitis seborreica",
    "definition": "Trastorno inflamatorio crónico que afecta áreas ricas en glándulas sebáceas, como cuero cabelludo y cara.",
    "clinicalPearl": "Escamas amarillentas y prurito en cuero cabelludo, cejas y pliegues nasolabiales: típico de dermatitis seborreica.",
    "rotation": "Dermatología",
    "difficulty": "baja"
  },
  {
    "id": "107",
    "term": "Definir brevemente: Melanoma",
    "definition": "Neoplasia maligna de los melanocitos, potencialmente mortal por su alta capacidad metastásica.",
    "clinicalPearl": "Lesión pigmentada asimétrica, bordes irregulares y cambios de color: sospecha melanoma, realiza biopsia excisional.",
    "rotation": "Dermatología",
    "difficulty": "alta"
  },
  {
    "id": "108",
    "term": "Definir brevemente: Carcinoma basocelular",
    "definition": "Tumor cutáneo maligno de crecimiento lento, derivado de las células basales de la epidermis.",
    "clinicalPearl": "Nódulo perlado con telangiectasias en zonas fotoexpuestas: sospecha carcinoma basocelular, requiere extirpación.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "109",
    "term": "Definir brevemente: Carcinoma epidermoide cutáneo",
    "definition": "Neoplasia maligna de queratinocitos, frecuente en áreas expuestas al sol.",
    "clinicalPearl": "Úlcera o placa indurada en piel expuesta al sol, de crecimiento rápido: sospecha carcinoma epidermoide.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "110",
    "term": "Definir brevemente: Acné vulgar",
    "definition": "Enfermedad inflamatoria de la unidad pilosebácea, frecuente en adolescentes.",
    "clinicalPearl": "Comedones, pápulas y pústulas en cara y tronco en adolescente: típico de acné vulgar, evalúa severidad para tratamiento.",
    "rotation": "Dermatología",
    "difficulty": "baja"
  },
  {
    "id": "111",
    "term": "Definir brevemente: Eczema atópico",
    "definition": "Enfermedad inflamatoria crónica de la piel con prurito y eccema, frecuente en niños con antecedentes alérgicos.",
    "clinicalPearl": "Lesiones eccematosas en pliegues y prurito intenso en niño: sospecha eczema atópico, pregunta por asma o rinitis.",
    "rotation": "Dermatología",
    "difficulty": "baja"
  },
  {
    "id": "112",
    "term": "Definir brevemente: Urticaria aguda",
    "definition": "Reacción cutánea caracterizada por habones pruriginosos y transitorios.",
    "clinicalPearl": "Habones migratorios, pruriginosos y de menos de 24 horas de duración: típico de urticaria aguda, busca desencadenante.",
    "rotation": "Dermatología",
    "difficulty": "baja"
  },
  {
    "id": "113",
    "term": "Definir brevemente: Vitiligo",
    "definition": "Trastorno adquirido de despigmentación cutánea por destrucción de melanocitos.",
    "clinicalPearl": "Manchas acrómicas bien delimitadas, simétricas, en dorso de manos y cara: sospecha vitiligo, asocia enfermedades autoinmunes.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "114",
    "term": "Definir brevemente: Eritema multiforme",
    "definition": "Reacción cutánea aguda caracterizada por lesiones en diana, a menudo desencadenada por infecciones o fármacos.",
    "clinicalPearl": "Lesiones en diana, simétricas, en palmas y plantas tras infección herpética: típico de eritema multiforme menor.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "115",
    "term": "Definir brevemente: Diabetes insípida",
    "definition": "Trastorno caracterizado por poliuria y polidipsia debido a déficit de vasopresina o resistencia renal a su acción.",
    "clinicalPearl": "Paciente con gran volumen urinario diluido y sodio elevado: sospecha diabetes insípida, diferencia central de nefrogénica con test de desmopresina.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "116",
    "term": "Definir brevemente: Hipotiroidismo",
    "definition": "Déficit de hormonas tiroideas que provoca enlentecimiento metabólico generalizado.",
    "clinicalPearl": "Fatiga, aumento de peso y piel seca en adulto: pide TSH y T4, descarta hipotiroidismo, especialmente en mujeres.",
    "rotation": "Endocrinología",
    "difficulty": "baja"
  },
  {
    "id": "117",
    "term": "Definir brevemente: Feocromocitoma",
    "definition": "Tumor de la médula suprarrenal que produce catecolaminas en exceso.",
    "clinicalPearl": "Crisis de hipertensión, cefalea, sudoración y palpitaciones: sospecha feocromocitoma, mide metanefrinas en orina.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "118",
    "term": "Definir brevemente: Acromegalia",
    "definition": "Exceso de hormona de crecimiento en adultos, generalmente por adenoma hipofisario.",
    "clinicalPearl": "Crecimiento de manos, pies y rasgos faciales toscos: sospecha acromegalia, mide IGF-1 y solicita RM hipofisaria.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "119",
    "term": "Definir brevemente: Hipoparatiroidismo",
    "definition": "Déficit de hormona paratiroidea que causa hipocalcemia y alteraciones neuromusculares.",
    "clinicalPearl": "Tetania, parestesias y signo de Chvostek tras cirugía cervical: sospecha hipoparatiroidismo, revisa calcio y PTH.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "120",
    "term": "Definir brevemente: Síndrome metabólico",
    "definition": "Conjunto de factores de risco cardiovascular: obesidad central, dislipidemia, hipertensión y resistencia a la insulina.",
    "clinicalPearl": "Obesidad abdominal, triglicéridos altos y glucosa alterada: piensa en síndrome metabólico, interviene con dieta y ejercicio.",
    "rotation": "Endocrinología",
    "difficulty": "baja"
  },
  {
    "id": "121",
    "term": "Definir brevemente: Prolactinoma",
    "definition": "Adenoma hipofisario productor de prolactina, causa más frecuente de hiperprolactinemia.",
    "clinicalPearl": "Amenorrea y galactorrea en mujer joven: sospecha prolactinoma, solicita prolactina y RM cerebral.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "122",
    "term": "Definir brevemente: Síndrome de Addison",
    "definition": "Insuficiencia suprarrenal primaria por destrucción autoinmune de la corteza suprarrenal.",
    "clinicalPearl": "Hipotensión, hiperpigmentación y pérdida de peso: sospecha Addison, confirma con cortisol y ACTH.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "123",
    "term": "Definir brevemente: Diabetes mellitus tipo 1",
    "definition": "Destrucción autoinmune de células beta pancreáticas, con déficit absoluto de insulina.",
    "clinicalPearl": "Poliuria, polidipsia y adelgazamiento rápido en niño o adolescente: sospecha DM1, busca cetonas en orina.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "124",
    "term": "Definir brevemente: Hipercalcemia por malignidad",
    "definition": "Elevación del calcio sérico secundaria a tumores productores de PTHrP o metástasis óseas.",
    "clinicalPearl": "Debilidad, vómitos y confusión en paciente oncológico: mide calcio, descarta hipercalcemia por malignidad.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "125",
    "term": "Definir brevemente: Hepatitis viral aguda",
    "definition": "Inflamación aguda del hígado causada por infecciones virales como hepatitis A, B o C.",
    "clinicalPearl": "Ictericia, astenia y elevación de transaminasas en joven: sospecha hepatitis viral, pregunta por viajes y contacto con enfermos.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "126",
    "term": "Definir brevemente: Cirrosis hepática",
    "definition": "Enfermedad crónica e irreversible del hígado caracterizada por fibrosis y nódulos de regeneración.",
    "clinicalPearl": "Ascitis, edemas y encefalopatía en paciente con antecedentes de alcoholismo: sospecha cirrosis, busca estigmas hepáticos.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "127",
    "term": "Definir brevemente: Hemorragia digestiva baja",
    "definition": "Sangrado proveniente del tracto digestivo distal al ángulo de Treitz, generalmente colon o recto.",
    "clinicalPearl": "Hematochezia en paciente mayor: descarta diverticulosis, angiodisplasia o cáncer colorrectal con colonoscopia.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "128",
    "term": "Definir brevemente: Enfermedad celíaca",
    "definition": "Enteropatía autoinmune inducida por gluten en personas genéticamente predispuestas.",
    "clinicalPearl": "Diarrea crónica, pérdida de peso y anemia ferropénica inexplicada: considera enfermedad celíaca, pide anticuerpos específicos.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "129",
    "term": "Definir brevemente: Colangitis aguda",
    "definition": "Infección de la vía biliar secundaria a obstrucción, generalmente por litiasis.",
    "clinicalPearl": "Fiebre, ictericia y dolor en hipocondrio derecho (tríada de Charcot): sospecha colangitis, requiere antibióticos y drenaje biliar.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "130",
    "term": "Definir brevemente: Enfermedad inflamatoria intestinal",
    "definition": "Trastornos crónicos del tracto gastrointestinal como la colitis ulcerosa y la enfermedad de Crohn.",
    "clinicalPearl": "Diarrea con sangre y dolor abdominal recurrente en joven: sospecha EII, solicita colonoscopia y biopsia.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "131",
    "term": "Definir brevemente: Gastritis aguda",
    "definition": "Inflamación aguda de la mucosa gástrica, comúnmente por AINEs, alcohol o infecciones.",
    "clinicalPearl": "Dolor epigástrico y náuseas tras consumo de AINEs o alcohol: sospecha gastritis aguda, suspende el agente causal.",
    "rotation": "Gastroenterología",
    "difficulty": "baja"
  },
  {
    "id": "132",
    "term": "Definir brevemente: Úlcera péptica",
    "definition": "Lesión en la mucosa gástrica o duodenal por desequilibrio entre factores agresivos y defensivos.",
    "clinicalPearl": "Dolor epigástrico que mejora o empeora con la ingesta: sospecha úlcera, busca H. pylori y descarta uso de AINEs.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "133",
    "term": "Definir brevemente: Colitis pseudomembranosa",
    "definition": "Inflamación colónica causada por toxinas de Clostridioides difficile, asociada a uso de antibióticos.",
    "clinicalPearl": "Diarrea acuosa y fiebre tras antibióticos: sospecha colitis por C. difficile, solicita toxina en heces.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "134",
    "term": "Definir brevemente: Poliposis adenomatosa colorrectal",
    "definition": "Presencia de múltiples pólipos adenomatosos en colon y recto, con alto riesgo de malignización.",
    "clinicalPearl": "Antecedentes familiares y hallazgo de múltiples pólipos en colonoscopia: sospecha poliposis adenomatosa, requiere seguimiento estrecho.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "135",
    "term": "Definir brevemente: Hipertensión arterial esencial",
    "definition": "Elevación persistente de la presión arterial sin causa secundaria identificable.",
    "clinicalPearl": "Confirma hipertensión con varias mediciones en días distintos antes de iniciar tratamiento.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "136",
    "term": "Definir brevemente: Dislipidemia",
    "definition": "Alteración de los niveles de lípidos en sangre, principalmente colesterol y triglicéridos.",
    "clinicalPearl": "Paciente asintomático con colesterol total elevado: valora riesgo cardiovascular global antes de tratar.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "137",
    "term": "Definir brevemente: Obesidad",
    "definition": "Exceso de tejido adiposo que incrementa el riesgo de enfermedades crónicas.",
    "clinicalPearl": "IMC mayor de 30: intervén con dieta, ejercicio y apoyo psicológico antes de considerar fármacos.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "138",
    "term": "Definir brevemente: Síndrome gripal",
    "definition": "Cuadro clínico agudo de fiebre, mialgias, cefalea y síntomas respiratorios altos.",
    "clinicalPearl": "Fiebre, mialgias y tos seca en invierno: sospecha gripe, prioriza tratamento sintomático salvo factores de riesgo.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "139",
    "term": "Definir brevemente: Osteoporosis",
    "definition": "Enfermedad caracterizada por disminución de la masa ósea y aumento del riesgo de fractura.",
    "clinicalPearl": "Mujer posmenopáusica con fractura por fragilidad: descarta osteoporosis con densitometría ósea.",
    "rotation": "Medicina Familiar",
    "difficulty": "media"
  },
  {
    "id": "140",
    "term": "Definir brevemente: Ansiedad generalizada",
    "definition": "Trastorno caracterizado por preocupación excesiva y persistente, difícil de controlar.",
    "clinicalPearl": "Paciente con insomnio, tensión muscular y preocupación constante: explora síntomas de ansiedad, ofrece terapia cognitivo-conductual.",
    "rotation": "Medicina Familiar",
    "difficulty": "media"
  },
  {
    "id": "141",
    "term": "Definir brevemente: Depresión mayor",
    "definition": "Trastorno del estado de ánimo con tristeza persistente, anhedonia y síntomas vegetativos.",
    "clinicalPearl": "Tristeza, insomnio y pérdida de interés en actividades: evalúa riesgo suicida y considera iniciar antidepresivos.",
    "rotation": "Medicina Familiar",
    "difficulty": "media"
  },
  {
    "id": "142",
    "term": "Definir brevemente: Insomnio",
    "definition": "Dificultad para iniciar o mantener el sueño, con repercusión diurna.",
    "clinicalPearl": "Pregunta siempre por higiene del sueño antes de prescribir fármacos para insomnio.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "143",
    "term": "Definir brevemente: Cefalea tensional",
    "definition": "Dolor de cabeza opresivo, bilateral y de intensidad leve a moderada, sin síntomas de alarma.",
    "clinicalPearl": "Cefalea diaria, opresiva y sin náuseas: suele ser tensional, responde bien a medidas no farmacológicas.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "144",
    "term": "Definir brevemente: Dermatitis atópica",
    "definition": "Enfermedad inflamatoria crónica de la piel con prurito y eccema, frecuente en niños.",
    "clinicalPearl": "Niño con prurito y lesiones eccematosas en pliegues: sospecha dermatitis atópica, hidrata y evita irritantes.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "145",
    "term": "Definir brevemente: Glomerulonefritis rápidamente progresiva",
    "definition": "Síndrome caracterizado por deterioro rápido de la función renal con semilunas en la biopsia.",
    "clinicalPearl": "Insuficiencia renal aguda con hematuria y cilindros hemáticos: sospecha glomerulonefritis rápidamente progresiva, requiere tratamento urgente.",
    "rotation": "Nefrología",
    "difficulty": "alta"
  },
  {
    "id": "146",
    "term": "Definir brevemente: Síndrome nefrótico",
    "definition": "Conjunto de síntomas por proteinuria masiva, hipoalbuminemia, edema e hiperlipidemia.",
    "clinicalPearl": "Edema facial matutino y proteinuria >3,5 g/día: típico de síndrome nefrótico, busca causas primarias o secundarias.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "147",
    "term": "Definir brevemente: Síndrome nefrítico",
    "definition": "Hematuria, proteinuria, hipertensión y edema, generalmente por glomerulonefritis.",
    "clinicalPearl": "Hematuria macroscópica, hipertensión y edema tras infección: sospecha síndrome nefrítico, pide complemento y serologías.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "148",
    "term": "Definir brevemente: Nefropatía diabética",
    "definition": "Lesión renal progresiva secundaria a diabetes mellitus, causa principal de enfermedad renal crónica.",
    "clinicalPearl": "Microalbuminuria persistente en diabético: inicia IECA o ARA-II para retrasar progresión de nefropatía.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "149",
    "term": "Definir brevemente: Nefropatía lúpica",
    "definition": "Afectación renal por lupus eritematoso sistémico, con múltiples patrones histológicos.",
    "clinicalPearl": "Proteinuria, hematuria y cilindros en paciente con LES: sospecha nefropatía lúpica, requiere biopsia renal.",
    "rotation": "Nefrología",
    "difficulty": "alta"
  },
  {
    "id": "150",
    "term": "Definir brevemente: Insuficiencia renal crónica",
    "definition": "Pérdida progresiva e irreversible de la función renal, con filtrado glomerular <60 ml/min/1,73m² por más de 3 meses.",
    "clinicalPearl": "Anemia, hiperpotasemia y acidosis metabólica en paciente con ERC: ajusta fármacos y controla factores de progresión.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "151",
    "term": "Definir brevemente: Nefrolitiasis",
    "definition": "Formación de cálculos en el aparato urinario, principalmente en los riñones.",
    "clinicalPearl": "Cólico renal, hematuria y antecedentes familiares: sospecha nefrolitiasis, recomienda hidratación y estudia composición del cálculo.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "152",
    "term": "Definir brevemente: Acidosis tubular renal",
    "definition": "Trastorno de los túbulos renales que causa acidosis metabólica hiperclorémica.",
    "clinicalPearl": "Acidosis metabólica sin anión gap elevado y potasio bajo: piensa en acidosis tubular renal, diferencia tipo 1 y 2.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "153",
    "term": "Definir brevemente: Poliquistosis renal autosómica dominante",
    "definition": "Enfermedad genética caracterizada por múltiples quistes renales y progresión a insuficiencia renal.",
    "clinicalPearl": "HTA, masa abdominal y antecedentes familiares: sospecha poliquistosis renal, solicita ecografía.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "154",
    "term": "Definir brevemente: Hiperkalemia",
    "definition": "Elevación del potasio sérico por encima de 5.5 mEq/L, potencialmente mortal.",
    "clinicalPearl": "Debilidad, arritmias y ECG con ondas T picudas: sospecha hiperkalemia, trata con gluconato cálcico y medidas de descenso rápido.",
    "rotation": "Nefrología",
    "difficulty": "alta"
  },
  {
    "id": "155",
    "term": "Definir brevemente: Accidente isquémico transitorio (AIT)",
    "definition": "Déficit neurológico focal de inicio súbito y duración menor a 24 horas, sin daño cerebral permanente.",
    "clinicalPearl": "Pérdida brusca de fuerza o habla que se resuelve en minutos u horas: sospecha AIT, requiere estudio urgente para prevenir ictus.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "156",
    "term": "Definir brevemente: Esclerosis múltiple",
    "definition": "Enfermedad desmielinizante crónica del sistema nervioso central de curso recurrente-remitente o progresivo.",
    "clinicalPearl": "Pérdida visual unilateral dolorosa, diplopía o parestesias recurrentes en joven: sospecha esclerosis múltiple, solicita RM cerebral.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "157",
    "term": "Definir brevemente: Cefalea tensional",
    "definition": "Tipo de cefalea primaria caracterizada por dolor opresivo, bilateral y de intensidad leve a moderada.",
    "clinicalPearl": "Cefalea opresiva, sin náuseas ni fotofobia, que mejora con actividad: típico de cefalea tensional.",
    "rotation": "Neurología",
    "difficulty": "baja"
  },
  {
    "id": "158",
    "term": "Definir brevemente: Neuralgia del trigémino",
    "definition": "Dolor neuropático intenso y paroxístico en el territorio del nervio trigémino.",
    "clinicalPearl": "Descargas eléctricas breves en cara, desencadenadas por masticar o tocar la piel: sugiere neuralgia del trigémino, responde a carbamazepina.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "159",
    "term": "Definir brevemente: Miastenia gravis",
    "definition": "Enfermedad autoinmune de la unión neuromuscular que causa debilidad fluctuante y fatigabilidad muscular.",
    "clinicalPearl": "Ptosis y diplopía que empeoran al final del día y mejoran con reposo: sospecha miastenia gravis, busca anticuerpos anti-AChR.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "160",
    "term": "Definir brevemente: Esclerosis lateral amiotrófica (ELA)",
    "definition": "Enfermedad neurodegenerativa progresiva que afecta motoneuronas superiores e inferiores.",
    "clinicalPearl": "Debilidad progresiva, fasciculaciones y atrofia muscular sin alteración sensitiva: sospecha ELA.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "161",
    "term": "Definir brevemente: Hemorragia subaracnoidea",
    "definition": "Sangrado en el espacio subaracnoideo, generalmente por rotura de aneurisma cerebral.",
    "clinicalPearl": "Cefalea súbita e intensa (“la peor de su vida”) ± rigidez de nuca: sospecha hemorragia subaracnoidea, solicita TC urgente.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "162",
    "term": "Definir brevemente: Polineuropatía diabética",
    "definition": "Afectación simétrica y distal de nervios periféricos en pacientes con diabetes mellitus.",
    "clinicalPearl": "Parestesias y pérdida de sensibilidad en “guante y calcetín” en diabético: típico de polineuropatía diabética.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "163",
    "term": "Definir brevemente: Síndrome de Guillain-Barré",
    "definition": "Polirradiculoneuropatía aguda autoinmune, frecuentemente postinfecciosa.",
    "clinicalPearl": "Debilidad ascendente y arreflexia tras infección respiratoria o gastrointestinal: sospecha Guillain-Barré, vigila función respiratoria.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "164",
    "term": "Definir brevemente: Convulsiones febriles",
    "definition": "Crisis convulsivas asociadas a fiebre en niños entre 6 meses y 5 años, sin infección central ni alteración metabólica.",
    "clinicalPearl": "Convulsión generalizada breve en niño con fiebre, sin signos meníngeos ni focalidad: típico de convulsión febril simple.",
    "rotation": "Neurología",
    "difficulty": "baja"
  },
  {
    "id": "165",
    "term": "Definir brevemente: Asma bronquial",
    "definition": "Enfermedad inflamatoria crónica de la vía aérea caracterizada por hiperreactividad bronquial y obstrucción reversible.",
    "clinicalPearl": "Tos nocturna o tras ejercicio en joven, con sibilancias recurrentes: sospecha asma aunque la espirometría basal sea normal.",
    "rotation": "Neumología",
    "difficulty": "baja"
  },
  {
    "id": "166",
    "term": "Definir brevemente: EPOC (Enfermedad pulmonar obstructiva crónica)",
    "definition": "Trastorno respiratorio crónico caracterizado por limitación persistente del flujo aéreo, asociado al tabaquismo.",
    "clinicalPearl": "Fumador crónico con tos matutina y disnea progresiva: sospecha EPOC, confirma con espirometría.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "167",
    "term": "Definir brevemente: Neumonía adquirida en la comunidad",
    "definition": "Infección aguda del parénquima pulmonar adquirida fuera del hospital.",
    "clinicalPearl": "Fiebre, tos productiva y crepitantes en la auscultación: pide radiografía para confirmar neumonía.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "168",
    "term": "Definir brevemente: Embolia pulmonar",
    "definition": "Obstrucción aguda de la arteria pulmonar o sus ramas por un trombo.",
    "clinicalPearl": "Disnea súbita, dolor torácico pleurítico y taquicardia en paciente con inmovilización: sospecha embolia pulmonar aunque la radiografía sea normal.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "169",
    "term": "Definir brevemente: Neumotórax espontáneo",
    "definition": "Presencia de aire en el espacio pleural sin causa traumática, que colapsa el pulmón.",
    "clinicalPearl": "Disnea súbita y dolor torácico unilateral en joven alto: sospecha neumotórax, confirma con radiografía.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "170",
    "term": "Definir brevemente: Fibrosis pulmonar idiopática",
    "definition": "Enfermedad pulmonar intersticial crónica de causa desconocida, caracterizada por fibrosis progresiva del parénquima pulmonar.",
    "clinicalPearl": "Disnea progresiva, crepitantes en velcro y hipocratismo digital: sospecha fibrosis pulmonar idiopática, solicita TC de alta resolución.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "171",
    "term": "Definir brevemente: Derrame pleural",
    "definition": "Acumulación anormal de líquido en la cavidad pleural.",
    "clinicalPearl": "Disminución del murmullo vesicular y matidez a la percusión: sospecha derrame pleural, confirma con ecografía o radiografía.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "172",
    "term": "Definir brevemente: Tuberculosis pulmonar",
    "definition": "Infección crónica por Mycobacterium tuberculosis que afecta principalmente los pulmones.",
    "clinicalPearl": "Tos crónica, sudoración nocturna y hemoptisis: sospecha tuberculosis, pide baciloscopia y cultivo.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "173",
    "term": "Definir brevemente: Síndrome de apnea-hipopnea del sueño",
    "definition": "Trastorno caracterizado por episodios repetidos de obstrucción de la vía aérea superior durante el sueño.",
    "clinicalPearl": "Ronquidos intensos, pausas respiratorias y somnolencia diurna: sospecha apnea del sueño, pide polisomnografía.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "174",
    "term": "Definir brevemente: Bronquiectasias",
    "definition": "Dilatación anormal e irreversible de los bronquios, generalmente por infecciones recurrentes.",
    "clinicalPearl": "Tos crónica con expectoración purulenta y hemoptisis recurrente: sospecha bronquiectasias, solicita TAC de tórax.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "175",
    "term": "Definir brevemente: Otitis media aguda",
    "definition": "Infección aguda del oído medio, frecuente en niños pequeños.",
    "clinicalPearl": "Fiebre, dolor de oído y abombamiento timpánico tras catarro: sospecha otitis media, sobre todo en menores de 2 años.",
    "rotation": "Otorrinolaringología",
    "difficulty": "baja"
  },
  {
    "id": "176",
    "term": "Definir brevemente: Sinusitis aguda",
    "definition": "Inflamación aguda de los senos paranasales, generalmente secundaria a infección viral o bacteriana.",
    "clinicalPearl": "Congestión nasal, dolor facial y rinorrea purulenta que persiste más de 7 días: sospecha sinusitis aguda.",
    "rotation": "Otorrinolaringología",
    "difficulty": "baja"
  },
  {
    "id": "177",
    "term": "Definir brevemente: Amigdalitis aguda",
    "definition": "Inflamación aguda de las amígdalas, habitualmente de origen viral o bacteriano.",
    "clinicalPearl": "Faringodinia, fiebre y exudado amigdalar: piensa en amigdalitis, considera test rápido de estreptococo si hay odinofagia intensa.",
    "rotation": "Otorrinolaringología",
    "difficulty": "baja"
  },
  {
    "id": "178",
    "term": "Definir brevemente: Parálisis facial periférica",
    "definition": "Debilidad o parálisis de los músculos faciales por afectación del nervio facial (VII par craneal).",
    "clinicalPearl": "Debilidad facial súbita unilateral con incapacidad para cerrar el ojo: sospecha parálisis de Bell, inicia corticoides precozmente.",
    "rotation": "Otorrinolaringología",
    "difficulty": "media"
  },
  {
    "id": "179",
    "term": "Definir brevemente: Rinitis alérgica",
    "definition": "Inflamación de la mucosa nasal por reacción alérgica, caracterizada por estornudos, rinorrea y prurito nasal.",
    "clinicalPearl": "Estornudos en salva, picor nasal y lagrimeo en primavera: típico de rinitis alérgica, pregunta por antecedentes atópicos.",
    "rotation": "Otorrinolaringología",
    "difficulty": "baja"
  },
  {
    "id": "180",
    "term": "Definir brevemente: Bronquiolitis aguda",
    "definition": "Infección viral aguda de las vías respiratorias inferiores, frecuente en menores de 2 años, causada habitualmente por VRS.",
    "clinicalPearl": "Lactante con dificultad respiratoria, sibilancias y tiraje subcostal en invierno: sospecha bronquiolitis aguda.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "181",
    "term": "Definir brevemente: Laringitis subglótica (crup)",
    "definition": "Inflamación aguda de la laringe y subglotis, generalmente viral, que causa obstrucción de la vía aérea superior.",
    "clinicalPearl": "Estridor inspiratorio, tos perruna y disfonía nocturna en preescolar: típico de crup.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "182",
    "term": "Definir brevemente: Gastroenteritis aguda",
    "definition": "Inflamación aguda del tracto gastrointestinal, generalmente de origen viral, que causa diarrea y vómitos.",
    "clinicalPearl": "Diarrea acuosa y vómitos en niño pequeño, especialmente en guardería: sospecha gastroenteritis viral, prioriza rehidratación oral.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "183",
    "term": "Definir brevemente: Exantema súbito (roseola)",
    "definition": "Infección viral por herpesvirus 6 o 7, caracterizada por fiebre alta seguida de exantema súbito al desaparecer la fiebre.",
    "clinicalPearl": "Fiebre alta de varios días que cede bruscamente y aparece exantema rosado: típico de exantema súbito.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "184",
    "term": "Definir brevemente: Escarlatina",
    "definition": "Infección bacteriana por Streptococcus pyogenes con exantema, fiebre y faringitis.",
    "clinicalPearl": "Fiebre, faringitis y exantema en lija con lengua en fresa: sospecha escarlatina, trata con penicilina.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "185",
    "term": "Definir brevemente: Varicela",
    "definition": "Infección viral aguda por el virus varicela-zóster, caracterizada por exantema vesicular pruriginoso.",
    "clinicalPearl": "Lesiones cutáneas en diferentes fases evolutivas (máculas, pápulas, vesículas y costras) en el mismo paciente: típico de varicela.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "186",
    "term": "Definir brevemente: Otitis media aguda",
    "definition": "Infección aguda del oído medio, frecuente en lactantes y preescolares.",
    "clinicalPearl": "Fiebre, irritabilidad y tirones de oreja en niño pequeño: sospecha otitis media aguda, explora tímpano.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "187",
    "term": "Definir brevemente: Enfermedad mano-pie-boca",
    "definition": "Infección viral por coxsackie, caracterizada por lesiones vesiculosas en manos, pies y boca.",
    "clinicalPearl": "Fiebre y vesículas dolorosas en palmas, plantas y mucosa oral en niño: sospecha enfermedad mano-pie-boca.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "188",
    "term": "Definir brevemente: Epiglotitis aguda",
    "definition": "Infección bacteriana grave de la epiglotis, potencialmente mortal, causada por Haemophilus influenzae tipo b.",
    "clinicalPearl": "Fiebre alta, disfagia, babeo y posición en trípode: sospecha epiglotitis, no explores la garganta y avisa a anestesia.",
    "rotation": "Pediatría",
    "difficulty": "alta"
  },
  {
    "id": "189",
    "term": "Definir brevemente: Purpura de Schönlein-Henoch",
    "definition": "Vasculitis mediada por IgA que afecta pequeños vasos, típica en la infancia.",
    "clinicalPearl": "Púrpura palpable en extremidades inferiores, dolor abdominal y artralgias en niño: sospecha púrpura de Schönlein-Henoch.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "190",
    "term": "Definir brevemente: Artritis reumatoide",
    "definition": "Enfermedad autoinmune sistémica que afecta principalmente las articulaciones, causando inflamación crónica y destrucción articular.",
    "clinicalPearl": "Rigidez matutina prolongada y poliartritis simétrica en manos: sospecha artritis reumatoide, solicita FR y anti-CCP.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "191",
    "term": "Definir brevemente: Lupus eritematoso sistémico",
    "definition": "Enfermedad autoinmune multisistémica con producción de autoanticuerpos y afectación variable de órganos.",
    "clinicalPearl": "Artralgias, exantema malar y fotosensibilidad en mujer joven: sospecha lupus, solicita ANA y anti-dsDNA.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "192",
    "term": "Definir brevemente: Espondilitis anquilosante",
    "definition": "Enfermedad inflamatoria crónica que afecta principalmente la columna vertebral y las articulaciones sacroilíacas.",
    "clinicalPearl": "Lumbalgia inflamatoria que mejora con ejercicio y rigidez matutina: sospecha espondilitis anquilosante, busca HLA-B27.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "193",
    "term": "Definir brevemente: Gota",
    "definition": "Artritis inflamatoria causada por depósito de cristales de urato monosódico en las articulaciones.",
    "clinicalPearl": "Ataque agudo en primer dedo del pie (podagra) y antecedentes de hiperuricemia: típico de gota, confirma con cristales en líquido sinovial.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "194",
    "term": "Definir brevemente: Artritis psoriásica",
    "definition": "Artritis inflamatoria asociada a psoriasis, con afectación articular variable y lesiones cutáneas.",
    "clinicalPearl": "Dactilitis (“dedo en salchicha”) y placas psoriásicas: sospecha artritis psoriásica, revisa uñas y piel.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "195",
    "term": "Definir brevemente: Esclerodermia sistémica",
    "definition": "Enfermedad autoinmune caracterizada por fibrosis cutánea y afectación de órganos internos.",
    "clinicalPearl": "Fenómeno de Raynaud, piel engrosada y disfagia: sospecha esclerodermia, busca anticuerpos anti-centromero o anti-Scl-70.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "196",
    "term": "Definir brevemente: Polimialgia reumática",
    "definition": "Síndrome inflamatorio que causa dolor y rigidez en cintura escapular y pelviana, frecuente en mayores de 50 años.",
    "clinicalPearl": "Dolor y rigidez matutina en hombros y caderas con VSG elevada en anciano: sospecha polimialgia reumática, responde bien a corticoides.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "197",
    "term": "Definir brevemente: Vasculitis de células gigantes (arteritis de la temporal)",
    "definition": "Vasculitis granulomatosa de vasos de mediano y gran calibre, frecuente en ancianos.",
    "clinicalPearl": "Cefalea, claudicación mandibular y VSG muy elevada en mayor de 60 años: sospecha arteritis temporal, riesgo de ceguera.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "198",
    "term": "Definir brevemente: Síndrome de Sjögren",
    "definition": "Enfermedad autoinmune caracterizada por sequedad ocular y bucal por destrucción de glándulas exocrinas.",
    "clinicalPearl": "Xerostomía y xeroftalmía en mujer de mediana edad: sospecha Sjögren, solicita anti-Ro y anti-La.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "199",
    "term": "Definir brevemente: Polimiositis",
    "definition": "Enfermedad inflamatoria crónica que afecta principalmente los músculos proximales, causando debilidad.",
    "clinicalPearl": "Debilidad muscular proximal progresiva y elevación de CPK: sospecha polimiositis, confirma con EMG y biopsia muscular.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "200",
    "term": "Definir brevemente: Endometriosis",
    "definition": "Presencia de tejido endometrial fuera de la cavidad uterina, que responde cíclicamente a las hormonas.",
    "clinicalPearl": "Dismenorrea intensa y dolor pélvico crónico en mujer joven: sospecha endometriosis, asocia infertilidad.",
    "rotation": "Ginecología",
    "difficulty": "media"
  },
  {
    "id": "201",
    "term": "Definir brevemente: Miomatosis uterina",
    "definition": "Tumores benignos del músculo liso uterino, frecuentes en mujeres en edad reproductiva.",
    "clinicalPearl": "Metrorragia y aumento del tamaño uterino en mujer premenopáusica: piensa en miomas, solicita ecografía.",
    "rotation": "Ginecología",
    "difficulty": "baja"
  },
  {
    "id": "202",
    "term": "Definir brevemente: Síndrome de ovario poliquístico",
    "definition": "Trastorno endocrino común en mujeres jóvenes, caracterizado por hiperandrogenismo y anovulación.",
    "clinicalPearl": "Oligomenorrea, hirsutismo y ovarios poliquísticos en ecografía: sospecha SOP, evalúa riesgo metabólico.",
    "rotation": "Ginecología",
    "difficulty": "media"
  },
  {
    "id": "203",
    "term": "Definir brevemente: Cáncer de cuello uterino",
    "definition": "Neoplasia maligna del cuello uterino, relacionada con infección persistente por VPH.",
    "clinicalPearl": "Sangrado poscoital y citología anormal: sospecha cáncer de cérvix, realiza colposcopia y biopsia.",
    "rotation": "Ginecología",
    "difficulty": "alta"
  },
  {
    "id": "204",
    "term": "Definir brevemente: Cáncer de mama",
    "definition": "Neoplasia maligna de la glándula mamaria, la más frecuente en mujeres.",
    "clinicalPearl": "Nódulo mamario duro, fijo y con retracción cutánea: sospecha cáncer de mama, solicita mamografía.",
    "rotation": "Ginecología",
    "difficulty": "alta"
  },
  {
    "id": "205",
    "term": "Definir brevemente: Enfermedad inflamatoria pélvica",
    "definition": "Infección ascendente del tracto genital femenino superior, habitualmente por ETS.",
    "clinicalPearl": "Dolor pélvico, fiebre y leucorrea purulenta en mujer sexualmente activa: sospecha EIP, inicia antibióticos.",
    "rotation": "Ginecología",
    "difficulty": "media"
  },
  {
    "id": "206",
    "term": "Definir brevemente: Embarazo ectópico",
    "definition": "Implantación del embarazo fuera de la cavidad uterina, generalmente en trompa de Falopio.",
    "clinicalPearl": "Amenorrea, dolor abdominal y sangrado vaginal en mujer en edad fértil: descarta embarazo ectópico con beta-hCG y ecografía.",
    "rotation": "Ginecología",
    "difficulty": "alta"
  },
  {
    "id": "207",
    "term": "Definir brevemente: Menopausia",
    "definition": "Cese permanente de la menstruación por agotamiento folicular ovárico, generalmente después de los 45 años.",
    "clinicalPearl": "Sofocos, insomnio y amenorrea en mujer mayor de 45 años: típico de menopausia, valora terapia hormonal según síntomas.",
    "rotation": "Ginecología",
    "difficulty": "baja"
  },
  {
    "id": "208",
    "term": "Definir brevemente: Vaginosis bacteriana",
    "definition": "Alteración de la flora vaginal con sobrecrecimiento de bacterias anaerobias.",
    "clinicalPearl": "Flujo vaginal grisáceo, maloliente y sin prurito: sospecha vaginosis bacteriana, confirma con test de aminas.",
    "rotation": "Ginecología",
    "difficulty": "baja"
  },
  {
    "id": "209",
    "term": "Definir brevemente: Candidiasis vulvovaginal",
    "definition": "Infección de la vulva y la vagina por hongos del género Candida.",
    "clinicalPearl": "Prurito vulvar intenso, flujo blanco grumoso y eritema: típico de candidiasis, trata con antifúngicos tópicos.",
    "rotation": "Ginecología",
    "difficulty": "baja"
  },
  {
    "id": "210",
    "term": "Definir brevemente: Preeclampsia",
    "definition": "Trastorno del embarazo caracterizado por hipertensión y proteinuria después de la semana 20 de gestación.",
    "clinicalPearl": "Edema, hipertensión y proteinuria en embarazada: sospecha preeclampsia, vigila signos de severidad.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "211",
    "term": "Definir brevemente: Diabetes gestacional",
    "definition": "Intolerancia a la glucosa que se detecta por primera vez durante el embarazo.",
    "clinicalPearl": "Glucosa elevada en cribado de segundo trimestre: sospecha diabetes gestacional, inicia dieta y controla glucemias.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "212",
    "term": "Definir brevemente: Amenaza de parto pretérmino",
    "definition": "Presencia de dinámica uterina regular y cambios cervicales antes de la semana 37 de gestación.",
    "clinicalPearl": "Contracciones regulares y borramiento cervical antes de la semana 37: sospecha amenaza de parto pretérmino, valora tocolisis.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "213",
    "term": "Definir brevemente: Placenta previa",
    "definition": "Implantación de la placenta en el segmento inferior del útero, cubriendo parcial o totalmente el orificio cervical interno.",
    "clinicalPearl": "Sangrado vaginal indoloro en el tercer trimestre: sospecha placenta previa, evita tacto vaginal.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "214",
    "term": "Definir brevemente: Desprendimiento prematuro de placenta normoinserta (DPPNI)",
    "definition": "Separación prematura de la placenta normalmente insertada antes del parto.",
    "clinicalPearl": "Dolor abdominal súbito, sangrado y útero hipertónico en embarazada: sospecha DPPNI, riesgo vital materno-fetal.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "215",
    "term": "Definir brevemente: Ruptura prematura de membranas",
    "definition": "Rotura de las membranas amnióticas antes del inicio del trabajo de parto.",
    "clinicalPearl": "Salida de líquido claro por vagina antes de contracciones: sospecha RPM, evalúa riesgo de infección.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "216",
    "term": "Definir brevemente: Embarazo ectópico",
    "definition": "Implantación del embarazo fuera de la cavidad uterina, generalmente en trompa de Falopio.",
    "clinicalPearl": "Amenorrea, dolor abdominal y sangrado vaginal en mujer embarazada: descarta embarazo ectópico con beta-hCG y ecografía.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "217",
    "term": "Definir brevemente: Embarazo molar (mola hidatiforme)",
    "definition": "Proliferación anormal del trofoblasto con degeneración quística de las vellosidades coriónicas.",
    "clinicalPearl": "Hemorragia uterina, útero mayor a la edad gestacional y beta-hCG muy elevada: sospecha mola hidatiforme.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "218",
    "term": "Definir brevemente: Infección urinaria en el embarazo",
    "definition": "Infección bacteriana del tracto urinario durante la gestación, con mayor riesgo de complicaciones.",
    "clinicalPearl": "Bacteriuria asintomática o cistitis en embarazada: trata siempre con antibióticos para prevenir pielonefritis.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "219",
    "term": "Definir brevemente: Isoinmunización Rh",
    "definition": "Formación de anticuerpos maternos contra antígenos Rh fetales, que puede causar anemia hemolítica fetal.",
    "clinicalPearl": "Madre Rh negativa y feto Rh positivo: administra inmunoglobulina anti-D tras eventos de riesgo.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "220",
    "term": "Definir brevemente: Conjuntivitis bacteriana aguda",
    "definition": "Inflamación aguda de la conjuntiva causada por bacterias, caracterizada por enrojecimiento y secreción purulenta.",
    "clinicalPearl": "Ojo rojo, legaña espesa y párpados pegados al despertar: típico de conjuntivitis bacteriana, suele ser autolimitada.",
    "rotation": "Oftalmología",
    "difficulty": "baja"
  },
  {
    "id": "221",
    "term": "Definir brevemente: Glaucoma agudo de ángulo cerrado",
    "definition": "Aumento súbito de la presión intraocular por cierre del ángulo iridocorneal.",
    "clinicalPearl": "Dolor ocular intenso, visión borrosa, halos y ojo duro: sospecha glaucoma agudo, requiere tratamento urgente.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "222",
    "term": "Definir brevemente: Desprendimiento de retina",
    "definition": "Separación de la retina neurosensorial del epitelio pigmentario, que puede causar pérdida visual irreversible.",
    "clinicalPearl": "Destellos, moscas volantes y sombra en el campo visual: sospecha desprendimiento de retina, deriva de urgencia.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "223",
    "term": "Definir brevemente: Uveítis anterior",
    "definition": "Inflamación de la úvea anterior (iris y cuerpo ciliar), asociada a dolor ocular y fotofobia.",
    "clinicalPearl": "Ojo rojo, dolor y fotofobia, con miosis y precipitados en córnea: sugiere uveítis anterior, busca enfermedades sistémicas asociadas.",
    "rotation": "Oftalmología",
    "difficulty": "media"
  },
  {
    "id": "224",
    "term": "Definir brevemente: Catarata senil",
    "definition": "Opacificación progresiva del cristalino relacionada con la edad, principal causa de ceguera reversible.",
    "clinicalPearl": "Pérdida visual progresiva y deslumbramiento en anciano: sospecha catarata, mejora con cirugía.",
    "rotation": "Oftalmología",
    "difficulty": "baja"
  },
  {
    "id": "225",
    "term": "Definir brevemente: Degeneración macular asociada a la edad (DMAE)",
    "definition": "Enfermedad degenerativa de la mácula que afecta la visión central en mayores de 60 años.",
    "clinicalPearl": "Pérdida de visión central y metamorfopsias en anciano: sospecha DMAE, evalúa con fondo de ojo.",
    "rotation": "Oftalmología",
    "difficulty": "media"
  },
  {
    "id": "226",
    "term": "Definir brevemente: Oclusión de la arteria central de la retina",
    "definition": "Obstrucción aguda de la arteria central de la retina, causa de pérdida visual súbita e indolora.",
    "clinicalPearl": "Pérdida visual súbita e indolora, con fondo de ojo en “mancha rojo cereza”: sospecha oclusión arterial, pronóstico visual grave.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "227",
    "term": "Definir brevemente: Oclusión de la vena central de la retina",
    "definition": "Trombosis de la vena central de la retina, que produce edema y hemorragias retinianas.",
    "clinicalPearl": "Pérdida visual súbita, hemorragias en llama y edema en fondo de ojo: típico de oclusión venosa, evalúa factores de riesgo cardiovascular.",
    "rotation": "Oftalmología",
    "difficulty": "media"
  },
  {
    "id": "228",
    "term": "Definir brevemente: Celulitis orbitaria",
    "definition": "Infección aguda de los tejidos orbitarios, potencialmente grave por riesgo de complicaciones intracraneales.",
    "clinicalPearl": "Edema palpebral, dolor ocular y limitación de movimientos oculares: sospecha celulitis orbitaria, requiere antibióticos intravenosos.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "229",
    "term": "Definir brevemente: Queratitis herpética",
    "definition": "Inflamación corneal causada por el virus herpes simple, principal causa infecciosa de ceguera corneal.",
    "clinicalPearl": "Dolor ocular, fotofobia y úlcera dendrítica en córnea: sospecha queratitis herpética, evita corticoides tópicos.",
    "rotation": "Oftalmología",
    "difficulty": "media"
  },
  {
    "id": "230",
    "term": "Definir brevemente: Fractura de Colles",
    "definition": "Fractura distal del radio con desplazamiento dorsal del fragmento distal, frecuente tras caída con mano extendida.",
    "clinicalPearl": "Deformidad en dorso de tenedor tras caída sobre la mano: típico de fractura de Colles, solicita radiografía.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "231",
    "term": "Definir brevemente: Luxación glenohumeral anterior",
    "definition": "Desplazamiento de la cabeza humeral fuera de la cavidad glenoidea, generalmente hacia adelante.",
    "clinicalPearl": "Imposibilidad para mover el hombro y signo de charretera tras traumatismo: sospecha luxación anterior, requiere reducción urgente.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "232",
    "term": "Definir brevemente: Fractura de cadera",
    "definition": "Ruptura del cuello femoral o región intertrocantérica, frecuente en ancianos por caídas.",
    "clinicalPearl": "Acortamiento y rotación externa de la pierna tras caída en anciano: sospecha fractura de cadera, solicita radiografía.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "233",
    "term": "Definir brevemente: Esguince de tobillo",
    "definition": "Lesión ligamentosa del tobillo, habitualmente por inversión forzada.",
    "clinicalPearl": "Dolor, edema y hematoma lateral tras torcedura: típico de esguince, descarta fractura con regla de Ottawa.",
    "rotation": "Traumatología",
    "difficulty": "baja"
  },
  {
    "id": "234",
    "term": "Definir brevemente: Fractura supracondílea de húmero",
    "definition": "Fractura del húmero distal, frecuente en niños tras caída sobre el codo extendido.",
    "clinicalPearl": "Dolor e impotencia funcional en codo de niño tras caída: sospecha fractura supracondílea, evalúa pulso radial.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "235",
    "term": "Definir brevemente: Lesión del ligamento cruzado anterior (LCA)",
    "definition": "Rotura del LCA de la rodilla, común en deportes de contacto o giros bruscos.",
    "clinicalPearl": "Chasquido, inestabilidad y derrame articular inmediato tras giro de rodilla: sospecha lesión del LCA.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "236",
    "term": "Definir brevemente: Fractura de escafoides",
    "definition": "Fractura del hueso escafoides de la muñeca, frecuente en caídas sobre la mano en extensión.",
    "clinicalPearl": "Dolor en tabaquera anatómica tras caída: sospecha fractura de escafoides, puede no verse en radiografía inicial.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "237",
    "term": "Definir brevemente: Síndrome compartimental agudo",
    "definition": "Aumento de la presión dentro de un compartimento muscular que compromete la circulación y función nerviosa.",
    "clinicalPearl": "Dolor desproporcionado, parestesias y pulso distal conservado tras fractura: sospecha síndrome compartimental, requiere fasciotomía urgente.",
    "rotation": "Traumatología",
    "difficulty": "alta"
  },
  {
    "id": "238",
    "term": "Definir brevemente: Tendinitis del manguito rotador",
    "definition": "Inflamación de los tendones del manguito rotador del hombro, causa frecuente de dolor en adultos.",
    "clinicalPearl": "Dolor al abducir el brazo y arco doloroso entre 60-120°: sospecha tendinitis del manguito rotador.",
    "rotation": "Traumatología",
    "difficulty": "baja"
  },
  {
    "id": "239",
    "term": "Definir brevemente: Fractura de clavícula",
    "definition": "Fractura del hueso clavicular, frecuente en caídas sobre el hombro o traumatismos directos.",
    "clinicalPearl": "Dolor, deformidad y abultamiento en la región clavicular tras caída: típico de fractura de clavícula, la mayoría se tratan conservadoramente.",
    "rotation": "Traumatología",
    "difficulty": "baja"
  },
  {
    "id": "240",
    "term": "Definir brevemente: Meningitis bacteriana aguda",
    "definition": "Inflamación de las meninges por infección bacteriana, potencialmente mortal si no se trata rápidamente.",
    "clinicalPearl": "Fiebre, cefalea intensa, rigidez de nuca y alteración del sensorio: sospecha meningitis, inicia antibióticos empíricos de inmediato.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "alta"
  },
  {
    "id": "241",
    "term": "Definir brevemente: Tuberculosis pulmonar",
    "definition": "Infección crónica por Mycobacterium tuberculosis, afecta principalmente los pulmones.",
    "clinicalPearl": "Tos crónica, sudoración nocturna y hemoptisis: sospecha tuberculosis, pide baciloscopia y cultivo.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "alta"
  },
  {
    "id": "242",
    "term": "Definir brevemente: VIH/SIDA",
    "definition": "Infección por el virus de la inmunodeficiencia humana que causa inmunosupresión progresiva.",
    "clinicalPearl": "Infecciones oportunistas recurrentes y pérdida de peso inexplicada: descarta VIH, solicita serología.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "alta"
  },
  {
    "id": "243",
    "term": "Definir brevemente: Fiebre tifoidea",
    "definition": "Enfermedad sistémica causada por Salmonella typhi, transmitida por agua o alimentos contaminados.",
    "clinicalPearl": "Fiebre prolongada, dolor abdominal y exantema en roséola: sospecha fiebre tifoidea, confirma con hemocultivo.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "media"
  },
  {
    "id": "244",
    "term": "Definir brevemente: Malaria",
    "definition": "Enfermedad febril aguda causada por parásitos Plasmodium, transmitida por mosquitos Anopheles.",
    "clinicalPearl": "Fiebre periódica, anemia y antecedente de viaje a zona endémica: sospecha malaria, solicita gota gruesa.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "alta"
  },
  {
    "id": "245",
    "term": "Definir brevemente: Endocarditis infecciosa",
    "definition": "Infección del endocardio, generalmente de las válvulas cardíacas, por bacterias.",
    "clinicalPearl": "Fiebre prolongada, soplo nuevo y fenómenos embólicos: sospecha endocarditis, busca hemocultivos positivos.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "alta"
  },
  {
    "id": "246",
    "term": "Definir brevemente: Sepsis",
    "definition": "Respuesta inflamatoria sistémica grave a una infección, con disfunción orgánica.",
    "clinicalPearl": "Fiebre, taquicardia, hipotensión y alteración del sensorio: sospecha sepsis, inicia antibióticos y soporte hemodinámico.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "alta"
  },
  {
    "id": "247",
    "term": "Definir brevemente: Infección por Clostridioides difficile",
    "definition": "Colitis asociada a toxinas de C. difficile, frecuente tras uso de antibióticos.",
    "clinicalPearl": "Diarrea acuosa y fiebre tras antibióticos: sospecha infección por C. difficile, solicita toxina en heces.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "media"
  },
  {
    "id": "248",
    "term": "Definir brevemente: Mononucleosis infecciosa",
    "definition": "Enfermedad viral causada por el virus de Epstein-Barr, caracterizada por fiebre, faringitis y linfadenopatía.",
    "clinicalPearl": "Faringitis intensa, linfadenopatía cervical y esplenomegalia en adolescente: sospecha mononucleosis, evita ampicilina.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "media"
  },
  {
    "id": "249",
    "term": "Definir brevemente: Herpes zóster",
    "definition": "Reactivación del virus varicela-zóster, que causa erupción vesicular dolorosa en un dermatoma.",
    "clinicalPearl": "Vesículas agrupadas y dolor intenso en distribución dermatomérica: sospecha herpes zóster, inicia antivirales precoces.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "media"
  },
  
export default flashcards;
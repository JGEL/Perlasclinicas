import { Flashcard } from '../types';

const flashcards: Flashcard[] = [
  {
    "id": "001",
    "term": "Definir brevemente: Hipocalcemia",
    "definition": "Disminución del calcio sérico total por debajo de 8.5 mg/dL o del calcio iónico por debajo de 4.5 mg/dL.",
    "datoDx": "Diagnóstico por niveles séricos bajos de calcio total o ionizado, acompañado de síntomas neuromusculares. Se evalúan niveles de PTH, vitamina D y fósforo para determinar causa.",
    "datoTto": "Suplementación con calcio oral o intravenoso según gravedad, junto con vitamina D; manejo específico de la causa subyacente.",
    "clinicalPearl": "Signo de Trousseau: espasmo muscular tras inflar el manguito del tensiómetro durante 3 minutos sugiere hipocalcemia.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "002",
    "term": "Definir brevemente: Estenosis mitral",
    "definition": "Estrechamiento del orificio de la válvula mitral que obstruye el flujo sanguíneo desde la aurícula izquierda al ventrículo izquierdo.",
    "datoDx": "Diagnóstico con soplo diastólico en foco mitral, confirmado con ecocardiografía que muestra área valvular reducida y gradientes elevados. Evaluación de flujo pulmonar y estado auricular izquierdo.",
    "datoTto": "Tratamiento médico con diuréticos, control de la fibrilación auricular, y procedimientos intervencionistas como valvuloplastia con balón o cirugía en casos avanzados.",
    "clinicalPearl": "Paciente inmigrante joven + disnea progresiva + hemoptisis: piensa en fiebre reumática → estenosis mitral.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "003",
    "term": "Definir brevemente: Pancreatitis aguda",
    "definition": "Proceso inflamatorio agudo del páncreas, con compromiso variable de otros tejidos regionales o remotos.",
    "datoDx": "Clínica de dolor abdominal intenso, náuseas y vómitos, con elevación de enzimas pancreáticas (amilasa y lipasa) > veces el límite superior normal. Confirmación con TC abdominal para valorar gravedad y complicaciones.",
    "datoTto": "Manejo principalmente de soporte: ayuno, hidratación intravenosa, analgesia y monitorización. En casos graves, tratamiento de complicaciones y posible cirugía.",
    "clinicalPearl": "Si el dolor abdominal se irradia 'en cinturón' hacia la espalda y se alivia al inclinarse hacia adelante, sospecha pancreatitis.",
    "rotation": "Cirugía General",
    "difficulty": "alta"
  },
  {
    "id": "004",
    "term": "Definir brevemente: Derrame pleural",
    "definition": "Acumulación anormal de líquido en el espacio pleural.",
    "datoDx": "Se basa en historia clínica, exploración física y confirmación por imagen (radiografía y/o ecografía de tórax). Diagnóstico etiológico mediante toracocentesis y análisis completo del líquido pleural (bioquímica, citología, microbiología); TC de tórax o biopsia pleural si se requiere determinar causa específica.",
    "datoTto": "Tratamiento dirigido a la causa subyacente. Drenaje terapéutico (toracocentesis) si hay síntomas severos, y manejo específico según etiología (antibióticos, diuréticos, quimioterapia, tratamiento de insuficiencia cardíaca, etc.).",
    "clinicalPearl": "Matidez a la percusión y disminución del murmullo vesicular en la base pulmonar son los hallazgos clave. Una radiografía de tórax confirmará el diagnóstico.",
    "rotation": "Neumología",
    "difficulty": "baja"
  },
  {
    "id": "005",
    "term": "Definir brevemente: Insuficiencia cardíaca derecha",
    "definition": "Fallo del ventrículo derecho para bombear sangre de manera eficaz, causando congestión venosa sistémica.",
    "datoDx": "Se basa en clínica (edema periférico, distensión yugular), apoyada por ecocardiograma que muestra disfunción del ventrículo derecho y pruebas complementarias para identificar causa.",
    "datoTto": "Control de la causa (hipertensión pulmonar, valvulopatías), diuréticos para congestión y soporte según gravedad.",
    "clinicalPearl": "Edemas en miembros inferiores + ingurgitación yugular + hepatomegalia, incluso sin disnea, sugieren insuficiencia cardíaca derecha.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "006",
    "term": "Definir brevemente: Hipertiroidismo",
    "definition": "Exceso de hormonas tiroideas circulantes que provoca hiperactividad metabólica.",
    "datoDx": "Se diagnostica por clínica de hiperactividad metabólica, niveles séricos bajos de TSH y elevados de T4 libre. Pruebas complementarias incluyen anticuerpos antitiroideos y gammagrafía tiroidea según etiología.",
    "datoTto": "Los tratamientos incluyen antitiroideos (metimazol, propiltiouracilo), betabloqueadores para síntomas, terapia con yodo radiactivo o cirugía en casos seleccionados.",
    "clinicalPearl": "Paciente joven con palpitaciones, pérdida de peso y ansiedad: explora cuello (bocio) y busca temblor fino en manos.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "007",
    "term": "Definir brevemente: EPOC",
    "definition": "Enfermedad pulmonar obstructiva crónica caracterizada por limitación persistente al flujo aéreo.",
    "datoDx": "El diagnóstico se confirma mediante espirometría que muestra limitación persistente del flujo aéreo (cociente FEV/FVC post-broncodilatador <0,) en paciente con historia de exposición a factores de riesgo, principalmente tabaquismo. Se complementa con radiografía de tórax para descartar otras patologías y tomografía computarizada en casos seleccionados. También se evalúan gases sanguíneos para valorar afectación y se realizan pruebas para deficiencia de alfa--antitripsina si está indicada. La valoración clínica incluye síntomas compatibles como tos crónica, expectoración y disnea progresiva.",
    "datoTto": "El tratamiento base incluye broncodilatadores de larga duración (beta-2 agonistas y anticolinérgicos), ajustados según gravedad y fenotipo del paciente (no agudizador, agudizador con eosinofilia, etc.). En pacientes con exacerbaciones frecuentes y características específicas se adicionan corticosteroides inhalados. Se complementa con medidas generales: abandono del hábito tabáquico, vacunación, rehabilitación pulmonar, y en casos avanzados oxigenoterapia y soporte ventilatorio. Se recomienda individualizar manejo y seguimiento basado en la gravedad y comorbilidades asociadas.",
    "clinicalPearl": "Fumador crónico con tos matutina y expectoración: sospecha EPOC aunque la disnea sea leve o tardía.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "008",
    "term": "Definir brevemente: Apendicitis aguda",
    "definition": "Inflamación del apéndice vermiforme, generalmente por obstrucción luminal.",
    "datoDx": "Se basa en la clínica (dolor abdominal migratorio a FID, fiebre, leucocitosis), confirmado con ecografía abdominal o tomografía computarizada para visualización directa y descartar complicaciones.",
    "datoTto": "El manejo es quirúrgico mediante apendicectomía, además de soporte con líquidos, analgesia y antibióticos pre y postoperatorios cuando está indicado.",
    "clinicalPearl": "Dolor abdominal que migra de epigastrio/periumbilical a fosa iliaca derecha es clásico, aunque la fiebre sea baja o tardía.",
    "rotation": "Cirugía General",
    "difficulty": "baja"
  },
  {
    "id": "009",
    "term": "Definir brevemente: Diabetes tipo 2",
    "definition": "Trastorno metabólico caracterizado por hiperglucemia secundaria a resistencia a la insulina y disfunción de las células beta.",
    "datoDx": "Diagnóstico mediante glucemia basal elevada, hemoglobina glicosilada ≥.% o test de tolerancia oral a la glucosa. Se asocia a sobrepeso, sedentarismo y factores de riesgo cardiovascular.",
    "datoTto": "Cambio en el estilo de vida (dieta y ejercicio), seguido de tratamiento farmacológico (metformina como primera línea), y asociar otros antidiabéticos orales o insulina según evolución.",
    "clinicalPearl": "Mayor con infecciones urinarias recurrentes, prurito genital o poliuria nocturna: descarta diabetes tipo 2 aunque no haya síntomas clássicos.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "010",
    "term": "Definir brevemente: Hiponatremia",
    "definition": "Concentración de sodio sérico menor de 135 mEq/L.",
    "datoDx": "Definida por sodio sérico < mEq/L, se clasifica según volumen extracelular (hipovolémica, euvolémica o hipervolémica) mediante anamnesis, examen físico y determinaciones bioquímicas (osmolalidad sérica y urinaria).",
    "datoTto": "Depende de la causa y gravedad: restricción hídrica, corrección con soluciones salinas isotónicas o hipertónicas, y tratamiento de trastornos subyacentes con monitorización cuidadosa para evitar corrección rápida.",
    "clinicalPearl": "Confusión, náuseas y vómitos sin causa clara: revisa el sodio, la hiponatremia puede ser la responsable.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "011",
    "term": "Definir brevemente: Embolia pulmonar",
    "definition": "Obstrucción aguda de la arteria pulmonar o sus ramas por un trombo.",
    "datoDx": "Sospecha clínica confirmada por angiotomografía pulmonar (angio-TC), gammagrafía V/Q o ecografía de miembros inferiores. Dímero D útil como prueba de exclusión.",
    "datoTto": "Anticoagulación inmediata (heparinas/fármacos orales); en casos graves, trombólisis o embolectomía. Se monitoriza riesgo de recurrencia y complicaciones.",
    "clinicalPearl": "Disnea súbita + dolor torácico pleurítico + taquicardia en paciente con inmovilización: sospecha embolia pulmonar aunque la Rx sea normal.",
    "rotation": "Medicina Interna",
    "difficulty": "alta"
  },
  {
    "id": "012",
    "term": "Definir brevemente: Fibrilación auricular",
    "definition": "Arritmia supraventricular caracterizada por actividad eléctrica auricular desorganizada y ritmo ventricular irregular.",
    "datoDx": "Diagnóstico mediante electrocardiograma que muestra ritmo auricular rápido, irregular, sin ondas P distinguibles y respuesta ventricular irregular.",
    "datoTto": "Control del ritmo o frecuencia con fármacos, anticoagulación para prevención de tromboembolismo según riesgo, y en casos adecuados, cardioversión eléctrica o ablación.",
    "clinicalPearl": "Palpitaciones irregulares + pulso irregularmente irregular: piensa en fibrilación auricular, incluso si el paciente está asintomático.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "013",
    "term": "Definir brevemente: Pielonefritis aguda",
    "definition": "Infección bacteriana del parénquima renal y sistema pielocalicial.",
    "datoDx": "Fiebre, dolor lumbar, síntomas urinarios. Análisis de orina con leucocituria y bacteriuria, urocultivo positivo. Ecografía renal para descartar complicaciones.",
    "datoTto": "Antibióticos sistémicos dirigidos según cultivo, hidratación y control clínico estricto.",
    "clinicalPearl": "Fiebre alta + dolor lumbar + piuria: piensa en pielonefritis, sobre todo en mujeres jóvenes o ancianos con confusión.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "014",
    "term": "Definir brevemente: Síndrome nefrótico",
    "definition": "Conjunto de síntomas caracterizado por proteinuria masiva, hipoalbuminemia, edema e hiperlipidemia.",
    "datoDx": "Se caracteriza por proteinuria masiva (>. g/día), hipoalbuminemia, edema y dislipidemia. Se confirma con análisis de orina y biopsia renal si está indicada para etiología.",
    "datoTto": "Tratamiento con corticosteroides e inmunosupresores según causa, restrictivo en sal y diuréticos para edema, control de lípidos y prevención de infecciones y trombosis.",
    "clinicalPearl": "Edema facial matutino + proteinuria masiva: sospecha síndrome nefrótico, especialmente en niños.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "015",
    "term": "Definir brevemente: Hipertensión arterial esencial",
    "definition": "Elevación persistente de la presión arterial sin causa secundaria identificable.",
    "datoDx": "Se diagnostica mediante múltiples mediciones repetidas de presión arterial (≥40/0 mmHg en consulta o valores menores fuera de consulta con monitorización ambulatoria o automedición domiciliaria) descartando causas secundarias. Incluye historia clínica detallada, exploración física y pruebas básicas para descartar daño en órganos diana y factores de riesgo cardiovascular.",
    "datoTto": "El tratamiento combina cambios en el estilo de vida (reducción de sal, control peso, ejercicio regular, moderación de alcohol, dejar de fumar) y, si es necesario, farmacoterapia antihipertensiva con inhibidores de la enzima convertidora de angiotensina, bloqueadores de receptores, diuréticos, betabloqueadores o bloqueadores de calcio. La estrategia favorece el control rápido y sostenido con combinaciones de fármacos en un solo comprimido para reducir riesgos cardiovasculares.",
    "clinicalPearl": "Si detectas hipertensión en consulta, confirma con mediciones repetidas en diferentes días antes de diagnosticar.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "016",
    "term": "Definir brevemente: Gota",
    "definition": "Artritis inflamatoria causada por depósito de cristales de urato monosódico en las articulaciones.",
    "datoDx": "Se diagnostica clínicamente por crisis articulares inflamatorias, clásicamente en primer metatarso, con confirmación mediante análisis de líquido sinovial que muestra cristales de urato monopotásico birefringentes negativos. Se apoya además con niveles séricos de ácido úrico.",
    "datoTto": "Tratamiento agudo con AINEs, colchicina o corticosteroides para controlar inflamación. A largo plazo, reducción de niveles de ácido úrico con alopurinol o febuxostat y cambios en dieta y hábitos para prevenir recurrencias.",
    "clinicalPearl": "Ataque agudo en primer dedo del pie (podagra) en varón adulto: sospecha gota, especialmente si hay consumo de alcohol o diuréticos.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "017",
    "term": "Definir brevemente: Anemia ferropénica",
    "definition": "Disminución de hemoglobina por déficit de hierro, la causa más frecuente de anemia.",
    "datoDx": "Se diagnostica mediante hemograma con anemia microcítica hipocrómica, ferritina sérica baja, capacidad total de fijación de hierro elevada y hierro sérico bajo. Se debe buscar causa de sangrado o malabsorción.",
    "datoTto": "El tratamiento consiste en la suplementación con hierro oral, corrección de la causa subyacente y en casos severos o intolerancia, hierro intravenoso o transfusión.",
    "clinicalPearl": "Fatiga + palidez + uñas frágiles: pide ferritina, la anemia ferropénica es común, sobre todo en mujeres jóvenes.",
    "rotation": "Medicina Interna",
    "difficulty": "baja"
  },
  {
    "id": "018",
    "term": "Definir brevemente: Colecistitis aguda",
    "definition": "Inflamación de la vesícula biliar, generalmente secundaria a litiasis.",
    "datoDx": "Dolor en hipocondrio derecho, fiebre, Murphy positivo, leucocitosis y hallazgos compatibles en ecografía (pared vesicular engrosada, litiasis, líquido perivesicular).",
    "datoTto": "Ayuno, hidratación intravenosa, analgesia y antibióticos. La colecistectomía suele ser el tratamiento definitivo una vez estabilizado el paciente.",
    "clinicalPearl": "Dolor en hipocondrio derecho + Murphy positivo + fiebre: piensa en colecistitis, sobre todo en mujeres obesas de mediana edad.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "019",
    "term": "Definir brevemente: Migraña",
    "definition": "Cefalea recurrente, generalmente unilateral, pulsátil y asociada a síntomas neurovegetativos.",
    "datoDx": "Diagnóstico clínico según criterios internacionales (cefalea pulsátil, unilateral, con náuseas, fotofobia y aura en algunos casos), excluyendo causas secundarias con historia y examen neurológico.",
    "datoTto": "Tratamiento sintomático con analgesia específica (triptanes, AINEs) y profilaxis con betabloqueadores, antiepilépticos o antidepresivos en casos recurrentes.",
    "clinicalPearl": "Cefalea que mejora al dormir y se asocia a fotofobia o fonofobia: sospecha migraña, especialmente en mujeres jóvenes.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "020",
    "term": "Definir brevemente: Neumonía adquirida en la comunidad",
    "definition": "Infección aguda del parénquima pulmonar adquirida fuera del hospital.",
    "datoDx": "Clínica compatible con fiebre, tos, y dolor torácico; radiografía de tórax con infiltrados. Se pueden realizar cultivos, antígenos urinarios y PCR para patógenos específicos.",
    "datoTto": "Antibióticos empíricos según gravedad y comorbilidades, soporte respiratorio y seguimiento clínico y radiológico.",
    "clinicalPearl": "Fiebre + tos productiva + crepitantes en la auscultación: pide radiografía para confirmar neumonía.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "021",
    "term": "Definir brevemente: Hiperglucemia hiperosmolar",
    "definition": "Complicación aguda de la diabetes caracterizada por hiperglucemia extrema y deshidratación sin cetosis significativa.",
    "datoDx": "Se caracteriza por hiperglucemia muy marcada, plasma hiperosmolar sin cetosis significativa, deshidratación severa y alteración del sensorio. Se evalúan gases, electrolitos y glucosa sérica.",
    "datoTto": "Rehidratación agresiva, corrección de electrolitos, administración controlada de insulina y vigilancia en unidad de cuidados intensivos para prevenir complicaciones.",
    "clinicalPearl": "Paciente anciano con diabetes, deshidratado y muy confuso: piensa en hiperglucemia hiperosmolar, aunque no haya cetonas.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "022",
    "term": "Definir brevemente: Hiperplasia prostática benigna",
    "definition": "Crecimiento benigno de la próstata que causa síntomas urinarios obstructivos en varones mayores.",
    "datoDx": "Diagnóstico clínico por síntomas obstructivos o irritativos urinarios y tacto rectal. Complementado con PSA sérico y ecografía prostática para evaluar tamaño y residuo postmiccional.",
    "datoTto": "Medicación con alfa-bloqueadores y/o inhibidores de la -alfa-reductasa; cirugía en casos refractarios o complicados.",
    "clinicalPearl": "Varón mayor con chorro urinario débil y nicturia: sospecha hiperplasia prostática benigna antes de buscar causas neurológicas.",
    "rotation": "Urología",
    "difficulty": "baja"
  },
  {
    "id": "023",
    "term": "Definir brevemente: Dermatitis atópica",
    "definition": "Enfermedad inflamatoria crónica de la piel caracterizada por prurito y eccema.",
    "datoDx": "Diagnóstico clínico por lesiones eccematosas pruriginosas crónicas, antecedentes personales o familiares de atopia y topografía típica. Se evalúa mediante historia clínica, exploración física y exclusión de otras dermatosis. Pruebas de laboratorio solo si hay dudas diagnósticas.",
    "datoTto": "Incluye medidas generales de hidratación cutánea, evitar factores desencadenantes, uso de corticoides tópicos en brotes y, si es necesario, inmunomoduladores tópicos o fototerapia en casos graves. En infecciones asociadas se pautan antibióticos.",
    "clinicalPearl": "Niño con prurito crónico y lesiones eccematosas en pliegues: piensa en dermatitis atópica, especialmente si hay antecedentes familiares de alergia.",
    "rotation": "Dermatología",
    "difficulty": "baja"
  },
  {
    "id": "024",
    "term": "Definir brevemente: Cistitis aguda",
    "definition": "Infección aguda de la vejiga urinaria, frecuente en mujeres jóvenes.",
    "datoDx": "Diagnóstico clínico por disuria, polaquiuria, urgencia y dolor suprapúbico, confirmado con sedimento urinario y urocultivo (bacteriuria significativa).",
    "datoTto": "Antibióticos orales de corta duración guiados por sensibilidad, analgesia y aumento de ingesta hídrica.",
    "clinicalPearl": "Disuria, polaquiuria y urgencia miccional sin fiebre alta: piensa en cistitis y trata empíricamente si no hay complicaciones.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "025",
    "term": "Definir brevemente: Mononucleosis infecciosa",
    "definition": "Enfermedad viral causada por el virus de Epstein-Barr, caracterizada por fiebre, faringitis y linfadenopatía.",
    "datoDx": "Síntomas de fiebre, faringitis, linfadenopatía y esplenomegalia. Prueba rápida (heterófilos) y serología específica para virus Epstein-Barr confirman diagnóstico.",
    "datoTto": "Tratamiento sintomático: reposo, analgesia y antiinflamatorios. Evitar deportes de contacto hasta recuperación. Corticoides solo en complicaciones graves.",
    "clinicalPearl": "Faringitis intensa + linfadenopatía cervical posterior + esplenomegalia en adolescente: sospecha mononucleosis aunque el test rápido sea negativo.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "026",
    "term": "Definir brevemente: Insuficiencia renal aguda prerrenal",
    "definition": "Disminución brusca de la función renal secundaria a hipoperfusión sin daño estructural inicial.",
    "datoDx": "Identificada por elevación rápida de creatinina y oliguria, con historia de hipovolemia o perfusión renal disminuida. Laboratorio muestra BUN/creatinina elevado y volumen urinario bajo.",
    "datoTto": "Corrección rápida de la causa subyacente (rehidratación, mejora perfusión), evitar nefrotóxicos y monitorización cercana.",
    "clinicalPearl": "Paciente mayor con vómitos o diarrea y creatinina elevada: piensa en causa prerrenal antes de otras etiologías.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "027",
    "term": "Definir brevemente: Asma bronquial",
    "definition": "Enfermedad inflamatoria crónica de la vía aérea caracterizada por hiperreactividad bronquial y obstrucción reversible.",
    "datoDx": "El diagnóstico se establece mediante espirometría demostrando obstrucción reversible al flujo aéreo (incremento del FEV ≥% tras broncodilatador). Se complementa con clínica de sibilancias, tos y disnea recurrentes.",
    "datoTto": "El manejo incluye corticosteroides inhalados para control de inflamación y beta-2 agonistas de acción corta para alivio rápido. En casos moderados a severos se usan corticoides orales y otros broncodilatadores.",
    "clinicalPearl": "Tos nocturna recurrente en niño, especialmente tras ejercicio o risa: sospecha asma aunque no haya sibilancias en consulta.",
    "rotation": "Neumología",
    "difficulty": "baja"
  },
  {
    "id": "028",
    "term": "Definir brevemente: Úlcera gástrica",
    "definition": "Lesión en la mucosa gástrica que penetra la muscularis mucosae, generalmente por H. pylori o AINEs.",
    "datoDx": "Diagnóstico con endoscopia digestiva alta que muestra lesión ulcerada en mucosa gástrica y permite tomar biopsias para descartar malignidad y Helicobacter pylori.",
    "datoTto": "Inhibidores de la bomba de protones, erradicación de Helicobacter pylori si está presente, evitar AINEs y medidas para prevenir recurrencias.",
    "clinicalPearl": "Dolor epigástrico que mejora con alimentos: sugiere úlcera duodenal; si empeora, piensa en úlcera gástrica.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "029",
    "term": "Definir brevemente: Hipertiroidismo subclínico",
    "definition": "Disminución de TSH con niveles normales de T3 y T4, generalmente asintomático.",
    "datoDx": "Se caracteriza por TSH baja con niveles normales de T4 y T libres, detectado en análisis de rutina en pacientes asintomáticos o con síntomas leves.",
    "datoTto": "En general, vigilancia clínica y analítica periódica. Tratamiento en casos con síntomas, riesgo cardiovascular, osteoporosis o afección cardíaca.",
    "clinicalPearl": "TSH baja con T3 y T4 normales en paciente asintomático: monitoriza, no siempre requiere tratamento inmediato.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "030",
    "term": "Definir brevemente: Otitis media aguda",
    "definition": "Infección aguda del oído medio, frecuente en niños pequeños.",
    "datoDx": "Diagnóstico clínico con dolor de oído, fiebre y hallazgos en otoscopía como inflamación y presencia de líquido en oído medio. En casos recurrentes o complicados, se pueden usar timpanometría o cultivos.",
    "datoTto": "Tratamiento sintomático con analgesia y antiinflamatorios. Antibióticos indicados en niños menores de 2 años, síntomas severos o complicaciones. Seguimiento para evaluar resolución.",
    "clinicalPearl": "Niño con fiebre y dolor de oído tras catarro: sospecha otitis media, especialmente si hay irritabilidad nocturna.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "031",
    "term": "Definir brevemente: Enfermedad ácido-péptica",
    "definition": "Conjunto de trastornos relacionados con la exposición de la mucosa gástrica o duodenal al ácido gástrico.",
    "datoDx": "Basada en clínica de dolor epigástrico relacionado con alimentos y confirmada mediante endoscopía digestiva alta, además de pruebas para Helicobacter pylori (ureasa en biopsia, test respiratorio o serología).",
    "datoTto": "Inhibidores de la bomba de protones (IBP) son el pilar del tratamiento, junto con erradicación de Helicobacter pylori si está presente, y medidas para evitar factores de riesgo como AINEs y tabaco.",
    "clinicalPearl": "Dispepsia crónica en paciente con antecedentes de AINEs: descarta úlcera péptica aunque no haya dolor intenso.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "032",
    "term": "Definir brevemente: Sinusitis aguda",
    "definition": "Inflamación aguda de los senos paranasales, generalmente secundaria a infección viral o bacteriana.",
    "datoDx": "Se basa en clínica de congestión nasal, dolor facial, rinorrea purulenta y síntomas sistémicos que duran más de días sin mejoría o empeoran tras mejoría inicial. Se confirma con examen físico y en casos específicos con imágenes (TC de senos paranasales).",
    "datoTto": "Tratamiento sintomático con analgésicos, descongestionantes, hidratación; antibióticos en casos sospechosos de complicación bacteriana.",
    "clinicalPearl": "Congestión nasal + dolor facial que empeora al agacharse: piensa en sinusitis, sobre todo si dura más de 7 días.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "033",
    "term": "Definir brevemente: Lumbalgia mecánica",
    "definition": "Dolor lumbar de origen musculoesquelético, sin signos de alarma ni irradiación neurológica.",
    "datoDx": "Diagnóstico clínico basado en dolor lumbar sin signos neurológicos o causas específicas, con exploración física y exclusión de banderas rojas (pérdida de peso, fiebre, antecedentes malignos). Estudios imagenológicos no rutinarios a menos que se sospeche patología grave.",
    "datoTto": "Reposo relativo, analgesia con antiinflamatorios y paracetamol, fisioterapia, y educación postural. Evitar inmovilización prolongada y fomentar actividad gradual.",
    "clinicalPearl": "Dolor lumbar que mejora con reposo y empeora con actividad: suele ser mecánico, evita pruebas de imagen en el primer episodio.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "034",
    "term": "Definir brevemente: Crisis hipertensiva",
    "definition": "Elevación aguda y severa de la presión arterial, con o sin daño agudo a órgano diana.",
    "datoDx": "Se diagnostica ante cifras de presión arterial muy elevadas (generalmente ≥0/0mmHg) detectadas clínicamente; es esencial evaluar daño a órganos diana con exploración física, electrocardiograma, analítica sanguínea y pruebas de imagen según sospecha. La clasificación entre urgencia y emergencia hipertensiva determina el abordaje.",
    "datoTto": "El manejo incluye reducción controlada de las cifras tensionales. En urgencias hipertensivas, tratamiento oral como captopril; en emergencias hipertensivas, antihipertensivos IV (labetalol, nitroprusiato) según la situación clínica y monitorización estrecha de órganos diana. El descenso debe ser gradual para evitar isquemia cerebral o miocárdica.",
    "clinicalPearl": "Paciente con cefalea intensa y PA >180/120 mmHg: descarta daño a órgano diana antes de decidir tratamento urgente.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "035",
    "term": "Definir brevemente: Bronquitis aguda",
    "definition": "Inflamación aguda de los bronquios, generalmente de origen viral, caracterizada por tos persistente.",
    "datoDx": "Diagnóstico clínico basado en tos aguda con o sin expectoración, frecuentemente asociada a infección viral, sin evidencia de neumonía en la exploración o radiografía de tórax.",
    "datoTto": "Tratamiento sintomático con hidratación, analgésicos y antitusígenos si es necesario. Los antibióticos no están indicados salvo sospecha de sobreinfección bacteriana.",
    "clinicalPearl": "Tos persistente tras un catarro, sin fiebre alta ni consolidación pulmonar: suele ser bronquitis aguda, evita antibióticos salvo sospecha bacteriana.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "036",
    "term": "Definir brevemente: Hipopotasemia",
    "definition": "o hipocalemia. Disminución de potasio sérico por debajo de 3.5 mEq/L.",
    "datoDx": "Confirmada con niveles séricos de potasio <. mEq/L, acompañada de síntomas musculares y alteraciones ECG; se investiga etiología con pruebas de función renal, ácido-base y medición de pérdidas urinarias o digestivas.",
    "datoTto": "Reposición oral o intravenosa de potasio según grado de deficiencia y síntomas, manejo de causa subyacente y monitoreo estrecho para evitar complicaciones cardíacas.",
    "clinicalPearl": "Debilidad muscular, calambres o arritmias en paciente con diuréticos: revisa potasio, la hipocalemia puede ser la causa.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "037",
    "term": "Definir brevemente: Celulitis",
    "definition": "Infección bacteriana aguda de la dermis y tejido subcutáneo, habitualmente por estreptococos o estafilococos.",
    "datoDx": "Diagnóstico clínico de eritema, dolor, calor y edema en piel y tejido subcutáneo. En casos atípicos o graves se puede usar ecografía o cultivos de aspirado.",
    "datoTto": "Antibióticos sistémicos activos frente a estreptococos y estafilococos. Soporte con elevación de la extremidad y manejo de factores predisponentes.",
    "clinicalPearl": "Enrojecimiento, calor y dolor local en extremidad con fiebre: piensa en celulitis, especialmente en diabéticos o inmunosuprimidos.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "038",
    "term": "Definir brevemente: Síndrome de intestino irritable",
    "definition": "Trastorno funcional digestivo caracterizado por dolor abdominal y alteraciones del ritmo intestinal sin causa orgánica identificable.",
    "datoDx": "Diagnóstico clínico basado en criterios de Roma (dolor abdominal recurrente asociado a cambios en patrón de evacuación) y exclusión de enfermedades orgánicas mediante historia, examen y pruebas mínimas según indicación.",
    "datoTto": "Medidas dietéticas (fibra, evitar desencadenantes), manejo del estrés, fármacos según síntoma predominante (antiespasmódicos, laxantes, antidiarreicos) y terapia psicológica en casos resistentes.",
    "clinicalPearl": "Dolor abdominal crónico que mejora tras defecar y alterna diarrea/estreñimiento: sospecha síndrome de intestino irritable si los estudios son normales.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "039",
    "term": "Definir brevemente: Osteoartritis",
    "definition": "Enfermedad articular degenerativa caracterizada por dolor, rigidez y limitación funcional progresiva.",
    "datoDx": "El diagnóstico es clínico, basado en dolor articular crónico, rigidez matutina breve y limitación funcional, predominando en articulaciones de carga (rodillas, caderas). Se corrobora con radiografía que muestra disminución del espacio articular, osteofitos y esclerosis subcondral.",
    "datoTto": "Incluye educación, control de peso, fisioterapia y ejercicios. Uso de analgésicos como paracetamol y antiinflamatorios no esteroides (AINEs). En casos avanzados, infiltraciones intraarticulares o cirugía (artroplastia) pueden ser indicadas.",
    "clinicalPearl": "Dolor articular que empeora con el uso y mejora con el reposo, sin inflamación importante: sugiere osteoartritis, especialmente en adultos mayores.",
    "rotation": "Reumatología",
    "difficulty": "baja"
  },
  {
    "id": "040",
    "term": "Definir brevemente: Hipoglucemia",
    "definition": "Descenso de glucosa plasmática por debajo de 70 mg/dL, con o sin síntomas.",
    "datoDx": "Identificada con síntomas neurogénicos o neuroglucopénicos y glucosa sanguínea <0 mg/dL. Se confirma con mediciones capilares o venosas y se descartan causas de hipoglucemia reactiva o por medicamentos.",
    "datoTto": "Administración rápida de carbohidratos orales o glucosa intravenosa en casos severos, ajuste de medicación y educación para prevención.",
    "clinicalPearl": "Paciente diabético con sudoración, temblor y confusión: sospecha hipoglucemia, administra glucosa rápidamente.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "041",
    "term": "Definir brevemente: Rinitis alérgica",
    "definition": "Inflamación de la mucosa nasal por reacción alérgica, caracterizada por estornudos, rinorrea y prurito nasal.",
    "datoDx": "El diagnóstico es clínico, con síntomas como congestión nasal, estornudos, rinorrea acuosa y picor nasal, a menudo con antecedentes de alergia o atopia. Se puede confirmar con pruebas cutáneas de alergia o análisis específicos de IgE para alérgenos.",
    "datoTto": "Incluye evitar los alérgenos desencadenantes, uso de antihistamínicos orales o intranasales, corticosteroides nasales y en casos severos inmunoterapia específica.",
    "clinicalPearl": "Estornudos en salva, picor nasal y lagrimeo en primavera: piensa en rinitis alérgica, pregunta por antecedentes atópicos.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "042",
    "term": "Definir brevemente: Enfermedad por reflujo gastroesofágico",
    "definition": "Paso retrógrado de contenido gástrico al esófago, causando síntomas o complicaciones.",
    "datoDx": "Se basa en clínica de pirosis, regurgitación y síntomas atípicos. Endoscopía para evaluar complicaciones o diagnóstico diferencial. pH-metría es estándar para diagnóstico objetivo en casos dudosos.",
    "datoTto": "Modificación de hábitos, inhibidores de bomba de protones como tratamiento farmacológico principal, y cirugía antirreflujo en casos refractarios o complicados.",
    "clinicalPearl": "Pirosis postprandial frecuente que mejora con antiácidos: sospecha reflujo gastroesofágico, aconseja medidas dietéticas y de postura.",
    "rotation": "Gastroenterología",
    "difficulty": "baja"
  },
  {
    "id": "043",
    "term": "Definir brevemente: Anemia megaloblástica",
    "definition": "Anemia causada por déficit de vitamina B12 o ácido fólico, caracterizada por macrocitosis.",
    "datoDx": "Se caracteriza por anemia macrocítica, hipersegmentación de neutrófilos y presencia de reticulocitos bajos. Se confirma midiendo niveles séricos de vitamina B y ácido fólico.",
    "datoTto": "La terapia incluye suplemento de vitamina B y/o ácido fólico según deficiencia, junto con tratamiento de la causa subyacente (p. ej., malabsorción, medicamentos).",
    "clinicalPearl": "Anemia con macrocitosis y glositis: descarta déficit de B12 o folato, sobre todo en ancianos o alcohólicos.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "044",
    "term": "Definir brevemente: Enfermedad celíaca",
    "definition": "Enteropatía autoinmune inducida por el gluten en personas genéticamente predispuestas.",
    "datoDx": "Se realiza mediante serología (anticuerpos anti-transglutaminasa tisular IgA y anticuerpos antiendomisio) y se confirma con biopsia duodenal mostrando atrofia vellosa y linfocitos intraepiteliales en pacientes con dieta con gluten.",
    "datoTto": "Dieta estricta sin gluten de por vida es el único tratamiento efectivo, con seguimiento clínico y de marcadores serológicos para evaluar la respuesta.",
    "clinicalPearl": "Diarrea crónica, pérdida de peso y anemia ferropénica inexplicada: considera enfermedad celíaca, pide anticuerpos específicos.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "045",
    "term": "Definir brevemente: Síndrome vertiginoso periférico",
    "definition": "Trastorno del equilibrio causado por alteraciones en el oído interno o nervio vestibular.",
    "datoDx": "Clínica de vértigo súbito o episódico asociado a náuseas, vómitos y nistagmo horizontal con exploración vestibular anormal. Se elimina causas centrales con neuroimagen si hay signos o síntomas neurológicos.",
    "datoTto": "Tratamiento sintomático con antieméticos y betahistina, ejercicios de rehabilitación vestibular y manejo de la causa subyacente si se identifica.",
    "clinicalPearl": "Vértigo intenso de inicio súbito, con nistagmo horizontal y audición conservada: sugiere origen periférico, como VPPB o neuronitis vestibular.",
    "rotation": "Otorrinolaringología",
    "difficulty": "media"
  },
  {
    "id": "046",
    "term": "Definir brevemente: Hipertensión secundaria",
    "definition": "Elevación de la presión arterial debida a una causa identificable, como enfermedad renal o endocrina.",
    "datoDx": "Se sospecha en hipertensión con inicio temprano, mal control, presión arterial muy elevada o signos clínicos específicos. El estudio incluye pruebas orientadas a posibles causas (enfermedad renal, endocrina, vascular), análisis de orina, pruebas de imagen renal y toma de ácido metanefrinas para feocromocitoma, entre otras.",
    "datoTto": "El abordaje se centra en tratar la causa subyacente, que puede incluir cirugía, manejo específico de enfermedades renales o endocrinas, y control farmacológico temporal o complementario de la presión arterial.",
    "clinicalPearl": "Hipertensión de difícil control en joven o con hipopotasemia: busca causas secundarias como hiperaldosteronismo o feocromocitoma.",
    "rotation": "Medicina Interna",
    "difficulty": "alta"
  },
  {
    "id": "047",
    "term": "Definir brevemente: Varicela",
    "definition": "Infección viral aguda causada por el virus varicela-zóster, caracterizada por exantema vesicular pruriginoso.",
    "datoDx": "Diagnóstico clínico por presencia de lesiones cutáneas en diferentes estadios (máculas, pápulas, vesículas y costras) distribuidas en cara, tronco y extremidades, con antecedente de exposición o brote comunitario.",
    "datoTto": "Manejo sintomático con antipiréticos y antihistamínicos para prurito. En casos severos o en pacientes de riesgo, antivirales como aciclovir. Prevención mediante vacunación.",
    "clinicalPearl": "Lesiones en diferentes fases evolutivas (máculas, pápulas, vesículas y costras) en el mismo paciente: típico de varicela.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "048",
    "term": "Definir brevemente: Trombosis venosa profunda",
    "definition": "Formación de un trombo en el sistema venoso profundo, habitualmente en extremidades inferiores.",
    "datoDx": "Sospecha clínica en presencia de dolor, edema y aumento de temperatura en extremidad; se confirma con ecografía Doppler venoso. Puede ayudar el dímero D en casos de baja probabilidad clínica.",
    "datoTto": "Anticoagulación con heparinas de bajo peso molecular o directos inicialmente, seguido de anticoagulantes orales. En casos extensos o embolia pulmonar, considerar trombólisis o filtros de vena cava.",
    "clinicalPearl": "Edema unilateral, dolor y aumento de temperatura en pierna tras inmovilización: sospecha TVP y solicita eco-Doppler.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "049",
    "term": "Definir brevemente: Insuficiencia suprarrenal",
    "definition": "Déficit de producción de hormonas suprarrenales, principalmente cortisol y aldosterona.",
    "datoDx": "Confirmada por cortisol sérico bajo en contexto clínico compatible, con pruebas de estimulación con ACTH para diferenciar causas. Se complementa con estudio de electrolitos y otros análisis hormonales.",
    "datoTto": "Reemplazo hormonal con glucocorticoides y mineralocorticoides, ajuste en estrés o enfermedad, y manejo de causas subyacentes.",
    "clinicalPearl": "Fatiga, hipotensión y pigmentación cutánea: piensa en insuficiencia suprarrenal, especialmente si hay antecedentes autoinmunes.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "050",
    "term": "Definir brevemente: Enfermedad de Parkinson",
    "definition": "Trastorno neurodegenerativo caracterizado por bradicinesia, temblor en reposo y rigidez.",
    "datoDx": "El diagnóstico es clínico basado en signos motores clásicos: bradicinesia, rigidez, temblor en reposo y alteraciones posturales. La respuesta a levodopa es diagnóstica. Estudios de neuroimagen se usan para descartar otras causas.",
    "datoTto": "Tratamiento farmacológico con levodopa/carbidopa, agonistas dopaminérgicos y otros agentes (inhibidores de MAO-B). Terapias no farmacológicas incluyen fisioterapia y apoyo multidisciplinario.",
    "clinicalPearl": "Temblor de reposo, lentitud de movimientos y marcha festinante en anciano: sospecha enfermedad de Parkinson.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "051",
    "term": "Definir brevemente: Pancreatitis aguda",
    "definition": "Inflamación aguda del páncreas, generalmente causada por litiasis biliar o alcohol.",
    "datoDx": "Clínica de dolor abdominal intenso, náuseas y vómitos, con elevación de enzimas pancreáticas (amilasa y lipasa) > veces el límite superior normal. Confirmación con TC abdominal para valorar gravedad y complicaciones.",
    "datoTto": "Manejo principalmente de soporte: ayuno, hidratación intravenosa, analgesia y monitorización. En casos graves, tratamiento de complicaciones y posible cirugía.",
    "clinicalPearl": "Dolor epigástrico irradiado a espalda + elevación de amilasa/lipasa: piensa en pancreatitis aguda, solicita ecografía abdominal.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "052",
    "term": "Definir brevemente: Enfermedad pulmonar intersticial",
    "definition": "Grupo de enfermedades que afectan el intersticio pulmonar, causando fibrosis y alteración del intercambio gaseoso.",
    "datoDx": "Síntomas de disnea y tos crónica. El diagnóstico se confirma con TC de alta resolución mostrando patrón intersticial y biopsia pulmonar en casos dudosos.",
    "datoTto": "Depende de la etiología: corticosteroides, inmunosupresores, antifibróticos (pirfenidona, nintedanib), y rehabilitación pulmonar. En algunos casos, trasplante pulmonar.",
    "clinicalPearl": "Disnea progresiva + crepitantes en velcro + hipocratismo digital: sospecha enfermedad pulmonar intersticial, solicita TC de tórax.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "053",
    "term": "Definir brevemente: Tiroiditis subaguda (de Quervain)",
    "definition": "Inflamación autolimitada de la glándula tiroides, generalmente posterior a infección viral.",
    "datoDx": "El diagnóstico es clínico con dolor cervical anterior irradiado a la mandíbula, fiebre y función tiroidea inicialmente variable; se confirma con elevación de reactantes de fase aguda (VSG, PCR), disminución de captación en gammagrafía tiroidea y exclusión de infección bacteriana o autoinmune.",
    "datoTto": "El manejo es principalmente sintomático con antiinflamatorios no esteroideos (AINEs) y, en casos severos, corticosteroides. El seguimiento incluye vigilancia de función tiroidea para detectar hipotiroidismo transitorio o permanente.",
    "clinicalPearl": "Dolor cervical anterior, fiebre y tiroides dolorosa tras cuadro viral: sugiere tiroiditis subaguda.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "054",
    "term": "Definir brevemente: Enfermedad arterial periférica",
    "definition": "Estenosis u oclusión de arterias periféricas, generalmente por aterosclerosis, que causa isquemia en extremidades.",
    "datoDx": "El diagnóstico se sospecha clínicamente ante claudicación intermitente y se confirma con índice tobillo-brazo (ITB) <0., ultrasonido Doppler, angiografía o angio-TC/MR para definir la extensión y ubicación de la obstrucción.",
    "datoTto": "Incluye cambio en estilo de vida (dejar de fumar, ejercicio supervisado), control de factores de riesgo cardiovascular, uso de antiagregantes plaquetarios y, en casos avanzados, revascularización quirúrgica o endovascular.",
    "clinicalPearl": "Claudicación intermitente (dolor al caminar que cede en reposo): sospecha enfermedad arterial periférica, explora pulsos y pide índice tobillo-brazo.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "055",
    "term": "Definir brevemente: Síndrome nefrítico agudo",
    "definition": "Conjunto de signos y síntomas caracterizados por hematuria, proteinuria, hipertensión y edema, generalmente por glomerulonefritis.",
    "datoDx": "Manifestaciones súbitas de hematuria macroscópica, edema, hipertensión y oliguria. Confirma con estudio de orina y función renal, con investigación etiológica (serologías, biopsia renal en casos necesarios).",
    "datoTto": "Manejo hospitalario con soporte, control de volumen y presión, junto con tratamiento específico para la enfermedad desencadenante.",
    "clinicalPearl": "Hematuria macroscópica, edema y aumento de la presión arterial tras faringitis o impétigo: sospecha glomerulonefritis postestreptocócica.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "056",
    "term": "Definir brevemente: Enfermedad de Graves",
    "definition": "Trastorno autoinmune que causa hipertiroidismo por estimulación del receptor de TSH.",
    "datoDx": "Laboratorio muestra hipertiroidismo con TSH suprimida y elevación de T4 libre. Anticuerpos estimulantes del receptor de TSH (TRAb) positivos confirman el diagnóstico. La gammagrafía tiroidea muestra captación aumentada y difusa.",
    "datoTto": "Antitiroideos (metimazol o propiltiuracilo) como primera línea, betabloqueadores para controlar síntomas adrenergicos, y en casos seleccionados cirugía tiroidea o terapia con yodo radiactivo.",
    "clinicalPearl": "Hipertiroidismo + oftalmopatía (exoftalmos) y bocio difuso: piensa en enfermedad de Graves.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "057",
    "term": "Definir brevemente: Enfermedad diverticular del colon",
    "definition": "Presencia de divertículos en el colon, que pueden inflamarse y causar diverticulitis.",
    "datoDx": "Sospecha clínica con dolor abdominal en fosa iliaca izquierda y cambios en hábito intestinal. Confirmación con TC abdominal que muestra divertículos y signos de inflamación en diverticulitis.",
    "datoTto": "Para diverticulitis leve, tratamiento con antibióticos orales y dieta; en casos severos hospitalización, antibióticos intravenosos y cirugía si hay complicaciones. Prevención incluye dieta rica en fibra.",
    "clinicalPearl": "Dolor en fosa iliaca izquierda y fiebre en adulto mayor: sospecha diverticulitis, pide TAC abdominal.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "058",
    "term": "Definir brevemente: Síndrome de Cushing",
    "definition": "Conjunto de signos y síntomas por exceso de glucocorticoides endógenos o exógenos.",
    "datoDx": "Se diagnostica por clínica sugerente (obesidad central, cara de luna llena, hipertensión), confirmada con pruebas bioquímicas de cortisol elevado (cortisol libre urinario, test de supresión con dexametasona) y estudios imagenológicos para localizar la causa (adenoma hipofisario, suprarrenal o ectópico).",
    "datoTto": "Depende de la causa: cirugía para tumores pituitarios o suprarrenales, radioterapia, medicamentos inhibidores de la producción de cortisol y manejo de complicaciones.",
    "clinicalPearl": "Obesidad central, cara de luna llena, debilidad proximal y estrías violáceas: piensa en síndrome de Cushing.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "059",
    "term": "Definir brevemente: Anemia por enfermedad crónica",
    "definition": "Anemia secundaria a enfermedades inflamatorias, infecciosas o neoplásicas crónicas.",
    "datoDx": "El hemograma muestra anemia normocítica o levemente microcítica, ferritina normal o elevada y baja saturación de transferrina. Se asocia con enfermedades inflamatorias crónicas o infecciosas.",
    "datoTto": "Principalmente manejo del trastorno inflamatorio subyacente. En casos severos puede requerirse administración de eritropoyetina y transfusiones.",
    "clinicalPearl": "Anemia leve-moderada con ferritina normal o alta y hierro bajo: sospecha anemia por enfermedad crónica.",
    "rotation": "Medicina Interna",
    "difficulty": "media"
  },
  {
    "id": "060",
    "term": "Definir brevemente: Insuficiencia hepática aguda",
    "definition": "Deterioro rápido de la función hepática con encefalopatía y coagulopatía en paciente sin enfermedad hepática previa.",
    "datoDx": "Diagnóstico clínico y laboratorio con coagulopatía, encefalopatía y alteración de función hepática en paciente sin enfermedad hepática previa. Se realizan estudios para etiología viral, tóxica o autoinmune.",
    "datoTto": "Cuidados intensivos, soporte vital, manejo de complicaciones como hipertensión intracraneal y posible trasplante hepático.",
    "clinicalPearl": "Ictericia, alteración del estado mental y sangrado en joven previamente sano: sospecha insuficiencia hepática aguda.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "061",
    "term": "Definir brevemente: Hiperparatiroidismo primario",
    "definition": "Exceso de hormona paratiroidea por adenoma, hiperplasia o carcinoma de paratiroides.",
    "datoDx": "Identificación de hipercalcemia con PTH elevada o inapropiadamente normal en sangre, asociada a síntomas óseos, renales o gastrointestinales. Estudios de imagen para localizar adenoma si se indica cirugía.",
    "datoTto": "Cirugía de paratiroides es curativa en la mayoría. En casos no quirúrgicos, control con bisfosfonatos, hidratación y monitorización.",
    "clinicalPearl": "Hipercalcemia, litiasis renal y osteoporosis: piensa en hiperparatiroidismo primario, pide PTH.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "062",
    "term": "Definir brevemente: Enfermedad pulmonar obstructiva crónica agudizada",
    "definition": "Empeoramiento agudo de los síntomas respiratorios en paciente con EPOC.",
    "datoDx": "Empeoramiento súbito de síntomas respiratorios en paciente con EPOC diagnosticada clínicamente y confirmada por espirometría previa. Se evalúan con radiografía y gases arteriales para excluir complicaciones.",
    "datoTto": "Oxigenoterapia, broncodilatadores inhalados, corticosteroides sistémicos y antibióticos según infección. Soporte ventilatorio si hay insuficiencia respiratoria.",
    "clinicalPearl": "Aumento de disnea, tos y expectoración purulenta en EPOC: sospecha agudización, valora antibióticos y corticoides.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "063",
    "term": "Definir brevemente: Síndrome de apnea-hipopnea del sueño",
    "definition": "Trastorno caracterizado por episodios repetidos de obstrucción de la vía aérea superior durante el sueño.",
    "datoDx": "Se sospecha en pacientes con somnolencia diurna, ronquidos, episodios de pausas respiratorias observados y fatiga. El diagnóstico se confirma mediante polisomnografía que mide eventos de apnea e hipopnea durante el sueño.",
    "datoTto": "Incluye cambios en el estilo de vida (pérdida de peso, evitar alcohol), uso de dispositivos CPAP (presión positiva continua en vías respiratorias) y en casos específicos cirugía o dispositivos orales.",
    "clinicalPearl": "Ronquidos intensos, pausas respiratorias y somnolencia diurna: sospecha apnea del sueño, pide polisomnografía.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "064",
    "term": "Definir brevemente: Enfermedad de Crohn",
    "definition": "Enfermedad inflamatoria crónica del tracto gastrointestinal, de etiología autoinmune.",
    "datoDx": "Se basa en clínica (dolor abdominal, diarrea crónica, peso), endoscopía con biopsia que evidencia inflamación transmural, ayudas con estudios radiológicos como enterografía por TC o resonancia magnética para evaluar compromiso intestinal y complicaciones.",
    "datoTto": "Tratamiento con antiinflamatorios (aminosalicilatos), corticosteroides para brotes, inmunomoduladores (azatioprina, metotrexato) y biológicos (anti-TNF, anti-integrinas) para enfermedad activa o refractaria. Cirugía para complicaciones o fallo terapéutico.",
    "clinicalPearl": "Diarrea crónica, dolor abdominal y pérdida de peso en joven: sospecha enfermedad de Crohn, busca lesiones en íleon terminal.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "065",
    "term": "Definir brevemente: Litiasis renal",
    "definition": "Formación de cálculos en el sistema urinario, principalmente en los riñones.",
    "datoDx": "El diagnóstico se basa en clínica de dolor renal (cólico nefrítico), hematuria y confirmación con estudios imagenológicos como ecografía renal y tomografía computarizada sin contraste que identifica cálculos y su localización.",
    "datoTto": "Incluye analgesia, hidratación abundante y en algunos casos tratamiento médico expulsivo con alfa-bloqueadores. Calculos grandes o causantes de complicaciones pueden necesitar litotricia extracorpórea, ureteroscopia o cirugía.",
    "clinicalPearl": "Dolor lumbar intenso, cólico, que irradia a la ingle y hematuria: sospecha litiasis renal, solicita ecografía o TAC sin contraste.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "066",
    "term": "Definir brevemente: Infección urinaria baja (cistitis)",
    "definition": "Infección bacteriana de la vejiga, caracterizada por disuria, urgencia y polaquiuria.",
    "datoDx": "Se basa en síntomas urinarios (disuria, polaquiuria, urgencia), con análisis de orina y cultivo para confirmar y guiar tratamiento.",
    "datoTto": "Antibióticos orales de corta duración, aumento de ingesta hídrica y medidas higiénicas para prevenir recurrencias.",
    "clinicalPearl": "Disuria, urgencia y dolor suprapúbico sin fiebre: típico de cistitis, especialmente en mujeres jóvenes.",
    "rotation": "Urología",
    "difficulty": "baja"
  },
  {
    "id": "067",
    "term": "Definir brevemente: Infección urinaria alta (pielonefritis)",
    "definition": "Infección bacteriana del parénquima renal y sistema pielocalicial.",
    "datoDx": "Diagnóstico por clínica (fiebre, dolor lumbar, síntomas urinarios), análisis de orina con leucocituria, bacteriuria y cultivo positivo. Ecografía renal si hay sospecha de complicaciones.",
    "datoTto": "Antibióticos sistémicos según antibiograma, hidratación y seguimiento para descartar abscesos o daño renal.",
    "clinicalPearl": "Fiebre alta, dolor lumbar y piuria: piensa en pielonefritis, inicia antibióticos empíricos y valora ingreso si hay sepsis.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "068",
    "term": "Definir brevemente: Hiperplasia prostática benigna",
    "definition": "Crecimiento benigno de la próstata que causa síntomas urinarios obstructivos en varones mayores.",
    "datoDx": "Diagnóstico clínico por síntomas obstructivos o irritativos urinarios y tacto rectal. Complementado con PSA sérico y ecografía prostática para evaluar tamaño y residuo postmiccional.",
    "datoTto": "Medicación con alfa-bloqueadores y/o inhibidores de la -alfa-reductasa; cirugía en casos refractarios o complicados.",
    "clinicalPearl": "Nicturia, chorro débil y vacilación urinaria en varón mayor: sospecha HPB, realiza tacto rectal y PSA.",
    "rotation": "Urología",
    "difficulty": "baja"
  },
  {
    "id": "069",
    "term": "Definir brevemente: Cáncer de próstata",
    "definition": "Neoplasia maligna de la glándula prostática, frecuente en varones mayores.",
    "datoDx": "Detección por tacto rectal y medición de PSA sérico. Diagnóstico definitivo mediante biopsia transrectal guiada por ecografía.",
    "datoTto": "Opciones: vigilancia activa en casos seleccionados, cirugía radical, radioterapia, hormonoterapia y eventualmente quimioterapia según el estadio y riesgo.",
    "clinicalPearl": "Elevación del PSA y nódulo duro al tacto rectal: sospecha cáncer de próstata, solicita biopsia.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "070",
    "term": "Definir brevemente: Cáncer de vejiga",
    "definition": "Neoplasia maligna que afecta la mucosa vesical, asociada al tabaquismo.",
    "datoDx": "Se diagnostica mediante cistoscopia con biopsia de la lesión vesical, complementando con citología urinaria y estudios de imagen (TAC, urografía, ecografía) para estadificación.",
    "datoTto": "Tratamiento quirúrgico (resección transuretral, cistectomía en casos avanzados). Uso de inmunoterapia intravesical (BCG) y quimioterapia según estadio tumoral.",
    "clinicalPearl": "Hematuria indolora en adulto mayor, especialmente fumador: sospecha cáncer de vejiga, solicita cistoscopia.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "071",
    "term": "Definir brevemente: Torsión testicular",
    "definition": "Rotación del cordón espermático que compromete la irrigación testicular, causando isquemia.",
    "datoDx": "Diagnóstico clínico urgente ante dolor escrotal súbito intenso, elevación del testículo, reflejo cremastérico ausente y confirmación con ecografía Doppler que muestra ausencia de flujo sanguíneo testicular.",
    "datoTto": "Urgencia quirúrgica para realizar desrotación e fijación testicular (orquidopexia). Retraso en el manejo puede causar pérdida del testículo.",
    "clinicalPearl": "Dolor testicular agudo, intenso y elevación del testículo: sospecha torsión testicular, requiere cirugía urgente.",
    "rotation": "Urología",
    "difficulty": "alta"
  },
  {
    "id": "072",
    "term": "Definir brevemente: Epididimitis",
    "definition": "Inflamación del epidídimo, generalmente por infección bacteriana.",
    "datoDx": "Dolor y edema en escroto, diagnóstico confirmado con ecografía Doppler que muestra aumento de flujo en epidídimo; cultivo de orina para identificar infección.",
    "datoTto": "Antibióticos dirigidos a patógenos causales (E. coli, Neisseria gonorrhoeae), analgesia y elevación del escroto.",
    "clinicalPearl": "Dolor testicular progresivo, fiebre y testículo elevado pero con reflejo cremastérico presente: sugiere epididimitis, diferencia de torsión.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "073",
    "term": "Definir brevemente: Fimosis",
    "definition": "Imposibilidad de retraer el prepucio sobre el glande en varones no circuncidados.",
    "datoDx": "Diagnóstico clínico por dificultad o imposibilidad de retraer el prepucio sobre el glande, evaluando síntomas y complicaciones asociadas.",
    "datoTto": "Tratamiento con corticoides tópicos para casos leves, higiene adecuada, y circuncisión en casos persistentes o con complicaciones.",
    "clinicalPearl": "Dificultad para retraer el prepucio en niño o adulto con infecciones urinarias recurrentes: sospecha fimosis, valora cirugía.",
    "rotation": "Urología",
    "difficulty": "baja"
  },
  {
    "id": "074",
    "term": "Definir brevemente: Varicocele",
    "definition": "Dilatación anormal de las venas del plexo pampiniforme del escroto.",
    "datoDx": "Se diagnostica clínicamente por masa palpable en escroto que aumenta al realizar maniobra de Valsalva, confirmado por ecografía Doppler testicular que muestra dilatación venosa y flujo retrógrado.",
    "datoTto": "En casos asintomáticos no requiere tratamiento. Para dolor o infertilidad, opciones quirúrgicas o embolización percutánea.",
    "clinicalPearl": "Masa escrotal blanda, indolora, que aumenta de tamaño al estar de pie: típico de varicocele, asocia infertilidad.",
    "rotation": "Urología",
    "difficulty": "media"
  },
  {
    "id": "075",
    "term": "Definir brevemente: Shock hipovolémico",
    "definition": "Estado de hipoperfusión tisular secundaria a pérdida significativa de volumen intravascular.",
    "datoDx": "Diagnóstico clínico que incluye hipotensión arterial, taquicardia, palidez, sudoración, oliguria y alteración del estado de conciencia tras pérdida significativa de volumen intravascular. Se confirma con historia, exploración y parámetros hemodinámicos y laboratorio con lactato elevado.",
    "datoTto": "Reanimación rápida con líquidos intravenosos (cristaloides), control rápido de la causa (hemorragia, vómitos, diarrea), soporte hemodinámico y monitoreo intensivo. En casos graves se requieren transfusiones y soporte avanzado.",
    "clinicalPearl": "Taquicardia, hipotensión y piel fría tras hemorragia o deshidratación: sospecha shock hipovolémico, inicia fluidoterapia rápida.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "076",
    "term": "Definir brevemente: Infarto agudo de miocardio",
    "definition": "Necrosis del miocardio por obstrucción aguda de una arteria coronaria.",
    "datoDx": "Clínica de dolor torácico típico asociado a elevación de marcadores cardíacos (troponinas) y alteraciones ECG (elevación o depresión del segmento ST). Estudios de imagen (angiografía coronaria) para evaluación anatómica.",
    "datoTto": "Reperfusión rápida mediante angioplastia primaria o trombólisis según disponibilidad, tratamiento farmacológico con antiagregantes, anticoagulantes, betabloqueadores y estatinas, además de manejo de complicaciones.",
    "clinicalPearl": "Dolor torácico opresivo, irradiado a brazo izquierdo, asociado a sudoración y náuseas: realiza ECG y enzimas cardíacas de inmediato.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "077",
    "term": "Definir brevemente: Accidente cerebrovascular isquémico",
    "definition": "Déficit neurológico agudo por interrupción del flujo sanguíneo cerebral.",
    "datoDx": "El diagnóstico se realiza por clínica de déficit neurológico súbito, confirmado con tomografía computarizada (TC) o resonancia magnética (RM) cerebral para distinguir entre isquemia y hemorragia. Se usan además doppler de vasos cervicales y estudios cardiológicos según la sospecha para buscar la causa.",
    "datoTto": "El pilar es el restablecimiento urgente del flujo cerebral. Incluye trombólisis intravenosa (rtPA) en menos de 4.5 horas y, para coágulos accesibles, trombectomía mecánica. Es crucial controlar la presión arterial, la glucemia y establecer prevención secundaria.",
    "clinicalPearl": "Déficit focal súbito (hemiparesia, afasia) en paciente con factores de risco: sospecha ACV isquémico, activa código ictus.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "078",
    "term": "Definir brevemente: Crisis epiléptica",
    "definition": "Descarga eléctrica anormal y excesiva de las neuronas cerebrales que produce síntomas motores, sensitivos o alteración de conciencia.",
    "datoDx": "Diagnóstico mediante historia clínica y testigos del episodio, apoyo con EEG (electroencefalograma) y neuroimagen para descartar lesiones estructurales.",
    "datoTto": "En el momento agudo, benzodiacepinas intravenosas. Para prevención, ajuste de fármacos antiepilépticos según tipo de crisis y paciente.",
    "clinicalPearl": "Pérdida súbita de conciencia con movimentos tónico-clónicos y recuperación posictal: típico de crisis epiléptica generalizada.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "079",
    "term": "Definir brevemente: Neumotórax espontáneo",
    "definition": "Presencia de aire en el espacio pleural sin causa traumática, que colapsa el pulmón.",
    "datoDx": "Clínica de dolor torácico súbito y disnea, confirmación con radiografía de tórax que muestra colapso pulmonar. En casos dudosos, TC torácica.",
    "datoTto": "Observación en neumotórax pequeño y estable, drenaje pleural o intervención quirúrgica en casos grandes o recurrentes.",
    "clinicalPearl": "Disnea súbita y dolor torácico unilateral en joven alto y delgado: sospecha neumotórax, confirma con radiografía.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "080",
    "term": "Definir brevemente: Anafilaxia",
    "definition": "Reacción alérgica sistémica grave y potencialmente mortal, mediada por IgE.",
    "datoDx": "Diagnóstico clínico, basado en aparición súbita de síntomas graves sistémicos tras exposición a alérgeno, con afectación cutánea, respiratoria, circulatoria o digestiva. Puede medirse triptasa sérica en algunos casos.20",
    "datoTto": "El tratamiento inmediato es adrenalina intramuscular, soporte vital avanzado, oxígeno y fluidos. Puede requerir antihistamínicos y corticosteroides como coadyuvantes.20",
    "clinicalPearl": "Urticaria, dificultad respiratoria e hipotensión tras exposición a alérgeno: administra adrenalina intramuscular de inmediato.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "081",
    "term": "Definir brevemente: Intoxicación por paracetamol",
    "definition": "Ingesta de dosis tóxicas de paracetamol que puede causar daño hepático grave.",
    "datoDx": "Anamnesis con ingesta >4g/día o dosis tóxicas agudas, evaluación de niveles séricos de paracetamol entre 4-24 horas post-ingesta utilizando nomograma de Rumack-Matthew y pruebas hepáticas para detectar daño.",
    "datoTto": "Administración temprana de N-acetilcisteína para prevenir hepatotoxicidad, soporte vital y seguimiento de función hepática.",
    "clinicalPearl": "Ingesta aguda >7.5 g en adulto: mide niveles plasmáticos y administra N-acetilcisteína precozmente.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "082",
    "term": "Definir brevemente: Estado asmático",
    "definition": "Crisis de asma grave que no responde a tratamento inicial y pone en riesgo la vida.",
    "datoDx": "Diagnóstico clínico en paciente con crisis asmática grave que no responde a tratamiento habitual, con signos de insuficiencia respiratoria, hipoxemia y posible alteración del estado de conciencia. Se evalúa con gasometría arterial y monitoreo constante.",
    "datoTto": "Urgencia médica con broncodilatadores nebulizados repetidos, corticosteroides sistémicos, oxígeno suplementario, y manejo en unidad de cuidados intensivos si es necesario. Monitorización y soporte ventilatorio en casos severos.",
    "clinicalPearl": "Disnea intensa, uso de músculos accesorios y silencio auscultatorio: sospecha estado asmático, requiere tratamento urgente y posible intubación.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "083",
    "term": "Definir brevemente: Hipoglucemia severa",
    "definition": "Descenso de glucosa plasmática a niveles peligrosamente bajos, con alteración de conciencia o convulsiones.",
    "datoDx": "Se define por niveles muy bajos de glucosa (<4 mg/dL) acompañados de alteración de conciencia o incapacidad para autoadministrarse carbohidratos, confirmada con medición urgente de glucemia.",
    "datoTto": "Glucosa intravenosa inmediata o glucagón en caso de que no haya acceso venoso. Posterior ajuste de tratamiento para evitar recurrencias.",
    "clinicalPearl": "Paciente diabético inconsciente o convulsivo: administra glucosa intravenosa sin demora.",
    "rotation": "Urgencias",
    "difficulty": "media"
  },
  {
    "id": "084",
    "term": "Definir brevemente: Hemorragia digestiva alta",
    "definition": "Sangrado proveniente del tracto digestivo proximal al ángulo de Treitz.",
    "datoDx": "El diagnóstico implica historia clínica de hematemesis o melena, con estabilización hemodinámica inicial. La endoscopia digestiva alta es el método clave para identificar la fuente y tratarla mediante técnicas endoscópicas.",
    "datoTto": "Soporte con fluidos, transfusiones si es necesario, inhibidores de bomba de protones intravenosos y tratamiento endoscópico (inyección, coagulación, clips). En casos severos, intervenciones radiológicas o quirúrgicas pueden ser requeridas.",
    "clinicalPearl": "Vómito en poso de café o melenas: sospecha hemorragia digestiva alta, estabiliza hemodinámicamente y solicita endoscopia urgente.",
    "rotation": "Urgencias",
    "difficulty": "alta"
  },
  {
    "id": "085",
    "term": "Definir brevemente: Hernia umbilical",
    "definition": "Protrusión de contenido abdominal a través del anillo umbilical, frecuente en niños y adultos obesos.",
    "datoDx": "Diagnóstico clínico con protrusión en región umbilical evidente con maniobras de aumento de presión intraabdominal. En adultos o dudas, se confirma con ecografía.",
    "datoTto": "En lactantes la mayoría se resuelven espontáneamente. En adultos, reparación quirúrgica recomendada para evitar complicaciones.",
    "clinicalPearl": "Masa umbilical blanda que aumenta con la tos o esfuerzo: sospecha hernia umbilical, valora cirugía si es sintomática o complicada.",
    "rotation": "Cirugía General",
    "difficulty": "baja"
  },
  {
    "id": "086",
    "term": "Definir brevemente: Hernia incisional",
    "definition": "Protrusión de vísceras a través de una cicatriz quirúrgica previa en la pared abdominal.",
    "datoDx": "Se diagnostica por la aparición de una masa en zona de cicatriz quirúrgica, confirmada con ecografía o TAC abdominal que evalúa tamaño y contenido.",
    "datoTto": "Reparación quirúrgica con o sin malla según tamaño, síntomas y riesgo de complicaciones.",
    "clinicalPearl": "Masa en zona de cicatriz abdominal que aumenta al esfuerzo: sospecha hernia incisional, riesgo de incarceración.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "087",
    "term": "Definir brevemente: Hernia femoral",
    "definition": "Protrusión de contenido abdominal a través del canal femoral, más frecuente en mujeres.",
    "datoDx": "Diagnóstico clínico con protrusión palpable en canal femoral, confirmada con ecografía o TAC si hay duda. Se valora signos de incarceración o estrangulación.",
    "datoTto": "La corrección quirúrgica es la única opción, preferiblemente mediante técnicas mínimamente invasivas para prevenir complicaciones.",
    "clinicalPearl": "Masa dolorosa bajo el ligamento inguinal en mujer mayor: sospecha hernia femoral, alto riesgo de estrangulación.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "088",
    "term": "Definir brevemente: Fisura anal",
    "definition": "Desgarro lineal en el anodermo, habitualmente en la línea media posterior.",
    "datoDx": "Diagnóstico clínico por dolor intenso durante la defecación y sangrado rojo vivo; visualización directa en la zona anorrectal.",
    "datoTto": "Medidas conservadoras con higiene adecuada, baños de asiento y uso de vasodilatadores tópicos o botox; cirugía en casos crónicos o refractarios.",
    "clinicalPearl": "Dolor anal intenso y sangrado tras la defecación: típico de fisura anal, suele mejorar con tratamento tópico.",
    "rotation": "Cirugía General",
    "difficulty": "baja"
  },
  {
    "id": "089",
    "term": "Definir brevemente: Fístula perianal",
    "definition": "Trayecto anómalo entre el canal anal y la piel perianal, generalmente secundaria a absceso previo.",
    "datoDx": "Diagnóstico basado en historia de supuración o absceso perianal, exploración física y ecografía endoanal o resonancia magnética para evaluar trayecto fistuloso.",
    "datoTto": "Tratamiento quirúrgico con fistulotomía o setones para preservar la continencia, además de tratar infecciones asociadas.",
    "clinicalPearl": "Secreción purulenta crónica por orificio perianal: sospecha fístula, requiere evaluación quirúrgica.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "090",
    "term": "Definir brevemente: Hidrocele",
    "definition": "Acumulación de líquido seroso en la túnica vaginal del testículo.",
    "datoDx": "Se detecta por tumefacción indolora del escroto, translúcida a la luz, confirmada con ecografía testicular para descartar otras masas.",
    "datoTto": "Observación si asintomático; punción o cirugía (hidrocelectomía) en casos sintomáticos o aumentos importantes.",
    "clinicalPearl": "Aumento indoloro del escroto, transluminable: sugiere hidrocele, valora cirugía si es sintomático.",
    "rotation": "Cirugía General",
    "difficulty": "baja"
  },
  {
    "id": "091",
    "term": "Definir brevemente: Quiste pilonidal",
    "definition": "Cavidad subcutánea en la región sacrococcígea con contenido de pelo y material sebáceo.",
    "datoDx": "El diagnóstico es clínico, basado en la exploración del pliegue interglúteo donde se observa una masa o pequeños orificios (pits) por donde pueden emerger pelos, a menudo acompañados de inflamación, dolor, enrojecimiento o supuración si está infectado. En casos complejos o recurrentes, se pueden utilizar ecografía o resonancia para evaluar la extensión de trayectos fistulosos.",
    "datoTto": "El tratamiento depende de la gravedad: para abscesos se realiza drenaje quirúrgico urgente. En casos crónicos o recidivantes, la extirpación del quiste y trayectos fistulosos es la opción definitiva, pudiendo dejar la herida abierta para sanar o cerrarla con sutura. Técnicas mínimamente invasivas como láser pueden emplearse en casos seleccionados. La higiene estricta y eliminación del vello previenen recurrencias.",
    "clinicalPearl": "Dolor, enrojecimiento y supuración en región sacra: sospecha quiste pilonidal, requiere drenaje si hay absceso.",
    "rotation": "Cirugía General",
    "difficulty": "baja"
  },
  {
    "id": "092",
    "term": "Definir brevemente: Úlcera gástrica perforada",
    "definition": "Rotura de una úlcera gástrica que permite la salida de contenido gástrico a la cavidad peritoneal.",
    "datoDx": "Dolor abdominal súbito intenso con signos de abdomen agudo; diagnóstico con radiografía que muestra neumoperitoneo y confirmación con TC abdominal.",
    "datoTto": "Urgencia quirúrgica para cierre de la perforación, soporte con fluidos, antibióticos de amplio espectro y manejo en unidad de cuidados intensivos.",
    "clinicalPearl": "Dolor abdominal súbito, intenso y signos de irritación peritoneal: sospecha perforación, busca neumoperitoneo en radiografía.",
    "rotation": "Cirugía General",
    "difficulty": "alta"
  },
  {
    "id": "093",
    "term": "Definir brevemente: Cáncer colorrectal",
    "definition": "Neoplasia maligna que afecta el colon o el recto, frecuente en adultos mayores.",
    "datoDx": "El diagnóstico se realiza mediante colonoscopia con biopsia de lesiones sospechosas. Los métodos complementarios incluyen pruebas de sangre oculta en heces y estudios de imagen (TC o RM) para estadificación.",
    "datoTto": "Incluye resección quirúrgica del tumor, con quimioterapia y/o radioterapia según estadio y localización. El cribado es crucial en mayores de 0 años o en pacientes con factores de riesgo.",
    "clinicalPearl": "Hematoquecia, anemia ferropénica y cambio en el ritmo intestinal en mayor de 50 años: sospecha cáncer colorrectal, solicita colonoscopia.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "094",
    "term": "Definir brevemente: Eventración",
    "definition": "Protrusión de vísceras abdominales a través de una dehiscencia de la pared abdominal, generalmente en el postoperatorio.",
    "datoDx": "Diagnóstico por imagen (radiografía y tomografía computarizada) que muestra protrusión anormal de contenido abdominal a través de un defecto en la pared o diafragma.",
    "datoTto": "Reparación quirúrgica según tamaño y síntomas, con técnicas reconstructivas para restablecer la integridad de la pared abdominal o diafragmática.",
    "clinicalPearl": "Masa blanda en herida quirúrgica recente, que aumenta con la tos: sospecha eventración, requiere valoración quirúrgica.",
    "rotation": "Cirugía General",
    "difficulty": "media"
  },
  {
    "id": "095",
    "term": "Definir brevemente: Insuficiencia cardíaca congestiva",
    "definition": "Síndrome clínico caracterizado por la incapacidad del corazón para bombear sangre suficiente para satisfacer las necesidades del organismo.",
    "datoDx": "La evaluación incluye historia clínica de disnea, edema y fatiga, exploración física y pruebas complementarias como ecocardiograma para medir función ventricular y radiografía de tórax.",
    "datoTto": "Tratamiento con diuréticos, inhibidores del sistema renina-angiotensina, betabloqueadores, antagonistas de aldosterona y manejo de causas y comorbilidades. Educación y control clínico multidisciplinario.",
    "clinicalPearl": "Disnea de esforzo, ortopnea y edemas periféricos: sospecha insuficiencia cardíaca, busca crepitantes y cardiomegalia.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "096",
    "term": "Definir brevemente: Fibrilación auricular",
    "definition": "Arritmia supraventricular caracterizada por ritmo irregularmente irregular y ausencia de ondas P.",
    "datoDx": "Diagnóstico mediante electrocardiograma que muestra ritmo auricular rápido, irregular, sin ondas P distinguibles y respuesta ventricular irregular.",
    "datoTto": "Control del ritmo o frecuencia con fármacos, anticoagulación para prevención de tromboembolismo según riesgo, y en casos adecuados, cardioversión eléctrica o ablación.",
    "clinicalPearl": "Palpitaciones irregulares y pulso arrítmico: piensa en fibrilación auricular, confirma con ECG.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "097",
    "term": "Definir brevemente: Bloqueo auriculoventricular completo",
    "definition": "Interrupción total de la conducción entre aurículas y ventrículos, con disociación AV.",
    "datoDx": "El ECG muestra disociación completa entre ondas P y complejos QRS, con ritmo de escape ventricular o nodal. Puede ser congénito o adquirido y sospecharse ante bradicardia sintomática.",
    "datoTto": "La colocación de un marcapasos definitivo es el tratamiento de elección en la mayoría de los casos sintomáticos o con riesgo de complicaciones.",
    "clinicalPearl": "Bradicardia marcada, síncope y disociación entre P y QRS: sospecha bloqueo AV completo, pode requerir marcapasos.",
    "rotation": "Cardiología",
    "difficulty": "alta"
  },
  {
    "id": "098",
    "term": "Definir brevemente: Síndrome coronario agudo sin elevación del ST (SCASEST)",
    "definition": "Isquemia miocárdica aguda sin elevación persistente del segmento ST en el ECG.",
    "datoDx": "Se diagnostica con clínica de dolor torácico compatible, sin elevación del segmento ST en ECG, y con elevación de biomarcadores cardíacos (troponinas). El estudio complementario incluye ecocardiograma y prueba de esfuerzo o angiografía coronaria para evaluar la extensión del daño.",
    "datoTto": "Tratamiento médico con antiagregantes plaquetarios, anticoagulantes, betabloqueadores, estatinas y control estrecho. En casos de alto riesgo, intervenciones coronarias percutáneas según indicación.",
    "clinicalPearl": "Dolor torácico opresivo en reposo, ECG con infradesnivel del ST o T negativa: sospecha SCASEST, pide troponinas.",
    "rotation": "Cardiología",
    "difficulty": "alta"
  },
  {
    "id": "099",
    "term": "Definir brevemente: Pericarditis aguda",
    "definition": "Inflamación del pericardio, generalmente de origen viral.",
    "datoDx": "Clínica de dolor torácico pleurítico que mejora sentado, roce pericárdico en la auscultación. ECG con elevación difusa del segmento ST y derrame pericárdico en ecocardiograma.",
    "datoTto": "Antiinflamatorios (AINEs) y colchicina como base. En casos recurrentes o severos, corticosteroides. Monitorización para detectar complicaciones como taponamiento.",
    "clinicalPearl": "Dolor torácico que mejora al inclinarse hacia adelante y frotes pericárdicos: típico de pericarditis, busca elevación difusa del ST.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "100",
    "term": "Definir brevemente: Miocardiopatía dilatada",
    "definition": "Enfermedad cardíaca caracterizada por dilatación y disfunción sistólica del ventrículo izquierdo.",
    "datoDx": "Clínica de insuficiencia cardíaca, ecocardiograma mostrando dilatación ventricular izquierda y descenso en fracción de eyección, descartando otras causas estructurales o isquémicas.",
    "datoTto": "Manejo similar a insuficiencia cardíaca con inhibidores de la enzima convertidora, betabloqueadores, diuréticos y dispositivos en casos seleccionados; posible trasplante en enfermedad avanzada.",
    "clinicalPearl": "Disnea progresiva, cardiomegalia y bajo gasto cardíaco: sospecha miocardiopatía dilatada, descarta causas reversibles.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "101",
    "term": "Definir brevemente: Estenosis aórtica",
    "definition": "Obstrucción al flujo sanguíneo desde el ventrículo izquierdo hacia la aorta por estrechamiento valvular.",
    "datoDx": "Sospecha clínica con soplo cardíaco sistólico en foco aórtico, confirmada con ecocardiografía que evalúa gradiente de presión y área valvular. Puede complementarse con ECG y radiografía de tórax.",
    "datoTto": "Seguimiento en casos leves, y sustitución valvular (quirúrgica o percutánea) en estenosis severa sintomática o disfunción ventricular.",
    "clinicalPearl": "Síncope, angina y disnea de esfuerzo en anciano: triada clásica de estenosis aórtica severa.",
    "rotation": "Cardiología",
    "difficulty": "alta"
  },
  {
    "id": "102",
    "term": "Definir brevemente: Endocarditis infecciosa",
    "definition": "Infección de las válvulas cardíacas o endocardio, generalmente por bacterias.",
    "datoDx": "El diagnóstico requiere hemocultivos positivos para aislamiento del microorganismo en al menos dos muestras separadas, junto con ecocardiografía (preferiblemente transesofágica) que visualiza vegetaciones, abscesos o regurgitación valvular. Se aplican criterios clínicos como los modificados de Duke-202 para confirmar el diagnóstico.",
    "datoTto": "El tratamiento consiste en antibioticoterapia intravenosa prolongada (generalmente 4- semanas) ajustada al microorganismo y su sensibilidad. Puede requerirse cirugía valvular en casos de insuficiencia cardíaca grave, abscesos, embolias o fracaso terapéutico, además de manejo integral de focos infecciosos y cuidados multidisciplinarios.",
    "clinicalPearl": "Fiebre prolongada, soplo nuevo y fenómenos embólicos: sospecha endocarditis, busca hemocultivos positivos.",
    "rotation": "Cardiología",
    "difficulty": "alta"
  },
  {
    "id": "103",
    "term": "Definir brevemente: Síndrome de Wolff-Parkinson-White",
    "definition": "Trastorno de preexcitación cardíaca por vía accesoria, que puede causar taquiarritmias.",
    "datoDx": "Diagnóstico electrocardiográfico caracterizado por onda delta, intervalo PR corto y QRS ancho, asociado a síntomas de taquicardia paroxística.",
    "datoTto": "Manejo con medicamentos antiarrítmicos y ablación por catéter en casos sintomáticos o con riesgo de complicaciones.",
    "clinicalPearl": "Palpitaciones paroxísticas y ECG con onda delta: típico de WPW, evita bloqueadores AV en taquicardia.",
    "rotation": "Cardiología",
    "difficulty": "media"
  },
  {
    "id": "104",
    "term": "Definir brevemente: Miocardiopatía hipertrófica",
    "definition": "Engrosamiento anormal del miocardio, principalmente del septo interventricular, que puede causar obstrucción al flujo de salida.",
    "datoDx": "Diagnóstico ecocardiográfico de hipertrofia ventricular izquierda (particularmente septal) sin causa aparente, acompañado de síntomas y estudio genético si es posible.",
    "datoTto": "Betabloqueadores o bloqueadores de canal de calcio para síntomas, procedimientos invasivos (ablación septal, cirugía) y manejo de riesgo de muerte súbita con desfibrilador implantable.",
    "clinicalPearl": "Síncope o muerte súbita en joven deportista, soplo que aumenta con Valsalva: sospecha miocardiopatía hipertrófica.",
    "rotation": "Cardiología",
    "difficulty": "alta"
  },
  {
    "id": "105",
    "term": "Definir brevemente: Psoriasis",
    "definition": "Enfermedad inflamatoria crónica de la piel caracterizada por placas eritematosas con descamación plateada.",
    "datoDx": "Diagnóstico clínico basado en lesiones eritematosas y escamosas con distribución típica en codos, rodillas y cuero cabelludo. Biopsia cutánea si dudas diagnósticas.",
    "datoTto": "Incluye tratamientos tópicos (corticoides, derivados de vitamina D), fototerapia y en casos moderados a severos, tratamientos sistémicos como retinoides, inmunosupresores o biológicos.",
    "clinicalPearl": "Placas bien delimitadas en codos, rodillas y cuero cabelludo: sospecha psoriasis, busca afectación ungueal.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "106",
    "term": "Definir brevemente: Dermatitis seborreica",
    "definition": "Trastorno inflamatorio crónico que afecta áreas ricas en glándulas sebáceas, como cuero cabelludo y cara.",
    "datoDx": "Diagnóstico basado en clínica: lesiones eritemato-descamativas en zonas seborreicas (cuero cabelludo, cara, pliegues). El dermatólogo realiza exploración física y en casos de duda puede tomar muestras para descartar otras causas como psoriasis o infecciones.",
    "datoTto": "Para cuero cabelludo, champús medicados (ketoconazol, ciclopirox, ácido salicílico), y en regiones faciales, cremas antifúngicas o corticosteroides suaves. En casos severos, terapia oral y cuidado con jabones neutros.",
    "clinicalPearl": "Escamas amarillentas y prurito en cuero cabelludo, cejas y pliegues nasolabiales: típico de dermatitis seborreica.",
    "rotation": "Dermatología",
    "difficulty": "baja"
  },
  {
    "id": "107",
    "term": "Definir brevemente: Melanoma",
    "definition": "Neoplasia maligna de los melanocitos, potencialmente mortal por su alta capacidad metastásica.",
    "datoDx": "Diagnóstico clínico y dermatoscópico de lesión pigmentada con criterios ABCDE, confirmado con biopsia excisional. Se realiza estadificación con estudio de ganglios y posible imagen para metástasis.",
    "datoTto": "Resección quirúrgica con márgenes amplios. En estadios avanzados se usan inmunoterapia, terapia dirigida y radioterapia. Importante prevención con protección solar y autoexploración.",
    "clinicalPearl": "Lesión pigmentada asimétrica, bordes irregulares y cambios de color: sospecha melanoma, realiza biopsia excisional.",
    "rotation": "Dermatología",
    "difficulty": "alta"
  },
  {
    "id": "108",
    "term": "Definir brevemente: Carcinoma basocelular",
    "definition": "Tumor cutáneo maligno de crecimiento lento, derivado de las células basales de la epidermis.",
    "datoDx": "El diagnóstico es clínico (lesión perlada, ulcerada) y se confirma con biopsia cutánea. La dermatoscopía puede ser útil para mejorar la sensibilidad diagnóstica.",
    "datoTto": "Escisión quirúrgica con márgenes adecuados. En casos seleccionados, alternativas como crioterapia, terapia fotodinámica o tratamientos tópicos.",
    "clinicalPearl": "Nódulo perlado con telangiectasias en zonas fotoexpuestas: sospecha carcinoma basocelular, requiere extirpación.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "109",
    "term": "Definir brevemente: Carcinoma epidermoide cutáneo",
    "definition": "Neoplasia maligna de queratinocitos, frecuente en áreas expuestas al sol.",
    "datoDx": "Diagnóstico mediante biopsia de una lesión cutánea ulcerada o proliferativa, generalmente en áreas fotoexpuestas, y evaluación de ganglios regionales.",
    "datoTto": "Escisión quirúrgica con márgenes amplios. Radioterapia en casos seleccionados o invasivos, y seguimiento estrecho para detectar recaídas.",
    "clinicalPearl": "Úlcera o placa indurada en piel expuesta al sol, de crecimiento rápido: sospecha carcinoma epidermoide.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "110",
    "term": "Definir brevemente: Acné vulgar",
    "definition": "Enfermedad inflamatoria de la unidad pilosebácea, frecuente en adolescentes.",
    "datoDx": "El diagnóstico es clínico por presencia de comedones, pápulas, pústulas o nódulos en áreas típicas. Puede clasificarse según gravedad (leve, moderado, grave) para orientar el tratamiento, diferenciándose de otras dermatosis (p.ej., rosácea).",
    "datoTto": "Se usan retinoides tópicos para casos leves, antibióticos tópicos o sistémicos y peróxido de benzoilo para inflamatorios; casos graves pueden requerir isotretinoína oral. El tratamiento se personaliza según severidad y respuesta.",
    "clinicalPearl": "Comedones, pápulas y pústulas en cara y tronco en adolescente: típico de acné vulgar, evalúa severidad para tratamento.",
    "rotation": "Dermatología",
    "difficulty": "baja"
  },
  {
    "id": "111",
    "term": "Definir brevemente: Eczema atópico",
    "definition": "Enfermedad inflamatoria crónica de la piel con prurito y eccema, frecuente en niños con antecedentes alérgicos.",
    "datoDx": "Diagnóstico clínico, similar a la dermatitis atópica, por lesiones crónicas recidivantes, pruriginosas, con antecedentes de atopia. Se descartan otras patologías cutáneas por exploración y evolución.",
    "datoTto": "Hidratación diaria, corticoides tópicos en brotes y evitar desencadenantes. En casos graves, inmunomoduladores tópicos o fototerapia.",
    "clinicalPearl": "Lesiones eccematosas en pliegues y prurito intenso en niño: sospecha eczema atópico, pregunta por asma o rinitis.",
    "rotation": "Dermatología",
    "difficulty": "baja"
  },
  {
    "id": "112",
    "term": "Definir brevemente: Urticaria aguda",
    "definition": "Reacción cutánea caracterizada por habones pruriginosos y transitorios.",
    "datoDx": "Diagnóstico clínico por aparición súbita de habones pruriginosos con o sin angioedema, generalmente autolimitada en menos de semanas.",
    "datoTto": "Antihistamínicos H de segunda generación como primera línea. En casos severos o con angioedema, corticosteroides orales a corto plazo. Evitar desencadenantes conocidos.",
    "clinicalPearl": "Habones migratorios, pruriginosos y de menos de 24 horas de duración: típico de urticaria aguda, busca desencadenante.",
    "rotation": "Dermatología",
    "difficulty": "baja"
  },
  {
    "id": "113",
    "term": "Definir brevemente: Vitiligo",
    "definition": "Trastorno adquirido de despigmentación cutánea por destrucción de melanocitos.",
    "datoDx": "Diagnóstico clínico por presencia de máculas despigmentadas bien delimitadas en la piel, confirmados con luz de Wood y examen dermatológico.",
    "datoTto": "Tratamiento con fototerapia UVB, corticosteroides tópicos o inhibidores de calcineurina, y en casos extensos, despigmentación o terapia combinada para repigmentación.",
    "clinicalPearl": "Manchas acrómicas bien delimitadas, simétricas, en dorso de manos y cara: sospecha vitiligo, asocia enfermedades autoinmunes.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "114",
    "term": "Definir brevemente: Eritema multiforme",
    "definition": "Reacción cutánea aguda caracterizada por lesiones en diana, a menudo desencadenada por infecciones o fármacos.",
    "datoDx": "Se diagnostica clínicamente por la presencia de lesiones en diana o iris características en piel, con posible afectación mucosa. La historia clínica debe buscar infecciones previas (como herpes simple) o medicamentos desencadenantes.",
    "datoTto": "El tratamiento incluye manejo de la causa subyacente (antivirales en herpes), corticoides tópicos o sistémicos en casos moderados a severos, y soporte sintomático para aliviar prurito y dolor.",
    "clinicalPearl": "Lesiones en diana, simétricas, en palmas y plantas tras infección herpética: típico de eritema multiforme menor.",
    "rotation": "Dermatología",
    "difficulty": "media"
  },
  {
    "id": "115",
    "term": "Definir brevemente: Diabetes insípida",
    "definition": "Trastorno caracterizado por poliuria y polidipsia debido a déficit de vasopresina o resistencia renal a su acción.",
    "datoDx": "Pruebas de privación de agua y administración de vasopresina para diferenciar subtipos; análisis de orina (osmolaridad baja) y sangre (electrolitos), RM de encéfalo para descartar alteraciones hipotalámicas/hipofisarias; pruebas genéticas en casos familiares.",
    "datoTto": "En diabetes insípida central: desmopresina intranasal/oral. En nefrogénica: dieta baja en sal, tiazidas y corrección de la causa. Hidratación adecuada en todos los casos.20",
    "clinicalPearl": "Paciente con gran volumen urinario diluido y sodio elevado: sospecha diabetes insípida, diferencia central de nefrogénica con test de desmopresina.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "116",
    "term": "Definir brevemente: Hipotiroidismo",
    "definition": "Déficit de hormonas tiroideas que provoca enlentecimiento metabólico generalizado.",
    "datoDx": "Confirmado por síntomas clínicos y laboratorio con TSH elevada y T4 libre baja. Anticuerpos antitiroideos pueden identificar etiología autoinmune.",
    "datoTto": "Tratamiento sustitutivo con levotiroxina, ajustando dosis según TSH y clínica de forma individualizada.",
    "clinicalPearl": "Fatiga, aumento de peso y piel seca en adulto: pide TSH y T4, descarta hipotiroidismo, especialmente en mujeres.",
    "rotation": "Endocrinología",
    "difficulty": "baja"
  },
  {
    "id": "117",
    "term": "Definir brevemente: Feocromocitoma",
    "definition": "Tumor de la médula suprarrenal que produce catecolaminas en exceso.",
    "datoDx": "Diagnóstico bioquímico con medición de metanefrinas plasmáticas o catecolaminas en orina, seguido de estudios de imagen (TC o RM) para localizar el tumor.",
    "datoTto": "Resección quirúrgica tras estabilización preoperatoria con bloqueadores alfa y beta para controlar la hipertensión.",
    "clinicalPearl": "Crisis de hipertensión, cefalea, sudoración y palpitaciones: sospecha feocromocitoma, mide metanefrinas en orina.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "118",
    "term": "Definir brevemente: Acromegalia",
    "definition": "Exceso de hormona de crecimiento en adultos, generalmente por adenoma hipofisario.",
    "datoDx": "Se diagnostica midiendo IGF-1 sérico, pruebas de supresión de GH y RM cerebral para visualizar adenoma hipofisario. Se complementa con evaluación de comorbilidades.",
    "datoTto": "El tratamiento de elección es la cirugía transesfenoidal del adenoma. Si persiste actividad hormonal, se emplean análogos de somatostatina, agonistas dopaminérgicos, antagonistas del receptor de GH o radioterapia.",
    "clinicalPearl": "Crecimiento de manos, pies y rasgos faciales toscos: sospecha acromegalia, mide IGF-1 y solicita RM hipofisaria.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "119",
    "term": "Definir brevemente: Hipoparatiroidismo",
    "definition": "Déficit de hormona paratiroidea que causa hipocalcemia y alteraciones neuromusculares.",
    "datoDx": "Se diagnostica ante calcio sérico bajo con PTH inadecuadamente baja. Evaluación de fósforo y magnesio, además de historia clínica de cirugía o enfermedades autoinmunes.",
    "datoTto": "Suplementos de calcio y vitamina D activa (calcitriol), con monitorización de niveles séricos para evitar hipercalcemia o nefrocalcinosis.",
    "clinicalPearl": "Tetania, parestesias y signo de Chvostek tras cirugía cervical: sospecha hipoparatiroidismo, revisa calcio y PTH.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "120",
    "term": "Definir brevemente: Síndrome metabólico",
    "definition": "Conjunto de factores de risco cardiovascular: obesidad central, dislipidemia, hipertensión y resistencia a la insulina.",
    "datoDx": "Se basa en la presencia de tres o más criterios como obesidad central, hipertensión arterial, niveles elevados de glucosa en ayunas, triglicéridos altos y HDL bajo en perfil lipídico.",
    "datoTto": "Modificación del estilo de vida con dieta saludable, ejercicio y control de factores de riesgo (hipertensión, dislipidemia, glucemia). En casos, tratamiento farmacológico específico para cada alteración.",
    "clinicalPearl": "Obesidad abdominal, triglicéridos altos y glucosa alterada: piensa en síndrome metabólico, interviene con dieta y ejercicio.",
    "rotation": "Endocrinología",
    "difficulty": "baja"
  },
  {
    "id": "121",
    "term": "Definir brevemente: Prolactinoma",
    "definition": "Adenoma hipofisario productor de prolactina, causa más frecuente de hiperprolactinemia.",
    "datoDx": "Síntomas de hiperprolactinemia (galactorrea, amenorrea) y niveles elevados de prolactina sérica. Confirmación con resonancia magnética cerebral mostrando adenoma hipofisario.",
    "datoTto": "Agonistas dopaminérgicos (cabergolina, bromocriptina) como primera línea. Cirugía o radioterapia en casos resistentes o con adenomas grandes.",
    "clinicalPearl": "Amenorrea y galactorrea en mujer joven: sospecha prolactinoma, solicita prolactina y RM cerebral.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "122",
    "term": "Definir brevemente: Síndrome de Addison",
    "definition": "Insuficiencia suprarrenal primaria por destrucción autoinmune de la corteza suprarrenal.",
    "datoDx": "Diagnóstico por clínica de insuficiencia suprarrenal primaria (fatiga, hiperpigmentación, pérdida de peso, hipotensión), con confirmación bioquímica de cortisol bajo y ACTH elevada, y prueba de estimulación con ACTH para diferenciar insuficiencia primaria de secundaria.",
    "datoTto": "Sustitución hormonal con glucocorticoides (hidrocortisona) y mineralocorticoides (fludrocortisona), ajuste en situaciones de estrés y seguimiento clínico.",
    "clinicalPearl": "Hipotensión, hiperpigmentación y pérdida de peso: sospecha Addison, confirma con cortisol y ACTH.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "123",
    "term": "Definir brevemente: Diabetes mellitus tipo 1",
    "definition": "Destrucción autoinmune de células beta pancreáticas, con déficit absoluto de insulina.",
    "datoDx": "Sospecha clínica (poliuria, polidipsia, adelgazamiento), confirmada con glucemias elevadas y autoanticuerpos pancreáticos positivos (GAD, IA2). Se solicita hemoglobina glicosilada y perfil metabólico.",
    "datoTto": "Insulina exógena en régimen intensivo, educación diabetológica, automonitoreo glucémico y manejo integral de posibles complicaciones.",
    "clinicalPearl": "Poliuria, polidipsia y adelgazamiento rápido en niño o adolescente: sospecha DM1, busca cetonas en orina.",
    "rotation": "Endocrinología",
    "difficulty": "media"
  },
  {
    "id": "124",
    "term": "Definir brevemente: Hipercalcemia por malignidad",
    "definition": "Elevación del calcio sérico secundaria a tumores productores de PTHrP o metástasis óseas.",
    "datoDx": "Se diagnostica con niveles séricos elevados de calcio acompañados de signos y síntomas sistémicos, con antecedentes o evidencia de neoplasia. Se realizan pruebas para identificar causa (PTH, PTHrP, fosfatos, fósforo).",
    "datoTto": "Hidratación con líquidos intravenosos, bisfosfonatos, calcitonina y tratamiento de la neoplasia subyacente. Monitorización estrecha para complicaciones.",
    "clinicalPearl": "Debilidad, vómitos y confusión en paciente oncológico: mide calcio, descarta hipercalcemia por malignidad.",
    "rotation": "Endocrinología",
    "difficulty": "alta"
  },
  {
    "id": "125",
    "term": "Definir brevemente: Hepatitis viral aguda",
    "definition": "Inflamación aguda del hígado causada por infecciones virales como hepatitis A, B o C.",
    "datoDx": "Diagnóstico basado en clínica de ictericia, fatiga y alteración de enzimas hepáticas (ALT, AST elevadas). Serología específica detecta virus causales (HAV, HBV, HCV, HEV).",
    "datoTto": "Tratamiento principalmente de soporte, evitar hepatotóxicos, manejar síntomas y vigilancia para complicaciones. En algunos casos específicos de hepatitis B o C se indica terapia antiviral.",
    "clinicalPearl": "Ictericia, astenia y elevación de transaminasas en joven: sospecha hepatitis viral, pregunta por viajes y contacto con enfermos.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "126",
    "term": "Definir brevemente: Cirrosis hepática",
    "definition": "Enfermedad crónica e irreversible del hígado caracterizada por fibrosis y nódulos de regeneración.",
    "datoDx": "Clínica e historia de hepatopatía crónica, identificado por laboratorio (enzimas hepáticas, albúmina baja, coagulación alterada) e imagen (ecografía, elastografía). La biopsia es el método definitivo si existe duda diagnóstica.",
    "datoTto": "Manejo de complicaciones (ascitis, varices esofágicas, encefalopatía), prevención de hepatocarcinoma y trasplante hepático en etapas avanzadas. Abstinencia de alcohol y tratamiento etiológico en casos específicos.",
    "clinicalPearl": "Ascitis, edemas y encefalopatía en paciente con antecedentes de alcoholismo: sospecha cirrosis, busca estigmas hepáticos.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "127",
    "term": "Definir brevemente: Hemorragia digestiva baja",
    "definition": "Sangrado proveniente del tracto digestivo distal al ángulo de Treitz, generalmente colon o recto.",
    "datoDx": "Se sospecha por rectorragia o melenas con origen distal; la colonoscopia es esencial para identificar la causa, complementada con estudios de imagen según sea necesario.",
    "datoTto": "Depende de la causa: manejo endoscópico, medicamentos o cirugía. Soporte hemodinámico y transfusiones son fundamentales en sangrados importantes.",
    "clinicalPearl": "Hematochezia en paciente mayor: descarta diverticulosis, angiodisplasia o cáncer colorrectal con colonoscopia.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "128",
    "term": "Definir brevemente: Enfermedad celíaca",
    "definition": "Enteropatía autoinmune inducida por gluten en personas genéticamente predispuestas.",
    "datoDx": "Se realiza mediante serología (anticuerpos anti-transglutaminasa tisular IgA y anticuerpos antiendomisio) y se confirma con biopsia duodenal mostrando atrofia vellosa y linfocitos intraepiteliales en pacientes con dieta con gluten.",
    "datoTto": "Dieta estricta sin gluten de por vida es el único tratamiento efectivo, con seguimiento clínico y de marcadores serológicos para evaluar la respuesta.",
    "clinicalPearl": "Diarrea crónica, pérdida de peso y anemia ferropénica inexplicada: considera enfermedad celíaca, pide anticuerpos específicos.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "129",
    "term": "Definir brevemente: Colangitis aguda",
    "definition": "Infección de la vía biliar secundaria a obstrucción, generalmente por litiasis.",
    "datoDx": "Triada de Charcot (fiebre, dolor en hipocondrio derecho e ictericia) y confirmación por laboratorio (colestasis, leucocitosis) y ecografía abdominal o colangiorresonancia para visualizar obstrucción biliar.",
    "datoTto": "Antibioticoterapia de amplio espectro y drenaje de la vía biliar (habitualmente por CPRE). Estabilización hemodinámica y soporte intensivo según gravedad.",
    "clinicalPearl": "Fiebre, ictericia y dolor en hipocondrio derecho (tríada de Charcot): sospecha colangitis, requiere antibióticos y drenaje biliar.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "130",
    "term": "Definir brevemente: Enfermedad inflamatoria intestinal",
    "definition": "Trastornos crónicos del tracto gastrointestinal como la colitis ulcerosa y la enfermedad de Crohn.",
    "datoDx": "Comprende Crohn y colitis ulcerosa. Se diagnostica con clínica, endoscopía con biopsia, y estudios imagenológicos. La diferenciación es clave para tratamiento y pronóstico.",
    "datoTto": "Tratamiento con antiinflamatorios, inmunomoduladores y biológicos. Cirugía en casos complicados o refractarios, más seguimiento estrecho multidisciplinario.",
    "clinicalPearl": "Diarrea con sangre y dolor abdominal recurrente en joven: sospecha EII, solicita colonoscopia y biopsia.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "131",
    "term": "Definir brevemente: Gastritis aguda",
    "definition": "Inflamación aguda de la mucosa gástrica, comúnmente por AINEs, alcohol o infecciones.",
    "datoDx": "El diagnóstico se basa en la clínica de dolor o malestar epigástrico, náuseas y vómitos. Se confirma mediante endoscopia digestiva alta que permite observar inflamación o erosiones de la mucosa gástrica y tomar biopsias para detectar Helicobacter pylori o descartar malignidad. Pruebas no invasivas incluyen test de aliento, análisis de heces o serología para Helicobacter pylori. En algunos casos, radiografía con bario puede ayudar a evaluar anomalías.",
    "datoTto": "El tratamiento incluye inhibidores de la bomba de protones para reducir la secreción ácida, antiácidos para neutralizar el ácido y proteger la mucosa, y antibióticos si se confirma infección por Helicobacter pylori (triple terapia con IBP, amoxicilina y claritromicina). Se recomienda evitar irritantes como alcohol, cafeína y AINEs, además de medidas dietéticas suaves durante la recuperación.",
    "clinicalPearl": "Dolor epigástrico y náuseas tras consumo de AINEs o alcohol: sospecha gastritis aguda, suspende el agente causal.",
    "rotation": "Gastroenterología",
    "difficulty": "baja"
  },
  {
    "id": "132",
    "term": "Definir brevemente: Úlcera péptica",
    "definition": "Lesión en la mucosa gástrica o duodenal por desequilibrio entre factores agresivos y defensivos.",
    "datoDx": "Clínica de dolor epigástrico, confirmado con endoscopia digestiva alta con visualización y biopsia de la lesión. Test para Helicobacter pylori para diagnóstico etiológico.",
    "datoTto": "IBP para disminuir acidez gástrica, erradicación de Helicobacter pylori si se detecta, y evitar factores irritantes (AINEs, tabaco, alcohol).",
    "clinicalPearl": "Dolor epigástrico que mejora o empeora con la ingesta: sospecha úlcera, busca H. pylori y descarta uso de AINEs.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "133",
    "term": "Definir brevemente: Colitis pseudomembranosa",
    "definition": "Inflamación colónica causada por toxinas de Clostridioides difficile, asociada a uso de antibióticos.",
    "datoDx": "Sospecha clínica en pacientes con diarrea tras antibióticos, confirmada por toxinas de Clostridioides difficile en heces o detección molecular, y en casos graves, colonoscopia muestra pseudomembranas.",
    "datoTto": "Administración de vancomicina o fidaxomicina oral; suspender antibióticos desencadenantes. En casos graves considerar trasplante fecal.",
    "clinicalPearl": "Diarrea acuosa y fiebre tras antibióticos: sospecha colitis por C. difficile, solicita toxina en heces.",
    "rotation": "Gastroenterología",
    "difficulty": "media"
  },
  {
    "id": "134",
    "term": "Definir brevemente: Poliposis adenomatosa colorrectal",
    "definition": "Presencia de múltiples pólipos adenomatosos en colon y recto, con alto riesgo de malignización.",
    "datoDx": "Historia familiar o clínica con múltiples pólipos adenomatosos detectados en colonoscopía. Confirmación genética para mutación en APC.",
    "datoTto": "Vigilancia endoscópica intensiva, cirugía profiláctica (colectomía), asesoramiento genético y seguimiento familiar.",
    "clinicalPearl": "Antecedentes familiares y hallazgo de múltiples pólipos en colonoscopia: sospecha poliposis adenomatosa, requiere seguimiento estrecho.",
    "rotation": "Gastroenterología",
    "difficulty": "alta"
  },
  {
    "id": "135",
    "term": "Definir brevemente: Hipertensión arterial esencial",
    "definition": "Elevación persistente de la presión arterial sin causa secundaria identificable.",
    "datoDx": "Se diagnostica mediante múltiples mediciones repetidas de presión arterial (≥40/0 mmHg en consulta o valores menores fuera de consulta con monitorización ambulatoria o automedición domiciliaria) descartando causas secundarias. Incluye historia clínica detallada, exploración física y pruebas básicas para descartar daño en órganos diana y factores de riesgo cardiovascular.",
    "datoTto": "El tratamiento combina cambios en el estilo de vida (reducción de sal, control peso, ejercicio regular, moderación de alcohol, dejar de fumar) y, si es necesario, farmacoterapia antihipertensiva con inhibidores de la enzima convertidora de angiotensina, bloqueadores de receptores, diuréticos, betabloqueadores o bloqueadores de calcio. La estrategia favorece el control rápido y sostenido con combinaciones de fármacos en un solo comprimido para reducir riesgos cardiovasculares.",
    "clinicalPearl": "Confirma hipertensión con varias mediciones en días distintos antes de iniciar tratamento.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "136",
    "term": "Definir brevemente: Dislipidemia",
    "definition": "Alteración de los niveles de lípidos en sangre, principalmente colesterol y triglicéridos.",
    "datoDx": "Identificación con perfil lipídico en ayunas (colesterol total, LDL, HDL, triglicéridos); valorar causas secundarias y riesgo cardiovascular global.",
    "datoTto": "Modificación de hábitos (dieta, ejercicio, no fumar). Cuando no se alcanza objetivo, tratamiento farmacológico con estatinas, y en casos seleccionados, ezetimiba o inhibidores de PCSK.",
    "clinicalPearl": "Paciente asintomático con colesterol total elevado: valora risco cardiovascular global antes de tratar.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "137",
    "term": "Definir brevemente: Obesidad",
    "definition": "Exceso de tejido adiposo que incrementa el risco de enfermedades crónicas.",
    "datoDx": "El diagnóstico de la obesidad se basa en la medición del Índice de Masa Corporal (IMC) ≥0 kg/m², complementado con la evaluación del perímetro de cintura para valorar distribución grasa y riesgo metabólico. Se deben realizar anamnesis clínica, examen físico, medición de presión arterial, evaluación de comorbilidades (diabetes, hiperlipidemias, hipertensión), y análisis de laboratorio (glucosa, lípidos, función hepática, tiroides) para valorar impacto y causas asociadas.",
    "datoTto": "El tratamiento incluye un enfoque multidisciplinario con modificaciones del estilo de vida (dieta equilibrada y adecuada, aumento de actividad física, soporte psicológico). En casos seleccionados, se consideran tratamientos farmacológicos aprobados y cirugía bariátrica para obesidad severa o con comorbilidades asociadas. Se requiere seguimiento continuo y establecimiento de metas realistas de pérdida y mantenimiento del peso para mejorar la salud general y reducir el riesgo de complicaciones.",
    "clinicalPearl": "IMC mayor de 30: intervén con dieta, ejercicio y apoyo psicológico antes de considerar fármacos.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "138",
    "term": "Definir brevemente: Síndrome gripal",
    "definition": "Cuadro clínico agudo de fiebre, mialgias, cefalea y síntomas respiratorios altos.",
    "datoDx": "Diagnóstico clínico por aparición súbita de fiebre, mialgias, cefalea, tos y malestar general, sin evidencia de foco infeccioso específico.",
    "datoTto": "Tratamiento principalmente sintomático con antipiréticos, hidratación, reposo y vigilancia para complicaciones o infecciones secundarias.",
    "clinicalPearl": "Fiebre, mialgias y tos seca en invierno: sospecha gripe, prioriza tratamento sintomático salvo factores de risco.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "139",
    "term": "Definir brevemente: Osteoporosis",
    "definition": "Enfermedad caracterizada por disminución de la masa ósea y aumento del risco de fractura.",
    "datoDx": "Se diagnostica mediante densitometría ósea que mide la densidad mineral ósea (T-score ≤ -2.). Evaluar factores de riesgo, historia de fracturas y niveles séricos de calcio, vitamina D y marcadores de remodelado óseo.",
    "datoTto": "Tratamiento con suplementos de calcio y vitamina D, cambios en estilo de vida (ejercicio, evitar tabaco y alcohol). Farmacoterapia con bisfosfonatos, denosumab u otros agentes según riesgo fracturario.",
    "clinicalPearl": "Mujer posmenopáusica con fractura por fragilidad: descarta osteoporosis con densitometría ósea.",
    "rotation": "Medicina Familiar",
    "difficulty": "media"
  },
  {
    "id": "140",
    "term": "Definir brevemente: Ansiedad generalizada",
    "definition": "Trastorno caracterizado por preocupación excesiva y persistente, difícil de controlar.",
    "datoDx": "Diagnóstico clínico basado en la presencia de ansiedad excesiva y difícil de controlar persiste durante al menos meses, acompañada de síntomas somáticos y cognitivos sin causa médica aparente.",
    "datoTto": "Incluye terapia cognitivo-conductual, junto con fármacos como inhibidores selectivos de la recaptación de serotonina (ISRS) o inhibidores de la recaptación de serotonina y noradrenalina (IRSN).",
    "clinicalPearl": "Paciente con insomnio, tensión muscular y preocupación constante: explora síntomas de ansiedad, ofrece terapia cognitivo-conductual.",
    "rotation": "Medicina Familiar",
    "difficulty": "media"
  },
  {
    "id": "141",
    "term": "Definir brevemente: Depresión mayor",
    "definition": "Trastorno del estado de ánimo con tristeza persistente, anhedonia y síntomas vegetativos.",
    "datoDx": "El diagnóstico se basa en criterios clínicos: evaluación psiquiátrica estructurada, entrevista clínica y uso de escalas validadas (Hamilton, Beck, CES-D). Es importante descartar causas orgánicas y consumo de sustancias. Los tests psicométricos apoyan la valoración de gravedad y seguimiento.4",
    "datoTto": "El tratamiento combina terapia psicológica (principalmente terapia cognitivo-conductual) y farmacológica (inhibidores selectivos de recaptura de serotonina, ISRS, u otros antidepresivos). Ajuste individual, educación al paciente y apoyo social también son clave.",
    "clinicalPearl": "Tristeza, insomnio y pérdida de interés en actividades: evalúa risco suicida y considera iniciar antidepresivos.",
    "rotation": "Medicina Familiar",
    "difficulty": "media"
  },
  {
    "id": "142",
    "term": "Definir brevemente: Insomnio",
    "definition": "Dificultad para iniciar o mantener el sueño, con repercusión diurna.",
    "datoDx": "Se diagnostica a partir de historia clínica que evalúa dificultad para iniciar o mantener el sueño, insatisfacción con la calidad del mismo y repercusión en función diurna, descartando causas médicas o psiquiátricas.",
    "datoTto": "Primero medidas higiénico-sanitarias y terapia cognitivo-conductual; en casos selectos, uso de fármacos hipnóticos a corto plazo.",
    "clinicalPearl": "Pregunta siempre por higiene del sueño antes de prescribir fármacos para insomnio.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "143",
    "term": "Definir brevemente: Cefalea tensional",
    "definition": "Dolor de cabeza opresivo, bilateral y de intensidad leve a moderada, sin síntomas de alarma.",
    "datoDx": "Diagnóstico clínico basado en dolor opresivo, bilateral, de intensidad leve a moderada, sin síntomas neurológicos acompañantes. No se requieren estudios de imagen salvo que haya signos de alarma.",
    "datoTto": "Analgesia con paracetamol o AINEs, medidas de manejo del estrés y, en casos crónicos, considerar terapia profiláctica con antidepresivos tricíclicos.",
    "clinicalPearl": "Cefalea diaria, opresiva y sin náuseas: suele ser tensional, responde bien a medidas no farmacológicas.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "144",
    "term": "Definir brevemente: Dermatitis atópica",
    "definition": "Enfermedad inflamatoria crónica de la piel con prurito y eccema, frecuente en niños.",
    "datoDx": "Diagnóstico clínico por lesiones eccematosas pruriginosas crónicas, antecedentes personales o familiares de atopia y topografía típica. Se evalúa mediante historia clínica, exploración física y exclusión de otras dermatosis. Pruebas de laboratorio solo si hay dudas diagnósticas.",
    "datoTto": "Incluye medidas generales de hidratación cutánea, evitar factores desencadenantes, uso de corticoides tópicos en brotes y, si es necesario, inmunomoduladores tópicos o fototerapia en casos graves. En infecciones asociadas se pautan antibióticos.",
    "clinicalPearl": "Niño con prurito y lesiones eccematosas en pliegues: sospecha dermatitis atópica, hidrata y evita irritantes.",
    "rotation": "Medicina Familiar",
    "difficulty": "baja"
  },
  {
    "id": "145",
    "term": "Definir brevemente: Glomerulonefritis rápidamente progresiva",
    "definition": "Síndrome caracterizado por deterioro rápido de la función renal con semilunas en la biopsia.",
    "datoDx": "El diagnóstico se basa en clínica de insuficiencia renal rápida con hematuria, proteinuria y cilindros eritrocitarios en orina. Se confirma con biopsia renal que muestra semilunas en la mayoría de los glomérulos. Estudios serológicos (ANCA, anti-GBM) ayudan a determinar etiología.",
    "datoTto": "Tratamiento urgente con corticosteroides y ciclofosfamida para controlar inflamación, además de plasmaféresis en casos determinados (anti-GBM). El manejo de la insuficiencia renal puede requerir diálisis temporal.",
    "clinicalPearl": "Insuficiencia renal aguda con hematuria y cilindros hemáticos: sospecha glomerulonefritis rápidamente progresiva, requiere tratamento urgente.",
    "rotation": "Nefrología",
    "difficulty": "alta"
  },
  {
    "id": "146",
    "term": "Definir brevemente: Síndrome nefrótico",
    "definition": "Conjunto de síntomas por proteinuria masiva, hipoalbuminemia, edema e hiperlipidemia.",
    "datoDx": "Se caracteriza por proteinuria masiva (>. g/día), hipoalbuminemia, edema y dislipidemia. Se confirma con análisis de orina y biopsia renal si está indicada para etiología.",
    "datoTto": "Tratamiento con corticosteroides e inmunosupresores según causa, restrictivo en sal y diuréticos para edema, control de lípidos y prevención de infecciones y trombosis.",
    "clinicalPearl": "Edema facial matutino y proteinuria >3,5 g/día: típico de síndrome nefrótico, busca causas primarias o secundarias.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "147",
    "term": "Definir brevemente: Síndrome nefrítico",
    "definition": "Hematuria, proteinuria, hipertensión y edema, generalmente por glomerulonefritis.",
    "datoDx": "Clínica con hematuria, hipertensión, edema y disminución de función renal. Laboratorio muestra proteinuria leve a moderada, eritrocitos dismórficos y cilindros hemáticos en orina.",
    "datoTto": "Tratamiento dirigido a la causa subyacente (infecciosa, autoinmune), control de hipertensión y edema, y monitoreo de función renal.",
    "clinicalPearl": "Hematuria macroscópica, hipertensión y edema tras infección: sospecha síndrome nefrítico, pide complemento y serologías.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "148",
    "term": "Definir brevemente: Nefropatía diabética",
    "definition": "Lesión renal progresiva secundaria a diabetes mellitus, causa principal de enfermedad renal crónica.",
    "datoDx": "Microalbuminuria persistente, descenso gradual de la tasa de filtración glomerular, y focalización en pacientes con diabetes mellitus. Se excluyen otras causas de proteinuria.",
    "datoTto": "Control estricto glucémico y presión arterial, uso de inhibidores de la enzima convertidora o bloqueadores de receptores, y control de lípidos. En fases avanzadas, manejo en unidad renal especializada.",
    "clinicalPearl": "Microalbuminuria persistente en diabético: inicia IECA o ARA-II para retrasar progresión de nefropatía.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "149",
    "term": "Definir brevemente: Nefropatía lúpica",
    "definition": "Afectación renal por lupus eritematoso sistémico, con múltiples patrones histológicos.",
    "datoDx": "Pacientes con lupus sistémico y proteinuria, hematuria persistente. Confirmación con biopsia renal que clasifica el tipo y guía tratamiento.",
    "datoTto": "Corticosteroides e inmunosupresores (micofenolato, ciclofosfamida) ajustados según clase histológica, y control clínico multidisciplinar.",
    "clinicalPearl": "Proteinuria, hematuria y cilindros en paciente con LES: sospecha nefropatía lúpica, requiere biopsia renal.",
    "rotation": "Nefrología",
    "difficulty": "alta"
  },
  {
    "id": "150",
    "term": "Definir brevemente: Insuficiencia renal crónica",
    "definition": "Pérdida progresiva e irreversible de la función renal, con filtrado glomerular <60 ml/min/1,73m² por más de 3 meses.",
    "datoDx": "Se define por daño renal o descenso persistente de la tasa de filtración glomerular (<0 ml/min) por más de meses, evaluado con creatinina sérica, albuminuria y estudios imagenológicos.",
    "datoTto": "Controlar causas subyacentes, manejo de comorbilidades, ajustes dietéticos, y preparación para terapia renal sustitutiva si progresión avanzada.",
    "clinicalPearl": "Anemia, hiperpotasemia y acidosis metabólica en paciente con ERC: ajusta fármacos y controla factores de progresión.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "151",
    "term": "Definir brevemente: Nefrolitiasis",
    "definition": "Formación de cálculos en el aparato urinario, principalmente en los riñones.",
    "datoDx": "Similar a litiasis renal (cólico, hematuria). Diagnóstico con ecografía o TC sin contraste para identificar cálculo y obstrucción.",
    "datoTto": "Analgesia, hidratación, tratamiento expulsivo, y procedimientos invasivos según tamaño y localización del cálculo.",
    "clinicalPearl": "Cólico renal, hematuria y antecedentes familiares: sospecha nefrolitiasis, recomienda hidratación y estudia composición del cálculo.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "152",
    "term": "Definir brevemente: Acidosis tubular renal",
    "definition": "Trastorno de los túbulos renales que causa acidosis metabólica hiperclorémica.",
    "datoDx": "El diagnóstico se realiza mediante bioquímica (gases arteriales, electrolitos séricos y urinarios) y pruebas de acidificación urinaria. Se solicita pH urinario, prueba de sobrecarga ácida o infusión de bicarbonato según el subtipo sospechado.",
    "datoTto": "El manejo es con suplementos de bicarbonato oral, potasio si requiere, y tratar la causa si se identifica. El seguimiento busca prevenir complicaciones como nefrocalcinosis o retraso del crecimiento.",
    "clinicalPearl": "Acidosis metabólica sin anión gap elevado y potasio bajo: piensa en acidosis tubular renal, diferencia tipo 1 y 2.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "153",
    "term": "Definir brevemente: Poliquistosis renal autosómica dominante",
    "definition": "Enfermedad genética caracterizada por múltiples quistes renales y progresión a insuficiencia renal.",
    "datoDx": "Clínica de hipertensión, dolor lumbar y masa abdominal palpable con Historia familiar positiva. Diagnóstico por ecografía renal mostrando múltiples quistes bilaterales.",
    "datoTto": "Control de hipertensión, manejo de complicaciones renales y eventual diálisis o trasplante en insuficiencia renal avanzada.",
    "clinicalPearl": "HTA, masa abdominal y antecedentes familiares: sospecha poliquistosis renal, solicita ecografía.",
    "rotation": "Nefrología",
    "difficulty": "media"
  },
  {
    "id": "154",
    "term": "Definir brevemente: Hiperkalemia",
    "definition": "Elevación del potasio sérico por encima de 5.5 mEq/L, potencialmente mortal.",
    "datoDx": "Diagnóstico por niveles séricos elevados de potasio (>5.5 mEq/L) acompañados de alteraciones electrocardiográficas (ondas T picudas, ensanchamiento del QRS). Se investiga causa (insuficiencia renal, medicamentos, hemólisis).",
    "datoTto": "Medidas emergentes incluyen calcio intravenoso para estabilizar membrana, administración de insulina con glucosa para desplazar potasio intracelularmente, resinas intercambiadoras y corrección de causa base.",
    "clinicalPearl": "Debilidad, arritmias y ECG con ondas T picudas: sospecha hiperkalemia, trata con gluconato cálcico y medidas de descenso rápido.",
    "rotation": "Nefrología",
    "difficulty": "alta"
  },
  {
    "id": "155",
    "term": "Definir brevemente: Accidente isquémico transitorio (AIT)",
    "definition": "Déficit neurológico focal de inicio súbito y duración menor a 24 horas, sin daño cerebral permanente.",
    "datoDx": "Se basa en clínica de síntomas neurológicos focales transitorios que resuelven en menos de 24 horas y se confirma con neuroimagen cerebral (TC/RM) y estudios complementarios (doppler carotídeo, ecocardiograma) para identificar fuentes embólicas.",
    "datoTto": "El objetivo es prevenir un ACV mayor mediante antiagregantes plaquetarios, control de factores de riesgo (HTA, dislipidemia, DM), y en casos seleccionados anticoagulación o cirugía de arterias carótidas si hay estenosis.",
    "clinicalPearl": "Pérdida brusca de fuerza o habla que se resuelve en minutos u horas: sospecha AIT, requiere estudio urgente para prevenir ictus.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "156",
    "term": "Definir brevemente: Esclerosis múltiple",
    "definition": "Enfermedad desmielinizante crónica del sistema nervioso central de curso recurrente-remitente o progresivo.",
    "datoDx": "Diagnóstico mediante historia clínica de episodios neurológicos multifocales, resonancia magnética cerebral y medular con imágenes desmielinizantes, potenciales evocados y análisis de líquido cefalorraquídeo.",
    "datoTto": "Tratamiento con modificadores de la enfermedad (interferones, acetato de glatiramero, anticuerpos monoclonales), corticoides para brotes agudos y manejo sintomático multidisciplinario.",
    "clinicalPearl": "Pérdida visual unilateral dolorosa, diplopía o parestesias recurrentes en joven: sospecha esclerosis múltiple, solicita RM cerebral.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "157",
    "term": "Definir brevemente: Cefalea tensional",
    "definition": "Tipo de cefalea primaria caracterizada por dolor opresivo, bilateral y de intensidad leve a moderada.",
    "datoDx": "Diagnóstico clínico basado en dolor opresivo, bilateral, de intensidad leve a moderada, sin síntomas neurológicos acompañantes. No se requieren estudios de imagen salvo que haya signos de alarma.",
    "datoTto": "Analgesia con paracetamol o AINEs, medidas de manejo del estrés y, en casos crónicos, considerar terapia profiláctica con antidepresivos tricíclicos.",
    "clinicalPearl": "Cefalea opresiva, sin náuseas ni fotofobia, que mejora con actividad: típico de cefalea tensional.",
    "rotation": "Neurología",
    "difficulty": "baja"
  },
  {
    "id": "158",
    "term": "Definir brevemente: Neuralgia del trigémino",
    "definition": "Dolor neuropático intenso y paroxístico en el territorio del nervio trigémino.",
    "datoDx": "Dolor facial lancinante, eléctrico, en territorio del trigémino, sin déficits neurológicos. Se excluyen causas secundarias mediante RM cerebral para valorar compresión vascular.",
    "datoTto": "Fármacos anticonvulsivantes (carbamazepina), y en casos refractarios, procedimientos quirúrgicos o radiosinvección.",
    "clinicalPearl": "Descargas eléctricas breves en cara, desencadenadas por masticar o tocar la piel: sugiere neuralgia del trigémino, responde a carbamazepina.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "159",
    "term": "Definir brevemente: Miastenia gravis",
    "definition": "Enfermedad autoinmune de la unión neuromuscular que causa debilidad fluctuante y fatigabilidad muscular.",
    "datoDx": "Clínica de debilidad muscular fluctuante, confirmada con anticuerpos anti-receptor de acetilcolina y estudios electrofisiológicos (estimulaciones repetitivas o electromiografía). Pruebas de imagen (TC timo) para detectar timoma.",
    "datoTto": "Anticolinesterásicos, corticosteroides, inmunosupresores y plasmaféresis o inmunoglobulinas en crisis. Timectomía en casos seleccionados.",
    "clinicalPearl": "Ptosis y diplopía que empeoran al final del día y mejoran con reposo: sospecha miastenia gravis, busca anticuerpos anti-AChR.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "160",
    "term": "Definir brevemente: Esclerosis lateral amiotrófica (ELA)",
    "definition": "Enfermedad neurodegenerativa progresiva que afecta motoneuronas superiores e inferiores.",
    "datoDx": "Diagnóstico clínico basado en debilidad motora progresiva, signos de afectación de neurona motora superior e inferior, electromiografía y exclusión de otras patologías neurológicas.",
    "datoTto": "No existe cura. Tratamiento sintomático y de soporte multidisciplinario que incluye riluzol y edaravona para retrasar progresión, terapia física, respiratoria y nutricional.",
    "clinicalPearl": "Debilidad progresiva, fasciculaciones y atrofia muscular sin alteración sensitiva: sospecha ELA.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "161",
    "term": "Definir brevemente: Hemorragia subaracnoidea",
    "definition": "Sangrado en el espacio subaracnoideo, generalmente por rotura de aneurisma cerebral.",
    "datoDx": "Diagnóstico por cefalea súbita intensa 'en trueno', confirmada con tomografía computarizada sin contraste. La punción lumbar puede detectar sangre si la TC es negativa y hay sospecha clínica. La angiografía cerebral define el origen aneurismático.",
    "datoTto": "Estabilización hemodinámica y neurológica en cuidados intensivos, manejo del aneurisma por cirugía o embolización, prevención de vasoespasmo con nimodipino y control de complicaciones.",
    "clinicalPearl": "Cefalea súbita e intensa (“la peor de su vida”) ± rigidez de nuca: sospecha hemorragia subaracnoidea, solicita TC urgente.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "162",
    "term": "Definir brevemente: Polineuropatía diabética",
    "definition": "Afectación simétrica y distal de nervios periféricos en pacientes con diabetes mellitus.",
    "datoDx": "Clínica de parestesias, hipoestesia distal y alteraciones reflejas en paciente diabético. Confirmación con estudios de conducción nerviosa.",
    "datoTto": "Control glucémico estricto, manejo sintomático del dolor con gabapentina, pregabalina o antidepresivos tricíclicos, y cuidados podológicos para prevenir úlceras.",
    "clinicalPearl": "Parestesias y pérdida de sensibilidad en “guante y calcetín” en diabético: típico de polineuropatía diabética.",
    "rotation": "Neurología",
    "difficulty": "media"
  },
  {
    "id": "163",
    "term": "Definir brevemente: Síndrome de Guillain-Barré",
    "definition": "Polirradiculoneuropatía aguda autoinmune, frecuentemente postinfecciosa.",
    "datoDx": "Presenta debilidad progresiva ascendente, arreflexia, con estudios compatibles de electrodiagnóstico que muestran alteración de la conducción nerviosa, y líquido cefalorraquídeo con disociación albúmino-citológica.",
    "datoTto": "Terapia con inmunoglobulinas intravenosas o plasmaféresis, cuidados de soporte respiratorio y fisioterapia. Monitorización estrecha por riesgo de insuficiencia respiratoria.",
    "clinicalPearl": "Debilidad ascendente y arreflexia tras infección respiratoria o gastrointestinal: sospecha Guillain-Barré, vigila función respiratoria.",
    "rotation": "Neurología",
    "difficulty": "alta"
  },
  {
    "id": "164",
    "term": "Definir brevemente: Convulsiones febriles",
    "definition": "Crisis convulsivas asociadas a fiebre en niños entre 6 meses y 5 años, sin infección central ni alteración metabólica.",
    "datoDx": "Diagnóstico clínico en lactantes/niños entre meses y años con convulsión generalizada asociada a fiebre sin infección del SNC ni alteración metabólica. Se descartan causas secundarias con laboratorio y, si es necesario, punción lumbar.",
    "datoTto": "Generalmente medidas de soporte, tratar la fiebre y evitar recurrencias. En convulsiones prolongadas, benzodiacepinas intravenosas o rectales.",
    "clinicalPearl": "Convulsión generalizada breve en niño con fiebre, sin signos meníngeos ni focalidad: típico de convulsión febril simple.",
    "rotation": "Neurología",
    "difficulty": "baja"
  },
  {
    "id": "165",
    "term": "Definir brevemente: Asma bronquial",
    "definition": "Enfermedad inflamatoria crónica de la vía aérea caracterizada por hiperreactividad bronquial y obstrucción reversible.",
    "datoDx": "El diagnóstico se establece mediante espirometría demostrando obstrucción reversible al flujo aéreo (incremento del FEV ≥% tras broncodilatador). Se complementa con clínica de sibilancias, tos y disnea recurrentes.",
    "datoTto": "El manejo incluye corticosteroides inhalados para control de inflamación y beta-2 agonistas de acción corta para alivio rápido. En casos moderados a severos se usan corticoides orales y otros broncodilatadores.",
    "clinicalPearl": "Tos nocturna o tras ejercicio en joven, con sibilancias recurrentes: sospecha asma aunque la espirometría basal sea normal.",
    "rotation": "Neumología",
    "difficulty": "baja"
  },
  {
    "id": "166",
    "term": "Definir brevemente: EPOC (Enfermedad pulmonar obstructiva crónica)",
    "definition": "Trastorno respiratorio crónico caracterizado por limitación persistente del flujo aéreo, asociado al tabaquismo.",
    "datoDx": "El diagnóstico se confirma mediante espirometría que muestra limitación persistente del flujo aéreo (cociente FEV/FVC post-broncodilatador <0,) en paciente con historia de exposición a factores de riesgo, principalmente tabaquismo. Se complementa con radiografía de tórax para descartar otras patologías y tomografía computarizada en casos seleccionados. También se evalúan gases sanguíneos para valorar afectación y se realizan pruebas para deficiencia de alfa--antitripsina si está indicada. La valoración clínica incluye síntomas compatibles como tos crónica, expectoración y disnea progresiva.",
    "datoTto": "El tratamiento base incluye broncodilatadores de larga duración (beta-2 agonistas y anticolinérgicos), ajustados según gravedad y fenotipo del paciente (no agudizador, agudizador con eosinofilia, etc.). En pacientes con exacerbaciones frecuentes y características específicas se adicionan corticosteroides inhalados. Se complementa con medidas generales: abandono del hábito tabáquico, vacunación, rehabilitación pulmonar, y en casos avanzados oxigenoterapia y soporte ventilatorio. Se recomienda individualizar manejo y seguimiento basado en la gravedad y comorbilidades asociadas.",
    "clinicalPearl": "Fumador crónico con tos matutina y disnea progresiva: sospecha EPOC, confirma con espirometría.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "167",
    "term": "Definir brevemente: Neumonía adquirida en la comunidad",
    "definition": "Infección aguda del parénquima pulmonar adquirida fuera del hospital.",
    "datoDx": "Clínica compatible con fiebre, tos, y dolor torácico; radiografía de tórax con infiltrados. Se pueden realizar cultivos, antígenos urinarios y PCR para patógenos específicos.",
    "datoTto": "Antibióticos empíricos según gravedad y comorbilidades, soporte respiratorio y seguimiento clínico y radiológico.",
    "clinicalPearl": "Fiebre, tos productiva y crepitantes en la auscultación: pide radiografía para confirmar neumonía.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "168",
    "term": "Definir brevemente: Embolia pulmonar",
    "definition": "Obstrucción aguda de la arteria pulmonar o sus ramas por un trombo.",
    "datoDx": "Sospecha clínica confirmada por angiotomografía pulmonar (angio-TC), gammagrafía V/Q o ecografía de miembros inferiores. Dímero D útil como prueba de exclusión.",
    "datoTto": "Anticoagulación inmediata (heparinas/fármacos orales); en casos graves, trombólisis o embolectomía. Se monitoriza riesgo de recurrencia y complicaciones.",
    "clinicalPearl": "Disnea súbita, dolor torácico pleurítico y taquicardia en paciente con inmovilización: sospecha embolia pulmonar aunque la radiografía sea normal.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "169",
    "term": "Definir brevemente: Neumotórax espontáneo",
    "definition": "Presencia de aire en el espacio pleural sin causa traumática, que colapsa el pulmón.",
    "datoDx": "Clínica de dolor torácico súbito y disnea, confirmación con radiografía de tórax que muestra colapso pulmonar. En casos dudosos, TC torácica.",
    "datoTto": "Observación en neumotórax pequeño y estable, drenaje pleural o intervención quirúrgica en casos grandes o recurrentes.",
    "clinicalPearl": "Disnea súbita y dolor torácico unilateral en joven alto: sospecha neumotórax, confirma con radiografía.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "170",
    "term": "Definir brevemente: Fibrosis pulmonar idiopática",
    "definition": "Enfermedad pulmonar intersticial crónica de causa desconocida, caracterizada por fibrosis progresiva del parénquima pulmonar.",
    "datoDx": "Diagnóstico con clínica de disnea progresiva, estertores crepitantes finos, y confirmación con TC de alta resolución mostrando patrón reticular subpleural y panal de abeja.",
    "datoTto": "Tratamiento con antifibróticos como pirfenidona o nintedanib para ralentizar progresión, rehabilitación pulmonar y evaluación para trasplante en casos avanzados.",
    "clinicalPearl": "Disnea progresiva, crepitantes en velcro y hipocratismo digital: sospecha fibrosis pulmonar idiopática, solicita TC de alta resolución.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "171",
    "term": "Definir brevemente: Derrame pleural",
    "definition": "Acumulación anormal de líquido en la cavidad pleural.",
    "datoDx": "Se basa en historia clínica, exploración física y confirmación por imagen (radiografía y/o ecografía de tórax). Diagnóstico etiológico mediante toracocentesis y análisis completo del líquido pleural (bioquímica, citología, microbiología); TC de tórax o biopsia pleural si se requiere determinar causa específica.",
    "datoTto": "Tratamiento dirigido a la causa subyacente. Drenaje terapéutico (toracocentesis) si hay síntomas severos, y manejo específico según etiología (antibióticos, diuréticos, quimioterapia, tratamiento de insuficiencia cardíaca, etc.).",
    "clinicalPearl": "Disminución del murmullo vesicular y matidez a la percusión: sospecha derrame pleural, confirma con ecografía o radiografía.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "172",
    "term": "Definir brevemente: Tuberculosis pulmonar",
    "definition": "Infección crónica por Mycobacterium tuberculosis que afecta principalmente los pulmones.",
    "datoDx": "Se sospecha por síntomas respiratorios crónicos, radiografía de tórax compatible y se confirma con baciloscopia, cultivo de esputo y pruebas moleculares (GeneXpert) para detectar Mycobacterium tuberculosis y resistencia a fármacos.",
    "datoTto": "Tratamiento antituberculoso con esquema combinado de cuatro medicamentos durante meses (isoniazida, rifampicina, pirazinamida y etambutol) y seguimiento para adherencia y efectos secundarios.",
    "clinicalPearl": "Tos crónica, sudoración nocturna y hemoptisis: sospecha tuberculosis, pide baciloscopia y cultivo.",
    "rotation": "Neumología",
    "difficulty": "alta"
  },
  {
    "id": "173",
    "term": "Definir brevemente: Síndrome de apnea-hipopnea del sueño",
    "definition": "Trastorno caracterizado por episodios repetidos de obstrucción de la vía aérea superior durante el sueño.",
    "datoDx": "Se sospecha en pacientes con somnolencia diurna, ronquidos, episodios de pausas respiratorias observados y fatiga. El diagnóstico se confirma mediante polisomnografía que mide eventos de apnea e hipopnea durante el sueño.",
    "datoTto": "Incluye cambios en el estilo de vida (pérdida de peso, evitar alcohol), uso de dispositivos CPAP (presión positiva continua en vías respiratorias) y en casos específicos cirugía o dispositivos orales.",
    "clinicalPearl": "Ronquidos intensos, pausas respiratorias y somnolencia diurna: sospecha apnea del sueño, pide polisomnografía.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "174",
    "term": "Definir brevemente: Bronquiectasias",
    "definition": "Dilatación anormal e irreversible de los bronquios, generalmente por infecciones recurrentes.",
    "datoDx": "Diagnóstico por TC de tórax que muestra dilataciones permanentes y anulares de los bronquios con signos de inflamación crónica, en pacientes con tos crónica y producción abundante de esputo.",
    "datoTto": "Incluye fisioterapia respiratoria, antibióticos en exacerbaciones, broncodilatadores y tratamiento de las causas subyacentes para prevenir progresión.",
    "clinicalPearl": "Tos crónica con expectoración purulenta y hemoptisis recurrente: sospecha bronquiectasias, solicita TAC de tórax.",
    "rotation": "Neumología",
    "difficulty": "media"
  },
  {
    "id": "175",
    "term": "Definir brevemente: Otitis media aguda",
    "definition": "Infección aguda del oído medio, frecuente en niños pequeños.",
    "datoDx": "Diagnóstico clínico con dolor de oído, fiebre y hallazgos en otoscopía como inflamación y presencia de líquido en oído medio. En casos recurrentes o complicados, se pueden usar timpanometría o cultivos.",
    "datoTto": "Tratamiento sintomático con analgesia y antiinflamatorios. Antibióticos indicados en niños menores de 2 años, síntomas severos o complicaciones. Seguimiento para evaluar resolución.",
    "clinicalPearl": "Fiebre, dolor de oído y abombamiento timpánico tras catarro: sospecha otitis media, sobre todo en menores de 2 años.",
    "rotation": "Otorrinolaringología",
    "difficulty": "baja"
  },
  {
    "id": "176",
    "term": "Definir brevemente: Sinusitis aguda",
    "definition": "Inflamación aguda de los senos paranasales, generalmente secundaria a infección viral o bacteriana.",
    "datoDx": "Se basa en clínica de congestión nasal, dolor facial, rinorrea purulenta y síntomas sistémicos que duran más de días sin mejoría o empeoran tras mejoría inicial. Se confirma con examen físico y en casos específicos con imágenes (TC de senos paranasales).",
    "datoTto": "Tratamiento sintomático con analgésicos, descongestionantes, hidratación; antibióticos en casos sospechosos de complicación bacteriana.",
    "clinicalPearl": "Congestión nasal, dolor facial y rinorrea purulenta que persiste más de 7 días: sospecha sinusitis aguda.",
    "rotation": "Otorrinolaringología",
    "difficulty": "baja"
  },
  {
    "id": "177",
    "term": "Definir brevemente: Amigdalitis aguda",
    "definition": "Inflamación aguda de las amígdalas, habitualmente de origen viral o bacteriano.",
    "datoDx": "El diagnóstico es principalmente clínico (dolor faringeo, fiebre, exudado amigdalar). Puede usarse test rápido de detección de estreptococo o cultivo faríngeo para diferenciar etiología viral vs bacteriana.",
    "datoTto": "Si es de origen bacteriano (estreptococo beta-hemolítico), el tratamiento es penicilina o amoxicilina. Para viral se indica manejo sintomático. En casos graves, valorar hospitalización.",
    "clinicalPearl": "Faringodinia, fiebre y exudado amigdalar: piensa en amigdalitis, considera test rápido de estreptococo si hay odinofagia intensa.",
    "rotation": "Otorrinolaringología",
    "difficulty": "baja"
  },
  {
    "id": "178",
    "term": "Definir brevemente: Parálisis facial periférica",
    "definition": "Debilidad o parálisis de los músculos faciales por afectación del nervio facial (VII par craneal).",
    "datoDx": "Diagnóstico clínico por debilidad unilateral de músculos faciales, incapacidad de cierre palpebral y sonrisa asimétrica. Se descartan causas centrales con evaluación neurológica y, si necesario, estudios de imagen.",
    "datoTto": "Tratamiento con corticosteroides orales, protección ocular y fisioterapia. La mayoría mejora progresivamente en semanas a meses.",
    "clinicalPearl": "Debilidad facial súbita unilateral con incapacidad para cerrar el ojo: sospecha parálisis de Bell, inicia corticoides precozmente.",
    "rotation": "Otorrinolaringología",
    "difficulty": "media"
  },
  {
    "id": "179",
    "term": "Definir brevemente: Rinitis alérgica",
    "definition": "Inflamación de la mucosa nasal por reacción alérgica, caracterizada por estornudos, rinorrea y prurito nasal.",
    "datoDx": "El diagnóstico es clínico, con síntomas como congestión nasal, estornudos, rinorrea acuosa y picor nasal, a menudo con antecedentes de alergia o atopia. Se puede confirmar con pruebas cutáneas de alergia o análisis específicos de IgE para alérgenos.",
    "datoTto": "Incluye evitar los alérgenos desencadenantes, uso de antihistamínicos orales o intranasales, corticosteroides nasales y en casos severos inmunoterapia específica.",
    "clinicalPearl": "Estornudos en salva, picor nasal y lagrimeo en primavera: típico de rinitis alérgica, pregunta por antecedentes atópicos.",
    "rotation": "Otorrinolaringología",
    "difficulty": "baja"
  },
  {
    "id": "180",
    "term": "Definir brevemente: Bronquiolitis aguda",
    "definition": "Infección viral aguda de las vías respiratorias inferiores, frecuente en menores de 2 años, causada habitualmente por VRS.",
    "datoDx": "Se basa principalmente en la historia clínica y examen físico en lactantes con sibilancias, tos y dificultad respiratoria tras infección viral (generalmente VRS). La radiografía puede ayudar a descartar otras causas.",
    "datoTto": "El manejo es principalmente de soporte con hidratación, oxígeno si hipoxemia y monitorización; no se recomienda el uso rutinario de broncodilatadores o corticosteroides.",
    "clinicalPearl": "Lactante con dificultad respiratoria, sibilancias y tiraje subcostal en invierno: sospecha bronquiolitis aguda.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "181",
    "term": "Definir brevemente: Laringitis subglótica (crup)",
    "definition": "Inflamación aguda de la laringe y subglotis, generalmente viral, que causa obstrucción de la vía aérea superior.",
    "datoDx": "El diagnóstico es clínico, basado en la tríada característica de tos perruna, estridor inspiratorio y disfonía, habitualmente en niños entre meses y años. Se valoran signos de dificultad respiratoria y se utiliza el score clínico para determinar gravedad. En casos dudosos o complicados, se pueden realizar radiografías de cuello (que muestran estenosis subepiglótica, signo del campanario), hemograma, gasometría, y en raras ocasiones broncoscopia.",
    "datoTto": "El tratamiento depende de la gravedad clínica: para cuadros leves, manejo ambulatorio con corticosteroides orales (dosis única de dexametasona 0, mg/kg) y medidas generales (aire frío humidificado, hidratación, calma). En casos moderados o graves, además de corticosteroides, se administran nebulizaciones de adrenalina racémica y puede requerirse hospitalización y oxígeno humidificado. Los antibióticos no suelen estar indicados por ser de causa viral mayoritariamente.",
    "clinicalPearl": "Estridor inspiratorio, tos perruna y disfonía nocturna en preescolar: típico de crup.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "182",
    "term": "Definir brevemente: Gastroenteritis aguda",
    "definition": "Inflamación aguda del tracto gastrointestinal, generalmente de origen viral, que causa diarrea y vómitos.",
    "datoDx": "Generalmente el diagnóstico es clínico, basado en diarrea aguda con o sin vómitos, asociado a infecciones virales o bacterianas. En casos severos o prolongados se pueden hacer análisis de heces para identificar patógenos, y se valora estado de hidratación mediante examen físico y pruebas básicas.",
    "datoTto": "El manejo se centra en la rehidratación oral o intravenosa según la gravedad, mantenimiento de la nutrición y en casos bacterianos o parasitarios, uso de antibióticos específicos. Se recomienda precaución con medicamentos antidiarreicos y vigilancia por complicaciones.",
    "clinicalPearl": "Diarrea acuosa y vómitos en niño pequeño, especialmente en guardería: sospecha gastroenteritis viral, prioriza rehidratación oral.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "183",
    "term": "Definir brevemente: Exantema súbito (roseola)",
    "definition": "Infección viral por herpesvirus 6 o 7, caracterizada por fiebre alta seguida de exantema súbito al desaparecer la fiebre.",
    "datoDx": "Diagnóstico clínico por fiebre alta de inicio brusco seguida de exantema maculopapular cuando la fiebre cede, principalmente en lactantes y niños pequeños.",
    "datoTto": "Tratamiento sintomático con antitérmicos, hidratación y observación; curso benigno y autolimitado.",
    "clinicalPearl": "Fiebre alta de varios días que cede bruscamente y aparece exantema rosado: típico de exantema súbito.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "184",
    "term": "Definir brevemente: Escarlatina",
    "definition": "Infección bacteriana por Streptococcus pyogenes con exantema, fiebre y faringitis.",
    "datoDx": "Diagnóstico clínico basado en fiebre alta, faringitis, exantema rojo difuso, lengua en fresa y descamación. La confirmación puede realizarse con cultivo de estreptococo del grupo A o test rápido antigénico.",
    "datoTto": "Antibióticos, preferentemente penicilina o amoxicilina, para erradicar la bacteria y prevenir complicaciones, junto con manejo sintomático.",
    "clinicalPearl": "Fiebre, faringitis y exantema en lija con lengua en fresa: sospecha escarlatina, trata con penicilina.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "185",
    "term": "Definir brevemente: Varicela",
    "definition": "Infección viral aguda por el virus varicela-zóster, caracterizada por exantema vesicular pruriginoso.",
    "datoDx": "Diagnóstico clínico por presencia de lesiones cutáneas en diferentes estadios (máculas, pápulas, vesículas y costras) distribuidas en cara, tronco y extremidades, con antecedente de exposición o brote comunitario.",
    "datoTto": "Manejo sintomático con antipiréticos y antihistamínicos para prurito. En casos severos o en pacientes de riesgo, antivirales como aciclovir. Prevención mediante vacunación.",
    "clinicalPearl": "Lesiones cutáneas en diferentes fases evolutivas (máculas, pápulas, vesículas y costras) en el mismo paciente: típico de varicela.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "186",
    "term": "Definir brevemente: Otitis media aguda",
    "definition": "Infección aguda del oído medio, frecuente en lactantes y preescolares.",
    "datoDx": "Diagnóstico clínico con dolor de oído, fiebre y hallazgos en otoscopía como inflamación y presencia de líquido en oído medio. En casos recurrentes o complicados, se pueden usar timpanometría o cultivos.",
    "datoTto": "Tratamiento sintomático con analgesia y antiinflamatorios. Antibióticos indicados en niños menores de 2 años, síntomas severos o complicaciones. Seguimiento para evaluar resolución.",
    "clinicalPearl": "Fiebre, irritabilidad y tirones de oreja en niño pequeño: sospecha otitis media aguda, explora tímpano.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "187",
    "term": "Definir brevemente: Enfermedad mano-pie-boca",
    "definition": "Infección viral por coxsackie, caracterizada por lesiones vesiculosas en manos, pies y boca.",
    "datoDx": "Diagnóstico clínico por lesiones vesiculares en manos, pies y cavidad oral, común en niños pequeños, asociado a enterovirus. No suele requerir estudios complementarios.",
    "datoTto": "Manejo sintomático con analgesia, hidratación adecuada, y observación; la enfermedad es autolimitada.",
    "clinicalPearl": "Fiebre y vesículas dolorosas en palmas, plantas y mucosa oral en niño: sospecha enfermedad mano-pie-boca.",
    "rotation": "Pediatría",
    "difficulty": "baja"
  },
  {
    "id": "188",
    "term": "Definir brevemente: Epiglotitis aguda",
    "definition": "Infección bacteriana grave de la epiglotis, potencialmente mortal, causada por Haemophilus influenzae tipo b.",
    "datoDx": "Clínica de inicio rápido con disnea, estridor, fiebre alta. Confirmación por laringoscopía directa en ambiente controlado o radiografía lateral de cuello que muestra signo del pulgar.",
    "datoTto": "Manejo urgente en unidad de cuidados intensivos con estabilización de vía aérea, antibióticos intravenosos y corticoterapia.",
    "clinicalPearl": "Fiebre alta, disfagia, babeo y posición en trípode: sospecha epiglotitis, no explores la garganta y avisa a anestesia.",
    "rotation": "Pediatría",
    "difficulty": "alta"
  },
  {
    "id": "189",
    "term": "Definir brevemente: Purpura de Schönlein-Henoch",
    "definition": "Vasculitis mediada por IgA que afecta pequeños vasos, típica en la infancia.",
    "datoDx": "Diagnóstico clínico con púrpura palpable en extremidades inferiores, artritis, dolor abdominal y posible afectación renal. Confirmación con biopsia de piel o riñón mostrando vasculitis leucocitoclástica con depósito de IgA.",
    "datoTto": "Tratamiento en la mayoría de los casos es sintomático y de soporte. Corticosteroides para casos con compromiso renal o abdominal severo.",
    "clinicalPearl": "Púrpura palpable en extremidades inferiores, dolor abdominal y artralgias en niño: sospecha púrpura de Schönlein-Henoch.",
    "rotation": "Pediatría",
    "difficulty": "media"
  },
  {
    "id": "190",
    "term": "Definir brevemente: Artritis reumatoide",
    "definition": "Enfermedad autoinmune sistémica que afecta principalmente las articulaciones, causando inflamación crónica y destrucción articular.",
    "datoDx": "Se diagnostica mediante clínica de artritis simétrica crónica, inflamación articular y uso de criterios serológicos (factor reumatoide, anticuerpos anti-CCP) y estudios imagenológicos que muestran daño articular.",
    "datoTto": "Se utilizan fármacos modificadores de la enfermedad (metotrexato como base), glucocorticoides en fases agudas y biológicos para casos refractarios.",
    "clinicalPearl": "Rigidez matutina prolongada y poliartritis simétrica en manos: sospecha artritis reumatoide, solicita FR y anti-CCP.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "191",
    "term": "Definir brevemente: Lupus eritematoso sistémico",
    "definition": "Enfermedad autoinmune multisistémica con producción de autoanticuerpos y afectación variable de órganos.",
    "datoDx": "Se diagnostica con combinación de criterios clínicos y serológicos: malar, fotosensibilidad, artritis, compromiso renal, anticuerpos ANA y anti-DNA nativos positivos. Se realizan además estudios complementarios para evaluar órgano blanco.",
    "datoTto": "El tratamiento incluye corticosteroides, antipalúdicos como hidroxicloroquina, inmunosupresores y biológicos según gravedad y órganos afectados, además de seguimiento multidisciplinar.",
    "clinicalPearl": "Artralgias, exantema malar y fotosensibilidad en mujer joven: sospecha lupus, solicita ANA y anti-dsDNA.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "192",
    "term": "Definir brevemente: Espondilitis anquilosante",
    "definition": "Enfermedad inflamatoria crónica que afecta principalmente la columna vertebral y las articulaciones sacroilíacas.",
    "datoDx": "Clínica característica con dolor lumbar inflamatorio, rigidez matutina y disminución de la movilidad. Se confirman con radiografías y resonancia magnética de columna y sacroilíacas; HLA-B2 positivo en la mayoría.",
    "datoTto": "Incluye antiinflamatorios no esteroideos, fisioterapia, y en casos resistentes, biológicos como inhibidores del TNF o de IL-.",
    "clinicalPearl": "Lumbalgia inflamatoria que mejora con ejercicio y rigidez matutina: sospecha espondilitis anquilosante, busca HLA-B27.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "193",
    "term": "Definir brevemente: Gota",
    "definition": "Artritis inflamatoria causada por depósito de cristales de urato monosódico en las articulaciones.",
    "datoDx": "Se diagnostica clínicamente por crisis articulares inflamatorias, clásicamente en primer metatarso, con confirmación mediante análisis de líquido sinovial que muestra cristales de urato monopotásico birefringentes negativos. Se apoya además con niveles séricos de ácido úrico.",
    "datoTto": "Tratamiento agudo con AINEs, colchicina o corticosteroides para controlar inflamación. A largo plazo, reducción de niveles de ácido úrico con alopurinol o febuxostat y cambios en dieta y hábitos para prevenir recurrencias.",
    "clinicalPearl": "Ataque agudo en primer dedo del pie (podagra) y antecedentes de hiperuricemia: típico de gota, confirma con cristales en líquido sinovial.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "194",
    "term": "Definir brevemente: Artritis psoriásica",
    "definition": "Artritis inflamatoria asociada a psoriasis, con afectación articular variable y lesiones cutáneas.",
    "datoDx": "El diagnóstico se basa en la clínica (artritis inflamatoria con antecedentes o presencia de psoriasis cutánea), así como imagenología (radiografía, RM) que muestra erosiones y proliferación ósea periarticular.",
    "datoTto": "Tratamiento con antiinflamatorios no esteroideos (AINEs), corticosteroides, agentes modificadores de la enfermedad (metotrexato, leflunomida) y terapias biológicas según gravedad.",
    "clinicalPearl": "Dactilitis (“dedo en salchicha”) y placas psoriásicas: sospecha artritis psoriásica, revisa uñas y piel.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "195",
    "term": "Definir brevemente: Esclerodermia sistémica",
    "definition": "Enfermedad autoinmune caracterizada por fibrosis cutánea y afectación de órganos internos.",
    "datoDx": "Diagnóstico clínico con esclerosis cutánea progresiva, fenómeno de Raynaud, y afectación sistémica. Se apoyan pruebas serológicas (anticuerpos anti-Scl0, anti-centromero) y estudios imagenológicos para evaluar compromiso pulmonar y cardíaco.",
    "datoTto": "Tratamiento sintomático y dirigido a órganos afectados: vasodilatadores para Raynaud, inmunosupresores para fibrosis, y manejo multidisciplinario para complicaciones pulmonares y renales.",
    "clinicalPearl": "Fenómeno de Raynaud, piel engrosada y disfagia: sospecha esclerodermia, busca anticuerpos anti-centromero o anti-Scl-70.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "196",
    "term": "Definir brevemente: Polimialgia reumática",
    "definition": "Síndrome inflamatorio que causa dolor y rigidez en cintura escapular y pelviana, frecuente en mayores de 50 años.",
    "datoDx": "Clínica de dolor y rigidez en cintura escapular y pélvica, con elevación importante de velocidad de sedimentación globular (VSG) y proteína C reactiva (PCR). Respuesta rápida a corticosteroides.",
    "datoTto": "Corticosteroides en dosis bajas, con reducción gradual basada en síntomas y marcadores inflamatorios. Seguimiento por posible asociación con arteritis de células gigantes.",
    "clinicalPearl": "Dolor y rigidez matutina en hombros y caderas con VSG elevada en anciano: sospecha polimialgia reumática, responde bien a corticoides.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "197",
    "term": "Definir brevemente: Vasculitis de células gigantes (arteritis de la temporal)",
    "definition": "Vasculitis granulomatosa de vasos de mediano y gran calibre, frecuente en ancianos.",
    "datoDx": "Síntomas incluyen cefalea temporal, claudicación mandibular y alteraciones visuales; diagnóstico con biopsia de arteria temporal y elevación de reactantes de fase aguda (VSG, PCR).",
    "datoTto": "Corticosteroides sistémicos en dosis altas iniciales para prevenir pérdida visual irreversible, con seguimiento estrecho y ajuste de dosis.",
    "clinicalPearl": "Cefalea, claudicación mandibular y VSG muy elevada en mayor de 60 años: sospecha arteritis temporal, risco de ceguera.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "198",
    "term": "Definir brevemente: Síndrome de Sjögren",
    "definition": "Enfermedad autoinmune caracterizada por sequedad ocular y bucal por destrucción de glándulas exocrinas.",
    "datoDx": "Presenta sequedad ocular y bucal crónica, confirmada con pruebas específicas: test de Schirmer, biopsia de glándula salival menor y anticuerpos anti-Ro/SSA y anti-La/SSB.",
    "datoTto": "Tratamiento sintomático con lubricantes oculares, salivares, y en casos sistémicos inmunosupresores o agentes biológicos.",
    "clinicalPearl": "Xerostomía y xeroftalmía en mujer de mediana edad: sospecha Sjögren, solicita anti-Ro y anti-La.",
    "rotation": "Reumatología",
    "difficulty": "media"
  },
  {
    "id": "199",
    "term": "Definir brevemente: Polimiositis",
    "definition": "Enfermedad inflamatoria crónica que afecta principalmente los músculos proximales, causando debilidad.",
    "datoDx": "Debilidad muscular proximal progresiva, elevación de enzimas musculares (CPK), electromiografía y biopsia muscular para confirmación.",
    "datoTto": "Corticosteroides como tratamiento inicial, inmunosupresores en casos resistentes o para reducir dosis de esteroides, fisioterapia.",
    "clinicalPearl": "Debilidad muscular proximal progresiva y elevación de CPK: sospecha polimiositis, confirma con EMG y biopsia muscular.",
    "rotation": "Reumatología",
    "difficulty": "alta"
  },
  {
    "id": "200",
    "term": "Definir brevemente: Endometriosis",
    "definition": "Presencia de tejido endometrial fuera de la cavidad uterina, que responde cíclicamente a las hormonas.",
    "datoDx": "El diagnóstico se basa en clínica de dolor pélvico cíclico, dismenorrea, infertilidad y se confirma con ecografía transvaginal y resonancia magnética. La laparoscopía con biopsia sigue siendo el estándar de oro para diagnóstico definitivo.",
    "datoTto": "Incluye manejo analgésico, terapia hormonal con anticonceptivos, progestágenos o agonistas de GnRH, y cirugía laparoscópica para extirpar implantes o adherencias en casos severos o resistentes.",
    "clinicalPearl": "Dismenorrea intensa y dolor pélvico crónico en mujer joven: sospecha endometriosis, asocia infertilidad.",
    "rotation": "Ginecología",
    "difficulty": "media"
  },
  {
    "id": "201",
    "term": "Definir brevemente: Miomatosis uterina",
    "definition": "Tumores benignos del músculo liso uterino, frecuentes en mujeres en edad reproductiva.",
    "datoDx": "Clínica con sangrado uterino anormal, masa abdominal o dolor, confirmada por ecografía pélvica mostrando miomas uterinos.",
    "datoTto": "Observación en casos asintomáticos, medicamentos hormonales para control de sangrado y cirugía (miomectomía o histerectomía) en casos sintomáticos o crecimiento rápido.",
    "clinicalPearl": "Metrorragia y aumento del tamaño uterino en mujer premenopáusica: piensa en miomas, solicita ecografía.",
    "rotation": "Ginecología",
    "difficulty": "baja"
  },
  {
    "id": "202",
    "term": "Definir brevemente: Síndrome de ovario poliquístico",
    "definition": "Trastorno endocrino común en mujeres jóvenes, caracterizado por hiperandrogenismo y anovulación.",
    "datoDx": "Se diagnostica con dos de tres criterios de Rotterdam: oligomenorrea, hiperandrogenismo clínico o bioquímico, y ovarios poliquísticos en ecografía, descartando otras causas endocrinas.",
    "datoTto": "Manejo multidisciplinario con cambios en estilo de vida, anticonceptivos orales para regular ciclos y controlar hiperandrogenismo, y metformina para resistencia a la insulina si está presente.",
    "clinicalPearl": "Oligomenorrea, hirsutismo y ovarios poliquísticos en ecografía: sospecha SOP, evalúa riesgo metabólico.",
    "rotation": "Ginecología",
    "difficulty": "media"
  },
  {
    "id": "203",
    "term": "Definir brevemente: Cáncer de cuello uterino",
    "definition": "Neoplasia maligna del cuello uterino, relacionada con infección persistente por VPH.",
    "datoDx": "Detección con citología cervical (Papanicolau) y confirmación con colposcopía y biopsia dirigida. Detección de ADN-VPH complementa el diagnóstico y tamizaje.",
    "datoTto": "En estadios iniciales se prefiere la cirugía, mientras que en enfermedad avanzada se recurre a radioterapia y quimioterapia. La vacunación contra VPH y el tamizaje regular son medidas preventivas esenciales.",
    "clinicalPearl": "Sangrado poscoital y citología anormal: sospecha cáncer de cérvix, realiza colposcopia y biopsia.",
    "rotation": "Ginecología",
    "difficulty": "alta"
  },
  {
    "id": "204",
    "term": "Definir brevemente: Cáncer de mama",
    "definition": "Neoplasia maligna de la glándula mamaria, la más frecuente en mujeres.",
    "datoDx": "Diagnóstico por mamografía o ecografía mamaria, confirmando el hallazgo con biopsia histológica. La resonancia puede ser útil en casos seleccionados.",
    "datoTto": "Incluye cirugía (conservadora o mastectomía), radioterapia, quimioterapia, terapia hormonal o biológica según tipo y estadio tumoral.",
    "clinicalPearl": "Nódulo mamario duro, fijo y con retracción cutánea: sospecha cáncer de mama, solicita mamografía.",
    "rotation": "Ginecología",
    "difficulty": "alta"
  },
  {
    "id": "205",
    "term": "Definir brevemente: Enfermedad inflamatoria pélvica",
    "definition": "Infección ascendente del tracto genital femenino superior, habitualmente por ETS.",
    "datoDx": "Diagnóstico clínico por dolor pélvico, fiebre, leucocitosis y signos de infección, confirmado con ecografía transvaginal que puede mostrar abscesos o inflamación tubárica, además de cultivo cervical para identificar patógenos.",
    "datoTto": "Antibióticos de amplio espectro dirigidos a agentes típicos (Neisseria gonorrhoeae, Chlamydia trachomatis), hospitalización si grave, y manejo de complicaciones.",
    "clinicalPearl": "Dolor pélvico, fiebre y leucorrea purulenta en mujer sexualmente activa: sospecha EIP, inicia antibióticos.",
    "rotation": "Ginecología",
    "difficulty": "media"
  },
  {
    "id": "206",
    "term": "Definir brevemente: Embarazo ectópico",
    "definition": "Implantación del embarazo fuera de la cavidad uterina, generalmente en trompa de Falopio.",
    "datoDx": "Prueba de embarazo positiva y ecografía transvaginal que no visualiza saco gestacional intrauterino, pudiendo verse masa anexial o líquido libre. Niveles de beta-hCG no concordantes con gestación intrauterina.",
    "datoTto": "Tratamiento quirúrgico (salpingostomía/salpingectomía) si inestable o masa grande; metotrexato sistémico si criterios para manejo médico. Monitoreo hasta resolución de beta-hCG.",
    "clinicalPearl": "Amenorrea, dolor abdominal y sangrado vaginal en mujer en edad fértil: descarta embarazo ectópico con beta-hCG y ecografía.",
    "rotation": "Ginecología",
    "difficulty": "alta"
  },
  {
    "id": "207",
    "term": "Definir brevemente: Menopausia",
    "definition": "Cese permanente de la menstruación por agotamiento folicular ovárico, generalmente después de los 45 años.",
    "datoDx": "Diagnóstico clínico por ausencia de menstruación durante meses en mujer en edad apropiada y aumento de FSH sérica. Se descartan causas patológicas y otros trastornos endocrinos.",
    "datoTto": "Manejo sintomático con terapia hormonal sustitutiva en casos indicados, medidas generales para síntomas vasomotores, osteoporosis y prevención cardiovascular.",
    "clinicalPearl": "Sofocos, insomnio y amenorrea en mujer mayor de 45 años: típico de menopausia, valora terapia hormonal según síntomas.",
    "rotation": "Ginecología",
    "difficulty": "baja"
  },
  {
    "id": "208",
    "term": "Definir brevemente: Vaginosis bacteriana",
    "definition": "Alteración de la flora vaginal con sobrecrecimiento de bacterias anaerobias.",
    "datoDx": "Diagnóstico clínico con secreción vaginal homogénea grisácea y olor a pescado, confirmado por criterios de Amsel (pH vaginal >4., células clave, test de aminas positivo) o estudio microbiológico.",
    "datoTto": "Antibióticos como metronidazol oral o vaginal y clindamicina vaginal. Se recomienda evitar alcohol durante tratamiento y abstenerse de relaciones sexuales para mejorar la eficacia. La pareja usualmente no requiere tratamiento.",
    "clinicalPearl": "Flujo vaginal grisáceo, maloliente y sin prurito: sospecha vaginosis bacteriana, confirma con test de aminas.",
    "rotation": "Ginecología",
    "difficulty": "baja"
  },
  {
    "id": "209",
    "term": "Definir brevemente: Candidiasis vulvovaginal",
    "definition": "Infección de la vulva y la vagina por hongos del género Candida.",
    "datoDx": "Diagnóstico clínico basado en prurito, flujo blanco grumoso y eritema. La confirmación se realiza por examen microscópico con KOH y cultivo si hay recurrencias.",
    "datoTto": "Antifúngicos tópicos (clotrimazol, miconazol) o sistémicos (fluconazol oral) según gravedad y recurrencia.",
    "clinicalPearl": "Prurito vulvar intenso, flujo blanco grumoso y eritema: típico de candidiasis, trata con antifúngicos tópicos.",
    "rotation": "Ginecología",
    "difficulty": "baja"
  },
  {
    "id": "210",
    "term": "Definir brevemente: Preeclampsia",
    "definition": "Trastorno del embarazo caracterizado por hipertensión y proteinuria después de la semana 20 de gestación.",
    "datoDx": "Hipertensión arterial en el embarazo después de la semana 20 con proteinuria significativa o signos de daño a órganos diana (hígado, riñón, cerebro). Control y seguimiento mediante presión arterial, proteinuria y pruebas de laboratorio.",
    "datoTto": "Monitoreo clínico estricto, control de presión arterial, anticonvulsivantes si hay riesgo e indicación de parto según gravedad y edad gestacional.",
    "clinicalPearl": "Edema, hipertensión y proteinuria en embarazada: sospecha preeclampsia, vigila signos de severidad.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "211",
    "term": "Definir brevemente: Diabetes gestacional",
    "definition": "Intolerancia a la glucosa que se detecta por primera vez durante el embarazo.",
    "datoDx": "Diagnóstico mediante test de O’Sullivan (glucosa poscarga oral 0g) seguido de curva de glucemia para confirmación entre las semanas 24-2 de gestación.",
    "datoTto": "Control glucémico con dieta y ejercicio físico. Si la glucemia no se normaliza, iniciar insulina; vigilancia obstétrica estrecha y monitorización fetal desde la semana 4.",
    "clinicalPearl": "Glucosa elevada en cribado de segundo trimestre: sospecha diabetes gestacional, inicia dieta y controla glucemias.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "212",
    "term": "Definir brevemente: Amenaza de parto pretérmino",
    "definition": "Presencia de dinámica uterina regular y cambios cervicales antes de la semana 37 de gestación.",
    "datoDx": "Se diagnostica por clínica de contracciones uterinas regulares con cambios cervicales (acortamiento/dilatación) entre las semanas 22 y +, confirmado por tacto vaginal y ecografía cervical.",
    "datoTto": "El tratamiento incluye hospitalización, corticoides para maduración pulmonar fetal y tocolíticos para retrasar el parto y permitir acción de los esteroides. Se trata la causa subyacente si se identifica.",
    "clinicalPearl": "Contracciones regulares y borramiento cervical antes de la semana 37: sospecha amenaza de parto pretérmino, valora tocolisis.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "213",
    "term": "Definir brevemente: Placenta previa",
    "definition": "Implantación de la placenta en el segmento inferior del útero, cubriendo parcial o totalmente el orificio cervical interno.",
    "datoDx": "Sangrado vaginal en embarazo avanzado sin dolor, confirmado por ecografía transvaginal que muestra implantación baja o previa de placenta.",
    "datoTto": "Reposo relativo, control de hemorragia, planificación de cesárea en función de presentación fetal y extensión. Manejo hospitalario en casos graves.",
    "clinicalPearl": "Sangrado vaginal indoloro en el tercer trimestre: sospecha placenta previa, evita tacto vaginal.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "214",
    "term": "Definir brevemente: Desprendimiento prematuro de placenta normoinserta (DPPNI)",
    "definition": "Separación prematura de la placenta normalmente insertada antes del parto.",
    "datoDx": "Sospecha clínica ante dolor abdominal intenso, sangrado vaginal y cambios en la monitorización fetal en el embarazo avanzado. Confirmación con ecografía obstétrica y, ante duda, mediante hallazgos clínicos y laboratorio (coagulopatía, anemia aguda).",
    "datoTto": "Atención hospitalaria inmediata; valoración maternofetal continua. Si el feto está maduro y/o hay riesgo materno-fetal, se indica parto urgente (normal o cesárea). Tratamiento de shock y complicaciones. Anti-D en pacientes Rh negativas.",
    "clinicalPearl": "Dolor abdominal súbito, sangrado y útero hipertónico en embarazada: sospecha DPPNI, riesgo vital materno-fetal.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "215",
    "term": "Definir brevemente: Ruptura prematura de membranas",
    "definition": "Rotura de las membranas amnióticas antes del inicio del trabajo de parto.",
    "datoDx": "El diagnóstico se basa en la historia de pérdida de líquido vaginal antes del inicio del trabajo de parto, confirmada por examen especular mostrando líquido claro en el fondo de saco vaginal y pruebas específicas (test de nitrazina o ferning).",
    "datoTto": "Manejo hospitalario con reposo, control de signos de infección, maduración pulmonar fetal con corticosteroides si la gestación es prematura, y prevención con antibióticos profilácticos. El parto se induce o realiza dependiendo de la edad gestacional y riesgo materno-fetal.",
    "clinicalPearl": "Salida de líquido claro por vagina antes de contracciones: suspecha RPM, evalúa riesgo de infección.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "216",
    "term": "Definir brevemente: Embarazo ectópico",
    "definition": "Implantación del embarazo fuera de la cavidad uterina, generalmente en trompa de Falopio.",
    "datoDx": "Prueba de embarazo positiva y ecografía transvaginal que no visualiza saco gestacional intrauterino, pudiendo verse masa anexial o líquido libre. Niveles de beta-hCG no concordantes con gestación intrauterina.",
    "datoTto": "Tratamiento quirúrgico (salpingostomía/salpingectomía) si inestable o masa grande; metotrexato sistémico si criterios para manejo médico. Monitoreo hasta resolución de beta-hCG.",
    "clinicalPearl": "Amenorrea, dolor abdominal y sangrado vaginal en mujer embarazada: descarta embarazo ectópico con beta-hCG y ecografía.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "217",
    "term": "Definir brevemente: Embarazo molar (mola hidatiforme)",
    "definition": "Proliferación anormal del trofoblasto con degeneración quística de las vellosidades coriónicas.",
    "datoDx": "Niveles elevados de beta-hCG, imagen en ‘copos de nieve’ en ecografía uterina, clínica de sangrado vaginal y útero mayor al esperado para edad gestacional.",
    "datoTto": "Evacuación uterina por aspiración y seguimiento con beta-hCG seriada; evitar embarazo hasta remisión completa. En casos de neoplasia gestacional, quimioterapia.",
    "clinicalPearl": "Hemorragia uterina, útero mayor a la edad gestacional y beta-hCG muy elevada: sospecha mola hidatiforme.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "218",
    "term": "Definir brevemente: Infección urinaria en el embarazo",
    "definition": "Infección bacteriana del tracto urinario durante la gestación, con mayor riesgo de complicaciones.",
    "datoDx": "Identificada por síntomas urinarios o screening asintomático con urocultivo positivo. Complementada con evaluación de factores de riesgo y seguimiento estrecho.",
    "datoTto": "Antibióticos seguros para el embarazo según antibiograma, control y prevención de complicaciones como pielonefritis y parto prematuro.",
    "clinicalPearl": "Bacteriuria asintomática o cistitis en embarazada: trata siempre con antibióticos para prevenir pielonefritis.",
    "rotation": "Obstetricia",
    "difficulty": "media"
  },
  {
    "id": "219",
    "term": "Definir brevemente: Isoinmunización Rh",
    "definition": "Formación de anticuerpos maternos contra antígenos Rh fetales, que puede causar anemia hemolítica fetal.",
    "datoDx": "Detectada mediante tipificación sanguínea materna y fetal, prueba de Coombs indirecta para detectar anticuerpos anti-Rh, y seguimiento ecográfico para evaluar anemia fetal.",
    "datoTto": "Profilaxis con inmunoglobulina anti-D en madre Rh negativa, manejo de anemia fetal con transfusiones intrauterinas o parto temprano si necesario.",
    "clinicalPearl": "Madre Rh negativa y feto Rh positivo: administra inmunoglobulina anti-D tras eventos de risco.",
    "rotation": "Obstetricia",
    "difficulty": "alta"
  },
  {
    "id": "220",
    "term": "Definir brevemente: Conjuntivitis bacteriana aguda",
    "definition": "Inflamación aguda de la conjuntiva causada por bacterias, caracterizada por enrojecimiento y secreción purulenta.",
    "datoDx": "Clínica de ojo rojo con secreción purulenta y adherencias matutinas; diagnóstico clínico y en casos dudosos cultivo conjuntival.",
    "datoTto": "Antibióticos tópicos como colirios de ácido fusídico, tobramicina o ciprofloxacino. Buen manejo higiénico para evitar contagio.",
    "clinicalPearl": "Ojo rojo, legaña espesa y párpados pegados al despertar: típico de conjuntivitis bacteriana, suele ser autolimitada.",
    "rotation": "Oftalmología",
    "difficulty": "baja"
  },
  {
    "id": "221",
    "term": "Definir brevemente: Glaucoma agudo de ángulo cerrado",
    "definition": "Aumento súbito de la presión intraocular por cierre del ángulo iridocorneal.",
    "datoDx": "Presentación súbita con dolor ocular intenso, visión borrosa, halos alrededor de luces, midriasis y ojo rojo. Medición de presión intraocular elevada (>0 mmHg) confirma diagnóstico.",
    "datoTto": "Urgencia oftalmológica con reducción rápida de presión intraocular mediante medicamentos tópicos y sistémicos, seguida de cirugía láser (iridotomía) para prevenir recurrencias.",
    "clinicalPearl": "Dolor ocular intenso, visión borrosa, halos y ojo duro: sospecha glaucoma agudo, requiere tratamento urgente.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "222",
    "term": "Definir brevemente: Desprendimiento de retina",
    "definition": "Separación de la retina neurosensorial del epitelio pigmentario, que puede causar pérdida visual irreversible.",
    "datoDx": "Clínica de aparición súbita de destellos luminosos, moscas volantes, sombra o cortina en campo visual. Confirmación con examen de fondo de ojo y ecografía ocular si opacidad media.",
    "datoTto": "Tratamiento quirúrgico urgente con fotocoagulación láser, crioterapia o vitrectomía según el tipo y extensión.",
    "clinicalPearl": "Destellos, moscas volantes y sombra en el campo visual: sospecha desprendimiento de retina, deriva de urgencia.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "223",
    "term": "Definir brevemente: Uveítis anterior",
    "definition": "Inflamación de la úvea anterior (iris y cuerpo ciliar), asociada a dolor ocular y fotofobia.",
    "datoDx": "Dolor ocular, fotofobia, ojo rojo con miosis y células inflamatorias en cámara anterior al examen con lámpara de hendidura.",
    "datoTto": "Corticosteroides tópicos, midriáticos para evitar sinequias y tratamiento de enfermedad sistémica subyacente si existe.",
    "clinicalPearl": "Ojo rojo, dolor y fotofobia, con miosis y precipitados en córnea: sugiere uveítis anterior, busca enfermedades sistémicas asociadas.",
    "rotation": "Oftalmología",
    "difficulty": "media"
  },
  {
    "id": "224",
    "term": "Definir brevemente: Catarata senil",
    "definition": "Opacificación progresiva del cristalino relacionada con la edad, principal causa de ceguera reversible.",
    "datoDx": "Disminución progresiva de la visión con opacificación del cristalino observada en examen oftalmológico con lámpara de hendidura.",
    "datoTto": "Cirugía de extracción de catarata con implantación de lente intraocular, mejora significativa de la visión en la mayoría de casos.",
    "clinicalPearl": "Pérdida visual progresiva y deslumbramiento en anciano: sospecha catarata, mejora con cirugía.",
    "rotation": "Oftalmología",
    "difficulty": "baja"
  },
  {
    "id": "225",
    "term": "Definir brevemente: Degeneración macular asociada a la edad (DMAE)",
    "definition": "Enfermedad degenerativa de la mácula que afecta la visión central en mayores de 60 años.",
    "datoDx": "El diagnóstico se realiza por clínica de visión borrosa central, aparición de manchas negras (escotomas) y líneas onduladas (metamorfopsias). Se confirma con examen oftalmológico especializado que incluye autofluorescencia, OCT (tomografía de coherencia óptica) y angiografía fluoresceínica para diferenciar formas seca y húmeda.",
    "datoTto": "Para la forma seca, no existe tratamiento curativo, pero se recomienda suplementación con antioxidantes y minerales (formulación AREDS) para retrasar la progresión. En la forma húmeda, el tratamiento principal es la inyección intraocular periódica de antiangiogénicos (anti-VEGF) para frenar el crecimiento de vasos anómalos y preservar la visión central.",
    "clinicalPearl": "Pérdida de visión central y metamorfopsias en anciano: sospecha DMAE, evalúa con fondo de ojo.",
    "rotation": "Oftalmología",
    "difficulty": "media"
  },
  {
    "id": "226",
    "term": "Definir brevemente: Oclusión de la arteria central de la retina",
    "definition": "Obstrucción aguda de la arteria central de la retina, causa de pérdida visual súbita e indolora.",
    "datoDx": "Se presenta con pérdida súbita y generalmente indolora de la visión en un ojo. El examen oftalmológico muestra retina pálida y edema macular, con signo del 'fondo rojo' en la papila óptica. Se confirma con angiografía fluoresceínica que muestra compromiso del flujo arterial retiniano.",
    "datoTto": "Urgencia oftalmológica; medidas incluyen masaje ocular, reducción de presión intraocular con medicamentos, oxígeno hiperbárico en centros especializados, y tratamiento de factores de riesgo vascular para prevenir recurrencias.",
    "clinicalPearl": "Pérdida visual súbita e indolora, con fondo de ojo en “mancha rojo cereza”: sospecha oclusión arterial, pronóstico visual grave.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "227",
    "term": "Definir brevemente: Oclusión de la vena central de la retina",
    "definition": "Trombosis de la vena central de la retina, que produce edema y hemorragias retinianas.",
    "datoDx": "El paciente presenta pérdida visual súbita y fluctuante. La retina muestra hemorragias en llama, edema macular y tortuosidad venosa. La angiografía fluoresceínica y OCT completan el diagnóstico.",
    "datoTto": "No hay tratamiento curativo; se maneja edema macular con inyecciones intravítreas de anti-VEGF o corticoides. Control estricto de enfermedades sistémicas y vigilancia oftalmológica regular.",
    "clinicalPearl": "Pérdida visual súbita, hemorragias en llama y edema en fondo de ojo: típico de oclusión venosa, evalúa factores de risco cardiovascular.",
    "rotation": "Oftalmología",
    "difficulty": "media"
  },
  {
    "id": "228",
    "term": "Definir brevemente: Celulitis orbitaria",
    "definition": "Infección aguda de los tejidos orbitarios, potencialmente grave por riesgo de complicaciones intracraneales.",
    "datoDx": "Diagnóstico clínico con dolor ocular, proptosis, limitación de movimientos oculares, fiebre y edema palpebral. Se realiza TAC o RM orbitarias para evaluar extensión e identificar abscesos.",
    "datoTto": "Antibióticos parenterales de amplio espectro dirigidos a patógenos comunes (Staphylococcus, Streptococcus). Puede requerirse cirugía para drenaje si hay absceso.",
    "clinicalPearl": "Edema palpebral, dolor ocular y limitación de movimientos oculares: sospecha celulitis orbitaria, requiere antibióticos intravenosos.",
    "rotation": "Oftalmología",
    "difficulty": "alta"
  },
  {
    "id": "229",
    "term": "Definir brevemente: Queratitis herpética",
    "definition": "Inflamación corneal causada por el virus herpes simple, principal causa infecciosa de ceguera corneal.",
    "datoDx": "Clínica con dolor ocular, fotofobia y secreción, asociada a lesiones dendríticas visibles en fluoresceína tras tinción ocular. Se confirma con oftalmoscopia y, si es necesario, PCR ocular.",
    "datoTto": "Antivirales tópicos (trifluridina, aciclovir). Evitar corticosteroides en queratitis epitelial activa. Tratamiento precoz para prevenir complicaciones.",
    "clinicalPearl": "Dolor ocular, fotofobia y úlcera dendrítica en córnea: sospecha queratitis herpética, evita corticoides tópicos.",
    "rotation": "Oftalmología",
    "difficulty": "media"
  },
  {
    "id": "230",
    "term": "Definir brevemente: Fractura de Colles",
    "definition": "Fractura distal del radio con desplazamiento dorsal del fragmento distal, frecuente tras caída con mano extendida.",
    "datoDx": "Traumatismo distal de radio con deformidad en dorso de mano (signo de muñeca de tenedor). Confirmación con radiografía de antebrazo y muñeca.",
    "datoTto": "Reducción cerrada y yeso en fracturas no desplazadas. Cirugía en desplazamientos importantes o inestabilidad. Rehabilitación posterior para recuperar movilidad.",
    "clinicalPearl": "Deformidad en dorso de tenedor tras caída sobre la mano: típico de fractura de Colles, solicita radiografía.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "231",
    "term": "Definir brevemente: Luxación glenohumeral anterior",
    "definition": "Desplazamiento de la cabeza humeral fuera de la cavidad glenoidea, generalmente hacia adelante.",
    "datoDx": "Dolor intenso y pérdida de movilidad del hombro, con deformidad y signo de aplanamiento del deltoides. Radiografía anteroposterior y axilar confirman luxación anterior.",
    "datoTto": "Reducción urgente bajo analgesia o sedación, inmovilización en cabestrillo y fisioterapia para recuperar funcionalidad y prevenir recurrencias.",
    "clinicalPearl": "Imposibilidad para mover el hombro y signo de charretera tras traumatismo: sospecha luxación anterior, requiere reducción urgente.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "232",
    "term": "Definir brevemente: Fractura de cadera",
    "definition": "Ruptura del cuello femoral o región intertrocantérica, frecuente en ancianos por caídas.",
    "datoDx": "Dolor inguinal o en región proximal del muslo tras caída, incapacidad para movilizar la extremidad. Radiografía pelvis confirma el tipo de fractura (cervical, pertrocantérica).",
    "datoTto": "Tratamiento quirúrgico precoz (osteosíntesis o prótesis) junto con manejo integral para evitar complicaciones en pacientes mayores.",
    "clinicalPearl": "Acortamiento y rotación externa de la pierna tras caída en anciano: sospecha fractura de cadera, solicita radiografía.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "233",
    "term": "Definir brevemente: Esguince de tobillo",
    "definition": "Lesión ligamentosa del tobillo, habitualmente por inversión forzada.",
    "datoDx": "Dolor, hinchazón y limitación funcional tras mecanismo de torsión. Diagnóstico clínico apoyado en criterios Ottawa para descartar fractura. Radiografía solo si sospecha fractura.",
    "datoTto": "Reposo, hielo, compresión y elevación (RICE). En lesiones graves, inmovilización y rehabilitación progresiva.",
    "clinicalPearl": "Dolor, edema y hematoma lateral tras torcedura: típico de esguince, descarta fractura con regla de Ottawa.",
    "rotation": "Traumatología",
    "difficulty": "baja"
  },
  {
    "id": "234",
    "term": "Definir brevemente: Fractura supracondílea de húmero",
    "definition": "Fractura del húmero distal, frecuente en niños tras caída sobre el codo extendido.",
    "datoDx": "Frecuente en niños tras caída sobre mano estirada, con dolor, edema y deformidad en codo. Radiografía lateral y anteroposterior del codo confirma fractura.",
    "datoTto": "Reducción cerrada y yeso en fracturas no desplazadas. Cirugía con fijación interna en fracturas desplazadas o inestables. Monitorización neurovascular estricta.",
    "clinicalPearl": "Dolor e impotencia funcional en codo de niño tras caída: sospecha fractura supracondílea, evalúa pulso radial.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "235",
    "term": "Definir brevemente: Lesión del ligamento cruzado anterior (LCA)",
    "definition": "Rotura del LCA de la rodilla, común en deportes de contacto o giros bruscos.",
    "datoDx": "Clínica con chasquido, inestabilidad y derrame articular tras trauma. Pruebas funcionales (Lachman, cajón anterior) y resonancia magnética confirman diagnóstico.",
    "datoTto": "Reposo, rehabilitación y en casos activos o deportistas, reconstrucción quirúrgica con injerto tendinoso.",
    "clinicalPearl": "Chasquido, inestabilidad y derrame articular inmediato tras giro de rodilla: sospecha lesión del LCA.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "236",
    "term": "Definir brevemente: Fractura de escafoides",
    "definition": "Fractura del hueso escafoides de la muñeca, frecuente en caídas sobre la mano en extensión.",
    "datoDx": "Dolor en tabaquera anatómica tras traumatismo de muñeca, con pruebas de compresión positiva. Radiografía de muñeca inicial puede ser negativa; repetir a los -4 días o realizar resonancia.",
    "datoTto": "Inmovilización con yeso en fracturas no desplazadas; cirugía en fracturas desplazadas o con riesgo de no unión.",
    "clinicalPearl": "Dolor en tabaquera anatómica tras caída: sospecha fractura de escafoides, pode no verse en radiografía inicial.",
    "rotation": "Traumatología",
    "difficulty": "media"
  },
  {
    "id": "237",
    "term": "Definir brevemente: Síndrome compartimental agudo",
    "definition": "Aumento de la presión dentro de un compartimento muscular que compromete la circulación y función nerviosa.",
    "datoDx": "Clínica de dolor desproporcionado, parestesias, palidez, paresia y pulsos disminuidos tras traumatismo o lesión. Medición de presión compartimental confirma diagnóstico.",
    "datoTto": "Urgencia quirúrgica con fasciotomía para liberar presión y prevenir necrosis muscular o nerviosa.",
    "clinicalPearl": "Dolor desproporcionado, parestesias y pulso distal conservado tras fractura: sospecha síndrome compartimental, requiere fasciotomía urgente.",
    "rotation": "Traumatología",
    "difficulty": "alta"
  },
  {
    "id": "238",
    "term": "Definir brevemente: Tendinitis del manguito rotador",
    "definition": "Inflamación de los tendones del manguito rotador del hombro, causa frecuente de dolor en adultos.",
    "datoDx": "Diagnóstico clínico basado en dolor al movimiento del hombro, especialmente al elevar o rotar el brazo. Se confirma con exploración física y pruebas de imagen como ecografía y resonancia magnética para valorar la inflamación de los tendones del manguito rotador.2",
    "datoTto": "El tratamiento es conservador: reposo, antiinflamatorios, fisioterapia y ejercicios específicos. En casos resistentes, se pueden administrar infiltraciones de corticoides o recurrir a cirugía.",
    "clinicalPearl": "Dolor al abducir el brazo y arco doloroso entre 60-120°: sospecha tendinitis del manguito rotador.",
    "rotation": "Traumatología",
    "difficulty": "baja"
  },
  {
    "id": "239",
    "term": "Definir brevemente: Fractura de clavícula",
    "definition": "Fractura del hueso clavicular, frecuente en caídas sobre el hombro o traumatismos directos.",
    "datoDx": "Diagnóstico por examen físico (dolor, deformidad, edema) y confirmado mediante radiografía. Se evalúa el tipo, ubicación y desplazamiento de la fractura.",
    "datoTto": "Uso de cabestrillo y analgesia como tratamiento conservador. Ejercicios para restaurar movilidad después de la inmovilización. Cirugía en casos desplazados, abiertos o con múltiples fragmentos, mediante fijación con placas y tornillos.",
    "clinicalPearl": "Dolor, deformidad y abultamiento en la región clavicular tras caída: típico de fractura de clavícula, la mayoría se tratan conservadoramente.",
    "rotation": "Traumatología",
    "difficulty": "baja"
  },
  {
    "id": "240",
    "term": "Definir brevemente: Meningitis bacteriana aguda",
    "definition": "Inflamación de las meninges por infección bacteriana, potencialmente mortal si no se trata rápidamente.",
    "datoDx": "Se sospecha ante fiebre, cefalea, rigidez de nuca, alteración de conciencia. El diagnóstico se confirma con punción lumbar y análisis del líquido cefalorraquídeo (citología, bioquímica y cultivo).",
    "datoTto": "Antibióticos intravenosos de amplio espectro y corticosteroides administrados de forma precoz. Se ajusta el tratamiento según el agente identificado. Es una urgencia médica.",
    "clinicalPearl": "Fiebre, cefalea intensa, rigidez de nuca y alteración del sensorio: sospecha meningitis, inicia antibióticos empíricos de inmediato.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "alta"
  },
  {
    "id": "241",
    "term": "Definir brevemente: Tuberculosis pulmonar",
    "definition": "Infección crónica por Mycobacterium tuberculosis, afecta principalmente los pulmones.",
    "datoDx": "Sospechada en pacientes con síntomas respiratorios crónicos y radiografía de tórax sugestiva. Confirmación con baciloscopía y cultivo de esputo para Mycobacterium tuberculosis. Se puede emplear prueba de tuberculina e IGRA.",
    "datoTto": "Esquema estándar de 4 fármacos (isoniazida, rifampicina, etambutol, pirazinamida) durante 2 meses, seguido de isoniazida y rifampicina durante 4 meses más. Control de adherencia y ajuste en coinfección por VIH.",
    "clinicalPearl": "Tos crónica, sudoración nocturna y hemoptisis: sospecha tuberculosis, pide baciloscopia y cultivo.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "alta"
  },
  {
    "id": "242",
    "term": "Definir brevemente: VIH/SIDA",
    "definition": "Infección por el virus de la inmunodeficiencia humana que causa inmunosupresión progresiva.",
    "datoDx": "Diagnóstico con pruebas serológicas (ELISA, pruebas rápidas) que detectan anticuerpos y antígenos virales y se confirman con tests de segunda línea (Western blot o pruebas moleculares). Se monitoriza carga viral y linfocitos CD4.",
    "datoTto": "Terapia antirretroviral combinada individualizada según perfil viral y resistencia. Incluye seguimiento regular, control de infecciones oportunistas y educación para prevención de transmisión.",
    "clinicalPearl": "Infecciones oportunistas recurrentes y pérdida de peso inexplicada: descarta VIH, solicita serología.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "alta"
  },
  {
    "id": "243",
    "term": "Definir brevemente: Fiebre tifoidea",
    "definition": "Enfermedad sistémica causada por Salmonella typhi, transmitida por agua o alimentos contaminados.",
    "datoDx": "Cultivo de sangre, heces u orina para identificar Salmonella typhi. Se pueden hacer pruebas de sensibilidad antibiótica y otros estudios para descartar complicaciones.",
    "datoTto": "Antibióticos efectivos según sensibilidad (fluoroquinolonas, cefalosporinas, macrólidos). Hidratación oral o intravenosa y soporte sintomático.",
    "clinicalPearl": "Fiebre prolongada, dolor abdominal y exantema en roséola: sospecha fiebre tifoidea, confirma con hemocultivo.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "media"
  },
  {
    "id": "244",
    "term": "Definir brevemente: Malaria",
    "definition": "Enfermedad febril aguda causada por parásitos Plasmodium, transmitida por mosquitos Anopheles.",
    "datoDx": "Diagnóstico con visualización de parásitos en frotis de sangre, pruebas rápidas de antígenos y PCR para distinguir especies y valorar resistencias.",
    "datoTto": "Tratamiento con antipalúdicos según especie: cloroquina si hay sensibilidad, o combinaciones con artemisinina para cepas resistentes. Otros fármacos incluyen atovacuona-proguanil, quinina, doxiciclina o mefloquina.",
    "clinicalPearl": "Fiebre periódica, anemia y antecedente de viaje a zona endémica: sospecha malaria, solicita gota gruesa.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "alta"
  },
  {
    "id": "245",
    "term": "Definir brevemente: Endocarditis infecciosa",
    "definition": "Infección del endocardio, generalmente de las válvulas cardíacas, por bacterias.",
    "datoDx": "Hemocultivos positivos y ecocardiografía (preferiblemente transesofágica) que visualiza vegetaciones valvulares. Se aplica criterios de Duke para diagnóstico definitivo.20",
    "datoTto": "Antibióticos intravenosos prolongados según microorganismo y sensibilidad. Cirugía valvular en caso de complicaciones, vegetaciones grandes o insuficiencia cardíaca.20",
    "clinicalPearl": "Fiebre prolongada, soplo nuevo y fenómenos embólicos: sospecha endocarditis, busca hemocultivos positivos.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "alta"
  },
  {
    "id": "246",
    "term": "Definir brevemente: Sepsis",
    "definition": "Respuesta inflamatoria sistémica grave a una infección, con disfunción orgánica.",
    "datoDx": "Sospecha clínica en presencia de infección con disfunción orgánica. Confirmación mediante pruebas de laboratorio: hemocultivos, lactato elevado y parámetros de respuesta inflamatoria sistémica. Uso de escalas SOFA/qSOFA.",
    "datoTto": "Iniciar antibióticos de amplio espectro de manera precoz, soporte hemodinámico con líquidos y vasopresores, control de foco infeccioso, y monitorización intensiva de órganos.",
    "clinicalPearl": "Fiebre, taquicardia, hipotensión y alteración del sensorio: sospecha sepsis, inicia antibióticos y soporte hemodinámico.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "alta"
  },
  {
    "id": "247",
    "term": "Definir brevemente: Infección por Clostridioides difficile",
    "definition": "Colitis asociada a toxinas de C. difficile, frecuente tras uso de antibióticos.",
    "datoDx": "Sospecha en pacientes con diarrea acuosa persistente tras antibióticos. Confirmación por detección de toxinas (EIA, PCR) en heces.",
    "datoTto": "Vancomicina oral o fidaxomicina. Suspender antibiótico desencadenante. En casos graves considerar trasplante fecal.",
    "clinicalPearl": "Diarrea acuosa y fiebre tras antibióticos: sospecha infección por C. difficile, solicita toxina en heces.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "media"
  },
  {
    "id": "248",
    "term": "Definir brevemente: Mononucleosis infecciosa",
    "definition": "Enfermedad viral causada por el virus de Epstein-Barr, caracterizada por fiebre, faringitis y linfadenopatía.",
    "datoDx": "Síntomas de fiebre, faringitis, linfadenopatía y esplenomegalia. Prueba rápida (heterófilos) y serología específica para virus Epstein-Barr confirman diagnóstico.",
    "datoTto": "Tratamiento sintomático: reposo, analgesia y antiinflamatorios. Evitar deportes de contacto hasta recuperación. Corticoides solo en complicaciones graves.",
    "clinicalPearl": "Faringitis intensa, linfadenopatía cervical y esplenomegalia en adolescente: sospecha mononucleosis, evita ampicilina.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "media"
  },
  {
    "id": "249",
    "term": "Definir brevemente: Herpes zóster",
    "definition": "Reactivación del virus varicela-zóster, que causa erupción vesicular dolorosa en un dermatoma.",
    "datoDx": "Diagnóstico clínico por erupción vesicular dolorosa en distribución dermatómica unilateral. PCR o estudio de vesículas en casos dudosos.",
    "datoTto": "Antivirales orales (aciclovir, valaciclovir) si se inicia en las primeras 2 horas, analgesia para dolor, y tratamiento de complicaciones si existen.",
    "clinicalPearl": "Vesículas agrupadas y dolor intenso en distribución dermatomérica: sospecha herpes zóster, inicia antivirales precoces.",
    "rotation": "Enfermedades Infecciosas",
    "difficulty": "media"
  }
];
  
export default flashcards;
import { Question } from '../types';

export const modalsQuestions: Question[] = [
  {
    id: 'mod_01',
    topic: 'modals',
    type: 'contextual_grammar',
    topicLabel: 'Modal Verbs & Expressions',
    context: 'Workplace safety rule in an industrial workshop.',
    prompt: 'You _______ wear safety boots and a helmet in the workshop. It is mandatory.',
    options: ['have to', 'should', 'can', 'don’t have to'],
    correctAnswerIndex: 0,
    explanationEn: 'When an obligation is imposed by external rules and regulations ("It is mandatory"), we use "have to".',
    explanationEs: 'Cuando una obligación es externa y obligatoria por reglamento laboral ("It is mandatory"), se debe emplear "have to". "Should" solo expresa un consejo suave.',
    grammarTip: '"Have to" expresa una obligación externa impuesta por normas, leyes o reglamentos de la empresa.',
    examples: [
      { en: 'Apprentices have to show their identification card to enter SENA.', es: 'Los aprendices tienen que mostrar su carnet para entrar al SENA.' },
      { en: 'Employees have to clock in before 8:00 AM.', es: 'Los empleados tienen que registrar su entrada antes de las 8:00 AM.' }
    ]
  },
  {
    id: 'mod_02',
    topic: 'modals',
    type: 'contextual_grammar',
    topicLabel: 'Modal Verbs & Expressions',
    context: 'Health and nutrition advice from a doctor.',
    prompt: 'You _______ drink too much soda. It is very unhealthy.',
    options: ['shouldn’t', 'don’t have to', 'must', 'can’t to'],
    correctAnswerIndex: 0,
    explanationEn: 'We use "shouldn\'t" to advise someone against doing something harmful or unhealthy.',
    explanationEs: 'Para aconsejar en contra de un mal hábito o algo perjudicial para la salud ("It is unhealthy"), se utiliza "shouldn\'t" (no deberías).',
    grammarTip: '"Shouldn’t" se utiliza para dar recomendaciones y consejos negativos sobre lo que no es conveniente hacer.',
    examples: [
      { en: 'You shouldn’t skip breakfast before your class.', es: 'No deberías saltarte el desayuno antes de tu clase.' },
      { en: 'You shouldn’t look at your screen for hours without resting.', es: 'No deberías mirar tu pantalla durante horas sin descansar.' }
    ]
  },
  {
    id: 'mod_03',
    topic: 'modals',
    type: 'contextual_grammar',
    topicLabel: 'Modal Verbs & Expressions',
    context: 'New employee onboarding at a tech startup.',
    prompt: 'You _______ bring your own computer. The company provides one for every worker.',
    options: ['don’t have to', 'mustn’t', 'should', 'have to'],
    correctAnswerIndex: 0,
    explanationEn: '"don\'t have to" expresses absence of obligation or lack of necessity (you can if you want, but it is not necessary because the company provides one).',
    explanationEs: 'Como la empresa proporciona un equipo, no hay necesidad de llevar uno propio. "Don\'t have to" indica ausencia de obligación (no es necesario / no tienes que). "Mustn\'t" significaría prohibición estricta.',
    grammarTip: '"Don\'t have to" / "doesn\'t have to" significa que algo NO es obligatorio ni necesario (opcional). No lo confundas con prohibición.',
    examples: [
      { en: 'Tomorrow is Sunday, so we don’t have to wake up early.', es: 'Mañana es domingo, así que no tenemos que levantarnos temprano.' },
      { en: 'Apprentices don’t have to pay for SENA courses; they are free.', es: 'Los aprendices no tienen que pagar por los cursos del SENA; son gratuitos.' }
    ]
  },
  {
    id: 'mod_04',
    topic: 'modals',
    type: 'contextual_grammar',
    topicLabel: 'Modal Verbs & Expressions',
    context: 'Hospital intensive care unit sign.',
    prompt: 'Visitors _______ use their mobile phones inside this room. It is strictly prohibited.',
    options: ['mustn’t', 'don’t have to', 'should', 'can'],
    correctAnswerIndex: 0,
    explanationEn: 'When an action is strictly forbidden or prohibited by law/rule, we use "mustn\'t".',
    explanationEs: 'Cuando una acción está totalmente prohibida ("strictly prohibited"), la forma correcta es "mustn\'t" (no debes / está prohibido).',
    grammarTip: '"Mustn’t" expresa PROHIBICIÓN absoluta. Es contra las reglas o peligroso.',
    examples: [
      { en: 'You mustn’t park your vehicle in front of the emergency door.', es: 'No debes estacionar tu vehículo frente a la puerta de emergencias.' },
      { en: 'Students mustn’t copy during the examination.', es: 'Los estudiantes no deben copiar durante el examen.' }
    ]
  },
  {
    id: 'mod_05',
    topic: 'modals',
    type: 'contextual_grammar',
    topicLabel: 'Modal Verbs & Expressions',
    context: 'Study strategy advice from an instructor.',
    prompt: 'You _______ practice with interactive exercises every day if you want to speak fluently.',
    options: ['should', 'have', 'mustn’t', 'don’t have to'],
    correctAnswerIndex: 0,
    explanationEn: 'We use "should" to offer positive advice or recommendations.',
    explanationEs: '"Should" es el modal ideal para brindar un consejo o recomendación positiva de estudio.',
    grammarTip: 'Usa "should + verbo base" para dar sugerencias o consejos sobre lo que es una buena idea hacer.',
    examples: [
      { en: 'You should review your notes after each class.', es: 'Deberías repasar tus notas después de cada clase.' },
      { en: 'You should drink plenty of water during the day.', es: 'Deberías beber abundante agua durante el día.' }
    ]
  },
  {
    id: 'mod_06',
    topic: 'modals',
    type: 'complete_sentence',
    topicLabel: 'Modal Verbs & Expressions',
    prompt: 'Laura is bilingual. She _______ speak English and French with great fluency.',
    options: ['can', 'must to', 'have to', 'should to'],
    correctAnswerIndex: 0,
    explanationEn: 'We use the modal "can" to express ability.',
    explanationEs: 'El modal "can" expresa habilidad o capacidad adquirida. Además, no lleva la partícula "to".',
    grammarTip: 'Can + verbo base expresa habilidad física o intelectual (saber o poder hacer algo).',
    examples: [
      { en: 'He can develop websites using React and TypeScript.', es: 'Él puede desarrollar sitios web usando React y TypeScript.' },
      { en: 'Can you swim across the river?', es: '¿Puedes nadar a través del río?' }
    ]
  },
  {
    id: 'mod_07',
    topic: 'modals',
    type: 'complete_sentence',
    topicLabel: 'Modal Verbs & Expressions',
    prompt: 'Carlos _______ work on Saturdays because his company operates only Monday through Friday.',
    options: ['doesn’t have to', 'mustn’t', 'don’t have to', 'should to'],
    correctAnswerIndex: 0,
    explanationEn: 'For third-person singular "Carlos" (he), the absence of obligation is expressed as "doesn\'t have to".',
    explanationEs: 'Para la tercera persona singular ("Carlos"), la ausencia de obligación se formula con "doesn\'t have to".',
    grammarTip: 'Con he / she / it, la ausencia de obligación es: doesn\'t have to + verbo base.',
    examples: [
      { en: 'She doesn’t have to attend the meeting today.', es: 'Ella no tiene que asistir a la reunión hoy.' },
      { en: 'He doesn’t have to wear a suit to the office.', es: 'Él no tiene que vestir traje para ir a la oficina.' }
    ]
  },
  {
    id: 'mod_08',
    topic: 'modals',
    type: 'contextual_grammar',
    topicLabel: 'Modal Verbs & Expressions',
    context: 'Airport security checkpoint.',
    prompt: 'All passengers _______ present a valid passport before boarding international flights. It is required by law.',
    options: ['must', 'can', 'shouldn’t', 'don’t have to'],
    correctAnswerIndex: 0,
    explanationEn: '"must" indicates a strong and unavoidable formal requirement.',
    explanationEs: '"must" expresa un requisito formal e ineludible exigido por las autoridades aeroportuarias.',
    grammarTip: '"Must + verbo base" indica una obligación formal e indispensable.',
    examples: [
      { en: 'Drivers must stop at a red traffic light.', es: 'Los conductores deben detenerse ante una luz roja.' },
      { en: 'Candidates must bring a black ink pen to the test.', es: 'Los postulantes deben traer un bolígrafo de tinta negra a la prueba.' }
    ]
  },
  {
    id: 'mod_09',
    topic: 'modals',
    type: 'complete_sentence',
    topicLabel: 'Modal Verbs & Expressions',
    prompt: 'You look exhausted after debugging code all night. You _______ go home and get some sleep.',
    options: ['should', 'have', 'mustn’t', 'can to'],
    correctAnswerIndex: 0,
    explanationEn: '"should" is used to give friendly advice based on someone\'s physical condition.',
    explanationEs: '"should" se usa para dar un consejo fraternal y considerado a una persona que luce agotada.',
    grammarTip: 'Consejo personal: You should + verbo base (deberías descansar).',
    examples: [
      { en: 'You should take a break every 50 minutes.', es: 'Deberías tomar una pausa cada 50 minutos.' },
      { en: 'You should see a doctor if the headache persists.', es: 'Deberías consultar a un médico si el dolor de cabeza persiste.' }
    ]
  },
  {
    id: 'mod_10',
    topic: 'modals',
    type: 'contextual_grammar',
    topicLabel: 'Modal Verbs & Expressions',
    context: 'Computer laboratory rules at SENA.',
    prompt: 'Apprentices _______ eat food or drink beverages near the laboratory computers. It is forbidden.',
    options: ['mustn’t', 'don’t have to', 'should', 'can'],
    correctAnswerIndex: 0,
    explanationEn: 'Eating near laboratory computers is prohibited by institutional policy, which requires "mustn\'t".',
    explanationEs: 'Consumir alimentos junto a los equipos está terminantemente prohibido por el reglamento del laboratorio ("It is forbidden"), por lo que se usa "mustn\'t".',
    grammarTip: 'Cuando algo está expresamente prohibido por norma institucional, usa "mustn\'t".',
    examples: [
      { en: 'You mustn’t install unauthorized software on laboratory PCs.', es: 'No debes instalar software no autorizado en las PC del laboratorio.' },
      { en: 'You mustn’t smoke on the institutional campus.', es: 'No debes fumar en el campus institucional.' }
    ]
  },
  {
    id: 'mod_11',
    topic: 'modals',
    type: 'complete_sentence',
    topicLabel: 'Modal Verbs & Expressions',
    prompt: 'We _______ wear a tie to the office; business casual attire is completely fine.',
    options: ['don’t have to', 'mustn’t', 'should', 'have to'],
    correctAnswerIndex: 0,
    explanationEn: 'Wearing a tie is not mandatory (business casual is fine), so we use "don\'t have to".',
    explanationEs: 'El uso de corbata no es obligatorio ya que se permite vestimenta casual de negocios. Por ello, se usa "don\'t have to" (no tenemos que).',
    grammarTip: 'Ausencia de obligación en vestimenta: We don\'t have to wear...',
    examples: [
      { en: 'We don’t have to print the slides; everyone has the PDF.', es: 'No tenemos que imprimir las diapositivas; todos tienen el PDF.' },
      { en: 'You don’t have to come in person; you can join via Zoom.', es: 'No tienes que venir en persona; puedes unirte por Zoom.' }
    ]
  },
  {
    id: 'mod_12',
    topic: 'modals',
    type: 'complete_sentence',
    topicLabel: 'Modal Verbs & Expressions',
    prompt: 'Excuse me, _______ you show me how to upload the evidence to the Territorio platform?',
    options: ['can', 'must', 'should to', 'have to'],
    correctAnswerIndex: 0,
    explanationEn: '"Can you + base verb...?" is a common modal structure to ask for help or permission.',
    explanationEs: '"Can you + verbo base...?" es la estructura común y directa para solicitar ayuda o favores.',
    grammarTip: 'Pregunta de solicitud: Can you + verbo base + complemento, please?',
    examples: [
      { en: 'Can you repeat the explanation, please?', es: '¿Puedes repetir la explicación, por favor?' },
      { en: 'Can you lend me your pencil?', es: '¿Me puedes prestar tu lápiz?' }
    ]
  },
  {
    id: 'mod_13',
    topic: 'modals',
    type: 'complete_sentence',
    topicLabel: 'Modal Verbs & Expressions',
    prompt: 'She _______ submit her medical certificate within three days after being absent from work.',
    options: ['has to', 'have to', 'should to', 'must to'],
    correctAnswerIndex: 0,
    explanationEn: 'Third-person singular "She" requires "has to" for an external workplace requirement.',
    explanationEs: 'El sujeto en tercera persona "She" concuerda con "has to" para expresar un requisito laboral.',
    grammarTip: 'Con He/She/It se usa "has to + verbo base" en lugar de "have to".',
    examples: [
      { en: 'He has to renew his driver’s license this month.', es: 'Él tiene que renovar su licencia de conducir este mes.' },
      { en: 'She has to deliver the quarterly financial report.', es: 'Ella tiene que entregar el informe financiero trimestral.' }
    ]
  },
  {
    id: 'mod_14',
    topic: 'modals',
    type: 'contextual_grammar',
    topicLabel: 'Modal Verbs & Expressions',
    context: 'Online safety guidelines.',
    prompt: 'You _______ share your passwords or confidential bank pins with strangers.',
    options: ['shouldn’t', 'don’t have to', 'can', 'must'],
    correctAnswerIndex: 0,
    explanationEn: '"shouldn\'t" warns against an unsafe and reckless behavior.',
    explanationEs: '"shouldn\'t" aconseja firmemente no realizar una conducta peligrosa y desaconsejada.',
    grammarTip: 'Usa "shouldn’t" para advertencias de seguridad personal y digital.',
    examples: [
      { en: 'You shouldn’t click on suspicious email links.', es: 'No deberías hacer clic en enlaces sospechosos de correos.' },
      { en: 'You shouldn’t reveal personal information on public forums.', es: 'No deberías revelar información personal en foros públicos.' }
    ]
  },
  {
    id: 'mod_15',
    topic: 'modals',
    type: 'complete_sentence',
    topicLabel: 'Modal Verbs & Expressions',
    prompt: 'In Colombia, motor cyclists _______ turn on their headlights at all times according to traffic laws.',
    options: ['have to', 'can', 'don’t have to', 'should to'],
    correctAnswerIndex: 0,
    explanationEn: 'According to traffic laws (external legal requirement), motorcyclists "have to" keep headlights on.',
    explanationEs: 'Al tratarse de una ley de tránsito formal obligatoria en Colombia, se utiliza "have to".',
    grammarTip: 'Leyes y reglamentos de tránsito = have to + verbo base.',
    examples: [
      { en: 'Drivers have to wear seatbelts in the car.', es: 'Los conductores tienen que usar el cinturón de seguridad en el auto.' },
      { en: 'Pedestrians have to use the crosswalk to cross safely.', es: 'Los peatones tienen que usar el paso de cebra para cruzar seguros.' }
    ]
  },
  {
    id: 'mod_16',
    topic: 'modals',
    type: 'complete_sentence',
    topicLabel: 'Modal Verbs & Expressions',
    prompt: 'Students _______ leave the classroom during the exam unless they have special permission.',
    options: ['can’t', 'don’t have to', 'should', 'must'],
    correctAnswerIndex: 0,
    explanationEn: '"can\'t" expresses lack of permission (not allowed).',
    explanationEs: '"can\'t" expresa falta de autorización o permiso durante la evaluación.',
    grammarTip: '"Can\'t" se usa con frecuencia para expresar que algo no está permitido.',
    examples: [
      { en: 'You can’t take photos inside the museum.', es: 'No puedes tomar fotos dentro del museo.' },
      { en: 'Apprentices can’t enter the room without their instructor.', es: 'Los aprendices no pueden ingresar al salón sin su instructor.' }
    ]
  },
  {
    id: 'mod_17',
    topic: 'modals',
    type: 'contextual_grammar',
    topicLabel: 'Modal Verbs & Expressions',
    context: 'Preparing for a job interview.',
    prompt: 'You _______ research the company’s history and mission before attending the interview. It creates a great impression.',
    options: ['should', 'mustn’t', 'don’t have to', 'can’t'],
    correctAnswerIndex: 0,
    explanationEn: '"should" provides sound professional advice that improves the candidate\'s chances.',
    explanationEs: '"should" aporta un consejo profesional estratégico altamente recomendado para causar una excelente impresión.',
    grammarTip: 'Recomendaciones para el éxito: You should + verbo base.',
    examples: [
      { en: 'You should arrive 15 minutes before the scheduled interview.', es: 'Deberías llegar 15 minutos antes de la entrevista programada.' },
      { en: 'You should prepare questions to ask the recruiter.', es: 'Deberías preparar preguntas para hacerle al reclutador.' }
    ]
  },
  {
    id: 'mod_18',
    topic: 'modals',
    type: 'complete_sentence',
    topicLabel: 'Modal Verbs & Expressions',
    prompt: 'Do we _______ pay for the parking ticket here or at the exit machine?',
    options: ['have to', 'must', 'should to', 'can to'],
    correctAnswerIndex: 0,
    explanationEn: 'In questions with "Do / Does", we use the auxiliary form "have to": Do + subject + have to + base verb?',
    explanationEs: 'En preguntas formuladas con el auxiliar "Do", la estructura gramatical correcta es "Do we have to + verbo base?". No se usa "Do we must".',
    grammarTip: 'Pregunta de obligación externa: Do / Does + sujeto + have to + verbo base?',
    examples: [
      { en: 'Does she have to work late today?', es: '¿Tiene ella que trabajar hasta tarde hoy?' },
      { en: 'Do we have to submit the physical copy as well?', es: '¿Tenemos que entregar la copia física también?' }
    ]
  },
  {
    id: 'mod_19',
    topic: 'modals',
    type: 'contextual_grammar',
    topicLabel: 'Modal Verbs & Expressions',
    context: 'At a museum with free admission.',
    prompt: 'Admission is completely free on Sundays, so visitors _______ buy any ticket.',
    options: ['don’t have to', 'mustn’t', 'should', 'have to'],
    correctAnswerIndex: 0,
    explanationEn: 'Because admission is free, buying a ticket is unnecessary ("don\'t have to").',
    explanationEs: 'Al ser la entrada gratuita, no hay necesidad de adquirir una boleta. "Don\'t have to" expresa falta de necesidad.',
    grammarTip: 'Sin costo / Opcional = don\'t have to.',
    examples: [
      { en: 'You don’t have to pay for parking; it’s complimentary.', es: 'No tienes que pagar por el estacionamiento; es de cortesía.' },
      { en: 'They don’t have to bring plates; we have disposable ones.', es: 'Ellos no tienen que traer platos; tenemos desechables.' }
    ]
  },
  {
    id: 'mod_20',
    topic: 'modals',
    type: 'complete_sentence',
    topicLabel: 'Modal Verbs & Expressions',
    prompt: 'You _______ shout in the library. People are trying to concentrate on their reading.',
    options: ['mustn’t', 'don’t have to', 'can', 'should to'],
    correctAnswerIndex: 0,
    explanationEn: 'Shouting in a quiet library is against the core rules and disturbs everyone, requiring "mustn\'t".',
    explanationEs: 'Gritar en una biblioteca viola la norma fundamental de silencio y perturba el estudio, exigiendo "mustn\'t" (no debes / prohibido).',
    grammarTip: 'Mustn\'t se usa cuando una acción está prohibida y perjudica la convivencia.',
    examples: [
      { en: 'You mustn’t make noise during the recording session.', es: 'No debes hacer ruido durante la sesión de grabación.' },
      { en: 'You mustn’t feed the animals in the national sanctuary.', es: 'No debes alimentar a los animales en el santuario nacional.' }
    ]
  }
];

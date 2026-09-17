import { Question } from '../types';

export const willQuestions: Question[] = [
  {
    id: 'wil_01',
    topic: 'will',
    type: 'complete_sentence',
    topicLabel: 'Future with Will',
    prompt: 'They _______ travel to Bogotá next month to sign the contract.',
    options: ['will', 'are', 'going', 'would'],
    correctAnswerIndex: 0,
    explanationEn: 'We use the modal auxiliary "will" followed directly by the base verb "travel" to express future action.',
    explanationEs: 'Se utiliza el verbo modal "will" seguido directamente del verbo en su forma base ("travel") para expresar una acción o predicción futura.',
    grammarTip: 'Estructura afirmativa: Sujeto + will + verbo en forma base. El verbo no lleva "to", ni "-ing", ni "-s".',
    examples: [
      { en: 'She will arrive at 8:00 AM.', es: 'Ella llegará a las 8:00 AM.' },
      { en: 'We will send the email shortly.', es: 'Enviaremos el correo electrónico en breve.' }
    ]
  },
  {
    id: 'wil_02',
    topic: 'will',
    type: 'contextual_grammar',
    topicLabel: 'Future with Will',
    context: 'The phone is ringing on the office desk.',
    prompt: 'Don’t worry, I _______ answer it!',
    options: ['will', 'am going to', 'did', 'would like'],
    correctAnswerIndex: 0,
    explanationEn: 'For spontaneous decisions made at the moment of speaking, we use "will" (often contracted as I\'ll).',
    explanationEs: 'Para decisiones espontáneas e inmediatas tomadas en el mismo momento en que se habla, se emplea "will", no "going to".',
    grammarTip: 'Usa "will" para decisiones tomadas de manera espontánea en el momento de la conversación.',
    examples: [
      { en: 'I am hungry. I will make a quick sandwich.', es: 'Tengo hambre. Prepararé un sándwich rápido.' },
      { en: 'It is cold in here. I will close the window.', es: 'Hace frío aquí. Cerraré la ventana.' }
    ]
  },
  {
    id: 'wil_03',
    topic: 'will',
    type: 'complete_sentence',
    topicLabel: 'Future with Will',
    prompt: 'I believe artificial intelligence _______ transform many industries in the future.',
    options: ['will', 'going to', 'is', 'would to'],
    correctAnswerIndex: 0,
    explanationEn: 'Verbs of belief and opinion like "believe", "think", or "hope" commonly take "will" for future predictions.',
    explanationEs: 'Con expresiones de opinión o predicción como "I believe" o "I think", se usa comúnmente "will + verbo base".',
    grammarTip: 'Usamos "will" con verbos como think, believe, hope y adverbios como probably para formular predicciones.',
    examples: [
      { en: 'I think the weather will be sunny tomorrow.', es: 'Creo que el clima estará soleado mañana.' },
      { en: 'Experts believe tech jobs will increase.', es: 'Los expertos creen que los empleos tecnológicos aumentarán.' }
    ]
  },
  {
    id: 'wil_04',
    topic: 'will',
    type: 'complete_sentence',
    topicLabel: 'Future with Will',
    prompt: 'Don\'t worry about your secret. I _______ tell anyone.',
    options: ['won’t', 'not will', 'will not to', 'am not'],
    correctAnswerIndex: 0,
    explanationEn: '"won\'t" is the contraction of "will not", used here for making a negative promise.',
    explanationEs: '"won\'t" es la forma contracta de "will not", utilizada comúnmente para promesas en negativo.',
    grammarTip: 'Forma negativa de will: will not o la contracción won\'t + verbo en forma base.',
    examples: [
      { en: 'I won’t forget your birthday.', es: 'No olvidaré tu cumpleaños.' },
      { en: 'We won’t be late for the meeting.', es: 'No llegaremos tarde a la reunión.' }
    ]
  },
  {
    id: 'wil_05',
    topic: 'will',
    type: 'multiple_choice',
    topicLabel: 'Future with Will',
    prompt: 'Which sentence correctly expresses an offer of help?',
    options: [
      'I will carry those heavy boxes for you.',
      'I will to carry those heavy boxes for you.',
      'I will carrying those heavy boxes for you.',
      'I am will carry those heavy boxes for you.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'The modal verb "will" is always followed directly by the bare infinitive (base form) without "to" or "-ing".',
    explanationEs: 'El modal "will" siempre va seguido de la forma base del verbo sin la partícula "to" ni terminación "-ing": "I will carry".',
    grammarTip: 'Regla de oro: después de will, el verbo SIEMPRE va en su forma base (infinitivo sin "to").',
    examples: [
      { en: 'I will help you with your homework.', es: 'Te ayudaré con tu tarea.' },
      { en: 'We will guide you through the SENA platform.', es: 'Te guiaremos a través de la plataforma del SENA.' }
    ]
  },
  {
    id: 'wil_06',
    topic: 'will',
    type: 'complete_sentence',
    topicLabel: 'Future with Will',
    prompt: '_______ you help me translate this technical document, please?',
    options: ['Will', 'Are', 'Do', 'Going'],
    correctAnswerIndex: 0,
    explanationEn: 'We use "Will you + base verb...?" as a polite request for someone to do something.',
    explanationEs: 'Se utiliza "Will you + verbo base...?" para realizar una solicitud o pedir ayuda de manera cortés.',
    grammarTip: 'Estructura interrogativa para peticiones: Will + you + verbo en forma base + complemento?',
    examples: [
      { en: 'Will you open the door for me?', es: '¿Abrirías / abrirás la puerta por mí?' },
      { en: 'Will you review my code snippet, please?', es: '¿Revisarás mi fragmento de código, por favor?' }
    ]
  },
  {
    id: 'wil_07',
    topic: 'will',
    type: 'contextual_grammar',
    topicLabel: 'Future with Will',
    context: 'At a restaurant: Customer reading the menu.',
    prompt: 'Waiter: "What would you like to order?" — Customer: "I _______ have the grilled chicken with salad."',
    options: ['will', 'going to', 'am', 'did'],
    correctAnswerIndex: 0,
    explanationEn: 'When ordering in a restaurant or making a spontaneous decision, English speakers use "I\'ll have" or "I will have".',
    explanationEs: 'Al ordenar comida en un restaurante, se toma una decisión al instante, por lo cual se dice en inglés "I will have" o "I\'ll have".',
    grammarTip: 'En restaurantes o tiendas: "I will have + plato/bebida" es la fórmula estándar para ordenar.',
    examples: [
      { en: 'I will have a cup of black coffee, please.', es: 'Tomaré una taza de café negro, por favor.' },
      { en: 'We will have the daily special.', es: 'Pediremos el plato del día.' }
    ]
  },
  {
    id: 'wil_08',
    topic: 'will',
    type: 'complete_sentence',
    topicLabel: 'Future with Will',
    prompt: 'The new highway _______ reduce travel time between the cities significantly.',
    options: ['will', 'is', 'would like', 'has'],
    correctAnswerIndex: 0,
    explanationEn: '"will reduce" represents a general factual prediction about the future effect.',
    explanationEs: '"will reduce" expresa una predicción lógica sobre el impacto futuro de la autopista.',
    grammarTip: 'Will se usa para predicciones objetivas basadas en hechos o avances futuros.',
    examples: [
      { en: 'The new system will improve database speed.', es: 'El nuevo sistema mejorará la velocidad de la base de datos.' },
      { en: 'Electric cars will become cheaper.', es: 'Los autos eléctricos se volverán más económicos.' }
    ]
  },
  {
    id: 'wil_09',
    topic: 'will',
    type: 'multiple_choice',
    topicLabel: 'Future with Will',
    prompt: 'Which is the correct question to ask about the start time of the webinar?',
    options: [
      'When will the webinar start?',
      'When will start the webinar?',
      'When the webinar will start?',
      'When will the webinar starting?'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'In Wh- questions with "will", the word order is: Wh-word + will + subject + base verb.',
    explanationEs: 'El orden de las preguntas con Wh- y will es: Palabra interrogativa + will + sujeto + verbo base: When + will + the webinar + start?',
    grammarTip: 'Orden de pregunta: Wh-word + will + sujeto + verbo en forma base?',
    examples: [
      { en: 'Where will you work after graduating?', es: '¿Dónde trabajarás después de graduarte?' },
      { en: 'What time will the instructor arrive?', es: '¿A qué hora llegará el instructor?' }
    ]
  },
  {
    id: 'wil_10',
    topic: 'will',
    type: 'complete_sentence',
    topicLabel: 'Future with Will',
    prompt: 'I promise I _______ submit the evidence before midnight.',
    options: ['will', 'would like', 'am', 'have'],
    correctAnswerIndex: 0,
    explanationEn: 'We use "will" when making promises.',
    explanationEs: 'Con el verbo "promise" (prometer), siempre se utiliza "will" para manifestar un compromiso futuro.',
    grammarTip: 'Las promesas siempre se expresan con "will": I promise I will...',
    examples: [
      { en: 'I promise I will call you as soon as I arrive.', es: 'Prometo que te llamaré tan pronto como llegue.' },
      { en: 'He promises he will finish the project on time.', es: 'Él promete que terminará el proyecto a tiempo.' }
    ]
  },
  {
    id: 'wil_11',
    topic: 'will',
    type: 'complete_sentence',
    topicLabel: 'Future with Will',
    prompt: 'If you need additional assistance, the instructor _______ guide you through the process.',
    options: ['will', 'is', 'did', 'would like'],
    correctAnswerIndex: 0,
    explanationEn: 'In the result clause of a future situation, "will" combines with the base verb "guide".',
    explanationEs: 'En el resultado de situaciones futuras, se emplea el modal "will" seguido de la forma base del verbo.',
    grammarTip: 'Will + verbo base expresa el resultado seguro o la disposición en situaciones futuras.',
    examples: [
      { en: 'Our team will support your implementation.', es: 'Nuestro equipo apoyará tu implementación.' },
      { en: 'The advisor will contact you tomorrow.', es: 'El asesor se comunicará contigo mañana.' }
    ]
  },
  {
    id: 'wil_12',
    topic: 'will',
    type: 'complete_sentence',
    topicLabel: 'Future with Will',
    prompt: 'Probably, our software company _______ hire five new junior developers this year.',
    options: ['will', 'is', 'would', 'shall to'],
    correctAnswerIndex: 0,
    explanationEn: 'Adverbs of probability such as "Probably" or "Perhaps" frequently accompany "will" for future forecasts.',
    explanationEs: 'El adverbio "Probably" (probablemente) se combina habitualmente con "will" para pronosticar planes o posibilidades futuras.',
    grammarTip: 'Posición de probably: Sujeto + will + probably + verbo o Probably, sujeto + will + verbo.',
    examples: [
      { en: 'They will probably travel by train.', es: 'Ellos probablemente viajarán en tren.' },
      { en: 'She will probably pass the certification.', es: 'Ella probablemente aprobará la certificación.' }
    ]
  },
  {
    id: 'wil_13',
    topic: 'will',
    type: 'complete_sentence',
    topicLabel: 'Future with Will',
    prompt: 'The manager says the store _______ remain open until 9:00 PM during holidays.',
    options: ['will', 'is to', 'would like', 'shalling'],
    correctAnswerIndex: 0,
    explanationEn: '"will remain" expresses a determined future policy or schedule.',
    explanationEs: '"will remain" expresa el estado futuro estipulado por la administración de la tienda.',
    grammarTip: 'Will se usa para anunciar horarios y directrices futuras.',
    examples: [
      { en: 'The library will close at 6:00 PM today.', es: 'La biblioteca cerrará a las 6:00 PM hoy.' },
      { en: 'The platform will update automatically tonight.', es: 'La plataforma se actualizará automáticamente esta noche.' }
    ]
  },
  {
    id: 'wil_14',
    topic: 'will',
    type: 'complete_sentence',
    topicLabel: 'Future with Will',
    prompt: 'She is confident that she _______ pass the SENA English evaluation.',
    options: ['will', 'is', 'can to', 'would liking'],
    correctAnswerIndex: 0,
    explanationEn: 'Expressions of confidence ("is confident that", "is sure that") pair naturally with "will".',
    explanationEs: 'Expresiones de seguridad como "is confident that" o "is sure that" se acompañan de "will + verbo base".',
    grammarTip: 'Usa "will" tras expresiones de certeza personal sobre el futuro.',
    examples: [
      { en: 'I am sure you will do a great job.', es: 'Estoy seguro de que harás un gran trabajo.' },
      { en: 'He is sure he will get the scholarship.', es: 'Él está seguro de que obtendrá la beca.' }
    ]
  },
  {
    id: 'wil_15',
    topic: 'will',
    type: 'multiple_choice',
    topicLabel: 'Future with Will',
    prompt: 'Choose the sentence with the correct negative form of "will":',
    options: [
      'We won’t accept late submissions for this evidence.',
      'We willn’t accept late submissions for this evidence.',
      'We don’t will accept late submissions for this evidence.',
      'We aren’t will accept late submissions for this evidence.'
    ],
    correctAnswerIndex: 0,
    explanationEn: '"won\'t" is the only correct English contraction for "will not". Forms like "willn\'t" or "don\'t will" are ungrammatical.',
    explanationEs: 'La única contracción correcta de "will not" es "won\'t". Formas como "willn\'t" o "don\'t will" son incorrectas en inglés.',
    grammarTip: 'Will + not se contrae como "won\'t" de manera universal para todas las personas gramaticales.',
    examples: [
      { en: 'I won’t make that mistake again.', es: 'No cometeré ese error de nuevo.' },
      { en: 'They won’t reveal the exam questions.', es: 'Ellos no revelarán las preguntas del examen.' }
    ]
  }
];

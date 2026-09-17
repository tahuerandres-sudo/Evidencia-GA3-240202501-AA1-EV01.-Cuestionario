import { Question } from '../types';

export const wouldLikeQuestions: Question[] = [
  {
    id: 'wdl_01',
    topic: 'would_like',
    type: 'complete_sentence',
    topicLabel: 'Would Like To',
    prompt: 'They _______ to visit London someday to practice their English skills.',
    options: ['would like', 'like would', 'would liking', 'like to would'],
    correctAnswerIndex: 0,
    explanationEn: 'The polite modal expression is "would like" followed by the infinitive with "to" ("to visit").',
    explanationEs: 'La expresión cortés para deseos es "would like" seguida del infinitivo con "to": "They would like to visit...".',
    grammarTip: 'Estructura afirmativa: Sujeto + would like + to + verbo en forma base. Significa "me/le gustaría".',
    examples: [
      { en: 'I would like to travel to Canada next year.', es: 'Me gustaría viajar a Canadá el próximo año.' },
      { en: 'She would like to learn Portuguese.', es: 'A ella le gustaría aprender portugués.' }
    ]
  },
  {
    id: 'wdl_02',
    topic: 'would_like',
    type: 'contextual_grammar',
    topicLabel: 'Would Like To',
    context: 'At a restaurant, the waiter approaches the table.',
    prompt: 'Waiter: "Good evening! What _______ to drink with your meal?"',
    options: [
      'would you like',
      'do you would like',
      'would like you',
      'you would like'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'In questions, "would" precedes the subject: Wh-word + would + subject + like + to + verb?',
    explanationEs: 'En preguntas, el modal "would" se coloca antes del sujeto: What + would + you + like + to drink...?',
    grammarTip: 'Estructura de pregunta: (Wh-word) + would + sujeto + like + to + verbo base?',
    examples: [
      { en: 'Would you like to see the dessert menu?', es: '¿Le gustaría ver el menú de postres?' },
      { en: 'What would you like to order today?', es: '¿Qué le gustaría ordenar hoy?' }
    ]
  },
  {
    id: 'wdl_03',
    topic: 'would_like',
    type: 'complete_sentence',
    topicLabel: 'Would Like To',
    prompt: 'Carlos _______ to apply for a software engineering scholarship in Europe.',
    options: ['would like', 'would likes', 'would liking', 'likes would'],
    correctAnswerIndex: 0,
    explanationEn: 'Modal verbs do not take an "-s" in the third person. "Would like" remains invariant for all subjects.',
    explanationEs: 'Los verbos modales son invariables y no agregan "-s" en tercera persona. Nunca se dice "would likes", siempre es "would like".',
    grammarTip: '¡Atención! "Would like" nunca cambia de forma: I, You, He, She, We, They -> would like.',
    examples: [
      { en: 'He would like to start his own tech company.', es: 'A él le gustaría iniciar su propia empresa de tecnología.' },
      { en: 'She would like to work remotely for an international firm.', es: 'A ella le gustaría trabajar de forma remota para una firma internacional.' }
    ]
  },
  {
    id: 'wdl_04',
    topic: 'would_like',
    type: 'complete_sentence',
    topicLabel: 'Would Like To',
    prompt: 'I’d _______ to schedule an appointment with the SENA academic coordinator.',
    options: ['like', 'liking', 'liked', 'to like'],
    correctAnswerIndex: 0,
    explanationEn: '"I\'d" is the contracted form of "I would", so it is followed directly by "like" and "to + verb".',
    explanationEs: '"I\'d" es la contracción de "I would". Por lo tanto, la palabra requerida es simplemente "like": "I\'d like to schedule...".',
    grammarTip: 'Contracción común: I\'d like / We\'d like / She\'d like + to + verbo.',
    examples: [
      { en: 'I’d like to ask a quick question.', es: 'Me gustaría hacer una pregunta rápida.' },
      { en: 'We’d like to reserve a table for four people.', es: 'Nos gustaría reservar una mesa para cuatro personas.' }
    ]
  },
  {
    id: 'wdl_05',
    topic: 'would_like',
    type: 'multiple_choice',
    topicLabel: 'Would Like To',
    prompt: 'Which sentence correctly expresses a future desire in a shopping context?',
    options: [
      'I would like to try on this blue jacket, please.',
      'I would like try on this blue jacket, please.',
      'I would liking to try on this blue jacket, please.',
      'I like would to try on this blue jacket, please.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'When followed by another verb, "would like" requires the infinitive particle "to": "would like to try on".',
    explanationEs: 'Cuando a "would like" le sigue una acción, es obligatorio incluir la partícula "to": "would like to try on". La opción B carece de "to".',
    grammarTip: 'No olvides la partícula "to" cuando a would like le sigue un verbo: would like TO + verbo.',
    examples: [
      { en: 'She would like to buy a new smartphone.', es: 'A ella le gustaría comprar un teléfono inteligente nuevo.' },
      { en: 'We would like to pay by credit card.', es: 'Nos gustaría pagar con tarjeta de crédito.' }
    ]
  },
  {
    id: 'wdl_06',
    topic: 'would_like',
    type: 'contextual_grammar',
    topicLabel: 'Would Like To',
    context: 'Free time conversation between two apprentices on Friday afternoon.',
    prompt: 'Andrea: "_______ to watch a movie at the cinema this evening?"',
    options: [
      'Would you like',
      'Do you would like',
      'Are you liking',
      'Will you to like'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'We use "Would you like to...?" to make a polite invitation to do something together.',
    explanationEs: 'Se utiliza la fórmula de cortesía "Would you like to...?" para invitar a alguien a realizar una actividad.',
    grammarTip: 'Usa "Would you like to + verbo...?" para hacer invitaciones amables y cordiales.',
    examples: [
      { en: 'Would you like to have lunch with us?', es: '¿Te gustaría almorzar con nosotros?' },
      { en: 'Would you like to join our study group?', es: '¿Te gustaría unirte a nuestro grupo de estudio?' }
    ]
  },
  {
    id: 'wdl_07',
    topic: 'would_like',
    type: 'complete_sentence',
    topicLabel: 'Would Like To',
    prompt: 'My parents _______ to spend their next vacation in San Andrés Island.',
    options: ['would like', 'would to like', 'liking would', 'are would like'],
    correctAnswerIndex: 0,
    explanationEn: 'Plural subject "My parents" uses the invariant modal phrase "would like" followed by "to spend".',
    explanationEs: 'El sujeto plural "My parents" utiliza la frase modal invariable "would like" seguida de "to spend".',
    grammarTip: 'Sujeto + would like + to + verbo base sin importar si el sujeto es singular o plural.',
    examples: [
      { en: 'My parents would like to travel together.', es: 'A mis padres les gustaría viajar juntos.' },
      { en: 'The students would like to participate in the fair.', es: 'A los aprendices les gustaría participar en la feria.' }
    ]
  },
  {
    id: 'wdl_08',
    topic: 'would_like',
    type: 'complete_sentence',
    topicLabel: 'Would Like To',
    prompt: 'During the interview, the candidate said: "I _______ to work as a frontend developer."',
    options: ['would like', 'like would', 'would liking', 'am like to'],
    correctAnswerIndex: 0,
    explanationEn: 'In job interviews, "would like to" expresses professional aspirations politely and clearly.',
    explanationEs: 'En entrevistas de trabajo, "would like to" expresa aspiraciones profesionales de forma elegante y respetuosa.',
    grammarTip: '"I would like to work..." es la forma más profesional y adecuada en contextos laborales.',
    examples: [
      { en: 'I would like to contribute to your company’s growth.', es: 'Me gustaría contribuir al crecimiento de su empresa.' },
      { en: 'She would like to lead innovative digital projects.', es: 'A ella le gustaría liderar proyectos digitales innovadores.' }
    ]
  },
  {
    id: 'wdl_09',
    topic: 'would_like',
    type: 'complete_sentence',
    topicLabel: 'Would Like To',
    prompt: 'Which option completes the polite refusal? "Thank you for the invitation, but I _______ to stay home tonight."',
    options: ['would prefer', 'would like', 'like', 'am like'],
    correctAnswerIndex: 1,
    explanationEn: '"I would like to stay home tonight" expresses the speaker\'s desire politely in response to the invitation.',
    explanationEs: '"I would like to stay home tonight" expresa cortésmente el deseo de quedarse en casa frente a la invitación.',
    grammarTip: 'Para expresar preferencias amablemente: I would like to + verbo base.',
    examples: [
      { en: 'I would like to rest for an hour before continuing.', es: 'Me gustaría descansar una hora antes de continuar.' },
      { en: 'He would like to finish the report first.', es: 'A él le gustaría terminar el informe primero.' }
    ]
  },
  {
    id: 'wdl_10',
    topic: 'would_like',
    type: 'multiple_choice',
    topicLabel: 'Would Like To',
    prompt: 'Choose the correct question form to ask someone about their career goals:',
    options: [
      'Where would you like to work in five years?',
      'Where do you would like to work in five years?',
      'Where you would like to work in five years?',
      'Where would you liking to work in five years?'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'The question order is: Wh-word (Where) + would + subject (you) + like + to + verb (work).',
    explanationEs: 'El orden correcto para preguntas con Wh- es: Where + would + you + like + to work...?',
    grammarTip: 'Estructura interrogativa con Wh-: Wh-word + would + sujeto + like + to + verbo base?',
    examples: [
      { en: 'What country would you like to visit first?', es: '¿Qué país te gustaría visitar primero?' },
      { en: 'Which programming language would you like to master?', es: '¿Qué lenguaje de programación te gustaría dominar?' }
    ]
  },
  {
    id: 'wdl_11',
    topic: 'would_like',
    type: 'complete_sentence',
    topicLabel: 'Would Like To',
    prompt: 'Our team _______ to present the mobile app prototype to the instructor.',
    options: ['would like', 'would likes', 'would liking', 'like would to'],
    correctAnswerIndex: 0,
    explanationEn: '"Our team" takes "would like" followed by "to present".',
    explanationEs: '"Our team" se acompaña de la forma "would like" seguida de "to present".',
    grammarTip: '"Would like" no cambia nunca de forma con ningún sujeto.',
    examples: [
      { en: 'We would like to introduce our project members.', es: 'Nos gustaría presentar a los integrantes de nuestro proyecto.' },
      { en: 'They would like to demonstrate how the database works.', es: 'A ellos les gustaría demostrar cómo funciona la base de datos.' }
    ]
  },
  {
    id: 'wdl_12',
    topic: 'would_like',
    type: 'contextual_grammar',
    topicLabel: 'Would Like To',
    context: 'At a bookstore counter.',
    prompt: 'Customer: "Excuse me, I _______ to buy a bilingual technical dictionary."',
    options: ['would like', 'like would', 'would liking', 'will like to'],
    correctAnswerIndex: 0,
    explanationEn: 'Customers use "I would like to + verb" to state their purchasing intention politely.',
    explanationEs: 'En tiendas y librerías, "I would like to + verbo" es la forma más cortés para solicitar un producto.',
    grammarTip: 'En el comercio: "I would like to buy / have / see..." es más amable que usar "I want to".',
    examples: [
      { en: 'I would like to exchange this shirt for a smaller size.', es: 'Me gustaría cambiar esta camisa por una talla más pequeña.' },
      { en: 'I would like to see the warranty conditions.', es: 'Me gustaría ver las condiciones de la garantía.' }
    ]
  },
  {
    id: 'wdl_13',
    topic: 'would_like',
    type: 'complete_sentence',
    topicLabel: 'Would Like To',
    prompt: 'Santiago and his brother _______ to take an intensive web design course.',
    options: ['would like', 'like would', 'would to like', 'are like'],
    correctAnswerIndex: 0,
    explanationEn: 'Compound subject "Santiago and his brother" takes "would like to take".',
    explanationEs: 'El sujeto compuesto toma la forma "would like" seguida del infinitivo "to take".',
    grammarTip: 'Sujeto compuesto + would like + to + verbo en forma base.',
    examples: [
      { en: 'My colleagues and I would like to attend the workshop.', es: 'Mis compañeros y yo quisiéramos asistir al taller.' },
      { en: 'The apprentices would like to receive online certificates.', es: 'A los aprendices les gustaría recibir certificados virtuales.' }
    ]
  },
  {
    id: 'wdl_14',
    topic: 'would_like',
    type: 'multiple_choice',
    topicLabel: 'Would Like To',
    prompt: 'Which response correctly accepts an invitation?',
    options: [
      'Yes, I would love to! That sounds fantastic.',
      'Yes, I like to! That sounds fantastic.',
      'Yes, I would liking to! That sounds fantastic.',
      'Yes, I will like! That sounds fantastic.'
    ],
    correctAnswerIndex: 0,
    explanationEn: '"I would love to" (or "I would like to") is the natural, polite response to accept an invitation.',
    explanationEs: '"I would love to" o "I would like to" son las respuestas estándar y educadas para aceptar una invitación.',
    grammarTip: 'Respuestas breves para aceptar: "I would love to!" o "I would like to!".',
    examples: [
      { en: 'Would you like to come? - Yes, I’d love to!', es: '¿Te gustaría venir? - ¡Sí, me encantaría!' },
      { en: 'Would you like a cup of coffee? - Yes, please, I would.', es: '¿Le gustaría una taza de café? - Sí, por favor.' }
    ]
  },
  {
    id: 'wdl_15',
    topic: 'would_like',
    type: 'complete_sentence',
    topicLabel: 'Would Like To',
    prompt: 'She _______ to improve her listening comprehension before taking the SENA test.',
    options: ['would like', 'would likes', 'like would to', 'is liking to'],
    correctAnswerIndex: 0,
    explanationEn: 'She + would like + to + base verb (improve). "Would" does not take third-person "s".',
    explanationEs: 'Sujeto "She" + "would like" + "to improve". El modal "would" no admite terminaciones en "-s".',
    grammarTip: 'Recuerda: nunca agregues "s" a would like (incorrecto: would likes).',
    examples: [
      { en: 'She would like to practice speaking with a native speaker.', es: 'A ella le gustaría practicar conversación con un hablante nativo.' },
      { en: 'He would like to read technical documentation in English.', es: 'A él le gustaría leer documentación técnica en inglés.' }
    ]
  }
];

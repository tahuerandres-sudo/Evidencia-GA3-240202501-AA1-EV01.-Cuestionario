import { Question } from '../types';

export const conditionalQuestions: Question[] = [
  {
    id: 'cnd_01',
    topic: 'first_conditional',
    type: 'complete_sentence',
    topicLabel: 'First Conditional',
    prompt: 'If it rains tomorrow, we _______ stay at home and study.',
    options: ['will', 'would', 'are', 'have'],
    correctAnswerIndex: 0,
    explanationEn: 'The First Conditional follows the rule: If + present simple ("rains"), will + base verb ("stay").',
    explanationEs: 'El primer condicional sigue la regla estructural: If + presente simple ("rains"), will + verbo base ("stay"). Se usa para consecuencias reales y posibles en el futuro.',
    grammarTip: 'Estructura: If + presente simple, will + verbo en forma base. No uses "will" dentro de la cláusula con "if".',
    examples: [
      { en: 'If you study every day, you will pass the exam.', es: 'Si estudias todos los días, aprobarás el examen.' },
      { en: 'If they invite us, we will attend the event.', es: 'Si nos invitan, asistiremos al evento.' }
    ]
  },
  {
    id: 'cnd_02',
    topic: 'first_conditional',
    type: 'complete_sentence',
    topicLabel: 'First Conditional',
    prompt: 'We will miss the morning train if we _______ leave right now.',
    options: ['don’t', 'won’t', 'didn’t', 'doesn’t'],
    correctAnswerIndex: 0,
    explanationEn: 'In the if-clause, we use the present simple. For the subject "we", the negative auxiliary is "don\'t".',
    explanationEs: 'En la cláusula condicional introducida por "if", debemos usar el presente simple. Con el sujeto "we", la negación correcta en presente es "don\'t".',
    grammarTip: 'En la parte con "if" nunca se pone "will" ni "won\'t"; se usa presente simple (don\'t / doesn\'t).',
    examples: [
      { en: 'If she doesn’t wake up early, she will be late.', es: 'Si ella no se despierta temprano, llegará tarde.' },
      { en: 'We will be hungry if we don’t have breakfast.', es: 'Tendremos hambre si no desayunamos.' }
    ]
  },
  {
    id: 'cnd_03',
    topic: 'first_conditional',
    type: 'complete_sentence',
    topicLabel: 'First Conditional',
    prompt: 'If Carlos _______ the technical evidence today, the instructor will grade it tomorrow.',
    options: ['submits', 'submit', 'will submit', 'submitted'],
    correctAnswerIndex: 0,
    explanationEn: 'In the if-clause with a third-person singular subject ("Carlos"), the present simple verb takes an "-s" ("submits").',
    explanationEs: 'En la condición "if", con un sujeto en tercera persona singular ("Carlos"), el verbo en presente simple debe llevar "-s": "submits".',
    grammarTip: '¡Cuidado con la 3ra persona! En la cláusula if con he/she/it: verbo + s/es (runs, studies, submits).',
    examples: [
      { en: 'If he works hard, he will get promoted.', es: 'Si él trabaja duro, será ascendido.' },
      { en: 'If she practices speaking, she will improve fast.', es: 'Si ella practica la conversación, mejorará rápido.' }
    ]
  },
  {
    id: 'cnd_04',
    topic: 'first_conditional',
    type: 'complete_sentence',
    topicLabel: 'First Conditional',
    prompt: 'You _______ better job opportunities if you speak fluent English.',
    options: ['will have', 'would have', 'have will', 'are having to'],
    correctAnswerIndex: 0,
    explanationEn: 'When the result clause comes first, the pattern is: Subject + will + base verb + if + present simple.',
    explanationEs: 'Cuando la cláusula de resultado va al inicio, la estructura es: Sujeto + will + verbo base + if + presente simple: "You will have... if you speak...".',
    grammarTip: 'Inversión de cláusulas: Resultado (will + verbo) + if + Condición (presente simple). En este orden no se coloca coma.',
    examples: [
      { en: 'You will find a great job if you master coding.', es: 'Encontrarás un gran trabajo si dominas la programación.' },
      { en: 'She will feel energetic if she sleeps eight hours.', es: 'Ella se sentirá con energía si duerme ocho horas.' }
    ]
  },
  {
    id: 'cnd_05',
    topic: 'first_conditional',
    type: 'multiple_choice',
    topicLabel: 'First Conditional',
    prompt: 'Which sentence has the correct First Conditional structure?',
    options: [
      'If you practice every day, you will improve your fluency.',
      'If you will practice every day, you will improve your fluency.',
      'If you practice every day, you would improve your fluency.',
      'If you practiced every day, you will improve your fluency.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Only option A follows "If + present simple, will + base verb". We never put "will" inside the if-clause.',
    explanationEs: 'La opción A es la única gramaticalmente correcta. Un error muy común es colocar "will" en la cláusula con "if", lo cual es incorrecto en inglés.',
    grammarTip: '¡Prohibido! Nunca digas "If you will...". Lo correcto es "If you + presente simple".',
    examples: [
      { en: 'If the team collaborates, the project will succeed.', es: 'Si el equipo colabora, el proyecto tendrá éxito.' },
      { en: 'If we leave at 7:00, we will arrive on time.', es: 'Si salimos a las 7:00, llegaremos a tiempo.' }
    ]
  },
  {
    id: 'cnd_06',
    topic: 'first_conditional',
    type: 'complete_sentence',
    topicLabel: 'First Conditional',
    prompt: 'If the internet connection fails, we _______ postpone the video conference.',
    options: ['will', 'would', 'did', 'are'],
    correctAnswerIndex: 0,
    explanationEn: 'The result clause requires "will" + base verb "postpone" in the first conditional.',
    explanationEs: 'La cláusula de consecuencia en el primer condicional requiere "will" seguido del verbo en forma base: "will postpone".',
    grammarTip: 'Consecuencia futura en primer condicional: will + forma base del verbo.',
    examples: [
      { en: 'If the battery dies, I will plug in the charger.', es: 'Si la batería se agota, conectaré el cargador.' },
      { en: 'If it gets dark, we will turn on the lamps.', es: 'Si oscurece, encenderemos las lámparas.' }
    ]
  },
  {
    id: 'cnd_07',
    topic: 'first_conditional',
    type: 'complete_sentence',
    topicLabel: 'First Conditional',
    prompt: 'What _______ if you don’t pass the questionnaire on the first attempt?',
    options: ['will you do', 'you will do', 'do you will', 'would you do'],
    correctAnswerIndex: 0,
    explanationEn: 'In a conditional question, the main clause requires question word order: What + will + subject + base verb?',
    explanationEs: 'En preguntas del primer condicional, se invierte el modal con el sujeto en la oración principal: What + will + you + do...?',
    grammarTip: 'Pregunta en primer condicional: Wh-word + will + sujeto + verbo base + if + presente simple?',
    examples: [
      { en: 'Where will you go if it is sunny this Saturday?', es: '¿A dónde irás si está soleado este sábado?' },
      { en: 'What will happen if they change the schedule?', es: '¿Qué pasará si ellos cambian el horario?' }
    ]
  },
  {
    id: 'cnd_08',
    topic: 'first_conditional',
    type: 'complete_sentence',
    topicLabel: 'First Conditional',
    prompt: 'The client will approve the web page if the design _______ attractive and modern.',
    options: ['is', 'will be', 'are', 'was'],
    correctAnswerIndex: 0,
    explanationEn: 'The if-clause requires the present simple of "be". For singular subject "the design" (it), the correct form is "is".',
    explanationEs: 'En la cláusula if con el verbo to be en presente y sujeto singular "the design", la forma correcta es "is".',
    grammarTip: 'Con el verbo to be en la condición: If + sujeto + am/is/are (según el sujeto).',
    examples: [
      { en: 'If the price is affordable, we will buy it.', es: 'Si el precio es asequible, lo compraremos.' },
      { en: 'If the apprentices are prepared, they will excel.', es: 'Si los aprendices están preparados, sobresaldrán.' }
    ]
  },
  {
    id: 'cnd_09',
    topic: 'first_conditional',
    type: 'complete_sentence',
    topicLabel: 'First Conditional',
    prompt: 'If you _______ careful with the company equipment, it will last for many years.',
    options: ['are', 'will be', 'were', 'have been'],
    correctAnswerIndex: 0,
    explanationEn: 'Subject "you" takes "are" in the present simple conditional clause.',
    explanationEs: 'El sujeto "you" se conjuga con "are" en el presente simple de la cláusula de condición.',
    grammarTip: 'If you are... (condición presente) -> it will last... (resultado futuro).',
    examples: [
      { en: 'If you are attentive, you will learn quickly.', es: 'Si estás atento, aprenderás rápidamente.' },
      { en: 'If you are ready, we will start the quiz.', es: 'Si estás listo, comenzaremos el cuestionario.' }
    ]
  },
  {
    id: 'cnd_10',
    topic: 'first_conditional',
    type: 'complete_sentence',
    topicLabel: 'First Conditional',
    prompt: 'If she _______ to Medellín, she will visit the Comuna 13.',
    options: ['travels', 'travel', 'will travel', 'traveling'],
    correctAnswerIndex: 0,
    explanationEn: 'Third-person singular "she" takes "travels" (present simple with -s) in the if-clause.',
    explanationEs: 'La tercera persona "she" requiere "travels" en presente simple dentro de la cláusula con "if".',
    grammarTip: 'Verbo con -s para he/she/it en la condición: If she travels...',
    examples: [
      { en: 'If he travels to Bogotá, he will visit the Gold Museum.', es: 'Si él viaja a Bogotá, visitará el Museo del Oro.' },
      { en: 'If my family travels abroad, they will learn English.', es: 'Si mi familia viaja al extranjero, aprenderán inglés.' }
    ]
  },
  {
    id: 'cnd_11',
    topic: 'first_conditional',
    type: 'complete_sentence',
    topicLabel: 'First Conditional',
    prompt: 'They won’t finish the project on time if they _______ divide the tasks properly.',
    options: ['don’t', 'won’t', 'didn’t', 'aren’t'],
    correctAnswerIndex: 0,
    explanationEn: 'Subject "they" takes negative present simple "don\'t" in the if-clause.',
    explanationEs: 'El sujeto plural "they" utiliza la negación en presente simple "don\'t" en la cláusula con "if".',
    grammarTip: 'Negación en presente simple para I/you/we/they = don\'t + verbo base.',
    examples: [
      { en: 'If they don’t practice, they won’t pass.', es: 'Si ellos no practican, no aprobarán.' },
      { en: 'We won’t understand if we don’t pay attention.', es: 'No entenderemos si no prestamos atención.' }
    ]
  },
  {
    id: 'cnd_12',
    topic: 'first_conditional',
    type: 'multiple_choice',
    topicLabel: 'First Conditional',
    prompt: 'Identify the correct sentence where the result clause comes first:',
    options: [
      'She will get a certificate if she finishes the SENA program.',
      'She gets a certificate if she will finish the SENA program.',
      'She will gets a certificate if she finish the SENA program.',
      'She would get a certificate if she finish the SENA program.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'The result clause has "will get" and the if-clause has present simple "she finishes".',
    explanationEs: 'La opción A tiene la estructura exacta: Cláusula principal con "will get" y cláusula if con presente simple en tercera persona "she finishes".',
    grammarTip: 'Estructura: [Sujeto + will + verbo base] + if + [Sujeto + verbo presente simple].',
    examples: [
      { en: 'You will receive feedback if you submit the questionnaire.', es: 'Recibirás retroalimentación si envías el cuestionario.' },
      { en: 'We will celebrate if our team wins the competition.', es: 'Celebraremos si nuestro equipo gana la competencia.' }
    ]
  },
  {
    id: 'cnd_13',
    topic: 'first_conditional',
    type: 'complete_sentence',
    topicLabel: 'First Conditional',
    prompt: 'If the software _______ any bugs during testing, our programmers will fix them immediately.',
    options: ['has', 'will have', 'have', 'having'],
    correctAnswerIndex: 0,
    explanationEn: 'The subject "the software" is third-person singular (it), so the present simple form of "have" is "has".',
    explanationEs: '"the software" es un sujeto singular equivalente a "it". En presente simple, la forma de "have" para tercera persona es "has".',
    grammarTip: 'Tercera persona singular del verbo to have en presente es "has".',
    examples: [
      { en: 'If the document has errors, please edit it.', es: 'Si el documento tiene errores, por favor edítalo.' },
      { en: 'If the computer has low memory, it will run slowly.', es: 'Si el computador tiene poca memoria, funcionará lento.' }
    ]
  },
  {
    id: 'cnd_14',
    topic: 'first_conditional',
    type: 'contextual_grammar',
    topicLabel: 'First Conditional',
    context: 'A company supervisor speaking to new SENA apprentices.',
    prompt: '"If you show dedication and punctuality, the company _______ you a full-time contract."',
    options: ['will offer', 'would offer', 'offers will', 'is offering to'],
    correctAnswerIndex: 0,
    explanationEn: 'The real conditional outcome is expressed with "will" + base verb "offer".',
    explanationEs: 'La consecuencia real y prometida en el futuro se expresa con "will offer".',
    grammarTip: 'Usa "will + verbo base" para promesas de consecuencias reales en el ámbito laboral.',
    examples: [
      { en: 'If you complete the internship, they will hire you.', es: 'Si completas la etapa productiva, te contratarán.' },
      { en: 'If we meet the sales target, we will receive a bonus.', es: 'Si alcanzamos la meta de ventas, recibiremos una bonificación.' }
    ]
  },
  {
    id: 'cnd_15',
    topic: 'first_conditional',
    type: 'complete_sentence',
    topicLabel: 'First Conditional',
    prompt: 'If we _______ save enough budget, we will purchase modern servers for the laboratory.',
    options: ['can', 'will can', 'could to', 'are can'],
    correctAnswerIndex: 0,
    explanationEn: 'The modal "can" in the present form expresses real ability inside the if-clause.',
    explanationEs: '"can" en presente se puede utilizar en la cláusula con "if" para expresar posibilidad o capacidad real: "If we can save...".',
    grammarTip: 'En la cláusula if se puede usar "can" en presente para expresar capacidad real.',
    examples: [
      { en: 'If you can join us, we will be very happy.', es: 'Si puedes acompañarnos, estaremos muy felices.' },
      { en: 'If he can fix the error, the system will restart.', es: 'Si él puede solucionar el error, el sistema se reiniciará.' }
    ]
  }
];

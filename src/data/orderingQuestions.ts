import { Question } from '../types';

export const orderingQuestions: Question[] = [
  {
    id: 'ord_01',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a correct grammatical sentence:',
    scrambledWords: ['is', 'She', 'tomorrow', 'going', 'to', 'travel'],
    options: [
      'She is going to travel tomorrow.',
      'She going is to travel tomorrow.',
      'Tomorrow she to going is travel.',
      'She is travel going to tomorrow.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'The correct order for "be going to" is: Subject (She) + is + going to + base verb (travel) + time expression (tomorrow).',
    explanationEs: 'El orden canónico es: Sujeto ("She") + verbo to be ("is") + "going to" + verbo base ("travel") + expresión temporal ("tomorrow"). Las demás opciones desordenan los elementos auxiliares.',
    grammarTip: 'Estructura lineal: Sujeto + be (am/is/are) + going to + verbo base + complemento.',
    examples: [
      { en: 'He is going to study English tonight.', es: 'Él va a estudiar inglés esta noche.' },
      { en: 'They are going to arrive early.', es: 'Ellos van a llegar temprano.' }
    ]
  },
  {
    id: 'ord_02',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a correct grammatical sentence:',
    scrambledWords: ['will', 'They', 'the', 'meeting', 'attend', 'on', 'Monday'],
    options: [
      'They will attend the meeting on Monday.',
      'They attend will the meeting on Monday.',
      'Will they attend on Monday the meeting.',
      'They will to attend the meeting on Monday.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Affirmative future with will: Subject (They) + modal (will) + base verb (attend) + direct object (the meeting) + prepositional phrase (on Monday).',
    explanationEs: 'En la oración afirmativa con will, el modal precede de inmediato al verbo en su forma base: Sujeto ("They") + will + verbo base ("attend") + complemento.',
    grammarTip: 'Sujeto + will + verbo base + objeto directo + expresión de tiempo.',
    examples: [
      { en: 'We will finish the task tomorrow.', es: 'Terminaremos la tarea mañana.' },
      { en: 'She will call the client in the afternoon.', es: 'Ella llamará al cliente por la tarde.' }
    ]
  },
  {
    id: 'ord_03',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a correct grammatical sentence:',
    scrambledWords: ['like', 'would', 'We', 'to', 'order', 'dinner', 'now'],
    options: [
      'We would like to order dinner now.',
      'We like would to order dinner now.',
      'We would order to like dinner now.',
      'Dinner we would like order to now.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Polite expression pattern: Subject (We) + would like + to + base verb (order) + complement (dinner now).',
    explanationEs: 'La fórmula fija es: Sujeto ("We") + "would like" + "to" + verbo base ("order") + complemento. "Like" nunca va antes de "would".',
    grammarTip: 'Sujeto + would like + to + verbo base.',
    examples: [
      { en: 'I would like to have a glass of water.', es: 'Me gustaría tomar un vaso de agua.' },
      { en: 'She would like to ask a question.', es: 'A ella le gustaría hacer una pregunta.' }
    ]
  },
  {
    id: 'ord_04',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a correct First Conditional sentence:',
    scrambledWords: ['rains', 'If', 'it', 'will', 'stay', 'we', 'inside'],
    options: [
      'If it rains, we will stay inside.',
      'If it will rain, we stay inside.',
      'If it rains, we stay will inside.',
      'We will inside stay if rains it.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'First conditional order: If + subject (it) + present verb (rains), + subject (we) + will + base verb (stay) + complement (inside).',
    explanationEs: 'Estructura condicional: If + sujeto + verbo en presente simple ("rains"), sujeto + will + verbo base ("stay") + complemento.',
    grammarTip: 'If + presente simple, sujeto + will + verbo base.',
    examples: [
      { en: 'If you hurry, you will catch the bus.', es: 'Si te apuras, alcanzarás el autobús.' },
      { en: 'If he calls, I will answer immediately.', es: 'Si él llama, contestaré de inmediato.' }
    ]
  },
  {
    id: 'ord_05',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a correct obligation statement:',
    scrambledWords: ['to', 'have', 'You', 'wear', 'your', 'uniform'],
    options: [
      'You have to wear your uniform.',
      'You to have wear your uniform.',
      'You have wear to your uniform.',
      'Your uniform you have to wear.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'External obligation: Subject (You) + have to + base verb (wear) + object (your uniform).',
    explanationEs: 'Estructura de obligación: Sujeto ("You") + "have to" + verbo base ("wear") + complemento ("your uniform").',
    grammarTip: 'Sujeto + have/has to + verbo en forma base + complemento.',
    examples: [
      { en: 'They have to submit the project.', es: 'Ellos tienen que entregar el proyecto.' },
      { en: 'We have to arrive on time.', es: 'Tenemos que llegar a tiempo.' }
    ]
  },
  {
    id: 'ord_06',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a correct advice statement:',
    scrambledWords: ['should', 'water', 'drink', 'more', 'You', 'every day'],
    options: [
      'You should drink more water every day.',
      'You drink should more water every day.',
      'Should you drink more water every day.',
      'You should to drink more water every day.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Modal advice: Subject (You) + should + base verb without "to" (drink) + complement (more water every day).',
    explanationEs: 'Consejo con modal: Sujeto ("You") + "should" + verbo en forma base ("drink") + complemento. No lleva "to".',
    grammarTip: 'Sujeto + should + verbo base (sin to) + complemento.',
    examples: [
      { en: 'You should sleep at least seven hours.', es: 'Deberías dormir al menos siete horas.' },
      { en: 'He should review the lesson again.', es: 'Él debería repasar la lección de nuevo.' }
    ]
  },
  {
    id: 'ord_07',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a correct prohibition sentence:',
    scrambledWords: ['mustn’t', 'smoke', 'You', 'in', 'building', 'this'],
    options: [
      'You mustn’t smoke in this building.',
      'You smoke mustn’t in this building.',
      'In this building you smoke mustn’t.',
      'You mustn’t to smoke in this building.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Prohibition structure: Subject (You) + mustn\'t + base verb (smoke) + place complement (in this building).',
    explanationEs: 'Prohibición: Sujeto ("You") + modal "mustn\'t" + verbo base ("smoke") + complemento de lugar ("in this building").',
    grammarTip: 'Sujeto + mustn\'t + verbo base (sin to).',
    examples: [
      { en: 'You mustn’t talk during the test.', es: 'No debes hablar durante la prueba.' },
      { en: 'Visitors mustn’t touch the artwork.', es: 'Los visitantes no deben tocar las obras de arte.' }
    ]
  },
  {
    id: 'ord_08',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a correct question with "be going to":',
    scrambledWords: ['you', 'going', 'What', 'to', 'are', 'study', '?'],
    options: [
      'What are you going to study?',
      'What you are going to study?',
      'What are going you to study?',
      'What do you going to study?'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Information question order: Wh-word (What) + auxiliary (are) + subject (you) + going to + base verb (study)?',
    explanationEs: 'En preguntas con Wh-, el verbo to be ("are") antecede al sujeto ("you"): What + are + you + going to + study?',
    grammarTip: 'Wh-word + am/is/are + sujeto + going to + verbo base?',
    examples: [
      { en: 'Where are they going to stay?', es: '¿Dónde se van a hospedar?' },
      { en: 'When is he going to start?', es: '¿Cuándo va él a comenzar?' }
    ]
  },
  {
    id: 'ord_09',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a polite restaurant question:',
    scrambledWords: ['to', 'Would', 'dessert', 'like', 'see', 'you', 'the', '?'],
    options: [
      'Would you like to see the dessert?',
      'Do you would like to see the dessert?',
      'Would like you to see the dessert?',
      'You would like to see the dessert?'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Polite question: Would + subject (you) + like + to + base verb (see) + object (the dessert)?',
    explanationEs: 'Pregunta cortés: Would + sujeto ("you") + like + to + verbo base ("see") + complemento ("the dessert")?',
    grammarTip: 'Would + sujeto + like + to + verbo base + complemento?',
    examples: [
      { en: 'Would you like to drink some tea?', es: '¿Le gustaría beber un poco de té?' },
      { en: 'Would you like to try the specialty?', es: '¿Te gustaría probar la especialidad?' }
    ]
  },
  {
    id: 'ord_10',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words into a correct inverted First Conditional sentence:',
    scrambledWords: ['pass', 'will', 'you', 'if', 'practice', 'You', 'daily'],
    options: [
      'You will pass if you practice daily.',
      'You pass will if you practice daily.',
      'If you will practice, you pass daily.',
      'You will daily pass if you practice.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Result first: Subject (You) + will + base verb (pass) + if + subject (you) + present verb (practice) + adverb (daily).',
    explanationEs: 'Resultado primero: Sujeto ("You") + will + verbo ("pass") + if + sujeto ("you") + verbo presente ("practice") + complemento ("daily").',
    grammarTip: 'Sujeto + will + verbo base + if + sujeto + verbo en presente simple.',
    examples: [
      { en: 'She will succeed if she perseveres.', es: 'Ella tendrá éxito si persevera.' },
      { en: 'We will win if we work together.', es: 'Ganaremos si trabajamos juntos.' }
    ]
  },
  {
    id: 'ord_11',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a negative future sentence with "be going to":',
    scrambledWords: ['not', 'is', 'He', 'to', 'going', 'participate'],
    options: [
      'He is not going to participate.',
      'He not is going to participate.',
      'He is going not to participate.',
      'Not he is going to participate.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Negative order: Subject (He) + auxiliary (is) + not + going to + base verb (participate).',
    explanationEs: 'Negación con be going to: Sujeto ("He") + "is" + "not" + "going to" + verbo base ("participate").',
    grammarTip: 'Sujeto + am/is/are + not + going to + verbo base.',
    examples: [
      { en: 'She is not going to travel.', es: 'Ella no va a viajar.' },
      { en: 'We are not going to leave.', es: 'No nos vamos a ir.' }
    ]
  },
  {
    id: 'ord_12',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a correct statement expressing absence of obligation:',
    scrambledWords: ['have', 'don’t', 'We', 'pay', 'to', 'today'],
    options: [
      'We don’t have to pay today.',
      'We have don’t to pay today.',
      'We to have don’t pay today.',
      'Today don’t we have pay to.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Absence of obligation: Subject (We) + don\'t have to + base verb (pay) + adverb (today).',
    explanationEs: 'Ausencia de obligación: Sujeto ("We") + "don\'t have to" + verbo base ("pay") + complemento ("today").',
    grammarTip: 'Sujeto + don\'t/doesn\'t have to + verbo base.',
    examples: [
      { en: 'You don’t have to wash the dishes.', es: 'No tienes que lavar los platos.' },
      { en: 'They don’t have to bring food.', es: 'Ellos no tienen que traer comida.' }
    ]
  },
  {
    id: 'ord_13',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a polite future desire:',
    scrambledWords: ['learn', 'to', 'would', 'I', 'software', 'programming'],
    options: [
      'I would like to learn software programming.',
      'I would learn to like software programming.',
      'I to learn would like software programming.',
      'Software programming I would like to learn.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Subject (I) + would like + to + base verb (learn) + object (software programming).',
    explanationEs: 'Sujeto ("I") + "would like to" + verbo base ("learn") + objeto ("software programming").',
    grammarTip: 'I would like to + verbo base + complemento.',
    examples: [
      { en: 'I would like to learn Python.', es: 'Me gustaría aprender Python.' },
      { en: 'He would like to design video games.', es: 'A él le gustaría diseñar videojuegos.' }
    ]
  },
  {
    id: 'ord_14',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words into a correct future promise with "will":',
    scrambledWords: ['send', 'I', 'the', 'will', 'report', 'tomorrow'],
    options: [
      'I will send the report tomorrow.',
      'I send will the report tomorrow.',
      'The report I send will tomorrow.',
      'I will tomorrow the report send.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Future with will: Subject (I) + will + base verb (send) + direct object (the report) + time (tomorrow).',
    explanationEs: 'Estructura con will: Sujeto ("I") + "will" + verbo base ("send") + complemento directo ("the report") + tiempo ("tomorrow").',
    grammarTip: 'Sujeto + will + verbo base + complemento.',
    examples: [
      { en: 'I will write the email tonight.', es: 'Escribiré el correo esta noche.' },
      { en: 'She will deliver the package soon.', es: 'Ella entregará el paquete pronto.' }
    ]
  },
  {
    id: 'ord_15',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a correct negative advice statement:',
    scrambledWords: ['shouldn’t', 'sugar', 'eat', 'too', 'You', 'much'],
    options: [
      'You shouldn’t eat too much sugar.',
      'You eat shouldn’t too much sugar.',
      'Too much sugar you shouldn’t eat.',
      'You shouldn’t to eat too much sugar.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Subject (You) + shouldn\'t + base verb (eat) + quantifier & noun (too much sugar).',
    explanationEs: 'Consejo negativo: Sujeto ("You") + modal ("shouldn\'t") + verbo base ("eat") + objeto ("too much sugar").',
    grammarTip: 'Sujeto + shouldn\'t + verbo base.',
    examples: [
      { en: 'You shouldn’t spend all your savings.', es: 'No deberías gastar todos tus ahorros.' },
      { en: 'He shouldn’t drive so fast.', es: 'Él no debería conducir tan rápido.' }
    ]
  },
  {
    id: 'ord_16',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words into a correct question with "will":',
    scrambledWords: ['the', 'you', 'contract', 'sign', 'Will', 'tomorrow', '?'],
    options: [
      'Will you sign the contract tomorrow?',
      'You will sign the contract tomorrow?',
      'Will sign you the contract tomorrow?',
      'Will you the contract sign tomorrow?'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Yes/No question with will: Will + subject (you) + base verb (sign) + object (the contract) + time (tomorrow)?',
    explanationEs: 'Pregunta con will: Will + sujeto ("you") + verbo base ("sign") + complemento directo ("the contract") + tiempo ("tomorrow")?',
    grammarTip: 'Will + sujeto + verbo base + complemento?',
    examples: [
      { en: 'Will you join our meeting?', es: '¿Te unirás a nuestra reunión?' },
      { en: 'Will they accept the proposal?', es: '¿Aceptarán ellos la propuesta?' }
    ]
  },
  {
    id: 'ord_17',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a correct First Conditional sentence with a singular subject:',
    scrambledWords: ['arrives', 'If', 'he', 'we', 'early', 'will', 'celebrate'],
    options: [
      'If he arrives early, we will celebrate.',
      'If he will arrive early, we celebrate.',
      'If he arrives early, will we celebrate.',
      'We celebrate if he arrives early will.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'If + subject (he) + 3rd person singular verb (arrives) + adverb (early), + subject (we) + will + verb (celebrate).',
    explanationEs: 'If + sujeto ("he") + verbo en 3ra persona singular ("arrives") + adverbio ("early"), sujeto ("we") + will + verbo base ("celebrate").',
    grammarTip: 'If + sujeto (he/she/it) + verbo con -s, sujeto + will + verbo base.',
    examples: [
      { en: 'If she calls me, I will tell her.', es: 'Si ella me llama, se lo diré.' },
      { en: 'If it stops raining, we will go out.', es: 'Si deja de llover, saldremos.' }
    ]
  },
  {
    id: 'ord_18',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form an ability statement:',
    scrambledWords: ['speak', 'She', 'languages', 'three', 'can', 'fluently'],
    options: [
      'She can speak three languages fluently.',
      'She speak can three languages fluently.',
      'Can she speak three languages fluently.',
      'She can to speak three languages fluently.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Ability pattern: Subject (She) + can + base verb (speak) + object (three languages) + adverb (fluently).',
    explanationEs: 'Habilidad: Sujeto ("She") + modal "can" + verbo base ("speak") + objeto ("three languages") + adverbio ("fluently").',
    grammarTip: 'Sujeto + can + verbo base (sin to) + complemento.',
    examples: [
      { en: 'He can play the guitar very well.', es: 'Él puede tocar la guitarra muy bien.' },
      { en: 'They can build mobile apps.', es: 'Ellos pueden construir aplicaciones móviles.' }
    ]
  },
  {
    id: 'ord_19',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words into a correct third-person singular obligation statement:',
    scrambledWords: ['has', 'evidence', 'the', 'submit', 'He', 'to', 'today'],
    options: [
      'He has to submit the evidence today.',
      'He have to submit the evidence today.',
      'He to has submit the evidence today.',
      'The evidence he has submit to today.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Third-person singular obligation: Subject (He) + has to + base verb (submit) + object (the evidence) + time (today).',
    explanationEs: 'Obligación en tercera persona: Sujeto ("He") + "has to" + verbo base ("submit") + objeto ("the evidence") + tiempo ("today").',
    grammarTip: 'He / She / It + has to + verbo base + complemento.',
    examples: [
      { en: 'She has to study for the exam.', es: 'Ella tiene que estudiar para el examen.' },
      { en: 'He has to renew his passport.', es: 'Él tiene que renovar su pasaporte.' }
    ]
  },
  {
    id: 'ord_20',
    topic: 'sentence_ordering',
    type: 'sentence_ordering',
    topicLabel: 'Sentence Ordering',
    prompt: 'Organize the scrambled words to form a polite career intention statement:',
    scrambledWords: ['to', 'would', 'We', 'become', 'like', 'web', 'developers'],
    options: [
      'We would like to become web developers.',
      'We like would to become web developers.',
      'We to would like become web developers.',
      'Web developers we would like to become.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Polite desire: Subject (We) + would like + to + base verb (become) + noun phrase (web developers).',
    explanationEs: 'Deseo o aspiración profesional: Sujeto ("We") + "would like" + "to" + verbo base ("become") + complemento ("web developers").',
    grammarTip: 'Sujeto + would like to + verbo base + complemento.',
    examples: [
      { en: 'I would like to become a data analyst.', es: 'Me gustaría convertirme en analista de datos.' },
      { en: 'They would like to create their own studio.', es: 'A ellos les gustaría crear su propio estudio.' }
    ]
  }
];

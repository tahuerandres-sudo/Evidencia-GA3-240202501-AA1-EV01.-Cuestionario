import { Question } from '../types';

export const beGoingToQuestions: Question[] = [
  {
    id: 'bgt_01',
    topic: 'be_going_to',
    type: 'complete_sentence',
    topicLabel: 'Future with Be Going To',
    prompt: 'She _______ visit her grandmother next weekend. She already bought the bus tickets.',
    options: ['is going to', 'are going to', 'going to', 'is go to'],
    correctAnswerIndex: 0,
    explanationEn: 'The subject "She" takes the third-person singular auxiliary "is", followed by "going to" and the base verb "visit".',
    explanationEs: 'Con el sujeto en tercera persona singular ("She"), el verbo to be correspondiente es "is". La fórmula completa para planes futuros es: Sujeto + is + going to + verbo base.',
    grammarTip: 'Estructura afirmativa: Sujeto + am/is/are + going to + verbo en forma base. Se usa para planes e intenciones previamente decididos.',
    examples: [
      { en: 'I am going to start a new course on Monday.', es: 'Voy a comenzar un nuevo curso el lunes.' },
      { en: 'He is going to buy a new laptop next month.', es: 'Él va a comprar un nuevo portátil el próximo mes.' }
    ]
  },
  {
    id: 'bgt_02',
    topic: 'be_going_to',
    type: 'complete_sentence',
    topicLabel: 'Future with Be Going To',
    prompt: 'Carlos and Maria _______ present their final software project on Friday.',
    options: ['is going to', 'are going to', 'will going to', 'going to'],
    correctAnswerIndex: 1,
    explanationEn: '"Carlos and Maria" is a plural subject (they), which requires the auxiliary "are" + "going to" + base verb.',
    explanationEs: '"Carlos and Maria" es un sujeto plural equivalente al pronombre "they". Por ende, requiere el auxiliar "are" seguido de "going to" y el verbo base "present".',
    grammarTip: 'Para sujetos en plural (We, You, They), utilizamos la forma "are going to + verbo".',
    examples: [
      { en: 'The students are going to deliver the evidence today.', es: 'Los aprendices van a entregar la evidencia hoy.' },
      { en: 'We are going to travel to Medellín for the symposium.', es: 'Vamos a viajar a Medellín para el simposio.' }
    ]
  },
  {
    id: 'bgt_03',
    topic: 'be_going_to',
    type: 'contextual_grammar',
    topicLabel: 'Future with Be Going To',
    context: 'Look at those dark clouds in the sky!',
    prompt: 'It _______ rain in a few minutes.',
    options: ['is going to', 'are going to', 'goes to', 'is go'],
    correctAnswerIndex: 0,
    explanationEn: 'We use "be going to" for predictions based on present evidence (dark clouds). With "It", we use "is going to".',
    explanationEs: 'Se utiliza "be going to" cuando hacemos una predicción con evidencia presente visible (las nubes oscuras). El sujeto "It" concuerda con "is going to".',
    grammarTip: 'Usamos "be going to" para predicciones cuando vemos evidencia física inmediata en el presente.',
    examples: [
      { en: 'Be careful! You are going to drop that box.', es: '¡Cuidado! Vas a dejar caer esa caja.' },
      { en: 'Look at the traffic, we are going to arrive late.', es: 'Mira el tráfico, vamos a llegar tarde.' }
    ]
  },
  {
    id: 'bgt_04',
    topic: 'be_going_to',
    type: 'complete_sentence',
    topicLabel: 'Future with Be Going To',
    prompt: 'I _______ take the technical English exam tomorrow morning.',
    options: ['am going to', 'is going to', 'are going to', 'going to'],
    correctAnswerIndex: 0,
    explanationEn: 'The first person singular pronoun "I" always requires the auxiliary "am" + "going to".',
    explanationEs: 'Con la primera persona "I" siempre se utiliza el auxiliar "am". La estructura correcta es "I am going to take".',
    grammarTip: 'Para la primera persona "I", la estructura es obligatoriamente "I am going to + verbo base".',
    examples: [
      { en: 'I am going to review the grammar guide tonight.', es: 'Voy a repasar la guía gramatical esta noche.' },
      { en: 'I am going to apply for an internship next week.', es: 'Voy a postularme para una pasantía la próxima semana.' }
    ]
  },
  {
    id: 'bgt_05',
    topic: 'be_going_to',
    type: 'multiple_choice',
    topicLabel: 'Future with Be Going To',
    prompt: 'Which is the correct negative sentence?',
    options: [
      'They are not going to attend the conference.',
      'They not are going to attend the conference.',
      'They don’t going to attend the conference.',
      'They aren’t go to attend the conference.'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'The negative particle "not" is placed directly after the auxiliary "be": They + are + not + going to + verb.',
    explanationEs: 'La negación con "be going to" se forma agregando "not" inmediatamente después del verbo to be: "are not going to" (o "aren\'t going to").',
    grammarTip: 'Estructura negativa: Sujeto + am/is/are + not + going to + verbo base. No se usan los auxiliares don\'t ni doesn\'t.',
    examples: [
      { en: 'He is not going to work this Saturday.', es: 'Él no va a trabajar este sábado.' },
      { en: 'We are not going to cancel the meeting.', es: 'Nosotros no vamos a cancelar la reunión.' }
    ]
  },
  {
    id: 'bgt_06',
    topic: 'be_going_to',
    type: 'multiple_choice',
    topicLabel: 'Future with Be Going To',
    prompt: 'Which is the correct question structure?',
    options: [
      'Are you going to study for the quiz tonight?',
      'You are going to study for the quiz tonight?',
      'Do you going to study for the quiz tonight?',
      'Are you go to study for the quiz tonight?'
    ],
    correctAnswerIndex: 0,
    explanationEn: 'Questions invert the auxiliary verb "be" and the subject: Am/Is/Are + subject + going to + base verb?',
    explanationEs: 'Para formular preguntas interrogativas, invertimos el orden colocando el verbo to be al inicio: Are + you + going to + study...?',
    grammarTip: 'Estructura interrogativa: Am/Is/Are + Sujeto + going to + verbo en forma base + complemento?',
    examples: [
      { en: 'Is she going to participate in the workshop?', es: '¿Va ella a participar en el taller?' },
      { en: 'Are they going to send the report today?', es: '¿Van ellos a enviar el informe hoy?' }
    ]
  },
  {
    id: 'bgt_07',
    topic: 'be_going_to',
    type: 'complete_sentence',
    topicLabel: 'Future with Be Going To',
    prompt: 'We _______ celebrate our graduation next month in December.',
    options: ['are going to', 'is going to', 'am going to', 'will going to'],
    correctAnswerIndex: 0,
    explanationEn: 'The plural pronoun "We" requires "are going to" + base verb "celebrate".',
    explanationEs: 'El pronombre "We" (nosotros) se conjuga con "are". Por lo tanto, la respuesta correcta es "are going to".',
    grammarTip: 'Recuerda: We / You / They siempre van acompañados de "are going to".',
    examples: [
      { en: 'We are going to celebrate after finishing the questionnaire.', es: 'Vamos a celebrar después de terminar el cuestionario.' },
      { en: 'We are going to move to a larger office.', es: 'Vamos a mudarnos a una oficina más grande.' }
    ]
  },
  {
    id: 'bgt_08',
    topic: 'be_going_to',
    type: 'contextual_grammar',
    topicLabel: 'Future with Be Going To',
    context: 'David saved money for six months because he has a planned holiday.',
    prompt: 'He _______ spend his vacation in Santa Marta.',
    options: ['is going to', 'are going to', 'will to', 'going to'],
    correctAnswerIndex: 0,
    explanationEn: 'Since it is a planned decision made in advance, "is going to" is the appropriate future structure with "He".',
    explanationEs: 'Al ser un plan premeditado y ahorrado con anticipación, se utiliza "is going to". El sujeto "He" concuerda con "is".',
    grammarTip: 'Cuando una decisión futura ya fue planeada con anticipación, preferimos "be going to" sobre "will".',
    examples: [
      { en: 'She is going to visit the coffee region next week.', es: 'Ella va a visitar el eje cafetero la próxima semana.' },
      { en: 'He is going to stay at a hotel near the beach.', es: 'Él se va a hospedar en un hotel cerca de la playa.' }
    ]
  },
  {
    id: 'bgt_09',
    topic: 'be_going_to',
    type: 'complete_sentence',
    topicLabel: 'Future with Be Going To',
    prompt: 'The instructor _______ explain the rubric before the presentation begins.',
    options: ['is going to', 'are going to', 'going to', 'is go'],
    correctAnswerIndex: 0,
    explanationEn: '"The instructor" is singular (he/she), so we use "is going to".',
    explanationEs: '"The instructor" es un sujeto en tercera persona singular, por lo cual se usa "is going to" + verbo base.',
    grammarTip: 'Nombres singulares (The teacher, My boss, The apprentice) van seguidos de "is going to".',
    examples: [
      { en: 'The supervisor is going to review our codes.', es: 'El supervisor va a revisar nuestros códigos.' },
      { en: 'The technician is going to fix the network router.', es: 'El técnico va a reparar el enrutador de red.' }
    ]
  },
  {
    id: 'bgt_10',
    topic: 'be_going_to',
    type: 'complete_sentence',
    topicLabel: 'Future with Be Going To',
    prompt: 'Where _______ stay when you travel to Cartagena?',
    options: ['are you going to', 'you are going to', 'do you going to', 'will you going to'],
    correctAnswerIndex: 0,
    explanationEn: 'In Wh- questions with "be going to", the order is: Wh-word + am/is/are + subject + going to + verb?',
    explanationEs: 'En preguntas con palabras Wh-, la estructura requiere el verbo to be antes del sujeto: Where + are + you + going to + stay...?',
    grammarTip: 'Preguntas informativas: Wh-word + am/is/are + Sujeto + going to + verbo base?',
    examples: [
      { en: 'What are you going to cook for dinner?', es: '¿Qué vas a cocinar para la cena?' },
      { en: 'When is he going to send the application?', es: '¿Cuándo va él a enviar la solicitud?' }
    ]
  },
  {
    id: 'bgt_11',
    topic: 'be_going_to',
    type: 'complete_sentence',
    topicLabel: 'Future with Be Going To',
    prompt: 'My sister _______ study graphic design at SENA next semester.',
    options: ['is going to', 'are going to', 'am going to', 'going to'],
    correctAnswerIndex: 0,
    explanationEn: '"My sister" corresponds to "she", which requires the singular auxiliary "is going to".',
    explanationEs: '"My sister" equivale a "she", requiriendo el auxiliar en singular "is going to".',
    grammarTip: 'Tercera persona singular (He, She, It) = is going to + verbo base.',
    examples: [
      { en: 'My sister is going to start classes at 7:00 AM.', es: 'Mi hermana va a iniciar clases a las 7:00 AM.' },
      { en: 'My brother is going to graduate this December.', es: 'Mi hermano se va a graduar este diciembre.' }
    ]
  },
  {
    id: 'bgt_12',
    topic: 'be_going_to',
    type: 'complete_sentence',
    topicLabel: 'Future with Be Going To',
    prompt: 'I am tired. I _______ sleep early tonight.',
    options: ['am going to', 'is going to', 'are going to', 'going'],
    correctAnswerIndex: 0,
    explanationEn: 'The subject "I" takes "am going to" to express an intended plan.',
    explanationEs: 'Con el sujeto "I" se usa obligatoriamente "am going to" para expresar la intención del hablante.',
    grammarTip: 'I + am going to + verbo en infinitivo sin "to".',
    examples: [
      { en: 'I am going to rest this weekend.', es: 'Voy a descansar este fin de semana.' },
      { en: 'I am not going to turn on my computer today.', es: 'No voy a encender mi computador hoy.' }
    ]
  },
  {
    id: 'bgt_13',
    topic: 'be_going_to',
    type: 'complete_sentence',
    topicLabel: 'Future with Be Going To',
    prompt: 'The developers _______ launch the new mobile application on Monday.',
    options: ['are going to', 'is going to', 'am going to', 'going to'],
    correctAnswerIndex: 0,
    explanationEn: '"The developers" is plural (they), taking "are going to" + base verb "launch".',
    explanationEs: '"The developers" es un sustantivo plural, por lo que exige el verbo auxiliar en plural "are going to".',
    grammarTip: 'Sujeto plural + are + going to + verbo base.',
    examples: [
      { en: 'The engineers are going to install the software updates.', es: 'Los ingenieros van a instalar las actualizaciones de software.' },
      { en: 'The analysts are going to present the quarterly metrics.', es: 'Los analistas van a presentar las métricas trimestrales.' }
    ]
  },
  {
    id: 'bgt_14',
    topic: 'be_going_to',
    type: 'multiple_choice',
    topicLabel: 'Future with Be Going To',
    prompt: 'Complete the negative sentence: "She _______ participate in the sports tournament because she is injured."',
    options: [
      'isn’t going to',
      'aren’t going to',
      'doesn’t going to',
      'not is going to'
    ],
    correctAnswerIndex: 0,
    explanationEn: '"isn\'t going to" is the contracted form of "is not going to", which matches the singular subject "She".',
    explanationEs: '"isn\'t going to" es la contracción estándar de "is not going to", correspondiente al sujeto singular femenino "She".',
    grammarTip: 'Contracciones negativas: isn\'t going to (singular) y aren\'t going to (plural).',
    examples: [
      { en: 'She isn’t going to attend the seminar tomorrow.', es: 'Ella no va a asistir al seminario mañana.' },
      { en: 'He isn’t going to submit the assignment late.', es: 'Él no va a enviar la tarea tarde.' }
    ]
  },
  {
    id: 'bgt_15',
    topic: 'be_going_to',
    type: 'complete_sentence',
    topicLabel: 'Future with Be Going To',
    prompt: '_______ your team going to deliver the product catalog before the deadline?',
    options: ['Is', 'Are', 'Do', 'Will'],
    correctAnswerIndex: 0,
    explanationEn: '"Your team" is considered a collective singular noun in this standard context, taking "Is".',
    explanationEs: '"Your team" (tu equipo) funciona como un sujeto singular (it), por lo que la pregunta inicia con el auxiliar "Is".',
    grammarTip: 'En preguntas con sujetos singulares o colectivos se emplea "Is + subject + going to + verb?".',
    examples: [
      { en: 'Is the committee going to publish the results today?', es: '¿Va el comité a publicar los resultados hoy?' },
      { en: 'Is your class going to have an online meeting?', es: '¿Va tu clase a tener una reunión en línea?' }
    ]
  }
];

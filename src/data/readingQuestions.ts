import { Question } from '../types';

export const readingQuestions: Question[] = [
  {
    id: 'rdg_01',
    topic: 'reading_comprehension',
    type: 'reading_comprehension',
    topicLabel: 'Reading Comprehension',
    readingPassage: 'My weekends are usually very busy and productive. On Saturday mornings, I have to help my family at our small grocery store in the neighborhood. In the afternoon, I usually meet my classmates from the SENA technical program to review our programming evidence. If the weather is pleasant and sunny tomorrow, we _______ go to the local park with our laptops to study algorithms outdoors. Later in the evening, my brother and I would like to watch a comedy film to relax.',
    prompt: 'Read the passage and choose the correct grammatical option to fill in the blank (_______):',
    options: ['will', 'would', 'have', 'are'],
    correctAnswerIndex: 0,
    explanationEn: 'The sentence "If the weather is pleasant and sunny tomorrow, we _______ go..." is a First Conditional sentence, requiring "will" for the real future consequence.',
    explanationEs: 'La oración "If the weather is pleasant and sunny tomorrow, we _______ go..." es un primer condicional que describe una consecuencia futura real ante una condición meteorológica: If + presente simple ("is"), we will + verbo base ("go").',
    grammarTip: 'En el primer condicional: If + presente simple, sujeto + will + verbo base.',
    examples: [
      { en: 'If it doesn’t rain, we will ride our bicycles.', es: 'Si no llueve, montaremos en nuestras bicicletas.' },
      { en: 'If the store opens early, I will buy groceries.', es: 'Si la tienda abre temprano, compraré víveres.' }
    ]
  },
  {
    id: 'rdg_02',
    topic: 'reading_comprehension',
    type: 'reading_comprehension',
    topicLabel: 'Reading Comprehension',
    readingPassage: 'Camila is an apprentice in the Software Analysis and Development program. Every weekday, she wakes up at 5:30 AM to prepare breakfast and catch the TransMilenio bus. At the training center, the instructor informed the group about the laboratory rules. Because the electronic equipment is sensitive and delicate, all students _______ eat or drink inside the computer room. Camila follows this rule strictly because she values the learning environment.',
    prompt: 'Read the passage and choose the correct option to fill in the blank (_______):',
    options: ['mustn’t', 'don’t have to', 'should', 'can'],
    correctAnswerIndex: 0,
    explanationEn: 'The passage explains that equipment is sensitive and eating/drinking is strictly prohibited by laboratory rules, requiring "mustn\'t".',
    explanationEs: 'El texto aclara que los equipos son sensibles y que por reglamento institucional está terminantemente prohibido consumir alimentos o bebidas en el aula. Por tanto, se usa "mustn\'t".',
    grammarTip: '"Mustn’t" expresa prohibición formal por normas o reglamentos.',
    examples: [
      { en: 'You mustn’t open the computer case without permission.', es: 'No debes abrir la carcasa del computador sin permiso.' },
      { en: 'Visitors mustn’t touch delicate machinery.', es: 'Los visitantes no deben tocar maquinaria delicada.' }
    ]
  },
  {
    id: 'rdg_03',
    topic: 'reading_comprehension',
    type: 'reading_comprehension',
    topicLabel: 'Reading Comprehension',
    readingPassage: 'Mateo and his team have planned their productive stage project for three months. They created a mobile app to help rural farmers sell coffee directly to urban coffee shops. Next Monday morning, they _______ travel to Armenia to test the application with ten local coffee producers. They already bought the bus tickets and reserved rooms in a quiet hostel near the town square.',
    prompt: 'Read the passage and choose the correct option to fill in the blank (_______):',
    options: ['are going to', 'is going to', 'going to', 'will to'],
    correctAnswerIndex: 0,
    explanationEn: 'Mateo and his team (plural subject "they") made prior arrangements (bought tickets, reserved rooms), so the planned future is expressed with "are going to".',
    explanationEs: 'Como ya compraron los pasajes y reservaron el hospedaje, se trata de un plan premeditado y organizado con antelación. Con el sujeto en plural "they", la estructura correcta es "are going to".',
    grammarTip: 'Planes confirmados con evidencia previa (boletos comprados) = be going to.',
    examples: [
      { en: 'They are going to meet the farmers at 9:00 AM.', es: 'Ellos se van a reunir con los agricultores a las 9:00 AM.' },
      { en: 'We are going to launch the platform next month.', es: 'Vamos a lanzar la plataforma el próximo mes.' }
    ]
  },
  {
    id: 'rdg_04',
    topic: 'reading_comprehension',
    type: 'reading_comprehension',
    topicLabel: 'Reading Comprehension',
    readingPassage: 'Sara works as a bilingual customer service agent in a multinational contact center. Her schedule is flexible, and her manager is very supportive. Tomorrow is an official national holiday in Colombia, so the customer support center will operate with automated chatbots. Therefore, Sara _______ go to the office or log in remotely. She plans to spend the whole day painting watercolors at home.',
    prompt: 'Read the passage and choose the correct option to fill in the blank (_______):',
    options: ['doesn’t have to', 'mustn’t', 'should', 'has to'],
    correctAnswerIndex: 0,
    explanationEn: 'Because tomorrow is a holiday and the center uses automated bots, working is unnecessary. For "Sara" (she), lack of obligation is "doesn\'t have to".',
    explanationEs: 'Al ser día festivo y haber soporte automatizado, no hay obligación ni necesidad de trabajar. Para el sujeto femenino singular "Sara", la ausencia de obligación se expresa como "doesn\'t have to".',
    grammarTip: 'Ausencia de obligación con he/she/it: doesn\'t have to + verbo base.',
    examples: [
      { en: 'Sara doesn’t have to answer client calls tomorrow.', es: 'Sara no tiene que responder llamadas de clientes mañana.' },
      { en: 'She doesn’t have to set an alarm clock.', es: 'Ella no tiene que programar el despertador.' }
    ]
  },
  {
    id: 'rdg_05',
    topic: 'reading_comprehension',
    type: 'reading_comprehension',
    topicLabel: 'Reading Comprehension',
    readingPassage: 'Julian wants to celebrate his graduation from SENA with his family. Yesterday he visited an Italian restaurant downtown to check the menu and speak with the head waiter. Julian told the manager: "Good afternoon. We are celebrating a special academic achievement, and my family _______ to reserve a private dining table for next Saturday evening."',
    prompt: 'Read the passage and choose the correct polite expression to fill in the blank (_______):',
    options: ['would like', 'like would', 'would liking', 'likes to would'],
    correctAnswerIndex: 0,
    explanationEn: 'Julian is expressing a polite customer request at a restaurant: "my family would like to reserve...".',
    explanationEs: 'Julian realiza una solicitud educada en un restaurante. La fórmula correcta es "would like" seguida de "to reserve".',
    grammarTip: 'Peticiones cordiales en restaurantes: Sujeto + would like + to + verbo base.',
    examples: [
      { en: 'We would like to see the specials of the day.', es: 'Nos gustaría ver las especialidades del día.' },
      { en: 'I would like to make a reservation for eight people.', es: 'Me gustaría hacer una reserva para ocho personas.' }
    ]
  },
  {
    id: 'rdg_06',
    topic: 'reading_comprehension',
    type: 'reading_comprehension',
    topicLabel: 'Reading Comprehension',
    readingPassage: 'During the introductory class, the English instructor gave practical recommendations to help learners succeed in the virtual questionnaire. She said: "Consistent study is much more effective than studying for ten hours the night before. You _______ review English grammar tips and vocabulary for twenty minutes every single morning."',
    prompt: 'Read the passage and choose the best advice modal to fill in the blank (_______):',
    options: ['should', 'have', 'mustn’t', 'don’t have to'],
    correctAnswerIndex: 0,
    explanationEn: 'The instructor is offering pedagogical advice and good study habits, which is expressed using "should".',
    explanationEs: 'La instructora está dando un consejo pedagógico para mejorar los hábitos de estudio. El modal para consejos y sugerencias es "should".',
    grammarTip: 'Consejos pedagógicos: You should + verbo base.',
    examples: [
      { en: 'You should listen to English podcasts regularly.', es: 'Deberías escuchar podcasts en inglés con regularidad.' },
      { en: 'Learners should take notes during the virtual sessions.', es: 'Los aprendices deberían tomar apuntes durante las sesiones virtuales.' }
    ]
  },
  {
    id: 'rdg_07',
    topic: 'reading_comprehension',
    type: 'reading_comprehension',
    topicLabel: 'Reading Comprehension',
    readingPassage: 'Felipe is preparing a technical presentation about database normalization for his SENA classmates. He has completed the presentation slides and created diagrams. However, he is a bit nervous about public speaking. His friend tells him: "Do not worry, Felipe! If you practice your presentation in front of the mirror, you _______ feel much more confident and relaxed tomorrow."',
    prompt: 'Read the passage and choose the correct option to fill in the blank (_______):',
    options: ['will', 'would', 'are', 'had'],
    correctAnswerIndex: 0,
    explanationEn: 'In this First Conditional reassurance ("If you practice..., you _______ feel..."), the result clause takes "will".',
    explanationEs: 'En esta frase de aliento con primer condicional ("If you practice..., you _______ feel..."), la consecuencia futura requiere "will + feel".',
    grammarTip: 'If + presente simple, sujeto + will + verbo en forma base.',
    examples: [
      { en: 'If you breathe deeply, you will calm your nerves.', es: 'Si respiras profundo, calmarás tus nervios.' },
      { en: 'If you rehearse, you will deliver a great presentation.', es: 'Si ensayas, harás una gran presentación.' }
    ]
  },
  {
    id: 'rdg_08',
    topic: 'reading_comprehension',
    type: 'reading_comprehension',
    topicLabel: 'Reading Comprehension',
    readingPassage: 'Valeria dreams of traveling abroad after completing her technologist degree at SENA. She loves international cultures, languages, and architecture. In her journal, she wrote: "Someday, I _______ to live in Montreal for a year to practice both English and French while working on software projects for global organizations."',
    prompt: 'Read the passage and choose the correct option to fill in the blank (_______):',
    options: ['would like', 'like would', 'would liking', 'will like to'],
    correctAnswerIndex: 0,
    explanationEn: 'The sentence expresses a personal dream and ambition politely: "I would like to live...".',
    explanationEs: 'La oración expresa un sueño y meta personal a futuro. La estructura gramatical adecuada es "would like" seguida de "to live".',
    grammarTip: 'Expresar anhelos de vida: I would like to + verbo base.',
    examples: [
      { en: 'I would like to visit famous museums in Europe.', es: 'Me gustaría visitar museos famosos en Europa.' },
      { en: 'She would like to study a master’s degree abroad.', es: 'A ella le gustaría estudiar una maestría en el exterior.' }
    ]
  },
  {
    id: 'rdg_09',
    topic: 'reading_comprehension',
    type: 'reading_comprehension',
    topicLabel: 'Reading Comprehension',
    readingPassage: 'Diego is a junior web developer at an advertising agency in Cali. Today at 4:30 PM, the senior programmer received an urgent notification that the production server went offline. Diego saw the notification on the dashboard and told his colleague: "I see the server error alert. I _______ check the system logs immediately to find the problem!"',
    prompt: 'Read the passage and choose the correct option to fill in the blank (_______):',
    options: ['will', 'going to', 'did', 'would like to'],
    correctAnswerIndex: 0,
    explanationEn: 'Diego makes an immediate, spontaneous decision in response to an unexpected emergency, so "will" is the correct choice.',
    explanationEs: 'Diego toma una decisión espontánea e instantánea al ver la alerta en el tablero. Las decisiones tomadas en el momento preciso de hablar usan "will".',
    grammarTip: 'Decisiones espontáneas ante situaciones imprevistas = will + verbo base.',
    examples: [
      { en: 'The phone is ringing; I will answer it.', es: 'El teléfono está sonando; yo contestaré.' },
      { en: 'Someone knocked on the door; I will open it.', es: 'Alguien tocó la puerta; yo abriré.' }
    ]
  },
  {
    id: 'rdg_10',
    topic: 'reading_comprehension',
    type: 'reading_comprehension',
    topicLabel: 'Reading Comprehension',
    readingPassage: 'During the induction week at SENA, the center coordinator explained the campus safety guidelines to all newly enrolled apprentices. He emphasized that every apprentice _______ wear their official identification card visibly on their chest while inside the institutional facilities. Security guards verify cards at every entrance gate.',
    prompt: 'Read the passage and choose the correct option to fill in the blank (_______):',
    options: ['has to', 'should', 'can', 'don’t have to'],
    correctAnswerIndex: 0,
    explanationEn: 'Wearing the ID card is an official, mandatory institutional regulation enforced by security guards. For the singular noun "every apprentice", we use "has to".',
    explanationEs: 'Portar el carnet es una norma institucional obligatoria supervisada por los guardias de seguridad. Para el sujeto singular "every apprentice", la forma correcta es "has to" (tiene que).',
    grammarTip: 'Obligaciones institucionales obligatorias con sujeto singular (every apprentice / he / she) = has to.',
    examples: [
      { en: 'Every apprentice has to respect the safety protocols.', es: 'Cada aprendiz tiene que respetar los protocolos de seguridad.' },
      { en: 'Every visitor has to register at the main desk.', es: 'Cada visitante tiene que registrarse en la recepción principal.' }
    ]
  }
];

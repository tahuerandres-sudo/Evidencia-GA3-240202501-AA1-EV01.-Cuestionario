import { Question } from '../types';
import { beGoingToQuestions } from './beGoingToQuestions';
import { willQuestions } from './willQuestions';
import { conditionalQuestions } from './conditionalQuestions';
import { wouldLikeQuestions } from './wouldLikeQuestions';
import { modalsQuestions } from './modalsQuestions';
import { orderingQuestions } from './orderingQuestions';
import { readingQuestions } from './readingQuestions';

export const allQuestions: Question[] = [
  ...beGoingToQuestions,
  ...willQuestions,
  ...conditionalQuestions,
  ...wouldLikeQuestions,
  ...modalsQuestions,
  ...orderingQuestions,
  ...readingQuestions,
];

/**
 * Curated Bank of exactly 90 Questions covering the 7 SENA competencies:
 * - 13 Future with Be Going To
 * - 13 Future with Will
 * - 13 First Conditional
 * - 13 Would Like To
 * - 16 Modal Verbs & Expressions
 * - 13 Sentence Ordering
 * - 9 Reading Comprehension
 * Total = exactly 90 questions
 */
export const bankOf90Questions: Question[] = [
  ...beGoingToQuestions.slice(0, 13),
  ...willQuestions.slice(0, 13),
  ...conditionalQuestions.slice(0, 13),
  ...wouldLikeQuestions.slice(0, 13),
  ...modalsQuestions.slice(0, 16),
  ...orderingQuestions.slice(0, 13),
  ...readingQuestions.slice(0, 9),
];

// Helper to shuffle array
function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Randomize question options so the correct answer isn't always in position 0
export function randomizeOptions(question: Question): Question {
  const correctText = question.options[question.correctAnswerIndex];
  const shuffledOptions = shuffleArray(question.options);
  const newCorrectIndex = shuffledOptions.indexOf(correctText);

  return {
    ...question,
    options: shuffledOptions,
    correctAnswerIndex: newCorrectIndex,
  };
}

/**
 * Generates balanced quiz questions covering all required SENA topics.
 * Supports 15 (standard SENA test), 30 (extended practice), or 90 (full bank).
 */
export function generateQuizQuestions(targetCount: number = 15): Question[] {
  if (targetCount === 90) {
    const shuffled90 = shuffleArray(bankOf90Questions);
    return shuffled90.map(q => randomizeOptions(q));
  }

  if (targetCount === 30) {
    const shuffledBgt = shuffleArray(beGoingToQuestions);
    const shuffledWill = shuffleArray(willQuestions);
    const shuffledCond = shuffleArray(conditionalQuestions);
    const shuffledWdl = shuffleArray(wouldLikeQuestions);
    const shuffledMod = shuffleArray(modalsQuestions);
    const shuffledOrd = shuffleArray(orderingQuestions);
    const shuffledRdg = shuffleArray(readingQuestions);

    const selectedQuestions: Question[] = [
      ...shuffledBgt.slice(0, 4),
      ...shuffledWill.slice(0, 4),
      ...shuffledCond.slice(0, 4),
      ...shuffledWdl.slice(0, 4),
      ...shuffledMod.slice(0, 6),
      ...shuffledOrd.slice(0, 4),
      ...shuffledRdg.slice(0, 4),
    ];
    return shuffleArray(selectedQuestions).map(q => randomizeOptions(q));
  }

  // Default: 15 questions
  const shuffledBgt = shuffleArray(beGoingToQuestions);
  const shuffledWill = shuffleArray(willQuestions);
  const shuffledCond = shuffleArray(conditionalQuestions);
  const shuffledWdl = shuffleArray(wouldLikeQuestions);
  const shuffledMod = shuffleArray(modalsQuestions);
  const shuffledOrd = shuffleArray(orderingQuestions);
  const shuffledRdg = shuffleArray(readingQuestions);

  const selectedQuestions: Question[] = [
    ...shuffledBgt.slice(0, 2),
    ...shuffledWill.slice(0, 2),
    ...shuffledCond.slice(0, 2),
    ...shuffledWdl.slice(0, 2),
    ...shuffledMod.slice(0, 3),
    ...shuffledOrd.slice(0, 2),
    ...shuffledRdg.slice(0, 2),
  ];

  const shuffledQuiz = shuffleArray(selectedQuestions);
  return shuffledQuiz.map(q => randomizeOptions(q));
}

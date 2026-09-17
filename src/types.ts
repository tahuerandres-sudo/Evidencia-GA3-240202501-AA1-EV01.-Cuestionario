export type QuestionTopic =
  | 'be_going_to'
  | 'will'
  | 'first_conditional'
  | 'would_like'
  | 'modals'
  | 'sentence_ordering'
  | 'reading_comprehension';

export type QuestionType =
  | 'multiple_choice'
  | 'sentence_ordering'
  | 'complete_sentence'
  | 'reading_comprehension'
  | 'contextual_grammar';

export interface GrammarExample {
  en: string;
  es: string;
}

export interface Question {
  id: string;
  topic: QuestionTopic;
  type: QuestionType;
  topicLabel: string;
  prompt: string; // The main question or instruction
  context?: string; // Situational context (e.g. dialogue or situation)
  readingPassage?: string; // For reading comprehension (80-130 words)
  scrambledWords?: string[]; // For sentence ordering exercises
  options: string[]; // 4 options
  correctAnswerIndex: number; // 0-3
  explanationEn: string;
  explanationEs: string;
  grammarTip: string;
  examples: [GrammarExample, GrammarExample];
}

export interface ApprenticeInfo {
  name: string;
  program: string;
  group: string; // Ficha
}

export type QuizMode = 'practice' | 'exam';
export type QuizLength = 15 | 30 | 90;

export interface UserAnswerRecord {
  question: Question;
  selectedIndex: number;
  isCorrect: boolean;
}

export interface TopicPerformance {
  topic: QuestionTopic;
  topicLabel: string;
  total: number;
  correct: number;
  percentage: number;
}

export interface PerformanceAnalysis {
  strengths: string[];
  weaknesses: string[];
  feedbackMessage: string;
  topicBreakdown: TopicPerformance[];
}

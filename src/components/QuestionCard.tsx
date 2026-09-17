import React from 'react';
import { Question, QuizMode } from '../types';
import { BookOpen, CheckCircle, XCircle, FileText, SplitSquareVertical } from 'lucide-react';
import { motion } from 'motion/react';

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  mode: QuizMode;
  selectedIndex: number | null;
  hasAnswered: boolean;
  onSelectOption: (index: number) => void;
  onNextQuestion: () => void;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  mode,
  selectedIndex,
  hasAnswered,
  onSelectOption,
  onNextQuestion,
}) => {
  const progressPercent = Math.round((questionNumber / totalQuestions) * 100);

  return (
    <div className="space-y-6">
      {/* Progress & Question Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm sm:text-base font-semibold text-slate-700">
          <span className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-xs sm:text-sm">
              Question {questionNumber} of {totalQuestions}
            </span>
            <span className="text-slate-400">•</span>
            <span className="text-slate-500 font-medium text-xs sm:text-sm">
              {question.topicLabel}
            </span>
          </span>

          <span className="font-mono font-bold text-emerald-700 text-sm">
            {progressPercent}%
          </span>
        </div>

        {/* Visual Progress Bar */}
        <div className="w-full h-2.5 sm:h-3 bg-slate-200 rounded-full overflow-hidden p-0.5">
          <motion.div
            className="h-full bg-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
            layout
          />
        </div>
      </div>

      {/* Main Question Container */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
        {/* Reading Passage if Reading Comprehension */}
        {question.readingPassage && (
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 space-y-2.5">
            <div className="flex items-center gap-2 text-slate-800 font-bold text-sm uppercase tracking-wider font-heading">
              <BookOpen className="w-4 h-4 text-emerald-600" />
              <span>Reading Passage</span>
            </div>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed italic">
              "{question.readingPassage}"
            </p>
          </div>
        )}

        {/* Situational Context if Contextual Grammar */}
        {question.context && !question.readingPassage && (
          <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-4 text-sm sm:text-base text-blue-900 font-medium flex items-start gap-2.5">
            <span className="font-bold text-blue-700 uppercase text-xs tracking-wider shrink-0 mt-0.5">
              Situation:
            </span>
            <span>{question.context}</span>
          </div>
        )}

        {/* Scrambled Words Display for Sentence Ordering */}
        {question.scrambledWords && question.scrambledWords.length > 0 && (
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-slate-500 tracking-wider block">
              Scrambled Words:
            </span>
            <div className="flex flex-wrap gap-2 p-3.5 bg-slate-100/80 rounded-xl border border-slate-200">
              {question.scrambledWords.map((word, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-white rounded-lg border border-slate-300 text-slate-800 font-bold text-base sm:text-lg shadow-2xs font-mono"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Prompt Heading (22-26px as required) */}
        <div className="space-y-1">
          <h2 className="text-xl sm:text-[25px] font-bold text-slate-900 leading-snug font-heading">
            {question.prompt}
          </h2>
        </div>

        {/* Options List (18-22px as required) */}
        <div className="space-y-3 pt-2">
          {question.options.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isCorrectOption = index === question.correctAnswerIndex;
            const letter = OPTION_LETTERS[index];

            let buttonStyles =
              'border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/30 text-slate-800 bg-white';
            let letterStyles = 'bg-slate-100 text-slate-700 border-slate-300';

            // In Practice Mode after answer
            if (mode === 'practice' && hasAnswered) {
              if (isSelected && isCorrectOption) {
                // User picked correct
                buttonStyles = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20';
                letterStyles = 'bg-emerald-600 text-white border-emerald-600';
              } else if (isSelected && !isCorrectOption) {
                // User picked wrong
                buttonStyles = 'border-rose-500 bg-rose-50 text-rose-950 ring-2 ring-rose-500/20';
                letterStyles = 'bg-rose-600 text-white border-rose-600';
              } else if (!isSelected && isCorrectOption) {
                // The actual correct answer revealed
                buttonStyles = 'border-emerald-400 bg-emerald-50/50 text-emerald-900';
                letterStyles = 'bg-emerald-600 text-white border-emerald-600';
              } else {
                buttonStyles = 'border-slate-100 text-slate-400 bg-slate-50/50 opacity-60';
                letterStyles = 'bg-slate-100 text-slate-400 border-slate-200';
              }
            } else if (mode === 'exam' && isSelected) {
              // In Exam mode when selected
              buttonStyles = 'border-blue-600 bg-blue-50 text-blue-950 ring-2 ring-blue-500/20';
              letterStyles = 'bg-blue-600 text-white border-blue-600';
            }

            return (
              <button
                key={index}
                type="button"
                id={`option-${questionNumber}-${letter}`}
                disabled={hasAnswered && mode === 'practice'}
                onClick={() => onSelectOption(index)}
                className={`w-full min-h-[58px] p-4 rounded-xl border-2 text-left transition-all flex items-center justify-between gap-4 cursor-pointer active:scale-[0.99] ${buttonStyles}`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span
                    className={`w-9 h-9 rounded-lg border flex items-center justify-center font-bold text-base shrink-0 font-heading transition-colors ${letterStyles}`}
                  >
                    {letter}
                  </span>
                  <span className="text-base sm:text-lg font-medium leading-relaxed">
                    {option}
                  </span>
                </div>

                {/* Status indicator in practice mode */}
                {mode === 'practice' && hasAnswered && (
                  <div className="shrink-0">
                    {isCorrectOption && (
                      <CheckCircle className="w-6 h-6 text-emerald-600" />
                    )}
                    {isSelected && !isCorrectOption && (
                      <XCircle className="w-6 h-6 text-rose-600" />
                    )}
                  </div>
                )}

                {/* Exam mode radio dot indicator */}
                {mode === 'exam' && (
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected
                        ? 'border-blue-600 bg-blue-600'
                        : 'border-slate-300'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Exam Mode Next Button (in exam mode we don't show feedback card until end) */}
        {mode === 'exam' && (
          <div className="pt-4 border-t border-slate-100 flex justify-end">
            <button
              type="button"
              id="exam-next-btn"
              disabled={selectedIndex === null}
              onClick={onNextQuestion}
              className={`py-3.5 px-8 font-extrabold text-base sm:text-lg rounded-xl transition-all cursor-pointer ${
                selectedIndex !== null
                  ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              {questionNumber === totalQuestions ? 'FINALIZAR SIMULACRO 🎯' : 'SIGUIENTE PREGUNTA →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

import React from 'react';
import { Question } from '../types';
import { CheckCircle2, XCircle, Lightbulb, ArrowRight, BookOpen, Quote } from 'lucide-react';
import { motion } from 'motion/react';

interface FeedbackCardProps {
  question: Question;
  selectedIndex: number;
  onNext: () => void;
  isLastQuestion: boolean;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  question,
  selectedIndex,
  onNext,
  isLastQuestion,
}) => {
  const isCorrect = selectedIndex === question.correctAnswerIndex;
  const userAnswerText = question.options[selectedIndex] || '';
  const correctAnswerText = question.options[question.correctAnswerIndex] || '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`rounded-2xl border-2 p-5 sm:p-7 shadow-sm transition-all ${
        isCorrect
          ? 'bg-emerald-50/70 border-emerald-300'
          : 'bg-amber-50/70 border-amber-300'
      }`}
    >
      {/* Top Banner Status */}
      <div className="flex items-center gap-3 pb-4 border-b border-slate-200/80">
        {isCorrect ? (
          <div className="flex items-center gap-2.5 text-emerald-800 font-extrabold text-xl sm:text-2xl font-heading">
            <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
            <span>✅ Correct!</span>
          </div>
        ) : (
          <div className="flex items-center gap-2.5 text-rose-800 font-extrabold text-xl sm:text-2xl font-heading">
            <XCircle className="w-7 h-7 text-rose-600 shrink-0" />
            <span>❌ Not quite!</span>
          </div>
        )}
      </div>

      {/* If incorrect, show Your answer vs Correct answer */}
      {!isCorrect && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="bg-rose-100/70 border border-rose-300 rounded-xl p-3.5">
            <span className="text-xs uppercase font-bold text-rose-700 tracking-wider block">
              Your answer:
            </span>
            <p className="text-base sm:text-lg font-semibold text-rose-950 mt-0.5 line-through">
              {userAnswerText}
            </p>
          </div>

          <div className="bg-emerald-100/70 border border-emerald-300 rounded-xl p-3.5">
            <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider block">
              Correct answer:
            </span>
            <p className="text-base sm:text-lg font-bold text-emerald-950 mt-0.5">
              {correctAnswerText}
            </p>
          </div>
        </div>
      )}

      {/* "Why?" Explanation Section */}
      <div className="mt-5 space-y-2">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-base sm:text-lg font-heading">
          <BookOpen className="w-5 h-5 text-emerald-700 shrink-0" />
          <span>Why?</span>
        </div>
        <p className="text-slate-700 text-base sm:text-[18px] leading-relaxed">
          {question.explanationEs}
        </p>
        <p className="text-slate-500 text-sm italic">
          {question.explanationEn}
        </p>
      </div>

      {/* Grammar Tip Box */}
      <div className="mt-5 bg-white/90 rounded-xl border border-slate-200/90 p-4 shadow-2xs space-y-1.5">
        <div className="flex items-center gap-2 text-amber-800 font-bold text-base font-heading">
          <Lightbulb className="w-5 h-5 text-amber-600 shrink-0" />
          <span>💡 Grammar Tip</span>
        </div>
        <p className="text-slate-800 text-sm sm:text-base font-medium leading-relaxed">
          {question.grammarTip}
        </p>
      </div>

      {/* 2 Additional Bilingual Examples */}
      <div className="mt-5 space-y-2.5">
        <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base uppercase tracking-wider font-heading">
          <Quote className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Examples</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {question.examples.map((example, idx) => (
            <div
              key={idx}
              className="bg-white/90 border border-slate-200 rounded-xl p-3 text-sm space-y-0.5 shadow-2xs"
            >
              <p className="font-semibold text-slate-900 text-sm sm:text-base">
                {example.en}
              </p>
              <p className="text-slate-600 text-xs sm:text-sm">
                {example.es}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Large Next Question Button */}
      <div className="mt-6 pt-4 border-t border-slate-200/80">
        <button
          type="button"
          onClick={onNext}
          id="next-question-btn"
          className="w-full py-4 px-6 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-extrabold text-lg sm:text-xl rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer"
        >
          <span>{isLastQuestion ? 'VER RESULTADOS →' : 'NEXT QUESTION →'}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </motion.div>
  );
};

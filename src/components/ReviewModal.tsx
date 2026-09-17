import React, { useState } from 'react';
import { UserAnswerRecord } from '../types';
import { CheckCircle2, XCircle, ArrowLeft, Lightbulb, BookOpen, Quote, Filter } from 'lucide-react';

interface ReviewModalProps {
  records: UserAnswerRecord[];
  onBackToResults: () => void;
  onTryAgain: () => void;
}

type FilterType = 'all' | 'mistakes' | 'correct';

export const ReviewModal: React.FC<ReviewModalProps> = ({
  records,
  onBackToResults,
  onTryAgain,
}) => {
  const [filter, setFilter] = useState<FilterType>('all');

  const mistakesCount = records.filter(r => !r.isCorrect).length;
  const correctCount = records.filter(r => r.isCorrect).length;

  const filteredRecords = records.filter(r => {
    if (filter === 'mistakes') return !r.isCorrect;
    if (filter === 'correct') return r.isCorrect;
    return true;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5">
        <div className="space-y-1">
          <button
            type="button"
            onClick={onBackToResults}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer mb-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al resumen de resultados</span>
          </button>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            📖 Detailed Answer Review
          </h1>
          <p className="text-slate-500 text-sm">
            Revisa cada una de las 15 preguntas, tus respuestas y las explicaciones gramaticales.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl shrink-0 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-white text-slate-900 shadow-2xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            All ({records.length})
          </button>

          <button
            type="button"
            onClick={() => setFilter('mistakes')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filter === 'mistakes'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'text-rose-700 hover:bg-rose-50'
            }`}
          >
            Mistakes ({mistakesCount})
          </button>

          <button
            type="button"
            onClick={() => setFilter('correct')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              filter === 'correct'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'text-emerald-700 hover:bg-emerald-50'
            }`}
          >
            Correct ({correctCount})
          </button>
        </div>
      </div>

      {/* Questions Review List */}
      <div className="space-y-6">
        {filteredRecords.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6 space-y-2">
            <p className="text-lg font-bold text-slate-700">No hay preguntas en esta categoría.</p>
            <p className="text-sm text-slate-500">Cambia el filtro para ver tus preguntas.</p>
          </div>
        ) : (
          filteredRecords.map((record, index) => {
            const originalNumber = records.indexOf(record) + 1;
            const q = record.question;
            const userAnswerText = q.options[record.selectedIndex] || 'Sin respuesta';
            const correctAnswerText = q.options[q.correctAnswerIndex] || '';

            return (
              <div
                key={q.id}
                className={`bg-white rounded-2xl border-2 p-6 space-y-5 transition-all shadow-2xs ${
                  record.isCorrect
                    ? 'border-emerald-200 bg-emerald-50/20'
                    : 'border-rose-200 bg-rose-50/20'
                }`}
              >
                {/* Header with question number, topic, and status */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center font-bold text-xs font-mono">
                      #{originalNumber}
                    </span>
                    <span className="font-bold text-slate-800 text-sm">
                      {q.topicLabel}
                    </span>
                  </div>

                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold ${
                      record.isCorrect
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-rose-100 text-rose-800'
                    }`}
                  >
                    {record.isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>CORRECT</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600" />
                        <span>INCORRECT</span>
                      </>
                    )}
                  </span>
                </div>

                {/* Optional Passage */}
                {q.readingPassage && (
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 italic">
                    "{q.readingPassage}"
                  </div>
                )}

                {/* Scrambled words if present */}
                {q.scrambledWords && (
                  <div className="flex flex-wrap gap-1.5">
                    {q.scrambledWords.map((w, i) => (
                      <span key={i} className="px-2.5 py-1 bg-slate-100 rounded-md text-xs font-mono text-slate-700 border border-slate-200">
                        {w}
                      </span>
                    ))}
                  </div>
                )}

                {/* Prompt */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-heading">
                  {q.prompt}
                </h3>

                {/* Answers Comparison Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div
                    className={`p-3.5 rounded-xl border ${
                      record.isCorrect
                        ? 'bg-emerald-50 border-emerald-300'
                        : 'bg-rose-50 border-rose-300'
                    }`}
                  >
                    <span
                      className={`text-xs uppercase font-bold tracking-wider block ${
                        record.isCorrect ? 'text-emerald-700' : 'text-rose-700'
                      }`}
                    >
                      Tu respuesta:
                    </span>
                    <p
                      className={`text-base font-bold mt-0.5 ${
                        record.isCorrect ? 'text-emerald-950' : 'text-rose-950 line-through'
                      }`}
                    >
                      {userAnswerText}
                    </p>
                  </div>

                  {!record.isCorrect && (
                    <div className="p-3.5 rounded-xl border bg-emerald-50 border-emerald-300">
                      <span className="text-xs uppercase font-bold text-emerald-700 tracking-wider block">
                        Respuesta correcta:
                      </span>
                      <p className="text-base font-bold text-emerald-950 mt-0.5">
                        {correctAnswerText}
                      </p>
                    </div>
                  )}
                </div>

                {/* Pedagogical Explanation ("Why?") */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-sm sm:text-base font-heading">
                    <BookOpen className="w-4 h-4 text-emerald-600" />
                    <span>Why?</span>
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {q.explanationEs}
                  </p>
                </div>

                {/* Grammar Tip */}
                <div className="bg-white rounded-xl border border-slate-200 p-3.5 space-y-1">
                  <div className="flex items-center gap-2 text-amber-800 font-bold text-xs sm:text-sm font-heading">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                    <span>💡 Grammar Tip</span>
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm">
                    {q.grammarTip}
                  </p>
                </div>

                {/* 2 Examples */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  {q.examples.map((ex, i) => (
                    <div key={i} className="p-2.5 bg-slate-50 border border-slate-200 rounded-lg">
                      <p className="font-semibold text-slate-900">{ex.en}</p>
                      <p className="text-slate-600">{ex.es}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
        <button
          type="button"
          onClick={onBackToResults}
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors cursor-pointer"
        >
          Volver a Resultados
        </button>

        <button
          type="button"
          onClick={onTryAgain}
          className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold shadow-md transition-all cursor-pointer"
        >
          🔄 TRY AGAIN (NEW QUESTIONS)
        </button>
      </div>
    </div>
  );
};

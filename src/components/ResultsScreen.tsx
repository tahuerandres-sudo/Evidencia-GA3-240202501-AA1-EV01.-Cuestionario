import React, { useEffect } from 'react';
import { ApprenticeInfo, PerformanceAnalysis, QuizMode, UserAnswerRecord } from '../types';
import {
  Award,
  CheckCircle,
  XCircle,
  RotateCcw,
  BookOpen,
  Printer,
  Sparkles,
  TrendingUp,
  AlertCircle,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { motion } from 'motion/react';

interface ResultsScreenProps {
  apprentice: ApprenticeInfo;
  mode: QuizMode;
  records: UserAnswerRecord[];
  analysis: PerformanceAnalysis;
  onReviewAnswers: () => void;
  onTryAgain: () => void;
  onPrintCertificate: () => void;
  onOpenQuestionBank?: () => void;
}

export const ResultsScreen: React.FC<ResultsScreenProps> = ({
  apprentice,
  mode,
  records,
  analysis,
  onReviewAnswers,
  onTryAgain,
  onPrintCertificate,
  onOpenQuestionBank,
}) => {
  const totalQuestions = records.length;
  const correctCount = records.filter(r => r.isCorrect).length;
  const incorrectCount = totalQuestions - correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const isApproved = percentage >= 70; // Standard SENA approval benchmark (70% or higher)

  useEffect(() => {
    if (isApproved) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#39A900', '#00324D', '#F29100', '#10B981']
        });
      } catch {
        // Safe fallback
      }
    }
  }, [isApproved]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12 space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        {/* Main Banner */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>{mode === 'practice' ? 'Sesión de Práctica Finalizada' : 'Simulacro Oficial Completado'}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            🎉 {mode === 'practice' ? 'Practice Completed!' : 'Exam Completed!'}
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
            Has completado las 15 preguntas de la evidencia. Analiza tus resultados y fortalece los conceptos clave.
          </p>
        </div>

        {/* Apprentice Identity Card */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-7">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Apprentice
              </span>
              <p className="text-base sm:text-lg font-bold text-slate-900 truncate">
                {apprentice.name}
              </p>
            </div>

            <div className="space-y-1 sm:pl-4 pt-3 sm:pt-0">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Program
              </span>
              <p className="text-base sm:text-lg font-bold text-slate-900 truncate">
                {apprentice.program}
              </p>
            </div>

            <div className="space-y-1 sm:pl-4 pt-3 sm:pt-0">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
                Group / Ficha
              </span>
              <p className="text-base sm:text-lg font-bold font-mono text-emerald-700">
                {apprentice.group}
              </p>
            </div>
          </div>
        </div>

        {/* Score & Evaluation Hero Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6">
          {/* Main Score Box */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center md:col-span-2 flex flex-col justify-center items-center space-y-2">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
              Final Score
            </span>
            <div className="flex items-baseline gap-2 font-heading">
              <span className="text-5xl sm:text-6xl font-extrabold text-slate-900">
                {correctCount}
              </span>
              <span className="text-2xl sm:text-3xl font-bold text-slate-400">
                / {totalQuestions}
              </span>
            </div>
            <div className="pt-2">
              <span
                className={`inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-sm font-bold ${
                  isApproved
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'bg-amber-100 text-amber-800'
                }`}
              >
                {isApproved ? 'Criterio SENA: APROBADO (A)' : 'Criterio SENA: POR MEJORAR (D)'}
              </span>
            </div>
          </div>

          {/* Percentage */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 text-center flex flex-col justify-center items-center space-y-1">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">
              Percentage
            </span>
            <p className="text-4xl sm:text-5xl font-extrabold text-emerald-600 font-heading">
              {percentage}%
            </p>
            <p className="text-xs text-slate-500">Mínimo para aprobar: 70%</p>
          </div>

          {/* Breakdown Counts */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col justify-center space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Correct:</span>
              </div>
              <span className="font-extrabold text-emerald-800 text-lg font-mono">
                {correctCount}
              </span>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                <XCircle className="w-4 h-4" />
                <span>Incorrect:</span>
              </div>
              <span className="font-extrabold text-rose-700 text-lg font-mono">
                {incorrectCount}
              </span>
            </div>
          </div>
        </div>

        {/* Personalized Performance Analysis Section */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-heading">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              <span>Your Performance Analysis</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              {analysis.feedbackMessage}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Strengths */}
            <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-emerald-800 font-bold text-base font-heading">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>You demonstrated good understanding of:</span>
              </div>
              <ul className="space-y-1.5 text-slate-800 text-sm sm:text-base">
                {analysis.strengths.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas to Continue Practicing */}
            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-5 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-base font-heading">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                <span>You should continue practicing:</span>
              </div>
              <ul className="space-y-1.5 text-slate-800 text-sm sm:text-base">
                {analysis.weaknesses.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600 shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Topic-by-Topic Mastery Breakdown */}
          <div className="space-y-3 pt-2">
            <h3 className="text-sm uppercase font-bold text-slate-500 tracking-wider">
              Desglose por Contenido Evaluado
            </h3>
            <div className="space-y-2.5">
              {analysis.topicBreakdown.map((t, idx) => (
                <div key={idx} className="space-y-1 text-xs sm:text-sm">
                  <div className="flex justify-between font-semibold text-slate-700">
                    <span>{t.topicLabel}</span>
                    <span className="font-mono">
                      {t.correct} / {t.total} ({t.percentage}%)
                    </span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        t.percentage >= 70
                          ? 'bg-emerald-500'
                          : t.percentage >= 50
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                      style={{ width: `${t.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Motivational Callout */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-5 justify-between">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold flex items-center justify-center sm:justify-start gap-2 font-heading">
              <GraduationCap className="w-6 h-6" />
              <span>🎓 Keep Practicing!</span>
            </h3>
            <p className="text-emerald-50 text-sm sm:text-base max-w-xl">
              Practice makes progress. Review your mistakes, understand the grammar and try again.
            </p>
          </div>

          <button
            type="button"
            onClick={onPrintCertificate}
            className="px-5 py-3 rounded-xl bg-white text-emerald-800 font-bold hover:bg-emerald-50 active:scale-95 transition-all shrink-0 flex items-center gap-2 shadow-xs cursor-pointer text-sm sm:text-base"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir Evidencia</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {/* Review Answers Button */}
          <button
            type="button"
            onClick={onReviewAnswers}
            id="review-answers-btn"
            className="py-3.5 px-4 bg-white border-2 border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-extrabold text-sm sm:text-base rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
          >
            <BookOpen className="w-5 h-5" />
            <span>REVIEW MY ANSWERS</span>
          </button>

          {/* Try Again / New Practice Button */}
          <button
            type="button"
            onClick={onTryAgain}
            id="try-again-btn"
            className="py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-extrabold text-sm sm:text-base rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-5 h-5" />
            <span>TRY AGAIN</span>
          </button>

          {/* Open 90 Questions Bank */}
          {onOpenQuestionBank && (
            <button
              type="button"
              onClick={onOpenQuestionBank}
              id="results-open-bank-btn"
              className="py-3.5 px-4 bg-slate-800 hover:bg-slate-900 active:scale-[0.99] text-white font-extrabold text-sm sm:text-base rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span>BANCO DE 90 PREGUNTAS</span>
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

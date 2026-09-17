import React from 'react';
import { ApprenticeInfo, QuizMode } from '../types';
import { BookOpen, Volume2, VolumeX, RotateCcw } from 'lucide-react';
import { soundEffects } from '../utils/audio';

interface HeaderProps {
  apprentice: ApprenticeInfo | null;
  mode: QuizMode | null;
  score: number;
  currentQuestionIndex: number;
  totalQuestions: number;
  isMuted: boolean;
  onToggleMute: () => void;
  onReset: () => void;
  inQuiz: boolean;
  inBank?: boolean;
  onOpenQuestionBank?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  apprentice,
  mode,
  score,
  currentQuestionIndex,
  totalQuestions,
  isMuted,
  onToggleMute,
  onReset,
  inQuiz,
  inBank,
  onOpenQuestionBank,
}) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-3 min-w-0">
            {/* SENA Green Emblem Icon */}
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-lg shadow-sm shrink-0">
              <span className="tracking-tighter">S</span>
            </div>

            <div className="min-w-0">
              <h1 className="text-base sm:text-lg font-bold text-slate-900 truncate font-heading tracking-tight leading-tight">
                Evidencia GA3-240202501-AA1-EV01. Cuestionario
              </h1>
              <p className="text-xs sm:text-sm text-slate-500 truncate flex items-center gap-1.5 font-medium">
                <span>Interactive English Practice – Preparation Questionnaire</span>
              </p>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mode & Apprentice pill on quiz screen */}
            {inQuiz && apprentice && (
              <div className="hidden md:flex items-center gap-2 bg-slate-100 rounded-lg px-3 py-1 text-xs text-slate-700">
                <span className="font-semibold text-slate-900 truncate max-w-[120px]">{apprentice.name}</span>
                <span className="text-slate-400">|</span>
                <span className="text-slate-600 font-mono">Ficha: {apprentice.group}</span>
                <span className="text-slate-400">|</span>
                <span className={`font-semibold ${mode === 'practice' ? 'text-emerald-700' : 'text-blue-700'}`}>
                  {mode === 'practice' ? '🎯 Práctica' : '📝 Simulacro'}
                </span>
              </div>
            )}

            {/* In Quiz Score badge */}
            {inQuiz && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg px-3 py-1 text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-xs">
                <span>Score:</span>
                <span className="font-mono text-emerald-900 font-extrabold">{score} / {totalQuestions}</span>
              </div>
            )}

            {/* Question Bank quick access button */}
            {!inQuiz && onOpenQuestionBank && (
              <button
                type="button"
                onClick={onOpenQuestionBank}
                className={`px-3 py-1.5 rounded-lg text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors cursor-pointer ${
                  inBank
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                <BookOpen className="w-4 h-4 text-emerald-600" />
                <span className="hidden sm:inline">Banco de 90 Preguntas</span>
                <span className="sm:hidden">Banco 90</span>
              </button>
            )}

            {/* Sound Toggle */}
            <button
              type="button"
              onClick={onToggleMute}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              title={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
              aria-label={isMuted ? 'Activar sonido' : 'Silenciar sonido'}
            >
              {isMuted ? <VolumeX className="w-5 h-5 text-slate-400" /> : <Volume2 className="w-5 h-5 text-emerald-600" />}
            </button>

            {/* Quit/Reset button if in quiz */}
            {inQuiz && (
              <button
                type="button"
                onClick={onReset}
                className="p-2 rounded-lg text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                title="Volver al inicio"
                aria-label="Volver al inicio"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

import React, { useState } from 'react';
import { ApprenticeInfo, QuizMode } from '../types';
import { Sparkles, BookOpen, Clock, Target, Compass, Award, CheckCircle2, FileText } from 'lucide-react';
import { motion } from 'motion/react';

interface StartScreenProps {
  onStartQuiz: (info: ApprenticeInfo, mode: QuizMode, count: number) => void;
  onOpenQuestionBank: () => void;
  initialInfo?: ApprenticeInfo | null;
}

export const StartScreen: React.FC<StartScreenProps> = ({
  onStartQuiz,
  onOpenQuestionBank,
  initialInfo,
}) => {
  const [name, setName] = useState(initialInfo?.name || '');
  const [program, setProgram] = useState(
    initialInfo?.program || 'Tecnología en Análisis y Desarrollo de Software (ADSO)'
  );
  const [group, setGroup] = useState(initialInfo?.group || '2834567');
  const [mode, setMode] = useState<QuizMode>('practice');
  const [questionCount, setQuestionCount] = useState<number>(15);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Por favor escribe tu nombre completo para personalizar tu evidencia.');
      return;
    }
    if (!program.trim()) {
      setError('Por favor ingresa tu programa de formación.');
      return;
    }
    if (!group.trim()) {
      setError('Por favor indica tu número de ficha o grupo.');
      return;
    }
    setError('');
    onStartQuiz(
      {
        name: name.trim(),
        program: program.trim(),
        group: group.trim(),
      },
      mode,
      questionCount
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="space-y-8"
      >
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Simulador Pedagógico SENA • Bilingüismo</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Evidencia GA3-240202501-AA1-EV01. Cuestionario
          </h1>

          <p className="text-lg sm:text-xl font-medium text-emerald-700 font-heading">
            Interactive English Practice – Preparation Questionnaire
          </p>

          <p className="max-w-2xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed">
            Practice grammar, vocabulary, sentence organization and reading comprehension through interactive questions similar in structure and difficulty to the SENA questionnaire.
          </p>
        </div>

        {/* Question Bank Explorer Banner */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 rounded-2xl p-5 sm:p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md border border-slate-800">
          <div className="space-y-1.5 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>MATERIAL OFICIAL DE ESTUDIO</span>
            </div>
            <h3 className="text-lg sm:text-xl font-extrabold font-heading text-white">
              📚 Banco Completo de 90 Preguntas de Preparación
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Estudia las 90 preguntas pedagógicas con soluciones explicadas ("Why?"), reglas ("Grammar Tips"), ejemplos bilingües y opción de imprimir en PDF.
            </p>
          </div>
          <button
            type="button"
            onClick={onOpenQuestionBank}
            id="open-question-bank-btn"
            className="shrink-0 px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 active:scale-95 text-slate-950 font-extrabold text-sm transition-all flex items-center gap-2 shadow-md cursor-pointer"
          >
            <span>Explorar Banco de 90 Preguntas</span>
            <Sparkles className="w-4 h-4 text-slate-900" />
          </button>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2 font-heading">
              <FileText className="w-5 h-5 text-emerald-600" />
              <span>Información del Aprendiz</span>
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Ingresa tus datos para registrar el resultado y generar la evidencia de práctica.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              {/* Apprentice Name */}
              <div className="space-y-2 md:col-span-1">
                <label htmlFor="apprentice-name" className="block text-sm font-semibold text-slate-700">
                  Apprentice's Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="apprentice-name"
                  type="text"
                  required
                  placeholder="Ej. Andrea Gómez Pérez"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-base rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50/50"
                />
              </div>

              {/* Training Program */}
              <div className="space-y-2 md:col-span-1">
                <label htmlFor="training-program" className="block text-sm font-semibold text-slate-700">
                  Training Program <span className="text-rose-500">*</span>
                </label>
                <input
                  id="training-program"
                  type="text"
                  required
                  placeholder="Ej. Análisis y Desarrollo de Software"
                  value={program}
                  onChange={(e) => setProgram(e.target.value)}
                  className="w-full px-4 py-3 text-base rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50/50"
                />
              </div>

              {/* Ficha / Group */}
              <div className="space-y-2 md:col-span-1">
                <label htmlFor="training-group" className="block text-sm font-semibold text-slate-700">
                  Training Group / Ficha <span className="text-rose-500">*</span>
                </label>
                <input
                  id="training-group"
                  type="text"
                  required
                  placeholder="Ej. 2834567"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                  className="w-full px-4 py-3 text-base rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all bg-slate-50/50 font-mono"
                />
              </div>
            </div>

            {/* Question Count Selection */}
            <div className="space-y-2 pt-2 border-t border-slate-100">
              <label className="block text-sm font-semibold text-slate-700">
                Extensión del Cuestionario <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  type="button"
                  onClick={() => setQuestionCount(15)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    questionCount === 15
                      ? 'border-emerald-600 bg-emerald-50/70 ring-1 ring-emerald-500/30'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">15 Preguntas</span>
                    {questionCount === 15 && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Cuestionario estándar del SENA (recomendado).
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setQuestionCount(30)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    questionCount === 30
                      ? 'border-emerald-600 bg-emerald-50/70 ring-1 ring-emerald-500/30'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">30 Preguntas</span>
                    {questionCount === 30 && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Simulacro intermedio intensivo.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setQuestionCount(90)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                    questionCount === 90
                      ? 'border-emerald-600 bg-emerald-50/70 ring-1 ring-emerald-500/30'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-slate-900">90 Preguntas</span>
                    {questionCount === 90 && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Banco completo para maestría total.
                  </p>
                </button>
              </div>
            </div>

            {/* Mode Selection */}
            <div className="space-y-3 pt-2">
              <label className="block text-sm font-semibold text-slate-700">
                Selecciona el Modo de Práctica <span className="text-rose-500">*</span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Practice Mode */}
                <button
                  type="button"
                  onClick={() => setMode('practice')}
                  className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer relative ${
                    mode === 'practice'
                      ? 'border-emerald-600 bg-emerald-50/60 ring-2 ring-emerald-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-base font-heading">
                      <Target className="w-5 h-5 text-emerald-600" />
                      <span>🎯 MODO PRÁCTICA</span>
                    </div>
                    {mode === 'practice' && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    <strong>Retroalimentación pedagógica inmediata:</strong> tras responder cada pregunta ves la explicación ("Why?"), el Grammar Tip y 2 ejemplos bilingües. Ideal para aprender de los errores.
                  </p>
                </button>

                {/* Exam / Mock Mode */}
                <button
                  type="button"
                  onClick={() => setMode('exam')}
                  className={`p-4 rounded-xl border-2 text-left transition-all cursor-pointer relative ${
                    mode === 'exam'
                      ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2 text-blue-800 font-bold text-base font-heading">
                      <Award className="w-5 h-5 text-blue-600" />
                      <span>📝 MODO SIMULACRO</span>
                    </div>
                    {mode === 'exam' && (
                      <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                    <strong>Simulación de examen real:</strong> respondes las preguntas de corrido sin ver respuestas intermedias. Al finalizar obtienes tu puntaje y la revisión completa.
                  </p>
                </button>
              </div>
            </div>

            {/* Error message */}
            {error && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 text-sm rounded-xl">
                {error}
              </div>
            )}

            {/* Big Start Button */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                id="start-practice-btn"
                className="flex-1 py-4 px-6 bg-emerald-600 hover:bg-emerald-700 active:scale-[0.99] text-white font-extrabold text-lg sm:text-xl rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 cursor-pointer"
              >
                <span>🚀 INICIAR PRÁCTICA ({questionCount} PREGUNTAS)</span>
              </button>

              <button
                type="button"
                onClick={onOpenQuestionBank}
                className="py-4 px-5 bg-slate-100 hover:bg-slate-200 active:scale-[0.99] text-slate-800 font-bold text-sm sm:text-base rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer border border-slate-300"
              >
                <BookOpen className="w-5 h-5 text-emerald-700" />
                <span>Ver Banco de 90</span>
              </button>
            </div>
          </form>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2 font-bold font-mono">
              90
            </div>
            <h3 className="font-bold text-slate-800 text-sm">Banco de 90 Preguntas</h3>
            <p className="text-xs text-slate-500 mt-1">
              Organizadas en 7 competencias con retroalimentación bilingüe detallada.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-2">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-800 text-sm">Sin Límite de Tiempo</h3>
            <p className="text-xs text-slate-500 mt-1">
              Tómate el tiempo necesario para leer, analizar y asimilar las reglas gramaticales.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200 shadow-2xs">
            <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center mx-auto mb-2">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-800 text-sm">7 Temas Clave</h3>
            <p className="text-xs text-slate-500 mt-1">
              Be going to, will, first conditional, would like, modals, sentence ordering y reading.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

import React, { useState, useMemo } from 'react';
import { Question, QuestionTopic } from '../types';
import { bankOf90Questions } from '../data';
import {
  BookOpen,
  Search,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Printer,
  ArrowLeft,
  Sparkles,
  Eye,
  EyeOff,
  SlidersHorizontal,
  Play,
  RotateCcw,
  GraduationCap
} from 'lucide-react';
import { motion } from 'motion/react';

interface QuestionBankScreenProps {
  onBack: () => void;
  onStartPracticeWithCount: (count: number) => void;
}

const TOPIC_CHIPS: { topic: QuestionTopic | 'all'; label: string; count: number }[] = [
  { topic: 'all', label: 'Todas las Preguntas', count: 90 },
  { topic: 'be_going_to', label: 'Be Going To', count: 13 },
  { topic: 'will', label: 'Future Will', count: 13 },
  { topic: 'first_conditional', label: 'First Conditional', count: 13 },
  { topic: 'would_like', label: 'Would Like To', count: 13 },
  { topic: 'modals', label: 'Modal Verbs', count: 16 },
  { topic: 'sentence_ordering', label: 'Sentence Ordering', count: 13 },
  { topic: 'reading_comprehension', label: 'Reading Comprehension', count: 9 },
];

const OPTION_LETTERS = ['A', 'B', 'C', 'D'];

export const QuestionBankScreen: React.FC<QuestionBankScreenProps> = ({
  onBack,
  onStartPracticeWithCount,
}) => {
  const [selectedTopic, setSelectedTopic] = useState<QuestionTopic | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [revealedIds, setRevealedIds] = useState<Record<string, boolean>>({});
  const [userSelections, setUserSelections] = useState<Record<string, number>>({});
  const [showAllAnswers, setShowAllAnswers] = useState(false);

  // Filter questions based on topic and search query
  const filteredQuestions = useMemo(() => {
    return bankOf90Questions.filter((q, index) => {
      const matchesTopic = selectedTopic === 'all' || q.topic === selectedTopic;
      if (!matchesTopic) return false;

      if (!searchQuery.trim()) return true;

      const qNum = (index + 1).toString();
      const query = searchQuery.toLowerCase();
      const inPrompt = q.prompt.toLowerCase().includes(query);
      const inTopic = q.topicLabel.toLowerCase().includes(query);
      const inPassage = q.readingPassage?.toLowerCase().includes(query) || false;
      const inOptions = q.options.some(opt => opt.toLowerCase().includes(query));
      const inExpl = q.explanationEs.toLowerCase().includes(query);
      const inTip = q.grammarTip.toLowerCase().includes(query);

      return qNum === query || inPrompt || inTopic || inPassage || inOptions || inExpl || inTip;
    });
  }, [selectedTopic, searchQuery]);

  const toggleReveal = (id: string) => {
    setRevealedIds(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleShowAll = () => {
    const nextState = !showAllAnswers;
    setShowAllAnswers(nextState);
    const updated: Record<string, boolean> = {};
    bankOf90Questions.forEach(q => {
      updated[q.id] = nextState;
    });
    setRevealedIds(updated);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setUserSelections(prev => ({
      ...prev,
      [questionId]: optionIndex,
    }));
    // Also reveal solution for immediate feedback
    setRevealedIds(prev => ({
      ...prev,
      [questionId]: true,
    }));
  };

  const handleResetSelfTest = () => {
    setUserSelections({});
    setRevealedIds({});
    setShowAllAnswers(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-10 space-y-8">
      {/* Top Header & Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-5 no-print">
        <div className="space-y-1">
          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-slate-600 hover:text-emerald-700 transition-colors cursor-pointer mb-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Menú Principal</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="px-3 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold font-mono">
              90 PREGUNTAS
            </span>
            <span className="text-xs font-semibold text-slate-500">
              Guía Oficial de Preparación SENA
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            📚 Banco de 90 Preguntas Pedagógicas
          </h1>
          <p className="text-slate-600 text-sm sm:text-base">
            Explora las 90 preguntas completas con explicaciones ("Why?"), reglas gramaticales ("Grammar Tip") y ejemplos bilingües.
          </p>
        </div>

        {/* Header Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={toggleShowAll}
            className="px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-50 transition-colors flex items-center gap-2 shadow-2xs cursor-pointer"
          >
            {showAllAnswers ? <EyeOff className="w-4 h-4 text-slate-500" /> : <Eye className="w-4 h-4 text-emerald-600" />}
            <span>{showAllAnswers ? 'Ocultar Respuestas' : 'Mostrar Todas las Respuestas'}</span>
          </button>

          <button
            type="button"
            onClick={() => window.print()}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-900 text-white text-xs sm:text-sm font-bold transition-colors flex items-center gap-2 shadow-2xs cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>Imprimir Banco</span>
          </button>

          <button
            type="button"
            onClick={() => onStartPracticeWithCount(15)}
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-extrabold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer active:scale-95"
          >
            <Play className="w-4 h-4" />
            <span>Cuestionario (15)</span>
          </button>
        </div>
      </div>

      {/* Topics Summary Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 no-print">
        {TOPIC_CHIPS.map(chip => {
          const isSelected = selectedTopic === chip.topic;
          return (
            <button
              key={chip.topic}
              type="button"
              onClick={() => setSelectedTopic(chip.topic)}
              className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 shadow-2xs'
                  : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-extrabold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                  {chip.count}
                </span>
                {isSelected && <span className="w-2 h-2 rounded-full bg-emerald-600" />}
              </div>
              <p className="font-bold text-xs sm:text-sm mt-1.5 leading-tight truncate">
                {chip.label}
              </p>
            </button>
          );
        })}
      </div>

      {/* Search & Stats Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-2xs no-print">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por palabra, regla o tema..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-9.5 pr-4 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50/50"
          />
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto text-xs sm:text-sm text-slate-600">
          <span>
            Mostrando <strong>{filteredQuestions.length}</strong> de <strong>90</strong> preguntas
          </span>

          {Object.keys(userSelections).length > 0 && (
            <button
              type="button"
              onClick={handleResetSelfTest}
              className="text-xs text-rose-600 hover:text-rose-700 font-bold flex items-center gap-1 underline cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reiniciar pruebas ({Object.keys(userSelections).length})</span>
            </button>
          )}
        </div>
      </div>

      {/* Printable Heading (visible only when printing) */}
      <div className="hidden print:block border-b-2 border-slate-800 pb-4 mb-6">
        <h1 className="text-xl font-black text-slate-900">
          SERVICIO NACIONAL DE APRENDIZAJE (SENA) - BANCO DE 90 PREGUNTAS
        </h1>
        <p className="text-sm font-bold text-slate-700">
          Evidencia GA3-240202501-AA1-EV01. Cuestionario de Inglés
        </p>
        <p className="text-xs text-slate-500">
          Guía Completa de Estudio: Be Going To, Will, First Conditional, Would Like To, Modals, Sentence Ordering, Reading Comprehension.
        </p>
      </div>

      {/* Questions List */}
      <div className="space-y-6">
        {filteredQuestions.map((q, filteredIdx) => {
          const originalNumber = bankOf90Questions.indexOf(q) + 1;
          const isRevealed = showAllAnswers || !!revealedIds[q.id];
          const userSelectedOption = userSelections[q.id];
          const isAnswered = userSelectedOption !== undefined;
          const isUserCorrect = isAnswered && userSelectedOption === q.correctAnswerIndex;

          return (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-2xl border border-slate-200 shadow-2xs p-5 sm:p-7 space-y-4 print:border-slate-300 print:shadow-none print:p-4 print:break-inside-avoid"
            >
              {/* Question Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-slate-900 text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                    #{originalNumber}
                  </span>
                  <div>
                    <span className="font-bold text-slate-800 text-sm sm:text-base">
                      {q.topicLabel}
                    </span>
                    <span className="hidden sm:inline text-slate-400 text-xs ml-2">
                      • Competencia Bilingüismo
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 no-print">
                  {isAnswered && (
                    <span
                      className={`text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 ${
                        isUserCorrect
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isUserCorrect ? <CheckCircle2 className="w-3.5 h-3.5" /> : <XCircle className="w-3.5 h-3.5" />}
                      <span>{isUserCorrect ? 'Correcto' : 'Incorrecto'}</span>
                    </span>
                  )}

                  <button
                    type="button"
                    onClick={() => toggleReveal(q.id)}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {isRevealed ? <EyeOff className="w-3.5 h-3.5 text-slate-400" /> : <Eye className="w-3.5 h-3.5 text-emerald-600" />}
                    <span>{isRevealed ? 'Ocultar Solución' : 'Ver Solución'}</span>
                  </button>
                </div>
              </div>

              {/* Reading Passage if Reading Comprehension */}
              {q.readingPassage && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs sm:text-sm text-slate-700 italic space-y-1">
                  <span className="text-[11px] font-bold text-slate-500 uppercase not-italic block">
                    📖 Reading Passage:
                  </span>
                  <p className="leading-relaxed">"{q.readingPassage}"</p>
                </div>
              )}

              {/* Scrambled Words for Sentence Ordering */}
              {q.scrambledWords && q.scrambledWords.length > 0 && (
                <div className="space-y-1.5">
                  <span className="text-[11px] uppercase font-bold text-slate-500 tracking-wider block">
                    Palabras desordenadas:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {q.scrambledWords.map((word, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-slate-100 rounded-lg text-xs font-mono font-bold text-slate-800 border border-slate-200"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Prompt */}
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug font-heading">
                {q.prompt}
              </h2>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {q.options.map((opt, optIdx) => {
                  const letter = OPTION_LETTERS[optIdx];
                  const isCorrect = optIdx === q.correctAnswerIndex;
                  const isSelected = userSelectedOption === optIdx;

                  let cardStyle = 'border-slate-200 bg-slate-50/50 hover:bg-slate-100 text-slate-800';
                  let letterStyle = 'bg-white border-slate-300 text-slate-700';

                  if (isRevealed) {
                    if (isCorrect) {
                      cardStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-950 ring-1 ring-emerald-500/20 font-bold';
                      letterStyle = 'bg-emerald-600 text-white border-emerald-600';
                    } else if (isSelected) {
                      cardStyle = 'border-rose-400 bg-rose-50/70 text-rose-950 line-through';
                      letterStyle = 'bg-rose-600 text-white border-rose-600';
                    } else {
                      cardStyle = 'border-slate-100 bg-slate-50/40 text-slate-400';
                      letterStyle = 'bg-slate-100 border-slate-200 text-slate-400';
                    }
                  } else if (isSelected) {
                    cardStyle = 'border-blue-500 bg-blue-50 text-blue-950 font-bold ring-1 ring-blue-500/20';
                    letterStyle = 'bg-blue-600 text-white border-blue-600';
                  }

                  return (
                    <button
                      key={optIdx}
                      type="button"
                      onClick={() => handleSelectOption(q.id, optIdx)}
                      className={`p-3 rounded-xl border text-left flex items-center justify-between gap-3 text-sm sm:text-base transition-all cursor-pointer ${cardStyle}`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className={`w-7 h-7 rounded-lg border text-xs font-bold flex items-center justify-center shrink-0 font-heading ${letterStyle}`}>
                          {letter}
                        </span>
                        <span className="truncate">{opt}</span>
                      </div>
                      {isRevealed && isCorrect && (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                      )}
                      {isRevealed && isSelected && !isCorrect && (
                        <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Solución y Retroalimentación Explicada */}
              {isRevealed && (
                <div className="mt-4 pt-4 border-t border-slate-100 space-y-3 bg-slate-50/70 p-4 rounded-xl border border-slate-200">
                  {/* Why */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm uppercase tracking-wider">
                      <BookOpen className="w-4 h-4 text-emerald-600" />
                      <span>¿Por qué es la respuesta correcta? (Why?)</span>
                    </div>
                    <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
                      {q.explanationEs}
                    </p>
                    <p className="text-slate-500 text-xs italic">
                      {q.explanationEn}
                    </p>
                  </div>

                  {/* Grammar Tip */}
                  <div className="bg-white rounded-lg p-3 border border-amber-200 space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-800 font-bold text-xs sm:text-sm">
                      <Lightbulb className="w-4 h-4 text-amber-600" />
                      <span>💡 Grammar Tip</span>
                    </div>
                    <p className="text-slate-700 text-xs sm:text-sm">
                      {q.grammarTip}
                    </p>
                  </div>

                  {/* Bilingual Examples */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {q.examples.map((ex, i) => (
                      <div key={i} className="p-2.5 bg-white rounded-lg border border-slate-200">
                        <p className="font-semibold text-slate-900">{ex.en}</p>
                        <p className="text-slate-600">{ex.es}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Floating Bar */}
      <div className="sticky bottom-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200 p-4 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-3 no-print">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-emerald-600" />
          <span className="text-sm font-bold text-slate-800">
            ¿Listo para poner a prueba tus conocimientos?
          </span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            onClick={onBack}
            className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold hover:bg-slate-50 transition-colors text-sm cursor-pointer"
          >
            Volver al Menú
          </button>

          <button
            type="button"
            onClick={() => onStartPracticeWithCount(15)}
            className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            <Play className="w-4 h-4" />
            <span>Iniciar Cuestionario</span>
          </button>
        </div>
      </div>
    </div>
  );
};

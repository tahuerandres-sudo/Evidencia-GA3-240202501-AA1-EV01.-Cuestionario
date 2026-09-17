import React, { useState, useEffect } from 'react';
import { ApprenticeInfo, PerformanceAnalysis, Question, QuizMode, UserAnswerRecord } from './types';
import { generateQuizQuestions } from './data';
import { analyzePerformance } from './utils/analysis';
import { soundEffects } from './utils/audio';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { QuestionCard } from './components/QuestionCard';
import { FeedbackCard } from './components/FeedbackCard';
import { ResultsScreen } from './components/ResultsScreen';
import { ReviewModal } from './components/ReviewModal';
import { PrintEvidence } from './components/PrintEvidence';
import { QuestionBankScreen } from './components/QuestionBankScreen';

type ScreenState = 'start' | 'quiz' | 'results' | 'review' | 'bank';

const STORAGE_KEY_APPRENTICE = 'sena_english_apprentice_info';

export default function App() {
  const [screen, setScreen] = useState<ScreenState>('start');
  const [apprentice, setApprentice] = useState<ApprenticeInfo | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_APPRENTICE);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });
  const [mode, setMode] = useState<QuizMode>('practice');
  const [totalQuizQuestions, setTotalQuizQuestions] = useState<number>(15);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnsweredCurrent, setHasAnsweredCurrent] = useState<boolean>(false);
  const [records, setRecords] = useState<UserAnswerRecord[]>([]);
  const [score, setScore] = useState<number>(0);
  const [analysis, setAnalysis] = useState<PerformanceAnalysis | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  // Initialize a new quiz
  const handleStartQuiz = (
    info: ApprenticeInfo,
    selectedMode: QuizMode,
    count: number = 15
  ) => {
    setApprentice(info);
    setMode(selectedMode);
    setTotalQuizQuestions(count);
    try {
      localStorage.setItem(STORAGE_KEY_APPRENTICE, JSON.stringify(info));
    } catch {
      // Ignore storage errors
    }

    // Generate balanced questions from the bank (15, 30 or 90)
    const newQuestions = generateQuizQuestions(count);
    setQuestions(newQuestions);
    setCurrentIndex(0);
    setSelectedOption(null);
    setHasAnsweredCurrent(false);
    setRecords([]);
    setScore(0);
    setAnalysis(null);
    setScreen('quiz');
  };

  // Start practice directly with given count
  const handleStartPracticeFromBank = (count: number = 15) => {
    const defaultInfo: ApprenticeInfo = apprentice || {
      name: 'Aprendiz SENA',
      program: 'Tecnología en Análisis y Desarrollo de Software (ADSO)',
      group: '2834567',
    };
    handleStartQuiz(defaultInfo, 'practice', count);
  };

  // Option selected by apprentice
  const handleSelectOption = (index: number) => {
    if (hasAnsweredCurrent && mode === 'practice') return;

    setSelectedOption(index);
    const currentQ = questions[currentIndex];
    const isCorrect = index === currentQ.correctAnswerIndex;

    if (mode === 'practice') {
      // In practice mode, lock and reveal feedback immediately
      setHasAnsweredCurrent(true);
      if (isCorrect) {
        setScore(prev => prev + 1);
        soundEffects.playCorrect();
      } else {
        soundEffects.playIncorrect();
      }
    }
  };

  // Advance to next question or complete quiz
  const handleNextQuestion = () => {
    if (selectedOption === null) return;

    const currentQ = questions[currentIndex];
    const isCorrect = selectedOption === currentQ.correctAnswerIndex;

    // Record the user's answer
    const newRecord: UserAnswerRecord = {
      question: currentQ,
      selectedIndex: selectedOption,
      isCorrect,
    };

    const updatedRecords = [...records, newRecord];
    setRecords(updatedRecords);

    // If in exam mode, sound wasn't played yet and score wasn't updated live
    if (mode === 'exam' && isCorrect) {
      setScore(prev => prev + 1);
    }

    if (currentIndex + 1 < totalQuizQuestions) {
      // Advance
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasAnsweredCurrent(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Quiz completed!
      const finalAnalysis = analyzePerformance(updatedRecords);
      setAnalysis(finalAnalysis);
      setScreen('results');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Restart quiz with fresh random questions
  const handleTryAgain = () => {
    if (apprentice) {
      handleStartQuiz(apprentice, mode, totalQuizQuestions);
    } else {
      setScreen('start');
    }
  };

  // Reset back to start
  const handleReset = () => {
    if (window.confirm('¿Deseas volver a la pantalla inicial? Se reiniciará tu avance actual.')) {
      setScreen('start');
      setCurrentIndex(0);
      setSelectedOption(null);
      setHasAnsweredCurrent(false);
      setRecords([]);
      setScore(0);
    }
  };

  const handleToggleMute = () => {
    const muted = soundEffects.toggleMute();
    setIsMuted(muted);
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  const currentQuestion = questions[currentIndex];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Header */}
      <Header
        apprentice={apprentice}
        mode={screen !== 'start' && screen !== 'bank' ? mode : null}
        score={score}
        currentQuestionIndex={currentIndex + 1}
        totalQuestions={totalQuizQuestions}
        isMuted={isMuted}
        onToggleMute={handleToggleMute}
        onReset={handleReset}
        inQuiz={screen === 'quiz'}
        inBank={screen === 'bank'}
        onOpenQuestionBank={() => setScreen('bank')}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16 no-print">
        {screen === 'start' && (
          <StartScreen
            onStartQuiz={handleStartQuiz}
            onOpenQuestionBank={() => setScreen('bank')}
            initialInfo={apprentice}
          />
        )}

        {screen === 'bank' && (
          <QuestionBankScreen
            onBack={() => setScreen('start')}
            onStartPracticeWithCount={handleStartPracticeFromBank}
          />
        )}

        {screen === 'quiz' && currentQuestion && (
          <div className="max-w-3xl mx-auto px-4 py-6 sm:py-10 space-y-6">
            <QuestionCard
              question={currentQuestion}
              questionNumber={currentIndex + 1}
              totalQuestions={totalQuizQuestions}
              mode={mode}
              selectedIndex={selectedOption}
              hasAnswered={hasAnsweredCurrent}
              onSelectOption={handleSelectOption}
              onNextQuestion={handleNextQuestion}
            />

            {/* Immediate Pedagogical Feedback Card in Practice Mode */}
            {mode === 'practice' && hasAnsweredCurrent && selectedOption !== null && (
              <FeedbackCard
                question={currentQuestion}
                selectedIndex={selectedOption}
                onNext={handleNextQuestion}
                isLastQuestion={currentIndex + 1 === totalQuizQuestions}
              />
            )}
          </div>
        )}

        {screen === 'results' && apprentice && analysis && (
          <ResultsScreen
            apprentice={apprentice}
            mode={mode}
            records={records}
            analysis={analysis}
            onReviewAnswers={() => setScreen('review')}
            onTryAgain={handleTryAgain}
            onPrintCertificate={handlePrintCertificate}
            onOpenQuestionBank={() => setScreen('bank')}
          />
        )}

        {screen === 'review' && (
          <ReviewModal
            records={records}
            onBackToResults={() => setScreen('results')}
            onTryAgain={handleTryAgain}
          />
        )}
      </main>

      {/* Printable Evidence Sheet */}
      {apprentice && analysis && screen === 'results' && (
        <PrintEvidence
          apprentice={apprentice}
          mode={mode}
          records={records}
          analysis={analysis}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-4 text-center text-xs text-slate-500 no-print">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            SENA • Competencia Bilingüe: Interactuar en lengua inglesa según la evidencia GA3-240202501-AA1-EV01.
          </span>
          <button
            type="button"
            onClick={() => setScreen('bank')}
            className="text-emerald-700 hover:text-emerald-800 font-semibold underline cursor-pointer"
          >
            Banco Oficial de 90 Preguntas
          </button>
        </div>
      </footer>
    </div>
  );
}

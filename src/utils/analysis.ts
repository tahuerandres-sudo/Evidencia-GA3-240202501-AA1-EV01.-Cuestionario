import { PerformanceAnalysis, QuestionTopic, TopicPerformance, UserAnswerRecord } from '../types';

const TOPIC_LABELS: Record<QuestionTopic, string> = {
  be_going_to: 'Future with Be Going To',
  will: 'Future with Will',
  first_conditional: 'First Conditional',
  would_like: 'Would Like To',
  modals: 'Modal Verbs (must, should, have to, can)',
  sentence_ordering: 'Sentence Organization & Word Order',
  reading_comprehension: 'Reading Comprehension',
};

export function analyzePerformance(records: UserAnswerRecord[]): PerformanceAnalysis {
  const topicMap: Partial<Record<QuestionTopic, { total: number; correct: number }>> = {};

  // Initialize
  for (const record of records) {
    const t = record.question.topic;
    if (!topicMap[t]) {
      topicMap[t] = { total: 0, correct: 0 };
    }
    topicMap[t]!.total += 1;
    if (record.isCorrect) {
      topicMap[t]!.correct += 1;
    }
  }

  const topicBreakdown: TopicPerformance[] = [];
  const strengths: string[] = [];
  const weaknesses: string[] = [];

  for (const key of Object.keys(topicMap) as QuestionTopic[]) {
    const data = topicMap[key]!;
    const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
    const label = TOPIC_LABELS[key] || key;

    topicBreakdown.push({
      topic: key,
      topicLabel: label,
      total: data.total,
      correct: data.correct,
      percentage: pct,
    });

    if (pct >= 80) {
      strengths.push(label);
    } else if (pct < 70) {
      weaknesses.push(label);
    }
  }

  // Fallback defaults if edge conditions occur
  if (strengths.length === 0) {
    // Pick the top scored topic if any
    const sorted = [...topicBreakdown].sort((a, b) => b.percentage - a.percentage);
    if (sorted.length > 0 && sorted[0].percentage > 0) {
      strengths.push(sorted[0].topicLabel);
    } else {
      strengths.push('General effort & dedication');
    }
  }

  if (weaknesses.length === 0) {
    // If all were >= 70%, suggest deepening on whichever was lowest
    const sorted = [...topicBreakdown].sort((a, b) => a.percentage - b.percentage);
    if (sorted.length > 0 && sorted[0].percentage < 100) {
      weaknesses.push(sorted[0].topicLabel);
    } else {
      weaknesses.push('Maintain your fluency with advanced practice');
    }
  }

  const totalScore = records.filter(r => r.isCorrect).length;
  let feedbackMessage = '';

  if (totalScore >= 13) {
    feedbackMessage = '¡Excelente trabajo! Has demostrado un dominio sobresaliente de las estructuras gramaticales de la evidencia.';
  } else if (totalScore >= 10) {
    feedbackMessage = '¡Buen desempeño! Has alcanzado el criterio de aprobación. Revisa los temas puntuales para perfeccionar tu puntaje.';
  } else {
    feedbackMessage = 'Continúa preparándote. El cuestionario es una herramienta de aprendizaje: analiza la retroalimentación de cada error y vuelve a intentar.';
  }

  return {
    strengths,
    weaknesses,
    feedbackMessage,
    topicBreakdown,
  };
}

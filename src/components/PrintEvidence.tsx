import React from 'react';
import { ApprenticeInfo, PerformanceAnalysis, QuizMode, UserAnswerRecord } from '../types';

interface PrintEvidenceProps {
  apprentice: ApprenticeInfo;
  mode: QuizMode;
  records: UserAnswerRecord[];
  analysis: PerformanceAnalysis;
}

export const PrintEvidence: React.FC<PrintEvidenceProps> = ({
  apprentice,
  mode,
  records,
  analysis,
}) => {
  const correctCount = records.filter(r => r.isCorrect).length;
  const percentage = Math.round((correctCount / records.length) * 100);
  const isApproved = percentage >= 70;
  const currentDate = new Date().toLocaleDateString('es-CO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="hidden print:block p-8 max-w-4xl mx-auto text-black font-sans">
      {/* Official SENA Style Header */}
      <div className="border-b-2 border-slate-900 pb-4 mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-black tracking-tight text-slate-900">
            SERVICIO NACIONAL DE APRENDIZAJE - SENA
          </h1>
          <h2 className="text-lg font-bold text-slate-800">
            Evidencia GA3-240202501-AA1-EV01. Cuestionario
          </h2>
          <p className="text-sm text-slate-600">
            Interactive English Practice – Preparation Questionnaire Slip
          </p>
        </div>
        <div className="text-right text-xs text-slate-500 font-mono">
          <p>Fecha de emisión:</p>
          <p className="font-semibold">{currentDate}</p>
        </div>
      </div>

      {/* Apprentice Details Box */}
      <div className="border border-slate-300 rounded-lg p-4 mb-6 grid grid-cols-3 gap-4 text-sm bg-slate-50">
        <div>
          <span className="font-bold text-slate-600 block text-xs uppercase">Aprendiz:</span>
          <p className="font-extrabold text-base">{apprentice.name}</p>
        </div>
        <div>
          <span className="font-bold text-slate-600 block text-xs uppercase">Programa de Formación:</span>
          <p className="font-semibold">{apprentice.program}</p>
        </div>
        <div>
          <span className="font-bold text-slate-600 block text-xs uppercase">Ficha / Grupo:</span>
          <p className="font-mono font-bold text-base">{apprentice.group}</p>
        </div>
      </div>

      {/* Scores Summary Table */}
      <div className="mb-6">
        <table className="w-full border-collapse border border-slate-300 text-sm">
          <thead>
            <tr className="bg-slate-200 text-slate-800 text-left">
              <th className="border border-slate-300 p-2">Modalidad</th>
              <th className="border border-slate-300 p-2">Respuestas Correctas</th>
              <th className="border border-slate-300 p-2">Total Preguntas</th>
              <th className="border border-slate-300 p-2">Porcentaje</th>
              <th className="border border-slate-300 p-2">Juicio de Evaluación SENA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-300 p-2 font-medium">
                {mode === 'practice' ? 'Modo Práctica' : 'Modo Simulacro'}
              </td>
              <td className="border border-slate-300 p-2 font-mono font-bold text-emerald-700">
                {correctCount}
              </td>
              <td className="border border-slate-300 p-2 font-mono">
                {records.length}
              </td>
              <td className="border border-slate-300 p-2 font-mono font-bold">
                {percentage}%
              </td>
              <td className="border border-slate-300 p-2 font-bold">
                {isApproved ? 'APROBADO (A)' : 'POR MEJORAR (D - En Proceso)'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Topics Breakdown */}
      <div className="mb-6">
        <h3 className="font-bold text-sm uppercase text-slate-700 mb-2">Desglose por Competencias y Contenidos</h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {analysis.topicBreakdown.map((item, i) => (
            <div key={i} className="border border-slate-200 p-2 rounded flex justify-between">
              <span className="font-medium">{item.topicLabel}</span>
              <span className="font-mono font-bold">
                {item.correct}/{item.total} ({item.percentage}%)
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Questions Itemized Table */}
      <div className="mb-8">
        <h3 className="font-bold text-sm uppercase text-slate-700 mb-2">Detalle de las 15 Preguntas Evaluadas</h3>
        <table className="w-full border-collapse border border-slate-300 text-xs">
          <thead>
            <tr className="bg-slate-100">
              <th className="border border-slate-300 p-1.5 text-center w-8">#</th>
              <th className="border border-slate-300 p-1.5 text-left">Tema Evaluado</th>
              <th className="border border-slate-300 p-1.5 text-left">Pregunta / Oración</th>
              <th className="border border-slate-300 p-1.5 text-left">Tu Respuesta</th>
              <th className="border border-slate-300 p-1.5 text-left">Respuesta Correcta</th>
              <th className="border border-slate-300 p-1.5 text-center w-16">Resultado</th>
            </tr>
          </thead>
          <tbody>
            {records.map((rec, i) => (
              <tr key={i} className={rec.isCorrect ? '' : 'bg-rose-50/50'}>
                <td className="border border-slate-300 p-1.5 text-center font-mono">{i + 1}</td>
                <td className="border border-slate-300 p-1.5 font-medium">{rec.question.topicLabel}</td>
                <td className="border border-slate-300 p-1.5 truncate max-w-[200px]">{rec.question.prompt}</td>
                <td className="border border-slate-300 p-1.5 font-medium">{rec.question.options[rec.selectedIndex]}</td>
                <td className="border border-slate-300 p-1.5 font-medium">{rec.question.options[rec.question.correctAnswerIndex]}</td>
                <td className="border border-slate-300 p-1.5 text-center font-bold">
                  {rec.isCorrect ? '✅ Acierto' : '❌ Error'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer Signatures */}
      <div className="grid grid-cols-2 gap-12 pt-12 border-t border-slate-300 text-center text-xs">
        <div>
          <div className="border-b border-slate-400 w-48 mx-auto mb-2" />
          <p className="font-bold">{apprentice.name}</p>
          <p className="text-slate-500">Firma del Aprendiz</p>
        </div>
        <div>
          <div className="border-b border-slate-400 w-48 mx-auto mb-2" />
          <p className="font-bold">Instructor(a) de Inglés</p>
          <p className="text-slate-500">SENA Centro de Formación</p>
        </div>
      </div>
    </div>
  );
};

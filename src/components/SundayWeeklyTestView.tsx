import React, { useState, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  Trophy,
  RotateCcw
} from 'lucide-react';
import { WeeklyModule, StudentProgress } from '../types';
import { CuteTeacherAvatar } from './CuteTeacherAvatar';
import { SoundFX } from '../utils/audioEffects';
import { shuffleQuestionOptions } from '../utils/shuffle';

interface SundayWeeklyTestViewProps {
  module: WeeklyModule;
  progress: StudentProgress;
  onSaveResult: (score: number, percentage: number, badge?: string, errors?: string[]) => void;
  onBackToWeek: () => void;
}

export const SundayWeeklyTestView: React.FC<SundayWeeklyTestViewProps> = ({
  module,
  progress,
  onSaveResult,
  onBackToWeek
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);

  // Shuffle question options so correct answer is in random slot (not always index 0)
  const questions = useMemo(() => {
    return module.weeklyTest.questions.map(q => {
      const { shuffledOptions, newCorrectIndex } = shuffleQuestionOptions(q.options, q.correct_index);
      return {
        ...q,
        options: shuffledOptions,
        correct_index: newCorrectIndex
      };
    });
  }, [module]);
  const completedDaysCount = (progress.completedDays[String(module.weekNumber)] || []).length;

  const allAnswered = questions.every(q => selectedAnswers[q.id] !== undefined);

  // Evaluate test
  let rawScore = 0;
  const criticalErrors: string[] = [];

  questions.forEach(q => {
    if (selectedAnswers[q.id] === q.correct_index) {
      rawScore += 1;
    } else if (selectedAnswers[q.id] !== undefined) {
      criticalErrors.push(q.question);
    }
  });

  const testPercentage = Math.round((rawScore / questions.length) * 100);
  const dailyAttendanceWeight = (completedDaysCount / 6) * 40;
  const testWeight = (testPercentage / 100) * 60;
  const finalWeightedPercentage = Math.round(dailyAttendanceWeight + testWeight);

  // Determine Italian School Grade
  let gradeText = "";
  let badgeEarned: string | undefined = undefined;
  let isPassed = false;

  if (finalWeightedPercentage < 60) {
    gradeText = "Da Rivedere con Calma";
    isPassed = false;
  } else if (finalWeightedPercentage < 70) {
    gradeText = "Sufficiente";
    badgeEarned = `Badge Bronzo • Mondo ${module.weekNumber}`;
    isPassed = true;
  } else if (finalWeightedPercentage < 80) {
    gradeText = "Buono";
    badgeEarned = `Badge Argento • Mondo ${module.weekNumber}`;
    isPassed = true;
  } else if (finalWeightedPercentage < 90) {
    gradeText = "Distinto";
    badgeEarned = `Badge Oro • Mondo ${module.weekNumber}`;
    isPassed = true;
  } else {
    gradeText = "Ottimo con Lode!";
    badgeEarned = `Badge Diamante • Mondo ${module.weekNumber}`;
    isPassed = true;
  }

  const handleSubmitTest = () => {
    setIsSubmitted(true);
    const convertedScoreOutOfTen = Math.round((finalWeightedPercentage / 10) * 10) / 10;
    onSaveResult(convertedScoreOutOfTen, finalWeightedPercentage, badgeEarned, criticalErrors);

    if (finalWeightedPercentage >= 60) {
      SoundFX.playFanfare();
      confetti({
        particleCount: 160,
        spread: 90,
        origin: { y: 0.55 }
      });
    } else {
      SoundFX.playIncorrect();
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-6">
      {/* Header */}
      <div 
        className="rounded-3xl p-6 border-2 border-indigo-100 shadow-xl text-left flex flex-col sm:flex-row sm:items-center justify-between gap-4"
        style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
      >
        <div>
          <button
            onClick={() => {
              SoundFX.playPop();
              onBackToWeek();
            }}
            className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 mb-2"
          >
            ← Torna alla Mappa
          </button>
          <div className="flex items-center gap-3">
            <CuteTeacherAvatar size="md" className="shrink-0" />
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-800">
                {module.weeklyTest.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                {module.weeklyTest.description}
              </p>
            </div>
          </div>
        </div>

        {/* Daily weight summary */}
        <div className="bg-gradient-to-r from-sky-50 to-violet-50 border border-sky-100 rounded-2xl p-3 text-xs text-indigo-900 shrink-0">
          <div className="font-black">Punteggio di Gioco:</div>
          <div className="mt-0.5">
            Tappe svolte: <strong>{completedDaysCount}/6 ({Math.round(dailyAttendanceWeight)}%)</strong>
          </div>
          <div>
            Punteggio Quiz: <strong>60%</strong>
          </div>
        </div>
      </div>

      {/* Test Questions List */}
      {!isSubmitted ? (
        <div className="space-y-4 text-left">
          {questions.map((q, idx) => {
            const isAnswered = selectedAnswers[q.id] !== undefined;

            return (
              <div 
                key={q.id} 
                className="rounded-3xl p-5 sm:p-6 border-2 border-sky-100 shadow-xs space-y-3"
                style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
              >
                <div className="flex items-start gap-2.5">
                  <span className="w-6 h-6 rounded-2xl bg-indigo-600 text-white text-xs font-black flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="font-bold text-slate-800 text-sm sm:text-base leading-snug">
                    {q.question}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 pl-8">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = selectedAnswers[q.id] === optIdx;

                    return (
                      <button
                        key={optIdx}
                        onClick={() => {
                          SoundFX.playPop();
                          setSelectedAnswers(prev => ({ ...prev, [q.id]: optIdx }));
                        }}
                        className={`text-left text-xs sm:text-sm p-3.5 rounded-2xl border-2 transition font-medium active:scale-95 ${
                          isSelected
                            ? 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white border-indigo-600 font-bold shadow-xs'
                            : 'bg-[#F5EFEB] hover:bg-[#EFE5D8] border-[#DDD3C5] text-stone-800'
                        }`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}

          <div className="flex justify-end pt-4">
            <button
              disabled={!allAnswered}
              onClick={handleSubmitTest}
              className={`font-black text-sm sm:text-base px-8 py-3.5 rounded-2xl shadow-xl transition flex items-center gap-2 active:scale-95 ${
                allAnswered
                  ? 'bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              <span>Consegna la Sfida della Domenica</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        /* Result Evaluation Card */
        <div 
          className="rounded-3xl p-6 sm:p-10 border-4 border-indigo-100 shadow-2xl space-y-6 text-center animate-in zoom-in-95"
          style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
        >
          <div className="flex justify-center">
            <CuteTeacherAvatar size="xl" className="animate-bounce" />
          </div>

          <div>
            <div className="text-[11px] font-black text-sky-700 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full inline-block border border-sky-100">
              Esito del Torneo del Mondo {module.weekNumber}
            </div>
            <h2 className="text-3xl font-black text-slate-800 mt-2">
              Valutazione: <span className={isPassed ? 'text-emerald-600' : 'text-indigo-600'}>{gradeText}</span>
            </h2>
            <div className="text-sm sm:text-base font-bold text-slate-600 mt-1">
              Punteggio Complessivo: <strong>{finalWeightedPercentage}%</strong> ({rawScore}/10 risposte esatte)
            </div>
          </div>

          {/* Feedback description based on grade */}
          <div className={`p-4 rounded-3xl text-sm leading-relaxed max-w-xl mx-auto border-2 ${
            isPassed 
              ? 'bg-emerald-50/80 border-emerald-200 text-emerald-950 font-medium'
              : 'bg-sky-50/80 border-sky-200 text-sky-950 font-medium'
          }`}>
            {isPassed ? (
              <div>
                Fantastico! Hai completato la sfida! Il <strong>Mondo {module.weekNumber + 1}</strong> è ora sbloccato sulla tua mappa!
                {badgeEarned && (
                  <div className="mt-2 font-black text-emerald-800 flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Hai sbloccato: {badgeEarned}!</span>
                  </div>
                )}
              </div>
            ) : (
              <div>
                "Bravissimo a metterti in gioco! Rivediamo insieme questi piccoli dettagli per vincere la sfida la prossima volta!"
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <button
              onClick={() => {
                SoundFX.playPop();
                setShowExplanations(!showExplanations);
              }}
              className="px-5 py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
            >
              {showExplanations ? 'Nascondi Spiegazioni' : 'Mostra Spiegazioni Risposte'}
            </button>
            <button
              onClick={() => {
                SoundFX.playPop();
                onBackToWeek();
              }}
              className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-xs font-bold shadow-md transition"
            >
              Torna alla Mappa
            </button>
          </div>

          {/* Explanations Accordion */}
          {showExplanations && (
            <div className="text-left space-y-3 pt-4 border-t border-slate-100">
              <h4 className="font-black text-xs text-slate-700 uppercase tracking-wider">
                I Trucchetti Didattici del Maestro Gufo
              </h4>
              {questions.map((q, i) => {
                const wasCorrect = selectedAnswers[q.id] === q.correct_index;
                return (
                  <div key={q.id} className="p-3.5 bg-sky-50/50 rounded-2xl border border-sky-100 text-xs space-y-1">
                    <div className="font-bold text-slate-800 flex items-center gap-1.5">
                      {wasCorrect ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> : <XCircle className="w-3.5 h-3.5 text-rose-500" />}
                      <span>{i + 1}. {q.question}</span>
                    </div>
                    <div className="text-slate-600 pl-5">
                      <strong>Risposta corretta:</strong> {q.options[q.correct_index]}
                    </div>
                    <div className="text-violet-800 italic pl-5">
                      💡 {q.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

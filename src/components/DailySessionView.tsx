import React, { useState, useEffect, useRef, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { 
  Volume2, 
  Mic, 
  MicOff, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  Flame, 
  Lightbulb, 
  Bot,
  Star
} from 'lucide-react';
import { DailySession, StudentProgress } from '../types';
import { SpeechService, WordMatchStatus } from '../services/speechService';
import { AiService, ReadingEvalResult } from '../services/aiService';
import { CuteTeacherAvatar } from './CuteTeacherAvatar';
import { SoundFX } from '../utils/audioEffects';
import { shuffleArray, shuffleQuestionOptions } from '../utils/shuffle';

interface DailySessionViewProps {
  session: DailySession;
  weekNumber: number;
  progress: StudentProgress;
  onCompleteDay: (dayName: string) => void;
  onBackToWeek: () => void;
  soundEnabled: boolean;
}

export const DailySessionView: React.FC<DailySessionViewProps> = ({
  session,
  weekNumber,
  progress,
  onCompleteDay,
  onBackToWeek,
  soundEnabled
}) => {
  // Steps: 0: Parole, 1: Esercizi, 2: Lettura ad Alta Voce, 3: Finale
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Step 1: Words of the day state
  const [speakingWord, setSpeakingWord] = useState<string | null>(null);

  // Step 2: Fill-in sentences state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});
  const [exerciseValidated, setExerciseValidated] = useState(false);

  // Step 3: Reading Passage & Speech Recognition
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [readingResult, setReadingResult] = useState<{
    matchedWords: WordMatchStatus[];
    accuracyPercent: number;
  } | null>(null);
  const [aiEvalResult, setAiEvalResult] = useState<ReadingEvalResult | null>(null);
  const [isAiEvaluating, setIsAiEvaluating] = useState(false);
  const [hasAiKey, setHasAiKey] = useState(false);
  const [comprehensionAnswers, setComprehensionAnswers] = useState<Record<number, number>>({});
  const [comprehensionValidated, setComprehensionValidated] = useState(false);

  // Shuffle exercise options so correct answers are not predictably first
  const shuffledFillInSentences = useMemo(() => {
    return session.fill_in_sentences.map(item => ({
      ...item,
      options: shuffleArray(item.options)
    }));
  }, [session]);

  const shuffledComprehensionQuestions = useMemo(() => {
    return session.reading_passage.comprehension_questions.map(q => {
      const { shuffledOptions, newCorrectIndex } = shuffleQuestionOptions(q.options, q.correct_index);
      return {
        ...q,
        options: shuffledOptions,
        correct_index: newCorrectIndex
      };
    });
  }, [session]);

  const recognizerRef = useRef<any>(null);

  // Check AI availability on load
  useEffect(() => {
    AiService.checkAiAvailability(progress.geminiApiKey).then(available => {
      setHasAiKey(available);
    });
  }, [progress.geminiApiKey]);

  // Cleanup speech synthesis on unmount
  useEffect(() => {
    return () => {
      SpeechService.stopSpeaking();
      if (recognizerRef.current) {
        recognizerRef.current.stop();
      }
    };
  }, []);

  // Pronounce a word and its definition
  const handleSpeakWord = (word: string, example: string) => {
    if (!soundEnabled) return;
    SoundFX.playPop();
    setSpeakingWord(word);
    SpeechService.speak(`${word}. ${example}`, () => {
      setSpeakingWord(null);
    });
  };

  // Pronounce reading passage
  const handleSpeakPassage = () => {
    if (!soundEnabled) return;
    SoundFX.playPop();
    SpeechService.speak(session.reading_passage.text);
  };

  // Toggle Speech Recognition
  const toggleSpeechRecognition = () => {
    SoundFX.playPop();
    if (isListening) {
      if (recognizerRef.current) {
        recognizerRef.current.stop();
      }
      setIsListening(false);
      return;
    }

    if (!SpeechService.isSpeechRecognitionSupported()) {
      alert("Il microfono non è abilitato in questo browser. Leggi pure ad alta voce per allenarti con il Maestro Gufo!");
      return;
    }

    try {
      const recognizer = SpeechService.createRecognizer();
      recognizerRef.current = recognizer;

      recognizer.onstart = () => {
        setIsListening(true);
      };

      recognizer.onresult = (event: any) => {
        let currentTranscript = '';
        for (let i = 0; i < event.results.length; i++) {
          currentTranscript += event.results[i][0].transcript + ' ';
        }
        setTranscript(currentTranscript.trim());

        const evalResult = SpeechService.evaluateReading(session.reading_passage.text, currentTranscript);
        setReadingResult(evalResult);
      };

      recognizer.onerror = (event: any) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognizer.onend = () => {
        setIsListening(false);
      };

      recognizer.start();
    } catch (e) {
      console.error('Failed to start recognizer', e);
      setIsListening(false);
    }
  };

  // Request AI feedback for reading
  const handleRequestAiReadingFeedback = async () => {
    if (!transcript) {
      alert("Leggi prima il testo ad alta voce con il microfono per far ascoltare la tua voce al Maestro Gufo!");
      return;
    }
    SoundFX.playPop();
    setIsAiEvaluating(true);
    try {
      const res = await AiService.evaluateReadingWithAi(
        session.reading_passage.title,
        session.reading_passage.text,
        transcript,
        progress.geminiApiKey
      );
      setAiEvalResult(res);
      SoundFX.playCorrect();
      if (soundEnabled && res.feedback) {
        SpeechService.speak(res.feedback);
      }
    } finally {
      setIsAiEvaluating(false);
    }
  };

  // Step 2 validations
  const allExercisesAnswered = session.fill_in_sentences.every((_, idx) => selectedAnswers[idx] !== undefined);
  const correctExercisesCount = session.fill_in_sentences.filter((item, idx) => selectedAnswers[idx] === item.correct_answer).length;

  const handleValidateExercises = () => {
    setExerciseValidated(true);
    if (correctExercisesCount === session.fill_in_sentences.length) {
      SoundFX.playCorrect();
    } else {
      SoundFX.playIncorrect();
    }
  };

  // Step 3 validations
  const allComprehensionAnswered = shuffledComprehensionQuestions.every((_, idx) => comprehensionAnswers[idx] !== undefined);

  const handleValidateComprehension = () => {
    setComprehensionValidated(true);
    SoundFX.playCorrect();
  };

  // Trigger celebration on completion
  const handleFinishDay = () => {
    SoundFX.playFanfare();
    onCompleteDay(session.day);
    setCurrentStep(3);
    confetti({
      particleCount: 130,
      spread: 85,
      origin: { y: 0.6 }
    });
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-4 space-y-4">
      {/* Top Session Progress Bar */}
      <div 
        className="rounded-3xl p-3 sm:p-4 border-2 border-sky-100 shadow-xs flex items-center justify-between"
        style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
      >
        <button
          onClick={() => {
            SoundFX.playPop();
            onBackToWeek();
          }}
          className="text-xs font-bold text-indigo-700 hover:text-indigo-900 flex items-center gap-1.5 px-3 py-1.5 rounded-2xl bg-indigo-50 hover:bg-indigo-100 transition active:scale-95"
        >
          ← Mappa Mondo {weekNumber}
        </button>

        <div className="flex items-center gap-2">
          {['Parole Magiche', 'Sfida Quiz', 'Lettura Vocale', 'Vittoria'].map((label, index) => (
            <div key={label} className="flex items-center gap-1.5">
              <div 
                className={`w-7 h-7 rounded-2xl flex items-center justify-center text-xs font-black transition ${
                  currentStep === index
                    ? 'bg-gradient-to-r from-sky-400 to-indigo-500 text-white ring-4 ring-sky-100 shadow-xs'
                    : currentStep > index
                    ? 'bg-emerald-500 text-white'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {currentStep > index ? '✓' : index + 1}
              </div>
              <span className={`text-xs font-bold hidden md:inline ${currentStep === index ? 'text-indigo-900' : 'text-slate-400'}`}>
                {label}
              </span>
              {index < 3 && <div className="w-3 h-0.5 bg-slate-200 hidden md:block" />}
            </div>
          ))}
        </div>

        <div className="text-xs font-black text-violet-700 bg-violet-50 border border-violet-100 px-3 py-1 rounded-2xl">
          {session.day.toUpperCase()}
        </div>
      </div>

      {/* STEP 0: Parole del Giorno */}
      {currentStep === 0 && (
        <div 
          className="rounded-3xl p-6 sm:p-8 border-2 border-sky-100 shadow-xl space-y-6 text-left animate-in fade-in"
          style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-black text-sky-700 uppercase tracking-widest bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
                Tappa 1 • Le Parole Magiche di Oggi
              </span>
              <h2 className="text-2xl font-black text-slate-800 mt-2">{session.topic}</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Ascolta la pronuncia corretta dal Maestro Gufo e scopri come usarle nelle tue frasi!
              </p>
            </div>
            <CuteTeacherAvatar size="md" className="shrink-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {session.words_of_the_day.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-sky-50/60 via-white to-violet-50/60 rounded-3xl p-5 border-2 border-indigo-100 shadow-xs hover:border-indigo-300 transition"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl font-black text-indigo-900 tracking-wide">
                    {item.word}
                  </span>
                  <button
                    onClick={() => handleSpeakWord(item.word, item.example)}
                    className="p-2 px-3 rounded-2xl bg-gradient-to-r from-sky-400 to-indigo-500 hover:from-sky-500 hover:to-indigo-600 text-white shadow-xs flex items-center gap-1.5 text-xs font-bold transition transform active:scale-95"
                    title="Ascolta la pronuncia"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>{speakingWord === item.word ? 'Ascolta...' : 'Ascolta'}</span>
                  </button>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  <strong className="text-indigo-900 font-bold">Significato:</strong> {item.definition}
                </p>
                <div className="bg-white/80 rounded-2xl p-3 border border-indigo-100 text-xs italic text-indigo-950">
                  <strong className="not-italic text-sky-700 font-bold">Esempio: </strong>"{item.example}"
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={() => {
                SoundFX.playPop();
                setCurrentStep(1);
              }}
              className="bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white font-bold text-sm px-7 py-3 rounded-2xl shadow-md flex items-center gap-2 transform active:scale-95 transition"
            >
              <span>Procedi agli Esercizi</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* STEP 1: Esercizi di Grammatica */}
      {currentStep === 1 && (
        <div 
          className="rounded-3xl p-6 sm:p-8 border-2 border-indigo-100 shadow-xl space-y-6 text-left animate-in fade-in"
          style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-black text-violet-700 uppercase tracking-widest bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
                Tappa 2 • Completa le Frasi
              </span>
              <h2 className="text-2xl font-black text-slate-800 mt-2">La Sfida delle Parole</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Scegli la risposta corretta. Clicca sul Maestro Gufo se vuoi un suggerimento!
              </p>
            </div>
            <CuteTeacherAvatar size="md" className="shrink-0" />
          </div>

          <div className="space-y-4">
            {shuffledFillInSentences.map((item, idx) => {
              const selected = selectedAnswers[idx];
              const isCorrect = selected === item.correct_answer;

              return (
                <div key={idx} className="bg-sky-50/40 rounded-3xl p-5 border-2 border-sky-100 space-y-3">
                  <div className="text-sm sm:text-base font-bold text-slate-800 leading-relaxed">
                    {idx + 1}. {item.sentence.replace('___', '______')}
                  </div>

                  {/* Options */}
                  <div className="flex flex-wrap gap-2.5">
                    {item.options.map(option => {
                      const isOptionSelected = selected === option;
                      let btnStyle = "bg-white border-2 border-indigo-100 text-slate-700 hover:border-indigo-300";
                      
                      if (exerciseValidated) {
                        if (option === item.correct_answer) {
                          btnStyle = "bg-emerald-500 text-white border-2 border-emerald-600 font-bold shadow-xs";
                        } else if (isOptionSelected && !isCorrect) {
                          btnStyle = "bg-rose-400 text-white border-2 border-rose-500 font-bold";
                        }
                      } else if (isOptionSelected) {
                        btnStyle = "bg-indigo-600 text-white border-2 border-indigo-700 font-bold shadow-xs";
                      }

                      return (
                        <button
                          key={option}
                          disabled={exerciseValidated}
                          onClick={() => {
                            SoundFX.playPop();
                            setSelectedAnswers(prev => ({ ...prev, [idx]: option }));
                          }}
                          className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-semibold transition active:scale-95 ${btnStyle}`}
                        >
                          {option}
                        </button>
                      );
                    })}
                  </div>

                  {/* Hint Accordion */}
                  <div className="pt-1 flex items-center justify-between text-xs">
                    <button
                      onClick={() => {
                        SoundFX.playPop();
                        setShowHints(prev => ({ ...prev, [idx]: !prev[idx] }));
                      }}
                      className="text-violet-600 hover:text-violet-800 font-bold flex items-center gap-1"
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                      <span>{showHints[idx] ? 'Nascondi trucchetto' : 'Trucchetto del Maestro Gufo'}</span>
                    </button>

                    {exerciseValidated && (
                      <span className={`font-bold flex items-center gap-1 ${isCorrect ? 'text-emerald-700' : 'text-rose-600'}`}>
                        {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                        {isCorrect ? 'Bravissimo!' : `Corretta: ${item.correct_answer}`}
                      </span>
                    )}
                  </div>

                  {showHints[idx] && (
                    <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-3 text-xs text-yellow-900 animate-in fade-in">
                      💡 <strong>Il Maestro Gufo suggerisce:</strong> {item.hint}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                SoundFX.playPop();
                setCurrentStep(0);
              }}
              className="text-slate-500 hover:text-slate-800 font-bold text-xs px-4 py-2 rounded-2xl"
            >
              ← Torna alle Parole
            </button>

            {!exerciseValidated ? (
              <button
                disabled={!allExercisesAnswered}
                onClick={handleValidateExercises}
                className={`font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-sm transition active:scale-95 ${
                  allExercisesAnswered
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Controlla Risposte
              </button>
            ) : (
              <button
                onClick={() => {
                  SoundFX.playPop();
                  setCurrentStep(2);
                }}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl shadow-md flex items-center gap-2 active:scale-95 transition"
              >
                <span>Procedi alla Lettura Vocale</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* STEP 2: Lettura ad Alta Voce */}
      {currentStep === 2 && (
        <div 
          className="rounded-3xl p-6 sm:p-8 border-2 border-indigo-100 shadow-xl space-y-6 text-left animate-in fade-in"
          style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[11px] font-black text-indigo-700 uppercase tracking-widest bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                Tappa 3 • Lettura ad Alta Voce & Comprensione
              </span>
              <h2 className="text-2xl font-black text-slate-800 mt-2">{session.reading_passage.title}</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Attiva il microfono e leggi la storia: le parole si illumineranno di verde quando le leggi bene!
              </p>
            </div>
            <CuteTeacherAvatar size="md" className="shrink-0" />
          </div>

          {/* Reading Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-gradient-to-r from-sky-50 to-violet-50 p-3.5 rounded-3xl border border-sky-100">
            <button
              onClick={handleSpeakPassage}
              className="px-3.5 py-2 rounded-2xl bg-white hover:bg-sky-50 text-indigo-900 border border-sky-200 text-xs font-bold flex items-center gap-1.5 transition active:scale-95 shadow-xs"
            >
              <Volume2 className="w-4 h-4 text-sky-500" />
              <span>Ascolta Lettura Esempio</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleSpeechRecognition}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-black flex items-center gap-2 transition shadow-md active:scale-95 ${
                  isListening
                    ? 'bg-rose-500 hover:bg-rose-600 text-white animate-pulse'
                    : 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white'
                }`}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                <span>{isListening ? 'Ferma Microfono' : 'Inizia a Leggere! 🎙️'}</span>
              </button>

              {transcript && (
                <button
                  onClick={handleRequestAiReadingFeedback}
                  disabled={isAiEvaluating}
                  className="px-3.5 py-2 rounded-2xl bg-violet-600 hover:bg-violet-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition active:scale-95"
                >
                  <Bot className="w-4 h-4 text-amber-300" />
                  <span>{isAiEvaluating ? 'Ascolto...' : 'Feedback Maestro AI'}</span>
                </button>
              )}
            </div>
          </div>

          {/* Word Highlighter Container */}
          <div className="bg-sky-50/30 p-6 rounded-3xl border-2 border-indigo-100 leading-relaxed text-base sm:text-lg">
            {readingResult ? (
              <div className="flex flex-wrap gap-x-1.5 gap-y-1">
                {readingResult.matchedWords.map((item, idx) => {
                  let colorClass = "text-slate-700";
                  if (item.status === 'correct') {
                    colorClass = "text-emerald-700 bg-emerald-100 font-bold px-1.5 rounded-lg";
                  } else if (item.status === 'uncertain') {
                    colorClass = "text-amber-800 bg-amber-100 px-1.5 rounded-lg";
                  } else if (item.status === 'incorrect' && transcript) {
                    colorClass = "text-rose-600 bg-rose-50 px-1.5 rounded-lg";
                  }
                  return (
                    <span key={idx} className={colorClass}>
                      {item.word}
                    </span>
                  );
                })}
              </div>
            ) : (
              <p className="text-slate-800 leading-relaxed">{session.reading_passage.text}</p>
            )}
          </div>

          {/* Real-time Legend */}
          {readingResult && (
            <div className="bg-white rounded-2xl p-3 border border-indigo-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1 font-bold text-emerald-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Parole Corrette
                </span>
                <span className="flex items-center gap-1 font-bold text-amber-700">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" /> Pronuncia Incerta
                </span>
              </div>
              <div className="font-black text-xs text-indigo-900 bg-indigo-50 px-3 py-1 rounded-xl">
                Precisione di Lettura: <span className="text-violet-700">{readingResult.accuracyPercent}%</span>
              </div>
            </div>
          )}

          {/* AI Teacher Feedback Card */}
          {aiEvalResult && (
            <div className="bg-gradient-to-r from-violet-50 to-indigo-50 border-2 border-indigo-200 rounded-3xl p-5 space-y-2 animate-in fade-in">
              <div className="flex items-center gap-2 text-indigo-900 font-black text-sm">
                <CuteTeacherAvatar size="sm" className="w-8 h-8" />
                <span>Il Maestro Gufo dice:</span>
              </div>
              <p className="text-xs sm:text-sm text-indigo-950 font-medium italic">
                "{aiEvalResult.feedback}"
              </p>
              {aiEvalResult.suggestions?.length > 0 && (
                <div className="pt-1">
                  <span className="text-xs font-bold text-indigo-900">Consigli per diventare imbattibile:</span>
                  <ul className="list-disc list-inside text-xs text-indigo-800 space-y-0.5 mt-1">
                    {aiEvalResult.suggestions.map((sug, i) => (
                      <li key={i}>{sug}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Comprehension Questions */}
          <div className="space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-xs font-black text-slate-700 uppercase tracking-wider">
              Domande sul Testo
            </h3>

            {shuffledComprehensionQuestions.map((q, qIdx) => (
              <div key={qIdx} className="bg-sky-50/40 p-4 rounded-3xl border border-sky-100 space-y-2 text-xs sm:text-sm">
                <div className="font-bold text-slate-800">
                  {qIdx + 1}. {q.question}
                </div>
                <div className="space-y-1.5">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = comprehensionAnswers[qIdx] === optIdx;
                    let style = "bg-white border border-slate-200 text-slate-700 hover:bg-sky-50";

                    if (comprehensionValidated) {
                      if (optIdx === q.correct_index) {
                        style = "bg-emerald-500 text-white font-bold shadow-xs";
                      } else if (isSelected) {
                        style = "bg-rose-400 text-white";
                      }
                    } else if (isSelected) {
                      style = "bg-indigo-600 text-white font-bold shadow-xs";
                    }

                    return (
                      <button
                        key={optIdx}
                        disabled={comprehensionValidated}
                        onClick={() => {
                          SoundFX.playPop();
                          setComprehensionAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
                        }}
                        className={`w-full text-left px-3.5 py-2.5 rounded-2xl transition active:scale-95 ${style}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100">
            <button
              onClick={() => {
                SoundFX.playPop();
                setCurrentStep(1);
              }}
              className="text-slate-500 hover:text-slate-800 font-bold text-xs px-4 py-2 rounded-2xl"
            >
              ← Torna a Sfida Quiz
            </button>

            {!comprehensionValidated ? (
              <button
                disabled={!allComprehensionAnswered}
                onClick={handleValidateComprehension}
                className={`font-bold text-xs sm:text-sm px-6 py-3 rounded-2xl transition active:scale-95 ${
                  allComprehensionAnswered
                    ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white shadow-md'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                Controlla Risposte
              </button>
            ) : (
              <button
                onClick={handleFinishDay}
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 hover:from-emerald-600 hover:to-teal-700 text-white font-black text-sm px-8 py-3.5 rounded-2xl shadow-xl flex items-center gap-2 transform active:scale-95 transition"
              >
                <span>Vittoria della Tappa! (+100 XP)</span>
                <Sparkles className="w-5 h-5 text-yellow-300" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* STEP 3: Celebrazione Vittoria */}
      {currentStep === 3 && (
        <div 
          className="rounded-3xl p-8 sm:p-12 border-4 border-indigo-100 shadow-2xl text-center space-y-6 animate-in zoom-in-95"
          style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
        >
          <div className="flex justify-center">
            <CuteTeacherAvatar size="xl" className="animate-bounce" />
          </div>

          <div>
            <span className="text-[11px] font-black text-emerald-700 uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Tappa Completata con Successo! 🌟
            </span>
            <h2 className="text-3xl font-black text-slate-800 mt-3">
              Grande Vittoria, {progress.studentName || 'Campione'}!
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-lg mx-auto font-medium">
              Hai conquistato la tappa di <strong>{session.day.toUpperCase()}</strong>! Il Maestro Gufo è fiero di te!
            </p>
          </div>

          <div className="flex justify-center gap-4 py-2">
            <div className="bg-sky-50 border border-sky-200 rounded-3xl p-4 w-40 text-center">
              <div className="text-[11px] font-black text-sky-700 uppercase">Punti Vinti</div>
              <div className="text-2xl font-black text-sky-900 mt-1 flex items-center justify-center gap-1">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>+100 XP</span>
              </div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-3xl p-4 w-40 text-center">
              <div className="text-[11px] font-black text-orange-700 uppercase">Serie Attiva</div>
              <div className="text-2xl font-black text-orange-800 mt-1 flex items-center justify-center gap-1">
                <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
                <span>{progress.streak} gg</span>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => {
                SoundFX.playPop();
                onBackToWeek();
              }}
              className="bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white font-black text-base px-8 py-3.5 rounded-2xl shadow-lg transform active:scale-95 transition"
            >
              Ritorna alla Mappa delle Tappe
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

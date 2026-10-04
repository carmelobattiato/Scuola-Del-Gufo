import React, { useState } from 'react';
import { 
  X, 
  Award, 
  Unlock, 
  Settings, 
  Check, 
  RotateCcw,
  TrendingUp,
  BookOpen,
  Sparkles,
  ShieldCheck,
  Smile
} from 'lucide-react';
import { StudentProgress, WeeklyModule, SchoolGrade } from '../types';
import { CuteTeacherAvatar } from './CuteTeacherAvatar';
import { SoundFX } from '../utils/audioEffects';
import { ALL_GRADES } from '../data/grades';

interface ParentDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: StudentProgress;
  allWeeks: WeeklyModule[];
  onUnlockWeek: (weekNum: number) => void;
  onUpdateSettings: (name: string, pin: string, apiKey: string, grade?: SchoolGrade) => void;
  onResetProgress: () => void;
}

export const ParentDashboardModal: React.FC<ParentDashboardModalProps> = ({
  isOpen,
  onClose,
  progress,
  allWeeks,
  onUnlockWeek,
  onUpdateSettings,
  onResetProgress
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'settings'>('overview');
  const [name, setName] = useState(progress.studentName);
  const [pin, setPin] = useState(progress.pin);
  const [apiKey, setApiKey] = useState(progress.geminiApiKey || '');
  const [selectedGrade, setSelectedGrade] = useState<SchoolGrade>(progress.schoolGrade || '4_elem');
  const [saveSuccess, setSaveSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin.length !== 4) return;
    onUpdateSettings(name.trim(), pin, apiKey.trim(), selectedGrade);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 2000);
  };

  // Check if any genuine tests with errors exist
  const criticalErrorsList: { topic: string; score: string; detail: string }[] = [];
  
  Object.keys(progress.weeklyGrades).forEach(weekKey => {
    const grade = progress.weeklyGrades[weekKey];
    if (grade && grade.percentage < 70) {
      criticalErrorsList.push({
        topic: `Settimana ${weekKey}: Verifiche da potenziare`,
        score: `${grade.percentage}%`,
        detail: grade.errors?.length > 0
          ? `Errori riscontrati: ${grade.errors.slice(0, 2).join('; ')}`
          : "Consigliato un ripasso degli esercizi della settimana."
      });
    }
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border-4 border-indigo-100 overflow-hidden flex flex-col text-slate-800"
        style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
      >
        
        {/* Soft Header */}
        <div className="bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-600 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CuteTeacherAvatar size="sm" className="w-10 h-10 shrink-0" />
            <div>
              <h2 className="text-lg font-black tracking-tight">Area Riservata Genitori & Docenti</h2>
              <p className="text-xs text-sky-100">
                Alunno: <span className="font-bold text-white">{progress.studentName || 'Non specificato'}</span> • Livello Attuale: Mondo {progress.currentWeek}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              SoundFX.playPop();
              onClose();
            }}
            className="p-1.5 rounded-2xl hover:bg-white/10 text-white/90 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-indigo-50 bg-sky-50/40 px-6 pt-3 gap-3">
          <button
            onClick={() => {
              SoundFX.playPop();
              setActiveTab('overview');
            }}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition ${
              activeTab === 'overview'
                ? 'border-indigo-600 text-indigo-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>Rendimento e Competenze</span>
          </button>
          <button
            onClick={() => {
              SoundFX.playPop();
              setActiveTab('settings');
            }}
            className={`pb-3 px-4 text-xs sm:text-sm font-bold flex items-center gap-2 border-b-2 transition ${
              activeTab === 'settings'
                ? 'border-indigo-600 text-indigo-700'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Impostazioni & Chiave AI</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          {activeTab === 'overview' ? (
            <>
              {/* Summary KPIs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-sky-50/70 border border-sky-200/80 rounded-2xl p-4 text-center">
                  <div className="text-[11px] font-black text-sky-700 uppercase">Punti XP Totali</div>
                  <div className="text-2xl font-black text-sky-900 mt-1 flex items-center justify-center gap-1">
                    <Sparkles className="w-5 h-5 text-amber-500" />
                    <span>{progress.xp}</span>
                  </div>
                </div>
                <div className="bg-orange-50/70 border border-orange-200/80 rounded-2xl p-4 text-center">
                  <div className="text-[11px] font-black text-orange-700 uppercase">Giorni Consecutivi</div>
                  <div className="text-2xl font-black text-orange-800 mt-1">
                    {progress.streak} gg 🔥
                  </div>
                </div>
                <div className="bg-violet-50/70 border border-violet-200/80 rounded-2xl p-4 text-center">
                  <div className="text-[11px] font-black text-violet-700 uppercase">Mondo Didattico</div>
                  <div className="text-2xl font-black text-violet-800 mt-1">
                    Settimana {progress.currentWeek}
                  </div>
                </div>
                <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-2xl p-4 text-center">
                  <div className="text-[11px] font-black text-emerald-700 uppercase">Distintivi Vinti</div>
                  <div className="text-2xl font-black text-emerald-800 mt-1">
                    {progress.badges.length} 🎖️
                  </div>
                </div>
              </div>

              {/* Competency & Weak Points Card: Welcoming Initial State! */}
              {criticalErrorsList.length > 0 ? (
                <div className="bg-rose-50/80 border-2 border-rose-200 rounded-3xl p-5 space-y-2">
                  <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
                    <span>⚠️ Punti da Potenziare (Monitorati dai Test)</span>
                  </div>
                  <div className="space-y-2 pt-1">
                    {criticalErrorsList.map((err, idx) => (
                      <div key={idx} className="bg-white rounded-2xl p-3 border border-rose-100 flex items-start justify-between gap-3 text-xs">
                        <div>
                          <div className="font-bold text-slate-800">{err.topic}</div>
                          <div className="text-slate-600 mt-0.5">{err.detail}</div>
                        </div>
                        <span className="bg-rose-100 text-rose-800 font-bold px-2 py-1 rounded-xl shrink-0">
                          {err.score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-r from-sky-50 to-emerald-50 border-2 border-emerald-200/80 rounded-3xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-2xl shrink-0 shadow-xs">
                    🌟
                  </div>
                  <div>
                    <h4 className="font-black text-emerald-900 text-sm flex items-center gap-1.5">
                      <span>Nessun punto critico rilevato!</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </h4>
                    <p className="text-xs text-emerald-800/90 mt-0.5 font-medium leading-relaxed">
                      L'alunno sta imparando con serenità. Le aree da potenziare verranno evidenziate con dolcezza solo qualora emergano dubbi persistenti durante i tornei della domenica.
                    </p>
                  </div>
                </div>
              )}

              {/* Weekly Modules & Manual Force Unlock */}
              <div>
                <h3 className="text-xs font-black text-slate-700 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  <span>Stato Settimane e Sblocco Livelli</span>
                </h3>

                <div className="space-y-3">
                  {allWeeks.map(week => {
                    const isUnlocked = progress.currentWeek >= week.weekNumber;
                    const grade = progress.weeklyGrades[String(week.weekNumber)];
                    const completedDays = progress.completedDays[String(week.weekNumber)] || [];

                    return (
                      <div
                        key={week.weekNumber}
                        className={`p-4 rounded-3xl border-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition ${
                          isUnlocked
                            ? 'bg-gradient-to-r from-sky-50/50 to-violet-50/50 border-indigo-100 shadow-xs'
                            : 'bg-slate-50 border-slate-200 opacity-70'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-800 text-sm">
                              Mondo {week.weekNumber}: {week.title}
                            </span>
                            {isUnlocked ? (
                              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                Sbloccato
                              </span>
                            ) : (
                              <span className="bg-slate-200 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                                Bloccato
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-500">{week.description}</p>
                          <div className="text-xs font-semibold text-indigo-900 mt-1 flex items-center gap-2">
                            <span>Tappe svolte: <strong>{completedDays.length}/6</strong></span>
                            {grade && (
                              <span className="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded-lg">
                                Test: {grade.score}/10 ({grade.badge || 'Completato'})
                              </span>
                            )}
                          </div>
                        </div>

                        {!isUnlocked && (
                          <button
                            onClick={() => {
                              SoundFX.playPop();
                              onUnlockWeek(week.weekNumber);
                            }}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs px-4 py-2 rounded-2xl flex items-center justify-center gap-1.5 shadow-sm transition shrink-0 active:scale-95"
                          >
                            <Unlock className="w-3.5 h-3.5" />
                            <span>Sblocca Livello</span>
                          </button>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            /* Settings Tab */
            <form onSubmit={handleSaveSettings} className="space-y-5 max-w-lg">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nome Alunno / Alunna
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-indigo-100 rounded-2xl text-sm focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Classe Scolastica
                </label>
                <select
                  value={selectedGrade}
                  onChange={e => setSelectedGrade(e.target.value as SchoolGrade)}
                  className="w-full px-3 py-2 border-2 border-indigo-100 rounded-2xl text-sm font-bold bg-white focus:border-indigo-500 focus:outline-none cursor-pointer"
                >
                  <optgroup label="Scuola Primaria (Elementari)">
                    {ALL_GRADES.filter(g => g.category === 'elementare').map(g => (
                      <option key={g.id} value={g.id}>
                        {g.name} — {g.badge}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Scuola Secondaria di 1° Grado (Medie)">
                    {ALL_GRADES.filter(g => g.category === 'media').map(g => (
                      <option key={g.id} value={g.id}>
                        {g.name} — {g.badge}
                      </option>
                    ))}
                  </optgroup>
                </select>
                <p className="text-[11px] text-slate-400 mt-1">
                  Adatta automaticamente tutti i mondi, i testi di lettura, i quiz e il vocabolario del Maestro Gufo.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  PIN di Sicurezza a 4 cifre
                </label>
                <input
                  type="password"
                  maxLength={4}
                  required
                  value={pin}
                  onChange={e => setPin(e.target.value.replace(/\D/g, ''))}
                  className="w-36 text-center tracking-widest text-lg font-bold py-2 border-2 border-indigo-100 rounded-2xl focus:border-indigo-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Chiave API Gemini (Google AI Studio)
                </label>
                <input
                  type="password"
                  placeholder="AIzaSy..."
                  value={apiKey}
                  onChange={e => setApiKey(e.target.value)}
                  className="w-full px-3 py-2 border-2 border-indigo-100 rounded-2xl text-xs focus:border-indigo-500 focus:outline-none"
                />
                <p className="text-[11px] text-slate-400 mt-1">
                  Opzionale. Se inserita, potenzia il Maestro Gufo per correggere la pronuncia fonetica via AI e rispondere alle domande libere.
                </p>
              </div>

              {saveSuccess && (
                <div className="bg-emerald-50 text-emerald-800 p-2.5 rounded-2xl border border-emerald-200 text-xs font-bold flex items-center gap-1.5">
                  <Check className="w-4 h-4" />
                  <span>Modifiche salvate con successo!</span>
                </div>
              )}

              <button
                type="submit"
                className="py-2.5 px-6 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white font-bold rounded-2xl text-sm shadow-md transition active:scale-95"
              >
                Salva Modifiche
              </button>

              <hr className="my-6 border-slate-100" />

              <div className="bg-rose-50/70 border border-rose-200 rounded-3xl p-4">
                <div className="text-xs font-bold text-rose-800 uppercase mb-1">
                  Azzera Dati e Progressi di Gioco
                </div>
                <p className="text-xs text-rose-700 mb-3">
                  Questa azione cancellerà tutti i punti XP, le tappe e i voti registrati.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    if (confirm('Vuoi davvero ripartire da zero e cancellare tutti i progressi?')) {
                      onResetProgress();
                      onClose();
                    }
                  }}
                  className="text-xs bg-rose-600 hover:bg-rose-700 text-white font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 active:scale-95 transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Azzera Tutto</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

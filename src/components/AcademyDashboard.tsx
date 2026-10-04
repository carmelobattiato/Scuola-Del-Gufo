import React from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Play, 
  Award, 
  Trophy, 
  ChevronRight, 
  Compass, 
  Star,
  Rocket
} from 'lucide-react';
import { WeeklyModule, StudentProgress } from '../types';
import { CuteTeacherAvatar } from './CuteTeacherAvatar';
import { SoundFX } from '../utils/audioEffects';

interface AcademyDashboardProps {
  currentWeek: WeeklyModule;
  progress: StudentProgress;
  onSelectDay: (dayKey: string) => void;
  onOpenSundayTest: () => void;
  onOpenGufoChat: () => void;
}

export const AcademyDashboard: React.FC<AcademyDashboardProps> = ({
  currentWeek,
  progress,
  onSelectDay,
  onOpenSundayTest,
  onOpenGufoChat
}) => {
  const weekDays = [
    { key: 'lunedi', label: 'Lunedì', stage: 'Tappa 1', icon: '🌱', color: 'from-sky-400 to-blue-500' },
    { key: 'martedi', label: 'Martedì', stage: 'Tappa 2', icon: '🌿', color: 'from-blue-400 to-indigo-500' },
    { key: 'mercoledi', label: 'Mercoledì', stage: 'Tappa 3', icon: '🍀', color: 'from-indigo-400 to-violet-500' },
    { key: 'giovedi', label: 'Giovedì', stage: 'Tappa 4', icon: '🌻', color: 'from-violet-400 to-purple-500' },
    { key: 'venerdi', label: 'Venerdì', stage: 'Tappa 5', icon: '🌺', color: 'from-purple-400 to-pink-500' },
    { key: 'sabato', label: 'Sabato', stage: 'Tappa 6', icon: '🌸', color: 'from-sky-400 to-indigo-500' }
  ];

  const completedDays = progress.completedDays[String(currentWeek.weekNumber)] || [];
  const sundayGrade = progress.weeklyGrades[String(currentWeek.weekNumber)];
  
  // Find the next uncompleted day to start automatically
  const nextUncompleted = weekDays.find(d => !completedDays.includes(d.key));
  const nextDayKey = nextUncompleted ? nextUncompleted.key : 'lunedi';
  const allDaysDone = completedDays.length >= 6;

  const handleStartWorld = () => {
    SoundFX.playPop();
    if (allDaysDone && !sundayGrade) {
      onOpenSundayTest();
    } else {
      onSelectDay(nextDayKey);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 space-y-6 text-left">
      
      {/* Playful Hero Card with Cute Teacher Avatar and Prominent "AVVIA MONDO" button */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-500 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-indigo-200/50 border-4 border-white/60">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="space-y-3 text-center md:text-left max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full text-xs font-black tracking-wide border border-white/30 text-white shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
              <span>MONDO {currentWeek.weekNumber} • MISSIONE SPECIALE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white drop-shadow-xs">
              {currentWeek.title}
            </h2>
            <p className="text-sky-100 text-xs sm:text-sm leading-relaxed font-medium">
              {currentWeek.description}
            </p>

            {/* Interactive Progress Bar */}
            <div className="pt-1 flex items-center gap-3">
              <div className="flex-1 bg-white/20 rounded-full h-3.5 p-0.5 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-yellow-300 to-amber-400 h-full rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${(completedDays.length / 6) * 100}%` }}
                />
              </div>
              <span className="text-xs font-black bg-white text-indigo-900 px-2.5 py-0.5 rounded-full shadow-xs">
                {completedDays.length}/6 Tappe
              </span>
            </div>

            {/* Prominent "AVVIA MONDO" Button Requested by User */}
            <div className="pt-2">
              <button
                onClick={handleStartWorld}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 hover:from-yellow-300 hover:to-amber-400 text-slate-900 font-black text-base sm:text-lg px-8 py-4 rounded-3xl shadow-xl hover:shadow-2xl shadow-yellow-500/30 transform hover:scale-105 active:scale-95 transition-all border-3 border-white animate-pulse"
              >
                <div className="w-9 h-9 rounded-2xl bg-slate-900 text-yellow-300 flex items-center justify-center shadow-xs">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <span>
                  {allDaysDone 
                    ? `GIOCA TORNEO MONDO ${currentWeek.weekNumber} 🏆`
                    : `AVVIA MONDO ${currentWeek.weekNumber} 🚀`
                  }
                </span>
                <Sparkles className="w-5 h-5 text-amber-900" />
              </button>
            </div>
          </div>

          {/* Cute Teacher Mascot with Speech Bubble */}
          <div 
            onClick={() => {
              SoundFX.playPop();
              onOpenGufoChat();
            }}
            className="flex items-center gap-4 rounded-3xl p-4 shadow-lg border-2 text-slate-800 cursor-pointer transform hover:scale-105 transition shrink-0 max-w-sm"
            style={{ backgroundColor: '#FFFFFF', borderColor: '#E0E7FF', color: '#1E293B', colorScheme: 'light only' }}
          >
            <CuteTeacherAvatar size="lg" className="w-20 h-20 shrink-0" />
            <div>
              <div className="flex items-center gap-1 text-[11px] font-black text-violet-600 uppercase tracking-wider">
                <span>Maestro Gufo</span>
                <span className="text-yellow-500">✨</span>
              </div>
              <p className="text-xs font-bold text-slate-700 leading-snug mt-0.5">
                "Clicca su 'Avvia Mondo' per entrare subito nell'avventura!"
              </p>
              <div className="mt-2 text-[10px] font-black text-sky-600 bg-sky-50 px-2.5 py-1 rounded-xl inline-block border border-sky-100">
                Chiedi un aiuto 🦉
              </div>
            </div>
          </div>

        </div>

        {/* Decorative background clouds / bubbles */}
        <div className="absolute -right-8 -top-8 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute left-1/3 -bottom-10 w-60 h-60 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Quest / Stages Grid */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-black text-slate-800 flex items-center gap-2">
            <Compass className="w-5 h-5 text-indigo-500" />
            <span>Mappa delle Tappe (Lunedì - Sabato)</span>
          </h3>
          <span className="text-xs font-bold text-violet-600 bg-violet-50 px-3 py-1 rounded-full border border-violet-100">
            +100 XP per ogni vittoria
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {weekDays.map(d => {
            const session = currentWeek.days[d.key];
            const isDone = completedDays.includes(d.key);

            if (!session) return null;

            return (
              <div
                key={d.key}
                onClick={() => {
                  SoundFX.playPop();
                  onSelectDay(d.key);
                }}
                className={`group relative rounded-3xl p-5 border-2 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-xl flex flex-col justify-between ${
                  isDone
                    ? 'hover:border-emerald-300'
                    : 'hover:border-sky-300'
                }`}
                style={{
                  backgroundColor: isDone ? '#F0FDF4' : '#FFFFFF',
                  borderColor: isDone ? '#86EFAC' : '#E2E8F0',
                  color: '#1E293B',
                  colorScheme: 'light only'
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl transform group-hover:scale-125 transition-transform">{d.icon}</span>
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-indigo-500 block">
                          {d.stage}
                        </span>
                        <span className="text-xs font-black text-slate-700">
                          {d.label}
                        </span>
                      </div>
                    </div>

                    {isDone ? (
                      <span className="flex items-center gap-1 text-[11px] font-black text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full shadow-xs">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Completato
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[11px] font-black text-indigo-600 bg-sky-50 border border-sky-200/80 px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-400" />
                        +100 XP
                      </span>
                    )}
                  </div>

                  <h4 className="font-bold text-slate-800 text-sm sm:text-base mt-2 group-hover:text-indigo-600 transition leading-snug">
                    {session.topic}
                  </h4>

                  <div 
                    className="mt-3 rounded-2xl p-2.5 text-xs space-y-1 border"
                    style={{ backgroundColor: '#F8FAFC', borderColor: '#E2E8F0', color: '#475569', colorScheme: 'light only' }}
                  >
                    <div className="truncate">
                      📖 <strong>Parole:</strong> {session.words_of_the_day.map(w => w.word).join(', ')}
                    </div>
                    <div className="truncate">
                      🎙️ <strong>Lettura:</strong> "{session.reading_passage.title}"
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-indigo-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    {isDone ? 'Gioca Ancora' : 'Inizia Tappa'}
                    <ChevronRight className="w-4 h-4" />
                  </span>
                  <div className="w-8 h-8 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-indigo-500 group-hover:text-white transition shadow-xs">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>
            );
          })}

          {/* SUNDAY SPECIAL QUEST CARD */}
          <div
            onClick={() => {
              SoundFX.playPop();
              onOpenSundayTest();
            }}
            className={`col-span-1 md:col-span-2 lg:col-span-3 rounded-3xl p-6 border-4 transition-all duration-200 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 ${
              sundayGrade
                ? 'bg-gradient-to-r from-emerald-50 via-sky-50 to-indigo-50 border-emerald-300'
                : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-white/60'
            }`}
          >
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className={`w-16 h-16 rounded-3xl flex items-center justify-center text-3xl shadow-md shrink-0 ${
                sundayGrade ? 'bg-amber-400 text-slate-900 border-2 border-amber-300' : 'bg-white text-indigo-900'
              }`}>
                🏆
              </div>
              <div>
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                  <span className={`text-[11px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full ${
                    sundayGrade ? 'bg-amber-100 text-amber-900' : 'bg-white/20 text-white border border-white/30'
                  }`}>
                    Domenica • Grande Torneo del Mondo {currentWeek.weekNumber}
                  </span>
                  {sundayGrade && (
                    <span className="bg-emerald-600 text-white font-black text-xs px-2.5 py-0.5 rounded-full shadow-xs">
                      Superato! Voto: {sundayGrade.score}/10
                    </span>
                  )}
                </div>

                <h4 className={`text-xl sm:text-2xl font-black mt-1 ${sundayGrade ? 'text-slate-800' : 'text-white'}`}>
                  {currentWeek.weeklyTest.title}
                </h4>
                <p className={`text-xs sm:text-sm mt-0.5 font-medium ${sundayGrade ? 'text-slate-600' : 'text-indigo-100'}`}>
                  Sfida finale di 10 quiz per vincere la Coppa, il Badge Diamante e aprire il Mondo successivo!
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <button className={`px-6 py-3.5 rounded-2xl font-black text-sm shadow-md flex items-center gap-2 transition active:scale-95 ${
                sundayGrade
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white'
                  : 'bg-white hover:bg-yellow-50 text-indigo-900 shadow-lg'
              }`}>
                <Trophy className="w-4 h-4 text-amber-500" />
                <span>{sundayGrade ? 'Rifai la Sfida' : 'Partecipa al Torneo!'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Trophies & Badges Showcase */}
      <div 
        className="rounded-3xl p-5 border-2 shadow-xs space-y-3"
        style={{ backgroundColor: '#FFFFFF', borderColor: '#E2E8F0', color: '#1E293B', colorScheme: 'light only' }}
      >
        <div className="flex items-center justify-between">
          <h4 className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
            <Award className="w-4 h-4 text-amber-500" />
            <span>I Tuoi Trofei e Distintivi di Gioco</span>
          </h4>
          <span className="text-xs font-black text-violet-700 bg-violet-50 px-2.5 py-0.5 rounded-full border border-violet-100">
            {progress.badges.length} Collezionati
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {progress.badges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-r from-sky-50 to-violet-50 border border-indigo-100 rounded-2xl px-3 py-1.5 flex items-center gap-2 text-xs font-bold text-indigo-900 shadow-xs hover:scale-105 transition-transform"
            >
              <span className="text-base">🎖️</span>
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

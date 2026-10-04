import React, { useState, useEffect } from 'react';
import { 
  Maximize, 
  Minimize, 
  Lock, 
  Sparkles, 
  Flame, 
  Volume2, 
  VolumeX, 
  BookOpen, 
  ChevronDown,
  Compass,
  ZoomIn,
  Settings,
  GraduationCap
} from 'lucide-react';
import { StudentProgress, WeeklyModule, SchoolGrade } from '../types';
import { CuteTeacherAvatar } from './CuteTeacherAvatar';
import { SoundFX } from '../utils/audioEffects';
import { ALL_GRADES, getGradeInfo } from '../data/grades';

interface NavbarProps {
  progress: StudentProgress;
  currentWeek: WeeklyModule;
  allWeeks: WeeklyModule[];
  currentGrade: SchoolGrade;
  onSelectGrade: (grade: SchoolGrade) => void;
  onSelectWeek: (weekNum: number) => void;
  onOpenParentArea: () => void;
  onOpenGufoChat: () => void;
  onOpenAudioSettings: () => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  progress,
  currentWeek,
  allWeeks,
  currentGrade,
  onSelectGrade,
  onSelectWeek,
  onOpenParentArea,
  onOpenGufoChat,
  onOpenAudioSettings,
  soundEnabled,
  onToggleSound
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showWeekDropdown, setShowWeekDropdown] = useState(false);
  const [showGradeDropdown, setShowGradeDropdown] = useState(false);
  const [zoomScale, setZoomScale] = useState<number>(150); // Default to +50% larger!

  const currentGradeInfo = getGradeInfo(currentGrade);

  useEffect(() => {
    const handleGlobalClick = () => {
      setShowWeekDropdown(false);
      setShowGradeDropdown(false);
    };
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = async () => {
    SoundFX.playPop();
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          await document.exitFullscreen();
        }
      }
    } catch (err) {
      console.warn('Fullscreen error:', err);
    }
  };

  const handleCycleZoom = () => {
    SoundFX.playPop();
    const nextZoom = zoomScale === 150 ? 175 : zoomScale === 175 ? 125 : zoomScale === 125 ? 150 : 150;
    setZoomScale(nextZoom);
    // Apply font-size percentage directly to document element
    const basePx = Math.round(16 * (nextZoom / 100));
    document.documentElement.style.fontSize = `${basePx}px`;
  };

  return (
    <header 
      className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-sky-100 px-3 sm:px-6 py-2.5 transition-all"
      style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left: Brand / Mascot */}
        <div 
          onClick={() => {
            SoundFX.playPop();
            onOpenGufoChat();
          }}
          className="flex items-center gap-2.5 cursor-pointer group"
          title="Clicca per parlare con il Maestro Gufo!"
        >
          <div className="relative">
            <CuteTeacherAvatar size="sm" className="w-10 h-10 sm:w-11 sm:h-11 group-hover:rotate-6 transition-transform" />
            <span className="absolute -bottom-1 -right-1 bg-amber-400 text-[10px] rounded-full px-1 font-black shadow-xs">
              AI
            </span>
          </div>
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <h1 className="text-base sm:text-lg font-black tracking-tight text-slate-800">
                Accademia <span className="bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-600 bg-clip-text text-transparent">d'Italiano</span>
              </h1>
              {/* Interactive Grade Selector Dropdown */}
              <div className="relative">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    SoundFX.playPop();
                    setShowGradeDropdown(!showGradeDropdown);
                    setShowWeekDropdown(false);
                  }}
                  className="inline-flex items-center gap-1 bg-amber-100/90 hover:bg-amber-200 border border-amber-300 text-amber-900 text-[11px] px-2.5 py-0.5 rounded-full font-black shadow-xs transition active:scale-95 cursor-pointer"
                  title="Cambia classe (1ª-5ª Elementare, 1ª-3ª Medie)"
                >
                  <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
                  <span>{currentGradeInfo.shortName}</span>
                  <ChevronDown className="w-3 h-3 text-amber-700 ml-0.5" />
                </button>

                {showGradeDropdown && (
                  <div 
                    onClick={(e) => e.stopPropagation()}
                    className="absolute left-0 mt-2 w-72 bg-white rounded-3xl shadow-2xl border-2 border-amber-300 p-2 z-50 animate-in fade-in zoom-in-95 text-left"
                    style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
                  >
                    <div className="px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase tracking-wider text-amber-800">
                        Scegli la tua Classe
                      </span>
                      <span className="text-[10px] text-slate-400 font-bold">8 Livelli</span>
                    </div>

                    <div className="max-h-72 overflow-y-auto space-y-1 py-1">
                      <div className="px-2 pt-1 text-[10px] font-black text-sky-700 uppercase">Scuola Primaria (Elementari)</div>
                      {ALL_GRADES.filter(g => g.category === 'elementare').map(g => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => {
                            SoundFX.playCorrect();
                            onSelectGrade(g.id);
                            setShowGradeDropdown(false);
                          }}
                          className={`w-full text-left p-2 rounded-2xl text-xs flex items-center justify-between transition ${
                            currentGrade === g.id
                              ? 'bg-amber-100 text-amber-950 font-black border border-amber-300'
                              : 'hover:bg-slate-50 text-slate-700 font-bold'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span>{g.badge}</span>
                              <span>{g.name}</span>
                            </div>
                            <div className="text-[10px] text-slate-500 font-normal line-clamp-1">{g.description}</div>
                          </div>
                          {currentGrade === g.id && <span className="text-amber-700 font-black text-xs">✓</span>}
                        </button>
                      ))}

                      <div className="px-2 pt-2 text-[10px] font-black text-violet-700 uppercase border-t border-slate-100">Scuola Media (Secondaria)</div>
                      {ALL_GRADES.filter(g => g.category === 'media').map(g => (
                        <button
                          key={g.id}
                          type="button"
                          onClick={() => {
                            SoundFX.playCorrect();
                            onSelectGrade(g.id);
                            setShowGradeDropdown(false);
                          }}
                          className={`w-full text-left p-2 rounded-2xl text-xs flex items-center justify-between transition ${
                            currentGrade === g.id
                              ? 'bg-violet-100 text-violet-950 font-black border border-violet-300'
                              : 'hover:bg-slate-50 text-slate-700 font-bold'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-1.5">
                              <span>{g.badge}</span>
                              <span>{g.name}</span>
                            </div>
                            <div className="text-[10px] text-slate-500 font-normal line-clamp-1">{g.description}</div>
                          </div>
                          {currentGrade === g.id && <span className="text-violet-700 font-black text-xs">✓</span>}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {progress.studentName ? (
              <p className="text-xs text-slate-500 font-medium">
                Ciao, <span className="text-violet-700 font-bold">{progress.studentName}</span>! ✨
              </p>
            ) : (
              <p className="text-xs text-sky-600 font-medium">
                Pronto a giocare? 🎮
              </p>
            )}
          </div>
        </div>

        {/* Center: Mission / Week Selector */}
        <div className="relative">
          <button
            onClick={() => {
              SoundFX.playPop();
              setShowWeekDropdown(!showWeekDropdown);
            }}
            className="flex items-center gap-2 bg-gradient-to-r from-sky-50 to-violet-50 hover:from-sky-100 hover:to-violet-100 border border-sky-200/80 rounded-2xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-indigo-900 transition shadow-xs active:scale-95"
          >
            <Compass className="w-4 h-4 text-sky-500 animate-spin" style={{ animationDuration: '12s' }} />
            <span className="truncate max-w-[110px] sm:max-w-[160px]">
              Mondo {currentWeek.weekNumber}
            </span>
            <ChevronDown className="w-3.5 h-3.5 text-violet-500" />
          </button>

          {showWeekDropdown && (
            <div 
              className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-72 bg-white border-2 border-indigo-100 rounded-3xl shadow-xl py-2 z-50 text-left animate-in zoom-in-95 duration-150"
              onMouseLeave={() => setShowWeekDropdown(false)}
            >
              <div className="px-4 py-2 text-[11px] font-black text-sky-600 uppercase tracking-wider border-b border-indigo-50">
                Mappe e Mondi Didattici
              </div>
              {allWeeks.map((w) => {
                const isUnlocked = progress.currentWeek >= w.weekNumber;
                const isSelected = currentWeek.weekNumber === w.weekNumber;
                const isCompleted = progress.weeklyGrades[String(w.weekNumber)] !== undefined;

                return (
                  <button
                    key={w.weekNumber}
                    disabled={!isUnlocked}
                    onClick={() => {
                      SoundFX.playPop();
                      onSelectWeek(w.weekNumber);
                      setShowWeekDropdown(false);
                    }}
                    className={`w-full px-4 py-2.5 text-xs sm:text-sm flex items-center justify-between transition ${
                      isSelected
                        ? 'bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold'
                        : isUnlocked
                        ? 'hover:bg-indigo-50/70 text-slate-700'
                        : 'opacity-40 cursor-not-allowed text-slate-400'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-left truncate">
                      <span>{isUnlocked ? (isCompleted ? '🌟' : '🗺️') : '🔒'}</span>
                      <span className="truncate font-semibold">Mondo {w.weekNumber}: {w.title}</span>
                    </div>
                    {isCompleted && (
                      <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold shrink-0">
                        {progress.weeklyGrades[String(w.weekNumber)].score}/10
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Right Controls: Stats, Sound, Zoom, Fullscreen, Parent Gateway */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          {/* XP Badge */}
          <div className="flex items-center gap-1.5 bg-gradient-to-r from-amber-50 to-yellow-100/70 border border-amber-200/80 rounded-2xl px-2.5 sm:px-3 py-1.5 text-xs font-black text-amber-800 shadow-xs" title="I tuoi punti XP">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-400 animate-bounce" />
            <span>{progress.xp}</span>
            <span className="text-[10px] text-amber-700 font-bold">XP</span>
          </div>

          {/* Streak Badge */}
          <div className="flex items-center gap-1 bg-gradient-to-r from-orange-50 to-rose-50 border border-orange-200/80 rounded-2xl px-2.5 sm:px-3 py-1.5 text-xs font-black text-orange-700 shadow-xs" title="Giorni consecutivi">
            <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
            <span>{progress.streak}</span>
          </div>

          {/* Zoom Size Controller */}
          <button
            onClick={handleCycleZoom}
            className="hidden sm:flex items-center gap-1 p-2 rounded-2xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-700 text-xs font-bold transition shadow-xs"
            title="Ingrandisci o rimpicciolisci i testi e le icone per il tuo schermo"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>+{zoomScale - 100}%</span>
          </button>

          {/* Configurazioni Audio & Voci TTS Button */}
          <button
            onClick={() => {
              SoundFX.playPop();
              onOpenAudioSettings();
            }}
            className="flex items-center gap-1.5 p-2 sm:px-3 rounded-2xl bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 text-indigo-800 text-xs font-bold transition shadow-xs active:scale-95"
            title="Configurazioni: Scegli la voce italiana gratuita (Google Italiano Uomo/Donna, ecc.)"
          >
            <Settings className="w-3.5 h-3.5 text-indigo-600 animate-spin" style={{ animationDuration: '24s' }} />
            <span className="hidden sm:inline">Configurazioni</span>
          </button>

          {/* Teacher AI Chat Launcher */}
          <button
            onClick={() => {
              SoundFX.playPop();
              onOpenGufoChat();
            }}
            className="flex items-center gap-1.5 bg-gradient-to-r from-violet-500 to-indigo-600 hover:from-violet-600 hover:to-indigo-700 text-white rounded-2xl px-3 py-1.5 text-xs sm:text-sm font-bold shadow-sm active:scale-95 transition"
            title="Chiedi aiuto al Maestro Gufo con gli occhiali!"
          >
            <span>🦉</span>
            <span className="hidden sm:inline">Maestro Gufo</span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => {
              SoundFX.playPop();
              onToggleSound();
            }}
            className="p-2 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 transition"
            title={soundEnabled ? 'Disattiva effetti e voce' : 'Attiva effetti e voce'}
            aria-label="Audio switch"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-700 transition"
            title={isFullscreen ? 'Esci da schermo intero' : 'Schermo intero (consigliato per giocare)'}
            aria-label="Fullscreen toggle"
          >
            {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
          </button>

          {/* Parent Gateway Lock Button */}
          <button
            onClick={() => {
              SoundFX.playPop();
              onOpenParentArea();
            }}
            className="flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-2xl px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-bold transition shadow-xs"
            title="Area Genitori protetta da PIN"
          >
            <Lock className="w-3.5 h-3.5 text-slate-500" />
            <span className="hidden md:inline">Genitori</span>
          </button>
        </div>

      </div>
    </header>
  );
};

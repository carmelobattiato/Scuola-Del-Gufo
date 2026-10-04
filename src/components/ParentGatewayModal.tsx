import React, { useState } from 'react';
import { Lock, X, KeyRound, User, Sparkles, Check, AlertCircle } from 'lucide-react';
import { StudentProgress, SchoolGrade } from '../types';
import { CuteTeacherAvatar } from './CuteTeacherAvatar';
import { SoundFX } from '../utils/audioEffects';
import { ALL_GRADES } from '../data/grades';

interface ParentGatewayModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: StudentProgress;
  onUnlockSuccess: () => void;
  onInitialSetup: (name: string, pin: string, apiKey: string, grade?: SchoolGrade) => void;
}

export const ParentGatewayModal: React.FC<ParentGatewayModalProps> = ({
  isOpen,
  onClose,
  progress,
  onUnlockSuccess,
  onInitialSetup
}) => {
  const isFirstTime = !progress.pin || progress.pin.length !== 4;

  // Onboarding state
  const [setupName, setSetupName] = useState(progress.studentName || '');
  const [setupGrade, setSetupGrade] = useState<SchoolGrade>(progress.schoolGrade || '4_elem');
  const [setupPin, setSetupPin] = useState('');
  const [setupPinConfirm, setSetupPinConfirm] = useState('');
  const [setupApiKey, setSetupApiKey] = useState(progress.geminiApiKey || '');
  const [setupError, setSetupError] = useState('');

  // Unlock state
  const [enteredPin, setEnteredPin] = useState('');
  const [pinError, setPinError] = useState(false);

  if (!isOpen) return null;

  const handleNumpadClick = (digit: string) => {
    SoundFX.playPop();
    if (enteredPin.length < 4) {
      const nextPin = enteredPin + digit;
      setEnteredPin(nextPin);
      setPinError(false);

      if (nextPin.length === 4) {
        if (nextPin === progress.pin) {
          SoundFX.playCorrect();
          setEnteredPin('');
          onUnlockSuccess();
        } else {
          SoundFX.playIncorrect();
          setPinError(true);
          setTimeout(() => {
            setEnteredPin('');
            setPinError(false);
          }, 800);
        }
      }
    }
  };

  const handleNumpadDelete = () => {
    SoundFX.playPop();
    setEnteredPin(prev => prev.slice(0, -1));
    setPinError(false);
  };

  const handleSaveOnboarding = (e: React.FormEvent) => {
    e.preventDefault();
    if (!setupName.trim()) {
      setSetupError('Inserisci il nome dello studente.');
      return;
    }
    if (setupPin.length !== 4 || !/^\d{4}$/.test(setupPin)) {
      setSetupError('Il PIN deve essere esattamente di 4 cifre numeriche.');
      return;
    }
    if (setupPin !== setupPinConfirm) {
      setSetupError('I due PIN inseriti non coincidono.');
      return;
    }

    SoundFX.playFanfare();
    setSetupError('');
    onInitialSetup(setupName.trim(), setupPin, setupApiKey.trim(), setupGrade);
    onUnlockSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border-4 border-indigo-100 overflow-hidden text-slate-800"
        style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
      >
        
        {/* Soft Header */}
        <div className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-500 p-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CuteTeacherAvatar size="sm" className="w-10 h-10 shrink-0" />
            <div>
              <h3 className="text-base font-black">
                {isFirstTime ? 'Benvenuto nell\'Accademia!' : 'Accesso Area Genitori'}
              </h3>
              <p className="text-xs text-sky-100">
                {isFirstTime ? 'Inizia l\'avventura impostando il profilo' : 'Inserisci il PIN a 4 cifre'}
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              SoundFX.playPop();
              onClose();
            }}
            className="p-1 rounded-2xl hover:bg-white/10 text-white/90 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {isFirstTime ? (
            /* First-time Onboarding */
            <form onSubmit={handleSaveOnboarding} className="space-y-4 text-left">
              <div className="bg-gradient-to-r from-sky-50 to-violet-50 border border-sky-200/80 rounded-2xl p-3.5 text-xs text-indigo-900 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <p>
                  Imposta il nome dell'alunno e un PIN a 4 cifre per proteggere i progressi e le impostazioni didattiche.
                </p>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Nome dello Studente / Giocatore
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Es. Marco, Giulia, Leonardo..."
                    value={setupName}
                    onChange={e => setSetupName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 border-2 border-indigo-100 rounded-2xl text-sm focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Classe da Frequentare
                </label>
                <select
                  value={setupGrade}
                  onChange={e => setSetupGrade(e.target.value as SchoolGrade)}
                  className="w-full px-3 py-2 border-2 border-indigo-100 rounded-2xl text-xs sm:text-sm font-bold bg-white focus:border-indigo-500 focus:outline-none cursor-pointer"
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
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    PIN a 4 cifre
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    required
                    placeholder="••••"
                    value={setupPin}
                    onChange={e => setSetupPin(e.target.value.replace(/\D/g, ''))}
                    className="w-full text-center tracking-widest text-lg font-bold py-2 border-2 border-indigo-100 rounded-2xl focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Conferma PIN
                  </label>
                  <input
                    type="password"
                    maxLength={4}
                    required
                    placeholder="••••"
                    value={setupPinConfirm}
                    onChange={e => setSetupPinConfirm(e.target.value.replace(/\D/g, ''))}
                    className="w-full text-center tracking-widest text-lg font-bold py-2 border-2 border-indigo-100 rounded-2xl focus:border-indigo-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 flex items-center justify-between">
                  <span>Chiave API Gemini (Facoltativa)</span>
                  <span className="text-[10px] text-violet-600 font-semibold">Google AI Studio</span>
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="password"
                    placeholder="AIzaSy... (facoltativa)"
                    value={setupApiKey}
                    onChange={e => setSetupApiKey(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 border-2 border-indigo-100 rounded-2xl text-xs focus:border-indigo-500 focus:outline-none"
                  />
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  Se non inserita, l'app usa il riconoscimento vocale standard integrato nel browser senza costi.
                </p>
              </div>

              {setupError && (
                <div className="flex items-center gap-1.5 text-xs text-rose-600 bg-rose-50 p-2.5 rounded-2xl border border-rose-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{setupError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-sky-500 via-indigo-500 to-violet-600 hover:from-sky-600 hover:to-violet-700 text-white font-bold rounded-2xl shadow-md transition flex items-center justify-center gap-2 active:scale-95"
              >
                <Check className="w-4 h-4" />
                <span>Entra nell'Accademia e Gioca!</span>
              </button>
            </form>
          ) : (
            /* PIN Keypad for existing users */
            <div className="text-center">
              <div className="mb-6 flex justify-center items-center gap-3">
                {[0, 1, 2, 3].map(index => {
                  const isFilled = enteredPin.length > index;
                  return (
                    <div
                      key={index}
                      className={`w-4 h-4 rounded-full transition-all duration-200 ${
                        pinError
                          ? 'bg-rose-500 scale-125 animate-bounce'
                          : isFilled
                          ? 'bg-indigo-600 scale-110'
                          : 'bg-slate-200 border border-slate-300'
                      }`}
                    />
                  );
                })}
              </div>

              {pinError && (
                <p className="text-xs text-rose-600 font-semibold mb-4 animate-shake">
                  PIN errato. Riprova!
                </p>
              )}

              {/* Soft Friendly Numpad */}
              <div className="grid grid-cols-3 gap-2.5 max-w-[240px] mx-auto mb-4">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => handleNumpadClick(String(num))}
                    className="h-12 rounded-2xl bg-sky-50/60 hover:bg-sky-100 text-slate-800 text-lg font-bold shadow-xs border border-sky-100 active:scale-95 transition"
                  >
                    {num}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    SoundFX.playPop();
                    setEnteredPin('');
                  }}
                  className="h-12 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-500 text-xs font-bold transition"
                >
                  CANCELLA
                </button>
                <button
                  type="button"
                  onClick={() => handleNumpadClick('0')}
                  className="h-12 rounded-2xl bg-sky-50/60 hover:bg-sky-100 text-slate-800 text-lg font-bold shadow-xs border border-sky-100 active:scale-95 transition"
                >
                  0
                </button>
                <button
                  type="button"
                  onClick={handleNumpadDelete}
                  className="h-12 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-sm font-bold transition flex items-center justify-center"
                >
                  ⌫
                </button>
              </div>

              <p className="text-[11px] text-slate-400">
                Pannello riservato a genitori e insegnanti
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

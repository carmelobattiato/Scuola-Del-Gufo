import React, { useState, useEffect } from 'react';
import { X, Volume2, Check, Settings, Sparkles, Sliders, Play, RotateCcw } from 'lucide-react';
import { SpeechService, VoiceOption } from '../services/speechService';
import { CuteTeacherAvatar } from './CuteTeacherAvatar';
import { SoundFX } from '../utils/audioEffects';

interface AudioSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AudioSettingsModal: React.FC<AudioSettingsModalProps> = ({
  isOpen,
  onClose
}) => {
  const [voices, setVoices] = useState<VoiceOption[]>([]);
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string>('');
  const [pitch, setPitch] = useState<number>(1.0);
  const [rate, setRate] = useState<number>(0.9);
  const [isPlayingTest, setIsPlayingTest] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const current = SpeechService.getSettings();
      setSelectedVoiceURI(current.voiceURI || 'preset_google_uomo');
      setPitch(current.pitch !== undefined ? current.pitch : 0.8);
      setRate(current.rate !== undefined ? current.rate : 0.8);

      SpeechService.getAvailableVoices().then(v => {
        setVoices(v);
        if (!current.voiceURI && v.length > 0) {
          setSelectedVoiceURI('preset_google_uomo');
        }
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleTestVoice = (voiceId?: string) => {
    SoundFX.playPop();
    setIsPlayingTest(true);

    const tempVoice = voiceId || selectedVoiceURI;
    SpeechService.saveSettings({
      voiceURI: tempVoice,
      pitch,
      rate,
      genderPreset: tempVoice.includes('uomo') ? 'uomo' : tempVoice.includes('donna') ? 'donna' : 'auto'
    });

    SpeechService.testVoice(
      "Ciao! Sono il Maestro Gufo con gli occhiali. Ti piace questa voce per le nostre lezioni di italiano?",
      () => {
        setIsPlayingTest(false);
      }
    );
  };

  const handleSave = () => {
    SoundFX.playCorrect();
    SpeechService.saveSettings({
      voiceURI: selectedVoiceURI,
      pitch,
      rate,
      genderPreset: selectedVoiceURI.includes('uomo') ? 'uomo' : selectedVoiceURI.includes('donna') ? 'donna' : 'auto'
    });
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 600);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in"
      style={{ colorScheme: 'light only' }}
    >
      <div 
        className="relative w-full max-w-xl max-h-[90vh] bg-white rounded-3xl shadow-2xl border-4 border-indigo-100 overflow-hidden flex flex-col text-slate-800"
        style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
      >
        
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-500 px-6 py-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <CuteTeacherAvatar size="sm" className="w-10 h-10 shrink-0" />
            <div>
              <h2 className="text-base sm:text-lg font-black tracking-tight flex items-center gap-1.5">
                <span>Configurazioni & Voci TTS</span>
                <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                  Italiano Gratuito
                </span>
              </h2>
              <p className="text-xs text-sky-100">
                Scegli la voce del Maestro Gufo tra Google Uomo, Donna o voci di sistema
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              SoundFX.playPop();
              SpeechService.stopSpeaking();
              onClose();
            }}
            className="p-1.5 rounded-2xl hover:bg-white/10 text-white/90 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-left">
          
          {/* Voices List */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-indigo-600" />
                <span>Seleziona la Voce Narrante:</span>
              </label>
              <span className="text-[11px] font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-lg border border-sky-100">
                {voices.length} Voci Italiane Selezionate
              </span>
            </div>

            <div className="space-y-2.5">
              {voices.map((v) => {
                const isSelected = selectedVoiceURI === v.id;
                const isMale = v.gender === 'uomo';
                const isDefaultVoice = v.id === 'preset_google_uomo';

                return (
                  <div
                    key={v.id}
                    onClick={() => {
                      SoundFX.playPop();
                      setSelectedVoiceURI(v.id);
                    }}
                    className={`p-3.5 rounded-2xl border-2 cursor-pointer transition flex items-center justify-between gap-3 ${
                      isSelected
                        ? 'border-indigo-600 shadow-md ring-2 ring-indigo-100'
                        : 'border-slate-200/90 hover:border-indigo-200'
                    }`}
                    style={{
                      backgroundColor: isSelected ? '#F0F7FF' : '#FFFFFF',
                      colorScheme: 'light only'
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xl font-bold shrink-0 ${
                        isMale ? 'bg-sky-100 text-sky-800' : 'bg-pink-100 text-pink-800'
                      }`}>
                        {isMale ? '👨' : v.id.includes('giovane') ? '🎒' : v.id.includes('system') ? '🇮🇹' : '👩'}
                      </div>
                      <div>
                        <div className="font-bold text-xs sm:text-sm text-slate-800 flex items-center gap-2 flex-wrap">
                          <span>{v.name}</span>
                          {v.isGoogle && (
                            <span className="bg-amber-100 text-amber-900 border border-amber-200 text-[10px] font-black px-1.5 py-0.2 rounded">
                              Google
                            </span>
                          )}
                          {isDefaultVoice && (
                            <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-black px-2 py-0.5 rounded-full">
                              PREDEFINITA ⭐
                            </span>
                          )}
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5">
                          {v.description || (isMale ? 'Voce Maschile (Maestro) • Lingua: it-IT' : 'Voce Femminile (Narratrice) • Lingua: it-IT')}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleTestVoice(v.id);
                        }}
                        className="px-2.5 py-1.5 rounded-xl bg-white hover:bg-sky-50 text-indigo-700 border border-indigo-200 text-xs font-bold flex items-center gap-1 shadow-xs active:scale-95 transition"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Ascolta</span>
                      </button>

                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'
                      }`}>
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Voice Modulation Sliders */}
          <div 
            className="border-2 border-indigo-100 rounded-3xl p-4 sm:p-5 space-y-4 shadow-xs"
            style={{ backgroundColor: '#F8FAFC', colorScheme: 'light only' }}
          >
            <div className="text-xs font-black text-slate-800 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-indigo-600" />
              <span>Regolazioni Fini Voce</span>
            </div>

            {/* Speed / Rate */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Velocità di Lettura:</span>
                <span className="text-indigo-700 font-black">
                  {Math.round(rate * 100)}% {rate === 0.8 ? '(Consigliata / Predefinita)' : ''}
                </span>
              </div>
              <input
                type="range"
                min="0.7"
                max="1.2"
                step="0.05"
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>0.7x (Molto Lenta)</span>
                <span>0.8x (Predefinita Gufo)</span>
                <span>1.2x (Veloce)</span>
              </div>
            </div>

            {/* Pitch */}
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Tono di Voce (Altezza):</span>
                <span className="text-indigo-700 font-black">
                  {pitch <= 0.82 ? 'Grave / Maestro Saggio' : pitch > 1.1 ? 'Acuto / Giocoso' : 'Naturale'}
                </span>
              </div>
              <input
                type="range"
                min="0.75"
                max="1.3"
                step="0.05"
                value={pitch}
                onChange={(e) => setPitch(parseFloat(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-0.5">
                <span>Profondo (Uomo Saggio)</span>
                <span>Naturale</span>
                <span>Acuto (Fanciullo)</span>
              </div>
            </div>
          </div>

          {/* Test Voice Banner */}
          <div className="flex items-center justify-between bg-sky-50/70 border border-sky-200/80 rounded-2xl p-3 text-xs">
            <span className="text-sky-900 font-semibold">
              Vuoi ascoltare subito la frase di prova con queste impostazioni?
            </span>
            <button
              type="button"
              onClick={() => handleTestVoice()}
              disabled={isPlayingTest}
              className="px-3 py-1.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center gap-1.5 shadow-xs shrink-0 active:scale-95 transition"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>{isPlayingTest ? 'In riproduzione...' : 'Prova Ora'}</span>
            </button>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-[#EAE2D7] bg-[#FAF7F2] flex items-center justify-between">
          <button
            type="button"
            onClick={() => {
              SoundFX.playPop();
              setSelectedVoiceURI('preset_google_donna');
              setPitch(1.0);
              setRate(0.9);
            }}
            className="text-xs text-stone-500 hover:text-stone-800 font-bold flex items-center gap-1 px-3 py-2 rounded-xl hover:bg-stone-100 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Ripristina Predefiniti</span>
          </button>

          <button
            type="button"
            onClick={handleSave}
            className="px-6 py-2.5 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700 text-white text-xs sm:text-sm font-black rounded-2xl shadow-md flex items-center gap-1.5 active:scale-95 transition"
          >
            <Check className="w-4 h-4" />
            <span>{savedSuccess ? 'Salvato!' : 'Salva Configurazioni'}</span>
          </button>
        </div>

      </div>
    </div>
  );
};

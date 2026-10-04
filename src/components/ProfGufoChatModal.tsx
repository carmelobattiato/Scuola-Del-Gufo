import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Volume2, Loader2, Sparkles } from 'lucide-react';
import { SpeechService } from '../services/speechService';
import { AiService } from '../services/aiService';
import { CuteTeacherAvatar } from './CuteTeacherAvatar';
import { SoundFX } from '../utils/audioEffects';

interface Message {
  sender: 'user' | 'gufo';
  text: string;
}

interface ProfGufoChatModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentName: string;
  userApiKey: string;
  currentTopic: string;
  soundEnabled: boolean;
}

export const ProfGufoChatModal: React.FC<ProfGufoChatModalProps> = ({
  isOpen,
  onClose,
  studentName,
  userApiKey,
  currentTopic,
  soundEnabled
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'gufo',
      text: `Uhuuu! 🦉 Ciao ${studentName || 'Campione'}! Sono il Maestro Gufo, con i miei grandi occhiali per scovare ogni trucco della grammatica italiana! Hai qualche dubbio sulle regole, sui verbi o su come si scrive una parola? Chiedimi pure!`
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "🦉 Come si usa l'H col verbo avere?",
    "✨ Quando si mette l'apostrofo con UN?",
    "🍒 Spiegami i suoni dolci e duri di C e G!",
    "📖 Come si riconoscono i nomi composti?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const message = (textToSend || inputValue).trim();
    if (!message || isLoading) return;

    SoundFX.playPop();
    const newMessages: Message[] = [...messages, { sender: 'user', text: message }];
    setMessages(newMessages);
    setInputValue('');
    setIsLoading(true);

    try {
      const reply = await AiService.chatWithGufo(
        message,
        messages,
        studentName,
        userApiKey,
        currentTopic
      );

      setMessages(prev => [...prev, { sender: 'gufo', text: reply }]);

      if (soundEnabled) {
        SpeechService.speak(reply);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSpeakMessage = (text: string) => {
    if (!soundEnabled) return;
    SoundFX.playPop();
    SpeechService.speak(text);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in">
      <div 
        className="relative w-full max-w-2xl h-[85vh] bg-white rounded-3xl shadow-2xl border-4 border-indigo-100 overflow-hidden flex flex-col text-slate-800"
        style={{ backgroundColor: '#FFFFFF', color: '#1E293B', colorScheme: 'light only' }}
      >
        
        {/* Soft Header */}
        <div className="bg-gradient-to-r from-sky-400 via-indigo-400 to-violet-500 px-6 py-4 text-white flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <CuteTeacherAvatar size="sm" className="w-11 h-11 shrink-0" />
            <div>
              <h3 className="text-base font-black flex items-center gap-1.5">
                <span>Il Salotto del Maestro Gufo</span>
                <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
                  Tutor AI
                </span>
              </h3>
              <p className="text-xs text-sky-100">
                Argomento attivo: {currentTopic}
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

        {/* Quick Suggestion Pills */}
        <div className="bg-sky-50/60 border-b border-indigo-50 px-4 py-2 flex items-center gap-2 overflow-x-auto text-xs no-scrollbar">
          <span className="text-[10px] font-black text-indigo-700 shrink-0">Chiedi al volo:</span>
          {quickPrompts.map((prompt, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(prompt)}
              className="bg-white hover:bg-sky-100/70 text-indigo-900 font-semibold px-3 py-1 rounded-full border border-sky-200/80 shadow-xs whitespace-nowrap transition active:scale-95 text-xs"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-gradient-to-b from-sky-50/20 to-white text-left">
          {messages.map((m, index) => {
            const isGufo = m.sender === 'gufo';
            return (
              <div
                key={index}
                className={`flex gap-3 items-start ${isGufo ? 'justify-start' : 'justify-end'}`}
              >
                {isGufo && (
                  <CuteTeacherAvatar size="sm" className="w-9 h-9 shrink-0 mt-1" />
                )}
                <div
                  className={`max-w-[80%] rounded-3xl p-4 text-xs sm:text-sm leading-relaxed shadow-xs ${
                    isGufo
                      ? 'bg-gradient-to-r from-sky-50 to-violet-50 border border-sky-100 text-slate-800'
                      : 'bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                  {isGufo && (
                    <button
                      onClick={() => handleSpeakMessage(m.text)}
                      className="mt-2 text-[11px] font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 pt-1 border-t border-sky-200/50"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Ascolta voce</span>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
          {isLoading && (
            <div className="flex gap-2 items-center text-slate-500 text-xs italic">
              <CuteTeacherAvatar size="sm" className="w-7 h-7" />
              <span className="flex items-center gap-1.5">
                <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-600" />
                Il Maestro Gufo sta preparando la spiegazione...
              </span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-slate-100 bg-white">
          <form
            onSubmit={e => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Scrivi qui la tua domanda per il Maestro Gufo..."
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              className="flex-1 px-4 py-3 rounded-2xl border-2 border-indigo-100 text-sm focus:border-indigo-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || isLoading}
              className={`p-3 rounded-2xl text-white transition shadow-sm flex items-center justify-center active:scale-95 ${
                inputValue.trim() && !isLoading
                  ? 'bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-600 hover:to-indigo-700'
                  : 'bg-slate-200 cursor-not-allowed text-slate-400'
              }`}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

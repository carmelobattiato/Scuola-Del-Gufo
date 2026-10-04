/**
 * Speech and Audio services for Accademia d'Italiano
 * Includes Italian TTS voice selection (Google Italiano Donna / Uomo, Microsoft, Apple, etc.)
 */

export interface WordMatchStatus {
  word: string;
  status: 'correct' | 'uncertain' | 'incorrect' | 'pending';
  spoken?: string;
}

export interface VoiceOption {
  id: string;
  name: string;
  lang: string;
  gender: 'donna' | 'uomo' | 'neutro';
  isGoogle: boolean;
  isDefault?: boolean;
  description?: string;
  voice: SpeechSynthesisVoice | null;
}

const VOICE_SETTINGS_KEY = 'accademia_tts_settings_v2';

export const SpeechService = {
  // Load saved settings or defaults (Default: Google Italiano Uomo, pitch 0.8, rate 0.8)
  getSettings(): { voiceURI: string; pitch: number; rate: number; genderPreset: 'auto' | 'donna' | 'uomo' } {
    try {
      const saved = localStorage.getItem(VOICE_SETTINGS_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          voiceURI: parsed.voiceURI || 'preset_google_uomo',
          pitch: parsed.pitch !== undefined ? parsed.pitch : 0.8,
          rate: parsed.rate !== undefined ? parsed.rate : 0.8,
          genderPreset: parsed.genderPreset || 'uomo'
        };
      }
    } catch (e) {
      console.warn('Failed to load voice settings', e);
    }
    return {
      voiceURI: 'preset_google_uomo',
      pitch: 0.8,
      rate: 0.8,
      genderPreset: 'uomo'
    };
  },

  saveSettings(settings: { voiceURI: string; pitch: number; rate: number; genderPreset: 'auto' | 'donna' | 'uomo' }) {
    try {
      localStorage.setItem(VOICE_SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
      console.warn('Failed to save voice settings', e);
    }
  },

  // Returns curated list of exactly 4 voices: the default male teacher voice + 3 other clear options
  getAvailableVoices(): Promise<VoiceOption[]> {
    return new Promise((resolve) => {
      if (!('speechSynthesis' in window)) {
        resolve([]);
        return;
      }

      const fetchVoices = () => {
        const rawVoices = window.speechSynthesis.getVoices();
        const itVoices = rawVoices.filter(v => v.lang.toLowerCase().startsWith('it'));
        const googleVoice = itVoices.find(v => v.name.toLowerCase().includes('google'));
        const maleVoice = itVoices.find(v => {
          const n = v.name.toLowerCase();
          return n.includes('male') || n.includes('uomo') || n.includes('cosimo') || n.includes('luca') || n.includes('diego') || n.includes('giorgio');
        });
        const femaleVoice = itVoices.find(v => {
          const n = v.name.toLowerCase();
          return n.includes('female') || n.includes('donna') || n.includes('elsa') || n.includes('alice') || n.includes('federica') || n.includes('chiara');
        });

        const curatedOptions: VoiceOption[] = [
          {
            id: 'preset_google_uomo',
            name: 'Google Italiano (Uomo - Maestro Gufo)',
            lang: 'it-IT',
            gender: 'uomo',
            isGoogle: true,
            isDefault: true,
            description: 'Voce Maschile (Maestro) • Calda e saggia per le spiegazioni',
            voice: maleVoice || googleVoice || itVoices[0] || null
          },
          {
            id: 'preset_google_donna',
            name: 'Google Italiano (Donna - Maestra Luna)',
            lang: 'it-IT',
            gender: 'donna',
            isGoogle: true,
            description: 'Voce Femminile (Narratrice) • Dolce, chiara e incoraggiante',
            voice: femaleVoice || googleVoice || itVoices[0] || null
          },
          {
            id: 'preset_system_it',
            name: 'Voce di Sistema Italiana (Naturale)',
            lang: 'it-IT',
            gender: 'neutro',
            isGoogle: false,
            description: 'Voce nativa fluida del dispositivo di sistema',
            voice: itVoices.find(v => !v.name.toLowerCase().includes('google')) || itVoices[0] || null
          },
          {
            id: 'preset_giovane_vivace',
            name: 'Voce Giovane / Allievo (Vivace)',
            lang: 'it-IT',
            gender: 'neutro',
            isGoogle: false,
            description: 'Tono allegro, energico e brillante ideale per la lettura',
            voice: itVoices[0] || null
          }
        ];

        resolve(curatedOptions);
      };

      const voices = window.speechSynthesis.getVoices();
      if (voices.length > 0) {
        fetchVoices();
      } else {
        window.speechSynthesis.onvoiceschanged = () => {
          fetchVoices();
        };
        setTimeout(fetchVoices, 400);
      }
    });
  },

  // Speaks Italian text using Web Speech API with selected voice
  speak(text: string, onEnd?: () => void): void {
    if (!('speechSynthesis' in window)) {
      console.warn('Speech synthesis not supported in this browser.');
      if (onEnd) onEnd();
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'it-IT';

    const settings = this.getSettings();
    let currentPitch = settings.pitch !== undefined ? settings.pitch : 0.8;
    let currentRate = settings.rate !== undefined ? settings.rate : 0.8;

    // Handle presets fine tuning if user left sliders untouched
    if (settings.voiceURI === 'preset_google_uomo') {
      currentPitch = settings.pitch !== undefined ? settings.pitch : 0.8;
      currentRate = settings.rate !== undefined ? settings.rate : 0.8;
    } else if (settings.voiceURI === 'preset_google_donna') {
      currentPitch = settings.pitch !== undefined ? settings.pitch : 1.1;
      currentRate = settings.rate !== undefined ? settings.rate : 0.9;
    } else if (settings.voiceURI === 'preset_system_it') {
      currentPitch = settings.pitch !== undefined ? settings.pitch : 1.0;
      currentRate = settings.rate !== undefined ? settings.rate : 0.9;
    } else if (settings.voiceURI === 'preset_giovane_vivace') {
      currentPitch = settings.pitch !== undefined ? settings.pitch : 1.2;
      currentRate = settings.rate !== undefined ? settings.rate : 0.95;
    }

    utterance.pitch = currentPitch;
    utterance.rate = currentRate;

    // Try to find matching voice
    const voices = window.speechSynthesis.getVoices();
    const itVoices = voices.filter(v => v.lang.toLowerCase().startsWith('it'));
    const googleVoice = itVoices.find(v => v.name.toLowerCase().includes('google'));
    const maleVoice = itVoices.find(v => {
      const n = v.name.toLowerCase();
      return n.includes('male') || n.includes('uomo') || n.includes('cosimo') || n.includes('luca') || n.includes('diego') || n.includes('giorgio');
    });
    const femaleVoice = itVoices.find(v => {
      const n = v.name.toLowerCase();
      return n.includes('female') || n.includes('donna') || n.includes('elsa') || n.includes('alice') || n.includes('federica') || n.includes('chiara');
    });

    let matchedVoice: SpeechSynthesisVoice | undefined = undefined;

    if (settings.voiceURI === 'preset_google_uomo') {
      matchedVoice = maleVoice || googleVoice || itVoices[0];
    } else if (settings.voiceURI === 'preset_google_donna') {
      matchedVoice = femaleVoice || googleVoice || itVoices[0];
    } else if (settings.voiceURI === 'preset_system_it') {
      matchedVoice = itVoices.find(v => !v.name.toLowerCase().includes('google')) || itVoices[0];
    } else if (settings.voiceURI === 'preset_giovane_vivace') {
      matchedVoice = itVoices[0];
    } else if (settings.voiceURI) {
      matchedVoice = voices.find(v => (v.voiceURI === settings.voiceURI || v.name === settings.voiceURI));
    }

    if (!matchedVoice && itVoices.length > 0) {
      matchedVoice = googleVoice || itVoices[0];
    }

    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    if (onEnd) {
      utterance.onend = onEnd;
      utterance.onerror = onEnd;
    }

    window.speechSynthesis.speak(utterance);
  },

  testVoice(sampleText?: string, onEnd?: () => void): void {
    const text = sampleText || "Ciao! Sono il Maestro Gufo con gli occhiali! Ti piace questa voce per le nostre lezioni di italiano?";
    this.speak(text, onEnd);
  },

  stopSpeaking(): void {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  },

  // Checks if Web Speech Recognition is available in browser
  isSpeechRecognitionSupported(): boolean {
    return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  },

  // Creates a browser SpeechRecognition instance
  createRecognizer(): any {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognition) return null;

    const recognizer = new SpeechRecognition();
    recognizer.lang = 'it-IT';
    recognizer.continuous = true;
    recognizer.interimResults = true;
    return recognizer;
  },

  // Levenshtein distance between two strings
  levenshteinDistance(a: string, b: string): number {
    const matrix: number[][] = [];
    const lenA = a.length;
    const lenB = b.length;

    for (let i = 0; i <= lenA; i++) {
      matrix[i] = [i];
    }
    for (let j = 0; j <= lenB; j++) {
      matrix[0][j] = j;
    }

    for (let i = 1; i <= lenA; i++) {
      for (let j = 1; j <= lenB; j++) {
        if (a[i - 1] === b[j - 1]) {
          matrix[i][j] = matrix[i - 1][j - 1];
        } else {
          matrix[i][j] = Math.min(
            matrix[i - 1][j - 1] + 1, // substitution
            matrix[i][j - 1] + 1,     // insertion
            matrix[i - 1][j] + 1      // deletion
          );
        }
      }
    }
    return matrix[lenA][lenB];
  },

  // Clean a word for comparison (lowercase, remove punctuation)
  cleanWord(word: string): string {
    return word.toLowerCase().replace(/[.,!?;:'"“”«»()\-]/g, '').trim();
  },

  // Evaluates read text compared to original target passage
  evaluateReading(originalText: string, transcript: string): {
    matchedWords: WordMatchStatus[];
    accuracyPercent: number;
    correctCount: number;
    totalCount: number;
  } {
    const targetWords = originalText.split(/\s+/).filter(w => w.length > 0);
    const spokenWords = transcript.split(/\s+/).map(w => this.cleanWord(w)).filter(w => w.length > 0);

    const matchedWords: WordMatchStatus[] = [];
    let correctCount = 0;
    let spokenIdx = 0;

    for (let i = 0; i < targetWords.length; i++) {
      const orig = targetWords[i];
      const cleanOrig = this.cleanWord(orig);

      if (cleanOrig.length === 0) {
        matchedWords.push({ word: orig, status: 'correct' });
        continue;
      }

      // Look ahead up to 3 spoken words to find match
      let bestMatchStatus: 'correct' | 'uncertain' | 'incorrect' = 'incorrect';
      let foundIndex = -1;

      for (let s = spokenIdx; s < Math.min(spokenIdx + 4, spokenWords.length); s++) {
        const spoken = spokenWords[s];
        if (spoken === cleanOrig) {
          bestMatchStatus = 'correct';
          foundIndex = s;
          break;
        }

        const dist = this.levenshteinDistance(spoken, cleanOrig);
        const maxLen = Math.max(spoken.length, cleanOrig.length);
        const similarity = 1 - dist / (maxLen || 1);

        if (similarity >= 0.75) {
          bestMatchStatus = 'correct';
          foundIndex = s;
          break;
        } else if (similarity >= 0.5) {
          bestMatchStatus = 'uncertain';
          foundIndex = s;
        }
      }

      if (foundIndex !== -1) {
        spokenIdx = foundIndex + 1;
        if (bestMatchStatus === 'correct') {
          correctCount += 1;
        } else if (bestMatchStatus === 'uncertain') {
          correctCount += 0.5;
        }
      } else {
        bestMatchStatus = 'incorrect';
      }

      matchedWords.push({
        word: orig,
        status: bestMatchStatus
      });
    }

    const accuracyPercent = Math.min(
      100,
      Math.round((correctCount / Math.max(1, targetWords.length)) * 100)
    );

    return {
      matchedWords,
      accuracyPercent,
      correctCount: Math.round(correctCount),
      totalCount: targetWords.length
    };
  }
};

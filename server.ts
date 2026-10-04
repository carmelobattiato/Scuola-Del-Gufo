import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function startServer() {
  const app = express();
  app.use(express.json());

  // Helper to get GoogleGenAI instance
  const getAiInstance = (userApiKey?: string) => {
    const key = userApiKey || process.env.GEMINI_API_KEY;
    if (!key) return null;
    return new GoogleGenAI({ apiKey: key });
  };

  // Status endpoint to check if server-side AI is available
  app.get('/api/ai-status', (req, res) => {
    res.json({
      hasServerKey: !!process.env.GEMINI_API_KEY,
      model: 'gemini-3.8-flash'
    });
  });

  // AI Chat with Prof. Gufo (Italian grammar tutor)
  app.post('/api/gemini-chat', async (req, res) => {
    try {
      const { message, history, studentName, userApiKey, currentTopic } = req.body;
      const ai = getAiInstance(userApiKey);

      if (!ai) {
        return res.status(400).json({
          error: 'Nessuna chiave API Gemini configurata. Inseriscila nell\'Area Genitori o nelle impostazioni.'
        });
      }

      const promptContext = `Sei il "Prof. Gufo", il saggio e simpaticissimo gufo maestro dell'Accademia d'Italiano per bambini di 4ª elementare.
Nome dello studente: ${studentName || 'Campione'}.
Argomento di studio attuale: ${currentTopic || 'Grammatica e Ortografia Italiana'}.
Tono: caloroso, molto incoraggiante, chiaro, educativo, adatto a bambini di 9-10 anni, con esempi pratici e qualche emoji simpatica 🦉📚✨.
Regola: Spiega le regole dell'ortografia e della grammatica italiana con metafore semplici e trucchi mnemonici.
Se l'alunno fa un errore, correggilo con dolcezza.
Storico recente: ${JSON.stringify(history || [])}
Domanda dello studente: "${message}"`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: promptContext,
      });

      res.json({ reply: response.text || 'Bravissimo! Continua così!' });
    } catch (error: any) {
      console.error('Gemini Chat Error:', error);
      res.status(500).json({ error: error.message || 'Errore durante la conversazione con il Prof. Gufo.' });
    }
  });

  // Multimodal / Reading Evaluation Endpoint
  app.post('/api/gemini-reading-eval', async (req, res) => {
    try {
      const { passageTitle, passageText, transcript, userApiKey } = req.body;
      const ai = getAiInstance(userApiKey);

      if (!ai) {
        return res.status(400).json({ error: 'Nessuna chiave API configurata.' });
      }

      const prompt = `Sei un maestro di scuola elementare dell'Accademia d'Italiano. 
Valuta la lettura ad alta voce di un bambino di 4ª elementare.

Titolo del brano: "${passageTitle}"
Testo da leggere: "${passageText}"
Trascrizione letta dal bambino: "${transcript}"

Istruzioni:
1. Calcola una stima di accuratezza percentuale (0-100%). Sii benevolo ma attento ai suoni difficili dell'italiano (doppie, accenti, suoni GL/GN/SC, C/G dolci e dure).
2. Fornisci un feedback vocale caldo e incoraggiante per il bambino in italiano (es. "Fantastico! Hai letto con un bel ritmo. Fai solo un po' più di attenzione alla parola...").
3. Elenca 2 o 3 suggerimenti specifici e parole chiave da riprovare.

Rispondi in formato JSON con lo schema:
{
  "score": number, // tra 0 e 100
  "feedback": string,
  "suggestions": string[]
}`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const parsed = JSON.parse(response.text || '{}');
      res.json(parsed);
    } catch (error: any) {
      console.error('Reading Eval Error:', error);
      res.status(500).json({ error: error.message || 'Errore nella valutazione della lettura.' });
    }
  });

  // Vite middleware for dev
  if (process.env.NODE_ENV !== 'production') {
    const viteServer = await createViteServer({
      server: { middlewareMode: true, hmr: false }
    });
    app.use(viteServer.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Accademia d'Italiano backend ready on port ${port}`);
  });
}

startServer();

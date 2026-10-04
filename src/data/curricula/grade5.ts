import { WeeklyModule } from '../../types';

export const GRADE_5_MODULES: WeeklyModule[] = [
  {
    weekNumber: 1,
    grade: '5_elem',
    title: "L'Officina della Sintassi e dei Complementi",
    description: "Benvenuto in 5ª Elementare! Padroneggia l'analisi logica completa: soggetto sottinteso, predicato nominale e complementi diretti e indiretti!",
    icon: "feather",
    days: {
      lunedi: {
        day: "lunedi",
        topic: "L'Analisi Grammaticale Completa delle 9 Parti del Discorso",
        words_of_the_day: [
          {
            word: "Consapevolezza",
            definition: "La lucida coscienza e conoscenza profonda di se stessi e della realtà.",
            example: "Lo studio costante dona una grande consapevolezza delle proprie capacità."
          },
          {
            word: "Eloquenza",
            definition: "L'arte e la grazia di esprimersi a parole con eccezionale efficacia e chiarezza.",
            example: "L'oratore incantò la platea con la sua naturale eloquenza."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Le parti del discorso in italiano sono in totale ___ (5 variabili e 4 invariabili).",
            options: ["nove", "sette", "dieci"],
            correct_answer: "nove",
            hint: "Articolo, nome, aggettivo, pronome, verbo + avverbio, preposizione, congiunzione, interiezione!"
          },
          {
            sentence: "La parola 'velocemente' è un ___ di modo.",
            options: ["avverbio", "aggettivo", "pronome"],
            correct_answer: "avverbio",
            hint: "Gli avverbi modificano il significato del verbo e sono parti invariabili!"
          },
          {
            sentence: "Le preposizioni articolate nascono dall'unione di una preposizione semplice con un ___.",
            options: ["articolo determinativo", "nome proprio", "verbo"],
            correct_answer: "articolo determinativo",
            hint: "Ad esempio: DI + IL = DEL; A + LA = ALLA!"
          }
        ],
        reading_passage: {
          title: "L'eredità di Gutenberg",
          text: "Nel quindicesimo secolo, Johannes Gutenberg inventò la stampa a caratteri mobili in Europa. Questa straordinaria rivoluzione rese i libri accessibili a un pubblico sempre più vasto, permettendo alla conoscenza, alla scienza e alla letteratura di diffondersi rapidamente in tutto il continente.",
          comprehension_questions: [
            {
              question: "Quale celebre invenzione si deve a Gutenberg?",
              options: ["La stampa a caratteri mobili", "La bussola magnetica", "Il cannocchiale astronomico"],
              correct_index: 0
            },
            {
              question: "Quale fu la conseguenza principale di questa invenzione?",
              options: ["La rapida diffusione dei libri e della conoscenza", "La chiusura delle biblioteche", "La scomparsa della scrittura"],
              correct_index: 0
            }
          ]
        }
      },
      martedi: {
        day: "martedi",
        topic: "Predicato Verbale vs Predicato Nominale",
        words_of_the_day: [
          {
            word: "Straordinario",
            definition: "Che esce dall'ordinario per bellezza, grandezza o rarità eccezionale.",
            example: "Gli scienziati hanno fatto una scoperta straordinaria sui fondali oceanici."
          },
          {
            word: "Autentico",
            definition: "Vero, genuino, non contraffatto o imitato.",
            example: "Il museo conserva un autentico manoscritto medievale vergato a mano."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nella frase 'Il cielo è limpido', 'è limpido' è un ___.",
            options: ["predicato nominale", "predicato verbale", "complemento oggetto"],
            correct_answer: "predicato nominale",
            hint: "È formato dal verbo essere (copula) + nome o aggettivo (parte nominale)!"
          },
          {
            sentence: "Nella frase 'L'aquila vola alta tra le vette', 'vola' è un ___.",
            options: ["predicato verbale", "predicato nominale", "attributo"],
            correct_answer: "predicato verbale",
            hint: "Esprime una precisa azione compiuta dal soggetto!"
          },
          {
            sentence: "Nel predicato nominale, la voce del verbo essere si chiama ___.",
            options: ["copula", "soggetto", "legame"],
            correct_answer: "copula",
            hint: "Dal latino 'copula', che significa unione o legame con il nome/aggettivo."
          }
        ],
        reading_passage: {
          title: "Il telescopio di Galileo",
          text: "Galileo Galilei puntò il suo telescopio verso il cielo notturno di Padova nel 1609. Vide con i suoi occhi che la Luna non era liscia e perfetta, ma ruvida e piena di crateri profondi. Quella notte d'inverno cambiò per sempre la storia dell'astronomia moderna.",
          comprehension_questions: [
            {
              question: "Cosa scoprì Galileo osservando la Luna con il telescopio?",
              options: ["Che la superficie lunare era ruvida e piena di crateri", "Che la Luna era fatta di ghiaccio verde", "Che brillava di luce propria"],
              correct_index: 0
            },
            {
              question: "In quale città italiana fece le sue prime osservazioni storiche?",
              options: ["A Padova", "A Genova", "A Palermo"],
              correct_index: 0
            }
          ]
        }
      },
      mercoledi: {
        day: "mercoledi",
        topic: "Il Complemento Oggetto Diretto (Chi? Che cosa?)",
        words_of_the_day: [
          {
            word: "Affascinante",
            definition: "Che attrae e incanta irresistibilmente per grazia o mistero.",
            example: "Il cielo stellato del deserto è uno spettacolo infinitamente affascinante."
          },
          {
            word: "Coltivare",
            definition: "Lavorare la terra per far crescere piante, o sviluppare una passione.",
            example: "È fondamentale coltivare la lettura quotidiana per arricchire la mente."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nella frase 'La maestra spiega la lezione', 'la lezione' è il ___.",
            options: ["complemento oggetto", "soggetto", "predicato nominale"],
            correct_answer: "complemento oggetto",
            hint: "Risponde direttamente alla domanda: spiega che cosa?"
          },
          {
            sentence: "Il complemento oggetto si unisce al verbo ___ preposizioni.",
            options: ["senza", "con", "sempre con"],
            correct_answer: "senza",
            hint: "È un complemento DIRETTO, quindi non richiede preposizioni davanti!"
          },
          {
            sentence: "Solo i verbi ___ possono avere un complemento oggetto diretto.",
            options: ["transitivi", "intransitivi", "impersonali"],
            correct_answer: "transitivi",
            hint: "L'azione 'transita' direttamente dal soggetto all'oggetto."
          }
        ],
        reading_passage: {
          title: "La foresta pluviale",
          text: "La foresta amazzonica ospita milioni di specie animali e vegetali uniche al mondo. Gli alberi secolari proteggono il suolo dall'erosione delle piogge torrenziali e rilasciano ogni giorno immense quantità di ossigeno purissimo nell'atmosfera terrestre.",
          comprehension_questions: [
            {
              question: "Quale funzione ecologica svolgono gli alberi della foresta?",
              options: ["Proteggono il suolo e rilasciano ossigeno", "Asciugano completamente i fiumi", "Bloccano ogni raggio di luce"],
              correct_index: 0
            },
            {
              question: "Cosa rende unica la foresta amazzonica?",
              options: ["La straordinaria biodiversità di animali e piante", "Il clima perennemente gelato", "L'assenza di fiumi"],
              correct_index: 0
            }
          ]
        }
      },
      giovedi: {
        day: "giovedi",
        topic: "I Complementi di Specificazione e di Termine",
        words_of_the_day: [
          {
            word: "Prezioso",
            definition: "Di grande valore materiale, affettivo o morale.",
            example: "Il tempo trascorso con gli amici sinceri è un bene infinitamente prezioso."
          },
          {
            word: "Riconoscenza",
            definition: "Sentimento di gratitudine verso chi ci ha fatto del bene con altruismo.",
            example: "Gli allievi espressero profonda riconoscenza al loro insegnante."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Il complemento di specificazione risponde alle domande: '___?'",
            options: ["Di chi? Di che cosa?", "A chi? A che cosa?", "Dove? Verso dove?"],
            correct_answer: "Di chi? Di che cosa?",
            hint: "È introdotto dalla preposizione 'DI' (semplice o articolata)!"
          },
          {
            sentence: "Nella frase 'Ho regalato un libro a Chiara', 'a Chiara' è il complemento di ___.",
            options: ["termine", "specificazione", "luogo"],
            correct_answer: "termine",
            hint: "Risponde alla domanda: A CHI è destinata l'azione?"
          },
          {
            sentence: "Nella frase 'La bicicletta di Marco è nuova', 'di Marco' è complemento di ___.",
            options: ["specificazione", "agente", "termine"],
            correct_answer: "specificazione",
            hint: "Specifica a chi appartiene o di chi è la bicicletta!"
          }
        ],
        reading_passage: {
          title: "Il violino di Stradivari",
          text: "A Cremona, nel diciottesimo secolo, il maestro liutaio Antonio Stradivari creò violini dal suono ineguagliabile. Selezionava personalmente il legno d'abete rosso delle foreste delle Dolomiti. Ancora oggi, i concertisti di tutto il mondo considerano i suoi strumenti capolavori assoluti dell'acustica.",
          comprehension_questions: [
            {
              question: "In quale città operava il liutaio Antonio Stradivari?",
              options: ["A Cremona", "A Venezia", "A Roma"],
              correct_index: 0
            },
            {
              question: "Quale legno sceglieva per la cassa armonica?",
              options: ["L'abete rosso delle Dolomiti", "Il pino marittimo", "La quercia da sughero"],
              correct_index: 0
            }
          ]
        }
      },
      venerdi: {
        day: "venerdi",
        topic: "I Complementi di Luogo (Stato, Moto) e di Tempo",
        words_of_the_day: [
          {
            word: "Orizzonte",
            definition: "La linea apparente in cui la terra o il mare sembra toccare il cielo.",
            example: "Al tramonto il sole rosso scompare lentamente dietro l'orizzonte marino."
          },
          {
            word: "Anticipazione",
            definition: "L'atto di prevedere o realizzare qualcosa prima del tempo stabilito.",
            example: "L'anticipazione della partenza ci permise di evitare il traffico."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nella frase 'Noi abitiamo a Milano', 'a Milano' è complemento di ___ in luogo.",
            options: ["stato", "moto a", "moto da"],
            correct_answer: "stato",
            hint: "Indica il luogo in cui ci si trova o si risiede fermi!"
          },
          {
            sentence: "Nella frase 'Il treno parte per Roma', 'per Roma' è complemento di ___ a luogo.",
            options: ["moto", "stato", "allontanamento"],
            correct_answer: "moto",
            hint: "Indica un movimento diretto verso una destinazione!"
          },
          {
            sentence: "Nella frase 'Domani mattina faremo un'escursione', 'domani mattina' è complemento di ___ determinato.",
            options: ["tempo", "luogo", "causa"],
            correct_answer: "tempo",
            hint: "Risponde alla domanda: QUANDO si svolgerà l'azione?"
          }
        ],
        reading_passage: {
          title: "Sulle tracce di Marco Polo",
          text: "Nel 1271, il giovane veneziano Marco Polo intraprese con il padre e lo zio uno straordinario viaggio attraverso la Via della Seta verso l'Oriente. Raggiunse la corte del Gran Khan in Cina dopo oltre tre anni di cammino tra deserti infiniti e vette innevate.",
          comprehension_questions: [
            {
              question: "Verso quale impero viaggiò Marco Polo sulla Via della Seta?",
              options: ["Verso la Cina (Corte del Gran Khan)", "Verso le Indie occidentali", "Verso il Polo Nord"],
              correct_index: 0
            },
            {
              question: "Da quale città italiana partì la spedizione?",
              options: ["Da Venezia", "Da Napoli", "Da Pisa"],
              correct_index: 0
            }
          ]
        }
      },
      sabato: {
        day: "sabato",
        topic: "Il Testo Argomentativo e la Sintesi Critica",
        words_of_the_day: [
          {
            word: "Argomentare",
            definition: "Sostenere la propria tesi con prove logiche, dati ed esempi validi.",
            example: "Lo studente ha saputo argomentare la sua opinione con grande rigore."
          },
          {
            word: "Sintesi",
            definition: "La capacità di riassumere i concetti essenziali senza perdere chiarezza.",
            example: "Una buona sintesi mette in luce i punti chiave del lungo trattato."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nel testo argomentativo l'opinione sostenuta dall'autore si chiama ___.",
            options: ["tesi", "antitesi", "conclusione"],
            correct_answer: "tesi",
            hint: "La tesi è l'idea centrale che si vuole dimostrare come vera!"
          },
          {
            sentence: "L'opinione contraria alla propria tesi prende il nome di ___.",
            options: ["antitesi", "ipotesi", "sintesi"],
            correct_answer: "antitesi",
            hint: "È il punto di vista opposto che l'autore intende confutare con prove."
          },
          {
            sentence: "Per collegare logicamente i passaggi di un'argomentazione usiamo i ___ testuali.",
            options: ["connettivi", "punti interrogativi", "sinonimi"],
            correct_answer: "connettivi",
            hint: "Parole come 'inoltre', 'tuttavia', 'pertanto', 'quindi' collegano le idee!"
          }
        ],
        reading_passage: {
          title: "L'importanza delle energie rinnovabili",
          text: "La transizione verso l'energia solare ed eolica è una priorità globale per salvaguardare il clima del nostro pianeta. Ridurre la combustione dei combustibili fossili non solo riduce l'inquinamento atmosferico nelle nostre città, ma protegge anche la salute delle generazioni future.",
          comprehension_questions: [
            {
              question: "Qual è la tesi principale sostenuta nel testo?",
              options: ["L'importanza fondamentale delle energie rinnovabili per il clima", "La necessità di consumare più carbone", "L'inutilità dei pannelli solari"],
              correct_index: 0
            },
            {
              question: "Quale beneficio immediato porta l'energia pulita nelle città?",
              options: ["La riduzione dell'inquinamento dell'aria", "L'aumento del costo dei trasporti", "La diminuzione degli alberi"],
              correct_index: 0
            }
          ]
        }
      }
    },
    weeklyTest: {
      title: "Gran Torneo dei Campioni di 5ª Elementare!",
      description: "10 quesiti avanzati di analisi logica e grammaticale per vincere la Coppa della Scuola Primaria!",
      questions: [
        {
          id: "g5_q1",
          question: "Nella frase 'La musica rilassa la mente', che funzione logica ha 'la mente'?",
          options: ["Complemento oggetto", "Soggetto", "Complemento di termine", "Predicato nominale"],
          correct_index: 0,
          explanation: "'La mente' risponde alla domanda: rilassa che cosa? È complemento oggetto diretto!"
        },
        {
          id: "g5_q2",
          question: "Quale tra le seguenti frasi contiene un PREDICATO NOMINALE?",
          options: ["Il mare è calmo e cristallino.", "Il capitano governa il timone.", "I gabbiani volano sulle onde.", "Il pescatore getta le reti."],
          correct_index: 0,
          explanation: "'È calmo e cristallino' è formato da copula (verbo essere) + aggettivo!"
        },
        {
          id: "g5_q3",
          question: "A quale domanda risponde il COMPLEMENTO DI TERMINE?",
          options: ["A chi? A che cosa?", "Di chi? Di che cosa?", "Dove? In quale luogo?", "Per quale motivo?"],
          correct_index: 0,
          explanation: "Il complemento di termine risponde a: a chi? a che cosa?"
        },
        {
          id: "g5_q4",
          question: "Nella frase 'Il cane di Giorgio abbaia festoso', 'di Giorgio' è complemento di:",
          options: ["Specificazione", "Termine", "Causa", "Compagnia"],
          correct_index: 0,
          explanation: "Specifica di chi è il cane con la preposizione 'di'!"
        },
        {
          id: "g5_q5",
          question: "Quale frase presenta il SOGGETTO SOTTINTESO?",
          options: ["Siamo arrivati in anticipo alla stazione.", "Il treno è partito con dieci minuti di ritardo.", "I passeggeri attendono sul marciapiede.", "La campana suona mezzogiorno."],
          correct_index: 0,
          explanation: "In 'Siamo arrivati' il soggetto 'Noi' non è espresso a parole, è sottinteso!"
        },
        {
          id: "g5_q6",
          question: "Che tipo di parola è 'GENTILMENTE' nell'analisi grammaticale?",
          options: ["Avverbio di modo", "Aggettivo qualificativo", "Preposizione semplice", "Nome comune"],
          correct_index: 0,
          explanation: "Tutte le parole che terminano in -mente derivate da aggettivi sono avverbi di modo!"
        },
        {
          id: "g5_q7",
          question: "Nella frase 'Corro verso il parco', 'verso il parco' è complemento di:",
          options: ["Moto a luogo", "Stato in luogo", "Moto da luogo", "Tempo continuato"],
          correct_index: 0,
          explanation: "Indica un movimento diretto verso una meta: moto a luogo!"
        },
        {
          id: "g5_q8",
          question: "Quale tra queste è una CONGIUNZIONE subordinante causale?",
          options: ["Poiché", "E", "O", "Tuttavia"],
          correct_index: 0,
          explanation: "'Poiché' introduce la causa o la motivazione di un'azione!"
        },
        {
          id: "g5_q9",
          question: "Nel testo argomentativo, come si chiama la spiegazione che confuta l'antitesi?",
          options: ["Confutazione con prove a favore della tesi", "Esordio descrittivo", "Punto e virgola", "Scioglimento favolistico"],
          correct_index: 0,
          explanation: "La confutazione dimostra l'infondatezza dell'antitesi tramite argomenti solidi!"
        },
        {
          id: "g5_q10",
          question: "Quale tra queste opzioni contiene solo preposizioni articolate?",
          options: ["Dello, sulla, negli, ai", "Di, a, da, in", "Anche, oppure, ma, se", "Molto, poco, troppo, assai"],
          correct_index: 0,
          explanation: "Dello, sulla, negli, ai sono composte da preposizione + articolo determinativo!"
        }
      ]
    }
  }
];

import { WeeklyModule } from '../../types';

export const GRADE_1_MODULES: WeeklyModule[] = [
  {
    weekNumber: 1,
    grade: '1_elem',
    title: "Il Regno delle Vocali e delle Prime Sillabe",
    description: "Benvenuto in 1ª Elementare! Scopri le vocali cantanti e le prime sillabe magiche con M, L, P e T!",
    icon: "feather",
    days: {
      lunedi: {
        day: "lunedi",
        topic: "Le Vocali Magiche: A, E, I, O, U",
        words_of_the_day: [
          {
            word: "Albero",
            definition: "Pianta grande con tronco di legno, rami e tante foglie verdi.",
            example: "Sull'albero del giardino canta un piccolo uccellino."
          },
          {
            word: "Orsetto",
            definition: "Cucciolo di orso, oppure morbido peluche con cui fare la nanna.",
            example: "L'orsetto di peluche è morbido e tiene tanta compagnia."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "La farfalla vola su una bellissima rosa ___.",
            options: ["rossa", "giallo", "blu"],
            correct_answer: "rossa",
            hint: "La vocale finale di 'rosa' concorda con 'rossa'!"
          },
          {
            sentence: "Nel cielo azzurro brilla un caldo ___.",
            options: ["sole", "luna", "stella"],
            correct_answer: "sole",
            hint: "Inizia con la S e scalda tutta la terra!"
          },
          {
            sentence: "Il gattino beve il latte nella sua ___.",
            options: ["ciotola", "scarpa", "matita"],
            correct_answer: "ciotola",
            hint: "È il piattino fondo dove mangiano gli animali domestici."
          }
        ],
        reading_passage: {
          title: "La mela rossa di Leo",
          text: "Leo ha una mela rossa. La mela è rotonda, dolce e profumata. Leo la lava bene sotto l'acqua fresca del rubinetto e ne dà un pezzetto al suo cagnolino Tobia. Tobia scodinzola felice sul prato.",
          comprehension_questions: [
            {
              question: "Di che colore è la mela di Leo?",
              options: ["Rossa", "Verde", "Gialla"],
              correct_index: 0
            },
            {
              question: "A chi regala un pezzetto di mela Leo?",
              options: ["Al cagnolino Tobia", "Al gatto Silvestro", "Al suo compagno di banco"],
              correct_index: 0
            }
          ]
        }
      },
      martedi: {
        day: "martedi",
        topic: "La Famiglia della M: MA, ME, MI, MO, MU",
        words_of_the_day: [
          {
            word: "Mamma",
            definition: "La persona che ci vuole bene e ci protegge fin dalla nascita.",
            example: "La mamma prepara una torta squisita per merenda."
          },
          {
            word: "Musica",
            definition: "Insieme di suoni armoniosi e canzoncine piacevoli da ascoltare.",
            example: "Ascoltiamo una musica allegra e battiamo le mani a tempo."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nel prato verde bruca una simpatica ___.",
            options: ["mucca", "muro", "miele"],
            correct_answer: "mucca",
            hint: "Inizia con MU e fa 'Muuu'!"
          },
          {
            sentence: "La maestra legge una favola con voce ___.",
            options: ["dolce", "salata", "aspra"],
            correct_answer: "dolce",
            hint: "È una voce calma, gentile e rassicurante."
          },
          {
            sentence: "A colazione spalmo sul pane il buon ___.",
            options: ["miele", "matita", "maglia"],
            correct_answer: "miele",
            hint: "Lo producono le operose api nei loro alveari!"
          }
        ],
        reading_passage: {
          title: "Milo e il gomitolo",
          text: "Milo è un gattino bianco con una macchia nera sul naso. Oggi ha trovato un gomitolo di lana colorata. Ci gioca con le zampette e lo fa rotolare sotto il letto. Che allegro disordine!",
          comprehension_questions: [
            {
              question: "Che animale è Milo?",
              options: ["Un gattino", "Un cagnolino", "Un coniglietto"],
              correct_index: 0
            },
            {
              question: "Con che cosa gioca Milo?",
              options: ["Con un gomitolo di lana", "Con una palla di ferro", "Con una macchinina"],
              correct_index: 0
            }
          ]
        }
      },
      mercoledi: {
        day: "mercoledi",
        topic: "La Famiglia della L: LA, LE, LI, LO, LU",
        words_of_the_day: [
          {
            word: "Luna",
            definition: "Il satellite che illumina la notte con la sua luce d'argento.",
            example: "Stanotte la luna piena rischiara tutto il villaggio."
          },
          {
            word: "Libro",
            definition: "Insieme di fogli stampati con storie e illustrazioni colorate.",
            example: "Apro il mio libro illustrato preferito prima di dormire."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nel bosco canta un piccolo ___ grigio.",
            options: ["lupo", "limone", "letto"],
            correct_answer: "lupo",
            hint: "Inizia con LU e ulula alla luna!"
          },
          {
            sentence: "La limonata fresca è fatta con il succo di ___.",
            options: ["limone", "lampada", "lana"],
            correct_answer: "limone",
            hint: "Un agrume giallo, profumato e aspro."
          },
          {
            sentence: "Accendiamo la ___ per leggere bene la sera.",
            options: ["lampada", "latte", "lago"],
            correct_answer: "lampada",
            hint: "Fa luce sulla scrivania quando fa buio."
          }
        ],
        reading_passage: {
          title: "La lucertola Lulù",
          text: "La lucertola Lulù ama prendere il sole sopra un muretto di sasso. Quando sente un rumore leggero, muove la testolina e scatta veloce tra le foglioline d'erba. È svelta come un lampo!",
          comprehension_questions: [
            {
              question: "Cosa ama fare la lucertola Lulù?",
              options: ["Prendere il sole sul muretto", "Nuotare nel lago profondo", "Dormire sugli alberi"],
              correct_index: 0
            },
            {
              question: "Come si muove quando sente un rumore?",
              options: ["Scatta veloce come un lampo", "Cammina lentissima", "Si mette a cantare"],
              correct_index: 0
            }
          ]
        }
      },
      giovedi: {
        day: "giovedi",
        topic: "La Famiglia della P: PA, PE, PI, PO, PU",
        words_of_the_day: [
          {
            word: "Palla",
            definition: "Oggetto sferico leggero che rimbalza, usato per giocare.",
            example: "I bambini calciano la palla colorata sul prato della scuola."
          },
          {
            word: "Ponte",
            definition: "Costruzione solida che permette di attraversare un fiume o una strada.",
            example: "Il treno attraversa il lungo ponte di pietra sopra il fiume."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Il fornaio sforna ogni mattina il ___ caldo e croccante.",
            options: ["pane", "pesce", "pino"],
            correct_answer: "pane",
            hint: "Inizia con PA ed è buono con la marmellata!"
          },
          {
            sentence: "Nel mare nuota un piccolo ___ argentato.",
            options: ["pesce", "pera", "ponte"],
            correct_answer: "pesce",
            hint: "Respira sott'acqua con le branchie e ha le pinne."
          },
          {
            sentence: "Sull'albero del frutteto matura una dolce ___ gialla.",
            options: ["pera", "penna", "porta"],
            correct_answer: "pera",
            hint: "Frutto gustoso con la buccia liscia e forma allungata."
          }
        ],
        reading_passage: {
          title: "Il pulcino Pio",
          text: "Un piccolo pulcino giallo di nome Pio pigola allegramente nell'aia. La mamma chioccia lo chiama per beccare insieme dei chicchi di grano dorato. Pio corre veloce sulle sue zampette sottili.",
          comprehension_questions: [
            {
              question: "Di che colore è il pulcino Pio?",
              options: ["Giallo", "Verde", "Blu"],
              correct_index: 0
            },
            {
              question: "Cosa chiama a beccare la mamma chioccia?",
              options: ["Chicchi di grano dorato", "Pezzetti di mela", "Erba fresca"],
              correct_index: 0
            }
          ]
        }
      },
      venerdi: {
        day: "venerdi",
        topic: "La Famiglia della T: TA, TE, TI, TO, TU",
        words_of_the_day: [
          {
            word: "Tavolo",
            definition: "Mobile con piano orizzontale e quattro gambe dove si mangia o studia.",
            example: "Apparecchiamo il tavolo con la tovaglia a quadretti per la cena."
          },
          {
            word: "Tartaruga",
            definition: "Animale calmo e pacifico che porta una corazza protettiva sulla schiena.",
            example: "La tartaruga cammina piano piano tra i cespugli del giardino."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Per il compleanno la nonna ha preparato una ___ al cioccolato.",
            options: ["torta", "topo", "tenda"],
            correct_answer: "torta",
            hint: "Inizia con TO e sopra ci sono le candeline da spegnere!"
          },
          {
            sentence: "Nel prato campeggiamo montando una comoda ___.",
            options: ["tenda", "tazza", "treno"],
            correct_answer: "tenda",
            hint: "Fatta di tessuto robusto, ideale per dormire sotto le stelle."
          },
          {
            sentence: "Il ___ viaggia veloce sulle rotaie di ferro.",
            options: ["treno", "topo", "tavolo"],
            correct_answer: "treno",
            hint: "Ha tanti vagoni e fischia prima di entrare in stazione!"
          }
        ],
        reading_passage: {
          title: "Il topolino Tino",
          text: "Il topolino Tino abita in una casetta sotto la radice di una grande quercia. Ha baffetti lunghi e orecchie rotonde. Quando non c'è nessuno in cucina, trova una briciola di formaggio squisito e fa una festa!",
          comprehension_questions: [
            {
              question: "Dove abita il topolino Tino?",
              options: ["Sotto la radice di una quercia", "In cima a un grattacielo", "Dentro una scarpa da tennis"],
              correct_index: 0
            },
            {
              question: "Cosa trova Tino in cucina?",
              options: ["Una briciola di formaggio", "Un piatto di pasta", "Una caramella gommosa"],
              correct_index: 0
            }
          ]
        }
      },
      sabato: {
        day: "sabato",
        topic: "Le Prime Paroline Intere e i Nomi di Animali",
        words_of_the_day: [
          {
            word: "Cane",
            definition: "L'amico a quattro zampe più fedele dell'essere umano.",
            example: "Il cane scodinzola felice quando rientro da scuola."
          },
          {
            word: "Gatto",
            definition: "Felino agile e curioso con baffi sensibili che fa le fusa.",
            example: "Il gatto si arrampica agile sull'albero del cortile."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Il leone è considerato il re della ___.",
            options: ["foresta", "città", "scuola"],
            correct_answer: "foresta",
            hint: "Un grande bosco pieno di animali selvatici!"
          },
          {
            sentence: "La farfalla vola leggera sopra i petali di un ___.",
            options: ["fiore", "muro", "foglio"],
            correct_answer: "fiore",
            hint: "Profumato e colorato, attira api e farfalle."
          },
          {
            sentence: "A scuola scriviamo sul quaderno con la ___.",
            options: ["matita", "forchetta", "spugna"],
            correct_answer: "matita",
            hint: "Ha la mina di grafite e si può cancellare con la gomma."
          }
        ],
        reading_passage: {
          title: "Amici nel prato",
          text: "Oggi splende un sole magnifico. Nel prato fiorito, il cane Fido e il gatto Birba giocano a rincorrersi senza litigare. Si fermano vicini all'ombra di un grande pino per riposare sereni.",
          comprehension_questions: [
            {
              question: "Chi sono i due amici nel prato?",
              options: ["Fido e Birba (un cane e un gatto)", "Un leone e una tigre", "Due pesciolini nel mare"],
              correct_index: 0
            },
            {
              question: "Dove si fermano a riposare?",
              options: ["All'ombra di un grande pino", "Dentro una tana stretta", "Sotto la pioggia battente"],
              correct_index: 0
            }
          ]
        }
      }
    },
    weeklyTest: {
      title: "Torneo delle Sillabe di 1ª Elementare!",
      description: "Dimostra di essere un campione delle prime sillabe e delle parole magiche! 10 quiz divertenti.",
      questions: [
        {
          id: "g1_q1",
          question: "Quale tra queste è una VOCALE?",
          options: ["A", "M", "P", "T"],
          correct_index: 0,
          explanation: "Le vocali italiane sono cinque: A, E, I, O, U!"
        },
        {
          id: "g1_q2",
          question: "Come si scrive la sillaba iniziale della parola 'MELA'?",
          options: ["ME", "MA", "MI", "MO"],
          correct_index: 0,
          explanation: "La parola 'Mela' inizia con la sillaba ME!"
        },
        {
          id: "g1_q3",
          question: "Quale parola inizia con la sillaba 'LU'?",
          options: ["Luna", "Lana", "Lino", "Limone"],
          correct_index: 0,
          explanation: "L + U forma la sillaba LU di 'Luna'!"
        },
        {
          id: "g1_q4",
          question: "Quale animale fa il verso 'Muuu'?",
          options: ["La mucca", "La pecora", "Il cane", "La gallina"],
          correct_index: 0,
          explanation: "La mucca bruca nel prato e fa Muuu!"
        },
        {
          id: "g1_q5",
          question: "Completa la parola: PA + ___ = PANE",
          options: ["NE", "ME", "TE", "LE"],
          correct_index: 0,
          explanation: "PA seguito da NE forma la parola PANE!"
        },
        {
          id: "g1_q6",
          question: "Quale tra queste parole contiene la sillaba 'TO'?",
          options: ["Topo", "Mela", "Pera", "Lana"],
          correct_index: 0,
          explanation: "La parola TOPO inizia proprio con TO!"
        },
        {
          id: "g1_q7",
          question: "Cosa usiamo a scuola per cancellare i segni di matita?",
          options: ["La gomma", "Il righello", "Le forbici", "Lo zaino"],
          correct_index: 0,
          explanation: "La morbida gomma cancella gli errori sul foglio!"
        },
        {
          id: "g1_q8",
          question: "Quale parola finisce con la vocale 'O'?",
          options: ["Albero", "Mela", "Casa", "Rosa"],
          correct_index: 0,
          explanation: "La parola 'Albero' termina con la vocale O!"
        },
        {
          id: "g1_q9",
          question: "Cosa brilla alto nel cielo durante il giorno e dona calore?",
          options: ["Il sole", "La luna", "La stella cometa", "La nuvola"],
          correct_index: 0,
          explanation: "Il sole splende di giorno nel cielo azzurro!"
        },
        {
          id: "g1_q10",
          question: "Quale tra queste parole è scritta correttamente?",
          options: ["Tavolo", "Tavollo", "Tavulo", "Tafolo"],
          correct_index: 0,
          explanation: "'Tavolo' si scrive con T, V e L senza doppie!"
        }
      ]
    }
  }
];

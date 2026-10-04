import { WeeklyModule } from '../../types';

export const GRADE_3_MODULES: WeeklyModule[] = [
  {
    weekNumber: 1,
    grade: '3_elem',
    title: "Il Castello dei Nomi, degli Aggettivi e dei Verbi",
    description: "Benvenuto in 3ª Elementare! Esplora le parti del discorso: nomi comuni e propri, aggettivi qualificativi, il tempo dei verbi e la frase minima!",
    icon: "feather",
    days: {
      lunedi: {
        day: "lunedi",
        topic: "I Nomi: Comuni, Propri, Concreti e Astratti",
        words_of_the_day: [
          {
            word: "Generosità",
            definition: "La qualità nobile di chi dona con gioia agli altri senza chiedere nulla in cambio.",
            example: "La generosità di Matteo ha reso felice il suo compagno in difficoltà."
          },
          {
            word: "Meraviglia",
            definition: "Sentimento vivo di sorpresa, stupore e gioia di fronte a qualcosa di straordinario.",
            example: "I bambini guardarono con meraviglia lo spettacolo pirotecnico nel cielo."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "___ è la capitale d'Italia, una città ricca di monumenti antichi.",
            options: ["Roma", "roma", "città"],
            correct_answer: "Roma",
            hint: "I nomi propri di città si scrivono sempre con la lettera maiuscola!"
          },
          {
            sentence: "Il cane e il gatto sono nomi ___ di animali.",
            options: ["comuni", "propri", "astratti"],
            correct_answer: "comuni",
            hint: "Indicano in modo generale qualsiasi animale della loro specie."
          },
          {
            sentence: "La parola 'felicità' è un nome ___ perché indica un sentimento e non si può toccare.",
            options: ["astratto", "concreto", "proprio"],
            correct_answer: "astratto",
            hint: "I nomi astratti indicano emozioni, idee e concetti mentali."
          }
        ],
        reading_passage: {
          title: "Il viaggio di Leonardo",
          text: "Leonardo è un bambino curioso che abita a Firenze. Ogni sabato visita con suo nonno i musei d'arte della città. Si incanta davanti ai dipinti antichi e alle grandi sculture di marmo bianco. Da grande sogna di diventare un bravo restauratore.",
          comprehension_questions: [
            {
              question: "In quale città abita Leonardo?",
              options: ["A Firenze", "A Napoli", "A Milano"],
              correct_index: 0
            },
            {
              question: "Cosa sogna di fare Leonardo da grande?",
              options: ["Il restauratore d'arte", "Il calciatore", "Il marinaio"],
              correct_index: 0
            }
          ]
        }
      },
      martedi: {
        day: "martedi",
        topic: "Gli Aggettivi Qualificativi: Come Sono le Cose",
        words_of_the_day: [
          {
            word: "Luminoso",
            definition: "Pieno di luce brillante e splendente che rischiara ogni cosa.",
            example: "Un raggio luminoso entra dalla finestra e sveglia la stanza."
          },
          {
            word: "Fragoroso",
            definition: "Molto rumoroso, che produce un boato potente come un tuono.",
            example: "Un applauso fragoroso accolse i piccoli attori al termine della recita."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "La neve caduta nella notte è candida e ___.",
            options: ["soffice", "dura", "salata"],
            correct_answer: "soffice",
            hint: "È morbida e soffice al tatto!"
          },
          {
            sentence: "Il leone ruggisce nella savana con una voce ___ e potente.",
            options: ["fiera", "timida", "silenziosa"],
            correct_answer: "fiera",
            hint: "Esprime forza, coraggio e maestosità."
          },
          {
            sentence: "Il tè caldo al limone ha un aroma ___ e rinvigorente.",
            options: ["profumato", "invisibile", "ruvido"],
            correct_answer: "profumato",
            hint: "Emana un gradevole odore agrumato."
          }
        ],
        reading_passage: {
          title: "La volpe argentata",
          text: "Nel cuore della foresta innevata viveva una volpe dal pelo argentato. Era astuta, agile e veloce. Con le sue zampe leggere non lasciava quasi tracce sulla neve fresca. Quando incontrava gli altri animali del bosco, li osservava con i suoi occhi vispi e intelligenti.",
          comprehension_questions: [
            {
              question: "Di che colore era il pelo della volpe?",
              options: ["Argentato", "Marrone scuro", "Giallo acceso"],
              correct_index: 0
            },
            {
              question: "Come erano i suoi occhi?",
              options: ["Vispi e intelligenti", "Stanchi e tristi", "Chiusi nel sonno"],
              correct_index: 0
            }
          ]
        }
      },
      mercoledi: {
        day: "mercoledi",
        topic: "I Verbi e le Tre Coniugazioni (-are, -ere, -ire)",
        words_of_the_day: [
          {
            word: "Esplorare",
            definition: "Viaggiare in luoghi sconosciuti per conoscerli e studiarli a fondo.",
            example: "I marinai decisero di esplorare l'isola misteriosa alla ricerca d'acqua."
          },
          {
            word: "Condividere",
            definition: "Dividere con altri le proprie cose, il tempo o un'esperienza piacevole.",
            example: "È bello condividere la merenda con i propri compagni di gioco."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Il verbo 'giocare' appartiene alla ___ coniugazione (-are).",
            options: ["prima", "seconda", "terza"],
            correct_answer: "prima",
            hint: "I verbi che finiscono in -ARE appartengono alla 1ª coniugazione!"
          },
          {
            sentence: "Il verbo 'leggere' appartiene alla ___ coniugazione (-ere).",
            options: ["seconda", "prima", "terza"],
            correct_answer: "seconda",
            hint: "I verbi in -ERE appartengono alla 2ª coniugazione!"
          },
          {
            sentence: "Il verbo 'dormire' appartiene alla ___ coniugazione (-ire).",
            options: ["terza", "prima", "seconda"],
            correct_answer: "terza",
            hint: "I verbi in -IRE appartengono alla 3ª coniugazione!"
          }
        ],
        reading_passage: {
          title: "Il falegname Mastro Giorgio",
          text: "Mastro Giorgio lavora nella sua bottega artigiana dall'alba al tramonto. Leviga assi di legno profumato, misura con precisione millimetrica e costruisce tavoli robusti per le famiglie del paese. Lavorare con passione è per lui la gioia più grande.",
          comprehension_questions: [
            {
              question: "Quale mestiere fa Mastro Giorgio?",
              options: ["Il falegname", "Il fornaio", "L'orologiaio"],
              correct_index: 0
            },
            {
              question: "Cosa costruisce per le famiglie del paese?",
              options: ["Tavoli robusti", "Scarpe di cuoio", "Vasi di ceramica"],
              correct_index: 0
            }
          ]
        }
      },
      giovedi: {
        day: "giovedi",
        topic: "Il Tempo dei Verbi: Passato, Presente e Futuro",
        words_of_the_day: [
          {
            word: "Ieri",
            definition: "Il giorno precedente a quello in cui siamo, che appartiene al passato.",
            example: "Ieri abbiamo concluso tutti i compiti di italiano con il sorriso."
          },
          {
            word: "Domani",
            definition: "Il giorno successivo a oggi, che indica un'azione futura.",
            example: "Domani andremo in gita didattica al parco naturale."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Oggi io ___ con impegno la lezione di scienze.",
            options: ["studio", "studiai", "studierò"],
            correct_answer: "studio",
            hint: "'Oggi' indica un'azione che avviene adesso, cioè al tempo PRESENTE!"
          },
          {
            sentence: "L'anno scorso noi ___ le vacanze estive al mare.",
            options: ["trascorremmo", "trascorriamo", "trascorreremo"],
            correct_answer: "trascorremmo",
            hint: "'L'anno scorso' indica un tempo PASSATO concluso!"
          },
          {
            sentence: "La prossima settimana i ragazzi ___ la partita di basket.",
            options: ["giocheranno", "giocavano", "giocano"],
            correct_answer: "giocheranno",
            hint: "'La prossima settimana' riguarda il tempo FUTURO!"
          }
        ],
        reading_passage: {
          title: "Il castagno secolare",
          text: "Molti anni fa un contadino piantò un piccolo seme nella terra fertile. Con il passare del tempo, il seme è cresciuto ed è diventato un maestoso castagno. Oggi offre ombra fresca ai viandanti e in futuro donerà ancora frutti dolci alle generazioni che verranno.",
          comprehension_questions: [
            {
              question: "Cosa piantò il contadino molti anni fa?",
              options: ["Un piccolo seme di castagno", "Una spiga di grano", "Un fiore di girasole"],
              correct_index: 0
            },
            {
              question: "Cosa offre oggi l'albero ai viandanti?",
              options: ["Ombra fresca", "Legna da ardere", "Riparo dalla pioggia"],
              correct_index: 0
            }
          ]
        }
      },
      venerdi: {
        day: "venerdi",
        topic: "La Frase Minima e le Espansioni (Soggetto + Predicato)",
        words_of_the_day: [
          {
            word: "Protagonista",
            definition: "Il personaggio principale di una storia, intorno a cui ruotano gli eventi.",
            example: "Il valoroso cavaliere è il protagonista di questa leggenda medievale."
          },
          {
            word: "Dettaglio",
            definition: "Piccolo particolare preciso che arricchisce e rende chiara una descrizione.",
            example: "La pittrice dipinge ogni minimo dettaglio delle ali della farfalla."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nella frase 'Il cane abbaia nel giardino', la frase minima è '___'.",
            options: ["Il cane abbaia", "Nel giardino", "Il cane nel giardino"],
            correct_answer: "Il cane abbaia",
            hint: "La frase minima è formata solo da Soggetto (chi compie l'azione) + Predicato (l'azione)!"
          },
          {
            sentence: "Nella frase 'I pesci nuotano', la parola 'nuotano' è il ___.",
            options: ["predicato verbale", "soggetto", "nome comune"],
            correct_answer: "predicato verbale",
            hint: "Il predicato verbale dice che cosa fa il soggetto!"
          },
          {
            sentence: "Aggiungendo 'sul prato verde' alla frase minima facciamo una ___.",
            options: ["espansione", "sottrazione", "doppia"],
            correct_answer: "espansione",
            hint: "Le espansioni o complementi arricchiscono di dettagli la frase minima!"
          }
        ],
        reading_passage: {
          title: "L'aquilone nel vento",
          text: "Il vento soffiava vigoroso sulla collina. Marco e suo fratello hanno srotolato il filo di nylon e l'aquilone di seta multicolore si è librato in alto nel cielo limpido. Danzava tra le nuvole bianche come un uccello maestoso.",
          comprehension_questions: [
            {
              question: "Dove soffiava il vento vigoroso?",
              options: ["Sulla collina", "In fondo al mare", "Nel cortile coperto"],
              correct_index: 0
            },
            {
              question: "Di che materiale era l'aquilone?",
              options: ["Di seta multicolore", "Di cartone pesante", "Di legno di pino"],
              correct_index: 0
            }
          ]
        }
      },
      sabato: {
        day: "sabato",
        topic: "La Punteggiatura: Punto, Virgola, Due Punti e Virgolette",
        words_of_the_day: [
          {
            word: "Punteggiatura",
            definition: "Insieme dei segni grafici che danno ritmo, respiro e chiarezza alla scrittura.",
            example: "Una corretta punteggiatura rende il testo facile e piacevole da leggere."
          },
          {
            word: "Dialogo",
            definition: "Conversazione parlata tra due o più persone che si scambiano idee.",
            example: "I due esploratori intavolarono un fitto dialogo davanti alla mappa."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Al termine di una frase completa mettiamo sempre il ___.",
            options: ["punto fermo", "punto interrogativo", "trattino"],
            correct_answer: "punto fermo",
            hint: "Indica una pausa forte e chiude il pensiero della frase!"
          },
          {
            sentence: "Per separare gli elementi di un elenco usiamo la ___.",
            options: ["virgola", "parentesi", "doppia"],
            correct_answer: "virgola",
            hint: "Rappresenta una breve pausa di respiro all'interno della frase."
          },
          {
            sentence: "Prima di aprire le virgolette per far parlare un personaggio usiamo i ___.",
            options: ["due punti", "punti di sospensione", "punti esclamativi"],
            correct_answer: "due punti",
            hint: "I due punti introducono il discorso diretto o una spiegazione!"
          }
        ],
        reading_passage: {
          title: "La scoperta nella soffitta",
          text: "Durante un pomeriggio di pioggia, Marta salì in soffitta. Trovò un vecchio baule di legno con serratura d'ottone. Lo aprì con cura e disse con emozione: 'Ecco le antiche lettere di nonna Adele!'. C'erano foto d'epoca e cartoline da terre lontane.",
          comprehension_questions: [
            {
              question: "Dove salì Marta nel pomeriggio di pioggia?",
              options: ["In soffitta", "In cantina", "Nel garage"],
              correct_index: 0
            },
            {
              question: "Cosa trovò all'interno del vecchio baule?",
              options: ["Antiche lettere, foto e cartoline", "Attrezzi da lavoro", "Un costume da clown"],
              correct_index: 0
            }
          ]
        }
      }
    },
    weeklyTest: {
      title: "Torneo dei Maestri di Grammatica di 3ª Elementare!",
      description: "10 quiz entusiasmanti su nomi, aggettivi, verbi e punteggiatura per conquistare il Trofeo di 3ª!",
      questions: [
        {
          id: "g3_q1",
          question: "Quale tra questi è un NOME PROPRIO?",
          options: ["Giuseppe", "bambino", "maestro", "scuola"],
          correct_index: 0,
          explanation: "'Giuseppe' è un nome proprio di persona e si scrive con l'iniziale maiuscola!"
        },
        {
          id: "g3_q2",
          question: "Quale tra queste parole è un AGGETTIVO QUALIFICATIVO?",
          options: ["Gentile", "Gentilezza", "Gentilmente", "Gentilizio"],
          correct_index: 0,
          explanation: "'Gentile' descrive la qualità di una persona o di un gesto!"
        },
        {
          id: "g3_q3",
          question: "A quale coniugazione appartiene il verbo 'SCRIVERE'?",
          options: ["Seconda coniugazione (-ere)", "Prima coniugazione (-are)", "Terza coniugazione (-ire)", "Coniugazione propria"],
          correct_index: 0,
          explanation: "Tutti i verbi con infinito in -ERE appartengono alla 2ª coniugazione!"
        },
        {
          id: "g3_q4",
          question: "Individua il verbo al tempo FUTURO:",
          options: ["Noi partiremo", "Noi partimmo", "Noi partiamo", "Noi partivamo"],
          correct_index: 0,
          explanation: "'Partiremo' esprime un'azione che deve ancora accadere nel futuro!"
        },
        {
          id: "g3_q5",
          question: "Qual è il SOGGETTO nella frase: 'La rondine vola alta nel cielo limpido'?",
          options: ["La rondine", "Vola", "Nel cielo", "Limpido"],
          correct_index: 0,
          explanation: "'La rondine' è chi compie l'azione di volare, cioè il soggetto!"
        },
        {
          id: "g3_q6",
          question: "Quale segno di punteggiatura si usa per fare una DOMANDA?",
          options: ["Il punto interrogativo (?)", "Il punto esclamativo (!)", "La virgola (,)", "Il punto e virgola (;)"],
          correct_index: 0,
          explanation: "Il punto interrogativo (?) conclude una frase che formula una domanda!"
        },
        {
          id: "g3_q7",
          question: "Quale tra questi è un NOME ASTRATTO?",
          options: ["Pazienza", "Tavolo", "Quaderno", "Gatto"],
          correct_index: 0,
          explanation: "La 'pazienza' è una virtù/concetto della mente, non un oggetto tangibile!"
        },
        {
          id: "g3_q8",
          question: "Completa la frase con l'aggettivo corretto: 'Le bambine sono molto ___'.",
          options: ["attente", "attento", "attenta", "attenti"],
          correct_index: 0,
          explanation: "'Bambine' è femminile plurale, quindi l'aggettivo deve concordare: 'attente'!"
        },
        {
          id: "g3_q9",
          question: "Cosa forma una FRASE MINIMA?",
          options: ["Soggetto + Predicato", "Solo l'aggettivo", "Soggetto + Tre espansioni", "Solo il punto fermo"],
          correct_index: 0,
          explanation: "La frase minima essenziale è costituita dal Soggetto e dal suo Predicato!"
        },
        {
          id: "g3_q10",
          question: "Come si chiamano i segni « » o \" \" usati per far parlare i personaggi?",
          options: ["Virgolette di discorso diretto", "Parentesi tonde", "Puntini di sospensione", "Trattini d'elenco"],
          correct_index: 0,
          explanation: "Le virgolette racchiudono le esatte parole pronunciate dai personaggi!"
        }
      ]
    }
  }
];

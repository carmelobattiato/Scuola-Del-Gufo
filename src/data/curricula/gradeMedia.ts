import { WeeklyModule } from '../../types';

export const GRADE_MEDIA_1_MODULES: WeeklyModule[] = [
  {
    weekNumber: 1,
    grade: '1_media',
    title: "Morfologia Approfondita: Il Sistema Verbale e il Congiuntivo",
    description: "Benvenuto alla Scuola Media! Padroneggia il congiuntivo, il condizionale, le forme verbali attiva, passiva e riflessiva e l'analisi testuale.",
    icon: "feather",
    days: {
      lunedi: {
        day: "lunedi",
        topic: "Il Modo Congiuntivo: Il Modo del Dubbio, del Desiderio e dell'Opinione",
        words_of_the_day: [
          {
            word: "Ineluttabile",
            definition: "Qualcosa a cui non ci si può sottrarre in alcun modo, inevitabile.",
            example: "Il trascorrere delle stagioni è un ciclo naturale ineluttabile."
          },
          {
            word: "Perspicacia",
            definition: "Pronta e acuta capacità di comprendere a fondo le cose con intelligenza vivace.",
            example: "L'investigatore risolse il caso grazie alla sua straordinaria perspicacia."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Credo che tu ___ ragione riguardo alla soluzione del problema.",
            options: ["abbia", "hai", "avrai"],
            correct_answer: "abbia",
            hint: "Dopo verbi di opinione ('credo che', 'penso che') si usa il congiuntivo presente!"
          },
          {
            sentence: "Se io ___ più tempo libero, mi dedicherei alla pittura a olio.",
            options: ["avessi", "ho", "avrei"],
            correct_answer: "avessi",
            hint: "Nel periodo ipotetico dell'irrealtà, dopo il 'se' si usa il congiuntivo imperfetto!"
          },
          {
            sentence: "I tempi del modo congiuntivo sono in totale ___ (due semplici e due composti).",
            options: ["quattro", "sei", "otto"],
            correct_answer: "quattro",
            hint: "Presente, imperfetto, passato e trapassato!"
          }
        ],
        reading_passage: {
          title: "L'incipit de 'I Promessi Sposi'",
          text: "«Quel ramo del lago di Como, che volge a mezzogiorno, tra due catene non interrotte di monti, tutto a seni e a golfi, a seconda dello sporgere e del rientrare di quelli, vien, quasi a un tratto, a ristringersi, e a prender corso e figura di fiume...». Alessandro Manzoni apre il suo capolavoro con una descrizione geografica mirabile e cinematografica.",
          comprehension_questions: [
            {
              question: "Quale celebre romanzo storico si apre con questo brano?",
              options: ["I Promessi Sposi di Alessandro Manzoni", "La Divina Commedia di Dante", "Il Decameron di Boccaccio"],
              correct_index: 0
            },
            {
              question: "Quale elemento naturale viene descritto con precisione topografica?",
              options: ["Il ramo del lago di Como e le montagne circostanti", "Il delta del fiume Po", "Le scogliere della Sicilia"],
              correct_index: 0
            }
          ]
        }
      },
      martedi: {
        day: "martedi",
        topic: "Il Modo Condizionale: Ipotesi, Desiderio e Cortesia",
        words_of_the_day: [
          {
            word: "Cortesia",
            definition: "Garbata gentilezza unita a rispetto ed educazione nel trattare con gli altri.",
            example: "Chiedere un'informazione con cortesia apre sempre le porte del dialogo."
          },
          {
            word: "Plausibile",
            definition: "Che appare credibile, ragionevole e ammissibile alla luce dei fatti.",
            example: "La spiegazione scientifica fornita dal ricercatore è del tutto plausibile."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Mi ___ un bicchiere d'acqua fresca, per favore?",
            options: ["porteresti", "porti", "portassi"],
            correct_answer: "porteresti",
            hint: "Il condizionale presente esprime una richiesta educata e cortese!"
          },
          {
            sentence: "Se avessi studiato con costanza, ___ la verifica con il massimo dei voti.",
            options: ["avrei superato", "superassi", "avevo superato"],
            correct_answer: "avrei superato",
            hint: "Condizionale passato per un'azione ipotetica non realizzata nel passato!"
          },
          {
            sentence: "I tempi del modo condizionale sono ___ (presente e passato).",
            options: ["due", "quattro", "tre"],
            correct_answer: "due",
            hint: "Il condizionale ha solo il tempo presente (semplice) e il passato (composto)!"
          }
        ],
        reading_passage: {
          title: "L'avventura di Ulisse e Polifemo",
          text: "Ulisse, l'eroe dall'ingegno multiforme, approdò con i suoi compagni nella terra dei Ciclopi. Intrappolato nella caverna del gigantesco Polifemo, elaborò un piano astuto: disse al mostro che il suo nome era 'Nessuno' e offrì lui vino puro fino a farlo addormentare, conquistando così la libertà per i suoi uomini.",
          comprehension_questions: [
            {
              question: "Quale falso nome scelse Ulisse per ingannare Polifemo?",
              options: ["Nessuno", "Odisseo", "Achille"],
              correct_index: 0
            },
            {
              question: "Quale virtù eroica caratterizza principalmente Ulisse nell'Odissea?",
              options: ["L'astuzia e l'ingegno brillante", "La sola forza fisica bruta", "La timidezza"],
              correct_index: 0
            }
          ]
        }
      },
      mercoledi: {
        day: "mercoledi",
        topic: "Forma Attiva, Passiva e Riflessiva del Verbo",
        words_of_the_day: [
          {
            word: "Trasformazione",
            definition: "Il mutamento profondo nella forma, nell'aspetto o nella struttura di qualcosa.",
            example: "La crisalide compie una straordinaria trasformazione e diventa farfalla."
          },
          {
            word: "Riflessione",
            definition: "L'atto di rivolgere l'azione su se stessi o meditare profondamente su un pensiero.",
            example: "Un momento di calma riflessione previene decisioni affrettate."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nella frase 'Il quadro fu dipinto da Leonardo', il verbo è in forma ___.",
            options: ["passiva", "attiva", "riflessiva"],
            correct_answer: "passiva",
            hint: "Il soggetto (il quadro) non compie l'azione, ma la subisce!"
          },
          {
            sentence: "Nella frase 'Marco si pettina davanti allo specchio', il verbo è in forma ___.",
            options: ["riflessiva propria", "passiva", "impersonale"],
            correct_answer: "riflessiva propria",
            hint: "Il soggetto compie l'azione e la riceve su se stesso (pettina se stesso)!"
          },
          {
            sentence: "Solo i verbi ___ possono essere trasformati dalla forma attiva a quella passiva.",
            options: ["transitivi", "intransitivi", "difettivi"],
            correct_answer: "transitivi",
            hint: "Perché il complemento oggetto deve poter diventare il nuovo soggetto passivo!"
          }
        ],
        reading_passage: {
          title: "La nascita della lingua italiana volgare",
          text: "Nel 960 dopo Cristo, a Capua, venne redatto il celebre 'Placito Capuano'. Si tratta del primo documento ufficiale scritto in cui compare consapevolmente un volgare italico distinto dal latino: «Sao ko kelle terre, per kelle fini que ki contene...». Fu l'atto di nascita della nostra lingua scritta.",
          comprehension_questions: [
            {
              question: "Qual è il documento considerato l'atto di nascita del volgare italiano?",
              options: ["Il Placito Capuano (960 d.C.)", "Il Cantico delle Creature", "L'Eneide"],
              correct_index: 0
            },
            {
              question: "Da quale antica lingua trae origine la lingua italiana?",
              options: ["Dal latino volgare parlato", "Dal greco antico", "Dall'antico germanico"],
              correct_index: 0
            }
          ]
        }
      },
      giovedi: {
        day: "giovedi",
        topic: "I Modali e gli Ausiliari: Essere, Avere, Dovere, Potere, Volere",
        words_of_the_day: [
          {
            word: "Autonomia",
            definition: "La capacità di governarsi e decidere liberamente con responsabilità personale.",
            example: "Crescendo gli allievi acquisiscono sempre maggiore autonomia nello studio."
          },
          {
            word: "Determinazione",
            definition: "La ferma e costante volontà di raggiungere un traguardo prefissato.",
            example: "Con tenace determinazione la maratoneta ha tagliato per prima il traguardo."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "I verbi 'dovere, potere, volere' usati prima di un infinito si chiamano verbi ___.",
            options: ["servili o modali", "fraseologici", "copulativi"],
            correct_answer: "servili o modali",
            hint: "Si mettono 'al servizio' di un altro verbo all'infinito per indicare dovere, possibilità o volontà!"
          },
          {
            sentence: "Nei tempi composti dei verbi servili, di norma si usa l'ausiliare richiesto dal verbo ___.",
            options: ["retto all'infinito", "soggetto", "riflessivo"],
            correct_answer: "retto all'infinito",
            hint: "Ad esempio: 'Ho voluto mangiare' (mangiare vuole avere), 'Sono dovuto andare' (andare vuole essere)!"
          },
          {
            sentence: "Verbi come 'cominciare a, stare per, finire di' sono detti verbi ___.",
            options: ["fraseologici o aspettuali", "servili", "difettivi"],
            correct_answer: "fraseologici o aspettuali",
            hint: "Indicano la fase temporale (inizio, svolgimento, termine) dell'azione."
          }
        ],
        reading_passage: {
          title: "La Divina Commedia e il viaggio di Dante",
          text: "«Nel mezzo del cammin di nostra vita mi ritrovai per una selva oscura, ché la diritta via era smarrita». Con queste terzine incatenate in endecasillabi, Dante Alighieri dà inizio al più grande viaggio allegorico della letteratura universale attraverso Inferno, Purgatorio e Paradiso.",
          comprehension_questions: [
            {
              question: "Quale schema metrico inventò Dante per la Divina Commedia?",
              options: ["La terzina incatenata di endecasillabi", "L'ottava rima", "I versi sciolti"],
              correct_index: 0
            },
            {
              question: "Quale guida accompagna Dante nei primi due regni dell'Oltretomba?",
              options: ["Il poeta latino Virgilio", "Il filosofo Aristotele", "San Tommaso"],
              correct_index: 0
            }
          ]
        }
      },
      venerdi: {
        day: "venerdi",
        topic: "La Formazione delle Parole: Prefissi, Suffissi e Composti",
        words_of_the_day: [
          {
            word: "Etimologia",
            definition: "La scienza linguistica che indaga l'origine e l'evoluzione storica delle parole.",
            example: "Studiare l'etimologia delle parole apre le porte alla storia delle civiltà."
          },
          {
            word: "Neologismo",
            definition: "Parola o locuzione nuova introdotta di recente nella lingua d'uso.",
            example: "I progressi dell'informatica hanno introdotto molti neologismi nel dizionario."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Aggiungendo il prefisso 'DIS-' alla parola 'onesto' otteniamo l'antònimo '___'.",
            options: ["disonesto", "inonesto", "anonesto"],
            correct_answer: "disonesto",
            hint: "Il prefisso 'dis-' conferisce un valore negativo o contrario alla radice!"
          },
          {
            sentence: "Una parola formata dall'unione di due parole distinte (es. 'capotreno') si dice parola ___.",
            options: ["composta", "derivata", "alterata"],
            correct_answer: "composta",
            hint: "Capo + treno = capotreno: due parole autonome fuse in un unico termine!"
          },
          {
            sentence: "La parola 'librone' rispetto a 'libro' è un nome ___ accrescitivo.",
            options: ["alterato", "falso amico", "composto"],
            correct_answer: "alterato",
            hint: "Le alterazioni aggiungono sfumature di grandezza, piccolezza o simpatia senza mutare il concetto base."
          }
        ],
        reading_passage: {
          title: "La metamorfosi del vocabolario",
          text: "Le lingue umane sono organismi vivi e in continuo mutamento. Nel corso dei secoli l'italiano ha accolto prestiti linguistici dall'arabo nei commerci marittimi, dal francese durante l'Illuminismo e dall'inglese nell'era tecnologica odierna, rinnovando costantemente la propria ricchezza espressiva.",
          comprehension_questions: [
            {
              question: "Perché le lingue sono definite 'organismi vivi'?",
              options: ["Perché cambiano, evolvono e accolgono nuove parole nel tempo", "Perché hanno un cuore che batte", "Perché restano immutabili per sempre"],
              correct_index: 0
            },
            {
              question: "Quale influenza ha arricchito i termini scientifici e tecnologici recenti?",
              options: ["L'influenza dell'inglese contemporaneo", "Il sanscrito antico", "La lingua etrusca"],
              correct_index: 0
            }
          ]
        }
      },
      sabato: {
        day: "sabato",
        topic: "Tecniche di Comprensione e Parafrasi del Testo Antologico",
        words_of_the_day: [
          {
            word: "Parafrasi",
            definition: "La riscrittura in prosa chiara e moderna di un testo poetico o complesso.",
            example: "La parafrasi del sonetto ha reso comprensibile il significato profondo dei versi."
          },
          {
            word: "Registro",
            definition: "Il livello espressivo e lo stile (formale, colloquiale, aulico) adottato nel testo.",
            example: "In una lettera istituzionale è doveroso adottare un registro linguistico formale."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Fare la parafrasi di una poesia significa riscriverla con parole più ___ senza mutarne il senso.",
            options: ["semplici e chiare", "antiche e difficili", "in rima baciata"],
            correct_answer: "semplici e chiare",
            hint: "La parafrasi serve a spiegare e rendere accessibile a tutti il testo poetico originale!"
          },
          {
            sentence: "Il significato letterale e oggettivo di una parola si definisce significato ___.",
            options: ["denotativo", "connotativo", "allegorico"],
            correct_answer: "denotativo",
            hint: "Denotazione è il senso base del dizionario; connotazione sono le sfumature emotive!"
          },
          {
            sentence: "La similitudine è una figura retorica di significato introdotta da parole come '___'.",
            options: ["come, simile a, pare", "invece, ma, tuttavia", "soprattutto, dunque"],
            correct_answer: "come, simile a, pare",
            hint: "Istituisce un paragone esplicito tra due immagini affini!"
          }
        ],
        reading_passage: {
          title: "San Martino del Carso di Ungaretti",
          text: "«Di queste case non è rimasto che qualche brandello di muro. Di tanti che mi corrispondevano non è rimasto neppure tanto. Ma nel cuore nessuna croce manca. È il mio cuore il paese più straziato». Giuseppe Ungaretti condensa nella poesia ermetica il dolore indicibile della prima guerra mondiale.",
          comprehension_questions: [
            {
              question: "A quale drammatico evento storico si riferisce la lirica di Ungaretti?",
              options: ["Alla prima guerra mondiale sul fronte del Carso", "Al Medioevo feudale", "Alla conquista delle Americhe"],
              correct_index: 0
            },
            {
              question: "Cosa simboleggia l'immagine del 'cuore come paese più straziato'?",
              options: ["La ferita interiore indelebile causata dalla perdita degli amici", "Un problema di salute fisica", "Un terremoto naturale"],
              correct_index: 0
            }
          ]
        }
      }
    },
    weeklyTest: {
      title: "Torneo dei Cavalieri della Lingua di 1ª Media!",
      description: "10 quesiti di livello secondario su congiuntivo, condizionale, diatesi verbale e analisi del testo.",
      questions: [
        {
          id: "gm1_q1",
          question: "Quale frase richiede obbligatoriamente il CONGIUNTIVO?",
          options: [
            "Temo che sia troppo tardi per rimediare.",
            "So per certo che il treno arriva in orario.",
            "È evidente che tutti conoscono la risposta.",
            "Affermo che il libro è interessante."
          ],
          correct_index: 0,
          explanation: "Il verbo 'temere' esprime timore/incertezza soggettiva e regge il congiuntivo ('sia')!"
        },
        {
          id: "gm1_q2",
          question: "In quale frase il verbo è coniugato al CONDIZIONALE PASSATO?",
          options: [
            "Avremmo voluto avvisarvi prima della partenza.",
            "Vorremmo partire domani mattina presto.",
            "Volevamo avvisarvi ieri sera.",
            "Se volete, partiamo adesso."
          ],
          correct_index: 0,
          explanation: "'Avremmo voluto' è formato dall'ausiliare al condizionale presente + participio passato!"
        },
        {
          id: "gm1_q3",
          question: "Trasforma all'attivo: 'La notizia fu diffusa dai giornalisti'.",
          options: [
            "I giornalisti diffusero la notizia.",
            "I giornalisti furono diffusi dalla notizia.",
            "La notizia diffondeva i giornalisti.",
            "I giornalisti avevano diffuso la notizia."
          ],
          correct_index: 0,
          explanation: "'Dai giornalisti' (agente) diventa il soggetto attivo 'I giornalisti diffusero'!"
        },
        {
          id: "gm1_q4",
          question: "Quale tra queste è una forma RIFLESSIVA PROPRIA?",
          options: [
            "Luca si lava le mani con accuratezza.",
            "I due pugili si colpiscono sul ring.",
            "La nave si allontana dal porto.",
            "I ragazzi si salutano calorosamente."
          ],
          correct_index: 0,
          explanation: "In 'Luca si lava' l'azione del soggetto ricade direttamente sulla persona stessa!"
        },
        {
          id: "gm1_q5",
          question: "Quale ausiliare richiede il verbo servile nella frase: 'Non (potere) venire alla festa'?",
          options: [
            "Sono potuto venire (venire richiede l'ausiliare essere)",
            "Ho potuto venire",
            "Avrei potuto venire",
            "Ero potuto venire"
          ],
          correct_index: 0,
          explanation: "La norma grammaticale prescrive l'ausiliare richiesto dall'infinito retto (venire = essere)!"
        },
        {
          id: "gm1_q6",
          question: "Come si chiama una parola composta dall'unione di verbo + nome (es. 'portapenne')?",
          options: [
            "Parola composta verbo + nome",
            "Parola alterata peggiorativa",
            "Parola primitiva",
            "Falso alterato"
          ],
          correct_index: 0,
          explanation: "'Porta' (verbo portare) + 'penne' (nome) forma un composto nominale!"
        },
        {
          id: "gm1_q7",
          question: "Identifica la SIMILITUDINE tra le seguenti espressioni:",
          options: [
            "Correva veloce come il vento della steppa.",
            "Quell'uomo è una roccia insormontabile.",
            "Le spighe dorate ballavano nella sera.",
            "Si udiva il sussurro delle onde silenziose."
          ],
          correct_index: 0,
          explanation: "La similitudine è caratterizzata dal nesso esplicito di paragone 'come'!"
        },
        {
          id: "gm1_q8",
          question: "Qual è il tempo del congiuntivo nella voce 'CHE EGLI AVESSE SCRITTO'?",
          options: [
            "Congiuntivo trapassato",
            "Congiuntivo passato",
            "Congiuntivo imperfetto",
            "Indicativo trapassato prossimo"
          ],
          correct_index: 0,
          explanation: "Ausiliare al congiuntivo imperfetto ('avesse') + participio passato = trapassato!"
        },
        {
          id: "gm1_q9",
          question: "Nel registro linguistico formale, come ci si rivolge al preside della scuola?",
          options: [
            "Dando del 'Lei' con formule di rispetto istituzionale",
            "Dando del 'Tu' amichevole e colloquiale",
            "Usando espressioni gergali e dialettali",
            "Senza adoperare forme di saluto"
          ],
          correct_index: 0,
          explanation: "Il registro formale richiede l'allocutivo di cortesia 'Lei' e uno stile controllato ed educato!"
        },
        {
          id: "gm1_q10",
          question: "Cosa distingue una METAFORA da una SIMILITUDINE?",
          options: [
            "La metafora è una similitudine abbreviata senza il termine di paragone 'come'",
            "La metafora usa sempre la rima baciata",
            "La similitudine non ha mai significato poetico",
            "Non c'è alcuna differenza tra le due figure retoriche"
          ],
          correct_index: 0,
          explanation: "La metafora fonde direttamente i due elementi senza usare 'come' o 'sembra'!"
        }
      ]
    }
  }
];

export const GRADE_MEDIA_2_MODULES: WeeklyModule[] = [
  {
    weekNumber: 1,
    grade: '2_media',
    title: "Sintassi della Frase Semplice: Tutti i Complementi",
    description: "2ª Media: Diventa un maestro dell'Analisi Logica! Complementi di causa, fine, mezzo, modo, compagnia, argomento e materia.",
    icon: "feather",
    days: {
      lunedi: {
        day: "lunedi",
        topic: "Complementi di Causa (perché?) e di Fine/Scopo (a che scopo?)",
        words_of_the_day: [
          {
            word: "Incentivo",
            definition: "Stimolo concreto o morale che spinge ad agire con entusiasmo e impegno.",
            example: "Un voto brillante fu un grande incentivo a proseguire con dedizione lo studio."
          },
          {
            word: "Ostacolo",
            definition: "Elemento materiale o morale che si frappone al raggiungimento di un fine.",
            example: "La tenacia permise alla squadra di superare ogni ostacolo imprevisto."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Tremava ___ freddo intenso della notte invernale.",
            options: ["dal", "per il", "al"],
            correct_answer: "per il",
            hint: "Esprime il motivo o la causa scatenante dell'azione!"
          },
          {
            sentence: "Gli atleti si allenano duramente ___ vittoria finale nel torneo.",
            options: ["per la", "dalla", "con la"],
            correct_answer: "per la",
            hint: "Indica l'obiettivo o lo scopo verso cui tende l'azione!"
          },
          {
            sentence: "La domanda 'A quale scopo? Per quale fine?' individua il complemento di ___.",
            options: ["fine o scopo", "causa", "termine"],
            correct_answer: "fine o scopo",
            hint: "Distingui sempre la CAUSA (ciò che provoca l'azione prima) dal FINE (l'obiettivo futuro)!"
          }
        ],
        reading_passage: {
          title: "La spedizione dei Mille",
          text: "Nel maggio del 1860, Giuseppe Garibaldi salpò da Quarto con poco più di mille volontari. Spinti dall'ardente ideale dell'unità d'Italia, i Mille sbarcarono a Marsala per liberare il Mezzogiorno. Quell'impresa leggendaria fu un passo decisivo verso la nascita dello Stato unitario italiano.",
          comprehension_questions: [
            {
              question: "Quale nobile ideale spinse i volontari garibaldini nell'impresa?",
              options: ["L'ardente ideale dell'unità e libertà d'Italia", "La ricerca di ricchezze personali", "La conquista di terre lontane"],
              correct_index: 0
            },
            {
              question: "Da quale località ligure partirono i Mille di Garibaldi?",
              options: ["Da Quarto (Genova)", "Da Livorno", "Da Sanremo"],
              correct_index: 0
            }
          ]
        }
      },
      martedi: {
        day: "martedi",
        topic: "Complementi di Mezzo/Strumento e di Modo/Maniera",
        words_of_the_day: [
          {
            word: "Strumento",
            definition: "Oggetto, attrezzo o mezzo di cui ci si serve per compiere una specifica azione.",
            example: "Il microscopio ottico è uno strumento indispensabile per la ricerca biologica."
          },
          {
            word: "Accuratezza",
            definition: "La meticolosa precisione e diligenza posta nell'esecuzione di un lavoro.",
            example: "Il cartografo disegnò la mappa nautica con estrema accuratezza."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Il chirurgo opera con il ___ di precisione.",
            options: ["bisturi", "pazienza", "vestito"],
            correct_answer: "bisturi",
            hint: "Indica lo strumento concreto con cui viene compiuto l'intervento!"
          },
          {
            sentence: "L'allieva ha esposto la sua tesina con straordinaria ___.",
            options: ["chiarezza", "chitarra", "penna"],
            correct_answer: "chiarezza",
            hint: "Indica il MODO o la maniera in cui è stata svolta l'esposizione!"
          },
          {
            sentence: "Nella frase 'Viaggio in treno', 'in treno' è un complemento di ___.",
            options: ["mezzo", "modo", "luogo figurato"],
            correct_answer: "mezzo",
            hint: "È il veicolo o mezzo di trasporto utilizzato per viaggiare."
          }
        ],
        reading_passage: {
          title: "I mosaici di Ravenna",
          text: "Nella basilica di San Vitale a Ravenna, i maestri bizantini hanno composto con tessere di vetro policromo e foglia d'oro mosaici di bellezza senza tempo. Con sapiente maestria artigianale e una precisione stupefacente, hanno raffigurato l'imperatore Giustiniano e la corte imperiale.",
          comprehension_questions: [
            {
              question: "Quale materiale caratterizza i capolavori musivi di Ravenna?",
              options: ["Tessere di vetro colorato e foglia d'oro", "Terracotta grezza", "Tavole di quercia dipinte"],
              correct_index: 0
            },
            {
              question: "Quale sovrano storico è immortalato nei mosaici di San Vitale?",
              options: ["L'imperatore Giustiniano", "Carlo Magno", "Giulio Cesare"],
              correct_index: 0
            }
          ]
        }
      },
      mercoledi: {
        day: "mercoledi",
        topic: "Complementi di Compagnia, Unione, Materia e Argomento",
        words_of_the_day: [
          {
            word: "Sinergia",
            definition: "L'azione combinata di più forze che insieme producono un risultato superiore.",
            example: "La sinergia tra i membri del laboratorio ha permesso di formulare la teoria."
          },
          {
            word: "Trattato",
            definition: "Opera scritta scientifica o filosofica che espone compiutamente un argomento.",
            example: "Galileo compose un celebre trattato sul moto dei corpi celesti."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nella frase 'Passeggio con mio fratello', 'con mio fratello' è complemento di ___.",
            options: ["compagnia", "unione", "mezzo"],
            correct_answer: "compagnia",
            hint: "Riguarda esseri animati (persone o animali) con cui si compie l'azione!"
          },
          {
            sentence: "Nella frase 'Sono uscito con l'ombrello aperto', 'con l'ombrello' è complemento di ___.",
            options: ["unione", "compagnia", "modo"],
            correct_answer: "unione",
            hint: "Riguarda cose inanimate che si portano con sé!"
          },
          {
            sentence: "Nella frase 'Abbiamo discusso di storia romana', 'di storia romana' è complemento di ___.",
            options: ["argomento", "materia", "specificazione"],
            correct_answer: "argomento",
            hint: "Risponde alla domanda: riguardo a quale argomento?"
          }
        ],
        reading_passage: {
          title: "La Pietà di Michelangelo",
          text: "Scolpita in un unico blocco di marmo bianco di Carrara, la Pietà Vaticana di Michelangelo Buonarroti rappresenta la Vergine Maria che sostiene con infinita dolcezza e composta rassegnazione il corpo esanime di Cristo. Le pieghe del panneggio sembrano seta viva.",
          comprehension_questions: [
            {
              question: "Di quale pregiata materia è composta la scultura michelangiolesca?",
              options: ["Di marmo bianco di Carrara", "Di bronzo fuso", "Di terracotta invetriata"],
              correct_index: 0
            },
            {
              question: "Quale emozione traspare dal volto della Vergine scolpito dall'artista?",
              options: ["Infinita dolcezza e composta rassegnazione", "Ira feroce", "Indifferenza totale"],
              correct_index: 0
            }
          ]
        }
      },
      giovedi: {
        day: "giovedi",
        topic: "Complemento d'Agente e di Causa Efficiente",
        words_of_the_day: [
          {
            word: "Diatesi",
            definition: "La categoria grammaticale che indica il rapporto tra il verbo e il suo soggetto (attiva o passiva).",
            example: "Nella diatesi passiva il soggetto grammaticale è il paziente dell'azione verbale."
          },
          {
            word: "Devastazione",
            definition: "La distruzione violenta e diffusa causata da eventi calamitosi o bellici.",
            example: "L'alluvione causò grave devastazione nei campi lungo l'argine del fiume."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nella frase 'La mela fu mangiata dal bambino', 'dal bambino' è complemento ___.",
            options: ["d'agente", "di causa efficiente", "di termine"],
            correct_answer: "d'agente",
            hint: "Indica la persona o l'essere animato che compie l'azione nella frase passiva!"
          },
          {
            sentence: "Nella frase 'La finestra fu spalancata dal vento impetuoso', 'dal vento' è complemento di ___.",
            options: ["causa efficiente", "agente", "mezzo"],
            correct_answer: "causa efficiente",
            hint: "Indica un'entità inanimata o forza naturale che compie l'azione nella frase passiva!"
          },
          {
            sentence: "I complementi d'agente e di causa efficiente sono sempre introdotti dalla preposizione '___'.",
            options: ["da (semplice o articolata)", "a", "con"],
            correct_answer: "da (semplice o articolata)",
            hint: "Da, dal, dallo, dalla, dai, dagli, dalle!"
          }
        ],
        reading_passage: {
          title: "L'eruzione del Vesuvio e Pompei",
          text: "Nel 79 dopo Cristo, l'antica città di Pompei fu travolta da una pioggia incessante di lapilli e ceneri vulcaniche eruttate dal Vesuvio. La popolazione fu sorpresa dalla violenza inaudita del cataclisma naturale, che sigillò intatta la vita quotidiana romana per millenni sotto metri di materiale piroclastico.",
          comprehension_questions: [
            {
              question: "In quale anno avvenne la storica eruzione pliniana del Vesuvio?",
              options: ["Nel 79 dopo Cristo", "Nel 476 dopo Cristo", "Nel 1492"],
              correct_index: 0
            },
            {
              question: "Quale elemento naturale fu la causa efficiente della conservazione dei reperti archeologici?",
              options: ["La coltre di ceneri e lapilli vulcanici che sigillò la città", "Il ghiaccio polare perenne", "L'acqua marina"],
              correct_index: 0
            }
          ]
        }
      },
      venerdi: {
        day: "venerdi",
        topic: "Attributo e Apposizione nell'Analisi Logica",
        words_of_the_day: [
          {
            word: "Attributo",
            definition: "Qualsiasi aggettivo che qualifica o determina un nome nell'analisi logica.",
            example: "Nella frase 'la bella casa', 'bella' svolge la precisa funzione logica di attributo."
          },
          {
            word: "Apposizione",
            definition: "Un nome che si unisce a un altro nome per precisarlo o definirne il ruolo.",
            example: "In 'il dottor Bianchi', 'dottor' è l'apposizione del nome proprio Bianchi."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nella frase 'Il celebre scrittore Italo Calvino ha scritto molti romanzi', 'scrittore' è un'___.",
            options: ["apposizione", "attributo", "predicato"],
            correct_answer: "apposizione",
            hint: "È un nome ('scrittore') che definisce il ruolo del nome proprio Calvino!"
          },
          {
            sentence: "Nella frase 'La dolce melodia risuonava nel salone', la parola 'dolce' è un ___.",
            options: ["attributo", "apposizione", "complemento di modo"],
            correct_answer: "attributo",
            hint: "È un aggettivo legato al nome 'melodia', quindi è un attributo!"
          },
          {
            sentence: "A differenza dell'attributo che è un aggettivo, l'apposizione è sempre un ___.",
            options: ["nome", "verbo", "avverbio"],
            correct_answer: "nome",
            hint: "Regola d'oro: l'attributo è un aggettivo, l'apposizione è un sostantivo!"
          }
        ],
        reading_passage: {
          title: "L'Orlando Furioso di Ludovico Ariosto",
          text: "«Le donne, i cavallier, l'arme, gli amori, le cortesie, l'audaci imprese io canto...». Con questo celeberrimo esordio, il poeta ferrarese Ludovico Ariosto introduce l'universo cavalleresco del suo poema. Il valoroso paladino Orlando, impazzito per l'amore non corrisposto della principessa Angelica, ritroverà la ragione sulla Luna grazie al viaggio dell'eroe Astolfo.",
          comprehension_questions: [
            {
              question: "Quale autore compose il capolavoro rinascimentale 'Orlando Furioso'?",
              options: ["Ludovico Ariosto", "Torquato Tasso", "Francesco Petrarca"],
              correct_index: 0
            },
            {
              question: "Dove si reca il cavaliere Astolfo per recuperare il senno perduto di Orlando?",
              options: ["Sulla Luna a bordo dell'ippogrifo", "Negli abissi marini", "Nel labirinto di Creta"],
              correct_index: 0
            }
          ]
        }
      },
      sabato: {
        day: "sabato",
        topic: "Il Testo Espositivo ed Elaborazione di Schemi Concettuali",
        words_of_the_day: [
          {
            word: "Espositivo",
            definition: "Testo che ha lo scopo primario di trasmettere informazioni, nozioni e dati con chiarezza oggettiva.",
            example: "I manuali scolastici e le enciclopedie adottano la tipologia del testo espositivo."
          },
          {
            word: "Mappa",
            definition: "Rappresentazione grafica e sintetica delle relazioni gerarchiche tra concetti chiave.",
            example: "Costruire una mappa concettuale favorisce la memorizzazione a lungo termine."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Il testo espositivo adotta sempre un linguaggio chiaro, preciso e ___.",
            options: ["oggettivo", "fiabesco", "ricco di rime"],
            correct_answer: "oggettivo",
            hint: "L'obiettivo è informare il lettore sui fatti reali senza esprimere giudizi emotivi personali!"
          },
          {
            sentence: "Nei testi espositivi i verbi sono usati prevalentemente al tempo ___ dell'indicativo.",
            options: ["presente", "passato remoto", "congiuntivo trapassato"],
            correct_answer: "presente",
            hint: "Il presente indicativo conferisce valore di verità atemporale alle spiegazioni scientifiche!"
          },
          {
            sentence: "Per strutturare le informazioni in paragrafi logici si utilizzano i sottotitoli e gli elenchi ___.",
            options: ["puntati o numerati", "in versi liberi", "interrogativi"],
            correct_answer: "puntati o numerati",
            hint: "Gli elenchi facilitano la scansione visiva e la memorizzazione dei passaggi chiave."
          }
        ],
        reading_passage: {
          title: "Il ciclo dell'acqua sul nostro pianeta",
          text: "L'idrosfera terrestre è costantemente rinnovata dal ciclo idrologico. L'energia solare provoca l'evaporazione dell'acqua da oceani e laghi; il vapore acqueo sale nell'atmosfera, si raffredda e si condensa formando le nubi. Le precipitazioni (pioggia, neve, grandine) restituiscono l'acqua alla terraferma, alimentando falde acquifere e fiumi.",
          comprehension_questions: [
            {
              question: "Quale fonte energetica mette in moto l'intero ciclo dell'acqua?",
              options: ["La radiazione solare", "Il vento del nord", "La gravità lunare"],
              correct_index: 0
            },
            {
              question: "Cosa accade al vapore acqueo salendo negli strati freddi dell'atmosfera?",
              options: ["Si condensa originando le formazioni nuvolose", "Scompare nel vuoto cosmico", "Prende fuoco"],
              correct_index: 0
            }
          ]
        }
      }
    },
    weeklyTest: {
      title: "Torneo dei Maestri di Sintassi di 2ª Media!",
      description: "10 quesiti completi di analisi logica per conquistare il Trofeo dei Complementi Indiretti!",
      questions: [
        {
          id: "gm2_q1",
          question: "Nella frase 'L'oratore parlò a lungo d'arte moderna', 'd'arte moderna' è complemento di:",
          options: ["Argomento", "Specificazione", "Materia", "Causa"],
          correct_index: 0,
          explanation: "Indica il tema o l'argomento trattato dal discorso!"
        },
        {
          id: "gm2_q2",
          question: "Quale frase contiene un COMPLEMENTO DI CAUSA?",
          options: [
            "I fiori appassirono per la prolungata siccità.",
            "L'atleta si allena per vincere la medaglia.",
            "Abbiamo spedito una lettera per posta aerea.",
            "Siamo partiti per le montagne ieri sera."
          ],
          correct_index: 0,
          explanation: "'Per la prolungata siccità' è la causa/motivo che ha provocato l'appassimento!"
        },
        {
          id: "gm2_q3",
          question: "Nella frase 'Il colosseo è stato costruito con blocchi di travertino', 'di travertino' è complemento di:",
          options: ["Materia", "Specificazione", "Mezzo", "Origine"],
          correct_index: 0,
          explanation: "Indica la materia o la sostanza di cui è fatto il manufatto!"
        },
        {
          id: "gm2_q4",
          question: "Quale tra le seguenti opzioni contiene un'APPOSIZIONE?",
          options: [
            "Il fiume Po attraversa l'intera pianura padana.",
            "La verde pianura si estende fino al mare.",
            "Il treno veloce sfreccia sui binari.",
            "La stanza luminosa accoglieva gli ospiti."
          ],
          correct_index: 0,
          explanation: "'Fiume' è un nome comune premesso al nome proprio Po, fungendo da apposizione!"
        },
        {
          id: "gm2_q5",
          question: "Nella frase 'I campi furono devastati dalla grandine', 'dalla grandine' è:",
          options: ["Complemento di causa efficiente", "Complemento d'agente", "Complemento di modo", "Complemento di mezzo"],
          correct_index: 0,
          explanation: "La grandine è un'entità inanimata che compie l'azione nella frase passiva: causa efficiente!"
        },
        {
          id: "gm2_q6",
          question: "Quale complemento risponde alla domanda: 'A quale scopo? Con quale finalità?'",
          options: ["Complemento di fine o scopo", "Complemento di termine", "Complemento di causa", "Complemento di modo"],
          correct_index: 0,
          explanation: "Il complemento di fine indica il traguardo o scopo prefissato di un'azione!"
        },
        {
          id: "gm2_q7",
          question: "Nella frase 'Ha dipinto la tela con un pennello sottile', 'con un pennello sottile' è:",
          options: ["Complemento di mezzo + attributo", "Complemento di modo", "Complemento di unione", "Complemento di compagnia"],
          correct_index: 0,
          explanation: "Pennello è lo strumento (mezzo) e sottile è il suo aggettivo (attributo)!"
        },
        {
          id: "gm2_q8",
          question: "Identifica la frase con un COMPLEMENTO DI COMPAGNIA:",
          options: [
            "Giulia è andata al cinema con le sue compagne di classe.",
            "Giulia è andata al cinema con l'ombrello pieghevole.",
            "Giulia è andata al cinema con grande entusiasmo.",
            "Giulia è andata al cinema con l'autobus di linea."
          ],
          correct_index: 0,
          explanation: "'Con le sue compagne' indica persone con cui si compie l'azione (compagnia)!"
        },
        {
          id: "gm2_q9",
          question: "Che funzione logica svolge 'con diligenza' nella frase: 'Lo studente ha svolto il compito con diligenza'?",
          options: ["Complemento di modo", "Complemento di mezzo", "Complemento di fine", "Complemento di causa"],
          correct_index: 0,
          explanation: "Spiega la maniera o il modo in cui è stato eseguito il compito!"
        },
        {
          id: "gm2_q10",
          question: "Quale caratteristica formale distingue il testo espositivo?",
          options: [
            "Struttura logica rigorosa con titoli, sottotitoli e tabelle informative",
            "Uso esclusivo di rime alternate e figure mitologiche",
            "Presenza di incipit fiabeschi con draghi e fate",
            "Linguaggio esclusivamente in prima persona singolare"
          ],
          correct_index: 0,
          explanation: "L'organizzazione logica e chiara con paragrafi e sottotitoli è propria dei testi espositivi!"
        }
      ]
    }
  }
];

export const GRADE_MEDIA_3_MODULES: WeeklyModule[] = [
  {
    weekNumber: 1,
    grade: '3_media',
    title: "Sintassi del Periodo: Coordinate e Subordinate per l'Esame",
    description: "3ª Media: Preparati alla perfezione per la Prova d'Esame! Analisi del periodo: proposizione principale, coordinate, subordinate e parafrasi.",
    icon: "feather",
    days: {
      lunedi: {
        day: "lunedi",
        topic: "La Struttura del Periodo: Proposizione Principale e Indipendente",
        words_of_the_day: [
          {
            word: "Autosufficiente",
            definition: "Capace di reggersi e funzionare da sé in modo autonomo e compiuto.",
            example: "La proposizione principale ha un senso logico pienamente autosufficiente."
          },
          {
            word: "Ineludibile",
            definition: "Che non può essere schivato, evitato o trascurato per alcuna ragione.",
            example: "Il confronto con il testo originale è un passo ineludibile nell'analisi critica."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "In un periodo, il numero di proposizioni corrisponde esattamente al numero di ___.",
            options: ["predicati (verbi)", "nomi", "virgole"],
            correct_answer: "predicati (verbi)",
            hint: "Regola fondamentale dell'analisi del periodo: tanti predicati = tante proposizioni!"
          },
          {
            sentence: "La proposizione che regge l'intero periodo e ha senso compiuto autonomo è la proposizione ___.",
            options: ["principale", "subordinata", "incidente"],
            correct_answer: "principale",
            hint: "Può stare da sola senza dipendere grammaticalmente da nessun'altra proposizione!"
          },
          {
            sentence: "Una proposizione principale che esprime un ordine perentorio si definisce proposizione ___.",
            options: ["volitiva o imperativa", "enunciativa", "desiderativa"],
            correct_answer: "volitiva o imperativa",
            hint: "Ad esempio: 'Ascoltate con attenzione!' o 'Chiudete la porta!'"
          }
        ],
        reading_passage: {
          title: "L'Infinito di Giacomo Leopardi",
          text: "«Sempre caro mi fu quest'ermo colle, e questa siepe, che da tanta parte dell'ultimo orizzonte il guardo esclude. Ma sedendo e mirando, interminati spazi di là da quella, e sovrumani silenzi, e profondissima quiete io nel pensier mi fingo...». Composto sul colle monte Tabor a Recanati, 'L'Infinito' è uno dei vertici assoluti della lirica universale.",
          comprehension_questions: [
            {
              question: "Quale ostacolo visivo stimola l'immaginazione poetica di Leopardi?",
              options: ["La siepe solitaria sul colle", "Un alto muro di cinta", "Una fitta nebbia invernale"],
              correct_index: 0
            },
            {
              question: "In quale città marchigiana nacque il poeta Giacomo Leopardi?",
              options: ["A Recanati", "Ad Ancona", "A Pesaro"],
              correct_index: 0
            }
          ]
        }
      },
      martedi: {
        day: "martedi",
        topic: "La Coordinazione (Paratassi): Copulative, Avversative, Disgiuntive",
        words_of_the_day: [
          {
            word: "Paratassi",
            definition: "Struttura sintattica basata sul collegamento di proposizioni coordinate sullo stesso piano.",
            example: "Lo stile paratattico rende la narrazione rapida, incalzante e immediata."
          },
          {
            word: "Avversativo",
            definition: "Che introduce una contrapposizione netta o una riserva rispetto a quanto detto prima.",
            example: "La congiunzione 'tuttavia' instaura un nesso avversativo fondamentale."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nella frase 'Voleva uscire, MA la pioggia era battente', la coordinata è introdotta da una congiunzione ___.",
            options: ["avversativa", "copulativa", "dichiarativa"],
            correct_answer: "avversativa",
            hint: "Congiunzioni come 'ma', 'però', 'tuttavia', 'eppure' esprimono contrasto!"
          },
          {
            sentence: "Congiunzioni come 'E, ANCHE, NEMMENO, NEANCHE' collegano per coordinazione ___.",
            options: ["copulativa", "disgiuntiva", "conclusiva"],
            correct_answer: "copulativa",
            hint: "Aggiungono semplicemente un elemento in senso positivo o negativo."
          },
          {
            sentence: "Congiunzioni come 'DUNQUE, PERTANTO, QUINDI' introducono una coordinata ___.",
            options: ["conclusiva", "esplicativa", "correlativa"],
            correct_answer: "conclusiva",
            hint: "Traggono una logica conseguenza da quanto affermato prima!"
          }
        ],
        reading_passage: {
          title: "Se questo è un uomo di Primo Levi",
          text: "«Voi che vivete sicuri nelle vostre tiepide case, voi che trovate tornando a sera il cibo caldo e visi amici: considerate se questo è un uomo che lavora nel fango, che non conosce pace, che lotta per mezzo pane...». Primo Levi testimonia la tragedia di Auschwitz con lucidità razionale e rigore etico assoluto.",
          comprehension_questions: [
            {
              question: "Quale monito morale rivolge Primo Levi ai lettori nel proemio?",
              options: ["Di non dimenticare l'orrore della Shoah e custodire la memoria", "Di abbandonare ogni speranza", "Di ignorare le sofferenze altrui"],
              correct_index: 0
            },
            {
              question: "Quale stile contraddistingue la scrittura testimoniale di Levi?",
              options: ["Lucidità razionale, chiarezza e profondo rigore etico", "Enfasi oratoria roboante", "Comicità satirica"],
              correct_index: 0
            }
          ]
        }
      },
      mercoledi: {
        day: "mercoledi",
        topic: "La Subordinazione (Ipotassi): Esplicite vs Implicite",
        words_of_the_day: [
          {
            word: "Ipotassi",
            definition: "L'articolazione complessa del periodo mediante più gradi di proposizioni subordinate.",
            example: "La prosa classica di Boccaccio e Manzoni fa ampio uso dell'ipotassi."
          },
          {
            word: "Gerarchia",
            definition: "L'ordinamento sistematico di elementi secondo diversi gradi di dipendenza logica.",
            example: "L'analisi del periodo svela la gerarchia sintattica tra proposizione principale e subordinate."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Una proposizione subordinata con il verbo a un modo finito (indicativo, congiuntivo, condizionale) si dice ___.",
            options: ["esplicita", "implicita", "incidente"],
            correct_answer: "esplicita",
            hint: "I modi finiti esprimono esplicitamente persona e numero!"
          },
          {
            sentence: "Una proposizione subordinata con il verbo a un modo indefinito (infinito, participio, gerundio) si dice ___.",
            options: ["implicita", "esplicita", "principale"],
            correct_answer: "implicita",
            hint: "I modi indefiniti non specificano la persona e rendono la frase 'implicita'!"
          },
          {
            sentence: "Nella frase 'Uscendo di casa, salutò la madre', 'uscendo di casa' è una subordinata temporale ___.",
            options: ["implicita (verbo al gerundio)", "esplicita", "coordinata"],
            correct_answer: "implicita (verbo al gerundio)",
            hint: "Il verbo è al modo gerundio presente, quindi è una subordinata implicita!"
          }
        ],
        reading_passage: {
          title: "La coscienza di Zeno di Italo Svevo",
          text: "Nel celebre romanzo psicoanalitico pubblicato nel 1923, il protagonista Zeno Cosini scrive le proprie memorie su consiglio del dottor S. Il tema dell'ultima sigaretta ('U.S.'), costantemente rimandata con mille scuse ironiche, diventa la metafora dell'ambiguità e delle contraddizioni della psiche umana moderna.",
          comprehension_questions: [
            {
              question: "Quale innovazione narrativa caratterizza il capolavoro di Italo Svevo?",
              options: ["La narrazione psicologica in prima persona con tempo interiore", "Il racconto in terzine dantesche", "La cronaca giornalistica oggettiva"],
              correct_index: 0
            },
            {
              question: "Cosa simboleggia la continua 'ultima sigaretta' di Zeno?",
              options: ["L'autoinganno e l'incapacità di decidere della psiche", "L'amore per il tabacco orientale", "Una prescrizione medica"],
              correct_index: 0
            }
          ]
        }
      },
      giovedi: {
        day: "giovedi",
        topic: "Subordinate Soggettive, Oggettive e Relative",
        words_of_the_day: [
          {
            word: "Dichiarativa",
            definition: "Che serve a chiarire, esplicitare o definire il contenuto di un termine precedente.",
            example: "La subordinata dichiarativa spiega un elemento anticipato nella reggente."
          },
          {
            word: "Antecedente",
            definition: "Il termine nominale a cui si riferisce e si ricollega un pronome relativo.",
            example: "Nel periodo 'Il ragazzo che corre', 'il ragazzo' è l'antecedente del relativo 'che'."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nella frase 'È necessario CHE TUTTI COLLABORINO', la proposizione in maiuscolo è subordinata ___.",
            options: ["soggettiva", "oggettiva", "relativa"],
            correct_answer: "soggettiva",
            hint: "Funziona come soggetto della frase reggente impersonale 'è necessario'!"
          },
          {
            sentence: "Nella frase 'So CHE SEI STATO PROMOSSO', la proposizione in maiuscolo è subordinata ___.",
            options: ["oggettiva", "soggettiva", "temporale"],
            correct_answer: "oggettiva",
            hint: "Funziona come complemento oggetto retto dal verbo personale transitivo 'so' (so che cosa?)!"
          },
          {
            sentence: "La subordinata introdotta da pronomi relativi come 'che, il quale, cui, dove' si chiama ___.",
            options: ["relativa", "finale", "condizionale"],
            correct_answer: "relativa",
            hint: "Si aggancia direttamente a un nome antecedente per qualificarlo!"
          }
        ],
        reading_passage: {
          title: "Il Fu Mattia Pascal di Pirandello",
          text: "Luigi Pirandello mette in scena la crisi dell'identità individuale nella società moderna. Mattia Pascal, creduto morto suicida dai compaesani, decide di cogliere l'occasione per reinventarsi una nuova vita sotto il falso nome di Adriano Meis, scoprendo ben presto l'impossibilità di vivere al di fuori di ogni legame civile e anagrafico.",
          comprehension_questions: [
            {
              question: "Quale tema centrale della poetica di Pirandello emerge nel romanzo?",
              options: ["La trappola delle maschere sociali e la crisi dell'identità", "La fedeltà ai dogmi medievali", "L'esaltazione delle battaglie navali"],
              correct_index: 0
            },
            {
              question: "Quale nome inventa Mattia per la sua nuova identità?",
              options: ["Adriano Meis", "Vitangelo Moscarda", "Enrico IV"],
              correct_index: 0
            }
          ]
        }
      },
      venerdi: {
        day: "venerdi",
        topic: "Subordinate Causali, Finali, Temporali e Concessive",
        words_of_the_day: [
          {
            word: "Concessione",
            definition: "L'ammissione di una circostanza contrastante che tuttavia non impedisce il verificarsi del fatto.",
            example: "La proposizione concessiva dimostra che la determinazione supera ogni ostacolo."
          },
          {
            word: "Conseguenza",
            definition: "Ciò che deriva necessariamente come effetto naturale o logico da una causa.",
            example: "La dedizione quotidiana ha come naturale conseguenza l'eccellenza nei risultati."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nella frase 'BENCHÉ PIOVESSE, siamo usciti a fare una camminata', la proposizione è subordinata ___.",
            options: ["concessiva", "causale", "finale"],
            correct_answer: "concessiva",
            hint: "Introdotta da 'benché, sebbene, quantunque, nonostante' col congiuntivo!"
          },
          {
            sentence: "Nella frase 'Studio con dedizione AFFINCHÉ I MIEI OBIETTIVI SI REALIZZINO', la proposizione è ___.",
            options: ["finale", "causale", "temporale"],
            correct_answer: "finale",
            hint: "Indica lo scopo o il fine per cui viene compiuta l'azione!"
          },
          {
            sentence: "La subordinata introdotta da 'perché, poiché, giacché, dal momento che' è una subordinata ___.",
            options: ["causale", "consecutiva", "relativa"],
            correct_answer: "causale",
            hint: "Esprime il motivo scatenante o la causa di quanto accade nella reggente."
          }
        ],
        reading_passage: {
          title: "La Costituzione Italiana: I Principi Fondamentali",
          text: "Entrata in vigore il 1° gennaio 1948, la Costituzione della Repubblica Italiana rappresenta il patto solenne su cui poggia la nostra convivenza democratica. L'Articolo 3 sancisce il principio fondamentale dell'uguaglianza formale e sostanziale di tutti i cittadini senza distinzione di sesso, razza, lingua o religione.",
          comprehension_questions: [
            {
              question: "In quale data entrò storicamente in vigore la Costituzione Italiana?",
              options: ["Il 1° gennaio 1948", "Il 25 aprile 1945", "Il 2 giugno 1946"],
              correct_index: 0
            },
            {
              question: "Quale principio cardine è solennemente proclamato dall'Articolo 3?",
              options: ["L'uguaglianza formale e sostanziale di tutti i cittadini", "Il divieto delle assemblee", "L'obbligo del servizio militare perpetuo"],
              correct_index: 0
            }
          ]
        }
      },
      sabato: {
        day: "sabato",
        topic: "La Prova Scritta d'Esame: Analisi del Testo e Argomentazione Critica",
        words_of_the_day: [
          {
            word: "Argomentazione",
            definition: "L'articolazione organica di tesi, antitesi e prove per dimostrare una verità.",
            example: "Un'argomentazione brillante richiede padronanza logica e precisione lessicale."
          },
          {
            word: "Rilevanza",
            definition: "L'importanza sostanziale e il peso decisivo di un elemento in un contesto dato.",
            example: "I documenti storici presentati hanno una rilevanza capitale per la ricerca."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nella prova d'esame, la comprensione di un testo richiede di saper individuare la ___ centrale dell'autore.",
            options: ["tesi", "rima", "parola più lunga"],
            correct_answer: "tesi",
            hint: "È il nucleo concettuale intorno al quale si sviluppa l'intero discorso critico!"
          },
          {
            sentence: "L'introduzione della prova scritta d'italiano deve contestualizzare l'opera e definire il ___ tematico.",
            options: ["quadro", "voto finale", "punto esclamativo"],
            correct_answer: "quadro",
            hint: "Fornisce le coordinate storiche, biografiche e culturali essenziali per il lettore."
          },
          {
            sentence: "La revisione finale dell'elaborato d'esame serve a verificare la correttezza ortografica e la coesione ___.",
            options: ["sintattica e testuale", "matematica", "geografica"],
            correct_answer: "sintattica e testuale",
            hint: "Assicura che le frasi siano collegate armonicamente senza errori grammaticali o salti logici."
          }
        ],
        reading_passage: {
          title: "La lettera ai posteri di Petrarca",
          text: "Francesco Petrarca, padre dell'Umanesimo europeo, si rivolge nelle 'Epistole metriche' ai lettori del futuro: invita a coltivare gli studi classici ('humanae litterae') non come sterile esercizio accademico, ma come strumento insostituibile per elevare la dignità spirituale e la libertà morale dell'essere umano.",
          comprehension_questions: [
            {
              question: "Quale movimento culturale e letterario inaugurò Francesco Petrarca?",
              options: ["L'Umanesimo rinascimentale", "Il Romanticismo ottocentesco", "Il Futurismo d'avanguardia"],
              correct_index: 0
            },
            {
              question: "Quale funzione assegnava il poeta agli studi umanistici classici?",
              options: ["Elevare la dignità spirituale e la libertà morale dell'uomo", "Arricchirsi nel commercio", "Costruire armi da guerra"],
              correct_index: 0
            }
          ]
        }
      }
    },
    weeklyTest: {
      title: "Gran Torneo Finale di 3ª Media: Campioni dell'Esame!",
      description: "10 quesiti completi di analisi del periodo, tipologie subordinate e comprensione critica per il diploma di 3ª Media!",
      questions: [
        {
          id: "gm3_q1",
          question: "Nel periodo 'Tutti sanno CHE LA TERRA RUOTA ATTORNO AL SOLE', la proposizione in maiuscolo è:",
          options: [
            "Subordinata oggettiva di 1° grado",
            "Subordinata soggettiva di 1° grado",
            "Subordinata dichiarativa",
            "Proposizione principale"
          ],
          correct_index: 0,
          explanation: "Funziona come oggetto del verbo personale transitivo 'sanno' (sanno che cosa?)!"
        },
        {
          id: "gm3_q2",
          question: "Nel periodo 'SEBBENE FOSSE MOLTO STANCO, concluse la lettura del saggio', la proposizione è:",
          options: [
            "Subordinata concessiva esplicita",
            "Subordinata causale",
            "Subordinata finale",
            "Subordinata condizionale"
          ],
          correct_index: 0,
          explanation: "Introdotta da 'sebbene' col congiuntivo imperfetto: subordinata concessiva!"
        },
        {
          id: "gm3_q3",
          question: "Quale tra le seguenti è una proposizione SUBORDINATA IMPLICITA?",
          options: [
            "Avendo compreso la spiegazione, risolse il quesito con agilità.",
            "Poiché aveva compreso la spiegazione, risolse il quesito.",
            "Quando comprese la spiegazione, risolse il quesito.",
            "Dopo che ebbe compreso la spiegazione, risolse il quesito."
          ],
          correct_index: 0,
          explanation: "'Avendo compreso' usa il gerundio composto, modo indefinito = subordinata implicita!"
        },
        {
          id: "gm3_q4",
          question: "Nel periodo 'È evidente CHE NESSUNO VUOLE SBAGLIARE', la proposizione in maiuscolo è:",
          options: [
            "Subordinata soggettiva",
            "Subordinata oggettiva",
            "Subordinata relativa",
            "Subordinata finale"
          ],
          correct_index: 0,
          explanation: "Fa da soggetto logico alla locuzione impersonale 'è evidente'!"
        },
        {
          id: "gm3_q5",
          question: "Individua la proposizione SUBORDINATA RELATIVA:",
          options: [
            "Il libro che hai letto sul comodino è avvincente.",
            "Credo che tu debba leggere questo libro.",
            "Leggo affinché io possa arricchire il mio lessico.",
            "Sebbene il libro sia lungo, l'ho finito."
          ],
          correct_index: 0,
          explanation: "'Che hai letto' si riferisce all'antecedente 'il libro' tramite il pronome relativo 'che'!"
        },
        {
          id: "gm3_q6",
          question: "Come si definisce il collegamento sintattico per ASINDETO?",
          options: [
            "Giustapposizione di frasi mediante soli segni di punteggiatura debole senza congiunzioni",
            "Uso continuo della congiunzione 'e'",
            "Collegamento esclusivo con il congiuntivo",
            "Presenza di soli verbi all'infinito"
          ],
          correct_index: 0,
          explanation: "L'asindeto coordina le proposizioni solo con virgole (es. 'Venni, vidi, vinsi')!"
        },
        {
          id: "gm3_q7",
          question: "Nel periodo ipotetico dell'irrealtà nel passato, quale combinazione verbale si adotta?",
          options: [
            "Se + congiuntivo trapassato regge il condizionale passato",
            "Se + indicativo futuro regge il futuro",
            "Se + presente regge il passato remoto",
            "Se + condizionale regge il congiuntivo"
          ],
          correct_index: 0,
          explanation: "Es: 'Se avessi saputo (cong. trapassato), sarei venuto (condizionale passato)'!"
        },
        {
          id: "gm3_q8",
          question: "Che valore logico ha la congiunzione 'AFFINCHÉ'?",
          options: [
            "Subordinante finale (introduce lo scopo)",
            "Subordinante temporale",
            "Coordinante avversativa",
            "Subordinante causale"
          ],
          correct_index: 0,
          explanation: "'Affinché' introduce sempre una proposizione subordinata finale con il congiuntivo!"
        },
        {
          id: "gm3_q9",
          question: "Nel testo argomentativo, come si chiama il processo logico che confuta le obiezioni avversarie?",
          options: [
            "Confutazione dell'antitesi",
            "Parafrasi metrica",
            "Riflessione passiva",
            "Inversione sintattica"
          ],
          correct_index: 0,
          explanation: "La confutazione smonta razionalmente l'antitesi per rafforzare la tesi dell'autore!"
        },
        {
          id: "gm3_q10",
          question: "In una poesia, come si chiama la figura retorica dell'inversione dell'ordine consueto delle parole (es. 'Dolce e chiara è la notte')?",
          options: [
            "Anastrofe o Iperbato",
            "Onomatopea",
            "Allitterazione",
            "Chiasmo inverso"
          ],
          correct_index: 0,
          explanation: "L'anastrofe inverte l'ordine sintattico normale dei termini per dare enfasi poetica!"
        }
      ]
    }
  }
];

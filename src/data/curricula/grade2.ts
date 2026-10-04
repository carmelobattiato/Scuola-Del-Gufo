import { WeeklyModule } from '../../types';

export const GRADE_2_MODULES: WeeklyModule[] = [
  {
    weekNumber: 1,
    grade: '2_elem',
    title: "I Suoni Doppi, l'Accento e l'H di Avere",
    description: "Benvenuto in 2ª Elementare! Impara a distinguere le doppie, padroneggiare GN e GLI, l'apostrofo e l'H del verbo avere!",
    icon: "feather",
    days: {
      lunedi: {
        day: "lunedi",
        topic: "La Magia delle Doppie: Palla vs Pala",
        words_of_the_day: [
          {
            word: "Castello",
            definition: "Grande fortezza medievale con torri possenti e mura merlate.",
            example: "Il re e la regina abitano in un castello antico in cima alla collina."
          },
          {
            word: "Cappello",
            definition: "Copricapo usato per proteggersi dal sole caldo o dalla pioggia.",
            example: "Marco indossa un cappello di paglia con una bella fascia blu."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Il cagnolino gioca felice con una ___ rimbalzante.",
            options: ["palla", "pala", "pahla"],
            correct_answer: "palla",
            hint: "Attento: la 'pala' serve per scavare, la 'palla' per giocare!"
          },
          {
            sentence: "Durante la ___ nel cielo brillano migliaia di stelle.",
            options: ["notte", "note", "notteh"],
            correct_answer: "notte",
            hint: "Le 'note' sono quelle musicali, la 'notte' è quando dormiamo!"
          },
          {
            sentence: "Il muratore costruisce un robusto ___ di mattoni rossi.",
            options: ["muro", "murro", "muuro"],
            correct_answer: "muro",
            hint: "'Muro' ha una sola R; 'muro' separa le stanze della casa."
          }
        ],
        reading_passage: {
          title: "La torta di mele di Nonna Adele",
          text: "Nonna Adele prepara una squisita torta di mele nel suo forno a legna. Rompe tre uova fresche, mescola la farina bianca e aggiunge fettine sottili di mela dorata. Il profumo delizioso riempie tutta la casa.",
          comprehension_questions: [
            {
              question: "Cosa prepara Nonna Adele?",
              options: ["Una squisita torta di mele", "Una pizza alle patatine", "Un gelato alla vaniglia"],
              correct_index: 0
            },
            {
              question: "Dove cuoce la torta la nonna?",
              options: ["Nel suo forno a legna", "Sulla brace del camino", "Nel microonde"],
              correct_index: 0
            }
          ]
        }
      },
      martedi: {
        day: "martedi",
        topic: "I Suoni Difficili: GN, GLI, SCI, SCE",
        words_of_the_day: [
          {
            word: "Conchiglia",
            definition: "Guscio calcareo protettivo di molti molluschi marini.",
            example: "Sulla spiaggia bagnata abbiamo trovato una rara conchiglia rosa."
          },
          {
            word: "Montagna",
            definition: "Rilievo naturale del terreno molto alto con vette rocciose.",
            example: "D'inverno la cima della montagna si copre di neve soffice."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Sui rami degli alberi cadono le prime ___ d'autunno.",
            options: ["foglie", "folie", "fogliae"],
            correct_answer: "foglie",
            hint: "Il suono dolce GLI si usa in parole come foglie, famiglia, bottiglia!"
          },
          {
            sentence: "La maestra ci ha insegnato a fare un disegno di un piccolo ___.",
            options: ["gnomo", "niomo", "gniomo"],
            correct_answer: "gnomo",
            hint: "Il suono GN non vuole mai la 'I', tranne nella parola 'compagnia'!"
          },
          {
            sentence: "D'inverno per ripararmi dal freddo indosso una calda ___ di lana.",
            options: ["sciarpa", "siarpa", "scarpa"],
            correct_answer: "sciarpa",
            hint: "Attento al suono SCI: sciarpa, scivolo, scimmia!"
          }
        ],
        reading_passage: {
          title: "Lo scoiattolo e le castagne",
          text: "Uno scoiattolo con una folta coda fulva saltella allegro tra i castagni. Raccoglie con cura le castagne mature e le nasconde nella tana scavata nel tronco dell'albero. Quando arriverà l'inverno gelido, avrà una grande scorta di cibo!",
          comprehension_questions: [
            {
              question: "Cosa raccoglie lo scoiattolo?",
              options: ["Le castagne mature", "I funghi velenosi", "I sassi levigati"],
              correct_index: 0
            },
            {
              question: "Perché nasconde il cibo nella tana?",
              options: ["Per avere una scorta durante l'inverno", "Per regalarlo agli uccelli", "Perché non ha fame"],
              correct_index: 0
            }
          ]
        }
      },
      mercoledi: {
        day: "mercoledi",
        topic: "L'uso dell'H con il Verbo Avere (Ho, Hai, Ha, Hanno)",
        words_of_the_day: [
          {
            word: "Abilità",
            definition: "Capacità e bravura nel fare molto bene una determinata cosa.",
            example: "Sofia disegna con grande abilità paesaggi coloratissimi."
          },
          {
            word: "Ospitalità",
            definition: "L'accoglienza calorosa e gentile che si offre agli ospiti.",
            example: "I nonni ci accolgono sempre con straordinaria ospitalità."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Io ___ molta fame dopo la lezione di ginnastica.",
            options: ["ho", "o", "oh"],
            correct_answer: "ho",
            hint: "Significa 'sento fame' / voce del verbo avere: vuole l'H iniziale!"
          },
          {
            sentence: "Luca e Marta ___ comprato un bellissimo mazzo di fiori.",
            options: ["hanno", "anno", "ahno"],
            correct_answer: "hanno",
            hint: "Voce del verbo avere (loro hanno fatto): ci vuole l'H iniziale!"
          },
          {
            sentence: "Vuoi andare al parco ___ preferisci restare a disegnare?",
            options: ["o", "ho", "oh"],
            correct_answer: "o",
            hint: "In questo caso 'o' significa 'oppure', quindi NON vuole l'H!"
          }
        ],
        reading_passage: {
          title: "La bicicletta nuova",
          text: "Marco ha ricevuto per il suo compleanno una bicicletta rosso fiammante. Ha messo subito il caschetto protettivo e ha pedalato lungo la pista ciclabile con suo papà. Tutti i suoi amici hanno applaudito quando ha fatto un bel giro senza sbandare.",
          comprehension_questions: [
            {
              question: "Che cosa ha ricevuto Marco per il compleanno?",
              options: ["Una bicicletta rosso fiammante", "Un paio di pattini a rotelle", "Un monopattino elettrico"],
              correct_index: 0
            },
            {
              question: "Cosa indossa prima di pedalare?",
              options: ["Il caschetto protettivo", "Gli occhiali da sole", "I guanti da sci"],
              correct_index: 0
            }
          ]
        }
      },
      giovedi: {
        day: "giovedi",
        topic: "L'Accento Magico (È con accento vs E congiunzione)",
        words_of_the_day: [
          {
            word: "Papà",
            definition: "Il padre, la persona cara che si prende cura della famiglia.",
            example: "Il papà mi insegna a costruire un aquilone di carta velina."
          },
          {
            word: "Felicemente",
            definition: "In modo felice, allegro e pieno di serenità.",
            example: "I bambini giocano felicemente sull'altalena del giardino."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Il cane di Matteo ___ molto affettuoso e giocherellone.",
            options: ["è", "e", "eh"],
            correct_answer: "è",
            hint: "'È' con l'accento spiega 'come è' o 'chi è' (voce del verbo essere)!"
          },
          {
            sentence: "Nel mio astuccio ci sono penne ___ matite colorate.",
            options: ["e", "è", "eh"],
            correct_answer: "e",
            hint: "'E' senza accento unisce due parole (penne E matite)!"
          },
          {
            sentence: "Ieri ho visto un film bellissimo con il mio ___.",
            options: ["papà", "papa", "papah"],
            correct_answer: "papà",
            hint: "Con l'accento è il genitore; senza accento è il capo della Chiesa!"
          }
        ],
        reading_passage: {
          title: "Il bosco dorato",
          text: "L'autunno è una stagione magica. Il bosco è colorato di giallo, rosso e arancione. Matteo e Sofia camminano sul sentiero e calpestano le foglie secche che scricchiolano sotto le scarpe. L'aria è frizzante e profuma di castagne.",
          comprehension_questions: [
            {
              question: "Quale stagione descrive il testo?",
              options: ["L'autunno", "L'estate", "La primavera"],
              correct_index: 0
            },
            {
              question: "Cosa succede alle foglie quando Matteo e Sofia camminano?",
              options: ["Scricchiolano sotto le scarpe", "Volano via nel cielo", "Diventano verdi"],
              correct_index: 0
            }
          ]
        }
      },
      venerdi: {
        day: "venerdi",
        topic: "L'Apostrofo: C'è, Ci sono, L'albero, Un'amica",
        words_of_the_day: [
          {
            word: "Orologio",
            definition: "Strumento con lancette o numeri digitali per misurare le ore.",
            example: "L'orologio a pendolo scandisce le ore con un dolce rintocco."
          },
          {
            word: "Arcobaleno",
            definition: "Arco di sette colori spettacolari che appare nel cielo dopo la pioggia.",
            example: "Dopo il temporale estivo è apparso uno splendido arcobaleno."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nel cielo sereno brilla ___ sole splendente.",
            options: ["un", "un'", "uno'"],
            correct_answer: "un",
            hint: "Attento: 'sole' è maschile, quindi l'articolo 'un' NON vuole l'apostrofo!"
          },
          {
            sentence: "Giulia ha incontrato ___ amica speciale al parco.",
            options: ["un'amica", "un amica", "una amica"],
            correct_answer: "un'amica",
            hint: "Davanti a nomi femminili che iniziano per vocale, 'un'' vuole sempre l'apostrofo!"
          },
          {
            sentence: "Sul ramo della quercia ___ un nido con tre uccellini.",
            options: ["c'è", "ce", "ci è"],
            correct_answer: "c'è",
            hint: "Deriva da 'ci è': la I cade e lascia il posto all'apostrofo!"
          }
        ],
        reading_passage: {
          title: "Il piccolo riccio Spillo",
          text: "Il piccolo riccio Spillo si nasconde sotto un mucchio di foglie secche. Ha tanti aculei protettivi ma è molto docile. Quando sente la voce gentile della bambina che gli porta una ciotolina d'acqua, tira fuori il nasino umido e ringrazia.",
          comprehension_questions: [
            {
              question: "Dove si nasconde il riccio Spillo?",
              options: ["Sotto un mucchio di foglie secche", "In cima a un albero", "Dentro un fiume"],
              correct_index: 0
            },
            {
              question: "Cosa gli porta la bambina gentile?",
              options: ["Una ciotolina d'acqua", "Un pezzo di cioccolata", "Una palla da tennis"],
              correct_index: 0
            }
          ]
        }
      },
      sabato: {
        day: "sabato",
        topic: "Nomi e Articoli: Maschile, Femminile, Singolare, Plurale",
        words_of_the_day: [
          {
            word: "Farfalla",
            definition: "Insetto elegante con ali grandi e multicolori che vola tra i fiori.",
            example: "Una farfalla variopinta si posa con delicatezza su una margherita."
          },
          {
            word: "Giardino",
            definition: "Spazio all'aperto coltivato con erba, fiori profumati e piante.",
            example: "Nel giardino fiorito ronzano operose le api dorate."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "___ gatti giocano nel cortile della cascina.",
            options: ["I", "Il", "La"],
            correct_answer: "I",
            hint: "'Gatti' è maschile plurale, quindi vuole l'articolo determinativo 'I'!"
          },
          {
            sentence: "La maestra distribuisce ___ quaderni a righe agli alunni.",
            options: ["i", "le", "lo"],
            correct_answer: "i",
            hint: "Articolo maschile plurale per 'quaderni'."
          },
          {
            sentence: "Sui rami cantano ___ rondini appena tornate dal caldo sud.",
            options: ["le", "i", "gli"],
            correct_answer: "le",
            hint: "'Rondini' è femminile plurale: articolo 'LE'!"
          }
        ],
        reading_passage: {
          title: "Una giornata al parco",
          text: "I bambini giocano felici al parco giochi. Le altalene oscillano alte verso il cielo azzurro e lo scivolo rosso è sempre affollato. I genitori chiacchierano seduti sulle panchine di legno all'ombra delle grandi querce.",
          comprehension_questions: [
            {
              question: "Di che colore è lo scivolo del parco?",
              options: ["Rosso", "Verde", "Nero"],
              correct_index: 0
            },
            {
              question: "Dove si siedono i genitori per chiacchierare?",
              options: ["Sulle panchine di legno", "Sull'erba bagnata", "Sulle altalene"],
              correct_index: 0
            }
          ]
        }
      }
    },
    weeklyTest: {
      title: "Torneo dei Campioni di 2ª Elementare!",
      description: "Verifica finale di 10 quiz per vincere la Coppa dell'Ortografia di 2ª Elementare!",
      questions: [
        {
          id: "g2_q1",
          question: "Quale parola è scritta in modo CORRETTO con le doppie?",
          options: ["Castello", "Castelo", "Casstelo", "Casteio"],
          correct_index: 0,
          explanation: "Castello vuole la doppia L!"
        },
        {
          id: "g2_q2",
          question: "Quale tra queste parole contiene il suono GN corretto?",
          options: ["Lavagna", "Lavania", "Lavaniia", "Lavanga"],
          correct_index: 0,
          explanation: "La parola 'Lavagna' si scrive con GN senza la I!"
        },
        {
          id: "g2_q3",
          question: "In quale frase l'uso dell'H con il verbo avere è CORRETTO?",
          options: ["Paolo ha una bicicletta nuova.", "Paolo a una bicicletta nuova.", "Paolo ah una bicicletta nuova.", "Paolo anno una bicicletta nuova."],
          correct_index: 0,
          explanation: "'Ha' (possiede) vuole l'H iniziale del verbo avere!"
        },
        {
          id: "g2_q4",
          question: "Quale frase usa 'È' (verbo essere) in modo corretto?",
          options: ["Il leone è un animale feroce.", "Il leone e un animale feroce.", "Il leone eh un animale feroce.", "Il leone e' un animale feroce."],
          correct_index: 0,
          explanation: "Si usa 'È' con l'accento perché spiega cosa è il leone!"
        },
        {
          id: "g2_q5",
          question: "Come si scrive correttamente davanti a un nome femminile con vocale?",
          options: ["Un'amica", "Un amica", "Uno amica", "Un'amico"],
          correct_index: 0,
          explanation: "'Un'' con l'apostrofo si usa solo con nomi femminili singolari!"
        },
        {
          id: "g2_q6",
          question: "Quale parola al plurale corrisponde a 'IL LIBRO'?",
          options: ["I libri", "Le libri", "Gli libri", "I libre"],
          correct_index: 0,
          explanation: "Il plurale di 'il libro' è 'i libri'!"
        },
        {
          id: "g2_q7",
          question: "Quale tra queste parole è scritta CORRETTAMENTE?",
          options: ["Bottiglia", "Botilia", "Bottilia", "Botiglia"],
          correct_index: 0,
          explanation: "'Bottiglia' si scrive con doppia T e con il suono GLI!"
        },
        {
          id: "g2_q8",
          question: "Completa la frase: 'Nel prato fiorito ___ tante margherite profumate'.",
          options: ["ci sono", "c'è", "ce", "ce sono"],
          correct_index: 0,
          explanation: "Essendo 'tante margherite' al plurale, si usa 'ci sono'!"
        },
        {
          id: "g2_q9",
          question: "Quale parola significa il copricapo da mettere in testa?",
          options: ["Cappello", "Capello", "Capelo", "Capelli"],
          correct_index: 0,
          explanation: "'Cappello' con la doppia P indica il copricapo; 'capello' con una sola P è quello che cresce in testa!"
        },
        {
          id: "g2_q10",
          question: "Quale di queste parole finisce con l'accento?",
          options: ["Caffè", "Caffe", "Tavolo", "Sedia"],
          correct_index: 0,
          explanation: "'Caffè' è una parola tronca e richiede l'accento grafico sull'ultima vocale!"
        }
      ]
    }
  }
];

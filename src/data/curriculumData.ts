import { WeeklyModule, SchoolGrade } from '../types';
import { GRADE_1_MODULES } from './curricula/grade1';
import { GRADE_2_MODULES } from './curricula/grade2';
import { GRADE_3_MODULES } from './curricula/grade3';
import { GRADE_5_MODULES } from './curricula/grade5';
import { 
  GRADE_MEDIA_1_MODULES, 
  GRADE_MEDIA_2_MODULES, 
  GRADE_MEDIA_3_MODULES 
} from './curricula/gradeMedia';

export const CURRICULUM_DATA: WeeklyModule[] = [
  {
    weekNumber: 1,
    grade: '4_elem',
    title: "Ortografia: I suoni difficili e l'H",
    description: "Impara a padroneggiare C e G, i suoni GN/GL/SC, l'uso dell'H e l'apostrofo!",
    icon: "feather",
    days: {
      lunedi: {
        day: "lunedi",
        topic: "Ortografia: I suoni dolci e duri di C e G",
        words_of_the_day: [
          {
            word: "Sciogliere",
            definition: "Rendere liquido qualcosa con il calore, oppure slegare un nodo.",
            example: "Il sole caldo fa sciogliere il delizioso gelato al cioccolato."
          },
          {
            word: "Coccodrillo",
            definition: "Grande rettile con corpo corazzato e fauci piene di denti affilati.",
            example: "Il coccodrillo nuota silenzioso tra i canali del fiume."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "La nonna prepara un piatto fumante di ___ al sugo di pomodoro.",
            options: ["gnocchi", "niocchi", "gnochi"],
            correct_answer: "gnocchi",
            hint: "Ricorda la regola: il suono GN non vuole mai la 'i', tranne in 'compagnia'!"
          },
          {
            sentence: "Nel cielo d'estate brilla una luce ___ come l'oro.",
            options: ["chiara", "ciara", "kiara"],
            correct_answer: "chiara",
            hint: "Per fare il suono duro davanti a 'i' o 'e', la C chiama in aiuto l'H!"
          },
          {
            sentence: "Il pastore conduce il suo gregge sul ___ della montagna.",
            options: ["giogo", "cioco", "gioco"],
            correct_answer: "giogo",
            hint: "Attento al suono dolce iniziale 'GIO'!"
          }
        ],
        reading_passage: {
          title: "La volpe e l'uva",
          text: "Una volpe affamata scorse dei magnifici grappoli d'uva che pendevano da un'alta vite. Fece diversi salti cercando di raggiungerli con agilità, ma l'uva era troppo in alto. Stanca e delusa, se ne andò dicendo con sufficienza: 'Tanto quest'uva è ancora acerba e poco saporita!' Spesso chi non riesce a raggiungere qualcosa finisce per disprezzarla.",
          comprehension_questions: [
            {
              question: "Per quale motivo la volpe saltava verso l'uva?",
              options: ["Aveva molta fame", "Voleva fare una ghirlanda", "Voleva regalarla agli uccellini"],
              correct_index: 0
            },
            {
              question: "Cosa dice la volpe quando capisce che non può prenderla?",
              options: ["'È troppo dolce'", "'È ancora acerba'", "'Non mi piacciono i grappoli'"],
              correct_index: 1
            },
            {
              question: "Qual è il vero significato del comportamento della volpe?",
              options: ["Trova scuse per nascondere la propria incapacità", "Preferisce mangiare mele", "È una volpe molto paziente"],
              correct_index: 0
            }
          ]
        }
      },
      martedi: {
        day: "martedi",
        topic: "L'uso dell'H con C e G (CHE, CHI, GHE, GHI)",
        words_of_the_day: [
          {
            word: "Ghirlanda",
            definition: "Intreccio circolare di fiori, foglie o rami decorativi.",
            example: "A Natale appendiamo una ghirlanda di pino alla porta di casa."
          },
          {
            word: "Chitarra",
            definition: "Strumento musicale a corde pizzicate con cassa armonica a forma di otto.",
            example: "Marco suona una dolce melodia con la sua chitarra classica."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Sulla spiaggia abbiamo raccolto delle bellissime ___ colorate.",
            options: ["conchiglie", "conglie", "concie"],
            correct_answer: "conchiglie",
            hint: "Davanti a 'I', per avere il suono duro serve la H: CHI!"
          },
          {
            sentence: "Nel bosco crescono dei saporiti ___ porcini.",
            options: ["funghi", "fungi", "funki"],
            correct_answer: "funghi",
            hint: "G + H + I produce il suono duro 'GHI'!"
          },
          {
            sentence: "Attento alle vespe: il loro pungiglione può fare ___ male!",
            options: ["tanto", "danto", "tampo"],
            correct_answer: "tanto",
            hint: "Davanti a 'T' e 'P' ricordati la lettera giusta."
          }
        ],
        reading_passage: {
          title: "Il vecchio castello di Pietra Chiara",
          text: "In cima alla collina sorgeva un antico castello circondato da querce secolari. Nelle notti fresche, i gufi facevano capolino dalle fessure delle mura merlate, mentre il vento sussurrava storie dimenticate. I cavalieri avevano difeso quella fortezza con coraggio e lealtà, lasciando scudi d'argento e antiche armature nei grandi saloni decorati.",
          comprehension_questions: [
            {
              question: "Cosa facevano i gufi nelle notti fresche?",
              options: ["Facevano capolino dalle mura", "Dormivano sottoterra", "Cacciavano i pesci nel lago"],
              correct_index: 0
            },
            {
              question: "Quali alberi circondavano il castello?",
              options: ["Querce secolari", "Pini marittimi", "Aranci in fiore"],
              correct_index: 0
            }
          ]
        }
      },
      mercoledi: {
        day: "mercoledi",
        topic: "I suoni speciali: GN, NI e GL, LI",
        words_of_the_day: [
          {
            word: "Bottiglia",
            definition: "Recipiente di vetro o plastica dal collo stretto per liquidi.",
            example: "Ho riempito la bottiglia con fresca acqua di sorgente."
          },
          {
            word: "Ingegnere",
            definition: "Professionista che progetta macchine, edifici o ponti geniali.",
            example: "L'ingegnere ha calcolato con cura la stabilità del nuovo ponte."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Il cagnolino scodinzola felice vicino al suo padroncino nella ___ di campagna.",
            options: ["campagna", "campania", "campanna"],
            correct_answer: "campagna",
            hint: "Il suono dolce GN non vuole mai la I!"
          },
          {
            sentence: "Un valoroso ___ proteggeva il reame con il suo scudo.",
            options: ["cavaliere", "cavagliere", "cavalere"],
            correct_answer: "cavaliere",
            hint: "Attenzione alle eccezioni di LI: cavaliere si scrive con la L e la I!"
          },
          {
            sentence: "Nel giardino svolazzano leggiadre mille ___ colorate.",
            options: ["farfalle", "farfale", "farffalle"],
            correct_answer: "farfalle",
            hint: "Ascolta bene la doppia consonante!"
          }
        ],
        reading_passage: {
          title: "Lo scoiattolo e le ghiande",
          text: "Nel cuore della foresta viveva Ciuffetto, uno scoiattolo dalla coda morbida e folta. Con l'arrivo dell'autunno, passava le mattine a raccogliere castagne, noci e profumate ghiande cadute dalle querce. Scavava buche segrete sotto le radici muschiose per nascondere il cibo in vista del freddo inverno.",
          comprehension_questions: [
            {
              question: "Come si chiamava lo scoiattolo?",
              options: ["Ciuffetto", "Ghiandolino", "Fulmine"],
              correct_index: 0
            },
            {
              question: "Dove nascondeva le sue provviste?",
              options: ["Sotto le radici muschiose", "In soffitta", "Dentro una bottiglia"],
              correct_index: 0
            }
          ]
        }
      },
      giovedi: {
        day: "giovedi",
        topic: "Il suono SC (SCE, SCI, SCHE, SCHI)",
        words_of_the_day: [
          {
            word: "Sciarpa",
            definition: "Striscia di tessuto di lana o seta da avvolgere intorno al collo.",
            example: "Metti la sciarpa calda prima di uscire nella neve!"
          },
          {
            word: "Fischietto",
            definition: "Piccolo strumento che emette un suono acuto soffiandoci dentro.",
            example: "L'arbitro ha soffiato nel fischietto per decretare la fine della partita."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Il pescatore scorge un luccicante banco di ___ nell'acqua limpida.",
            options: ["pesciolini", "pessiolini", "peciolini"],
            correct_answer: "pesciolini",
            hint: "Il suono dolce SCI si scrive con SC seguito da I!"
          },
          {
            sentence: "La maestra ci ha mostrato una meravigliosa ___ di teatro.",
            options: ["scena", "sciena", "sena"],
            correct_answer: "scena",
            hint: "SCE di norma non vuole la I (tranne in scienza, coscienza e loro derivati)!"
          },
          {
            sentence: "I bambini giocano a tirarsi palle di ___ nel cortile innevato.",
            options: ["neve", "nefe", "meve"],
            correct_answer: "neve",
            hint: "Lettera semplice e dolce."
          }
        ],
        reading_passage: {
          title: "La bottega dello scienziato",
          text: "Nel laboratorio del professor Leonardo c'erano provette scintillanti, grandi mappe stellari e strani ingranaggi di ottone. Leonardo studiava le stelle cadenti e le maree dell'oceano. La sua coscienza di ricercatore gli imponeva di condividere ogni scoperta con la gente del villaggio per migliorare la vita di tutti.",
          comprehension_questions: [
            {
              question: "Cosa studiava il professor Leonardo?",
              options: ["Le stelle cadenti e le maree", "Le ricette di torte", "Il volo dei pipistrelli"],
              correct_index: 0
            },
            {
              question: "Perché condivideva le sue scoperte?",
              options: ["Per migliorare la vita di tutti", "Per vincere un premio", "Per diventare famoso"],
              correct_index: 0
            }
          ]
        }
      },
      venerdi: {
        day: "venerdi",
        topic: "L'uso dell'H con il verbo Avere (Ho, Hai, Ha, Hanno)",
        words_of_the_day: [
          {
            word: "Ospitalità",
            definition: "Generosa e calorosa accoglienza offerta a chi viene a trovarci.",
            example: "I nonni ci hanno accolto con grande ospitalità e una torta fumante."
          },
          {
            word: "Abilità",
            definition: "Capacità di fare bene qualcosa con destrezza e intelligenza.",
            example: "Sara dimostra una grandissima abilità nel disegno a mano libera."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "I ragazzi ___ vinto il primo premio della gara di matematica.",
            options: ["hanno", "anno", "aho"],
            correct_answer: "hanno",
            hint: "Esprime un'azione passata o possesso del verbo avere: vuole l'H! 'Anno' senza H è il periodo di 12 mesi."
          },
          {
            sentence: "Domani andrò ___ trovare i miei zii in collina.",
            options: ["a", "ha", "ah"],
            correct_answer: "a",
            hint: "Risponde alla domanda: dove? Verso dove? È una preposizione, non vuole l'H!"
          },
          {
            sentence: "Luigi ___ una bellissima bicicletta rossa fiammante.",
            options: ["ha", "a", "ah"],
            correct_answer: "ha",
            hint: "Significa 'possiede' una bicicletta: ci vuole l'H!"
          }
        ],
        reading_passage: {
          title: "La sorpresa di compleanno",
          text: "Ieri i compagni di classe hanno organizzato una festa a sorpresa per Matteo. Hanno preparato cartelloni colorati e palloncini scintillanti. Quando Matteo ha aperto la porta della palestra, tutti hanno gridato in coro: 'Tanti auguri!'. Matteo ha sorriso commosso e ha ringraziato tutti i suoi amici dal profondo del cuore.",
          comprehension_questions: [
            {
              question: "Cosa hanno organizzato gli amici di Matteo?",
              options: ["Una festa a sorpresa", "Una partita di calcio", "Una gita al museo"],
              correct_index: 0
            },
            {
              question: "Come ha reagito Matteo quando ha aperto la porta?",
              options: ["Ha sorriso commosso e ringraziato", "Si è spaventato ed è fuggito", "Non ha detto nulla"],
              correct_index: 0
            }
          ]
        }
      },
      sabato: {
        day: "sabato",
        topic: "L'apostrofo e l'accento (C'è, Ci sono, L'albero, È vs E)",
        words_of_the_day: [
          {
            word: "Rondine",
            definition: "Piccolo uccello migratore con coda biforcuta, simbolo della primavera.",
            example: "L'arrivo della prima rondine annuncia che la primavera è vicina."
          },
          {
            word: "Illuminare",
            definition: "Fare luce rischiarando il buio, o chiarire una questione difficile.",
            example: "I fari della macchina illuminano la stradina tortuosa nella notte."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Nel giardino ___ un bellissimo albero di ciliegie mature.",
            options: ["c'è", "ce", "ci è"],
            correct_answer: "c'è",
            hint: "Deriva da 'ci è' con l'apostrofo che sostituisce la vocale caduta!"
          },
          {
            sentence: "Marco ___ un ragazzo molto gentile ___ generoso.",
            options: ["è / e", "e / è", "è / è"],
            correct_answer: "è / e",
            hint: "La 'è' con l'accento spiega com'è (verbo essere); la 'e' senza accento unisce due parole!"
          },
          {
            sentence: "Ho incontrato ___ amica speciale al parco dei tigli.",
            options: ["un'amica", "un amica", "una amica"],
            correct_answer: "un'amica",
            hint: "L'articolo indeterminativo femminile si apostrofa sempre davanti a vocale!"
          }
        ],
        reading_passage: {
          title: "Il vecchio faro sulla scogliera",
          text: "Sulla scogliera a picco sul mare c'è un vecchio faro bianco e rosso. Ogni sera il guardiano accende la grande lampada rotante. La sua luce è una guida preziosa per i marinai che navigano nel buio della notte. Quando il mare è in tempesta, il faro resiste con forza alle onde schiumose che si infrangono sui sassi.",
          comprehension_questions: [
            {
              question: "Dove si trova il vecchio faro?",
              options: ["Sulla scogliera a picco sul mare", "In mezzo al deserto", "Nel centro del paese"],
              correct_index: 0
            },
            {
              question: "A cosa serve la luce del faro?",
              options: ["A guidare i marinai nel buio", "A scaldare la spiaggia", "A far scappare i gabbiani"],
              correct_index: 0
            }
          ]
        }
      }
    },
    weeklyTest: {
      title: "Torneo Finale della Domenica: Campioni dell'Ortografia!",
      description: "Metti alla prova tutto ciò che hai imparato questa settimana. 10 domande per conquistare il badge!",
      questions: [
        {
          id: "w1_q1",
          question: "Quale tra queste parole è scritta in modo CORRETTO?",
          options: ["Sciogliere", "Siogliere", "Scoliere", "Scioliere"],
          correct_index: 0,
          explanation: "'Sciogliere' si scrive con SC seguito da I e poi GL!"
        },
        {
          id: "w1_q2",
          question: "In quale frase l'uso dell'H con il verbo avere è CORRETTO?",
          options: [
            "I nonni hanno comprato una culla per il nipotino.",
            "I nonni anno comprato una culla per il nipotino.",
            "I nonni ahnno comprato una culla per il nipotino.",
            "I nonni acompagnano il nipotino l'anno prossimo."
          ],
          correct_index: 0,
          explanation: "'Hanno' con l'H fa parte del verbo avere ('hanno comprato')."
        },
        {
          id: "w1_q3",
          question: "Scegli la forma corretta per completare: 'Un fascio di ___ illumina la stanza.'",
          options: ["luce", "luche", "luge", "lugie"],
          correct_index: 0,
          explanation: "Davanti a 'E', il suono dolce si scrive 'CE'."
        },
        {
          id: "w1_q4",
          question: "Quale parola richiede obbligatoriamente l'apostrofo?",
          options: ["Un'aquila", "Un aquilone", "Un ragazzo", "Un albero"],
          correct_index: 0,
          explanation: "'Aquila' è femminile, quindi l'articolo 'un'' vuole l'apostrofo!"
        },
        {
          id: "w1_q5",
          question: "Come si scrive correttamente il plurale di 'conchiglia'?",
          options: ["conchiglie", "conchigli", "conchige", "conchiglione"],
          correct_index: 0,
          explanation: "Il plurale di conchiglia è 'conchiglie'."
        },
        {
          id: "w1_q6",
          question: "Completa: 'Nel bosco ___ molti animaletti che cercano cibo.'",
          options: ["ci sono", "c'è", "ce sono", "cisono"],
          correct_index: 0,
          explanation: "'Animaletti' è plurale, quindi si usa 'ci sono'."
        },
        {
          id: "w1_q7",
          question: "Qual è la frase con la punteggiatura e gli accenti CORRETTI?",
          options: [
            "Il leone è il re della savana e ruggisce con forza.",
            "Il leone e il re della savana è ruggisce con forza.",
            "Il leone è il re della savana è ruggisce con forza.",
            "Il leone e il re della savana e ruggisce con forza."
          ],
          correct_index: 0,
          explanation: "'È' (con accento) spiega chi è il leone; 'e' (senza accento) unisce le due azioni."
        },
        {
          id: "w1_q8",
          question: "Come si scrive la parola che indica la scienza che studia le stelle?",
          options: ["astronomia", "astronommia", "asttronomia", "astronnomia"],
          correct_index: 0,
          explanation: "'Astronomia' ha consonanti semplici."
        },
        {
          id: "w1_q9",
          question: "Scegli la parola che fa eccezione e mantiene la 'I' dopo 'GN':",
          options: ["compagnia", "montagna", "lavagna", "campagna"],
          correct_index: 0,
          explanation: "In 'compagnia' l'accento cade sulla 'i', quindi si scrive con la 'i'!"
        },
        {
          id: "w1_q10",
          question: "Qual è il suono corretto per: 'Ieri sera abbiamo mangiato gli ___ al pesto'?",
          options: ["spaghetti", "spagetti", "spadetti", "spagietti"],
          correct_index: 0,
          explanation: "Per avere il suono duro 'GHE', ci vuole l'H: 'spaghetti'."
        }
      ]
    }
  },
  {
    weekNumber: 2,
    grade: '4_elem',
    title: "Morfologia: Il Mondo dei Nomi e degli Articoli",
    description: "Esplora i nomi comuni e propri, concreti e astratti, primitivi e derivati, e gli articoli!",
    icon: "book-open",
    days: {
      lunedi: {
        day: "lunedi",
        topic: "Nomi comuni e propri di persona, animale e cosa",
        words_of_the_day: [
          {
            word: "Archeologo",
            definition: "Studioso che scava per scoprire reperti e testimonianze del passato antico.",
            example: "L'archeologo ha trovato un antico vaso romano intatto nel terreno."
          },
          {
            word: "Vesuvio",
            definition: "Famoso vulcano situato vicino alla città di Napoli, nome proprio di cosa.",
            example: "Dalla costa si scorge maestosa la sagoma del Vesuvio."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "I nomi propri si scrivono SEMPRE con la lettera ___ iniziale.",
            options: ["maiuscola", "minuscola", "in corsivo"],
            correct_answer: "maiuscola",
            hint: "Pensa al tuo nome e al nome della tua città: iniziano sempre con una bella lettera grande!"
          },
          {
            sentence: "La parola 'felicità' è un nome ___ perché indica uno stato d'animo.",
            options: ["astratto", "concreto", "collettivo"],
            correct_answer: "astratto",
            hint: "Non si può toccare o vedere con gli occhi, ma si percepisce con il cuore e la mente."
          },
          {
            sentence: "Un gruppo di molti lupi che cacciano insieme forma un ___.",
            options: ["branco", "stormo", "sciame"],
            correct_answer: "branco",
            hint: "Nome collettivo usato specificamente per i lupi o i cani selvatici."
          }
        ],
        reading_passage: {
          title: "Il viaggio di Sofia",
          text: "Sofia viveva a Firenze con il suo fedele cane Argo. Ogni sabato mattina andava lungo il fiume Arno con il suo taccuino per ritrarre il Ponte Vecchio. Amava osservare i turisti che passeggiavano e i canottieri che scivolavano leggeri sull'acqua limpida.",
          comprehension_questions: [
            {
              question: "Quale animale tiene compagnia a Sofia?",
              options: ["Un cane di nome Argo", "Un gatto di nome Baffo", "Un cavallo bianco"],
              correct_index: 0
            },
            {
              question: "Lungo quale fiume passeggiava?",
              options: ["L'Arno", "Il Tevere", "Il Po"],
              correct_index: 0
            }
          ]
        }
      },
      martedi: {
        day: "martedi",
        topic: "Nomi primitivi, derivati, alterati e composti",
        words_of_the_day: [
          {
            word: "Capostazione",
            definition: "Nome composto da 'capo' e 'stazione', responsabile della stazione ferroviaria.",
            example: "Il capostazione ha dato il segnale verde con la paletta."
          },
          {
            word: "Casina",
            definition: "Nome alterato diminutivo e vezzeggiativo di casa.",
            example: "Nel bosco c'era una deliziosa casina di legno e sassi."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "'Salvadanaio' è formato dall'unione di salva + danaro, quindi è un nome ___.",
            options: ["composto", "primitivo", "alterato"],
            correct_answer: "composto",
            hint: "Due parole distinte unite in una sola!"
          },
          {
            sentence: "Da 'pane' deriva la parola '___' (il negozio dove si compra il pane).",
            options: ["panetteria", "panino", "pagnotta"],
            correct_answer: "panetteria",
            hint: "Nome derivato con suffisso di luogo."
          },
          {
            sentence: "Un 'librone' è un libro grande, quindi è un nome alterato ___.",
            options: ["accrescitivo", "diminutivo", "dispregiativo"],
            correct_answer: "accrescitivo",
            hint: "Finisce con il suffisso -one che accresce la dimensione!"
          }
        ],
        reading_passage: {
          title: "La bottega dei dolci",
          text: "Nel vicolo del borgo c'era la pasticceria del signor Anselmo. Sul bancone brillavano vasetti di miele dorato, biscotti alle mandorle e caramelle alla menta. Anselmo, con il suo grembiule candido, preparava ogni mattina fragranti croissant e torte di mele.",
          comprehension_questions: [
            {
              question: "Come si chiamava il pasticciere?",
              options: ["Anselmo", "Leonardo", "Marco"],
              correct_index: 0
            },
            {
              question: "Quali dolci preparava ogni mattina?",
              options: ["Croissant e torte di mele", "Solo pizza e focacce", "Gelati al cioccolato"],
              correct_index: 0
            }
          ]
        }
      },
      mercoledi: {
        day: "mercoledi",
        topic: "Gli Articoli Determinativi e Indeterminativi",
        words_of_the_day: [
          {
            word: "Gnomo",
            definition: "Piccola creatura fiabesca custode dei boschi e delle miniere sotterranee.",
            example: "Davanti a 'gnomo' si usa l'articolo 'lo': lo gnomo gentile."
          },
          {
            word: "Zaino",
            definition: "Sacca con spallacci per portare libri e oggetti sulle spalle.",
            example: "Prendi lo zaino per andare all'avventura nei sentieri alpini."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Davanti alle parole che iniziano con GN, PS o Z si usa l'articolo singolare ___.",
            options: ["lo", "il", "la"],
            correct_answer: "lo",
            hint: "Si dice 'lo zaino', 'lo scoiattolo', 'lo gnomo'!"
          },
          {
            sentence: "L'articolo indeterminativo femminile si apostrofa ___.",
            options: ["solo davanti a vocale", "sempre", "mai"],
            correct_answer: "solo davanti a vocale",
            hint: "Es. 'un'amica', 'un'isola', ma 'una casa'!"
          },
          {
            sentence: "___ alberi del parco ondeggiano al vento primaverile.",
            options: ["Gli", "I", "Le"],
            correct_answer: "Gli",
            hint: "Davanti a vocale plurale maschile si usa 'gli': gli alberi!"
          }
        ],
        reading_passage: {
          title: "Una notte nello stagno",
          text: "Quando scende la notte, lo stagno dei canneti si riempie di suoni misteriosi. I grilli intonano un coro instancabile, mentre le rane cantano sedute sulle grandi foglie tonde di ninfea. Di tanto in tanto, un gufo batte le ali e scruta tra le ombre con i suoi occhi d'ambra.",
          comprehension_questions: [
            {
              question: "Dove cantano le rane?",
              options: ["Sulle grandi foglie di ninfea", "Sui rami degli alberi", "Sotto la sabbia asciutta"],
              correct_index: 0
            },
            {
              question: "Di che colore sono gli occhi del gufo?",
              options: ["D'ambra", "Verdi smeraldo", "Azzurri come il cielo"],
              correct_index: 0
            }
          ]
        }
      },
      giovedi: {
        day: "giovedi",
        topic: "I Nomi Collettivi e i Nomi Comuni di Genere Promiscuo",
        words_of_the_day: [
          {
            word: "Flotta",
            definition: "Insieme organizzato di molte navi mercantili o militari.",
            example: "La flotta mercantile salpò dal porto al levar del sole."
          },
          {
            word: "Costellazione",
            definition: "Gruppo di stelle nel firmamento che forma una figura ideale.",
            example: "Nel cielo d'inverno riconosciamo facilmente la costellazione di Orione."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Un insieme di tanti alberi vicini costituisce una ___.",
            options: ["foresta", "frasca", "piantagione"],
            correct_answer: "foresta",
            hint: "Nome collettivo di alberi."
          },
          {
            sentence: "Il nome collettivo per indicare un gruppo di cantanti è ___.",
            options: ["coro", "banda", "orchestra"],
            correct_answer: "coro",
            hint: "Le voci che cantano all'unisono formano un coro."
          },
          {
            sentence: "Per indicare la femmina dell'aquila usiamo l'espressione: 'l'aquila ___'.",
            options: ["femmina", "aquilessa", "aquiletta"],
            correct_answer: "femmina",
            hint: "Per i nomi di animali a genere promiscuo si aggiunge maschio o femmina."
          }
        ],
        reading_passage: {
          title: "La migrazione delle gru",
          text: "In ottobre uno stormo immenso di gru solcava il cielo grigio verso i paesi caldi del sud. Volavano disposte a forma di grande freccia, aiutandosi a vicenda a fendere l'aria. La guida in testa batteva le ali con vigore, tracciando la rotta per tutti i giovani compagni.",
          comprehension_questions: [
            {
              question: "Quale forma assumevano le gru in volo?",
              options: ["A forma di freccia", "A cerchio perfetto", "In fila indiana"],
              correct_index: 0
            },
            {
              question: "Verso dove volavano in ottobre?",
              options: ["Verso i paesi caldi del sud", "Verso il Polo Nord", "Sulle vette innevate"],
              correct_index: 0
            }
          ]
        }
      },
      venerdi: {
        day: "venerdi",
        topic: "Gli Articoli Partitivi (del, dello, della, dei, degli, delle)",
        words_of_the_day: [
          {
            word: "Zucchero",
            definition: "Sostanza dolce e cristallina usata per dolci e bevande.",
            example: "Metti dello zucchero nella tazza di latte caldo."
          },
          {
            word: "Partitivo",
            definition: "Articolo che indica una quantità indefinita (un po' di, alcuni/e).",
            example: "'Ho comprato delle mele' significa 'ho comprato alcune mele'."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Vorrei ___ pane fresco appena sfornato, per favore.",
            options: ["del", "il", "uno"],
            correct_answer: "del",
            hint: "Significa 'un po' di' pane, articolo partitivo singolare!"
          },
          {
            sentence: "Nel cortile ci sono ___ bambini che giocano a nascondino.",
            options: ["dei", "i", "gli"],
            correct_answer: "dei",
            hint: "Significa 'alcuni bambini'."
          },
          {
            sentence: "Ho raccolto ___ margherite profumate nel prato.",
            options: ["delle", "le", "una"],
            correct_answer: "delle",
            hint: "Partitivo plurale femminile."
          }
        ],
        reading_passage: {
          title: "La ricetta della torta di mele",
          text: "Per fare una torta deliziosa servono delle mele saporite, della farina finissima e dello zucchero a velo. Si aggiungono poi dei pezzetti di burro e due uova fresche. Quando la teglia entra nel forno caldo, un profumo irresistibile si spande per tutta la casa.",
          comprehension_questions: [
            {
              question: "Cosa si spande per tutta la casa quando la teglia è in forno?",
              options: ["Un profumo irresistibile", "Fumo nero", "Musica da ballo"],
              correct_index: 0
            },
            {
              question: "Quante uova fresche occorrono?",
              options: ["Due uova fresche", "Dieci uova", "Nessun uovo"],
              correct_index: 0
            }
          ]
        }
      },
      sabato: {
        day: "sabato",
        topic: "Ripasso Generale di Morfologia del Nome e dell'Articolo",
        words_of_the_day: [
          {
            word: "Dizionario",
            definition: "Volume prezioso che raccoglie in ordine alfabetico le parole e i loro significati.",
            example: "Quando non conosco il significato di una parola, consulto il dizionario."
          },
          {
            word: "Grammatica",
            definition: "Insieme delle regole che governano la composizione corretta delle frasi.",
            example: "Studiare la grammatica italiana ci permette di esprimerci con precisione."
          }
        ],
        fill_in_sentences: [
          {
            sentence: "Il plurale di 'l'amico' è 'gli ___'.",
            options: ["amici", "amichi", "amigo"],
            correct_answer: "amici",
            hint: "Plurale dolce con C."
          },
          {
            sentence: "'Cane' e 'gatto' sono nomi comuni di ___.",
            options: ["animale", "persona", "cosa"],
            correct_answer: "animale",
            hint: "Fanno parte del regno animale."
          },
          {
            sentence: "Il nome primitivo da cui deriva 'fiorista' è '___'.",
            options: ["fiore", "fioritura", "fioriera"],
            correct_answer: "fiore",
            hint: "La parola base originaria senza prefissi o suffissi."
          }
        ],
        reading_passage: {
          title: "La biblioteca dei sogni",
          text: "Tra i vicoli silenziosi del paese c'era una piccola biblioteca con soffitti a volta e scaffali di noce scuro. Migliaia di libri attendevano i lettori con storie di cavalieri, draghi alati, esploratori dei ghiacci e scienziati geniali. Ogni volta che si apriva una copertina, iniziava una nuova incredibile avventura.",
          comprehension_questions: [
            {
              question: "Di quale legno erano fatti gli scaffali della biblioteca?",
              options: ["Di noce scuro", "Di pino chiaro", "Di bambù flessibile"],
              correct_index: 0
            },
            {
              question: "Cosa iniziava ogni volta che si apriva un libro?",
              options: ["Una nuova incredibile avventura", "Una lezione noiosa", "Un sonnellino"],
              correct_index: 0
            }
          ]
        }
      }
    },
    weeklyTest: {
      title: "Torneo Finale della Domenica: I Signori dei Nomi e degli Articoli!",
      description: "Dimostra la tua bravura con i nomi e gli articoli per conquistare il prestigioso distintivo!",
      questions: [
        {
          id: "w2_q1",
          question: "Quale tra i seguenti è un nome PROPRIO di persona?",
          options: ["Alessandro", "bambino", "studente", "maestro"],
          correct_index: 0,
          explanation: "'Alessandro' è un nome proprio e si scrive sempre con la lettera maiuscola."
        },
        {
          id: "w2_q2",
          question: "Quale di queste parole è un nome ASTRATTO?",
          options: ["Coraggio", "Spada", "Castello", "Cavallo"],
          correct_index: 0,
          explanation: "'Coraggio' indica una virtù e un sentimento, non una cosa materiale tangibile."
        },
        {
          id: "w2_q3",
          question: "Qual è il nome collettivo corretto per un insieme di pecore?",
          options: ["Gregge", "Stormo", "Mandria", "Scolaresca"],
          correct_index: 0,
          explanation: "Un gruppo di pecore o capre si chiama 'gregge'."
        },
        {
          id: "w2_q4",
          question: "Individua il nome COMPOSTO tra le opzioni:",
          options: ["Portaombrelli", "Ombrellino", "Ombrello", "Ombreggiatura"],
          correct_index: 0,
          explanation: "'Portaombrelli' unisce il verbo portare e il nome ombrelli!"
        },
        {
          id: "w2_q5",
          question: "Quale articolo determinativo corretto si usa davanti a 'gnomo'?",
          options: ["Lo", "Il", "Un", "La"],
          correct_index: 0,
          explanation: "Davanti a 'gn' si usa sempre l'articolo 'lo'."
        },
        {
          id: "w2_q6",
          question: "In quale frase l'articolo indeterminativo con apostrofo è CORRETTO?",
          options: [
            "Ho visto un'aquila volare altissima nel cielo.",
            "Ho visto un'albero secolare nel giardino.",
            "Ho visto un'ragazzo giocare a pallone.",
            "Ho visto un'treno veloce sfrecciare sui binari."
          ],
          correct_index: 0,
          explanation: "'Aquila' è singolare femminile, quindi si apostrofa 'un''."
        },
        {
          id: "w2_q7",
          question: "Qual è il nome alterato DISPREGIATIVO di 'gatto'?",
          options: ["Gattaccio", "Gattino", "Gattone", "Gattuccio"],
          correct_index: 0,
          explanation: "Il suffisso '-accio' indica un peggiorativo o dispregiativo."
        },
        {
          id: "w2_q8",
          question: "Individua la frase che contiene un articolo PARTITIVO:",
          options: [
            "Mamma ha comprato del pane profumato dal fornaio.",
            "Il gatto del vicino dorme sul davanzale.",
            "La zampa del cane è ferita leggermente.",
            "L'orologio del nonno fa tic-tac."
          ],
          correct_index: 0,
          explanation: "'Del pane' significa 'un po' di pane', quindi 'del' ha valore partitivo."
        },
        {
          id: "w2_q9",
          question: "Qual è il nome primitivo di 'campanile'?",
          options: ["Campana", "Campanello", "Scampanio", "Campanaro"],
          correct_index: 0,
          explanation: "La parola base originale è 'campana'."
        },
        {
          id: "w2_q10",
          question: "Qual è il plurale corretto di 'la farmacia'?",
          options: ["Le farmacie", "Le farmaci", "Le farmacii", "Le farmaciee"],
          correct_index: 0,
          explanation: "Poiché l'accento cade sulla 'i' (farma-cì-a), al plurale si conserva la 'e': 'farmacie'."
        }
      ]
    }
  }
];

export const CURRICULUM_BY_GRADE: Record<SchoolGrade, WeeklyModule[]> = {
  '1_elem': GRADE_1_MODULES,
  '2_elem': GRADE_2_MODULES,
  '3_elem': GRADE_3_MODULES,
  '4_elem': CURRICULUM_DATA,
  '5_elem': GRADE_5_MODULES,
  '1_media': GRADE_MEDIA_1_MODULES,
  '2_media': GRADE_MEDIA_2_MODULES,
  '3_media': GRADE_MEDIA_3_MODULES
};

export function getCurriculumForGrade(grade: SchoolGrade): WeeklyModule[] {
  return CURRICULUM_BY_GRADE[grade] || CURRICULUM_DATA;
}


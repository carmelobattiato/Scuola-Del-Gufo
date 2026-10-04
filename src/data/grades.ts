import { GradeInfo, SchoolGrade } from '../types';

export const ALL_GRADES: GradeInfo[] = [
  {
    id: '1_elem',
    name: '1ª Elementare',
    shortName: '1ª Elem',
    category: 'elementare',
    description: 'Prime lettere, vocali, sillabe MA-ME-MI, suoni dolci/duri e prime paroline magiche.',
    badge: '🌱 Primi Passi'
  },
  {
    id: '2_elem',
    name: '2ª Elementare',
    shortName: '2ª Elem',
    category: 'elementare',
    description: 'Ortografia, le doppie, GN, GLI, C/G, uso dell\'H, apostrofo e primi nomi/articoli.',
    badge: '🌿 Germoglio'
  },
  {
    id: '3_elem',
    name: '3ª Elementare',
    shortName: '3ª Elem',
    category: 'elementare',
    description: 'Parti del discorso: nomi, aggettivi qualificativi, verbi presente/passato e punteggiatura.',
    badge: '☘️ Esploratore'
  },
  {
    id: '4_elem',
    name: '4ª Elementare',
    shortName: '4ª Elem',
    category: 'elementare',
    description: 'Ortografia difficile, modi e tempi verbali, soggetto e predicato verbale/nominale.',
    badge: '🦉 Gufo Saggio'
  },
  {
    id: '5_elem',
    name: '5ª Elementare',
    shortName: '5ª Elem',
    category: 'elementare',
    description: 'Analisi grammaticale completa, complementi diretti/indiretti, testi narrativi e riassunto.',
    badge: '🏆 Campione Primaria'
  },
  {
    id: '1_media',
    name: '1ª Media (Secondaria)',
    shortName: '1ª Media',
    category: 'media',
    description: 'Morfologia approfondita, sistema verbale completo (congiuntivo/condizionale) e antologia.',
    badge: '⚔️ Cavaliere della Lingua'
  },
  {
    id: '2_media',
    name: '2ª Media (Secondaria)',
    shortName: '2ª Media',
    category: 'media',
    description: 'Sintassi della frase semplice: analisi logica di tutti i complementi, figure retoriche e lessico.',
    badge: '📜 Maestro di Sintassi'
  },
  {
    id: '3_media',
    name: '3ª Media (Secondaria)',
    shortName: '3ª Media',
    category: 'media',
    description: 'Sintassi del periodo: coordinate, subordinate esplicite/implicite e preparazione prova d\'esame.',
    badge: '🎓 Gran Maestro'
  }
];

export function getGradeInfo(gradeId: SchoolGrade): GradeInfo {
  return ALL_GRADES.find(g => g.id === gradeId) || ALL_GRADES[3]; // default 4_elem
}

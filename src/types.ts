export type SchoolGrade = 
  | '1_elem'
  | '2_elem'
  | '3_elem'
  | '4_elem'
  | '5_elem'
  | '1_media'
  | '2_media'
  | '3_media';

export interface GradeInfo {
  id: SchoolGrade;
  name: string;
  shortName: string;
  category: 'elementare' | 'media';
  description: string;
  badge: string;
}

export interface WordOfTheDay {
  word: string;
  definition: string;
  example: string;
}

export interface FillInSentence {
  sentence: string;
  options: string[];
  correct_answer: string;
  hint: string;
}

export interface ComprehensionQuestion {
  question: string;
  options: string[];
  correct_index: number;
}

export interface ReadingPassage {
  title: string;
  text: string;
  comprehension_questions: ComprehensionQuestion[];
}

export interface DailySession {
  day: 'lunedi' | 'martedi' | 'mercoledi' | 'giovedi' | 'venerdi' | 'sabato';
  topic: string;
  words_of_the_day: WordOfTheDay[];
  fill_in_sentences: FillInSentence[];
  reading_passage: ReadingPassage;
}

export interface WeeklyTestQuestion {
  id: string;
  question: string;
  options: string[];
  correct_index: number;
  explanation: string;
}

export interface WeeklyModule {
  weekNumber: number;
  grade: SchoolGrade;
  title: string;
  description: string;
  icon: string;
  days: Record<string, DailySession>;
  weeklyTest: {
    title: string;
    description: string;
    questions: WeeklyTestQuestion[];
  };
}

export interface StudentProgress {
  studentName: string;
  pin: string;
  geminiApiKey: string;
  schoolGrade: SchoolGrade;
  xp: number;
  streak: number;
  lastStreakDate?: string; // YYYY-MM-DD to guarantee streak only increases once per day
  currentWeek: number;
  completedDays: Record<string, string[]>; // e.g. "4_elem_1": ["lunedi", "martedi"]
  weeklyGrades: Record<string, { score: number; percentage: number; badge?: string; date: string; errors: string[] }>;
  badges: string[];
}

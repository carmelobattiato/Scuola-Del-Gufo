import { StudentProgress, SchoolGrade } from '../types';

const STORAGE_KEY = 'accademia_italiano_data_v3';

export const DEFAULT_PROGRESS: StudentProgress = {
  studentName: '',
  pin: '', // Triggers welcoming setup on first launch
  geminiApiKey: '',
  schoolGrade: '4_elem',
  xp: 50, // Welcome gift of 50 XP
  streak: 1, // Start on a positive Day 1 streak
  currentWeek: 1,
  completedDays: {
    "1": []
  },
  weeklyGrades: {},
  badges: ['Esploratore Novizio ⭐']
};

export const StorageService = {
  loadProgress(): StudentProgress {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        return {
          ...DEFAULT_PROGRESS,
          ...parsed,
          schoolGrade: parsed.schoolGrade || '4_elem'
        };
      }
    } catch (e) {
      console.error('Failed to load progress from localStorage', e);
    }
    return DEFAULT_PROGRESS;
  },

  saveProgress(progress: StudentProgress): void {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error('Failed to save progress to localStorage', e);
    }
  },

  hasConfiguredPin(): boolean {
    const data = this.loadProgress();
    return !!data.pin && data.pin.length === 4;
  },

  setSchoolGrade(grade: SchoolGrade): void {
    const progress = this.loadProgress();
    progress.schoolGrade = grade;
    progress.currentWeek = 1; // Start from world 1 of that grade
    this.saveProgress(progress);
  },

  addXP(amount: number): number {
    const progress = this.loadProgress();
    progress.xp = (progress.xp || 0) + amount;
    this.saveProgress(progress);
    return progress.xp;
  },

  markDayCompleted(weekNum: number, day: string): void {
    const progress = this.loadProgress();
    const grade = progress.schoolGrade || '4_elem';
    const progressKey = `${grade}_${weekNum}`;
    
    if (!progress.completedDays[progressKey]) {
      progress.completedDays[progressKey] = [];
    }
    if (!progress.completedDays[progressKey].includes(day)) {
      progress.completedDays[progressKey].push(day);
      progress.xp = (progress.xp || 0) + 100;

      // Lo slancio (streak) aumenta una sola volta al giorno, non a ogni singola lezione
      const todayStr = new Date().toISOString().slice(0, 10); // "YYYY-MM-DD"
      const lastDate = progress.lastStreakDate;

      if (!lastDate) {
        progress.streak = 1;
        progress.lastStreakDate = todayStr;
      } else if (lastDate !== todayStr) {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().slice(0, 10);

        if (lastDate === yesterdayStr) {
          progress.streak = (progress.streak || 0) + 1;
        } else {
          progress.streak = 1;
        }
        progress.lastStreakDate = todayStr;
      }
      // Se lastDate === todayStr lo slancio rimane valido e non aumenta di nuovo oggi

      this.saveProgress(progress);
    }
  },

  saveWeeklyResult(
    weekNum: number, 
    score: number, 
    percentage: number, 
    badge?: string,
    errors: string[] = []
  ): void {
    const progress = this.loadProgress();
    const grade = progress.schoolGrade || '4_elem';
    const weekKey = `${grade}_${weekNum}`;
    
    progress.weeklyGrades[weekKey] = {
      score,
      percentage,
      badge,
      date: new Date().toLocaleDateString('it-IT'),
      errors
    };

    if (badge && !progress.badges.includes(badge)) {
      progress.badges.push(badge);
    }

    // Unlock next week if passed (>= 60%)
    if (percentage >= 60 && progress.currentWeek <= weekNum) {
      progress.currentWeek = weekNum + 1;
    }

    this.saveProgress(progress);
  },

  unlockWeek(weekNum: number): void {
    const progress = this.loadProgress();
    if (progress.currentWeek < weekNum) {
      progress.currentWeek = weekNum;
      this.saveProgress(progress);
    }
  },

  updateSettings(name: string, pin: string, apiKey: string, grade?: SchoolGrade): void {
    const progress = this.loadProgress();
    progress.studentName = name;
    progress.pin = pin;
    progress.geminiApiKey = apiKey;
    if (grade) {
      progress.schoolGrade = grade;
    }
    this.saveProgress(progress);
  },

  resetAll(): void {
    localStorage.removeItem(STORAGE_KEY);
  }
};

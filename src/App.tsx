/**
 * Accademia d'Italiano - Principal Application Entry
 * Built for Italian elementary school students (4ª elementare)
 * Cheerful, soft pastel gamified theme (Azzurro & Viola, Maestro Gufo)
 */

import React, { useState, useEffect } from 'react';
import { getCurriculumForGrade } from './data/curriculumData';
import { StorageService, DEFAULT_PROGRESS } from './services/storage';
import { StudentProgress, WeeklyModule, DailySession, SchoolGrade } from './types';
import { OrientationGuard } from './components/OrientationGuard';
import { Navbar } from './components/Navbar';
import { AcademyDashboard } from './components/AcademyDashboard';
import { DailySessionView } from './components/DailySessionView';
import { SundayWeeklyTestView } from './components/SundayWeeklyTestView';
import { ParentGatewayModal } from './components/ParentGatewayModal';
import { ParentDashboardModal } from './components/ParentDashboardModal';
import { ProfGufoChatModal } from './components/ProfGufoChatModal';
import { AudioSettingsModal } from './components/AudioSettingsModal';
import { SoundFX } from './utils/audioEffects';

export default function App() {
  const [progress, setProgress] = useState<StudentProgress>(DEFAULT_PROGRESS);
  const [selectedWeekNum, setSelectedWeekNum] = useState<number>(1);
  const [activeDayKey, setActiveDayKey] = useState<string | null>(null);
  const [isSundayTestActive, setIsSundayTestActive] = useState<boolean>(false);

  // Modals
  const [isParentGatewayOpen, setIsParentGatewayOpen] = useState<boolean>(false);
  const [isParentDashboardOpen, setIsParentDashboardOpen] = useState<boolean>(false);
  const [isGufoChatOpen, setIsGufoChatOpen] = useState<boolean>(false);
  const [isAudioSettingsOpen, setIsAudioSettingsOpen] = useState<boolean>(false);

  // Global Audio preference
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Sync sound effects controller
  useEffect(() => {
    SoundFX.enabled = soundEnabled;
  }, [soundEnabled]);

  // Load progress from local storage on mount
  useEffect(() => {
    const loaded = StorageService.loadProgress();
    setProgress(loaded);
    setSelectedWeekNum(loaded.currentWeek || 1);

    // If no PIN is configured, show friendly welcome onboarding on first launch
    if (!StorageService.hasConfiguredPin()) {
      setIsParentGatewayOpen(true);
    }
  }, []);

  const currentGradeModules = getCurriculumForGrade(progress.schoolGrade || '4_elem');
  const currentModule = currentGradeModules.find(w => w.weekNumber === selectedWeekNum) || currentGradeModules[0];

  const handleSelectGrade = (newGrade: SchoolGrade) => {
    StorageService.setSchoolGrade(newGrade);
    const updated = StorageService.loadProgress();
    setProgress(updated);
    setSelectedWeekNum(1);
    setActiveDayKey(null);
    setIsSundayTestActive(false);
  };

  // Handler for completing a daily session
  const handleCompleteDay = (dayName: string) => {
    StorageService.markDayCompleted(currentModule.weekNumber, dayName);
    setProgress(StorageService.loadProgress());
  };

  // Handler for Sunday test completion
  const handleSaveSundayResult = (
    score: number, 
    percentage: number, 
    badge?: string,
    errors: string[] = []
  ) => {
    StorageService.saveWeeklyResult(currentModule.weekNumber, score, percentage, badge, errors);
    const updated = StorageService.loadProgress();
    setProgress(updated);
  };

  // Handler for Parent manual unlock
  const handleUnlockWeek = (weekNum: number) => {
    StorageService.unlockWeek(weekNum);
    setProgress(StorageService.loadProgress());
  };

  // Handler for Parent settings updates
  const handleUpdateSettings = (name: string, pin: string, apiKey: string, grade?: SchoolGrade) => {
    StorageService.updateSettings(name, pin, apiKey, grade);
    const updated = StorageService.loadProgress();
    setProgress(updated);
    if (grade && grade !== progress.schoolGrade) {
      setSelectedWeekNum(1);
      setActiveDayKey(null);
      setIsSundayTestActive(false);
    }
  };

  // Handler for resetting all data
  const handleResetProgress = () => {
    StorageService.resetAll();
    const fresh = StorageService.loadProgress();
    setProgress(fresh);
    setSelectedWeekNum(1);
    setActiveDayKey(null);
    setIsSundayTestActive(false);
  };

  // Active daily session object
  const activeSession: DailySession | undefined = activeDayKey ? currentModule.days[activeDayKey] : undefined;

  return (
    <OrientationGuard>
      <div 
        className="min-h-screen bg-[#F0F7FF] text-slate-800 flex flex-col font-['Fredoka',sans-serif]"
        style={{ backgroundColor: '#F0F7FF', color: '#1E293B', colorScheme: 'light only' }}
      >
        
        {/* Top Navigation */}
        <Navbar
          progress={progress}
          currentWeek={currentModule}
          allWeeks={currentGradeModules}
          currentGrade={progress.schoolGrade || '4_elem'}
          onSelectGrade={handleSelectGrade}
          onSelectWeek={(weekNum) => {
            setSelectedWeekNum(weekNum);
            setActiveDayKey(null);
            setIsSundayTestActive(false);
          }}
          onOpenParentArea={() => setIsParentGatewayOpen(true)}
          onOpenGufoChat={() => setIsGufoChatOpen(true)}
          onOpenAudioSettings={() => setIsAudioSettingsOpen(true)}
          soundEnabled={soundEnabled}
          onToggleSound={() => setSoundEnabled(!soundEnabled)}
        />

        {/* Main Workspace Frame */}
        <main className="flex-1 w-full max-w-7xl mx-auto py-3 sm:py-5">
          {activeSession ? (
            <DailySessionView
              session={activeSession}
              weekNumber={currentModule.weekNumber}
              progress={progress}
              onCompleteDay={handleCompleteDay}
              onBackToWeek={() => setActiveDayKey(null)}
              soundEnabled={soundEnabled}
            />
          ) : isSundayTestActive ? (
            <SundayWeeklyTestView
              module={currentModule}
              progress={progress}
              onSaveResult={handleSaveSundayResult}
              onBackToWeek={() => setIsSundayTestActive(false)}
            />
          ) : (
            <AcademyDashboard
              currentWeek={currentModule}
              progress={progress}
              onSelectDay={(dayKey) => {
                setActiveDayKey(dayKey);
                setIsSundayTestActive(false);
              }}
              onOpenSundayTest={() => {
                setIsSundayTestActive(true);
                setActiveDayKey(null);
              }}
              onOpenGufoChat={() => setIsGufoChatOpen(true)}
            />
          )}
        </main>

        {/* Playful Footer */}
        <footer className="py-4 text-center text-xs text-slate-400 font-medium flex items-center justify-center gap-1.5">
          <span>Accademia d'Italiano</span>
          <span>•</span>
          <span>Impara giocando con il Maestro Gufo! 🦉✨</span>
        </footer>

        {/* Parent Gateway Lock / Onboarding Modal */}
        <ParentGatewayModal
          isOpen={isParentGatewayOpen}
          onClose={() => setIsParentGatewayOpen(false)}
          progress={progress}
          onUnlockSuccess={() => {
            setIsParentGatewayOpen(false);
            setIsParentDashboardOpen(true);
          }}
          onInitialSetup={(name, pin, apiKey, grade) => {
            handleUpdateSettings(name, pin, apiKey, grade);
            setIsParentGatewayOpen(false);
            setIsParentDashboardOpen(false);
          }}
        />

        {/* Parent Protected Dashboard Modal */}
        <ParentDashboardModal
          isOpen={isParentDashboardOpen}
          onClose={() => setIsParentDashboardOpen(false)}
          progress={progress}
          allWeeks={currentGradeModules}
          onUnlockWeek={handleUnlockWeek}
          onUpdateSettings={handleUpdateSettings}
          onResetProgress={handleResetProgress}
        />

        {/* Maestro Gufo AI Tutor Interactive Chat */}
        <ProfGufoChatModal
          isOpen={isGufoChatOpen}
          onClose={() => setIsGufoChatOpen(false)}
          studentName={progress.studentName}
          userApiKey={progress.geminiApiKey}
          currentTopic={currentModule.title}
          soundEnabled={soundEnabled}
        />

        {/* Audio & Italian TTS Settings Modal */}
        <AudioSettingsModal
          isOpen={isAudioSettingsOpen}
          onClose={() => setIsAudioSettingsOpen(false)}
        />
      </div>
    </OrientationGuard>
  );
}

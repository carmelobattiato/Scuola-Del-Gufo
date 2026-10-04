import React, { useState, useEffect } from 'react';
import { RotateCw, Smartphone } from 'lucide-react';
import { CuteTeacherAvatar } from './CuteTeacherAvatar';

interface OrientationGuardProps {
  children: React.ReactNode;
}

export const OrientationGuard: React.FC<OrientationGuardProps> = ({ children }) => {
  const [isPortraitMobile, setIsPortraitMobile] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      const isMobileOrTablet = window.innerWidth < 960 || ('ontouchstart' in window && window.innerWidth < 1024);
      setIsPortraitMobile(isPortrait && isMobileOrTablet);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return (
    <>
      {isPortraitMobile && (
        <div 
          className="fixed inset-0 z-50 bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-600 text-white flex flex-col items-center justify-center p-6 text-center select-none shadow-2xl backdrop-blur-md"
          role="alert"
          aria-live="assertive"
        >
          <div className="relative mb-6">
            <CuteTeacherAvatar size="xl" className="animate-bounce" />
            <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-slate-900 rounded-full p-2.5 shadow-lg border-2 border-white animate-spin" style={{ animationDuration: '6s' }}>
              <RotateCw className="w-6 h-6 text-indigo-900" />
            </div>
          </div>

          <div className="max-w-md bg-white/20 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-xl">
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 tracking-wide">
              Gira lo schermo! 🔄
            </h2>
            <p className="text-base text-sky-100 font-bold leading-relaxed mb-4">
              "Gira il tuo dispositivo in orizzontale per entrare nell'Accademia! 🔄"
            </p>
            <p className="text-xs text-white/80">
              L'Accademia d'Italiano è fatta per essere vissuta a tutto schermo, come una vera avventura!
            </p>
          </div>

          <button 
            onClick={() => setIsPortraitMobile(false)}
            className="mt-6 text-xs text-white/80 hover:text-white underline font-semibold"
          >
            Continua comunque in verticale (anteprima)
          </button>
        </div>
      )}

      {/* Main children container */}
      <div className={`min-h-screen w-full transition-all duration-300 ${isPortraitMobile ? 'pointer-events-none filter blur-sm' : ''}`}>
        {children}
      </div>
    </>
  );
};

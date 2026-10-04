import React from 'react';

interface CuteTeacherAvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  mood?: 'happy' | 'speaking' | 'celebrating' | 'thinking';
  className?: string;
}

export const CuteTeacherAvatar: React.FC<CuteTeacherAvatarProps> = ({
  size = 'md',
  mood = 'happy',
  className = ''
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-36 h-36'
  };

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-md transform transition-transform hover:scale-105"
      >
        <defs>
          <radialGradient id="bodyGrad" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#93C5FD" />
            <stop offset="60%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </radialGradient>

          <radialGradient id="bellyGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="80%" stopColor="#EDE9FE" />
            <stop offset="100%" stopColor="#DDD6FE" />
          </radialGradient>

          <linearGradient id="glassesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          <linearGradient id="hatGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>

          <linearGradient id="bowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F43F5E" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>

        {/* Glow halo */}
        <circle cx="100" cy="105" r="85" fill="#E0F2FE" opacity="0.6" />

        {/* Ears / Tuft feathers */}
        <path d="M50 45 L70 85 L35 75 Z" fill="#2563EB" />
        <path d="M150 45 L130 85 L165 75 Z" fill="#2563EB" />
        <path d="M54 52 L68 80 L42 74 Z" fill="#93C5FD" />
        <path d="M146 52 L132 80 L158 74 Z" fill="#93C5FD" />

        {/* Main Body (Plump round friendly owl) */}
        <ellipse cx="100" cy="115" rx="70" ry="68" fill="url(#bodyGrad)" />

        {/* Fluffy wings */}
        <ellipse cx="32" cy="120" rx="16" ry="34" transform="rotate(15 32 120)" fill="#2563EB" />
        <ellipse cx="168" cy="120" rx="16" ry="34" transform="rotate(-15 168 120)" fill="#2563EB" />

        {/* Cute belly with soft feathers pattern */}
        <ellipse cx="100" cy="130" rx="46" ry="46" fill="url(#bellyGrad)" />
        {/* Soft belly scalloped pattern */}
        <path d="M85 115 Q92 122 100 115 Q108 122 115 115" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M78 130 Q88 138 100 130 Q112 138 122 130" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M86 145 Q93 152 100 145 Q107 152 114 145" stroke="#A78BFA" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.7" />

        {/* Cute big eye background circles */}
        <circle cx="70" cy="98" r="28" fill="#FFFFFF" />
        <circle cx="130" cy="98" r="28" fill="#FFFFFF" />

        {/* Big sparkling pupils */}
        <circle cx="72" cy="98" r="16" fill="#1E293B" />
        <circle cx="128" cy="98" r="16" fill="#1E293B" />
        {/* Catchlights in eyes for friendly look */}
        <circle cx="67" cy="92" r="6" fill="#FFFFFF" />
        <circle cx="123" cy="92" r="6" fill="#FFFFFF" />
        <circle cx="76" cy="103" r="2.5" fill="#FFFFFF" />
        <circle cx="132" cy="103" r="2.5" fill="#FFFFFF" />

        {/* Rosy Cheeks */}
        <ellipse cx="48" cy="114" rx="10" ry="6" fill="#FDA4AF" opacity="0.7" />
        <ellipse cx="152" cy="114" rx="10" ry="6" fill="#FDA4AF" opacity="0.7" />

        {/* Cute Teacher Spectacles (Glasses) */}
        <circle cx="70" cy="98" r="26" stroke="url(#glassesGrad)" strokeWidth="5.5" fill="none" />
        <circle cx="130" cy="98" r="26" stroke="url(#glassesGrad)" strokeWidth="5.5" fill="none" />
        {/* Glasses bridge */}
        <path d="M96 97 Q100 93 104 97" stroke="url(#glassesGrad)" strokeWidth="5.5" strokeLinecap="round" fill="none" />
        {/* Glasses side temples */}
        <path d="M44 98 L34 94" stroke="url(#glassesGrad)" strokeWidth="4.5" strokeLinecap="round" />
        <path d="M156 98 L166 94" stroke="url(#glassesGrad)" strokeWidth="4.5" strokeLinecap="round" />

        {/* Cute Beak */}
        <path d="M93 105 Q100 120 107 105 Z" fill="#F59E0B" />
        <path d="M95 106 Q100 114 105 106 Z" fill="#FBBF24" />

        {/* Little Bowtie */}
        <path d="M82 144 L100 152 L82 160 Z" fill="url(#bowGrad)" />
        <path d="M118 144 L100 152 L118 160 Z" fill="url(#bowGrad)" />
        <circle cx="100" cy="152" r="5" fill="#BE123C" />

        {/* Little Graduation Cap (Tocco del Professore) */}
        <g transform="translate(100, 36) rotate(-8) translate(-100, -36)">
          {/* Cap diamond */}
          <polygon points="100,12 155,30 100,48 45,30" fill="url(#hatGrad)" />
          {/* Cap base band */}
          <path d="M72 40 Q100 50 128 40 L124 54 Q100 62 76 54 Z" fill="#5B21B6" />
          {/* Cap button & golden tassel */}
          <circle cx="100" cy="30" r="4.5" fill="#F59E0B" />
          <path d="M100 30 Q125 32 138 52" stroke="#FBBF24" strokeWidth="3" fill="none" />
          <polygon points="135,52 143,50 140,64 133,64" fill="#F59E0B" />
        </g>

        {/* Tiny golden feet at bottom */}
        <ellipse cx="80" cy="180" rx="11" ry="6" fill="#F59E0B" />
        <ellipse cx="120" cy="180" rx="11" ry="6" fill="#F59E0B" />

        {/* Little sparkling star near glasses */}
        <path d="M165 48 L168 56 L176 59 L168 62 L165 70 L162 62 L154 59 L162 56 Z" fill="#FDE047" opacity="0.9" />
        <circle cx="34" cy="50" r="3" fill="#FDE047" />
      </svg>
    </div>
  );
};

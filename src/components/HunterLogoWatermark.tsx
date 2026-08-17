import React from 'react';

interface HunterLogoWatermarkProps {
  position?: 'center' | 'left' | 'right';
  opacity?: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showWordmark?: boolean;
}

export const HunterLogoWatermark: React.FC<HunterLogoWatermarkProps> = ({
  position = 'center',
  opacity = 0.05,
  size = 'lg',
  showWordmark = true
}) => {
  const sizeClasses = {
    sm: 'w-72 h-72',
    md: 'w-96 h-96',
    lg: 'w-[520px] h-[520px]',
    xl: 'w-[750px] h-[750px]'
  };

  const positionClasses = {
    center: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
    left: '-left-20 top-1/2 -translate-y-1/2',
    right: '-right-20 top-1/2 -translate-y-1/2'
  };

  return (
    <div
      className={`absolute pointer-events-none select-none z-0 flex flex-col items-center justify-center ${positionClasses[position]}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className={`relative ${sizeClasses[size]}`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="watermarkGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF4BC" />
              <stop offset="35%" stopColor="#F5D76E" />
              <stop offset="70%" stopColor="#DDB846" />
              <stop offset="100%" stopColor="#9C7B19" />
            </linearGradient>
          </defs>

          {/* Top-Left */}
          <path
            d="M 44 14 L 80 14 C 84 14 86 17 84.5 20.5 L 68 56 C 66.5 59.5 63 62 59 62 L 23 62 C 19 62 17 59 18.5 55.5 L 35 20 C 36.5 16.5 40 14 44 14 Z"
            fill="url(#watermarkGold)"
          />

          {/* Top-Right */}
          <path
            d="M 85 36 L 105 36 C 108 36 109.5 38.5 108.5 41 L 99 62 C 98 64.5 95.5 66 92.5 66 L 72.5 66 C 69.5 66 68 63.5 69 61 L 78.5 41 C 79.5 38.5 82 36 85 36 Z"
            fill="url(#watermarkGold)"
          />

          {/* Bottom-Left */}
          <path
            d="M 27 70 L 47 70 C 50 70 51.5 72.5 50.5 75 L 41 96 C 40 98.5 37.5 100 34.5 100 L 14.5 100 C 11.5 100 10 97.5 11 95 L 20.5 75 C 21.5 72.5 24 70 27 70 Z"
            fill="url(#watermarkGold)"
          />

          {/* Bottom-Right */}
          <path
            d="M 58 70 L 94 70 C 98 70 100 73 98.5 76.5 L 82 112 C 80.5 115.5 77 118 73 118 L 37 118 C 33 118 31 115 32.5 111.5 L 49 76 C 50.5 72.5 54 70 58 70 Z"
            fill="url(#watermarkGold)"
          />
        </svg>
      </div>

      {showWordmark && (
        <div className="mt-4 text-center">
          <span className="font-['Space_Grotesk'] text-[#D3AF37] font-black tracking-[0.35em] text-3xl sm:text-5xl uppercase block">
            HUNTER
          </span>
          <span className="text-[#D3AF37] font-bold text-xs sm:text-sm tracking-[0.4em] uppercase block mt-2">
            RECURSOS HUMANOS INTELIGENTES
          </span>
        </div>
      )}
    </div>
  );
};

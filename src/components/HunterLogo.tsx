import React from 'react';

interface HunterLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textVariant?: 'light' | 'dark' | 'gold';
  align?: 'horizontal' | 'vertical';
}

export const HunterLogo: React.FC<HunterLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textVariant = 'light',
  align = 'horizontal'
}) => {
  const iconDimensions = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20'
  };

  const titleSizes = {
    sm: 'text-base font-extrabold tracking-wider',
    md: 'text-xl font-extrabold tracking-widest',
    lg: 'text-2xl font-extrabold tracking-widest',
    xl: 'text-3xl font-extrabold tracking-widest'
  };

  const subtitleSizes = {
    sm: 'text-[9px] tracking-[0.2em]',
    md: 'text-[11px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]',
    xl: 'text-sm tracking-[0.35em]'
  };

  return (
    <div
      id="hunter-brand-logo"
      className={`inline-flex items-center gap-3 select-none ${
        align === 'vertical' ? 'flex-col text-center' : 'flex-row'
      } ${className}`}
    >
      {/* SVG Icon recreating the Hunter Monogram in #D3AF37 */}
      <div className={`relative flex-shrink-0 ${iconDimensions[size]}`}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(211,175,55,0.35)]"
        >
          <defs>
            {/* Primary #D3AF37 Gold Gradient - brighter and clearer */}
            <linearGradient id="hunterGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFF4BC" />
              <stop offset="30%" stopColor="#F3D568" />
              <stop offset="70%" stopColor="#DDB846" />
              <stop offset="100%" stopColor="#A88318" />
            </linearGradient>

            {/* Highlight gradient with luminous gold */}
            <linearGradient id="hunterGoldLight" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="35%" stopColor="#FCEAB0" />
              <stop offset="70%" stopColor="#E5C358" />
              <stop offset="100%" stopColor="#B38E1B" />
            </linearGradient>

            {/* Soft subtle depth gradient */}
            <linearGradient id="hunterShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#000000" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Top-Left: Large slanted parallelogram */}
          <path
            d="M 44 14 L 80 14 C 84 14 86 17 84.5 20.5 L 68 56 C 66.5 59.5 63 62 59 62 L 23 62 C 19 62 17 59 18.5 55.5 L 35 20 C 36.5 16.5 40 14 44 14 Z"
            fill="url(#hunterGoldGrad)"
          />

          {/* Top-Right: Smaller slanted parallelogram */}
          <path
            d="M 85 36 L 105 36 C 108 36 109.5 38.5 108.5 41 L 99 62 C 98 64.5 95.5 66 92.5 66 L 72.5 66 C 69.5 66 68 63.5 69 61 L 78.5 41 C 79.5 38.5 82 36 85 36 Z"
            fill="url(#hunterGoldLight)"
          />

          {/* Bottom-Left: Smaller slanted parallelogram */}
          <path
            d="M 27 70 L 47 70 C 50 70 51.5 72.5 50.5 75 L 41 96 C 40 98.5 37.5 100 34.5 100 L 14.5 100 C 11.5 100 10 97.5 11 95 L 20.5 75 C 21.5 72.5 24 70 27 70 Z"
            fill="url(#hunterGoldLight)"
          />

          {/* Bottom-Right: Large slanted parallelogram extending down */}
          <path
            d="M 58 70 L 94 70 C 98 70 100 73 98.5 76.5 L 82 112 C 80.5 115.5 77 118 73 118 L 37 118 C 33 118 31 115 32.5 111.5 L 49 76 C 50.5 72.5 54 70 58 70 Z"
            fill="url(#hunterGoldGrad)"
          />
        </svg>
      </div>

      {/* Typography */}
      {showText && (
        <div className={`flex flex-col ${align === 'vertical' ? 'items-center' : 'items-start'}`}>
          <div className="flex items-center gap-1.5 leading-none">
            <span
              style={{ color: '#F3D568' }}
              className={`font-['Space_Grotesk',sans-serif] uppercase font-black tracking-[0.2em] drop-shadow-sm ${titleSizes[size]}`}
            >
              HUNTER
            </span>
          </div>
          <span
            style={{ color: '#E8CA65' }}
            className={`font-bold uppercase whitespace-nowrap mt-1 tracking-wider ${subtitleSizes[size]}`}
          >
            Recursos Humanos Inteligentes
          </span>
        </div>
      )}
    </div>
  );
};

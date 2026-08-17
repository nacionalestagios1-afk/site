import React, { useState, useEffect } from 'react';
import { HunterLogo } from './HunterLogo';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c1015]/95 backdrop-blur-md py-3.5 shadow-xl shadow-black/60'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-start">
          {/* Logo with Hunter Brand Name */}
          <a href="#" className="group flex items-center focus:outline-none" aria-label="Hunter Recursos Humanos Inteligentes">
            <HunterLogo size="md" />
          </a>
        </div>
      </div>
    </header>
  );
};


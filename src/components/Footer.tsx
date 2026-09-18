import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface FooterProps {
  onContactClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-6 sm:px-10 py-16 border-t border-white/10 select-none">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-black text-2xl uppercase tracking-wider text-white">
            Sahil Tariq
          </span>
          <p className="text-xs uppercase tracking-widest text-[#BBCCD7]/60 mt-1">
            3D Creator, Web Designer & Developer
          </p>
        </div>

        {/* Action button */}
        <div className="flex items-center gap-4">
          <ContactButton onClick={onContactClick} />
          <button
            type="button"
            onClick={scrollToTop}
            className="p-3.5 rounded-full border border-white/15 bg-white/5 text-[#D7E2EA] hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-[#D7E2EA]/40 gap-4">
        <span>© {new Date().getFullYear()} Sahil Tariq. All rights reserved.</span>
        <span>Crafting striking and unforgettable digital experiences.</span>
      </div>
    </footer>
  );
};

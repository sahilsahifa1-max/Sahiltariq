import React from 'react';
import { ArrowUp, Instagram, Github, Mail } from 'lucide-react';
import { ContactButton } from './ContactButton';

interface FooterProps {
  onContactClick: () => void;
  onNavigate?: (sectionId: string) => void;
}

// Contact and social links - clearly marked placeholders easy to replace
const INSTAGRAM_URL = "https://instagram.com";
const GITHUB_URL = "https://github.com";
const EMAIL_ADDRESS = "tariqahmadnengroo9622@gmail.com";

export const Footer: React.FC<FooterProps> = ({ onContactClick, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: "About", target: "about" },
    { label: "Price", target: "services" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <footer className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-12 pt-20 sm:pt-28 pb-12 border-t border-white/10 select-none overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Top Call to Action Heading */}
        <h2
          className="hero-heading font-black uppercase tracking-tight leading-tight max-w-3xl"
          style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}
        >
          Let's build something incredible together.
        </h2>

        {/* Supporting prompt */}
        <p className="text-sm sm:text-base md:text-lg text-[#BBCCD7]/70 font-light mt-4 mb-8 max-w-xl">
          Have an idea, project, or website in mind?
        </p>

        {/* Centered Contact Button */}
        <div className="mb-14 sm:mb-16">
          <ContactButton onClick={onContactClick} />
        </div>

        {/* Footer Navigation Links */}
        <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap mb-8">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => {
                if (link.target === "contact") {
                  onContactClick();
                } else if (onNavigate) {
                  onNavigate(link.target);
                } else {
                  const el = document.getElementById(link.target);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/70 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Social / Contact Links */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/60 hover:text-white transition-colors p-2"
          >
            <Instagram className="w-4 h-4" />
            <span>Instagram</span>
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/60 hover:text-white transition-colors p-2"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href={`mailto:${EMAIL_ADDRESS}`}
            className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/60 hover:text-white transition-colors p-2"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>

        {/* Thin Divider */}
        <div className="w-full border-t border-white/10 mb-8" />

        {/* Bottom Row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/50">
          <span>© {new Date().getFullYear()} Sahil Tariq. All rights reserved.</span>

          <span className="hidden md:inline-block">
            Crafting striking and unforgettable digital experiences.
          </span>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 text-[#D7E2EA] hover:bg-white/10 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

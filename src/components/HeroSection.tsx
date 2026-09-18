import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './ContactButton';
import { Magnet } from './Magnet';

interface HeroSectionProps {
  onContactClick: () => void;
  onNavigate: (sectionId: string) => void;
  heroPortraitUrl?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onContactClick,
  onNavigate,
  // Original Jack portrait image from portfolio specification
  heroPortraitUrl = "https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png",
}) => {
  const navLinks = [
    { label: "About", target: "about" },
    { label: "Price", target: "services" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8 z-30"
      >
        {navLinks.map((link) => (
          <button
            key={link.label}
            type="button"
            onClick={() => {
              if (link.target === "contact") {
                onContactClick();
              } else {
                onNavigate(link.target);
              }
            }}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            {link.label}
          </button>
        ))}
      </motion.nav>

      {/* 2. Hero Heading */}
      <div className="w-full overflow-hidden flex items-center justify-center pointer-events-none z-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-6 sm:mt-4 md:-mt-5 select-none"
        >
          Hi, i’m sahil
        </motion.h1>
      </div>

      {/* 3. Hero Portrait with Magnet effect */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex items-end justify-center"
        >
          <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[60vh] sm:max-h-[72vh] flex items-end justify-center">
            {/* Ambient Backlight for 3D depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#7621B0]/25 via-[#B600A8]/15 to-transparent blur-3xl rounded-full -z-10 pointer-events-none" />
            
            {/* Portrait Image (Easily replaced with Sahil's own picture) */}
            <img
              src={heroPortraitUrl}
              alt="Sahil Tariq - 3D Creator and Web Designer"
              className="w-full h-full object-cover object-top rounded-t-[40px] sm:rounded-t-[60px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] filter brightness-95 contrast-105"
              loading="eager"
            />
            {/* Subtle gradient overlay on bottom of portrait to blend into background */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/50 to-transparent pointer-events-none" />
          </div>
        </Magnet>
      </motion.div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20 pointer-events-auto">
        {/* Left paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
        >
          a 3d creator and web designer driven by crafting striking and unforgettable digital experiences
        </motion.p>

        {/* Right Contact button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton onClick={onContactClick} />
        </motion.div>
      </div>
    </section>
  );
};

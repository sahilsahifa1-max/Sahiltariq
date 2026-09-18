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
  const [activeSection, setActiveSection] = React.useState<string>("");

  const navLinks = [
    { label: "About", target: "about", delay: 0.05 },
    { label: "Price", target: "services", delay: 0.1 },
    { label: "Projects", target: "projects", delay: 0.15 },
    { label: "Contact", target: "contact", delay: 0.2 },
  ];

  return (
    <section className="relative min-h-[100dvh] h-[100dvh] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex items-center justify-between px-5 sm:px-8 md:px-12 pt-6 sm:pt-7 md:pt-8 z-30"
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.target;
          return (
            <motion.button
              key={link.label}
              type="button"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: link.delay,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                setActiveSection(link.target);
                if (link.target === "contact") {
                  onContactClick();
                } else {
                  onNavigate(link.target);
                }
              }}
              className="group relative py-1 px-1 sm:px-2 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.25rem] transition-colors duration-200 hover:text-white cursor-pointer"
            >
              <span className="relative z-10 transition-colors duration-200 group-hover:text-white">
                {link.label}
              </span>
              {/* Elegant hover & active indicator underline */}
              <span
                className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#BBCCD7] transition-all duration-300 ease-out ${
                  isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-80'
                }`}
              />
            </motion.button>
          );
        })}
      </motion.nav>

      {/* 2. Hero Heading */}
      <div className="w-full flex items-center justify-center pointer-events-none z-0 px-3 sm:px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[12.5vw] sm:text-[14vw] md:text-[15.5vw] lg:text-[17vw] select-none"
        >
          Hi, i’m sahil
        </motion.h1>
      </div>

      {/* 3. Hero Portrait with Magnet effect (Centered horizontally on all screens) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{ left: '50%', transform: 'translateX(-50%)' }}
        className="absolute bottom-16 sm:bottom-0 z-10 w-[min(88vw,480px)] pointer-events-auto flex items-end justify-center"
      >
        <Magnet
          padding={150}
          strength={3}
          activeTransition="transform 0.3s ease-out"
          inactiveTransition="transform 0.6s ease-in-out"
          className="w-full flex items-end justify-center"
        >
          <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[50vh] sm:max-h-[66vh] md:max-h-[72vh] flex items-end justify-center mx-auto overflow-visible">
            {/* Ambient Backlight for 3D depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#7621B0]/25 via-[#B600A8]/15 to-transparent blur-2xl sm:blur-3xl rounded-full -z-10 pointer-events-none" />
            
            {/* Portrait Image (Original Jack portrait with center-top alignment) */}
            <img
              src={heroPortraitUrl}
              alt="Sahil Tariq - 3D Creator and Web Designer"
              className="w-full h-full object-cover object-center rounded-t-[36px] sm:rounded-t-[50px] md:rounded-t-[60px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)] filter brightness-95 contrast-105"
              loading="eager"
            />
            {/* Gradient overlay on bottom to blend into dark canvas */}
            <div className="absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/60 to-transparent pointer-events-none" />
          </div>
        </Magnet>
      </motion.div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex justify-between items-end px-5 sm:px-8 md:px-12 pb-6 sm:pb-8 md:pb-10 z-20 pointer-events-auto gap-4">
        {/* Left paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[150px] sm:max-w-[220px] md:max-w-[260px]"
          style={{ fontSize: 'clamp(0.72rem, 1.25vw, 1.35rem)' }}
        >
          a 3d creator and web designer driven by crafting striking and unforgettable digital experiences
        </motion.p>

        {/* Right Contact button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-shrink-0"
        >
          <ContactButton onClick={onContactClick} />
        </motion.div>
      </div>
    </section>
  );
};

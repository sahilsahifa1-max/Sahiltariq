import React from 'react';
import { FadeIn } from './FadeIn';
import { AnimatedText } from './AnimatedText';
import { ContactButton } from './ContactButton';
import { decorativeImages } from '../data/decorativeImages';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const aboutText =
    "I'm Sahil Tariq, a creative 3D creator, web designer, and developer focused on building modern digital experiences. I enjoy combining clean UI, immersive 3D visuals, smooth animations, and thoughtful user experiences to create websites and digital projects that stand out. I'm constantly learning, experimenting, and turning ideas into interactive experiences. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden select-none"
    >
      {/* Corner 1: Top-Left Moon Icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src={decorativeImages.topLeftMoon}
            alt="Decorative 3D Moon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)] object-contain"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Corner 2: Top-Right Lego Icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src={decorativeImages.topRightLego}
            alt="Decorative 3D Lego"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)] object-contain"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Corner 3: Bottom-Left 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src={decorativeImages.bottomLeftObject}
            alt="Decorative 3D Shape"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)] object-contain"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Corner 4: Bottom-Right 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src={decorativeImages.bottomRightGroup}
            alt="Decorative 3D Geometric Group"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto drop-shadow-[0_10px_30px_rgba(255,255,255,0.1)] object-contain"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Central Content Column */}
      <div className="relative z-10 w-full max-w-4xl flex flex-col items-center text-center">
        {/* Heading: About me */}
        <FadeIn delay={0} y={40} duration={0.8} className="w-full">
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading/text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="h-10 sm:h-14 md:h-16" />

        {/* Animated paragraph */}
        <div className="max-w-[700px] px-2 sm:px-4">
          <AnimatedText
            text={aboutText}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed"
          />
        </div>

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="h-16 sm:h-20 md:h-24" />

        {/* Contact button below the text block */}
        <FadeIn delay={0.2} y={20} duration={0.6}>
          <ContactButton onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};

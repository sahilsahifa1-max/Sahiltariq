import React, { useRef, useState, useEffect } from 'react';
import { marqueeImagesRow1, marqueeImagesRow2 } from '../data/marqueeImages';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only bind scroll and render media when approaching viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { rootMargin: '300px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
            setScrollOffset(offset);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  // Triple each row for continuous seamless scrolling coverage
  const tripledRow1 = [...marqueeImagesRow1, ...marqueeImagesRow1, ...marqueeImagesRow1];
  const tripledRow2 = [...marqueeImagesRow2, ...marqueeImagesRow2, ...marqueeImagesRow2];

  const row1Transform = `translateX(${scrollOffset - 200}px)`;
  const row2Transform = `translateX(${-(scrollOffset - 200)}px)`;

  return (
    <section
      ref={sectionRef}
      aria-label="Creative Visual Showcases"
      className="relative w-full bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: row1Transform,
            willChange: 'transform',
          }}
        >
          {tripledRow1.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="w-[320px] h-[200px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#16161a] border border-white/5"
            >
              {isVisible ? (
                <img
                  src={src}
                  alt={`Creative 3D Project Work Showcase ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  width="420"
                  height="270"
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full h-full bg-[#16161a]" />
              )}
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 w-max"
          style={{
            transform: row2Transform,
            willChange: 'transform',
          }}
        >
          {tripledRow2.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="w-[320px] h-[200px] sm:w-[380px] sm:h-[240px] md:w-[420px] md:h-[270px] flex-shrink-0 rounded-2xl overflow-hidden bg-[#16161a] border border-white/5"
            >
              {isVisible ? (
                <img
                  src={src}
                  alt={`Creative Motion Design Showcase ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  width="420"
                  height="270"
                  className="w-full h-full object-cover rounded-2xl"
                />
              ) : (
                <div className="w-full h-full bg-[#16161a]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

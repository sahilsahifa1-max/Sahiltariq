import React from 'react';
import { FadeIn } from './FadeIn';
import { servicesData } from '../data/services';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative w-full bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-0 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="w-full">
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* Services List */}
        <div className="w-full border-t border-[rgba(12,12,12,0.15)]">
          {servicesData.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={30}
              duration={0.7}
              className="group border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 transition-colors duration-300 hover:bg-black/[0.02]"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-12">
                {/* Number on left */}
                <div
                  className="font-black text-[#0C0C0C] leading-none select-none flex-shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {service.id}
                </div>

                {/* Name + description stacked vertically on right */}
                <div className="flex flex-col gap-2 sm:gap-3 flex-1 md:pt-3">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

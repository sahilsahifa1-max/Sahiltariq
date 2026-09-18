import React from 'react';
import { motion } from 'framer-motion';
import { testimonialsData, TestimonialItem } from '../data/testimonials';
import { FadeIn } from './FadeIn';

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group relative flex flex-col justify-between rounded-[32px] sm:rounded-[40px] border border-[#D7E2EA]/30 bg-[#111111]/90 p-6 sm:p-8 md:p-9 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:border-[#D7E2EA]/70 hover:bg-[#141414]"
    >
      {/* Top row: Client photo with rich entrance & hover animation */}
      <div className="flex items-center gap-4 sm:gap-5 mb-6">
        {/* Animated Client Picture Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.65,
            delay: 0.1 + index * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          whileHover={{
            scale: 1.06,
            rotate: index % 2 === 0 ? 2 : -2,
            transition: { duration: 0.3, ease: 'easeOut' },
          }}
          className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[22px] overflow-hidden border-2 border-[#D7E2EA]/40 bg-[#1c1c22] shadow-[0_8px_25px_rgba(0,0,0,0.5)] flex-shrink-0 cursor-pointer"
        >
          <img
            src={testimonial.image}
            alt={`${testimonial.name} - ${testimonial.role}`}
            width="80"
            height="80"
            decoding="async"
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </motion.div>

        {/* Client Name & Role */}
        <div className="flex flex-col">
          <h4 className="font-bold text-base sm:text-lg md:text-xl text-white tracking-tight">
            {testimonial.name}
          </h4>
          <span className="text-xs sm:text-sm font-light text-[#BBCCD7]/70 uppercase tracking-wider mt-0.5">
            {testimonial.role}
          </span>
        </div>
      </div>

      {/* Quote */}
      <div className="relative flex-1 flex flex-col justify-between">
        <p className="text-xs sm:text-sm md:text-base text-[#D7E2EA]/85 font-light leading-relaxed tracking-wide italic">
          "{testimonial.quote}"
        </p>

        {/* Subtle decorative bottom accent */}
        <div className="flex items-center gap-1.5 mt-6 pt-4 border-t border-white/5">
          <span className="w-2 h-2 rounded-full bg-[#7621B0]/80" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#BBCCD7]/40" />
          <span className="w-1 h-1 rounded-full bg-[#BBCCD7]/20" />
        </div>
      </div>
    </motion.div>
  );
};

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-12 py-24 sm:py-32 overflow-hidden select-none"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="w-full text-center mb-16 sm:mb-20 md:mb-24">
          <h2
            className="hero-heading font-black uppercase tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 100px)' }}
          >
            What Clients Are Saying
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#BBCCD7]/60 uppercase tracking-widest font-light mt-3">
            Real feedback from creative collaborations
          </p>
        </FadeIn>

        {/* Testimonial Cards Grid (3 columns on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full">
          {testimonialsData.map((item, index) => (
            <TestimonialCard
              key={item.id}
              testimonial={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

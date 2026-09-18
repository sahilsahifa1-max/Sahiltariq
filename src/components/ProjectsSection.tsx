import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { projectsData, ProjectItem } from '../data/projects';
import { LiveProjectButton } from './LiveProjectButton';
import { FadeIn } from './FadeIn';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  });

  // Calculate target scale according to prompt requirement:
  // targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="relative min-h-[75vh] md:h-[85vh] flex items-start justify-center w-full"
    >
      <motion.div
        style={{
          scale,
          top: `calc(${index * 24}px + 4.5rem)`,
        }}
        className="sticky w-full max-w-full rounded-[30px] sm:rounded-[45px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
      >
        {/* Top Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex items-center gap-3 sm:gap-6 flex-wrap">
            {/* Number */}
            <span className="font-black text-2xl sm:text-3xl md:text-4xl text-[#D7E2EA]">
              {project.id}
            </span>

            {/* Category label */}
            <span className="px-3.5 py-1 rounded-full text-xs sm:text-sm font-medium uppercase tracking-wider bg-white/10 text-[#BBCCD7] border border-white/10">
              {project.category}
            </span>

            {/* Project Name */}
            <h3 className="font-bold text-lg sm:text-2xl md:text-3xl text-white uppercase tracking-tight">
              {project.name}
            </h3>
          </div>

          {/* "Live Project" Ghost Button */}
          <div className="flex-shrink-0">
            <LiveProjectButton href={project.liveUrl || "#"} />
          </div>
        </div>

        {/* Project Description excerpt */}
        <p className="text-xs sm:text-sm text-[#D7E2EA]/70 font-light max-w-2xl mt-4 mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Bottom Row: Two-Column Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 md:gap-5 mt-2">
          {/* Left Column: 40% (md:col-span-5) - 2 stacked images */}
          <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4 md:gap-5">
            {/* Left Top Image */}
            <div
              className="w-full rounded-[24px] sm:rounded-[36px] md:rounded-[44px] overflow-hidden bg-[#16161a] border border-white/10"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              <img
                src={project.images.leftTop}
                alt={`${project.name} Screenshot 1`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[24px] sm:rounded-[36px] md:rounded-[44px] hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Left Bottom Image */}
            <div
              className="w-full rounded-[28px] sm:rounded-[40px] md:rounded-[50px] overflow-hidden bg-[#16161a] border border-white/10"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              <img
                src={project.images.leftBottom}
                alt={`${project.name} Screenshot 2`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[28px] sm:rounded-[40px] md:rounded-[50px] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column: 60% (md:col-span-7) - 1 tall image */}
          <div className="md:col-span-7 rounded-[32px] sm:rounded-[45px] md:rounded-[60px] overflow-hidden bg-[#16161a] border border-white/10 min-h-[220px] sm:min-h-[300px] md:h-full">
            <img
              src={project.images.rightMain}
              alt={`${project.name} Main Showcase Screenshot`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[32px] sm:rounded-[45px] md:rounded-[60px] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 pb-32"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} duration={0.8} className="w-full mb-12 sm:mb-16 md:mb-20">
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* 3 Sticky Stacking Cards */}
        <div className="relative flex flex-col gap-16 sm:gap-24">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={projectsData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

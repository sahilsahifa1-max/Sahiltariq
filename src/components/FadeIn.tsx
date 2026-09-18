import React from 'react';
import { motion, type TargetAndTransition, type VariantLabels } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'span' | 'section' | 'header' | 'footer' | 'nav' | 'p' | 'h1' | 'h2' | 'h3';
  whileHover?: TargetAndTransition | VariantLabels;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
  whileHover,
}) => {
  const Component = motion[as] as React.ElementType;

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={whileHover}
      className={className}
    >
      {children}
    </Component>
  );
};

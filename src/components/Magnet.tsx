import React, { useRef, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only bind mouse move for pointer devices that support hover (prevents touch screen interference)
    const isHoverCapable = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isHoverCapable) return;

    const el = ref.current;
    if (!el) return;

    let isHovered = false;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let rafId: number | null = null;

    const updateTransform = () => {
      if (!el) return;

      if (isHovered) {
        // Smoothly interpolate towards target
        currentX += (targetX - currentX) * 0.15;
        currentY += (targetY - currentY) * 0.15;
        el.style.transition = activeTransition;
        el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;

        // Continue RAF while hovered or until settled
        if (Math.abs(targetX - currentX) > 0.1 || Math.abs(targetY - currentY) > 0.1) {
          rafId = requestAnimationFrame(updateTransform);
        } else {
          rafId = null;
        }
      } else {
        // Return smoothly to rest (0, 0)
        currentX = 0;
        currentY = 0;
        el.style.transition = inactiveTransition;
        el.style.transform = `translate3d(0px, 0px, 0px)`;
        rafId = null;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Check if mouse is within element + padding bounds
      const distFromLeft = rect.left - padding;
      const distFromRight = rect.right + padding;
      const distFromTop = rect.top - padding;
      const distFromBottom = rect.bottom + padding;

      if (
        e.clientX >= distFromLeft &&
        e.clientX <= distFromRight &&
        e.clientY >= distFromTop &&
        e.clientY <= distFromBottom
      ) {
        isHovered = true;
        targetX = (e.clientX - centerX) / strength;
        targetY = (e.clientY - centerY) / strength;

        if (rafId === null) {
          rafId = requestAnimationFrame(updateTransform);
        }
      } else {
        if (isHovered) {
          isHovered = false;
          targetX = 0;
          targetY = 0;
          if (rafId !== null) {
            cancelAnimationFrame(rafId);
          }
          rafId = requestAnimationFrame(updateTransform);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [padding, strength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: 'translate3d(0px, 0px, 0px)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

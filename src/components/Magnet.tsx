import React, { useRef, useState, useEffect, useCallback } from 'react';

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
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
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
        setIsHovered(true);
        const offsetX = (e.clientX - centerX) / strength;
        const offsetY = (e.clientY - centerY) / strength;
        setPosition({ x: offsetX, y: offsetY });
      } else {
        if (isHovered) {
          setIsHovered(false);
          setPosition({ x: 0, y: 0 });
        }
      }
    },
    [padding, strength, isHovered]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!ref.current || e.touches.length === 0) return;
      const touch = e.touches[0];
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distFromLeft = rect.left - padding;
      const distFromRight = rect.right + padding;
      const distFromTop = rect.top - padding;
      const distFromBottom = rect.bottom + padding;

      if (
        touch.clientX >= distFromLeft &&
        touch.clientX <= distFromRight &&
        touch.clientY >= distFromTop &&
        touch.clientY <= distFromBottom
      ) {
        setIsHovered(true);
        const offsetX = (touch.clientX - centerX) / (strength * 1.5);
        const offsetY = (touch.clientY - centerY) / (strength * 1.5);
        setPosition({ x: offsetX, y: offsetY });
      }
    },
    [padding, strength]
  );

  const handleTouchEnd = useCallback(() => {
    setIsHovered(false);
    setPosition({ x: 0, y: 0 });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleMouseMove, handleTouchMove, handleTouchEnd]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};

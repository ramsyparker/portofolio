import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

interface ScrollingCardsProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  speed?: number;
}

const ScrollingCards: React.FC<ScrollingCardsProps> = ({
  children,
  direction = 'left',
  speed = 20
}) => {
  const controls = useAnimationControls();
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const lastX = useRef(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const firstGroup = containerRef.current.querySelector('.card-group');
        if (firstGroup) {
          setWidth(firstGroup.scrollWidth);
        }
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [children]);

  const startAnimation = (fromX = 0) => {
    if (width > 0) {
      const duration = 20;
      const pixelsPerSecond = width / duration;
      const remainingDistance = direction === 'left' ? -width - fromX : width - fromX;
      const remainingDuration = Math.abs(remainingDistance / pixelsPerSecond);

      controls.start({
        x: direction === 'left' ? -width : width,
        transition: {
          duration: remainingDuration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }
      });
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startAnimation(lastX.current);
    }
  }, [width, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (containerRef.current) {
      const currentX = parseFloat(getComputedStyle(containerRef.current).transform.split(',')[4] || '0');
      lastX.current = currentX;
      
      controls.stop();
      controls.set({ x: currentX });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (containerRef.current) {
      const currentX = parseFloat(getComputedStyle(containerRef.current).transform.split(',')[4] || '0');
      lastX.current = currentX;
      startAnimation(currentX);
    }
  };

  return (
    <div 
      className="relative overflow-hidden py-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={containerRef}
        className="scroll-container flex"
        initial={{ x: 0 }}
        animate={controls}
      >
        <div className="card-group flex gap-6 items-start">
          {children}
        </div>
        <div className="card-group flex gap-6 items-start">
          {children}
        </div>
        <div className="card-group flex gap-6 items-start">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default ScrollingCards; 
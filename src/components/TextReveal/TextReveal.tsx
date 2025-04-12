import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  children: React.ReactNode;
}

const TextReveal = ({ children }: TextRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    margin: "-10% 0px" 
  });

  return (
    <div ref={ref} className="relative">
      <motion.p
        initial={{ color: "#666666" }}
        animate={isInView ? { color: "#ffffff" } : { color: "#666666" }}
        transition={{
          duration: 1,
          ease: [0.33, 1, 0.68, 1]
        }}
        className="text-lg md:text-xl leading-relaxed tracking-wide"
      >
        {children}
      </motion.p>
    </div>
  );
}

export default TextReveal; 
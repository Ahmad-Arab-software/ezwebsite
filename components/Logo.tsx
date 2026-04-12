import React from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "", light = false }) => {
  return (
    <a href="#" className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Icon Container with 3D perspective */}
      <div style={{ perspective: '1000px' }} className="relative w-10 h-10">
        <motion.div
            className="w-full h-full relative"
            style={{ transformStyle: "preserve-3d" }}
            whileHover={{ 
                rotateX: 10, 
                rotateY: 15,
                scale: 1.1,
                transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
        >
            {/* Logo SVG */}
            <img src="/favicon.svg" alt="" className="absolute inset-0 w-full h-full rounded-lg" />
            {/* Shimmer Effect */}
       
            
            {/* Glow behind */}
            <div className="absolute inset-0 bg-violet-500 blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-300 -z-10 transform translate-z-[-10px]"></div>
        </motion.div>
      </div>

      {/* Typography */}
      <div className="flex flex-col justify-center">
        <span className={`font-display font-bold text-2xl tracking-tighter uppercase leading-none transition-colors duration-300 ${light ? 'text-white' : 'text-neutral-900'}`}>
          ez<span className="text-violet-500 group-hover:text-violet-400 transition-colors">website</span>
        </span>
      </div>
    </a>
  );
};

export default Logo;
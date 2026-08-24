import React from 'react';
import { motion } from 'motion/react';

export const ScrollSpacer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 md:py-10 opacity-80 pointer-events-none">
      <span className="text-[9px] md:text-[10px] uppercase tracking-[0.4em] font-mono mb-3 md:mb-4 text-[#f99db5] opacity-80">
        Scroll
      </span>
      {/* Track line with gradient fade on top & bottom so it never cuts off abruptly */}
      <div className="w-[1px] h-12 md:h-16 bg-gradient-to-b from-transparent via-[#c9c2be] to-transparent relative overflow-hidden">
        <motion.div
          className="w-full h-1/2 bg-gradient-to-b from-transparent via-[#f99db5] to-transparent absolute left-0"
          animate={{
            top: ['-50%', '100%']
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </div>
    </div>
  );
};


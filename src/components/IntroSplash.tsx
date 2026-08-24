import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const IntroSplash: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Short flash timer - 2.4s total duration before starting fade out
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1a1a1a] overflow-hidden"
        >
          {/* Ambient Background Glow Blooms */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-[100px]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, delay: 0.2, ease: "easeOut" }}
            className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-white/5 rounded-full blur-[120px]"
          />

          {/* Floating Sparkles / Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
             {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: [0, 0.6, 0], y: -50 }}
                  transition={{ 
                    duration: 1.5 + Math.random(), 
                    delay: Math.random() * 0.5,
                    ease: "easeInOut" 
                  }}
                  className="absolute w-1 h-1 bg-[#faf7f5] rounded-full blur-[1px]"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${40 + Math.random() * 40}%`
                  }}
                />
             ))}
          </div>

          {/* Bilingual Quote */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 15, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="space-y-5"
            >
              <p className="text-[#faf7f5] font-serif italic text-xl md:text-3xl tracking-wide">
                Nice to meet you.
              </p>
              <p className="text-[#faf7f5]/60 font-sans text-xs md:text-sm tracking-[0.25em]">
                はじめまして
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

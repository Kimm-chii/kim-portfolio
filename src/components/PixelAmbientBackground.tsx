import React, { useEffect, useState, useMemo } from 'react';

interface BlockData {
  id: string;
  xPct: number;
  yPct: number;
  width: number; // in px (48 - 120px)
  height: number; // in px (48 - 120px)
  isPink: boolean;
  delay: number; // in seconds
  duration: number; // in seconds
  maxOpacity: number; // 0.12 - 0.25
}

export const PixelAmbientBackground: React.FC = () => {
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: typeof window !== 'undefined' ? window.innerWidth : 1200,
    height: typeof window !== 'undefined' ? window.innerHeight : 800,
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setDimensions({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, 200);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Generate large block chunks across viewport grid
  const blocks = useMemo(() => {
    const gridStep = 100; // Large 100px grid step
    const cols = Math.ceil(dimensions.width / gridStep);
    const rows = Math.ceil(dimensions.height / gridStep);
    const items: BlockData[] = [];

    // Deterministic pseudo-random generator
    let seed = 108;
    const pseudoRandom = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };

    // Standard block sizes: 48px, 64px, 80px, 96px, 120px
    const blockSizes = [48, 64, 80, 96, 120];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        // Sparse distribution: ~30% spawn chance so chunks feel deliberate and spacious
        if (pseudoRandom() > 0.45) continue;

        const isPink = pseudoRandom() < 0.20; // ~20% pink accent blocks
        const delay = Math.round(pseudoRandom() * 70) / 10; // 0.0s to 7.0s
        const duration = Math.round((5.0 + pseudoRandom() * 4.0) * 10) / 10; // 5.0s to 9.0s smooth gradual cycle
        
        const width = blockSizes[Math.floor(pseudoRandom() * blockSizes.length)];
        const height = blockSizes[Math.floor(pseudoRandom() * blockSizes.length)];
        
        const maxOpacity = Math.round((0.15 + pseudoRandom() * 0.25) * 100) / 100; // 0.15 to 0.40

        items.push({
          id: `block-${r}-${c}`,
          xPct: (c * gridStep) / dimensions.width * 100,
          yPct: (r * gridStep) / dimensions.height * 100,
          width,
          height,
          isPink,
          delay,
          duration,
          maxOpacity,
        });
      }
    }

    return items;
  }, [dimensions.width, dimensions.height]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] select-none overflow-hidden"
      style={{
        WebkitMaskImage: 'radial-gradient(ellipse at center, transparent 5%, black 100%)',
        maskImage: 'radial-gradient(ellipse at center, transparent 5%, black 100%)',
      }}
    >
      <style>{`
        @keyframes ambientChunkFade {
          0%, 100% {
            opacity: 0.05;
          }
          50% {
            opacity: var(--max-op, 0.25);
          }
        }
      `}</style>

      <div className="relative w-full h-full">
        {blocks.map((block) => (
          <div
            key={block.id}
            className={`absolute rounded-none transition-none ${
              block.isPink
                ? 'bg-[#f99db5]/30 border border-[#f99db5]/40'
                : 'bg-black/15 dark:bg-white/15 border border-black/15 dark:border-white/15'
            }`}
            style={{
              left: `${block.xPct}%`,
              top: `${block.yPct}%`,
              width: `${block.width}px`,
              height: `${block.height}px`,
              opacity: 0.02,
              animationName: 'ambientChunkFade',
              animationDuration: `${block.duration}s`,
              animationTimingFunction: 'ease-in-out',
              animationDelay: `-${block.delay}s`,
              animationIterationCount: 'infinite',
              animationFillMode: 'both',
              ['--max-op' as any]: block.maxOpacity,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PixelAmbientBackground;

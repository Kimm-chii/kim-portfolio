import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sliders, Play, Pause, Wand2, ChevronDown, Lightbulb } from 'lucide-react';

type MotionMode = 'Flow' | 'Orbit' | 'Vortex' | 'Drift' | 'Pulse';
type ThemeType = 'Emerald' | 'Sakura' | 'Midnight' | 'Ocean' | 'Monochrome';

const THEMES: Record<ThemeType, string[]> = {
  Emerald: ['#10b981', '#34d399', '#059669', '#022c22'],
  Sakura: ['#fb7185', '#f43f5e', '#fda4af', '#4c0519'],
  Midnight: ['#8b5cf6', '#6366f1', '#4338ca', '#1e1b4b'],
  Ocean: ['#0ea5e9', '#38bdf8', '#0369a1', '#082f49'],
  Monochrome: ['#e4e4e7', '#a1a1aa', '#71717a', '#18181b'],
};

const MODES: MotionMode[] = ['Flow', 'Orbit', 'Vortex', 'Drift', 'Pulse'];
const THEME_OPTIONS: ThemeType[] = ['Emerald', 'Sakura', 'Midnight', 'Ocean', 'Monochrome'];

class Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  colorIdx: number;
  noiseX: number;

  constructor(w: number, h: number) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 0.5;
    this.vy = (Math.random() - 0.5) * 0.5;
    this.size = Math.random() * 2 + 0.5;
    this.colorIdx = Math.floor(Math.random() * 4);
    this.noiseX = Math.random() * 1000;
  }
}

const CustomDropdown = ({ label, options, value, onChange }: { label: string, options: string[], value: string, onChange: (val: any) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <div className="flex justify-between text-[9px] sm:text-[10px] font-mono uppercase tracking-widest mb-1 sm:mb-2 text-[#1a1a1a] dark:text-[#faf7f5]">
        <span className="opacity-60">{label}</span>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-2.5 py-2 sm:px-3 sm:py-2.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-[#1a1a1a] dark:text-[#faf7f5]"
      >
        <span>{value}</span>
        <ChevronDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-50" />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15 }}
            className="absolute z-20 w-full mt-1 bg-[#f5efe8] dark:bg-[#1a1a1a] border border-black/20 dark:border-white/20 overflow-hidden shadow-lg rounded-lg"
          >
            {options.map(opt => (
              <button
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-2.5 py-2 sm:px-3 sm:py-2.5 text-[10px] sm:text-[11px] font-mono uppercase tracking-wider hover:bg-black/10 dark:hover:bg-white/10 transition-colors ${value === opt ? 'text-[#f99db5] bg-black/5 dark:bg-white/5 font-semibold' : 'text-[#1a1a1a] dark:text-[#faf7f5]'}`}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const PlaygroundSection: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1.0);
  const [mode, setMode] = useState<MotionMode>('Flow');
  const [theme, setTheme] = useState<ThemeType>('Emerald');

  const speedRef = useRef(speed);
  const modeRef = useRef(mode);
  const themeRef = useRef(theme);
  const isPlayingRef = useRef(isPlaying);

  useEffect(() => { speedRef.current = speed; }, [speed]);
  useEffect(() => { modeRef.current = mode; }, [mode]);
  useEffect(() => { themeRef.current = theme; }, [theme]);
  useEffect(() => { isPlayingRef.current = isPlaying; }, [isPlaying]);

  const handleRandomize = () => {
    const randomMode = MODES[Math.floor(Math.random() * MODES.length)];
    const randomTheme = THEME_OPTIONS[Math.floor(Math.random() * THEME_OPTIONS.length)];
    const randomSpeed = 0.5 + Math.random() * 2.0;
    
    setMode(randomMode);
    setTheme(randomTheme);
    setSpeed(Number(randomSpeed.toFixed(1)));
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let w = 0;
    let h = 0;
    let time = 0;
    
    let mouse = { x: -1000, y: -1000, active: false };
    let ripples: { x: number, y: number, radius: number, life: number }[] = [];
    
    const initParticles = () => {
      particles = [];
      const num = Math.min((w * h) / 4000, 300);
      for(let i = 0; i < num; i++) {
        particles.push(new Particle(w, h));
      }
    };

    const resize = () => {
      if (canvas.parentElement) {
        w = canvas.width = canvas.parentElement.clientWidth;
        h = canvas.height = canvas.parentElement.clientHeight || 400;
        initParticles();
      }
    };
    
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };
    const onMouseLeave = () => { mouse.active = false; };
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 0,
        life: 1.0
      });
    };
    
    const onTouchMove = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      if(e.touches.length > 0) {
        mouse.x = e.touches[0].clientX - rect.left;
        mouse.y = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };
    const onTouchEnd = () => { mouse.active = false; };
    const onTouchStart = (e: TouchEvent) => {
      const rect = canvas.getBoundingClientRect();
      if(e.touches.length > 0) {
        const tx = e.touches[0].clientX - rect.left;
        const ty = e.touches[0].clientY - rect.top;
        ripples.push({ x: tx, y: ty, radius: 0, life: 1.0 });
        mouse.x = tx;
        mouse.y = ty;
        mouse.active = true;
      }
    };
    
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);
    canvas.addEventListener('click', onClick);
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onTouchEnd);
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });

    resize();
    window.addEventListener('resize', resize);
    
    const render = () => {
      if (isPlayingRef.current) {
         time += 0.005 * speedRef.current;
      }
      
      const isDark = document.documentElement.classList.contains('dark');
      ctx.fillStyle = isDark ? 'rgba(26, 26, 26, 0.25)' : 'rgba(245, 239, 232, 0.25)';
      ctx.fillRect(0, 0, w, h);
      
      const currentTheme = THEMES[themeRef.current];
      const currentMode = modeRef.current;
      const currentSpeed = speedRef.current;
      const playing = isPlayingRef.current;
      
      if (playing) {
          for (let i = ripples.length - 1; i >= 0; i--) {
              let r = ripples[i];
              r.radius += 4 * currentSpeed;
              r.life -= 0.015 * currentSpeed;
              if (r.life <= 0) ripples.splice(i, 1);
          }
      }
      
      for (let p of particles) {
        if (playing) {
          let targetVx = 0;
          let targetVy = 0;
          
          if (currentMode === 'Flow') {
             const angle = Math.sin(p.x * 0.003 + time) + Math.cos(p.y * 0.003 + time);
             targetVx = Math.cos(angle) * 1.5;
             targetVy = Math.sin(angle) * 1.5;
          } else if (currentMode === 'Orbit') {
             const cx = w/2, cy = h/2;
             const dx = p.x - cx;
             const dy = p.y - cy;
             const dist = Math.sqrt(dx*dx + dy*dy) || 1;
             targetVx = -(dy / dist) * 2;
             targetVy = (dx / dist) * 2;
             targetVx += (cx - p.x) * 0.001;
             targetVy += (cy - p.y) * 0.001;
          } else if (currentMode === 'Vortex') {
             const cx = w/2, cy = h/2;
             const dx = p.x - cx;
             const dy = p.y - cy;
             const dist = Math.sqrt(dx*dx + dy*dy) || 1;
             targetVx = -(dy / dist) * 2 - (dx / dist) * 1.5;
             targetVy = (dx / dist) * 2 - (dy / dist) * 1.5;
          } else if (currentMode === 'Drift') {
             targetVx = 1;
             targetVy = Math.sin(time * 5 + p.noiseX) * 0.8;
          } else if (currentMode === 'Pulse') {
             const cx = w/2, cy = h/2;
             const dx = p.x - cx;
             const dy = p.y - cy;
             const dist = Math.sqrt(dx*dx + dy*dy) || 1;
             const pulseStrength = Math.sin(time * 4) * 2;
             targetVx = (dx / dist) * pulseStrength;
             targetVy = (dy / dist) * pulseStrength;
          }
          
          p.vx += (targetVx - p.vx) * 0.05 * currentSpeed;
          p.vy += (targetVy - p.vy) * 0.05 * currentSpeed;
          
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 150) {
               const force = (150 - dist) / 150;
               p.vx += (dx / dist) * force * 1.5 * currentSpeed;
               p.vy += (dy / dist) * force * 1.5 * currentSpeed;
            }
          }
          
          for (let r of ripples) {
             const dx = p.x - r.x;
             const dy = p.y - r.y;
             const dist = Math.sqrt(dx*dx + dy*dy);
             if (Math.abs(dist - r.radius) < 30) {
                const push = (30 - Math.abs(dist - r.radius)) / 30;
                p.vx += (dx / dist) * push * 3 * currentSpeed * r.life;
                p.vy += (dy / dist) * push * 3 * currentSpeed * r.life;
             }
          }
          
          p.x += p.vx * currentSpeed;
          p.y += p.vy * currentSpeed;
          
          if (p.x < 0) p.x += w;
          if (p.x > w) p.x -= w;
          if (p.y < 0) p.y += h;
          if (p.y > h) p.y -= h;
        }
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = currentTheme[p.colorIdx];
        ctx.globalAlpha = 0.8;
        ctx.fill();
      }
      
      if (playing) {
        for (let r of ripples) {
            ctx.beginPath();
            ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
            ctx.strokeStyle = currentTheme[1];
            ctx.globalAlpha = r.life * 0.4;
            ctx.lineWidth = 1;
            ctx.stroke();
        }
      }
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
      canvas.removeEventListener('click', onClick);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
      canvas.removeEventListener('touchstart', onTouchStart);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="playground" className="scroll-mt-16 lg:scroll-mt-24 py-6 sm:py-12 lg:py-10 xl:min-h-screen xl:flex xl:flex-col xl:justify-center relative border-t border-black/10 dark:border-white/10">
      <div className="max-w-[1400px] mx-auto px-3.5 sm:px-6 lg:px-12 w-full space-y-3.5 sm:space-y-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-1.5 sm:gap-4 text-[#1a1a1a] dark:text-[#faf7f5]">
          <div>
            <span className="text-[9px] sm:text-[11px] font-mono tracking-[0.2em] uppercase opacity-70 text-[#f99db5] mb-0.5 sm:mb-1 block">
              03 // Interactive Playground
            </span>
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-sans font-semibold tracking-tight text-[#1a1a1a] dark:text-[#faf7f5]">
              Generative Motion Canvas
            </h2>
          </div>
          <p className="text-[11px] sm:text-xs md:text-sm opacity-70 max-w-md leading-relaxed font-sans md:text-right">
            Explore a lightweight real-time canvas experiment that blends motion, interaction, and generative visuals.
          </p>
        </div>

        {/* Canvas & Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 lg:gap-5 items-stretch">
          {/* Canvas Viewport */}
          <div className="lg:col-span-8 relative border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 aspect-[16/10] sm:aspect-video max-h-[220px] sm:max-h-[360px] xl:max-h-[400px] w-full flex items-center justify-center overflow-hidden rounded-lg">
            <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair touch-none" />

            <div className="absolute top-2.5 left-2.5 sm:top-4 sm:left-4 flex items-center gap-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-black/20 dark:border-white/20 bg-[#f5efe8]/90 dark:bg-[#1a1a1a]/90 text-[8px] sm:text-[9px] font-mono uppercase tracking-widest text-[#1a1a1a] dark:text-[#faf7f5] backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f99db5] animate-pulse"></span>
              <span>Generative Experiment</span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute bottom-2.5 right-2.5 sm:bottom-4 sm:right-4 p-2 sm:p-2.5 rounded-full bg-black/10 dark:bg-white/10 text-[#1a1a1a] dark:text-[#faf7f5] hover:bg-[#1a1a1a] hover:text-[#faf7f5] dark:hover:bg-white dark:hover:text-[#1a1a1a] border border-black/20 dark:border-white/20 transition-all cursor-pointer backdrop-blur-md active:scale-95"
              title={isPlaying ? "Pause Canvas" : "Play Canvas"}
            >
              {isPlaying ? <Pause className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 ml-0.5" />}
            </button>
          </div>

          {/* Controls Panel */}
          <div className="lg:col-span-4 p-3.5 sm:p-5 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex flex-col justify-between gap-3 sm:gap-4 h-full text-[#1a1a1a] dark:text-[#faf7f5] rounded-lg">
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-2 sm:pb-3">
              <h3 className="text-[9px] font-mono uppercase tracking-[0.3em] opacity-60 flex items-center gap-1.5">
                <Sliders className="w-3 h-3 sm:w-3.5 sm:h-3.5 opacity-60" />
                Parameters
              </h3>
              <button 
                onClick={handleRandomize}
                className="flex items-center gap-1 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest opacity-60 hover:opacity-100 hover:text-[#f99db5] transition-colors cursor-pointer active:scale-95"
              >
                <Wand2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                Randomize
              </button>
            </div>

            {/* Speed Slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-[9px] sm:text-[10px] font-mono uppercase tracking-widest">
                <span className="opacity-60">Flow Speed</span>
                <span className="opacity-100 font-medium">{speed.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="3.0"
                step="0.1"
                value={speed}
                onChange={(e) => setSpeed(parseFloat(e.target.value))}
                className="w-full accent-[#1a1a1a] dark:accent-[#faf7f5] bg-black/20 dark:bg-white/20 cursor-pointer h-1.5 rounded-full outline-none appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-[#1a1a1a] dark:[&::-webkit-slider-thumb]:bg-[#faf7f5] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              />
            </div>

            {/* Motion Mode Dropdown */}
            <CustomDropdown 
              label="Motion Mode" 
              options={MODES} 
              value={mode} 
              onChange={(val) => setMode(val as MotionMode)} 
            />

            {/* Theme Dropdown */}
            <CustomDropdown 
              label="Theme" 
              options={THEME_OPTIONS} 
              value={theme} 
              onChange={(val) => setTheme(val as ThemeType)} 
            />
          </div>
        </div>

        {/* Ideas & Applications Box */}
        <div className="p-3.5 sm:p-5 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-[#1a1a1a] dark:text-[#faf7f5] rounded-lg">
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <Lightbulb className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#f99db5] opacity-80" />
            <h4 className="text-xs sm:text-sm font-sans font-medium tracking-wide">Ideas & Applications</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-4">
            <div className="space-y-0.5 sm:space-y-1">
              <h5 className="text-[9px] sm:text-[11px] font-medium font-mono uppercase tracking-widest text-[#1a1a1a] dark:text-[#faf7f5]">Hero Backgrounds</h5>
              <p className="text-[11px] sm:text-xs text-[#1a1a1a]/70 dark:text-[#faf7f5]/70 leading-relaxed">
                Create subtle animated backgrounds for modern landing pages that respond to user interaction.
              </p>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <h5 className="text-[9px] sm:text-[11px] font-medium font-mono uppercase tracking-widest text-[#1a1a1a] dark:text-[#faf7f5]">Interactive Experiences</h5>
              <p className="text-[11px] sm:text-xs text-[#1a1a1a]/70 dark:text-[#faf7f5]/70 leading-relaxed">
                Enhance user interaction with responsive visual effects that follow cursor movements and clicks.
              </p>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              <h5 className="text-[9px] sm:text-[11px] font-medium font-mono uppercase tracking-widest text-[#1a1a1a] dark:text-[#faf7f5]">Creative Interfaces</h5>
              <p className="text-[11px] sm:text-xs text-[#1a1a1a]/70 dark:text-[#faf7f5]/70 leading-relaxed">
                Experiment with lightweight generative visuals for portfolios, microsites, and digital experiences.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};


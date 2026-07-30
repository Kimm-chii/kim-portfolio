import React from 'react';
import { motion } from 'motion/react';
import { Code2, Layout, Sparkles, Zap, CheckCircle2, Clock, DollarSign, ArrowRight } from 'lucide-react';
import { PortfolioData, Service } from '../types';
import { sounds } from '../utils/sound';

interface ServicesSectionProps {
  data: PortfolioData;
  onSelectServiceForEstimate: (service: Service) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ data, onSelectServiceForEstimate }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-6 h-6 text-emerald-400" />;
      case 'Layout':
        return <Layout className="w-6 h-6 text-sky-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Zap':
        return <Zap className="w-6 h-6 text-rose-400" />;
      default:
        return <Code2 className="w-6 h-6 text-emerald-400" />;
    }
  };

  return (
    <section id="services" className="py-24 relative border-t border-white/10 dark:border-white/10 light:border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 block font-sans">
              03 / CAPABILITIES & SERVICES
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif italic font-light tracking-tight">
              Engagements & Deliverables
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest opacity-60 max-w-md leading-relaxed">
            Transparent, fixed-scope creative and engineering engagements tailored for high-growth tech companies and design-conscious brands.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.services.map((service, idx) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="p-8 border border-white/10 dark:border-white/10 light:border-black/10 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFEFEA] hover:border-white/30 dark:hover:border-white/30 light:hover:border-black/30 flex flex-col justify-between space-y-6 transition-colors"
            >
              <div className="space-y-4">
                {/* Header Icon + Prices */}
                <div className="flex items-center justify-between gap-4">
                  <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40">
                    03.{idx + 1} / SERVICE
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider">
                    <span className="px-3 py-1 border border-white/10 bg-white/5">
                      From {service.startingPrice}
                    </span>
                    <span className="px-3 py-1 border border-white/10 opacity-60 flex items-center gap-1">
                      <Clock className="w-3 h-3 opacity-50" />
                      {service.estimatedTimeline}
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-3xl font-serif italic">{service.title}</h3>
                  <p className="text-[10px] font-mono uppercase tracking-widest opacity-50 mt-1">{service.subtitle}</p>
                </div>

                <p className="text-xs opacity-70 leading-relaxed font-sans">{service.description}</p>

                {/* Deliverables List */}
                <div className="pt-2 space-y-2 border-t border-white/10">
                  <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-40">Key Deliverables</h4>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs opacity-80">
                        <CheckCircle2 className="w-3.5 h-3.5 opacity-60 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Estimate Scope Action */}
              <button
                onClick={() => {
                  sounds.playClick();
                  onSelectServiceForEstimate(service);
                }}
                onMouseEnter={() => sounds.playHover()}
                className="w-full py-3 px-4 border border-white/20 hover:border-white/60 text-xs font-medium uppercase tracking-[0.2em] transition-colors flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Calculate Scope for {service.title}</span>
                <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

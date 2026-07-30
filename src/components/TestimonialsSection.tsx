import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Star, CheckCircle, ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { PortfolioData } from '../types';
import { sounds } from '../utils/sound';

interface TestimonialsSectionProps {
  data: PortfolioData;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ data }) => {
  const [openFaqId, setOpenFaqId] = useState<string>('faq-1');

  const toggleFaq = (id: string) => {
    sounds.playClick();
    setOpenFaqId((prev) => (prev === id ? '' : id));
  };

  return (
    <section className="py-24 relative border-t border-white/10 dark:border-white/10 light:border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* Testimonials */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 block font-sans">
                07 / CLIENT VALIDATION
              </span>
              <h2 className="text-4xl sm:text-6xl font-serif italic font-light tracking-tight">
                Praise & Testimonials
              </h2>
            </div>
            <p className="text-xs uppercase tracking-widest opacity-60 max-w-md leading-relaxed">
              Feedback from founders, product directors, and creative leaders who commissioned custom digital projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.testimonials.map((test) => (
              <div
                key={test.id}
                className="p-8 border border-white/10 dark:border-white/10 light:border-black/10 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFEFEA] flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 opacity-80">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>

                  <p className="text-lg font-serif italic font-light leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/10 border border-white/20 font-mono text-xs font-medium flex items-center justify-center shrink-0">
                    {test.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-medium uppercase tracking-wider flex items-center gap-1">
                      <span>{test.author}</span>
                      <CheckCircle className="w-3 h-3 opacity-60" />
                    </h4>
                    <p className="text-[10px] font-mono opacity-50 uppercase tracking-widest">{test.role} &bull; {test.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Accordion */}
        <div id="faq" className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 block font-sans">
                08 / CLIENT GUIDANCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-serif italic font-light tracking-tight">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-xs uppercase tracking-widest opacity-60 max-w-md leading-relaxed">
              Clear answers regarding pricing models, timezone coordination, technical stack flexibility, and post-launch support.
            </p>
          </div>

          <div className="max-w-4xl space-y-3">
            {data.faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="border border-white/10 dark:border-white/10 light:border-black/10 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFEFEA] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    onMouseEnter={() => sounds.playHover()}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 font-serif italic text-lg sm:text-xl font-light cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[9px] font-mono uppercase tracking-[0.2em] px-2 py-0.5 border border-white/10 opacity-60">
                        {faq.category}
                      </span>
                      <span>{faq.question}</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 opacity-50 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="px-6 pb-6 text-xs opacity-70 font-sans leading-relaxed border-t border-white/10 pt-4"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

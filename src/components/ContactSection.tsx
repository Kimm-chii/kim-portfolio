import React, { useState } from 'react';
import { Mail, MapPin, Copy, Check, ArrowUpRight, Sparkles } from 'lucide-react';
import { PortfolioData } from '../types';

interface ContactSectionProps {
  data: PortfolioData;
  onShowToast: (title: string, desc?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  data,
  onShowToast
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.contact.email);
    setCopied(true);
    onShowToast('Email address copied!', data.contact.email);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="scroll-mt-10 lg:scroll-mt-8 py-12 sm:py-16 md:py-20 lg:py-24 relative border-t border-black/10 dark:border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 w-full text-center space-y-8 sm:space-y-12 text-[#1a1a1a] dark:text-[#faf7f5]">
        
        {/* Header */}
        <div className="space-y-3">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase opacity-70 text-[#f99db5] block">
            04 // Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-semibold tracking-tight text-[#1a1a1a] dark:text-[#faf7f5]">
            Say Hello &amp; Connect
          </h2>
          <p className="text-xs sm:text-sm md:text-base opacity-70 max-w-lg mx-auto leading-relaxed font-sans pt-2 text-[#1a1a1a] dark:text-[#faf7f5]">
            Have something you'd like to share or discuss? Whether it's a project, a question, or just saying hello, feel free to reach out by email.
          </p>
        </div>

        {/* Email & Location Card */}
        <div className="p-5 sm:p-8 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 max-w-xl mx-auto space-y-5 rounded-lg text-[#1a1a1a] dark:text-[#faf7f5]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 border border-black/10 dark:border-white/10 bg-black/5 dark:bg-black/20 rounded-md">
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-[#1a1a1a] dark:text-[#faf7f5]">
              <Mail className="w-4 h-4 opacity-70 text-[#f99db5]" />
              <span>{data.contact.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 border border-black/15 dark:border-white/15 rounded-md text-[11px] sm:text-xs font-mono tracking-wider uppercase text-[#1a1a1a] dark:text-[#faf7f5] transition-all cursor-pointer flex items-center gap-2 shadow-sm active:scale-95 shrink-0"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#f99db5]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-mono opacity-60 text-[#1a1a1a] dark:text-[#faf7f5]">
            <MapPin className="w-3.5 h-3.5 opacity-80 text-[#f99db5]" />
            <span>{data.contact.location}</span>
          </div>

          {/* Social Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {[
              { name: 'GitHub', href: data.contact.github },
              { name: 'LinkedIn', href: data.contact.linkedin },
            ].filter((s) => Boolean(s.href)).map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-1.5 bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 border border-black/15 dark:border-white/15 rounded-md text-[11px] sm:text-xs font-mono tracking-wider uppercase text-[#1a1a1a] dark:text-[#faf7f5] transition-all flex items-center gap-1.5 shadow-sm active:scale-95 opacity-80 hover:opacity-100"
              >
                <span>{social.name}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-xs opacity-60 font-mono flex items-center justify-center gap-1.5">
          <span>Thoughtfully designed &amp; built for the web</span>
          <Sparkles className="w-3.5 h-3.5 text-[#f99db5]" />
        </p>

      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { motion } from 'motion/react';
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
    <section id="contact" className="py-20 relative border-t border-white/10 dark:border-white/10 light:border-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 block font-mono">
            04 / CONTACT & CONNECT
          </span>
          <h2 className="text-3xl sm:text-5xl font-sans font-semibold tracking-tight">
            Say Hello & Connect
          </h2>
          <p className="text-xs sm:text-sm opacity-70 max-w-lg mx-auto leading-relaxed font-sans">
            Have something you'd like to share or discuss? Whether it's a project, a question, or just saying hello, feel free to reach out by email.
          </p>
        </div>

        {/* Email & Location Card */}
        <div className="p-8 rounded-3xl border border-white/15 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFEFEA] max-w-xl mx-auto space-y-6 shadow-xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl border border-white/10 bg-white/5">
            <div className="flex items-center gap-3 text-xs font-mono">
              <Mail className="w-4 h-4 opacity-60 text-pink-400" />
              <span>{data.contact.email}</span>
            </div>
            <button
              onClick={handleCopyEmail}
              className="px-4 py-2 rounded-full border border-white/20 text-[10px] font-mono uppercase tracking-wider hover:bg-white hover:text-black transition-colors cursor-pointer flex items-center gap-2"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs font-mono opacity-60">
            <MapPin className="w-3.5 h-3.5 opacity-80" />
            <span>{data.contact.location}</span>
          </div>

          {/* Social Pills */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
            {[
              { name: 'GitHub', href: data.contact.github },
              { name: 'LinkedIn', href: data.contact.linkedin },
            ].filter((s) => Boolean(s.href)).map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-mono uppercase tracking-wider hover:border-white/40 transition-colors flex items-center gap-1.5 opacity-70 hover:opacity-100"
              >
                <span>{social.name}</span>
                <ArrowUpRight className="w-3 h-3 opacity-50" />
              </a>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-[11px] opacity-40 font-mono flex items-center justify-center gap-1.5">
          <span>Thoughtfully designed & built for the web</span>
          <Sparkles className="w-3 h-3 text-emerald-400 opacity-80" />
        </p>

      </div>
    </section>
  );
};

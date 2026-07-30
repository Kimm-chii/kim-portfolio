import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Sparkles, Check, Send, ShieldCheck, HelpCircle } from 'lucide-react';
import { PortfolioData, Service } from '../types';
import { sounds } from '../utils/sound';

interface EstimateCalculatorProps {
  data: PortfolioData;
  preselectedService?: Service | null;
  onSendEstimateToForm: (estimateSummary: string) => void;
  onShowToast: (title: string, desc?: string) => void;
}

export const EstimateCalculator: React.FC<EstimateCalculatorProps> = ({
  data,
  preselectedService,
  onSendEstimateToForm,
  onShowToast
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    preselectedService ? preselectedService.id : 'srv-fullstack'
  );
  const [selectedTimeline, setSelectedTimeline] = useState<'urgent' | 'standard' | 'flexible'>('standard');
  const [selectedAddons, setSelectedAddons] = useState<string[]>(['addon-ai', 'addon-seo']);

  const addons = [
    { id: 'addon-ai', label: 'Gemini / OpenAI Integration', price: 1200, desc: 'LLM prompts, streaming, structured output APIs' },
    { id: 'addon-ds', label: 'Figma Design System Tokens', price: 900, desc: 'Automated theme variables, component library' },
    { id: 'addon-3d', label: 'WebGL 3D / Shader Effects', price: 1500, desc: 'Custom Three.js canvas & particle animations' },
    { id: 'addon-seo', label: '100/100 Core Web Vitals Guarantee', price: 600, desc: 'Performance tuning, image optimization, audit' },
    { id: 'addon-i18n', label: 'Multi-Language (EN/JA/CN)', price: 750, desc: 'Localized translation architecture' },
  ];

  // Base price lookup
  const getBasePrice = () => {
    switch (selectedServiceId) {
      case 'srv-fullstack': return 5500;
      case 'srv-design': return 4200;
      case 'srv-creative': return 4800;
      case 'srv-audit': return 2200;
      default: return 5000;
    }
  };

  const getTimelineMultiplier = () => {
    switch (selectedTimeline) {
      case 'urgent': return 1.25; // Rush priority
      case 'standard': return 1.0;
      case 'flexible': return 0.95;
      default: return 1.0;
    }
  };

  const calculateTotal = () => {
    const base = getBasePrice();
    const addonsTotal = selectedAddons.reduce((sum, addonId) => {
      const addon = addons.find((a) => a.id === addonId);
      return sum + (addon ? addon.price : 0);
    }, 0);
    const subtotal = base + addonsTotal;
    const finalEstimate = Math.round(subtotal * getTimelineMultiplier());
    return {
      min: finalEstimate,
      max: Math.round(finalEstimate * 1.15)
    };
  };

  const toggleAddon = (id: string) => {
    sounds.playClick();
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleApplyEstimateToContact = () => {
    sounds.playSuccess();
    const serviceObj = data.services.find((s) => s.id === selectedServiceId);
    const addonLabels = selectedAddons
      .map((id) => addons.find((a) => a.id === id)?.label)
      .filter(Boolean)
      .join(', ');

    const estimate = calculateTotal();
    const summary = `Selected Service: ${serviceObj?.title || 'Custom Engagement'}
Timeline: ${selectedTimeline.toUpperCase()}
Selected Add-ons: ${addonLabels || 'None'}
Estimated Budget Range: $${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()} USD`;

    onSendEstimateToForm(summary);
    onShowToast('Estimate details exported to contact form below!', `Range: $${estimate.min.toLocaleString()} - $${estimate.max.toLocaleString()} USD`);

    const elem = document.querySelector('#contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totals = calculateTotal();

  return (
    <section id="calculator" className="py-24 relative border-t border-white/10 dark:border-white/10 light:border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[10px] uppercase tracking-[0.3em] opacity-40 mb-2 block font-sans">
              05 / SCOPE & BUDGET CALCULATOR
            </span>
            <h2 className="text-4xl sm:text-6xl font-serif italic font-light tracking-tight">
              Project Scope Calculator
            </h2>
          </div>
          <p className="text-xs uppercase tracking-widest opacity-60 max-w-md leading-relaxed">
            Select your project parameters below for an instant, transparent budget range and timeline proposal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Form */}
          <div className="lg:col-span-8 space-y-8 p-8 border border-white/10 dark:border-white/10 light:border-black/10 bg-[#0D0D0D] dark:bg-[#0D0D0D] light:bg-[#EFEFEA]">
            {/* Step 1: Engagement Type */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 block">
                05.1 / PRIMARY ENGAGEMENT
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.services.map((service) => {
                  const isSelected = selectedServiceId === service.id;
                  return (
                    <button
                      key={service.id}
                      onClick={() => {
                        sounds.playClick();
                        setSelectedServiceId(service.id);
                      }}
                      onMouseEnter={() => sounds.playHover()}
                      className={`p-4 border transition-all text-left cursor-pointer ${
                        isSelected
                          ? 'bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white border-white'
                          : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-serif italic font-medium">{service.title}</span>
                        <span className="font-mono text-[10px] opacity-80">{service.startingPrice}</span>
                      </div>
                      <p className="text-[10px] font-mono uppercase tracking-wider opacity-60 line-clamp-1">
                        {service.subtitle}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Timeline Expectation */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 block">
                05.2 / LAUNCH TIMELINE
              </span>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'urgent', label: 'Rush Sprint', detail: '< 2 Weeks (+25%)' },
                  { id: 'standard', label: 'Standard Delivery', detail: '2 — 4 Weeks (Base)' },
                  { id: 'flexible', label: 'Flexible / Q4', detail: '4+ Weeks (-5%)' }
                ].map((item) => {
                  const isSelected = selectedTimeline === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        sounds.playClick();
                        setSelectedTimeline(item.id as 'urgent' | 'standard' | 'flexible');
                      }}
                      onMouseEnter={() => sounds.playHover()}
                      className={`p-3.5 border transition-all text-left cursor-pointer ${
                        isSelected
                          ? 'bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white border-white'
                          : 'border-white/10 opacity-60 hover:opacity-100 hover:border-white/30'
                      }`}
                    >
                      <h4 className="text-xs uppercase tracking-wider font-medium">{item.label}</h4>
                      <p className="text-[9px] font-mono opacity-50 mt-1">{item.detail}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Add-on Capabilities */}
            <div className="space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 block">
                05.3 / OPTIONAL ADD-ONS
              </span>
              <div className="space-y-2">
                {addons.map((addon) => {
                  const isSelected = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 border cursor-pointer flex items-center justify-between transition-all ${
                        isSelected
                          ? 'border-white/40 bg-white/5 text-white'
                          : 'border-white/10 opacity-50 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 border flex items-center justify-center ${
                          isSelected ? 'bg-white border-white text-black' : 'border-white/30'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <div>
                          <h4 className="text-xs uppercase tracking-wider font-medium">{addon.label}</h4>
                          <p className="text-[10px] opacity-60">{addon.desc}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono opacity-80">+${addon.price}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="lg:col-span-4 p-8 border border-white/10 dark:border-white/10 light:border-black/10 bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-[#F8F8F6] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 block">
                PROPOSED ESTIMATE
              </span>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">Budget Range</span>
                <div className="text-3xl sm:text-4xl font-serif italic tracking-tight mt-1">
                  ${totals.min.toLocaleString()} — ${totals.max.toLocaleString()}
                  <span className="text-[10px] font-mono uppercase tracking-widest opacity-40 block mt-2">USD (Fixed Price Quote)</span>
                </div>
              </div>

              <div className="p-4 border border-white/10 space-y-2 text-xs">
                <div className="flex items-center justify-between opacity-60">
                  <span>Selected Service</span>
                  <span className="font-serif italic font-medium">
                    {data.services.find((s) => s.id === selectedServiceId)?.title}
                  </span>
                </div>
                <div className="flex items-center justify-between opacity-60">
                  <span>Active Add-ons</span>
                  <span className="font-mono">{selectedAddons.length} Selected</span>
                </div>
                <div className="flex items-center justify-between opacity-60">
                  <span>Performance Guarantee</span>
                  <span className="font-mono">95+ Core Vitals</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-[10px] font-mono uppercase tracking-widest opacity-50">
                <ShieldCheck className="w-3.5 h-3.5 opacity-80 shrink-0 mt-0.5" />
                <span>30 days post-launch warranty & daily async updates.</span>
              </div>
            </div>

            <button
              onClick={handleApplyEstimateToContact}
              onMouseEnter={() => sounds.playHover()}
              className="w-full py-4 bg-white text-black dark:bg-white dark:text-black light:bg-black light:text-white text-[10px] font-medium uppercase tracking-[0.2em] hover:opacity-85 flex items-center justify-center gap-2 transition-opacity cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Export to Inquiry Form</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

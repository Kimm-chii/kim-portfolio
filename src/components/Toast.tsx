import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Info, AlertCircle, X } from 'lucide-react';

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  description?: string;
}

interface ToastProps {
  toasts: ToastMessage[];
  onDismiss: (id: string) => void;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts, onDismiss }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none px-4 sm:px-0">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto flex items-start gap-3 p-4 bg-[#0A0A0A] dark:bg-[#0A0A0A] light:bg-[#F8F8F6] text-[#F2F2F2] dark:text-[#F2F2F2] light:text-[#111111] border border-white/20 dark:border-white/20 light:border-black/20 shadow-2xl"
          >
            {toast.type === 'success' && <CheckCircle2 className="w-4 h-4 opacity-80 shrink-0 mt-0.5" />}
            {toast.type === 'info' && <Info className="w-4 h-4 opacity-80 shrink-0 mt-0.5" />}
            {toast.type === 'error' && <AlertCircle className="w-4 h-4 opacity-80 shrink-0 mt-0.5" />}

            <div className="flex-1 pr-2">
              <h4 className="text-xs font-mono uppercase tracking-wider font-medium">{toast.title}</h4>
              {toast.description && (
                <p className="text-[11px] opacity-60 mt-1 leading-relaxed font-sans">{toast.description}</p>
              )}
            </div>

            <button
              onClick={() => onDismiss(toast.id)}
              className="opacity-50 hover:opacity-100 p-1 transition-opacity cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

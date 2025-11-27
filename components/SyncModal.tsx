
import React, { useState, useEffect } from 'react';
import { X, Wifi, Download, Check, Loader } from 'lucide-react';
import { t } from '../data/locales';
import { Language } from '../types';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSync: (code: string) => void;
  lang: Language;
}

const SyncModal: React.FC<SyncModalProps> = ({ isOpen, onClose, onSync, lang }) => {
  const [code, setCode] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setCode('');
      setIsSyncing(false);
      setProgress(0);
    }
  }, [isOpen]);

  const handleSubmit = () => {
    if (!code.trim()) return;
    setIsSyncing(true);
    setProgress(0);
    setTimeLeft(12); // Mock 12 seconds

    // Simulate progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment
        const increment = Math.random() * 5 + 1;
        return Math.min(prev + increment, 100);
      });
      
      setTimeLeft(prev => Math.max(0, prev - 0.1)); // rough decrement
    }, 200);

    // Finish simulation
    setTimeout(() => {
      clearInterval(interval);
      setIsSyncing(false);
      onSync(code);
      onClose();
    }, 4000); // 4 seconds total for UX (faster than real life)
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-sm overflow-hidden shadow-2xl">
        <div className="bg-indigo-600 p-6 text-white text-center relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors">
            <X size={20} />
          </button>
          <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
            <Wifi size={32} />
          </div>
          <h2 className="text-xl font-bold">{t[lang].syncTitle}</h2>
          <p className="text-indigo-200 text-sm mt-1">{t[lang].syncSubtitle}</p>
        </div>
        
        <div className="p-6 space-y-4">
          {!isSyncing ? (
            <>
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{t[lang].enterCode}</label>
                <input 
                  type="text" 
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  placeholder="Ex: MATH-CH2"
                  className="w-full bg-slate-100 border-2 border-transparent focus:border-indigo-500 rounded-xl px-4 py-3 text-center text-xl font-mono tracking-widest uppercase outline-none transition-colors"
                />
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-xs text-slate-500 flex gap-2">
                <span className="text-lg">ℹ️</span> 
                <span>{t[lang].syncTip}</span>
              </div>

              <button 
                onClick={handleSubmit}
                disabled={!code}
                className="w-full bg-indigo-600 disabled:bg-slate-300 text-white py-3.5 rounded-xl font-bold shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Download size={18} />
                {t[lang].syncBtn}
              </button>
            </>
          ) : (
            <div className="text-center py-4">
               <h3 className="font-bold text-slate-800 mb-2">{t[lang].syncing}</h3>
               
               <div className="relative w-full h-4 bg-slate-100 rounded-full overflow-hidden mb-2">
                 <div 
                   className="absolute left-0 top-0 bottom-0 bg-indigo-500 transition-all duration-200 ease-out"
                   style={{ width: `${progress}%` }}
                 />
               </div>
               
               <div className="flex justify-between text-xs font-mono font-medium text-slate-500">
                  <span>{Math.round(progress)}%</span>
                  <span>~{Math.ceil(timeLeft)}s remaining</span>
               </div>

               <p className="text-xs text-slate-400 mt-4 animate-pulse">
                 Optimizing deltas...
               </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SyncModal;

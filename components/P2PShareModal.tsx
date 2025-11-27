
import React, { useState, useEffect } from 'react';
import { X, Wifi, Smartphone, ArrowRight, Share2, Download, CheckCircle, Loader } from 'lucide-react';

interface P2PShareModalProps {
  isOpen: boolean;
  mode: 'send' | 'receive';
  onClose: () => void;
  onReceiveSuccess?: () => void;
}

const P2PShareModal: React.FC<P2PShareModalProps> = ({ isOpen, mode, onClose, onReceiveSuccess }) => {
  const [step, setStep] = useState<'init' | 'scanning' | 'connecting' | 'transfer' | 'done'>('init');

  useEffect(() => {
    if (isOpen) {
      setStep('init');
      if (mode === 'receive') {
        setTimeout(() => setStep('scanning'), 500);
      }
    }
  }, [isOpen, mode]);

  // Simulate Receipt Flow
  useEffect(() => {
    let timer: any;
    if (step === 'scanning') {
      timer = setTimeout(() => setStep('connecting'), 2000);
    } else if (step === 'connecting') {
      timer = setTimeout(() => setStep('transfer'), 1500);
    } else if (step === 'transfer') {
      timer = setTimeout(() => setStep('done'), 2000);
    }
    return () => clearTimeout(timer);
  }, [step]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 z-10">
          <X size={24} />
        </button>

        <div className="p-8 text-center">
          {mode === 'send' ? (
            // SEND MODE (Teacher)
            <div>
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                <Share2 size={32} />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-2">Broadcasting Content Pack</h2>
              <p className="text-slate-500 text-sm mb-6">Ask students to tap "Receive Nearby" on their devices.</p>
              
              <div className="bg-white p-4 border-2 border-slate-200 rounded-xl inline-block mb-4 shadow-inner">
                {/* Simulated QR Code */}
                <div className="w-48 h-48 bg-slate-900 flex items-center justify-center text-white/20 text-xs flex-wrap p-2 gap-1 content-start">
                   {Array.from({length: 64}).map((_, i) => (
                     <div key={i} className={`w-5 h-5 ${Math.random() > 0.5 ? 'bg-white' : 'bg-transparent'}`}></div>
                   ))}
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-2 text-indigo-600 font-bold text-sm animate-pulse">
                <Wifi size={16} /> Broadcasting via Wi-Fi Direct...
              </div>
            </div>
          ) : (
            // RECEIVE MODE (Student)
            <div>
              {step === 'scanning' && (
                <>
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                     <div className="absolute inset-0 border-4 border-indigo-500 rounded-full animate-ping opacity-20"></div>
                     <Smartphone size={32} className="text-slate-500" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 mb-2">Scanning for Teacher...</h2>
                  <p className="text-slate-500 text-sm">Looking for nearby EduBridge Hotspots</p>
                </>
              )}

              {step === 'connecting' && (
                <>
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                     <Wifi size={32} className="text-green-600" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 mb-2">Found: "Amit Sir's Class"</h2>
                  <p className="text-slate-500 text-sm">Connecting to secure hotspot...</p>
                </>
              )}

              {step === 'transfer' && (
                <>
                  <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                     <Loader size={32} className="text-indigo-600 animate-spin" />
                  </div>
                  <h2 className="text-xl font-bold text-slate-800 mb-2">Downloading Pack...</h2>
                  <p className="text-slate-500 text-sm mb-4">Pack: "Polynomials Full Chapter"</p>
                  <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                    <div className="bg-indigo-600 h-full rounded-full animate-progress-indeterminate"></div>
                  </div>
                </>
              )}

              {step === 'done' && (
                <>
                   <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                     <CheckCircle size={40} className="text-green-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800 mb-2">Installation Complete!</h2>
                  <p className="text-slate-500 text-sm mb-6">You can now study this chapter offline.</p>
                  <button 
                    onClick={() => {
                      if (onReceiveSuccess) onReceiveSuccess();
                      onClose();
                    }}
                    className="w-full bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 shadow-lg"
                  >
                    Open Library
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default P2PShareModal;

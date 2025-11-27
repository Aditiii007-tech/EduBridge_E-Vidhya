
import React, { useState } from 'react';
import { Doubt, Language } from '../types';
import { ArrowLeft, Send, Clock, CheckCircle, HelpCircle } from 'lucide-react';
import { t } from '../data/locales';
import { mockDoubts } from '../data/learningData';

interface DoubtCornerProps {
  onBack: () => void;
  lang: Language;
  isOnline: boolean;
}

const DoubtCorner: React.FC<DoubtCornerProps> = ({ onBack, lang, isOnline }) => {
  const [doubts, setDoubts] = useState<Doubt[]>(mockDoubts);
  const [inputText, setInputText] = useState('');

  const handlePost = () => {
    if (!inputText.trim()) return;

    const newDoubt: Doubt = {
      id: `d_${Date.now()}`,
      studentId: 'student_01',
      subjectId: 'general',
      text: inputText,
      timestamp: Date.now(),
      status: isOnline ? 'sent' : 'pending_sync'
    };

    setDoubts(prev => [newDoubt, ...prev]);
    setInputText('');
  };

  return (
    <div className="h-full flex flex-col bg-slate-50 animate-slide-up">
      <div className="h-16 border-b border-slate-200 flex items-center px-4 gap-3 bg-white sticky top-0 z-10">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full text-slate-600">
          <ArrowLeft />
        </button>
        <h2 className="font-bold text-slate-800 flex-1">{t[lang].doubtCorner}</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Post Input */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200">
          <label className="block text-xs font-bold text-slate-400 uppercase mb-2">{t[lang].askDoubt}</label>
          <textarea 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={t[lang].typeDoubt}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-500 outline-none resize-none h-24"
          />
          <div className="flex justify-between items-center mt-2">
            {!isOnline && (
               <span className="text-xs text-orange-500 flex items-center gap-1 font-bold">
                 <Clock size={12} /> Offline Mode: Will sync later
               </span>
            )}
            <div className="flex-1"></div>
            <button 
              onClick={handlePost}
              disabled={!inputText}
              className="bg-indigo-600 disabled:bg-slate-300 text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2"
            >
              <Send size={14} /> {t[lang].postDoubt}
            </button>
          </div>
        </div>

        {/* List */}
        <div className="space-y-4">
           {doubts.map(doubt => (
             <div key={doubt.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
                      {doubt.subjectId}
                    </span>
                    <span className="text-xs text-slate-400">
                      {new Date(doubt.timestamp).toLocaleDateString()}
                    </span>
                  </div>
                  {doubt.status === 'pending_sync' && (
                    <span className="text-xs text-orange-500 flex items-center gap-1" title={t[lang].pendingSyncStatus}>
                      <Clock size={14} />
                    </span>
                  )}
                  {doubt.status === 'sent' && (
                    <span className="text-xs text-blue-500 flex items-center gap-1" title={t[lang].sentStatus}>
                      <CheckCircle size={14} />
                    </span>
                  )}
                  {doubt.status === 'resolved' && (
                    <span className="text-xs text-green-500 flex items-center gap-1" title={t[lang].resolvedStatus}>
                      <CheckCircle size={14} fill="currentColor" className="text-green-100" />
                    </span>
                  )}
                </div>
                
                <p className="text-slate-800 font-medium text-sm mb-3">
                  {doubt.text}
                </p>

                {doubt.reply && (
                  <div className="bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                    <p className="text-xs font-bold text-green-800 mb-1 flex items-center gap-1">
                       Teacher's Reply
                    </p>
                    <p className="text-sm text-green-900">
                      {doubt.reply}
                    </p>
                  </div>
                )}
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default DoubtCorner;

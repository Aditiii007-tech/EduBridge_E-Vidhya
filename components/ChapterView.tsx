
import React, { useState } from 'react';
import { Chapter, Language } from '../types';
import { ArrowLeft, PlayCircle, BookOpen, Volume2, CheckCircle, Download, Trash2 } from 'lucide-react';
import { t } from '../data/locales';

interface ChapterViewProps {
  chapter: Chapter;
  onBack: () => void;
  onStartQuiz: () => void;
  onToggleDownload?: () => void;
  lang: Language;
}

const ChapterView: React.FC<ChapterViewProps> = ({ chapter, onBack, onStartQuiz, onToggleDownload, lang }) => {
  const [activeTab, setActiveTab] = useState<'read' | 'video'>('read');
  const [isSpeaking, setIsSpeaking] = useState(false);

  const speakSummary = () => {
    if ('speechSynthesis' in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        // Strip HTML tags for speech
        const text = chapter.summary.replace(/<[^>]*>/g, '');
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN'; 
        utterance.rate = 0.9;
        utterance.onend = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    } else {
      alert("Text-to-speech not supported in this browser.");
    }
  };

  const hasQuiz = chapter.quiz && chapter.quiz.length > 0;
  
  // Use translated title if available
  const displayTitle = (lang === 'hi' && chapter.trans?.title) ? chapter.trans.title : chapter.title;

  return (
    <div className="h-full flex flex-col bg-white animate-slide-up">
      {/* Navbar */}
      <div className="h-16 border-b border-slate-100 flex items-center px-4 gap-3 bg-white sticky top-0 z-10">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full">
          <ArrowLeft className="text-slate-600" />
        </button>
        <h2 className="font-bold text-slate-800 truncate flex-1">{displayTitle}</h2>
        
        {/* Download Toggle */}
        {onToggleDownload && (
          <button 
            onClick={onToggleDownload}
            className={`p-2 rounded-full transition-colors ${chapter.isDownloaded ? 'bg-indigo-100 text-indigo-700' : 'bg-slate-100 text-slate-500'}`}
            title={chapter.isDownloaded ? t[lang].removeDownload : t[lang].downloadOffline}
          >
            {chapter.isDownloaded ? <CheckCircle size={20} /> : <Download size={20} />}
          </button>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200">
        <button 
          onClick={() => setActiveTab('read')}
          className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 ${
            activeTab === 'read' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500'
          }`}
        >
          <BookOpen size={16} /> {t[lang].notes}
        </button>
        <button 
          onClick={() => setActiveTab('video')}
          className={`flex-1 py-3 text-sm font-medium flex items-center justify-center gap-2 ${
            activeTab === 'video' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-slate-500'
          }`}
        >
          <PlayCircle size={16} /> {t[lang].video}
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 pb-24">
        {activeTab === 'read' ? (
          <div className="max-w-2xl mx-auto">
             <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Chapter Summary</span>
                <button 
                  onClick={speakSummary}
                  className={`flex items-center gap-2 text-xs font-bold px-3 py-1.5 rounded-full transition-colors ${
                    isSpeaking ? 'bg-indigo-100 text-indigo-700 animate-pulse' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Volume2 size={14} />
                  {isSpeaking ? t[lang].listening : t[lang].listen}
                </button>
             </div>
             
             {/* Render HTML Summary */}
             {/* Note: In a real multilingual app, summary would also be translated in data */}
             <div 
               className="prose prose-slate prose-headings:text-indigo-900 prose-p:text-slate-700 leading-relaxed"
               dangerouslySetInnerHTML={{ __html: chapter.summary }}
             />

             <div className="mt-8 p-4 bg-indigo-50 rounded-xl border border-indigo-100 text-center">
                <p className="text-indigo-800 font-medium mb-3">
                  {hasQuiz ? (lang === 'hi' ? "Samajh aaya? Chalo test karte hain!" : "Understood? Let's take a test!") : "Quiz coming soon!"}
                </p>
                <button 
                  onClick={onStartQuiz}
                  disabled={!hasQuiz}
                  className={`w-full py-3 rounded-lg font-bold shadow-md transition-transform active:scale-95 ${
                    hasQuiz 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none'
                  }`}
                >
                  {hasQuiz ? t[lang].startQuiz : t[lang].noQuiz}
                </button>
             </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-64 md:h-96 bg-slate-100 rounded-xl border-2 border-dashed border-slate-300">
            <div className="bg-white p-4 rounded-full mb-3 shadow-sm">
              <PlayCircle size={48} className="text-indigo-400" />
            </div>
            <p className="text-slate-500 font-medium">Video Player Placeholder</p>
            <p className="text-xs text-slate-400 mt-1">(Videos are cached locally in real app)</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChapterView;

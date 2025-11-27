
import React from 'react';
import { Subject, UserProgress, Language } from '../types';
import { Trophy, Flame, RefreshCw, Zap, Share2, Calculator, FlaskConical, BookA, Landmark, Globe, Brain, HelpCircle } from 'lucide-react';
import { t } from '../data/locales';

interface DashboardProps {
  subjects: Subject[];
  onSelectSubject: (subject: Subject) => void;
  userProgress: UserProgress;
  isOnline: boolean;
  onOpenSync: () => void;
  onReceiveNearby: () => void;
  onOpenBrainGym: () => void;
  onOpenDoubtCorner: () => void;
  lang: Language;
  setLang: (l: Language) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ 
  subjects, 
  onSelectSubject, 
  userProgress, 
  isOnline, 
  onOpenSync, 
  onReceiveNearby,
  onOpenBrainGym,
  onOpenDoubtCorner,
  lang,
  setLang
}) => {
  
  // Mapping string IDs to Lucide components
  const iconMap: {[key: string]: React.ReactNode} = {
    math: <Calculator size={32} strokeWidth={1.5} />,
    science: <FlaskConical size={32} strokeWidth={1.5} />,
    english: <BookA size={32} strokeWidth={1.5} />,
    history: <Landmark size={32} strokeWidth={1.5} />
  };

  return (
    <div className="p-4 md:p-6 pb-24 space-y-6 animate-fade-in">
      {/* Header Card */}
      <div className="bg-indigo-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden transition-all hover:shadow-xl">
        <div className="relative z-10">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold mb-1">{t[lang].welcome}, Rahul! 🙏</h1>
              <p className="text-indigo-200 text-sm mb-4">"Education is the movement from darkness to light."</p>
            </div>
            
            {/* Actions & Language Toggle */}
            <div className="flex flex-col gap-2 items-end">
              <div className="flex gap-2">
                <button 
                  onClick={onReceiveNearby}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-md transition-colors"
                  title={t[lang].receiveNearby}
                >
                  <Share2 size={20} className="text-white" />
                </button>
                <button 
                  onClick={onOpenSync}
                  className="bg-white/20 hover:bg-white/30 p-2 rounded-full backdrop-blur-md transition-colors"
                  title={t[lang].syncHub}
                >
                  <RefreshCw size={20} className="text-white" />
                </button>
              </div>
              
              {/* Language Switcher */}
              <button 
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="flex items-center gap-1.5 bg-indigo-800/50 hover:bg-indigo-800 px-3 py-1.5 rounded-full text-xs font-bold border border-indigo-400/30 transition-colors"
              >
                <Globe size={14} />
                {lang === 'en' ? 'English' : 'हिंदी'}
              </button>
            </div>
          </div>
          
          <div className="flex gap-4 mt-2">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 px-3 flex items-center gap-2 border border-white/10">
              <Trophy className="text-yellow-400 w-4 h-4" />
              <span className="font-bold">{userProgress.totalXp} XP</span>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-2 px-3 flex items-center gap-2 border border-white/10">
              <Flame className="text-orange-400 w-4 h-4" />
              <span className="font-bold">{userProgress.streakDays} Day Streak</span>
            </div>
          </div>
        </div>
        {/* Decorative circle */}
        <div className="absolute -right-4 -bottom-10 w-32 h-32 bg-indigo-500 rounded-full opacity-50 blur-2xl"></div>
      </div>

      {/* Advanced Quick Actions */}
      <div className="grid grid-cols-2 gap-4">
        <button 
          onClick={onOpenBrainGym}
          className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-4 rounded-xl shadow-md flex items-center gap-3 relative overflow-hidden group"
        >
          <div className="bg-white/20 p-2 rounded-full">
            <Brain size={24} />
          </div>
          <div className="text-left">
            <span className="block font-bold">{t[lang].brainGym}</span>
            <span className="text-xs text-pink-100">Smart Revision</span>
          </div>
          <div className="absolute right-0 top-0 h-full w-10 bg-white/10 skew-x-12 transform translate-x-10 group-hover:translate-x-0 transition-transform"></div>
        </button>

        <button 
          onClick={onOpenDoubtCorner}
          className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-4 rounded-xl shadow-md flex items-center gap-3 relative overflow-hidden group"
        >
           <div className="bg-white/20 p-2 rounded-full">
            <HelpCircle size={24} />
          </div>
          <div className="text-left">
            <span className="block font-bold">{t[lang].doubtCorner}</span>
            <span className="text-xs text-blue-100">Ask Offline</span>
          </div>
          <div className="absolute right-0 top-0 h-full w-10 bg-white/10 skew-x-12 transform translate-x-10 group-hover:translate-x-0 transition-transform"></div>
        </button>
      </div>

      {/* Daily Challenge Section */}
      <div>
        <h2 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
          <Zap size={20} className="text-yellow-500 fill-yellow-500" /> {t[lang].dailyChallenge}
        </h2>
        <div className="bg-gradient-to-r from-orange-100 to-amber-50 p-4 rounded-xl border border-orange-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-orange-900">{t[lang].solve5Math}</h4>
            <p className="text-xs text-orange-700 mt-1">{t[lang].rewardXP}</p>
            <div className="w-full bg-orange-200 h-2 rounded-full mt-2 overflow-hidden">
              <div className="bg-orange-500 w-2/5 h-full rounded-full"></div>
            </div>
            <p className="text-[10px] text-orange-600 mt-1 font-bold">2/5 Completed</p>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md active:scale-95 transition-transform w-full sm:w-auto">
            {t[lang].resume}
          </button>
        </div>
      </div>

      {/* Offline Status */}
      {!isOnline && (
        <div className="bg-slate-800 text-slate-200 px-4 py-2 rounded-lg text-sm flex items-center justify-between shadow-md">
          <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div> {t[lang].offlineMode}</span>
          <span className="text-xs bg-slate-700 px-2 py-1 rounded border border-slate-600">{t[lang].savedDataOnly}</span>
        </div>
      )}

      {/* Subjects Grid - Fully Responsive */}
      <div>
        <h2 className="text-lg font-bold text-slate-800 mb-3">{t[lang].yourSubjects}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {subjects.map((subject) => (
            <button 
              key={subject.id}
              onClick={() => onSelectSubject(subject)}
              className="group bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-indigo-300 transition-all text-left flex flex-col justify-between h-40 active:scale-[0.98] relative overflow-hidden"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-xl mb-2 transition-transform group-hover:scale-110 ${subject.color}`}>
                {/* Render Lucide Icon based on key */}
                {iconMap[subject.icon] || <span className="text-2xl">📚</span>}
              </div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-slate-800 text-lg leading-tight">
                  {lang === 'hi' && subject.trans?.name ? subject.trans.name : subject.name}
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-medium">{subject.chapters.length} {t[lang].chapters}</p>
              </div>

              {/* Decorative Background Blob */}
              <div className={`absolute -right-4 -bottom-4 w-16 h-16 rounded-full opacity-10 ${subject.color.replace('text', 'bg')}`}></div>
            </button>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">{t[lang].topStudents} (Class 10-B)</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-3">
               <span className="font-bold text-slate-400 w-5 text-center">1</span>
               <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-sm border-2 border-white shadow-sm">👧</div>
               <span className="text-sm font-bold text-slate-700">Priya Singh</span>
             </div>
             <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded">1450 XP</span>
          </div>
          <div className="flex items-center justify-between bg-indigo-50 p-3 -mx-2 rounded-xl border border-indigo-100 transform scale-[1.02] shadow-sm">
             <div className="flex items-center gap-3">
               <span className="font-bold text-indigo-600 w-5 text-center">2</span>
               <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center text-sm border-2 border-indigo-300 shadow-sm">👨‍🎓</div>
               <span className="text-sm font-bold text-indigo-900">You (Rahul)</span>
             </div>
             <span className="text-xs font-bold text-white bg-indigo-600 px-2 py-1 rounded shadow-sm">1250 XP</span>
          </div>
          <div className="flex items-center justify-between">
             <div className="flex items-center gap-3">
               <span className="font-bold text-slate-400 w-5 text-center">3</span>
               <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-sm border-2 border-white shadow-sm">👦</div>
               <span className="text-sm font-bold text-slate-700">Amit S.</span>
             </div>
             <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-1 rounded">1100 XP</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


import React from 'react';
import { Subject, RevisionTask, Language } from '../types';
import { ArrowLeft, Brain, Clock, AlertTriangle, CheckCircle } from 'lucide-react';
import { t } from '../data/locales';

interface BrainGymProps {
  subjects: Subject[];
  onBack: () => void;
  onOpenChapter: (subjectId: string, chapterId: string) => void;
  lang: Language;
}

const BrainGym: React.FC<BrainGymProps> = ({ subjects = [], onBack, onOpenChapter, lang }) => {
  
  // Algorithm to identify revision tasks
  const getRevisionTasks = (): RevisionTask[] => {
    const tasks: RevisionTask[] = [];
    const now = Date.now();
    const threeDays = 3 * 24 * 60 * 60 * 1000;

    if (!subjects) return [];

    subjects.forEach(sub => {
      if (!sub.chapters) return;
      sub.chapters.forEach(ch => {
        if (ch.isCompleted && ch.lastStudied) {
          const timeDiff = now - ch.lastStudied;
          
          // Condition 1: Low Score (< 50%)
          if ((ch.quizScore || 0) < 50) {
            tasks.push({
              chapterId: ch.id,
              subjectId: sub.id,
              title: ch.title,
              reason: 'low_score',
              daysSinceLast: Math.floor(timeDiff / (24 * 60 * 60 * 1000))
            });
          } 
          // Condition 2: Forgetting Curve (> 3 days)
          else if (timeDiff > threeDays) {
            tasks.push({
              chapterId: ch.id,
              subjectId: sub.id,
              title: ch.title,
              reason: 'long_time',
              daysSinceLast: Math.floor(timeDiff / (24 * 60 * 60 * 1000))
            });
          }
        }
      });
    });
    return tasks;
  };

  const tasks = getRevisionTasks();

  return (
    <div className="h-full flex flex-col bg-slate-50 animate-slide-up">
      <div className="h-16 border-b border-slate-200 flex items-center px-4 gap-3 bg-white sticky top-0 z-10">
        <button onClick={onBack} className="p-2 hover:bg-slate-100 rounded-full text-slate-600">
          <ArrowLeft />
        </button>
        <h2 className="font-bold text-slate-800 flex-1">{t[lang]?.brainGym || "Brain Gym"}</h2>
      </div>

      <div className="p-4 md:p-6 flex-1 overflow-y-auto">
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl p-6 text-white shadow-lg mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Brain size={32} className="text-white" />
            <h1 className="text-2xl font-bold">{t[lang]?.brainGymTitle || "Smart Revision"}</h1>
          </div>
          <p className="opacity-90">{t[lang]?.brainGymSubtitle || "Time to revise!"}</p>
        </div>

        <h3 className="font-bold text-slate-700 mb-4 flex items-center gap-2">
          <Clock size={18} className="text-slate-400" /> Today's Focus
        </h3>

        <div className="space-y-4">
          {tasks.length > 0 ? tasks.map((task, idx) => (
            <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-slate-800">{task.title}</h4>
                <div className="flex gap-2 mt-1">
                  {task.reason === 'low_score' ? (
                     <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1">
                       <AlertTriangle size={12} /> {t[lang]?.reasonLowScore || "Low Score"}
                     </span>
                  ) : (
                     <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full font-bold flex items-center gap-1">
                       <Clock size={12} /> {t[lang]?.reasonLongTime || "Long Time"}
                     </span>
                  )}
                  <span className="bg-slate-100 text-slate-500 text-xs px-2 py-1 rounded-full">
                    {task.subjectId.toUpperCase()}
                  </span>
                </div>
              </div>
              <button 
                onClick={() => onOpenChapter(task.subjectId, task.chapterId)}
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold text-sm shadow-md active:scale-95 transition-transform"
              >
                {t[lang]?.reviseNow || "Revise"}
              </button>
            </div>
          )) : (
            <div className="text-center py-10 bg-white rounded-xl border border-dashed border-slate-300">
               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                 <CheckCircle size={32} />
               </div>
               <p className="text-slate-600 font-bold">All caught up!</p>
               <p className="text-slate-400 text-sm">Your memory is in top shape.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BrainGym;

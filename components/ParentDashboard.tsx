import React from 'react';
import { UserProgress } from '../types';
import { Star, Clock, Calendar, MessageCircle } from 'lucide-react';

interface ParentDashboardProps {
  studentName: string;
  progress: UserProgress;
}

const ParentDashboard: React.FC<ParentDashboardProps> = ({ studentName, progress }) => {
  return (
    <div className="p-4 md:p-6 pb-24 animate-fade-in bg-orange-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-orange-600 rounded-2xl p-6 text-white shadow-lg mb-6">
        <h1 className="text-xl font-bold">Namaste, Rajesh Ji! 🙏</h1>
        <p className="opacity-90 text-sm mt-1">Here is how {studentName} is doing in school.</p>
        <div className="mt-4 bg-white/20 backdrop-blur-sm rounded-lg p-3 flex items-center gap-3">
          <div className="bg-white text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
            A
          </div>
          <div>
            <p className="text-xs opacity-80">Overall Grade</p>
            <p className="font-bold">Excellent / Bahut Badhiya</p>
          </div>
        </div>
      </div>

      {/* Simple Stats for Parents */}
      <h2 className="font-bold text-slate-800 mb-3">Aaj Ki Report (Today's Report)</h2>
      <div className="space-y-3 mb-6">
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600">
            <Clock size={20} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-700">Study Time</h4>
            <p className="text-xs text-slate-500">Rahul studied for 2 hours today.</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-yellow-100 p-3 rounded-full text-yellow-600">
            <Star size={20} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-700">Quiz Score</h4>
            <p className="text-xs text-slate-500">Scored 10/10 in Math Quiz!</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-full text-green-600">
            <Calendar size={20} />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-slate-700">Attendance</h4>
            <p className="text-xs text-slate-500">Present all days this week.</p>
          </div>
        </div>
      </div>

      {/* Teacher Communication */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
         <h3 className="font-bold text-slate-800 mb-2">Message from Teacher</h3>
         <p className="text-sm text-slate-600 italic border-l-4 border-orange-300 pl-3 py-1 mb-4">
           "Rahul is doing great in Science, but needs a little help in Geometry."
         </p>
         <button className="w-full bg-slate-800 text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2">
            <MessageCircle size={16} /> Reply to Teacher
         </button>
      </div>

    </div>
  );
};

export default ParentDashboard;

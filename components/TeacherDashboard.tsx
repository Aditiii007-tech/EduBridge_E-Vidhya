
import React, { useState } from 'react';
import { mockClassData } from '../data/mockUsers';
import { Users, AlertTriangle, TrendingUp, Upload, CheckCircle, Share2, Link, Plus, Sparkles } from 'lucide-react';

interface TeacherDashboardProps {
  onCreateClick: () => void;
  onBroadcastClick: () => void;
}

const TeacherDashboard: React.FC<TeacherDashboardProps> = ({ onCreateClick, onBroadcastClick }) => {
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);

  const generateLink = () => {
    // Simulate link generation
    const codes = ['MATH-CH3', 'SCI-LAB2', 'ENG-TEST1'];
    const random = codes[Math.floor(Math.random() * codes.length)];
    setGeneratedCode(random);
  };

  return (
    <div className="p-4 md:p-6 pb-24 animate-fade-in bg-purple-50 min-h-screen">
      
      {/* Teacher Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-purple-900">Class 10-B Monitor</h1>
          <p className="text-purple-600 text-sm">Govt High School, Rampur</p>
        </div>
        <div className="bg-white p-2 rounded-full shadow-sm">
          <Users className="text-purple-600" />
        </div>
      </div>

      {/* Advanced Actions Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button 
          onClick={onCreateClick}
          className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform hover:shadow-md"
        >
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-3 rounded-full text-white shadow-lg">
            <Plus size={24} />
          </div>
          <div className="text-center">
             <span className="block text-sm font-bold text-slate-700">Create Lesson</span>
             <span className="text-[10px] text-slate-400">AI Powered Studio</span>
          </div>
        </button>

        <button 
          onClick={onBroadcastClick}
          className="bg-white p-5 rounded-xl border border-purple-100 shadow-sm flex flex-col items-center justify-center gap-3 active:scale-95 transition-transform hover:shadow-md"
        >
          <div className="bg-gradient-to-br from-blue-500 to-cyan-500 p-3 rounded-full text-white shadow-lg">
            <Share2 size={24} />
          </div>
          <div className="text-center">
             <span className="block text-sm font-bold text-slate-700">Broadcast Pack</span>
             <span className="text-[10px] text-slate-400">Offline P2P Share</span>
          </div>
        </button>
      </div>

      {/* Sync Link Generator (New Feature) */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white shadow-lg mb-6">
        <h2 className="font-bold text-lg mb-2 flex items-center gap-2">
          <Link size={20} className="text-yellow-400" /> Delta Sync Code
        </h2>
        <p className="text-slate-400 text-sm mb-4">Generate a code to sync homework/scores via SMS/WhatsApp.</p>
        
        {generatedCode ? (
          <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20 text-center animate-scale-in">
             <p className="text-xs uppercase tracking-wider opacity-60 mb-1">Share this code</p>
             <div className="text-3xl font-mono font-bold tracking-widest text-yellow-400 mb-2">{generatedCode}</div>
             <button 
              onClick={() => {
                navigator.clipboard.writeText(generatedCode);
                // In a real app, this would show a toast
              }}
              className="text-xs bg-white text-slate-900 px-3 py-1 rounded-full font-bold hover:bg-yellow-400 transition-colors"
             >
               Copy Code
             </button>
             <button onClick={() => setGeneratedCode(null)} className="block w-full mt-3 text-xs opacity-50 hover:opacity-100">Reset</button>
          </div>
        ) : (
          <button 
            onClick={generateLink}
            className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold shadow-none border border-white/20 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            Generate Sync Code
          </button>
        )}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
          <div className="text-slate-500 text-xs font-bold uppercase mb-1">Avg Attendance</div>
          <div className="text-2xl font-bold text-slate-800">76%</div>
          <div className="text-green-500 text-xs flex items-center gap-1 mt-1">
            <TrendingUp size={12} /> +2% this week
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow-sm border border-purple-100">
          <div className="text-slate-500 text-xs font-bold uppercase mb-1">Pending Sync</div>
          <div className="text-2xl font-bold text-slate-800">3</div>
          <div className="text-orange-500 text-xs mt-1">
            Students offline > 3 days
          </div>
        </div>
      </div>

      {/* Student List */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-6">
        <div className="p-4 border-b border-slate-100 flex justify-between items-center">
          <h2 className="font-bold text-slate-800">Student Progress</h2>
          <button className="text-purple-600 text-xs font-bold">View All</button>
        </div>
        <div className="divide-y divide-slate-100">
          {mockClassData.map((student) => (
            <div key={student.id} className="p-4 flex items-center justify-between hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <div className={`w-2 h-10 rounded-full ${student.needsAttention ? 'bg-red-500' : 'bg-green-500'}`}></div>
                <div>
                  <h4 className="font-bold text-slate-700 text-sm">{student.name}</h4>
                  <p className="text-xs text-slate-500">Avg Score: {student.avgScore}%</p>
                </div>
              </div>
              {student.needsAttention ? (
                <span className="px-2 py-1 bg-red-100 text-red-600 text-[10px] font-bold rounded-full flex items-center gap-1">
                  <AlertTriangle size={10} /> AT RISK
                </span>
              ) : (
                <span className="px-2 py-1 bg-green-100 text-green-600 text-[10px] font-bold rounded-full flex items-center gap-1">
                  <CheckCircle size={10} /> Good
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;

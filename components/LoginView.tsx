
import React, { useState } from 'react';
import { User, UserRole, Language } from '../types';
import { mockUsers } from '../data/mockUsers';
import { BookOpen, GraduationCap, Users, ArrowLeft, Globe } from 'lucide-react';
import { t } from '../data/locales';

interface LoginViewProps {
  onLogin: (user: User) => void;
  onBack?: () => void;
  lang: Language;
  setLang: (l: Language) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin, onBack, lang, setLang }) => {
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');

  const handleLogin = () => {
    const user = mockUsers.find(u => u.role === selectedRole);
    if (user) {
      onLogin(user);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4 relative">
      {onBack && (
        <button 
          onClick={onBack}
          className="absolute top-6 left-6 flex items-center gap-2 text-slate-500 hover:text-slate-800 font-bold text-sm transition-colors"
        >
          <ArrowLeft size={18} /> {t[lang].backHome}
        </button>
      )}
      
      {/* Language Toggle */}
      <button 
        onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
        className="absolute top-6 right-6 flex items-center gap-2 bg-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm border border-slate-200"
      >
        <Globe size={14} className="text-indigo-600" />
        {lang === 'en' ? 'English' : 'हिंदी'}
      </button>

      <div className="mb-8 text-center animate-fade-in-up">
        <div className="text-5xl mb-2">📘</div>
        <h1 className="text-3xl font-bold text-indigo-700">EduBridge</h1>
        <p className="text-slate-500">Offline Learning for Everyone</p>
      </div>

      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl w-full max-w-md border border-slate-100 animate-slide-up">
        <h2 className="text-xl font-bold text-slate-800 mb-6 text-center">{t[lang].whoAreYou}</h2>

        <div className="grid grid-cols-3 gap-3 mb-8">
          <button
            onClick={() => setSelectedRole('student')}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
              selectedRole === 'student' 
                ? 'border-indigo-600 bg-indigo-50 text-indigo-700' 
                : 'border-slate-100 hover:border-indigo-200 text-slate-500'
            }`}
          >
            <GraduationCap size={24} className="mb-2" />
            <span className="text-xs font-bold">{t[lang].student}</span>
          </button>

          <button
            onClick={() => setSelectedRole('teacher')}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
              selectedRole === 'teacher' 
                ? 'border-purple-600 bg-purple-50 text-purple-700' 
                : 'border-slate-100 hover:border-purple-200 text-slate-500'
            }`}
          >
            <BookOpen size={24} className="mb-2" />
            <span className="text-xs font-bold">{t[lang].teacher}</span>
          </button>

          <button
            onClick={() => setSelectedRole('parent')}
            className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 transition-all ${
              selectedRole === 'parent' 
                ? 'border-orange-600 bg-orange-50 text-orange-700' 
                : 'border-slate-100 hover:border-orange-200 text-slate-500'
            }`}
          >
            <Users size={24} className="mb-2" />
            <span className="text-xs font-bold">{t[lang].parent}</span>
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-500 uppercase mb-1">{t[lang].mobilePlaceholder}</label>
            <input 
              type="text" 
              defaultValue="9876543210"
              className="w-full bg-slate-100 border-none rounded-lg px-4 py-3 text-slate-800 font-medium focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <button 
            onClick={handleLogin}
            className={`w-full py-3.5 rounded-xl text-white font-bold shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2 ${
              selectedRole === 'student' ? 'bg-indigo-600 hover:bg-indigo-700' :
              selectedRole === 'teacher' ? 'bg-purple-600 hover:bg-purple-700' :
              'bg-orange-600 hover:bg-orange-700'
            }`}
          >
            {t[lang].loginAs} {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
          </button>
        </div>
        
        <div className="mt-6 text-center text-xs text-slate-400">
          {t[lang].demoMode}
        </div>
      </div>
    </div>
  );
};

export default LoginView;

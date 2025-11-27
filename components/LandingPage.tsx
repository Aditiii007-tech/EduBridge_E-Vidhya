
import React from 'react';
import { WifiOff, Cpu, Zap, ArrowRight, Share2, BookOpen } from 'lucide-react';

interface LandingPageProps {
  onEnter: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-indigo-600 rounded-full blur-[100px] opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-600 rounded-full blur-[80px] opacity-20"></div>
      </div>

      <nav className="relative z-10 container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">📘</div>
          EduBridge
        </div>
        <button 
          onClick={onEnter}
          className="text-sm font-medium hover:text-indigo-300 transition-colors"
        >
          Login
        </button>
      </nav>

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center py-12 md:py-20">
        <div className="md:w-1/2 mb-12 md:mb-0 space-y-8 animate-fade-in-up">
          <div className="inline-block bg-indigo-900/50 border border-indigo-700 rounded-full px-4 py-1.5 text-xs font-bold text-indigo-300 tracking-wide uppercase mb-2">
            Offline-First Education
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Learning <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Without Limits.</span><br/>
            Without Internet.
          </h1>
          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            A revolutionary AI-powered platform designed for rural schools. 
            Download once, learn forever. Sync only what matters.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onEnter}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 active:scale-95"
            >
              Get Started <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 rounded-xl font-bold text-lg border border-slate-700 hover:bg-slate-800 transition-colors text-slate-300">
              Watch Demo
            </button>
          </div>

          <div className="flex items-center gap-6 pt-4 text-slate-500 text-sm font-medium">
             <span className="flex items-center gap-1.5"><WifiOff size={16} /> Works Offline</span>
             <span className="flex items-center gap-1.5"><Cpu size={16} /> 2GB RAM Ready</span>
          </div>
        </div>

        <div className="md:w-1/2 relative">
          <div className="relative z-10 bg-slate-800 rounded-2xl p-2 shadow-2xl border border-slate-700 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            <div className="bg-slate-900 rounded-xl overflow-hidden aspect-[9/16] md:aspect-video relative group">
              {/* Mock App Interface Preview */}
              <div className="absolute inset-0 bg-slate-900 flex flex-col">
                <div className="h-10 bg-slate-800 border-b border-slate-700 flex items-center px-4 gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 p-6 grid grid-cols-2 gap-4">
                  <div className="bg-indigo-600/20 border border-indigo-500/30 p-4 rounded-lg">
                    <BookOpen className="text-indigo-400 mb-2" />
                    <div className="h-2 w-16 bg-indigo-400/50 rounded mb-1"></div>
                    <div className="h-2 w-10 bg-indigo-400/30 rounded"></div>
                  </div>
                  <div className="bg-purple-600/20 border border-purple-500/30 p-4 rounded-lg">
                    <Share2 className="text-purple-400 mb-2" />
                    <div className="h-2 w-16 bg-purple-400/50 rounded mb-1"></div>
                    <div className="h-2 w-10 bg-purple-400/30 rounded"></div>
                  </div>
                  <div className="col-span-2 bg-slate-800 rounded-lg p-4 mt-2">
                     <div className="flex items-center justify-between mb-2">
                        <div className="h-3 w-24 bg-slate-600 rounded"></div>
                        <Zap size={16} className="text-yellow-400" />
                     </div>
                     <div className="h-2 w-full bg-slate-700 rounded-full overflow-hidden">
                       <div className="h-full w-2/3 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                     </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative floating elements */}
          <div className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl animate-bounce hidden md:block">
             <div className="flex items-center gap-3">
               <div className="bg-green-100 p-2 rounded-full"><WifiOff className="text-green-600" size={20} /></div>
               <div>
                 <p className="text-slate-900 font-bold text-sm">Sync Complete</p>
                 <p className="text-slate-500 text-xs">Data Saved Locally</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 border-t border-slate-800 grid md:grid-cols-3 gap-8">
         <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">⚡ P2P Sharing</h3>
            <p className="text-slate-400 text-sm">Teacher to Student content transfer via Hotspot/Bluetooth. No internet required.</p>
         </div>
         <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">🤖 On-Device AI</h3>
            <p className="text-slate-400 text-sm">Quizzes are checked locally using TFLite. Instant feedback without cloud latency.</p>
         </div>
         <div className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">📦 Smart Delta Sync</h3>
            <p className="text-slate-400 text-sm">We only upload progress scores (approx 5KB). Heavy content stays on the device.</p>
         </div>
      </div>
    </div>
  );
};

export default LandingPage;

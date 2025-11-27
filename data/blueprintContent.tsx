import React from 'react';
import { BlueprintSection, SectionData } from '../types';
import { 
  Lightbulb, AlertTriangle, CheckCircle, Cpu, Layers, Server, 
  Database, RefreshCw, Smartphone, Users, Zap, Calendar, 
  Briefcase, Rocket, Flag, Mic 
} from 'lucide-react';

// This file contains the "Expert Product Architect" content requested.
// Structured as React Nodes for rich formatting.

export const blueprintData: SectionData[] = [
  {
    id: BlueprintSection.TITLE,
    title: "1. Project Identity",
    icon: <Lightbulb className="w-5 h-5" />,
    content: (
      <div className="space-y-6 text-center py-10">
        <h1 className="text-5xl font-bold text-indigo-700">EduBridge</h1>
        <p className="text-2xl text-slate-600 font-medium">"Offline AI Learning Platform for Rural Students"</p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block mt-4 border border-indigo-100">
          <p className="text-lg text-indigo-800 italic">
            "Gaanv ka School, Ab Har Jeb Mein." <br/>
            (The Village School, Now in Every Pocket)
          </p>
        </div>
      </div>
    )
  },
  {
    id: BlueprintSection.PROBLEM,
    title: "2. Problem Statement",
    icon: <AlertTriangle className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <p className="font-medium text-lg text-slate-700">Why do we need this?</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li><strong>Internet Issue:</strong> Rural areas mein internet unstable hai. Live classes buffer hoti hain, students ka interest toot jata hai.</li>
          <li><strong>Device Constraints:</strong> Most students have budget phones (2GB RAM, old processors). Heavy apps like Byju's/Unacademy lag karte hain or crash ho jate hain.</li>
          <li><strong>Data Cost:</strong> Daily data limits (1.5GB) jaldi khatam ho jate hain video streaming se.</li>
          <li><strong>Language Barrier:</strong> English-heavy interfaces samjhne mein mushkil hoti hai for hindi-medium students.</li>
          <li><strong>No Personalization:</strong> Bina internet ke, students ko koi feedback nahi milta. "Am I right or wrong?" pata nahi chalta.</li>
        </ul>
      </div>
    )
  },
  {
    id: BlueprintSection.SOLUTION,
    title: "3. Proposed Solution",
    icon: <CheckCircle className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <p className="font-medium text-lg text-slate-700">EduBridge kaise solve karega?</p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-bold text-indigo-600 mb-2">📥 Offline-First Architecture</h4>
            <p className="text-sm">Content ek baar download karo, fir bina internet ke chalao. "Sync only what changed."</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-bold text-indigo-600 mb-2">🤖 On-Device AI (TFLite)</h4>
            <p className="text-sm">Quiz checking aur recommendations phone ke andar hi process honge. No server needed for basic feedback.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-bold text-indigo-600 mb-2">⚡ Ultra-Lightweight</h4>
            <p className="text-sm">App size under 50MB. Optimized for 2GB RAM devices using vector assets and code shrinking.</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
            <h4 className="font-bold text-indigo-600 mb-2">🗣️ Native UX</h4>
            <p className="text-sm">High-contrast UI, Voice navigation support, aur simple Hindi/Regional language text.</p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: BlueprintSection.FEATURES,
    title: "4. Core Features List",
    icon: <Cpu className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-bold mt-1">OFFLINE</span>
            <span className="text-slate-700"><strong>Smart Content Caching:</strong> Downloads PDFs/Text summaries automatically when net is available.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs font-bold mt-1">AI</span>
            <span className="text-slate-700"><strong>On-Device Quiz Engine:</strong> Instant results generation without server. Recommendations: "Aapka Algebra weak hai, ye chapter padhein."</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-bold mt-1">SYNC</span>
            <span className="text-slate-700"><strong>Delta Sync:</strong> Sirf progress data (KB size) upload hota hai jab net milta hai.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold mt-1">TOOLS</span>
            <span className="text-slate-700"><strong>Study Tools:</strong> Built-in Text-to-Speech (TTS) for reading chapters aloud. Flashcards for quick revision.</span>
          </li>
        </ul>
      </div>
    )
  },
  {
    id: BlueprintSection.ARCHITECTURE,
    title: "5. System Architecture",
    icon: <Layers className="w-5 h-5" />,
    content: (
      <div className="bg-slate-900 text-green-400 p-6 rounded-xl font-mono text-xs md:text-sm overflow-x-auto">
        <pre>{`
+-------------------------------------------------------+
|                 ANDROID DEVICE (Client)               |
+-------------------------------------------------------+
|  [ UI Layer (Activities/Fragments) - Jetpack Compose ]|
|                       |                               |
|            [ ViewModel (State Holder) ]               |
|                       |                               |
|        [ Repository (Single Source of Truth) ]        |
|           /                           \\               |
|  [ Local Data Source ]         [ Remote Data Source ] |
|   (Room DB + Files)              (Retrofit API)       |
|           |                            |              |
|   [ TFLite Model ]             [ WorkManager Sync ]   |
| (Inference Engine)             (Background Jobs)      |
+-------------------------------------------------------+
            ^                           ^
            | (Read/Write)              | (JSON Sync)
            v                           v
+-----------------------+     +-------------------------+
|   LOCAL STORAGE       |     |     CLOUD BACKEND       |
| (SQLite / Internal)   |     | (Firebase / Node.js)    |
+-----------------------+     +-------------------------+
        `}</pre>
      </div>
    )
  },
  {
    id: BlueprintSection.COMPONENTS,
    title: "6. Component List",
    icon: <Server className="w-5 h-5" />,
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-bold text-slate-800 border-b pb-2 mb-2">📱 Mobile App (Client)</h4>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
            <li><strong>UI:</strong> Home Dashboard, PDF Reader, Quiz Interface.</li>
            <li><strong>Logic:</strong> Sync Manager, Download Manager, TFLite Interpreter.</li>
            <li><strong>Storage:</strong> Room Database (User progress, offline content index).</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-800 border-b pb-2 mb-2">☁️ Backend & AI</h4>
          <ul className="list-disc pl-5 text-sm text-slate-600 space-y-1">
            <li><strong>API:</strong> Node.js/Express (Lightweight REST API).</li>
            <li><strong>Database:</strong> MongoDB (Flexible schema for learning content).</li>
            <li><strong>AI Training:</strong> Python (TensorFlow) -> Export to TFLite format.</li>
            <li><strong>Auth:</strong> Firebase Auth (OTP Login).</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: BlueprintSection.TECH_STACK,
    title: "7. Technology Stack",
    icon: <Zap className="w-5 h-5" />,
    content: (
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="p-3 font-bold text-slate-700">Category</th>
              <th className="p-3 font-bold text-slate-700">Tech Choice</th>
              <th className="p-3 font-bold text-slate-700">Why? (Justification)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="p-3 font-medium">Language</td>
              <td className="p-3 text-indigo-600 font-bold">Kotlin</td>
              <td className="p-3 text-slate-600">Null safety, Coroutines for smooth background tasks (No ANR).</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Local DB</td>
              <td className="p-3 text-indigo-600 font-bold">Room (SQLite)</td>
              <td className="p-3 text-slate-600">Best abstraction over SQLite, compiles SQL at build time.</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">Sync</td>
              <td className="p-3 text-indigo-600 font-bold">WorkManager</td>
              <td className="p-3 text-slate-600">Guaranteed execution even if app is closed or device restarts.</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">AI Engine</td>
              <td className="p-3 text-indigo-600 font-bold">TensorFlow Lite</td>
              <td className="p-3 text-slate-600">Optimized for mobile edge computing. No internet needed.</td>
            </tr>
            <tr>
              <td className="p-3 font-medium">UI</td>
              <td className="p-3 text-indigo-600 font-bold">XML / Compose</td>
              <td className="p-3 text-slate-600">XML for max compatibility with older Android versions (API 21+).</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  },
  {
    id: BlueprintSection.DATABASE,
    title: "8. Database Schema (Room)",
    icon: <Database className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <p className="text-sm text-slate-600 mb-2">Simplified Local Schema Structure:</p>
        <div className="grid gap-4">
          <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
            <h5 className="font-bold text-yellow-800 font-mono">Table: Users</h5>
            <p className="text-xs font-mono text-slate-700 mt-1">
              id (PK), name, grade, language_pref, last_sync_timestamp
            </p>
          </div>
          <div className="bg-blue-50 p-3 rounded border border-blue-200">
            <h5 className="font-bold text-blue-800 font-mono">Table: Content</h5>
            <p className="text-xs font-mono text-slate-700 mt-1">
              content_id (PK), title, local_path, is_downloaded, type (video/pdf)
            </p>
          </div>
          <div className="bg-green-50 p-3 rounded border border-green-200">
            <h5 className="font-bold text-green-800 font-mono">Table: Progress</h5>
            <p className="text-xs font-mono text-slate-700 mt-1">
              id (PK), user_id (FK), content_id (FK), status (completed/pending), score, timestamp, is_synced (Boolean)
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: BlueprintSection.SYNC,
    title: "9. Smart Sync Mechanism",
    icon: <RefreshCw className="w-5 h-5" />,
    content: (
      <div className="space-y-2">
         <div className="flex items-center gap-3">
            <div className="bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
            <p className="text-slate-700"><strong>Trigger:</strong> WorkManager detects network connection (Connected + Not Roaming).</p>
         </div>
         <div className="flex items-center gap-3">
            <div className="bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
            <p className="text-slate-700"><strong>Query:</strong> Select rows from `Progress` table where `is_synced = false`.</p>
         </div>
         <div className="flex items-center gap-3">
            <div className="bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
            <p className="text-slate-700"><strong>Batch & Compress:</strong> Convert data to JSON, GZIP compress if needed.</p>
         </div>
         <div className="flex items-center gap-3">
            <div className="bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
            <p className="text-slate-700"><strong>Upload:</strong> Send to Backend via Retrofit.</p>
         </div>
         <div className="flex items-center gap-3">
            <div className="bg-slate-200 text-slate-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">5</div>
            <p className="text-slate-700"><strong>Acknowledge:</strong> On success (200 OK), update local DB `is_synced = true`.</p>
         </div>
      </div>
    )
  },
  {
    id: BlueprintSection.AI,
    title: "10. On-Device AI Pipeline",
    icon: <Smartphone className="w-5 h-5" />,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600">Hum cloud AI use nahi kar sakte, isliye <strong>TensorFlow Lite (TFLite)</strong> use karenge.</p>
        <div className="bg-white p-4 rounded border border-slate-200">
          <h5 className="font-bold text-indigo-600">Concept: Personalized Recommendation Engine</h5>
          <p className="text-sm mt-2 text-slate-700">
            <strong>Input:</strong> Last 5 Quiz Scores + Topic Tags (e.g., [Math: 40%], [Science: 80%]).<br/>
            <strong>Model:</strong> A simple Classification Model pre-trained on student patterns.<br/>
            <strong>Inference (On Phone):</strong> Model runs in milliseconds.<br/>
            <strong>Output:</strong> Recommendation ID (e.g., "Review Algebra Basics").
          </p>
        </div>
      </div>
    )
  },
  {
    id: BlueprintSection.UX,
    title: "11. UX Strategy (Rural Context)",
    icon: <Users className="w-5 h-5" />,
    content: (
      <ul className="grid gap-3">
        <li className="bg-slate-50 p-3 rounded border-l-4 border-indigo-500">
          <strong className="block text-indigo-700">High Visibility</strong>
          <span className="text-sm text-slate-600">Bade buttons, bade fonts. Low-resolution screens pe bhi saaf dikhna chahiye.</span>
        </li>
        <li className="bg-slate-50 p-3 rounded border-l-4 border-indigo-500">
          <strong className="block text-indigo-700">Icon-First Navigation</strong>
          <span className="text-sm text-slate-600">Text kam, Icons zyada. Jinko padhne mein dikkat hai, wo icon dekh kar samajh jayein.</span>
        </li>
        <li className="bg-slate-50 p-3 rounded border-l-4 border-indigo-500">
          <strong className="block text-indigo-700">Voice Assistance</strong>
          <span className="text-sm text-slate-600">Har question ke saath ek "Speaker" button, jo question padh ke sunaye.</span>
        </li>
      </ul>
    )
  },
  {
    id: BlueprintSection.OPTIMIZATION,
    title: "12. App Optimization (Low RAM)",
    icon: <Zap className="w-5 h-5" />,
    content: (
      <div className="space-y-3 text-sm text-slate-700">
        <p>Target: <strong>&lt; 50MB APK Size</strong></p>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Vector Drawables:</strong> Use `.xml` vectors instead of PNGs/JPEGs to save space.</li>
          <li><strong>ProGuard/R8:</strong> Enable code shrinking to remove unused library classes.</li>
          <li><strong>Memory Leak Checks:</strong> Use LeakCanary during dev to fix memory leaks (Crucial for 2GB RAM).</li>
          <li><strong>Lazy Loading:</strong> Lists (RecyclerView) mein sirf wahi images load karo jo screen pe hain.</li>
        </ul>
      </div>
    )
  },
  {
    id: BlueprintSection.ROADMAP,
    title: "13. Development Roadmap",
    icon: <Calendar className="w-5 h-5" />,
    content: (
      <div className="relative border-l-2 border-indigo-200 ml-3 space-y-6 pb-2">
        <div className="pl-6 relative">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white"></div>
          <h5 className="font-bold text-slate-800">Phase 1: MVP (Weeks 1-4)</h5>
          <p className="text-sm text-slate-600">Basic UI, Local Room DB Setup, PDF reading capability.</p>
        </div>
        <div className="pl-6 relative">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white"></div>
          <h5 className="font-bold text-slate-800">Phase 2: Sync & AI (Weeks 5-8)</h5>
          <p className="text-sm text-slate-600">Implement WorkManager for Sync, integrate TFLite model for quizzes.</p>
        </div>
        <div className="pl-6 relative">
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 border-2 border-white"></div>
          <h5 className="font-bold text-slate-800">Phase 3: Polish & Beta (Weeks 9-10)</h5>
          <p className="text-sm text-slate-600">Performance optimization (R8), Testing on low-end devices, Field testing.</p>
        </div>
      </div>
    )
  },
  {
    id: BlueprintSection.TEAM,
    title: "14. Task Distribution",
    icon: <Briefcase className="w-5 h-5" />,
    content: (
      <div className="grid md:grid-cols-3 gap-4 text-center">
        <div className="bg-indigo-50 p-4 rounded-lg">
          <div className="font-bold text-indigo-700 mb-2">Member 1 (Android Lead)</div>
          <p className="text-xs text-slate-600">UI Architecture, Room DB Setup, Navigation.</p>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="font-bold text-purple-700 mb-2">Member 2 (Backend/AI)</div>
          <p className="text-xs text-slate-600">Node.js API, TFLite Model Training, Sync Logic.</p>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="font-bold text-orange-700 mb-2">Member 3 (Frontend/UX)</div>
          <p className="text-xs text-slate-600">UI Design (XML), Accessibility Features, Testing.</p>
        </div>
      </div>
    )
  },
  {
    id: BlueprintSection.FUTURE,
    title: "15. Future Scope",
    icon: <Rocket className="w-5 h-5" />,
    content: (
      <ul className="list-disc pl-5 space-y-2 text-slate-600">
        <li><strong>Gamification:</strong> XP points, Badges (offline store).</li>
        <li><strong>Peer-to-Peer Share:</strong> Bluetooth/Nearby Share se content transfer bina internet ke.</li>
        <li><strong>Vernacular Voice Bot:</strong> Fully voice-controlled navigation using on-device STT (Speech-to-Text).</li>
      </ul>
    )
  },
  {
    id: BlueprintSection.CONCLUSION,
    title: "16. Conclusion",
    icon: <Flag className="w-5 h-5" />,
    content: (
      <div className="text-center p-6 bg-slate-100 rounded-xl">
        <p className="text-lg text-slate-700 italic">
          "EduBridge sirf ek app nahi, ek koshish hai. Technology wohi safal hai jo sabse aakhri insaan tak pahunche."
        </p>
        <p className="mt-4 font-bold text-indigo-600">
          Ready to Build. Ready to Bridge.
        </p>
      </div>
    )
  },
  {
    id: BlueprintSection.SCRIPT,
    title: "🔵 Presentation Script",
    icon: <Mic className="w-5 h-5" />,
    content: (
      <div className="bg-black text-slate-200 p-6 rounded-xl font-sans leading-relaxed border-l-8 border-yellow-400">
        <h4 className="text-yellow-400 font-bold mb-4 uppercase tracking-widest text-sm">2-Minute Pitch</h4>
        <p className="mb-4">
          <span className="text-yellow-400 font-bold">(Start with energy)</span><br/>
          "Good Morning Judges. Imagine ek student hai, Rahul. Wo gaon mein rehta hai. Uske paas padhne ka jazba hai, par internet nahi hai. Uske paas phone hai, par wo latest iPhone nahi, ek 5 saal purana Android hai."
        </p>
        <p className="mb-4">
          "Problem ye hai ki aaj ki saari EdTech apps shehron (cities) ke liye bani hain. Wo heavy hain, data khaati hain, aur bina internet ke useless hain."
        </p>
        <p className="mb-4">
          "Enter <strong className="text-white">EduBridge</strong>. Humne banaya hai ek <strong>Offline-First Learning Platform</strong>."
        </p>
        <p className="mb-4">
          "Humaara magic 3 cheezon mein hai:"<br/>
          1. <strong>Download Once, Learn Forever:</strong> Rahul content download karta hai jab wo school wifi mein hota hai, aur ghar jaa kar bina internet ke padhta hai.<br/>
          2. <strong>On-Device AI:</strong> Humara app Rahul ke quiz answers ko locally check karta hai, TFLite use karke, aur batata hai ki usey kya revise karna chahiye.<br/>
          3. <strong>Optimized Performance:</strong> Ye app sirf 40MB ki hai aur 2GB RAM waale phone pe makkhan chalti hai."
        </p>
        <p>
          <span className="text-yellow-400 font-bold">(Closing)</span><br/>
          "EduBridge is not just an app; it's a bridge between ambition and opportunity. Thank you!"
        </p>
      </div>
    )
  }
];
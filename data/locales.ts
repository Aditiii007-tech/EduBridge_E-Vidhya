
import { Language } from '../types';

export const t: Record<Language, Record<string, string>> = {
  en: {
    // General
    welcome: "Welcome",
    backHome: "Back to Home",
    loading: "Loading",
    offlineMode: "Offline Mode",
    savedDataOnly: "Saved Data Only",
    
    // Auth
    whoAreYou: "Who are you?",
    student: "Student",
    teacher: "Teacher",
    parent: "Parent",
    loginAs: "Login as",
    mobilePlaceholder: "Mobile Number / ID",
    demoMode: "Demo Mode: No password required.",

    // Dashboard
    dailyChallenge: "Daily Challenge",
    solve5Math: "Solve 5 Math Problems",
    rewardXP: "Reward: +50 XP & Gold Badge",
    resume: "Resume",
    yourSubjects: "Your Subjects",
    chapters: "Chapters",
    topStudents: "Top Students",
    receiveNearby: "Receive Offline Pack",
    syncHub: "Sync Hub",
    brainGym: "Brain Gym",
    doubtCorner: "Doubt Corner",
    
    // Chapters
    backToDash: "Back to Dashboard",
    notes: "Notes",
    video: "Video",
    listen: "Listen",
    listening: "Listening...",
    startQuiz: "Start Quiz",
    noQuiz: "No Quiz Available",
    downloadOffline: "Download for Offline",
    removeDownload: "Remove Download",
    locked: "Locked",
    
    // Quiz
    quizComplete: "Quiz Complete!",
    yourScore: "Your Score",
    explanation: "Explanation",
    checkAnswer: "Check Answer",
    nextQuestion: "Next Question",
    finishQuiz: "Finish Quiz",
    backToChapter: "Back to Chapter",
    
    // Sync
    syncTitle: "Offline Sync Hub",
    syncSubtitle: "Enter Class Code to download syllabus",
    enterCode: "Class / Syllabus Code",
    syncTip: "Tip: Ask your teacher for the code. Works on 2G.",
    syncBtn: "Download Content",
    syncing: "Syncing...",
    
    // P2P
    scanning: "Scanning for Teacher...",
    connecting: "Connecting...",
    downloading: "Downloading Pack...",
    installComplete: "Installation Complete!",
    openLib: "Open Library",
    broadcasting: "Broadcasting Content Pack",
    
    // Teacher
    classMonitor: "Class Monitor",
    createLesson: "Create Lesson",
    broadcastPack: "Broadcast Pack",
    generateSync: "Generate Sync Code",
    studentProgress: "Student Progress",
    avgAttendance: "Avg Attendance",
    pendingSync: "Pending Sync",

    // Parent
    todaysReport: "Today's Report",
    studyTime: "Study Time",
    attendance: "Attendance",
    msgFromTeacher: "Message from Teacher",
    reply: "Reply",

    // Advanced Features
    voiceNav: "Voice Nav",
    listeningVoice: "Listening...",
    trySaying: "Try saying 'Open Math'",
    brainGymTitle: "Smart Revision",
    brainGymSubtitle: "AI thinks you might forget these topics soon!",
    reviseNow: "Revise Now",
    reasonLowScore: "Low Quiz Score",
    reasonLongTime: "Studied 5+ days ago",
    askDoubt: "Ask a Doubt",
    typeDoubt: "Type your question here...",
    postDoubt: "Post Doubt",
    pendingSyncStatus: "Waiting for Net",
    sentStatus: "Sent to Teacher",
    resolvedStatus: "Answered",
  },
  hi: {
    // General
    welcome: "Swagat hai",
    backHome: "Home wapas jaayein",
    loading: "Load ho raha hai",
    offlineMode: "Offline Mode",
    savedDataOnly: "Kewal saved data chalega",
    
    // Auth
    whoAreYou: "Aap kaun hain?",
    student: "Chhatra (Student)",
    teacher: "Shikshak (Teacher)",
    parent: "Abhibhavak (Parent)",
    loginAs: "Login karein: ",
    mobilePlaceholder: "Mobile Number / ID",
    demoMode: "Demo Mode: Password ki zaroorat nahi.",

    // Dashboard
    dailyChallenge: "Aaj ki Chunauti",
    solve5Math: "Ganit ke 5 sawal hal karein",
    rewardXP: "Inaam: +50 XP aur Gold Badge",
    resume: "Shuru Karein",
    yourSubjects: "Aapke Vishay (Subjects)",
    chapters: "Paath (Chapters)",
    topStudents: "Topper Chhatra",
    receiveNearby: "Paas se Receive Karein",
    syncHub: "Sync Hub",
    brainGym: "Brain Gym (Dimaag)",
    doubtCorner: "Sawal Puchiye",
    
    // Chapters
    backToDash: "Dashboard par jaayein",
    notes: "Notes (Padhein)",
    video: "Video (Dekhein)",
    listen: "Sunhein",
    listening: "Sun raha hoon...",
    startQuiz: "Quiz Shuru Karein",
    noQuiz: "Quiz Uplabdh Nahi",
    downloadOffline: "Offline Save Karein",
    removeDownload: "Download Hatayein",
    locked: "Locked Hai",
    
    // Quiz
    quizComplete: "Quiz Pura Hua!",
    yourScore: "Aapka Score",
    explanation: "Samadhaan (Explanation)",
    checkAnswer: "Jawab Check Karein",
    nextQuestion: "Agla Sawal",
    finishQuiz: "Quiz Khatam Karein",
    backToChapter: "Paath par wapas",
    
    // Sync
    syncTitle: "Offline Sync Hub",
    syncSubtitle: "Syllabus download karne ke liye code daalein",
    enterCode: "Class / Syllabus Code",
    syncTip: "Sujhaav: Teacher se code maangein. 2G par bhi chalta hai.",
    syncBtn: "Content Download Karein",
    syncing: "Sync ho raha hai...",
    
    // P2P
    scanning: "Teacher ko dhoond raha hoon...",
    connecting: "Connect ho raha hai...",
    downloading: "Pack Download ho raha hai...",
    installComplete: "Install Pura Hua!",
    openLib: "Library Kholein",
    broadcasting: "Content Broadcast ho raha hai",
    
    // Teacher
    classMonitor: "Class Monitor",
    createLesson: "Lesson Banayein",
    broadcastPack: "Pack Bhejein",
    generateSync: "Sync Code Banayein",
    studentProgress: "Chhatra Pragati",
    avgAttendance: "Ausat Upasthiti",
    pendingSync: "Sync Baaki Hai",

    // Parent
    todaysReport: "Aaj ki Report",
    studyTime: "Padhai ka Samay",
    attendance: "Upasthiti",
    msgFromTeacher: "Teacher ka Sandesh",
    reply: "Jawab dein",

    // Advanced Features
    voiceNav: "Bol kar kholein",
    listeningVoice: "Sun raha hoon...",
    trySaying: "Bolein 'Math Kholo'",
    brainGymTitle: "Revision Karein",
    brainGymSubtitle: "AI ko lagta hai aap ye bhool sakte hain!",
    reviseNow: "Abhi Padhein",
    reasonLowScore: "Kam Number",
    reasonLongTime: "5 din pehle padha tha",
    askDoubt: "Sawal Puchein",
    typeDoubt: "Apna sawal yahan likhein...",
    postDoubt: "Post Karein",
    pendingSyncStatus: "Net ka intezaar",
    sentStatus: "Teacher ko bheja",
    resolvedStatus: "Jawab aa gaya",
  }
};

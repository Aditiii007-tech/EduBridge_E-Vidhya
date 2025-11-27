
import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Command } from 'lucide-react';
import { t } from '../data/locales';
import { Language } from '../types';

interface VoiceNavigatorProps {
  lang: Language;
  onNavigate: (command: string) => void;
}

const VoiceNavigator: React.FC<VoiceNavigatorProps> = ({ lang, onNavigate }) => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [isSupported, setIsSupported] = useState(true);

  useEffect(() => {
    if (!('webkitSpeechRecognition' in window)) {
      setIsSupported(false);
    }
  }, []);

  const toggleListening = () => {
    if (!isSupported) {
      alert("Voice command not supported in this browser environment. Try Chrome.");
      return;
    }

    if (isListening) {
      setIsListening(false);
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
      setTranscript(t[lang].listeningVoice);
    };

    recognition.onresult = (event: any) => {
      const text = event.results[0][0].transcript;
      setTranscript(text);
      handleCommand(text);
    };

    recognition.onerror = () => {
      setIsListening(false);
      setTranscript("Error. Try again.");
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleCommand = (text: string) => {
    const lower = text.toLowerCase();
    
    // Simple Keyword Matching simulation
    if (lower.includes('math') || lower.includes('ganit')) {
      onNavigate('math');
    } else if (lower.includes('science') || lower.includes('vigyan')) {
      onNavigate('sci');
    } else if (lower.includes('english')) {
      onNavigate('eng');
    } else if (lower.includes('progress') || lower.includes('report')) {
      onNavigate('dashboard');
    } else if (lower.includes('quiz') || lower.includes('test')) {
      onNavigate('quiz_mode'); // Generic start quiz
    } else if (lower.includes('doubt') || lower.includes('sawal')) {
      onNavigate('doubt');
    } else if (lower.includes('revision') || lower.includes('brain')) {
      onNavigate('brain_gym');
    } else {
        setTimeout(() => setTranscript("Unknown command"), 1000);
    }
  };

  if (!isSupported) return null;

  return (
    <>
      <button 
        onClick={toggleListening}
        className={`fixed bottom-4 left-4 z-40 p-4 rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-2 ${
            isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-800 text-white'
        }`}
      >
        {isListening ? <MicOff size={24} /> : <Mic size={24} />}
        {isListening && <span className="text-xs font-bold w-20 truncate">{transcript}</span>}
      </button>
    </>
  );
};

export default VoiceNavigator;

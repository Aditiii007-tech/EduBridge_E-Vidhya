import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { askAiArchitect } from '../services/geminiService';
import { ChatMessage, UserRole } from '../types';

interface ChatWidgetProps {
  currentContext: string;
  userRole?: UserRole;
}

const ChatWidget: React.FC<ChatWidgetProps> = ({ currentContext, userRole = 'student' }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Custom welcome message based on role
  const getWelcomeMessage = () => {
    if (userRole === 'teacher') return "Hello Sir/Ma'am! Need help with lesson plans or student analytics?";
    if (userRole === 'parent') return "Namaste! Rahul ki padhai ke baare mein kuch poochna hai?";
    return "Hello! Main hoon aapka AI Dost. Padhai mein koi help chahiye? (I am your AI study buddy.)";
  };

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message when widget opens or role changes
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'model', text: getWelcomeMessage() }]);
    }
  }, [userRole]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Context now includes role
    const fullContext = `User Role: ${userRole}. Current Screen: ${currentContext}.`;
    const answer = await askAiArchitect(userMsg.text, fullContext);
    
    setMessages(prev => [...prev, { role: 'model', text: answer }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-20 right-4 z-50 flex flex-col items-end md:bottom-8 md:right-8">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl border border-indigo-100 flex flex-col mb-4 overflow-hidden animate-slide-up ring-1 ring-slate-200">
          <div className={`bg-gradient-to-r p-4 flex justify-between items-center text-white ${
            userRole === 'teacher' ? 'from-purple-600 to-purple-700' :
            userRole === 'parent' ? 'from-orange-600 to-orange-700' :
            'from-indigo-600 to-indigo-700'
          }`}>
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-full">
                <Sparkles size={16} className="text-yellow-300" />
              </div>
              <div>
                <span className="font-bold text-sm block">EduBot AI</span>
                <span className="text-[10px] opacity-80 block capitalize">{userRole} Assistant</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
              <X size={18} />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] rounded-2xl p-3 text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-br-none shadow-md' 
                      : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none p-3 shadow-sm">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask a doubt..."
              className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 outline-none placeholder:text-slate-400"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-indigo-600 text-white p-2.5 rounded-xl hover:bg-indigo-700 disabled:opacity-50 transition-colors shadow-sm"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`rounded-full p-4 shadow-xl transition-all hover:scale-105 flex items-center justify-center gap-2 ${isOpen ? 'bg-slate-700 text-white rotate-90 scale-0 opacity-0 hidden' : 'bg-indigo-600 text-white'}`}
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default ChatWidget;

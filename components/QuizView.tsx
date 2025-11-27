
import React, { useState } from 'react';
import { QuizQuestion, Language } from '../types';
import { ArrowLeft, CheckCircle, XCircle, RefreshCw, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { t } from '../data/locales';

interface QuizViewProps {
  questions: QuizQuestion[];
  onBack: () => void;
  onComplete: (score: number) => void;
  lang: Language;
}

const QuizView: React.FC<QuizViewProps> = ({ questions, onBack, onComplete, lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  // Safety Check
  if (!questions || questions.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 bg-slate-50 text-center animate-fade-in">
        <div className="bg-slate-100 p-4 rounded-full mb-4">
           <AlertCircle className="text-slate-400 w-10 h-10" />
        </div>
        <h2 className="text-xl font-bold text-slate-700 mb-2">{t[lang].noQuiz}</h2>
        <button 
          onClick={onBack}
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-bold shadow-sm"
        >
          {t[lang].backToChapter}
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];
  
  // Translation logic
  const displayQuestion = (lang === 'hi' && currentQuestion.trans?.question) 
    ? currentQuestion.trans.question 
    : currentQuestion.question;
    
  const displayOptions = (lang === 'hi' && currentQuestion.trans?.options)
    ? currentQuestion.trans.options
    : currentQuestion.options;
    
  const displayExplanation = (lang === 'hi' && currentQuestion.trans?.explanation)
    ? currentQuestion.trans.explanation
    : currentQuestion.explanation;

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const checkAnswer = () => {
    setIsAnswered(true);
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(s => s + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      onComplete(score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0));
    }
  };

  if (showResult) {
    return (
      <div className="h-full flex flex-col items-center justify-center p-6 bg-slate-50 animate-fade-in">
        <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-xl text-center">
          <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
            🏆
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">{t[lang].quizComplete}</h2>
          <p className="text-slate-500 mb-6">{t[lang].yourScore}:</p>
          
          <div className="text-5xl font-black text-indigo-600 mb-6">
            {score} <span className="text-2xl text-slate-300">/ {questions.length}</span>
          </div>

          <button 
            onClick={onBack}
            className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold hover:bg-slate-800"
          >
            {t[lang].backToChapter}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col bg-slate-50">
      {/* Header */}
      <div className="h-16 px-4 flex items-center justify-between bg-white border-b border-slate-200">
        <button onClick={onBack} className="p-2 -ml-2 text-slate-500">
          <ArrowLeft />
        </button>
        <span className="font-mono font-bold text-slate-400">
          Q{currentIndex + 1}/{questions.length}
        </span>
      </div>

      {/* Question Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 max-w-2xl mx-auto w-full">
        <div className="mb-6">
          <h3 className="text-lg md:text-xl font-bold text-slate-800 leading-snug">
            {displayQuestion}
          </h3>
        </div>

        <div className="space-y-3">
          {displayOptions.map((option, idx) => {
            let stateClass = "border-slate-200 bg-white text-slate-700 hover:bg-slate-50";
            
            if (isAnswered) {
              if (idx === currentQuestion.correctAnswer) {
                stateClass = "border-green-500 bg-green-50 text-green-700";
              } else if (idx === selectedOption) {
                stateClass = "border-red-500 bg-red-50 text-red-700";
              } else {
                stateClass = "border-slate-100 text-slate-400 opacity-50";
              }
            } else if (selectedOption === idx) {
              stateClass = "border-indigo-500 bg-indigo-50 text-indigo-700 ring-1 ring-indigo-500";
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={isAnswered}
                className={`w-full p-4 rounded-xl border-2 text-left font-medium transition-all ${stateClass}`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {isAnswered && idx === currentQuestion.correctAnswer && <CheckCircle size={20} />}
                  {isAnswered && idx === selectedOption && idx !== currentQuestion.correctAnswer && <XCircle size={20} />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback / Explanation */}
        {isAnswered && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100 animate-slide-up">
            <h4 className="text-sm font-bold text-blue-800 mb-1 flex items-center gap-2">
              💡 {t[lang].explanation}:
            </h4>
            <p className="text-sm text-blue-700">
              {displayExplanation}
            </p>
          </div>
        )}
      </div>

      {/* Bottom Action Bar */}
      <div className="p-4 bg-white border-t border-slate-200">
        <div className="max-w-2xl mx-auto">
          {!isAnswered ? (
            <button 
              onClick={checkAnswer}
              disabled={selectedOption === null}
              className="w-full bg-indigo-600 disabled:bg-slate-300 disabled:cursor-not-allowed text-white py-3 rounded-xl font-bold shadow-sm transition-all active:scale-95"
            >
              {t[lang].checkAnswer}
            </button>
          ) : (
            <button 
              onClick={nextQuestion}
              className="w-full bg-slate-900 text-white py-3 rounded-xl font-bold shadow-sm transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              {currentIndex < questions.length - 1 ? t[lang].nextQuestion : t[lang].finishQuiz} <RefreshCw size={18} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizView;

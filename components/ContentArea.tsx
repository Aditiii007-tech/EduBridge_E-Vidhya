import React from 'react';
import { SectionData } from '../types';

interface ContentAreaProps {
  section: SectionData;
}

const ContentArea: React.FC<ContentAreaProps> = ({ section }) => {
  return (
    <main className="flex-1 h-screen overflow-y-auto bg-slate-50 p-4 md:p-8 md:pb-24">
      <div className="max-w-3xl mx-auto bg-white min-h-[80vh] rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-fade-in">
        <div className="bg-indigo-600 p-6 md:p-10 text-white">
          <div className="flex items-center gap-3 opacity-90 mb-2">
            {React.isValidElement(section.icon) ? 
              React.cloneElement(section.icon as React.ReactElement<{ className?: string }>, { className: "w-6 h-6" }) : 
              section.icon
            }
            <span className="text-sm font-semibold tracking-wider uppercase">Blueprint Section</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2>
        </div>
        
        <div className="p-6 md:p-10 text-slate-800 leading-relaxed">
          {section.content}
        </div>
      </div>
    </main>
  );
};

export default ContentArea;
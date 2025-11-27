
import React from 'react';
import { SectionData } from '../types';

interface SidebarProps {
  sections: SectionData[];
  activeId: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ sections, activeId, onSelect, isOpen, toggleSidebar }) => {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Container */}
      <aside 
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:h-screen overflow-y-auto ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <div className="font-bold text-xl text-indigo-700 flex items-center gap-2">
            <span>📘</span> EduBridge
          </div>
          <button onClick={toggleSidebar} className="md:hidden text-slate-500">
            ✕
          </button>
        </div>
        
        <nav className="p-4 space-y-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                onSelect(section.id);
                if (window.innerWidth < 768) toggleSidebar();
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                activeId === section.id 
                  ? 'bg-indigo-50 text-indigo-700' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <span className={`${activeId === section.id ? 'text-indigo-600' : 'text-slate-400'}`}>
                {section.icon}
              </span>
              <span className="text-left truncate">{section.title}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-4 mt-auto border-t border-slate-100">
          <div className="text-xs text-slate-400 text-center">
            Detailed Documentation<br/>Mode
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

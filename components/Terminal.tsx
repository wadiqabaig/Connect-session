
import React from 'react';

interface TerminalProps {
  children: React.ReactNode;
  title?: string;
}

const Terminal: React.FC<TerminalProps> = ({ children, title = "guest@p2p-hub:~" }) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-[#0a0a0a] border border-emerald-900/50 rounded-lg overflow-hidden terminal-glow relative">
        <div className="scanline" />
        
        {/* Terminal Header */}
        <div className="bg-emerald-900/20 border-b border-emerald-900/30 px-4 py-2 flex items-center justify-between">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="text-emerald-500/70 text-xs font-mono uppercase tracking-widest">
            {title}
          </div>
          <div className="w-12" />
        </div>

        {/* Content Area */}
        <div className="p-4 md:p-8 min-h-[400px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Terminal;

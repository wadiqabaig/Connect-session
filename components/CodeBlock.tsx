
import React from 'react';
import { CodeLine } from '../types';
import { C_CODE_SNIPPET } from '../constants';

interface CodeBlockProps {
  onLineClick: (line: CodeLine) => void;
  errorLineId?: number | null;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ onLineClick, errorLineId }) => {
  const getLineContent = (line: CodeLine) => {
    // Simple naive syntax highlighting logic
    const tokens = line.text.split(/(\s+|[(){};,]|["]|#include|<|>|return|int|while|printf)/g);
    
    return tokens.map((token, i) => {
      if (['int', 'while', 'return', '#include'].includes(token)) {
        return <span key={i} className="text-blue-400 font-bold">{token}</span>;
      }
      if (['printf'].includes(token)) {
        return <span key={i} className="text-yellow-300">{token}</span>;
      }
      if (['<stdio.h>', '<', '>'].includes(token)) {
        return <span key={i} className="text-orange-400">{token}</span>;
      }
      if (token.startsWith('"') || token.endsWith('"')) {
        return <span key={i} className="text-green-300">{token}</span>;
      }
      if (line.text.trim().startsWith('//')) {
        return <span key={i} className="text-emerald-700 italic">{token}</span>;
      }
      return <span key={i} className="text-emerald-50">{token}</span>;
    });
  };

  return (
    <div className="bg-black/40 rounded-md p-4 font-mono text-sm md:text-base overflow-x-auto border border-emerald-900/20">
      {C_CODE_SNIPPET.map((line) => (
        <div
          key={line.id}
          onClick={() => onLineClick(line)}
          className={`group flex items-start cursor-pointer transition-colors hover:bg-emerald-900/20 py-0.5 ${
            errorLineId === line.id ? 'bg-red-900/30' : ''
          }`}
        >
          <span className="w-8 text-right pr-4 text-emerald-800 select-none opacity-50">
            {line.id}
          </span>
          <div 
            style={{ paddingLeft: `${line.indent * 1.5}rem` }}
            className="flex-1 whitespace-pre"
          >
            {getLineContent(line)}
          </div>
          <div className="opacity-0 group-hover:opacity-100 text-[10px] text-emerald-600/50 uppercase ml-4 pt-1">
            Debug?
          </div>
        </div>
      ))}
    </div>
  );
};

export default CodeBlock;

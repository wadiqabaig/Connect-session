
import React, { useState, useEffect, useCallback } from 'react';
import { GameState, CodeLine } from './types';
import Terminal from './components/Terminal';
import CodeBlock from './components/CodeBlock';
import EventDetails from './components/EventDetails';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.PLAYING);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errorLineId, setErrorLineId] = useState<number | null>(null);
  const [isFading, setIsFading] = useState(false);

  const handleLineClick = useCallback((line: CodeLine) => {
    if (gameState !== GameState.PLAYING) return;

    if (line.isBuggy) {
      setErrorMessage(null);
      setErrorLineId(null);
      setIsFading(true);
      // Brief delay to allow the fade out animation
      setTimeout(() => {
        setGameState(GameState.SUCCESS);
        setIsFading(false);
      }, 600);
    } else {
      setErrorMessage("Not the root cause. Try again.");
      setErrorLineId(line.id);
      
      // Clear error message after 2 seconds
      setTimeout(() => {
        setErrorMessage(prev => prev === "Not the root cause. Try again." ? null : prev);
        setErrorLineId(prev => prev === line.id ? null : prev);
      }, 2000);
    }
  }, [gameState]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#050505]">
      {/* Dynamic Background Noise/Effect */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
      
      <div className="w-full max-w-4xl relative z-10">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-emerald-500 mb-4 tracking-tighter">
            connect()
          </h1>
          <p className="text-emerald-700 font-mono text-sm md:text-base uppercase tracking-[0.2em]">
            Permission: RESTRICTED // Role: STUDENT_DEBUGGER
          </p>
        </header>

        <Terminal title={gameState === GameState.SUCCESS ? "access@granted:~" : "debugger@sandbox:~"}>
          {gameState === GameState.PLAYING && (
            <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
              <div className="mb-8 border-l-4 border-emerald-500 pl-4 py-1">
                <h2 className="text-white text-xl md:text-2xl font-bold mb-2">
                  Find the Logical Glitch
                </h2>
                <p className="text-emerald-500/70 text-sm md:text-base">
                  A logic error is causing an infinite loop in the synchronization script. 
                  Identify the <span className="text-white underline underline-offset-4 decoration-emerald-800">root cause</span> to unlock the hub invitation.
                </p>
              </div>

              <CodeBlock 
                onLineClick={handleLineClick} 
                errorLineId={errorLineId}
              />

              <div className="mt-8 min-h-[24px]">
                {errorMessage && (
                  <div className="flex items-center space-x-2 text-red-500 font-bold animate-pulse">
                    <span>[!] ERROR:</span>
                    <span className="uppercase tracking-wider text-xs md:text-sm">{errorMessage}</span>
                  </div>
                )}
                {!errorMessage && (
                  <div className="flex items-center space-x-2 text-emerald-700/50 font-mono text-xs md:text-sm">
                    <span>&gt;</span>
                    <span className="animate-pulse whitespace-nowrap overflow-hidden inline-block w-48">Waiting for input...</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {gameState === GameState.SUCCESS && (
            <EventDetails />
          )}
        </Terminal>

        <footer className="mt-12 text-center">
          <div className="text-emerald-900 text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] flex flex-col md:flex-row items-center justify-center md:space-x-8 space-y-2 md:space-y-0">
            <span>&copy; {new Date().getFullYear()} Connect() </span>
            <span className="hidden md:inline">|</span>
            <span>Technical Excellence Initiative</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;

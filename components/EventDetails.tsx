
import React from 'react';
import { SUPPORTED_UNITS } from '../constants';

const EventDetails: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="flex items-center space-x-3 mb-6">
        <div className="bg-green-500 text-black px-3 py-1 rounded text-xs font-bold uppercase tracking-tighter shadow-[0_0_10px_rgba(34,197,94,0.5)]">
          SUCCESS
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
          Segmentation Fault Fixed! <span className="text-emerald-500">Access Granted.</span>
        </h2>
      </div>

      <div className="space-y-6 text-emerald-100/90 leading-relaxed max-w-2xl">
        <p className="text-lg">
          If you caught that bug, or if you need help catching bugs like it, join our <span className="text-emerald-400 font-bold underline decoration-emerald-800 underline-offset-4">Peer-to-Peer Hub</span>. We are seniors helping juniors master technical concepts like pointers, algorithms, and calculus.
        </p>

        <div className="bg-emerald-900/10 border border-emerald-900/40 p-4 rounded-lg">
          <p className="text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2 opacity-70">
            System Disclaimer
          </p>
          <p className="italic text-emerald-400/80">
            "Strictly subject-related technical help only. No venting, no feedback sessions—just pure problem solving."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4 border-y border-emerald-900/30">
          <div>
            <h4 className="text-xs uppercase tracking-tighter text-emerald-600 font-bold mb-1">Schedule</h4>
            <p className="text-xl font-medium text-white">Monday, 12:30 PM – 1:30 PM</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-tighter text-emerald-600 font-bold mb-1">Terminal Location</h4>
            <p className="text-xl font-medium text-white">Room 111</p>
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-tighter text-emerald-600 font-bold mb-3">Compatible Modules</h4>
          <div className="flex flex-wrap gap-2">
            {SUPPORTED_UNITS.map(unit => (
              <span key={unit} className="bg-emerald-900/30 border border-emerald-900/50 px-3 py-1 rounded-full text-xs font-mono text-emerald-300">
                {unit}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-6">
          <a
            href="#"
            className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-black transition-all duration-200 bg-emerald-500 font-mono tracking-widest uppercase hover:bg-emerald-400 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.3)] w-full md:w-auto"
          >
            Register Here
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;

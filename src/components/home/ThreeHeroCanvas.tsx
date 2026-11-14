"use client";

import { useState } from "react";
import ThreeExaltScene from "@/components/ThreeExaltScene";

export default function ThreeHeroCanvas() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-full h-[240px] rounded-xl overflow-hidden bg-slate-950/85 border border-slate-800/80 flex items-center justify-center cursor-grab active:cursor-grabbing shadow-inner"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <ThreeExaltScene fullScreen={false} className="w-full h-full" />

      {/* Floating Status Pill */}
      <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-700/60 text-[10px] font-mono text-cyan-300 backdrop-blur-sm pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
        <span>3D Cyber Engine</span>
      </div>

      {/* Interactive Hint */}
      <div className="absolute bottom-2.5 right-3 text-[10px] font-mono text-slate-500 pointer-events-none transition-opacity duration-300">
        {isHovered ? "✦ Mouse Parallax Tracking" : "Move cursor to navigate"}
      </div>
    </div>
  );
}

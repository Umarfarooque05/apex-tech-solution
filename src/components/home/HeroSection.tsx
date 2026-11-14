"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  Search, 
  TrendingUp, 
  Cpu, 
  Bot, 
  CheckCircle2, 
  Sparkles, 
  BarChart3, 
  Activity, 
  Maximize2, 
  Minimize2 
} from "lucide-react";

export default function HeroSection() {
  const [immersiveMode, setImmersiveMode] = useState(false);

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-20 pb-20 lg:pt-24 lg:pb-28 overflow-hidden bg-transparent text-white">
      {/* Background Subtle Patterns & Mesh Gradients */}
      <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none z-0" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-brand-500/15 via-accent-cyan/15 to-transparent rounded-full glow-blur pointer-events-none z-0" />

      {/* Floating Exit Button When in Immersive 3D Mode */}
      {immersiveMode && (
        <button
          onClick={() => setImmersiveMode(false)}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900/90 border border-cyan-500/60 text-white text-xs font-bold shadow-2xl backdrop-blur-lg hover:scale-105 active:scale-100 transition-all"
        >
          <Minimize2 className="w-4 h-4 text-cyan-400" />
          <span>Exit Fullscreen 3D View</span>
        </button>
      )}

      {/* Content Container (Fades smoothly when immersive mode is active) */}
      <div 
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full transition-all duration-700 ${
          immersiveMode ? "opacity-0 pointer-events-none scale-95" : "opacity-100 scale-100"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Tags Row */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Digital Growth • Smart Technology</span>
              </div>

              <button
                type="button"
                onClick={() => setImmersiveMode(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-700/60 hover:border-cyan-400/60 text-slate-300 hover:text-cyan-300 text-xs font-medium transition-all backdrop-blur-sm"
              >
                <Maximize2 className="w-3 h-3 text-cyan-400" />
                <span>Fullscreen 3D View</span>
              </button>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
              Grow Your Business With{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                Digital Strategy &amp; Smart Technology
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
              We combine SEO, digital marketing, web development, custom software, and AI automation to help businesses attract customers, improve operations, and grow.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-600 via-blue-600 to-accent-cyan hover:from-brand-500 hover:to-cyan-400 shadow-lg shadow-brand-500/25 transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 shadow-sm backdrop-blur-md transition-all"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-300 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Transparent Strategy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Tailored for Growth</span>
              </div>
            </div>

          </div>

          {/* Right Column: Open Holographic Frame for Full-Screen 3D Neural Engine */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[380px] lg:min-h-[460px]">
            {/* Holographic Ring Reticle framing the 3D Engine */}
            <div className="relative w-full max-w-[380px] aspect-square rounded-full border border-cyan-500/20 flex items-center justify-center pointer-events-none">
              {/* Outer pulsing ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-cyan-400/30 animate-[spin_40s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dotted border-blue-500/25 animate-[spin_30s_linear_infinite_reverse]" />
              <div className="w-3/4 h-3/4 rounded-full bg-gradient-to-tr from-cyan-500/10 via-brand-500/5 to-transparent blur-2xl" />
            </div>

            {/* Floating Top Telemetry Pill */}
            <div className="absolute top-2 sm:top-4 right-2 sm:right-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/85 border border-cyan-500/40 text-cyan-300 text-xs font-mono backdrop-blur-md shadow-xl shadow-cyan-950/40">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>3D Neural Core: Live</span>
            </div>

            {/* Floating Left Stat Chip */}
            <div className="absolute bottom-16 -left-2 sm:left-2 p-3 rounded-2xl bg-slate-950/85 border border-slate-800/80 backdrop-blur-xl shadow-2xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center border border-cyan-500/30">
                <Activity className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Lattice Nodes</div>
                <div className="text-sm font-bold text-white font-mono">100k Synapses</div>
              </div>
            </div>

            {/* Floating Right Stat Chip */}
            <div className="absolute top-28 -right-2 sm:right-2 p-3 rounded-2xl bg-slate-950/85 border border-slate-800/80 backdrop-blur-xl shadow-2xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                <TrendingUp className="w-4.5 h-4.5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">Optimization</div>
                <div className="text-sm font-bold text-emerald-400 font-mono">+184% Growth</div>
              </div>
            </div>

            {/* Interactive Control Pill at Bottom */}
            <div className="absolute -bottom-2 inset-x-0 flex flex-col items-center gap-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-[11px] font-mono text-slate-300 backdrop-blur-md shadow-lg">
                <span className="text-cyan-400">✦</span>
                <span>3D Screens &amp; Core Orbiting in Circle • Drag to Spin</span>
              </div>

              <button
                type="button"
                onClick={() => setImmersiveMode(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-cyan-950/80 hover:bg-cyan-900 border border-cyan-500/50 hover:border-cyan-400 text-cyan-200 text-xs font-semibold transition-all shadow-md shadow-cyan-950/50 hover:scale-105 active:scale-95"
              >
                <Maximize2 className="w-3.5 h-3.5 text-cyan-300" />
                <span>Enter Fullscreen 3D Experience</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

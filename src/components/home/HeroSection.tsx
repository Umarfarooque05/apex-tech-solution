"use client";

import Link from "next/link";
import { ArrowRight, Search, TrendingUp, Cpu, Bot, CheckCircle2, ShieldCheck, Sparkles, BarChart3, Activity } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Background Subtle Patterns & Mesh Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-brand-200/40 via-accent-cyan/20 to-transparent rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-700 text-xs font-semibold uppercase tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-brand-600" />
              <span>Digital Growth. Smart Technology.</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Grow Your Business With <span className="bg-gradient-to-r from-brand-900 via-brand-600 to-brand-500 bg-clip-text text-transparent">Digital Strategy & Smart Technology</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl">
              We combine SEO, digital marketing, web development, custom software, and AI automation to help businesses attract customers, improve operations, and grow.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-bold text-white bg-brand-900 hover:bg-brand-800 shadow-lg shadow-brand-900/15 transition-all hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get a Free Consultation</span>
                <ArrowRight className="w-5 h-5 text-accent-cyan" />
              </Link>

              <Link
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 shadow-sm transition-all"
              >
                Explore Our Services
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Transparent Strategy</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Tailored for Growth</span>
              </div>
            </div>

          </div>

          {/* Right Column: Abstract Technology & Growth Dashboard Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Card Wrapper with Gradient Border */}
              <div className="p-1 rounded-3xl bg-gradient-to-b from-brand-400/30 via-slate-200/50 to-brand-600/20 shadow-2xl backdrop-blur-xl">
                <div className="bg-slate-900 rounded-[22px] p-5 sm:p-6 text-white overflow-hidden relative border border-slate-800">
                  
                  {/* Dashboard Header Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                      <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      <span className="text-xs font-mono text-slate-400 ml-2">Apex Growth Engine v2.6</span>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live System
                    </span>
                  </div>

                  {/* Top Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>Search Visibility</span>
                        <Search className="w-3.5 h-3.5 text-accent-cyan" />
                      </div>
                      <div className="text-xl font-bold text-white">+184%</div>
                      <div className="text-[10px] text-emerald-400 font-medium">Organic Traffic Growth</div>
                    </div>

                    <div className="bg-slate-800/80 rounded-xl p-3.5 border border-slate-700/60">
                      <div className="flex items-center justify-between text-slate-400 text-xs mb-1">
                        <span>Lead Pipeline</span>
                        <BarChart3 className="w-3.5 h-3.5 text-brand-400" />
                      </div>
                      <div className="text-xl font-bold text-white">Automated</div>
                      <div className="text-[10px] text-brand-300 font-medium">Instant Lead Capture</div>
                    </div>
                  </div>

                  {/* Interactive Visual Graph / Pillar Nodes */}
                  <div className="bg-slate-950/60 rounded-xl p-4 border border-slate-800 mb-5 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span className="font-semibold text-slate-300">Active Growth Modules</span>
                      <Activity className="w-3.5 h-3.5 text-brand-400" />
                    </div>

                    {/* Progress Bar 1 */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-slate-300">SEO & Content Strategy</span>
                        <span className="text-accent-cyan font-mono">98% Optimized</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-brand-500 to-accent-cyan rounded-full w-[98%]" />
                      </div>
                    </div>

                    {/* Progress Bar 2 */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-slate-300">Web App Performance</span>
                        <span className="text-emerald-400 font-mono">99/100 Core Web Vitals</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full w-[95%]" />
                      </div>
                    </div>

                    {/* Progress Bar 3 */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs font-medium">
                        <span className="text-slate-300">AI Workflow Automation</span>
                        <span className="text-brand-300 font-mono">24/7 Operations</span>
                      </div>
                      <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-indigo-500 to-brand-400 rounded-full w-[90%]" />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tech Tags */}
                  <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-1">
                    <span className="flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-brand-400" /> Next.js & React Stack
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bot className="w-3.5 h-3.5 text-accent-cyan" /> Smart Workflows
                    </span>
                  </div>

                </div>
              </div>

              {/* Floating Accent Card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white text-slate-900 p-4 rounded-2xl shadow-2xl border border-slate-100 items-center gap-3 max-w-[220px]">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Focus</div>
                  <div className="text-sm font-extrabold text-slate-900">Sustainable ROI</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

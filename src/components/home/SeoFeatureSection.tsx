import Link from "next/link";
import { Search, MapPin, Code, Key, FileText, BarChart, CheckCircle2, ArrowRight } from "lucide-react";

const capabilities = [
  { title: "Technical SEO", desc: "Clean code structure, indexability, speed, and schema markup.", icon: Code },
  { title: "Local SEO", desc: "Dominate local map packs & targeted location-based discovery.", icon: MapPin },
  { title: "On-Page Optimization", desc: "Optimized metadata, heading hierarchy, and internal linking.", icon: Search },
  { title: "Keyword Strategy", desc: "Target high-intent search terms that drive business leads.", icon: Key },
  { title: "Content Strategy", desc: "Relevant, high-authority content structured for search intent.", icon: FileText },
  { title: "Google Business Profile", desc: "Complete GMB setup, optimization, and local review strategy.", icon: CheckCircle2 },
  { title: "Transparent SEO Reporting", desc: "Regular performance tracking without vanity metrics.", icon: BarChart },
];

export default function SeoFeatureSection() {
  return (
    <section className="py-20 lg:py-28 bg-transparent border-b border-slate-800/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Capabilities */}
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              <Search className="w-3.5 h-3.5 text-cyan-400" />
              Search Engine Optimization
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Get Found By <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">The Right Customers</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Search visibility is not just about rankings. It&apos;s about being discovered by people who are actively looking for what your business offers.
            </p>

            {/* Capabilities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {capabilities.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/40 backdrop-blur-[3px] border border-slate-800/60 hover:border-cyan-500/50 hover:bg-slate-900/40 transition-all">
                    <div className="p-2 rounded-lg bg-slate-800/80 text-cyan-400 border border-slate-700/60 shadow-sm shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white">{item.title}</h3>
                      <p className="text-xs text-slate-400 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4">
              <Link
                href="/services/seo"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 via-blue-600 to-accent-cyan hover:from-brand-500 hover:to-cyan-400 transition-all shadow-lg shadow-cyan-950/40"
              >
                <span>Get an SEO Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Graphic - Organic Search Growth Card */}
          <div className="lg:col-span-5">
            <div className="p-6 rounded-3xl bg-slate-950/50 backdrop-blur-[4px] text-white border border-slate-800/70 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full glow-blur pointer-events-none" />
              
              <div className="flex items-center justify-between border-b border-slate-800/70 pb-4 mb-6">
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Organic Traffic Analysis</span>
                  <span className="text-lg font-bold text-white">Target Keyword Growth</span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  Consistent Growth
                </span>
              </div>

              {/* Simulated Search Keyword Table */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-slate-200">Local Service Searches</span>
                  </div>
                  <span className="text-emerald-400 font-bold">Top 3 Visibility</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-slate-200">High-Intent Keywords</span>
                  </div>
                  <span className="text-blue-400 font-bold">+140% Clicks</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span className="text-slate-200">Google Business Profile</span>
                  </div>
                  <span className="text-cyan-400 font-bold">Map Pack Featured</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/70 text-xs text-slate-400 leading-relaxed">
                <p>We build sustainable search authority based on technical performance, search intent, and quality content structure.</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import Link from "next/link";
import { FolderKanban, Layout, Database, Search, ArrowUpRight, Sparkles } from "lucide-react";

const concepts = [
  {
    category: "Website Development",
    title: "High-Performance Corporate Platform",
    description: "Modern conversion-focused web platform engineered with Next.js 15, sub-second load times, and structured SEO markup.",
    icon: Layout,
    tags: ["Next.js", "Tailwind CSS", "SEO Optimized", "Responsive"],
    badge: "Production Blueprint",
    stat: "99/100 Core Web Vitals",
  },
  {
    category: "Custom Software",
    title: "Intelligent Lead CRM & Pipeline",
    description: "Custom operational software for automated lead routing, real-time pipeline tracking, and instant notifications.",
    icon: Database,
    tags: ["React", "Custom CRM", "Dashboard", "API Integration"],
    badge: "Operations System",
    stat: "Instant Sync & Alerts",
  },
  {
    category: "Search Strategy",
    title: "Multi-Location SEO Growth Engine",
    description: "Comprehensive technical audit, structured Schema graph, and high-intent local search visibility framework.",
    icon: Search,
    tags: ["Local SEO", "Schema Markup", "Technical Audit", "Keyword Strategy"],
    badge: "Search Framework",
    stat: "+184% Search Footprint",
  },
];

export default function SelectedWorkSection() {
  return (
    <section className="py-20 lg:py-28 bg-transparent border-b border-slate-800/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-block px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                Capabilities &amp; Solutions
              </span>
              <span className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-full bg-amber-950/40 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="w-3 h-3 text-amber-400" /> Portfolio Launching Soon
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Selected <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Work Concepts</span>
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Here is an overview of the solution models and technical standards we build for our clients. Client case studies will be updated here as projects launch.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-cyan-400 hover:text-cyan-300 hover:underline shrink-0"
          >
            <span>View Solution Frameworks</span>
            <ArrowUpRight className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

        {/* Project Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {concepts.map((concept, idx) => {
            const Icon = concept.icon;
            return (
              <div
                key={idx}
                className="bg-slate-950/40 backdrop-blur-[3px] rounded-3xl p-7 border border-slate-800/60 shadow-xl hover:shadow-cyan-950/30 hover:border-cyan-500/50 hover:bg-slate-900/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {concept.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-[11px] font-semibold font-mono">
                      {concept.stat}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 w-fit mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {concept.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {concept.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/60">
                  <div className="flex flex-wrap gap-1.5">
                    {concept.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-900/70 border border-slate-700/60 text-slate-300 text-[11px] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

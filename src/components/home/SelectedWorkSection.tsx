import Link from "next/link";
import { FolderKanban, Layout, Database, Search, ArrowUpRight, Sparkles } from "lucide-react";

const concepts = [
  {
    category: "Website Development Concept",
    title: "Business Website",
    description: "Modern conversion-focused website architecture designed for speed, search optimization, and lead capture.",
    icon: Layout,
    tags: ["Next.js", "Tailwind CSS", "SEO Optimized", "Responsive"],
    badge: "Architecture Showcase",
  },
  {
    category: "Custom Software Concept",
    title: "Lead Management System",
    description: "A custom operational dashboard for managing incoming sales leads, follow-ups, and customer analytics.",
    icon: Database,
    tags: ["React", "Custom CRM", "Dashboard", "API Integration"],
    badge: "Software Prototype",
  },
  {
    category: "Search Strategy Concept",
    title: "Local SEO Growth",
    description: "A structured local search engine optimization strategy designed to improve location-based search visibility.",
    icon: Search,
    tags: ["Local SEO", "GMB Strategy", "Technical Audit", "Keyword Strategy"],
    badge: "Strategy Framework",
  },
];

export default function SelectedWorkSection() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider">
                Capabilities & Solutions
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" /> Portfolio Launching Soon
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Selected <span className="text-brand-600">Work Concepts</span>
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Here is an overview of the solution models and technical standards we build for our clients. Client case studies will be updated here as projects launch.
            </p>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-600 hover:text-brand-700 hover:underline shrink-0"
          >
            <span>View Solution Frameworks</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {concepts.map((concept, idx) => {
            const Icon = concept.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {concept.category}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[11px] font-medium">
                      {concept.badge}
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-brand-50 text-brand-600 w-fit mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {concept.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {concept.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="flex flex-wrap gap-1.5">
                    {concept.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-600 text-[11px] font-semibold"
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

import { Briefcase, Layers, MessageSquare, Layers2 } from "lucide-react";

const pillars = [
  {
    title: "Business First",
    desc: "We start with your business goals, not just technology.",
    icon: Briefcase,
    color: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  },
  {
    title: "Built for Growth",
    desc: "Solutions should be able to evolve as your business grows.",
    icon: Layers,
    color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  },
  {
    title: "Clear Communication",
    desc: "Simple communication without unnecessary technical jargon.",
    icon: MessageSquare,
    color: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
  },
  {
    title: "One Technology Partner",
    desc: "SEO, marketing, websites, software, and automation under one roof.",
    icon: Layers2,
    color: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 bg-transparent border-b border-slate-800/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Content */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
              Why Apex Tech Solution
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              More Than a <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Service Provider</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              We partner with businesses to eliminate fragmented digital efforts. Whether you need higher search visibility or a custom business platform, we bring technological clarity and marketing execution together.
            </p>
            <div className="p-4 rounded-2xl bg-slate-950/50 backdrop-blur-[3px] border border-slate-800/60 text-xs text-slate-400 space-y-1">
              <span className="font-bold text-cyan-300">Dedicated Partnership Commitment</span>
              <p>No cookie-cutter templates or low-effort hacks. Every strategy is built for longevity and measurable performance.</p>
            </div>
          </div>

          {/* Right Side 4 Pillars Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-950/40 backdrop-blur-[3px] border border-slate-800/60 hover:bg-slate-900/40 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 ${pillar.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}

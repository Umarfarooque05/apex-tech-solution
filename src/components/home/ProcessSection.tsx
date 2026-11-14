import { Compass, Lightbulb, Code2, LineChart } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    description: "Understand your business, audience, challenges, and goals.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Strategize",
    description: "Create a practical digital or technology strategy.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Build & Execute",
    description: "Develop, launch, optimize, and implement the solution.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Improve",
    description: "Measure performance and continuously improve results.",
    icon: LineChart,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-transparent border-b border-slate-800/40 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            Clear &amp; Structured Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            A transparent 4-step execution process engineered for speed, quality, and measurable business growth.
          </p>
        </div>

        {/* Timeline Steps with Subtle Connecting Lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 z-0 pointer-events-none opacity-40" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative z-10 bg-slate-950/40 backdrop-blur-[3px] rounded-2xl p-6 border border-slate-800/60 shadow-xl hover:shadow-cyan-950/30 hover:border-cyan-500/50 hover:bg-slate-900/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6 text-cyan-400 group-hover:text-slate-950" />
                    </div>
                    <span className="text-2xl font-extrabold font-mono text-slate-500">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center text-xs font-semibold text-cyan-400">
                  <span>Phase {idx + 1} Execution</span>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

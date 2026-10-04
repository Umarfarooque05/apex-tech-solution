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
    <section className="py-20 lg:py-28 bg-slate-50/50 border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider">
            Clear & Structured Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How We <span className="text-brand-600">Work</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            A transparent 4-step execution process engineered for speed, quality, and measurable business growth.
          </p>
        </div>

        {/* Timeline Steps with Subtle Connecting Lines */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Subtle horizontal connecting line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-brand-200 via-brand-400 to-accent-cyan z-0 pointer-events-none" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative z-10 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-brand-900 text-white flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-brand-600 transition-colors">
                      <Icon className="w-6 h-6 text-accent-cyan" />
                    </div>
                    <span className="text-2xl font-extrabold font-mono text-slate-300">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-brand-600">
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

import { Search, Target, Cpu, ShieldCheck } from "lucide-react";

const valueProps = [
  {
    title: "SEO-Focused",
    desc: "Improve your search visibility and attract relevant traffic.",
    icon: Search,
    color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  },
  {
    title: "Conversion-Driven",
    desc: "Turn website visitors into real business opportunities.",
    icon: Target,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
  },
  {
    title: "Technology-Powered",
    desc: "Build scalable websites and software for your business.",
    icon: Cpu,
    color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
  },
  {
    title: "Long-Term Partnership",
    desc: "We focus on sustainable growth rather than quick hacks.",
    icon: ShieldCheck,
    color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/30",
  },
];

export default function TrustValueStrip() {
  return (
    <section className="py-12 bg-transparent border-y border-slate-800/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-950/40 backdrop-blur-[3px] border border-slate-800/60 hover:bg-slate-900/40 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-200 group"
              >
                <div className={`p-3 rounded-xl border shrink-0 transition-transform group-hover:scale-110 ${prop.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {prop.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

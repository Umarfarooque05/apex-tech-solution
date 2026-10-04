import { Search, Target, Cpu, ShieldCheck } from "lucide-react";

const valueProps = [
  {
    title: "SEO-Focused",
    desc: "Improve your search visibility and attract relevant traffic.",
    icon: Search,
    color: "text-blue-600 bg-blue-50 border-blue-100",
  },
  {
    title: "Conversion-Driven",
    desc: "Turn website visitors into real business opportunities.",
    icon: Target,
    color: "text-emerald-600 bg-emerald-50 border-emerald-100",
  },
  {
    title: "Technology-Powered",
    desc: "Build scalable websites and software for your business.",
    icon: Cpu,
    color: "text-indigo-600 bg-indigo-50 border-indigo-100",
  },
  {
    title: "Long-Term Partnership",
    desc: "We focus on sustainable growth rather than quick hacks.",
    icon: ShieldCheck,
    color: "text-cyan-600 bg-cyan-50 border-cyan-100",
  },
];

export default function TrustValueStrip() {
  return (
    <section className="py-12 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {valueProps.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50/70 border border-slate-200/60 hover:bg-white hover:shadow-md transition-all duration-200 group"
              >
                <div className={`p-3 rounded-xl border shrink-0 transition-transform group-hover:scale-110 ${prop.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base mb-1">
                    {prop.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
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

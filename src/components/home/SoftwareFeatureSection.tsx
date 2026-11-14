import Link from "next/link";
import { Cpu, LayoutDashboard, Users, Workflow, Database, Bot, ArrowRight, CheckCircle, Code } from "lucide-react";

const features = [
  { title: "Custom Web Applications", desc: "Tailor-made web solutions built with modern React & Next.js.", icon: Code },
  { title: "Admin Dashboards", desc: "Intuitive management portals to monitor key business operational metrics.", icon: LayoutDashboard },
  { title: "CRM & Lead Management", desc: "Custom lead tracking pipelines designed to boost sales conversions.", icon: Users },
  { title: "APIs & Integrations", desc: "Connect third-party payment, SMS, email, and ERP software tools.", icon: Workflow },
  { title: "Database Systems", desc: "Scalable, secure data architecture optimized for fast retrieval.", icon: Database },
  { title: "Business Automation", desc: "Automate repetitive data entry and manual administrative tasks.", icon: Bot },
];

export default function SoftwareFeatureSection() {
  return (
    <section className="py-20 lg:py-28 bg-transparent text-white border-b border-slate-800/40 relative overflow-hidden z-10">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-cyan/10 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Cpu className="w-3.5 h-3.5 text-accent-cyan" />
            Software Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Turn Your Business Idea <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Into Software</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            From internal business tools to customer-facing platforms, we build practical software designed around your workflow.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/40 backdrop-blur-[3px] border border-slate-800/60 hover:border-cyan-500/50 hover:bg-slate-900/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mock Software Dashboard UI */}
        <div className="bg-slate-950/50 backdrop-blur-[4px] rounded-3xl border border-slate-800/70 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 max-w-xl text-left">
              <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">Custom Platform Preview</span>
              <h3 className="text-2xl font-bold text-white">Built for Speed, Reliability &amp; Security</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                We develop full-stack applications using Next.js, React, Node.js, and modern cloud databases—ensuring fast page speeds, role-based access, and enterprise-grade data encryption.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Scalable Stack</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Modular API Design</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-emerald-400" /> Mobile Responsive</span>
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-600 via-blue-600 to-accent-cyan hover:from-brand-500 hover:to-cyan-400 transition-all shadow-xl shadow-cyan-950/40 hover:scale-105 active:scale-95"
              >
                <span>Discuss Your Project</span>
                <ArrowRight className="w-5 h-5 text-white" />
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

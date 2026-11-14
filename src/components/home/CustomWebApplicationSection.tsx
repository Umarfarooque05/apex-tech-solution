import Link from "next/link";
import { 
  AppWindow, 
  Layers, 
  ShieldCheck, 
  Activity, 
  Network, 
  Lock, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Terminal,
  Cpu
} from "lucide-react";

const webAppCapabilities = [
  {
    title: "SaaS Product Platforms",
    desc: "Multi-tenant cloud architectures with recurring billing, role permissions, and onboarding flows.",
    icon: Layers,
    badge: "Scalable Multi-Tenant",
  },
  {
    title: "Client & Customer Portals",
    desc: "Secure self-service portals allowing clients to manage orders, submit inquiries, and access files 24/7.",
    icon: ShieldCheck,
    badge: "Enterprise Security",
  },
  {
    title: "Live Operational Dashboards",
    desc: "Real-time analytics, telemetry reporting, and interactive KPI visualizations with sub-second queries.",
    icon: Activity,
    badge: "Real-time Telemetry",
  },
  {
    title: "Internal Operations & Workflow Tools",
    desc: "Custom administrative web software tailored to eliminate spreadsheet clutter and manual bottlenecks.",
    icon: AppWindow,
    badge: "High Efficiency",
  },
  {
    title: "REST & GraphQL API Backends",
    desc: "High-throughput APIs designed for seamless integrations with ERPs, CRMs, payments, and mobile apps.",
    icon: Network,
    badge: "Modular Architecture",
  },
  {
    title: "Cloud-Native Infrastructure",
    desc: "Next.js 15, PostgreSQL, Redis caching, and Docker containers deployed for 99.9% uptime and zero latency.",
    icon: Lock,
    badge: "Zero-Trust Security",
  },
];

const techPills = [
  "Next.js 15 App Router",
  "React 19 & TypeScript",
  "Tailwind CSS",
  "Node.js / Express",
  "PostgreSQL & Prisma",
  "Redis Micro-caching",
  "Docker & AWS Cloud",
  "OAuth & RBAC Security",
];

export default function CustomWebApplicationSection() {
  return (
    <section className="py-20 lg:py-28 bg-transparent border-b border-slate-800/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <AppWindow className="w-3.5 h-3.5 text-cyan-400" />
            Bespoke Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Scale Faster With <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Custom Web Applications</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            From multi-tenant SaaS platforms to bespoke internal operations tools, we build secure, lightning-fast web applications tailored to your exact business logic.
          </p>
        </div>

        {/* Web App Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {webAppCapabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/40 backdrop-blur-[3px] border border-slate-800/60 hover:bg-slate-900/40 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300/80 border border-cyan-500/20">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Architecture & Tech Stack Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-950/40 backdrop-blur-[3px] border border-slate-800/60 mb-12">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
                <Terminal className="w-3.5 h-3.5" />
                Modern Full-Stack Architecture
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-white">
                Engineered with Modern, Production-Grade Technology
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Zero legacy bloat. We use industry-standard stacks designed for instant sub-second response times, bulletproof type safety, and seamless cloud auto-scaling.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 max-w-md">
              {techPills.map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] font-medium text-slate-300"
                >
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Section CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services/custom-web-applications"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 via-blue-600 to-accent-cyan hover:from-brand-500 hover:to-cyan-400 shadow-lg shadow-cyan-950/40 transition-all hover:scale-105 active:scale-95"
          >
            <span>Explore Custom Web Applications</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
          <Link
            href="/contact?service=Custom%20Web%20Applications"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-slate-300 bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 hover:text-white transition-all hover:scale-105 active:scale-95"
          >
            <span>Schedule Architecture Call</span>
            <Sparkles className="w-4 h-4 text-cyan-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}

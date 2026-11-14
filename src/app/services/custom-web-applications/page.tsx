import type { Metadata } from "next";
import Link from "next/link";
import PreFooterCta from "@/components/PreFooterCta";
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
  Database,
  Zap,
  PhoneCall
} from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Web Application Development | SaaS & Enterprise Web Apps",
  description: "Bespoke custom web applications, SaaS platforms, client portals, and cloud software engineered with Next.js 15, React 19, and scalable cloud databases.",
};

const webAppModules = [
  {
    title: "SaaS Product Development",
    desc: "End-to-end multi-tenant SaaS application engineering with subscription billing, self-service onboarding, and granular role-based permissions.",
    icon: Layers,
    tags: ["Multi-Tenancy", "Stripe / Razorpay", "RBAC"],
  },
  {
    title: "Secure Client Portals",
    desc: "Custom authenticated portals that let your clients access project data, exchange files, make payments, and view real-time status updates safely.",
    icon: ShieldCheck,
    tags: ["2FA / OAuth", "File Vaults", "Live Status"],
  },
  {
    title: "Real-Time Operational Dashboards",
    desc: "Interactive data visualization hubs with live metrics, telemetry streaming, financial analytics, and customizable reporting widgets.",
    icon: Activity,
    tags: ["Sub-second SQL", "Live WebSockets", "Exporting"],
  },
  {
    title: "Internal Business Operations Tools",
    desc: "Eliminate spreadsheet overload with bespoke internal web apps that streamline inventory, approvals, HR, and job dispatching.",
    icon: AppWindow,
    tags: ["Automated Workflows", "Audit Logs", "Mobile Ready"],
  },
  {
    title: "REST & GraphQL API Ecosystems",
    desc: "High-performance API backends designed to connect your web apps seamlessly with third-party software, mobile apps, and legacy ERPs.",
    icon: Network,
    tags: ["Microservices", "Rate Limiting", "Webhook Sync"],
  },
  {
    title: "Cloud Infrastructure & Database Architecture",
    desc: "Production-hardened deployments on AWS or Vercel with PostgreSQL, Redis caching, continuous automated backups, and 99.9% uptime.",
    icon: Database,
    tags: ["PostgreSQL / Redis", "Docker", "Auto-scaling"],
  },
];

const developmentSteps = [
  {
    step: "01",
    title: "Discovery & Architecture Blueprint",
    desc: "We analyze your exact business logic, user personas, and data schemas to map out technical architecture, database ERDs, and API specs.",
  },
  {
    step: "02",
    title: "Interactive UI/UX Prototyping",
    desc: "We create clean, intuitive wireframes and responsive interactive prototypes designed for frictionless end-user experience.",
  },
  {
    step: "03",
    title: "Agile Full-Stack Sprints",
    desc: "We build features in rapid iterative sprints using Next.js 15, React 19, TypeScript, and clean modular code architectures.",
  },
  {
    step: "04",
    title: "Rigorous QA, Security & Stress Testing",
    desc: "Comprehensive testing covering OWASP security vulnerabilities, end-to-end user flows, cross-device responsiveness, and peak database load.",
  },
  {
    step: "05",
    title: "Cloud Launch & Continuous Support",
    desc: "Seamless zero-downtime deployment, SSL configuration, automated daily backups, and proactive monitoring with guaranteed SLAs.",
  },
];

export default function CustomWebApplicationsPage() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <AppWindow className="w-3.5 h-3.5" /> High-Performance Web Engineering
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Tailor-Made <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Custom Web Applications</span> Built for Scale
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We engineer mission-critical web applications, SaaS platforms, and internal business tools designed around your unique workflow—delivering speed, airtight security, and seamless user experiences.
            </p>
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/contact?service=Custom%20Web%20Applications"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-white text-slate-900 hover:bg-slate-100 transition-all shadow-lg hover:scale-105 active:scale-95"
              >
                <span>Discuss Your Web App</span>
                <ArrowRight className="w-4 h-4 text-cyan-600" />
              </Link>
              <a
                href="tel:+919867333477"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-200 border border-slate-700 hover:border-cyan-500/50 hover:text-white transition-all bg-slate-950/50"
              >
                <PhoneCall className="w-4 h-4 text-cyan-400" />
                <span>+91 98673 33477</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Capabilities</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Everything Your Custom Web Application Needs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              From day one, we build with enterprise-grade architectures that handle heavy traffic, complex data models, and high security demands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webAppModules.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.desc}</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-200/80">
                    {item.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-semibold px-2.5 py-1 rounded bg-slate-200/60 text-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engineering Process */}
      <section className="py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">Our Methodology</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              How We Deliver Production-Grade Web Apps
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              A transparent, structured engineering lifecycle that guarantees predictability, high performance, and rapid time-to-market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {developmentSteps.map((step, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm relative space-y-3">
                <span className="text-2xl font-black text-cyan-500/30 font-mono">{step.step}</span>
                <h4 className="text-base font-bold text-slate-900">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PreFooterCta />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import PreFooterCta from "@/components/PreFooterCta";
import { Cpu, LayoutDashboard, Users, Workflow, Database, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Custom Software Development & Web Apps | Apex Tech Solution",
  description: "Custom web applications, admin dashboards, business CRM tools, APIs, and database architecture built around your exact workflow.",
};

const softwareModules = [
  {
    title: "Custom Web Applications",
    desc: "Tailor-made software platforms engineered for complex business logic, multi-user roles, and high security.",
    icon: Cpu,
  },
  {
    title: "Operational Admin Dashboards",
    desc: "Centralized analytics and monitoring tools designed to give management clear visibility over business performance.",
    icon: LayoutDashboard,
  },
  {
    title: "CRM & Lead Pipeline Software",
    desc: "Custom lead tracking, client management, and automated follow-up systems tailored to your sales team.",
    icon: Users,
  },
  {
    title: "API Development & System Integrations",
    desc: "Seamless RESTful & GraphQL API endpoints connecting third-party software, payment gateways, and CRMs.",
    icon: Workflow,
  },
  {
    title: "Database Architecture",
    desc: "Robust relational and document databases designed for data integrity, encryption, and fast query execution.",
    icon: Database,
  },
  {
    title: "Internal Operations Tools",
    desc: "Custom web-based tools that replace messy spreadsheets and automate manual internal workflows.",
    icon: Shield,
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <section className="bg-brand-950 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-800 border border-brand-700 text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5 text-accent-cyan" /> Custom Software Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Software Built Around <span className="text-accent-cyan">Your Business Workflow</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We design and engineer bespoke software platforms, internal operational portals, and web applications that solve your specific operational bottlenecks.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?service=software-development"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-white text-slate-900 hover:bg-slate-100 transition-all"
              >
                <span>Discuss Your Software Project</span>
                <ArrowRight className="w-4 h-4 text-brand-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {softwareModules.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <PreFooterCta />
    </>
  );
}

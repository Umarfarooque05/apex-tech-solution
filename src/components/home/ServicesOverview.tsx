import Link from "next/link";
import { Search, TrendingUp, Code2, Cpu, AppWindow, Wrench, ArrowRight, Check } from "lucide-react";

const services = [
  {
    number: "01",
    title: "SEO & Local SEO",
    description: "Help businesses improve search visibility, rankings, organic traffic, and local discovery.",
    items: ["Technical SEO", "On-page SEO", "Local SEO", "Keyword Research", "SEO Audits", "Content Strategy"],
    cta: "Explore SEO",
    href: "/services/seo",
    icon: Search,
    accent: "border-blue-500/30 bg-blue-500/10 text-blue-400",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies designed to attract and convert customers.",
    items: ["Social Media Marketing", "Content Marketing", "Paid Advertising", "Lead Generation", "Marketing Strategy", "Analytics"],
    cta: "Explore Marketing",
    href: "/services/digital-marketing",
    icon: TrendingUp,
    accent: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  },
  {
    number: "03",
    title: "Website Development",
    description: "Fast, responsive websites designed around business goals.",
    items: ["Business Websites", "Landing Pages", "Corporate Websites", "E-commerce", "Website Redesign", "Performance Optimization"],
    cta: "Build Your Website",
    href: "/services/web-development",
    icon: Code2,
    accent: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
  },
  {
    number: "04",
    title: "Software Development",
    description: "Custom software built around specific business requirements.",
    items: ["Web Applications", "Business Dashboards", "CRM Systems", "Internal Tools", "APIs", "Database Systems"],
    cta: "Build Software",
    href: "/services/software-development",
    icon: Cpu,
    accent: "border-indigo-500/30 bg-indigo-500/10 text-indigo-400",
  },
  {
    number: "05",
    title: "Custom Web Applications",
    description: "Bespoke, scalable cloud web applications, client portals, and SaaS platforms built for speed and security.",
    items: ["SaaS Platforms", "Client Portals", "Cloud Web Apps", "Interactive Dashboards", "REST & GraphQL APIs", "Custom Enterprise Systems"],
    cta: "Explore Web Apps",
    href: "/services/custom-web-applications",
    icon: AppWindow,
    accent: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description: "Keep your digital infrastructure secure, updated, and performing well.",
    items: ["Website Maintenance", "Security Updates", "Performance Monitoring", "Technical Support", "Feature Updates", "Cloud Backups"],
    cta: "Get Support",
    href: "/contact",
    icon: Wrench,
    accent: "border-slate-700/60 bg-slate-800/60 text-slate-300",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-transparent border-b border-slate-800/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            Comprehensive Digital Capability
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Everything You Need to <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Grow Digitally</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            From getting discovered on Google to building the technology behind your business, we help you move forward.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="bg-slate-950/40 backdrop-blur-[3px] rounded-3xl p-7 border border-slate-800/60 shadow-2xl hover:shadow-cyan-950/40 hover:border-cyan-500/50 hover:bg-slate-900/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold font-mono text-slate-400 tracking-widest uppercase">
                      {service.number}
                    </span>
                    <div className={`p-3 rounded-2xl border ${service.accent} transition-transform group-hover:scale-105 backdrop-blur-sm`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Card Title & Desc */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Items */}
                  <div className="grid grid-cols-2 gap-2 mb-8 pt-4 border-t border-slate-800/60">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-800/60 text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors"
                >
                  <span>{service.cta}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-800/80 group-hover:bg-cyan-500 group-hover:text-slate-950 flex items-center justify-center transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

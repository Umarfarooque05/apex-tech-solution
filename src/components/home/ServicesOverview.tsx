import Link from "next/link";
import { Search, TrendingUp, Code2, Cpu, Bot, Wrench, ArrowRight, Check } from "lucide-react";

const services = [
  {
    number: "01",
    title: "SEO & Local SEO",
    description: "Help businesses improve search visibility, rankings, organic traffic, and local discovery.",
    items: ["Technical SEO", "On-page SEO", "Local SEO", "Keyword Research", "SEO Audits", "Content Strategy"],
    cta: "Explore SEO",
    href: "/services/seo",
    icon: Search,
    accent: "border-blue-500/30 bg-blue-50/50 text-blue-600",
  },
  {
    number: "02",
    title: "Digital Marketing",
    description: "Data-driven marketing strategies designed to attract and convert customers.",
    items: ["Social Media Marketing", "Content Marketing", "Paid Advertising", "Lead Generation", "Marketing Strategy", "Analytics"],
    cta: "Explore Marketing",
    href: "/services/digital-marketing",
    icon: TrendingUp,
    accent: "border-emerald-500/30 bg-emerald-50/50 text-emerald-600",
  },
  {
    number: "03",
    title: "Website Development",
    description: "Fast, responsive websites designed around business goals.",
    items: ["Business Websites", "Landing Pages", "Corporate Websites", "E-commerce", "Website Redesign", "Performance Optimization"],
    cta: "Build Your Website",
    href: "/services/web-development",
    icon: Code2,
    accent: "border-brand-500/30 bg-brand-50/50 text-brand-600",
  },
  {
    number: "04",
    title: "Software Development",
    description: "Custom software built around specific business requirements.",
    items: ["Web Applications", "Business Dashboards", "CRM Systems", "Internal Tools", "APIs", "Database Systems"],
    cta: "Build Software",
    href: "/services/software-development",
    icon: Cpu,
    accent: "border-indigo-500/30 bg-indigo-50/50 text-indigo-600",
  },
  {
    number: "05",
    title: "AI Automation",
    description: "Use AI to reduce repetitive work and improve business efficiency.",
    items: ["AI Chatbots", "Lead Automation", "AI Workflows", "Document Processing", "Customer Support Automation", "Process Automation"],
    cta: "Explore AI Solutions",
    href: "/services/ai-automation",
    icon: Bot,
    accent: "border-cyan-500/30 bg-cyan-50/50 text-cyan-600",
  },
  {
    number: "06",
    title: "Maintenance & Support",
    description: "Keep your digital infrastructure secure, updated, and performing well.",
    items: ["Website Maintenance", "Security Updates", "Performance Monitoring", "Technical Support", "Feature Updates", "Cloud Backups"],
    cta: "Get Support",
    href: "/contact",
    icon: Wrench,
    accent: "border-slate-500/30 bg-slate-100/60 text-slate-700",
  },
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider">
            Comprehensive Digital Capability
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to <span className="text-brand-600">Grow Digitally</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
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
                className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-sm hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-bold font-mono text-slate-400 tracking-widest uppercase">
                      {service.number}
                    </span>
                    <div className={`p-3 rounded-2xl border ${service.accent} transition-transform group-hover:scale-105`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Card Title & Desc */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet Items */}
                  <div className="grid grid-cols-2 gap-2 mb-8 pt-4 border-t border-slate-100">
                    {service.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                        <Check className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card CTA */}
                <Link
                  href={service.href}
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-bold text-slate-900 group-hover:text-brand-600 transition-colors"
                >
                  <span>{service.cta}</span>
                  <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-brand-600 group-hover:text-white flex items-center justify-center transition-colors">
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

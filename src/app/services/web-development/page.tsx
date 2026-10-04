import type { Metadata } from "next";
import Link from "next/link";
import PreFooterCta from "@/components/PreFooterCta";
import { Code2, Smartphone, Zap, Shield, ShoppingCart, RefreshCw, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development & Redesign Services | Apex Tech Solution",
  description: "Fast, responsive Next.js & React business websites, corporate portals, e-commerce platforms, and conversion landing pages.",
};

const webServices = [
  {
    title: "Business & Corporate Websites",
    desc: "Modern, scalable websites engineered to represent your brand professionally and build instant credibility.",
    icon: Code2,
  },
  {
    title: "High-Converting Landing Pages",
    desc: "Targeted landing pages built specifically for marketing campaigns and high lead conversion rates.",
    icon: Zap,
  },
  {
    title: "E-Commerce Solutions",
    desc: "Secure, fast online stores designed for seamless shopping, payment gateway integration, and product management.",
    icon: ShoppingCart,
  },
  {
    title: "Website Redesign & Modernization",
    desc: "Transform outdated or slow websites into lightning-fast, mobile-optimized modern web applications.",
    icon: RefreshCw,
  },
  {
    title: "Mobile-First Responsiveness",
    desc: "Every pixel optimized for flawless display across mobile phones, tablets, and large desktop screens.",
    icon: Smartphone,
  },
  {
    title: "Performance & Security Optimization",
    desc: "Optimized image delivery, clean code bundling, SSL security, and top-tier Core Web Vitals scores.",
    icon: Shield,
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-xs font-bold uppercase tracking-wider">
              <Code2 className="w-3.5 h-3.5" /> High-Performance Web Architecture
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Websites Built Around Your <span className="text-brand-400">Business Goals</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We design and code custom websites using modern frameworks like Next.js and React—delivering exceptional speed, SEO readiness, and smooth mobile experiences.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?service=web-development"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-white text-slate-900 hover:bg-slate-100 transition-all"
              >
                <span>Build Your Website</span>
                <ArrowRight className="w-4 h-4 text-brand-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {webServices.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-brand-100 text-brand-700 flex items-center justify-center mb-5">
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

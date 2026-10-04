import type { Metadata } from "next";
import Link from "next/link";
import PreFooterCta from "@/components/PreFooterCta";
import { Search, MapPin, CheckCircle, ArrowRight, BarChart3, Code, FileText, Globe, Layers } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO & Local SEO Services in India | Apex Tech Solution",
  description: "Improve organic visibility, local search discoverability, and search traffic with our technical SEO, keyword strategy, and on-page optimization services.",
};

const seoOfferings = [
  {
    title: "Technical SEO Audit",
    desc: "Clean website architecture, crawlability, mobile performance, XML sitemaps, and Core Web Vitals optimization.",
    icon: Code,
  },
  {
    title: "Local SEO & Google Business Profile",
    desc: "Improve local search presence on Google Maps and location-based customer searches across targeted cities.",
    icon: MapPin,
  },
  {
    title: "On-Page SEO Optimization",
    desc: "Optimizing title tags, meta descriptions, heading structures, internal linking, and image ALT attributes.",
    icon: Search,
  },
  {
    title: "Keyword & Search Intent Research",
    desc: "Identifying high-intent search terms that potential customers use to find your products or services.",
    icon: BarChart3,
  },
  {
    title: "Content Strategy & Optimization",
    desc: "Developing search-engine friendly, authoritative content structured to satisfy user queries and build domain authority.",
    icon: FileText,
  },
  {
    title: "SEO Performance Reporting",
    desc: "Transparent monthly analytics tracking organic traffic, search impressions, click-through rates, and keyword movement.",
    icon: Layers,
  },
];

export default function SeoPage() {
  return (
    <>
      {/* Service Hero */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              <Search className="w-3.5 h-3.5" /> Organic Search Growth
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              SEO & Local SEO Solutions for <span className="text-brand-400">Sustainable Visibility</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Search engine optimization is about connecting your business with customers who are actively looking for what you offer. We implement clean, technical, ethical SEO strategies engineered for long-term growth.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                href="/contact?service=seo"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-white text-slate-900 hover:bg-slate-100 transition-all"
              >
                <span>Get an SEO Consultation</span>
                <ArrowRight className="w-4 h-4 text-brand-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">Comprehensive SEO Capabilities</h2>
            <p className="text-slate-600">Everything needed to optimize your digital presence for search engines and user conversion.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seoOfferings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-5">
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

      {/* Trust & Transparency Box */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-4">
          <h3 className="text-2xl font-bold text-slate-900">Our SEO Philosophy</h3>
          <p className="text-slate-600 leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
            We focus on sustainable search authority. We do not make false promises like "guaranteed #1 rankings in 24 hours". Instead, we focus on technical accuracy, relevant keyword targeting, speed, and continuous improvement.
          </p>
        </div>
      </section>

      <PreFooterCta />
    </>
  );
}

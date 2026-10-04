import type { Metadata } from "next";
import Link from "next/link";
import ServicesOverview from "@/components/home/ServicesOverview";
import PreFooterCta from "@/components/PreFooterCta";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | SEO, Marketing, Web & Software Development",
  description: "Explore Apex Tech Solution's core services: SEO, digital marketing, website development, custom software, and AI automation.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-800 border border-brand-700 text-brand-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
            End-to-End Digital Solutions
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Services Built for <span className="bg-gradient-to-r from-brand-300 via-blue-200 to-accent-cyan bg-clip-text text-transparent">Business Growth</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you need higher search engine visibility, modern web infrastructure, or custom software workflows, we deliver data-driven technology solutions.
          </p>
        </div>
      </div>

      <ServicesOverview />

      <PreFooterCta />
    </>
  );
}

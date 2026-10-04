import type { Metadata } from "next";
import Link from "next/link";
import SelectedWorkSection from "@/components/home/SelectedWorkSection";
import PreFooterCta from "@/components/PreFooterCta";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Selected Work Concepts & Case Studies | Apex Tech Solution",
  description: "Explore solution concepts and technical architecture models developed by Apex Tech Solution across website development, CRM tools, and SEO.",
};

export default function WorkPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-800 border border-brand-700 text-brand-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Portfolio Launching Soon
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Selected <span className="bg-gradient-to-r from-brand-300 via-blue-200 to-accent-cyan bg-clip-text text-transparent">Work & Frameworks</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Here are concept models and technical execution standards built by Apex Tech Solution. Real client case studies will be published here upon client clearance.
          </p>
        </div>
      </section>

      <SelectedWorkSection />

      <PreFooterCta />
    </>
  );
}

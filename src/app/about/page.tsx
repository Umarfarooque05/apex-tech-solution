import type { Metadata } from "next";
import Link from "next/link";
import PreFooterCta from "@/components/PreFooterCta";
import { Sparkles, Target, Layers, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Apex Tech Solution",
  description: "Learn about Apex Tech Solution—a technology and digital growth partner helping businesses grow with SEO, marketing, modern websites, custom software, and AI.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-800 border border-brand-700 text-brand-300 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-accent-cyan" /> About Apex Tech Solution
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Technology With a <span className="bg-gradient-to-r from-brand-300 via-blue-200 to-accent-cyan bg-clip-text text-transparent">Business Mindset</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Founded by a technology-focused team with a passion for helping businesses use digital tools more effectively, Apex Tech Solution bridges the gap between marketing growth and technical execution.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Mission & Approach */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                Why We Built Apex Tech Solution
              </h2>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Too many businesses struggle with fragmented vendors—hiring one agency for SEO, another freelancer for a website, and feeling lost when trying to build internal software or custom web apps.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                We combine SEO, digital marketing, website development, custom software, and custom web applications under one roof. Our goal is simple: deliver modern, sustainable digital solutions that help companies attract customers and operate efficiently.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                Core Guiding Principles
              </h3>
              <ul className="space-y-4 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">No Exaggerated Claims</strong>
                    <span>We focus on honest strategy and empirical execution rather than fake guarantees.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Scalable Code & Design</strong>
                    <span>Everything we build is designed to grow as your business expands.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900">Clear Communication</strong>
                    <span>Direct, regular updates without technical jargon or hidden complexities.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Business & Growth Placeholder Section */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-brand-950 text-white border border-slate-800 space-y-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono text-brand-400 uppercase tracking-widest">[ Company Milestones Placeholder ]</span>
              <h3 className="text-2xl font-bold">Building Long-Term Client Partnerships</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                As a fast-growing digital technology partner, we serve startups, local businesses, and established enterprises across India and international markets.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 transition-all"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 text-brand-600" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      <PreFooterCta />
    </>
  );
}

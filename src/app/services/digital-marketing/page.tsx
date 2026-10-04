import type { Metadata } from "next";
import Link from "next/link";
import PreFooterCta from "@/components/PreFooterCta";
import { TrendingUp, Target, Share2, Megaphone, BarChart, ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing & Lead Generation Services | Apex Tech Solution",
  description: "Attract and convert target customers through data-driven social media marketing, content marketing, paid ads, and conversion analytics.",
};

const marketingPillars = [
  {
    title: "Social Media Strategy",
    desc: "Build brand awareness and engage your target audience across platforms like LinkedIn, Instagram, and Facebook.",
    icon: Share2,
  },
  {
    title: "Paid Advertising (PPC)",
    desc: "Targeted ad campaigns on search engines and social platforms engineered to drive qualified business leads.",
    icon: Megaphone,
  },
  {
    title: "Content Marketing",
    desc: "Strategic content creation that positions your business as an industry authority and educates potential buyers.",
    icon: Target,
  },
  {
    title: "Lead Generation Strategy",
    desc: "Building lead funnels, landing page optimization, and clear call-to-actions to turn traffic into inquiries.",
    icon: TrendingUp,
  },
  {
    title: "Analytics & ROI Tracking",
    desc: "Clear measurement of website conversion rates, cost per acquisition, and key performance indicators.",
    icon: BarChart,
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <TrendingUp className="w-3.5 h-3.5" /> Data-Driven Growth
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Digital Marketing Designed to <span className="text-emerald-400">Attract & Convert</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We help growing companies build brand clarity, reach target decision-makers, and generate high-intent sales inquiries.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?service=digital-marketing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-white text-slate-900 hover:bg-slate-100 transition-all"
              >
                <span>Plan Your Strategy</span>
                <ArrowRight className="w-4 h-4 text-emerald-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketingPillars.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
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

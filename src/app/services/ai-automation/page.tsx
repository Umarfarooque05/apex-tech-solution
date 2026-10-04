import type { Metadata } from "next";
import Link from "next/link";
import PreFooterCta from "@/components/PreFooterCta";
import { Bot, Zap, FileText, Headphones, GitBranch, Shield, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Automation & Chatbot Solutions | Apex Tech Solution",
  description: "Streamline operations, automate lead responses, process documents, and deploy AI chatbots trained on your business data.",
};

const aiModules = [
  {
    title: "AI Customer Support Chatbots",
    desc: "Deploy 24/7 intelligent conversational agents trained specifically on your company's product documentation and FAQs.",
    icon: Headphones,
  },
  {
    title: "Lead Qualification Automation",
    desc: "Instantly capture, score, and route leads from forms and chat straight into your CRM or team messaging tools.",
    icon: Zap,
  },
  {
    title: "Document & Invoice Processing",
    desc: "Use AI to automatically extract key text, line items, and figures from PDFs, invoices, and contracts.",
    icon: FileText,
  },
  {
    title: "Custom AI Workflows",
    desc: "Connect your existing software tools (Zapier, Make, custom APIs) with AI intelligence to run routine tasks hands-free.",
    icon: GitBranch,
  },
  {
    title: "Automated Content & Email Drafting",
    desc: "Speed up customer communication with AI-assisted response drafting tailored to your brand tone.",
    icon: Bot,
  },
  {
    title: "Process Optimization Audits",
    desc: "We analyze your business operations to spot repetitive bottleneck tasks ripe for AI-driven automation.",
    icon: Shield,
  },
];

export default function AiAutomationPage() {
  return (
    <>
      <section className="bg-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Bot className="w-3.5 h-3.5" /> Intelligent Business Automation
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Work Smarter With <span className="text-cyan-400">Practical AI Automation</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              We build custom AI automation pipelines that handle repetitive customer communication, data extraction, and lead follow-ups—saving your team hours every week.
            </p>
            <div className="pt-2">
              <Link
                href="/contact?service=ai-automation"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold bg-white text-slate-900 hover:bg-slate-100 transition-all"
              >
                <span>Explore AI Automation</span>
                <ArrowRight className="w-4 h-4 text-cyan-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiModules.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="p-7 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-5">
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

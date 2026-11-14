import Link from "next/link";
import { Bot, Zap, MessageSquare, FileText, Headphones, GitBranch, ArrowRight, CheckCircle2 } from "lucide-react";

const aiCapabilities = [
  { title: "Respond to leads faster", desc: "Instant automated qualification and booking assistant.", icon: Zap },
  { title: "Automate repetitive tasks", desc: "Eliminate manual data entry and routine admin workflows.", icon: Bot },
  { title: "Organize information", desc: "Structured data extraction from invoices, emails, and forms.", icon: FileText },
  { title: "Generate business content", desc: "AI-assisted drafting for marketing emails and proposals.", icon: MessageSquare },
  { title: "Assist customer support", desc: "24/7 intelligent AI chatbots trained on business documentation.", icon: Headphones },
  { title: "Connect business workflows", desc: "Seamless integration between CRM, messaging apps, and email.", icon: GitBranch },
];

export default function AiAutomationSection() {
  return (
    <section className="py-20 lg:py-28 bg-transparent border-b border-slate-800/40 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Bot className="w-3.5 h-3.5 text-cyan-400" />
            Artificial Intelligence Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Work Smarter With <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">AI Automation</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed">
            Practical AI tools designed to streamline daily operations, reduce manual effort, and improve response times for growing companies.
          </p>
        </div>

        {/* AI Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {aiCapabilities.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-950/40 backdrop-blur-[3px] border border-slate-800/60 hover:bg-slate-900/40 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/40 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Section CTA */}
        <div className="text-center">
          <Link
            href="/services/ai-automation"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-600 via-blue-600 to-accent-cyan hover:from-brand-500 hover:to-cyan-400 shadow-lg shadow-cyan-950/40 transition-all hover:scale-105 active:scale-95"
          >
            <span>Explore AI Automation</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </section>
  );
}

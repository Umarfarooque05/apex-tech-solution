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
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-700 text-xs font-bold uppercase tracking-wider">
            <Bot className="w-3.5 h-3.5 text-cyan-600" />
            Artificial Intelligence Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Work Smarter With <span className="text-brand-600">AI Automation</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-normal leading-relaxed">
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
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/70 hover:bg-white hover:shadow-md transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
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
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white bg-brand-900 hover:bg-brand-800 shadow-md transition-all"
          >
            <span>Explore AI Automation</span>
            <ArrowRight className="w-4 h-4 text-accent-cyan" />
          </Link>
        </div>

      </div>
    </section>
  );
}

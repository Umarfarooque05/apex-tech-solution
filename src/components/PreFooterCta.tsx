import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export default function PreFooterCta() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-brand-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/15 rounded-full glow-blur pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent-cyan/10 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-800/80 border border-brand-700/60 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Ready to grow?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight">
          Have a Business Goal in Mind? <span className="bg-gradient-to-r from-brand-300 via-blue-200 to-accent-cyan bg-clip-text text-transparent">Let's Build It.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Tell us what you're trying to achieve. We'll help you identify the right digital or technology solution for your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-900 bg-white hover:bg-slate-100 shadow-xl transition-all hover:scale-105 active:scale-100"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-5 h-5 text-brand-600" />
          </Link>

          <Link
            href="/contact#form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 transition-all hover:border-slate-600"
          >
            <MessageCircle className="w-5 h-5 text-brand-400" />
            <span>Start a Conversation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight, Sparkles, MessageCircle } from "lucide-react";

export default function PreFooterCta() {
  return (
    <section className="py-20 bg-transparent text-white border-t border-slate-800/40 relative overflow-hidden z-10">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Ready to grow?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 max-w-3xl mx-auto leading-tight">
          Have a Business Goal in Mind? <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Let&apos;s Build It.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Tell us what you&apos;re trying to achieve. We&apos;ll help you identify the right digital or technology solution for your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-600 via-blue-600 to-accent-cyan hover:from-brand-500 hover:to-cyan-400 shadow-xl shadow-cyan-950/40 transition-all hover:scale-105 active:scale-95"
          >
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </Link>

          <Link
            href="/contact#form"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-slate-200 hover:text-white bg-slate-900/60 hover:bg-slate-850 border border-slate-700/80 transition-all hover:border-cyan-500/40 backdrop-blur-sm"
          >
            <MessageCircle className="w-5 h-5 text-cyan-400" />
            <span>Start a Conversation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

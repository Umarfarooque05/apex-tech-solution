"use client";

import Link from "next/link";
import { MessageSquare, Calendar } from "lucide-react";

export default function MobileStickyCta() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919867333477";
  const whatsappMessage = encodeURIComponent("Hello Apex Tech Solution! I would like to enquire about your services.");

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070B19]/95 backdrop-blur-xl border-t border-slate-800 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-colors shadow-md shadow-emerald-950/40"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>

        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-gradient-to-r from-brand-600 to-accent-cyan hover:from-brand-500 hover:to-cyan-400 text-white font-semibold text-xs transition-colors shadow-md shadow-cyan-950/40"
        >
          <Calendar className="w-4 h-4" />
          <span>Free Consultation</span>
        </Link>
      </div>
    </div>
  );
}

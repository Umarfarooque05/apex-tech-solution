"use client";

import Link from "next/link";
import { MessageSquare, Calendar } from "lucide-react";

export default function MobileStickyCta() {
  const whatsappNumber = "919000000000"; // Placeholder phone number ready for backend update
  const whatsappMessage = encodeURIComponent("Hello Apex Tech Solution! I would like to enquire about your services.");

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-slate-200 p-3 shadow-2xl">
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp Us</span>
        </a>

        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-brand-900 hover:bg-brand-800 text-white font-semibold text-xs transition-colors shadow-sm"
        >
          <Calendar className="w-4 h-4" />
          <span>Free Consultation</span>
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { Sparkles, Globe, Mail, Phone, MapPin, Linkedin, Instagram, Facebook, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070B19]/80 backdrop-blur-md text-slate-300 pt-16 pb-24 md:pb-12 border-t border-slate-800/60 relative overflow-hidden z-10">
      {/* Background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-500/10 rounded-full glow-blur pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-accent-cyan/5 rounded-full glow-blur pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-accent-cyan flex items-center justify-center text-white shadow-md shadow-brand-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white tracking-tight">
                  Apex <span className="text-brand-400">Tech</span>
                </span>
                <span className="text-[10px] font-semibold tracking-widest text-slate-400 uppercase">
                  Solution
                </span>
              </div>
            </Link>

            <p className="text-sm font-semibold text-brand-400">
              Digital Growth. Smart Technology.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We help businesses grow online through SEO, digital marketing, high-performance websites, custom software, and AI-powered solutions.
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <MapPin className="w-4 h-4 text-brand-400" />
              <span>Serving clients across India & Internationally</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/apextechsolution"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/apextechsolution"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={process.env.NEXT_PUBLIC_FACEBOOK_URL || "https://facebook.com/apextechsolution"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/seo" className="text-slate-400 hover:text-white transition-colors">
                  SEO & Local SEO
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing" className="text-slate-400 hover:text-white transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/web-development" className="text-slate-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/software-development" className="text-slate-400 hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="text-slate-400 hover:text-white transition-colors">
                  AI Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/work" className="text-slate-400 hover:text-white transition-colors">
                  Selected Work
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Quick Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Legal & Info</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="text-slate-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-brand-400" />
                <a
                  href={`tel:${(process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 98673 33477").replace(/\s+/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 98673 33477"}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                <a href="mailto:info@apextechsolution.in" className="truncate hover:text-white transition-colors">
                  info@apextechsolution.in
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-brand-400" />
                <span>apextechsolution.in</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Apex Tech Solution. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

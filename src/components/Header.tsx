"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  TrendingUp, 
  Code, 
  Cpu, 
  Bot, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from "lucide-react";

const servicesList = [
  { name: "SEO & Local SEO", href: "/services/seo", icon: Search, desc: "Search visibility & organic growth" },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: TrendingUp, desc: "Lead generation & paid strategy" },
  { name: "Website Development", href: "/services/web-development", icon: Code, desc: "High-performance responsive sites" },
  { name: "Software Development", href: "/services/software-development", icon: Cpu, desc: "Custom web apps & CRM systems" },
  { name: "AI Automation", href: "/services/ai-automation", icon: Bot, desc: "Smart workflows & AI chatbots" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
          : "bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg p-1"
            aria-label="Apex Tech Solution Homepage"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-900 via-brand-600 to-accent-cyan flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-200">
              <Sparkles className="w-5.5 h-5.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-slate-900 leading-tight tracking-tight flex items-center gap-1">
                Apex <span className="text-brand-500 font-extrabold">Tech</span>
              </span>
              <span className="text-[10px] font-semibold tracking-wider text-slate-500 uppercase">
                Solution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/" 
                  ? "text-brand-600 bg-brand-50" 
                  : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            {/* Services Mega Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <Link
                href="/services"
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1.5 ${
                  pathname.startsWith("/services")
                    ? "text-brand-600 bg-brand-50"
                    : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
                }`}
              >
                Services
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`} />
              </Link>

              {servicesDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 overflow-hidden ring-1 ring-black/5">
                    <div className="px-3 py-2 border-b border-slate-100 mb-1 flex items-center justify-between">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Our Solutions</span>
                      <Link href="/services" className="text-xs font-semibold text-brand-600 hover:underline flex items-center gap-1">
                        All Services <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                    {servicesList.map((service) => {
                      const Icon = service.icon;
                      const isActive = pathname === service.href;
                      return (
                        <Link
                          key={service.href}
                          href={service.href}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                            isActive 
                              ? "bg-brand-50 text-brand-700" 
                              : "hover:bg-slate-50 text-slate-800"
                          }`}
                        >
                          <div className={`p-2 rounded-lg mt-0.5 ${isActive ? "bg-brand-500 text-white" : "bg-slate-100 text-slate-600"}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold leading-snug">{service.name}</div>
                            <div className="text-xs text-slate-500 leading-normal">{service.desc}</div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/about"
                  ? "text-brand-600 bg-brand-50"
                  : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            <Link
              href="/work"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/work"
                  ? "text-brand-600 bg-brand-50"
                  : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              }`}
            >
              Work
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                pathname === "/contact"
                  ? "text-brand-600 bg-brand-50"
                  : "text-slate-700 hover:text-brand-600 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-brand-900 hover:bg-brand-800 shadow-md shadow-brand-900/10 transition-all hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
            >
              Get a Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-xl text-slate-700 hover:text-brand-600 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl p-5 z-40 max-h-[calc(100vh-70px)] overflow-y-auto animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-2">
            <Link
              href="/"
              className={`px-4 py-3 rounded-xl font-semibold text-sm ${
                pathname === "/" ? "bg-brand-50 text-brand-600" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <div className="py-1">
              <div className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                Services
              </div>
              <div className="grid gap-1 pl-2">
                <Link
                  href="/services"
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium ${
                    pathname === "/services" ? "bg-brand-50 text-brand-600" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  All Services Overview
                </Link>
                {servicesList.map((service) => {
                  const Icon = service.icon;
                  return (
                    <Link
                      key={service.href}
                      href={service.href}
                      className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium ${
                        pathname === service.href ? "bg-brand-50 text-brand-600" : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <Icon className="w-4 h-4 text-brand-500" />
                      {service.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link
              href="/about"
              className={`px-4 py-3 rounded-xl font-semibold text-sm ${
                pathname === "/about" ? "bg-brand-50 text-brand-600" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              About
            </Link>

            <Link
              href="/work"
              className={`px-4 py-3 rounded-xl font-semibold text-sm ${
                pathname === "/work" ? "bg-brand-50 text-brand-600" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Work
            </Link>

            <Link
              href="/contact"
              className={`px-4 py-3 rounded-xl font-semibold text-sm ${
                pathname === "/contact" ? "bg-brand-50 text-brand-600" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Contact
            </Link>

            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link
                href="/contact"
                className="w-full py-3 px-4 rounded-xl text-center text-sm font-bold text-white bg-brand-600 hover:bg-brand-700 shadow-md shadow-brand-500/20"
              >
                Get a Free Consultation
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

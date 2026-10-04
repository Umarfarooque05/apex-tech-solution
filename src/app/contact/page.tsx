"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    service: "SEO",
    budget: "₹25,000 – ₹50,000",
    details: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // TODO: Connect this form to your backend API route, EmailJS, Formspree, or CRM.
    // Example API submission:
    // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })

    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  const whatsappNumber = "919000000000"; // TODO: Replace placeholder with your real WhatsApp phone number (with country code, no +)
  const whatsappMsg = encodeURIComponent(
    `Hi Apex Tech Solution! I am interested in ${formData.service || "your services"} for my business.`
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Your <span className="text-brand-600">Digital Strategy</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg">
            Have a project in mind or need expert advice? Fill out the form below or message us directly via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="form">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Send Us an Enquiry
            </h2>

            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold">Enquiry Sent Successfully!</h3>
                <p className="text-sm text-emerald-700 max-w-md mx-auto">
                  Thank you for reaching out to Apex Tech Solution. Our team will review your requirements and respond within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setStatus("idle");
                    setFormData({
                      name: "",
                      businessName: "",
                      email: "",
                      phone: "",
                      service: "SEO",
                      budget: "₹25,000 – ₹50,000",
                      details: "",
                    });
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Business / Company Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Enterprises"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Service Required <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    >
                      <option value="SEO">SEO & Local SEO</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Software Development">Software Development</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="Other">Other Requirement</option>
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Budget Range <span className="text-rose-500">*</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                    >
                      <option value="Under ₹10,000">Under ₹10,000</option>
                      <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
                      <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                      <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                      <option value="₹1,00,000+">₹1,00,000+</option>
                      <option value="Not Sure">Not Sure / Open to Suggestion</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Project Details & Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business goals, current website, or target outcome..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 px-6 rounded-xl font-bold text-white bg-brand-900 hover:bg-brand-800 shadow-lg shadow-brand-900/15 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <span>Sending Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4 text-accent-cyan" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards & Direct WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Info */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-800 text-brand-300 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase block">Business Email</span>
                    <a href="mailto:info@apextechsolution.in" className="text-sm font-bold text-white hover:text-brand-300 transition-colors">
                      info@apextechsolution.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-800 text-brand-300 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase block">Phone Support</span>
                    <span className="text-sm font-bold text-white">
                      +91 XXXXX XXXXX <span className="text-xs font-normal text-slate-400">(Placeholder)</span>
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-brand-800 text-brand-300 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase block">Headquarters</span>
                    <span className="text-sm font-bold text-white">
                      India <span className="text-xs font-normal text-slate-400">(Serving Domestic & Global Clients)</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp Quick CTA Box */}
              <div className="pt-4 border-t border-slate-800">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Chat directly on WhatsApp</span>
                </a>
                <span className="text-[11px] text-slate-400 text-center block mt-2">
                  Instant response during business hours
                </span>
              </div>
            </div>

            {/* Response Time Guarantee */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" /> Fast Proposal Turnaround
              </span>
              <p>We review every proposal request within 24 hours to provide clear timeline estimates and fixed-scope options.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

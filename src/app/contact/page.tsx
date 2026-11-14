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
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again or reach out via WhatsApp."
      );
    }
  };

  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919867333477";
  const contactPhone = process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91 98673 33477";
  const whatsappMsg = encodeURIComponent(
    `Hi Apex Tech Solution! I am interested in ${formData.service || "your services"} for my business.`
  );

  return (
    <div className="bg-transparent min-h-screen py-12 lg:py-20 text-slate-100 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Your <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">Digital Strategy</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg">
            Have a project in mind or need expert advice? Fill out the form below or message us directly via WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="form">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-10 border border-slate-800/80 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              Send Us an Enquiry
            </h2>

            {status === "success" ? (
              <div className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-900/60 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white">Enquiry Sent Successfully!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
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
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-sm flex items-start gap-3 animate-in fade-in">
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-rose-300">Submission failed</p>
                      <p className="text-xs text-rose-400 mt-0.5">{errorMessage}</p>
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  {/* Business Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Business / Company Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Enterprises"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder:text-slate-600"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Phone Number <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Service Required */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Service Required <span className="text-rose-400">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                    >
                      <option value="SEO" className="bg-slate-950 text-white">SEO &amp; Local SEO</option>
                      <option value="Digital Marketing" className="bg-slate-950 text-white">Digital Marketing</option>
                      <option value="Website Development" className="bg-slate-950 text-white">Website Development</option>
                      <option value="Software Development" className="bg-slate-950 text-white">Software Development</option>
                      <option value="Custom Web Applications" className="bg-slate-950 text-white">Custom Web Applications</option>
                      <option value="Other" className="bg-slate-950 text-white">Other Requirement</option>
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                      Budget Range <span className="text-rose-400">*</span>
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"
                    >
                      <option value="Under ₹10,000" className="bg-slate-950 text-white">Under ₹10,000</option>
                      <option value="₹10,000 – ₹25,000" className="bg-slate-950 text-white">₹10,000 – ₹25,000</option>
                      <option value="₹25,000 – ₹50,000" className="bg-slate-950 text-white">₹25,000 – ₹50,000</option>
                      <option value="₹50,000 – ₹1,00,000" className="bg-slate-950 text-white">₹50,000 – ₹1,00,000</option>
                      <option value="₹1,00,000+" className="bg-slate-950 text-white">₹1,00,000+</option>
                      <option value="Not Sure" className="bg-slate-950 text-white">Not Sure / Open to Suggestion</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                    Project Details &amp; Goals
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business goals, current website, or target outcome..."
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-950/80 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all placeholder:text-slate-600"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-brand-600 via-blue-600 to-accent-cyan hover:from-brand-500 hover:to-cyan-400 shadow-xl shadow-cyan-950/50 transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
                >
                  {status === "submitting" ? (
                    <span>Sending Enquiry...</span>
                  ) : (
                    <>
                      <span>Send Enquiry</span>
                      <Send className="w-4 h-4 text-white" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards & Direct WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Info */}
            <div className="bg-slate-900/80 backdrop-blur-xl text-white rounded-3xl p-8 border border-slate-800/80 shadow-2xl space-y-6">
              <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
                Direct Contact Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700/60 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase block">Business Email</span>
                    <a href="mailto:info@apextechsolution.in" className="text-sm font-bold text-white hover:text-cyan-300 transition-colors">
                      info@apextechsolution.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700/60 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase block">Phone Support</span>
                    <a
                      href={`tel:${contactPhone.replace(/\s+/g, "")}`}
                      className="text-sm font-bold text-white hover:text-cyan-300 transition-colors"
                    >
                      {contactPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-slate-800 text-cyan-400 border border-slate-700/60 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-semibold uppercase block">Headquarters</span>
                    <span className="text-sm font-bold text-white">
                      India <span className="text-xs font-normal text-slate-400">(Serving Domestic &amp; Global Clients)</span>
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
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40"
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
            <div className="p-6 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 text-xs text-slate-300 space-y-2">
              <span className="font-bold text-white flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Fast Proposal Turnaround
              </span>
              <p className="text-slate-400">We review every proposal request within 24 hours to provide clear timeline estimates and fixed-scope options.</p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

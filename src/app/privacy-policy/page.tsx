import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Apex Tech Solution",
  description: "Privacy Policy for Apex Tech Solution detailing data collection, usage, user rights, and privacy practices.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-800">
        
        <div className="border-b border-slate-200 pb-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-xs text-slate-500 font-mono">Last Updated: January 2026 | Apex Tech Solution (apextechsolution.in)</p>
        </div>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            At Apex Tech Solution, we respect your privacy. When you contact us via our website form, email, or WhatsApp, we may collect personal details including your name, business name, email address, phone number, and project details.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            The information collected is used strictly to respond to business inquiries, provide project quotes, deliver digital services, and communicate project updates. We do not sell or trade your personal information to third-party marketers.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">3. Data Security & Storage</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            We implement industry-standard encryption, SSL protocols, and access controls to ensure your project information remains confidential and secure.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">4. Contact Us</h2>
          <p className="text-sm leading-relaxed text-slate-600">
            For questions regarding this Privacy Policy or your data, please contact us at <a href="mailto:info@apextechsolution.in" className="text-brand-600 underline font-semibold">info@apextechsolution.in</a>.
          </p>
        </section>

      </div>
    </div>
  );
}
